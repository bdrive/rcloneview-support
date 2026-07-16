---
slug: rcloneview-steam-deck-cloud-sync
title: "Gunakan RcloneView di Steam Deck untuk Penyimpanan Cloud dan Pencadangan Game"
authors:
  - tayson
description: "SSD Steam Deck yang terbatas membuat penyimpanan cloud menjadi hal penting. Pelajari cara menginstal RcloneView di Steam Deck untuk mencadangkan save game, menyinkronkan screenshot dan rekaman ke Google Drive, OneDrive, atau S3, dan membebaskan ruang di perangkat genggam Anda."
keywords:
  - penyimpanan cloud steam deck
  - pencadangan game steam deck
  - rcloneview steam deck
  - sinkronisasi google drive steam deck
  - pencadangan onedrive steam deck
  - pencadangan save cloud steam deck
  - instalasi rcloneview steamos
  - sinkronisasi screenshot steam deck
  - file manager steam deck
  - penyimpanan cloud eksternal steam deck
tags:
  - linux
  - platform
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gunakan RcloneView di Steam Deck untuk Penyimpanan Cloud dan Pencadangan Game

> Steam Deck mengemas PC lengkap ke dalam perangkat genggam — namun SSD 64 GB, 256 GB, atau 512 GB miliknya cepat penuh. Penyimpanan cloud mengubah Deck Anda menjadi perangkat dengan kapasitas yang praktis tidak terbatas untuk pencadangan game, screenshot, rekaman, dan lainnya.

Steam Deck buatan Valve menjalankan SteamOS, distribusi Linux berbasis Arch dengan mode desktop KDE Plasma kustom. Meskipun fitur Steam Cloud bawaan menangani beberapa game, fitur ini tidak mencakup game non-Steam, game hasil emulasi, konfigurasi mod, cache shader, atau screenshot dan rekaman gameplay yang menumpuk seiring waktu. SSD yang terbatas membuat manajemen penyimpanan menjadi perhatian yang terus-menerus. RcloneView memberi pengguna Steam Deck sebuah file manager multi-cloud berbasis grafis untuk mencadangkan save game ke Google Drive, OneDrive, atau S3, menyinkronkan screenshot dan rekaman ke penyimpanan cloud, dan memindahkan file besar untuk membebaskan ruang di drive internal. Panduan ini membahas instalasi di Desktop Mode, konfigurasi remote cloud, dan alur kerja praktis untuk menjaga data Steam Deck Anda tetap aman dan penyimpanan tetap lega.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Penyimpanan Cloud di Steam Deck

Steam Deck adalah PC gaming yang mumpuni, namun keterbatasan penyimpanannya menimbulkan masalah nyata:

- **Ruang SSD cepat penuh** — game modern dapat melebihi 50-100 GB masing-masing. Bahkan model 512 GB pun penuh setelah menginstal beberapa judul AAA.
- **Steam Cloud tidak mencakup semuanya** — banyak game tidak mendukung save Steam Cloud. Game non-Steam (GOG, Epic melalui compatibility layer, judul hasil emulasi) sama sekali tidak memiliki pencadangan cloud bawaan.
- **Screenshot dan rekaman menumpuk** — Deck memudahkan pengambilan screenshot dan perekaman gameplay, tetapi file-file ini memakan penyimpanan Anda yang terbatas.
- **Konfigurasi mod rentan hilang** — jika Anda memodifikasi game di Deck, konfigurasi tersebut tersimpan di filesystem lokal dan dapat hilang saat pembaruan SteamOS atau reset pabrik.
- **Tidak ada pencadangan eksternal otomatis** — Steam Deck tidak memiliki mekanisme bawaan untuk mencadangkan file apa pun ke penyimpanan cloud eksternal.

RcloneView mengatasi masalah-masalah ini dengan menghubungkan Steam Deck Anda ke penyedia cloud utama mana pun, memberi Anda kemampuan untuk mendorong file ke cloud sesuai permintaan atau terjadwal.

## Beralih ke Desktop Mode

Semua instalasi dan konfigurasi dilakukan di Desktop Mode Steam Deck. Untuk beralih:

