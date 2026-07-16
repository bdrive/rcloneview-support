---
slug: manage-files-com-cloud-sync-backup-rcloneview
title: "Kelola Penyimpanan Files.com — Sinkronisasi dan Pencadangan File dengan RcloneView"
authors:
  - tayson
description: "Hubungkan Files.com ke RcloneView melalui SFTP atau WebDAV, jelajahi berbagi file perusahaan, dan jalankan pekerjaan sinkronisasi serta pencadangan otomatis untuk manajemen file yang aman."
keywords:
  - Files.com RcloneView
  - Files.com SFTP
  - Files.com WebDAV
  - manajemen file perusahaan
  - cloud sync Files.com
  - Files.com backup
  - SFTP cloud sync
  - transfer file aman
tags:
  - sftp
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Penyimpanan Files.com — Sinkronisasi dan Pencadangan File dengan RcloneView

> Files.com adalah platform manajemen file perusahaan yang tangguh, dan RcloneView terhubung dengannya melalui SFTP atau WebDAV sehingga Anda dapat melakukan sinkronisasi, pencadangan, dan mengelola file melalui GUI desktop yang rapi.

Files.com menyediakan transfer file terkelola berskala perusahaan dengan fitur kepatuhan, otomatisasi, dan kontrol akses yang diandalkan oleh organisasi besar. Bagi tim yang perlu mengintegrasikan Files.com ke dalam alur kerja multi-cloud yang lebih luas — melakukan sinkronisasi konten ke pencadangan cloud, memindahkan file ke penyedia penyimpanan lain, atau mengelola file secara massal — RcloneView menawarkan antarmuka grafis yang bekerja di atas protokol SFTP dan WebDAV standar. Tidak diperlukan instalasi rclone terpisah; rclone sudah terpasang di dalam RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Files.com melalui SFTP

SFTP adalah cara paling andal untuk menghubungkan RcloneView ke Files.com. Di RcloneView, klik **New Remote** lalu pilih **SFTP**. Masukkan hostname Files.com Anda (biasanya `<your-subdomain>.files.com`), username, dan kata sandi atau kunci SSH Anda. Files.com mendukung kedua metode autentikasi tersebut — autentikasi kunci SSH lebih disarankan untuk alur kerja otomatis karena menghindari penyimpanan kata sandi.

Setelah disimpan, remote SFTP Files.com akan muncul di explorer dua panel. Jelajahi struktur folder Files.com Anda, unggah dan unduh file dengan seret dan lepas, serta kelola berbagi file perusahaan Anda langsung dari antarmuka RcloneView. Progres transfer langsung ditampilkan untuk semua operasi.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Files.com as an SFTP remote in RcloneView" class="img-large img-center" />

## Menghubungkan melalui WebDAV

Files.com juga mendukung WebDAV, yang menjadi alternatif jika SFTP diblokir oleh firewall atau jika Anda lebih menyukai akses berbasis HTTP. Di RcloneView, klik **New Remote** > **WebDAV** dan masukkan URL WebDAV Files.com, username, dan kata sandi Anda. Endpoint WebDAV Files.com biasanya tersedia di `https://<subdomain>.files.com/dav/`.

WebDAV bekerja dengan baik untuk penelusuran file umum dan transfer bervolume sedang. Untuk operasi massal berkapasitas tinggi — seperti melakukan sinkronisasi ribuan file dalam pekerjaan pencadangan — SFTP umumnya menawarkan performa lebih baik dan penanganan file besar yang lebih andal.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Files.com to cloud backup storage in RcloneView" class="img-large img-center" />

## Menjalankan Pekerjaan Sinkronisasi dan Pencadangan

Setelah Files.com terhubung, Anda dapat membuat pekerjaan sinkronisasi menggunakan **Job Wizard**. Tetapkan folder Files.com sebagai sumber dan target pencadangan cloud (seperti Amazon S3, Backblaze B2, atau Google Drive) sebagai tujuan. Ini adalah pola umum untuk pencadangan perusahaan: Files.com berfungsi sebagai platform manajemen file aktif, sementara penyimpanan objek cloud menyimpan salinan arsip.

Jalankan **dry run** sebelum mengeksekusi pekerjaan sinkronisasi apa pun untuk memverifikasi bahwa file yang tepat sudah tercakup. Untuk file yang sensitif terhadap kepatuhan, **Job History** RcloneView menyediakan jejak audit lengkap dari setiap transfer. Pengguna lisensi PLUS dapat menjadwalkan pekerjaan pencadangan ini agar berjalan secara otomatis — misalnya, setiap malam — memastikan data Files.com terus dicadangkan tanpa intervensi manual.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Files.com backup sync in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Klik **New Remote** > **SFTP** dan masukkan hostname Files.com, username, serta kunci SSH atau kata sandi Anda.
3. Jelajahi struktur folder Files.com Anda di explorer dua panel.
4. Gunakan **Job Wizard** untuk membuat pekerjaan sinkronisasi pencadangan dari Files.com ke penyimpanan cloud pilihan Anda.
5. Jadwalkan pencadangan berkala dengan lisensi PLUS untuk perlindungan data otomatis.

RcloneView menjembatani kemampuan manajemen file perusahaan Files.com dengan ekosistem penyimpanan cloud yang lebih luas, memberi Anda satu alat grafis untuk semua operasi file Anda.

---

**Panduan Terkait:**

- [Kelola Seafile — Sinkronisasi dan Pencadangan Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-seafile-cloud-sync-backup-rcloneview)
- [Kelola Citrix ShareFile — Sinkronisasi dan Pencadangan Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-citrix-sharefile-cloud-sync-backup-rcloneview)
- [Perbaiki Kesalahan SFTP Connection Refused dan Timeout dengan RcloneView](https://rcloneview.com/support/blog/fix-sftp-connection-refused-timeout-rcloneview)

<CloudSupportGrid />
