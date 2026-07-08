---
slug: migrate-google-photos-to-onedrive-rcloneview
title: "Migrasi Google Photos ke OneDrive dengan RcloneView"
authors:
  - tayson
description: "Panduan langkah demi langkah untuk memigrasikan pustaka Google Photos Anda ke OneDrive menggunakan RcloneView. Mencakup akses baca-saja, struktur folder, penanganan metadata, dan pengorganisasian."
keywords:
  - rcloneview
  - google photos to onedrive
  - google photos migration
  - migrate google photos
  - google photos rclone
  - onedrive photos
  - photo migration
  - cloud photo transfer
  - google photos backup
  - google photos export
tags:
  - RcloneView
  - google-photos
  - onedrive
  - migration
  - cloud-migration
  - guide
  - cloud-to-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Google Photos ke OneDrive dengan RcloneView

> Pustaka foto Anda adalah salah satu koleksi paling personal dan tidak tergantikan yang Anda miliki — memindahkannya antar cloud memerlukan kehati-hatian. **RcloneView** memberi Anda cara visual, langkah demi langkah untuk memigrasikan seluruh pustaka Google Photos Anda ke OneDrive tanpa kehilangan struktur pengorganisasian Anda.

Google Photos telah menjadi pilihan default untuk penyimpanan foto selama bertahun-tahun, berkat integrasinya dengan Android dan ekosistem Google. Namun keadaan bisa berubah. Mungkin Anda beralih ke Microsoft 365, penyimpanan Google Anda semakin menipis, atau Anda lebih menyukai integrasi OneDrive yang lebih erat dengan Windows. Apa pun alasannya, memigrasikan pustaka foto dengan ribuan (atau puluhan ribu) gambar dan video memerlukan proses yang andal.

Tantangannya adalah Google Photos bukan sistem berkas sederhana. Ia mengorganisasikan foto berdasarkan tanggal, album, dan metadata, bukan folder tradisional. Rclone menangani hal ini dengan menampilkan Google Photos sebagai direktori terstruktur, dan RcloneView memberi Anda antarmuka visual untuk menelusuri, memilih, dan mentransfer semuanya ke OneDrive — lengkap dengan pemantauan dan verifikasi.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Memahami Google Photos sebagai Remote

Sebelum memulai migrasi, penting untuk memahami cara kerja Google Photos sebagai remote cloud di RcloneView.

### Akses Baca-Saja

API Google Photos hanya menyediakan **akses baca-saja (read-only)** ke pustaka Anda. Ini berarti:

- Anda dapat **menelusuri dan mengunduh** semua foto dan video Anda melalui RcloneView.
- Anda **tidak dapat menghapus, mengganti nama, atau mengubah** berkas di Google Photos melalui API.
- Anda **tidak dapat mengunggah** berkas baru ke Google Photos melalui remote ini.

Ini adalah keterbatasan API Google, bukan keterbatasan RcloneView. Untuk keperluan migrasi, akses baca-saja sudah cukup — Anda menarik data keluar dari Google Photos, bukan menulis ke dalamnya.

### Struktur Folder

Google Photos menampilkan pustaka Anda melalui dua tipe direktori utama:

- **`media/by-year/`** — Semua foto yang diorganisasikan berdasarkan tahun (misalnya, `media/by-year/2024/`, `media/by-year/2025/`). Ini berisi setiap foto dalam pustaka Anda, diurutkan secara kronologis.
- **`media/by-month/`** — Foto yang sama diorganisasikan berdasarkan tahun dan bulan (misalnya, `media/by-month/2024/2024-06/`).
- **`album/`** — Album yang Anda buat secara manual. Setiap album muncul sebagai folder yang berisi fotonya.

Foto yang muncul di album juga muncul di direktori berbasis tanggal. Ini berarti bisa terjadi duplikasi tampilan — foto yang sama terdaftar di bawah `media/by-year/2024/` dan di bawah `album/Vacation/`. Selama migrasi, Anda sebaiknya memilih satu pendekatan pengorganisasian untuk menghindari penyalinan berkas dua kali.

## Menyiapkan Kedua Remote

### Menambahkan Google Photos

1. Buka RcloneView dan klik **+ New Remote**.
2. Pilih **Google Photos** dari daftar provider.
3. Ikuti alur OAuth — Anda akan diarahkan ke Google untuk memberi otorisasi akses. Berikan izin baca-saja ke pustaka foto Anda.
4. Beri nama remote (misalnya, `MyGooglePhotos`) dan simpan.

### Menambahkan OneDrive

1. Klik **+ New Remote** lagi.
2. Pilih **Microsoft OneDrive** dari daftar provider.
3. Ikuti alur OAuth untuk memberi otorisasi akses ke akun OneDrive Anda.
4. Pilih tipe drive (Personal, Business, atau SharePoint).
5. Beri nama remote (misalnya, `MyOneDrive`) dan simpan.

Kedua remote sekarang muncul di Explorer RcloneView.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## Merencanakan Struktur Folder Anda di OneDrive

