---
slug: rcloneview-manjaro-linux-cloud-sync
title: "Instal dan Gunakan RcloneView di Manjaro Linux untuk Sinkronisasi Cloud"
authors:
  - tayson
description: "Manjaro Linux menghadirkan kekuatan Arch dengan pengaturan bawaan yang ramah pengguna. Pelajari cara menginstal RcloneView di Manjaro menggunakan pamac, pacman, atau AppImage untuk sinkronisasi file multi-cloud, mounting, dan pencadangan yang mulus."
keywords:
  - rcloneview manjaro linux
  - manjaro cloud sync
  - install rcloneview manjaro
  - manjaro rclone gui
  - arch linux cloud storage
  - manjaro pamac rcloneview
  - manjaro cloud backup
  - manjaro mount cloud drive
  - rcloneview appimage manjaro
  - manjaro aur rcloneview
tags:
  - linux
  - platform
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Instal dan Gunakan RcloneView di Manjaro Linux untuk Sinkronisasi Cloud

> Manjaro mengambil kekuatan rolling-release dari Arch Linux dan membungkusnya dalam paket yang ramah desktop. Menambahkan RcloneView memberi Anda pengelola file multi-cloud visual yang cocok secara alami dengan filosofi Manjaro dalam membuat alat yang canggih menjadi mudah diakses.

Manjaro Linux telah berkembang menjadi salah satu distribusi berbasis Arch yang paling populer, menawarkan model rolling-release dan akses ke AUR (Arch User Repository) sambil memberikan pengalaman instalasi dan konfigurasi yang lebih mudah didekati. Baik Anda menjalankan Manjaro dengan XFCE, KDE Plasma, atau GNOME, Anda mendapatkan akses ke paket perangkat lunak terbaru dan komunitas yang menghargai pilihan dan kontrol. RcloneView melengkapi ini dengan memberikan pengguna Manjaro antarmuka grafis untuk mengelola file di lebih dari 70 penyedia penyimpanan cloud — Google Drive, OneDrive, Dropbox, AWS S3, Backblaze B2, Wasabi, dan banyak lagi. Panduan ini membahas instalasi, penyiapan remote cloud, sinkronisasi file, mounting drive, dan penjadwalan tugas di Manjaro.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Manjaro untuk Pengelolaan File Cloud

Manjaro menawarkan beberapa keunggulan sebagai platform untuk menjalankan RcloneView:

- **Rilis rolling** — Anda selalu memiliki akses ke versi terbaru rclone dan pustaka sistem tanpa harus menunggu siklus upgrade distribusi.
- **Akses AUR** — Arch User Repository menyediakan paket yang dikelola komunitas yang tidak tersedia di repositori resmi, memperluas pilihan instalasi Anda.
- **Deteksi perangkat keras** — alat mhwd milik Manjaro secara otomatis mengonfigurasi driver, yang penting untuk lingkungan desktop yang dipercepat GPU di mana pengalaman GUI yang mulus bergantung pada pengaturan driver yang tepat.
- **Berbagai lingkungan desktop** — baik Anda lebih menyukai KDE Plasma, XFCE, GNOME, atau pengelola jendela tiling, RcloneView berjalan di semuanya melalui kompatibilitas GTK/Qt standar.
- **Komunitas aktif** — forum dan wiki Manjaro menyediakan sumber daya pemecahan masalah khusus untuk keunikan konfigurasi distribusi ini.

## Prasyarat

Sebelum menginstal RcloneView di Manjaro, pastikan Anda memiliki:

- Manjaro Linux (edisi apa pun — XFCE, KDE, GNOME, atau edisi komunitas)
- Koneksi internet yang berfungsi
- Setidaknya 512 MB ruang disk kosong
- Akun dengan satu atau lebih penyedia penyimpanan cloud (Google Drive, OneDrive, S3, dll.)
- Pemahaman dasar tentang terminal (meskipun sebagian besar operasi akan dilakukan di GUI)

Perbarui sistem Anda terlebih dahulu untuk memastikan semua paket sudah terkini:

```bash
sudo pacman -Syu
```

Atau menggunakan pengelola paket grafis Manjaro, pamac:

```bash
pamac update
```

## Menginstal RcloneView di Manjaro

Manjaro memberi Anda beberapa jalur untuk menginstal RcloneView. Pilih yang paling sesuai dengan alur kerja Anda.

### Opsi 1: AppImage (Direkomendasikan untuk Sebagian Besar Pengguna)

AppImage adalah metode instalasi paling sederhana. Ini menggabungkan semua yang dibutuhkan RcloneView ke dalam satu file yang dapat dieksekusi — tidak diperlukan pengelolaan dependensi.

1. Unduh AppImage RcloneView terbaru dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Jadikan dapat dieksekusi:

```bash
chmod +x RcloneView-*.AppImage
```

3. Jalankan:

```bash
./RcloneView-*.AppImage
```

