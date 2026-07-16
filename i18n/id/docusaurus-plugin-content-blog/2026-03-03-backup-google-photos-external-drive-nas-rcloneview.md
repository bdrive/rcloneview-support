---
slug: backup-google-photos-external-drive-nas-rcloneview
title: "Cara Mencadangkan Semua Google Photos ke Hard Drive Eksternal atau NAS dengan RcloneView"
authors:
  - tayson
description: "Unduh dan cadangkan seluruh pustaka Google Photos Anda ke hard drive eksternal, NAS, atau cloud lain — secara otomatis dan tanpa kehilangan struktur album — menggunakan RcloneView."
keywords:
  - google photos backup
  - download all google photos
  - google photos to external drive
  - google photos to nas
  - backup google photos automatically
  - google photos to hard drive
  - google photos rclone
  - google photos sync nas
  - save google photos locally
  - google photos export alternative
tags:
  - google-photos
  - sync
  - nas
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cara Mencadangkan Semua Google Photos ke Hard Drive Eksternal atau NAS dengan RcloneView

> Google Photos menyimpan kenangan Anda, tetapi bagaimana jika akun Anda terkunci, penyimpanan penuh, atau Google mengubah kebijakannya? Pencadangan lokal memastikan foto Anda selalu menjadi milik Anda.

Google Photos memang praktis — sampai suatu saat tidak lagi. Batas penyimpanan, penangguhan akun, dan perubahan kebijakan semuanya dapat mengancam akses ke bertahun-tahun foto dan video yang tak tergantikan. Google Takeout memang ada, tetapi sangat lambat, gagal pada pustaka besar, dan tidak mendukung pembaruan bertahap.

RcloneView menawarkan cara yang lebih baik: terhubung langsung ke Google Photos, jelajahi pustaka Anda secara visual, dan sinkronisasi semuanya ke hard drive eksternal, NAS, atau cloud lain — dengan penjadwalan otomatis sehingga foto-foto mendatang juga tercadangkan.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Perlu Mencadangkan Google Photos Secara Lokal?

### Google Takeout saja tidak cukup

Google Takeout memungkinkan Anda mengekspor foto, tetapi memiliki keterbatasan yang signifikan:

- **Lambat dan tidak andal** — Pustaka besar sering gagal di tengah proses ekspor, sehingga Anda harus mengulang dari awal.
- **Tidak ada pembaruan bertahap** — Setiap ekspor adalah dump penuh. Punya 500 foto baru bulan ini? Ekspor semuanya lagi.
- **Format arsip ZIP** — Anda mendapatkan puluhan file ZIP yang perlu diekstrak dan diatur secara manual.
- **Tidak ada otomasi** — Ini adalah proses yang sepenuhnya manual setiap kali dilakukan.

### Risiko nyata dari penyimpanan yang hanya mengandalkan cloud

- **Kuota penyimpanan terlampaui** — Setelah mencapai 15 GB (dibagi dengan Gmail dan Drive), Google mulai meminta Anda untuk menghapus data atau membayar.
- **Akun terkunci** — Pelanggaran kebijakan, bahkan yang tidak disengaja, dapat membekukan seluruh akun Google Anda.
- **Perubahan layanan** — Google pernah menghentikan produk sebelumnya (Google+, Picasa). Strategi data Anda harus mempertimbangkan hal ini.

Pencadangan lokal ke hard drive eksternal atau NAS memberi Anda salinan independen yang tidak dapat diambil oleh perubahan kebijakan apa pun.

## Menyiapkan Google Photos sebagai Remote

### Langkah 1: Menambahkan Google Photos di RcloneView

Buka RcloneView dan buat remote baru:

1. Klik tombol **Add Remote** di Remote Manager.
2. Pilih **Google Photos** dari daftar penyedia.
3. Ikuti alur autentikasi OAuth — RcloneView akan membuka browser Anda untuk mengizinkan akses.
4. Setelah diotorisasi, pustaka Google Photos Anda akan muncul sebagai remote yang dapat dijelajahi.

<img src="/support/images/en/blog/new-remote.png" alt="Add Google Photos as a remote in RcloneView" class="img-large img-center" />

### Langkah 2: Menjelajahi Pustaka Foto Anda

Setelah terhubung, Anda dapat menjelajahi pustaka Google Photos langsung di [Explorer](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage) milik RcloneView. Google Photos mengatur file berdasarkan:

