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