Sebelum mentransfer, tentukan bagaimana Anda ingin foto Anda diorganisasikan di OneDrive. Anda memiliki beberapa opsi:

### Opsi 1: Mencerminkan Struktur Berbasis Tahun

Salin direktori `media/by-year/` dari Google Photos ke folder `Photos/` di OneDrive. Struktur OneDrive Anda akan terlihat seperti ini:

```
Photos/
  2020/
  2021/
  2022/
  2023/
  2024/
  2025/
  2026/
```

Ini adalah pendekatan paling sederhana dan bekerja dengan baik dengan fitur foto bawaan OneDrive, yang dapat menampilkan gambar dalam tampilan linimasa.

### Opsi 2: Menggunakan Pengorganisasian Berbasis Bulan

Salin `media/by-month/` untuk pengorganisasian yang lebih terperinci:

```
Photos/
  2024/
    2024-01/
    2024-02/
    ...
  2025/
    2025-01/
    ...
```

Ini berguna jika Anda memiliki pustaka besar dan ingin dengan cepat menemukan foto dari bulan tertentu.

### Opsi 3: Pengorganisasian Berbasis Album

Jika Anda telah mengorganisasikan Google Photos Anda ke dalam album dengan cermat, salin direktori `album/`:

```
Photos/Albums/
  Vacation 2024/
  Birthday Party/
  Work Events/
```

Perhatikan bahwa migrasi berbasis album mungkin melewatkan foto yang tidak pernah ditambahkan ke album mana pun. Untuk migrasi yang lengkap, gabungkan ini dengan salah satu pendekatan berbasis tanggal.

### Pendekatan yang Direkomendasikan

Bagi kebanyakan pengguna, **Opsi 1 (berbasis tahun) adalah titik awal terbaik**. Ini mencakup setiap foto dalam struktur kronologis yang rapi. Jika album penting bagi Anda, jalankan proses kedua yang menyalin hanya direktori `album/` ke folder terpisah di OneDrive.

## Menjalankan Migrasi

Dengan kedua remote sudah disiapkan dan strategi folder Anda sudah ditentukan, mulailah transfer.

### Langkah 1: Telusuri dan Pratinjau

Buka Google Photos di satu panel Explorer dan OneDrive di panel lainnya. Navigasikan melalui struktur direktori Google Photos untuk memastikan Anda dapat melihat foto Anda diorganisasikan berdasarkan tahun, bulan, dan album.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

### Langkah 2: Buat Folder Tujuan

Di panel OneDrive, buat folder `Photos` (atau nama apa pun yang Anda pilih) untuk berfungsi sebagai target migrasi.

### Langkah 3: Mulai dengan Batch Uji Coba

Sebelum memigrasikan seluruh pustaka Anda, uji dengan satu tahun terlebih dahulu:

1. Di panel Google Photos, navigasikan ke `media/by-year/2025/` (atau tahun terbaru mana pun dengan jumlah foto yang dapat dikelola).
2. Seret folder tersebut ke direktori `Photos/` di OneDrive.
3. Pantau transfer untuk memastikan foto tiba dengan benar.
4. Buka beberapa foto yang telah ditransfer di OneDrive untuk memverifikasi bahwa foto tersebut ditampilkan dengan benar dan mempertahankan kualitasnya.

### Langkah 4: Jalankan Migrasi Penuh

Setelah uji coba berhasil, transfer sisa tahun-tahun lainnya:

1. Buat pekerjaan **Copy** dari `media/by-year/` di Google Photos ke `Photos/` di OneDrive.
2. Jalankan **Dry Run** terlebih dahulu untuk melihat jumlah total berkas dan perkiraan volume transfer.
3. Eksekusi pekerjaan penyalinan.

Untuk pustaka besar (10.000+ foto), ini bisa memakan waktu beberapa jam. RcloneView akan menampilkan kemajuan secara real time.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

### Langkah 5: Migrasikan Album (Opsional)

Jika Anda juga ingin struktur album Anda ada di OneDrive:

1. Buat pekerjaan penyalinan kedua dari `album/` di Google Photos ke `Photos/Albums/` di OneDrive.
2. Jalankan penyalinan. Perhatikan bahwa ini akan membuat salinan duplikat dari foto yang sudah ada di folder berbasis tahun. Jika penyimpanan menjadi perhatian, Anda mungkin ingin melewati langkah ini atau menyalin hanya album tertentu secara selektif.

## Memahami Metadata dan Format Berkas

### Apa yang Ditransfer

- **Foto dan video resolusi asli** — berkas ditransfer pada kualitas aslinya, bukan versi "Storage saver" yang terkompresi.
- **Nama berkas** — nama berkas kamera asli dipertahankan (misalnya, `IMG_20240615_143022.jpg`).
- **Tanggal berkas** — stempel waktu pembuatan dan modifikasi dipertahankan di mana format mendukungnya.

### Apa yang Tidak Ditransfer

