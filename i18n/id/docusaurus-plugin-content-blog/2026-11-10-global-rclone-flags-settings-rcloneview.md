---
slug: global-rclone-flags-settings-rcloneview
title: "Flag Rclone Global — Terapkan Opsi Kustom ke Setiap Job di RcloneView"
authors:
  - alex
description: "Gunakan Global Rclone Flags di RcloneView untuk menerapkan opsi rclone tambahan di mana saja, lengkap dengan penjelasan pengaturan logging, kata sandi konfigurasi, dan path binary."
keywords:
  - flag global rclone
  - pengaturan RcloneView
  - flag rclone GUI
  - pengaturan rclone bawaan
  - no-check-certificate
  - level log rclone
  - kata sandi konfigurasi rclone
  - binary rclone kustom
  - pengaturan lanjutan RcloneView
tags:
  - RcloneView
  - feature
  - tips
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Flag Rclone Global — Terapkan Opsi Kustom ke Setiap Job di RcloneView

> Atur satu flag rclone sekali di Settings dan flag itu berlaku di seluruh RcloneView, tanpa mengulanginya job demi job.

Beberapa lingkungan membutuhkan satu opsi rclone tambahan di mana-mana: sertifikat self-signed pada server pribadi, lokasi log kustom, atau file konfigurasi terenkripsi. Halaman pengaturan Embedded Rclone adalah tempatnya. RcloneView melakukan mount DAN sinkronisasi untuk 90+ provider dari satu jendela, di Windows, macOS, dan Linux, dan pengaturan ini berlaku untuk seluruh engine bawaan tersebut.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Lokasi Pengaturan

Buka tab Settings dan pilih Embedded Rclone. Anda akan menemukan lokasi binary rclone, lokasi rclone.conf, folder unduhan dan unggahan default, sakelar Stop rclone on App Exit, opsi logging, kolom Config Password, dan kotak Global Rclone Flags.

Embedded Rclone secara default mendengarkan di `http://127.0.0.1:5582`, dan RcloneView berkomunikasi dengannya melalui rclone RC API. Mengubah pengaturan ini mengubah cara engine tersebut dimulai, jadi mulai ulang Embedded Rclone setelah mengeditnya.

<img src="/support/images/en/blog/new-remote.png" alt="Pengaturan remote RcloneView yang menggunakan pengaturan rclone bawaan" class="img-large img-center" />

## Menggunakan Global Rclone Flags

Kolom Global Rclone Flags menerima flag rclone tambahan yang berlaku secara luas. Contoh yang didokumentasikan adalah `--no-check-certificate`, berguna saat server berbasis WebDAV atau HTTPS memakai sertifikat self-signed. Gunakan dengan hati-hati: opsi ini menonaktifkan verifikasi sertifikat, jadi simpan untuk server pribadi tepercaya dan bukan endpoint publik.

Untuk menyetel satu job, gunakan Advanced Settings per job (transfer, checker, checksum, retry). Simpan flag global untuk opsi yang memang berlaku di mana-mana.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Pengaturan job di RcloneView yang melengkapi flag global" class="img-large img-center" />

## Logging dan Perlindungan Konfigurasi

Centang Enable rclone Logging, pilih folder dan nama file log, lalu tentukan level: DEBUG, INFO, NOTICE, atau ERROR. DEBUG paling rinci dan merupakan level yang akan diminta tim dukungan saat Anda melaporkan masalah; klik Restart Embedded Rclone, ulangi masalahnya, lalu kirim file log.

Jika rclone.conf Anda terenkripsi, masukkan Config Password di sini agar engine bawaan dapat membaca remote Anda. Anda juga dapat mengarahkan RcloneView ke binary rclone atau path konfigurasi kustom, dan Self Update di dalam aplikasi menjaga rclone bawaan tetap terbaru.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History digunakan bersama log rclone di RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka Settings, lalu Embedded Rclone, dan tinjau path saat ini.
3. Tambahkan flag yang Anda perlukan ke Global Rclone Flags dan aktifkan logging jika ingin ada catatan.
4. Mulai ulang Embedded Rclone dan jalankan job uji kecil.

Beberapa pengaturan global yang dipilih dengan baik menjaga konsistensi setiap job tanpa klik tambahan.

---

**Panduan Terkait:**

- [Log Debug: Mengatasi Masalah Transfer](https://rcloneview.com/support/blog/log-debug-troubleshoot-transfers-rcloneview)
- [Rclone Self Update di RcloneView](https://rcloneview.com/support/blog/rclone-self-update-rcloneview)
- [Memperbaiki Error Sertifikat SSL/TLS](https://rcloneview.com/support/blog/fix-ssl-tls-certificate-errors-cloud-rcloneview)

<CloudSupportGrid />
