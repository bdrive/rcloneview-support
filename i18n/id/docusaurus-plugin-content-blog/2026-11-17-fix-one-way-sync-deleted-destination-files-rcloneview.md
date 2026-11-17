---
slug: fix-one-way-sync-deleted-destination-files-rcloneview
title: "Mengatasi Sinkronisasi Satu Arah yang Menghapus File Tujuan — Lindungi Pencadangan dengan RcloneView"
authors:
  - casey
description: "Sinkronisasi satu arah menghapus file dari pencadangan Anda? Pelajari penyebabnya dan cara job Copy, Dry Run, dan Folder Compare di RcloneView mencegah penghapusan yang tidak diinginkan."
keywords:
  - sinkronisasi menghapus file di tujuan
  - sinkronisasi satu arah menghapus file
  - rclone sync vs copy
  - mencegah penghapusan saat sinkronisasi
  - file pencadangan cloud hilang
  - RcloneView dry run
  - sinkronisasi mirror menghapus file
  - memulihkan file setelah sinkronisasi
  - pemecahan masalah RcloneView
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mengatasi Sinkronisasi Satu Arah yang Menghapus File Tujuan — Lindungi Pencadangan dengan RcloneView

> Jika file hilang dari pencadangan Anda setelah sinkronisasi, kemungkinan besar job melakukan persis apa yang memang dirancang untuk sinkronisasi — berikut cara memilih jenis job yang tepat dan meninjau perubahan terlebih dahulu.

Kejutan yang umum: Anda menyinkronkan folder laptop ke Backblaze B2, lalu file lama yang hanya ada di bucket ternyata hilang. Itu bukan bug. Sinkronisasi satu arah membuat tujuan sama dengan sumber, termasuk menghapus file yang tidak ada di sumber. RcloneView menyediakan alat untuk mengantisipasinya dan memilih jenis job yang tidak pernah menghapus apa pun.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Sinkronisasi Satu Arah Menghapus File

Di wizard sinkronisasi, arah satu arah diberi label **"Modifying destination only."** Arah ini membiarkan sumber tidak berubah dan mengubah tujuan hingga mencerminkan sumber. Apa pun di tujuan yang tidak memiliki padanan di sumber akan dihapus.

Pemicu umum:

- **Folder sumber salah.** Memilih `Projects/2026` alih-alih `Projects` membuat semua tahun lain terlihat "berlebih" di tujuan.
- **Sumber yang sudah dibersihkan.** Anda menghapus file lama secara lokal untuk mengosongkan ruang, dengan harapan salinan di cloud tetap menyimpannya sebagai arsip.
- **Beberapa sumber, satu tujuan.** Dua komputer yang menyinkronkan ke folder yang sama akan saling menghapus file milik yang lain.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job in RcloneView" class="img-large img-center" />

## Gunakan Copy Jika Tujuan Adalah Arsip

Jika tujuan harus menyimpan semua yang pernah dikirim ke sana, gunakan job **Copy** alih-alih Sync. Job Manager menyediakan jenis job Sync, Copy, Move, Delete, Download, dan Upload. Copy mentransfer file baru dan yang berubah tetapi tidak menghapus apa pun dari tujuan, sehingga cocok untuk arsip foto atau pencadangan proyek jangka panjang.

Gunakan Sync hanya untuk mirror sejati, seperti folder kerja yang ingin Anda tiru persis di cloud kedua.

## Tinjau Penghapusan dengan Dry Run

Sebelum job sinkronisasi baru atau yang diedit dijalankan sungguhan, jalankan **Dry Run**. Fitur ini menampilkan daftar file yang akan disalin dan file yang akan dihapus, tanpa mengubah apa pun. Jika daftar penghapusan berisi file yang ingin Anda simpan, hentikan lalu perbaiki path sumber atau beralih ke Copy.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job after checking the Dry Run preview in RcloneView" class="img-large img-center" />

## Periksa Perbedaan dengan Folder Compare

**Folder Compare** menampilkan dua folder berdampingan. Filter file right-only untuk melihat dengan tepat apa yang ada di tujuan tetapi tidak di sumber — file yang akan dihapus oleh sinkronisasi. Jika beberapa di antaranya penting, gunakan **Copy left** untuk mengembalikannya ke sumber sebelum sinkronisasi, atau sinkronkan ke folder lain agar tetap aman.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare showing destination-only files in RcloneView" class="img-large img-center" />

Berbeda dengan alat yang hanya untuk mount, RcloneView juga dapat menyinkronkan dan membandingkan folder — dengan FREE License.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka job yang sudah ada di Job Manager dan pastikan path sumber dan tujuan.
3. Ubah job bergaya arsip dari Sync ke Copy, dan jalankan Dry Run pada setiap job sinkronisasi yang Anda pertahankan.
4. Gunakan Folder Compare untuk meninjau file right-only, lalu periksa **Job History** setelah setiap eksekusi.

Jika file sudah hilang, periksa dulu tempat sampah atau riwayat versi penyedia Anda, lalu susun ulang job agar hal ini tidak terulang.

---

**Panduan Terkait:**

- [Dry Run — Tinjau Sinkronisasi Sebelum Transfer dengan RcloneView](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)
- [Pulihkan File Cloud yang Tidak Sengaja Terhapus dengan RcloneView](https://rcloneview.com/support/blog/recover-accidentally-deleted-cloud-files-rcloneview)
- [Atasi File Hilang Setelah Sinkronisasi Cloud dengan RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)

<CloudSupportGrid />
