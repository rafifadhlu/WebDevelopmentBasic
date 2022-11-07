<h1>Ringkasan Materi minggu ke 7 Front end Bootcamp </h1>

<h2>Propstype</h2>
Proptypes merupakan salah satu library yang digunakan untuk meminimalkan bug dalam penggunaanya dan untuk melakukan pengecekan. sebagai contoh, untuk input hanya bisa menggunakan number dan tidak bisa menggunakan tipe data lain, maka bisa menggunakan perintah  

```
PropTypes.number
```

sebelum menggunakan proptypes kita diharuskan menginstall proptypesnya untuk di import ke dalam file nya. untuk menginstallnya disini saya menggunakan perintah
```
npm install --save prop-types 
```
install menggunakan terminal ke dalam component yang ingin digunakan. dan selanjutnya menambahkan perintah dibawah ke dalam filenya
```
import PropTypes from 'prop-types';
```

<h3>PropTypes.number</h3>
Proptypes ini digunakan untuk input hanya bisa menggunakan number dan tidak bisa tipe data lain, apabila di langgar maka akan ada error yang tampil, namun display tetap berjalan. Contoh penggunaanya:

di file komponen StudentInfo yang sudah dibuat dibawah ini terdapat
```
import PropTypes from 'prop-types'; -> Import library setelah menginstall proptypes ke dalam component melalui terminal


const StudentInfo = ({age}) => { -> pembuatan function dengan props age

    return(
    <>
    <h2>{age}</h2>
    </>
    );
}


StudentInfo.propTypes = { -> pembuatan proptypes 
    age: PropTypes.number -> Proptypes dengan tipe data string sehingga menyaring hanya number saja yang diterima
}

export default StudentInfo;
```

maka apabila program dijalankan, props age hanya bisa diisi dengan number dan apabila di isi dengan tipe data lain maka akan muncul error dalam console.log.

<h3>PropTypes.string</h3>
hampir sama seperti proptypes.number diatas, string juga mempunya fungsi yang sama. namun yang membedakan string hanya bisa menerima tipe data string. Contoh penggunaan:

```
import PropTypes from 'prop-types'; -> Import library setelah menginstall proptypes ke dalam component melalui terminal


const StudentInfo = ({nama,age}) => { -> pembuatan function dengan props age

    return(
    <>
    <h2>{nama}</h2>
    <h2>{age}</h2>
    </>
    );
}


StudentInfo.propTypes = { -> pembuatan proptypes 
    nama: PropTypes.string, -> Proptypes dengan tipe data string sehingga menyaring hanya string saja yang diterima
    age: PropTypes.number -> Proptypes dengan tipe data string sehingga menyaring hanya number saja yang diterima
}

export default StudentInfo;
```

maka apabila program dijalankan, props age hanya bisa diisi dengan string dan apabila di isi dengan tipe data lain maka akan muncul error dalam console.log.

<h3>PropTypes.any.isRequired</h3>
Proptypes ini berarti data harus tersedia tidak boleh ada data yang kosong atau null. untuk penggunaanya yaitu :

```
import PropTypes from 'prop-types'; -> Import library setelah menginstall proptypes ke dalam component melalui terminal


const StudentInfo = ({nama,age}) => { -> pembuatan function dengan props age

    return(
    <>
    <h2>{nama}</h2>
    <h2>{age}</h2>
    </>
    );
}


StudentInfo.propTypes = { -> pembuatan proptypes 
    nama:PropTypes.any.isRequired -> data nama harus tersedia tidak boleh kosong
}

export default StudentInfo;
```

<h3>PropTypes.oneOfType</h3>
porpotypes ini digunakan untuk menambahkan opsi tipe data. sebagai contoh:

```
import PropTypes from 'prop-types'; -> Import library setelah menginstall proptypes ke dalam component melalui terminal


const StudentInfo = ({nama,age}) => { -> pembuatan function dengan props age

    return(
    <>
    <h2>{nama}</h2>
    <h2>{age}</h2>
    </>
    );
}


StudentInfo.propTypes = { -> pembuatan proptypes 
    nama:PropTypes.oneOfType([Proptypes.string, PropTypes.number])
    //dengan menggunakan syntax tersebut maka props nama dapat disi dengan tipe data string atau number
}

export default StudentInfo;
```
<h3>PropTypes.array</h3>
Proptypes ini digunakan untuk menampung sebuah data Array yang tersedia. untuk penggunaanya yaitu:

