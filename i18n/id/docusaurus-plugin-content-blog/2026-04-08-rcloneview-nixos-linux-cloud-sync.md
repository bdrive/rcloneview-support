---
slug: rcloneview-nixos-linux-cloud-sync
title: "Menjalankan RcloneView di NixOS untuk Sinkronisasi dan Pencadangan Cloud"
authors:
  - tayson
description: "Panduan langkah demi langkah untuk menginstal dan menjalankan RcloneView di NixOS untuk sinkronisasi dan pencadangan cloud, termasuk pengaturan AppImage, mount FUSE, dan tips konfigurasi khusus NixOS."
keywords:
  - rcloneview
  - nixos cloud sync
  - rclone nixos
  - nixos appimage
  - nixos cloud backup
  - nixos fuse mount
  - nix package manager rclone
  - nixos cloud storage
  - appimage-run nixos
  - declarative cloud sync
tags:
  - RcloneView
  - linux
  - platform
  - cloud-sync
  - guide
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Menjalankan RcloneView di NixOS untuk Sinkronisasi dan Pencadangan Cloud

> NixOS menawarkan pendekatan deklaratif yang unik untuk konfigurasi sistem, tetapi menjalankan aplikasi GUI pihak ketiga memerlukan beberapa langkah tambahan. **RcloneView** berjalan dengan lancar di NixOS setelah Anda mengatur dukungan AppImage dan FUSE, memberi Anda manajer cloud visual yang andal pada salah satu distribusi Linux yang paling dapat direproduksi.

NixOS adalah distribusi Linux yang dibangun di sekitar pengelola paket Nix dan model konfigurasi yang sepenuhnya deklaratif. Alih-alih menginstal paket secara imperatif, Anda mendefinisikan seluruh state sistem dalam sebuah file konfigurasi lalu melakukan rebuild. Pendekatan ini membuat sistem dapat direproduksi, mudah di-rollback, dan ideal bagi developer serta power user yang menginginkan kendali penuh atas lingkungan mereka.

Namun, tata letak filesystem NixOS yang tidak konvensional (tanpa `/lib`, tanpa `/usr/lib`, tanpa FHS tradisional) berarti binari Linux standar, termasuk AppImage, tidak dapat langsung berjalan begitu saja. RcloneView didistribusikan sebagai AppImage untuk Linux, sehingga Anda perlu mengaktifkan kompatibilitas AppImage di NixOS sebelum menjalankannya.

Panduan ini membahas seluruh prosesnya: menginstal rclone, mengaktifkan dukungan AppImage, menjalankan RcloneView, mengonfigurasi FUSE untuk mount cloud, dan mengatur sinkronisasi otomatis sebagai layanan systemd.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Gambaran Umum NixOS dan Mengapa Penting untuk Penyimpanan Cloud

NixOS memperlakukan konfigurasi sistem sebagai kode. File `/etc/nixos/configuration.nix` Anda mendefinisikan setiap paket yang terinstal, layanan yang diaktifkan, dan pengaturan sistem. Saat Anda menjalankan `nixos-rebuild switch`, sistem berpindah secara atomik ke state baru. Jika terjadi masalah, Anda dapat melakukan rollback ke generasi sebelumnya dalam hitungan detik.

Untuk alur kerja penyimpanan cloud, ini berarti Anda dapat melakukan version-control terhadap seluruh pengaturan sinkronisasi dan pencadangan Anda. Instalasi rclone, konfigurasi FUSE, dan layanan systemd Anda semuanya didefinisikan dalam satu file dan dapat direproduksi di mesin NixOS mana pun.

## Menginstal Rclone melalui Nixpkgs

Rclone tersedia di repositori Nixpkgs resmi. Tambahkan ke konfigurasi sistem Anda:

```nix
# /etc/nixos/configuration.nix
environment.systemPackages = with pkgs; [
  rclone
];
```

Kemudian rebuild sistem Anda:

```bash
sudo nixos-rebuild switch
```

Verifikasi instalasi dengan menjalankan `rclone version`. Ini memberi Anda backend rclone yang dikelola oleh GUI RcloneView.

## Menjalankan AppImage RcloneView di NixOS

AppImage menggabungkan semua dependensi ke dalam satu executable, tetapi mengandalkan path FHS yang tidak disediakan oleh NixOS. NixOS menawarkan dua solusi utama: `appimage-run` dan `nix-ld`.

### Opsi A: Menggunakan appimage-run

Tambahkan `appimage-run` ke paket sistem Anda:

```nix
environment.systemPackages = with pkgs; [
  rclone
  appimage-run
];
```

