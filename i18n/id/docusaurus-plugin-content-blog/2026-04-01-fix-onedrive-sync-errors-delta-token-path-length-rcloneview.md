---
slug: fix-onedrive-sync-errors-delta-token-path-length-rcloneview
title: "Memperbaiki Error Sinkronisasi OneDrive: Delta Token Kedaluwarsa, Path Terlalu Panjang, dan Kegagalan Autentikasi"
authors:
  - tayson
description: "Selesaikan error sinkronisasi OneDrive yang umum dengan rclone dan RcloneView — delta token kedaluwarsa, batas panjang path Windows, kegagalan autentikasi, dan error kuota terlampaui."
keywords:
  - fix onedrive sync errors rclone
  - onedrive delta token expired rclone
  - onedrive path too long sync error
  - rclone onedrive authentication error
  - onedrive sync failed rcloneview
  - onedrive quota exceeded rclone
  - troubleshoot onedrive rclone
  - onedrive sync troubleshooting
  - rcloneview onedrive errors
  - onedrive 400 bad request rclone
tags:
  - RcloneView
  - onedrive
  - troubleshooting
  - tips
  - guide
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Memperbaiki Error Sinkronisasi OneDrive: Delta Token Kedaluwarsa, Path Terlalu Panjang, dan Kegagalan Autentikasi

> OneDrive adalah platform penyimpanan cloud yang mumpuni, tetapi perilaku sinkronisasinya memiliki beberapa keunikan yang dapat membuat pengguna rclone kebingungan. Panduan ini membahas error OneDrive paling umum yang akan Anda temui di RcloneView dan cara mengatasi masing-masing.

OneDrive bekerja dengan baik untuk sebagian besar operasi rclone, tetapi ada kondisi error tertentu yang unik pada platform Microsoft. Delta token kedaluwarsa, batas panjang path Windows, kegagalan refresh token autentikasi, dan kuota unggah per-file atau per-hari semuanya muncul dalam penggunaan nyata. Berikut panduan sistematis untuk mendiagnosis dan memperbaiki masing-masing.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Error 1: Delta Token Kedaluwarsa

**Gejala:** Anda melihat error seperti:
```
Failed to sync: invalidDeltaToken: The token is expired.
```

**Penyebab:** Rclone menggunakan delta token untuk melacak perubahan tambahan (incremental) di OneDrive. Token ini memiliki masa berlaku sekitar 30 hari. Jika Anda belum menjalankan sinkronisasi selama lebih dari sebulan — atau jika Microsoft membatalkan token tersebut — rclone tidak dapat melanjutkan pemindaian incremental.

**Perbaikan:** Paksa pemindaian ulang penuh dengan menghapus delta token yang tersimpan di cache:

1. Di RcloneView, buka panel **Terminal**.
2. Jalankan: `rclone backend remove-expiry onedrive:` (ganti `onedrive` dengan nama remote Anda).
3. Alternatifnya, hapus entri cache `vfs/delta` untuk remote tersebut dari konfigurasi RcloneView.
4. Jalankan ulang job sinkronisasi — rclone akan melakukan pemindaian penuh kali ini.

Proses ini memakan waktu lebih lama pada jalankan pertama setelah perbaikan, tetapi menyelesaikan error tersebut sepenuhnya.

## Error 2: Path Terlalu Panjang (> 400 Karakter)

**Gejala:**
```
ERROR: path too long: cannot handle path > 400 characters
```
atau file gagal disinkronkan dari folder yang bersarang sangat dalam.

**Penyebab:** OneDrive menerapkan panjang path maksimum 400 karakter (untuk OneDrive Personal) atau 400 karakter untuk OneDrive for Business. Windows juga memiliki batas lama MAX_PATH 260 karakter yang memengaruhi klien sinkronisasi desktop OneDrive, meskipun rclone sendiri tidak memiliki batasan Windows ini.

**Perbaikan:**
- **Persingkat struktur folder Anda** — jaga agar nesting direktori tetap dangkal. Ganti nama folder yang panjang.
- **Gunakan base path yang lebih pendek di OneDrive** — jika Anda melakukan sinkronisasi ke `OneDrive/Clients/Projects/2026/Active/Reports/`, pertimbangkan untuk meratakannya menjadi `OneDrive/Projects-2026/Reports/`.
- **Gunakan aturan filter RcloneView** untuk melewati folder dengan masalah panjang path yang diketahui saat Anda melakukan restrukturisasi.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Use folder comparison to identify path issues" class="img-large img-center" />

## Error 3: Error Autentikasi (401 Unauthorized)

**Gejala:**
```
401 Unauthorized
Failed to refresh token
AADSTS700082: The refresh token has expired
```

