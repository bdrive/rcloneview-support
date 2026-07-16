---
slug: migrate-box-to-wasabi-rcloneview
title: "Migrasi Box ke Wasabi — Transfer File dengan RcloneView"
authors:
  - casey
description: "Pindahkan file dari Box ke penyimpanan cloud hot Wasabi dengan RcloneView, menggunakan folder compare, sync job, dan dry run untuk migrasi yang aman."
keywords:
  - migrasi Box ke Wasabi
  - transfer Box ke Wasabi
  - migrasi cloud Box
  - penyimpanan hot Wasabi
  - RcloneView Box Wasabi
  - alat transfer cloud ke cloud
  - pencadangan penyimpanan Box
  - perangkat lunak sinkronisasi Wasabi
  - pindahkan file antar cloud
  - migrasi Box S3
tags:
  - box
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Box ke Wasabi — Transfer File dengan RcloneView

> Pindahkan file dan folder dari akun Box langsung ke penyimpanan hot Wasabi yang kompatibel dengan S3, tanpa harus melewati disk lokal terlebih dahulu.

Tim yang sudah menggunakan Box untuk kolaborasi dokumen terkadang membutuhkan solusi lain untuk penyimpanan jangka panjang, dan penyimpanan objek Wasabi yang kompatibel dengan S3 menjadi rumah berikutnya untuk arsip, pustaka media, atau set pencadangan. RcloneView terhubung ke kedua layanan dari jendela yang sama, sehingga migrasi menjadi transfer cloud-ke-cloud langsung, bukan siklus unduh-lalu-unggah yang lambat melalui komputer lokal.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Box dan Wasabi sebagai Remote

Box ditambahkan melalui OAuth — mengklik New Remote pada tab Remote akan membuka jendela browser untuk login akun, dan RcloneView terhubung secara otomatis setelah autentikasi selesai. Akun bisnis yang membutuhkan tampilan seluruh perusahaan dapat mengatur `box_sub_type = enterprise` saat pengaturan. Wasabi ditambahkan melalui tipe remote yang kompatibel dengan S3, menggunakan Access Key, Secret Key, dan endpoint Wasabi untuk region tujuan.

Setelah kedua remote dikonfigurasi, keduanya muncul sebagai tab terpisah di Explorer, dan Anda dapat membuka Box di satu panel dan Wasabi di panel lainnya untuk melihat kedua struktur file berdampingan sebelum memindahkan apa pun.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and Wasabi remotes in RcloneView" class="img-large img-center" />

## Membandingkan Sebelum Transfer

Folder Compare menempatkan folder sumber Box dan folder tujuan Wasabi berdampingan, lalu menandai apa yang hilang di masing-masing sisi, apa yang sudah identik, dan apa yang berbeda ukurannya. Untuk migrasi pertama kali, ini adalah cara tercepat untuk memastikan seluruh pustaka Box sudah tercakup sebelum menjalankan sinkronisasi massal, dan juga berfungsi sebagai langkah verifikasi setelah transfer selesai — file mana pun yang masih ditandai "left-only" setelah penyalinan perlu diperiksa lagi.

Menyalin dari dalam Folder Compare hanya menyentuh file yang belum ada di tujuan atau yang berbeda ukurannya, sehingga migrasi yang belum selesai dapat dilanjutkan tanpa perlu menyalin ulang file yang sudah berhasil dipindahkan ke Wasabi.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Box and Wasabi folders before migration" class="img-large img-center" />

## Menjalankan Migrasi dengan Sync

Untuk transfer massal, empat langkah pada wizard Sync menangani pemilihan sumber/tujuan, konkurensi transfer, dan penyaringan — berguna untuk mengecualikan tipe file yang tidak ingin dibawa ke Wasabi, seperti file kolaborasi sementara milik Box. Dry Run menampilkan pratinjau file mana saja yang akan disalin sebelum ada perpindahan apa pun, yang penting ketika pustaka Box memiliki konten yang terkumpul selama bertahun-tahun dan kesalahan akan mahal untuk diperbaiki.

RcloneView melakukan mount dan sinkronisasi di lebih dari 90 penyedia dari satu jendela di Windows, macOS, dan Linux, sehingga alur kerja yang sama yang digunakan di sini untuk Box dan Wasabi berlaku untuk pasangan remote lainnya tanpa perlu mempelajari alat baru. Setelah sync job disimpan di Job Manager, riwayatnya — status, ukuran yang ditransfer, dan durasi — tetap tersedia untuk referensi berikutnya.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Running a sync job from Box to Wasabi in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan Box melalui login OAuth dan Wasabi melalui kredensial yang kompatibel dengan S3 di Remote Manager.
3. Jalankan Folder Compare antara sumber Box dan tujuan Wasabi untuk memastikan cakupannya sebelum transfer.
4. Buat Sync job dengan Dry Run diaktifkan terlebih dahulu, lalu jalankan yang sesungguhnya dan pantau progresnya di tab Transferring.

Dengan kedua remote terlihat di explorer yang sama, memindahkan pustaka Box ke Wasabi menjadi satu alur kerja terpandu, bukan latihan yang membutuhkan banyak alat.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Box — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Kelola Penyimpanan Wasabi — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Migrasi Box ke Google Drive — Transfer File dengan RcloneView](https://rcloneview.com/support/blog/migrate-box-to-google-drive-rcloneview)

<CloudSupportGrid />
