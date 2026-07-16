---
slug: manage-gofile-cloud-sync-backup-rcloneview
title: "Kelola Penyimpanan Gofile — Sinkronisasi dan Pencadangan File dengan RcloneView"
authors:
  - tayson
description: "Kelola penyimpanan cloud Gofile dengan RcloneView — unggah, atur, dan sinkronkan konten Gofile menggunakan GUI yang dibangun di atas backend Gofile milik rclone."
keywords:
  - Gofile management
  - Gofile sync tool
  - Gofile upload GUI
  - RcloneView Gofile
  - Gofile cloud backup
  - Gofile file transfer
  - content delivery storage
  - multi-cloud file management
  - Gofile rclone
  - large file upload service
tags:
  - RcloneView
  - gofile
  - cloud-storage
  - cloud-sync
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Penyimpanan Gofile — Sinkronisasi dan Pencadangan File dengan RcloneView

> Gofile adalah layanan hosting dan berbagi file populer untuk unggahan berukuran besar — RcloneView terhubung ke Gofile melalui Access Token dan mengintegrasikannya ke dalam alur kerja manajemen cloud Anda.

Gofile adalah layanan hosting dan berbagi file yang memungkinkan Anda mengunggah file berukuran besar dan membuat tautan berbagi tanpa batasan ukuran yang ketat. Bagi pengguna yang rutin mendistribusikan konten melalui Gofile, mengelola unggahan hanya lewat portal web menjadi merepotkan. RcloneView terhubung ke Gofile menggunakan Access Token, membawa penyimpanan Gofile Anda ke dalam alur kerja manajemen file standar bersama semua remote cloud lainnya.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menyiapkan Gofile di RcloneView

Untuk menghubungkan Gofile di RcloneView, buka **Remote tab > New Remote** dan pilih **Gofile** dari daftar provider. Anda memerlukan **Access Token** dari dashboard akun Gofile Anda. Masukkan token, beri nama remote, lalu simpan. Akun Gofile Anda akan muncul di explorer sebagai remote yang dapat dijelajahi, menampilkan folder dan file seperti penyimpanan cloud lainnya.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Gofile as a new remote in RcloneView" class="img-large img-center" />

Gofile mengatur konten dalam struktur berbasis folder yang ditampilkan RcloneView secara rapi baik dalam list view maupun thumbnail view. Anda dapat menjelajahi folder bertingkat, memeriksa nama dan ukuran file, serta memilih beberapa file sekaligus untuk operasi massal — mengunduh sekumpulan file, menghapus kumpulan unggahan lama, atau memindahkan konten antar folder Gofile.

## Mengunggah dan Mengatur Konten Gofile

RcloneView mendukung unggahan drag-and-drop dari file manager lokal Anda langsung ke panel explorer Gofile. Menyeret sekumpulan file video dari folder lokal akan mengunggahnya ke tujuan Gofile yang dipilih tanpa membuka browser — sangat berguna bagi content creator yang rutin mendistribusikan paket video besar atau arsip software melalui Gofile.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag-and-drop upload to Gofile in RcloneView" class="img-large img-center" />

Membuat job sinkronisasi di **Job Manager** memungkinkan Anda mendorong konten dari folder lokal ke Gofile secara berkala. Seorang produser podcast yang mengunggah audio episode hasil edit ke Gofile untuk distribusi ke pendengar dapat mengotomatiskan proses ini agar berjalan setiap minggu setelah sesi rekaman — menyinkronkan hanya file baru atau yang berubah setiap kali dijalankan.

## Mencadangkan Konten Gofile ke Penyimpanan Permanen

Konten di Gofile mungkin memiliki masa retensi terbatas atau bergantung pada status akun. Bagi pengguna yang memanfaatkan Gofile sebagai saluran distribusi namun tetap menginginkan pencadangan permanen, RcloneView memungkinkan transfer langsung dari Gofile ke Amazon S3, Backblaze B2, atau remote cloud lainnya. Konfigurasikan job penyalinan untuk menarik konten dari Gofile dan mengarsipkannya di penyimpanan jangka panjang — menjaga salinan permanen dari semua yang pernah Anda bagikan.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing Gofile backup transfers in RcloneView" class="img-large img-center" />

Tab **Job History** mencatat setiap transfer dengan detail byte yang dipindahkan, jumlah file yang ditransfer, durasi, dan status — sehingga Anda selalu tahu apakah konten Gofile Anda telah berhasil diarsipkan.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka **Remote tab > New Remote**, pilih **Gofile**, dan masukkan Access Token Anda.
3. Jelajahi konten Gofile Anda di panel explorer.
4. Gunakan **Job Manager** untuk menyinkronkan konten lokal ke Gofile, atau menyalin konten Gofile ke penyimpanan cadangan.

Gofile melalui RcloneView memberi para distributor konten lapisan manajemen file yang layak di atas infrastruktur unggah dan berbagi Gofile yang cepat — mengubah unggahan satu kali menjadi alur kerja yang terorganisir dan otomatis.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Cloud Backblaze B2 — Sinkronisasi dan Pencadangan dengan RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Unggah File Berukuran Besar ke Google Drive dengan RcloneView](https://rcloneview.com/support/blog/upload-large-files-google-drive-sync-rcloneview)
- [Copy URL — Unduh File Langsung ke Cloud dengan RcloneView](https://rcloneview.com/support/blog/copyurl-download-url-to-cloud-rcloneview)

<CloudSupportGrid />
