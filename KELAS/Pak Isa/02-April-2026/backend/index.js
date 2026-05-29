const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const path = require('path');

const app = express();
const port = 5000;
const JWT_SECRET = 'zeaa_gravity_secret_key_12345';

// Middleware
app.use(cors());
app.use(express.json());

let db;
let isSQLite = false;

// Langkah 1: Mencoba koneksi ke MySQL terlebih dahulu
const initConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
});

// Tangani event error agar tidak merusak proses Node
initConnection.on('error', (err) => {
  console.warn('⚠️ Event Error MySQL Terdeteksi (Abaikan jika menggunakan SQLite):', err.message);
});

initConnection.query('CREATE DATABASE IF NOT EXISTS zeaa_portfolio', (err) => {
  if (err) {
    console.warn('⚠️ Gagal konek/buat database MySQL, menggunakan SQLite sebagai fallback:', err.message);
    try {
      initConnection.end();
    } catch (e) {}
    useSQLiteFallback();
  } else {
    console.log('✅ Database MySQL "zeaa_portfolio" siap atau sudah ada');
    try {
      initConnection.end();
    } catch (e) {}
    connectMySQL();
  }
});

// Fungsi untuk koneksi ke MySQL
function connectMySQL() {
  const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'zeaa_portfolio',
  });

  connection.on('error', (err) => {
    console.warn('⚠️ Event Error Koneksi MySQL Terdeteksi:', err.message);
  });

  connection.connect((err) => {
    if (err) {
      console.warn('⚠️ Gagal terhubung ke MySQL "zeaa_portfolio", menggunakan SQLite sebagai fallback:', err.message);
      useSQLiteFallback();
      return;
    }
    console.log('✅ Terhubung ke MySQL "zeaa_portfolio"');
    db = connection;
    createTablesAndStart();
  });
}

// Fungsi Fallback untuk menggunakan SQLite
function useSQLiteFallback() {
  const dbPath = path.join(__dirname, 'contacts.db');
  const sqlite = new sqlite3.Database(dbPath, (err) => {
    if (err) {
      console.error('❌ Gagal inisialisasi database SQLite:', err.message);
      process.exit(1);
    }
    console.log('✅ Terhubung ke database SQLite:', dbPath);
    isSQLite = true;

    // Membuat wrapper interface jalankan query agar compatible dengan query MySQL
    db = {
      query: (sql, params, callback) => {
        if (typeof params === 'function') {
          callback = params;
          params = [];
        }

        // Translasi query tipe AUTO_INCREMENT agar compatible dengan SQLite
        let sqliteSql = sql;
        if (sql.toUpperCase().includes('AUTO_INCREMENT')) {
          sqliteSql = sql.replace(/INT AUTO_INCREMENT PRIMARY KEY/gi, 'INTEGER PRIMARY KEY AUTOINCREMENT');
        }

        const isSelect = sqliteSql.trim().toUpperCase().startsWith('SELECT');
        if (isSelect) {
          sqlite.all(sqliteSql, params, (err, rows) => {
            if (callback) callback(err, rows);
          });
        } else {
          sqlite.run(sqliteSql, params, function (err) {
            const result = {
              insertId: this ? this.lastID : null,
              affectedRows: this ? this.changes : null
            };
            if (callback) callback(err, result);
          });
        }
      }
    };

    createTablesAndStart();
  });
}

