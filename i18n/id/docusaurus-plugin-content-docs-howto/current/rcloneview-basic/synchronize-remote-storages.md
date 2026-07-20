---
sidebar_position: 5
description: "Pelajari cara langsung mencerminkan folder antara penyimpanan lokal atau cloud menggunakan fitur Sync RcloneView yang canggih. Termasuk pengaturan, filter, dry run, dan opsi penjadwalan."
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - sync folders
  - bidirectional sync
  - sync job
  - dry run
  - scheduled sync
  - job scheduling
  - Job Monitor
tags:
  - RcloneView
  - Cloud
  - Sync
  - cloud-storage
  - file-synchronization
  - job-scheduler
  - dry-run
  - Remote-Storage
date: 2025-06-04
author: Jay
---
# Sinkronisasi Remote Storage Secara Instan

Gunakan fitur **`Sync`** RcloneView untuk langsung mencerminkan folder antara remote cloud atau penyimpanan lokal.  

Panduan ini akan memandu Anda dalam menyiapkan dan menjalankan operasi sinkronisasi.
## Pilih folder sumber dan tujuan

Untuk memulai operasi sinkronisasi, Anda perlu menentukan folder **Source** dan **Destination**.

- Di panel **Explorer**, buka dua tab:
	- Folder yang dipilih pada **tab kiri** menjadi **Source**
	- Folder yang dipilih pada **tab kanan** menjadi **Destination**

- Anda juga dapat memasukkan path folder secara langsung menggunakan **Path Bar** di bagian atas setiap tab.
- Pengaturan ini dapat disesuaikan kemudian di jendela konfigurasi **Sync** jika diperlukan.

Setelah folder dipilih, klik tombol **`Sync`** pada menu **`Home`** di bagian atas untuk melanjutkan.
<img src="/support/images/en/howto/rcloneview-basic/sync-remote-folder-select.png" alt="sync remote folder select" class="img-medium img-center" />
## Menjalankan operasi sinkronisasi

Setelah memilih folder sumber dan tujuan, Anda dapat mengonfigurasi dan menjalankan sinkronisasi.


<div class="img-grid-3">
<img src="/support/images/en/howto/rcloneview-basic/sync-configure-storage.png" alt="sync configure storage" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/sync-advanced-settings.png" alt="sync advanced settings" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/sync-filtering-settings.png" alt="sync filtering settings" class="img-medium img-center" />
</div>

### Langkah 1: Verifikasi path folder

- Pada langkah **`Configure Storage`**, tinjau folder sumber dan tujuan yang telah dipilih.
- Pastikan keduanya sudah benar sebelum mengklik **Next**.

:::caution Cara kerja sinkronisasi
RcloneView Sync membuat source dan dest menjadi identik.  
Artinya, **`hanya destination yang dimodifikasi`**.  
- Isi folder **source** akan dicerminkan ke **destination**.  
- File yang sudah ada di destination namun tidak ada di source akan **dihapus**.  

👍 **Penting:** Rclone secara resmi hanya mendukung **sinkronisasi satu arah (one-directional sync)**.  
⚠️ **Sinkronisasi dua arah (=Bidirection)** tersedia sebagai **fitur beta** dan tidak didukung secara resmi. Fitur ini dapat menyebabkan perilaku tak terduga atau error, sehingga **tidak disarankan untuk penggunaan produksi**.
:::

<details>
<summary>Detail Configure Storage</summary>

<img src="/support/images/en/howto/rcloneview-basic/sync-config-storage-details.png" alt="sync config storage details" class="img-medium img-center" />

1. **Pilih folder source**.   
 - Klik ikon folder di panel kiri untuk memilih source.  
2. **Pilih folder destination**. 
- Klik ikon folder di panel kanan untuk memilih destination.  
3. **Tambahkan destination tambahan** (opsional). 
- Klik tombol **Add Destination** untuk melakukan sinkronisasi ke beberapa destination sekaligus. Anda dapat mengonfigurasi **sinkronisasi 1:N** jika diperlukan.  
4. **Pilih arah sinkronisasi**. 
 - **Hanya destination yang dimodifikasi**: Sinkronisasi dari source ke destination. Memperbarui atau menghapus isi destination agar sesuai dengan source.  
 - **Bidirection** (Beta): Membandingkan kedua folder dan menyinkronkan perubahan di kedua arah.  
⚠️ Mode ini dapat menimpa file baru secara tidak sengaja, jadi gunakan dengan hati-hati.  
5. **Buat direktori kosong (opsional)**.   
- Jika diaktifkan, direktori source yang tidak berisi file akan dibuat ulang sebagai folder kosong di destination.  

