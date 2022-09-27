<h1>Ringkasan Minggu ke 2 Development Basic</h1>

Selama seminggu sudah kegiatan pembelajaran dilaksanakan dan banyak hal menarik dan pembelajaran yang sangat membantu untuk mencapai diri ke dalam dunia kerja.
panduan dari kakak-kakak mentor dan juga pemateri saat live class banyak membantu dalam pengembangan diri saya. Pada pembelajaran minggu ini membahas beberapa
materi yaitu 

- Unix Command Line
- Git & Github Dasar
- HTML Dasar
- CSS Dasar
- Algorithm & Data Structure
- JavaScript Dasar

<h2> Unix Command Line </h2>
Pada materi awal ini yaitu Unix Command Line diajarkan bagaimana menggunakan Command dasar yang biasa digunakan untuk sebuah CLI untuk dikirimkan kepada shell. Sebelumnya apasih itu Shell?. 
<dl>
    <dt> Shell</dt>
    <dd>Shell adalah program yang menerima perintah dari user setelah itu meneruskannya ke sistem yang ingin di eksekusi.
</dl>

selanjutnya dalam menerima perintah, Shell mempunyai dua jenis untuk menerimanya yaitu melalui CLI dan GUI. 
Definisi CLI dan GUI itu sendiri adalah:
<dl>
    <dt>CLI </dt>
    <dd>Command Line Interface kepanjangan dari CLI yang bertugas untuk menulis perintah dan berbasis teks. 
</dl>

Sehingga dari definisi diatas dapat dilihat proses yang dilaksanakan yaitu

<code>CLI/GUI -> Shell -> sistem 
</code>

Apabila menggunakan CLI harus menggunakan command atau perintah untuk mengoperasikannya. seperti halnya dengan GUI, apabila ingin memindahkan file bisa langsung klik kanan folder yang ingin dipindah lalu klik kanan pilih cut. CLI pun sama, yang membedakannya hanya ia melalui text. pada pembelajaran kemarin diajarkan Command dasar menggunakan Git Bash. lalu apa itu git bash? 
<dl>
    <dt>Git Bash</dt>
    <dd>Git bash adalah aplikasi yang di khususkan untuk windows untuk  emulasi git yang dimana untuk menjalankan fitur-fitur bash .
</dl>

oiyaa!, Sebelum menggunakan Git Bash, kami di minta untuk menginstall Git Bash untuk windows yang ada di mbah gugel. setelah mendownload lakukan instalasi Git Bash menggunakan Installer yang sudah di download tadi setelah itu open Git Bash yang sudah ter install. sehingga tampilan yang terlihat yaituu seperti dibawah ini:

setelah mengetahui apa itu git bash selanjutnya kami mempelajari Command dasar dalam pengoperasian Git Bash. dalam penggunaanya baik CLI maupun GUI filesystem dalam menyajikan data itu sama, apabila di GUI terdapat file

```
- folder1
- folder2
    - file.md
    - index.html
```
maka bisa di baca : di root ini terdapat dua folder, yaitu `folder1` dan `folder2`, di dalam `folder2` terdapat dua file didalamnya yaitu `file.md` dan `index.html`. setelah mengetahui filesystem, kita belajar mengenai Unix Command dasar.

<h3>Unix Command<h3>

<h4>pwd</h4>
pwd kependekan dari print working directory command atau perintah ini menampilkan tempat yang di tempati pada saat ini.

syntax penulisannya: 

```
pwd
```

<h4>ls</h4>
ls kependekan dari list files yang digunakan untuk melihat isi konten dari sebuah direktori. apabila perintah ini dijalankan akan muncul list konten yang ada di dalam direktori.

syntax penulisannya: 

```
ls
```

<h4>cd</h4>
cd kependekan dari change directory yang digunakan untuk berpindah directory. misal dari directory A ke directory B.

syntax penulisannya: 

```
cd /folder-tujuan
```

<h4>mkdir</h4>
mkdir kependekan dari make directory yang digunakan untuk membuat sebuah directory.

syntax penulisannya: 

```
mkdir <nama-direktori>
```

<h4>touch</h4>
touch merupakan command yang digunakan untuk membuat suatu file

syntax penulisannya: 

