---
slug: manage-google-drive-computers-cloud-sync-rcloneview
title: "Kelola Google Drive Computers — Sinkronisasi dan Pencadangan File dengan RcloneView"
authors:
  - jay
description: "Hubungkan dan cadangkan folder Google Drive Computers di RcloneView, sinkronkan data pencadangan desktop ke lebih dari 90 penyedia cloud dari satu GUI."
keywords:
  - google drive computers
  - google drive computers backup
  - root_folder_id google drive
  - rcloneview google drive computers
  - backup and sync computers folder
  - google drive desktop backup
  - google drive computers sync
  - manage google drive computers
tags:
  - RcloneView
  - google-drive
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Google Drive Computers — Sinkronisasi dan Pencadangan File dengan RcloneView

> Folder desktop yang didorong oleh aplikasi Backup and Sync milik Google ke dalam Drive berada di luar struktur Drive normal Anda — RcloneView terhubung ke folder tersebut secara langsung sehingga bisa dijelajahi, disalin, dan dicadangkan seperti remote lainnya.

Saat sebuah workstation menjalankan klien desktop Google Drive dengan folder "Back up my Computer" diaktifkan, file-file tersebut masuk ke bagian Drive yang secara default tidak terlihat oleh remote standar — bagian ini dialamatkan menggunakan ID komputer, bukan jalur folder biasa. Hal ini membuatnya sulit dijangkau dari sebuah GUI, dan sulit dimasukkan ke dalam strategi pencadangan atau pengarsipan yang lebih luas. RcloneView menampilkan ini sebagai pengaturan remote yang dapat dikonfigurasi, sehingga pencadangan Computers menjadi sekadar sumber lain yang bisa Anda jelajahi, saring, dan salin bersama penyimpanan cloud reguler Anda.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan ke Pencadangan Computers

Konfigurasi remote Google Drive standar hanya menampilkan root Drive Anda sendiri beserta folder-folder yang Anda buat di sana. Untuk menjangkau pencadangan Computers, wizard New Remote milik RcloneView menerima nilai `root_folder_id` yang diarahkan ke ID pencadangan komputer tertentu — setelah diatur, folder-folder yang dicadangkan dari mesin tersebut (Desktop, Documents, atau apa pun yang dipilih di klien desktop) akan muncul di panel Explorer persis seperti struktur folder biasa. Ini berguna bagi tim IT yang mengelola beberapa laptop karyawan, atau siapa saja yang ingin memeriksa apa sebenarnya yang telah ditangkap oleh klien Backup and Sync suatu mesin tanpa perlu masuk melalui browser.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring a Google Drive remote with root_folder_id to access a Computers backup in RcloneView" class="img-large img-center" />

Setelah terhubung, remote tersebut mendukung operasi file yang sama seperti koneksi Google Drive lainnya: pratinjau thumbnail, navigasi struktur folder, salin/unduh via klik kanan, dan Get Size untuk mengaudit seberapa banyak data yang telah didorong suatu mesin ke Drive. RcloneView melakukan mount dan sinkronisasi ke lebih dari 90 penyedia dari jendela yang sama, sehingga pencadangan Computers bisa berada di satu panel sementara arsip tujuan berada di panel lain.

## Menggabungkan Beberapa Mesin ke Dalam Satu Arsip

Organisasi yang mencadangkan beberapa workstation akan berakhir dengan satu folder Computers per mesin, masing-masing dialamatkan dengan ID-nya sendiri, sehingga sulit mendapatkan satu tampilan tunggal atas "semua yang dicadangkan dari laptop perusahaan". Dengan menyiapkan remote terpisah untuk setiap mesin dan menjalankan pekerjaan sinkronisasi satu arah terjadwal ke tujuan bersama — NAS lokal, bucket S3, atau akun Drive kedua — data pencadangan yang tercecer tersebut dapat digabungkan ke satu tempat yang benar-benar Anda kendalikan, alih-alih terkunci di dalam tampilan Drive masing-masing karyawan.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing a Google Drive Computers backup to a consolidated archive destination in RcloneView" class="img-large img-center" />

Pengaturan filter di Langkah 3 wizard sinkronisasi membantu menjaga efisiensi pekerjaan ini — mengecualikan file sementara, cache sistem, atau ekstensi yang tidak penting berarti arsip gabungan hanya menyimpan apa yang benar-benar layak dipertahankan, bukan cerminan penuh dari setiap file yang kebetulan ditangkap oleh klien desktop.

## Menjadwalkan Pemeriksaan Berulang

Pencadangan Computers bukanlah sesuatu yang statis — ia terus bertambah setiap kali klien desktop menjalankan siklus sinkronisasinya sendiri, sehingga penyalinan satu kali ke arsip Anda akan cepat menjadi usang. Pengguna lisensi PLUS dapat melampirkan jadwal bergaya crontab ke pekerjaan sinkronisasi sehingga file yang baru dicadangkan diambil secara otomatis secara berkala. Job History kemudian menampilkan dengan tepat kapan folder Computers setiap mesin terakhir kali ditangkap, ukuran data yang ditransfer, dan apakah proses tersebut selesai dengan baik.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring sync job for a Google Drive Computers remote in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buat remote Google Drive baru dan atur `root_folder_id` ke ID pencadangan komputer target.
3. Jelajahi panel Explorer untuk memastikan folder desktop yang diharapkan muncul.
4. Siapkan pekerjaan sinkronisasi satu arah ke tujuan arsip gabungan, dan jadwalkan jika Anda menggunakan lisensi PLUS.

Data pencadangan desktop seharusnya tidak terjebak di balik ID komputer yang hanya bisa Anda lihat melalui browser — membawanya ke RcloneView memberikan visibilitas dan perlindungan yang sama seperti penyimpanan cloud Anda yang lain.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Google Drive — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Kelola Google Drive Shared With Me — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-google-drive-shared-with-me-rcloneview)
- [Mount Google Drive sebagai Drive Lokal dengan RcloneView](https://rcloneview.com/support/blog/mount-google-drive-as-local-drive-rcloneview)

<CloudSupportGrid />
