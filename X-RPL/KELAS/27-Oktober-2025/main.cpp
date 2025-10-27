#include <iostream>
using namespace std;

int main(){
    int tgl, bln;

    cout << "CEK ZODIAK\n";

    cout << "Masukkan Bulan Lahir Kamu:";
    cin >> bln;
    cout << "Masukkan Tanggal Lahir Kamu:";
    cin >> tgl;

    cout << "\n";


    if (bln == 1){
        if (tgl >= 1 && tgl <= 19)
            cout << "Zodiak: Capricorn\nNote: Selamat Zodiak Kamu Capricorn\n";
        else if (tgl >= 20 && tgl <= 31)
            cout << "Zodiak: Aquarius\nNote: Selamat Zodiak Kamu Aquarius\n";
        else
            cout << "Tanggalnya Salah!!\n";
    }


    else if (bln == 2) {
        if (tgl >= 1 && tgl <= 18)
            cout << "Zodiak: Aquarius\nNote: Selamat Zodiak Kamu Aquarius\n";
        else if (tgl >= 19 && tgl <= 29)
            cout << "Zodiak: Pisces\nNote: Selamat Zodiak Kamu Pisces\n";
        else
            cout << "Tanggalnya Salah!!\n";
    }

    else if (bln == 3) {
        if (tgl >= 1 && tgl <= 20)
            cout << "Zodiak: Pisces\nNote: Selamat Zodiak Kamu Pisces\n";
        else if (tgl >= 21 && tgl <= 31)
            cout << "Zodiak: Aries\nNote: Selamat Zodiak Kamu Aries\n";
        else
            cout << "Tanggalnya Salah!!\n";
    }

    else if (bln == 4) {
        if (tgl >= 1 && tgl <= 19)
            cout << "Zodiak: Aries\nNote: Selamat Zodiak Kamu Aries\n";
        else if (tgl >= 20 && tgl <= 30)
            cout << "Zodiak: Taurus\nNote: Selamat Zodiak Kamu Taurus\n";
        else
            cout << "Tanggalnya Salah!!\n";
    }

    else if (bln == 5) {
        if (tgl >= 1 && tgl <= 20)
            cout << "Zodiak: Taurus\nNote: Selamat Zodiak Kamu Taurus\n";
        else if (tgl >= 21 && tgl <= 31)
            cout << "Zodiak: Gemini\nNote: Selamat Zodiak Kamu Gemini\n";
        else
            cout << "Tanggalnya Salah!!\n";
    }

    else if (bln == 6) {
        if (tgl >= 1 && tgl <= 20)
            cout << "Zodiak: Gemini\nNote: Selamat Zodiak Kamu Gemini\n";
        else if (tgl >= 21 && tgl <= 30)
            cout << "Zodiak: Cancer\nNote: Selamat Zodiak Kamu Cancer\n";
        else
            cout << "Tanggalnya Salah!!\n";
    }

    else if (bln == 7) {
        if (tgl >= 1 && tgl <= 22)
            cout << "Zodiak: Cancer\nNote: Selamat Zodiak Kamu Cancer\n";
        else if (tgl >= 23 && tgl <= 31)
            cout << "Zodiak: Leo\nNote: Selamat Zodiak Kamu Leo\n";
        else
            cout << "Tanggalnya Salah!!\n";
    }

    else if (bln == 8) {
        if (tgl >= 1 && tgl <= 22)
            cout << "Zodiak: Leo\nNote: Selamat Zodiak Kamu Leo\n";
        else if (tgl >= 23 && tgl <= 31)
            cout << "Zodiak: Virgo\nNote: Selamat Zodiak Kamu Virgo\n";
        else
            cout << "Tanggalnya Salah!!\n";
    }

    else if (bln == 9) {
        if (tgl >= 1 && tgl <= 22)
            cout << "Zodiak: Virgo\nNote: Selamat Zodiak Kamu Virgo\n";
        else if (tgl >= 23 && tgl <= 30)
            cout << "Zodiak: Libra\nNote: Selamat Zodiak Kamu Libra\n";
        else
            cout << "Tanggalnya Salah!!\n";
    }

    else if (bln == 10) {
        if (tgl >= 1 && tgl <= 22)
            cout << "Zodiak: Libra\nNote: Selamat Zodiak Kamu Libra\n";
        else if (tgl >= 23 && tgl <= 31)
            cout << "Zodiak: Scorpio\nNote: Selamat Zodiak Kamu Scorpio\n";
        else
            cout << "Tanggalnya Salah Kocak!!\n";
    }

    else if (bln == 11) {
        if (tgl >= 1 && tgl <= 21)
            cout << "Zodiak: Scorpio\nNote: Selamat Zodiak Kamu Scorpio\n";
        else if (tgl >= 23 && tgl <= 30)
            cout << "Zodiak: Sagitaurus\nNote: Selamat Zodiak Kamu Sagitaurus\n";
        else
            cout << "Tanggalnya Salah!!\n";
    }

    else if (bln == 12) {
        if (tgl >= 1 && tgl <= 21)
            cout << "Zodiak: Sagitaurus\nNote: Selamat Zodiak Kamu Sagitaurus\n";
        else if (tgl >= 23 && tgl <= 31)
            cout << "Zodiak: Capricorn\nNote: Selamat Zodiak Kamu Capricorn\n";
        else
            cout << "Tanggalnya Salah!!\n";
    }
    else  {
        cout << "Bulannya Salah\n";
    }


        return 0;
}
