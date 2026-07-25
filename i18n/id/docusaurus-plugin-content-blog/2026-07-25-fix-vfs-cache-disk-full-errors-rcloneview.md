---
slug: fix-vfs-cache-disk-full-errors-rcloneview
title: "Mengatasi Error Disk Penuh pada Cache VFS — Kelola Cache Mount dengan RcloneView"
authors:
  - robin
description: "Pelajari mengapa drive cloud yang di-mount dapat memenuhi disk lokal Anda dan cara mengatasi error disk penuh pada cache VFS menggunakan pengaturan cache RcloneView."
keywords:
  - cache VFS disk penuh
  - mengatasi error cache VFS
  - cache mount rclone penuh
  - mode cache RcloneView
  - ukuran maksimum cache mount
  - ruang disk mount cloud
  - mode cache VFS writes
  - pengaturan mount RcloneView
  - usia maksimum cache
tags:
  - RcloneView
  - troubleshooting
  - tips
  - mount
  - vfs
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mengatasi Error Disk Penuh pada Cache VFS — Kelola Cache Mount dengan RcloneView

> Drive cloud yang di-mount memenuhi disk lokal Anda biasanya berarti mode cache diatur lebih tinggi daripada yang dibutuhkan alur kerja Anda — berikut cara mendiagnosis dan memperbaikinya di RcloneView.

Mount penyimpanan cloud sebagai drive lokal mengandalkan cache VFS (Virtual File System) agar pembacaan dan penulisan cepat dan andal, tetapi cache tersebut disimpan di disk lokal Anda dan bisa diam-diam menghabiskan gigabyte ruang jika konfigurasinya keliru. Ketika sebuah mount berhenti menerima penulisan atau OS melaporkan disk penuh padahal penyimpanan cloud Anda masih memiliki banyak ruang, cache VFS — bukan remote — hampir selalu menjadi penyebabnya. RcloneView menampilkan semua pengaturan cache yang relevan langsung di layar konfigurasi mount, sehingga memperbaiki masalah ini tidak memerlukan pengeditan berkas konfigurasi rclone secara manual.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Cache VFS Memenuhi Disk Lokal Anda

Opsi mount RcloneView mencakup empat mode cache: off, minimal, writes (default), dan full. Dalam mode "writes", berkas yang Anda ubah di-cache secara lokal hingga selesai diunggah. Dalam mode "full", berkas yang hanya Anda buka untuk dibaca juga di-cache secara lokal sehingga dapat dibaca ulang tanpa harus mengakses jaringan lagi — sangat baik untuk performa, tetapi berarti pustaka media atau kumpulan data besar yang diakses melalui mount dapat diam-diam memenuhi drive Anda.

<img src="/support/images/en/blog/new-remote.png" alt="Mount configuration screen showing VFS cache mode options in RcloneView" class="img-large img-center" />

Jika Anda melihat ruang disk berkurang pada drive yang menyimpan direktori cache RcloneView, bukan pada statistik penggunaan penyimpanan cloud Anda sendiri, inilah pengaturan pertama yang perlu diperiksa.

## Memilih Mode Cache yang Tepat

Untuk sebagian besar penggunaan sehari-hari, mode "writes" adalah keseimbangan yang tepat: hanya meng-cache apa yang sedang aktif diubah, sehingga penggunaan disk tetap terbatas pada pekerjaan Anda saat ini. Cadangkan mode "full" untuk skenario yang benar-benar membutuhkan pembacaan ulang offline untuk berkas besar, seperti pengeditan video langsung dari sebuah mount, lalu kembali ke "writes" atau "minimal" setelah proyek tersebut selesai. Mode "minimal" meng-cache paling sedikit dan merupakan pilihan teraman jika ruang disk terbatas.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Comparing writes and full VFS cache modes for a cloud mount" class="img-large img-center" />

RcloneView melakukan mount dan sinkronisasi 90+ penyedia dari satu jendela, di Windows, macOS, dan Linux, sehingga pengaturan cache yang sama berlaku terlepas dari remote mana yang Anda mount.

## Mengatur Ukuran Maksimum Cache dan Usia Maksimum

Selain mode cache itu sendiri, RcloneView memungkinkan Anda membatasi cache dengan Ukuran maksimum cache (dalam byte, atau -1 untuk tak terbatas) dan Usia maksimum cache, yang mengontrol berapa lama data yang di-cache tetap valid sebelum dihapus. Menetapkan ukuran maksimum yang konkret — misalnya, jauh di bawah ruang disk kosong Anda — mencegah satu sesi pembacaan besar menghabiskan seluruh drive, bahkan dalam mode "full". Gabungkan dengan usia maksimum yang lebih pendek jika Anda bekerja dengan berkas yang sering berubah di tempat lain.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting cache max size and cache max age for a mount in RcloneView" class="img-large img-center" />

## Membersihkan Cache yang Sudah Penuh

Jika sebuah mount sudah menolak penulisan karena cache penuh, unmount melalui Mount Manager, yang akan melepaskan data yang di-cache, lalu mount ulang dengan mode cache yang lebih rendah atau ukuran maksimum eksplisit sebelum melanjutkan pekerjaan. Memeriksa tab Log setelah sebelumnya mengaktifkan pencatatan level Debug dapat memastikan apakah penghapusan cache — bukan kesalahan jaringan atau izin — yang sebenarnya menjadi penyebabnya.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Unmounting and re-mounting a cloud drive from Mount Manager after a cache disk full error" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka Mount Manager dan edit pengaturan mount yang terpengaruh.
3. Ubah mode cache menjadi "writes" atau "minimal", dan tetapkan Ukuran maksimum cache yang konkret.
4. Unmount lalu mount ulang untuk menerapkan batas baru, lalu pantau penggunaan disk selama penggunaan normal.

Beberapa menit menyetel mode cache dan pengaturan ukuran mengubah error disk penuh yang sulit diprediksi menjadi mount yang berperilaku persis seperti yang diharapkan.

---

**Panduan Terkait:**

- [Cache VFS dan Performa Mount di RcloneView](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [Mengatasi Buffering Plex dengan Penyetelan Cache VFS di RcloneView](https://rcloneview.com/support/blog/plex-vfs-cache-rcloneview)
- [Mengatasi Putusnya Koneksi Mount Cloud dengan RcloneView](https://rcloneview.com/support/blog/fix-cloud-mount-disconnect-drops-rcloneview)

<CloudSupportGrid />
