---
slug: manage-selectel-cloud-sync-backup-rcloneview
title: "Kelola Penyimpanan Selectel — Sinkronisasi dan Pencadangan File dengan RcloneView"
authors:
  - alex
description: "Hubungkan Selectel Object Storage ke RcloneView untuk penjelajahan file, sinkronisasi, mount, dan pencadangan yang kompatibel dengan S3 di Windows, macOS, dan Linux."
keywords:
  - penyimpanan Selectel
  - Selectel Object Storage
  - GUI penyimpanan kompatibel S3
  - RcloneView Selectel
  - software pencadangan cloud
  - sinkronisasi Selectel ke cloud
  - kelola penyimpanan cloud dengan GUI
  - alat sinkronisasi object storage
  - pengelola file multi-cloud
  - pengaturan kredensial S3
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Penyimpanan Selectel — Sinkronisasi dan Pencadangan File dengan RcloneView

> Jelajahi, sinkronkan, dan cadangkan bucket Selectel Object Storage dari antarmuka grafis, alih-alih mengedit kredensial S3 secara manual di file konfigurasi.

Selectel Object Storage diakses melalui protokol kompatibel S3 milik rclone, yang berarti untuk terhubung Anda perlu memasukkan Access Key, Secret Key, dan endpoint dengan benar sejak percobaan pertama. RcloneView mengubah pengaturan tersebut menjadi formulir terpandu dan memadukannya dengan penjelajah file lengkap, mesin sinkronisasi, dan penjadwal tugas, sehingga tim yang sudah menyimpan data di Selectel dapat mengelolanya dengan cara yang sama seperti mengelola remote lainnya dalam satu jendela.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Selectel sebagai Remote yang Kompatibel dengan S3

Menambahkan Selectel di RcloneView mengikuti alur input kredensial yang sama seperti untuk layanan kompatibel S3 lainnya: buka tab Remote > New Remote, pilih opsi kompatibel S3, lalu masukkan Access Key ID, Secret Access Key, dan endpoint Selectel. Connect Manager juga memungkinkan RcloneView mengarah ke instance rclone eksternal, jika integrasi Selectel Anda sudah berjalan melalui daemon rclone bersama di server, alih-alih menggunakan rclone bawaan.

Setelah disimpan, remote tersebut muncul sebagai tab tersendiri di panel Explorer, berdampingan dengan penyimpanan cloud atau lokal lain yang sudah dikonfigurasi. Remote Alias dapat memperpendek path bucket yang bertingkat dalam menjadi nama singkat yang lebih mudah dijelajahi sehari-hari.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Selectel S3-compatible remote in RcloneView" class="img-large img-center" />

## Menjelajahi, Menyinkronkan, dan Mencadangkan Data Selectel

Setelah remote terhubung, tata letak dua panel File Explorer memungkinkan Anda membandingkan isi Selectel dengan folder lokal atau remote cloud lain secara berdampingan. Menyeret file antara dua remote yang berbeda akan memicu penyalinan, dan menu klik kanan mencakup ganti nama, hapus, lihat ukuran, serta unduh/unggah untuk pengelolaan file sehari-hari.

Untuk pencadangan berulang, wizard Sync memandu Anda melalui empat langkah untuk sumber dan tujuan, konkurensi transfer, dan aturan filter, dengan opsi seperti usia file maksimum dan filter bawaan untuk jenis media atau dokumen. Anda dapat menghubungkan layanan kompatibel S3 seperti Selectel dengan akses baca/tulis penuh pada lisensi FREE — tidak perlu upgrade hanya untuk menulis data kembali ke bucket. Sinkronisasi 1:N dapat mencerminkan bucket Selectel yang sama ke beberapa tujuan dalam satu tugas, berguna ketika cadangan perlu tersimpan baik di drive lokal maupun remote cloud kedua.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job between Selectel storage and another remote" class="img-large img-center" />

## Mengotomatiskan Pencadangan Selectel Berulang

Job Manager menyimpan setiap tugas sinkronisasi, salin, atau pindah dalam satu daftar, dan setiap proses dicatat di Job History lengkap dengan status, ukuran transfer, dan jumlah file. Dry Run memberikan pratinjau tepat file mana yang akan disalin atau dihapus sebelum transfer sesungguhnya berjalan — layak diperiksa sebelum sinkronisasi besar pertama ke bucket Selectel baru.

Pengguna lisensi PLUS dapat melampirkan jadwal bergaya crontab ke sebuah tugas sehingga pencadangan Selectel berjalan otomatis pada interval berulang, dengan opsi simulasi untuk melihat pratinjau waktu eksekusi mendatang sebelum menyimpan jadwal.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring backup job for Selectel storage" class="img-large img-center" />

## Mount Selectel sebagai Drive Lokal

Penyimpanan Selectel juga dapat di-mount sebagai drive virtual, sehingga aplikasi desktop lain dapat membaca dan menulis isi bucket seolah-olah itu adalah file lokal. Konfigurasi mount mencakup mode cache VFS (default: writes), batas ukuran cache, dan mode hanya-baca, dan mount dapat dimulai dari toolbar panel remote atau dari Mount Manager khusus.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a Selectel bucket as a local drive in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka tab Remote > New Remote dan pilih opsi kompatibel S3 untuk memasukkan kredensial Selectel dan endpoint Anda.
3. Gunakan Folder Compare atau seret dan lepas untuk memindahkan data yang ada ke Selectel, lalu siapkan tugas Sync untuk pencadangan berkelanjutan.
4. Tambahkan tugas ke Job Manager dan, pada PLUS, lampirkan jadwal agar pencadangan berjalan tanpa campur tangan manual.

Setelah remote dikonfigurasi, penyimpanan Selectel berperilaku seperti koneksi lain di RcloneView — dapat dijelajahi, disinkronkan, di-mount, dan siap dicadangkan sesuai jadwal.

---

**Panduan Terkait:**

- [Kelola IONOS Object Storage — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-ionos-object-storage-cloud-sync-rcloneview)
- [Kelola Vultr Object Storage — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-vultr-object-storage-cloud-sync-backup-rcloneview)
- [Kelola Linode Object Storage — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-linode-object-storage-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
