---
slug: fix-rclone-high-memory-cpu-usage-rcloneview
title: "Mengatasi Penggunaan Memori dan CPU Tinggi pada Transfer Rclone dengan RcloneView"
authors:
  - tayson
description: "Atasi penggunaan memori dan CPU rclone yang tinggi selama transfer cloud. Pelajari cara menyetel transfers, checkers, VFS cache, dan pengaturan buffer menggunakan antarmuka visual RcloneView."
keywords:
  - rcloneview
  - rclone high memory usage
  - rclone cpu usage
  - rclone performance tuning
  - rclone transfers checkers
  - rclone vfs cache
  - rclone buffer size
  - cloud sync performance
  - rclone slow transfer
  - fix rclone memory
tags:
  - RcloneView
  - troubleshooting
  - performance
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mengatasi Penggunaan Memori dan CPU Tinggi pada Transfer Rclone dengan RcloneView

> Transfer rclone menghabiskan seluruh RAM Anda atau membuat CPU terjebak di 100%? **RcloneView** memudahkan Anda mengidentifikasi penyebabnya dan menyetel pengaturan performa tanpa harus menghafal flag command-line.

Jika Anda menyadari sistem Anda melambat drastis selama transfer cloud, Anda tidak sendirian. Rclone memang bertenaga, tetapi pengaturan default atau opsi yang salah konfigurasi dapat menghabiskan sumber daya sistem secara signifikan -- terutama saat menangani jumlah file yang besar, drive yang di-mount, atau transfer paralel. Gejalanya sudah familiar: kipas berputar kencang, aplikasi menjadi tidak responsif, dan transfer yang tampak menggunakan sumber daya lebih banyak dari seharusnya.

Kabar baiknya, sebagian besar skenario penggunaan sumber daya tinggi memiliki solusi yang sederhana. Panduan ini membahas penyebab paling umum dari penggunaan memori dan CPU yang berlebihan pada rclone dan menunjukkan cara mengatasinya menggunakan alat konfigurasi visual RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Gejala Umum

Sebelum membahas solusinya, berikut tampilan umum dari penggunaan sumber daya tinggi selama operasi rclone:

- **Penggunaan RAM tinggi**: proses rclone mengonsumsi 1 GB memori atau lebih, terkadang terus bertambah hingga sistem kehabisan memori.
- **Lonjakan CPU**: satu atau lebih core CPU terjebak di 100% selama transfer, terutama saat mendaftar direktori besar.
- **Sistem tidak responsif**: aplikasi lain membeku atau lag saat rclone berjalan.
- **Kegagalan transfer**: error out-of-memory yang menyebabkan transfer terhenti secara tiba-tiba.
- **Performa lambat**: secara paradoks, terlalu banyak operasi paralel justru dapat memperlambat semuanya karena perebutan sumber daya.

## Terlalu Banyak Transfer dan Checker Bersamaan

Penyebab paling umum dari penggunaan sumber daya tinggi adalah menjalankan terlalu banyak transfer dan checker paralel. Rclone secara default menggunakan 4 transfers dan 8 checkers, tetapi pengguna sering menaikkan angka ini dengan anggapan akan mempercepat proses. Menjalankan 32 atau 64 transfer bersamaan dapat membebani sistem maupun koneksi jaringan Anda.

**Cara mengatasinya di RcloneView:**

Saat membuat atau mengedit sync job, atur flag `--transfers` ke nilai yang wajar. Mulailah dengan 4 dan tingkatkan hanya jika bandwidth serta sistem Anda mampu menanganinya. Atur `--checkers` ke 8 atau lebih rendah. Untuk sebagian besar koneksi rumahan, 2-4 transfers dan 4-8 checkers memberikan keseimbangan yang tepat antara kecepatan dan konsumsi sumber daya.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

## Daftar File Besar dan Pemindaian Direktori

Saat rclone memindai direktori dengan ratusan ribu atau bahkan jutaan file, ia membangun daftar in-memory dari setiap file beserta metadatanya. Hal ini dapat mengonsumsi memori hingga hitungan gigabyte pada direktori yang sangat besar.

**Cara mengatasinya:**

- Gunakan `--fast-list` jika didukung. Flag ini mengambil daftar direktori dengan lebih sedikit panggilan API, yang sebenarnya dapat mengurangi penggunaan memori pada beberapa provider (seperti S3) sementara meningkatkannya pada provider lain. Uji dengan provider spesifik Anda.
- Pecah sync job besar menjadi beberapa bagian lebih kecil dengan menargetkan subdirektori tertentu, bukan mensinkronisasi seluruh akun cloud sekaligus.
- Gunakan aturan filter (`--include`, `--exclude`) untuk membatasi cakupan setiap operasi sinkronisasi. Semakin sedikit file yang perlu didaftar, semakin sedikit memori yang terpakai.

## Pembengkakan VFS Cache dari Drive yang Di-mount

