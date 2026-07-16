---
slug: check-verify-cloud-file-integrity-rcloneview
title: "Verifikasi Integritas File Cloud dengan Fitur Check dan Compare RcloneView"
authors:
  - tayson
description: "Gunakan fitur check dan compare RcloneView untuk memverifikasi integritas file cloud, mendeteksi bit rot, memvalidasi checksum, dan memastikan migrasi antar penyedia berhasil."
keywords:
  - rclone check files
  - verifikasi integritas file cloud
  - rcloneview compare folders
  - verifikasi checksum cloud
  - deteksi bit rot penyimpanan cloud
  - verifikasi pasca migrasi
  - validasi file rclone
  - bandingkan sumber tujuan cloud
  - fitur check rcloneview
  - alat integritas data cloud
tags:
  - RcloneView
  - feature
  - cloud-sync
  - guide
  - tips
  - best-practices
  - security
  - monitoring
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Verifikasi Integritas File Cloud dengan Fitur Check dan Compare RcloneView

> Menyalin file ke cloud hanya separuh dari pekerjaan. Memverifikasi bahwa setiap byte tiba dengan utuh adalah yang membedakan alur kerja yang andal dari yang hanya berharap.

Memindahkan terabyte data antar penyedia, menjalankan pencadangan setiap malam, atau mengarsipkan dataset penting semuanya memiliki risiko yang sama: korupsi diam-diam. Sebuah file bisa tampak ada di tujuan namun berbeda dari sumbernya karena transfer yang terputus, bug di sisi penyedia, atau bit rot biasa seiring waktu. Rclone menyediakan perintah `check` khusus yang membandingkan file sumber dan tujuan satu per satu, dan RcloneView membuat proses ini visual dan mudah diakses. Panduan ini menjelaskan kapan dan bagaimana cara memverifikasi file cloud Anda.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Verifikasi Integritas File Penting

Penyedia cloud mereplikasi data secara internal, tetapi tidak ada sistem yang kebal terhadap kesalahan. Berikut adalah skenario paling umum di mana verifikasi menangkap masalah nyata:

- **Transfer terputus** -- koneksi jaringan yang terputus saat penyalinan besar dapat meninggalkan file parsial di tujuan yang terlihat lengkap hanya dari namanya.
- **Bit rot** -- media penyimpanan dapat menurun kualitasnya selama berbulan-bulan atau bertahun-tahun, mengubah bit pada file yang jarang diakses.
- **Bug penyedia** -- kesalahan API sesekali dapat menghasilkan unggahan berukuran nol byte atau penulisan yang terpotong tanpa memunculkan kesalahan.
- **Validasi migrasi** -- setelah memindahkan ratusan ribu file antar penyedia, Anda memerlukan bukti bahwa tidak ada yang hilang atau berubah.

Tanpa langkah verifikasi, masalah-masalah ini tidak terdeteksi hingga Anda benar-benar membutuhkan file tersebut.

## Cara Kerja Rclone Check

Perintah `rclone check` membandingkan path sumber dan tujuan lalu melaporkan file yang berbeda. Tergantung pada penyedia yang terlibat, perintah ini menggunakan salah satu metode berikut:

| Metode | Cara Kerja | Kapan Digunakan |
|--------|-------------|-----------|
| **Hash check** | Membandingkan checksum (MD5, SHA1, dll.) yang dilaporkan oleh kedua penyedia | Kedua penyedia mendukung hash yang sama |
| **Size check** | Hanya membandingkan ukuran file | Tidak ada hash yang sama tersedia |
| **Download check** | Mengunduh kedua file dan membandingkan byte demi byte | Dipaksa dengan flag `--download` |

Pemeriksaan berbasis hash adalah yang tercepat dan paling andal ketika kedua penyedia mendukungnya. Google Drive, OneDrive, penyedia yang kompatibel dengan S3, dan Backblaze B2 semuanya melaporkan hash file, meski tidak selalu jenis yang sama.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView compare folders showing file differences" class="img-large img-center" />

## Menggunakan Compare di RcloneView

Fitur **Compare** bawaan RcloneView memberi Anda tampilan visual berdampingan dari folder sumber dan tujuan:

1. Buka panel **Explorer** dan pilih remote sumber Anda di satu sisi dan tujuan di sisi lain.
2. Navigasikan ke folder yang ingin Anda bandingkan.
3. Klik **Compare** untuk menjalankan analisis.
4. Tinjau hasilnya -- file diberi kode warna berdasarkan statusnya: cocok, hanya di sumber, hanya di tujuan, atau berbeda.

Pendekatan visual ini ideal untuk memeriksa folder tertentu secara cepat atau meninjau hasil pasca migrasi tanpa harus menghafal output baris perintah.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView two-pane explorer with source and destination" class="img-large img-center" />

