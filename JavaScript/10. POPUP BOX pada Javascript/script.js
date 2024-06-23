// ini alert     1 tombol
alert("Hello World");      //hanya untuk memberikan pesan sederhana, kepada user(pengguna)

// ini prompt(apa-pun yang user input, akan di kembali-kan nilai-nya)   2 tombol
var nama = prompt('masukkan nama: '); //nilai, yang kita input, akan ter-simpan pada variabel (nama)
alert(nama); //untuk menampil-kan apa yang kita input, sebelum-nya!

// ini confirm(fungsi-nya mengembalikan nilai boolean (true or false) ok = true, cancel = false)  2 tombol
var tes = confirm("Kamu yakin??");
alert(tes);

//contoh peng-kondisian atau percabangan sederhana, pada confirm;
if (tes == true) {
    alert("User menekan tombol OK!");
}
else {
    alert("User menekan tombol FALSE!");
}


//contoh pengulangan sederhana

alert("Selamat Datang...");
var lagi = true;

while( lagi === true) {
    var nama = prompt('masukkan nama: ');
    alert('halo ' + nama);

    lagi = confirm("Coba Lagi? ");
}

alert("terima Kasih!")



