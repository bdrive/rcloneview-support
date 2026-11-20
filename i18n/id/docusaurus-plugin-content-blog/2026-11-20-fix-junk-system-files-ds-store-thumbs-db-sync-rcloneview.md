---
slug: fix-junk-system-files-ds-store-thumbs-db-sync-rcloneview
title: "Atasi File Sistem Sampah dalam Sinkronisasi Cloud — Kecualikan .DS_Store dan Thumbs.db dengan RcloneView"
authors:
  - kai
description: "Hentikan .DS_Store, Thumbs.db, dan desktop.ini agar tidak mengotori pencadangan cloud Anda. Gunakan filter sinkronisasi, Dry Run, dan Folder Compare di RcloneView untuk menyingkirkannya."
keywords:
  - kecualikan .DS_Store dari sinkronisasi cloud
  - Thumbs.db pencadangan cloud
  - desktop.ini mengotori sinkronisasi
  - hapus file sampah dari penyimpanan cloud
  - rclone kecualikan file sistem
  - filter kustom RcloneView
  - sinkronisasi cloud bersih macOS Windows
  - filter sinkronisasi file tersembunyi
  - tips sinkronisasi cloud lintas platform
tags:
  - RcloneView
  - troubleshooting
  - tips
  - filters
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Atasi File Sistem Sampah dalam Sinkronisasi Cloud — Kecualikan .DS_Store dan Thumbs.db dengan RcloneView

> File metadata sistem operasi membuat pencadangan Anda berantakan. Beberapa aturan filter cukup untuk menyingkirkannya secara permanen.

Buka folder cloud bersama yang pernah disentuh oleh Mac dan PC Windows, dan biasanya Anda akan menemukan `.DS_Store` di setiap direktori, `Thumbs.db` di samping setiap kumpulan gambar, serta `desktop.ini` yang tersebar di seluruh pohon folder. Ukurannya kecil, tetapi file ini menambah jumlah file, muncul sebagai "berbeda" saat dibandingkan, dan memicu pengunggahan ulang yang tidak perlu. RcloneView memungkinkan Anda mengecualikannya dari pekerjaan sinkronisasi dengan aturan filter, lalu memastikan tujuan sudah bersih.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa File Ini Terus Muncul Kembali

Finder di macOS menulis `.DS_Store` untuk menyimpan pengaturan tampilan folder. Windows Explorer membuat `Thumbs.db` untuk menyimpan cache gambar mini dan `desktop.ini` untuk menyimpan kustomisasi folder. Setiap kali seseorang menelusuri folder yang disinkronkan atau drive yang di-mount, sistem operasi dapat menulis ulang file-file ini, sehingga sinkronisasi berikutnya melihat file yang "berubah" dan mentransfernya lagi.

Bayangkan sebuah agensi desain dengan 40.000 folder proyek di NAS yang disinkronkan ke cloud setiap malam. Meskipun pekerjaan sebenarnya hanya berubah di beberapa folder, setiap folder yang dibuka tetap bisa menghasilkan file metadata baru, sehingga log pekerjaan menjadi ramai dan transfer yang penting jadi tenggelam.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView Job History showing file counts inflated by system metadata files" class="img-large img-center" />

## Tambahkan Filter Pengecualian ke Pekerjaan Sinkronisasi

Buka pekerjaan di **Job Manager** dan klik **Edit**, lalu masuk ke **Step 3: Filtering Settings**. Di bagian filter kustom, tambahkan satu aturan pengecualian untuk setiap nama file: `.DS_Store`, `Thumbs.db`, dan `desktop.ini`. Jika tim Anda juga menggunakan Office, pertimbangkan untuk mengecualikan file kunci sementara yang diawali `~$`. Aturan ini menggunakan sintaks filter rclone, sama seperti contoh yang didokumentasikan seperti `.iso` dan `.git/`.

Filter berlaku setiap kali pekerjaan dijalankan, termasuk eksekusi terjadwal pada lisensi PLUS, jadi Anda cukup mengaturnya sekali. Gunakan **Export** di Job Manager untuk menyimpan pekerjaan sebagai file JSON dan **Import** di komputer lain agar semua orang memakai aturan yang sama.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Editing sync job settings in RcloneView to add exclusion filters" class="img-large img-center" />

## Pratinjau, Bersihkan, dan Verifikasi

Jalankan **Dry Run** setelah menyimpan. Pratinjau seharusnya tidak lagi mencantumkan file metadata untuk ditransfer. Jika masih muncul, periksa ejaan dan huruf besar-kecil setiap aturan, karena salah ketik adalah penyebab umum filter tampak diabaikan.

Filter mencegah salinan baru ditransfer, tetapi file yang sudah ada di cloud tetap berada di sana. Buka tujuan di panel Explorer, temukan sisa-sisanya, dan hapus dengan klik kanan **Delete**. Untuk pemeriksaan menyeluruh, buka **Compare** antara sumber dan tujuan, lalu gunakan "Show right-only files" untuk menemukan file metadata yang tertinggal dari eksekusi sebelumnya. Pada lisensi PLUS, Folder Compare with Filter menerapkan pengecualian yang sama pada tampilan perbandingan.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using RcloneView Folder Compare to find leftover .DS_Store and Thumbs.db files" class="img-large img-center" />

## Memulai

RcloneView me-mount dan menyinkronkan 90+ penyedia dari satu jendela di Windows, macOS, dan Linux, sehingga aturan filter yang sama berlaku di OS mana pun file tersebut dibuat.

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Edit pekerjaan sinkronisasi Anda dan tambahkan `.DS_Store`, `Thumbs.db`, dan `desktop.ini` sebagai filter pengecualian kustom.
3. Jalankan **Dry Run** untuk memastikan file metadata tidak lagi muncul untuk ditransfer.
4. Gunakan **Compare** untuk menemukan dan menghapus sisa file yang sudah ada di cloud.

Log pekerjaan yang lebih pendek dan pencadangan yang lebih bersih membuat perubahan penting lebih mudah terlihat.

---

**Panduan Terkait:**

- [Atasi Filter Sinkronisasi yang Tidak Mengecualikan File — Aturan Pengecualian yang Benar dengan RcloneView](https://rcloneview.com/support/blog/fix-sync-filters-not-excluding-files-rcloneview)
- [Filter Kedalaman Folder Maksimum dan Ukuran File Maksimum — Kendalikan Apa yang Disinkronkan di RcloneView](https://rcloneview.com/support/blog/max-folder-depth-file-size-filters-rcloneview)
- [Atasi Folder Desktop dan Documents Kosong di macOS — Perbaikan Izin dengan RcloneView](https://rcloneview.com/support/blog/fix-macos-empty-folders-permissions-rcloneview)

<CloudSupportGrid />
