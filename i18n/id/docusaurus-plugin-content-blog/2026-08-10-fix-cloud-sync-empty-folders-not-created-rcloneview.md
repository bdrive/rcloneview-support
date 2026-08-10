---
slug: fix-cloud-sync-empty-folders-not-created-rcloneview
title: "Folder Kosong Hilang Setelah Sinkronisasi — Cara Mengatasinya dengan RcloneView"
authors:
  - robin
description: "Folder kosong menghilang setelah sinkronisasi cloud? Pelajari mengapa rclone melewatinya secara default dan cara memperbaikinya di RcloneView dengan satu pengaturan."
keywords:
  - folder kosong tidak tersinkronisasi
  - direktori kosong rclone
  - folder hilang sinkronisasi cloud
  - pemecahan masalah RcloneView
  - sinkronisasi struktur folder
  - membuat direktori kosong rclone
  - memperbaiki kesalahan sinkronisasi cloud
  - pengaturan sinkronisasi RcloneView
  - struktur folder cadangan cloud
tags:
  - RcloneView
  - troubleshooting
  - sync
  - cloud-sync
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Folder Kosong Hilang Setelah Sinkronisasi — Cara Mengatasinya dengan RcloneView

> Folder placeholder dan direktori proyek kosong sering menghilang setelah sinkronisasi cloud — berikut pengaturan yang mengembalikannya.

Sebuah tim memindahkan struktur folder ke cloud dan menyadari bahwa separuh dari direktori placeholder kosong — yang dicadangkan untuk file mendatang, hasil kerja klien, atau bucket arsip — sama sekali tidak muncul di tujuan. Ini adalah perilaku default yang diharapkan pada rclone: operasi sinkronisasi hanya membuat ulang direktori yang berisi file. RcloneView menyediakan pengaturan yang diperlukan untuk mengubah hal ini, dan mengetahui letaknya menghemat banyak pekerjaan ulang yang membingungkan.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Folder Kosong Dilewati

Mesin sinkronisasi dan penyalinan rclone menelusuri pohon sumber dan mentransfer objek — file. Direktori tanpa file sama sekali tidak menghasilkan operasi transfer apa pun, sehingga secara default tujuan tidak pernah mengetahui bahwa direktori tersebut seharusnya ada. Ini bukan bug; begitulah cara sebagian besar API penyimpanan cloud merepresentasikan "folder" sejak awal — sebagai efek samping dari kunci objek, bukan sebagai entitas mandiri. Hasilnya secara praktis, pohon sumber dengan folder placeholder yang disengaja (folder `03-invoices/` yang menunggu file bulan depan, atau struktur kategori yang diharapkan klien) bisa tiba di tujuan dengan bagian yang hilang.

Hal ini menjadi sangat terlihat saat Folder Compare atau migrasi awal, di mana struktur tujuan perlu secara visual mencerminkan sumber bahkan sebelum file mulai masuk ke dalamnya.

## Solusinya: Buat Direktori Kosong

Sync wizard RcloneView menyertakan sakelar **Buat direktori kosong** di Langkah 1 (Konfigurasi Penyimpanan), bersama dengan pemilihan remote dan folder sumber/tujuan. Mengaktifkannya memberi tahu operasi sinkronisasi yang mendasarinya untuk juga membuat ulang direktori yang tidak memiliki file, sehingga pohon folder tujuan cocok persis dengan struktur sumber — bukan hanya file di dalamnya.

<img src="/support/images/en/blog/new-remote.png" alt="Langkah 1 sync wizard RcloneView dengan opsi buat direktori kosong" class="img-large img-center" />

Untuk migrasi struktural satu kali, jalankan Dry Run terlebih dahulu dengan opsi diaktifkan. Dry Run mencantumkan dengan tepat folder dan file mana yang akan dibuat tanpa menyentuh tujuan, cara tercepat untuk memastikan masalah folder kosong benar-benar teratasi sebelum melakukan transfer.

## Mengonfirmasi Hasil dengan Folder Compare

Setelah menjalankan sinkronisasi, gunakan Folder Compare RcloneView untuk memeriksa kedua sisi direktori demi direktori. RcloneView me-mount DAN mensinkronkan 90+ penyedia dari satu jendela, di Windows, macOS, dan Linux, sehingga Anda dapat membandingkan pohon sumber dan tujuan secara visual berdampingan tanpa berpindah alat. Filter "Tampilkan file hanya di kiri" dan "Tampilkan file hanya di kanan" langsung menunjukkan apakah sebuah folder berhasil dipindahkan.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Tampilan folder compare menunjukkan struktur folder yang cocok antara sumber dan tujuan" class="img-large img-center" />

Jika Anda memelihara struktur ini dalam jangka panjang, bukan hanya migrasi satu kali, simpan pekerjaan dengan opsi direktori kosong dicentang agar setiap eksekusi terjadwal terus membuat ulang folder placeholder sesuai kebutuhan.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Menjadwalkan pekerjaan sinkronisasi RcloneView berulang untuk menjaga struktur folder kosong tetap terkini" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka sync wizard dan pilih remote sumber dan tujuan Anda.
3. Di Langkah 1, aktifkan **Buat direktori kosong** sebelum mengonfigurasi filter.
4. Jalankan Dry Run untuk memastikan struktur folder, lalu jalankan sinkronisasi.

Struktur folder yang cocok di kedua sisi membuat onboarding anggota tim baru dan audit penyimpanan jauh lebih bebas dari kesalahan.

---

**Panduan Terkait:**

- [Folder Kosong dan Izin macOS — Perbaiki dengan RcloneView](https://rcloneview.com/support/blog/fix-macos-empty-folders-permissions-rcloneview)
- [Bersihkan Sampah Kosong di Penyimpanan Cloud dengan RcloneView](https://rcloneview.com/support/blog/cleanup-empty-trash-cloud-storage-rcloneview)
- [Perbaiki File Hilang Setelah Transfer pada Sinkronisasi Cloud — RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)

<CloudSupportGrid />
