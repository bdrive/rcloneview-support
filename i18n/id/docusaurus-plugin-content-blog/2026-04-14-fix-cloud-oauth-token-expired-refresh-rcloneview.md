---
slug: fix-cloud-oauth-token-expired-refresh-rcloneview
title: "Perbaiki Token OAuth yang Kedaluwarsa untuk Penyimpanan Cloud — Sambungkan Ulang dengan RcloneView"
authors:
  - tayson
description: "Pelajari cara mendiagnosis dan memperbaiki kesalahan token OAuth kedaluwarsa di RcloneView untuk Google Drive, Dropbox, OneDrive, dan penyedia cloud berbasis OAuth lainnya."
keywords:
  - token OAuth kedaluwarsa penyimpanan cloud
  - perbaiki token OAuth rclone kedaluwarsa
  - token Google Drive kedaluwarsa RcloneView
  - kesalahan token otorisasi Dropbox
  - refresh token OneDrive rclone
  - kesalahan autentikasi penyimpanan cloud
  - rclone sambungkan ulang penyedia cloud
  - perbaiki login cloud kedaluwarsa RcloneView
tags:
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Perbaiki Token OAuth yang Kedaluwarsa untuk Penyimpanan Cloud — Sambungkan Ulang dengan RcloneView

> Token OAuth untuk Google Drive, Dropbox, OneDrive, dan penyedia lainnya kedaluwarsa secara berkala. Berikut cara mengenali kesalahan ini di RcloneView dan melakukan autentikasi ulang tanpa kehilangan konfigurasi remote Anda.

Penyedia cloud berbasis OAuth — Google Drive, Dropbox, Microsoft OneDrive, Box, pCloud, Yandex Disk, dan lainnya — memberikan akses melalui token, bukan kata sandi. Token ini memiliki kebijakan kedaluwarsa: sebagian diperbarui secara otomatis selama aplikasi tetap aktif, sementara yang lain kedaluwarsa setelah 90–180 hari tidak aktif atau ketika sistem keamanan penyedia mendeteksi pola akses yang tidak biasa. Ketika sebuah token kedaluwarsa, tugas sinkronisasi RcloneView mulai gagal dengan kesalahan autentikasi yang tampak mengkhawatirkan tetapi mudah diperbaiki.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengenali Kesalahan Token Kedaluwarsa

Kesalahan token OAuth kedaluwarsa muncul di **tab Log** RcloneView dengan pesan seperti:

- Google Drive: `oauth2: cannot fetch token: 401 Unauthorized` atau `Token has been expired or revoked`
- Dropbox: `invalid_grant` atau `Token is expired`
- OneDrive: `AADSTS70008: The refresh token has expired`
- Box: `401 Unauthorized: The access token provided has expired`

Tab Transferring menunjukkan tugas yang langsung gagal pada 0% tanpa ada file yang ditransfer. Remote juga dapat muncul sebagai tidak dapat dijangkau di panel Explorer — menjelajahi remote menghasilkan kesalahan alih-alih daftar folder.

<img src="/support/images/en/blog/new-remote.png" alt="Viewing remote configuration in RcloneView to fix token errors" class="img-large img-center" />

## Melakukan Autentikasi Ulang Melalui Remote Manager

Untuk memperbarui token OAuth yang kedaluwarsa, buka **tab Remote → Remote Manager**, pilih remote yang terpengaruh, lalu klik **Edit**. Pada layar konfigurasi remote, cari bagian token OAuth dan klik tombol autentikasi ulang (atau hapus token yang ada). RcloneView akan membuka halaman otorisasi OAuth milik penyedia di browser Anda.

Masuk dengan kredensial akun cloud Anda, berikan kembali izin akses ke RcloneView (melalui rclone), dan token baru akan tersimpan secara otomatis. Tutup tab browser dan kembali ke RcloneView — remote seharusnya kini dapat tersambung dengan sukses. Uji dengan menjelajahi remote di panel Explorer.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring reconnected cloud remote transfer in RcloneView" class="img-large img-center" />

## Penyedia dengan Kebijakan Token yang Lebih Ketat

**Google Drive** refresh token tetap berlaku tanpa batas waktu selama aplikasi diotorisasi oleh pemilik akun dan aplikasi rclone belum dicabut aksesnya di pengaturan keamanan Google. Jika Anda mencabut akses di Google Account → Third-party apps, Anda perlu melakukan otorisasi ulang dari awal.

**Microsoft OneDrive** token kedaluwarsa setelah 90 hari tidak aktif. Jika Anda belum melakukan sinkronisasi selama tiga bulan, bersiaplah untuk melakukan autentikasi ulang. Token OneDrive for Business juga dapat kedaluwarsa lebih cepat karena kebijakan organisasi yang ditetapkan oleh administrator Azure AD.

**Box** dan **Dropbox** token umumnya berumur panjang tetapi kedaluwarsa jika Anda mengganti kata sandi akun, mengaktifkan autentikasi dua faktor untuk pertama kalinya, atau jika penyedia mendeteksi peristiwa keamanan.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing failed jobs due to token expiry in RcloneView job history" class="img-large img-center" />

## Mencegah Gangguan di Masa Depan

Jadwalkan setidaknya satu tugas sinkronisasi kecil untuk setiap remote OAuth agar berjalan mingguan, meskipun tidak mentransfer apa pun. Penggunaan token yang aktif mencegah kedaluwarsa akibat inaktivitas untuk penyedia seperti OneDrive. Periksa tab Job History secara berkala agar kegagalan tugas dapat segera terdeteksi alih-alih tidak diketahui selama berhari-hari.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Periksa tab Log untuk pesan kesalahan kedaluwarsa OAuth setelah tugas sinkronisasi gagal.
3. Buka Remote Manager, pilih remote yang terpengaruh, lalu klik Edit untuk melakukan autentikasi ulang.
4. Uji koneksi di panel Explorer sebelum menjalankan ulang tugas yang gagal.

Pembaruan token OAuth membutuhkan waktu kurang dari dua menit di RcloneView — setelah autentikasi ulang dilakukan, semua tugas sinkronisasi yang telah dikonfigurasi sebelumnya akan kembali berjalan tanpa perubahan lainnya.

---

**Panduan Terkait:**

- [Perbaiki Kesalahan Kuota dan Batas Laju Google Drive dengan RcloneView](https://rcloneview.com/support/blog/fix-google-drive-quota-rate-limit-api-errors)
- [Mengatasi Kesalahan Rclone dengan RcloneView](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [Notifikasi Peringatan untuk Penyelesaian Sinkronisasi dengan RcloneView](https://rcloneview.com/support/blog/notification-alerts-sync-complete-rcloneview)

<CloudSupportGrid />
