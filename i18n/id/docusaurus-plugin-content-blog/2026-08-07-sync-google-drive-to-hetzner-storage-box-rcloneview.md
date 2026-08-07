---
slug: sync-google-drive-to-hetzner-storage-box-rcloneview
title: "Sinkronisasi Google Drive ke Hetzner Storage Box — Cadangan Cloud dengan RcloneView"
authors:
  - steve
description: "Sinkronkan file Google Drive ke Hetzner Storage Box untuk cadangan offsite yang terjangkau menggunakan tugas sinkronisasi lintas penyedia RcloneView."
keywords:
  - sinkronisasi google drive ke hetzner
  - cadangan google drive hetzner storage box
  - hetzner storage box rclone
  - cadangan offsite google drive
  - sinkronisasi penyimpanan cloud hemat biaya
  - cadangan penyimpanan cloud eropa
  - sinkronisasi google drive rcloneview
  - cadangan hetzner box
  - cadangan sftp google drive
  - cadangan cloud ke cloud
tags:
  - RcloneView
  - google-drive
  - hetzner
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sinkronisasi Google Drive ke Hetzner Storage Box — Cadangan Cloud dengan RcloneView

> Simpan salinan kedua file Google Drive Anda dengan biaya rendah di Hetzner Storage Box tanpa perlu meninggalkan desktop atau menulis satu baris skrip pun.

Google Drive nyaman untuk kolaborasi sehari-hari, tetapi tidak dirancang sebagai target cadangan jangka panjang dengan sendirinya — salinan kedua pada infrastruktur independen melindungi dari penguncian akun, penghapusan tidak sengaja, atau kejutan kuota. Hetzner Storage Box menjadi pilihan populer untuk keperluan ini karena biaya per terabyte-nya yang rendah, dan RcloneView menghubungkan keduanya secara langsung melalui tugas sinkronisasi terjadwal, tanpa perlu penulisan skrip baris perintah. RcloneView me-mount dan menyinkronkan kedua penyedia dari satu jendela, di Windows, macOS, dan Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Kedua Remote

Tambahkan Google Drive terlebih dahulu melalui Remote Manager menggunakan login browser OAuth standar — tidak diperlukan entri kunci API karena RcloneView menangani alur autentikasi secara otomatis. Kemudian tambahkan Hetzner Storage Box sebagai remote SFTP, masukkan alamat host box tersebut dan kredensial SSH Anda pada layar pengaturan Credential Entry.

Setelah kedua remote muncul sebagai tab di panel Explorer, buka tata letak panel terpisah untuk menelusurinya berdampingan. Ini adalah pemeriksaan yang berguna sebelum mengonfigurasi tugas otomatis apa pun — pastikan struktur folder tujuan di Storage Box sesuai dengan yang Anda harapkan sebelum mengarahkan sinkronisasi ke sana.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan Google Drive dan Hetzner Storage Box sebagai remote di RcloneView" class="img-large img-center" />

## Mengonfigurasi Tugas Sinkronisasi

Pada wizard sinkronisasi, pilih Google Drive sebagai sumber dan Hetzner Storage Box sebagai tujuan, lalu pilih arah sinkronisasi **One-way** (satu arah) sehingga Storage Box mencerminkan Google Drive tanpa menghapus apa pun di sumber. Pada Step 3, terapkan filter untuk melewati jenis file yang tidak perlu dicadangkan — mengecualikan file `.tmp` atau format khusus Google Docs membuat volume yang ditransfer lebih kecil dan menjalankan proses berikutnya lebih cepat.

Mengaktifkan perbandingan checksum di Advanced Settings membuat RcloneView hanya mentransfer ulang file yang benar-benar berubah, bukan semua file dengan tanggal modifikasi yang lebih baru — ini paling penting pada Google Drive, di mana stempel waktu metadata dapat berubah tanpa perubahan konten.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Mengonfigurasi tugas sinkronisasi satu arah dari Google Drive ke Hetzner Storage Box di RcloneView" class="img-large img-center" />

## Mengotomatisasi dan Memantau Cadangan

Jalankan Dry Run terlebih dahulu untuk melihat pratinjau file mana saja yang akan disalin, lalu jalankan tugas tersebut dan pantau progresnya secara langsung di tab Transferring pada Info View — kecepatan transfer, jumlah file, dan total ukuran akan diperbarui. Pemegang lisensi PLUS dapat melampirkan jadwal bergaya crontab agar sinkronisasi berulang tanpa intervensi manual, dan Job History menyimpan catatan permanen durasi dan hasil setiap proses untuk keperluan audit di kemudian hari.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Menjadwalkan tugas sinkronisasi berulang dari Google Drive ke Hetzner Storage Box di RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Hubungkan Google Drive melalui OAuth dan tambahkan Hetzner Storage Box sebagai remote SFTP.
3. Buat tugas sinkronisasi satu arah dengan filter dan perbandingan checksum diaktifkan.
4. Jalankan Dry Run, lalu jalankan sinkronisasi dan pantau di tab Transferring.

Memiliki salinan kedua pada infrastruktur independen berbiaya rendah adalah salah satu cara paling sederhana untuk melindungi data Google Drive, dan RcloneView menjaga rutinitas ini tetap berjalan tanpa pengaturan file secara manual.

---

**Panduan Terkait:**

- [Mengelola Penyimpanan Hetzner Storage Box — Sinkronkan dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-hetzner-storage-box-sync-rcloneview)
- [Sinkronisasi Dropbox ke Hetzner Storage Box — Cadangan Cloud dengan RcloneView](https://rcloneview.com/support/blog/sync-dropbox-to-hetzner-storage-box-rcloneview)
- [Mengelola Penyimpanan Google Drive — Sinkronkan dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
