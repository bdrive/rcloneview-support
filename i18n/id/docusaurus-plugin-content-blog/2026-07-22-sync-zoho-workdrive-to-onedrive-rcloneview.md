---
slug: sync-zoho-workdrive-to-onedrive-rcloneview
title: "Sinkronkan Zoho WorkDrive ke OneDrive — Backup Cloud dengan RcloneView"
authors:
  - steve
description: "Sinkronkan file dari Zoho WorkDrive ke Microsoft OneDrive dengan RcloneView, menjaga kedua akun penyimpanan bisnis tetap ter-backup dan up to date."
keywords:
  - sinkronkan Zoho WorkDrive ke OneDrive
  - backup Zoho WorkDrive
  - migrasi Zoho WorkDrive OneDrive
  - RcloneView Zoho WorkDrive
  - backup bisnis lintas cloud
  - alat sinkronisasi Microsoft OneDrive
  - transfer file multi-cloud
  - sinkronisasi cloud ke cloud GUI
  - backup penyimpanan file bisnis
tags:
  - RcloneView
  - zoho
  - onedrive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sinkronkan Zoho WorkDrive ke OneDrive — Backup Cloud dengan RcloneView

> Pertahankan backup berkelanjutan dari folder tim Zoho WorkDrive ke Microsoft OneDrive tanpa mengekspor file secara manual atau membuat skrip pekerjaan transfer terpisah untuk setiap departemen.

Tim yang telah menstandarkan Zoho WorkDrive untuk kolaborasi sehari-hari sering kali masih memerlukan keberadaan di Microsoft OneDrive, entah karena klien yang hanya bekerja di ekosistem Microsoft, merger yang membuat dua platform penyimpanan digunakan sekaligus, atau sekadar ingin memiliki salinan kedua dari file bisnis di luar infrastruktur Zoho. Mengunduh secara manual dari WorkDrive lalu mengunggah ulang ke OneDrive tidak dapat diskalakan melebihi beberapa file saja, dan tidak meninggalkan catatan tentang apa yang dijalankan atau kapan. RcloneView menghubungkan kedua platform dalam satu antarmuka dan mengubah transfer tersebut menjadi pekerjaan sinkronisasi yang dapat diulang.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Zoho WorkDrive dan OneDrive sebagai Remote

OneDrive terhubung melalui login OAuth berbasis browser standar di wizard New Remote RcloneView — tidak perlu kunci API terpisah. Zoho WorkDrive memerlukan satu langkah tambahan saat pengaturan: memilih region yang benar untuk akun tersebut, karena Zoho menghosting data di region geografis yang berbeda tergantung di mana workspace dibuat. Setelah kedua remote ditambahkan, keduanya muncul sebagai tab terpisah di Explorer, dan masing-masing dapat dijelajahi, difilter, atau dibandingkan satu sama lain seperti folder lokal biasa.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Zoho WorkDrive and OneDrive as remotes in RcloneView" class="img-large img-center" />

## Membangun Pekerjaan Sync Antara Kedua Platform

Langkah pertama wizard Sync adalah tempat sumber (folder Zoho WorkDrive) dan tujuan (folder OneDrive) dipilih, bersama dengan nama pekerjaan dan arah sinkronisasi. Sinkronisasi satu arah — yang hanya mengubah tujuan — adalah mode stabil dan resmi, serta pilihan yang tepat untuk pekerjaan bergaya backup di mana WorkDrive tetap menjadi sumber kebenaran. Langkah 2 mencakup konkurensi transfer dan pengecekan kesetaraan, berguna untuk diturunkan jika API WorkDrive merespons lambat di bawah banyak permintaan paralel. Pengaturan filter di langkah 3 memungkinkan Anda mempersempit pekerjaan hanya ke folder atau jenis file yang relevan, menggunakan filter bawaan untuk dokumen dan media atau aturan pengecualian khusus seperti `/.tmp/*`.

Sinkronisasi antara Zoho WorkDrive dan OneDrive tidak memerlukan upgrade lisensi, karena sinkronisasi 1:N dan Sync & Job Management dasar keduanya sudah termasuk dalam tingkat FREE.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job from Zoho WorkDrive to OneDrive" class="img-large img-center" />

## Memverifikasi dan Mengotomatiskan Transfer

Sebelum menjalankan pekerjaan pada data sebenarnya, Dry Run mensimulasikan sinkronisasi dan mencantumkan secara persis file mana yang akan disalin, sehingga Anda bisa menemukan filter yang salah konfigurasi atau folder yang tidak diinginkan sebelum ada yang benar-benar berpindah. Setelah pekerjaan terlihat benar, simpan di Job Manager, di mana pekerjaan tersebut dapat dijalankan ulang secara manual atau, dengan lisensi PLUS, dilampirkan ke jadwal bergaya crontab sehingga backup WorkDrive-ke-OneDrive berjalan otomatis tanpa ada yang perlu mengingat untuk memicunya.

Job History mencatat setiap eksekusi — waktu mulai, durasi, status, dan total file yang ditransfer — yang berguna untuk memastikan backup terjadwal benar-benar selesai alih-alih gagal diam-diam semalaman.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring sync job from Zoho WorkDrive to OneDrive" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Hubungkan Zoho WorkDrive (dengan memilih region yang benar) dan OneDrive (melalui login OAuth) lewat tab Remote > New Remote.
3. Buat pekerjaan Sync satu arah dari folder WorkDrive Anda ke tujuan OneDrive, menerapkan filter sesuai kebutuhan.
4. Jalankan Dry Run untuk memastikan daftar file, lalu simpan pekerjaan dan jadwalkan jika Anda menggunakan lisensi PLUS.

Dengan kedua platform terhubung dalam jendela yang sama, menjaga Zoho WorkDrive dan OneDrive tetap sinkron menjadi pekerjaan terjadwal, bukan lagi tugas manual yang berulang.

---

**Panduan Terkait:**

- [Kelola Zoho WorkDrive — Sinkronkan dan Backup File dengan RcloneView](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [Mount Google Drive sebagai Drive Lokal dengan RcloneView](https://rcloneview.com/support/blog/mount-google-drive-as-local-drive-rcloneview)
- [Aturan Filter — Sinkronisasi Selektif di RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)

<CloudSupportGrid />
