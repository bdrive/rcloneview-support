---
slug: manage-azure-files-cloud-sync-rcloneview
title: "Kelola Azure Files dengan RcloneView: Sinkronisasi, Pencadangan, dan Mount SMB Cloud Shares"
authors:
  - tayson
description: Pelajari cara mengelola share Azure Files dengan RcloneView — tambahkan remote, jelajahi share SMB, sinkronkan dengan cloud lain, mount sebagai drive lokal, dan jadwalkan pencadangan.
keywords:
  - rcloneview
  - azure files
  - azure file shares
  - smb cloud storage
  - cloud sync
  - mount azure files
  - azure backup
  - rclone GUI
  - multi-cloud management
  - azure file management
tags:
  - RcloneView
  - azure-files
  - azure
  - cloud-storage
  - cloud-sync
  - guide
  - mount
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Azure Files dengan RcloneView: Sinkronisasi, Pencadangan, dan Mount SMB Cloud Shares

> Azure Files memberikan share file SMB yang dikelola sepenuhnya di cloud. **RcloneView** memungkinkan Anda menjelajahi, mensinkronkan, mencadangkan, dan me-mount-nya — semuanya dari antarmuka visual tanpa perlu bekerja dengan command-line.

Azure Files adalah layanan share file terkelola dari Microsoft, yang menawarkan akses SMB dan NFS langsung dari Azure. Layanan ini populer di kalangan perusahaan yang menjalankan beban kerja hybrid, aplikasi lift-and-shift, dan penyimpanan bersama untuk virtual machine. Namun, mengelola Azure Files di luar Azure Portal bisa merepotkan — terutama saat Anda perlu memindahkan data antara Azure dan cloud lain atau menjaga salinan lokal tetap sinkron.

RcloneView mengatasi hal ini dengan membungkus backend Azure Files milik rclone dalam GUI dua panel yang bersih. Anda dapat menambahkan file share Azure Anda sebagai remote, menjelajahinya secara visual, menyeret file antar cloud, membandingkan isi folder, menjadwalkan pencadangan otomatis, bahkan me-mount share sebagai huruf drive lokal.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Menggunakan RcloneView untuk Azure Files

Azure Files bekerja dengan baik di dalam ekosistem Azure, tetapi alur kerja di dunia nyata sering kali melibatkan beberapa provider sekaligus. Anda mungkin perlu:

- **Mencadangkan file share Azure** ke cloud terpisah seperti Amazon S3, Backblaze B2, atau Wasabi untuk pemulihan bencana.
- **Mensinkronkan Azure Files dengan Google Drive atau OneDrive** sehingga anggota tim dapat mengakses data yang sama dari tools yang sudah familiar.
- **Me-mount share Azure secara lokal** untuk aplikasi yang membutuhkan path file lokal, bukan connection string SMB.
- **Memigrasikan data** dari Azure Files ke provider lain — atau sebaliknya.

RcloneView menangani semua ini tanpa scripting, PowerShell, atau AzCopy.

## Menambahkan Azure Files sebagai Remote

Menyiapkan Azure Files di RcloneView hanya butuh waktu kurang dari satu menit:

1. Buka RcloneView dan klik **+ New Remote**.
2. Pilih tipe penyimpanan **Azure Files** dari daftar.
3. Masukkan **nama akun Azure Storage** dan **account key** Anda (atau SAS token).
4. Beri nama remote Anda (misalnya, `AzureFileShares`) lalu simpan.

File share Azure Anda kini akan muncul di panel Explorer, siap untuk dijelajahi.

<img src="/support/images/en/blog/new-remote.png" alt="Adding an Azure Files remote in RcloneView" class="img-large img-center" />

## Menjelajahi dan Mengelola File Share

Setelah terhubung, RcloneView menampilkan file share Azure Anda dalam tata letak dua panel yang familiar. Anda dapat:

- **Menavigasi direktori** di dalam share mana pun — masuk ke folder bersarang seperti file manager lokal.
- **Melihat pratinjau metadata file** seperti ukuran, tanggal modifikasi, dan path.
- **Mengganti nama, menghapus, atau membuat** folder langsung dari GUI.
- **Membuka cloud kedua** di panel sebelahnya untuk pengelolaan berdampingan.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Two-pane explorer showing Azure Files alongside another cloud" class="img-large img-center" />

