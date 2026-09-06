---
slug: fix-cloud-sync-not-detecting-new-files-rcloneview
title: "Memperbaiki Sinkronisasi Cloud yang Tidak Mendeteksi File Baru — Cara Mengatasi dengan RcloneView"
authors:
  - jay
description: "Perbaiki tugas sinkronisasi cloud yang melewatkan file baru atau yang baru diubah di RcloneView dengan menyesuaikan pengaturan cache, filter, dan perilaku refresh."
keywords:
  - sinkronisasi cloud tidak mendeteksi file baru
  - rcloneview sinkronisasi file hilang
  - memperbaiki tugas sinkronisasi tidak diperbarui
  - cache direktori daftar usang
  - pemecahan masalah rcloneview
  - masalah refresh sinkronisasi cloud
  - file baru tidak tersinkronisasi
  - memperbaiki deteksi sinkronisasi rclone
  - tugas tidak mengambil perubahan
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - job-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Memperbaiki Sinkronisasi Cloud yang Tidak Mendeteksi File Baru — Cara Mengatasi dengan RcloneView

> Ketika tugas sinkronisasi berjalan lancar tetapi meninggalkan file yang benar-benar baru, penyebabnya hampir selalu adalah daftar folder yang usang, bukan koneksi yang rusak.

Pola dukungan yang sering muncul: tugas sinkronisasi selesai tanpa error, namun file yang ditambahkan ke folder sumber beberapa menit sebelumnya tidak pernah muncul di tujuan. Ini terlihat seperti kehilangan data, tetapi dalam kebanyakan kasus tugas tersebut hanya membaca daftar direktori yang di-cache alih-alih status remote saat ini. RcloneView memberi Anda alat untuk mendiagnosis dan memperbaiki ini tanpa menerka-nerka.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Periksa Apakah Tampilan Explorer Hanya Usang

Sebelum mengubah pengaturan tugas apa pun, pastikan file benar-benar hilang dari sinkronisasi, bukan hanya tersembunyi dari tampilan. Buka remote sumber di panel Explorer dan tekan F5 (atau Cmd+R di macOS) untuk memaksa Reload. Daftar file RcloneView dapat menyimpan cuplikan folder yang usang jika Anda belum menyegarkan sejak file ditambahkan, dan ini saja dapat menyelesaikan sejumlah besar laporan "file hilang".

Jika file muncul setelah Reload manual tetapi tugas sinkronisasi masih melewatkannya pada eksekusi terakhirnya, masalahnya ada pada pemfilteran atau perilaku cache tugas itu sendiri, bukan pada tampilan Explorer.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Menjalankan tugas sinkronisasi secara manual di RcloneView untuk memaksa pemindaian baru" class="img-large img-center" />

## Tinjau Aturan Filter dan Pengaturan Max File Age

Langkah 3 dari wizard sinkronisasi memungkinkan Anda mengatur filter Max File Age, dan mudah untuk meninggalkan nilai yang terlalu agresif setelah menguji tugas. Jika Max File Age diatur terlalu sempit, file yang berada di luar jendela tersebut — termasuk beberapa file yang baru ditambahkan dengan stempel waktu lama yang diwarisi dari salinan cloud sebelumnya — akan dikecualikan secara diam-diam dari eksekusi. Buka Edit Job untuk sinkronisasi yang terpengaruh dan periksa langkah Filtering Settings untuk aturan Max File Age, Max File Size, atau filter kustom apa pun yang mungkin mengecualikan file baru berdasarkan nama, ekstensi, atau jalur.

RcloneView me-mount DAN mensinkronkan 90+ penyedia dari satu jendela, di Windows, macOS, dan Linux, sehingga logika pemfilteran yang sama berlaku baik Anda memecahkan masalah tugas lokal-ke-cloud maupun cloud-ke-cloud.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Meninjau pengaturan filter sinkronisasi yang dapat mengecualikan file baru" class="img-large img-center" />

## Menyingkirkan Penundaan Cache Direktori Mount

Jika file yang "hilang" berada di balik drive yang di-mount alih-alih penelusuran remote langsung, pengaturan Dir Cache Time dalam konfigurasi mount Anda biasanya menjadi penyebabnya. Waktu cache direktori yang lama mempercepat penelusuran tetapi juga berarti tampilan yang di-mount tidak akan mencerminkan file yang ditambahkan di tempat lain hingga cache tersebut kedaluwarsa. Turunkan Dir Cache Time di Mount Manager untuk remote di mana kesegaran lebih penting daripada kecepatan penelusuran mentah, atau lepas mount dan mount ulang secara manual untuk memaksa penyegaran segera.

Jalankan Dry Run pada tugas sinkronisasi setelahnya — ini mencantumkan dengan tepat file mana yang sekarang dilihat sebagai baru, sehingga Anda dapat mengonfirmasi perbaikan sebelum melakukan transfer sebenarnya.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Riwayat tugas yang menunjukkan eksekusi sinkronisasi yang telah diperbaiki setelah memperbaiki pengaturan deteksi" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Paksa Reload (F5) pada remote sumber untuk menyingkirkan kemungkinan tampilan Explorer yang usang.
3. Buka Edit Job dan periksa Filtering Settings untuk Max File Age atau aturan kustom yang mengecualikan file baru.
4. Untuk remote yang di-mount, turunkan Dir Cache Time di Mount Manager, lalu mount ulang dan jalankan kembali tugas dengan Dry Run untuk mengonfirmasi.

Sebagian besar masalah sinkronisasi "file hilang" berasal dari daftar yang di-cache atau filter yang terlewat, bukan kegagalan transfer yang sebenarnya, dan Dry Run serta Job History RcloneView memberi Anda cara cepat untuk mengonfirmasi bahwa perbaikan berhasil.

---

**Panduan Terkait:**

- [Aturan Filter — Sinkronisasi Selektif di RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Dry Run — Pratinjau Sinkronisasi Cloud di RcloneView](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [Memperbaiki Sinkronisasi Terjadwal yang Tidak Berjalan — Cara Mengatasi dengan RcloneView](https://rcloneview.com/support/blog/fix-scheduled-sync-not-running-rcloneview)

<CloudSupportGrid />
