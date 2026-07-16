---
slug: fix-scheduled-sync-not-running-rcloneview
title: "Mengatasi Sinkronisasi Terjadwal yang Tidak Berjalan — Troubleshoot Tugas Cloud Otomatis di RcloneView"
authors:
  - steve
description: "Diagnosis dan atasi tugas sinkronisasi terjadwal RcloneView yang tidak mau berjalan atau berjalan pada waktu yang salah. Mencakup pemeriksaan lisensi, sintaks cron, pengaturan startup, dan pemeriksaan log."
keywords:
  - rcloneview scheduled sync not running
  - fix scheduled cloud backup rcloneview
  - rcloneview schedule troubleshooting
  - cloud sync cron job not starting
  - automated cloud backup not running
  - rcloneview plus schedule fix
  - fix cloud sync schedule
  - rcloneview crontab troubleshooting
tags:
  - troubleshooting
  - tips
  - automation
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mengatasi Sinkronisasi Terjadwal yang Tidak Berjalan — Troubleshoot Tugas Cloud Otomatis di RcloneView

> Jika pencadangan otomatis RcloneView Anda berhenti berjalan sesuai jadwal — atau tidak pernah berjalan sama sekali — panduan ini membahas setiap kemungkinan penyebab secara berurutan, mulai dari verifikasi lisensi, sintaks cron, hingga konfigurasi startup.

Sinkronisasi berbasis jadwal adalah salah satu fitur PLUS RcloneView yang paling praktis: konfigurasikan sebuah tugas sekali dan tugas tersebut akan berjalan sesuai jadwal crontab tanpa intervensi manual. Ketika fitur ini berhenti bekerja, akar masalahnya hampir selalu salah satu dari empat hal — masalah lisensi, jadwal yang salah konfigurasi, aplikasi tidak berjalan saat tugas seharusnya dijalankan, atau kesalahan senyap pada tugas itu sendiri. Menelusuri setiap lapisan secara sistematis akan menyelesaikan masalah dalam hitungan menit.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pemeriksaan 1: Pastikan Lisensi PLUS Anda Aktif

Sinkronisasi berbasis jadwal hanya tersedia untuk lisensi PLUS atau Lifetime. Lisensi FREE tidak mengaktifkan penjadwalan crontab, dan tugas yang disimpan di bawah lisensi FREE akan memiliki jadwal yang secara diam-diam tidak aktif. Periksa bilah footer di bagian bawah jendela RcloneView — bilah ini menampilkan "FREE License" atau "PLUS License" beserta versi rclone dan informasi koneksi.

Jika lisensi menunjukkan status FREE atau kedaluwarsa, buka **Help → Activate License** dan masukkan kembali alamat email serta kunci lisensi Anda. Kupon diskon hanya dapat digunakan sekali per alamat email, sehingga percobaan aktivasi ulang dengan kupon yang sama tidak akan memperpanjang langganan — hubungi dukungan jika kunci tampak tidak valid setelah perpanjangan baru-baru ini.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Verifying a sync job is configured and ready to run in RcloneView" class="img-large img-center" />

Setelah memastikan PLUS aktif, buka kembali tugas yang bermasalah di Job Manager dan periksa apakah Step 4 (penjadwalan) sudah terisi dengan nilai yang sebenarnya, bukan kolom kosong. Tugas yang sebelumnya sudah disimpan mungkin perlu diedit dan disimpan ulang dengan PLUS aktif agar jadwal terkunci dengan benar.

## Pemeriksaan 2: Tinjau Sintaks Crontab di Step 4 Tugas

Penjadwal RcloneView menggunakan lima kolom bergaya crontab: **Minute** (0–59), **Hour** (0–23), **Day of Week** (0–6, Minggu=0), **Day of Month** (1–31), dan **Month** (1–12). Membiarkan sebuah kolom kosong berarti "setiap" — mengisi sebuah nilai berarti "hanya ini". Kesalahan konfigurasi yang paling umum adalah memasukkan `0` di kolom yang salah atau menggunakan kombinasi yang tidak kompatibel, seperti menentukan Day of Week dan Day of Month sekaligus dengan cara yang tidak pernah selaras.

