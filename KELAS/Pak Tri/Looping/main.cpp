#include <iostream>
using namespace std;

int main() {
    int n;
    cout << "Masukkan Tinggi Segitiga: ";
    cin >> n;

    cout << "\n1. Siku-Siku Kiri Bawah\n";
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= i; j++) cout << "+ ";
        cout << endl;
    }

    cout << "\n2. Siku-Siku Kanan Bawah\n";
    for (int i = 1; i <= n; i++) {
        for (int s = 1; s <= n - i; s++) cout << "  ";
        for (int j = 1; j <= i; j++) cout << "+ ";
        cout << endl;
    }

    cout << "\n3. Siku-Siku Kiri Atas\n";
    for (int i = n; i >= 1; i--) {
        for (int j = 1; j <= i; j++) cout << "+ ";
        cout << endl;
    }

    cout << "\n4. Siku-Siku Kanan Atas\n";
    for (int i = n; i >= 1; i--) {
        for (int s = 1; s <= n - i; s++) cout << "  ";
        for (int j = 1; j <= i; j++) cout << "+ ";
        cout << endl;
    }


    cout << "\n=== Segitiga Sama Kaki ===" << endl;

    for(int i = 1; i <= n; i++) {

        for(int s = 1; s <= n - i; s++) {
            cout << " ";
        }

        for(int b = 1; b <= (2 * i - 1); b++) {
            cout << "+";
        }

        cout << endl;
    }

    return 0;
}
