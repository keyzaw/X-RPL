<?php 
    session_start();

    if (isset($_SESSION['email'])) {
        echo $_SESSION['email'];
        echo "<br>";
        echo "<a href='logout.php'>logout</a>";
    } else {
        echo "Register";
        echo "<br>";
        echo "<a href='index.php'>login</a>";
    }
    

?>