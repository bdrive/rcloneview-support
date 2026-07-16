---
slug: alias-remote-shortcut-paths-rcloneview
title: "Alias Remote — Buat Pintasan ke Folder Cloud yang Dalam dengan RcloneView"
authors:
  - tayson
description: "Pelajari cara menggunakan fitur alias remote rclone untuk membuat pintasan ke folder cloud yang bertingkat dan meningkatkan produktivitas dengan RcloneView."
keywords:
  - alias remote
  - rclone alias
  - pintasan folder
  - pintasan folder cloud
  - akses folder bertingkat
  - konfigurasi remote rclone
  - pintasan produktivitas
  - pintasan folder rclone
  - akses folder cepat
  - organisasi cloud
tags:
  - feature
  - productivity
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Alias Remote — Buat Pintasan ke Folder Cloud yang Dalam dengan RcloneView

> Lelah menelusuri folder demi folder untuk mencapai direktori cloud yang paling sering Anda gunakan? Buat pintasan dengan alias remote dan aksesnya secara instan.

Hierarki penyimpanan cloud dapat berkembang menjadi rumit. Menemukan folder proyek yang tersembunyi jauh di dalam atau direktori tim bersama memerlukan banyak klik. Fitur alias remote milik rclone mengatasi hal ini dengan membuat pintasan—alias—yang mengarah langsung ke folder tertentu.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Apa Itu Alias Remote?

Alias remote adalah remote virtual yang mengarah ke subfolder di dalam remote lain. Alih-alih menelusuri `/MyDrive/Projects/Client A/2026/Active Cases/Smith vs. Jones`, Anda membuat alias bernama `smith-vs-jones` yang mengarah langsung ke sana.

![File comparison and selection](/images/en/howto/rcloneview-basic/compare-display-select.png)

Di RcloneView, Anda kemudian akan melihat `smith-vs-jones` sebagai remote terpisah dalam daftar remote Anda, sehingga Anda dapat mengakses folder tersebut hanya dengan satu klik. Remote virtual ini berperilaku persis seperti remote asli, sehingga Anda dapat menyalin, memindahkan, dan melakukan sinkronisasi file menggunakan alias tersebut sebagai titik awal.

## Membuat Alias Remote

Konfigurasikan alias remote di file konfigurasi rclone Anda dengan menentukan remote dasar dan jalur subfolder. RcloneView menampilkan semua alias remote yang telah dikonfigurasi berdampingan dengan akun cloud standar Anda.

![Job scheduling interface](/images/en/howto/rcloneview-advanced/create-job-schedule.png)

Sebagai contoh, buat alias yang mengarah ke `/GoogleDrive/Archive/2025` dengan nama `archive-2025`, lalu aksesnya langsung dari pemilih remote RcloneView. Alias ini berfungsi sebagai pintasan yang praktis tanpa menduplikasi data atau memerlukan penyimpanan khusus.

## Tingkatkan Produktivitas

Beberapa kasus penggunaan yang umum meliputi:

- Folder khusus proyek untuk akses cepat selama pekerjaan aktif
- Direktori klien untuk firma hukum atau bisnis yang memerlukan akses sering
- Folder tim bersama yang dirujuk secara rutin oleh banyak proyek
- Folder arsip atau pencadangan yang jarang diakses namun perlu mudah diambil
- Direktori kerja sementara untuk alur kerja atau kampanye tertentu

Setiap alias mengurangi langkah navigasi dan menjaga alur kerja Anda tetap fokus pada hal yang paling penting. Tim dapat berbagi konfigurasi alias untuk memastikan semua orang mengakses struktur proyek yang sama secara efisien.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Konfigurasikan alias remote di konfigurasi rclone Anda (arahkan ke subdirektori yang sering digunakan).
3. Jalankan RcloneView dan lihat alias baru Anda muncul sebagai remote terpisah.
4. Klik alias mana pun untuk langsung menuju ke folder tersebut.

Sederhanakan navigasi cloud Anda dan raih kembali berjam-jam produktivitas.

---

**Panduan Terkait:**

- [Virtual Remote — Menggabungkan Combine dan Union Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [Manajemen Remote — Menambah, Mengedit, Menghapus](https://rcloneview.com/support/blog/remote-management-add-edit-delete-rcloneview)
- [Union Remote — Menggabungkan Penyimpanan Gratis](https://rcloneview.com/support/blog/union-remote-combine-free-storage-rcloneview)

<CloudSupportGrid />
