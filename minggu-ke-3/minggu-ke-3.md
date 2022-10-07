<h1>Ringkasan Minggu ke 3 Web Development </h1>

Pembelajaran minggu ini dimulai dengan membahas array.

<h2>Array</h2>

Array adalah sebuah wadah yang mampu menyimpan banyak data dan berbagai macam tidak hanya satu tipe data.

<h3>Pembuatan Array & Mengakses Array</h3>

```
//membuat sebuah array
let array = ["tes" , 1 , true]

Variable array diatas mempunyai elemen array dengan tipe bermacam - macan. ada string,number, dan boolean

//Mengakses sebuah array
console.log(array) -> akan menampilkan isi dari array tersebut
console.log(array.length) -> akan menampilkan total elemen array
consolo.log(array[indexarray]) -> bisa juga mengakses per elemen dengan memilih index array mana 
yang ingin kita akses.

```

Array juga mempunyai berbagai method untuk membantu mengolah datanya. apa saja methodnya? banyakk. berikut method array:

Array.push()
method push() digunakan untuk menambahkan data di akhir array
```

//membuat sebuah array
let array = ["tes" , 1 , "keren"]

//Menambahkan data array
array.push("ganteng")

//Menampilkan Array sebuah array
console.log(array) -> akan menampilkan isi dari array tersebut

maka hasil yang akan tampil yaitu
["tes" , 1 , "keren" , "ganteng"]

```

Array.unshift()
method unshift() digunakan untuk menambahkan data di awal array
```
//membuat sebuah array
let array = ["tes" , 1 , "keren"]

//Menambahkan data array
array.unshift("ganteng")

//Menampilkan Array sebuah array
console.log(array) -> akan menampilkan isi dari array tersebut

maka hasil yang akan tampil yaitu
["ganteng", "tes" , 1 , "keren"]

```

Array.pop()
method pop() digunakan untuk menghapus data di akhir array
```
//membuat sebuah array
let array = ["tes" , 1 , "keren"]

//Menambahkan data array dengan push()
array.push("ganteng")

//Menampilkan Array sebuah array
console.log(array) -> akan menampilkan isi dari array tersebut

maka hasil yang akan tampil yaitu
["tes" , 1 , "keren" , "ganteng"]

//mengeluarkan data dengan pop()
array.pop()

maka hasil yang akan tampil yaitu
["tes" , 1 , "keren"]
```

Array.shift()
method shift() digunakan untuk menghapus data di awal array
```
//membuat sebuah array
let array = ["tes" , 1 , "keren"]

//Menambahkan data array dengan push()
array.push("ganteng")

//Menampilkan Array sebuah array
console.log(array) -> akan menampilkan isi dari array tersebut

maka hasil yang akan tampil yaitu
["tes" , 1 , "keren" , "ganteng"]

//mengeluarkan data dengan shift()
array.shift()

maka hasil yang akan tampil yaitu
[1 , "keren" , "ganteng"]
```

Array.splice()
method splice() digunakan untuk menghapus data di tengah array

<h4>syntax</h4>

```
array.splice(awal number index) -> akan menghapus data setelah number index yang dipilih

array.splice(awal number index , batas index) -> akan menghapus awal index yang dipilih dan sebanyak elemen yang ingin dihapus

apabila ingin menyisipkan sebuah data kedalam array bisa menggunakan slice() dengan cara

array.splice(awal number index , batas index, data baru)
```

<h4>Menghapus data menggunakan array.splice()</h4>

```
//membuat sebuah array
let array = ["tes" , 1 , "keren" , "ganteng"]

//Menghapus menggunakan array.splice(index)
array.splice(2) -> maka akan menhapus dari elemen ke 2 yaitu 1 dan menhapus sisa dari elemen ke 2 karena tidak ada argumen jumlah yang ingin dihapus

//Menampilkan Array sebuah array
console.log(array) -> akan menampilkan isi dari array tersebut

maka hasil yang akan tampil yaitu
["tes" , 1 ]
```

```
//membuat sebuah array
let array = ["tes" , 1 , "keren" , "ganteng"]

//Menhapus menggunakan array.splice(awal number index , batas index)
array.splice(2,1) -> maka hanya menghapus dari elemen index ke 2 yaitu 1 

//Menampilkan Array sebuah array
console.log(array) -> akan menampilkan isi dari array tersebut

maka hasil yang akan tampil yaitu
["tes" , 1 ,  "ganteng"]
```

