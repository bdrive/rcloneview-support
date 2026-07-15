---
slug: immutable-backups-s3-object-lock-rcloneview
title: "Pencadangan Immutable dan Tahan Ransomware dengan S3 Object Lock di RcloneView"
authors:
  - tayson
description: Gunakan RcloneView dengan bucket S3 Object Lock untuk membangun pencadangan immutable yang tahan ransomware di AWS S3, Wasabi, Backblaze B2, atau Cloudflare R2, lengkap dengan penjadwalan, verifikasi, dan pemulihan yang cepat.
keywords:
  - s3 object lock
  - immutable backups
  - ransomware protection
  - rclone s3
  - rcloneview
  - wasabi object lock
  - cloud backup immutability
  - compliance backup
tags:
  - RcloneView
  - backup
  - security
  - s3
  - wasabi
  - r2
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Pencadangan Immutable dan Tahan Ransomware dengan S3 Object Lock di RcloneView

> Berhenti khawatir tentang rollback ransomware. Gabungkan S3 Object Lock dengan scheduler RcloneView untuk menjaga pencadangan Anda tidak dapat diubah.

Penyimpanan immutable mencegah penyerang (atau kesalahan tak sengaja) menghapus atau menimpa pencadangan Anda sebelum sempat dipulihkan. S3 Object Lock tersedia di AWS S3, Wasabi, Backblaze B2, dan Cloudflare R2. RcloneView memanfaatkan pengaturan Object Lock dan versioning pada bucket saat Anda membuat job di GUI—tanpa perlu CLI.

<!-- truncate -->

**Dokumen terkait**

- Membuat Job Sync: https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs
- Penjadwalan & Eksekusi Job (Plus): https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution
- Membandingkan folder: https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents
- Mount sebagai drive lokal: https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Mengapa Object Lock + RcloneView

- Salinan immutable: Tanggal retensi memblokir penghapusan/penimpaan selama jangka waktu yang ditentukan.
- Pilihan cloud: Berfungsi di S3, Wasabi, R2, B2, dan gateway NAS yang kompatibel dengan S3.
- Tanpa scripting: Buat job Sync di GUI, jadwalkan (Plus), dan simpan riwayat/log.
- Pemeriksaan cepat: Gunakan Compare untuk memastikan tujuan sesuai dan menampilkan versi yang dipertahankan.
- Pemulihan mudah: Mount atau Sync kembali dari bucket yang terkunci tanpa mengubah retensi.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />


## Prasyarat

- Bucket yang kompatibel dengan S3 yang dibuat dengan Object Lock diaktifkan sejak awal pembuatan.
- Versioning diaktifkan pada bucket tersebut (wajib untuk Object Lock).
- RcloneView terpasang dengan remote S3 yang sudah terhubung.
- Pengguna IAM/API dengan izin untuk `PutObject` dan `PutObjectRetention`.
- (Opsional) Lisensi Plus jika Anda ingin menjadwalkan job secara otomatis.


## Langkah 1: Aktifkan Object Lock pada bucket

1. Buat bucket dengan Object Lock diaktifkan (tidak dapat diubah setelahnya). Di AWS S3, centang "Enable Object Lock". Di Wasabi/R2/B2, pilih opsi Object Lock saat pembuatan bucket.
2. Aktifkan versioning untuk bucket tersebut.
3. Tentukan retensi default Anda: Governance (lebih mudah di-override) atau Compliance (tidak dapat di-override), serta durasi retensi (misalnya, 30-90 hari).

## Langkah 2: Arahkan job Sync/Copy ke bucket Object Lock

RcloneView tidak menampilkan flag Object Lock per objek. Sebagai gantinya, andalkan pengaturan default Object Lock + versioning pada bucket dan pastikan job Anda tetap mengarah ke tujuan tersebut.

1. Buat job **Sync** baru (atau **Copy** jika Anda tidak ingin ada penghapusan): Source = data Anda, Destination = bucket Object Lock.
2. Di **Advanced Settings**, atur jumlah transfer dan aktifkan perbandingan checksum jika kedua sisi mendukung hash.
3. Di **Filtering Settings**, kecualikan path cache/temp agar tidak membuang-buang retensi untuk data yang tidak perlu.
4. Simpan job agar pengaturan yang sama diterapkan setiap kali dijalankan (Job Manager).

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />

## Langkah 3: Jadwalkan pencadangan immutable

1. Di wizard Job (Langkah 4: Scheduling, Plus), aktifkan penjadwalan untuk job pencadangan immutable.
2. Atur kadensi harian atau per jam, dan gunakan **Simulate** untuk melihat pratinjau jalankan mendatang.
3. Atur jumlah percobaan ulang di Advanced Settings untuk koneksi yang tidak stabil.
4. Lakukan Compare manual mingguan untuk memvalidasi objek yang dipertahankan.  

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

## Langkah 4: Verifikasi retensi dan integritas

- Gunakan Compare untuk memverifikasi jumlah objek setelah unggahan.
- Di konsol S3 (atau log RcloneView), periksa bahwa objek menunjukkan `Compliance`/`Governance` dan tanggal Retain Until yang diharapkan.
- Coba hapus file uji dari tujuan; seharusnya diblokir hingga jendela retensi berakhir.  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

## Langkah 5: Pulihkan dari pencadangan immutable

Saat Anda perlu memulihkan:

1. Buat job baru: Destination (bucket Object Lock) -> Source (lokasi pemulihan), lalu jalankan Sync/Copy.
2. Untuk pemulihan ad-hoc, gunakan Mount untuk menjelajahi bucket yang terkunci dan tarik file keluar.
3. Gunakan Copy (bukan Sync) saat memulihkan jika Anda ingin menghindari penghapusan file yang lebih baru di lokasi pemulihan.

## Praktik terbaik dan penyesuaian

- Atur retensi cukup lama untuk deteksi ditambah investigasi (misalnya, 30-90 hari).
- Gunakan mode Governance untuk fleksibilitas di lingkungan uji coba; Compliance untuk produksi dan data yang diatur regulasi.
- Sesuaikan jumlah transfer di Advanced Settings untuk media besar atau image VM.
- Pertahankan setidaknya dua region atau provider (misalnya, Wasabi + R2) dan rotasi jadwal.
- Pantau biaya: Object Lock menyimpan semua versi, jadi padukan dengan lifecycle rules setelah retensi berakhir.

## Daftar periksa pemecahan masalah

- Unggahan gagal dengan AccessDenied: pastikan role IAM mengizinkan `PutObjectRetention`.
- Objek tidak terkunci: pastikan bucket dibuat dengan Object Lock dan versioning dalam status On.
- Transfer lambat: turunkan jumlah transfer atau gunakan batas bandwidth saat koneksi peering lemah.
- Pemulihan menghapus data live: gunakan Copy alih-alih Sync saat menarik data dari bucket yang terkunci.



Kunci pencadangan Anda sekali, dan biarkan RcloneView menjaganya tetap aman secara otomatis.

<CloudSupportGrid />
