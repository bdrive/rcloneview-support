---
slug: declutter-cloud-photo-library-rcloneview
title: "Rapikan Perpustakaan Foto Cloud dengan RcloneView: Bandingkan, Bersihkan, dan Lindungi Setiap Momen"
authors:
  - tayson
description: "Satukan folder foto dan video yang berserakan di Google Drive, Dropbox, NAS, dan S3; bandingkan, bersihkan duplikat, dan jadwalkan pencadangan yang terlindungi dengan RcloneView."
keywords:
  - rcloneview
  - photo backup
  - cloud photo dedup
  - compare cloud storage
  - multi cloud
  - google drive
  - dropbox
  - s3
  - nas backup
  - checksum
tags:
  - RcloneView
  - cloud-storage
  - backup
  - sync
  - file-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Rapikan Perpustakaan Foto Cloud dengan RcloneView: Bandingkan, Bersihkan, dan Lindungi Setiap Momen

> Bosan dengan file RAW dan JPEG yang sama tersebar di Google Drive, Dropbox, dan NAS? RcloneView memungkinkan Anda melihat file mana yang terduplikasi, membersihkannya, dan mengunci pencadangan yang terlindungi -- semua tanpa harus bergulat dengan flag CLI.

Jika riwayat foto dan video Anda tersimpan di tiga tempat atau lebih, pergeseran data pasti terjadi: duplikat, edit yang hilang, dan folder yang tidak ada yang ingat lagi. RcloneView membungkus kekuatan rclone dalam ruang kerja visual sehingga Anda dapat membandingkan sumber, mount cloud seperti drive lokal, dan menjalankan pekerjaan sinkronisasi yang berulang untuk menjaga satu perpustakaan induk yang terlindungi.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Mengapa Perpustakaan Terpadu Itu Penting

- Berhenti membayar untuk menyimpan album yang sama dua kali di berbagai penyedia.
- Jaga satu sumber kebenaran untuk Lightroom, Capture One, atau Photos.
- Buktikan integritas pencadangan dengan proses yang tercatat dan terverifikasi checksum, bukan sekadar tebakan.

## Hubungkan Cloud dan Mount Ruang Kerja yang Bersih

- Tambahkan setiap lokasi sekali saja: Google Drive, Dropbox, OneDrive, S3/Wasabi/R2, atau NAS melalui `+ New Remote`. Panduan: [add-oath-online-login](/howto/remote-storage-connection-settings/add-oath-online-login) dan [/support/howto/remote-storage-connection-settings/s3](/howto/remote-storage-connection-settings/s3). 

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />. 

- Mount sumber-sumber utama agar terasa lokal bagi alat kerja Anda: [Mount Penyimpanan Cloud sebagai Drive Lokal](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive).
- Gunakan path yang konsisten (misalnya, `/Volumes/Photos` atau `X:\Photos`) sehingga editor dan otomatisasi tidak rusak saat Anda berpindah mesin.  

 <img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />. 


## Temukan Duplikat dan Pergeseran Data dengan Compare

- Jalankan **Compare** antara dua lokasi mana pun (misalnya, Dropbox vs NAS) untuk melihat file yang lebih baru, hilang, atau tidak cocok sebelum melakukan sinkronisasi: [Bandingkan isi folder](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- Filter berdasarkan ekstensi untuk mengisolasi file RAW, JPEG, atau file sidecar saat meninjau perbedaan.  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />. 

## Bangun Perpustakaan Induk yang Terlindungi dengan Pekerjaan Sinkronisasi

- Pilih sumber kebenaran Anda (biasanya NAS atau folder cloud yang paling lengkap) dan buat sinkronisasi satu arah ke target pencadangan Anda (misalnya, S3/Wasabi dengan kebijakan siklus hidup). Panduan: [Buat Pekerjaan Sinkronisasi](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs), dan [Jalankan & Kelola Pekerjaan](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job).
- Gunakan preset pekerjaan untuk album atau tahun (misalnya, `2020/`, `2021/`) agar setiap proses tetap kecil dan dapat diprediksi.
- Pilih **copy** demi keamanan saat menggabungkan; beralih ke **sync** hanya setelah Anda percaya pada target dan memiliki riwayat proses yang bersih.
- Jalankan dry-run terlebih dahulu dengan flag rclone bawaan untuk memvalidasi include dan exclude.  

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />. 


## Jadwalkan, Pantau, dan Verifikasi

- Aktifkan penjadwalan agar perpustakaan induk Anda diperbarui setiap malam, bukan hanya saat seseorang teringat: [Penjadwalan Pekerjaan](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution). 

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />. 

- Gunakan log Job History sebagai jejak audit Anda; jika suatu proses gagal, mulai ulang dari pekerjaan yang sama tanpa perlu mengonfigurasi ulang.  



## Layani Editor dan Keluarga dengan Cepat

- Simpan salinan cepat proyek terkini yang di-mount secara lokal sementara arsip yang lebih lama tetap berada di S3/Wasabi.
- Buat pekerjaan kedua untuk mendorong ekspor JPEG ringan ke cloud berbagi (Drive atau Dropbox) sementara file RAW tetap berada di vault induk Anda.
- Untuk pemotretan saat bepergian, mount cloud di laptop dan biarkan penjadwal melakukan backfill ke NAS saat Anda terhubung kembali.

Siap merapikan kekacauan dan berhenti membayar untuk piksel duplikat? Mount, bandingkan, dan jadwalkan langkah Anda menuju satu perpustakaan tunggal yang terlindungi dengan RcloneView.

<CloudSupportGrid />
