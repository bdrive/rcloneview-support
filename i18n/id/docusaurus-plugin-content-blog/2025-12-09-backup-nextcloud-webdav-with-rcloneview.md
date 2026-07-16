---
slug: backup-nextcloud-webdav-with-rcloneview
title: "Mencadangkan Drive Nextcloud dan WebDAV dengan RcloneView: Sinkronisasi Visual, Penjadwalan, dan Pemeriksaan Integritas"
authors:
  - tayson
description: "Lindungi Nextcloud atau drive WebDAV apa pun Anda dengan RcloneView - tambahkan remote, pratinjau perbedaan, jadwalkan pencadangan berversi, dan verifikasi integritas tanpa perlu menghafal flag CLI."
keywords:
  - nextcloud backup
  - webdav backup
  - rcloneview webdav
  - nextcloud to s3
  - webdav to google drive
  - cloud to cloud backup
  - rclone webdav gui
  - versioned backup
  - rclone check
  - cloud automation
tags:
  - RcloneView
  - backup
  - webdav
  - nextcloud
  - cloud-storage
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mencadangkan Drive Nextcloud dan WebDAV dengan RcloneView: Sinkronisasi Visual, Penjadwalan, dan Pemeriksaan Integritas

> Jaga keamanan Nextcloud atau drive WebDAV apa pun Anda dengan mencerminkannya ke Google Drive, S3/Wasabi, atau cloud lain-tanpa perlu command line. RcloneView menampilkan pratinjau perubahan, menjadwalkan tugas, dan memverifikasi integritas sehingga pencadangan Anda tetap dapat diandalkan.

Nextcloud dan layanan WebDAV lainnya menjadi tulang punggung berbagi tim dan penyimpanan self-hosted, tetapi tetap memerlukan pencadangan di luar lokasi (off-site). RcloneView membungkus mesin rclone dalam GUI, memungkinkan Anda menambahkan WebDAV sekali, memasangkannya dengan cloud tujuan, dan mengotomatiskan pencadangan yang terverifikasi dengan Job Scheduler dan Compare.

<!-- truncate -->


<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Mengapa mencadangkan WebDAV/Nextcloud dengan RcloneView

- Visualisasikan perbedaan sebelum sinkronisasi dengan **Compare** untuk menghindari penimpaan data.
- Gunakan kembali remote WebDAV yang sama untuk mencadangkan ke beberapa target (Drive, S3, Wasabi).
- Jadwalkan pencadangan berulang dan simpan log di Job History.
- Aktifkan opsi checksum dalam alur copy/sync untuk memastikan integritas data (jika didukung).

## Menghubungkan remote WebDAV/Nextcloud Anda

1. Klik **`+ New Remote`** -> pilih **WebDAV**.
2. Masukkan **URL**, **username**, **password/app password** Anda, dan pilih preset vendor yang sesuai (misalnya, Nextcloud).
3. Beri nama yang jelas, seperti `Nextcloud_Main`.  
   <img src="/support/images/en/blog/new-remote.png" alt="New remote wizard" class="img-medium img-center" />

Butuh referensi? Lihat panduan WebDAV: [Menambahkan remote WebDAV/Nextcloud](https://rcloneview.com/support/howto/remote-storage-connection-settings/webdav).

## Memilih tujuan pencadangan

- **Google Drive / Workspace** untuk berbagi dan riwayat yang mudah.
- Cloud yang **kompatibel dengan S3** (Amazon S3, Wasabi, R2) untuk biaya yang dapat diprediksi dan aturan siklus hidup (lifecycle rules).
- **WebDAV lain** untuk salinan cermin (mirror) sederhana.

Tambahkan remote tujuan dengan `+ New Remote`, lalu buka keduanya di **Explorer -> Browse** secara berdampingan.  
<img src="/support/images/en/blog/open-multiple-google-drive-remotes.png" alt="Side-by-side remotes" class="img-medium img-center" />

## Pratinjau sebelum menyalin

- Pilih folder sumber (WebDAV) dan tujuan di Explorer.
- Klik **Compare** untuk menyoroti item yang hilang, lebih baru, atau identik.
- Gunakan **`Copy ->`** atau **`<- Copy`** untuk memindahkan hanya yang Anda butuhkan, atau hapus file yang tidak diperlukan dengan aman.

## Menjalankan pencadangan satu kali dengan Sync

1. Pilih folder sumber/tujuan.
2. Klik **Sync** dan aktifkan **Dry run** terlebih dahulu untuk melihat perubahan yang direncanakan.
3. Pada opsi Sync, pertahankan concurrency yang moderat jika server Anda melakukan throttling; Anda dapat menaikkan transfers/checkers di Settings setelah pengujian.
4. Pantau progres di tab **Transfer** dan **Completed**; tinjau log untuk mengetahui adanya batas API.

## Menjadwalkan pencadangan berulang (atur dan lupakan)

1. Di dialog Sync, klik **Save to Jobs** (atau buka **Job Manager -> Add Job**).
2. Pilih jadwal (harian atau hari tertentu) dan arahkan tujuan ke folder bertanggal jika Anda ingin salinan point-in-time yang sederhana.
3. Aktifkan notifikasi dan pantau **Job History** untuk detail keberhasilan/kegagalan.  

- Panduan: [Membuat Sync Jobs](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs), [Menjalankan & Mengelola Jobs](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job), [Penjadwalan Job](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution), [Pemantauan Transfer](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

## FAQ Singkat

**Apakah ini berfungsi untuk WebDAV apa pun, tidak hanya Nextcloud?**  
Ya - pilih WebDAV dan vendor/preset yang sesuai atau "other" untuk mencocokkan layanan Anda.

**Bisakah saya mencadangkan ke beberapa tujuan?**  
Ya - gunakan kembali sumber WebDAV yang sama di beberapa job (misalnya, Nextcloud -> Drive dan Nextcloud -> Wasabi).

**Apakah job terjadwal tetap berjalan jika aplikasi terkunci?**  
Job berjalan sesuai konfigurasi; App Lock hanya melindungi akses UI (lihat [Mengaktifkan App Lock](/tutorials/enable-app-lock)).

## Penutup

RcloneView membuat pencadangan WebDAV/Nextcloud menjadi visual dan dapat diprediksi: tambahkan remote sekali, pratinjau perubahan, sesuaikan performa, dan jadwalkan job yang terverifikasi. Lindungi file tim Anda dengan salinan off-site yang dapat dipercaya-tanpa perlu keahlian CLI.

<CloudSupportGrid />