```
touch <nama-direktori + format file>
```

<h4>cp</h4>
cp merupakan command yang digunakan untuk membuat suatu file

syntax penulisannya: 

```
cp <nama-file> <direktori-tujuan>
```

<h4>rm</h4>
rm merupakan kependekan dari remove. command ini digunakan untuk menghapus suatu file & directory

syntax penulisannya: 

```
rm <nama-file> 

atau 

rm -f <nama-file> 
(command rm -f ini akan memaksa menghapus dan mengabaikan konfirmasi penghapusan)
```

<h4>mv</h4>
mv merupakan singkatan move, dalam unix, tidak ada command untuk menghapus sehingga rename file bisa menggunakan mv

syntax penulisannya: 

```
rename files
mv <nama-file1> <nama-pengganti> 
(nama-file1 akan terhapus dan diganti dengan nama-pengganti yang mengandung konten sebelumnya)

move files
mv <nama-file1> /<direktori-tujuan>
(nama-file1 akan di pindahkan ke direktori-tujuan)
```

<h2> Git & Github </h2>
yeyy pembelajaran unix command lain sudah dilaluii, selanjutnya diberikan materii ajar mengenai Git dan Github. seperti sebelumnya, kita berkenalan dulu. 

<h4>Apa sih Git?</h4>
Git adalah salah satu VCS. apa itu vcs? video call syariah, bukan euy. VCS disini itu yang berarti Version Contro System, yang mengelola perubahan dari sebuah dokumen, website, program komputer ataupun yang lain. jadi Git ini yang mengelola kalo ada update. gitu pokoknyaa.

okee lanjut!

Git tadi udah kan ya, selanjutnya

<h4> Apa sih Git Hub?</h4>
nahh, Git hub ini bisa dibilang komunitasnyaa atau tempat untuk menyimpan project atau repository dari local repository disebut juga komputer kita.
terus kalo mau kirim atau uploadnya gimana? okee aku jelasin yaa. kemarin selama pembelajaran di ajarkan cara inisialisasi git pada local repo dan cara menggunakan command add, commit, remote, push. 

wah banyak juga ya >_<. 
dikit ah, ngeluh terus lu, baru segitu aja ngeluh gimana mau jadi kaya kakak-kakak skilvul.

dari pelajaran kemarin diajarin kann cara-caranya. berikut penjelasan commandnya sekaligus cara kirim ke repo menggunakan git.

<h3>1. Step one</h3>
pertama kamu harus menginisialisasi dulu tuh si Git nya. dengan cara ketik

```
git config --global user.name
git config --global user.email

git config ini mengiinisialisasi folder yang ditunjuk untuk menambahkan profile, 
git config harus berada di satu folder karena kalau tidak, pada saat mau add dan commit, 
akan banyak file dan folder yang tidak seharusnya masuk ke dalam git ini
```

kenapa harus git init? gabis git keren gitu? itu udah bawaan bambang-_-,
lanjutttt

selanjutnyaa kalo sudah ter inisialisasi bisa cek menggunakan `git diff ` . `git diff` itu berfungsi untuk melihat apakah sudah berhasil menambahkan user nama dan emailnya atau belum


<h3> 2. Step two </h3>
setelah step tersebut dilaksanakan inisialisasi seperti yang dijelaskan kak auzan, git init ini layaknya kartu memori yang dipasang ke user

dengan ketik

```
git init
```


<h3>3. Step three</h3>
setelah di inisialisasi selanjutnya buat file di dalam folder yang sudah di tandai dengan git init untuk dapat menyimpan baik di local repository maupun remote repository

<h3>4. Step four </h3>
apabila sudah membuat suatu file selanjutnya di lakukan pengecekan dengan cara ketik git status untuk melihat apakah ada untracked files atau tidak. jika ada dilakukan "git add ." untuk menambahkannya ke fase staging. 

</h3>5. Step FIve </h3>
Langkah terakhir yang harus dilakukan yaitu, git commit -m "nama pesan yang diinginkan" untuk menambah update an di local repository.

lalu bagaimana cara mengupload ke github?

