
<form action="" method="post">
    Tanggal :
    <input type="number" name="tanggal" placeholder="masukkan tanggal"><br>
    Bulan :
    <input type="number" name="bulan" placeholder="masukkan bulan"><br>
    <input type="submit" name="kirim" value="zodiak anda ...">
</form>

<form action="" method="post">
    a :
    <input type="number" name="a" placeholder="bilangan a"><br>
    b :
    <input type="number" name="b" placeholder="bilangan b"><br>

    <input type="submit" name="hitung" value="jumlahkan">
    <input type="submit" name="hitung" value="kurangi">
    <input type="submit" name="hitung" value="kalikan">
    <input type="submit" name="hitung" value="bagikan">

</form>
<?php 

    if (isset($_POST['hitung'])) {
        $hitung = $_POST['hitung'];
        $a = $_POST['a'];
        $b = $_POST['b'];

        if ($hitung == 'jumlahkan') {
            echo "penjumlahan dari $a + $b adalah <br>";
            echo $a + $b;
        }
        if ($hitung == 'kurangi') {
            echo "pengurangan dari $a - $b adalah <br>";
            echo $a - $b;
        }
        if ($hitung == 'kalikan') {
            echo "perkalian dari $a * $b adalah <br>";
            echo $a * $b;
        }
        if ($hitung == 'bagikan') {
            echo "pembagian dari $a / $b adalah <br>";
            echo $a / $b;
        }
        
    }

    if (isset($_POST['kirim'])) {
        $tanggal = $_POST['tanggal'];
        $bulan = $_POST['bulan'];

        zodiak($bulan, $tanggal);
    }



    // function belajar() {
    //     echo "Hari ini saya belajar function";
    // }

    // belajar();

    
    function cekTanggal($tanggal) {

        if ($tanggal > 0 && $tanggal < 32) {
            // echo "tanggal benar!";   
            return true;
        }else {
            // echo "tanggal salah!";
            return false;
        }
    }

    // cekTanggal(1);
    // cekTanggal(0);
    // cekTanggal(100);


    $tanggal = 25;
    $bulan = 1;
    

    function zodiak ($bulan, $tanggal){
        if ($tanggal > 0 && $tanggal < 32 && $bulan > 0 && $bulan < 13) {
            if ($bulan == 1) {
                if ($tanggal > 0 && $tanggal < 20) {
                    echo "zodiak anda : capricorn";
                }else {
                    echo "zodiak anda : Aquarius";
                }
            }
            if ($bulan == 2) {
                if ($tanggal > 0 && $tanggal < 20) {
                    echo "zodiak anda : aquarius";
                }else {
                    echo "zodiak anda : pisces";
                }
            }
            if ($bulan == 3) {
                if ($tanggal > 0 && $tanggal < 20) {
                    echo "zodiak anda : pisces";
                }else {
                    echo "zodiak anda : aries"; 
                }
            }
            if ($bulan == 4){
                if ($tanggal > 0 && $tanggal < 21) {
                    echo "zodiak anda : aries";
                }else {
                    echo "zodiak anda : taurus";
                }
            }
            if ($bulan == 5) {
                if ($tanggal > 0 && $tanggal < 21) {
                    echo "zodiak anda : taurus";
                }else {
                    echo "zodiak anda : gemini";
                }
            }
            if ($bulan == 6) {
                if ($tanggal > 0 && $tanggal < 21) {
                    echo "zodiak anda : gemini";
                }else {
                    echo "zodiak anda : cancer";
                }
            }
            if ($bulan == 7) {
                if ($tanggal > 0 && $tanggal < 21) {
                    echo "zodiak anda : cancer";
                }else {
                    echo "zodiak anda : leo";
                }
            }
            if ($bulan == 8) {
                if ($tanggal > 0 && $tanggal < 21) {
                    echo "zodiak anda : leo";
                }else {
                    echo "zodiak anda : virgo";
                }
            }
            if ($bulan == 9) {
                if ($tanggal > 0 && $tanggal < 21) {
                    echo "zodiak anda : virgo";
                }else {
                    echo "zodiak anda : libra";
                }
            }
            if ($bulan == 10) {
                if ($tanggal > 0 && $tanggal < 21) {
                    echo "zodiak anda : libra";
                }else {
                    echo "zodiak anda : scorpio";
                }
            }
            if ($bulan == 11) {
                if ($tanggal > 0 && $tanggal < 21) {
                    echo "zodiak anda : scorpio";
                }else {
                    echo "zodiak anda : sagitarius";
                }
            }
            if ($bulan == 12) {
                if ($tanggal > 0 && $tanggal < 21) {
                    echo "zodiak anda : sagitarius";
                }else {
                    echo "zodiak anda : capricorn";
                }
            }
        }else {
            echo "tanggal atau bulan salah!";
        }
    }

    // zodiak(100, 2);
    // zodiak(2, 12);
    // zodiak(10, 2);

    function cekBulan($bulan) {
        if ($bulan > 0 && $bulan < 13) {
            return true;
        }else {
            return false;
        }
    }

    // if (cekBulan(1) && cekTanggal(0)) {
    //     echo "Bulan atau tanggal benar";
    // }else {
    //     echo "Bulan atau tanggal salah";
    // }

    function luasPersegiPanjang($p, $i) {
        $luas = $p * $i;
        return $luas;
    }

    $p = 55;
    $i = 33;
    $t = 155;

    echo "Volume balok dengan panjang $p lebar $i dan tinggi $t adalah <br>";

    luasPersegiPanjang($p, $i) * $t;


    function tambah($a, $b) {
        return $a + $b;
    }
    function kurang($a, $b) {
        return $a - $b;
    }
    function kali($a, $b) {
        return $a * $b;
    }
    function bagi($a, $b) {
        return $a / $b;
    }

    $a = 15;
    $b = 5;

// echo 'penjumlahan dari'. $a .'dan'. $b. 'adalah'. tambah($a, $b). '<br>';
?>