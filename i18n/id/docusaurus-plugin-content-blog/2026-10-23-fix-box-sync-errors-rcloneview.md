---
slug: fix-box-sync-errors-rcloneview
title: "Memperbaiki Error Sinkronisasi Box — Cara Mengatasinya dengan RcloneView"
authors:
  - kai
description: "Perbaiki error sinkronisasi Box dengan RcloneView: atasi masalah OAuth, Box for Business, batas laju (rate limit), dan nama file menggunakan Dry Run, log, dan riwayat job."
keywords:
  - memperbaiki error sinkronisasi box
  - sinkronisasi box tidak berfungsi
  - error rate limit box
  - token oauth box kedaluwarsa
  - box for business rclone
  - RcloneView box
  - pemecahan masalah box
  - transfer box gagal
tags:
  - RcloneView
  - box
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Memperbaiki Error Sinkronisasi Box — Cara Mengatasinya dengan RcloneView

> Daftar periksa praktis untuk mendiagnosis transfer Box yang gagal menggunakan alat yang sudah tersedia di RcloneView.

Job sinkronisasi Box biasanya gagal karena beberapa alasan yang berulang: login yang kedaluwarsa, jenis akun yang salah, panggilan API yang dibatasi, atau file yang ditangani Box secara berbeda dari dokumen biasa. RcloneView menyediakan riwayat job, log, dan terminal bawaan untuk membedakan penyebab-penyebab ini dengan cepat. Selain itu, RcloneView dapat me-mount dan menyinkronkan 90+ penyedia dari satu jendela, di Windows, macOS, dan Linux, sehingga Anda juga dapat menguji file yang sama pada remote lain.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mulai dari Riwayat Job dan Tab Log

Buka Riwayat Job (Job History) dan lihat status eksekusi yang gagal: Completed, Errored, atau Canceled, beserta ukuran dan jumlah file yang ditransfer. Transfer parsial menunjukkan masalah pada file tertentu. Job yang langsung gagal biasanya menunjukkan masalah autentikasi atau konfigurasi.

Untuk detail, beralihlah ke tab Log di bagian bawah. Untuk menangkap lebih banyak informasi, aktifkan logging rclone di pengaturan Embedded Rclone, atur level ke DEBUG, mulai ulang rclone bawaan, lalu reproduksi kegagalannya.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Meninjau riwayat job yang gagal di RcloneView" class="img-large img-center" />

## Autentikasi Ulang dan Periksa Jenis Akun

Jika semua permintaan gagal, token OAuth mungkin telah kedaluwarsa atau dicabut. Buka Remote Manager, edit remote Box, lalu masuk kembali melalui browser.

Jika Anda bisa login tetapi folder tidak muncul atau terjadi error izin, periksa jenis akun. Box for Business memerlukan `box_sub_type = enterprise` pada remote. Konfigurasi akun pribadi yang dipakai pada akun bisnis merupakan penyebab umum hasil yang membingungkan.

<img src="/support/images/en/blog/new-remote.png" alt="Mengedit konfigurasi remote Box di RcloneView" class="img-large img-center" />

## Menangani Pembatasan dan Job Besar

Ketika ribuan file kecil diproses sekaligus, Box dapat membatasi permintaan. Di Advanced Settings pada job, kurangi jumlah transfer file dan jumlah equality checker (disarankan 4 atau kurang untuk backend yang lambat). Biarkan percobaan ulang pada nilai default 3 agar kegagalan sementara dapat pulih secara otomatis.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Memantau transfer di tab Transferring" class="img-large img-center" />

## Menyaring File Bermasalah

Item yang hanya tersedia secara online seperti Box Notes bukanlah file biasa. Filter Box Docs bawaan pada langkah Filtering akan mengecualikannya sehingga tidak lagi menggagalkan job. Anda juga dapat menambahkan aturan kustom, menetapkan ukuran file maksimum, atau mengecualikan folder bermasalah selama Anda menyelidiki. Jalankan Dry Run setelahnya untuk memastikan apa yang akan disalin.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Membandingkan folder untuk menemukan file yang gagal disinkronkan" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Periksa Riwayat Job dan tab Log untuk melihat error yang tepat.
3. Autentikasi ulang remote Box dan pastikan pengaturan Box for Business jika berlaku.
4. Kurangi konkurensi, terapkan filter Box Docs, lalu jalankan Dry Run dan jalankan ulang.

Sebagian besar kegagalan Box adalah masalah konfigurasi yang akan terlihat setelah beberapa menit memeriksa log.

---

**Panduan Terkait:**

- [Memperbaiki Error Upload Box](https://rcloneview.com/support/blog/fix-box-upload-errors-rcloneview)
- [Memperbaiki Token OAuth Kedaluwarsa pada Sinkronisasi Cloud](https://rcloneview.com/support/blog/fix-oauth-token-expired-cloud-sync-rcloneview)
- [Memperbaiki Error Pembatasan Laju API Cloud](https://rcloneview.com/support/blog/fix-cloud-api-rate-limiting-errors-rcloneview)

<CloudSupportGrid />