// Fungsi untuk membuat tabel (contacts & users) dan menjalankan server
function createTablesAndStart() {
  // Buat tabel contacts
  const createContactsTable = `
    CREATE TABLE IF NOT EXISTS contacts (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `;
  db.query(createContactsTable, (err) => {
    if (err) {
      console.error('❌ Gagal buat tabel contacts:', err.message);
      process.exit(1);
    }
    console.log('✅ Tabel "contacts" siap');

    // Buat tabel users untuk admin
    const createUsersTable = `
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    db.query(createUsersTable, (err) => {
      if (err) {
        console.error('❌ Gagal buat tabel users:', err.message);
        process.exit(1);
      }
      console.log('✅ Tabel "users" siap');

      // Pastikan admin default selalu terdaftar dengan password 'admin123'
      const adminEmail = 'admin@gmail.com';
      const adminPassword = 'admin123';
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(adminPassword, salt);

      db.query('SELECT * FROM users WHERE email = ?', [adminEmail], (err, rows) => {
        if (err) {
          console.error('❌ Gagal cek admin default:', err.message);
        } else if (!rows || rows.length === 0) {
          // Belum ada, mari masukkan
          db.query('INSERT INTO users (email, password) VALUES (?, ?)', [adminEmail, hashedPassword], (err) => {
            if (err) {
              console.error('❌ Gagal memasukkan admin default:', err.message);
            } else {
              console.log('👥 Admin default dimasukkan: admin@gmail.com / admin123');
            }
          });
        } else {
          // Sudah ada, update passwordnya agar dipastikan 'admin123' jika bermasalah
          db.query('UPDATE users SET password = ? WHERE email = ?', [hashedPassword, adminEmail], (err) => {
            if (err) {
              console.error('❌ Gagal update password admin default:', err.message);
            } else {
              console.log('👥 Admin default dikonfigurasi ulang: admin@gmail.com / admin123');
            }
          });
        }
      });

      // Jalankan server
      startServer();
    });
  });
}

function startServer() {
  // Route: POST /api/contact — simpan pesan baru
  app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Semua field (nama, email, pesan) wajib diisi!'
      });
    }

    const sql = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
    db.query(sql, [name, email, message], (err, result) => {
      if (err) {
        console.error('❌ Gagal insert:', err.message);
        return res.status(500).json({
          success: false,
          message: 'Gagal menyimpan pesan ke database.'
        });
      }

      console.log(`✅ Pesan baru dari "${name}" disimpan (ID: ${result.insertId})`);
      res.status(201).json({
        success: true,
        message: 'Pesan berhasil dikirim dan disimpan!',
        data: { id: result.insertId, name, email, message }
      });
    });
  });

  // Middleware Autentikasi JWT
  const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Format: "Bearer <token>"

    if (!token) {
      return res.status(401).json({ success: false, message: 'Akses ditolak. Token tidak ditemukan.' });
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({ success: false, message: 'Token tidak valid atau kedaluwarsa.' });
      }
      req.user = decoded;
      next();
    });
  };

  // Route: POST /api/auth/register — Registrasi user baru
  app.post('/api/auth/register', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email dan password wajib diisi!'
      });
    }

    // Cek apakah email sudah terdaftar
    db.query('SELECT * FROM users WHERE email = ?', [email], (err, rows) => {
      if (err) {
        console.error('❌ Gagal cek email saat registrasi:', err.message);
        return res.status(500).json({ success: false, message: 'Terjadi kesalahan server.' });
      }

      if (rows && rows.length > 0) {
        return res.status(400).json({
          success: false,
          message: 'Email sudah terdaftar! Silakan gunakan email lain.'
        });
      }

      // Hash password
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(password, salt);

      // Simpan user baru
      db.query('INSERT INTO users (email, password) VALUES (?, ?)', [email, hashedPassword], (err, result) => {
        if (err) {
          console.error('❌ Gagal mendaftarkan user baru:', err.message);
          return res.status(500).json({ success: false, message: 'Gagal mendaftarkan akun baru.' });
        }

        const newUserId = result.insertId;

        // Generate JWT token agar user otomatis login setelah mendaftar
        const token = jwt.sign(
          { id: newUserId, email: email },
          JWT_SECRET,
          { expiresIn: '24h' }
        );

        res.status(201).json({
          success: true,
          message: 'Registrasi berhasil!',
          token,
          user: { id: newUserId, email: email }
        });
      });
    });
  });

  // Route: POST /api/auth/login — Login admin
  app.post('/api/auth/login', (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email dan password wajib diisi!'
      });
    }

    const sql = 'SELECT * FROM users WHERE email = ?';
    db.query(sql, [email], (err, rows) => {
      if (err) {
        console.error('❌ Gagal login query:', err.message);
        return res.status(500).json({ success: false, message: 'Terjadi kesalahan server.' });
      }

      if (!rows || rows.length === 0) {
        return res.status(401).json({ success: false, message: 'Email atau password salah!' });
      }

      const user = rows[0];
      const isPasswordValid = bcrypt.compareSync(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ success: false, message: 'Email atau password salah!' });
      }

      // Generate JWT
      const token = jwt.sign(
        { id: user.id, email: user.email },
        JWT_SECRET,
        { expiresIn: '24h' }
      );

      res.status(200).json({
        success: true,
        message: 'Login berhasil!',
        token,
        user: { id: user.id, email: user.email }
      });
    });
  });

  // Route: GET /api/contact — lihat semua pesan (dilindungi JWT)
  app.get('/api/contact', authenticateToken, (req, res) => {
    db.query('SELECT * FROM contacts ORDER BY created_at DESC', (err, rows) => {
      if (err) {
        return res.status(500).json({ success: false, error: err.message });
      }
      res.json({ success: true, total: rows.length, data: rows });
    });
  });

  // Route: DELETE /api/contact/:id — hapus pesan tertentu (dilindungi JWT)
  app.delete('/api/contact/:id', authenticateToken, (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM contacts WHERE id = ?', [id], (err, result) => {
      if (err) {
        console.error('❌ Gagal hapus:', err.message);
        return res.status(500).json({ success: false, message: 'Gagal menghapus pesan.' });
      }
      res.json({ success: true, message: 'Pesan berhasil dihapus.' });
    });
  });

  app.listen(port, () => {
    console.log(`🚀 Backend siap di http://localhost:${port}`);
    console.log(`🔑 Login API: http://localhost:${port}/api/auth/login`);
  });
}