```
1. Buat repo di akun github yang udah dibuat
2. setelah create repo copy 
3. Masuk ke git bash dan ketikan git remote add origin https://github.com/user/repo.git sesuaikan dengan link yang sudah dibuat
4. setelah sudah di connect ke dalam remote repo ketik git push -u origin "main/master" disesuaikan dengan gitbash main atau master
```



<h2>HTML dasar </h2>

masukk ke materi ajar HTML. HTML ini adalah bahasa markup atau bahasa struktur yang digunakan untuk membangun sebuah website. HTML digunakan untuk strukturnya, CSS untuk styling seperti baju, tas, kacamta, dan Javascript fungsi-fungsi yang ada di HTML. untuk CSS dan javascript nanti akan saya tulis sesuai urutan pembelajarannyaa.

untuk menulis bahasa HTML ini banyak sekali software yang bisa digunakan tauu, salah satunya VSCODE yang digunakan banyak orang. 
terus apa aja sih code editor?  

ada beberapa code editor yang biasa digunakan yaitu:

1. notepad++
2. Sublim text - eh kurang "e" - Sublime Text -nah bener ini 
3. VIM
4. Visual Studio Code
5. Atom

banyakk sih code editor yang ada tapi disini saya hanya tau beberapa yang saya pernah dengar. mau pake text editor mana aja terserah yang membedakan dari satu dan lainnya yaitu dari fitur dan UX yang berbeda, gunain text editor sesuai kebutuhan dan pilih yang nyaman. kek dia dan aku hwhwhw.

setelah mengetahui text editor yang ada, mulai masuk pembuatan dan pengenalan HTML. disini saya menggunakan Visual Studio Code karena enak dan nyaman.

<h3> Membuat HTML sederhana </h3>
nahh masukk ke pengaplikasian HTML nih. seperti yang sudah dijelaskan diatas, HTML merupakan bahasa struktur atau pondasi. sehingga kita harus menyusun kode HTML untuk menjadi sebuah struktur. 

<h4>Web sederhana</h4>

Pembuatan struktur saat ini yang dimana sudah HTML5 kita dapat menggunakan Semantic HTML. apa itu Semantic HTML? Semantic HTML itu sturktur penulisan supaya dapat di baca dan mudah dimengerti oleh orang lain. karena didalam Semantic HTML terdapat beberapa tag seperti dibawah ini

Semantic HTML
```
<!html>
    <header></header> (sesuai maknanya header, ada di atas sebuah website. biasanya sebagai navigation bar)
    <main></main> (ini juga sama, main yang berarti utama, atau isi dari sebuah website yang ingin dibangun)
    <footer></footer> (ini juga sama kakk, footer ada dibawah dari website yang disusun)
</html>
```

jadi seperti itu yang namanya semantic HTML.

lanjutt~ 

setelah mengetahui Semantic HTML masuk ke dalam pengimplementasiannya, disini saya ingin menambahkan judul untuk website yang ingin dibuat.

dengan penulisannya menggunakan tag `<h1>`

```
<!html>
    <h1> ini judul </h1>
<html>
```
oiyaa, apabila menggunakan vscode untuk melihat hasil dari website yang sudah di buat bisa menggunakan Plugin Live server yang perlu di install untuk menggunakanya. Setelah menginstall Plugin Live server, maka hasil yang muncul akan seperti dibawah ini

img

Selain title menggunakan tag `<h1>`tersebut terdapat tag lainnnya, yaitu:
```
    <h1> ini judul </h1>
    <p> ini digunakan sebagai paragraph</p>
    <img src=""> attribute ini digunakan untuk menambahkan gambar atau picture ke dalam web yang dibuat
    <video> 
        <source src="" type="video/mp4"> attribute ini digunakan untuk mengambil video dari sumbernya
    </video>
```
Setelah penyusunan selesai, mulai dari HTML, CSS, ataupun JavaScript. Selanjutnya bisa di deploy atau di publikasikan ke internet dengan bantuan dari Website untuk deploy, seperti Heroku, Netlify.

<h2>CSS</h2>

yeyy masuk ke CSS. diatas tadi sudah sedikit dijelaskan yaa kan, CSS itu layaknya sebuah pakaian dari sebuah manusia, yang mana dia mempercantik tampilan atau visual dengan susunan kode yang diketik. 

cara menggunakan CSS ini ada 2 macam ya ges.

