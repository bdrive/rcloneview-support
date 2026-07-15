---
slug: sharepoint-to-google-drive-migration-rcloneview
title: "Kuasai Migrasi SharePoint ke Google Drive dengan RcloneView: Panduan Bisnis Langkah demi Langkah"
authors:
  - tayson
description: "Migrasi SharePoint ke Google Drive yang visual, dapat dibatasi kecepatannya, dan dapat diaudit dengan RcloneView — dibuat untuk tim IT korporat yang menginginkan cutover tanpa CLI dan ramah kebijakan."
keywords:
  - SharePoint to Google Drive
  - move files from SharePoint to Drive
  - RcloneView SharePoint
  - cloud migration for business
  - Microsoft 365 migration tool
  - migrate sharepoint document library
  - google drive workspace migration
  - rclone sharepoint connector
  - office 365 to google drive
  - sharepoint migration guide
tags:
  - RcloneView
  - migration
  - sharepoint
  - google-drive
  - microsoft-365
  - business
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kuasai Migrasi SharePoint ke Google Drive dengan RcloneView: Panduan Bisnis Langkah demi Langkah

> Pindahkan document library SharePoint ke Google Drive (Workspace) dengan alur yang visual, dapat dibatasi kecepatannya, dan dapat diulang, yang dapat dijalankan oleh admin korporat tanpa menyentuh CLI.

RcloneView membungkus konektor SharePoint dan Google Drive milik rclone ke dalam GUI dengan log yang ramah audit, penjadwal, dan pemantauan real-time. Panduan ini menunjukkan cara merencanakan dan menjalankan migrasi bertahap sehingga Anda dapat memindahkan team site, folder proyek, atau seluruh unit bisnis tanpa downtime.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Mengapa menggunakan RcloneView untuk SharePoint → Google Drive

- Tidak perlu CLI: konfigurasikan remote Microsoft 365 (SharePoint/OneDrive for Business) dan Google Drive melalui dialog terpandu.
- Ramah bisnis: batasi kecepatan permintaan untuk menghindari rate limit API SharePoint dan Drive, serta jadwalkan cutover pada jendela pemeliharaan.
- Visibilitas operasional: explorer berdampingan, compare & copy, riwayat job, dan pemantauan transfer langsung untuk keperluan audit.
- Perpindahan fleksibel: copy sekali jalan, sinkronisasi dua arah, atau delta sync bertahap yang menjaga sumber dan tujuan tetap selaras.

## Prasyarat (siap untuk enterprise)

- RcloneView terinstal dan masuk (sign in) dengan akun yang memiliki akses ke site SharePoint target dan tujuan Google Drive (Shared Drive atau My Drive).
- Persetujuan admin (admin consent) untuk Microsoft Graph diberikan jika tenant Anda membatasi aplikasi pihak ketiga.
- Jendela cutover (atau izinkan sync bertahap) dan kuota Drive/Shared Drive yang cukup.

## Langkah 1 — Hubungkan remote SharePoint dan Google Drive

1) Di **RcloneView → Settings → Remote Storage**, tambahkan remote baru.  
<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

2) Pilih **OneDrive/SharePoint (Microsoft 365)**, masuk dengan akun yang memiliki atau dapat mengakses site tersebut, lalu pilih **Site / Document Library** yang tepat (misalnya, `/sites/Marketing/Shared Documents`).  
3) Tambahkan **Google Drive** (Workspace): pilih apakah akan mendarat di **My Drive** atau **Shared Drive** tertentu untuk proyek tersebut.  
4) Uji setiap remote lalu simpan.

## Langkah 2 — Petakan library dan folder tujuan yang tepat

- Untuk setiap library SharePoint, catat path yang Anda pilih pada dialog koneksi; buka di Explorer untuk memastikan root-nya (Anda seharusnya melihat folder departemen yang diharapkan).
- Buat struktur folder yang sesuai di Google Drive/Shared Drive jika belum ada.
- Jika Anda memiliki isolasi per tim, ulangi dengan beberapa remote SharePoint (satu per site atau per koleksi sensitif).

## Langkah 3 — Validasi dengan pemeriksaan berdampingan