- **Folder Tahun/Bulan** — Foto disusun dalam jalur bergaya `media/by-year/2024/01`.
- **Album** — Album Anda muncul sebagai folder terpisah di bawah jalur `album`.
- **Album bersama** — Dapat diakses di bawah `shared-album`.

Ini memudahkan Anda melihat dengan tepat apa yang sedang dicadangkan sebelum memulai transfer.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Google Photos library in RcloneView Explorer" class="img-large img-center" />

## Strategi Pencadangan 1: Google Photos → Hard Drive Eksternal

Pendekatan paling sederhana — salin semuanya ke hard drive eksternal yang terhubung melalui USB.

### Cara mengaturnya

1. **Hubungkan hard drive eksternal Anda** dan catat huruf drive (Windows) atau titik mount (Mac/Linux).
2. **Buat job Copy** di RcloneView:
   - **Source**: Remote Google Photos Anda (pilih folder `media/by-year` untuk semua foto)
   - **Destination**: Jalur hard drive eksternal Anda (misalnya, `E:\Google Photos Backup`)
3. **Jalankan job tersebut** — RcloneView akan mengunduh semua foto dan video sambil mempertahankan struktur folder.

### Pengaturan yang disarankan

- **Transfer paralel**: 4–6 (API Google Photos memiliki batas laju/rate limit)
- **Jenis job**: Copy (bukan Sync — Anda tidak ingin menghapus file lokal jika Anda menghapusnya dari Google Photos)

### Untuk pembaruan bertahap

Setelah pencadangan awal, proses selanjutnya hanya mengunduh foto baru. RcloneView membandingkan apa yang sudah ada di drive Anda dan melewati file yang sudah ada. Ini mengubah pencadangan pertama yang memakan waktu berjam-jam menjadi pembaruan harian yang cepat.

## Strategi Pencadangan 2: Google Photos → NAS Synology