RcloneView menyertakan tombol **Simulate Schedule** langsung di Step 4. Klik tombol ini untuk melihat pratinjau beberapa waktu eksekusi berikutnya sebelum menyimpan. Jika pratinjau menunjukkan hasil yang tidak terduga — berjalan setiap menit, melewati hari yang diharapkan, atau tidak menunjukkan jadwal berikutnya sama sekali — sesuaikan kolomnya dan simulasikan lagi.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring crontab schedule fields in RcloneView Job Manager Step 4" class="img-large img-center" />

Sintaks daftar (`1,3,5`), sintaks rentang (`1-5` untuk hari kerja), dan sintaks langkah (`0-23/4` untuk setiap 4 jam) semuanya didukung. Sebagai contoh, tugas harian pada tengah malam menggunakan Minute=`0`, Hour=`0`, dengan kolom lainnya dibiarkan kosong.

## Pemeriksaan 3: Pastikan RcloneView Tetap Berjalan pada Waktu Jadwal

RcloneView harus **terbuka dan berjalan** agar tugas terjadwal dapat dijalankan — aplikasi ini tidak beroperasi sebagai layanan sistem latar belakang atau daemon. Jika komputer dalam mode tidur, pengguna telah logout, atau aplikasi telah ditutup, jadwal apa pun yang jatuh tempo selama waktu tersebut akan dilewati secara diam-diam.

Solusinya sederhana: aktifkan **Launch at login** di **Settings → General** sehingga aplikasi berjalan otomatis saat OS melakukan booting. Padukan dengan **Start minimized** agar RcloneView berjalan di system tray tanpa mengganggu desktop Anda, sambil tetap menjalankan semua tugas terjadwal di latar belakang.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneView running a scheduled sync transfer in the background" class="img-large img-center" />

Jika mesin target rutin dimatikan pada malam hari, pertimbangkan untuk menyesuaikan jadwal ke jam kerja atau mengonfigurasi OS agar bangun dari mode tidur sebelum waktu tugas jatuh tempo.

## Pemeriksaan 4: Periksa Riwayat Tugas dan Log Transfer

Jika sebuah tugas tampak sudah berjalan tetapi tidak menghasilkan output, tab **Job History** di Info View bagian bawah adalah tempat pertama yang harus diperiksa. Tab ini mencatat setiap eksekusi beserta Status (Completed / Errored / Canceled), Time Spent, Transfer Speed, dan File Count. Filter riwayat untuk hanya menampilkan entri "Errored" guna menampilkan eksekusi yang gagal. Setiap catatan terhubung ke output log terkait, yang mengidentifikasi kegagalan spesifik — network timeout, authentication error, path not found, atau masalah izin tujuan.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing scheduled sync execution records and status" class="img-large img-center" />

Untuk diagnostik yang lebih mendalam, aktifkan **Enable rclone Logging** di **Settings → Embedded Rclone** dan atur level log ke **INFO** atau **DEBUG**. Saat tugas berjalan berikutnya (atau dipicu secara manual), file log akan merekam output rclone secara lengkap — termasuk kode kesalahan dan file yang tepat yang menyebabkan kegagalan — sehingga analisis akar masalah menjadi mudah bahkan untuk masalah yang bersifat intermiten.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Periksa bilah footer — lisensi PLUS diperlukan untuk penjadwalan crontab.
3. Buka tugas yang bermasalah → Edit → Step 4, lalu gunakan Simulate Schedule untuk memverifikasi sintaks cron.
4. Aktifkan **Launch at login** dan **Start minimized** di Settings → General.
5. Periksa Job History untuk eksekusi yang gagal, dan aktifkan pencatatan log rclone untuk diagnostik yang lebih rinci.

Diagnosis sistematis di keempat lapisan ini menyelesaikan hampir semua kegagalan sinkronisasi terjadwal dengan cepat — tanpa perlu menebak-nebak.

---

**Panduan Terkait:**

- [Otomatiskan Pencadangan Cloud Harian dengan RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [Praktik Terbaik Penjadwalan — Cron, Retry, dan Monitoring di RcloneView](https://rcloneview.com/support/blog/schedule-best-practices-cron-retry-rcloneview)
- [Riwayat Tugas dan Log Transfer — Monitoring di RcloneView](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
