---
slug: fix-onedrive-sync-errors-rcloneview
title: "Perbaiki Error Sinkronisasi OneDrive — Cara Mengatasinya dengan RcloneView"
authors:
  - tayson
description: "Diagnosis dan perbaiki error sinkronisasi Microsoft OneDrive yang umum terjadi di RcloneView — mulai dari token OAuth yang kedaluwarsa dan batas limit rate hingga transfer yang macet dan ketidakcocokan checksum."
keywords:
  - onedrive sync errors rcloneview
  - fix onedrive sync issues
  - onedrive rate limit error rclone
  - onedrive authentication expired rcloneview
  - microsoft onedrive transfer stalled
  - fix onedrive connection rcloneview
  - onedrive backup errors troubleshoot
  - cloud sync troubleshooting guide
  - onedrive rclone gui fix
  - resolve onedrive sync failures
tags:
  - RcloneView
  - onedrive
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Perbaiki Error Sinkronisasi OneDrive — Cara Mengatasinya dengan RcloneView

> Error sinkronisasi OneDrive di RcloneView biasanya berasal dari salah satu dari tiga penyebab — token OAuth yang kedaluwarsa, batas limit rate API, atau pengaturan transfer yang tidak tepat — dan masing-masing memiliki solusi yang jelas di dalam aplikasi.

Microsoft OneDrive adalah salah satu platform cloud bisnis yang paling banyak digunakan, tetapi perilaku API-nya terkadang dapat menghasilkan error sinkronisasi yang membuat transfer macet, tidak lengkap, atau gagal tanpa peringatan. RcloneView memberi Anda lingkungan terstruktur untuk mendiagnosis masalah ini melalui log dengan stempel waktu, pemantauan transfer real-time, dan kontrol job yang terperinci — tanpa perlu menggunakan command line.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Baca Tab Log Terlebih Dahulu

Sebelum mengubah pengaturan apa pun, buka tab **Log** di Info View pada bagian bawah RcloneView. Setiap operasi transfer dan sinkronisasi mencatat entri dengan stempel waktu di sini, termasuk kode error yang dikembalikan oleh API OneDrive. Pesan `AccessDenied` atau `InvalidAuthenticationToken` menunjukkan token OAuth yang kedaluwarsa; pesan `429 Too Many Requests` menandakan batas limit rate; dan error `EOF` atau error koneksi biasanya menandakan gangguan jaringan, bukan masalah spesifik OneDrive.

Mengidentifikasi kategori error yang tepat sebelum melakukan perubahan akan menghemat waktu — solusi untuk masalah token sama sekali berbeda dari solusi untuk batas limit rate.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history and log tab in RcloneView for diagnosing OneDrive sync errors" class="img-large img-center" />

## Autentikasi Ulang Saat Token OAuth Kedaluwarsa

Koneksi OneDrive di RcloneView menggunakan autentikasi browser OAuth. Access token akan diperbarui secara otomatis selama sesi aktif, tetapi jika sebuah remote tidak digunakan dalam waktu lama, token dapat sepenuhnya kedaluwarsa — menyebabkan semua job sinkronisasi yang menargetkan akun OneDrive tersebut gagal dengan error autentikasi.

Solusinya sederhana: buka tab **Remote** > **Remote Manager**, cari remote OneDrive, lalu klik **Edit**. RcloneView akan membuka jendela browser agar Anda dapat masuk kembali dan menerbitkan token baru. Setelah disimpan, jalankan kembali job yang gagal. Tidak diperlukan perubahan konfigurasi job — hanya pembaruan kredensial.

<img src="/support/images/en/blog/new-remote.png" alt="Editing a OneDrive remote in RcloneView Remote Manager to refresh OAuth token" class="img-large img-center" />

## Kurangi Transfer Bersamaan untuk Error Batas Limit Rate

OneDrive menerapkan batas limit rate API per pengguna, dan job yang dikonfigurasi dengan jumlah transfer file bersamaan yang tinggi dapat memicu respons `429` — menyebabkan kegagalan sebagian atau percobaan ulang yang secara signifikan memperlambat job secara keseluruhan. Jumlah percobaan ulang default (3 kali) sering kali menutupi masalah batas limit rate, sehingga terlihat seperti error yang terjadi sesekali.

Buka job di **Job Manager** dan klik **Edit**. Pada Langkah 2 (Advanced Settings), turunkan **Number of file transfers** dari nilai default menjadi 2 atau 4. Jika job menggunakan jumlah equality checker yang tinggi, kurangi juga nilai tersebut — rekomendasi resmi adalah 4 atau kurang untuk backend yang merespons lambat terhadap permintaan metadata. Simpan job, lalu jalankan kembali.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Editing OneDrive job settings to reduce concurrent transfers in RcloneView" class="img-large img-center" />

## Gunakan Dry Run Sebelum Menjalankan Ulang Job yang Gagal

Sinkronisasi yang tidak lengkap dapat membuat folder tujuan berada dalam keadaan yang tidak konsisten — sebagian file berhasil ditransfer, sebagian tidak. Sebelum menjalankan ulang job yang gagal, gunakan mode **dry run** untuk melihat pratinjau file mana saja yang akan disalin atau dihapus. Dry run tidak membuat perubahan apa pun; mode ini menghasilkan daftar lengkap operasi yang direncanakan sehingga Anda dapat memastikan job akan selesai dengan bersih dari titik terakhir.

Di Job Manager, pilih job dan pilih **Dry Run** dari opsi eksekusi. Periksa daftar file dengan saksama, terutama jika folder sumber berubah saat job sebelumnya sedang berjalan.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Dry run preview of OneDrive sync job in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka tab **Log** setelah job gagal untuk mengidentifikasi kategori error spesifik sebelum melakukan perubahan.
3. Untuk error autentikasi, edit remote OneDrive di Remote Manager dan autentikasi ulang melalui browser.
4. Untuk error batas limit rate, kurangi transfer file bersamaan menjadi 2–4 di Advanced Settings Langkah 2 pada job, lalu jalankan kembali dengan pratinjau dry run terlebih dahulu.

Sebagian besar error sinkronisasi OneDrive dapat diselesaikan dalam hitungan menit setelah Anda mencocokkan solusi dengan akar masalahnya — riwayat job dan output log RcloneView memberi Anda semua yang dibutuhkan untuk mencapainya dengan cepat.

---

**Panduan Terkait:**

- [Perbaiki Progres Transfer Cloud yang Macet — Cara Mengatasinya dengan RcloneView](https://rcloneview.com/support/blog/fix-cloud-transfer-stalled-progress-rcloneview)
- [Migrasi OneDrive ke Amazon S3 — Transfer File dengan RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-amazon-s3-rcloneview)
- [Sinkronisasi Backblaze B2 ke OneDrive — Pencadangan Cloud dengan RcloneView](https://rcloneview.com/support/blog/sync-backblaze-b2-to-onedrive-rcloneview)

<CloudSupportGrid />
