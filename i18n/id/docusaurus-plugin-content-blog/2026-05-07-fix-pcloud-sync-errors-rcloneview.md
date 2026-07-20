---
slug: fix-pcloud-sync-errors-rcloneview
title: "Perbaiki Error Sinkronisasi pCloud — Mengatasi Masalah Umum pCloud dengan RcloneView"
authors:
  - tayson
description: "Atasi error sinkronisasi pCloud yang umum terjadi di RcloneView — perbaiki masa berlaku token OAuth yang habis, batas laju API, ketidaksesuaian region server, dan masalah unggah yang lambat."
keywords:
  - pCloud sync errors
  - RcloneView pCloud
  - pCloud troubleshooting
  - OAuth token expired
  - pCloud Europe US server
  - pCloud API rate limit
  - cloud sync fix
  - rclone pCloud
tags:
  - RcloneView
  - pcloud
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Perbaiki Error Sinkronisasi pCloud — Mengatasi Masalah Umum pCloud dengan RcloneView

> Kegagalan sinkronisasi pCloud hampir selalu disebabkan oleh salah satu dari beberapa masalah umum — berikut cara mendiagnosis dan memperbaiki masalah yang paling sering terjadi di RcloneView.

pCloud adalah penyedia penyimpanan cloud yang berfokus pada privasi dengan server di Amerika Serikat dan Eropa, dan pembagian regional ini adalah akar penyebab dari banyak kegagalan sinkronisasi yang membingungkan. Ketika digabungkan dengan masa berlaku token OAuth yang habis dan batas laju API, pCloud dapat menghasilkan error yang membingungkan dan tampak tidak berkaitan dengan masalah sebenarnya. Panduan ini membahas masalah pCloud yang paling umum ditemui di RcloneView dan cara mengatasi masing-masing masalah tersebut.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Masa Berlaku Token OAuth Habis dan Otorisasi Ulang

pCloud menggunakan OAuth untuk autentikasi, yang berarti RcloneView menyimpan access token yang berlaku secara berkala. Ketika token tersebut habis masa berlakunya, proses sinkronisasi akan gagal dengan error autentikasi seperti `401 Unauthorized` atau `invalid_token`. Solusinya sederhana: buka daftar remote di RcloneView, pilih remote pCloud, lalu pilih **Re-authorize** (atau hapus dan buat ulang remote tersebut). Ini akan memicu proses OAuth baru di browser Anda, yang menerbitkan token valid yang baru.

Untuk menghindari gangguan otorisasi ulang yang berulang, pastikan remote pCloud Anda di RcloneView dibuat dengan region server yang benar (lihat di bawah). Ketidaksesuaian region dapat menyebabkan token terlihat valid tetapi gagal saat digunakan pada panggilan API sebenarnya, yang tampak identik dengan token yang habis masa berlakunya.

<img src="/support/images/en/blog/new-remote.png" alt="Re-authorizing a pCloud remote in RcloneView" class="img-large img-center" />

## Ketidaksesuaian Region Server Eropa vs AS

Ini adalah masalah spesifik pCloud yang paling umum terjadi. Akun pCloud yang dibuat di Eropa dihosting di server Eropa (`eapi.pcloud.com`), sementara akun AS menggunakan endpoint default AS (`api.pcloud.com`). Jika Anda membuat akun pCloud dengan region Eropa tetapi RcloneView dikonfigurasi untuk menggunakan endpoint AS, setiap panggilan API akan gagal.

Saat mengatur remote pCloud di RcloneView, perhatikan kolom **Hostname** atau **API Endpoint** selama konfigurasi. Untuk akun Eropa, atur ini ke `eapi.pcloud.com`. Jika remote Anda dibuat tanpa menentukan hal ini, hapus dan buat ulang dengan hostname yang benar. Perbaikan tunggal ini menyelesaikan sebagian besar kegagalan koneksi pCloud.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="pCloud remote configuration showing region endpoint in RcloneView" class="img-large img-center" />

## Batas Laju API dan Unggah yang Lambat

pCloud menerapkan batas laju API, terutama untuk akun tingkat gratis. Ketika Anda mencapai batas ini, rclone akan menerima error seperti `too many requests` atau transfer akan melambat secara drastis. RcloneView menghormati logika retry bawaan rclone, tetapi Anda dapat menyesuaikannya lebih lanjut dengan mengatur flag `--retries` dan `--retries-sleep` di pengaturan **Global Rclone Flags**.

Khusus untuk unggah yang lambat, tingkat gratis pCloud memiliki batasan bandwidth yang terpisah dari batas laju. Pertimbangkan untuk membagi proses sinkronisasi besar menjadi batch yang lebih kecil menggunakan aturan filter, atau menjadwalkan proses pada jam-jam sepi dengan jadwal lisensi PLUS. Jika unggahan sering timeout, menambahkan `--timeout 300s` ke flag global Anda memberikan lebih banyak waktu bagi transfer untuk selesai sebelum rclone menganggapnya gagal.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring pCloud transfer progress in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Jika Anda melihat error autentikasi, lakukan otorisasi ulang pada remote pCloud Anda di panel pengaturan remote.
3. Periksa apakah akun pCloud Anda merupakan region EU dan perbarui endpoint ke `eapi.pcloud.com` jika diperlukan.
4. Untuk error batas laju, tambahkan `--retries 10 --retries-sleep 30s` ke Global Rclone Flags di preferensi.
5. Jalankan **dry run** sebelum setiap sinkronisasi untuk memastikan remote dapat dijangkau dan file yang tepat berada dalam cakupan.

Sebagian besar masalah sinkronisasi pCloud di RcloneView terselesaikan dengan salah satu langkah ini — perbaikan endpoint region saja sudah mencakup mayoritas kegagalan yang dilaporkan.

---

**Panduan Terkait:**

- [Mengelola Koofr — Sinkronisasi dan Pencadangan Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Mengelola Proton Drive — Sinkronisasi Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [Perbaiki Token OAuth Cloud yang Habis Masa Berlaku dan Masalah Refresh dengan RcloneView](https://rcloneview.com/support/blog/fix-cloud-oauth-token-expired-refresh-rcloneview)

<CloudSupportGrid />
