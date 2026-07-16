---
slug: troubleshoot-rclone-errors-rcloneview
title: "Mengatasi Error rclone dengan RcloneView: Perbaiki Batas API, Izin Akses, Timeout, dan Lainnya"
authors:
  - tayson
description: "Diagnosis dan perbaiki error rclone yang umum menggunakan RcloneView Terminal, log job, dan history untuk mengatasi batas API, masalah izin akses, timeout, dan peringatan integritas data."
keywords:
  - rclone error fix
  - rclone troubleshooting
  - rclone api rate limit
  - rclone permission denied
  - rclone timeout
  - rclone quota exceeded
  - rclone debugging
  - rcloneview errors
  - rclone cli gui
  - cloud automation
  - rcloneview
tags:
  - sync
  - file-management
unlisted: true

---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mengatasi Error rclone dengan RcloneView: Perbaiki Batas API, Izin Akses, Timeout, dan Lainnya

> Rclone memang andal, tetapi error seperti batas rate 403, timeout, atau "permission denied" bisa menghentikan proses migrasi. RcloneView menggabungkan visibilitas CLI dengan konteks GUI sehingga Anda bisa menemukan penyebabnya lebih cepat dan memperbaikinya dengan aman.

Jika Anda pernah menatap deretan output rclone sambil bertanya-tanya mengapa sebuah job gagal, RcloneView bisa mempersingkat proses tersebut. Terminal bawaan, log verbose, dan Job History membantu Anda mereproduksi masalah, mengisolasi file yang gagal, dan menyesuaikan pengaturan performa atau autentikasi tanpa perlu keluar dari aplikasi.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />



## Mengapa error rclone terjadi

- Batas dan kuota API: respons 403 atau 429 dari Google Drive, OneDrive, Dropbox, dll.
- Masalah scope autentikasi: token kedaluwarsa atau izin yang hilang.
- Ketidakcocokan path dan izin akses: shared drive, folder eksternal, atau root path yang salah.
- Kondisi jaringan: timeout, throttling, atau koneksi tidak stabil.
- Pemeriksaan integritas: checksum yang tidak cocok saat provider mengubah unggahan.

## Error umum dan artinya

| Error | Biasanya berarti | Langkah cepat berikutnya |
| --- | --- | --- |
| 403: Rate Limit Exceeded / 429 Too Many Requests | Provider membatasi (throttle) permintaan | Turunkan `--transfers`, tambahkan `--tpslimit`, coba lagi dengan backoff |
| Failed to copy: permission denied | Tidak memiliki akses ke folder atau file | Periksa path, cek izin shared drive, autentikasi ulang dengan scope yang benar |
| Failed to refresh token | Token OAuth kedaluwarsa atau tidak valid | Sambungkan ulang remote melalui alur OAuth RcloneView |
| Directory not found | Path salah ketik atau root yang salah | Konfirmasi path menggunakan `rclone lsf remote:` |
| Timeout waiting for connection | Jaringan tidak stabil atau firewall | Kurangi paralelisme, coba lagi dengan `--retries` dan `--low-level-retries` |
| Upload failed: corrupted on transfer | Pemeriksaan integritas gagal | Jalankan ulang dengan `--checksum` atau `rclone check` |

## Gunakan RcloneView Terminal untuk mereproduksi dan memeriksa error

Jalankan ulang perintah yang gagal di dalam Terminal bawaan untuk menghilangkan variabel seperti direktori kerja atau konfigurasi yang salah.

- Buka tab **Terminal** dan ketik `rclone ` untuk melihat semua perintah (autocomplete). [Panduan](/howto/rcloneview-basic/using-terminal-in-rcloneview)
- Tambahkan `-vv` untuk menangkap output verbose yang bisa Anda salin atau bagikan.

Contoh:

```bash
rclone about myremote: -vv
rclone lsf myremote:path -vv --dirs-only --recursive
rclone sync src: dst: -vv --transfers=8
```

<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone.png" alt="RcloneView Terminal autocomplete" class="img-medium img-center" />

## Periksa Job Logs dan History untuk menemukan pola

Tampilan Job Monitor dan History menunjukkan file mana yang gagal dan seberapa sering.

