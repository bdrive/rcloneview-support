---
slug: zero-downtime-sharepoint-to-google-shared-drives-rcloneview
title: "Migrasi SharePoint ke Google Shared Drives Tanpa Downtime dengan RcloneView"
authors:
  - tayson
description: Pindahkan pustaka Microsoft 365 SharePoint Online ke Google Shared Drives tanpa mengganggu pengguna dengan menggabungkan Explorer multi-cloud, pratinjau Compare, job Sync, dan proses delta berbasis scheduler dari RcloneView.
keywords:
  - sharepoint to google drive
  - google shared drive migration
  - rcloneview
  - zero downtime transfer
  - microsoft 365 to workspace
  - rclone compare
  - multi cloud sync
  - scheduler automation
  - sharepoint cutover plan
  - cloud migration blueprint
tags:
  - sharepoint
  - google-drive
  - migration
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi SharePoint ke Google Shared Drives Tanpa Downtime dengan RcloneView

> Biarkan tim desainer, keuangan, dan proyek tetap bekerja di SharePoint sementara Anda mengisi Google Shared Drives di latar belakang--lalu lakukan peralihan dalam satu jendela cutover.

Pustaka SharePoint Online sering kali penuh dengan folder yang sarat izin akses, document set, dan kontrol data regional. Di sisi lain, Google Workspace Shared Drives menjanjikan kolaborasi yang lebih sederhana dan kuota penyimpanan, tetapi alat pemindah bawaan jarang menghormati metadata, jendela delta, atau throttling. RcloneView membungkus backend SharePoint dan Google Drive milik rclone dalam sebuah GUI, sehingga Anda dapat merencanakan migrasi multi-cloud dengan proses Compare bertahap, job Sync + Copy, QA berbasis mount, dan proses delta berbasis scheduler.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## Mengapa Merencanakan Cutover SharePoint -> Google Tanpa Downtime

- **Tim yang terdistribusi tidak bisa berhenti bekerja** -- aset marketing, PMO, dan kontrak membutuhkan akses berkelanjutan selagi Shared Drive yang baru sedang diisi.
- **Izin akses yang granular** -- pustaka SharePoint mencampur folder yang terhubung ke Teams dan pusat dokumen mandiri; Anda membutuhkan cara yang dapat diulang untuk membangunnya kembali di dalam Shared Drives dengan log audit yang jelas.

Strategi tanpa downtime berarti menjalankan sinkronisasi multi-fase selagi kedua platform tetap online, lalu melakukan cutover setelah delta terakhir.

## Blueprint Migrasi: Panel Kontrol Multi-Cloud

1. **Hubungkan kedua sisi** menggunakan [Remote Manager](/howto/rcloneview-basic/remote-manager) beserta panduan penyedia untuk [SharePoint for Business](/howto/remote-storage-connection-settings/connect-using-cli/add-sharepoint-for-business) dan [Google Shared Drives](/howto/remote-storage-connection-settings/connect-using-cli/add-google-shared-drive). RcloneView mengisolasi token OAuth per tenant dan menyimpannya dengan perlindungan yang sesuai.
2. **Susun panel Explorer** sehingga setiap panel merujuk pada pustaka yang sesuai dengan Shared Drive-nya.
3. **Template untuk job** berasal dari [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs) dan [Synchronize Remote Storages](/howto/rcloneview-basic/synchronize-remote-storages). Job Copy mengisi data awal ke target; job Sync menangani pembersihan satu arah; proses Compare melakukan validasi.
4. **Mount untuk QA** mengikuti [Mount cloud storage as a local drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive), memungkinkan power user meninjau konten di dalam Finder atau Explorer sebelum cutover.
5. **Scheduler + monitoring** bergantung pada [Job scheduling and execution](/howto/rcloneview-advanced/job-scheduling-and-execution) dan [Real-time transfer monitoring](/howto/rcloneview-basic/real-time-transfer-monitoring) agar proses delta tetap dapat diprediksi.  

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />  
  

## Langkah 1 -- Perkuat Konektor & Metadata

- Beri label pada setiap remote (`sp-marketing`, `sp-pmo`, `gdrive-regional-apac`) dan batasi root path ke pustaka tertentu. Ini menjaga penjelajahan remote tetap cepat di dalam [Browse and manage remote storage](/howto/rcloneview-basic/browse-and-manage-remote-storage).

## Langkah 2 -- Buat Baseline dengan Proses Compare

1. Buka Explorer dua panel, arahkan sisi kiri ke SharePoint, sisi kanan ke Shared Drive yang kosong.
2. Gunakan [Compare folder contents](/howto/rcloneview-basic/compare-folder-contents) untuk mendeteksi selisih ukuran, checksum, dan timestamp.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare SharePoint library to Google Shared Drive before migrating" class="img-large img-center" />

Snapshot Compare baseline memberikan catatan forensik dari kondisi awal dan membantu mengidentifikasi subsite usang yang mungkin sebaiknya Anda arsipkan alih-alih dipindahkan.

## Langkah 3 -- Susun Job Copy + Sync

- Buat job **Copy** per unit bisnis untuk mengisi Shared Drive tanpa menghapus apa pun di SharePoint. Referensi: [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs).  

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />  
   

## Langkah 4 -- Otomatisasi Jendela Delta dengan Scheduler

Buka Scheduler, aktifkan secara global, lalu tetapkan jadwal per job:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule staged SharePoint to Google migration jobs inside RcloneView" class="img-large img-center" />


## Langkah 5 -- Checklist Hari Cutover

1. **Bekukan penulisan** di SharePoint (komunikasikan melalui Teams/Slack) tetapi tetap jaga situs online untuk kebutuhan baca saja.
2. Jalankan set job Sync + Compare terakhir. Gunakan diff Compare untuk memastikan hanya sedikit file yang berubah sejak delta terakhir.
3. Mount Shared Drive baru dengan [Mount cloud storage as a local drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive) dan minta pemilik bisnis memeriksa pohon folder yang kompleks.  

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />  
       


## QA Pasca-Migrasi & Operasi Mount

Mount Manager memungkinkan engineer, tim keuangan, atau pemimpin kreatif membuka Shared Drives yang baru (atau remote SharePoint lama) sebagai drive read-only untuk keperluan audit dan pelatihan. 

## Panduan Timeline Proyek

| Fase | Tindakan RcloneView | Hasil |
| --- | --- | --- |
| Minggu 1 | Hubungkan remote, buat baseline Compare, buat job Copy | Inventaris setiap pustaka + Shared Drives yang sudah terisi |
| Minggu 2 | Delta Scheduler setiap malam + laporan Compare mingguan | Pembaruan berkelanjutan dengan visibilitas drift |
| Minggu 3 | Mount percontohan, validasi izin akses, pelatihan pengguna | Stakeholder meninjau Google Shared Drives dengan aman |
| Minggu cutover | Pembekuan SharePoint, Sync/Compare terakhir, Shared Drive go-live | Downtime hanya beberapa menit dengan log validasi yang ditandatangani |
| 2 minggu setelahnya | Sync terjadwal pada remote lama + Copy arsip opsional ke S3/Wasabi | Bukti bahwa tidak ada file yang terlewat sebelum decommissioning |


RcloneView mengubah migrasi multi-cloud menjadi playbook yang dapat diprediksi: siapkan remote, tinjau perbedaan, susun job Copy + Sync, otomatisasi delta, dan mount untuk QA. Tim Anda tetap produktif di SharePoint hingga saat yang tepat ketika Anda mengalihkan mereka ke Google Shared Drives.

<CloudSupportGrid />
