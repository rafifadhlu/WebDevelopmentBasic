<h1>Ringkasan Materi minggu ke 6 Front end Bootcamp </h1>

<h2> REACT JS </h2>

Sebelum mengawali materi ini di haruskan mendownload dan menginstall Node JS sebagai package manager. untuk menggunakan react pertama yang dilakukan ialah memasukan perintah
```
npx create-react-app my-app
```
perintah tersebut untuk menginstall react menggunakan node JS

dalam menggunakan react terdapat bundling yang berisi banyak file yang berguna untuk menuliskan code berbasis komponen.


<h3>react fragment</h3>
React fragment digunakan dengan cara mambuat dua komponen dan di import dengan syntax:

```
import (namaKomponenen) from 'lokasi'
```

contoh:

di file jsx app.js terdapat code:
```
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
```

di file kedua home.js terdapat code:
```
function Home() {
    return(
        <div> 
            Home
        </div>

    )
}
```

maka di file app.js perlu ditambahkan import dan tambahkan react fragment untuk menambahkan function home ke dalam app.js.

<h3>React vite</h3>

Salah satu untuk membuat folder selain di atas, bisa juga menggunakan React Vite dengan menginstalasi dengan perintah 
```
npm create vite@latest my-app --template react -> apabila ingin menggunakan react
```
salah satu cara ini dapat mempermudah dan mengefisiensi waktu pembuatan foldernya. selanjutnya tinggal mengikuti perintah lanjutan yang sudah di arahkan di dalam terminal

untuk running code nya dengan perintah
```
npm run dev
```


<h3>State dan Prop</h3>

<h4>State</h3>
Data yang ada di dalam komponen disebut sebagai state. 

<h4>Props</h4>
props digunakan untuk meneruskan argumen yang akan diteruskan ke komponen react. contoh:

Pada file komponen Home terdapat kode
```
let Home = ({name,info}) => {
//({name,info}) -> meruapakan props yang akan meneruskan argumen ke dalam komponen

    return(
        <div> 
            <h1>{name}</h1>
            <h1>{info}</h1>
        </div>

    );
};

export default Home;
```
dalam file App dimasukan argumen yang ada di file komponen ke dalam elemen. contoh:

```
function App() {
  return (
    <div className="App">
      <Home name={"rapi"} />
    
    </div>
  );
}

//name diisi dengan value "rapi" maka tampilannya akan berubah menjadi "rapi"
```
<h4>useState</h4>

useState digunakan untuk membuat variable dalam react karena javascript bersifat imutable yang membedakan hanya penulisan variabelnya. contoh:

Pada file komponen Home terdapat kode
```
let Home = ({name,info}) => {
//({name,info}) -> meruapakan props yang akan meneruskan argumen ke dalam komponen

    return(
        <div> 
            <h1>{name}</h1>
            <h1>{info}</h1>
        </div>

    );
};

export default Home;
```
dalam file App dimasukan argumen yang ada di file komponen ke dalam elemen. contoh:

```
import {useState} from "react"; -> untuk menggunakan useState perlu di import terlebih dahulu

function App() {

  const [name, setName] = useState("dila"); -> penggunaan useState

  return (
    <div className="App">
      <Home name={"rapi"} />
    
    </div>
  );
}

//name diisi dengan value "rapi" maka tampilannya akan berubah menjadi "rapi"
```

Stateless = hanya memiliki props
statefull = memiliki local state dan memiliki props

<h3>Event Listener</h3>

Event listener merupakan event yang menerima fungsi dari sebuah elemen. Seperti event onClick, onHover dll.
contoh penerapan:

dalam kasus ini ingin membuat sebuah button untuk membuat jumlah
```
import {useState} from "react"; -> Import library dari react

// Pembuatan function komponen counter
function Counter(){
    
    const[count,setCount] = useState(0) -> pembuatan state dengan value awal 0

    //fungsi pertambahan untuk jumlah
    const increment =() =>{
        console.log("increment")
        setCount(count + 1) -> Penggunaan state untuk fungsi pertambahan
    }
    console.log(count);

    return (
        <>
        <button> - </button>
        <span>{count}</span> -> props dengan isi count untuk mengambil data setelah increment
        <button onClick={increment}>+</button> -> props dengan pemanggilan fungsi increment
        </>
    )
}

export default Counter
```

selain menggunakan state seperti diatas, dapat menambahkan event menggunakan function, contoh seperti dibawah ini:

```
import {useState} from "react"; -> Import library dari react

// Pembuatan function komponen counter
function Counter(){
    
    const[count,setCount] = useState(0) -> pembuatan state dengan value awal 0

    //fungsi pertambahan untuk jumlah
    const handleClick = () =>{
        console.log("Click")
    }

    return (
        <>
        <button onClick={handleClick}>+</button> -> Pemanggilan fungsi
        </>
    )
}

export default Counter
```

Penggunaan state dipakai saat komponen yang digunakan memerlukan data


<h4>Life Cycle</h4>
Pada tiap life cycle, dapat menambahkan efek yang diperlukan. 

Siklus yang biasa terjadi ada 3 yaitu:
- mount 
- update
- unmount

- mount
dimana komponen muncul ke permukaan

- update
dimana komponen diupdate apabila ada perubahan

- unmount
Kondisi dimana belum ada perubahan.

Pada life cycle dapat juga di tambahkan side effect. Sebagai contoh: ingin menambahkan side effect setelah di klik akan muncul "halo" di console.log
```

function ListDigimon (){

    useEffect(() => {
        console.log("Hallo");   -> akan tampil setelah halaman dibuka
    });
```

<h3>Form</h3>
Pembuatan form disini menggunakan framework react. dalam struktur formulir terdapat beberapa hal penyusunnya yaitu
tag form:  

```
<form></form>
```

Pembuatan form banyak jenisnya ada input address, name, number yang akan di submit menggunakan elemen button. Sebagai contoh:
```
import {useState} from "react";

const form = () =>{
    const [name, setName] = useState(""); -> pembuatan state dengan isi value string kosong untuk diisi dengan data dari input user

    return (
        <>
            <form> -> pembuatan form
                <label htmlFor="name">Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
            </form>
        </>
    );
};

export default form;

//value pada tag input digunakan untuk mengisi value dari user
//onChange digunakan untuk mengambil perubahan data untuk meneruskannya ke dalam setName dengan mengambil data dari
 e.target.value
```

okee selesai tamat

