<?php 

    class Calculator {
        function penjumlahan(){
            echo "penjumlahan";
        }
        function pengurangan(){
            echo "pengurangan";
        }
        function perkalian(){
            echo "perkalian";
        }
        function pembagian(){
            echo "pembagian";
        }
    }

    $kalkulator = new calculator();
    $kalkulator->penjumlahan();
    $kalkulator->perkalian();

?>