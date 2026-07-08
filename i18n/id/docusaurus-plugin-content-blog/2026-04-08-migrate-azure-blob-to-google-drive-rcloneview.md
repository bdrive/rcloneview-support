---
slug: migrate-azure-blob-to-google-drive-rcloneview
title: "Migrasi Azure Blob Storage ke Google Drive dengan RcloneView"
authors:
  - tayson
description: "Migrasikan Azure Blob Storage ke Google Drive dengan RcloneView. Panduan langkah demi langkah untuk penyiapan, penanganan container besar, verifikasi, dan sinkronisasi bertahap."
keywords:
  - rcloneview
  - azure blob to google drive
  - migrate azure storage
  - azure blob migration
  - cloud to cloud migration
  - azure to google workspace
  - cloud storage migration tool
  - azure blob transfer
  - google drive migration gui
  - enterprise cloud migration
tags:
  - RcloneView
  - azure
  - google-drive
  - migration
  - cloud-migration
  - cloud-to-cloud
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Azure Blob Storage ke Google Drive dengan RcloneView

> Azure Blob Storage dibangun untuk developer, tetapi ketika tim Anda membutuhkan fitur kolaborasi, Google Drive adalah tujuannya — **RcloneView** menjembatani kesenjangan antara object storage dan cloud konsumer.

Azure Blob Storage unggul dalam melayani aplikasi — tier hot, cool, dan archive memberikan developer kendali biaya yang terperinci untuk beban kerja terstruktur. Namun ketika kebutuhan bisnis beralih ke kolaborasi dokumen, pengeditan bersama, dan integrasi Google Workspace, memindahkan data dari container Azure ke Google Drive menjadi diperlukan. RcloneView terhubung ke kedua platform dan menyediakan alur migrasi visual yang menangani container besar, mempertahankan struktur folder, serta memverifikasi setiap file yang ditransfer.

Panduan ini membahas keseluruhan proses migrasi, mulai dari mengonfigurasi kedua remote hingga menyiapkan sinkronisasi bertahap untuk periode transisi.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Migrasi dari Azure Blob ke Google Drive

Alasan migrasi ini umumnya termasuk dalam beberapa kategori:

- **Kebutuhan kolaborasi**: Azure Blob Storage tidak memiliki fitur pengeditan atau berbagi dokumen bawaan. Google Drive menyediakan kolaborasi real-time melalui Docs, Sheets, dan Slides, ditambah izin berbagi yang terperinci untuk tim.
- **Integrasi Google Workspace**: Organisasi yang beralih ke Google Workspace diuntungkan dengan menyimpan file mereka di Google Drive, di mana file tersebut terintegrasi dengan Gmail, Calendar, Meet, dan aplikasi Workspace lainnya.
- **Penyederhanaan biaya**: Harga Azure Blob melibatkan tier penyimpanan, biaya egress, operasi baca/tulis, dan opsi redundansi data. Google Workspace menggabungkan penyimpanan ke dalam harga per pengguna, yang bisa lebih sederhana untuk dianggarkan.
- **Aksesibilitas untuk pengguna akhir**: Pengguna non-teknis merasa Google Drive jauh lebih mudah dipahami dibandingkan Azure Storage Explorer atau portal Azure.

## Menyiapkan Azure Blob Storage di RcloneView

Buka Remote Manager dan tambahkan remote **Microsoft Azure Blob Storage**. Anda memerlukan:

- **Account name**: Nama akun Azure Storage Anda
- **Account key** atau **SAS URL**: Kunci akses utama dari portal Azure, atau Shared Access Signature dengan izin baca dan list

Setelah dikonfigurasi, RcloneView menampilkan daftar semua container dalam akun penyimpanan tersebut. Setiap container muncul sebagai folder tingkat atas di explorer. Navigasikan ke dalam container untuk menelusuri blob yang diorganisasi berdasarkan struktur direktori virtual berbasis prefix.

Azure Blob Storage mendukung tiga tier akses — Hot, Cool, dan Archive. RcloneView dapat membaca langsung dari tier Hot dan Cool. Blob pada tier Archive harus direhidrasi ke Hot atau Cool sebelum dapat ditransfer. Jika migrasi Anda mencakup blob yang diarsipkan, mulai rehidrasi melalui portal Azure terlebih dahulu, kemudian lanjutkan dengan RcloneView setelah blob tersebut dapat diakses.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Azure Blob Storage remote in RcloneView" class="img-large img-center" />

## Menyiapkan Google Drive di RcloneView

Tambahkan remote Google Drive menggunakan alur OAuth 2.0. Klik authorize di Remote Manager, masuk ke akun Google Anda, dan berikan akses. Untuk akun Google Workspace, Anda dapat terhubung ke My Drive atau Shared Drive tertentu.

Jika tujuannya adalah Shared Drive, pilih drive tersebut selama konfigurasi. Shared Drive memiliki aturan kepemilikan yang berbeda — file dimiliki oleh organisasi, bukan pengguna individu — sehingga ideal untuk migrasi tim.

Google Drive memiliki kuota penyimpanan per pengguna (15 GB gratis, atau penyimpanan gabungan pada paket Workspace). Verifikasi bahwa tujuan Anda memiliki kuota yang cukup sebelum memulai migrasi berskala besar. RcloneView akan melaporkan error jika kuota terlampaui selama transfer.

## Menangani Container Besar

Container Azure dapat menampung jutaan blob dengan total data mencapai terabyte atau petabyte. Memigrasikan semuanya sekaligus memungkinkan tetapi memerlukan perencanaan:

