---
slug: fix-sync-filters-not-excluding-files-rcloneview
title: "Mengatasi Filter Sinkronisasi yang Tidak Mengecualikan File — Aturan Pengecualian yang Benar dengan RcloneView"
authors:
  - jay
description: "Filter sinkronisasi tidak mengecualikan file? Pelajari mengapa aturan pengecualian melewatkan folder di RcloneView, cara menulis pola yang benar, dan cara memastikannya dengan Dry Run."
keywords:
  - filter sinkronisasi tidak berfungsi
  - kecualikan folder dari sinkronisasi cloud
  - filter rclone tidak mengecualikan file
  - aturan filter RcloneView
  - kecualikan folder .git dari sinkronisasi
  - aturan pengecualian sinkronisasi cloud
  - filter ukuran file maksimum
  - uji filter dengan dry run
  - pemecahan masalah sinkronisasi cloud selektif
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

# Mengatasi Filter Sinkronisasi yang Tidak Mengecualikan File — Aturan Pengecualian yang Benar dengan RcloneView

> Jika file yang ingin Anda kecualikan tetap muncul di tujuan, penyebabnya biasanya cara pola tersebut dijangkarkan, bukan filter yang rusak.

Seorang developer menyinkronkan folder proyek ke Backblaze B2 dan menambahkan pengecualian `.git`. Keesokan paginya, bucket tetap berisi ribuan objek Git. Aturan filter mengikuti logika pencocokan rclone, sehingga satu garis miring yang hilang mengubah apa yang dicocokkan oleh aturan tersebut. RcloneView menempatkan aturan ini di Step 3 wizard sinkronisasi dan menyediakan Dry Run untuk mengujinya sebelum ada file yang dipindahkan.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Aturan Pengecualian Melewatkan File

Sebagian besar masalah filter berasal dari penjangkaran. Pola yang diawali `/` hanya cocok mulai dari root sumber sinkronisasi. Pola tanpa `/` cocok di kedalaman mana pun. Contoh di pengaturan filter RcloneView menunjukkan perbedaannya:

- `.iso` mengecualikan file dengan ekstensi tersebut di mana pun di dalam struktur folder.
- `/.git/*` hanya mengecualikan file yang berada langsung di dalam folder `.git` di root sumber.
- `.git/` mengecualikan setiap folder `.git` di kedalaman mana pun, dan inilah yang diinginkan sebagian besar developer.

Jika Anda hanya menulis `/.git/*`, repositori bersarang seperti `client-a/app/.git` tetap tersinkronisasi. Subfoldernya juga, karena `*` berhenti di batas folder. Beralihlah ke aturan folder tanpa jangkar, dan repositori bersarang akan dikecualikan.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote di RcloneView sebelum mengonfigurasi filter sinkronisasi" class="img-large img-center" />

Kesalahan umum kedua adalah memilih folder sumber yang salah. Pola yang dijangkarkan ke root bersifat relatif terhadap folder yang dipilih di Step 1, sehingga memindahkan sumber satu tingkat ke atas mengubah apa yang dicocokkannya.

## Periksa Pengaturan Filter Lainnya

Aturan kustom bukan satu-satunya filter di wizard. Step 3 juga memiliki **Max file size** (dalam MB), **Max file age** (dengan satuan `y`, `d`, `h`, `m`, `s`), **Max folder depth**, serta filter bawaan untuk Music, Video, Image, Document, Google Docs, dan Box Docs. Pengaturan ini saling digabungkan, sehingga job lama yang disalin dapat berperilaku tidak terduga.

Misalnya, batas kedalaman folder dari pengujian yang terlupakan membuat subfolder yang lebih dalam dilewati tanpa pemberitahuan. Sebelum menulis ulang aturan kustom, buka job di Job Manager dan hapus batas yang tidak Anda perlukan.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Tampilan transfer cloud ke cloud di RcloneView dengan hasil sinkronisasi yang difilter" class="img-large img-center" />

## Buktikan Perbaikan dengan Dry Run dan Perbandingan

Jangan pernah menguji perubahan filter pada data aktif. Jalankan job dalam mode Dry Run terlebih dahulu. Mode ini menampilkan daftar file yang akan disalin dan file yang akan dihapus. Jika jalur yang dikecualikan masih muncul di daftar salin, polanya masih salah.

Ingat bahwa file yang dikecualikan juga tidak disentuh di tujuan. Jika file yang tidak diinginkan sudah masuk ke bucket, sinkronisasi satu arah dengan filter baru akan membiarkannya tetap di sana. Gunakan Folder Compare untuk menemukannya, pilih folder `.git` yang tersisa di sisi tujuan, lalu hapus di sana. Dengan lisensi PLUS, Folder Compare with Filter menerapkan aturan yang sama pada perbandingan, sehingga tampilan hanya menunjukkan apa yang benar-benar dikelola job.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare di RcloneView menampilkan file yang hanya ada di satu sisi" class="img-large img-center" />

Setelah hasil Dry Run terlihat benar, jalankan job dan cocokkan jumlah file di Job History dengan pratinjau Dry Run.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History RcloneView menampilkan file yang ditransfer setelah filter diperbaiki" class="img-large img-center" />

## Memulai

Job sinkronisasi, filter, Dry Run, dan Folder Compare semuanya tersedia di lisensi FREE.

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka Job Manager, edit job, lalu tinjau folder sumber di Step 1 dan pengaturan filter di Step 3.
3. Ganti pola yang dijangkarkan ke root seperti `/.git/*` dengan `.git/` jika folder tersebut bisa muncul di kedalaman mana pun.
4. Jalankan Dry Run, pastikan jalur yang dikecualikan sudah hilang, lalu bersihkan sisa file dengan Folder Compare.

Aturan filter yang tepat menjaga pencadangan Anda tetap ramping dan menjauhkan artefak build serta data repositori dari tagihan cloud Anda.

---

**Panduan Terkait:**

- [Penjelasan Aturan Filter Rclone — Include dan Exclude](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)
- [Dry Run — Pratinjau Sinkronisasi Sebelum Transfer](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)
- [Folder Compare dengan Filter](https://rcloneview.com/support/blog/folder-compare-with-filter-rcloneview)

<CloudSupportGrid />
