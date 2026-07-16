---
slug: manage-google-drive-cloud-sync-backup-rcloneview
title: "Kelola File Google Drive dan Sinkronisasi Cloud dengan RcloneView"
authors:
  - tayson
description: "Kelola file Google Drive dengan RcloneView. Sinkronisasi, pencadangan, dan transfer data antara Google Drive, Shared Drives, dan penyedia cloud lain menggunakan GUI visual."
keywords:
  - rcloneview
  - google drive sync rcloneview
  - google drive backup
  - google drive file manager
  - google drive cloud sync tool
  - google drive to s3
  - google drive rclone gui
  - google shared drives backup
  - google drive multi-cloud
  - google drive automated backup
tags:
  - google-drive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola File Google Drive dan Sinkronisasi Cloud dengan RcloneView

> Google Drive adalah tulang punggung Google Workspace, tetapi mengelola pencadangan dan transfer lintas cloud membutuhkan lebih dari sekadar klien native — **RcloneView** menghadirkan kontrol tersebut melalui antarmuka visual.

Google Drive melayani lebih dari dua miliar pengguna dengan penyimpanan gratis 15 GB yang dibagi antara Gmail, Drive, dan Photos. Paket Workspace dapat diskalakan hingga penyimpanan tanpa batas pada tingkat Enterprise. Klien desktop native Google Drive menyinkronkan file ke komputer lokal Anda, tetapi tidak dapat mereplikasi data ke AWS S3, OneDrive, atau NAS. RcloneView terhubung ke Google Drive melalui Drive API v3 dan menyediakan antarmuka manajemen file yang lengkap — jelajahi, sinkronkan, salin, pindahkan, dan jadwalkan pencadangan di antara Google Drive dan penyedia penyimpanan lainnya.

Baik Anda seorang pelajar yang melindungi tugas kuliah, fotografer yang mengelola ribuan file RAW, atau administrator Workspace yang menyinkronkan Shared Drives ke target pencadangan independen, RcloneView memberi Anda kemampuan yang tidak ditawarkan klien native.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Google Drive di RcloneView

Menambahkan Google Drive menggunakan alur OAuth 2.0 standar. Buka Remote Manager, pilih **Google Drive**, lalu klik authorize. Jendela browser akan terbuka tempat Anda masuk ke akun Google dan memberikan akses. Token disimpan secara aman di konfigurasi rclone lokal Anda.

Selama pengaturan, Anda memilih cakupan akses — akses drive penuh, hanya baca, atau akses tingkat file yang terbatas pada file yang dibuat oleh RcloneView. Untuk sebagian besar alur kerja pencadangan dan sinkronisasi, akses penuh adalah pilihan yang tepat. Anda juga dapat mengonfigurasi akses ke Shared Drives (sebelumnya Team Drives) pada langkah ini, dengan memilih Shared Drive tertentu berdasarkan ID atau membiarkan RcloneView menampilkan semua drive yang tersedia.

Google Drive menerapkan kuota API — 10.000 kueri per 100 detik per proyek secara default. RcloneView menangani respons 403 userRateLimitExceeded secara otomatis dengan exponential backoff. Untuk operasi berskala besar, Anda dapat mendaftarkan proyek Google Cloud Anda sendiri dan memasukkan client ID Anda sendiri untuk meningkatkan batas kuota.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Google Drive remote in RcloneView Remote Manager" class="img-large img-center" />

## My Drive vs. Shared Drives

Google Drive membedakan antara My Drive (penyimpanan pribadi yang terikat pada akun pengguna) dan Shared Drives (penyimpanan milik organisasi tempat file dimiliki oleh tim, bukan individu). Perbedaan ini penting untuk sinkronisasi dan pencadangan karena Shared Drives memiliki semantik kepemilikan yang berbeda, aturan penamaan file yang lebih ketat, dan kuota penyimpanan terpisah.

RcloneView menangani keduanya secara transparan. Anda dapat membuka My Drive dan Shared Drive secara berdampingan di explorer dua panel, membandingkan isi folder, dan menyinkronkan di antara keduanya. Saat menyinkronkan dari My Drive ke Shared Drive, RcloneView secara otomatis menyesuaikan keterbatasan Shared Drive — file dengan karakter yang tidak didukung akan diganti namanya, dan file shortcut akan diselesaikan atau dilewati sesuai preferensi Anda.

## Menyinkronkan Google Drive dengan Penyedia Cloud Lain

Explorer dua panel RcloneView menempatkan Google Drive berdampingan dengan remote lainnya. Sinkronkan seluruh Drive Anda ke Backblaze B2 untuk pencadangan yang terjangkau, salin folder proyek tertentu ke AWS S3 untuk pengarsipan, atau pindahkan file lama ke Wasabi untuk penyimpanan cold storage yang hemat biaya.

Google Drive menggunakan checksum MD5 untuk verifikasi integritas file. RcloneView mendukung perbandingan MD5 secara native selama sinkronisasi, sehingga hanya file yang benar-benar berubah yang ditransfer. Ini menghemat waktu dan kuota API. Untuk Google Docs, Sheets, dan Slides — yang disimpan dalam format cloud-native tanpa ukuran file tetap — RcloneView mengekspornya ke format standar (docx, xlsx, pptx) saat diunduh dan disinkronkan.

