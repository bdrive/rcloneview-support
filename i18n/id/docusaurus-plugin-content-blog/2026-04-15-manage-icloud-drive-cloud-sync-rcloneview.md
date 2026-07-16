---
slug: manage-icloud-drive-cloud-sync-rcloneview
title: "Kelola Penyimpanan iCloud Drive — Sinkronisasi dan Pencadangan File dengan RcloneView"
authors:
  - tayson
description: "Kelola iCloud Drive dengan RcloneView — sinkronisasi, cadangkan, dan transfer file iCloud Drive ke cloud lain menggunakan GUI yang dibangun di atas rclone v1.69+."
keywords:
  - manajemen iCloud Drive
  - sinkronisasi iCloud Drive
  - alat pencadangan iCloud
  - RcloneView iCloud
  - transfer file iCloud Drive
  - GUI penyimpanan cloud Apple
  - iCloud ke Google Drive
  - pencadangan multi-cloud
  - iCloud Drive rclone
  - pencadangan penyimpanan cloud Apple
tags:
  - macos
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Penyimpanan iCloud Drive — Sinkronisasi dan Pencadangan File dengan RcloneView

> iCloud Drive adalah penyimpanan cloud native milik Apple — RcloneView, yang didukung oleh rclone v1.69+, terhubung langsung ke iCloud Drive dan membawa konten cloud Apple Anda ke dalam alur kerja manajemen file multi-cloud.

iCloud Drive terintegrasi secara mendalam dengan alur kerja macOS dan iOS, tetapi mengeluarkan file dari iCloud untuk dicadangkan ke penyedia sekunder — atau mensinkronkan konten iCloud dengan sistem berbasis Windows — secara historis memerlukan aplikasi ekosistem Apple sendiri. RcloneView, dengan memanfaatkan dukungan iCloud Drive dari rclone v1.69+, terhubung langsung ke penyimpanan cloud Apple Anda dan mengintegrasikannya ke dalam antarmuka manajemen file lintas platform.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan iCloud Drive di RcloneView

Dukungan iCloud Drive memerlukan **rclone v1.69 atau lebih baru**. RcloneView dilengkapi dengan binary rclone tertanam dan mendukung Self Update rclone di dalam aplikasi — Anda dapat memperbarui ke versi yang diperlukan langsung di dalam aplikasi melalui tab **Help**.

Untuk menghubungkan iCloud Drive, buka **tab Remote > New Remote** dan pilih **iCloud Drive** dari daftar penyedia. Masukkan kredensial Apple Anda untuk menyelesaikan autentikasi. Setelah dikonfigurasi, iCloud Drive Anda akan muncul sebagai remote di explorer, menampilkan semua folder dan file iCloud Anda. Di macOS, ini menunjukkan dengan tepat apa yang tersimpan di iCloud terlepas dari apakah file tersebut telah diunduh secara lokal atau belum.

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive as a new remote in RcloneView" class="img-large img-center" />

## Mencadangkan iCloud Drive ke Cloud Lain

Kasus penggunaan paling umum: membuat pencadangan cloud-ke-cloud dari konten iCloud Drive ke Amazon S3, Backblaze B2, atau Google Drive untuk akses lintas platform dan pemulihan bencana. Konfigurasikan tugas sinkronisasi di **Job Manager** milik RcloneView — sumbernya adalah remote iCloud Drive Anda, tujuannya adalah remote cloud pencadangan Anda.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling iCloud Drive backup to another cloud in RcloneView" class="img-large img-center" />

Bagi seorang profesional yang menggunakan iCloud Drive sebagai penyimpanan dokumen utama mereka — dengan 500 GB aset desain, file klien, dan arsip proyek — menjadwalkan pencadangan tiap malam ke Backblaze B2 menciptakan jaring pengaman yang tidak bergantung pada satu penyedia. Struktur folder iCloud Drive mencakup Desktop, Documents, dan folder khusus aplikasi. Opsi pemfilteran RcloneView memungkinkan Anda menyertakan atau mengecualikan path tertentu — misalnya mensinkronkan hanya folder Documents sambil melewati pustaka media berukuran besar.

## Akses iCloud Lintas Platform

Tim dengan lingkungan campuran Mac dan Windows sering kesulitan dengan klien Windows iCloud yang terbatas. RcloneView di Windows dapat terhubung ke iCloud Drive dan menyediakan akses file langsung, sehingga memungkinkan untuk menyalin atau mensinkronkan konten iCloud ke drive jaringan bersama atau sistem NAS yang dapat diakses oleh seluruh tim.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Accessing iCloud Drive from Windows using RcloneView" class="img-large img-center" />

Explorer dua panel membuat manajemen file lintas platform menjadi mudah: iCloud Drive di satu sisi, share Windows tujuan atau cloud lain di sisi lainnya. Seret file di antara panel untuk menyalinnya, atau konfigurasikan tugas sinkronisasi untuk transfer berulang.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Pastikan rclone tertanam Anda telah diperbarui ke v1.69+ melalui **Help > Check for Updates**.
3. Buka **tab Remote > New Remote**, pilih **iCloud Drive**, dan masukkan kredensial Apple Anda.
4. Konfigurasikan tugas sinkronisasi di **Job Manager** untuk mencadangkan iCloud Drive Anda ke cloud sekunder.

Dengan RcloneView, iCloud Drive tidak lagi terkurung di dalam ekosistem Apple — konten cloud Apple Anda menjadi bagian dari strategi pencadangan dan manajemen multi-cloud yang lebih luas.

---

**Panduan Terkait:**

- [iCloud Drive dengan RcloneView — Panduan Memulai](https://rcloneview.com/support/blog/icloud-drive-with-rcloneview)
- [Kelola Penyimpanan Cloud Google Drive — Sinkronisasi dan Pencadangan dengan RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Kelola Penyimpanan Cloud OneDrive — Sinkronisasi dan Pencadangan dengan RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
