---
slug: create-empty-directories-sync-option-rcloneview
title: "Buat Direktori Kosong — Pertahankan Struktur Folder Lengkap Saat Sinkronisasi di RcloneView"
authors:
  - alex
description: "Gunakan opsi sinkronisasi Create empty directories di RcloneView untuk menyalin seluruh pohon folder, termasuk folder proyek kosong, antara penyimpanan cloud dan drive lokal."
keywords:
  - sinkronisasi buat direktori kosong
  - rclone create empty src dirs
  - pertahankan struktur folder sinkronisasi cloud
  - salin folder kosong ke cloud
  - sinkronisasi folder kosong google drive
  - pencadangan template folder
  - opsi sinkronisasi RcloneView
  - rclone folder kosong tidak tersalin
  - cerminkan pohon direktori di cloud
tags:
  - RcloneView
  - feature
  - cloud-sync
  - file-management
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Buat Direktori Kosong — Pertahankan Struktur Folder Lengkap Saat Sinkronisasi di RcloneView

> Jika tata letak folder sama pentingnya dengan file Anda, aktifkan satu kotak centang agar folder kosong juga sampai ke tujuan.

Secara default, rclone menyalin file, bukan folder, sehingga direktori kosong di sumber tidak pernah muncul di tujuan. Biasanya hal ini tidak masalah, sampai Anda memulihkan cadangan dan mendapati folder `/Invoices/2027`, `/Raw`, dan `/Exports` yang diandalkan tim Anda hilang. RcloneView menyediakan perilaku ini sebagai satu opsi di wizard Sync, sehingga Anda bisa mempertahankan seluruh pohon tanpa mengetik flag rclone.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Folder Kosong Hilang

rclone memindahkan objek. Job sinkronisasi menelusuri sumber, menemukan file, dan membuat ulang jalur setiap file di tujuan. Folder yang tidak berisi file tidak menghasilkan apa pun untuk ditransfer, sehingga job melewatinya. Banyak layanan cloud, terutama penyimpanan objek bergaya S3, sama sekali tidak menyimpan folder sebagai objek terpisah. Di sana, "folder" hanyalah awalan yang sama pada nama file.

Hal ini menjebak orang yang mengandalkan template folder. Sebuah rumah produksi video mungkin memulai setiap pekerjaan dengan kerangka `01_Footage`, `02_Audio`, `03_Graphics`, dan `04_Deliverables`. Sebuah kantor akuntan mungkin membuat folder per klien per tahun sebelum dokumen apa pun tiba. Jika kerangka kosong itu tidak tersinkron, kolaborator di sisi tujuan melihat tata letak yang tidak lengkap.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing a project folder tree between two cloud remotes in RcloneView" class="img-large img-center" />

## Mengaktifkan Create Empty Directories

Opsi ini ada di **Step 1: Configure Storage** pada wizard Sync, bersama pengaturan sumber, tujuan, dan arah sinkronisasi. Pilih sumber dan tujuan, lalu centang **Create empty directories**. Saat job berjalan, RcloneView meminta rclone membuat ulang folder kosong dari sumber di tujuan, yang merupakan padanan GUI dari flag `--create-empty-src-dirs` milik rclone.

Karena pengaturan ini disimpan bersama job, pengaturan berlaku pada setiap eksekusi, baik Anda memulai job secara manual dari Job Manager maupun saat dipicu oleh jadwal PLUS. Opsi ini juga bekerja dengan sinkronisasi 1:N, sehingga kerangka folder yang sama sampai ke setiap tujuan yang Anda tambahkan.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a saved sync job with empty directory creation enabled in RcloneView" class="img-large img-center" />

## Gabungkan dengan Filter dan Dry Run

Pembuatan folder kosong bekerja bersama filter di Step 3. Jika Anda mengecualikan `.git/` atau membatasi job dengan **Max folder depth**, hanya folder yang lolos aturan tersebut yang dibuat. Jalankan **Dry Run** terlebih dahulu untuk melihat pratinjau operasi sebelum apa pun ditulis. Ini paling penting untuk sinkronisasi satu arah, yang juga menghapus item di tujuan yang sudah tidak ada di sumber.

Pada penyimpanan berbasis bucket seperti Amazon S3, Wasabi, atau Backblaze B2, pasang ekspektasi yang realistis. Backend ini tidak memiliki direktori sungguhan, sehingga folder kosong mungkin tidak bertahan seperti di Google Drive, OneDrive, Dropbox, SFTP, atau disk lokal.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare showing left-only folders after a sync in RcloneView" class="img-large img-center" />

Setelah job selesai, buka **Folder Compare** pada dua lokasi yang sama untuk memeriksa hasilnya berdampingan. Sinkronisasi dan Folder Compare sama-sama tersedia dengan lisensi FREE.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka **Sync** dari tab Home dan pilih folder sumber dan tujuan.
3. Centang **Create empty directories** di Step 1, lalu atur filter yang Anda perlukan di Step 3.
4. Jalankan Dry Run, lalu simpan job dan jalankan dari Job Manager.

Ketika folder kosong dipertahankan, hasil pemulihan atau migrasi kembali dengan tata letak yang sama seperti yang disiapkan tim Anda.

---

**Panduan Terkait:**

- [Filter Max Folder Depth dan Max File Size](https://rcloneview.com/support/blog/max-folder-depth-file-size-filters-rcloneview)
- [Dry Run — Pratinjau Sinkronisasi Cloud Sebelum Transfer](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [Memperbaiki Filter Sinkronisasi yang Tidak Mengecualikan File](https://rcloneview.com/support/blog/fix-sync-filters-not-excluding-files-rcloneview)

<CloudSupportGrid />