1. Tekan tombol **Steam** pada Deck Anda.
2. Navigasikan ke **Power > Switch to Desktop**.
3. Deck akan reboot ke desktop KDE Plasma lengkap dengan taskbar, file manager (Dolphin), dan terminal (Konsole).

Desktop Mode memberi Anda lingkungan desktop Linux yang lengkap. Anda dapat menggunakan layar sentuh, trackpad, atau menyambungkan keyboard dan mouse melalui USB-C atau Bluetooth untuk pengalaman yang lebih nyaman.

## Menginstal RcloneView di Steam Deck

Secara default, SteamOS memiliki filesystem root yang bersifat read-only, yang membatasi instalasi paket secara tradisional. Dua pendekatan terbaik untuk menginstal software adalah Flatpak (metode yang didukung secara resmi) dan AppImage.

### Opsi 1: AppImage (Direkomendasikan)

Metode AppImage adalah yang paling sederhana dan bekerja tanpa memodifikasi sistem:

1. Buka browser **Firefox** di Desktop Mode (sudah terpasang di SteamOS).
2. Navigasikan ke [rcloneview.com](https://rcloneview.com/src/download.html) dan unduh AppImage Linux.
3. Buka **Dolphin** (file manager) dan navigasikan ke folder Downloads Anda.
4. Klik kanan pada file AppImage, pilih **Properties > Permissions**, lalu centang **Is Executable**.
5. Klik dua kali untuk menjalankannya.

Alternatifnya, dari Konsole (terminal):

```bash
chmod +x ~/Downloads/RcloneView-*.AppImage
~/Downloads/RcloneView-*.AppImage
```

Pindahkan AppImage ke lokasi permanen agar folder Downloads Anda tetap rapi:

```bash
mkdir -p ~/Applications
mv ~/Downloads/RcloneView-*.AppImage ~/Applications/
```

Untuk menambahkan RcloneView ke menu aplikasi Anda, buat desktop entry:

```bash
cat > ~/.local/share/applications/rcloneview.desktop << 'EOF'
[Desktop Entry]
Name=RcloneView
Exec=/home/deck/Applications/RcloneView-latest.AppImage
Icon=rcloneview
Type=Application
Categories=Utility;FileManager;
EOF
```

Ganti nama file dengan nama file AppImage Anda yang sebenarnya.

### Opsi 2: Menonaktifkan Filesystem Read-Only (Lanjutan)

Jika Anda ingin menginstal paket melalui pacman (seperti pada sistem Arch biasa), Anda dapat menonaktifkan filesystem read-only:

```bash
sudo steamos-readonly disable
sudo pacman-key --init
sudo pacman-key --populate archlinux
sudo pacman -Syu rclone fuse3
```

**Peringatan:** Menonaktifkan filesystem read-only berarti pembaruan SteamOS dapat menimpa perubahan Anda. Metode AppImage lebih tahan lama saat terjadi pembaruan sistem.

### Memverifikasi Instalasi

Jalankan RcloneView. Anda akan melihat antarmuka utama dengan remote explorer. Jika Anda menggunakan layar sentuh, antarmuka ini cukup responsif untuk navigasi dasar, meskipun mouse tetap disarankan untuk sesi manajemen file yang lebih lama.

## Menghubungkan Akun Penyimpanan Cloud

Dengan RcloneView berjalan di Desktop Mode, tambahkan penyedia penyimpanan cloud Anda.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

### Google Drive

1. Klik **New Remote** dan pilih **Google Drive**.
2. Alur OAuth akan terbuka di Firefox. Masuk dengan akun Google Anda dan berikan izin akses.
3. Simpan remote tersebut. Seluruh Google Drive Anda kini dapat diakses dari RcloneView.

### OneDrive

1. Klik **New Remote** dan pilih **Microsoft OneDrive**.
2. Autentikasi melalui halaman login Microsoft di Firefox.
3. Pilih OneDrive personal atau OneDrive for Business.
4. Simpan remote tersebut.

### Penyimpanan Kompatibel S3 (Backblaze B2, Wasabi, AWS)

1. Klik **New Remote** dan pilih penyedia S3 Anda.
2. Masukkan Access Key dan Secret Key Anda.
3. Tentukan region dan endpoint.
4. Simpan remote tersebut.

Bagi pengguna Steam Deck, Google Drive dan OneDrive adalah pilihan paling umum karena banyak gamer sudah memiliki akun ini. Penyedia yang kompatibel dengan S3 seperti Backblaze B2 atau Wasabi menawarkan penyimpanan massal yang hemat biaya untuk arsip pencadangan game berukuran besar.

## Mencadangkan Save Game

Ini adalah kasus penggunaan utama bagi sebagian besar pengguna Steam Deck. File save game berukuran kecil namun tidak tergantikan. Berikut cara mencadangkannya dengan RcloneView.

### Mencari File Save

Save game Steam di Deck biasanya ditemukan di:

- **Save Steam Proton:** `~/.local/share/Steam/steamapps/compatdata/[APPID]/pfx/drive_c/users/steamuser/`
- **Save Linux native:** `~/.local/share/[GameName]/` atau `~/.config/[GameName]/`
- **Save game hasil emulasi:** tergantung emulatornya (save RetroArch biasanya ada di `~/.config/retroarch/saves/`)

### Membuat Job Pencadangan Save

1. Di RcloneView, buka filesystem lokal Anda di panel kiri dan navigasikan ke folder save Anda.
2. Buka remote cloud Anda di panel kanan dan buat folder tujuan (misalnya, `SteamDeck/Saves/`).
3. Pilih file atau folder save dan salin ke cloud.

Untuk perlindungan berkelanjutan, buat job sinkronisasi:

1. Atur sumber ke direktori save lokal Anda.
2. Atur tujuan ke folder pencadangan cloud Anda.
3. Jadwalkan job untuk berjalan harian atau pada frekuensi apa pun sesuai preferensi Anda.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

Dengan cara ini, setiap kali Anda selesai bermain dan beralih ke Desktop Mode, save terbaru Anda otomatis didorong ke cloud (atau Anda dapat menjalankan job secara manual sebelum beralih kembali ke Gaming Mode).

## Menyinkronkan Screenshot dan Rekaman

Steam Deck menyimpan screenshot di `~/.local/share/Steam/userdata/[USERID]/760/remote/[APPID]/screenshots/`. Rekaman gameplay (jika Anda menggunakan alat seperti OBS di Desktop Mode) dapat disimpan di mana pun Anda mengonfigurasinya.

### Menyiapkan Sinkronisasi Screenshot

1. Di RcloneView, navigasikan ke direktori screenshot Anda di panel kiri.
2. Buka folder tujuan cloud (misalnya, `SteamDeck/Screenshots/`) di panel kanan.
3. Buat job sinkronisasi untuk mendorong screenshot baru ke cloud.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

Screenshot biasanya berukuran kecil (1-5 MB masing-masing), sehingga job sinkronisasi selesai dengan cepat bahkan pada koneksi internet yang sederhana. Untuk rekaman gameplay, yang dapat berukuran ratusan megabyte atau beberapa gigabyte masing-masing, pertimbangkan untuk menjadwalkan unggahan saat Deck terpasang di dok dan terhubung ke Wi-Fi.

### Membebaskan Ruang Setelah Unggah

Setelah screenshot dan rekaman aman tersimpan di cloud, Anda dapat menghapus salinan lokalnya untuk mendapatkan kembali ruang SSD. Operasi move RcloneView (berbeda dengan copy) mentransfer file dan menghapus sumbernya dalam satu langkah. Gunakan dengan hati-hati — pastikan salinan cloud sudah ada sebelum menghapus file lokal.

## Mengelola Penyimpanan pada SSD yang Terbatas

Selain mencadangkan save dan media, RcloneView membantu manajemen penyimpanan yang lebih luas di Steam Deck:

- **Arsipkan data game lama** — sudah menyelesaikan sebuah game dan ingin menyimpan save-nya tetapi mendapatkan kembali ruangnya? Sinkronkan data save ke cloud, lalu uninstall game tersebut. Jika Anda menginstal ulang nanti, kembalikan save dari cloud.
- **Pindahkan file mod** — paket mod berukuran besar (perombakan tekstur, konversi total) dapat dicadangkan ke penyimpanan cloud dan diunduh ulang saat dibutuhkan.
- **Mount penyimpanan cloud untuk media** — mount folder Google Drive atau OneDrive sebagai direktori lokal dan streaming media (musik, video) dari cloud tanpa menyimpannya di SSD.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />

### Mount Penyimpanan Cloud di Steam Deck

Untuk mount remote cloud sebagai filesystem lokal:

1. Pastikan FUSE tersedia. Pada SteamOS default, dukungan FUSE biasanya sudah tersedia. Jika belum:

```bash
sudo steamos-readonly disable
sudo pacman -S fuse3
sudo steamos-readonly enable
```

2. Di RcloneView, klik kanan pada sebuah remote dan pilih **Mount**, atau gunakan Mount Manager.
3. Pilih mount point (misalnya, `~/CloudDrive/`).
4. Konfigurasikan pengaturan cache — gunakan mode VFS cache "full" untuk pengalaman terbaik dengan file media.

Drive yang di-mount akan muncul di Dolphin dan dapat diakses oleh aplikasi apa pun. Anda dapat, misalnya, mengarahkan pemutar media ke folder cloud yang di-mount untuk streaming perpustakaan musik Anda tanpa menggunakan ruang SSD sama sekali.

## Alur Kerja Praktis bagi Pengguna Steam Deck

### Sebelum Bepergian

1. Beralih ke Desktop Mode.
2. Jalankan job pencadangan save Anda untuk mendorong save terbaru ke cloud.
3. Verifikasi pencadangan selesai di riwayat job RcloneView.
4. Beralih kembali ke Gaming Mode.

### Setelah Sesi Bermain Game

1. Beralih ke Desktop Mode.
2. Jalankan sinkronisasi screenshot untuk mendorong tangkapan baru ke cloud.
3. Opsional: hapus screenshot lokal untuk membebaskan ruang.
4. Beralih kembali ke Gaming Mode.

### Setelah Pembaruan SteamOS atau Reset Pabrik

1. Beralih ke Desktop Mode.
2. Instal ulang RcloneView (metode AppImage hanya butuh beberapa detik).
3. Konfigurasikan ulang remote cloud Anda (atau kembalikan file konfigurasi rclone jika Anda sudah mencadangkannya ke cloud).
4. Tarik kembali file save Anda dari cloud.
5. Lanjutkan bermain game.

Untuk mempercepat pemulihan, cadangkan juga file konfigurasi rclone Anda (`~/.config/rclone/rclone.conf`) ke cloud. File ini berisi definisi remote Anda dan dapat dipulihkan untuk langsung menyambungkan kembali semua akun cloud Anda.

## Memulai

1. **Beralih ke Desktop Mode** di Steam Deck Anda.
2. **Unduh AppImage RcloneView** dan jadikan dapat dieksekusi.
3. **Tambahkan akun cloud Anda** — Google Drive, OneDrive, atau S3 adalah pilihan paling umum.
4. **Cadangkan save game Anda** dengan membuat job sinkronisasi dari direktori save Anda ke folder cloud.
5. **Sinkronkan screenshot Anda** untuk membebaskan ruang SSD dan menjaga tangkapan layar Anda tetap aman.
6. **Jadwalkan pencadangan rutin** agar data Anda selalu terlindungi, bahkan jika Anda lupa menjalankan sinkronisasi manual.

Steam Deck Anda adalah perangkat gaming portabel yang tangguh, tetapi penyimpanannya terbatas. RcloneView mengubah akun cloud apa pun menjadi perluasan filesystem Deck Anda — menjaga save tetap aman, screenshot tetap terorganisir, dan SSD Anda tetap lega untuk game berikutnya.

---

**Panduan Terkait:**

- [Menjelajahi dan Mengelola Penyimpanan Remote](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Mount Penyimpanan Cloud sebagai Drive Lokal](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [Menjalankan dan Mengelola Job](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)

<CloudSupportGrid />