<h4>Menambahkan data menggunakan array.splice()</h4>

```
//membuat sebuah array
let array = ["tes" , 1 , "keren" , "ganteng"]

//Menambahkan menggunakan array.splice(awal number index , batas index, data baru)
array.splice(2, 0 , "tes22") -> maka hanya akan menyisipkan data baru ke dalam array elemen index ke 2 

//Menampilkan Array sebuah array
console.log(array) -> akan menampilkan isi dari array tersebut

maka hasil yang akan tampil yaitu
["tes" , 1 , "tes22", "keren" , "ganteng"]
```

<h3>Menampilkan Array</h3>

untuk menampilkan array terdapat beberapa cara. 

yang pertama sama seperti dijelaskan diatas yaitu menggunakan 

```
let array = ['pertama' , 'kedua' , 'tiga', 'empat']
console.log(namaarray[index]);

namun cara ini tidak efektif apabila array mempunyai banyak data

maka bisa menggunakan for untuk looping semua data array yang sudah ada

for(let i = 0; i <array.length; i++){
    console.log(array[i];
}

menggunakan for of
for (let arr of array){
    console.log(arr);
}

menggunakan foreach
array.forEach( () = > {

} )

menggunakan map()
array.map((item) => {
    console.log(item);
})

```

<h2> Object </h2>

<h3>Pembuatan Object</h3>

Object mempunyai sebuah key dan value. key disebut juga dengan properties, sebagai contoh seperti dibawah ini

```
let obj = {
    key1 : value1, -> key disebut jgua dengan properti
    key2 : value2,
};

penulisan nama objek bisa di tambahkan spasi dengan syarat memakai kutip seperti string contoh

let obj = {
    "alamat rumah" = value2,
};

```
<h3>Mengakses objek Object</h3>

dengan objek yang sudah dibuat diatas, objek tersebut kita dapat mengaksesnya yaitu dengan cara

1. Dot notation
2. Bracket
3. Dengan variable

1. Dot Notation
```
let obj = {
    "alamat rumah" : "disini,
    nama : "rapi,
};

cara mengakses dot nation dengan cara nama_objek.properties
console.log(obj.nama)
```

2. Bracket
```
let obj = {
    "alamat rumah" : "disini,
    nama : "rapi,
};

cara mengakses dot nation dengan cara nama_objek["nama"]
console.log(obj["nama"])
```

3. dengan variable
```
//inisilaisasi variable terlebih dahulu
let properti = "umur";
console.log(siswa[properti]);
```

<h3> Menambahkan properti baru ke dalam objek </h3>
sama seperti mengakses objek, menambahkan objk bisa menggunakan 2 cara yaitu

1. Dot notation
2. Bracket

1. Dot notation
```
let obj = {
    "alamat rumah" : "disini,
    nama : "rapi,
};

menambahkan properti ke objek dengan dot notation dengan syntax
nama_objek.propertibaru = valuebaru;

obj.tahun = 2022;

maka properti tahun akan otomatis ditambahkan ke objek
```

2. Bracket
```
let obj = {
    "alamat rumah" : "disini,
    nama : "rapi,
};

menambahkan properti ke objek dengan Bracket dengan syntax
nama_objek["Propertibaru"] = "valuebaru";

obj["tahun"] = 2022;

maka properti tahun akan otomatis ditambahkan ke objek
```

<h3> Mengganti value dari objek</h3>

cara mengganti value beberapa cara yaitu melalui

1. Dot Notation
2. Bracket

1. Dot Notation
```
let obj = {
    "alamat rumah" : "disini,
    nama : "rapi,
};

cara mengganti value ini sama dengan menambahkan properti baru, hanya saja yang di pilih yaitu objek yang sudah ada dan diganti dengan value baru.

obj.nama = "rizky";

maka objek yang sebelumnya mempunyai properti nama : "rapi" akan terganti
menjadi nama : "rizky"
```

2. Bracket
```
let obj = {
    "alamat rumah" : "disini,
    nama : "rapi,
};

cara mengganti value ini sama dengan menambahkan properti baru, hanya saja yang di pilih yaitu objek yang sudah ada dan diganti dengan value baru.

obj.nama = "rizky";

maka objek yang sebelumnya mempunyai properti nama : "rapi" akan terganti
menjadi nama : "rizky"
```

