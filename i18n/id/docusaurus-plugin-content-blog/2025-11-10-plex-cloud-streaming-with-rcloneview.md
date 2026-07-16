---
slug: plex-cloud-mount-rcloneview
title: "Streaming Film Cloud dengan Plex & RcloneView — Mount Google Drive, Dropbox, atau S3 sebagai Perpustakaan Anda"
authors:
  - tayson
description: Gunakan RcloneView untuk mount Google Drive, Dropbox, Wasabi, atau S3 sebagai drive lokal yang dapat diindeks oleh Plex. Streaming film yang tersimpan di cloud tanpa perlu mengunduh—tidak perlu CLI.
keywords:
  - plex cloud mount
  - google drive plex
  - rclone mount plex
  - cloud movie server
  - plex cloud streaming
  - rcloneview
  - vfs cache plex
tags:
  - plex
  - google-drive
  - onedrive
  - dropbox
  - s3
  - mount
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Streaming Film Cloud dengan Plex & RcloneView — Mount Google Drive, Dropbox, atau S3 sebagai Perpustakaan Anda

> Kehabisan disk? Mount cloud Anda sebagai drive lokal dengan RcloneView dan biarkan Plex melakukan streaming langsung dari sana—dengan lancar, andal, dan tanpa perlu pengaturan command-line.

Plex sangat handal dalam mengatur dan melakukan streaming media Anda, tetapi penyimpanan lokal cepat penuh. Sementara itu, bucket cloud—Google Drive, Dropbox, Wasabi, Cloudflare R2, S3—menawarkan ruang yang murah dan hampir tak terbatas. Yang masih kurang adalah cara yang bersih agar Plex bisa "melihat" folder cloud tersebut layaknya path lokal. Perintah `mount` milik rclone menyelesaikan hal ini, dan RcloneView membungkus kekuatan tersebut dalam GUI yang sederhana: pilih folder cloud, pilih drive letter atau mount path, aktifkan caching, dan selesai. Tidak perlu terminal, tidak perlu menghafal flag.

<!-- truncate -->

RcloneView menggunakan mesin rclone yang telah teruji di baliknya. Anda bisa menghubungkan semua provider utama, mount sebagai folder lokal atau drive letter, dan arahkan Plex ke path tersebut. Ketika dikonfigurasi dengan pengaturan VFS cache yang tepat, Plex dapat memindai, mencari (seek), dan melakukan streaming dari penyimpanan cloud dengan buffering yang minimal.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Bagaimana Plex dan RcloneView Saling Melengkapi

Plex memindai path lokal (misalnya, `X:\Movies` di Windows atau `/Volumes/Cloud/Movies` di macOS). RcloneView mount folder cloud Anda ke path tersebut, sehingga Plex memperlakukannya seperti direktori lokal lainnya.

Diagram teks
[Google Drive Movies] ⇄ [RcloneView Mount (X:/ atau /Volumes/Cloud)] ⇄ [Plex Media Library]

Dokumen bantuan

