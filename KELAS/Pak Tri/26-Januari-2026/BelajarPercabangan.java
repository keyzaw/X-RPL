
import java.util.Scanner;

public class BelajarPercabangan {
    
    public static void main(String[] args) {
        
        
        Scanner Inputuser= new Scanner(System.in);
                System.out.print("Inputkan Nilai Anda: ");
                int nilai= Inputuser.nextInt();
                System.out.println("Nilai Anda: "+nilai);
        
            if (nilai>=70) {
                System.out.println("Anda Lulus");
            } else {System.out.println("Anda Tidak Lulus");
            }
            
//           koonversi nilai
            
    
            if (nilai >= 90 && nilai <= 100) {
                System.out.println("Nilai Anda A");
            } else if (nilai >= 70 && nilai <= 89) {
                System.out.println("Nilai Anda B");
            } else if (nilai >= 60 && nilai <= 69) {
                System.out.println("Nilai Anda C");
            } else if (nilai >= 50 && nilai <= 59) {
                System.out.println("Nilai Anda D");
            } else if (nilai >= 0 && nilai < 50) {
                System.out.println("Nilai Anda E");
            }  else {
                System.out.println("Nilai Tidak Valid");
            }
         
    }
    
    
    
    
}


