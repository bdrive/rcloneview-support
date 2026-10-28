---
slug: fix-mailru-cloud-sync-errors-rcloneview
title: "Atasi Error Sinkronisasi Mail.ru Cloud — Panduan Pemecahan Masalah dengan RcloneView"
authors:
  - casey
description: "Atasi kegagalan sinkronisasi Mail.ru Cloud yang umum di RcloneView: error autentikasi, timeout, file yang terlewat, dan ketidakcocokan, dengan solusi praktis."
keywords:
  - atasi error sinkronisasi mail.ru cloud
  - mailru cloud sinkronisasi gagal
  - mail.ru cloud rcloneview
  - error autentikasi mailru
  - timeout mailru
  - pemecahan masalah mail.ru cloud
  - error sinkronisasi cloud
  - pemecahan masalah rcloneview
  - error pencadangan mailru
tags:
  - RcloneView
  - mailru
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Atasi Error Sinkronisasi Mail.ru Cloud — Panduan Pemecahan Masalah dengan RcloneView

> Sebagian besar kegagalan sinkronisasi Mail.ru Cloud di RcloneView berasal dari kredensial, konkurensi, atau filter — masing-masing dapat diperbaiki dengan beberapa klik.

Ketika job Mail.ru Cloud macet atau melaporkan error, penyebabnya jarang misterius. RcloneView mencatat setiap eksekusi di Job History dan tab Log, sehingga Anda dapat mencocokkan pesan dengan penyebab yang sudah dikenal. Panduan ini membahas masalah yang paling sering muncul dan pengaturan yang menyelesaikannya.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Kegagalan Autentikasi dan Koneksi

Jika job yang minggu lalu masih berjalan kini langsung gagal, kredensial yang tersimpan adalah tersangka pertama. Buka Remote Manager, pilih remote Mail.ru Cloud, lalu edit untuk memasukkan ulang detail akun; jika akun mengaktifkan keamanan tambahan, pastikan kredensial yang Anda masukkan adalah yang diterima layanan untuk akses pihak ketiga. Setelah menyimpan, telusuri remote di panel Explorer. Jika daftar folder termuat, koneksi sehat dan masalahnya ada pada job itu sendiri.

<img src="/support/images/en/blog/new-remote.png" alt="Membuat ulang remote Mail.ru Cloud di RcloneView" class="img-large img-center" />

## Timeout dan Transfer yang Macet

Transfer yang lambat atau terputus biasanya berarti konkurensi terlalu tinggi untuk koneksi. Di Advanced Settings job, turunkan Number of file transfers dan atur Number of equality checkers menjadi 4 atau kurang, karena backend yang lebih lambat menangani lebih sedikit pemeriksaan paralel dengan lebih baik. Naikkan "Retry entire sync if fails" di atas nilai default 3 untuk job yang panjang agar gangguan jaringan sesaat pulih secara otomatis. Pantau tab Transferring untuk memastikan kecepatan menjadi stabil.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Memantau transfer Mail.ru Cloud di tab Transferring" class="img-large img-center" />

## File yang Hilang atau Tidak Cocok

Jika file terlihat berbeda setelah sinkronisasi selesai, jalankan Compare antara sumber dan remote Mail.ru Cloud. Tampilkan file left-only untuk menemukan yang tidak pernah sampai, dan salin langsung dari tampilan perbandingan. Untuk ketidakcocokan isi, aktifkan opsi checksum di Langkah 2 wizard Sync agar file dibandingkan berdasarkan hash dan ukuran, bukan hanya cap waktu.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Membandingkan folder untuk menemukan file yang hilang di Mail.ru Cloud" class="img-large img-center" />

## Filter, Dry Run, dan Job History

Sebuah job juga bisa melewati file secara sengaja. Tinjau Filtering Settings di Langkah 3 untuk ukuran file maksimum, usia file maksimum, atau aturan pengecualian khusus yang mungkin Anda lupakan. Lalu jalankan Dry Run untuk melihat dengan tepat file mana yang akan disalin atau dihapus sebelum menyentuh data asli. Setelah itu, buka Job History untuk membandingkan status, ukuran, dan jumlah file dengan eksekusi sukses sebelumnya. RcloneView dapat me-mount dan menyinkronkan lebih dari 90 penyedia dari satu jendela, sehingga Anda juga dapat me-mount remote Mail.ru Cloud untuk memeriksa isinya seperti drive lokal.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Memeriksa riwayat job Mail.ru Cloud di RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka Job History dan baca entri tab Log untuk job Mail.ru Cloud yang gagal.
3. Terapkan perbaikan yang sesuai di atas: kredensial, konkurensi, checksum, atau filter.
4. Jalankan Dry Run, lalu jalankan ulang job dan konfirmasi dengan Compare.

Pemeriksaan yang metodis mengalahkan tebak-tebakan — perbaiki penyebabnya sekali, dan job Mail.ru Cloud Anda berjalan mulus kembali.

---

**Panduan Terkait:**

- [Kelola Mail.ru Cloud — Sinkronisasi dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-mailru-cloud-sync-rcloneview)
- [Migrasikan Mail.ru Cloud ke Backblaze B2 — Transfer File dengan RcloneView](https://rcloneview.com/support/blog/migrate-mailru-cloud-to-backblaze-b2-rcloneview)
- [Atasi Error Pembatasan Rate API Cloud dengan RcloneView](https://rcloneview.com/support/blog/fix-cloud-api-rate-limiting-errors-rcloneview)

<CloudSupportGrid />
