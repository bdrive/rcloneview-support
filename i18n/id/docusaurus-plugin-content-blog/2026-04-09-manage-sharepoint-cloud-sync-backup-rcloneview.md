---
slug: manage-sharepoint-cloud-sync-backup-rcloneview
title: "Kelola File SharePoint dan Sinkronisasi Cloud dengan RcloneView"
authors:
  - tayson
description: "Kelola file SharePoint Online dengan RcloneView. Sinkronisasi, cadangkan, dan transfer data antara pustaka dokumen SharePoint dan penyedia cloud lain menggunakan GUI visual."
keywords:
  - rcloneview
  - sharepoint sync rcloneview
  - sharepoint backup
  - sharepoint file manager
  - sharepoint cloud sync tool
  - sharepoint to google drive
  - sharepoint rclone gui
  - sharepoint document library backup
  - sharepoint multi-cloud
  - sharepoint automated backup
tags:
  - RcloneView
  - sharepoint
  - cloud-storage
  - cloud-sync
  - guide
  - backup
  - enterprise
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola File SharePoint dan Sinkronisasi Cloud dengan RcloneView

> SharePoint Online menggerakkan manajemen dokumen di seluruh Microsoft 365, tetapi menyinkronkan kontennya ke cloud eksternal atau NAS memerlukan alat yang dirancang khusus — **RcloneView** menjembatani kesenjangan itu.

SharePoint Online adalah tulang punggung manajemen dokumen bagi jutaan organisasi yang menggunakan Microsoft 365. Setiap situs SharePoint berisi pustaka dokumen yang menyimpan file tim, aset proyek, dan catatan perusahaan. Meskipun klien sinkronisasi OneDrive bawaan dapat menyinkronkan pustaka SharePoint ke mesin lokal, klien tersebut tidak menyediakan mekanisme untuk mereplikasi data ke AWS S3, Google Drive, atau penyimpanan eksternal. RcloneView terhubung ke SharePoint Online melalui Microsoft Graph API dan menampilkan pustaka dokumen sebagai remote yang dapat dijelajahi — jelajahi, sinkronkan, salin, pindahkan, dan jadwalkan pencadangan di seluruh SharePoint dan penyedia lainnya.

Baik Anda perlu mencadangkan pustaka yang sensitif terhadap kepatuhan ke penyimpanan S3 yang tidak dapat diubah atau memigrasikan situs SharePoint tim yang keluar ke Google Workspace, RcloneView menanganinya melalui antarmuka visual.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan SharePoint di RcloneView

Remote SharePoint di RcloneView dikonfigurasi melalui tipe remote OneDrive. Selama otorisasi OAuth, pilih **SharePoint site** alih-alih OneDrive Personal atau Business. RcloneView melakukan query ke Graph API untuk situs yang tersedia dan memungkinkan Anda memilih situs target serta pustaka dokumen.

Setiap pustaka dokumen muncul sebagai path yang dapat dijelajahi secara terpisah. Jika organisasi Anda memiliki puluhan situs SharePoint — Marketing, Engineering, Legal, HR — Anda dapat menambahkan masing-masing sebagai remote terpisah atau beralih antar pustaka dalam satu konfigurasi remote.

Pembatasan throttling API SharePoint mengikuti pola yang sama seperti OneDrive for Business — respons 429 dengan header Retry-After. RcloneView menghormati hal ini secara otomatis, menggunakan exponential backoff untuk memastikan transfer besar selesai tanpa intervensi manual.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a SharePoint remote in RcloneView Remote Manager" class="img-large img-center" />

## Menjelajahi Pustaka Dokumen SharePoint

Pustaka dokumen SharePoint dapat berisi struktur folder bertingkat, kolom metadata, dan file yang memiliki versi. Explorer RcloneView menampilkan pohon folder dan daftar file dalam tata letak dua panel yang familiar. Anda dapat menjelajahi hierarki folder yang dalam, memilih file di beberapa folder, dan melakukan operasi massal — salin, pindahkan, hapus, atau unduh.

SharePoint menerapkan pembatasan nama file yang lebih ketat dibandingkan banyak penyedia lain. Karakter seperti `#`, `%`, dan `*` tidak diizinkan, dan panjang path dibatasi hingga 400 karakter. Saat menyinkronkan dari penyedia yang kurang ketat (seperti Google Drive atau sistem file lokal) ke SharePoint, RcloneView secara otomatis meng-encode atau mengganti karakter yang dibatasi untuk mencegah kegagalan transfer.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browsing SharePoint document libraries in RcloneView two-pane explorer" class="img-large img-center" />

## Menyinkronkan SharePoint ke Penyedia Cloud Lain

