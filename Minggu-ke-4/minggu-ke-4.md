<h1>Ringkasan Minggu ke 4 Web Development BAsic</h1>

<h2>Javasript Asynchronous</h2>
seperti materi minggu kemarin, di materi kali ini memmbahas mengenai Asynchronous.

dalam promise terdapat 2 cara untuk menjalankannya yaitu

- Promise (then catch)
```
nonton("jalan").then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
})
```

- Async Await
```
async function asyncNonton() {
    try {
        let result = await nonton()
        console.log(result);
    } catch (error){
        console.log(error)
    }
}

asyncNonton()
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

<h3>Git & Git Hub Lanjutan </h3>

Kolaborasi dengan teman-teman, dalam git dan github untuk berkolaborasi yang pertama dilakukan yaitu

1. Buat repository dan tambahkan siapa saja yang ingin berkolaborasi