Jika Anda mount penyimpanan cloud sebagai drive lokal, cache VFS (Virtual File System) dapat tumbuh secara signifikan. Secara default, rclone mungkin menyimpan sejumlah besar data dalam cache untuk memberikan performa baca/tulis yang lancar pada drive yang di-mount. Seiring waktu, cache ini dapat menghabiskan ruang disk dan memori yang cukup besar.

**Cara mengatasinya:**

- Atur `--vfs-cache-max-size` ke batas yang wajar, seperti `1G` atau `5G`, tergantung sumber daya yang tersedia.
- Atur `--vfs-cache-max-age` untuk secara otomatis membersihkan file cache lama. Nilai seperti `1h` atau `4h` cocok untuk sebagian besar alur kerja.
- Pilih `--vfs-cache-mode` yang tepat. Gunakan `minimal` atau `writes` alih-alih `full` jika Anda hanya memerlukan akses baca atau penulisan sesekali. Mode cache penuh (full) menyimpan seluruh file dalam cache sebelum dapat diakses, yang menggunakan memori dan disk paling banyak.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />

## Kesalahan Konfigurasi Buffer Size

Flag `--buffer-size` mengontrol berapa banyak memori yang dialokasikan rclone per file untuk buffering selama transfer. Nilai default-nya adalah 16 MB per transfer. Jika Anda menjalankan 16 transfer bersamaan, itu berarti 256 MB memori buffer saja. Menaikkan `--buffer-size` menjadi 256 MB dengan 16 transfers akan mengonsumsi 4 GB hanya untuk buffer.

**Cara mengatasinya:**

- Pertahankan `--buffer-size` pada nilai default `16M` kecuali Anda memiliki alasan khusus untuk menaikkannya.
- Jika Anda menaikkannya untuk transfer file besar, kurangi `--transfers` secara proporsional agar tetap sesuai dengan RAM yang tersedia.
- Untuk sistem dengan RAM terbatas (4 GB atau kurang), pertimbangkan untuk menurunkan `--buffer-size` ke `8M` atau bahkan `4M`.

## Overhead Mount dan Operasi FUSE

Drive yang di-mount menambahkan overhead CPU karena setiap operasi file (open, read, write, stat) melewati lapisan FUSE dan memicu panggilan API. Aplikasi yang agresif memindai direktori -- seperti software antivirus, generator thumbnail, atau search indexer -- dapat menyebabkan penggunaan CPU dan API yang terus-menerus pada drive yang di-mount.

**Cara mengatasinya:**

- Kecualikan path drive yang di-mount dari pemindaian antivirus.
- Nonaktifkan pembuatan thumbnail untuk drive yang di-mount di pengaturan file explorer Anda.
- Gunakan `--dir-cache-time` untuk memperpanjang durasi cache daftar direktori (misalnya, `5m` atau `30m`), sehingga mengurangi panggilan API berulang.
- Atur `--attr-timeout` untuk menyimpan atribut file dalam cache lebih lama, yang mengurangi panggilan stat.
- Jika Anda hanya perlu membaca file, gunakan `--read-only` untuk mencegah overhead terkait penulisan.

## Memantau Penggunaan Sumber Daya di RcloneView

RcloneView menyediakan pemantauan transfer secara real-time yang membantu Anda mengidentifikasi kapan sumber daya digunakan secara berlebihan. Selama transfer aktif, Anda dapat mengamati kecepatan transfer, jumlah file, dan progres keseluruhan. Jika kecepatan menurun atau antarmuka menjadi lambat, itu adalah tanda untuk mengurangi paralelisme.

Gunakan tampilan riwayat job untuk meninjau transfer sebelumnya dan mengidentifikasi pola. Jika job tertentu secara konsisten memakan waktu lebih lama atau gagal, job tersebut adalah kandidat untuk disetel ulang.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

## Referensi Cepat: Pengaturan yang Direkomendasikan

| Pengaturan | Sistem Sumber Daya Rendah | Sistem Standar | Performa Tinggi |
|---|---|---|---|
| `--transfers` | 2 | 4 | 8-16 |
| `--checkers` | 4 | 8 | 16 |
| `--buffer-size` | 4M | 16M | 32M |
| `--vfs-cache-max-size` | 512M | 2G | 10G |
| `--vfs-cache-mode` | minimal | writes | full |

Sesuaikan pengaturan ini berdasarkan RAM, core CPU, dan bandwidth internet yang tersedia. Mulailah secara konservatif dan tingkatkan secara bertahap.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka sync job yang sudah ada atau buat yang baru, lalu tinjau pengaturan transfer dan checker.
3. Kurangi `--transfers` dan `--checkers` jika sistem Anda kesulitan selama transfer.
4. Untuk drive yang di-mount, konfigurasikan batas VFS cache untuk mencegah pertumbuhan memori yang tidak terbatas.

Penyesuaian kecil pada paralelisme dan pengaturan cache dapat secara signifikan meningkatkan responsivitas sistem tanpa memengaruhi kecepatan transfer secara berarti.

---

**Panduan Terkait:**

- [Menjelajahi dan Mengelola Penyimpanan Remote](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Pemantauan Transfer Real-time](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [Mount Penyimpanan Cloud sebagai Drive Lokal](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

<CloudSupportGrid />
