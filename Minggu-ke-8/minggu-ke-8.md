<h1>Ringkasan Materi minggu ke 7 Front end Bootcamp </h1>

<h2> React context</h2>
React context hampir sama seperti React Redux yang bertujuan untuk menghindari props drylling. Context ini berbeda dengan redux karena context digunakan untuk menyiapkan sebuah komponen yang datanya bersifat global. untuk pertama-tama untuk menggunakan sebuah React Context yaitu menginstall Library dengan perintah

```
npm install react-context

or 

npm  i react-context
```
Selanjutnya pembuatan Komponen, dalam praktik yang ada di live class yaitu membuat sebuah counter keranjang. sehingga pembuatan komponennya:

Counter.jsx dengan code 
```
function Counter(){
    const [count, setCount] = useState(0);

    const increment = () =>{ //fungsi increment
        setCount(count +1); //count akan bertambah satu jika ada trigger dari button
    }

    const decrement = () =>{ //fungsi decrement
        setCount(count - 1); //count akan berkurang satu jika ada trigger dari button
    };

    return(
        <>
        <button> onClick = {decrement}>-</button> -> pembuatan sebuah fitur decrement dengan memanggil fungsi decrement
        <span>{count}</span>
        <button> onClick = {increment}>-</button> -> pembuatan sebuah fitur increment dengan memanggil fungsi increment
        </>
    )
}

export default Counter
```
komponen keranjang dengan code awal
```
function Keranjang(){
    return(
        <div>
            <span>Keranjang</span>
            <span>{0}</span>
        </div>
    )
}

export default Keranjang
```
pembuatan komponen ListProduct
```
function ListProduct(){
    const [products, setProducts] = useState([ //product disi dengan sebuah variabel yang berisi array of object
        {id:1, nama:"buku"}
        {id:2, nama:"pulpen"},
    ])

    return(
        <div>
        {products.map(item => ( //mapping variabel products dengan key menggambill dari id dan juga mengambil nama item
            <div key={item.id}>
                <span>{item.nama}</span>
                <Counter/> //terdapat pemanggilan komponen Counter
            </div>
        ))}
        </div>
    )
}

export default ListProduct
```

selanjutnya pembuatan komponen context yang ingin digunakan. codenya:
```
import React, {createContext} from 'react' //import createContext dari library react

const KeranjangCountContext = createContext()

function KeranjangCountProvider({children}){ //destructor children
    const [keranjangCount, setKeranjangCount] = useState(0) //pembuatan state keranjang
    return(
        <KeranjangCounterContext.provider value={keranjangCount}> //pemanggilan context dan pembuatan provider dengan value berasal dari state keranjangCount
        {...children} //children akan berisi app yang berisi komponen yang sudah dibuat
        </KeranjangCounterContext.provider>
    )
}

export default KeranjangCountProvider
```

selanjutnya pemanggilan KeranjangCountProvider ke dalam main.jsx / index dengan membungkus <App/>

```
...
import KeranjangCountProvider from './ur/path/KeranjangCounterProvider' import count provider yang sudah dibuat
...
<KeranjangCounterProvider>
    <App/>
<KeranjangCounterProvider>
```


untuk mempassing props terdapat beberapa cara, cara pertamanya yaitu:
```
<Home nama="appha">
```
cara yang kedua dengan cara menambahkan props ke dalam kompenen App dan digunakan untuk passing props ke dalam KeranjangCountProvider.

untuk mengambil data melalui keranjangCountContext dengan menggunakan useContext sebagai contoh ingin mengambil data KeranjangCount dan di teruskan ke dalam komponen keranjang

```
function Keranjang(){
    const {keranjangCount} = useContext(KeranjangCountContext) //mengambil data dari keranjangCountContext dan di destructor mengambil state keranjang Count

    return(
        <div>
            <span>Keranjang</span>
            <span>{keranjangCount}</span>
        </div>
    )
}

export default Keranjang
```

<h2>Context useReducer </h2>
useReducer merupakan alternatif untuk menggunakan useState, seperti kemarin set up awal dengan membuat sebuah component 
Counter.jsx dengan code 

```
function Counter(){
    
    return(
        <>
        <button> onClick = {decrement}>-</button> -> pembuatan sebuah fitur decrement dengan memanggil fungsi decrement
        <span>{count}</span>
        <button> onClick = {increment}>-</button> -> pembuatan sebuah fitur increment dengan memanggil fungsi increment
        </>
    )
}

export default Counter
```

