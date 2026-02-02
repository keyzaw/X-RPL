import java.util.Scanner;

public class zodiac {

    public static void main(String[] args) {
        Scanner zodiak = new Scanner(System.in);

        System.out.print("Masukkan Tanggal Lahir Anda: ");
        int tanggal = zodiak.nextInt();

        System.out.print("Masukkan Bulan Lahir Anda (1-12): ");
        int bulan = zodiak.nextInt();

        if (bulan < 1 || bulan > 12) {
            System.out.println("Bulan salah!");
        } else {
            if (tanggal < 1 || tanggal > 31) {
                System.out.println("Tanggal salah!");
            } else {

                if (bulan == 1) {
                    if (tanggal <= 19) {
                        System.out.println("Capricorn");
                    } else {
                        System.out.println("Aquarius");
                    }
                }

                if (bulan == 2) {
                    if (tanggal > 28) {
                        System.out.println
                       ("Tanggal di bulan Februari tidak boleh lebih dari 28!");
                    } else if (tanggal <= 18) {
                        System.out.println("Aquarius");
                    } else {
                        System.out.println("Pisces");
                    }
                }

                if (bulan == 3) {
                    if (tanggal <= 20) {
                        System.out.println("Pisces");
                    } else {
                        System.out.println("Aries");
                    }
                }

                if (bulan == 4) {
                    if (tanggal <= 19) {
                        System.out.println("Aries");
                    } else {
                        System.out.println("Taurus");
                    }
                }

                if (bulan == 5) {
                    if (tanggal <= 20) {
                        System.out.println("Taurus");
                    } else {
                        System.out.println("Gemini");
                    }
                }

                if (bulan == 6) {
                    if (tanggal <= 20) {
                        System.out.println("Gemini");
                    } else {
                        System.out.println("Cancer");
                    }
                }

                if (bulan == 7) {
                    if (tanggal <= 22) {
                        System.out.println("Cancer");
                    } else {
                        System.out.println("Leo");
                    }
                }

                if (bulan == 8) {
                    if (tanggal <= 22) {
                        System.out.println("Leo");
                    } else {
                        System.out.println("Virgo");
                    }
                }

                if (bulan == 9) {
                    if (tanggal <= 22) {
                        System.out.println("Virgo");
                    } else {
                        System.out.println("Libra");
                    }
                }

                if (bulan == 10) {
                    if (tanggal <= 22) {
                        System.out.println("Libra");
                    } else {
                        System.out.println("Scorpio");
                    }
                }

                if (bulan == 11) {
                    if (tanggal <= 21) {
                        System.out.println("Scorpio");
                    } else {
                        System.out.println("Sagittarius");
                    }
                }

                if (bulan == 12) {
                    if (tanggal <= 21) {
                        System.out.println("Sagittarius");
                    } else {
                        System.out.println("Capricorn");
                    }
                }
            }
        }

        zodiak.close();
    }
}