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
