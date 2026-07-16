---
slug: mount-google-shared-drives-rcloneview
title: "Mount Google Shared Drives di Windows & macOS dengan RcloneView -- Akses Penuh, Tanpa Sync Client"
authors:
  - tayson
description: Mount Google Shared Drive apa pun langsung ke Finder atau File Explorer dengan alur kerja terpandu RcloneView, melewati batasan Drive for Desktop sambil tetap menjaga kontrol tingkat admin.
keywords:
  - google shared drive mount
  - mount shared drive windows
  - mount shared drive mac
  - rcloneview
  - rclone mount google drive
  - team drive windows
  - shared drive explorer
  - google workspace shared drive
  - rclone gui
  - mount team drive
tags:
  - google-drive
  - mount
  - productivity
  - workspace
unlisted: true
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mount Google Shared Drives di Windows & macOS dengan RcloneView -- Akses Penuh, Tanpa Sync Client

> Berikan setiap tim Shared Drive yang mereka butuhkan tanpa memaksa laptop mereka memakai sync client penuh.

Google Workspace Shared Drives sering menyimpan aset desain, folder handover, atau arsip kepatuhan Anda, namun Drive for Desktop hanya menyimpan cache kecil dan kesulitan menangani puluhan Shared Drive per pengguna. RcloneView dibangun di atas dukungan Shared Drive milik rclone sehingga Anda dapat me-mount tepat drive yang dibutuhkan sebagai drive letter sungguhan di Windows atau volume Finder di macOS, lengkap dengan auto-mount dan VFS caching bawaan.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Mengapa Tim Membutuhkan Mounting Shared Drive Tanpa Drive for Desktop

- Drive for Desktop mencerminkan seluruh drive, menghabiskan ruang SSD dan membuat laptop offline saat kuota terlampaui.
- Help desk tidak punya cara memberikan kontraktor satu Shared Drive saja tanpa memberikan hak sync ke seluruh akun.
- Engineer dan tim media membutuhkan path yang dapat diprediksi (X:\Marketing atau /Volumes/Archive) untuk otomasi, skrip, dan aplikasi kreatif.

## Bagaimana RcloneView Menghadirkan Shared Drive ke Windows & macOS

RcloneView melapisi GUI di atas rclone, sehingga pemilih Shared Drive, token autentikasi, dan flag mount ditangani untuk Anda.

- Wizard remote terpandu menampilkan setiap Shared Drive yang dapat diakses akun Google Workspace Anda dan menyimpannya dengan aman. Lihat langkah referensinya di [/support/howto/remote-storage-connection-settings/connect-using-cli/add-google-shared-drive](/howto/remote-storage-connection-settings/connect-using-cli/add-google-shared-drive).
- Mount Manager menampilkan opsi yang dijelaskan di [/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive) sehingga Anda tidak perlu menghafal sintaks CLI.
- Auto-mount ada di dialog Mount; Launch at login tersedia di Settings -> General (didokumentasikan di [/support/howto/rcloneview-basic/general-settings](/howto/rcloneview-basic/general-settings)).

## Yang Anda Butuhkan Sebelum Melakukan Mount

| Kebutuhan | Detail |
| --- | --- |
| RcloneView + Rclone | Instal bundel RcloneView terbaru (sudah menyertakan rclone). |
| Driver sistem file | Windows menggunakan WinFsp (sudah dibundel). macOS membutuhkan macFUSE; ikuti panduan di dalam RcloneView. Lihat [/support/howto/FAQ/increase-file-handle-limit-on-macos](/howto/FAQ/increase-file-handle-limit-on-macos) untuk penyesuaian batas. |


## Langkah demi Langkah: Mount Google Shared Drive dengan RcloneView

Langkah-langkah ini mencerminkan apa yang biasa dilakukan admin di CLI, tetapi dikemas dalam wizard yang ramah pengguna sehingga help desk dapat mengulanginya dengan cepat.

### Langkah 1 -- Hubungkan akun Google Workspace Anda

1. Buka **Remote Manager** -> **+ New Remote**.
2. Pilih **Google Drive** -> **OAuth (Browser)**.
3. Setelah login browser selesai, RcloneView menyimpan refresh token secara lokal sehingga Shared Drive tetap terautentikasi.

  <img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />


### Langkah 2 -- Pilih Shared Drive yang Anda inginkan

