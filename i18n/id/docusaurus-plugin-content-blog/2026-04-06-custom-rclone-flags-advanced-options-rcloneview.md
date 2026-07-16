---
slug: custom-rclone-flags-advanced-options-rcloneview
title: "Gunakan Flag Rclone Kustom dan Opsi Lanjutan dalam Job RcloneView"
authors:
  - tayson
description: "Pelajari cara menambahkan flag rclone kustom di RcloneView untuk penyesuaian performa, debugging, dan konfigurasi job lanjutan. Mencakup transfers, checkers, fast-list, dan lainnya."
keywords:
  - rclone custom flags
  - rcloneview advanced options
  - rclone transfers flag
  - rclone fast-list performance
  - rclone checkers setting
  - rclone no-traverse flag
  - rclone size-only flag
  - rcloneview job configuration
  - rclone performance tuning
  - rclone debugging flags
tags:
  - feature
  - rclone
  - tips
  - cli
  - performance
  - best-practices
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gunakan Flag Rclone Kustom dan Opsi Lanjutan dalam Job RcloneView

> RcloneView menangani kasus-kasus umum secara otomatis, tetapi kekuatan sesungguhnya dari rclone ada pada flag-nya. Mengetahui flag mana yang perlu ditambahkan -- dan di mana -- dapat memangkas waktu transfer hingga separuh atau menyelesaikan kasus khusus yang sulit.

Rclone memiliki ratusan flag baris perintah yang mengontrol segala hal, mulai dari paralelisme transfer, perilaku checksum, hingga logika retry. RcloneView menyediakan antarmuka yang bersih untuk operasi paling umum, tetapi juga memungkinkan Anda menyisipkan flag kustom ke job mana pun untuk situasi ketika pengaturan default tidak cukup. Panduan ini membahas flag-flag paling berguna, kapan menggunakannya, dan cara mengonfigurasinya di RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Di Mana Menambahkan Flag Kustom di RcloneView

RcloneView mendukung flag kustom di dua tempat:

1. **Konfigurasi Job** -- saat membuat atau mengedit job (copy, sync, move), terdapat kolom untuk flag tambahan. Masukkan persis seperti yang Anda ketik di baris perintah.
2. **Terminal** -- untuk perintah sekali pakai, buka panel Terminal dan ketik perintah rclone lengkap dengan flag yang Anda butuhkan.

Flag yang ditambahkan ke job tersimpan akan tetap berlaku di setiap eksekusi, sehingga Anda hanya perlu mengonfigurasinya sekali dan flag tersebut akan diterapkan setiap kali job dijalankan -- termasuk saat dijalankan sesuai jadwal.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView job configuration with custom flags" class="img-large img-center" />

## Flag untuk Penyesuaian Performa

Flag-flag ini berdampak langsung pada kecepatan transfer dan penggunaan sumber daya.

### --transfers N

Mengontrol berapa banyak file yang ditransfer secara paralel. Default-nya adalah 4.

```bash
--transfers 16
```

Naikkan nilai ini untuk banyak file kecil atau ketika provider mendukung konkurensi tinggi. S3, B2, dan Wasabi dapat menangani 16-32 transfer paralel dengan baik. Google Drive mungkin membatasi (throttle) di atas 8-10.

### --checkers N

Mengontrol berapa banyak file yang diperiksa (dibandingkan) secara paralel. Default-nya adalah 8.

```bash
--checkers 32
```

Naikkan nilai ini saat menjalankan operasi sync atau check pada direktori dengan banyak file. Tahap pemeriksaan sering kali menjadi bottleneck, bukan transfernya.

### --fast-list

Menggunakan lebih sedikit panggilan API untuk mendaftar direktori dengan meminta semua objek dalam satu permintaan. Jauh lebih cepat untuk provider yang kompatibel dengan S3 dengan bucket berukuran besar.

```bash
--fast-list
```

Trade-off: menggunakan lebih banyak memori karena seluruh daftar disimpan di memori. Pada bucket dengan jutaan objek, ini bisa menghabiskan beberapa gigabyte RAM.

### --no-traverse

Melewati proses pendaftaran (listing) tujuan sepenuhnya. Berguna saat menyalin beberapa file ke tujuan dengan jutaan file yang sudah ada.

```bash
--no-traverse
```

Tanpa flag ini, rclone mendaftar seluruh tujuan untuk memeriksa file yang sudah ada. Jika Anda tahu sebagian besar isi tujuan tidak relevan (misalnya, menyalin 10 file baru ke bucket dengan 5 juta objek), `--no-traverse` menghemat waktu pendaftaran hingga beberapa menit.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView two-pane view for configuring transfer jobs" class="img-large img-center" />

### --buffer-size

Mengontrol buffer dalam memori per transfer file. Default-nya adalah 16 MiB.

```bash
--buffer-size 64M
```

Naikkan untuk file besar pada koneksi berbandwidth tinggi guna mengurangi stall I/O. Turunkan jika memori terbatas.

### --multi-thread-streams N

Jumlah stream untuk unduhan multi-thread dari satu file. Default-nya adalah 4.

```bash
--multi-thread-streams 8
```

Membantu saat mengunduh file individual berukuran besar dari provider yang mendukung permintaan byte-range.

## Flag Perbandingan dan Perilaku

Flag-flag ini mengubah cara rclone memutuskan apa yang akan ditransfer.

### --size-only

Bandingkan file hanya berdasarkan ukuran, mengabaikan waktu modifikasi dan checksum.

```bash
--size-only
```

Gunakan ketika timestamp tidak dapat diandalkan (umum terjadi pada beberapa server SFTP) atau ketika Anda menginginkan perbandingan tercepat dengan risiko melewatkan perubahan pada file berukuran sama.

