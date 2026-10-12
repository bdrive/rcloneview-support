---
slug: backup-google-photos-external-drive-nas-rcloneview
title: "Cara Mencadangkan Google Photos ke Drive Eksternal atau NAS — Google Takeout + RcloneView"
authors:
  - tayson
description: "Google Photos tidak lagi mengizinkan aplikasi pihak ketiga mengunduh pustaka foto Anda yang sudah ada. Ekspor dengan Google Takeout ke Google Drive, lalu gunakan RcloneView untuk menyalin hasil ekspor ke drive eksternal, NAS, atau cloud lain — dan pastikan foto baru tetap tercadangkan dengan RcloneView Mobile."
keywords:
  - pencadangan google photos
  - google photos ke drive eksternal
  - google photos ke nas
  - google takeout ke nas
  - pencadangan google takeout
  - google photos rclone
  - pembatasan api google photos
  - simpan google photos secara lokal
  - ekspor google photos
  - pencadangan foto rcloneview mobile
tags:
  - RcloneView
  - google-photos
  - backup
  - cloud-storage
  - sync
  - nas
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cara Mencadangkan Google Photos ke Drive Eksternal atau NAS — Google Takeout + RcloneView

> Sejak 31 Maret 2025, Google Photos hanya mengizinkan aplikasi pihak ketiga — termasuk rclone dan RcloneView — melihat foto yang mereka unggah sendiri. Cara yang andal untuk mengeluarkan pustaka foto Anda yang sudah ada adalah Google Takeout, dan RcloneView melanjutkan dari sana.

Google Photos menyimpan foto dan video selama bertahun-tahun yang tidak tergantikan, tetapi kuota penyimpanan, akun yang terkunci, dan perubahan kebijakan semuanya bisa memutus akses Anda ke sana. Banyak panduan — termasuk versi lama panduan ini — menyarankan Anda menghubungkan Google Photos ke alat sinkronisasi lalu mengunduh semuanya. Cara itu sudah tidak berfungsi: Google menutup akses tersebut pada 2025.

Panduan ini menunjukkan jalur yang berfungsi saat ini. Ekspor pustaka Anda dengan **Google Takeout** langsung ke Google Drive, biarkan **RcloneView** menyalin hasil ekspor ke drive eksternal, NAS, atau cloud lain, dan gunakan **RcloneView Mobile** agar foto baru tidak lagi melewati Google Photos sebagai perantara.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Apa yang Berubah: Pembatasan API Google Photos (2025)

Pada 31 Maret 2025 Google menghapus scope pustaka penuh dari Photos Library API. Dalam kata-kata Google sendiri, aplikasi pihak ketiga "can now only list, search, and retrieve albums and media items that were created by your app." Panggilan album bersama mengembalikan `403 PERMISSION_DENIED`.

Inilah artinya saat Anda menambahkan remote **Google Photos** di RcloneView:

- **Remote terlihat hampir kosong.** Remote hanya menampilkan foto yang diunggah melalui RcloneView atau rclone. Unggahan dari ponsel, unggahan dari web, dan semua yang lain di pustaka Anda tidak terlihat oleh API, sehingga job Copy melaporkan "no changes" atau menyalin nol file.
- **Ini bukan masalah koneksi.** RcloneView 1.6 dan yang lebih baru menjelaskan pembatasan ini di dalam aplikasi saat Anda membuka remote Google Photos, alih-alih menampilkan sesuatu yang tampak seperti akun kosong.
- **Album bersama sama sekali tidak dapat diakses.**
- **Anda memerlukan OAuth client ID sendiri.** Client ID Google Photos bersama milik rclone akan dihentikan sepanjang 2026. Ketika koneksi tidak dapat dibuat, wizard koneksi RcloneView memandu Anda membuatnya.

Cara resmi dari Google untuk mengekspor pustaka yang sudah ada adalah **Google Takeout** — jadi di sinilah pencadangan dimulai.

## Langkah 1: Ekspor Pustaka Anda dengan Google Takeout