- Buka kedua remote di Explorer dua panel.  
<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />
- Gunakan **Compare** untuk melihat pratinjau perbedaan (ukuran, file yang hilang) sebelum menyalin.  
<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />
- Salin folder pilot kecil terlebih dahulu untuk memverifikasi izin, file bervarsi, dan aturan penamaan (karakter `# % & { }` milik SharePoint menjadi valid di Drive, tetapi path yang panjang mungkin masih memerlukan pembersihan).

## Langkah 4 — Pilih mode migrasi Anda

- **Copy sekali jalan (tercepat)**: Gunakan **Copy** untuk lift-and-shift ke Shared Drive baru. Ideal saat sumber menjadi read-only selama cutover.
- **Sync (dua arah opsional)**: Gunakan **Sync** saat pengguna masih mengedit file selama migrasi; selesaikan dengan delta sync terakhir pada jendela cutover.
- **Server-side jika memungkinkan**: Jika SharePoint dan Drive Anda dapat dijangkau melalui internet, RcloneView memanfaatkan copy server-side jika didukung untuk mengurangi egress.

Drag-and-drop juga berfungsi untuk perpindahan ad-hoc dan perbaikan cepat.  
<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

## Langkah 5 — Buat job yang dapat diulang dan jadwalkan cutover

1) Di **Jobs**, buat job **Copy** atau **Sync** baru dari library SharePoint ke path Shared Drive tujuan.  
2) Atur **Bandwidth limits** dan **Transfers** untuk mematuhi pembatasan kecepatan Microsoft 365 dan Google Drive (misalnya, `tpslimit`, `--drive-chunk-size`, atau slider **Max Transfer**).  
3) Simpan, lalu jadwalkan pada jam non-sibuk untuk perpindahan massal; tambahkan jadwal kedua untuk delta.  
<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

## Langkah 6 — Jalankan, pantau, dan tangani throttling

- Mulai job dan amati progres secara real time (throughput, ETA, error).  
<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />
- Jika Anda melihat respons `throttled` atau `403`/`429`, kurangi jumlah transfer atau tambahkan backoff singkat; RcloneView menampilkan log ini tanpa perlu membuka terminal.
- Gunakan **Job History** untuk mengekspor hasil demi kepatuhan (compliance) dan coba ulang objek yang gagal langsung dari UI.

## Langkah 7 — Pemeriksaan pasca-migrasi dan serah terima

- Jalankan ulang **Compare** untuk memastikan tujuan sesuai dengan SharePoint sebelum membuka akses pengguna.
- Periksa izin secara spot-check: meskipun ACL Drive tidak otomatis mencerminkan SharePoint, Anda dapat membagikan root baru secara massal ke grup Workspace yang tepat.
- Pertahankan job sebagai delta sync terjadwal selama beberapa hari jika tim masih aktif di SharePoint, kemudian ubah sumber menjadi read-only.

## Tips pemecahan masalah untuk lingkungan korporat

- **Site yang kompleks**: Hubungkan per site/library, bukan seluruh tenant, untuk menghindari perluasan cakupan (scope creep) yang tidak disengaja.
- **Path panjang atau karakter aneh**: Aktifkan normalisasi Unicode dan penanganan panjang path Rclone di opsi lanjutan; ganti nama kasus khusus di Explorer sebelum cutover.
- **Kedaulatan data**: Untuk tim yang diregulasi, targetkan Shared Drive regional dan simpan audit ekspor riwayat job.

## Sumber daya terkait

- [Tambah Remote via Login Berbasis Browse (OAuth)](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [Tambah Google Drive](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [Bandingkan isi folder](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Sinkronkan Remote Storage Secara Instan](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)
- [Buat Job Sinkronisasi](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [Penjadwalan Job](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Pemantauan Transfer Real-time](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [Mount Cloud Storage sebagai Drive Lokal](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

## Penutup

RcloneView memberi tim IT jalur visual dan berisiko rendah untuk memigrasikan library SharePoint ke Google Drive atau Shared Drive. Dengan pembatasan kecepatan yang ramah kebijakan, cutover terjadwal, dan pemantauan langsung, Anda dapat memindahkan data bisnis yang kritis tanpa skrip command-line, menjaga pemangku kepentingan tetap terinformasi, dan meninggalkan job yang dapat diulang untuk konsolidasi di masa depan.

<CloudSupportGrid />
