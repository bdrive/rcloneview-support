---
sidebar_position: 2
description: "Pelajari cara menggunakan RcloneView dengan Wasabi untuk menjelajahi, mencadangkan, menyinkronkan, dan memigrasikan data antara penyimpanan lokal dan cloud lainnya."
keywords:
  - rcloneview
  - wasabi
  - s3-compatible
  - cloud backup
  - cloud sync
  - cloud migration
  - file synchronization
  - gui
  - rclone gui
tags:
  - RcloneView
  - cloud-file-transfer
  - cloud-migration
  - cloud-backup
  - Tutorial
  - wasabi
date: 2025-02-20
author: Jay
slug: /
---

# Menggunakan Wasabi dengan RcloneView (Kompatibel S3)

RcloneView adalah aplikasi desktop yang memberi Anda Explorer dua panel yang visual untuk **rclone**. Aplikasi ini memungkinkan Anda menyalin, menyinkronkan, dan memigrasikan file antara **Wasabi** dan penyimpanan cloud atau lokal lainnya, tanpa menggunakan command line.

Dengan RcloneView Anda dapat:

- Menjelajahi bucket Wasabi Anda seperti folder lokal  
- Drag & drop file antara **disk lokal ↔ Wasabi** atau **Wasabi ↔ cloud lain**  
- Menjalankan transfer satu kali atau menjadwalkan tugas sinkronisasi berulang  

Jika Anda lebih suka melihatnya beraksi terlebih dahulu, Anda dapat menonton demo singkat:

<iframe
  src="https://www.youtube.com/embed/yKc6qS2DG2A"
  title="Wasabi + RcloneView Demo"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen
  loading="lazy"
  style={{aspectRatio: '16 / 9', width: '100%', maxWidth: '960px', height: 'auto', display: 'block', margin: '0 auto', border: 0}}
></iframe>

<br />

