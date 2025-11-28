update data

<?php 

    require_once "../function.php";


    $sql = "SELECT * FROM tblkategori Where idkategori = $id";
    $result = mysqli_query($koneksi, $sql);

    $row = mysqli_fetch_assoc($result);
    

    // $kategori = 'Jelly Bean';
    // $id= 18;
    // $sql = "UPDATE tblkategori SET kategori='$kategori' WHERE idkategori= $id ";

    // $result = mysqli_query($koneksi, $sql);
    
    // echo $sql;



?>

<form action="" method="post">
    kategori :
    <input type="text" name="kategori" value="<?php echo $row['kategori'] ?>">
    <br>
    <input type="submit" name="simpan" value="simpan">
</form>

<?php 

    if (isset($_GET['simpan'])) {
        $kategori = $_POST['kategori'];
        echo $kategori;
        $sql = "UPDATE tblkategori SET kategori='$kategori' WHERE idkategori= $id ";

        $result = mysqli_query($koneksi, $sql);

        echo $sqlheader("location:http://localhost/phpsmk/restoran/kategori/select.php");
    }

?>