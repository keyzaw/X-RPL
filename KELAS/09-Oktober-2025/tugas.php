<?php 

    $menu = ["Profil", "Visi", "Misi", "Alamat", "Kontak", "Jadwal", "Kegiatan"];

    $judul = "SMP NEGERI 2 SIDOARJO";

    $img = "img/spendajaya.jpeg";

    $profil = "SMP Negeri 2 Sidoarjo merupakan salah satu Sekolah Menengah Pertama Negeri yang ada di Kabupaten Sidoarjo, Provinsi Jawa Timur, Indonesia. Sekolah ini merupakan salah satu sekolah favorit di Kota Sidoarjo. Masa pendidikan sekolah ini ditempuh dalam waktu tiga tahun pembelajaran. Sekolah ini identik dengan warna biru. Sekolah ini mengalami perubahan besar-besaran. Dulu, sekolah ini beralamat di Jalan Sultan Agung No. 17, Sidoarjo, berdampingan dengan PU Bina Marga, Kantor Pusat Pelayanan, Pengaduan Masyarakat (P3M), dan Kantor Sekretariat Pemkab Sidoarjo. Kemudian, gedungnya berpindah tempat di Jalan Lingkar Barat. Dikarenakan gedung yang lama merupakan milik Pemerintah. Gedung barunya sangat megah dan luas. Konon, pembangunannya mencapai 10,2 Miliar rupiah. Sekolah ini sangat strategis. Berada di pertengahan kota dengan prasarana yang memadai. Jalan Lingkar Barat sendiri pun menjadi jalur utama dari Sidoarjo wilayah barat menuju Kota Surabaya.SMP Negeri 2 Sidoarjo dikenal juga dengan akronim Spendasi. Sekolah ini memiliki prestasi bagus di bidang olahraga. Terutama, olahraga Futsal dan Basket. Maka dari itu, SMP Negeri 2 Sidoarjo banyak mengeluarkan wakil-wakilnya dalam Turnamen olahraga.";
   
    $visi = "
                <ul>
                    <li>Berkarakter: Memiliki karakter yang kuat dan mulia.</li>
                    <li>Unggul: Unggul dalam prestasi akademik maupun non-akademik.</li>
                    <li>Berwawasan Global: Memiliki pandangan luas terhadap dunia dan mampu bersaing secara global.</li>
                    <li>Berbudaya Lingkungan: Peduli terhadap kelestarian lingkungan dan mampu mengintegrasikan lingkungan dalam kegiatan pembelajaran.</li>
                </ul>
            ";
   
    $misi = "
                <ul>
                    <li>Membentuk peserta didik yang beriman, bertakwa, berakhlak mulia, dan memiliki jiwa toleransi serta menghargai keberagaman.</li>
                    <li>Menciptakan suasana belajar yang aman, nyaman, kondusif, dan menyenangkan.</li>
                    <li>Mengembangkan potensi diri siswa dalam bidang akademik dan non-akademik melalui kegiatan belajar yang berorientasi pada peserta didik.</li>
                    <li>Menanamkan nilai-nilai luhur bangsa seperti kejujuran, kedisiplinan, semangat berbagi, dan gotong royong.</li>
                    <li>Mengintegrasikan kecakapan abad 21, literasi, dan HOTS dalam kegiatan pembelajaran.</li>
                    <li>Mendorong semangat wirausaha untuk meningkatkan kualitas hidup peserta didik.</li>
                    <li>Menciptakan lingkungan sekolah yang bersih dan nyaman. </li>
                </ul>
            ";
    
    $alamat = "Jl. Raya Ponti, RT.19/RW.6, Wismasarinadi, Magersari, Kec. Sidoarjo, Kabupaten Sidoarjo, Jawa Timur 61211";

    $kontak = "Telp: (031) 8941132 | Email: sdasmpn2@gmail.com";

    $jadwal =   "
                    <ul>
                        <li>Senin : 07:00 - 14:00</li>
                        <li>Selasa : 07:00 - 14:00</li>
                        <li>Rabu : 07:00 - 14:00</li>
                        <li>Kamis : 07:00 - 14:00</li>
                        <li>Jum'at : 07:00 - 11:00</li>
                        <li>Sabtu : 07:00 - 12:00</li>
                    </ul>
                ";

    $kegiatan = "Kegiatan di SMP Negeri 2 Sidoarjo mencakup kegiatan ekstrakurikuler beragam seperti olahraga (sepak bola, basket, futsal), seni (gamelan, band, tari), dan keagamaan (banjari, qiraah). Selain itu, terdapat kegiatan rutin seperti senam bersama, salat berjemaah, upacara bendera, dan program mingguan seperti Jumat Bersih serta program tahunan seperti study tour dan kegiatan khusus saat Ramadan (Pondok Ramadan).";
    

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SMP NEGERI 2 SIDOARJO</title>
    
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            scroll-behavior: smooth;
        }

        body {
            font-family: 'Poppins', sans-serif;
            background-color: #0c0455ff;
            color: #180202ff;
            line-height: 1.6;
        }

        #header {
            background-color: #130735ff;
            color: white;
            padding: 20px;
        }

        .header-container {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 25px;
            max-width: 1100px;
            margin: 0 auto;
        }

        .logo {
            height: 150px;
            width: auto;
            flex-shrink: 0;
        }

        .header-container h1 {
            font-size: 32px;
            font-weight: bold;
        }

        nav {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;
        }

        nav a {
           color: #a50a05ff;
            font-weight: 600;
            text-decoration: none;
            padding: 10px 15px;
            border-radius: 5px;
            background-color: transparent;
        }

        .container {
            padding: 40px 20px;
            max-width: 1100px;
            margin: auto;
        }

        .section {
            background-color: white;
            margin-bottom: 30px;
            padding: 25px;
            border-radius: 10px;
        }

        .section-1 {
            background-color: white;
            margin-bottom: 20px;
            padding: 15px;
            border-radius: 10px;
        }

        .section h2 {
            color: #a50a05ff;
            margin-bottom: 15px;
            text-transform: uppercase;
        }

        footer {
            background-color: #130735ff;
            color: white;
            text-align: center;
            padding: 20px;
            font-size: 14px;
        }

        @media (max-width: 768px) {
            .header-container {
                flex-direction: column;
                text-align: center;
            }

            .logo {
                height: 100px;
            }

            .header-container h1 {
                font-size: 22px;
            }
        }

    </style>