Organisasi sering kali perlu mereplikasi data SharePoint ke sistem eksternal — cloud sekunder untuk pemulihan bencana, NAS untuk akses lokal, atau rangkaian cloud yang berbeda selama migrasi platform. RcloneView membuat hal ini menjadi mudah.

Buka pustaka SharePoint Anda di satu panel dan tujuan (AWS S3, Google Drive, Backblaze B2, path lokal) di panel lainnya. RcloneView membandingkan daftar file menggunakan ukuran dan waktu modifikasi, hanya mentransfer file yang berubah. Untuk migrasi awal dengan ribuan file, transfer multi-thread dan ukuran chunk yang dapat dikonfigurasi menjaga proses tetap efisien.

SharePoint menyimpan hash file sebagai QuickXorHash, algoritma yang sama yang digunakan oleh OneDrive for Business. RcloneView mendukung QuickXorHash secara native, memungkinkan deteksi delta yang akurat tanpa mengunduh konten file untuk perbandingan.

## Menjadwalkan Pencadangan SharePoint Otomatis

Kebijakan retensi bawaan SharePoint dan recycle bin memberikan sebagian perlindungan, tetapi keduanya beroperasi di dalam ekosistem Microsoft. Serangan ransomware yang membahayakan tenant Microsoft 365 Anda dapat memengaruhi data SharePoint beserta semua yang lain. Pencadangan independen ke penyedia terpisah adalah perlindungan terkuat.

Scheduler RcloneView mengotomatiskan hal ini. Konfigurasikan pekerjaan sinkronisasi harian dari pustaka dokumen SharePoint ke AWS S3 dengan versioning diaktifkan, dan RcloneView menangani sisanya. Panel riwayat pekerjaan mencatat setiap eksekusi dengan statistik transfer, memudahkan verifikasi bahwa pencadangan berhasil diselesaikan.

Bagi organisasi yang didorong oleh kepatuhan, memasangkan pencadangan SharePoint terjadwal dengan S3 Object Lock atau fitur file lock Backblaze B2 menciptakan arsip yang tidak dapat diubah dan memenuhi persyaratan regulasi untuk retensi data.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated SharePoint backup in RcloneView" class="img-large img-center" />

## Membandingkan Folder dan Memverifikasi Migrasi

Setelah menyinkronkan atau memigrasikan pustaka SharePoint, gunakan fitur compare RcloneView untuk memverifikasi kelengkapan. Pilih sumber SharePoint dan tujuan pencadangan, dan RcloneView menyoroti file yang hanya ada di satu sisi, file yang berbeda, dan file yang identik. Verifikasi visual ini menghilangkan tebakan dan memastikan integritas data sebelum menonaktifkan yang asli.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing SharePoint library with backup destination in RcloneView" class="img-large img-center" />

## Mount SharePoint sebagai Drive Lokal

RcloneView dapat me-mount pustaka dokumen SharePoint sebagai huruf drive lokal (Windows) atau titik mount (macOS/Linux). Ini memungkinkan Anda mengakses file SharePoint dari aplikasi desktop apa pun — perangkat lunak CAD, editor gambar, atau alat analitik — tanpa overhead dari klien sinkronisasi OneDrive.

Aktifkan VFS caching untuk menyimpan file yang baru diakses secara lokal demi akses berulang yang cepat. Ini sangat berguna bagi tim yang perlu bekerja dengan file yang di-hosting di SharePoint dalam aplikasi yang tidak mendukung penyimpanan cloud secara native.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting SharePoint as a local drive in RcloneView" class="img-large img-center" />

## Memantau Transfer

Migrasi SharePoint berskala besar dapat melibatkan ratusan ribu file. Dasbor pemantauan real-time RcloneView menampilkan kecepatan transfer, progres per file, dan penyelesaian keseluruhan. Anda dapat menjeda, melanjutkan, atau membatalkan transfer secara individual. Batas bandwidth mencegah transfer SharePoint menghabiskan seluruh koneksi jaringan Anda selama jam kerja.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time SharePoint transfer monitoring in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Otorisasi akun Microsoft 365 Anda melalui OAuth dan pilih situs SharePoint serta pustaka dokumen.
3. Jelajahi pustaka SharePoint Anda di explorer dua panel dan siapkan pekerjaan sinkronisasi atau salin ke penyedia lain.
4. Jadwalkan pencadangan harian untuk menjaga salinan independen di S3, B2, atau cloud lainnya.

SharePoint menangani manajemen dokumen dalam Microsoft 365, tetapi RcloneView memastikan data SharePoint Anda dicadangkan, portabel, dan dapat diakses di setiap cloud yang Anda gunakan.

---

**Panduan Terkait:**

- [Tambah Remote via Login Berbasis Browser (OAuth)](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [Jelajahi dan Kelola Penyimpanan Remote](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Membuat Pekerjaan Sinkronisasi](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Penjadwalan Pekerjaan](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