1. Buka [takeout.google.com](https://takeout.google.com) dan masuk dengan akun yang memiliki foto tersebut.
2. Klik **Deselect all**, lalu centang **Google Photos** saja. Gunakan **All photo albums included** untuk membatasi ekspor ke album atau tahun tertentu jika Anda ingin membagi pustaka besar menjadi beberapa kelompok.
3. Di bawah **Destination**, pilih **Add to Drive**. Google menempatkan hasil ekspor di folder `Takeout` pada Google Drive Anda, yang dapat langsung dijangkau RcloneView. Dropbox, OneDrive, dan Box juga tersedia — RcloneView mendukung ketiganya — dan **Send download link via email** berfungsi jika Anda lebih suka menyalin dari komputer Anda.
4. Pilih tipe arsip (`.zip`) dan ukuran (1 GB hingga 50 GB). Arsip yang lebih besar berarti lebih sedikit file yang harus ditangani.
5. Klik **Create export**. Google akan mengirim email saat ekspor siap; pustaka besar bisa memakan waktu berjam-jam bahkan berhari-hari.

Hal yang perlu diketahui sebelum memulai:

- Setiap foto dan video tiba dalam kualitas asli bersama file metadata `.json` yang berisi tanggal pengambilan, deskripsi, dan lokasi.
- Ekspor yang ditambahkan ke Google Drive dihitung dalam penyimpanan Google Anda sampai Anda menghapusnya, jadi pastikan Drive memiliki ruang yang cukup — atau ekspor secara bertahap.
- Takeout adalah ekspor satu kali tanpa mode inkremental. Langkah 4 membahas cara menjaga foto mendatang tetap tercadangkan tanpa mengulanginya.

## Langkah 2: Tambahkan Google Drive di RcloneView

1. Buka RcloneView dan klik **Add Remote** di Remote Manager.
2. Pilih **Google Drive** dan selesaikan [login OAuth berbasis browser](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login).
3. Buka remote tersebut di [Explorer](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage) dan navigasikan ke folder `Takeout`. Setiap ekspor berupa satu file `.zip` terpisah (atau beberapa, untuk pustaka yang lebih besar).

<img src="/support/images/en/blog/open-multiple-google-drive-remotes.png" alt="Remote Google Drive dengan folder Takeout terbuka di RcloneView Explorer" class="img-large img-center" />

## Langkah 3: Salin Hasil Ekspor ke Tujuan Pencadangan Anda

RcloneView menyalin arsip persis apa adanya — tidak mengekstraknya — sehingga Anda cukup mengekstrak sekali di mesin tujuan setelah penyalinan selesai.

### Hard drive eksternal

1. Sambungkan drive dan catat path-nya (`E:\` di Windows, `/Volumes/...` di macOS, `/media/...` di Linux).
2. Buat [job Copy](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs): **Source** = folder `Takeout` pada remote Google Drive Anda, **Destination** = sebuah folder di drive.
3. Jalankan job, lalu ekstrak arsip di drive.

Gunakan **Copy**, bukan Sync: job Copy tidak pernah menghapus apa pun di tujuan.

### Synology NAS

RcloneView [mendeteksi perangkat Synology NAS](https://rcloneview.com/support/tutorials/synology-nas-cloud-transfer) di jaringan Anda secara otomatis, sehingga NAS muncul di tab Local tanpa konfigurasi apa pun.

1. Buat job Copy dengan folder `Takeout` sebagai sumber dan folder bersama di NAS (misalnya `/photos/google-takeout`) sebagai tujuan.
2. Jalankan, lalu ekstrak arsip di NAS.

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="Synology NAS terdeteksi otomatis di RcloneView untuk penyalinan Google Takeout" class="img-large img-center" />

### Cloud lain

Ingin salinan di lokasi terpisah (off-site)? Arahkan job Copy ke remote lain mana pun — Amazon S3, Backblaze B2, Wasabi, OneDrive, dan sebagainya. RcloneView memindahkan data dari cloud ke cloud melalui engine rclone-nya; arsip tidak perlu melewati penyimpanan komputer Anda.

### Verifikasi dan bersihkan

- Gunakan [Folder Comparison](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents) untuk memastikan setiap arsip tiba dengan ukuran yang sama.
- Periksa [Job History](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job#view-job-history) untuk log transfer.
- Setelah penyalinan terverifikasi, hapus folder `Takeout` dari Google Drive untuk mengembalikan penyimpanan yang ditempatinya.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Comparison antara hasil ekspor Takeout dan salinan di NAS" class="img-large img-center" />

## Langkah 4: Jaga Foto Baru Tetap Tercadangkan dengan RcloneView Mobile

Takeout tidak dapat berjalan secara inkremental, jadi mengulanginya setiap bulan bukanlah rencana yang baik. Untuk foto yang Anda ambil mulai sekarang, keluarkan Google Photos dari alurnya:

- **RcloneView Mobile** (Android dan iOS) mencadangkan foto dan video ponsel Anda langsung ke cloud milik Anda sendiri — remote yang sama dengan yang Anda gunakan di RcloneView desktop, tanpa server di antaranya. Pencadangan foto termasuk dalam RcloneView Plus. Dapatkan dari [halaman unduhan](https://rcloneview.com/src/download.html).
- Di desktop, job Copy terjadwal (fitur PLUS, lihat [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)) kemudian mencerminkan folder cloud tersebut ke NAS atau drive eksternal Anda — setiap hari, setiap minggu, kapan pun Anda mau.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Menjadwalkan penyalinan berulang dari folder foto di cloud ke NAS" class="img-large img-center" />

Ponsel, cloud, dan NAS Anda tetap selaras tanpa Google Photos yang menentukan apa yang boleh Anda unduh.

## Apa Gunanya Remote Google Photos Saat Ini

Remote ini tidak sia-sia — hanya saja bekerja ke arah sebaliknya:

- **Mengunggah.** Job Copy dari NAS atau komputer Anda ke folder `upload` milik remote atau ke sebuah album akan menambahkan foto-foto tersebut ke pustaka Google Photos Anda, tempat aplikasi Google Photos menampilkannya seperti unggahan lainnya.
- **Membaca kembali apa yang diunggah RcloneView.** Apa pun yang masuk melalui RcloneView dapat dicantumkan dan disalin keluar lagi.
- **Catatan penting.** Unduhan melalui API tidak dalam resolusi asli dan kehilangan data lokasi EXIF, jadi perlakukan Google Photos sebagai penampil yang praktis, bukan sebagai arsip. Dan Anda tetap memerlukan OAuth client ID sendiri.

## Memulai

1. **Ekspor** pustaka Google Photos Anda dengan Google Takeout, dikirim ke Google Drive.
2. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html) (Windows, macOS, Linux) dan tambahkan Google Drive sebagai remote.
3. **Buat job Copy** dari folder `Takeout` ke drive eksternal, NAS, atau cloud lain Anda, lalu ekstrak arsip di sana.
4. **Verifikasi** salinan dengan Folder Comparison dan hapus hasil ekspor dari Drive.
5. **Pasang RcloneView Mobile** agar foto baru langsung masuk ke cloud Anda sendiri, dan jadwalkan job desktop untuk mencerminkannya ke NAS.

Foto Anda tidak tergantikan. Satu kali ekspor ditambah satu job terjadwal memberi Anda salinan yang tidak bisa diambil oleh perubahan kebijakan apa pun.

---

**Related Guides:**

- [Perbaiki Error Sinkronisasi Google Photos di RcloneView](https://rcloneview.com/support/blog/fix-google-photos-sync-errors-rcloneview)
- [Tambahkan Remote melalui Login Berbasis Browser (OAuth)](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [Telusuri & Kelola Remote](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Bandingkan Isi Folder](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Buat Job Sinkronisasi](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Penjadwalan Job](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Deteksi Otomatis dan Koneksi Synology NAS](https://rcloneview.com/support/tutorials/synology-nas-cloud-transfer)

<CloudSupportGrid />