- **Enumerasi terlebih dahulu**: Gunakan explorer RcloneView untuk menelusuri container dan memahami struktur folder serta ukuran total. Ini membantu Anda memperkirakan durasi migrasi dan kebutuhan kuota Google Drive.
- **Migrasi berdasarkan prefix**: Jika container menggunakan struktur folder logis (misalnya, `/projects/2024/`, `/projects/2025/`), migrasikan satu prefix pada satu waktu. Ini memudahkan verifikasi dan memungkinkan Anda memprioritaskan data yang aktif.
- **Transfer paralel**: Tingkatkan jumlah transfer bersamaan di pengaturan RcloneView. Azure Blob Storage menangani konkurensi tinggi dengan baik, dan Google Drive mendukung unggahan paralel dengan penanganan rate limit yang sesuai.

Google Drive menerapkan batas rate API — 10 unggahan per detik untuk sebagian besar akun. RcloneView melakukan throttling secara otomatis dan mencoba ulang pada respons 403 (Rate Limit Exceeded) atau 429, tetapi migrasi berskala besar tetap akan memakan waktu lebih lama karena batasan ini.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Azure Blob Storage to Google Drive in RcloneView" class="img-large img-center" />

## Menjalankan Migrasi

Buka explorer dua panel dengan Azure Blob di sebelah kiri dan Google Drive di sebelah kanan. Pilih container sumber (atau prefix tertentu) dan folder tujuan di Google Drive.

Buat job copy atau sync. RcloneView mentransfer setiap blob sebagai file, mempertahankan struktur direktori berbasis prefix sebagai folder nyata di Google Drive. Nama file, ukuran, dan waktu modifikasi dipertahankan. Metadata Azure (properti blob kustom) tidak ditransfer karena Google Drive tidak mendukung metadata key-value sembarang.

Selama transfer, panel pemantauan real-time menampilkan:

- Progres dan kecepatan transfer per file
- Total file yang selesai vs. yang tersisa
- Perkiraan waktu penyelesaian
- Error atau percobaan ulang jika ada

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Azure Blob to Google Drive migration in RcloneView" class="img-large img-center" />

## Memverifikasi Migrasi

Setelah transfer selesai, gunakan fitur compare RcloneView untuk memverifikasi migrasi. Bandingkan container Azure dengan folder tujuan Google Drive. Tampilan compare menyoroti:

- **File yang hilang**: Blob yang tidak ditransfer (mungkin karena error atau pembatasan tier archive)
- **Ketidaksesuaian ukuran**: File yang ditransfer secara tidak lengkap
- **File yang sesuai**: Item yang berhasil dimigrasikan

Karena Azure Blob Storage menggunakan MD5 untuk verifikasi konten dan Google Drive menggunakan checksum-nya sendiri, RcloneView secara default menggunakan ukuran file dan waktu modifikasi untuk perbandingan. Untuk migrasi yang kritikal, Anda dapat mengaktifkan verifikasi checksum di pengaturan job untuk akurasi tingkat byte.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying Azure to Google Drive migration with compare" class="img-large img-center" />

## Menjadwalkan Sinkronisasi Bertahap Setelah Migrasi

Migrasi jarang terjadi secara instan — data baru mungkin masuk ke Azure Blob Storage saat transfer sedang berlangsung. Siapkan job sync terjadwal di RcloneView untuk berjalan setiap hari (atau lebih sering) selama periode transisi. Sinkronisasi bertahap ini mendeteksi blob yang baru atau berubah dan hanya mentransfer selisihnya ke Google Drive.

Setelah semua sistem mengarah ke Google Drive dan container Azure tidak lagi menerima data baru, jalankan sinkronisasi terakhir untuk menangkap sisa data yang tertinggal. Kemudian nonaktifkan job terjadwal tersebut.

Untuk transisi jangka panjang, riwayat job RcloneView menyediakan log lengkap dari setiap proses sync yang dijalankan — file yang ditransfer, byte yang dipindahkan, error, dan durasi. Jejak audit ini sangat berharga untuk memvalidasi linimasa migrasi dan pelaporan kepada pemangku kepentingan.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling incremental sync from Azure to Google Drive" class="img-large img-center" />

## Mengelola Masa Transisi

Selama periode koeksistensi, pertimbangkan untuk mount kedua remote di RcloneView untuk akses berdampingan. Pengguna dapat menelusuri container Azure dan Google Drive secara bersamaan, memverifikasi bahwa file mereka tersedia di lokasi baru. Fitur mount memungkinkan pengguna mengakses Google Drive sebagai drive letter lokal, memudahkan transisi bagi tim yang terbiasa dengan mapped drive.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting Google Drive as local drive during migration" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan Azure Blob Storage (dengan account key atau SAS) dan Google Drive (melalui OAuth) sebagai remote.
3. Jalankan migrasi dari explorer dua panel, migrasikan berdasarkan container atau prefix agar lebih mudah dikelola.
4. Verifikasi dengan compare, lalu jadwalkan sinkronisasi bertahap hingga transisi selesai.

Azure Blob Storage melayani aplikasi dengan baik, tetapi ketika tim Anda membutuhkan kolaborasi Google Workspace, RcloneView memindahkan data Anda secara bersih dan dapat diverifikasi.

---

**Panduan Terkait:**

- [Menambahkan Google Drive](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [Menyinkronkan Remote Storage Secara Instan](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)
- [Penjadwalan Job](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
