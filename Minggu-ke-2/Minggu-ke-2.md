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


Primiitive data types merupakan data tipe paling umum di bahasa java. yaitu ada:
- Boolean type
- Null type
- Undefined type
- Number type
- BigInt type
- String type
- Symbol type

Non-Primitive ini merupakan tipe data yang di buat oleh Programmer, dan digunakan untuk menyimpan banyak nilai data types ada:
- Class
- Object
- String
- Array
- Interface

Contoh penerapan Primitive dan Non - Primitive data Types

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

<h3>Matematika pada javascript</h3>
Dalam pengolahan angka dengan rumus matematika, di javascript terdapat cara yang simple yaitu dengan menggunakan method yang sudah disediakan. 

<h4> apa saja method yang tersedia?</h4>

Math.max()
```
method ini menentukan angka terbesar

contoh:
console.log(Math.max(1, 3, 2));

maka hasil yang di tampilkan yaitu akan keluar angka 3 yang mana ia terbesar dari yang lain
```

Math.min()
```
method ini menentukan angka terkecil

contoh:
console.log(Math.min(1, 3, 2));

maka hasil yang di tampilkan yaitu akan keluar angka 1 yang mana ia terkecil dari yang lain
```

Math.sqrt()
```
method ini menghitung akar dari sebuah angka yang diinput

contoh:
console.log(Math.sqrt(49));

maka hasil yang di tampilkan yaitu akan keluar angka 7 yang mana ia hasil akar dari 49
```

<h2> DOM </h2>

<h3>Apa sih DOM itu? </h3>
DOM singkatan dari Document Object Manipulation yang berfungsi untuk mengubah tampilan supaya lebih dimanis dan juga untuk manipulasi sebuah website. DOM ini merupakan sebuah Web API yang membantu untuk memanipulasi website dan tersedia tidak hanya di Javascript namun di berbagai bahasa pemrograman. Lalu bagaimana cara manipulasinya kack? Lanjutt ke penggunaan DOM.

<h3> Penggunaan DOM </h3>

disini saya memberikan beberapa contoh DOM yang digunakan dan dipelajari

<h4>Mengakses elemen HTML</h4>

```
document.getElementById() -> digunakan untuk mengakses elemen menggunakan id
document.getElementByClass() -> digunakan untuk mengakses elemen menggunakan id

document.querySelector() -> akan mengakses anak pertama dari elemen induk dan penggunaannya menggunakan CSS selector
document.querySelectorAll() -> akan mengakses semua element yang mempunyai class/id/tag yang sama dan penggunaanya menggunakan CSS Selctor
```

<h4>Mengganti konten dari sebuah HTML</h4>

.innerText 
```
cara penggunaan:


<p>The text content of the button element is:</p>
<p id="demo"></p>
<p id="demo1">memel</p>

<script>
let text = document.getElementById("demo1").innerText;

<script>

apabila digunakan maka hasil yang keluar akan menampilkan "memel" dan bila ingin mengubahnya cukup ditambahkan

<script>
let text = document.getElementById("demo1").innerText = memei;

<script>
maka jika dijalankan akan menampilkan konten baru yaitu "memei"

```
.innerHTML
```
cara penggunaan:


<p>The text content of the button element is:</p>
<p id="demo"></p>
<p id="demo1">memel</p>

<script>
let text = document.getElementById("demo1").innerHTML;

<script>

apabila digunakan maka hasil yang keluar akan menampilkan "<p id="demo1">memel</p>" dan bila ingin mengubahnya cukup ditambahkan

<script>
let text = document.getElementById("demo1").innerHTML = memei;

<script>
maka jika dijalankan akan menampilkan konten baru yaitu "<p id="demo1">memei</p>"

```
<h4>Menambahkan Event pada Elemen HTML</h4>

Untuk menambahkan event ini terdapat 3 cara yaitu melalui

1. Menggunakan Attribute
```
<button onclick="alert("pengerjaan sudah sampai jam 1 malam")">Try it</button>

Attribute onclick akan memproses apabila elemen tersebut terdapat respon klik dari user
```

2. Melalui properties
```
<button id="btn">try it</button>

<script>
btn.onclick = function(){
    background-color:red;
}
</script>
```
3. Menggunakan AddEventListener
```
<button id="btn">try it</button>

<script>

//buat variabel baru dengan mengakses elemen menggunakan id
let btn =  document.getElementById("btn")

//buat addEventListener untuk memasukan sebuah perintah
btn.addEventListener("click", function(){
    alert("pengerjaan sudah sampai jam 1 malam")
})
</script>
```
Allhamdulillah selesai juga, kurang lebihnya saya mohon maaff. 

Saya punya sedikit pantun..

depan leptop panas sampai pagi,

Paginya kelas lagi,

Terima kasih atas pelajarn dan materi,

Sekian dan terima kasih.

Good night kakk.