```
import PropTypes from 'prop-types'; -> Import library setelah menginstall proptypes ke dalam component melalui terminal


const StudentInfo = ({nama,age}) => { -> pembuatan function dengan props age

    return(
    <>
    <h2>{nama}</h2>
    <h2>{age}</h2>
    </>
    );
}


StudentInfo.propTypes = { -> pembuatan proptypes 
    nama:PropTypes.oneOfType([Proptypes.string, PropTypes.number])
    //dengan menggunakan syntax tersebut maka props nama dapat disi dengan tipe data string atau number
}

export default StudentInfo;
```

Array diatas hanya menampung data array tanpa dilakukan pengecekan tipe data, apabila ingin menampung array dan dilakukan pengecakan maka menggunakan 
```
PropTypes.Array(Value yang ingin digunakan)

contoh

PropTypes.Array(PropTypes.number)
//maka array akan menyeleksi hanya number saja yang bisa masuk
```

selain itu kita juga dapat menggunakan kombinasi arrayof dengan isi array yang bermacam-macam. sebagai contoh penerapanya yaitu:
```
PropTypes.Array(PropTypes.oneOfType([tipe data yang diijinkan))

contoh

PropTypes.Array(PropTypes.oneOfType([PropTypes.number,PropTypes.string]))
//maka array akan menyeleksi hanya number dan string saja yang bisa masuk
```

<h3>PropTypes.shape</h3>

ProtoTypes ini berfungsi untuk mengecek nilai dari object. penerapannya yaitu:

```
porps: PropTypes.shape({
    hobby : tipe data yang diinginkan,
    class : tipe data yang diinginkan,
})

contoh

porps: PropTypes.shape({
    hobby : PropTypes.string,
    class : PropTypes.number,
})

```

<h2>Router</h2>
Router digunakan untuk perpindahan page dari satu page ke page lainnya. Router terlihat di alamat Address seperti : 

```
localgsdg.com/path
```

Instalasi react router
```
npm install react-router-dom@6
```
<h3>penerapan</h3>
Berikut penerapan fungsi Route untuk menambahkan jalur. setelah instalasi maka dilakukan import Library pada file app.jsx yaitu:

```
import {Routes,Route,Link} from 'react-router-dom';
```

setelah sudah maka masukan fungsi Routes, Route, dan Link untuk menghubungkan satu page dan page lainnya.
```

function App() {

  return (
    <div className="App">
      <nav >
        <Link to={"/"}>Home</Link> -> mirip dengan <a href> untuk berpindah page melalui route yang sudah dibuat
        <Link to={"/About"}>About</Link>
      </nav>

      <Routes> -> Pembuatan Routes 
        <Route path='/' element={<Home/>}/> ->Pembuatan rute ke home dengan alamat "/" 
        <Route path='/About/' element={<About/>}/> ->Pembuatan rute ke aboud dengan alamat "/About"
      </Routes>
    </div>
  )
}

```

<h2>Redux</h2>
Redux digunakan untuk mempermudah distribusi state yang ada dengan meminimalkan masalah seperti Props Drilling.

<h3>Instalasi Redux</h3>
untuk menjalankan Redux perlu menginstall package redux yaitu dengan perintah

Install Redux dan React Redux
```
npm install redux react-redux
```

tahap pertama buat sebuah folder yang bernama redux yang di dalamnya diisi dengan beberapa folder. folder yang pertama yaitu untuk menampung sebuah store, yang kedua membuat reducer dan terakhir membuat folder action.

<h4>pembuatan store </h4>
Store adalah tempat menyimpan berbagai state dari reducer yang ada