1. Saat diminta "Configure this as a Shared Drive?", pilih **Yes**.
2. RcloneView menampilkan semua Shared Drive yang dikembalikan oleh Google. Ketik nomornya atau cari untuk menyorot drive yang tepat.
3. Simpan remote dengan nama deskriptif seperti `shared_marketing` agar rekan tim langsung tahu isinya.

### Langkah 3 -- Konfigurasi profil mount

1. Buka **Mount Manager** (atau klik ikon mount di dalam Remote Explorer).
2. Pilih remote Shared Drive dan tentukan folder yang ingin di-mount (root atau subfolder).
3. Atur target mount dan opsi:
   - **Target**: biarkan `Auto` atau tetapkan drive letter/mount path tetap dengan **Mount to local path**.
   - **Auto mount**: aktifkan agar RcloneView melakukan remount saat aplikasi dijalankan (padukan dengan Launch at login di Settings).
   - **Advanced options**: atur **Volume name** (label opsional), **Mount type** (`cmount` sebagai default), **Network drive** (Windows), **Allow other** (Linux), dan **Read only** jika ingin memblokir penulisan.
   - **Cache options**: pilih **Cache mode** (`full` untuk kompatibilitas terbaik), atur **Cache max size**, **Cache max age**, dan **Dir cache time** menggunakan nilai nanosecond yang ditampilkan di dialog.

### Langkah 4 -- Jalankan dan verifikasi

1. Klik **Save & Mount**. Chip status akan berubah hijau setelah mount aktif.
2. Di File Explorer atau Finder, buka drive baru tersebut. Anda akan melihat folder-folder Shared Drive; direktori besar mungkin membutuhkan waktu sesaat saat cache direktori terisi berdasarkan pengaturan **Dir cache time** Anda.
3. Gunakan Mount Manager untuk unmount, membuka folder yang di-mount, atau mengedit pengaturan.

## Tips Performa & Akses

- Atur **Cache mode** ke **Full** dan tentukan **Cache max size** secara longgar untuk pengalaman mengedit yang paling lancar.
- Gunakan **Read only** untuk drive finance/legal guna mencegah penghapusan tidak sengaja; buat mount terpisah yang writable jika diperlukan.
- Sesuaikan **Dir cache time** berdasarkan frekuensi perubahan (lebih singkat untuk drive aktif, lebih lama untuk arsip).
- Gunakan kembali **Target** atau **Mount to local path** yang tetap agar skrip dan aplikasi selalu menemukan mount yang sama.

## Otomatisasi, Berbagi, dan Amankan Akses

RcloneView memungkinkan Anda menjaga konsistensi mount Shared Drive di berbagai mesin:

- Aktifkan **Auto mount** pada setiap mount dan **Launch at login** di Settings agar drive siap saat OS dinyalakan.
- Gunakan Job Scheduler untuk mencerminkan konten Shared Drive ke S3/Wasabi demi retensi off-site setelah jam kerja.
- Periksa status Mount Manager (Mounted vs. Unmounted) untuk memastikan konektivitas sebelum pengguna membuka Office atau Adobe.

## Pemecahan Masalah & FAQ

| Gejala | Kemungkinan penyebab | Solusi |
| --- | --- | --- |
| Drive menghilang setelah sleep | OS meng-unmount WinFsp/macFUSE | Aktifkan **Auto mount** dan **Launch at login** agar RcloneView melakukan remount saat startup. |
| Membuka file lambat | Cache terlalu kecil atau berada di disk lambat | Tingkatkan **Cache max size** dan pertahankan **Cache mode** pada Full. |
| Error izin di macOS | FUSE tidak memiliki Full Disk Access | Berikan Full Disk Access ke RcloneView dan macFUSE, lalu restart mount (Apple menu -> System Settings -> Privacy & Security). |
| `too many open files` | Default ulimit macOS 256 | Terapkan penyesuaian plist di [/support/howto/FAQ/increase-file-handle-limit-on-macos](/howto/FAQ/increase-file-handle-limit-on-macos). |
| Daftar Shared Drive kosong | Admin Workspace menonaktifkan Drive API | Aktifkan kembali Drive API di Google Admin atau minta akses delegasi ke Shared Drive. |

## Kirimkan Mount Shared Drive Tanpa Skrip

RcloneView membuat akses Shared Drive dapat diprediksi: tanpa folder sync yang membengkak, tanpa scripting, dan tanpa menunggu IT untuk setiap mount baru. Berikan setiap tim drive letter atau volume Finder yang bersih hari ini dan jaga penyimpanan Google Workspace Anda tetap terkendali.


<CloudSupportGrid />
