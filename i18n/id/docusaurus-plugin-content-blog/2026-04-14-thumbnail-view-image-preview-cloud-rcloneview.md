---
slug: thumbnail-view-image-preview-cloud-rcloneview
title: "Thumbnail View — Jelajahi dan Pratinjau Gambar Cloud secara Visual di RcloneView"
authors:
  - tayson
description: "Gunakan Thumbnail View RcloneView untuk menjelajahi dan melihat pratinjau file gambar yang tersimpan di penyimpanan cloud secara visual. Kenali foto dengan cepat dan kelola aset media tanpa perlu mengunduh semuanya."
keywords:
  - RcloneView thumbnail view
  - cloud image preview GUI
  - browse cloud photos visually
  - rclone image thumbnail preview
  - cloud storage photo browsing
  - visual file manager cloud
  - RcloneView image gallery
  - cloud storage thumbnail feature
tags:
  - RcloneView
  - feature
  - photography
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Thumbnail View — Jelajahi dan Pratinjau Gambar Cloud secara Visual di RcloneView

> Thumbnail View milik RcloneView menampilkan file gambar yang tersimpan di penyimpanan cloud sebagai grid visual — memungkinkan Anda mengenali foto sekilas tanpa perlu mengunduhnya terlebih dahulu.

Sebagian besar tool GUI penyimpanan cloud menampilkan file sebagai daftar berbasis teks saja: nama file, ukuran, tanggal. Cara ini cocok untuk dokumen dan kode, tetapi merepotkan bagi fotografer, desainer, dan tim media yang perlu mengenali gambar tertentu secara visual di dalam folder cloud yang berisi ratusan atau ribuan file. Mode Thumbnail View RcloneView menampilkan gambar yang tersimpan di penyimpanan cloud sebagai grid pratinjau langsung di panel Explorer — membuat manajemen file visual untuk pustaka foto dan aset media jauh lebih cepat.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Beralih ke Thumbnail View

Di panel Explorer mana pun, cari toggle mode tampilan di toolbar panel. RcloneView menyediakan tiga mode tampilan:

- **List View** — kolom detail (nama, ukuran, tanggal, tipe)
- **Tree View** — navigasi hierarki folder
- **Thumbnail View** — grid pratinjau gambar

Klik ikon Thumbnail View untuk mengaktifkannya pada panel saat ini. RcloneView mengambil data pratinjau untuk gambar di folder yang sedang dibuka dan menampilkannya sebagai grid. Ini berfungsi untuk format gambar umum: JPEG, PNG, GIF, WebP, dan format lain yang didukung oleh API thumbnail dari penyedia cloud yang bersangkutan.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Switching to Thumbnail View in RcloneView Explorer panel" class="img-large img-center" />

## Kasus Penggunaan untuk Fotografer dan Desainer

**Menyeleksi pustaka foto:** Fotografer pernikahan dengan 3.000 pasang file RAW+JPEG yang tersimpan di Google Drive dapat beralih ke Thumbnail View untuk memindai JPEG secara visual, mengidentifikasi foto pilihan, dan menyeretnya ke folder pengiriman terpisah — semua tanpa mengunduh file atau membuka Lightroom.

**Meninjau aset yang dikirim klien:** Desainer grafis yang menerima aset gambar dari klien melalui Dropbox dapat melihat pratinjau grid thumbnail untuk memastikan file yang tepat telah diterima sebelum mulai bekerja.

**Mengelola konten media sosial:** Tim pemasaran yang menyimpan gambar media sosial yang telah disetujui di sebuah bucket S3 dapat menggunakan Thumbnail View untuk menjelajahi dan memilih gambar untuk postingan minggu itu tanpa perlu keluar dari RcloneView.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Browsing a photo library in cloud storage with RcloneView Thumbnail View" class="img-large img-center" />

## Thumbnail View dengan Tata Letak Multi-Panel

Gabungkan Thumbnail View dengan tata letak multi-panel RcloneView untuk alur kerja visual yang lebih kuat. Buka dua panel: Thumbnail View di sebelah kiri yang menampilkan folder sumber Anda (misalnya, `dropbox:/Shoots/Raw/`), dan List View di sebelah kanan yang menampilkan folder pengiriman Anda (misalnya, `google-drive:/Client Deliverables/`). Pilih gambar secara visual di grid thumbnail dan seret langsung ke panel tujuan — alur kerja seleksi-dan-pengiriman yang cepat dan visual, sepenuhnya dalam penyimpanan cloud.

Gunakan Ctrl+Klik untuk memilih beberapa gambar sekaligus di Thumbnail View, lalu klik kanan untuk operasi massal: salin, pindahkan, unduh, atau dapatkan tautan publik. Semua operasi file standar yang tersedia di List View berfungsi dengan cara yang sama di Thumbnail View.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Multi-panel workflow with Thumbnail View for cloud image management in RcloneView" class="img-large img-center" />

## Catatan Kompatibilitas Penyedia

Thumbnail View mengandalkan kemampuan penyedia cloud untuk menyajikan pratinjau gambar melalui API. Google Drive, Dropbox, dan OneDrive menyediakan URL thumbnail secara native, sehingga rendering pratinjau berlangsung cepat. Penyedia yang kompatibel dengan S3 (Amazon S3, Backblaze B2, Wasabi, Cloudflare R2) menyajikan data gambar mentah tanpa API thumbnail khusus — pratinjau dihasilkan dari gambar mentah, yang mungkin lebih lambat untuk file berukuran besar.

Untuk performa terbaik di Thumbnail View, jelajahi folder dengan jumlah gambar yang wajar dalam satu waktu (50–200 per halaman) daripada mencoba menampilkan ribuan thumbnail secara bersamaan.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Hubungkan penyedia penyimpanan foto Anda (Google Drive, Dropbox, S3, dll.) melalui New Remote.
3. Jelajahi ke folder gambar Anda di panel Explorer dan klik ikon Thumbnail View.
4. Gunakan Ctrl+Klik untuk memilih gambar dan drag-and-drop untuk memindahkan atau menyalinnya antar panel.

Thumbnail View mengubah RcloneView menjadi pengelola file cloud visual untuk alur kerja media — menghemat waktu bagi siapa pun yang bekerja dengan gambar yang tersimpan di penyimpanan cloud setiap hari.

---

**Panduan Terkait:**

- [Rapikan Pustaka Foto Cloud Anda dengan RcloneView](https://rcloneview.com/support/blog/declutter-cloud-photo-library-rcloneview)
- [Pengiriman Multi-Cloud untuk Fotografer dengan RcloneView](https://rcloneview.com/support/blog/photographer-multi-cloud-delivery-with-rcloneview)
- [Kelola Penyimpanan Google Photos — Sinkronisasi dan Pencadangan dengan RcloneView](https://rcloneview.com/support/blog/manage-google-photos-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
