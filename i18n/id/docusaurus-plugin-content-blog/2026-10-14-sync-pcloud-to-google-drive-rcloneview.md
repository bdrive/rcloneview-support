---
slug: sync-pcloud-to-google-drive-rcloneview
title: "Sinkronkan pCloud ke Google Drive — Pencadangan Cloud dengan RcloneView"
authors:
  - jay
description: "Sinkronkan pCloud ke Google Drive dengan RcloneView: hubungkan kedua remote, pratinjau dengan Dry Run, dan jadwalkan pencadangan cloud-ke-cloud dari satu jendela."
keywords:
  - sinkronkan pcloud ke google drive
  - pencadangan pcloud ke google drive
  - RcloneView pcloud
  - sinkronisasi cloud ke cloud
  - transfer pcloud google drive
  - cadangkan file pcloud
  - salinan kedua pencadangan cloud
  - jadwalkan sinkronisasi cloud
  - rclone GUI
tags:
  - RcloneView
  - pcloud
  - google-drive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sinkronkan pCloud ke Google Drive — Pencadangan Cloud dengan RcloneView

> Simpan salinan kedua file pCloud Anda di Google Drive dengan job sinkronisasi cloud-ke-cloud yang dapat Anda pratinjau, jalankan, dan jadwalkan dari satu jendela.

Mengandalkan satu cloud untuk file penting membuat Anda berisiko mengalami penguncian akun, penghapusan tidak sengaja, dan kesalahan sinkronisasi. Memirror pCloud ke Google Drive memberi Anda salinan independen di penyedia yang berbeda. RcloneView menghubungkan kedua layanan melalui OAuth, lalu menyinkronkan data di antara keduanya sebagai sebuah job. RcloneView melakukan mount DAN sinkronisasi untuk 90+ penyedia dari satu jendela, di Windows, macOS, dan Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hubungkan pCloud dan Google Drive

Kedua penyedia menggunakan login OAuth berbasis browser. Di RcloneView, buka dialog remote baru, pilih pCloud, lalu masuk saat browser Anda terbuka. Ulangi untuk Google Drive. Setelah diotorisasi, setiap remote muncul di Remote Manager dan Explorer, tempat Anda dapat menelusuri folder berdampingan dalam tata letak dua panel.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote pCloud dan Google Drive di RcloneView" class="img-large img-center" />

## Periksa Sebelum Menyinkronkan

Bayangkan seorang desainer freelance dengan arsip proyek pCloud sebesar 300 GB yang menginginkan mirror di Drive. Sebelum mengubah apa pun, gunakan Folder Compare pada kedua folder. Fitur ini menunjukkan file mana yang hanya ada di satu sisi, mana yang berbeda, dan mana yang sama, sehingga Anda tahu persis apa yang akan dilakukan sinkronisasi pertama.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Membandingkan folder pCloud dan Google Drive di RcloneView" class="img-large img-center" />

## Buat Job Sinkronisasi

Wizard sinkronisasi memiliki empat langkah: pilih sumber dan tujuan, atur pengaturan lanjutan, tetapkan filter, dan jadwalkan secara opsional. Pilih pCloud sebagai sumber dan Google Drive sebagai tujuan dengan opsi satu arah, yang hanya mengubah tujuan. Gunakan filter untuk melewati file sementara atau membatasi ukuran file, dan jalankan Dry Run untuk melihat daftar file yang akan disalin atau dihapus. Karena sinkronisasi satu arah membuat tujuan sama dengan sumber, selalu periksa keluaran Dry Run untuk mencari penghapusan yang tidak terduga.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfer cloud-ke-cloud dari pCloud ke Google Drive di RcloneView" class="img-large img-center" />

## Pantau dan Jadwalkan

Jalankan job dan pantau progres transfer secara langsung, lalu tinjau hasilnya di Job History. Dengan lisensi PLUS, tambahkan jadwal bergaya crontab agar mirror diperbarui secara berkala (RcloneView tetap berjalan di System Tray).

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Menjadwalkan job sinkronisasi pCloud ke Google Drive di RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan pCloud dan Google Drive sebagai remote menggunakan login OAuth.
3. Bandingkan folder sumber dan tujuan, lalu buat job sinkronisasi satu arah.
4. Jalankan Dry Run, eksekusi job, dan tinjau di Job History.

Salinan kedua yang terverifikasi di penyedia lain mengubah titik kegagalan tunggal menjadi pencadangan yang sesungguhnya.

---

**Panduan Terkait:**

- [Kelola Penyimpanan pCloud — Sinkronkan dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Migrasi Google Drive ke pCloud — Transfer File dengan RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-pcloud-rcloneview)
- [Sinkronkan Dropbox ke pCloud — Pencadangan Cloud dengan RcloneView](https://rcloneview.com/support/blog/sync-dropbox-to-pcloud-rcloneview)

<CloudSupportGrid />
