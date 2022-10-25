<h1>Ringkasan Materi minggu ke 6 Web Basic Development </h1>

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
npm create vite@latest my-vue-app --template
```
salah satu cara ini dapat mempermudah dan mengefisiensi waktu pembuatan foldernya.


<h3>State dan Prop</h3>

Merupakan sebuah object yang menyimpan komponen. 

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

useState digunakan untuk membuat variable dalam react yang membedakan hanya penulisan variabelnya. contoh:

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


