---
slug: backup-zoho-workdrive-google-drive-s3-rcloneview
title: "Cadangkan Zoho WorkDrive ke Google Drive atau S3 Secara Otomatis dengan RcloneView"
authors:
  - tayson
description: "Lindungi data Zoho WorkDrive Anda dengan mencadangkannya ke Google Drive, AWS S3, atau penyimpanan eksternal — secara otomatis dan terjadwal — menggunakan koneksi WebDAV RcloneView."
keywords:
  - zoho workdrive backup
  - zoho to google drive
  - zoho workdrive sync
  - zoho workdrive export
  - backup zoho files
  - zoho workdrive to s3
  - zoho cloud backup tool
  - zoho workdrive migration
  - zoho workdrive rclone
  - zoho file backup automation
tags:
  - zoho
  - sync
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cadangkan Zoho WorkDrive ke Google Drive atau S3 Secara Otomatis dengan RcloneView

> Zoho WorkDrive adalah alat kolaborasi yang solid, tetapi bagaimana rencana pencadangan Anda? Jika langganan Zoho Anda berakhir atau data terhapus secara tidak sengaja, pencadangan independen ke Google Drive atau S3 memastikan tidak ada yang hilang.

Zoho WorkDrive populer di kalangan bisnis yang menjalankan ekosistem Zoho — CRM, email, proyek, dan penyimpanan file bersama dalam satu platform. Namun Zoho tidak menawarkan cara bawaan untuk mencadangkan data WorkDrive ke cloud lain. Jika Anda memerlukan salinan independen untuk pemulihan bencana, kepatuhan, atau tujuan migrasi, RcloneView mengisi kesenjangan ini dengan terhubung ke WorkDrive melalui WebDAV.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Mencadangkan Zoho WorkDrive?

- **Tidak ada pencadangan lintas-cloud bawaan** — Zoho tidak menyediakan fungsi ekspor-ke-S3 atau ekspor-ke-GDrive secara bawaan.
- **Risiko penghapusan tidak sengaja** — Anggota tim dapat menghapus file bersama. Tanpa pencadangan eksternal, pemulihan mungkin mustahil dilakukan.
- **Ketergantungan langganan** — Jika paket Zoho Anda habis masa berlakunya atau diturunkan, akses file dapat dibatasi.
- **Persyaratan kepatuhan** — Beberapa regulasi mengharuskan data disimpan di beberapa lokasi independen.
- **Fleksibilitas migrasi** — Jika suatu saat Anda memutuskan untuk beralih dari Zoho ke Google Workspace atau Microsoft 365, memiliki pencadangan membuat transisi menjadi mulus.

## Menghubungkan Zoho WorkDrive melalui WebDAV

Zoho WorkDrive mendukung akses WebDAV, yang terhubung secara native dengan RcloneView:

1. Buka RcloneView dan klik **Add Remote**.
2. Pilih **WebDAV** dari daftar penyedia.
3. Masukkan detail WebDAV Zoho WorkDrive Anda:
   - **URL**: Endpoint WebDAV Zoho WorkDrive Anda.
   - **Username**: Alamat email Zoho Anda.
   - **Password**: Kata sandi khusus aplikasi dari pengaturan keamanan Zoho.
4. Simpan — file dan folder WorkDrive Anda sekarang dapat dijelajahi.

Untuk detail pengaturan WebDAV, lihat [panduan koneksi WebDAV](https://rcloneview.com/support/howto/remote-storage-connection-settings/webdav).

<img src="/support/images/en/blog/new-remote.png" alt="Add Zoho WorkDrive via WebDAV" class="img-large img-center" />

## Menjelajahi File WorkDrive Anda

Setelah terhubung, jelajahi seluruh WorkDrive Anda di Explorer dua panel:

- Lihat folder tim, file pribadi, dan ruang bersama.
- Periksa ukuran file untuk memperkirakan kebutuhan penyimpanan pencadangan.
- Identifikasi folder penting yang memerlukan prioritas pencadangan.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse Zoho WorkDrive files" class="img-large img-center" />

## Pencadangan ke Google Drive

1. **Tambahkan Google Drive** sebagai remote kedua (melalui [login OAuth](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)).
2. **Buat job Copy**: Zoho WorkDrive → folder Google Drive.
3. **Jalankan pencadangan awal** — semua file ditransfer dengan struktur folder tetap terjaga.
4. **Jadwalkan harian** dengan [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution) untuk pembaruan inkremental otomatis.

## Pencadangan ke AWS S3

1. **Tambahkan S3** sebagai remote ([panduan pengaturan S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)).
2. **Buat job Copy**: Zoho WorkDrive → bucket S3.
3. **Jadwalkan** untuk dijalankan setiap malam.
4. Gunakan kebijakan siklus hidup S3 untuk memindahkan pencadangan lama ke Glacier demi penghematan biaya.

## Verifikasi Pencadangan Anda

Setelah setiap proses pencadangan, gunakan [Folder Comparison](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents) untuk memastikan kelengkapan:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Zoho WorkDrive backup" class="img-large img-center" />

## Otomatisasi dan Pemantauan

1. **Jadwalkan pencadangan** untuk berjalan setiap hari pada jam sepi.
2. **Dapatkan notifikasi** melalui [Slack](https://rcloneview.com/support/blog/rcloneview-slack-remote-control) atau [Telegram](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control).
3. **Tinjau Job History** untuk melacak semua proses pencadangan.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Zoho WorkDrive backups" class="img-large img-center" />

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Zoho backup job history" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Tambahkan Zoho WorkDrive** melalui WebDAV.
3. **Tambahkan tujuan pencadangan Anda** (Google Drive, S3, drive eksternal).
4. **Buat job Copy** dan jadwalkan.
5. **Verifikasi** dengan Folder Comparison.

Jangan biarkan data Zoho WorkDrive Anda ada tanpa rencana pencadangan. RcloneView memberi Anda pencadangan otomatis dan terverifikasi ke cloud mana pun — demi ketenangan pikiran yang tidak disediakan Zoho secara bawaan.

---

**Panduan Terkait:**

- [Tambah WebDAV](https://rcloneview.com/support/howto/remote-storage-connection-settings/webdav)
- [Tambah Remote via Login Berbasis Browser (OAuth)](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [Tambah AWS S3 dan S3-Compatible](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Bandingkan Isi Folder](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Job Scheduling](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
