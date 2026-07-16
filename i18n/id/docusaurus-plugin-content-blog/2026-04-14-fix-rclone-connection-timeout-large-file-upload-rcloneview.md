---
slug: fix-rclone-connection-timeout-large-file-upload-rcloneview
title: "Mengatasi Connection Timeout pada Upload File Besar — Solusi dengan RcloneView"
authors:
  - tayson
description: "Diagnosis dan atasi error connection timeout saat mengunggah file besar ke penyimpanan cloud dengan RcloneView. Sesuaikan chunk size, retries, dan pengaturan timeout untuk transfer yang andal."
keywords:
  - connection timeout large file upload
  - rclone upload timeout fix
  - large file transfer timeout cloud
  - fix cloud upload timeout RcloneView
  - rclone chunk size timeout
  - cloud storage upload failure
  - troubleshoot large file cloud upload
  - S3 multipart upload timeout
tags:
  - troubleshooting
  - tips
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mengatasi Connection Timeout pada Upload File Besar — Solusi dengan RcloneView

> Upload file besar ke penyimpanan cloud lebih sering gagal dengan error timeout dibandingkan file kecil. Berikut cara mendiagnosis akar masalahnya dan mengonfigurasi RcloneView agar dapat menangani transfer multi-GB secara andal.

Mengunggah arsip video 20 GB atau dump database 50 GB ke penyimpanan cloud pada dasarnya berbeda dari sinkronisasi folder berisi dokumen. File besar membebani stabilitas koneksi, menghabiskan ambang batas timeout default, dan mengungkap keterbatasan multipart chunking yang tidak pernah dijumpai pada transfer file kecil. RcloneView menyediakan flag rclone yang Anda butuhkan untuk menyesuaikan parameter ini — melalui Global Rclone Flags dan pengaturan per-job — tanpa perlu menulis shell script.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengenali Error Timeout di RcloneView

Saat upload file besar mengalami timeout, **Log tab** RcloneView menampilkan entri seperti `Failed to copy: net/http: request canceled (Client.Timeout exceeded)` atau `RequestTimeout: Your socket connection to the server was not read from or written to within the timeout period`. Transferring tab menunjukkan file yang terdampak berhenti pada persentase tertentu sebelum job melaporkan error.

Connection timeout saat upload file besar paling sering terjadi pada:
- Provider berbasis S3 dengan batas waktu upload part yang ketat
- API cloud yang menutup koneksi idle setelah 30–60 detik
- Jalur jaringan dengan packet loss sesekali yang meningkatkan round-trip latency

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring large file transfer progress in RcloneView" class="img-large img-center" />

## Menyesuaikan Chunk Size dan Flag Timeout

Perbaikan paling efektif untuk error timeout pada file besar adalah menyesuaikan chunk size untuk multipart upload. Di RcloneView, buka **Settings → Embedded Rclone → Global Rclone Flags** dan tambahkan:

- `--s3-chunk-size 128M` — meningkatkan ukuran chunk multipart S3 dari default 5 MB menjadi 128 MB, mengurangi jumlah round-trip API per file
- `--s3-upload-cutoff 200M` — menetapkan ambang ukuran file di mana multipart upload akan digunakan
- `--timeout 5m` — memperpanjang timeout koneksi global menjadi 5 menit per operasi

Untuk Google Drive, gunakan `--drive-chunk-size 128M` sebagai pengganti flag S3. Untuk Backblaze B2, gunakan `--b2-chunk-size 128M`.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring global rclone flags for large file uploads in RcloneView" class="img-large img-center" />

## Mengaktifkan Retries dan Kelanjutan Transfer

Aktifkan **Retry entire sync if fails** pada Step 2 di sync wizard (atur ke 3 atau 5 retries). Logika retry rclone akan mencoba melanjutkan multipart upload dari titik terakhir untuk provider berbasis S3, meminimalkan waktu transfer yang terbuang. Untuk provider yang tidak mendukung resumable upload (seperti WebDAV dasar), retry akan mengulang file dari awal, tetapi job secara keseluruhan tetap berjalan tanpa mentransfer ulang file yang sudah selesai.

Kurangi jumlah transfer bersamaan untuk job dengan file besar. Mengatur **Number of file transfers** ke 2–4 mengurangi kebutuhan bandwidth puncak dan kontensi slot koneksi, yang menjadi penyebab utama banyak error timeout pada jaringan yang padat.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Setting retry and concurrency options for large file transfer in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Periksa Log tab untuk pesan error timeout setelah upload file besar gagal.
3. Tambahkan `--s3-chunk-size 128M` dan `--timeout 5m` ke Global Rclone Flags di Settings.
4. Atur transfer bersamaan ke 2–4 dan aktifkan 3–5 retries di sync job wizard.

Dengan konfigurasi chunk size dan retry yang tepat, RcloneView menangani upload multi-GB secara andal — bahkan pada koneksi jaringan yang kurang sempurna.

---

**Panduan Terkait:**

- [Mengunggah File Besar ke Google Drive Sync dengan RcloneView](https://rcloneview.com/support/blog/upload-large-files-google-drive-sync-rcloneview)
- [Mengatasi Upload Cloud yang Lambat — Optimasi Kecepatan dengan RcloneView](https://rcloneview.com/support/blog/fix-slow-cloud-uploads-speed-optimization-rcloneview)
- [Mengatasi Kegagalan S3 Multipart Upload dengan RcloneView](https://rcloneview.com/support/blog/fix-s3-multipart-upload-failures-rcloneview)

<CloudSupportGrid />
