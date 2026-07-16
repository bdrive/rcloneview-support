---
slug: icloud-drive-with-rcloneview
title: "RcloneView + iCloud Drive: Pencadangan Apple Cloud yang Aman dengan Terminal Bawaan"
authors:
  - tayson
description: "Tambahkan iCloud Drive melalui Terminal RcloneView, lalu kelola secara visual dengan Compare, Sync, dan Jobs. Alur kerja yang aman untuk pencadangan Apple cloud di Windows atau macOS."
keywords:
  - pencadangan icloud drive
  - rclone icloud
  - rcloneview icloud
  - apple id 2fa rclone
  - icloud ke google drive
  - icloud ke s3
  - pencadangan cloud ke cloud
  - rclone terminal gui
  - rcloneview terminal
  - migrasi apple cloud
tags:
  - sync
  - file-management
---

import RvCta from '@site/src/components/RvCta';

# RcloneView + iCloud Drive: Pencadangan Apple Cloud yang Aman dengan Terminal Bawaan

> iCloud Drive populer, tetapi alur kerja pencadangan setingkat enterprise tidak tersedia secara bawaan. RcloneView menjembatani hal ini dengan memungkinkan Anda menambahkan iCloud melalui Terminal bawaan, lalu mengelola semuanya secara visual dengan Compare, Sync, dan Jobs.

Jika Anda menginginkan cara yang andal untuk mencadangkan iCloud Drive ke Google Drive, S3, atau disk lokal, Anda memerlukan dua hal: **backend iCloud milik rclone** dan **GUI untuk alur kerja yang aman dan dapat diulang**. RcloneView menghadirkan keduanya dalam satu tempat.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa pencadangan iCloud itu rumit

- iCloud memerlukan login interaktif Apple ID dan 2FA.
- Alat bawaan tidak memiliki pencadangan lintas cloud atau penjadwalan.
- Konfigurasi berbasis CLI saja memang andal, tetapi mudah salah dikonfigurasi.

RcloneView mengatasi ini dengan memungkinkan Anda menjalankan langkah CLI yang diperlukan di Terminal bawaannya, lalu mengelola semuanya di GUI setelahnya.

## Langkah 1: Buka Terminal RcloneView

Gunakan Terminal bawaan untuk menjalankan perintah rclone tanpa membuka shell eksternal.

<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-bottom.png" alt="RcloneView Terminal tab" class="img-large img-center" />

## Langkah 2: Tambahkan iCloud Drive menggunakan rclone config

iCloud saat ini memerlukan konfigurasi CLI karena Apple 2FA. Jalankan `rclone config` di dalam Terminal dan ikuti petunjuknya:

```bash
rclone config
```

Petunjuk utama yang akan Anda lihat:

- **Storage**: pilih `iclouddrive` (atau nomornya)
- **Apple ID**: alamat email iCloud Anda
- **Password**: kata sandi Apple ID Anda
- **2FA code**: masukkan kode yang dikirim ke perangkat tepercaya Anda

Panduan referensi (tangkapan layar + langkah lengkap):  
[/support/howto/remote-storage-connection-settings/connect-using-cli/add-icloud-drive](/howto/remote-storage-connection-settings/connect-using-cli/add-icloud-drive)

## Langkah 3: Konfirmasi remote baru di RcloneView

Setelah remote dibuat, remote tersebut akan otomatis muncul di **Remote Manager**.

<img src="/support/images/en/blog/remote-manager.png" alt="Remote Manager" class="img-large img-center" />

Dari sini, Anda dapat membukanya di Explorer dan menggunakan alur kerja GUI seperti biasa.

## Langkah 4: Gunakan alat GUI untuk pencadangan yang aman

### Compare sebelum Sync

Jalankan **Compare** untuk melihat apa yang akan berubah sebelum sinkronisasi menyentuh data Anda.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results filters" class="img-large img-center" />

Panduan: [/support/howto/rcloneview-basic/compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents)

### Sinkronisasi iCloud ke cloud lain

Pilih iCloud sebagai sumber dan target pencadangan Anda (Drive, S3, disk eksternal) sebagai tujuan.

<img src="/support/images/en/howto/rcloneview-basic/sync-configure-storage.png" alt="Sync configure storage" class="img-large img-center" />

Panduan: [/support/howto/rcloneview-basic/synchronize-remote-storages](/howto/rcloneview-basic/synchronize-remote-storages)

### Simpan sebagai Job dan jadwalkan

Simpan Sync sebagai Job untuk pencadangan berkala (lisensi Plus).

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/add-job-scheduling.png" alt="Add job scheduling" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Create job schedule" class="img-large img-center" />
</div>

Panduan: [/support/howto/rcloneview-basic/create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs), [/support/howto/rcloneview-advanced/job-scheduling-and-execution](/howto/rcloneview-advanced/job-scheduling-and-execution)

## Praktik terbaik untuk pencadangan iCloud

- **Gunakan folder tujuan khusus** agar pencadangan tetap teratur.
- **Mulai dengan dry run** untuk memvalidasi arah sinkronisasi.
- **Siapkan Apple ID 2FA** selama penyiapan awal.
- **Pantau Job History** untuk mendeteksi kegagalan sejak dini.

<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run.png" alt="Sync dry run" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history" class="img-large img-center" />

## Untuk siapa alur kerja ini

- **Pemula** yang menginginkan jaring pengaman visual.
- **Engineer** yang membutuhkan fleksibilitas CLI tetapi lebih menyukai operasi GUI.
- **Admin IT** yang menginginkan job pencadangan yang dapat diulang dan diaudit.

## Kesimpulan

iCloud Drive dapat dicadangkan secara aman dan berulang jika Anda menggabungkan CLI rclone dengan lapisan kontrol visual. Gunakan Terminal RcloneView sekali untuk menyiapkan iCloud, lalu jalankan sisanya di GUI untuk kecepatan, keamanan, dan kejelasan.