- Dasar-dasar mount di RcloneView: [Mount penyimpanan cloud sebagai drive lokal](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- Flag lanjutan melalui Embedded Rclone: [Pengaturan umum](/howto/rcloneview-basic/general-settings)
- Tambahkan login OAuth (Google/Dropbox/OneDrive): [Hubungkan via login browser](/howto/remote-storage-connection-settings/add-oath-online-login)
- Pengaturan S3/Wasabi/R2: [Konfigurasi penyimpanan S3](/howto/remote-storage-connection-settings/s3) · [Kredensial Cloudflare R2](/howto/cloud-storage-setting/cloudflare-r2-credential)

## Mount dan Streaming dalam Beberapa Klik

Hubungkan cloud, buat mount, dan arahkan Plex ke sana. Selesai.

1. Hubungkan sebuah remote

- Google Drive, OneDrive, Dropbox, S3/Wasabi/R2 semuanya didukung. Tambahkan masing-masing melalui `+ New Remote`.
- Panduan: [Provider berbasis OAuth](/howto/remote-storage-connection-settings/add-oath-online-login) · [Penyimpanan yang kompatibel dengan S3](/howto/remote-storage-connection-settings/s3) · [Catatan backend Dropbox](https://rclone.org/dropbox/)

<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="Add a new remote in RcloneView" class="img-large img-center" />

2. Buat sebuah mount

- Metode 1 — Dari Remote Explorer: [Mount dari Remote Explorer](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-1-mount-from-remote-explorer)
- Metode 2 — Melalui Mount Manager: [Mount melalui Mount Manager](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-2-mount-via-mount-manager)

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount from Remote Explorer in RcloneView" class="img-large img-center" />

3. Pilih target mount

- Windows: pilih drive letter (misalnya, `X:`). Di baliknya, RcloneView menggunakan `cmount` untuk kompatibilitas.
- macOS: pilih mount path di bawah `/Volumes/Cloud` (atau path kustom).
- Linux: pilih direktori mount (misalnya, `/mnt/plex-cloud`).

4. Konfigurasikan cache untuk Plex

- Di Advanced Options pada dialog Mount, atur **Cache mode** ke `full` untuk kompatibilitas terbaik dengan Plex.
- Secara opsional atur **Cache max size** (misalnya, 10–50 GB) dan **Dir cache time**.
- Anda juga bisa menyesuaikan flag global seperti `--vfs-read-ahead` di Embedded Rclone → **Global Rclone Flags**. Lihat: /support/howto/rcloneview-basic/general-settings

5. Mount dan verifikasi

- Klik "Save and mount", lalu buka folder mount di file explorer Anda untuk memastikan Anda dapat menelusuri film.

6. Tambahkan ke Plex

- Plex → Libraries → Add Library → Add folders → pilih path yang telah di-mount (`X:\Movies` atau `/Volumes/Cloud/Movies`). Biarkan Plex memindai dan mengindeks.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure mount from Mount Manager" class="img-large img-center" />

## Penyetelan Performa untuk Pemutaran yang Lancar

Pengaturan berikut mengurangi buffering dan meningkatkan kecepatan seek saat melakukan streaming file berbitrate tinggi dari penyimpanan cloud.

- Mode VFS cache: Gunakan `full` untuk pemindaian dan seek (transcode dan thumbnail bekerja lebih andal).
- Ukuran cache: Alokasikan 10–50 GB jika Anda memiliki ruang SSD yang tersedia.
- Read-ahead: Tingkatkan `--vfs-read-ahead` (misalnya, 64M–256M) melalui Global Rclone Flags.
- Batas bandwidth: Jika jaringan Anda sedang sibuk, atur batas yang wajar agar Plex tetap lancar pada jam sibuk.
- Simpan metadata Plex secara lokal: Simpan metadata dan thumbnail di SSD lokal; simpan hanya media di cloud.

Catatan: Ukuran cache dan read-ahead bergantung pada beban kerja. Mulailah secara konservatif dan sesuaikan sambil memantau pemutaran dan aktivitas drive.

## Siapa yang Mendapatkan Nilai Terbesar

- Kolektor home cinema: Simpan arsip film 10 TB di Google Drive atau Dropbox; streaming melalui Plex tanpa perlu menambah disk lokal.
- Pengaturan hybrid NAS: Gunakan NAS sebagai lapisan cache SSD sementara perpustakaan utama berada di S3/Wasabi/R2 melalui mount.
- Developer dan homelabber: Pasang mount RcloneView ke dalam Plex yang di-Docker-kan; gunakan saved mount dan auto-mount saat login demi keandalan.

## Hal-Hal Penting dalam Pemecahan Masalah

- Library path tidak terlihat di Plex: Pastikan mount aktif dan pengguna OS yang menjalankan Plex dapat mengakses mount path tersebut.
- Mount hilang setelah reboot: Aktifkan **Auto mount** di dialog Mount, dan pertimbangkan "Launch at login" di Settings. → [Mount penyimpanan cloud sebagai drive lokal](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive) · [Pengaturan umum](/howto/rcloneview-basic/general-settings)
- Pemindaian lambat atau tersendat: Gunakan `Cache mode: full`, tingkatkan ukuran cache dan `--vfs-read-ahead`, simpan metadata secara lokal.
- Batas API atau throttling: Jadwalkan pemindaian di luar jam sibuk; gunakan Compare & Sync untuk mengatur apa yang dipindai Plex jika perpustakaan Anda sangat besar. → [Bandingkan Isi Folder](/howto/rcloneview-basic/compare-folder-contents) · [Buat Sync Job](/howto/rcloneview-basic/create-sync-jobs)

## Film Cloud, Pengalaman Lokal

Melakukan mount dengan RcloneView memungkinkan Plex memperlakukan cloud Anda seperti drive lokal yang cepat. Anda tetap mendapatkan fleksibilitas dan skala dari Google Drive, Dropbox, Wasabi, atau S3, dan Plex memberikan pengalaman yang sama mulusnya—tanpa pusing soal ruang disk. Buat sebuah mount, arahkan Plex ke sana, sesuaikan cache, lalu tekan play.

Siap mencobanya? Unduh RcloneView dan bangun perpustakaan Plex bertenaga cloud Anda hari ini.


<CloudSupportGrid />
