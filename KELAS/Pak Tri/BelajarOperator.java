
public class BelajarOperator {

    public static void main(String[] args) {
        // TODO code application logic here
        int a=10;
        int b=3;
        
        int penjumlahan= a+b;
        System.out.println("Hasil penjumlahan 2 angka adalah: "+penjumlahan);
        
        int pengurangan= a-b;
        System.out.println("Hasil pengurangan 2 angka adalah: "+pengurangan);
       
        int perkalian= a*b;
        System.out.println("Hasil perkalian 2 angka adalah: "+perkalian);
        
        int pembagian= a/b;
        System.out.println("Hasil pembagian 2 angka adalah: "+pembagian);
        
        int modulo= a%b;
        System.out.println("Hasil modulo 2 angka adalah: "+modulo);
        
        System.out.println("");
        System.out.println("");
        
        // Operator Penugasan
        //= memberi nilai
        //+= penjumlahan nilai
        //-= pengurangan nilai
        //*= perkalian nilai
        // /= pembagian nilai
        //%= modulo nilai
        
        int c=20;
        int d=10;
        int e=100;
        
        c +=5;
        a -=2;
        b *=100;
        d /=5;
        e %=2;
        
        System.out.println(c);
        System.out.println(a);
        System.out.println(b);
        System.out.println(d);
        System.out.println(e);
        
        System.out.println("");
        System.out.println("");
        
        int f=50;
        int g=10;
        
        boolean hasil= f==g;
        boolean hasil1= f<=g;
        boolean hasil2= f!=g;
        boolean hasil3= f>=g;
        
        System.out.println(hasil);
        System.out.println(hasil1);
        System.out.println(hasil2);
        System.out.println(hasil3);
        System.out.println("");
        System.out.println("");
        
        
        
        // Operrator Logika
        boolean result = true && true;
        boolean result2 = f>g && f==e;
        boolean result3 = true || true;
         boolean result4 = f!=g && f<e;
        
        System.out.println("operator logika-1 "+result);
        System.out.println("operator logika-2 "+result2);
        System.out.println("operator logika-3 "+result3);
        System.out.println("operator logika-4 "+result4);
       
        
    }
    
}