### --ignore-existing

Lewati file yang sudah ada di tujuan, terlepas dari ukuran atau tanggalnya.

```bash
--ignore-existing
```

Ideal untuk unggahan inkremental di mana Anda tidak pernah mengubah file yang sudah ada -- hanya menambahkan yang baru. Jauh lebih cepat daripada membandingkan setiap file.

### --ignore-size

Bandingkan file hanya berdasarkan waktu modifikasi, mengabaikan ukuran.

```bash
--ignore-size
```

Jarang dibutuhkan, tetapi berguna dengan provider yang melaporkan ukuran yang tidak akurat untuk jenis file tertentu.

### --update

Lewati file yang lebih baru di tujuan.

```bash
--update
```

Berguna untuk alur kerja bergaya bidirectional di mana Anda hanya ingin menyalin file yang lebih lama di tujuan.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folders with custom comparison flags" class="img-large img-center" />

## Flag Retry dan Keandalan

### --retries N

Jumlah percobaan ulang untuk operasi yang gagal. Default-nya adalah 3.

```bash
--retries 10
```

Naikkan untuk jaringan yang tidak stabil atau provider dengan error yang muncul sesekali.

### --retries-sleep DURATION

Waktu tunggu antar percobaan ulang. Default-nya adalah 0.

```bash
--retries-sleep 5s
```

Menambahkan jeda antar percobaan ulang, berguna ketika dibatasi laju (rate-limited) oleh provider.

### --low-level-retries N

Jumlah percobaan ulang untuk operasi tingkat rendah (permintaan HTTP). Default-nya adalah 10.

```bash
--low-level-retries 20
```

### --timeout DURATION

Batas waktu idle IO. Default-nya adalah 5m0s.

```bash
--timeout 10m
```

Naikkan untuk koneksi yang sangat lambat atau provider dengan latensi tinggi.

## Flag Debugging dan Logging

Ketika sebuah job gagal atau berperilaku tidak sesuai harapan, flag-flag ini membantu mendiagnosis masalahnya.

### -v / -vv

Output verbose dan sangat verbose.

```bash
-v
```

Menampilkan setiap file saat ditransfer beserta informasi progres dasar. Gunakan `-vv` untuk output debug detail termasuk permintaan HTTP.

### --log-file PATH

Menulis log ke file, bukan ke konsol.

```bash
--log-file /tmp/rclone-debug.log
```

### --log-level DEBUG

Menetapkan level log secara eksplisit.

```bash
--log-level DEBUG
```

Menghasilkan output paling detail. Gunakan saat melaporkan masalah atau menyelidiki perilaku yang tidak terduga.

### --dry-run

Mensimulasikan operasi tanpa membuat perubahan apa pun.

```bash
--dry-run
```

Selalu jalankan ini terlebih dahulu saat menguji kombinasi flag baru untuk memastikan hasilnya sesuai harapan.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor transfer with verbose logging in RcloneView" class="img-large img-center" />

## Konfigurasi Flag Per Job

RcloneView memungkinkan Anda menyimpan set flag berbeda untuk job yang berbeda. Beberapa kombinasi praktis:

**Sinkronisasi file besar ke S3:**
```
--transfers 8 --checkers 16 --fast-list --buffer-size 64M
```

**Pencadangan inkremental file kecil:**
```
--transfers 32 --checkers 64 --ignore-existing --fast-list
```

**Sinkronisasi hati-hati dengan dry-run terlebih dahulu:**
```
--dry-run -v
```
Kemudian hapus `--dry-run` untuk menjalankan yang sebenarnya.

**Debug transfer yang gagal:**
```
-vv --log-file /tmp/debug.log --retries 1
```

## Flag yang Sebaiknya Dihindari Kecuali Anda Tahu Betul Apa yang Anda Lakukan

| Flag | Risiko |
|------|------|
| `--delete-before` | Menghapus file tujuan sebelum transfer -- berbahaya jika transfer gagal di tengah jalan |
| `--max-delete N` tanpa pengujian | Dapat mencegah pembersihan jika diatur terlalu rendah |
| `--no-check-certificate` | Menonaktifkan verifikasi TLS -- risiko keamanan |
| `--ignore-checksum` | Melewati verifikasi integritas -- menghilangkan tujuan dari checksum |

## Praktik Terbaik

- **Mulai dengan default** -- default rclone sudah masuk akal untuk sebagian besar beban kerja. Tambahkan flag hanya ketika Anda memiliki masalah spesifik atau bottleneck yang terukur.
- **Uji dengan --dry-run** sebelum menerapkan flag baru ke job produksi.
- **Dokumentasikan flag Anda** -- saat menyimpan job dengan flag kustom, catat alasan setiap flag ada di sana agar Anda (atau rekan tim) di masa depan memahami maksudnya.
- **Benchmark sebelum dan sesudah** -- ukur waktu transfer dengan dan tanpa flag performa untuk memastikan flag tersebut benar-benar membantu beban kerja Anda.
- **Gunakan -v untuk job produksi** -- overhead sedikit yang ditimbulkan sepadan dengan visibilitas mengenai apa yang terjadi selama setiap eksekusi.

---

**Panduan Terkait:**

- [Verifikasi Integritas File Cloud dengan Check dan Compare](https://rcloneview.com/support/blog/check-verify-cloud-file-integrity-rcloneview)
- [Memulihkan Transfer yang Terputus dan Gagal](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)
- [Transfer dan Sinkronisasi Cloud-to-Cloud](https://rcloneview.com/support/blog/effortless-cloud-to-cloud-transfers-syncing)

<CloudSupportGrid />