<dl>
    <dt>Internal</dt>
    <dd>Cara yang pertama yaitu dengan cara menyisipkan secara langsung ke dalam code HTML.
    Terus gimana sih caranya?
</dl>
Cara penerapannya kaya gini gais

```
<!html>
    *<style>
        h1{

        }
    </style>
    <body>
    <h1> </h1>
    </body>
</html>


pada internal css menggunakan tag <style></style> setelah itu masukan menggunakan selector dari suatu elemen 
yang ingin di perbagus tampilannya. Bisa juga langsung di dalam tag seperti dibawah ini,

<!html>
    <body>
    <h1 style="font-weight= ;"> </h1>
    </body>
</html>
```
<dl>
    <dt>External</dt>
    <dd>Cara yang kedua yaitu dengan cara External. atau bisa disebut juga diluar dari file html yang dibuat. jadinya nanti ada satu file bernama bebas dengan format .css
    Terus gimana sih caranya?
</dl>
Cara penerapannya kaya gini gais

di file pertama dengan format .html kita buat seperti dibawah. selanjutnya kita buat file bernama style.css dan dihubungkan
menggunakan tag `<link rel>`. lebih lengkap seperti dibawah ini
```
<!html>
    <link rel="stylesheet" href="styles.css">
    <body>
    <h1 id="tes'> </h1>
    <h1 class="tes'> </h1>
    </body>
</html>

nah di dalam file css yang sudah dibuat tadi kita pilih menggunakan selector yang tersedia untuk memperbagus tampilannya
selector ada beberapa macam yaitu

.tes = untuk memilih atau select elemen yang mempunyai class dengan nama test
#tes = untuk memilih atau select elemen yang mempunyai id dengan nama test
sedangkan kalau tidak ada spesifik nama yang dibuat bisa ditambahkan langsung dengan mengetik elemen yang dibuat

sebagai contoh dengan html yang sudah dibuat diatas, maka file css perlu diiisi;

.tes{
    background-color = red; -> disini background akan berubah menjadi merah
    color = red; -> apabila menggunakan color saja, yang berubah merupajan isi atau text dari elemen <h1>
}

```
tapii ada satu hal lagi nih, pembuatan website sederhana belum sempurnaa. kenapa? karena belum bisa mengikuti tampilan dari berbagai macam layar. loh kok bisa? iyaa jadi perlu di buat responsive menggunakan `media queries`. gimana tu cara pakainya kack? okee masukk ke caranya.

<h3> Penggunaan Media Query </h3>

```
@media only screen and (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}

untuk membuat web kita menjadi responsive diperlukan membuat media query seperti diatas.
```

pada media queries diatas terdapat attribute `(max-width: 600px)` yang berarti tampilan akan menyesuaikan sampai batas maksimal yaitu 600px. media queries ini disesuaikan dengan kebutuhan yang diperlukan.

<h3>Penggunan Display Flexbox</h3>
Flexbox ini digunakan untuk mempermudah dalam membuat responsive dan layoutingnya. penulisannya ini ditulis di dalam file css yang sudah dibuat dengan syntax:

```
.h1{
    display:flex;
}
```
<h2>Algoritma & Data Structure</h2>

Pada materi kali ini membahas mengenai sebuah Algoritma dan data struktur. Algoritma itu sendiri adalah langkah-langkah terbatas yang digunakan untuk menyelesaikan suatu persoalan. Sebuah algoritma itu penting dalam programming karena tanpa algoritma, penyelesaian suatu masalah bisa memakan waktu yang sangat lama dan tidak efisien, serta memakan banyak ruang. Maka dari itu programmer di tuntut untuk membuat algoritma yang efektif dan efisien supaya menghasilkan kode yang bersih atau clean code. Maka dari itu terdapat sebuah cara atau metode yang ditemukan yaitu bernama Big O Notation untuk menghitung efektifitas algoritma yang sudah dibuat.

Algoritma juga dapat berbagai macam bentuknya. yang pertama ada `Pseudocode` dan `flowchart`.
contoh pseudocode:

dengan kasus
Ari lapar mau buat indomie

dari kasus tersebut butuh tahapan-tahapan untuk ari membuat indomie. tahapannya yaitu:

