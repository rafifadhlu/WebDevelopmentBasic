<h1>Ringkasan Minggu ke 4 Web Development BAsic</h1>

<h2>Javasript Asynchronous</h2>
seperti materi minggu kemarin, di materi kali ini memmbahas mengenai Asynchronous. Asynchornos merupakan teknik yang digunakan apabila ada tugas yang memakan waktu lama dan dapat menjalankan tugas lain yang waktunya lebih cepat.

Dalam javascript sendiri memiliki fitur single-thread, non-blocking, dan asyncronous. lalu apa itu semua?

Single-thread yang berarti hanya memiliki satu jalur.
non-blocking yang berarti task yang lama akan memberikan tempat untuk di selesaikan duluan
sedangkan asynchronous itu sendiri proses yang dijalankan tidak secara terurut

di asynchronous terdapat 3 key atau kunci utama yaitu
1. Callback
2. Promise
3. Async await

Selanjutnya membahas mengenai fetch dan Async Await

- Async Await
```
async function asyncNonton() {
    try {
        let result = await nonton() -> jika berhasil maka akan mengambil function nonton
        console.log(result);
    } catch (error){
        console.log(error) -> jika berhasil maka akan menampilkan error
    }
}

asyncNonton() -> pemanggilan fungsi async 

```

<h3>Fetch</h3>
Fetch merupakan objek promise, fetch ini juga digunakan untuk mengambil data dari API dan di tampilkan menggunakan DOM.

<h4>penerapan</h4>

```
//buat variabel terlebih dahulu
let title = document.getElementsByClassName('title')
let containerImg = document.getElementsByClassName('image')


//disini menggunakan async await untuk fetch api 
let getDataDigimon = async () =>{
    let response = await fetch("https://digimon-api.vercel.app/api/digimon") -> pengambilan data menggunakan fetch dari API yang tersedia
    let result = await response.json() -> pengambilan isi yang berups objek dari API
    
    //display objek api yang ditampilkan menggunakan DOM
    result.forEach(item => {
        console.log(item)
        container.innerHTML += `${item.name}`
    } )
}

getDataDigimon()
```

<h2>Git & Git Hub Lanjutan </h2>

Kolaborasi dengan teman-teman, dalam git dan github untuk berkolaborasi yang pertama dilakukan yaitu

1. Buat repository dan tambahkan siapa saja yang ingin berkolaborasi

2. apabila sudah membuat repo, para anggota lain membuat branch masing-masing di branch yang di khususkan untuk pengembangan

3. Sebelum mengerjakannya, anggota melakukan pull request untuk menggabungkan branchnya

<h3>Pull Request</h3>
Pull request adalah suatu permintaan yang diajukan ke ketua atau yang memegang suatu organization di git untuk meminta izin menggabungkan kode terbaru ke dalam branch tersebut.

<h3>Git pull</h3>
apa bila ingin melakukan update terbaru di dalam branch yang dipilih, maka dilakukan perintah `git pull`

dalam kolaborasi dengan git hub ini dapat terjadi konflik, kenapa bisa terjadi konflik? konflik terjadi pas terjadi perubahan satu file oleh dua orang/user yang berbeda

Cara mengatasinya ialah dikomunikasikan dengan tim mana yang ingin dipakai untuk perubahannya

<h2>Responsive Web Layout </h2>

Responsive Web Layout adalah kemampuan menyesuaikan tampilan berbagai device.

<h3>Viewport</h3>

Viewport sendiri merupakan area web yang terlihat oleh user yang di sesuaikan di berbagai device. viewport sendiri merupakan salah satu cara untuk responsive

cara lainnya dapat menyesuaikan tampilan dengan max-width. contoh penerapan:

```
<h1>ini judul </h1>
<style> 
h1{
    max-width : 100%;
}
</style>


Maka elemen <h1> akan menyesuaikan 100% sesuai ukuran layar
```

<h3>Relative units </h3>

Relative units merupakan satuan yang digunakan untuk membantu responsive web layout. dalam relative units terdapat beberapa satuan antara lain:

- em
- rem
- %
- ex
- ch
- vh
- vmin
- vmax

Dari berbagai relative units diatas ada beberapa yang biasa dipakai untuk responsive. beberapa diantaranya yaitu:

- em
em merupakan relative dari ukuran font elemen terdekat. 
```
<div>
    <h1>ini judul </h1>
</div>

<style> 
div{
    font-size:2px;
}
h1{
   font-size : 2em;
}
</style>

maka besar font dari h1 ialah 8px. karena em mengkali 2 font saat ini dan terdekat yaitu 2px;
```

- rem
rem merupakan relative dari elemen akar
```
<body>
    <div>
        <h1>ini judul </h1>
    </div>
</body>

<style> 
body{
    font-size:16px;
}
div{font-size:2px;}
h1{font-size : 2rem;}
</style>

maka besar font dari h1  ialah 32px
```

- vw
vw merupakan relative 1% sesuai lebar dari viewport dan digunakan untuk mengatur lebar

- vh
vh merupakan relative 1% sesuai tinggi dari viewport dan digunakan untuk mengatur ketinggian

<h3> Media Queries </h3>
untuk menyesuaikannya media queries menggunakan break point yang sudah ditambahkan. syntax media queries secara default yaitu:

```
@media not|only mediatype and (mediafeature and|or|not mediafeature) {
  CSS-Code;
}

only = menghalangi browser lama yang tidak support media query
and = untuk mengambungkan fitur media type dan fitur media
```

sebagai contoh:
```
@media only screen and (max-width : 600px) {
  CSS-Code;
}

maka diatas media menyesuaikan hanya untuk layar dan mempunyai breakpoint pada 600px
```

<h3>Bootstrap</h3>

Menggunakan bootstrap ada cara yaitu menggunakan link cdn untuk menghubungkan bootstrap dan file html, yang kedua dengan mendownload dan install bootstrap menggunakan package manager.

apabila menggunakan link dengan mencantumkan :
```
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
```

sedangkan jika menggunakan package manager, terlebih dahulu install package manager yang ingin dipakai. karena saya belum mencoba jadi saya tidak bisa jelaskan.

<h4>grid bootstrap</h4>
Grid dalam bootstrap menggunakan flexbox dengan nama Grid System. dalam satu buah row secara umum memiliki 12 kolom 

bootstrap juga memiliki berbagai breakpoint yang tersedia yaitu
- Extra small
- Small
- Medium
- Large
- Extra Large

ukuran breakpoint ini juga digunakan untuk ukuran seperti kontainer, grid, dan element lainnya.


<h2> Menggunakan Mock Api </h2>
Mock API ini merupakan sebuah platform yang digunakan untuk membuat sebuah data API. yang pertama dilakukan yaitu

1. Click new Resource
2. Isi data dan properti yang diperlukan
3. Klik create 
4. Sesuaikan isi banyaknya data dengan track di menu.
