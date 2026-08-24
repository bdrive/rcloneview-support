---
slug: migrate-backblaze-b2-to-digitalocean-spaces-rcloneview
title: "Migrasi Backblaze B2 ke DigitalOcean Spaces — Transfer File dengan RcloneView"
authors:
  - kai
description: "Migrasikan file dari Backblaze B2 ke DigitalOcean Spaces dengan RcloneView menggunakan transfer terverifikasi checksum, filter, dan pratinjau Dry Run."
keywords:
  - migrasi Backblaze B2 ke DigitalOcean Spaces
  - transfer Backblaze ke DigitalOcean
  - migrasi penyimpanan objek RcloneView
  - migrasi B2 ke Spaces
  - migrasi cloud yang kompatibel dengan S3
  - pengaturan DigitalOcean Spaces
  - Backblaze B2 ke Spaces
  - beralih penyedia penyimpanan cloud
tags:
  - RcloneView
  - backblaze-b2
  - digitalocean-spaces
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Backblaze B2 ke DigitalOcean Spaces — Transfer File dengan RcloneView

> Memindahkan penyimpanan objek antara dua penyedia yang kompatibel dengan S3 tidak memerlukan penulisan skrip perintah rclone secara manual — RcloneView menangani transfer, verifikasi, dan pemfilteran melalui GUI-nya.

Tim yang beralih dari Backblaze B2 ke DigitalOcean Spaces biasanya melakukannya untuk mengonsolidasikan infrastruktur ke satu penyedia bersama Droplet atau layanan App Platform yang sudah ada. Karena keduanya merupakan remote yang kompatibel dengan S3, RcloneView dapat terhubung ke masing-masing hanya dengan Access Key, Secret Key, dan endpoint, lalu mentransfer data langsung di antara keduanya tanpa melalui disk lokal terlebih dahulu. Untuk bucket yang berisi ratusan gigabyte cadangan aplikasi atau aset media, jalur cloud-ke-cloud langsung tersebut menghemat banyak waktu dibandingkan alur kerja unduh-lalu-unggah.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menyiapkan Kedua Remote

Tambahkan remote Backblaze B2 Anda menggunakan Application Key ID dan Application Key dari dashboard B2, lalu tambahkan remote terpisah untuk DigitalOcean Spaces dengan Access Key, Secret Key, dan endpoint regionalnya sendiri (misalnya `nyc3.digitaloceanspaces.com`). Keduanya akan muncul sebagai tab di panel Explorer RcloneView, sehingga Anda dapat menelusuri bucket sumber dan Space tujuan secara berdampingan sebelum memulai transfer apa pun.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Backblaze B2 and DigitalOcean Spaces remotes in RcloneView" class="img-large img-center" />

Gunakan tata letak panel terbagi untuk melihat kedua bucket sekaligus, memastikan struktur folder dan konvensi penamaan sesuai dengan yang diharapkan aplikasi Anda sebelum melakukan migrasi penuh.

## Menjalankan Transfer Terverifikasi Checksum

Konfigurasikan migrasi sebagai pekerjaan Copy atau Sync dengan perbandingan checksum diaktifkan pada Step 2 wizard — ini membandingkan file berdasarkan hash dan ukuran, bukan hanya stempel waktu, yang penting ketika berpindah antara dua backend penyimpanan yang mungkin melaporkan waktu modifikasi secara berbeda. Atur jumlah transfer file dan transfer multi-thread berdasarkan bandwidth Anda; empat transfer bersamaan adalah titik awal yang wajar untuk bucket besar.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a checksum-verified transfer from Backblaze B2 to DigitalOcean Spaces" class="img-large img-center" />

Sebelum menjalankan migrasi penuh, gunakan Dry Run untuk melihat pratinjau secara tepat file mana saja yang akan disalin — ini membantu menemukan konflik penamaan atau jumlah file yang tidak terduga sebelum ada data yang berpindah. S3, Azure, dan Backblaze B2 dapat dihubungkan dengan akses baca/tulis penuh pada lisensi FREE, sehingga tidak ada batasan tingkatan yang menghalangi jalur migrasi ini.

## Menjadwalkan Peralihan

Untuk migrasi bertahap, jalankan sinkronisasi penuh awal yang diikuti dengan sinkronisasi inkremental terjadwal (lisensi PLUS) yang menangkap file apa pun yang ditambahkan ke Backblaze B2 sebelum peralihan akhir. Ini menjaga kedua bucket tetap sinkron selama periode transisi, alih-alih memerlukan satu transfer besar yang berisiko.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling incremental sync jobs during a Backblaze B2 to DigitalOcean Spaces migration" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan remote untuk bucket Backblaze B2 dan tujuan DigitalOcean Spaces Anda.
3. Jalankan Dry Run untuk melihat pratinjau transfer sebelum menyalin file apa pun.
4. Jalankan pekerjaan Copy atau Sync dengan verifikasi checksum diaktifkan, lalu pastikan jumlah file cocok di kedua sisi.

Migrasi cloud-ke-cloud langsung yang telah diverifikasi berarti data Anda tiba di DigitalOcean Spaces dalam keadaan utuh, tanpa melalui mesin lokal sama sekali.

---

**Panduan Terkait:**

- [Mengelola Penyimpanan Backblaze B2 — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Migrasi Backblaze B2 ke AWS S3 — Transfer File dengan RcloneView](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-aws-s3-rcloneview)
- [Migrasi Google Drive ke DigitalOcean Spaces dengan RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-digitalocean-spaces-rcloneview)

<CloudSupportGrid />
