/*while(true) {       //Infinite Loop / looping forever
    console.log('Hello World!');
}*/

//di bawah ini contoh looping yang dapat di-hentikan ole user;
var ulang = true;   //variabel = ulang .  Kenapa di-awal true? karena agar masuk ke while
while(ulang == true) {  
    console.log('hello world');
    ulang = confirm('lagi?');
}


/*Aturan while di JS;

nilai awal
while(kondisi terminasi) {

    aksi

    increment / decrement
}

Aturan While;

1. Nilai Awal.
2. Kondisi Terminasi (kapan loop-nya akan berhenti.
3. Increment dan Decrement (ini yang akan menyebabkan loop-nya bisa berhentii
    - Increment = Penambahan, ( Terhadap Nilai Awal ).
    - Decrement = Pengurangan. ( Terhadap Nilai Awal ). 
    
- contoh;

var nilaiAwal = 1;
while(nilaiAwal <= 5) #ini kondisi terminasi, artinya. While(atau loop-nya, akan berhenti jika kondisi-nya sudah 5,
    jika belum sampai 5, maka akan tetap di kerjakan. ( Sampai Kondisi tersebut Terepenuhi) )

{     
    console.log('hello world);
    nilaiAwal++;#ini namah 1, jadi nilaiAwal = 2     #artinya, setiap pengulangan di tambah 1, tiap pengulang-an nya
}
*/

var nilaiAwal = 1;
while(nilaiAwal <= 100){
    console.log("Hello World " + nilaiAwal + "x");

    nilaiAwal++;
}