## Mensinkronkan Azure Files dengan Cloud Lain

Kekuatan sesungguhnya dari RcloneView terlihat saat Anda menghubungkan Azure Files ke cloud lain. Muat Azure Files di satu sisi dan tujuan Anda — Google Drive, OneDrive, Amazon S3, atau remote lain yang didukung — di sisi lainnya.

### Drag and Drop

Pilih file atau folder di Azure Files dan seret ke panel tujuan. RcloneView menangani transfer di latar belakang dan menampilkan progres secara real-time.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files from Azure Files to another cloud" class="img-large img-center" />

### Bandingkan dan Salin Selektif

Gunakan fitur **Compare** untuk melihat file mana yang baru, berubah, atau hilang di kedua sisi. Kemudian salin hanya perbedaannya — sempurna untuk pembaruan inkremental tanpa perlu mentransfer semuanya.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folders between Azure Files and a destination cloud" class="img-large img-center" />

### Sinkronisasi Penuh

Jalankan operasi **Sync** untuk membuat tujuan menjadi cerminan persis dari file share Azure Anda. Selalu gunakan **Dry Run** terlebih dahulu untuk melihat pratinjau perubahan sebelum menerapkannya.

## Mount Azure Files sebagai Drive Lokal

RcloneView dapat me-mount file share Azure mana pun sebagai huruf drive lokal di Windows, macOS, atau Linux. Ini berguna saat:

- Aplikasi desktop membutuhkan path lokal untuk membaca atau menulis file.
- Anda ingin mengakses Azure Files dari File Explorer atau Finder tanpa klien SMB.
- Anda membutuhkan mount sementara yang cepat untuk tugas satu kali.

Buka remote di Explorer, klik kanan pada share, dan pilih **Mount**. Pilih huruf drive atau titik mount Anda, dan share akan muncul sebagai volume lokal.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount Azure Files as a local drive from RcloneView Explorer" class="img-large img-center" />

## Menjadwalkan Pencadangan Otomatis

Untuk perlindungan berkelanjutan, buat **Scheduled Job** di RcloneView:

1. Siapkan job Sync atau Copy dari Azure Files ke tujuan pencadangan Anda.
2. Buka panel **Job Scheduling** dan tentukan jadwal — harian, mingguan, atau ekspresi cron kustom.
3. Aktifkan jadwal dan biarkan RcloneView menangani sisanya.

Setiap kali dijalankan, aktivitas dicatat di panel **Job History**, sehingga Anda dapat mengaudit apa yang telah ditransfer dan menemukan kesalahan.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule an automated backup job for Azure Files" class="img-large img-center" />

## Tips untuk Bekerja dengan Azure Files

- **Gunakan SAS token dengan scope terbatas** jika Anda ingin memberikan akses ke RcloneView tanpa mengekspos account key penuh Anda.
- **Pantau ukuran transfer** — Azure Files membebankan biaya untuk penyimpanan dan transaksi; sinkronisasi yang sering dengan delta besar dapat menambah biaya.
- **Kecualikan file sementara** menggunakan aturan filter RcloneView untuk menghindari sinkronisasi file lock, log, atau direktori cache.
- **Uji pemulihan secara berkala** dengan menyalin beberapa file kembali dari tujuan pencadangan Anda untuk memverifikasi integritasnya.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Tambahkan remote Azure Files Anda** menggunakan kredensial akun storage Anda.
3. **Jelajahi, sinkronkan, mount, atau jadwalkan** — semuanya dari GUI, tanpa memerlukan CLI.

Pengelolaan Azure Files tidak harus berarti berpindah-pindah tab portal dan script PowerShell. RcloneView membawa semuanya ke dalam satu jendela.

---

**Panduan Terkait:**

- [Transfer dan Sinkronisasi Cloud-to-Cloud dengan RcloneView](https://rcloneview.com/support/blog/cloud-to-cloud-transfer-sync-rcloneview)
- [Migrasikan Dropbox ke Azure Blob Storage dengan RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-azure-blob-storage-rcloneview)
- [Kelola Google Cloud Storage Buckets dengan RcloneView](https://rcloneview.com/support/blog/manage-google-cloud-storage-buckets-rcloneview)

<CloudSupportGrid />