Untuk mengintegrasikan AppImage ke dalam menu aplikasi Anda, gunakan alat seperti AppImageLauncher, yang tersedia di repositori Manjaro:

```bash
sudo pacman -S appimagelauncher
```

Setelah terinstal, klik dua kali pada AppImage akan meminta Anda untuk mengintegrasikannya ke lingkungan desktop Anda.

### Opsi 2: Instal melalui pamac (AUR)

Pengelola paket pamac milik Manjaro dapat menginstal paket AUR secara langsung. Pertama, pastikan dukungan AUR diaktifkan di pamac:

1. Buka **Add/Remove Software** (GUI pamac).
2. Buka **Preferences > Third Party** dan aktifkan dukungan AUR.
3. Cari `rcloneview` dan instal.

Atau dari terminal:

```bash
pamac build rcloneview
```

pamac menangani resolusi dependensi secara otomatis, menarik pustaka apa pun yang diperlukan.

### Opsi 3: Instal rclone Secara Terpisah dan Gunakan AppImage

Jika Anda menginginkan versi rclone terbaru yang dikelola melalui pacman sambil menggunakan AppImage untuk GUI:

```bash
sudo pacman -S rclone fuse3
```

Kemudian unduh dan jalankan AppImage RcloneView. RcloneView akan mendeteksi rclone yang terinstal di sistem dan menggunakannya.

### Memverifikasi Instalasi

Setelah instalasi, jalankan RcloneView dari menu aplikasi atau terminal Anda. Anda akan melihat jendela utama dengan panel remote explorer dan pengelolaan tugas. Jika Anda menginstal rclone secara terpisah, verifikasi bahwa rclone terdeteksi:

```bash
rclone version
```

## Menambahkan Remote Cloud

Setelah RcloneView berjalan, langkah pertama adalah menghubungkan akun penyimpanan cloud Anda. RcloneView menyediakan penyiapan terpandu untuk setiap penyedia.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

### Google Drive

1. Klik **New Remote** di antarmuka RcloneView.
2. Pilih **Google Drive** dari daftar penyedia.
3. Ikuti alur autentikasi OAuth — jendela browser akan terbuka agar Anda dapat masuk dan memberikan akses.
4. Pilih cakupan akses Anda (akses drive penuh, akses tingkat file, atau hanya baca).
5. Simpan remote.

### OneDrive

1. Klik **New Remote** dan pilih **Microsoft OneDrive**.
2. Autentikasi melalui alur OAuth Microsoft di browser Anda.
3. Pilih antara OneDrive pribadi, OneDrive for Business, atau SharePoint.
4. Simpan remote.

### Penyimpanan Kompatibel S3 (AWS, Wasabi, Backblaze B2, MinIO)

1. Klik **New Remote** dan pilih penyedia kompatibel S3 Anda.
2. Masukkan Access Key ID dan Secret Access Key Anda.
3. Tentukan region dan endpoint (untuk penyedia non-AWS seperti Wasabi atau MinIO, URL endpoint diperlukan).
4. Simpan remote.

Anda dapat menambahkan sebanyak mungkin remote yang Anda butuhkan. Semua remote yang dikonfigurasi muncul di sidebar untuk akses cepat.

## Menelusuri dan Menyinkronkan File

Setelah remote Anda dikonfigurasi, explorer dua panel milik RcloneView memungkinkan Anda menelusuri file lokal dan cloud secara berdampingan. Anda dapat menavigasi struktur folder, melihat pratinjau detail file, dan memulai transfer dengan drag-and-drop atau tombol toolbar.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

### Menyalin File

Pilih file atau folder di satu panel dan salin ke lokasi panel lainnya. Ini berfungsi untuk:

- **Lokal ke cloud** — mengunggah file dari sistem file Manjaro Anda ke remote cloud mana pun yang terhubung.
- **Cloud ke lokal** — mengunduh file dari penyimpanan cloud ke disk lokal Anda.
- **Cloud ke cloud** — mentransfer file secara langsung antara dua penyedia cloud tanpa perlu mengunduh ke mesin lokal Anda terlebih dahulu.

### Menyinkronkan Folder

Untuk sinkronisasi yang berkelanjutan, buat tugas sinkronisasi yang menjaga dua lokasi tetap sinkron:

1. Buka folder sumber di panel kiri dan tujuan di panel kanan.
2. Klik **Sync** dan konfigurasikan arah sinkronisasi (satu arah atau mirror).
3. Tinjau perbandingan untuk melihat file mana yang akan ditambahkan, diperbarui, atau dihapus.
4. Jalankan sinkronisasi.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

## Melakukan Mounting Penyimpanan Cloud sebagai Drive Lokal

RcloneView dapat me-mount remote cloud mana pun sebagai direktori sistem file lokal di Manjaro. Ini memungkinkan Anda mengakses file cloud melalui pengelola file Anda (Thunar, Dolphin, Nautilus) atau aplikasi apa pun seolah-olah file tersebut berada di drive lokal.

