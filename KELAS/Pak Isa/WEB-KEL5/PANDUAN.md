# Panduan Web Sederhana (React JS + Laravel API)

Saya telah membuatkan struktur web untuk tugas presentasi Anda. Karena ada kendala dalam menginstal PHP dan Composer secara otomatis di sistem Windows Anda, saya membaginya menjadi dua bagian:

## 1. Frontend (React JS) - Siap Dijalankan!
Frontend ini sudah diatur dengan desain UI premium (Vanilla CSS), animasi halus, dan *loading states*.

**Cara Menjalankan:**
1. Buka Command Prompt atau PowerShell.
2. Masuk ke folder frontend: `cd C:\Users\lvrm\Documents\Tugas Presentasi\frontend`
3. Jalankan server: `npm run dev`
4. Buka URL yang muncul (biasanya `http://localhost:5173`) di browser Anda.

*Catatan: Saat API Laravel belum berjalan, React akan otomatis menampilkan data "fallback" (dummy data) setelah 1 detik, sehingga Anda tetap bisa mempresentasikannya dengan baik!*

## 2. Backend (Laravel API) - Kode Disiapkan
Folder `backend` saat ini berisi kode inti untuk API Anda (`routes/api.php` dan `ItemController.php`).

**Langkah selanjutnya untuk mengaktifkan Laravel:**
Karena Laravel membutuhkan PHP dan Composer, Anda harus menginstalnya terlebih dahulu (Saran saya: gunakan **Laragon** atau **XAMPP**).

Setelah Anda menginstal Composer dan PHP:
1. Buka terminal di `C:\Users\lvrm\Documents\Tugas Presentasi`
2. Hapus folder `backend` sementara.
3. Jalankan perintah: `composer create-project laravel/laravel backend`
4. Salin file `api.php` dan `ItemController.php` yang sudah saya siapkan ke dalam project Laravel baru Anda.
5. Masuk ke folder backend dan jalankan server: `php artisan serve`

Semoga sukses untuk Tugas Presentasinya!