> Untuk informasi lebih lanjut tentang RcloneView, kunjungi situs resmi: [https://rcloneview.com](https://rcloneview.com)  


---

## 1. Unduh dan instal RcloneView

RcloneView tersedia untuk **Windows, macOS, dan Linux**.

1. Buka halaman unduhan: [https://rcloneview.com/src/download](https://rcloneview.com/src/download).  
2. Pilih installer untuk OS Anda (Windows, macOS, atau Linux).  
3. Instal dan jalankan **RcloneView**.

---

## 2. Menambahkan Wasabi sebagai remote di RcloneView

RcloneView memperlakukan Wasabi sebagai backend yang **kompatibel S3**. Anda membuat remote sekali dan kemudian menggunakannya kembali untuk menjelajah, menyalin, menyinkronkan, dan tugas terjadwal.

### 2.1 Prasyarat – Kunci akses dan endpoint Wasabi

Untuk menghubungkan RcloneView ke Wasabi, Anda memerlukan:

- **Access Key** / **Secret Key**  
- **Region / Endpoint URL** (misalnya region `ap-northeast-2` dan endpoint `s3.ap-northeast-2.wasabisys.com`)  

Silakan ikuti dokumentasi resmi Wasabi untuk membuat access key dan menemukan endpoint Anda:

- Dokumentasi Wasabi: [https://docs.wasabi.com/docs](https://docs.wasabi.com/docs)  
- Contoh: "[Creating a New Access Key](https://docs.wasabi.com/docs/creating-a-new-access-key)" atau "[Creating a Bucket](https://docs.wasabi.com/docs/creating-a-bucket)" (cari di dalam portal dokumentasi Wasabi).

Setelah Anda memiliki **Access Key**, **Secret Key**, dan **Endpoint**, kembali ke RcloneView.

### 2.2 Membuka wizard "New Remote"

1. Jalankan **RcloneView**.  
2. Dari menu atas, klik **`Remote` → `+ New Remote`**.  
   - Atau klik tab **`+`** di panel Explorer dan pilih **`New Remote`**.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>

### 2.3 Mengonfigurasi Wasabi sebagai provider yang kompatibel S3

1. Di dialog **New Remote**, cari `Wasabi`.  
2. Pilih tile provider **Wasabi**.  
3. Konfigurasikan koneksi:
   - **Remote name**: masukkan nama yang jelas, seperti `MyWasabi`.  
   - **Access Key ID**: tempel access key Wasabi Anda.  
   - **Secret Access Key**: tempel secret key Wasabi Anda.  
   - **Endpoint**: masukkan endpoint S3 Wasabi (misalnya `s3.ap-northeast-2.wasabisys.com`).  
4. Klik **Add Remote**.

<img src="/support/images/en/tutorials/add-new-wasabi-remote-configuration.png" alt="add new wasabi remote configuration" class="img-large img-center" />

### 2.4 Memverifikasi remote Wasabi

1. Buka **`Remote → Remote Manager`**.  
2. Pastikan remote Wasabi Anda (misalnya `MyWasabi`) terdaftar dan dapat dijangkau.

<img src="/support/images/en/tutorials/verify-wasabi-in-remote-manager.png" alt="verify wasabi in remote manager" class="img-large img-center" />

Untuk detail lebih lanjut, lihat panduan umum yang kompatibel S3:  
- [How to Add S3-Compatible Remote](/howto/remote-storage-connection-settings/s3)

---

## 3. Menjelajahi folder di Wasabi

Setelah remote dibuat, Anda dapat menjelajahi bucket dan objek di dalam Explorer RcloneView.

1. Di panel Explorer, klik tab **`+`**.  
2. Di daftar "Open Remote", pilih remote **Wasabi** Anda (misalnya `MyWasabi`).  
3. RcloneView membuka remote di sebuah tab dengan bucket yang muncul seperti folder tingkat atas.  
4. Klik dua kali pada bucket untuk menjelajahi isinya.

<img src="/support/images/en/tutorials/wasabi-remote-in-rcloneview-explorer.png" alt="wasabi remote in rcloneview explorer" class="img-large img-center" />

Untuk tips navigasi umum lainnya, lihat:  
- [File Management with RcloneView](/howto/rcloneview-basic/browse-and-manage-remote-storage)

---

## 4. Mengelola file antara Disk Lokal dan Wasabi

Bagian ini menunjukkan cara praktis untuk memindahkan data antara komputer lokal Anda dan Wasabi menggunakan RcloneView.

Anda dapat membuka:

- **Panel kiri**: disk lokal (misalnya `C:\` atau folder tertentu)  
- **Panel kanan**: bucket remote Wasabi Anda  

Kemudian gunakan drag & drop, perbandingan folder, atau tugas sinkronisasi tergantung alur kerja Anda.

---

### 4.1 Drag & drop antara Lokal dan Wasabi

Drag & drop adalah cara termudah untuk menyalin file.

1. Di panel kiri, buka **folder lokal** Anda (misalnya `D:\Media`).  
2. Di panel kanan, buka **bucket/folder Wasabi** Anda.  
3. Pilih file atau folder di sebelah kiri.  
4. Seret ke panel kanan dan lepaskan di lokasi yang diinginkan.  
5. RcloneView memulai tugas transfer; progres akan muncul di tab **Transfer**.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="wasabi drag and drop" class="img-large img-center" />
Untuk pemilihan banyak file, aksi klik kanan, dan lainnya, lihat:  
- [File Management with RcloneView](/howto/rcloneview-basic/browse-and-manage-remote-storage)

---

### 4.2 Membandingkan folder dan menyalin file yang berubah

Jika Anda ingin melihat **perbedaan** sebelum menyalin, gunakan fungsi **Compare**.

Kasus penggunaan umum: membandingkan folder pencadangan lokal dengan folder pencadangan Wasabi.

1. Di panel kiri, buka **folder sumber** (misalnya lokal atau cloud lain).  
2. Di panel kanan, buka **folder tujuan Wasabi**.  
3. Klik **`Compare`** di menu **Home** bagian atas.  
4. RcloneView menandai:
   - File yang hanya ada di kiri (hanya sumber)  
   - File yang hanya ada di kanan (hanya tujuan)  
   - File yang berubah (ukuran, timestamp, atau checksum berbeda)  
5. Pilih item yang ingin Anda pindahkan dan klik **Copy →** (atau **← Copy** untuk arah sebaliknya).

<img src="/support/images/en/tutorials/wasabi-and-local-compare-and-copy.png" alt="wasabi and local compare and copy" class="img-large img-center" />
Pelajari lebih lanjut:  
- [Compare Folder Contents](/howto/rcloneview-basic/compare-folder-contents)

---

### 4.3 Tugas sinkronisasi antara Disk Lokal dan Wasabi

Untuk pencadangan berulang atau mirroring, gunakan **Sync**. Sinkronisasi membuat tujuan sesuai dengan sumber.

Ada tiga pola umum:

- **Instant Sync** (jalankan sekali segera)  
- **Saved Sync Job** (jalankan ulang bila diperlukan)  
- **Scheduled Sync Job** (jalankan otomatis sesuai jadwal)  

> ⚠️ Sinkronisasi memperbarui tujuan agar sesuai dengan sumber; file yang hanya ada di tujuan dapat terhapus. Tinjau pengaturan sinkronisasi dengan cermat sebelum menjalankannya.

#### 4.3.1 Instant Sync (satu kali)

1. Buka **folder sumber** di panel kiri (misalnya, folder lokal).  
2. Buka **folder tujuan Wasabi** di panel kanan.  
3. Klik **`Sync`** pada menu **Home**.  

<img src="/support/images/en/tutorials/wasabi-and-local-instant-sync.png" alt="wasabi and local instant sync" class="img-large img-center" />

Kemudian, di dialog **Sync**:

1. Di **Configure Storage**, konfirmasi sumber dan tujuan.  
2. Secara opsional sesuaikan **Advanced Settings** atau **Filtering Settings**.  
3. Jalankan **Dry Run** terlebih dahulu jika Anda ingin melihat pratinjau perubahan.  
4. Klik **Run** untuk memulai sinkronisasi.

<img src="/support/images/en/tutorials/wasabi-configure-sync-job.png" alt="wasabi configure sync job" class="img-large img-center" />
Setelah menjalankan Sync, Anda dapat memantau progres transfer file secara real-time.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="wasabi real time monitoring transferring" class="img-large img-center" />

Referensi:  
- [Synchronize Remote Storages Instantly](/howto/rcloneview-basic/synchronize-remote-storages)

#### 4.3.2 Menyimpan Sync Job untuk digunakan kembali

Jika Anda akan menjalankan pencadangan lokal → Wasabi yang sama secara berkala:  
Konfigurasikan sinkronisasi seperti di atas (sumber di kiri, tujuan Wasabi di kanan).    

1. Di dialog Sync, pilih **Save to Jobs** alih-alih menjalankannya segera.  
2. Beri nama tugas yang deskriptif seperti `SyncLocalToWasabi`.  
3. Nanti, buka **Job Manager** dan jalankan tugas secara manual kapan pun Anda memerlukan pencadangan terbaru.

<img src="/support/images/en/tutorials/wasabi-saved-sync-job-execution.png" alt="wasabi saved sync job execution" class="img-large img-right" />  
Pada platform yang didukung (seperti Windows), RcloneView dapat menampilkan notifikasi sistem saat tugas selesai.

Referensi:  
- [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)  
- [Execute & Manage Jobs](/howto/rcloneview-basic/execute-manage-job)

#### 4.3.3 Menjadwalkan pencadangan Wasabi otomatis (Job Scheduling)

Untuk mengotomatiskan sepenuhnya pencadangan ke Wasabi, jadwalkan tugas sinkronisasi Anda.

> 📌 **Penjadwalan tugas adalah fitur PLUS.** Anda memerlukan [lisensi PLUS](https://rcloneview.com/src/pricing.html) untuk mengaktifkan penjadwalan.

Buka **Job Manager** dari toolbar.    
1. Pilih tugas sinkronisasi Wasabi Anda (misalnya `LocalToWasabi_DailyBackup`) dan klik **Edit Job**, atau buat tugas baru dari pilihan Explorer Anda saat ini.  
2. Buka **Step 4: Scheduling**.  
3. Aktifkan **Run whenever time units ~** dan atur jadwal (misalnya, setiap hari pukul 01:00).  
4. Gunakan **Simulate** untuk melihat pratinjau waktu eksekusi mendatang.  
5. Simpan tugas dan biarkan RcloneView tetap berjalan; tugas akan dijalankan secara otomatis.

<img src="/support/images/en/tutorials/scheule-automatic-wasabi-backup.png" alt="scheule automatic wasabi backup" class="img-large img-center" />


Untuk detail lebih mendalam:  
- [Job Scheduling and Automated Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)

---

### 4.4 Menggunakan Mount untuk bekerja dengan Wasabi di Windows Explorer

Anda dapat me-mount bucket Wasabi sebagai **drive atau folder virtual** di sistem Anda lalu menggunakan Windows Explorer (atau Finder di macOS) seperti biasa.

Alur umum:

Pastikan remote Wasabi Anda telah dikonfigurasi dan berfungsi.  
1. Pilih folder Wasabi yang ingin Anda mount.  
2. Klik ikon **Mount** di sudut kanan atas Explorer RcloneView.  
3. Klik tombol **Save and mount** untuk memulai mount.  
4. Setelah beberapa saat, drive atau folder baru akan muncul di OS Anda. Menjelajahi path tersebut membaca dan menulis data langsung dari Wasabi melalui RcloneView/rclone.

<img src="/support/images/en/tutorials/mount-wasabi-as-local-drive.png" alt="mount wasabi as local drive" class="img-large img-center" />
Informasi lebih lanjut:  
- [Mount Cloud Storage as a Local Drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

---

## 5. Di mana mendapatkan bantuan

- Dokumentasi RcloneView dan panduan cara: [https://rcloneview.com/support](https://rcloneview.com/support)  
- Portal Dokumentasi Wasabi: [https://docs.wasabi.com](https://docs.wasabi.com)  

Dengan menggabungkan penyimpanan objek Wasabi yang kompatibel S3 dengan manajemen tugas visual RcloneView, Anda dapat membangun alur kerja pencadangan, sinkronisasi, dan migrasi yang andal tanpa perlu mempelajari sintaks command-line rclone.
