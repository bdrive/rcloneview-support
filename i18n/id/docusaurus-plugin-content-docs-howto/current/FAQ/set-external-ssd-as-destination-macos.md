---
sidebar_position: 3
description: "Perbaiki kasus di mana RcloneView tidak dapat mengakses SSD eksternal Anda di macOS dengan menelusuri /Volumes dan membuat pintasan Alias secara cepat."
keywords:
  - rcloneview
  - macos
  - external drive
  - offline backup
  - sync destination
  - alias remote
  - volumes
  - troubleshooting
  - faq
tags:
  - RcloneView
  - macOS
  - Troubleshooting
  - FAQ
  - external-drive
  - alias
date: 2025-02-20
author: Jay
---

# Saya tidak bisa mengakses SSD Eksternal dengan RcloneView (macOS)

Jika RcloneView tidak dapat menjangkau SSD eksternal Anda di macOS (Anda tidak melihat drive tersebut atau tidak tahu di mana harus mengetikkan path-nya), gunakan solusi cepat ini. Masalah UX sementara (sudah diperbaiki di rilis berikutnya) menyembunyikan pintasan yang biasa digunakan, tetapi Anda tetap dapat menelusuri ke SSD secara manual dan menyimpannya sebagai Alias (favorit) untuk akses satu klik nantinya.

---

## Opsi perbaikan cepat (pilih salah satu)

- **Gunakan build hotfix (sudah menyertakan perbaikan UX):** [Unduh RcloneView 1.1.517 (macOS)](https://downloads.bdrive.com/rclone_view/builds/RcloneView-1.1.517.dmg) lalu instal untuk langsung mendapatkan perbaikan path SSD. Ini adalah build sementara yang dibagikan untuk pengguna yang mengalami masalah ini sebelum rilis resmi berikutnya.
- **Tetap gunakan rilis resmi saat ini:** Ikuti langkah manual di bawah ini untuk menelusuri `/Volumes` dan membuat Alias ke SSD Anda. Ini berfungsi pada build publik saat ini.

---

## Langkah demi Langkah: Menambahkan SSD Anda dari /Volumes

Anda dapat melihat **`Local Disk`** di panel kiri RcloneView.  

1) Pada bilah path, ketik `/Volumes` lalu tekan **Enter**. Di sinilah macOS me-mount drive eksternal (misalnya, Samsung T7).
2) Pada daftar `/Volumes`, klik dua kali SSD Anda (misalnya, `SAMSUNG`). Beberapa drive membutuhkan waktu sedikit lebih lama untuk dimuat—tunggu hingga folder terbuka.

<img src="/support/images/en/howto/FAQ/browse-volumes-in-mac-system.png" alt="browse volumes in mac system" class="img-large img-center" />

3) Pastikan Anda sudah berada di dalam SSD (bilah path seharusnya menampilkan `/Volumes/<drive-anda>`).
4) Klik ikon **☆** (Alias) pada bilah path untuk menandai lokasi ini.
5) Masukkan nama sederhana (misalnya, `MySSD`) lalu 
6) klik **Create**. Ini akan menambahkan Alias Remote yang selalu membuka root SSD Anda.
<img src="/support/images/en/howto/FAQ/creat-alias-remote-for-external-hdd.png" alt="creat alias remote for external hdd" class="img-large img-center" />

7) Alias akan terbuka di tab baru dan juga muncul di daftar panel kiri untuk penggunaan cepat berikutnya.

<img src="/support/images/en/howto/FAQ/open-alias-remote-for-external-ssd.png" alt="open alias remote for external ssd" class="img-large img-center" />

---

## Cara Menggunakan Alias SSD dalam Pencadangan

- Saat membuat job Sync/Copy/Move, pilih remote Alias yang baru saja Anda buat (misalnya, `MySSD`) sebagai **destination**, dan remote sumber Anda (misalnya, Google Drive, Dropbox, folder lokal lainnya) sebagai **source**.
- Alias menunjuk ke root SSD; Anda dapat memilih atau membuat subfolder di tab tersebut sebelum memulai job.

---

## Jika SSD Tidak Muncul

- Pastikan SSD sudah ter-mount di Finder (cabut/pasang kembali jika perlu).
- Buka kembali `/Volumes` pada bilah path dan tunggu beberapa detik hingga daftar drive terisi.
- Masih belum terlihat? Restart RcloneView, lalu coba `/Volumes` lagi. Jika masih terus gagal, laporkan di [forum RcloneView](https://forum.rcloneview.com).

---

## Panduan Terkait

- Gambaran umum Alias dan remote virtual lainnya: [Panduan Alias Remote](/howto/remote-storage-connection-settings/alias-remote)
- Kontrol Explorer umum dan tab: [Menelusuri dan Mengelola Penyimpanan Remote](/howto/rcloneview-basic/browse-and-manage-remote-storage)