:::caution Menggunakan Bidirectional Sync di RcloneView
RcloneView menggunakan `bisync` (perintah beta di rclone) untuk melakukan sinkronisasi dua arah.    
Karena fitur ini masih **eksperimental**, kami menyarankan untuk meninjau [user manual](https://rclone.org/bisync/) resmi — terutama bagian [Limitations](https://rclone.org/bisync/#limitations) — sebelum mengaktifkannya.

Penggunaan bisync yang tidak tepat dapat menyebabkan kehilangan data. Harap gunakan dengan hati-hati.
:::


</details>

### Langkah 2: Advanced Settings (opsional)

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
   Jumlah transfer file yang dijalankan secara paralel. Terkadang berguna untuk mengatur ini ke angka yang lebih kecil jika remote sering mengalami timeout, atau lebih besar jika Anda memiliki bandwidth besar dan remote yang cepat.  
2. **`Number of multi thread transfers`**:  
   Saat menggunakan multi thread transfer, ini mengatur jumlah stream yang digunakan. Atur ke `0` untuk menonaktifkan multi thread transfer (Default 4). Saat mentransfer file di atas 256MB ke backend yang mendukungnya, rclone akan menggunakan beberapa thread untuk mentransfer file tersebut.  
3. **`Number of equaility checkers`**:  
   Checker melakukan pengecekan kesetaraan file selama sinkronisasi. Untuk beberapa sistem penyimpanan (misalnya S3, Swift, Dropbox), hal ini dapat memakan waktu cukup lama sehingga dijalankan secara paralel. Secara default, 8 checker dijalankan secara paralel. Namun, untuk backend yang responsnya lambat, Anda mungkin perlu menurunkan (bukan menaikkan) nilai default ini dengan mengatur `--checkers` ke 4 thread atau kurang.  


**Keamanan dan Integritas :**

5. **` Enable checksum to compare files`** :  
   Biasanya rclone akan melihat waktu modifikasi dan ukuran file untuk menentukan apakah file tersebut sama. Jika Anda mengaktifkan opsi ini, rclone akan memeriksa hash dan ukuran file untuk menentukan kesamaan file. Ini sangat berguna saat mentransfer antar remote yang menyimpan tipe hash yang sama pada objeknya, misalnya Drive dan Swift. Untuk detail remote mana yang mendukung tipe hash tertentu, lihat tabel pada [bagian overview](https://rclone.org/overview/).  


**Kontrol error :**

5. **`Retry the entire sync if it fails this many times`**:  
   Ulangi seluruh proses sinkronisasi jika gagal sebanyak angka ini (default 3). Beberapa remote bisa jadi tidak stabil, dan beberapa kali percobaan ulang membantu mengambil file yang gagal ditransfer karena error. Nonaktifkan retry dengan mengatur ke `1`.  

</details>



### Langkah 3: Filter file dan folder (opsional)

- RcloneView menerapkan filter dasar secara default untuk layanan seperti Google Docs atau Box Docs.
- Anda dapat menambahkan lebih banyak tipe file atau folder untuk dikecualikan dari sinkronisasi.

<details>
<summary>Detail Filtering Settings</summary>

<img src="/support/images/en/howto/rcloneview-basic/sync-filtering-settings-details.png" alt="sync filtering settings details" class="img-medium img-center" />

1. **`Don't sync files over`** :  
   Mengontrol **ukuran file maksimum** yang diizinkan untuk sinkronisasi.  
   Satuan default adalah MB.  
2. **`Don't sync files older than this`** :    
   Mengontrol **usia file maksimum** yang diizinkan untuk sinkronisasi.  
   Ini hanya berlaku untuk **file**, bukan direktori.  
   Gunakan satuan berikut:  
   `y` = tahun, `d` = hari, `h` = jam, `m` = menit, `s` = detik  (Contoh: 2y30d12h30m45s)  
3. **`Don't sync folders over this depth`** :   
   Jika diatur, Rclone hanya akan menyinkronkan folder dalam kedalaman yang ditentukan.  
   Misalnya, mengatur ini ke `1` hanya akan menyinkronkan file di direktori tingkat teratas.  
   Mengatur ke `2` akan menyinkronkan file dalam dua level folder pertama, dan seterusnya.
4. **Predefined Filters**.   
   Anda dapat dengan cepat menerapkan filter bawaan untuk tipe file umum seperti:  
   - Music, Video, Image, Document, Google Docs, Box Docs  
     Filter ini tersedia sebagai opsi bawaan dalam daftar filter.
1. **Others (= Custom Filters)**.  
   Anda dapat menentukan aturan kustom untuk mengecualikan atau menyertakan tipe file, folder, atau path tertentu.  
   Berikut beberapa contoh umum:  
   **`.iso`** : Mengecualikan semua file .iso.  
   **`/.git/*`** : Hanya mengecualikan file di dalam folder .git di root, bukan subfolder.  
   **`/.git/`** :  Mengecualikan seluruh folder .git di root, termasuk semua isinya.   
   **`.git/`** : Mengecualikan semua folder .git dan seluruh isinya, di mana pun lokasinya.   
   
   🔗 Untuk contoh dan sintaks yang lebih lanjut, lihat [Rclone Filtering Guide](https://rclone.org/filtering/#exclude-exclude-files-matching-pattern)


</details>

  
  
### Langkah 4: Jalankan sinkronisasi

- Setelah semua pengaturan selesai, klik **Run** untuk memulai proses sinkronisasi.

:::important Penjadwalan Sync. 
Untuk menjalankan tugas sinkronisasi pada tanggal dan waktu terjadwal, terlebih dahulu klik **Save to Jobs** untuk mendaftarkan tugas sinkronisasi sebagai job. Kemudian, jalankan **`Job Manager`** untuk mengatur jadwalnya.  

> ⚠️ **Penjadwalan job tersedia sebagai fitur PLUS.**   

Anda perlu membeli [**lisensi PLUS**](https://rcloneview.com/src/pricing.html) untuk mengaktifkan fungsi ini.
:::

### Simulasi: Menjalankan dry run (opsional)

Anda dapat menjalankan **Dry run** untuk mensimulasikan operasi sinkronisasi tanpa membuat perubahan aktual apa pun.

- Pratinjau ini menampilkan file mana yang akan disalin ke **Destination** dan file mana yang akan dihapus.
- Klik **`See details`** untuk melihat daftar lengkap operasi yang akan terjadi (misalnya, copy, create, delete) di destination.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run.png" alt="sync dry run" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run-details.png" alt="sync dry run details" class="img-medium img-center" />
</div>

## Memantau hasil sinkronisasi

Anda dapat memeriksa progres dan hasil operasi sinkronisasi secara real time.

### Status transfer (sedang berlangsung)

- Selama sinkronisasi berlangsung, buka tab **`Transfer`** untuk melihat progres real-time setiap file.
- Klik ikon **+** untuk memperluas dan memantau transfer file secara individual.
<img src="/support/images/en/howto/rcloneview-basic/sync-transfer-window.png" alt="sync transfer window" class="img-medium img-center" />

### Job yang selesai (setelah sinkronisasi)

- Setelah sinkronisasi selesai, buka tab **`Completed`** untuk melihat hasilnya.
- Klik ikon **+** untuk melihat detail tingkat file dari setiap job yang selesai.
<img src="/support/images/en/howto/rcloneview-basic/sync-completed-window.png" alt="sync completed window" class="img-medium img-center" />
:::tip Membuka remote yang tersinkronisasi dengan cepat
Di tab **`Completed`**, Anda dapat mengklik dua kali pada job yang telah selesai untuk membuka folder source dan destination sekaligus di panel Explorer.  
Ini memudahkan Anda untuk langsung meninjau folder yang telah disinkronkan.
:::

### Notifikasi alarm penyelesaian (Windows)

Setelah sinkronisasi selesai, popup notifikasi akan muncul di system tray Windows, menampilkan ringkasan operasi sinkronisasi.

  - Anda dapat mengklik **`See details`** untuk melihat rincian lengkap hasilnya.
<img src="/support/images/en/howto/rcloneview-basic/sync-completed-windows-alarm.png" alt="sync completed windows alarm" class="img-medium img-center" />
:::tip Melihat pesan alarm pada notifikasi Windows
Jika Anda melewatkan popup tersebut, Anda tetap dapat memeriksa notifikasi sinkronisasi dengan mengklik **ikon notifikasi** di **system tray Windows**.
<img src="/support/images/en/howto/rcloneview-basic/click-windows-alarm-notification.png" alt="click windows alarm notification" class="img-small img-left" />
:::



## Menyimpan operasi sinkronisasi sebagai Job

Jika Anda rutin melakukan tugas sinkronisasi yang sama, Anda dapat menyimpannya sebagai **Job** agar mudah digunakan kembali.

- Klik **`Save to Jobs`** setelah mengonfigurasi sinkronisasi Anda.
- Masukkan **Job Name**, lalu klik **Save** untuk menyimpan job tersebut.  
  - ❗Karakter yang diizinkan: `a–z`, `A–Z`, `0–9`, `-`, `_`, `.`
- Anda dapat menjalankan Job yang tersimpan tersebut nanti dari **`Job Manager`** hanya dengan satu klik.

<img src="/support/images/en/howto/rcloneview-basic/save-sync-to-jobs.png" alt="save sync to jobs" class="img-medium img-center" />
Anda dapat melihat dan menjalankan job yang tersimpan dengan mengklik toolbar **`Job Manager`** di menu Home.
<img src="/support/images/en/howto/rcloneview-basic/verify-job-in-job-manager.png" alt="verify job in job manager" class="img-medium img-center" />
