---
slug: fix-mount-slow-file-open-vfs-cache-mode-rcloneview
title: "Atasi Pembukaan File yang Lambat di Mount Cloud — Atur VFS Cache dengan RcloneView"
authors:
  - alex
description: "Atasi pembukaan file yang lambat pada drive cloud yang di-mount dengan menyesuaikan mode cache, ukuran cache, dan waktu cache direktori di Mount Manager RcloneView."
keywords:
  - atasi mount cloud lambat
  - drive ter-mount lambat membuka file
  - mode VFS cache
  - performa rclone mount
  - dir cache time
  - drive cloud lag
  - mount RcloneView
  - rclone GUI
  - pemecahan masalah mount
tags:
  - RcloneView
  - troubleshooting
  - tips
  - mount
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Atasi Pembukaan File yang Lambat di Mount Cloud — Atur VFS Cache dengan RcloneView

> Pengaturan cache memengaruhi respons drive cloud yang di-mount, dan Anda dapat mengubahnya untuk setiap mount di Mount Manager.

Drive cloud yang di-mount terasa seperti disk lokal sampai Anda mengklik dua kali file besar lalu harus menunggu. Folder lambat ditampilkan, aplikasi macet saat menyimpan, atau media tersendat. RcloneView menyediakan opsi VFS cache di balik setiap mount, sehingga Anda dapat menyesuaikannya per remote alih-alih menebak-nebak.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Periksa Mode Cache Terlebih Dahulu

Buka Mount Manager dari tab Remote dan edit mount tersebut. Mode cache menawarkan off, minimal, writes, dan full. Defaultnya adalah writes, yang menyimpan cache untuk file yang ditulis ke drive. Jika Anda sering membaca file yang sama berulang kali, seperti dokumen atau media, full juga menyimpan cache untuk pembacaan, sehingga pembukaan berikutnya dapat dilayani dari disk lokal. Off adalah pengaturan paling ringan, tetapi mengirim setiap pembacaan ke cloud.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Pengaturan Mount Manager di RcloneView" class="img-large img-center" />

Edit dan Delete dinonaktifkan saat drive sedang di-mount, jadi lakukan unmount terlebih dahulu, ubah pengaturan, lalu mount lagi.

## Tentukan Ukuran Cache dan Waktu Direktori

Ukuran maksimum cache secara default adalah -1, artinya tanpa batas ukuran, yang dapat memenuhi disk kecil. Tetapkan batas yang sesuai dengan ruang kosong Anda, dan gunakan cache max age untuk mengatur berapa lama data cache tetap valid. Dir cache time mengatur berapa lama daftar folder diingat: nilai yang lebih panjang mengurangi pencarian folder berulang, tetapi perubahan yang dibuat orang lain membutuhkan waktu lebih lama untuk muncul.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Me-mount folder remote dari toolbar Explorer" class="img-large img-center" />

Bayangkan seorang arsitek membuka gambar kerja 300 MB dari mount bersama. Mode cache full ditambah batas ukuran yang masuk akal berarti pembukaan pertama mengunduh file, dan pembukaan berikutnya membaca dari disk lokal.

## Sesuaikan Alat dengan Pekerjaan

Mount ideal untuk membuka dan mengedit file satuan. Untuk memindahkan seluruh folder, job sinkronisasi atau salin lebih mudah dipantau daripada menyeret file melalui drive, dan sinkronisasi, salin, serta Folder Compare tersedia dengan lisensi FREE. Di Windows tipe mount defaultnya adalah cmount, dan di Linux serta macOS adalah nfsmount; Linux juga memerlukan FUSE terpasang.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Menggunakan job sinkronisasi untuk transfer massal sebagai pengganti mount" class="img-large img-center" />

Jika masalah berlanjut, aktifkan logging rclone di Settings, atur levelnya ke DEBUG, mulai ulang rclone bawaan, lalu reproduksi masalahnya.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka Mount Manager, unmount drive yang lambat, lalu klik Edit.
3. Ubah mode cache ke full untuk pekerjaan yang banyak membaca dan atur ukuran maksimum cache.
4. Naikkan dir cache time jika penjelajahan lambat, lalu Save dan mount kembali.

Dengan pengaturan cache yang disesuaikan dengan cara Anda bekerja, drive cloud yang di-mount dapat berperilaku sesuai kebutuhan alur kerja Anda.

---

**Panduan Terkait:**

- [VFS Cache — Performa Mount di RcloneView](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [Atasi Error Disk Penuh VFS Cache dengan RcloneView](https://rcloneview.com/support/blog/fix-vfs-cache-disk-full-errors-rcloneview)
- [Mount Penyimpanan Cloud sebagai Drive Lokal dengan RcloneView](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)

<CloudSupportGrid />
