---
slug: copy-full-path-rclone-cli-breadcrumb-rcloneview
title: "Salin Path Lengkap dengan Remote — Hubungkan GUI dan Perintah rclone di RcloneView"
authors:
  - kai
description: "Gunakan Copy Full Path pada breadcrumb RcloneView untuk mengambil string remote:path dan menjalankannya di terminal rclone bawaan. Alur kerja praktis dari GUI ke CLI."
keywords:
  - path remote rclone
  - salin path lengkap rclone
  - breadcrumb RcloneView
  - terminal rclone GUI
  - perintah rclone about
  - sintaks remote:path
  - alur kerja rclone GUI
  - bantuan perintah rclone
  - fitur RcloneView
  - salin path cloud
tags:
  - RcloneView
  - feature
  - cli
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Salin Path Lengkap dengan Remote — Hubungkan GUI dan Perintah rclone di RcloneView

> Satu klik kanan mengubah folder yang sedang Anda telusuri menjadi path rclone yang siap pakai.

Siapa pun yang pernah mengetik perintah rclone tahu repotnya menulis `remote:path` dengan tepat, terutama dengan spasi dan folder bersarang. RcloneView mengatasinya dengan opsi menu breadcrumb yang menyalin path lengkap, termasuk nama remote, langsung ke clipboard.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Apa yang Dilakukan Copy Full Path

Setiap panel Explorer memiliki bilah path breadcrumb yang menunjukkan lokasi Anda saat ini. Klik kanan di sana dan Anda akan menemukan Cut, Copy, Paste, Select All, dan **Copy Full Path (with Remote)**. Opsi terakhir menyalin lokasi dalam bentuk `mygoogledrive:Meet recordings`, yaitu sintaks persis yang diharapkan rclone.

<img src="/support/images/en/blog/new-remote.png" alt="Daftar remote di explorer RcloneView" class="img-large img-center" />

Karena nama remote disertakan, Anda tidak perlu menebak folder itu milik remote yang mana. Hal ini penting ketika Anda mengelola beberapa akun dari penyedia yang sama.

## Tempelkan ke Terminal Bawaan

RcloneView menyertakan tab Terminal di Info View bagian bawah dengan emulasi terminal penuh. Ketik `rclone` diikuti spasi untuk melihat saran perintah, lalu tempelkan path yang disalin. Misalnya, `rclone about "remote:"` melaporkan penggunaan penyimpanan sebuah remote, dan `rclone listremotes` menampilkan semua remote yang telah dikonfigurasi. Beri tanda kutip pada path yang mengandung spasi.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Menjalankan job dan perintah di dalam RcloneView" class="img-large img-center" />

Siklus GUI-ke-CLI ini berguna ketika Anda memerlukan perintah sekali pakai yang tidak disediakan wizard, sambil tetap memakai Explorer visual untuk menemukan folder yang tepat.

## Gunakan Path di Job dan Dokumentasi

Path yang disalin juga berguna di luar terminal: menempelkannya ke runbook, tiket dukungan, atau obrolan rekan tim memastikan semua orang merujuk lokasi yang sama. Setelah transfer, periksa hasilnya di tab Transferring atau Job History, yang mencatat status, ukuran, dan kecepatan untuk setiap eksekusi.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History menampilkan transfer yang selesai" class="img-large img-center" />

RcloneView adalah GUI yang dibangun di atas rclone, bukan pengganti rclone, sehingga perintah yang Anda jalankan di terminal menggunakan engine bawaan yang sama dengan job Anda.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan remote dan telusuri ke sebuah folder di Explorer.
3. Klik kanan bilah breadcrumb dan pilih **Copy Full Path (with Remote)**.
4. Buka tab Terminal, ketik `rclone about "` lalu tempelkan path.

Lebih sedikit salah ketik, pemecahan masalah lebih cepat, dan satu alat untuk mengeklik sekaligus mengetik.

---

**Panduan Terkait:**

- [Terminal Rclone di Dalam RcloneView](https://rcloneview.com/support/blog/rcloneview-terminal-rclone-cli-inside-gui)
- [Alur Kerja Terminal dan GUI](https://rcloneview.com/support/blog/rcloneview-terminal-gui-workflow)
- [Path Pintasan Remote Alias](https://rcloneview.com/support/blog/alias-remote-shortcut-paths-rcloneview)

<CloudSupportGrid />
