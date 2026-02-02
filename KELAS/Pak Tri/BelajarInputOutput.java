
import java.util.Scanner;




public class BelajarInputOutput {
    
    public static void main(String[] args) {
        
        Scanner inputUser= new Scanner(System.in);
            System.out.print("Inputkan Nama Anda: ");
        String nama= inputUser.nextLine();
            System.out.println("Nama Yang di Input: "+nama);
        
        System.out.print("Berapakah Nomer Absen Anda: ");
        int absen= inputUser.nextInt();
        System.out.println("Nomer Absen Anda: "+absen);
        
        System.out.print("Berapakah Uang Sakumu: ");
        double uang= inputUser.nextDouble();
        System.out.println("Uang saku adalah: Rp. "+uang);
        
        
        Scanner masukan= new Scanner(System.in);
        System.out.print("Karakter Apa Yang Anda Suka: ");
        String simbol= inputUser.nextLine();
        System.out.println("Karakter Yang Anda Suka: "+simbol);
    }
    
}