**Penyebab:** Refresh token OAuth Microsoft kedaluwarsa jika tidak digunakan selama 90 hari atau setelah perubahan kata sandi / reset kebijakan keamanan. Ketika token yang tersimpan di konfigurasi rclone menjadi tidak valid, semua operasi gagal.

**Perbaikan:** Otorisasi ulang remote OneDrive di RcloneView:

1. Buka **Remotes** di RcloneView.
2. Pilih remote OneDrive Anda dan pilih **Edit**.
3. Klik **Re-authorize** — jendela browser akan terbuka untuk login Microsoft.
4. Login dan berikan akses kembali.
5. Simpan token yang telah diperbarui.

Operasi selanjutnya akan menggunakan token yang baru. Setel pengingat untuk melakukan otorisasi ulang jika Anda jarang menjalankan job sinkronisasi (bulanan atau lebih jarang).

## Error 4: 429 Too Many Requests / Rate Limiting

**Gejala:**
```
429 Too Many Requests: request throttled
```

**Penyebab:** API OneDrive menerapkan batas rate per pengguna. Menyinkronkan ribuan file kecil dengan cepat memicu throttling.

**Perbaikan:**

- **Kurangi transfer bersamaan** — di pengaturan job RcloneView, turunkan jumlah transfer menjadi 2–4.
- **Tambahkan batas rate** — gunakan flag `--tpslimit 10` di kolom flag kustom RcloneView untuk membatasi transaksi per detik.
- **Jadwalkan pada jam sepi** — throttling Microsoft lebih agresif selama jam kerja.
- **Gunakan unggahan chunk untuk file besar** — RcloneView menangani ini secara otomatis untuk file di atas 100 MB.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule OneDrive jobs during off-peak hours" class="img-large img-center" />

## Error 5: Kuota Terlampaui

**Gejala:**
```
403 Forbidden: insufficient storage
```
atau unggahan gagal secara diam-diam ketika OneDrive mendekati kapasitas penuh.

**Penyebab:** Akun OneDrive tujuan memiliki ruang kosong yang tidak mencukupi.

**Perbaikan:**
- Periksa kuota OneDrive Anda di Microsoft 365 admin center atau di onedrive.live.com.
- **Bebaskan ruang** dengan menghapus atau memindahkan file lama dari OneDrive.
- **Tingkatkan paket Anda** jika akun tersebut memang benar-benar penuh.
- **Pisahkan proses migrasi** — pindahkan file ke akun OneDrive lain atau alihkan ke tujuan lain untuk kelebihan datanya.

## Error 6: Karakter Tidak Valid pada Nama File

**Gejala:** File dengan karakter tertentu gagal ditransfer ke OneDrive.

**Penyebab:** OneDrive melarang karakter tertentu dalam nama file: `\`, `/`, `:`, `*`, `?`, `"`, `<`, `>`, `|`. File yang berasal dari sistem Linux sering kali memiliki titik dua atau karakter lain dalam namanya.

**Perbaikan:** RcloneView (melalui rclone) memiliki opsi encoding bawaan `--onedrive-enc` yang secara otomatis mengganti karakter terlarang dengan karakter mirip Unicode. Aktifkan ini di pengaturan lanjutan untuk remote OneDrive Anda.

## Memantau Error di RcloneView

Panel **Job History** di RcloneView menampilkan log transfer dengan pesan error lengkap untuk setiap file:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="View OneDrive error logs in RcloneView" class="img-large img-center" />

Gunakan ini untuk dengan cepat mengidentifikasi file mana yang gagal dan alasannya, tanpa perlu menelusuri output log mentah rclone.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Periksa Job History** untuk pesan error ketika sinkronisasi gagal.
3. **Terapkan perbaikan** untuk jenis error tertentu menggunakan panduan di atas.
4. **Jalankan ulang job** — rclone akan melewati file yang berhasil ditransfer dan hanya mencoba ulang yang gagal.

Sebagian besar error OneDrive memiliki perbaikan yang sederhana. Kuncinya adalah mengidentifikasi pesan error yang tepat dan menerapkan solusi yang tepat sasaran alih-alih melakukan debugging secara membabi buta.

---

**Panduan Terkait:**

- [Memperbaiki Error Rate Limit Google Drive 403](https://rcloneview.com/support/blog/fix-google-drive-403-rate-limit-errors-rcloneview)
- [Mengatasi Masalah Error Rclone dengan RcloneView](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [Menyelesaikan Konflik Sinkronisasi Cloud](https://rcloneview.com/support/blog/resolve-cloud-sync-conflicts-rcloneview)

<CloudSupportGrid />
