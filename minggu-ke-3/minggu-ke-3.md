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