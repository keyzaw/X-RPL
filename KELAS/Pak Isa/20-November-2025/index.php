<form action="" method="POST">
    Email :
    <input type="email" name="email" require placeholder="Masukkan Email">
    Password :
    <input type="password" name="password" require placeholder="Masukkan Password">
    <input type="submit" name="login" value="login">
</form>

<?php 

    session_start();

    if (isset($_POST['login'])) {
        $email = $_POST ['email'];
        $password = $_POST ['password'];
        $_SESSION['email'] = $email;
        header("location: login.php");
        echo "email : " . $email . "<br>";
        echo "password : " . $password . "<br>";
    }

    $isi = "hello world";
    $hasil = isset($isi);
    echo $hasil;

    if (isset($isi)) {
        echo "variabel ada isi";
    } else {
        echo "variabvel tidak ada isi";
    }

    var_dump ($isi);

?>