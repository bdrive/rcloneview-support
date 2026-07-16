---
slug: manage-digitalocean-spaces-cloud-sync-backup-rcloneview
title: "Kelola DigitalOcean Spaces — Sinkronisasi dan Pencadangan File dengan RcloneView"
authors:
  - tayson
description: "Hubungkan DigitalOcean Spaces ke RcloneView dan kelola penyimpanan objek Anda dengan GUI. Sinkronisasi, cadangkan, dan transfer file antar wilayah tanpa perintah CLI."
keywords:
  - DigitalOcean Spaces RcloneView
  - sinkronisasi DigitalOcean Spaces
  - pencadangan DigitalOcean Spaces
  - GUI penyimpanan objek kompatibel S3
  - manajemen DigitalOcean Spaces
  - rclone DigitalOcean Spaces
  - sinkronisasi penyimpanan objek cloud
  - alat pencadangan DigitalOcean
tags:
  - digitalocean-spaces
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola DigitalOcean Spaces — Sinkronisasi dan Pencadangan File dengan RcloneView

> RcloneView terhubung ke DigitalOcean Spaces melalui API yang kompatibel dengan S3, memberi Anda pengelola file visual untuk bucket penyimpanan objek di wilayah mana pun.

DigitalOcean Spaces adalah layanan penyimpanan objek yang ramah bagi pengembang, dengan model harga rata dan CDN bawaan. Tim yang menjalankan beban kerja di DigitalOcean Droplets sering menyimpan pencadangan, aset statis, dan artefak deployment di Spaces. RcloneView menambahkan lapisan grafis di atas backend rclone yang kompatibel dengan S3, sehingga Anda dapat menjelajahi bucket secara visual, menjalankan sinkronisasi terjadwal, dan membandingkan direktori lokal dengan penyimpanan remote — semuanya tanpa menyentuh CLI.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menyiapkan DigitalOcean Spaces di RcloneView

DigitalOcean Spaces menggunakan API yang kompatibel dengan S3, sehingga Anda mengonfigurasinya sebagai remote S3 di RcloneView. Buka **Remote tab → New Remote → Amazon S3 Compatible**, lalu pilih **DigitalOcean Spaces** sebagai provider. Anda memerlukan:

- **Access Key ID** — dibuat di DigitalOcean Control Panel pada bagian API → Spaces Keys
- **Secret Access Key** — hanya ditampilkan satu kali saat pembuatan
- **Endpoint** — spesifik untuk setiap wilayah, misalnya `nyc3.digitaloceanspaces.com`

Setelah disimpan, bucket Spaces Anda akan langsung muncul di panel Explorer. Anda dapat menjelajahi isi bucket, mengunggah file dengan drag-and-drop dari folder lokal, dan membuka panel berdampingan untuk membandingkan direktori pencadangan Droplet dengan bucket Spaces.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring DigitalOcean Spaces as an S3 remote in RcloneView" class="img-large img-center" />

## Menyinkronkan Server Lokal ke DigitalOcean Spaces

Kasus penggunaan yang umum: tim pengembang menghasilkan artefak build di server CI dan ingin mendorongnya setiap malam ke Spaces untuk penyimpanan jangka panjang. Menggunakan Job Manager RcloneView, buat job Sync dari direktori artefak lokal ke `do-spaces:artifacts-bucket/builds`. Atur jadwal untuk berjalan pukul 3:00 pagi, aktifkan verifikasi checksum, dan tambahkan filter ukuran file maksimum untuk mengecualikan file sementara yang lebih besar dari 500 MB.

Opsi sinkronisasi 1:N memungkinkan Anda mencerminkan direktori artefak yang sama ke DigitalOcean Spaces dan Amazon S3 secara bersamaan — berguna bagi tim yang menjaga redundansi multi-wilayah atau bertransisi antar penyedia penyimpanan.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a DigitalOcean Spaces sync job in real time" class="img-large img-center" />

## Transfer Antar-Wilayah dan Antar-Penyedia

Saat Anda perlu memindahkan data antar wilayah Spaces (misalnya, dari `nyc3` ke `sfo3`) atau bermigrasi ke penyedia lain yang kompatibel dengan S3, RcloneView menanganinya sebagai transfer langsung cloud-ke-cloud. Buka dua panel Explorer — satu mengarah ke bucket Spaces sumber dan satu lagi ke tujuan — lalu gunakan drag-and-drop atau wizard sinkronisasi.

Untuk migrasi berskala besar, atur **Number of file transfers** ke 8–16 pada Langkah 2 di wizard sinkronisasi untuk memaksimalkan throughput. Monitor transfer real-time RcloneView menampilkan progres per file dan kecepatan keseluruhan, sehingga Anda dapat memperkirakan waktu penyelesaian untuk kumpulan data besar.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer between DigitalOcean Spaces and Amazon S3 in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buat access key Spaces di DigitalOcean Control Panel.
3. Buat remote S3 baru di RcloneView dengan kredensial dan endpoint Spaces Anda.
4. Buat job Sync di Job Manager yang menargetkan bucket Spaces Anda dan atur jadwalnya.

DigitalOcean Spaces menjadi target pencadangan terjadwal yang terkelola sepenuhnya — dengan monitoring real-time dan riwayat job dalam satu antarmuka.

---

**Panduan Terkait:**

- [Migrasi Google Drive ke DigitalOcean Spaces dengan RcloneView](https://rcloneview.com/support/blog/migrate-google-drive-to-digitalocean-spaces-rcloneview)
- [Mount DigitalOcean Spaces sebagai Drive Lokal dengan RcloneView](https://rcloneview.com/support/blog/mount-digitalocean-spaces-local-drive-rcloneview)
- [Sentralisasi S3, Wasabi, dan R2 dengan RcloneView](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