Untuk transfer besar, Anda dapat mengonfigurasi unduhan multi-threaded dan menyesuaikan ukuran chunk. Google Drive mendukung unggahan yang dapat dilanjutkan (resumable uploads) untuk file di atas 5 MB, dan RcloneView memanfaatkan ini untuk pulih dari gangguan tanpa harus mengulang seluruh file dari awal.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Google Drive files to another cloud provider in RcloneView" class="img-large img-center" />

## Menjadwalkan Pencadangan Google Drive Otomatis

Satu salinan data Anda di Google Drive bukanlah pencadangan. Penghapusan yang tidak disengaja, penangguhan akun, dan ransomware semuanya dapat mengakibatkan kehilangan data. Pencadangan independen ke penyedia terpisah menambahkan lapisan keamanan yang penting.

Penjadwal RcloneView mengotomatiskan proses ini. Konfigurasikan tugas sinkronisasi malam hari dari Google Drive ke AWS S3 atau Backblaze B2, dan RcloneView menangani deteksi delta, transfer, dan pencatatan log. Panel riwayat tugas mencatat setiap eksekusi dengan statistik — file yang ditransfer, file yang dilewati, total byte yang dipindahkan, dan waktu yang berlalu.

Bagi administrator Workspace, pencadangan terjadwal untuk Shared Drives memastikan data tim direplikasi secara independen dari infrastruktur Google. Padukan pencadangan terjadwal dengan enkripsi (menggunakan remote crypt) untuk lapisan perlindungan tambahan.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Google Drive backup in RcloneView" class="img-large img-center" />

## Membandingkan Folder dan Memverifikasi Data

Sebelum melakukan sinkronisasi besar, fitur compare RcloneView menunjukkan dengan tepat apa yang akan berubah. Pilih dua folder — satu di Google Drive, satu lagi di remote lain — dan RcloneView menyoroti file yang hanya ada di satu sisi, file yang berbeda dalam ukuran atau hash, serta file yang identik.

Ini sangat berharga setelah migrasi. Jalankan compare antara sumber Google Drive Anda dan tujuan pencadangan untuk memastikan setiap file tiba dengan utuh. Diff visual memudahkan untuk menemukan kesenjangan dan menyelesaikannya sebelum menonaktifkan sumber asli.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Google Drive files with another cloud in RcloneView" class="img-large img-center" />

## Mounting Google Drive sebagai Drive Lokal

RcloneView dapat me-mount Google Drive sebagai huruf drive lokal di Windows atau titik mount di macOS dan Linux. Ini memungkinkan Anda mengakses file Drive langsung dari aplikasi apa pun — pengelola file, editor video, atau alat command-line — tanpa perlu mengunduhnya terlebih dahulu.

Aktifkan VFS caching untuk performa terbaik. Ini menyimpan file yang baru diakses secara lokal sehingga pembacaan berikutnya menjadi instan. Ukuran cache dan masa berlakunya dapat dikonfigurasi. Mounting sangat berguna untuk alur kerja media di mana Anda perlu menjelajahi atau melihat pratinjau file Drive tanpa sinkronisasi penuh.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting Google Drive as a local drive in RcloneView" class="img-large img-center" />

## Memantau Transfer secara Real Time

Selama transfer besar, RcloneView menyediakan dasbor pemantauan real-time yang menampilkan kecepatan transfer, progres per file, dan persentase penyelesaian secara keseluruhan. Anda dapat menjeda, melanjutkan, atau membatalkan transfer individual tanpa memengaruhi antrean lainnya. Pembatasan bandwidth mencegah transfer Google Drive membebani jaringan Anda — tetapkan batas selama jam kerja dan izinkan kecepatan penuh pada malam hari.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring for Google Drive in RcloneView" class="img-large img-center" />

## Menjelajahi dan Mengelola File

Explorer RcloneView menawarkan kemampuan yang tidak dimiliki antarmuka web Google Drive — operasi massal pada puluhan ribu file, drag-and-drop antara dua penyedia cloud mana pun, dan perbandingan folder berdampingan. Anda dapat mengganti nama, memindahkan, menghapus, dan membuat folder langsung di Google Drive melalui explorer. Shared Drives, shortcut, dan struktur folder bertingkat semuanya dapat dinavigasi di panel explorer.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files to and from Google Drive in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Otorisasi akun Google Anda melalui OAuth di Remote Manager dan pilih jenis Drive Anda (My Drive atau Shared Drive).
3. Jelajahi Google Drive Anda di explorer dua panel dan siapkan tugas sinkronisasi atau salin ke penyedia lain.
4. Jadwalkan pencadangan harian untuk menjaga salinan cadangan di S3, B2, atau cloud lainnya.

Google Drive menangani kolaborasi dan pengeditan dokumen, tetapi RcloneView memastikan data Anda dicadangkan, portabel, dan dapat diakses di setiap cloud yang Anda gunakan.

---

**Panduan Terkait:**

- [Tambahkan Google Drive](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [Jelajahi dan Kelola Penyimpanan Remote](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Buat Tugas Sinkronisasi](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Mount Penyimpanan Cloud sebagai Drive Lokal](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

<CloudSupportGrid />
