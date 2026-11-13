---
slug: fix-google-docs-sheets-sync-errors-rcloneview
title: "Atasi Masalah Sinkronisasi Google Docs dan Sheets — Tangani File Native dengan RcloneView"
authors:
  - casey
description: "Google Docs, Sheets, dan Slides terus disalin ulang atau ditandai berbeda? Pelajari mengapa file native berperilaku berbeda dan cara menanganinya dalam job sinkronisasi RcloneView."
keywords:
  - error sinkronisasi google docs
  - masalah pencadangan google sheets
  - sinkronisasi file native google drive
  - google docs export rclone
  - filter google docs rcloneview
  - pencadangan google drive docx xlsx
  - format ekspor rclone drive
  - perbaiki sinkronisasi google drive rcloneview
  - pencadangan file google workspace
tags:
  - RcloneView
  - troubleshooting
  - tips
  - google-drive
  - filters
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Atasi Masalah Sinkronisasi Google Docs dan Sheets — Tangani File Native dengan RcloneView

> Google Docs, Sheets, dan Slides bukan file biasa, dan job pencadangan yang mengabaikan perbedaan itu akan terus memberi kejutan.

Anda mencadangkan Google Drive ke NAS atau cloud lain, dan job selesai — tetapi Docs dan Sheets muncul sebagai file Word dan Excel, Folder Compare menandainya berbeda setiap kali, atau file tersebut muncul lagi di daftar salin pada eksekusi berikutnya. Semua ini tidak berarti transfer rusak. RcloneView menjalankan job ini melalui rclone, dan memahami cara rclone memperlakukan dokumen native Google memungkinkan Anda memilih perilaku yang benar-benar Anda inginkan.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa File Native Google Berperilaku Berbeda

Google Doc hanya ada di dalam editor Google; tidak ada file biner tersimpan di baliknya. Saat rclone menyalinnya dari Google Drive ke tujuan non-Google, rclone mengekspor dokumen ke format yang dapat diunduh — secara default format Office seperti `.docx`, `.xlsx`, dan `.pptx`.

Konversi itu memiliki efek samping. Drive tidak melaporkan ukuran tetap untuk dokumen native, sehingga perbandingan berbasis ukuran tidak dapat mencocokkannya dengan salinan hasil ekspor. Drive juga tidak menyimpan hash MD5 untuknya, sehingga mengaktifkan checksum dalam job sinkronisasi pun tidak dapat memverifikasinya. Hasilnya adalah sekumpulan file yang bisa tampak "berbeda" pada setiap pemeriksaan.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare showing Google Docs flagged as different files" class="img-large img-center" />

## Opsi 1: Kecualikan Docs Native dari Pencadangan File

Jika tim Anda hanya perlu mencadangkan file yang diunggah — PDF, gambar, video — solusi paling rapi adalah mengecualikan dokumen native. Di Step 3 wizard sinkronisasi, aktifkan filter bawaan **Google Docs**. Job kemudian fokus pada file biasa dan berhenti mendaftar ulang dokumen yang tidak dapat dibandingkannya.

Padukan dengan **Dry Run** sebelum eksekusi sungguhan pertama. Pratinjau menampilkan dengan tepat file mana yang akan disalin, sehingga Anda dapat memastikan Docs dan Sheets tidak lagi ada di antrean.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Google Drive sync job with the Google Docs filter applied" class="img-large img-center" />

## Opsi 2: Simpan Salinan Ekspor dengan Sengaja

Terkadang salinan ekspor justru menjadi tujuannya — kantor akuntan mungkin ingin setiap spreadsheet diarsipkan sebagai `.xlsx` di NAS agar dapat dibuka tanpa akun Google. Dalam kasus itu, biarkan file native tetap ada di job dan perlakukan salinan hasil konversi sebagai arsip.

Anda dapat mengubah format ekspor melalui flag rclone. Di Settings, kolom **Global Rclone Flags** menerima flag tambahan seperti `--drive-export-formats` (misalnya `pdf` untuk arsip hanya-baca). Uji flag ini terlebih dahulu pada folder kecil dengan Dry Run, karena flag tersebut berlaku untuk setiap job yang menyentuh Google Drive.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring a recurring Google Drive export job in RcloneView" class="img-large img-center" />

## Periksa Hasil di Job History

Setelah setiap eksekusi, buka Job History dan tinjau status, jumlah file, dan ukuran total. Jika jumlahnya berubah drastis secara tak terduga antar-eksekusi, tinjau kembali aturan filter dari Step 3.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Google Drive job results in Job History" class="img-large img-center" />

## Memulai

Berbeda dengan alat yang hanya bisa mount, RcloneView juga melakukan sinkronisasi dan membandingkan folder — dengan FREE License.

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Hubungkan Google Drive melalui login browser OAuth.
3. Tentukan apakah Docs native akan dikecualikan dengan filter Google Docs atau diekspor sebagai file Office.
4. Pratinjau job dengan Dry Run, jalankan, lalu konfirmasi hasilnya di Job History.

Setelah file native ditangani dengan sengaja, pencadangan Google Drive Anda tidak lagi menghasilkan peringatan palsu.

---

**Panduan Terkait:**

- [Atasi Error Sinkronisasi Google Drive — Folder Hilang, Job Gagal, dan Daftar Kosong Diselesaikan dengan RcloneView](https://rcloneview.com/support/blog/fix-google-drive-sync-errors-rcloneview)
- [Aturan Filter RcloneView: Kecualikan Folder dan Jenis File untuk Sinkronisasi yang Lebih Cepat dan Rapi](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Pratinjau Dry Run — Uji Sinkronisasi Cloud Sebelum Menerapkan Perubahan di RcloneView](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)

<CloudSupportGrid />
