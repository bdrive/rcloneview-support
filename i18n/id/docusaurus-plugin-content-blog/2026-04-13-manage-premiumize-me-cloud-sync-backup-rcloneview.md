---
slug: manage-premiumize-me-cloud-sync-backup-rcloneview
title: "Kelola Penyimpanan Premiumize.me — Sinkronisasi dan Pencadangan File dengan RcloneView"
authors:
  - tayson
description: "Hubungkan Premiumize.me ke RcloneView menggunakan login browser OAuth dan sinkronkan file yang tersimpan ke penyedia cloud lain untuk pencadangan dan pengelolaan jangka panjang."
keywords:
  - premiumize.me RcloneView
  - sinkronisasi cloud premiumize
  - pencadangan premiumize
  - kelola file premiumize
  - premiumize rclone GUI
  - penyimpanan media premiumize
  - transfer cloud premiumize
  - manajemen file premiumize
tags:
  - media
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Penyimpanan Premiumize.me — Sinkronisasi dan Pencadangan File dengan RcloneView

> Premiumize.me menggabungkan hosting file premium dengan penyimpanan cloud pribadi — RcloneView memungkinkan Anda mengelola dan mencadangkan konten tersebut melalui GUI yang bersih.

Premiumize.me paling dikenal sebagai generator tautan premium dan layanan unduhan cloud, tetapi juga menyediakan penyimpanan cloud pribadi tempat konten yang Anda ambil disimpan. Jika Anda menggunakannya untuk menyimpan media, unduhan, atau file proyek, pada akhirnya Anda memerlukan cara untuk memindahkan file tersebut — ke cloud lain untuk pengarsipan, atau ke penyimpanan lokal untuk akses offline. RcloneView terhubung ke Premiumize.me melalui login browser OAuth, sehingga pengaturan hanya memakan waktu kurang dari satu menit.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Premiumize.me melalui OAuth

Jalankan RcloneView dan buka **Remote Manager**. Klik **New Remote** dan cari **Premiumize** dalam daftar penyedia. Saat Anda memilihnya, RcloneView membuka browser default Anda dan mengarahkan Anda ke halaman otorisasi OAuth Premiumize.me. Masuk dan berikan akses — RcloneView menyimpan token secara lokal, sehingga Anda tidak perlu mengotorisasi ulang kecuali Anda mencabut akses.

Setelah otorisasi, remote akan muncul dalam daftar Remote Manager Anda. Klik dua kali untuk membukanya di File Explorer. Struktur file Premiumize.me Anda akan dimuat dengan semua folder dan file yang telah Anda kumpulkan melalui layanan ini.

<img src="/support/images/en/blog/new-remote.png" alt="Creating a Premiumize.me remote in RcloneView" class="img-large img-center" />

## Menjelajahi Pustaka Premiumize.me Anda

File Explorer di RcloneView menyediakan tata letak dua panel yang familier. Navigasikan penyimpanan Premiumize.me Anda di satu sisi dan remote lain yang telah dikonfigurasi — Google Drive, Backblaze B2, atau folder lokal — di sisi lainnya. Anda dapat memilih beberapa file, klik kanan untuk menyalin atau memindahkan, dan melacak progres di panel transfer.

Untuk pustaka yang banyak berisi media, mode **Thumbnail View** menampilkan pratinjau gambar dalam bentuk grid, yang berguna saat penyimpanan Premiumize.me Anda berisi foto atau thumbnail video yang ingin Anda identifikasi secara visual sebelum melakukan transfer.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Browsing and transferring Premiumize.me files in RcloneView" class="img-large img-center" />

## Menyinkronkan Premiumize.me ke Cloud Lain

Penjelajahan file secara manual cukup untuk pemindahan sesekali, tetapi untuk pencadangan rutin, sistem **Job** adalah alat yang tepat. Buka **Jobs**, klik **New Job**, dan atur Premiumize.me sebagai sumber. Pilih remote tujuan mana pun — Backblaze B2 adalah pilihan yang hemat biaya untuk pengarsipan media jangka panjang, sementara Google Drive cocok jika Anda ingin file dapat diakses dari perangkat seluler.

Pada langkah kedua wizard job, Anda dapat mengonfigurasi **transfer options**: atur jumlah transfer simultan, aktifkan atau nonaktifkan checksum, dan aktifkan **Dry Run** untuk melihat pratinjau apa yang akan disalin sebelum ada perubahan apa pun. Ini sangat berguna jika penyimpanan Premiumize.me Anda telah berkembang secara organik seiring waktu dan Anda tidak yakin dengan struktur pastinya.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring and running a Premiumize.me backup job" class="img-large img-center" />

## Pemantauan dan Riwayat Job

Setelah sebuah job dijalankan, RcloneView mencatat hasilnya di **Job History**. Setiap entri menampilkan waktu mulai, durasi, jumlah file yang ditransfer, total data yang dipindahkan, dan kesalahan apa pun. Ini memberi Anda jejak audit dari setiap operasi sinkronisasi, yang penting jika Anda sedang bermigrasi secara sistematis dari pustaka Premiumize.me besar dalam beberapa sesi.

Jika transfer gagal di tengah jalan — karena gangguan jaringan atau batas laju dari API Premiumize.me — Anda dapat menjalankan ulang job yang sama dari Job History tanpa perlu mengonfigurasi ulang. RcloneView melewati file yang sudah berhasil ditransfer, sehingga sinkronisasi yang terganggu akan dilanjutkan dari titik terakhir.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing Premiumize.me sync results" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka **Remote Manager**, klik **New Remote**, dan pilih **Premiumize**.
3. Selesaikan login browser OAuth untuk mengotorisasi akun Anda.
4. Buat job sinkronisasi dengan Premiumize.me sebagai sumber dan cloud pilihan Anda sebagai tujuan.

Dengan RcloneView, file Premiumize.me Anda tidak lagi terkunci dalam satu layanan saja — cadangkan, arsipkan, atau migrasikan sesuai jadwal Anda.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Put.io — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-put-io-cloud-sync-backup-rcloneview)
- [Migrasi Cloud-ke-Cloud dengan RcloneView](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)
- [Pemantauan Riwayat Job dan Log Transfer](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
