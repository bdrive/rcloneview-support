---
slug: manage-onedrive-cloud-sync-backup-rcloneview
title: "Kelola File OneDrive dan Sinkronisasi Cloud dengan RcloneView"
authors:
  - tayson
description: "Kelola file OneDrive dengan RcloneView. Sinkronisasi, pencadangan, dan transfer data antara OneDrive Personal atau Business dan penyedia cloud lainnya menggunakan GUI visual."
keywords:
  - rcloneview
  - onedrive sync rcloneview
  - onedrive backup
  - onedrive file manager
  - onedrive cloud sync tool
  - onedrive to google drive
  - onedrive rclone gui
  - onedrive business backup
  - onedrive multi-cloud
  - onedrive automated backup
tags:
  - onedrive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola File OneDrive dan Sinkronisasi Cloud dengan RcloneView

> OneDrive terintegrasi erat dengan Microsoft 365, tetapi mengelola pencadangan dan sinkronisasi lintas-cloud memerlukan alat khusus — **RcloneView** membuatnya menjadi mudah.

Microsoft OneDrive melayani ratusan juta pengguna di paket Personal dan Business, menawarkan 5 GB gratis dan penyimpanan hingga tanpa batas pada tingkatan enterprise. Meskipun klien OneDrive native menangani sinkronisasi lokal-ke-cloud dengan baik, klien ini tidak menyediakan mekanisme bawaan untuk mereplikasi data ke AWS S3, Google Drive, atau NAS. RcloneView terhubung ke OneDrive melalui Microsoft Graph API dan menyediakan antarmuka manajemen file yang lengkap — jelajahi, sinkronkan, salin, pindahkan, dan jadwalkan pencadangan di OneDrive dan penyedia penyimpanan lainnya.

Baik Anda individu yang mencadangkan foto pribadi maupun administrator IT yang mengelola OneDrive for Business di seluruh organisasi, RcloneView memberi Anda kendali atas data yang tidak ditawarkan oleh klien native.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan OneDrive di RcloneView

Menambahkan OneDrive ke RcloneView menggunakan alur OAuth 2.0 standar. Buka Remote Manager, pilih **Microsoft OneDrive**, lalu klik authorize. Jendela browser akan terbuka tempat Anda masuk ke akun Microsoft dan memberikan akses. Token yang dihasilkan disimpan dengan aman dalam konfigurasi rclone lokal Anda.

Selama pengaturan, RcloneView mendeteksi apakah Anda menggunakan OneDrive Personal, OneDrive for Business, atau SharePoint Document Libraries dan mengonfigurasi koneksi sesuai dengan itu. Untuk akun Business, Anda dapat memilih untuk terhubung ke drive pribadi Anda atau document library situs SharePoint. Fleksibilitas ini berarti satu instance RcloneView dapat mengelola beberapa tenant OneDrive secara berdampingan.

API OneDrive menerapkan pembatasan (throttling) — biasanya 10.000 panggilan API per jendela 10 menit untuk akun Business, dengan batas yang lebih rendah pada paket Personal. RcloneView menangani respons 429 (Too Many Requests) secara otomatis dengan exponential backoff, sehingga transfer besar berjalan tanpa intervensi manual.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a OneDrive remote in RcloneView Remote Manager" class="img-large img-center" />

## Perbedaan OneDrive Personal vs. Business

OneDrive Personal dan OneDrive for Business memiliki perbedaan penting yang memengaruhi perilaku sinkronisasi. Akun Personal menggunakan namespace datar dan memiliki ukuran file maksimum 250 GB. Akun Business mendukung struktur situs bertingkat, integrasi SharePoint, dan pembatasan nama file yang lebih ketat (karakter tertentu seperti `#` dan `%` tidak diizinkan).

RcloneView menangani perbedaan ini secara transparan. Saat melakukan sinkronisasi dari penyedia yang mengizinkan karakter khusus (seperti Google Drive) ke OneDrive for Business, RcloneView secara otomatis mengenkode atau mengganti karakter terlarang untuk mencegah kegagalan transfer. Jika Anda memigrasikan data antara akun Personal dan Business, logika yang sama berlaku — tidak diperlukan pembersihan nama file secara manual.

## Menyinkronkan OneDrive dengan Penyedia Cloud Lain

Explorer dua panel RcloneView menempatkan OneDrive berdampingan dengan remote lainnya. Anda dapat menyinkronkan seluruh OneDrive Anda ke Google Drive, menyalin folder proyek tertentu ke AWS S3, atau memindahkan file arsip ke Backblaze B2 untuk penyimpanan jangka panjang yang hemat biaya.

OneDrive menggunakan QuickXorHash untuk verifikasi integritas file — fungsi hash eksklusif milik Microsoft. RcloneView mendukung QuickXorHash secara native, sehingga perbandingan file selama sinkronisasi akurat dan efisien. File yang belum berubah akan dilewati secara otomatis, mengurangi waktu transfer maupun penggunaan API.

Untuk deployment OneDrive for Business berskala besar, Anda dapat membatasi lingkup sinkronisasi ke folder tertentu atau document library SharePoint alih-alih menyinkronkan seluruh drive. Pendekatan yang tertarget ini meminimalkan panggilan API dan waktu transfer sekaligus memastikan data penting tetap dicadangkan.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing OneDrive files to another cloud provider in RcloneView" class="img-large img-center" />

## Menjadwalkan Pencadangan OneDrive Otomatis

Mengandalkan OneDrive saja untuk file penting menimbulkan risiko — penghapusan yang tidak disengaja menyebar ke semua perangkat, dan riwayat versi OneDrive terbatas hanya 30 hari pada paket Personal (meskipun paket Business menawarkan retensi yang dapat dikonfigurasi). Pencadangan independen ke penyedia terpisah menambahkan jaring pengaman yang penting.

Penjadwal RcloneView mengotomatiskan proses ini. Konfigurasikan tugas sinkronisasi harian dari OneDrive ke Backblaze B2 atau AWS S3, dan RcloneView menangani deteksi delta, transfer, dan pencatatan log. Panel riwayat tugas mencatat setiap eksekusi dengan statistik: file yang ditransfer, file yang dilewati, total byte yang dipindahkan, dan waktu yang berlalu.

Untuk organisasi dengan persyaratan kepatuhan, memasangkan pencadangan terjadwal dengan target penyimpanan yang tidak dapat diubah (seperti S3 Object Lock) memastikan bahwa meskipun data OneDrive disusupi, cadangan tetap utuh dan tidak dapat dimanipulasi.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated OneDrive backup in RcloneView" class="img-large img-center" />

## Membandingkan Folder dan Memverifikasi Data

Sebelum melakukan sinkronisasi besar, fitur compare RcloneView memungkinkan Anda melihat dengan tepat apa yang akan berubah. Pilih dua folder — satu di OneDrive, satu di remote lain — dan RcloneView menyoroti file yang hanya ada di satu sisi, file yang berbeda ukuran atau hash-nya, dan file yang identik.

Ini sangat berharga setelah migrasi. Jalankan operasi compare antara sumber OneDrive Anda dan tujuan pencadangan untuk memverifikasi bahwa setiap file tiba dengan utuh. Diff visual memudahkan untuk menemukan celah dan menyelesaikannya sebelum menonaktifkan data asli.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing OneDrive files with another cloud in RcloneView explorer" class="img-large img-center" />

## Mounting OneDrive sebagai Drive Lokal

RcloneView dapat me-mount OneDrive sebagai huruf drive lokal di Windows atau sebagai mount point di macOS dan Linux. Ini memungkinkan Anda mengakses file OneDrive langsung dari aplikasi apa pun — file manager, pemutar media, atau alat command-line — tanpa perlu mengunduhnya terlebih dahulu.

Untuk performa terbaik, aktifkan VFS caching. Ini menyimpan file yang baru-baru ini diakses secara lokal sehingga pembacaan berikutnya menjadi instan. Ukuran cache dan masa berlakunya dapat dikonfigurasi, memungkinkan Anda menyeimbangkan penggunaan disk dengan kecepatan akses. Mounting sangat berguna untuk alur kerja di mana Anda perlu menjelajahi atau melihat pratinjau file OneDrive tanpa sinkronisasi penuh.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting OneDrive as a local drive in RcloneView" class="img-large img-center" />

## Memantau Transfer secara Real Time

Selama transfer besar, RcloneView menyediakan dasbor pemantauan real-time yang menampilkan kecepatan transfer, progres per file, dan persentase penyelesaian keseluruhan. Anda dapat menjeda, melanjutkan, atau membatalkan transfer individual tanpa memengaruhi antrean lainnya. Pembatasan bandwidth tersedia untuk mencegah transfer OneDrive membanjiri jaringan Anda — atur batas selama jam kerja dan izinkan kecepatan penuh di malam hari.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring for OneDrive in RcloneView" class="img-large img-center" />

## Menjelajahi dan Mengelola File

Explorer RcloneView menawarkan kemampuan yang tidak dimiliki antarmuka web OneDrive — operasi massal di puluhan ribu file, drag-and-drop antara dua penyedia cloud mana pun, dan perbandingan berdampingan. Anda dapat mengganti nama, memindahkan, menghapus, dan membuat folder langsung di OneDrive melalui explorer. Bagi pengguna OneDrive for Business dengan akses ke beberapa situs SharePoint, setiap situs muncul sebagai pohon yang dapat dinavigasi di panel explorer.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files to and from OneDrive in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Autorisasi akun Microsoft Anda melalui OAuth di Remote Manager dan pilih jenis OneDrive Anda (Personal, Business, atau SharePoint).
3. Jelajahi OneDrive Anda di explorer dua panel dan siapkan tugas sinkronisasi atau salin ke penyedia lain.
4. Jadwalkan pencadangan harian untuk menjaga salinan redundan di S3, B2, atau cloud lainnya.

OneDrive menangani kolaborasi Microsoft 365, tetapi RcloneView memastikan data Anda dicadangkan, portabel, dan dapat diakses di setiap cloud yang Anda gunakan.

---

**Panduan Terkait:**

- [Jelajahi dan Kelola Penyimpanan Remote](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Tambahkan Remote via Login berbasis Browser (OAuth)](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [Buat Tugas Sinkronisasi](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)

<CloudSupportGrid />
