<h1>Ringkasan Minggu ke 2 Web Development Basic</h1>

Dalam seminggu, kegiatan berlangsung sangat asik dan menyenangkan. Pembelajaran minggu ini sering membahas mengenai Javascript, mulai memahami mengenai scope, blocks, nyambung ke datatype lalu diberikan juga materi ajar mengenai DOM. Dengan pembawaan kak auzan yang interaktif membantu peserta untuk memahami.

<h2>Javascript</h2>

JavaScipt merupakan sebuah bahasa pemrograman yang digunakan untuk memanipulasi data dan tampilan. sesuai materi yang diberikan berikut ringkasan yang saya pahami. dalam javascript terdapat istilah scope, block.

<h3> Apa itu scope </h3>
Scope adalah suatu konsep yang digunakan untuk membatasi pengaksesan suatu variable. Dalam scope terdapat dua tipe scope yaitu local scope dan global scope. dan menentukan suatu variabel dapat di akses pada scope tertentu atau tidak.

<h4> Local scope</h4>
Local scope hanya bisa di akses variable hanya di dalam blocks dan tidak bisa di akses di luar blocks. Dalam local scope berarti mendeklarasikan variabel di dalam blocks. sebagai gambaran:

```
for(let i=0; i<=10; i++){
    document.getElemetbyId("p")
}

dengan contoh diatas maka local scope hanya bisa diakses oleh variable
```

<h4>Global Scope</h4>
Kebalikan dari Global Scope. Global scope ini dapat diakses oleh siapa pun, dan syarat global scope yaitu pembuatan variable diluar dari blocks.
sebagai gambaran:

```
//terdapat variable
let obj1 = 'rapi';


//variable diatas dapat di gunakan oleh siapa pun, baik function maupun output biasa.
function greeting(){
    return obj1;
}
```

<h3>Apa itu blocks</h3>
Block merupakan code yang berada di dalam curly brace, sebagai contoh.

```
for(let i=0; i<=10; i++){

}
Didalam "{}" ialah yang disebut dengan Blocks
```
Selanjutnya membahas mengenai Data Type Built In Prototype & method

Semua bahasa pemrograman mempunyai data structure begitu juga dengan bahasa pemrogramming javascript. Javascript merupakan bahasa dinamik. variabel di javascript tidak langsung mengarah ke jenis nilai. 

<h2>JavaScript Types</h2>

penulisan javascript terdapat dua jenis yaitu primitive dan non-primitive.

<h3>primitive</h3>

Primiitive data types merupakan data tipe paling umum di bahasa java. yaitu ada:
- Boolean type
- Null type
- Undefined type
- Number type
- BigInt type
- String type
- Symbol type

Contoh penerapan Primitive data Types
```
bolean 
Bolean merupakan tipe data yang punya dua nilai yaitu true dan false.

if(angka <= 10){
    return "hallo";
}else{
    return "world";
}

```
```
Null
null  merupakan data yang sudah ada wadahnya namun tidak ada nilai yang tertampung

let foo = null;

```

```
Undefined
undefined merupakan data yang tidak teridentifikasi yang mana tidak ada tipe data yang ter deklarasi dan tidak ter inisialisasi

foo;

karena tidak ada tipe data yang inisialisasi.
```
```
number
number pada javascript menampung angka positive - negative, baik bilangan bulat maupun koma.

contoh number
123 -> integer
12.2 -> float   
```
pada number terdapat juga method yang dapat dipakai, beberapa antara lain:
- Number.isNaN() -> singkatan dari Not a Number yang mana akan bernilai true jika nilai tersebut bukan angka. jika angka maka menampilkan false
- Number.isInteger() -> sesuai dengan nama method "integer" akan bernilai true jika nilai tersebut angka integer. Jika angka bukan integer maka false

masih banyak method lainnya, namun saya hanya mencantumkan hanya dua method sebagai contoh.

```
string
String merupakan tipe data yang menampilkan kumpulan huruf angka dan simbol menjadi satu kesatuan menjadi text.

contoh string:
let aku = "ganteng";

ganteng ter deklarasi sebagai string.
```
sama seperti number, string juga mempunyai method, beberapa yaitu:
- string.toUpperCase() -> output yang dihasilkan dari method ini, string yang tersedia akan menjadi huruf kapital
- string.toLowerCase() -> output yang dihasilkan dari method ini, string yang huruf kapital akan menjadi huruf kecil

masih banyak method lainnya, namun saya hanya mencantumkan hanya dua method sebagai contoh.