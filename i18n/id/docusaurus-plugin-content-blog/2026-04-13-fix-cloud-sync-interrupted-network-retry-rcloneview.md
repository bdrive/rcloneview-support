---
slug: fix-cloud-sync-interrupted-network-retry-rcloneview
title: "Mengatasi Sinkronisasi Cloud yang Terputus karena Error Jaringan — Coba Ulang dan Lanjutkan dengan RcloneView"
authors:
  - tayson
description: "Pelajari cara memulihkan job sinkronisasi cloud yang terputus akibat koneksi jaringan terputus di RcloneView. Gunakan pengaturan retry, jalankan ulang dari Job History, dan Dry Run untuk memverifikasi status setelah gangguan."
keywords:
  - cloud sync interrupted network RcloneView
  - resume interrupted sync rclone
  - fix network error cloud sync
  - retry cloud sync RcloneView
  - cloud backup network drop fix
  - interrupted transfer recovery
  - rclone network retry settings
  - RcloneView sync resume
tags:
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mengatasi Sinkronisasi Cloud yang Terputus karena Error Jaringan — Coba Ulang dan Lanjutkan dengan RcloneView

> Koneksi jaringan yang terputus saat sinkronisasi cloud memang menjengkelkan, tapi bukan bencana — mekanisme retry RcloneView dan kemampuan menjalankan ulang job dari Job History akan mengembalikan transfer Anda ke jalurnya.

Gangguan jaringan di tengah sinkronisasi adalah hal yang nyata terjadi, terutama untuk transfer yang berlangsung lama melalui koneksi rumah, VPN, atau koneksi berkuota. Saat konektivitas terputus di tengah job sinkronisasi yang sedang berjalan, file yang sudah ditransfer tetap aman — tetapi Anda perlu tahu apa yang sudah selesai, apa yang gagal, dan bagaimana melanjutkan dengan benar. RcloneView menyediakan konfigurasi retry, menjalankan ulang job dari riwayat, dan verifikasi Dry Run untuk menangani skenario ini dengan rapi.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Apa yang Terjadi Saat Jaringan Terputus

Ketika konektivitas jaringan hilang selama job sinkronisasi berlangsung, rclone (mesin di balik RcloneView) akan mencoba mengulang operasi yang gagal sesuai dengan konfigurasi retry pada job tersebut. Jika jaringan tidak pulih dalam jendela waktu retry, job akan dilaporkan gagal. File yang berhasil ditransfer sebelum gangguan terjadi tetap berada di tujuan — file tersebut tidak akan rusak, tetapi juga tidak akan ditransfer ulang secara tidak perlu pada proses berikutnya.

Yang perlu dipahami adalah bahwa job sinkronisasi RcloneView bersifat idempoten: menjalankan ulang job sinkronisasi akan membandingkan sumber dan tujuan lalu hanya mentransfer yang hilang atau berubah.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing an interrupted sync in RcloneView" class="img-large img-center" />

## Mengonfigurasi Perilaku Retry

Di RcloneView, buka job sinkronisasi Anda dan navigasikan ke langkah 2 (opsi transfer). Cari pengaturan retry:

- **Retry entire sync if fails**: aktifkan opsi ini agar seluruh sinkronisasi dijalankan ulang secara otomatis jika ada transfer yang gagal. Nilai default adalah 3 kali percobaan ulang.
- **Low level retries**: mengatur berapa kali transfer file individual dicoba ulang sebelum ditandai gagal (default: 10)
- **Retry on failure**: memastikan error sementara (termasuk timeout jaringan) memicu percobaan ulang otomatis dengan backoff

Untuk job sinkronisasi melalui koneksi yang tidak stabil, mengatur **Retry entire sync** ke 5 dan mempertahankan **Low level retries** di 10 memberikan ketahanan yang signifikan.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring retry settings in RcloneView job options" class="img-large img-center" />

## Melanjutkan dari Job History

Jika job gagal meskipun sudah dicoba ulang, buka **Job History** dan cari proses yang gagal. Entri riwayat menunjukkan berapa banyak file yang berhasil ditransfer dan berapa yang gagal. Klik **Re-run** — RcloneView akan menjalankan job yang sama lagi dengan pengaturan yang sama. Karena sinkronisasi membandingkan status sumber dan tujuan, file yang sudah ditransfer akan dilewati dan hanya file yang tersisa atau gagal yang akan diproses.

Ini jauh lebih cepat dibandingkan memulai dari awal dan menghindari pengunggahan ulang data yang sudah sampai dengan aman di tujuan.

## Menggunakan Dry Run untuk Memverifikasi Status

Setelah gangguan jaringan, Anda mungkin tidak yakin dengan status sinkronisasi saat ini — terutama jika kegagalan terjadi di tengah transfer file besar. Aktifkan **Dry Run** pada job dan jalankan ulang. Dry Run menunjukkan apa yang akan ditransfer pada eksekusi berikutnya tanpa benar-benar memindahkan apa pun. Ini memberi Anda gambaran jelas tentang berapa banyak file yang tersisa sebelum menjalankan sinkronisasi yang sesungguhnya.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Using Dry Run to verify sync state after network interruption" class="img-large img-center" />

## Menangani Gangguan pada File Besar

Untuk transfer file individual yang sangat besar (multi-GB), gangguan jaringan di tengah proses berarti file tersebut akan ditransfer ulang sepenuhnya pada proses berikutnya (kecuali penyedia cloud mendukung unggahan yang dapat dilanjutkan dan mode transfer chunked dari rclone). Untuk meminimalkan overhead transfer ulang pada file besar, aktifkan **chunked uploads** di pengaturan lanjutan job jika didukung (penyedia yang kompatibel dengan S3, Google Drive). Ini memungkinkan unggahan parsial dilanjutkan dari chunk terakhir yang selesai.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka pengaturan job sinkronisasi Anda dan aktifkan **Retry entire sync if fails** dengan 3–5 kali percobaan ulang.
3. Setelah job terputus karena jaringan, buka **Job History** dan gunakan **Re-run** untuk melanjutkan.
4. Gunakan **Dry Run** untuk memverifikasi cakupan transfer yang tersisa sebelum menjalankan ulang yang final.

Dengan konfigurasi retry yang tepat dan menjalankan ulang job dari Job History, gangguan jaringan hanya menjadi ketidaknyamanan kecil, bukan kegagalan sinkronisasi.

---

**Panduan Terkait:**

- [Memulihkan Transfer yang Terputus dan Gagal dengan RcloneView](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)
- [Pemantauan Job History dan Log Transfer](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)
- [Mengatasi Error rclone dengan RcloneView](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />
