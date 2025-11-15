<h1>LOGIN</h1>

<form action="" method="post">
    <input type="email" name="email" placeholder="email" required><br>
    <input type="password" name="password" placehoder="password"><br>
    <input type="submit" value="login" name="login">
</form>

<?php 

    if (isset($_POST['login'])) {
        $email = $_POST['email'];
        $password = $_POST['password'];

        // echo $email . "<br>";
        // echo $password;

        if ($email == "letxaal@gmail.com" && $password = "12345") {
            $_SESSION['email'] = $email;
            header("location: index.php");
        }else{
            echo "Email atau Password Salah";
        }
    }


?>