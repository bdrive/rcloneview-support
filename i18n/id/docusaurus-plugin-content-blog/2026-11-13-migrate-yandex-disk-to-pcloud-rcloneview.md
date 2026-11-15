---
slug: migrate-yandex-disk-to-pcloud-rcloneview
title: "Migrasi Yandex Disk ke pCloud — Transfer File dengan RcloneView"
authors:
  - morgan
description: "Pindahkan file dari Yandex Disk ke pCloud dengan RcloneView. Hubungkan kedua cloud melalui OAuth, pratinjau dengan Dry Run, salin antar-cloud, dan verifikasi dengan Folder Compare."
keywords:
  - migrasi yandex disk ke pcloud
  - transfer yandex disk ke pcloud
  - migrasi yandex disk
  - alat migrasi pcloud
  - transfer cloud ke cloud
  - pindahkan file dari yandex disk
  - rcloneview yandex disk
  - rcloneview pcloud
  - migrasi cloud rclone gui
tags:
  - RcloneView
  - yandex-disk
  - pcloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Yandex Disk ke pCloud — Transfer File dengan RcloneView

> Pindahkan file Yandex Disk yang terkumpul bertahun-tahun ke pCloud melalui job salin berbasis GUI yang dapat Anda pratinjau, pantau, dan verifikasi.

Menggabungkan akun penyimpanan biasanya macet di titik yang sama: mengunduh semuanya ke laptop hanya untuk mengunggahnya lagi. RcloneView menghubungkan Yandex Disk dan pCloud berdampingan dan menyalin file di antara keduanya melalui rclone, sehingga tidak ada yang perlu ditampung di disk lokal terlebih dahulu. Kedua penyedia masuk melalui login OAuth di browser, jadi tidak perlu membuat kunci API.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hubungkan Yandex Disk dan pCloud sebagai Remote

Buka tab Remote dan klik **New Remote**. Pilih Yandex Disk, beri remote nama pendek seperti `yandex`, lalu selesaikan login di browser. Ulangi proses untuk pCloud dengan nama seperti `pcloud`. Keduanya muncul di Remote Manager, tempat Anda dapat mengedit atau menghapusnya nanti.

Setelah terhubung, buka dua panel Explorer — satu per remote — dan telusuri pohon foldernya. Klik kanan folder tingkat atas dan pilih **Get Size** untuk melihat berapa banyak data yang akan dipindahkan. Angka itu membantu memastikan paket pCloud Anda punya ruang yang cukup sebelum file pertama disalin.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Yandex Disk and pCloud remotes in RcloneView" class="img-large img-center" />

## Rencanakan Job Salin dan Pratinjau

Untuk migrasi satu kali, job **Copy** adalah pilihan yang lebih aman: job ini menambahkan file ke pCloud tanpa menghapus apa pun di sana. Gunakan **Sync** hanya jika Anda ingin pCloud mencerminkan Yandex Disk secara persis, termasuk penghapusan.

Buat job di Job Manager. Di Step 1, pilih folder Yandex Disk sebagai sumber dan folder pCloud sebagai tujuan. Di Step 2, pertimbangkan untuk mengaktifkan perbandingan checksum agar file dibandingkan berdasarkan hash plus ukuran jika kedua sisi memiliki jenis hash yang sama (Yandex Disk menggunakan MD5, dan pCloud hanya menyediakan MD5 pada akun region US), serta pertahankan pengaturan percobaan ulang (default: 3) untuk koneksi yang tidak stabil. Step 3 memungkinkan Anda melewati yang tidak lagi diperlukan — misalnya usia file maksimum, atau aturan kustom yang mengecualikan image `.iso` atau folder `.git/`.

Sebelum menjalankan, gunakan **Dry Run**. Fitur ini mencantumkan setiap file yang akan disalin, sehingga fotografer yang memindahkan 400 GB arsip RAW dapat memastikan struktur foldernya benar sebelum menghabiskan berjam-jam waktu transfer.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud copy from Yandex Disk to pCloud in RcloneView" class="img-large img-center" />

## Jalankan dan Pantau Transfer

Mulai job dan pantau kemajuan, kecepatan, serta jumlah file di tab Transferring. Pustaka besar sebaiknya dipecah menjadi beberapa job — satu per folder tingkat atas — agar gangguan jaringan hanya memengaruhi satu batch. Setiap eksekusi dicatat di Job History beserta status, ukuran total, dan jumlah file, yang memberi Anda jejak audit untuk perpindahan ini.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a Yandex Disk to pCloud transfer in the Transferring tab" class="img-large img-center" />

## Verifikasi dengan Folder Compare

Setelah job selesai, buka **Compare** dengan folder Yandex Disk di kiri dan folder pCloud di kanan. Filter ke file "left-only" dan "different" untuk menemukan apa pun yang terlewat. Copy right mengirim sisa file dalam satu klik.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Yandex Disk and pCloud folders after migration" class="img-large img-center" />

## Memulai

RcloneView melakukan mount dan sinkronisasi 90+ penyedia dari satu jendela, di Windows, macOS, dan Linux.

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan Yandex Disk dan pCloud sebagai remote melalui login OAuth di browser.
3. Buat job Copy dari Yandex Disk ke pCloud dan tinjau dengan Dry Run.
4. Jalankan job, lalu konfirmasi hasilnya dengan Folder Compare sebelum menutup akun Yandex Disk Anda.

Migrasi yang terverifikasi berarti Anda dapat menonaktifkan akun lama dengan yakin bahwa setiap folder telah berpindah.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Yandex Disk — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-yandex-disk-cloud-sync-backup-rcloneview)
- [Kelola Penyimpanan pCloud — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Atasi Error Sinkronisasi Yandex Disk — Diagnosis dan Selesaikan Transfer yang Gagal dengan RcloneView](https://rcloneview.com/support/blog/fix-yandex-disk-sync-errors-rcloneview)

<CloudSupportGrid />