setelah pembuatan komponen selanjutnya dilakukan import ke parent, disini App.jsx sebagai parent.

```
import { useState } from 'react'
import Counter from 'ur/path'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
   <Counter/>   
    </div>
  )
}

export default App
```

selanjutnya pembuatan CounterProvider yang berfungsi untuk mewadahi context yang ingin digunakan.

```
const CounterContext = createContext()


function CounterProvider({children}){
    const [count,setCount] = useState(0)


    return(
        <CounterContext.Provider vallue={{count,setCount}}>
        {children}
        </CounterContext.Provider>
    )
}

export default CounterProvider
```

selanjutnya pemanggilan KeranjangCountProvider ke dalam main.jsx / index dengan membungkus <App/>

```
...
import CounterProvider from './ur/path/CounterProvider' import count provider yang sudah dibuat
...
<CounterProvider>
    <App/>
</CounterProvider>
```
penggunaan useReducer, untuk menggunakan useReducer dengan di import terlebih dahulu librarynya yaitu "useReducer
```
const CounterContext = createContext()
const INCREMENT = "INCREMENT"
const DECREMENT ="DECREMENT"

const intialstate = {
    count:0
}

function reducer(state,action){
    switch(action.type){
        case INCREMENT:
            return{count: state.count + 1}
        case DECREMEMT:
            return{count: state.count - 1}
        default: return state
    }
}

function CounterProvider({children}){
    const [state, dispatch] = useReducer(reducer, initialstate)

    const increment = () =>{
        dispatch({type:"INCREMENT"})
    }
    const increment = () =>{
        dispatch({type:"DECREMENT"})
    }

    return(
        <CounterContext.Provider vallue={{count,setCount}}>
        {children}
        </CounterContext.Provider>
    )
}

export default CounterProvider
```
pembuatan counter dengan Counter yang menggunakan Context useReducer
```
function Counter(){
    const {state,increment,decrement} = useContext(CounterContext)
    return(
        <>
        <button> onClick = {decrement>-</button> -> pembuatan sebuah fitur decrement dengan memanggil fungsi decrement
        <span>{state.count}</span>
        <button> onClick = {increment}>-</button> -> pembuatan sebuah fitur increment dengan memanggil fungsi increment
        </>
    )
}

export default Counter
```

<h2> Testing </h2>
Testing terdapat dua jenis yaitu manual testing dan automatic testing. Manual testing merupakan testing yang dilakukan secara manual seperti mengecek fitur satu per satu apakah sudah sesuai dengan fungsi atau belum sedangkan automatic testing merupakan testing secara otomatis menggunakan kode yang sudah dibuat untuk testing. 

automatic testing terdapat tiga layer yang pertama unit integration dan E2E (End To End). dalam automatic testing menggunakan jest yang merupakan Library Javascript.

pertama-tama install jest ke dalam dev depedency dengan cara:
```
npm install --save-dev jest
```

selanjutnya apabila ingin melakukan testing terhadap sebuah function, dapat dengan cara membuat `FileYangInginditest.test.js` yang benandakan file tersebut merupakan testing terhadapt js

```
misal ingin melakukan sebuah testing terhadap sebuah perhitungan sederhana.

const sum = require('./app') -> sum emmbutuhkan require dari app

test('jumlahkan angka kamu',() =>{
    expect(summ(0,0).toBe(0)) 
    expect(summ(0,1).toBe(1))
    expect(summ(2,2).toBe(0))
})

pada code diatas dapat dibaca, test jumlah angka kmu, jika benar maka semua test akan dapat sinyal hijau seperti di TDD cycle.
```

selanjutnya pada app/ di ketikan perintah

```
const sum = (x,y) => x + y

module.export = sum. ->sum akan diterukan ke app test js untuk diperiksa apakah sudah tepat atau belum
```

Selesai sudah Writting minggu ini dan writting terakhir mungkin ya, sampai jumpa kakak-kakak yang membaca Ringkasan saya yang kurang dan apa adanya ini, semoga apa yang kakak-kakak inginkan dikemudian hari dapat tercapai ya kak. Terima kasih banyak atas beberapa bulan ini. sangat menyenangkan belajar disini dengan pembelajaran yang asik bikin belajar ga monoton walau sering bentrok jadwal pas lagi live class. tapi, aku berusaha memahaminyaa kok kak. terima kasih ya kak see u next time kak!

