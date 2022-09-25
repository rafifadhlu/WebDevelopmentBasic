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

![Tampilan Git Bash](/atampilangitbash.png "San Juan Mountains")

setelah mengetahui apa itu git bash selanjutnya kami mempelajari Command dasar dalam pengoperasian Git Bash. dalam penggunaanya baik CLI maupun GUI filesystem dalam menyajikan data itu sama, apabila di GUI terdapat file

```
- folder1
- folder2
    - file.md
    - index.html
```
maka bisa di baca : di root ini terdapat dua folder, yaitu `folder1` dan `folder2`, di dalam `folder2` terdapat dua file didalamnya yaitu `file.md` dan `index.html`. setelah mengetahui filesystem, kita belajar mengenai Unix Command dasar.

<h3>Unix Command<h3>

<h4>PWD</h4>
PWd ini command atau perintah yang di tempati pada saat ini.
syntax penulisannya: 
```
pwd
```
dan akan menghasilkan

![tampilanpwd](/tampilangitbash.png)

