

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>WEB SMENDA</title>
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">

    <style>
        

        body{
            font-family: 'Poppins', sans-serif;
            background-color: #b9ecfcff;
            line-height: 1.6;
        }


        #posisi{
            position: sticky;
        }

        nav{
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;
        }

        nav a {
           color: #11035cff;
            font-weight: 600;
            text-decoration: none;
            padding: 10px 15px;
            border-radius: 5px;
            background-color: transparent;
        }

        .logo{
            height: 100px;
            width: auto;
            flex-shrink: 0;
        }

        #header{
            background-color: #4ac9f0ff;
            color: white;
            padding: 20px;
            position: sticky;
        }

        .header-h1{
            font-size: 20px;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 25px;
            max-width: 1100px;
            margin: auto;
        }

        .container{
            padding: 40px 20px;
            max-width: 1100px;
            margin: auto;
        }

        .section-1{
            background-color: white;
            margin-top: 0px;
            margin-bottom: 20px;
            padding: 15px;
            border-radius: 10px;
            text-align: center;
        }

        footer{
            background-color: #4ac9f0ff;
            color: white;
            text-align: center;
            padding: 20px;
            font-size: 14px;
        }



    </style>
</head>
<body>
    <header id="header">
        <div class="header-h1">
            <img src="images/smenda-logo.jpg" alt="logo smenda" class="logo">
            <h1>SMK NEGERI 2 BUDURAN</h1>
        </div>
    </header>


    <div class="container">
        <nav class="section-1">
            <a href="?menu=profil">Profil</a>
            <a href="?menu=sejarah">Sejarah</a>
            <a href="?menu=jurusan">Jurusan</a>
            <a href="?menu=prestasi">Prestasi</a>
            <a href="?menu=kegiatan">Kegiatan</a>
            <a href="?menu=kontak">Kontak</a>
    </nav>
    </div>
    

    <section>
        <?php 
            if (isset($_GET['menu'])) {
                $isi = $_GET['menu'];

                if ($isi == "profil") {
                    require_once "pages/profil.php";
                }

                if ($isi == "sejarah") {
                    require_once "pages/sejarah.php";
                }

                if ($isi == "jurusan") {
                    require_once "pages/jurusan.php";
                }

                if ($isi == "prestasi") {
                    require_once "pages/prestasi.php";
                }

                if ($isi == "kegiatan") {
                    require_once "pages/kegiatan.php";
                }

                if ($isi == "kontak") {
                    require_once "pages/kontak.php";
                }
            } else {
                require_once "pages/profil.php";
            }
        ?>
    </section>

    <footer class="border-top">
        &copy; <?= date("Y"); ?> SMK NEGERI 2 BUDURAN.
    </footer>

</body>
</html>