<h3> Menghapus properti objek</h3>
Untuk menghapus properti cukup menggunakan "delete" bagaimana caranya? simak dibawah ini

```
let obj = {
    "alamat rumah" : "disini,
    nama : "rapi,
};

sesuai penjelasan diatas cukup menggunakan delete.nama_objek.properti

delete obj.nama;

maka properti nama akan dihapus.
```

<h3>Objek menampung function</h3>

```
dalam pembuatan objek untuk menampung function ini dengan cara dibawah ini

const greeting = { 
    welcome: function(){
        return "hallo";
    },
    afterPay: function(){
        return "terimakasih";
    },
};

untuk menampilkannya dengan cara 
console.log(nama_objek.function())

console.log(greeting.welcome())
```

<h3>Nested object</h3>
yang dimaksud nested object ialah objek yang menyimpan objek

```
let rumah = {
    "alamat rumah" : "disini",
    rt : 11,
    pemilik: {
       pemilik1: {
        nama : "rapi",
        rumah : "disini",
       },
       pemilik3: {
        nama : "disini",
        rumah : "disini",
       },
    },
};

cara mengaksesnya hampir sama seperti akses pada umumnya, karena ini nested yang
membedakan hanya penulisan dot yang lebih banyak seperti sistem tree.

console.log(nama_objek.properties.childproperties.values)

sebagai contoh dengan objek diatas, saya ingin mengakses pemilik1, maka
console.log(rumah.pemilik.pemilik1)
```

<h3>Loop object</h3>

<h4>Loop object dengan for in</h4>

```
let obj = {
    "alamat rumah" : "disini",
    nama : "rapi",
    umur : 77,
};

for(let key in objek){
    console.log(object[key]);
}

hasil ouput yang keluar maka akan menampilkan properties dan value yang ada
namun apabila ingin nama key saja yang keluar maka,

console.log(key)

sehingga akan menampilkan nama key/properties saja
```

<h4>looping nested object</h4>

```
let rumah = {
    "alamat rumah" : "disini",
    rt : 11,
    pemilik: {
       pemilik1: {
        nama : "rapi",
        rumah : "disini",
       },
       pemilik3: {
        nama : "disini",
        rumah : "disini",
       },
    },
};

sama seperti looping objek biasa, nested objek perlu ditambahkan apa yang ingin kita akses, sebagai contoh disini ingin menampilkan pemilik1 dengan loop

for(let key in rumah.pemilik.pemilik1){
    console.log(rumah.pemilik.pemilik1[key])
}

```

<h3>Array dengan objek</h3>
Array dengan objek ini mempunyai pengertian yaitu array yang menyimpan banyak objek

syntax
```
let nama_objek = [
    {
        key1 : value,
    },
];

untuk let bisa menggunakan tipe lainnya
```

<h4> Penerapan </h4>

```
dengan sintax diatas maka bisa kita terapkan ke data yang kita punya

let users = [
    {
        nama : 'rapi',
        umur : 18,
        alamat : 'disini',
    },
    {
        nama : 'saya',
        umur : 18,
        alamat : 'di',
    },
    {
        nama : 'sayang',
        umur : 18,
        alamat : 'dis',
    },
]

console.log(users)
```
<h4> Akses Array object </h4>
Penagkases array object ini bisa menggunakan beberapa cara salah satunya dengan mapping. 

```
let data = users.map((el) => {
    console.log(el.nama);
});
```

<h4> Menambahkan properti ke dalam Array object </h4>
cara menambahkan sama seperti menambahkan objek biasa hanya saja perlu ditambahkan looping untuk menambahkan di semua objek.

```
let data = users.map((el) => {
    el.status = "aktif";
});
```

<h2>Rekursif dan modules</h2>

<h3> Modules </h3>

Modules adalah cara memisahkan kode ke file yang berbeda. sistem modules ini memiliki konsep import dan export dalam penggunaanya. 

Misal dalam file yang pertama dibuat yaitu bernama "bekasi.js" sebagai variable export

```
export let makanan = {
    makananFav : "mie ayam",
    minumanFav : "Dawet",
};

export digunakan untuk mengexport objek makanan ke file lain

export ini tidak terbatas hanya objek, namun bisa function, class, array, variabel

selain ssyntax seperti diatas penulisan export juga bisa seperti dibawah ini

let makanan = {
    makananFav : "mie ayam",
    minumanFav : "Dawet",
};

export { makanan }

selain itu ada juga "export default" yang hanya bisa mengexport 1 saja.
penggunaanya :

export default makanan

```

