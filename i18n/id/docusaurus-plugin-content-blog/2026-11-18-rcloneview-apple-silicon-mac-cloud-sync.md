---
slug: rcloneview-apple-silicon-mac-cloud-sync
title: "RcloneView di Mac Apple Silicon — Sinkronisasi dan Pencadangan Penyimpanan Cloud"
authors:
  - robin
description: "Jalankan RcloneView secara native di Mac Apple Silicon dengan .dmg Universal. Mount, sinkronkan, dan cadangkan 90+ penyedia cloud dari satu aplikasi macOS."
keywords:
  - rcloneview apple silicon
  - rclone gui m1 mac
  - sinkronisasi cloud mac apple silicon
  - mount penyimpanan cloud macbook
  - rclone universal binary macos
  - pencadangan cloud mac mini
  - mount drive cloud macos
  - instal rcloneview macos
  - sinkronisasi google drive onedrive mac
  - pengelola penyimpanan cloud mac arm64
tags:
  - RcloneView
  - macos
  - cloud-sync
  - installation
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView di Mac Apple Silicon — Sinkronisasi dan Pencadangan Penyimpanan Cloud

> Satu unduhan Universal berjalan secara native di Mac Apple Silicon maupun Intel, dengan mesin rclone yang sudah terpasang di dalamnya.

Banyak pemilik Mac Apple Silicon menggunakan lebih dari satu akun cloud. RcloneView memberi mereka satu aplikasi macOS native untuk menjelajah, me-mount, membandingkan, dan menyinkronkan Google Drive, OneDrive, Dropbox, bucket S3, share NAS, dan puluhan remote lainnya. Panduan ini membahas hal-hal yang perlu diketahui sebelum memasangnya di mesin Apple Silicon.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Satu .dmg Universal untuk Apple Silicon dan Intel

RcloneView untuk macOS dirilis sebagai satu disk image `.dmg` berisi binary Universal: di dalamnya ada kode ARM64 untuk Apple Silicon dan kode x86-64 untuk Mac Intel. Di Apple Silicon, aplikasi berjalan secara native. Build-nya telah dinotarisasi dan ditandatangani kode oleh pengembang, sehingga Gatekeeper membukanya tanpa trik tambahan.

Versi minimum yang didukung adalah macOS 12.7 (Monterey), dan Ventura, Sonoma, serta Sequoia sudah dipastikan berfungsi. Ambil installer hanya dari [halaman unduhan](https://rcloneview.com/src/download.html) resmi, karena tidak ada Homebrew cask atau kanal package manager lainnya. Setelah itu, build macOS memperbarui dirinya sendiri di dalam aplikasi.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new cloud remote in RcloneView on an Apple Silicon Mac" class="img-large img-center" />

RcloneView menyertakan binary rclone sendiri, jadi tidak ada lagi yang perlu dipasang. Buka tab Remote, klik **New Remote**, lalu masuk. Google Drive, Dropbox, OneDrive, dan Box menggunakan login OAuth di browser. Layanan yang kompatibel dengan S3 seperti Wasabi atau Cloudflare R2 akan meminta access key sebagai gantinya.

## Me-mount Drive Cloud di Finder

Di macOS, RcloneView melakukan mount dengan `nfsmount` secara default dan memungkinkan Anda memilih jalur mount kustom. Pilih folder di explorer, klik ikon Mount, dan remote akan muncul di Finder seperti volume lokal. Mode cache VFS default, `writes`, cocok untuk sebagian besar alur kerja penyuntingan. Seorang fotografer yang menjelajahi arsip 2 TB dari MacBook Air 16 GB juga dapat mengatur ukuran maksimum cache agar cache tidak memenuhi SSD internal.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount Manager showing cloud drives mounted on macOS" class="img-large img-center" />

Anda dapat mengelola mount dari Mount Manager atau dari ikon tray di menu bar. Dengan lisensi PLUS, Auto mount menyambungkan kembali drive Anda setiap kali Anda login.

## Dua Pengaturan macOS yang Perlu Dibereskan Sejak Awal

Kontrol privasi macOS dapat membuat folder Desktop, Documents, atau Downloads tampak kosong di dalam RcloneView. Berikan akses di **System Settings > Privacy & Security > Files & Folders**, atau tambahkan RcloneView ke **Full Disk Access**, lalu mulai ulang aplikasi.

Job sinkronisasi besar juga bisa menabrak batas default jumlah file terbuka di macOS (256–1024). Jika Anda melihat error "too many open files", buat plist LaunchDaemon di `/Library/LaunchDaemons/limit.maxfiles.plist` yang menaikkan batas soft dan hard menjadi 524288, lalu reboot.

## Pencadangan Terjadwal dari Mac Anda

Gunakan wizard Sync untuk menyiapkan job satu arah, misalnya `~/Projects` ke bucket Backblaze B2, dan mulailah dengan Dry Run untuk melihat persis apa yang akan berubah. RcloneView me-mount DAN menyinkronkan 90+ penyedia dari satu jendela, di Windows, macOS, dan Linux. Dengan lisensi PLUS, langkah penjadwalan dapat menjalankan job sesuai jadwal bergaya cron selagi aplikasi berada di menu bar.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Creating a scheduled cloud backup job in RcloneView on macOS" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html) lalu seret dari `.dmg` Universal ke Applications.
2. Berikan izin Files & Folders atau Full Disk Access di System Settings, lalu jalankan ulang aplikasi.
3. Tambahkan remote cloud Anda dengan **New Remote** dan mount remote yang ingin Anda lihat di Finder.
4. Buat job sinkronisasi, periksa dengan Dry Run, lalu pantau progresnya di tab Transferring.

Setelah RcloneView siap, Mac Anda dapat me-mount, menyinkronkan, dan mencadangkan akun cloud yang Anda gunakan dari satu tempat.

---

**Panduan Terkait:**

- [RcloneView di macOS Sequoia — Sinkronisasi Penyimpanan Cloud](https://rcloneview.com/support/blog/rcloneview-macos-sequoia-cloud-sync)
- [Memperbaiki Error Too Many Open Files di macOS](https://rcloneview.com/support/blog/fix-macos-too-many-open-files-rcloneview)
- [Memperbaiki Folder Kosong dan Izin di macOS](https://rcloneview.com/support/blog/fix-macos-empty-folders-permissions-rcloneview)

<CloudSupportGrid />
