---
slug: fix-oauth-token-expired-cloud-sync-rcloneview
title: "Mengatasi Error OAuth Token Expired — Otorisasi Ulang Akun Cloud di RcloneView"
authors:
  - tayson
description: "Pencadangan terjadwal Anda berhenti bekerja karena token OAuth telah kedaluwarsa. Berikut cara mendiagnosis dan memperbaiki token yang kedaluwarsa untuk Google Drive, OneDrive, Dropbox, dan penyedia OAuth lainnya di RcloneView."
keywords:
  - oauth token expired
  - rclone token expired
  - google drive token refresh
  - onedrive oauth expired
  - fix cloud auth error
  - rclone re-authorize
  - cloud sync authentication
  - oauth refresh token
  - fix cloud connection
  - rcloneview re-auth
tags:
  - RcloneView
  - troubleshooting
  - cloud-storage
  - tips
  - security
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mengatasi Error OAuth Token Expired — Otorisasi Ulang Akun Cloud di RcloneView

> Pencadangan malam Anda sudah gagal secara diam-diam selama dua minggu. Errornya: "token expired." Koneksi Google Drive, OneDrive, atau Dropbox Anda hanya perlu diotorisasi ulang — berikut cara memperbaikinya.

Token OAuth menghubungkan RcloneView ke penyedia cloud seperti Google Drive, OneDrive, Dropbox, dan Box. Token ini memiliki kebijakan kedaluwarsa — token Google berlaku tanpa batas waktu tetapi dapat dicabut, token Microsoft kedaluwarsa jika tidak digunakan selama 90 hari, dan perubahan kata sandi atau peristiwa keamanan membuat semua token tidak valid. Saat kedaluwarsa, tugas sinkronisasi gagal secara diam-diam hingga Anda menyadarinya.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Penyebab Umum Kedaluwarsanya Token

| Penyedia | Perilaku Token |
|----------|---------------|
| Google Drive | Refresh token berlaku hingga dicabut (tetapi dapat dicabut oleh pengguna atau admin) |
| OneDrive | 90 hari jika tidak digunakan; perubahan kata sandi membuatnya tidak valid |
| Dropbox | Berlaku hingga dicabut secara eksplisit |
| Box | 60 hari tanpa refresh |

## Gejala

- Tugas terjadwal gagal dengan error "authentication" atau "token"
- Penjelajahan manual menampilkan pesan "unauthorized"
- Riwayat tugas menunjukkan peningkatan kegagalan pada hari-hari terakhir

## Cara Memperbaiki

### Periksa riwayat tugas terlebih dahulu

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Identify auth errors" class="img-large img-center" />

Cari pola — jika semua tugas untuk satu penyedia mulai gagal pada tanggal yang sama, itu adalah masalah token.

### Otorisasi ulang remote

Buka pengelola remote dan otorisasi ulang remote yang terpengaruh. Ini akan memicu alur OAuth baru — masuk ke penyedia dan berikan akses lagi.

<img src="/support/images/en/blog/new-remote.png" alt="Re-authorize remote" class="img-large img-center" />

Konfigurasi tugas yang sudah ada tetap dipertahankan. Hanya token autentikasi yang diperbarui.

### Verifikasi perbaikan

Jalankan sinkronisasi uji coba untuk memastikan koneksi berfungsi:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Test after re-auth" class="img-large img-center" />

## Pencegahan

- **Aktifkan notifikasi** — peringatan Slack/Discord/Telegram memberi tahu Anda segera saat tugas gagal
- **Periksa riwayat tugas setiap minggu** — tangkap kegagalan sebelum menumpuk
- **Hindari perubahan kata sandi** tanpa mengotorisasi ulang remote cloud
- **Gunakan service account** untuk Google Workspace (tidak kedaluwarsa seperti token pengguna)

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Periksa riwayat tugas** untuk kegagalan terkait autentikasi.
3. **Otorisasi ulang** remote yang terpengaruh di pengelola remote.
4. **Siapkan notifikasi** untuk menangkap kegagalan di masa depan sedini mungkin.

Otorisasi ulang selama 2 menit mencegah minggu-minggu pencadangan yang terlewat.

---

**Panduan Terkait:**

- [Mengatasi Error Permission Denied](https://rcloneview.com/support/blog/fix-permission-denied-cloud-sync-errors-rcloneview)
- [Mengatasi Masalah Error Rclone](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [Notifikasi Slack](https://rcloneview.com/support/blog/automate-cloud-sync-slack-notifications-rcloneview)

<CloudSupportGrid />
