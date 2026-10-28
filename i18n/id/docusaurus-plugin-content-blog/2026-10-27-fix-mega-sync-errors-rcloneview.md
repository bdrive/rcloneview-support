---
slug: fix-mega-sync-errors-rcloneview
title: "Perbaiki Error Sinkronisasi Mega — Diagnosis Job yang Gagal dengan RcloneView"
authors:
  - kai
description: "Perbaiki error sinkronisasi Mega dengan RcloneView: periksa kredensial, turunkan konkurensi, gunakan Dry Run dan log Job History, lalu verifikasi ulang dengan Folder Compare."
keywords:
  - perbaiki error sinkronisasi Mega
  - sinkronisasi Mega gagal
  - error login Mega
  - error transfer Mega
  - pemecahan masalah RcloneView
  - Mega rclone GUI
  - riwayat job Mega
  - sinkronisasi Mega tidak berfungsi
  - pemecahan masalah sinkronisasi cloud
  - error pencadangan Mega
tags:
  - RcloneView
  - mega
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Perbaiki Error Sinkronisasi Mega — Diagnosis Job yang Gagal dengan RcloneView

> Telusuri sinkronisasi Mega yang gagal selangkah demi selangkah: kredensial, konkurensi, log, dan perbandingan akhir.

Job sinkronisasi Mega yang error di tengah jalan membuat Anda menebak-nebak: apakah masalahnya login, jumlah transfer paralel, atau beberapa file bermasalah? RcloneView menampilkan pengaturan job, riwayat, dan log dalam satu jendela, sehingga Anda dapat mempersempit penyebabnya alih-alih menjalankan ulang secara membabi buta.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mulai dari Remote dan Kredensial

Mega terhubung dengan email dan kata sandi. Jika job tiba-tiba gagal di langkah pertama, buka **Remote Manager**, periksa remote Mega, dan masukkan ulang kredensial jika kata sandi berubah. Lalu telusuri remote di panel Explorer: jika daftar folder termuat, login sudah benar dan masalahnya ada pada job itu sendiri.

<img src="/support/images/en/blog/new-remote.png" alt="Memeriksa remote Mega di RcloneView" class="img-large img-center" />

Anda juga dapat menguji dari tab Terminal bawaan dengan `rclone about "mymega:"`, yang memastikan akun merespons sebelum Anda mengubah pengaturan job apa pun.

## Turunkan Konkurensi pada Job

Beban paralel yang tinggi sering menjadi tersangka ketika sebuah backend mulai error. Edit job dan buka Langkah 2, Advanced Settings. Turunkan **Number of file transfers** dan atur **Number of equality checkers** menjadi 4 atau kurang untuk backend yang lambat. Biarkan **Retry entire sync if fails** pada nilai default 3 agar kegagalan sementara mendapat kesempatan lagi.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Mengedit pengaturan lanjutan job di RcloneView" class="img-large img-center" />

## Baca Job History dan Log

Buka **Job History** dan lihat status, waktu yang dihabiskan, dan jumlah file dari proses yang gagal. Lalu periksa tab Log di bagian bawah untuk melihat pesan berstempel waktu di sekitar kegagalan. Untuk mendapatkan detail lebih banyak, aktifkan rclone Logging di Settings, atur level log ke DEBUG, mulai ulang rclone bawaan, dan ulangi masalahnya.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History yang menampilkan sinkronisasi Mega yang gagal" class="img-large img-center" />

## Pratinjau dan Verifikasi Perbaikan

Jalankan **Dry Run** untuk melihat apa yang akan disalin atau dihapus oleh job saat ini, yang sangat berguna setelah kegagalan sebagian. Setelah job sebenarnya selesai, gunakan **Compare** antara sumber dan Mega, saring file yang hanya ada di sisi kiri, lalu salin apa pun yang masih belum ada.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Membandingkan folder sumber dan Mega setelah perbaikan" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Periksa kembali remote Mega dan pastikan daftar folder termuat.
3. Turunkan jumlah transfer file dan checker, lalu jalankan ulang dengan **Dry Run** terlebih dahulu.
4. Tinjau **Job History** dan log, lalu akhiri dengan **Compare**.

Pemeriksaan yang metodis mengubah "sinkronisasi gagal" yang samar menjadi penyebab yang spesifik dan dapat diperbaiki.

---

**Panduan Terkait:**

- [Perbaiki Error Koneksi dan Kuota Mega](https://rcloneview.com/support/blog/fix-mega-connection-quota-errors-rcloneview)
- [Kelola Sinkronisasi dan Pencadangan Cloud Mega](https://rcloneview.com/support/blog/manage-mega-cloud-sync-backup-rcloneview)
- [Perbaiki Error Sinkronisasi pCloud](https://rcloneview.com/support/blog/fix-pcloud-sync-errors-rcloneview)

<CloudSupportGrid />
