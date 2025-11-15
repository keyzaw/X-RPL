<!-- Belajar PHP
<h1>Saya Belajar PHP</h1> -->
<?php 
$nama = "Keyza Albian S.P";
$umur = 15;
$kelas = 10;
$alamat = "Perum. Citra Sentosa Mandiri";
$hobi = "Berolahraga";
$enter = "<br>";

echo $nama;
echo $enter;

echo $umur;
echo $enter;

echo $kelas;
echo $enter;

echo $alamat;
echo $enter;

echo $hobi;
echo $enter;

// echo "<h1>Saya Belajar PHP</h1>";
// echo "Saya Kelas";
// echo 12;
// echo "Nama: ";
// echo "Keyza Albian S.P";
// echo "<br>";
// echo "Umur: ";
// echo 15;
// echo "<br>";
// echo "Kelas: ";
// echo 10;
// echo "<br>";
// echo "Alamat: ";
// echo "Perum. Citra Sentosa Mandiri";
// echo "<br>";
// echo "Hobi: ";
// echo "Berolahraga";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Keyza</title>
</head>
<body>
    <div>
        <h1>identitas</h1>
        <table>
            <tbody>
                <tr>
                    <td>
                        Nama  :
                    </td>
                    <td>
                        <?= $nama;?>
                    </td>
                    <td>
                        Umur :
                    </td>
                    <td>
                        <?= $umur;?>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</body>
</html>