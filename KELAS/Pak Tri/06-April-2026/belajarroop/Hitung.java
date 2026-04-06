package BelajarrOOP;

public class Hitung {
    
    // Method perkalian 2 angka (int)
    public int Perkalian(int a, int b) {
        return a * b;
    }

    // Method perkalian 3 angka (int)
    public int Perkalian(int a, int b, int c) {
        return a * b * c;
    }

    // Method perkalian angka desimal (double)
    public double Perkalian(double a, double b) {
        return a * b;
    }
    
    public static void main(String[] args) {
        // Membuat objek dari class Hitung
        Hitung kalkulator = new Hitung();

        // Memanggil perkalian 2 integer
        int hasil1 = kalkulator.Perkalian(5, 10);
        System.out.println("Hasil 5 x 10 = " + hasil1);

        // Memanggil perkalian 3 integer
        int hasil2 = kalkulator.Perkalian(2, 3, 4);
        System.out.println("Hasil 2 x 3 x 4 = " + hasil2);

        // Memanggil perkalian bilangan desimal (double)
        double hasil3 = kalkulator.Perkalian(2.5, 4.0);
        System.out.println("Hasil 2.5 x 4.0 = " + hasil3);
    }
}