## Menjalankan Rclone Check melalui Terminal

Untuk pemindaian integritas penuh di seluruh remote, buka **Terminal** di RcloneView dan jalankan:

```bash
rclone check source:path dest:path
```

Flag berguna yang perlu diketahui:

| Flag | Fungsi |
|------|---------|
| `--size-only` | Bandingkan berdasarkan ukuran saja, lewati pemeriksaan hash |
| `--download` | Paksa perbandingan byte demi byte dengan mengunduh kedua salinan |
| `--one-way` | Hanya periksa bahwa file sumber ada di tujuan (bukan sebaliknya) |
| `--combined report.txt` | Tulis laporan gabungan dari yang cocok dan tidak cocok ke sebuah file |
| `--missing-on-src missing.txt` | Catat file yang ada di tujuan tetapi tidak ada di sumber |
| `--missing-on-dst missing.txt` | Catat file yang ada di sumber tetapi tidak ada di tujuan |
| `--error errors.txt` | Catat file yang gagal dalam pemeriksaan |

Contoh untuk pemeriksaan pasca migrasi yang menyeluruh:

```bash
rclone check gdrive:/Archive s3-backup:archive-bucket --combined /tmp/check-report.txt
```

## Alur Kerja Verifikasi Pasca Migrasi

Setelah memigrasikan data antar penyedia, ikuti alur kerja ini untuk memastikan keberhasilannya:

1. **Jalankan pemeriksaan satu arah** dari sumber ke tujuan untuk memastikan semua file sumber telah tiba:
   ```bash
   rclone check source:path dest:path --one-way
   ```
2. **Tinjau ketidakcocokan** -- perbedaan yang dilaporkan menunjukkan file yang perlu disalin ulang.
3. **Transfer ulang file yang gagal** menggunakan copy atau sinkronisasi RcloneView dengan `--ignore-existing` dihapus.
4. **Jalankan ulang pemeriksaan** untuk memastikan semua perbedaan telah teratasi.
5. **Simpan laporan** untuk keperluan audit menggunakan flag `--combined`.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing completed check operations" class="img-large img-center" />

## Mendeteksi Bit Rot Seiring Waktu

Untuk arsip jangka panjang, jadwalkan pemeriksaan integritas secara berkala:

1. Buat **Job** di RcloneView yang menjalankan `rclone check` terhadap arsip Anda.
2. Jadwalkan mingguan atau bulanan menggunakan **Job Scheduler**.
3. Tinjau riwayat job setelah setiap eksekusi untuk menangkap file yang baru rusak.

Ini sangat penting untuk tingkat penyimpanan dingin (S3 Glacier, arsip Backblaze B2) di mana file ditulis sekali dan jarang dibaca.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule periodic integrity check in RcloneView" class="img-large img-center" />

## Kompatibilitas Checksum Antar Penyedia

Tidak semua penyedia mendukung algoritma hash yang sama. Berikut adalah referensi singkatnya:

| Penyedia | MD5 | SHA1 | Lainnya |
|----------|-----|------|-------|
| Google Drive | Ya | Tidak | Quickxor tersedia |
| OneDrive | Tidak | Tidak | QuickXorHash |
| Amazon S3 | Ya (ETag untuk single-part) | Tidak | -- |
| Backblaze B2 | Tidak | Ya | SHA1 native |
| Dropbox | Tidak | Tidak | Dropbox content hash |
| SFTP/Local | Ya | Ya | Beberapa |

Ketika dua penyedia tidak memiliki hash yang sama, rclone akan beralih ke perbandingan berdasarkan ukuran saja. Gunakan `--download` untuk kepastian di tingkat byte dalam kasus tersebut.

## Praktik Terbaik

- **Selalu verifikasi setelah migrasi besar** -- perintah copy yang berhasil tidak menjamin setiap file utuh.
- **Gunakan laporan `--combined`** untuk membuat catatan yang dapat diaudit tentang apa yang cocok dan yang tidak.
- **Jadwalkan pemeriksaan berkala** untuk data arsip yang tidak tersentuh selama berbulan-bulan.
- **Utamakan hash check** dibandingkan size-only jika memungkinkan -- korupsi dengan ukuran sama memang jarang tapi nyata.
- **Jalankan sinkronisasi dry-run** setelah pemeriksaan untuk secara otomatis memperbaiki ketidakcocokan.

---

**Panduan Terkait:**

- [Transfer dan Sinkronisasi Cloud-ke-Cloud yang Mudah](https://rcloneview.com/support/blog/effortless-cloud-to-cloud-transfers-syncing)
- [Pencadangan Inkremental dari Google Drive ke Amazon S3](https://rcloneview.com/support/blog/incremental-backup-google-drive-to-amazon-s3)
- [Memulihkan Transfer yang Terputus dan Gagal](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)

<CloudSupportGrid />
