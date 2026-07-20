---
sidebar_position: 6
description: "Pelajari cara membuat dan mengelola sync job di RcloneView untuk sinkronisasi folder remote yang berulang atau terjadwal."
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - sync job
  - job manager
  - scheduled sync
  - create sync
  - rclone automation
  - plus license
  - cloud storage
  - remote storage
tags:
  - RcloneView
  - Cloud
  - Sync
  - job-scheduler
  - create-job
  - Job-Management
date: 2025-06-04
author: Jay
---
# Membuat Sync Job

Anda dapat membuat tugas Sync yang sering digunakan sebagai **Job**, sehingga memungkinkan Anda menjalankannya berulang kali hanya dengan beberapa klik.  

Ada dua cara utama untuk membuat Job:  
- Membuat Job langsung dari tugas Sync (Instant Sync). 
- Menggunakan **Job Manager** untuk mengonfigurasi dan menyimpan Job secara manual. 

## Membuat Job dari Instant Sync

Anda dapat membuat Job dengan mengonfigurasi tugas Sync Anda dan mengklik **Save to Jobs** di jendela Sync.  

👉 Lihat: [Membuat Job Secara Instan dari Sync](/howto/rcloneview-basic/synchronize-remote-storages#save-sync-operation-as-a-job)

Anda dapat melihat dan menjalankan job yang tersimpan dengan mengklik toolbar **`Job Manager`** di menu Home.

## Membuat Job melalui Job Manager


### (Opsional) Pilih Folder Sumber dan Tujuan

Anda dapat secara opsional menentukan folder sumber dan tujuan sebelum membuat Job menggunakan **Job Manager**.  

Ini berguna jika Anda ingin menetapkan folder terlebih dahulu saat menambahkan job baru nanti.  

Sebagai alternatif, Anda dapat mengonfigurasi folder sumber dan tujuan langsung di jendela **Add Job** pada **Job Manager**.  

Untuk membuka Job Manager, klik tombol **Job Manager** dari toolbar Home.

<img src="/support/images/en/howto/rcloneview-basic/create-job-using-job-manager.png" alt="create job using job manager" class="img-medium img-center" />

### Menambahkan Job Baru

Untuk menambahkan job baru, klik **`Add Job`** di jendela modal **Job Manager** (=`Jobs`).  

#### Langkah 0: Buka Job Manager dan Klik `Add Job`

  Anda akan melihat jendela `Jobs` berikut. Klik tombol **Add Job** untuk membuka wizard pembuatan job.

<img src="/support/images/en/howto/rcloneview-basic/add-job-in-job-manager.png" alt="add job in job manager" class="img-medium img-center" />
  Wizard job akan memandu Anda melalui tiga langkah:

1. **Configure Storage** – Pilih folder sumber dan tujuan  
2. **Advanced Settings (opsional)** – Atur perilaku sync  
3. **Filtering Settings (opsional)** – Tentukan filter untuk jenis file atau folder
<div class="img-grid-3">
<img src="/support/images/en/howto/rcloneview-basic/add-job-configure-storage.png" alt="add job configure storage" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-advnaced-settings.png" alt="add job advnaced settings" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-filtering-settings.png" alt="add job filtering settings" class="img-medium img-center" />
</div>
#### Langkah 1: Configure Storage

- Pada langkah **`Configure Storage`**, tinjau folder sumber dan tujuan yang telah dipilih.
- Masukkan **`Job Name`**  ( ❗Karakter yang diizinkan: `a–z`, `A–Z`, `0–9`, `-`, `_` )
- Untuk menyinkronkan satu sumber dengan beberapa tujuan, klik **Add Destination** untuk menambahkan folder remote tambahan.  
  Ini memungkinkan sinkronisasi **1:N (satu-ke-banyak)**.  
- Pastikan semua folder telah diatur dengan benar sebelum mengklik **Next**.

:::caution Cara kerja sync
RcloneView Sync membuat sumber dan tujuan identik.  
Ini berarti **`hanya mengubah tujuan`**.  
- Konten folder **sumber** akan dicerminkan ke **tujuan**.  
- File yang sudah ada di tujuan tetapi tidak ada di sumber akan **dihapus**.  

👍 **Penting:** Rclone secara resmi hanya mendukung **sinkronisasi satu arah**.  
⚠️ **Sinkronisasi dua arah (=Bidirection)** tersedia sebagai **fitur beta** dan tidak didukung secara resmi. Fitur ini dapat menyebabkan perilaku tak terduga atau error, sehingga **tidak disarankan untuk penggunaan produksi**.
:::

<details>
<summary>Detail Configure Storage</summary>

<img src="/support/images/en/howto/rcloneview-basic/job-config-storage-details.png" alt="job config storage details" class="img-medium img-center" />

1. **`Job Name`**. 
 - ❗Karakter yang diizinkan: `a–z`, `A–Z`, `0–9`, `-`, `_` 
2. **Pilih folder sumber**.   
 - Klik ikon folder di panel kiri untuk memilih sumber.  
1. **Pilih folder tujuan**. 
- Klik ikon folder di panel kanan untuk memilih tujuan.  
1. **Tambahkan tujuan tambahan** (opsional). 
- Klik tombol **Add Destination** untuk menyinkronkan ke beberapa tujuan sekaligus. Anda dapat mengonfigurasi **sinkronisasi 1:N** jika diperlukan.  
5. **Pilih arah sync**. 
 - **Modifying destination only**: Menyinkronkan dari sumber ke tujuan. Memperbarui atau menghapus konten tujuan agar sesuai dengan sumber.  
 - **Bidirection** (Beta): Membandingkan kedua folder dan menyinkronkan perubahan di kedua arah.  
⚠️ Mode ini dapat menimpa file baru secara tidak sengaja, jadi gunakan dengan hati-hati.  
6. **Buat direktori kosong (opsional)**.   
- Jika diaktifkan, direktori sumber mana pun yang tidak berisi file akan dibuat ulang sebagai folder kosong di tujuan.  

:::caution Menggunakan Sinkronisasi Dua Arah di RcloneView
RcloneView menggunakan `bisync` (perintah beta di rclone) untuk melakukan sinkronisasi dua arah.    
Karena fitur ini masih **eksperimental**, kami menyarankan untuk meninjau [user manual](https://rclone.org/bisync/) resmi — terutama bagian [Limitations](https://rclone.org/bisync/#limitations) — sebelum mengaktifkannya.

Menggunakan bisync secara tidak tepat dapat menyebabkan kehilangan data. Harap gunakan dengan hati-hati.
:::


</details>

#### Langkah 2: Advanced Settings (opsional)

  - Advanced Settings mencakup opsi untuk:
	  - Performa transfer
	  - Metode koneksi
	  - Perilaku penanganan error

> 💡 Kami menyarankan menggunakan nilai default kecuali Anda memerlukan perilaku khusus.

<details>
<summary>Detail Advanced Settings</summary>

<img src="/support/images/en/howto/rcloneview-basic/sync-advanced-settings-details.png" alt="sync advanced settings details" class="img-medium img-center" /> 
**Performa :**

1. **`Number of file transfers`**:   
   Jumlah transfer file yang dijalankan secara paralel. Terkadang berguna untuk mengatur angka yang lebih kecil jika remote sering mengalami timeout, atau lebih besar jika Anda memiliki bandwidth besar dan remote yang cepat.  
2. **`Number of multi thread transfers`**:  
   Saat menggunakan multi thread transfer, ini mengatur jumlah stream yang digunakan. Atur ke `0` untuk menonaktifkan multi thread transfer (Default 4). Saat mentransfer file di atas 256MB ke backend yang mendukungnya, rclone akan menggunakan beberapa thread untuk mentransfer file.  
3. **`Number of equaility checkers`**:  
   Checker melakukan pengecekan kesetaraan file selama sync. Untuk beberapa sistem penyimpanan (misalnya S3, Swift, Dropbox) ini dapat memakan waktu cukup lama sehingga dijalankan secara paralel. Defaultnya adalah menjalankan 8 checker secara paralel. Namun, untuk backend yang responsnya lambat, Anda mungkin perlu menurunkan (bukan menaikkan) nilai default ini dengan mengatur `--checkers` ke 4 thread atau kurang.  


**Keamanan dan Integritas :**

5. **` Enable checksum to compare files`** :  
   Biasanya rclone akan melihat waktu modifikasi dan ukuran file untuk menentukan apakah file sama. Jika Anda mengaktifkan flag ini, rclone akan memeriksa hash dan ukuran file untuk menentukan apakah file sama. Ini sangat berguna saat mentransfer antar remote yang menyimpan jenis hash yang sama pada objeknya, misalnya Drive dan Swift. Untuk detail remote mana yang mendukung jenis hash tertentu, lihat tabel pada [overview section](https://rclone.org/overview/).  


**Kontrol error :**

5. **`Retry the entire sync if it fails this many times`**:  
   Mencoba ulang seluruh sync jika gagal sebanyak angka ini (default 3). Beberapa remote bisa tidak stabil, dan beberapa kali percobaan ulang membantu mengambil file yang gagal ditransfer karena error. Nonaktifkan percobaan ulang dengan `1`.  

</details>



#### Langkah 3: Filtering Settings (opsional)

- RcloneView menerapkan filter dasar secara default untuk layanan seperti Google Docs atau Box Docs.
- Anda dapat menambahkan jenis file atau folder lain untuk dikecualikan dari sync.

<details>
<summary>Detail Filtering Settings</summary>


<img src="/support/images/en/howto/rcloneview-basic/jobs-filtering-setttings-details.png" alt="jobs filtering setttings details" class="img-medium img-center" />
1. **`Don't sync files over`** :  
   Mengontrol **ukuran file maksimum** yang diizinkan untuk sync.  
   Satuan default adalah MB.  
2. **`Don't sync files older than this`** :    
   Mengontrol **usia file maksimum** yang diizinkan untuk sync.  
   Ini hanya berlaku untuk **file**, bukan direktori.  
   Gunakan satuan berikut:  
   `y` = tahun, `d` = hari, `h` = jam, `m` = menit, `s` = detik  (Contoh: 2y30d12h30m45s)  
3. **`Don't sync folders over this depth`** :   
   Jika diatur, Rclone hanya akan menyinkronkan folder dalam kedalaman yang ditentukan.  
   Misalnya, mengatur ini ke `1` hanya akan menyinkronkan file di direktori tingkat atas.  
   Mengaturnya ke `2` akan menyinkronkan file dalam dua tingkat folder pertama, dan seterusnya.
4. **Predefined Filters**.   
   Anda dapat dengan cepat menerapkan filter bawaan untuk jenis file umum seperti:  
   - Music, Video, Image, Document, Google Docs, Box Docs  
     Filter ini tersedia sebagai opsi bawaan dalam daftar filter.
1. **Others (= Custom Filters)**.  
   Anda dapat menentukan aturan khusus untuk mengecualikan atau menyertakan jenis file, folder, atau path tertentu.  
   Berikut beberapa contoh umum:  
   **`.iso`** : Mengecualikan semua file .iso.  
   **`/.git/*`** : Hanya mengecualikan file di dalam folder .git di root, bukan subfolder.  
   **`/.git/`** :  Mengecualikan seluruh folder .git di root, termasuk semua isinya.   
   **`.git/`** : Mengecualikan semua folder .git dan semua isinya, terlepas dari lokasinya.   
   
   🔗 Untuk contoh dan sintaks yang lebih lanjut, lihat [Rclone Filtering Guide](https://rclone.org/filtering/#exclude-exclude-files-matching-pattern)


</details>


#### Langkah 4: Scheduling (Tersedia dengan PLUS License)

Job scheduling memungkinkan Anda menjalankan job secara otomatis pada interval atau waktu tertentu.   

💡 Fitur ini tersedia secara eksklusif dengan [**PLUS license**](https://rcloneview.com/src/pricing.html).  

Untuk detail lebih lanjut, lihat [Setting Up a Job Schedule](/howto/rcloneview-advanced/job-scheduling-and-execution).   

Terakhir, tinjau job yang telah Anda buat dalam daftar untuk memastikan semuanya telah diatur dengan benar.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/add-job-scheduling.png" alt="add job scheduling" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-completed.png" alt="add job completed" class="img-medium img-center" />
</div>

  