- **Metadata Google Photos** — deskripsi, tag, data pengenalan wajah, dan informasi lokasi yang tersimpan di basis data Google Photos tidak ditransfer. Metadata ini bersifat proprietary milik platform Google.
- **Pengeditan yang dilakukan di Google Photos** — jika Anda mengedit foto di Google Photos (dipotong, diberi filter, dll.), hanya versi asli yang belum diedit yang tersedia melalui API. Versi yang telah diedit tidak dapat diakses.
- **Konteks album bersama** — foto yang dibagikan kepada Anda oleh orang lain mungkin dapat diakses atau tidak, tergantung pada pengaturan berbagi Google.

### Data EXIF

Kabar baiknya adalah sebagian besar metadata penting tertanam langsung di dalam berkas foto sebagai data EXIF. Ini mencakup:

- **Tanggal dan waktu** foto diambil.
- **Model kamera** dan pengaturan (aperture, kecepatan rana, ISO).
- **Koordinat GPS** (jika lokasi diaktifkan saat foto diambil).

Data EXIF ini ikut ditransfer bersama berkas dan dapat dibaca oleh OneDrive, Windows Photos, dan hampir semua aplikasi manajemen foto.

## Memverifikasi Migrasi

Setelah transfer selesai, verifikasi bahwa semuanya tiba dengan benar.

### Perbandingan Folder

Gunakan fitur **Compare** RcloneView:

1. Buka Google Photos di satu panel dan OneDrive di panel lainnya.
2. Navigasikan ke direktori yang cocok (misalnya, `media/by-year/2024/` dan `Photos/2024/`).
3. Jalankan perbandingan untuk mengidentifikasi berkas mana pun yang ada di Google Photos tetapi hilang dari OneDrive.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folder contents" class="img-large img-center" />

### Periksa Foto Secara Acak

Buka beberapa foto yang telah ditransfer di OneDrive untuk memastikan:

- Gambar ditampilkan dengan benar dan tidak rusak.
- Video dapat diputar dengan baik.
- Ukuran berkas sesuai dengan ekspektasi (JPEG 5MB di Google Photos seharusnya kurang lebih 5MB di OneDrive).

### Tinjau Riwayat Pekerjaan

Periksa panel **Job History** untuk kesalahan apa pun selama transfer. Masalah umum meliputi:

- **Berkas yang dilewati (skipped)** karena karakter yang tidak didukung dalam nama berkas.
- **Kesalahan timeout** untuk berkas video yang sangat besar.
- **Pembatasan laju (rate limiting)** dari API Google (jarang terjadi tetapi mungkin terjadi pada pustaka yang sangat besar).

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="job history" class="img-large img-center" />

## Tips untuk Migrasi yang Lancar

- **Jalankan migrasi selama jam-jam sepi (off-peak).** Pustaka foto besar dapat memakan waktu berjam-jam untuk ditransfer. Memulai pada malam hari memberikan waktu tanpa gangguan bagi proses tersebut.
- **Gunakan penjadwalan untuk pustaka yang sangat besar.** Jika Anda memiliki 50.000+ foto, buat pekerjaan terjadwal yang berjalan setiap hari. Setiap kali dijalankan, proses akan melanjutkan dari titik terakhir, dan migrasi selesai dalam beberapa hari tanpa Anda perlu memantaunya terus-menerus.
- **Jangan hapus Google Photos dulu.** Pertahankan pustaka Google Photos Anda tetap utuh sampai Anda sepenuhnya memverifikasi salinan OneDrive. Google Photos bagaimanapun bersifat baca-saja melalui API, sehingga tidak ada risiko penghapusan tidak sengaja dari RcloneView.
- **Periksa batas penyimpanan OneDrive.** Pastikan paket OneDrive Anda memiliki cukup ruang untuk seluruh pustaka foto Anda. Microsoft 365 Personal menyertakan 1 TB, dan paket Family menawarkan hingga 6 TB yang dibagikan.
- **Pertimbangkan integrasi camera roll OneDrive.** Setelah migrasi, Anda dapat mengatur aplikasi seluler OneDrive untuk secara otomatis mengunggah foto baru. Ini menciptakan transisi yang mulus dari Google Photos ke depannya.
- **Perhatikan batas laju API Google.** API Google Photos memiliki kuota penggunaan. Jika Anda mencapai batas laju, RcloneView akan mencoba ulang secara otomatis, tetapi transfer mungkin melambat sementara.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Hubungkan Google Photos** melalui OAuth di wizard New Remote (akses baca-saja).
3. **Hubungkan OneDrive** melalui OAuth.
4. **Telusuri, salin, dan verifikasi** — kenangan foto Anda, dimigrasikan dengan aman.

Foto Anda tidak tergantikan. RcloneView memastikan foto-foto tersebut tiba dengan aman di OneDrive.

---

**Panduan Terkait:**

- [Menambahkan Login Online OAuth](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [Membandingkan Isi Folder](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Menjalankan dan Mengelola Pekerjaan](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)

<CloudSupportGrid />