- **Job Monitor**: tab Transfer langsung untuk job yang sedang berjalan, ditambah log Completed/API untuk job yang sudah selesai. [Lihat langkahnya](/howto/rcloneview-basic/real-time-transfer-monitoring)
- **History**: buka History dari job tertentu melalui Job Manager untuk meninjau hasil per file. [Lihat langkahnya](/howto/rcloneview-basic/execute-manage-job)

<img src="/support/images/en/howto/rcloneview-basic/transfer-log.png" alt="Job Monitor transfer log" class="img-medium img-center" />

## Perbaiki error batas rate API dan kuota

- Turunkan konkurensi: kurangi `--transfers` dan `--checkers` di opsi job atau flag perintah.
- Tambahkan throttling yang santun: gunakan `--tpslimit` dan `--tpslimit-burst` untuk provider dengan API yang ketat.
- Pecah job besar: jalankan per folder atau jadwalkan saat jam sepi melalui Job Manager.
- Gunakan proses incremental: gabungkan Compare + Sync untuk hanya memindahkan file yang berubah dan mengurangi jumlah panggilan API.

## Perbaiki masalah autentikasi dan OAuth

- Autentikasi ulang remote dengan scope yang benar menggunakan prompt OAuth RcloneView.
- Jika token kedaluwarsa atau dicabut, buat ulang remote atau refresh melalui Terminal dengan `rclone config reconnect remote:`.
- Untuk shared drive atau akun yang didelegasikan, pastikan remote diatur dengan drive ID atau tenant ID yang benar.

## Perbaiki error permission denied

- Konfirmasi path tersebut ada dan Anda memiliki akses: `rclone lsf remote:folder` di Terminal.
- Untuk Google shared drive atau folder bersama Dropbox, pastikan remote menggunakan root atau drive ID yang benar.
- Jika menyalin ke shared drive, pastikan Anda memiliki izin tulis; jika tidak, pilih tujuan yang Anda miliki sendiri.

## Perbaiki timeout dan koneksi yang tidak stabil

- Kurangi paralelisme untuk koneksi yang rentan: `--transfers=2 --checkers=2`.
- Tingkatkan perilaku retry: `--retries=10 --retries-sleep=5s --low-level-retries=20`.
- Untuk file besar, aktifkan multi-thread streaming: `--multi-thread-streams=4 --multi-thread-cutoff=64M`.
- Uji keterjangkauan (reachability) dari Terminal dengan perintah ringan sebelum sinkronisasi besar:

```bash
rclone lsf remote: --max-depth 1 --fast-list -vv
```

## Perbaiki error integritas data dan checksum

- Verifikasi sumber dan tujuan dengan dry run: `--dry-run` pada job Sync atau Copy.
- Gunakan `rclone check` untuk membandingkan checksum antara dua remote:

```bash
rclone check source:folder dest:folder --one-way --size-only
```

- Aktifkan perbandingan checksum pada provider yang mendukungnya untuk mendeteksi kerusakan data yang tidak terlihat.

## Kapan menggunakan GUI vs Terminal

- **GUI**: membuat job, menjadwalkan pencadangan berulang, Compare sebelum sinkronisasi, drag-and-drop antar cloud.
- **Terminal**: mendiagnosis error dengan cepat, menguji flag backend, atau menjalankan perintah ad-hoc dengan log `-vv` lengkap.
- Gunakan keduanya: buat prototipe di Terminal, lalu simpan perintah yang stabil sebagai job yang dapat digunakan kembali.

## Daftar periksa troubleshooting cepat

1. Reproduksi error di Terminal dengan `-vv` dan salin log-nya.
2. Periksa Job Monitor dan History untuk file yang gagal dan frekuensinya.
3. Terapkan kategori perbaikan: batas rate (turunkan konkurensi), auth (autentikasi ulang), izin akses (verifikasi path/root), jaringan (kurangi thread, tingkatkan retry), integritas (jalankan `check`).
4. Jalankan ulang dengan `--dry-run` sebelum membuat perubahan.

## Kesimpulan

RcloneView mengubah debugging rclone menjadi alur kerja yang terpandu: autocomplete untuk menghindari kesalahan sintaks, log dalam aplikasi untuk melihat apa yang gagal, dan kontrol GUI untuk menyesuaikan konkurensi atau jadwal. Gunakan Terminal dan Job History bersama-sama untuk menyelesaikan error lebih cepat dan menjaga transfer tetap berjalan.

<CloudSupportGrid />