```
import {createStore} from 'redux'; -> import createStore dari redux
import counterReducer from '../reducer/counterReducer'; -> import reducer yang berfungsi sebagai penyimpan data

const store = createStore(counterReducer); 

export default store;
```
syntax diatas hanya menampung satu reducer, apabila ingin menggambungkan dua reducer maka menggunakan
```
const allReducer = combineReducer({
    counter : counterReducer,
    todo : todoReducer
})

const store = createStore(allReducer); 
```


<h4> pembuatan Reducer</h4>
Reducer digunakan untuk menyimpan sebuah function dan akan menerima respon action yang di dispatch serta disimpan ke dalam store

```
import { INCREMENT,DECREMENT } from "../action/counterAction"; -> import action yang akan di dispatch yang digunakan untuk respon

const initialState = { -> inisialisasi state dengan value default 0
    count:0
};

function counterReducer(state = initialState, action){
    switch (action.type){ -> Penggunaan switch case dengan case Increment decrement yang ada pada Action
        case INCREMENT: -> apabila case yang dipanggil increment maka mengembalikan return
            return{
                count: state.count+1 -> count mendapat nilai yaitu state.count + 1. yang dimana count akan bertambah satu
            }
        case DECREMENT:
            return{
                count: state.count-1 -> count mendapat nilai dari perhitungan state.count - 1. yang dimana count akan berkurang satu
            }
            default: return state; -> apabila tidak ada respon dari action maka mengembalikan value state
    }
}

export default counterReducer; -> export supaya reducer dapat di import di store
```

<h4> Pembuatan Action</h4>
Action berfungsi untuk menerima respon yang diterima dan diteruskan ke dalam reducer

```
export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"

export function increment(){
    return{
        type:INCREMENT
    }
}

export function decrement(){
    return{
        type:DECREMENT
    }
}
```

<h4>Penggunaan state ke dalam component</h4>
pada praktik kali ini di contoh kan membuat Counter untuk menambahkan jumlah. maka komponen yang dibuat yaitu:

```
import React from "react";
import {useSelector,useDispatch}  from "react-redux";
import {decrement,increment} from '../redux/action/counterAction';

function Counter() {
    const dispatch = useDispatch() -> digunakan untuk menerima respon yang berasal dari state
    const {count} = useSelector(state => state) 
    ///useSelector digunakan untuk akses data ke dalam store yang sudah dibuat
    
    //apabila menggunakan combine Reducer maka syntaxny sperti mengakses objek
    const {count} = useSelector(state => state.counter) 

  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      //dispatch(increment()) memanggiil fungsi increment dari action yang telah dibuat dan di import kedalam komponen
      <span>{count}</span>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default Counter

```


setelah pembuatan beberapa hal penting diatas. kita juga perlu melakukan penambahan Provider pada file main.js untuk membuka akses komunikasi antara component dan redux

```
import React from 'react'
import ReactDOM from 'react-dom/client'

import {Provider} from 'react-redux' -> import Provider untuk jalur antar komponen ke dalam store
import store from './redux/store' -> Import store untuk komponen

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}> -> store dengan alamat store yang sudah di import
      <App />
    </Provider>
  </React.StrictMode>
)

```
<h4>Async Middleware and Thunk </h4>

Middleware and thunk ini digunakan untuk proses async yang membutuhkan waktu atau delay. seperto fetch data yang membutuhkan data.

karena pembahasan ini mengenai Async maka menggunakan data, disini menggunakan data dummy yang dibuat di mockApi. dengan isi data:
```
 {
  "todo": "Personal Loan Account",
  "isDone": false,
  "id": "1"
 },

```
setelah data mockapi jadi dilanjutkan setup redux. yaitu pembuatan komponen dan juga pembuatan store, reducer, dan action.

<h4>pembuatan store </h4>

```
import {createStore, combineReducers} from 'redux'; -> import library

const allReducers = combineReducers({ -> penggunaan combinereducer untuk menggabungkan 2 reducer
    todo:todoReducer,
})

const store = createStore(allReducers)

export default store
```
<h4>pembuatan Reducer</h4>

```
const initialState = {
    todos: [],
    isLoading:false,
    err:null
}


const todoReducer = (state = initialState, action) => {
    switch(action.type){
        default: return state;
    }
}

export default todoReducer;
```