</head>

<body>

    <header id="header">
        <div class="header-container">
            <img src="<?= $img; ?>" alt="Logo SMP NEGERI 2 SIDOARJO" class="logo">
             <h1>SMP NEGERI 2 SIDOARJO</h1>
        </div>
    </header>

    <nav class="container section-1">
        <a href="#Profil"><?= $menu[0]; ?></a>
        <a href="#Visi"><?= $menu[1]; ?></a>
        <a href="#Misi"><?= $menu[2]; ?></a>
        <a href="#Alamat"><?= $menu[3]; ?></a>
        <a href="#Kontak"><?= $menu[4]; ?></a>
        <a href="#Jadwal"><?= $menu[5]; ?></a>
        <a href="#Kegiatan"><?= $menu[6]; ?></a>
    </nav>

    <div class="container">
        <div class="section" id="Profil">
            <h2><?= $menu[0]; ?></h2>
            <p><?= $profil; ?></p>
        </div>

        <div class="section" id="Visi">
            <h2><?= $menu[1]; ?></h2>
            <p><?= $visi; ?></p>
        </div>

        <div class="section" id="Misi">
            <h2><?= $menu[2]; ?></h2>
            <p><?= $misi; ?></p>
        </div>

        <div class="section" id="Alamat">
            <h2><?= $menu[3]; ?></h2>
            <p><?= $alamat; ?></p>
        </div>

        <div class="section" id="Kontak">
            <h2><?= $menu[4]; ?></h2>
            <p><?= $kontak; ?></p>
        </div>

        <div class="section" id="Jadwal">
            <h2><?= $menu[5]; ?></h2>
            <p><?= $jadwal; ?></p>
        </div>

        <div class="section" id="Kegiatan">
            <h2><?= $menu[6]; ?></h2>
            <p><?= $kegiatan; ?></p>
        </div>
    </div>

    <footer>
        &copy; <?= date("Y"); ?> SMP NEGERI 2 SIDOARJO. All rights reserved.
    </footer>


</body>
</html>