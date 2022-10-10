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
Fetch merupakan objek promise, fetch ini juga digunakan untuk mengambil data dari API dan di tampilkan menggunakan DOM