Bagi pengguna dengan NAS Synology, RcloneView menawarkan pengalaman yang lebih terintegrasi lagi. Sejak v1.0, perangkat NAS Synology [terdeteksi secara otomatis](https://rcloneview.com/support/tutorials/synology-nas-cloud-transfer) di jaringan Anda.

### Cara mengaturnya

1. **Jalankan RcloneView** — NAS Synology Anda akan otomatis muncul di tab Local.
2. **Buat job Copy**:
   - **Source**: Remote Google Photos
   - **Destination**: Folder bersama di NAS Anda (misalnya, `/photos/google-backup`)
3. **Jadwalkan job tersebut** untuk berjalan setiap hari atau setiap minggu menggunakan [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution).

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="Synology NAS auto-detection for Google Photos backup" class="img-large img-center" />

### Mengapa NAS ideal untuk pencadangan foto

- **Selalu aktif** — Berbeda dengan hard drive eksternal, NAS Anda selalu terhubung dan siap digunakan.
- **Perlindungan RAID** — Sebagian besar setup NAS menggunakan RAID untuk perlindungan dari kegagalan disk.
- **Akses dari mana saja** — Lihat foto yang sudah dicadangkan dari perangkat mana pun di jaringan Anda.
- **Pencadangan cloud sekunder** — Gunakan job RcloneView lain untuk mensinkronkan NAS ke S3 atau Backblaze B2 demi redundansi offsite.

## Strategi Pencadangan 3: Google Photos → Cloud Lain

Ingin menyimpan salinan di penyedia cloud yang berbeda? RcloneView membuat transfer cloud-ke-cloud menjadi mulus:

- **Google Photos → OneDrive** — Manfaatkan penyimpanan Microsoft 365 Anda.
- **Google Photos → AWS S3** — Arsipkan ke penyimpanan objek yang murah dan tahan lama.
- **Google Photos → Backblaze B2** — Penyimpanan pencadangan tanpa batas berbiaya rendah.
- **Google Photos → Wasabi** — Kompatibel S3 tanpa biaya egress.

Cukup buat job Copy dengan Google Photos sebagai source dan cloud target Anda sebagai destination. Tidak ada data yang melewati penyimpanan mesin lokal Anda — RcloneView menangani transfer melalui mesin rclone-nya.

## Mengotomatiskan Pencadangan Foto Anda

Pencadangan sekali jalan itu bagus. Pencadangan otomatis dan berulang lebih baik lagi.

### Menyiapkan pencadangan terjadwal

1. **Buat job Copy** Anda menggunakan salah satu strategi di atas.
2. **Buka Job Scheduling** dan atur jadwal berulang:
   - **Setiap hari pukul 2 pagi** — Menangkap semua foto baru dari hari sebelumnya.
   - **Setiap minggu pada hari Minggu** — Pendekatan yang lebih ringan untuk pustaka yang lebih kecil.
3. **Tambahkan notifikasi** agar Anda tahu prosesnya berhasil:
   - [Notifikasi Slack](https://rcloneview.com/support/blog/rcloneview-slack-remote-control) untuk tim
   - [Notifikasi Telegram](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control) untuk penggunaan pribadi
   - [Notifikasi Discord](https://rcloneview.com/support/blog/rcloneview-discord-remote-control) untuk komunitas

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule automatic Google Photos backups" class="img-large img-center" />

### Menggunakan Batch Jobs untuk pencadangan multi-destinasi

Dengan [Batch Jobs](https://rcloneview.com/support/blog/batch-jobs-run-multiple-cloud-tasks-rcloneview) v1.3, Anda dapat mencadangkan Google Photos ke beberapa destinasi dalam satu rangkaian otomatis:

1. Copy Google Photos → Hard Drive Eksternal
2. Copy Google Photos → NAS
3. Copy Google Photos → Backblaze B2

Satu klik (atau satu pemicu terjadwal) menjalankan ketiganya sekaligus.

## Pemantauan dan Verifikasi

### Pemantauan transfer secara real-time

Pantau kemajuan pencadangan Anda secara real-time — lihat jumlah file, kecepatan transfer, dan perkiraan waktu penyelesaian.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Google Photos backup progress" class="img-large img-center" />

### Verifikasi dengan Folder Comparison

Setelah pencadangan selesai, gunakan [Folder Comparison](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents) untuk memverifikasi bahwa salinan lokal Anda cocok dengan pustaka Google Photos. Ini memberi Anda keyakinan bahwa tidak ada yang terlewat.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare Google Photos with local backup" class="img-large img-center" />

### Memeriksa Job History

Tinjau [Job History](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job#view-job-history) untuk melihat log lengkap dari proses pencadangan sebelumnya, termasuk file yang ditransfer, error yang terjadi, dan total durasinya.

## Tips untuk Pustaka Google Photos yang Besar

Jika Anda memiliki puluhan ribu foto:

1. **Mulai dari tahun-tahun terbaru** — Cadangkan 2–3 tahun terakhir dahulu, lalu lanjutkan mundur. Ini melindungi kenangan terbaru Anda lebih cepat.
2. **Gunakan Copy bertahap** — Setelah proses awal, hanya file baru yang ditransfer.
3. **Bersabarlah dengan batas laju** — Batas API Google Photos lebih ketat dibandingkan Google Drive. Jaga transfer paralel di angka 4–6.
4. **Coba lagi saat gagal** — Fitur Retry Failed Jobs v1.3 menangani error API sementara dengan baik.
5. **Pertimbangkan penjadwalan di luar jam sibuk** — Jalankan pencadangan besar pada malam hari untuk menghindari kepadatan jaringan.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html) (Windows, macOS, Linux).
2. **Tambahkan Google Photos** sebagai remote menggunakan autentikasi OAuth.
3. **Jelajahi pustaka Anda** di Explorer untuk melihat apa yang sedang dicadangkan.
4. **Buat job Copy** ke destinasi pilihan Anda (hard drive eksternal, NAS, atau cloud).
5. **Jadwalkan** untuk pencadangan berulang secara otomatis.
6. **Verifikasi** dengan Folder Comparison setelah proses pertama selesai.

Foto Anda tak tergantikan. Pencadangan Anda seharusnya tidak bergantung pada satu penyedia saja. RcloneView memudahkan Anda menyimpan salinan independen — secara otomatis, andal, dan tanpa perlu CLI sama sekali.

---

**Panduan Terkait:**

- [Tambah Remote via Login Berbasis Browser (OAuth)](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [Menjelajahi & Mengelola Remote](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Membandingkan Isi Folder](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Membuat Job Sinkronisasi](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Penjadwalan Job](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Deteksi Otomatis dan Koneksi NAS Synology](https://rcloneview.com/support/tutorials/synology-nas-cloud-transfer)

<CloudSupportGrid />