`Ari ambil mie -> setelah mie di ambil siapkan alat-alat makan -> ambil panci untuk masak -> taruh ke atas kompor dan ambil air untuk di panaskan -> jika sudah mendidih buka indomie yang sudah diambil -> masak mie ke dalam panci -> setelah matang tiriskan ke piring -> gunting bumbu dan taruh ke indomie -> aduk. dan mie siap disajikan`

dari tahapan tersebut bisa dilihat bahwa itu adalah algoritma dari ari membuat indomie. 

dalam programan sebagai contoh kasus perulangan

case : ingin menampilkan bilangan 1 - 10;

dari kasus tersebut bisa menggunakan while maupun for. disini saya praktik menggunakan for

syntax dari for itu sendiri adalah
```
for(let i = variabel awal; i<batas variabel; i++){
    consolo.log
}

maka dengan syntax tersebut bisa di inputkan

for(i=0; i<=10; i++){
    console.log(i);
}

hasilnya program akan output bilangan dari 1 -10;
```

<h2>JavaScript</h2>

Materi terakhir yang diberikan minggu ini adalahh jeng jeng jengg... Javascriptt. Javascript ini merupakan Bahasa Pemrograman yang digunakan untuk menambahkan fungsi atau tampilan seperti foto berjalan, clickable navigation, dan semacamnya.

seperti bahasa program pada umumnya Javascript juga memiliki tipe data umum, seperti:
- Bolean -> tipe data yang biasa digunakan untuk menilai benar atau salah. true / false
- String -> tipe data ini merupakan tipe data yang berisi gabungan angka,huruf,simbol
- Integer -> tipe data ini menampung angka apapun yang bernilai bilangan bulat
- Float -> tipe data ini dapat membaca koma dibelakang angka. Misal : 3,5

<h3> Pengimplementasian javascript </h3>

 Dengan tipe data diatas bisa kita gunakan sesuai kebutuhan. sebagai contoh kita akan menggunakan tipe data Bolean.
 sebelumnya untuk menjalankan javascript, kita harus membuat sebuah file html. kenapa? karena javascript merupakan bahasa yang tidak bisa berjalan sendiri. sehingga kita diminta membuat file html disatu folder yang sama. setelah sudah dilakukan connect untuk menghubungkan antara HTML dan file javascript yang sudah dibuat. gimana kak caranya? 

 nah untuk menghubungkan Javascript ini menggunakan tag `<script>` dan ditambahkan atribut untuk menghubungkannya, jadi kaya dibawah ini
 ```
 <script src="nama-file.js"></script>
 penenmpatannya biasa di dalam body di file html yang ada
 ```
dan untuk menjalankannya, cukup menjalankan file HTML menggunakan Live server dari Vscode. setelah itu masuk ke browser dan masuk ke developer tool atau biasa disebut inspect elemen dan masuk ke console log.

<h3> Perulangan di javascript </h3>

```
for(let i = variabel awal; i<batas variabel; i++){
    consolo.log
}

maka dengan syntax tersebut bisa di inputkan

for(i=0; i<=10; i++){
    console.log(i);
}

hasilnya program akan output bilangan dari 1 -10;
disini kita menggunakan let karena let paling terbaru pengembangan dari var dan dapat menampung tipe data string,number.
```

programnya sama ya kaya di materi algoritma? yass saya copy paste doang, karena perulangan di javascript seperti itu. sebetulnya jenis for itu ada beberapa tapi disini dijelaskan for pada umumnya. lalu bagaimana kalu conditional gitu? okee kita masuk ke conditional ya

<h3> kondisi pada javascript</h3>

contoh kasus : memberikan output genap jika di input angka genap

penyelesaian:

```
let bilangan = 10;

if(bilangan % 2 == 0){
    return "ini genap"
}else{
    return "ini ganjil"
}

penjelasan:

di dalam if menggunakan modulus (%2 == 0) untuk menentukan sebuah bilangan yang akan di hitung dan apabila hasilnya 
"true" maka return nilai "ini genap"
```

Selesai sudah materi yang diajarkan pada minggu ini. Sekian dari saya lebihnya di allah kurangnya di saya. terima kasih kakak mentor yang sudah memberikan materi ajar kepada saya dan teman-teman lainnya.

Hv a nice day :)