### Menyiapkan Mount

1. Pastikan FUSE terinstal:

```bash
sudo pacman -S fuse3
```

2. Di RcloneView, klik kanan remote atau navigasikan ke Mount Manager.
3. Pilih titik mount lokal (misalnya, `~/CloudDrive/GoogleDrive`).
4. Konfigurasikan opsi mount — pengaturan cache, hanya baca atau baca-tulis, mode VFS cache.
5. Klik **Mount**.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure a mount from Mount Manager" class="img-large img-center" />

Drive yang di-mount muncul di pengelola file Anda dan dapat diakses oleh semua aplikasi. Misalnya, Anda dapat mengarahkan pemutar media ke folder Google Drive yang di-mount atau membuka file CAD langsung dari bucket S3 yang di-mount.

### Tips Performa Mount di Manjaro

- **Gunakan mode VFS cache "full"** untuk performa terbaik dengan aplikasi yang melakukan pembacaan acak (editor dokumen, pemutar media).
- **Tetapkan direktori cache pada penyimpanan cepat** — jika Anda memiliki SSD NVMe, arahkan VFS cache ke sana untuk akses yang lebih cepat.
- **Tingkatkan waktu cache direktori** untuk remote dengan struktur folder besar guna mengurangi panggilan API.

## Menjadwalkan Tugas Sinkronisasi Otomatis

Untuk pencadangan dan sinkronisasi yang berkelanjutan, penjadwal tugas milik RcloneView memungkinkan Anda menentukan operasi sinkronisasi berulang yang berjalan secara otomatis.

1. Buat tugas sinkronisasi dengan memilih remote dan folder sumber serta tujuan.
2. Buka penjadwal tugas dan tetapkan frekuensinya — per jam, harian, mingguan, atau ekspresi cron kustom.
3. Aktifkan jadwal dan biarkan RcloneView menangani sisanya.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

Pola penjadwalan umum untuk pengguna Manjaro:

- **Pencadangan harian dari ~/Documents ke Google Drive** — berjalan setiap malam untuk menjaga dokumen Anda tetap tercermin di cloud.
- **Sinkronisasi mingguan folder proyek ke S3** — menjaga pencadangan off-site untuk file proyek berukuran besar.
- **Sinkronisasi per jam folder tim bersama** di berbagai penyedia cloud untuk redundansi.

## Pemecahan Masalah Khusus Manjaro

### Izin FUSE

Jika mounting gagal dengan error izin, pastikan pengguna Anda berada dalam grup `fuse`:

```bash
sudo usermod -aG fuse $USER
```

Keluar dan masuk kembali agar perubahan grup berlaku.

### Pemuatan Modul Kernel

Pada beberapa instalasi Manjaro, modul kernel FUSE mungkin tidak dimuat secara otomatis. Muat secara manual:

```bash
sudo modprobe fuse
```

Untuk membuat ini permanen, tambahkan `fuse` ke `/etc/modules-load.d/fuse.conf`.

### Rendering Font AppImage

Jika font terlihat tidak sesuai pada versi AppImage, instal paket font yang diperlukan:

```bash
sudo pacman -S noto-fonts ttf-liberation
```

### Autentikasi Browser OAuth

Jika jendela browser OAuth tidak terbuka secara otomatis selama penyiapan remote, periksa apakah `xdg-open` telah dikonfigurasi dengan benar:

```bash
xdg-settings get default-web-browser
```

Jika tidak ada browser default yang diatur, konfigurasikan satu melalui pengaturan lingkungan desktop Anda.

## Memulai

1. **Perbarui Manjaro** — jalankan `sudo pacman -Syu` untuk memastikan sistem Anda terkini.
2. **Instal RcloneView** — gunakan AppImage untuk kesederhanaan atau pamac untuk integrasi AUR.
3. **Tambahkan remote cloud Anda** — hubungkan Google Drive, OneDrive, S3, atau penyedia lainnya.
4. **Telusuri, salin, dan sinkronkan** file menggunakan explorer dua panel.
5. **Mount penyimpanan cloud** sebagai drive lokal untuk akses yang mulus dari aplikasi mana pun.
6. **Jadwalkan pencadangan otomatis** untuk menjaga data Anda tetap terlindungi tanpa upaya manual.

Manjaro memberi Anda desktop Linux yang canggih dan selalu terkini. RcloneView memberi Anda pengelola file cloud yang canggih dan selalu terkini. Bersama-sama, keduanya mencakup seluruh spektrum mulai dari file lokal hingga penyimpanan multi-cloud tanpa memerlukan satu pun perintah baris komando.

---

**Panduan Terkait:**

- [Menambahkan Remote Storage (Contoh Google Drive)](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [Melakukan Mounting Penyimpanan Cloud sebagai Drive Lokal](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [Penjadwalan dan Eksekusi Tugas](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