Setelah rebuild, unduh AppImage RcloneView dari [rcloneview.com](https://rcloneview.com/src/download.html), jadikan executable, lalu jalankan:

```bash
chmod +x RcloneView-*.AppImage
appimage-run RcloneView-*.AppImage
```

### Opsi B: Menggunakan nix-ld

Modul `nix-ld` menyediakan shim kompatibilitas yang memungkinkan binari Linux standar menemukan dynamic library-nya. Aktifkan di konfigurasi Anda:

```nix
programs.nix-ld.enable = true;
```

Setelah rebuild, AppImage seharusnya dapat berjalan langsung tanpa wrapper `appimage-run`:

```bash
chmod +x RcloneView-*.AppImage
./RcloneView-*.AppImage
```

Kedua pendekatan sama-sama berfungsi. Pilih `appimage-run` untuk kesederhanaan, atau `nix-ld` jika Anda menjalankan banyak binari pihak ketiga.

## Mengatur FUSE untuk Mount Cloud

RcloneView dapat me-mount penyimpanan cloud sebagai direktori lokal, tetapi ini memerlukan FUSE (Filesystem in Userspace). Di NixOS, aktifkan FUSE dalam konfigurasi Anda:

```nix
# Enable FUSE
environment.systemPackages = with pkgs; [
  fuse
  fuse3
];

# Allow regular users to mount FUSE filesystems
programs.fuse.userAllowOther = true;
```

Rebuild dan verifikasi bahwa `/dev/fuse` ada. Sekarang Anda dapat menggunakan fitur mount RcloneView untuk mengakses penyimpanan cloud seolah-olah merupakan folder lokal.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />

## Mengonfigurasi Remote Cloud di RcloneView

Jalankan RcloneView dan gunakan wizard konfigurasi remote untuk menambahkan penyedia cloud Anda. Prosesnya sama seperti pada distribusi Linux lainnya:

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

RcloneView mendukung Google Drive, OneDrive, Dropbox, AWS S3, Wasabi, Backblaze B2, Cloudflare R2, dan puluhan lainnya. GUI ini memandu Anda melalui autentikasi untuk setiap penyedia, termasuk alur OAuth yang terbuka di browser Anda.

Konfigurasi rclone Anda disimpan di `~/.config/rclone/rclone.conf` secara default. Di NixOS, path ini berfungsi normal karena berada di direktori home Anda, di luar Nix store.

## Membuat Job Sinkronisasi dan Menjadwalkan Transfer

Setelah remote Anda dikonfigurasi, gunakan explorer dua panel RcloneView untuk menjelajahi penyimpanan cloud Anda dan membuat job sinkronisasi. Seret file antar panel untuk memulai transfer, atau atur job berulang dengan job scheduler.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

Bagi pengguna NixOS yang lebih memilih integrasi dengan model deklaratif sistem, Anda juga dapat mendefinisikan layanan systemd yang menjalankan perintah rclone sync pada timer, melengkapi scheduler bawaan RcloneView.

## Mengatur Layanan Systemd untuk Sinkronisasi Otomatis

NixOS memudahkan pendefinisian layanan systemd kustom secara deklaratif. Tambahkan layanan sinkronisasi berbasis timer ke konfigurasi Anda:

```nix
systemd.user.services.rclone-backup = {
  description = "Rclone cloud backup";
  serviceConfig = {
    ExecStart = "${pkgs.rclone}/bin/rclone sync /home/user/documents remote:backup/documents";
    Type = "oneshot";
  };
};

systemd.user.timers.rclone-backup = {
  description = "Run rclone backup daily";
  timerConfig = {
    OnCalendar = "daily";
    Persistent = true;
  };
  wantedBy = [ "timers.target" ];
};
```

Ini bekerja berdampingan dengan scheduler GUI RcloneView. Gunakan pendekatan systemd untuk server headless dan scheduler RcloneView untuk workstation interaktif.

## Tips Khusus NixOS

**Pin versi rclone Anda.** NixOS memudahkan pin versi paket menggunakan overlay atau flake. Jika rilis rclone baru memperkenalkan perubahan yang tidak kompatibel, Anda dapat tetap menggunakan versi yang sudah diketahui stabil hingga siap untuk upgrade.

**Gunakan Home Manager untuk konfigurasi tingkat pengguna.** Jika Anda menggunakan Home Manager, Anda dapat mengelola file konfigurasi rclone, entri desktop AppImage, dan pengaturan autostart secara deklaratif dalam lingkungan pengguna Anda.

**Entri desktop untuk launcher aplikasi.** Buat file `.desktop` agar RcloneView muncul di menu aplikasi Anda:

```nix
xdg.desktopEntries.rcloneview = {
  name = "RcloneView";
  exec = "appimage-run /home/user/Applications/RcloneView.AppImage";
  icon = "rcloneview";
  type = "Application";
  categories = [ "Utility" "FileManager" ];
};
```

**Keamanan rollback.** Karena NixOS mendukung rollback atomik, Anda dapat bereksperimen dengan aman dengan konfigurasi rclone. Jika sebuah job sinkronisasi salah konfigurasi, rollback generasi NixOS Anda dan sistem Anda akan kembali ke state sebelumnya.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan `rclone`, `appimage-run`, dan `fuse3` ke konfigurasi NixOS Anda dan lakukan rebuild.
3. Jalankan RcloneView dengan `appimage-run`, tambahkan remote cloud Anda, dan mulai sinkronisasi.
4. Opsional, definisikan timer systemd dalam konfigurasi NixOS Anda untuk pencadangan otomatis yang sepenuhnya deklaratif.

NixOS dan RcloneView bersama-sama memberi Anda alur kerja penyimpanan cloud yang dapat direproduksi dan version-controlled, yang dapat Anda replikasi di mesin mana pun.

---

**Panduan Terkait:**

- [Menjelajahi dan Mengelola Penyimpanan Remote](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Mount Penyimpanan Cloud sebagai Drive Lokal](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [Menambahkan AWS S3 dan yang Kompatibel dengan S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)

<CloudSupportGrid />
