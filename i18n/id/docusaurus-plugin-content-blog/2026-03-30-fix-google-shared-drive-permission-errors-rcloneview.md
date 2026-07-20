---
slug: fix-google-shared-drive-permission-errors-rcloneview
title: "Perbaiki Error Izin Google Shared Drive — Selesaikan Masalah Akses dengan RcloneView"
authors:
  - tayson
description: "Perbaiki error izin Google Shared Drive yang menghambat akses file dan sinkronisasi. Pelajari cara RcloneView menyelesaikan masalah otorisasi Shared Drive dan akses team drive."
keywords:
  - Google Shared Drive permission error
  - team drive access denied
  - Shared Drive sync failed
  - Google Drive 403 error
  - Shared Drive authorization
  - RcloneView Shared Drive fix
  - Google Workspace permissions
  - team drive file access
  - Shared Drive rclone setup
  - Google Drive insufficient permissions
tags:
  - RcloneView
  - troubleshooting
  - tips
  - google-drive
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Perbaiki Error Izin Google Shared Drive — Selesaikan Masalah Akses dengan RcloneView

> Error 403 Forbidden pada Shared Drive yang seharusnya bisa Anda akses membingungkan sekaligus mendesak.

Google Shared Drive (dahulu Team Drive) memperkenalkan model izin berlapis yang lebih kompleks daripada berbagi file biasa. Ketika alat sinkronisasi gagal mengakses konten Shared Drive, pesan error dari API Google sering kali samar — "insufficient permissions" bisa berarti banyak hal berbeda. RcloneView menyederhanakan konfigurasi Shared Drive dengan pemilihan drive ID yang eksplisit, penanganan cakupan OAuth yang tepat, dan pelaporan error yang jelas untuk menunjukkan kegagalan izin yang sebenarnya.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Perbedaan Izin Shared Drive

Berbeda dengan Google Drive pribadi, di mana pemilik akun memiliki akses penuh ke semua hal, Shared Drive menggunakan izin berbasis peran yang dikelola di tingkat organisasi. Anggota dapat diberi peran Manager, Content Manager, Contributor, Commenter, atau Viewer, dan setiap peran memiliki kemampuan tertentu. Contributor, misalnya, dapat menambahkan file tetapi tidak dapat menghapus atau memindahkannya — operasi yang mungkin dicoba oleh perintah `sync` rclone secara default.

Hal penting yang perlu diperhatikan adalah akses Shared Drive harus diberikan secara eksplisit di tingkat drive. Berada di organisasi Google Workspace yang sama tidak secara otomatis memberikan akses. Selain itu, kebijakan berbagi seluruh domain yang ditetapkan oleh admin Workspace dapat menimpa izin drive individual, secara diam-diam memblokir pengguna eksternal atau service account.

Wizard konfigurasi remote RcloneView akan meminta Anda memilih Shared Drive tertentu berdasarkan ID, memastikan koneksi menargetkan drive yang benar, bukan default ke "My Drive" milik pengguna.

<img src="/support/images/en/blog/new-remote.png" alt="Selecting a Google Shared Drive in RcloneView remote setup" class="img-large img-center" />

## Mengonfigurasi Cakupan OAuth dengan Benar

Sumber umum error izin adalah cakupan OAuth yang tidak memadai. Saat pertama kali mengotorisasi RcloneView dengan Google, layar persetujuan OAuth akan meminta izin tertentu. Jika otorisasi awal menggunakan cakupan read-only, semua operasi tulis pada Shared Drive akan gagal dengan error 403.

RcloneView meminta cakupan `drive` secara default, yang menyediakan akses baca-tulis penuh. Jika Anda sebelumnya melakukan otorisasi dengan cakupan yang lebih sempit, Anda perlu mengotorisasi ulang dengan menjalankan alur konfigurasi lagi. File token menyimpan cakupan yang diberikan, dan RcloneView dapat mendeteksi ketika token saat ini tidak memiliki izin yang diperlukan untuk operasi yang Anda konfigurasikan.

Untuk lingkungan Google Workspace yang menggunakan service account, service account tersebut harus diberi domain-wide delegation dengan cakupan yang sesuai di konsol admin. Tanpa langkah ini, service account dapat melakukan autentikasi tetapi tidak dapat mengakses konten Shared Drive mana pun.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring Google Drive transfer settings in RcloneView" class="img-large img-center" />

## Menyelesaikan Skenario Error Umum

**"File not found" pada file yang sebenarnya ada:** Ini biasanya berarti remote rclone mengarah ke My Drive, bukan Shared Drive. Di RcloneView, periksa apakah parameter `team_drive` dalam konfigurasi remote Anda telah diatur ke Shared Drive ID yang benar.

**"Insufficient permissions" saat upload:** Periksa peran Anda pada Shared Drive tersebut. Contributor ke atas dapat mengunggah, tetapi jika admin membatasi unggahan hanya untuk Manager, Anda akan mendapatkan error ini. Logging verbose RcloneView (`-vv`) menampilkan respons API yang tepat, termasuk izin mana yang hilang.

**"Rate limit exceeded" saat operasi massal:** Shared Drive berbagi kuota API di antara semua anggota. Pekerjaan sinkronisasi besar dari satu pengguna dapat menghabiskan kuota, menyebabkan error rate-limit 403 bagi semua orang. Flag `--tpslimit` pada RcloneView membatasi panggilan API agar tetap dalam kuota bersama.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Reviewing file permissions and sync status in RcloneView" class="img-large img-center" />

## Service Account dan Pengaturan Admin Workspace

Untuk alur kerja otomatis, service account adalah metode autentikasi yang direkomendasikan. Service account harus ditambahkan sebagai anggota di setiap Shared Drive yang perlu diaksesnya, dengan hak istimewa minimal Content Manager untuk operasi sinkronisasi yang melibatkan penghapusan file.

Admin Workspace juga harus memastikan bahwa kebijakan "Sharing outside the organization" mengizinkan pola akses service account tersebut. Jika admin telah menonaktifkan berbagi eksternal, service account dari proyek GCP yang berbeda akan diblokir terlepas dari keanggotaannya di Shared Drive.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting up automated Shared Drive sync with service account in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Konfigurasikan remote Google Drive** dan pilih Shared Drive Anda berdasarkan ID saat pengaturan.
3. **Verifikasi cakupan OAuth** dengan mengotorisasi ulang jika token Anda saat ini tidak memiliki izin tulis.
4. **Periksa peran Shared Drive Anda** — Content Manager atau lebih tinggi diperlukan untuk operasi sinkronisasi penuh.

Dengan konfigurasi yang tepat, error izin Shared Drive akan hilang dan alur kerja sinkronisasi tim berjalan lancar.

---

**Panduan Terkait:**

- [Mount Google Shared Drive dengan RcloneView](https://rcloneview.com/support/blog/mount-google-shared-drives-rcloneview)
- [Perbaiki Error Sinkronisasi Cloud Permission Denied — Selesaikan Masalah Akses dengan RcloneView](https://rcloneview.com/support/blog/fix-permission-denied-cloud-sync-errors-rcloneview)
- [Perbaiki Error Cloud API Rate Limiting — Kelola Kuota dengan RcloneView](https://rcloneview.com/support/blog/fix-cloud-api-rate-limiting-errors-rcloneview)

<CloudSupportGrid />
