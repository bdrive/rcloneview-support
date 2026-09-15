---
slug: fix-mount-stale-files-dir-cache-rcloneview
title: "Mengatasi Mount yang Menampilkan File Usang — Dir Cache Time Dijelaskan dengan RcloneView"
authors:
  - morgan
description: "Atasi drive cloud yang di-mount menampilkan file usang atau hilang di RcloneView dengan menyetel Dir cache time dan VFS cache mode dengan benar."
keywords:
  - mount menampilkan file lama
  - RcloneView dir cache time
  - file usang di drive yang di-mount
  - memperbaiki daftar mount yang usang
  - drive cloud tidak diperbarui
  - VFS cache mode tidak sesuai
  - pemecahan masalah mount RcloneView
  - cache direktori mount cloud
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

# Mengatasi Mount yang Menampilkan File Usang — Dir Cache Time Dijelaskan dengan RcloneView

> Drive cloud yang di-mount dan masih menampilkan file yang sudah dihapus, atau menyembunyikan file yang baru dibuat, biasanya bukan rusak — cache direktorinya saja belum kedaluwarsa. Berikut cara mengatasinya di RcloneView.

Saat me-mount remote sebagai drive lokal, RcloneView tidak mendaftar ulang setiap folder pada setiap klik — ia menyimpan cache direktori berumur singkat agar penjelajahan terasa instan tanpa harus bolak-balik ke penyedia cloud pada setiap ketukan. Ini bagus untuk kecepatan, tetapi berarti perubahan yang dibuat dari perangkat lain, jendela RcloneView lain, atau aplikasi web milik penyedia itu sendiri bisa butuh waktu sebentar untuk muncul di folder yang di-mount. Panduan ini membahas kapan keterlambatan tersebut normal dan cara menyetelnya jika tidak normal.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Memahami Dir Cache Time

Konfigurasi mount RcloneView mencakup pengaturan **Dir cache time**, yang mengontrol berapa lama daftar folder tetap dianggap valid sebelum mount memeriksa ulang perubahan pada remote. Ini berbeda dari pengaturan VFS **Cache mode** (off / minimal / writes / full), yang mengatur cache konten file, bukan struktur direktori. Dir cache time yang singkat membuat mount mencerminkan perubahan remote hampir seketika, tetapi mengirim lebih banyak permintaan daftar ke penyedia; Dir cache time yang panjang mengurangi panggilan API dengan konsekuensi keterlambatan lebih lama sebelum file baru atau yang dihapus muncul.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Opsi konfigurasi mount termasuk Dir cache time di RcloneView" class="img-large img-center" />

Jika Anda me-mount remote yang ditulis secara bersamaan oleh beberapa orang atau perangkat — misalnya folder Google Drive bersama — jendela cache default dapat membuatnya terlihat seolah RcloneView "melewatkan" file yang sebenarnya baru ditambahkan beberapa detik lalu dari lokasi lain. Tidak ada yang terlewat; mount hanya belum menyegarkan daftar folder tersebut.

## Mengatasi Mount yang Tidak Menampilkan File Baru

Mulailah dengan menyegarkan secara manual sebelum menganggap ada masalah nyata. Di panel Explorer atau penjelajah file OS yang menunjuk ke mount, memaksa folder untuk memuat ulang (F5, atau keluar lalu masuk kembali ke direktori) sering langsung menampilkan perubahan tanpa menunggu cache kedaluwarsa sendiri. Jika file masih tidak muncul setelah penyegaran manual, mount itu sendiri mungkin perlu di-unmount dan di-mount ulang melalui **Mount Manager**, karena proses VFS rclone yang macet terkadang dapat menyimpan daftar yang bahkan lebih usang daripada yang disarankan oleh Dir cache time yang dikonfigurasi.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Menyegarkan daftar folder remote yang di-mount di RcloneView" class="img-large img-center" />

Untuk remote yang visibilitas mendekati real-time lebih penting daripada efisiensi API mentah, turunkan nilai Dir cache time di pengaturan Edit mount sebelum menyimpan dan me-mount ulang. Ada trade-off di sini: menyetel nilai ini terlalu rendah pada remote yang sibuk meningkatkan jumlah permintaan daftar yang dikirim RcloneView, yang dapat memicu pembatasan tingkat sisi penyedia pada layanan yang membatasi jumlah panggilan API per menit.

## Memilih Cache Mode Bersamaan dengan Dir Cache Time

Dir cache time dan VFS Cache mode menyelesaikan masalah yang berbeda, sehingga memperbaiki satu tanpa memeriksa yang lain sering membuat masalah yang mendasarinya hanya terselesaikan separuh. Jika file yang sudah dihapus masih terlihat dapat diakses di mount (bukan file baru yang gagal muncul), itu lebih mungkin merupakan gejala Cache mode — default **writes** menyimpan cache konten file yang baru ditulis secara lokal, sementara **full** juga menyimpan cache konten yang dibaca, dan pada kedua kasus salinan yang di-cache secara lokal dapat bertahan lebih lama daripada status remote saat ini hingga cache tervalidasi. Memadukan Dir cache time yang lebih singkat dengan Cache mode yang sesuai dengan cara remote benar-benar digunakan menyelesaikan sebagian besar keluhan daftar yang usang.

<img src="/support/images/en/blog/new-remote.png" alt="Menyesuaikan pengaturan cache mount untuk sebuah remote di RcloneView" class="img-large img-center" />

RcloneView me-mount dan sinkronisasi lebih dari 90 penyedia dari jendela yang sama di Windows, macOS, dan Linux, sehingga pengaturan cache ini berlaku sama baik mount tersebut mengarah ke Google Drive, bucket S3, atau server WebDAV yang dihosting sendiri.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka **Mount Manager**, pilih mount yang terpengaruh, dan periksa nilai Dir cache time saat ini.
3. Turunkan Dir cache time untuk remote yang sering berubah dari berbagai sumber, lalu unmount/mount ulang untuk menerapkannya.
4. Tinjau juga pengaturan Cache mode jika konten file yang usang, bukan hanya daftar yang usang, adalah gejala sebenarnya.

Mount yang mencerminkan cloud secara akurat, dengan jadwal yang sesuai dengan cara remote sebenarnya digunakan, lebih baik daripada menebak-nebak "mengapa ini tidak tersinkronisasi" setiap saat.

---

**Panduan Terkait:**

- [VFS Cache — Meningkatkan Performa Mount untuk Drive Cloud di RcloneView](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [Mengatasi Error Disk Penuh VFS Cache — Kelola Cache Mount dengan RcloneView](https://rcloneview.com/support/blog/fix-vfs-cache-disk-full-errors-rcloneview)
- [Mengatasi Error Mount Rclone dan FUSE di RcloneView](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)

<CloudSupportGrid />