di file yang berbeda kita namakan "jakarta.js" sebagai import.

```
syntax dasar import seperti dibawah ini
import ... from "file"

maka
import {makanan} from "bekasi.js"

setelah import objek makanan dari file "bekasi.js" akan di import ke dalam "jakarta.js"

berbeda dengan import biasa, apabila ingin import file export yang menggunakan export default cukup
menggunakan 

import makanan from "bekasi.js" tidak menggunakan "{}"

```
untuk menggunakan module ini pada file html di tag script perlu ditambahkan attribute `type = modul` untuk bisa menggunakan modules

<h3> Rekursive </h3>

Rekursive ialah function yang memanggil dirinya sendiri sampai batas yang ditentukan.

dalam rekursive ini terdapat dua bagian yaitu base case dan recursive case.

<h4>apa itu base case?</h4>
Base class merupakan titik paling kecil

<h4>Apa itu recursive case</h4>
Recursive case adalah titik dia manggil diri dia sendiri

contoh recursive:
```
function deretAngka(n){ 
    if (n == 1){        -> disebut base case sebagai titk berhenti dari program
        console.log(n)
    }else {             
        deretAngka(n-1) -> Disebut recursive karena berulang memanggil fungsi sendiri yaitu "deretAngka()
        console.log(n)
    }
}

deretAngka(3)
```

<h2>Asynchrounus</h2>

dalam prosesnya asycnrounus akan menyelak proses yang memakan estimasi lama dan akan melakukan proses lainnya namun proses yang sebelumnya akan di jalankan kembali untuk di selesaikan.

JS Asynchronous
1. callback
2. Promises
3. Async Await

dalam javascript proses yang dilaksanakan dengan ASynchronous

1. Callback

Callback adalah function yang dijadikan argumen dan menjalankan program dengan estimasi waktu ter cepat. sebagai contoh :

```
setTimeout(() => {
    console.log("A")
}, 10)
console.log("B")

console.log("c")

dalam program ini akan lebih dlu tampil B setelah itu C, karena A mempunyai jeda waktu selama 10 ms.
```


2. Promies
Dalam promies terdapat istilah pending , fullfiled, rejected. lalu apa itu?

<h4> Pending </h4>
Pending yang berarti masih di tahap penentuan sebelum dapat keputusan apakah fullfiled atau rejected

<h4>Fullfield</h4>
Fullfield yang berarti diterima atau dilanjutkan untuk proses selanjutnya

<h4>Rejected</h4>
Rejected yang berarti tidak diterima atau ditolak. Yahh sad di tolak:(( F.

```
let jalanPromise = new Promise((resolve, reject) => {
    
        resolve("hy ganteng")
        reject("error");
})


jalanPromise.then(result =>{
    console.log(result)
})
.catch((err) => {
    console.log(err)
})

resolve -> jika kondisi berhasil
reject -> jika kondisi tidak terpenuhi

untuk mengambil resolve menggunakan .then
sedangkan untuk mengambil reject menggunakan .catchc
```

<h2>Web Storage</h2>


<h3>Web API</h3>
Web API berfungsi untuk menjembatani antara browser dan bahas pemrograman untuk saling berkomunikasi.

Dalam penggunaanya web storage dapat menyimpan beberapa hal yaitu
- preferensi user
- Setting
- Score
- Posisi video

Web storage terdapat 2 jenis yaitu
1. Local storage -> Penyimpanan data yang gada batas waktunya
2. SessionStorage -> hanya saatu sesi yaitu saat mengakses, apanila keluar maka akan terhapus

Web storage ini tidak boleh digunakan untuk:
- Data Sensitif
- Otentikasi

Pembelajaran minggu ini selesai sudah, banyak suka dan duka yang ada. Sukanya banyak pengetahuan baru yang didapatkan Dukanya Mashallah tugasnya mantap. tapi gapapa heheh tugas yang ada membantu untuk memahami materi dan implementasi untuk kedepanya. Sekian dari saya, kurangnya ada di pemerintah lebihnya ada di dompet saya. Selamat malam buat kk yg baca sampe akhir. Goodnight.


