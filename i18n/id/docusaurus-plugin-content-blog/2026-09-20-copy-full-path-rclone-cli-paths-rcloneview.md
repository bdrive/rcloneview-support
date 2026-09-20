---
slug: copy-full-path-rclone-cli-paths-rcloneview
title: "Salin Path Lengkap — Dapatkan Path Siap Rclone Secara Instan di RcloneView"
authors:
  - jay
description: "Pelajari bagaimana fitur Salin Path Lengkap RcloneView mengubah breadcrumb apa pun menjadi path CLI rclone yang siap pakai hanya dengan satu klik."
keywords:
  - copy full path rclone
  - rclone cli path format
  - breadcrumb path bar
  - rclone remote path syntax
  - RcloneView terminal
  - cloud file path copy
  - rclone command line paths
  - GUI to CLI workflow
  - cloud storage path management
tags:
  - RcloneView
  - feature
  - cli
  - tips
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Salin Path Lengkap — Dapatkan Path Siap Rclone Secara Instan di RcloneView

> Berhenti mengetik ulang nama remote dan path folder secara manual — salin langsung ke terminal Anda.

Siapa pun yang menggabungkan GUI RcloneView dengan command line rclone tahu betul kerepotan ini: Anda menemukan folder secara visual, lalu harus menyusun ulang path-nya secara manual untuk menjalankan perintah `rclone copy` atau `rclone check`. RcloneView menghilangkan langkah ini sepenuhnya dengan Salin Path Lengkap, sebuah aksi klik kanan pada breadcrumb bar yang menyalin string remote:path persis seperti yang diharapkan rclone.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cara Kerja Salin Path Lengkap

Setiap panel Explorer di RcloneView memiliki Breadcrumb Path Bar di atas daftar file, yang menampilkan hierarki folder saat ini untuk remote yang aktif pada tab tersebut. Mengklik kanan di mana saja pada breadcrumb akan membuka menu konteks berisi Potong, Salin, Tempel, Pilih Semua, dan — yang terpenting — Salin Path Lengkap (dengan Remote).

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView breadcrumb path bar showing a connected remote folder" class="img-large img-center" />

Memilihnya akan menyalin string seperti `mygoogledrive:Meet recordings` ke clipboard, dengan format yang persis sesuai harapan CLI rclone. Tidak ada penerjemahan manual antara apa yang Anda lihat di GUI dan apa yang dibutuhkan rclone di command line — nama remote, titik dua, dan path folder semuanya tersalin dengan benar, termasuk subfolder yang bertingkat.

Hal ini menjadi semakin penting begitu Anda mengonfigurasi lebih dari beberapa remote. Nama remote — terutama yang disiapkan untuk endpoint yang kompatibel dengan S3 atau server SFTP — tidak selalu mudah diingat, dan struktur folder di drive cloud bisa memiliki banyak tingkatan. Salin Path Lengkap menghilangkan kebutuhan untuk menebak-nebak ini.

## Perannya dalam Alur Kerja CLI

Setelah menyalin sebuah path, tempelkan langsung ke Rclone Terminal bawaan RcloneView — tab Terminal di Info View bagian bawah — untuk menjalankan perintah ad hoc seperti `rclone size` atau `rclone lsf` pada lokasi tersebut secara persis. Berbeda dengan alat yang hanya bisa mount, RcloneView juga melakukan sinkronisasi dan membandingkan folder pada lisensi FREE yang sama, sehingga terminal, tugas sinkronisasi, dan file browser semuanya merujuk ke remote yang sama tanpa perlu memasukkan ulang kredensial.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView terminal tab used alongside the file explorer" class="img-large img-center" />

Path yang sama yang telah disalin juga berfungsi di luar RcloneView, pada instalasi rclone mandiri mana pun yang mengarah ke file `rclone.conf` yang sama — berguna saat membuat skrip untuk tugas terjadwal atau men-debug sinkronisasi dari server jarak jauh.

## Contoh Praktis

Misalkan sebuah tim produksi video menyimpan rekaman mentah di Google Drive dan sebuah bucket arsip yang kompatibel dengan S3. Daripada mengetikkan `s3archive:projects/2026/client-x/raw` secara manual — dan berisiko salah ketik yang secara diam-diam mengarah ke folder yang salah — seorang editor menavigasi ke sana secara visual, mengklik kanan pada breadcrumb, dan menyalin path yang tepat untuk perintah verifikasi sebelum memulai transfer besar.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView file explorer with a deeply nested cloud folder open" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Hubungkan remote yang paling sering Anda gunakan melalui Remote Manager.
3. Navigasikan ke folder mana pun dan klik kanan pada breadcrumb path bar-nya.
4. Pilih Salin Path Lengkap (dengan Remote) dan tempelkan ke Rclone Terminal atau command line mana pun.

Kemudahan-kemudahan kecil seperti ini terasa manfaatnya ketika Anda berpindah antara explorer visual dan perintah rclone mentah setiap hari.

---

**Panduan Terkait:**

- [Terminal RcloneView — CLI Rclone di Dalam GUI](https://rcloneview.com/support/blog/rcloneview-terminal-rclone-cli-inside-gui)
- [Flag Rclone Kustom — Opsi Lanjutan di RcloneView](https://rcloneview.com/support/blog/custom-rclone-flags-advanced-options-rcloneview)
- [Panduan Transfer Cloud Drag and Drop dengan RcloneView](https://rcloneview.com/support/blog/drag-drop-cloud-transfer-guide-rcloneview)

<CloudSupportGrid />
