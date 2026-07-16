---
slug: combine-remote-merge-cloud-folders-rcloneview
title: "Combine Remote — Menggabungkan Beberapa Folder Cloud Menjadi Satu Struktur di RcloneView"
authors:
  - alex
description: "Gunakan Combine remote dari RcloneView untuk menggabungkan folder dari berbagai penyedia cloud menjadi satu struktur folder virtual."
keywords:
  - combine remote rclone
  - menggabungkan folder cloud
  - virtual remote RcloneView
  - menyatukan beberapa penyimpanan cloud
  - rclone combine backend
  - struktur folder multi-cloud
  - struktur file virtual cloud
  - RcloneView virtual remotes
  - mengatur folder penyimpanan cloud
  - penggabungan folder lintas penyedia
tags:
  - feature
  - multi-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Combine Remote — Menggabungkan Beberapa Folder Cloud Menjadi Satu Struktur di RcloneView

> Berhenti berpindah-pindah antara lima tab remote — Combine remote dari RcloneView menyatukan folder dari berbagai penyedia cloud menjadi satu struktur folder virtual.

Bayangkan sebuah studio produksi video yang menyimpan rekaman mentah di Google Drive, file proyek di Dropbox, dan hasil render akhir di Backblaze B2. Setiap remote berjalan baik secara terpisah, tetapi pertanyaan "di mana edit master untuk Project X" berarti harus memeriksa tiga tab setiap saat. Combine remote dari RcloneView — salah satu virtual remote wrapper milik rclone — mengatasi hal ini dengan menampilkan beberapa folder upstream sebagai subdirektori bernama di dalam satu virtual remote, sehingga seluruh produksi berada di bawah satu root tanpa harus benar-benar memindahkan file apa pun.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Apa Sebenarnya yang Dilakukan Combine Remote

Combine berbeda dari Union, yang menggabungkan beberapa sumber menjadi satu tampilan terpadu di mana file-file terlihat seolah berbagi satu direktori yang sama. Combine sebaliknya menetapkan setiap remote upstream (atau subfolder tertentu di dalamnya) ke sebuah subdirektori bernama dalam struktur virtual yang dihasilkan — sehingga `footage:` dan `renders:` muncul sebagai `production/footage` dan `production/renders` di bawah satu remote, sepenuhnya terpisah namun tetap bisa dijelajahi bersama. Tidak ada yang disalin atau diduplikasi; RcloneView merutekan operasi baca dan tulis langsung ke remote aslinya secara real time.

<img src="/support/images/en/blog/new-remote.png" alt="Creating a Combine virtual remote in RcloneView" class="img-large img-center" />

## Menyiapkan Combine Remote di RcloneView

Dari tab Remote, buka Remote Manager dan buat remote baru dengan tipe Combine. Petakan setiap remote upstream (atau remote:path) ke nama subdirektori yang Anda inginkan agar muncul dalam struktur gabungan tersebut, lalu simpan. Hasilnya akan muncul di panel Explorer seperti remote lainnya — perluas, dan setiap sumber yang dipetakan akan tampil sebagai folder tingkat atasnya sendiri, siap untuk operasi copy, move, dan drag-and-drop yang sama seperti yang Anda gunakan pada remote native. RcloneView melakukan mount dan sinkronisasi lebih dari 90 penyedia dari satu jendela, di Windows, macOS, dan Linux, sehingga Combine remote yang dibangun dari folder Google Drive, Dropbox, dan B2 akan berperilaku sama persis terlepas dari OS yang Anda gunakan.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browsing a Combine remote's merged folder structure" class="img-large img-center" />

## Kasus Penggunaan Praktis

Selain produksi media, Combine remote cocok untuk siapa pun yang mengumpulkan akun cloud secara organik — sebuah studio fotografi dengan file RAW yang tersebar di paket Dropbox lama dan bucket S3 yang lebih baru, atau tim kecil yang kontraknya tersimpan di SharePoint sementara invoice-nya berada di Google Drive. Membungkus keduanya di bawah satu Combine remote berarti satu pekerjaan Folder Compare atau Sync dapat menargetkan seluruh struktur logis sekaligus, alih-alih menjalankan pekerjaan terpisah untuk tiap penyedia, dan Job History menampilkan satu jejak terkonsolidasi alih-alih beberapa log yang terpisah-pisah.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a sync job against a Combine remote" class="img-large img-center" />

## Combine vs Virtual Remote Lainnya

Sangat mudah untuk salah memilih wrapper. Alias hanya memberikan nama pendek untuk path yang sangat bersarang — tanpa penggabungan apa pun. Union memadukan beberapa sumber menjadi tampilan yang terlihat seperti satu folder bersama, berguna untuk mengumpulkan tier penyimpanan gratis. Crypt mengenkripsi nama file dan folder di atas remote yang sudah ada. Combine adalah pilihan yang tepat khususnya ketika Anda ingin sumber-sumber yang berbeda tetap terpisah namun dapat dinavigasi dari satu root.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a Combine remote from Mount Manager" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html) jika Anda belum melakukannya.
2. Tambahkan remote-remote individual yang ingin Anda gabungkan (tab Remote > New Remote) jika belum dikonfigurasi.
3. Buat Combine remote baru di Remote Manager dan petakan setiap sumber upstream ke nama subdirektori.
4. Jelajahi struktur gabungan di panel Explorer dan jalankan pekerjaan Compare atau Sync pertama Anda terhadapnya.

Setelah akun-akun cloud Anda yang tersebar berada di bawah satu Combine remote, struktur folder tidak lagi menjadi beban yang harus Anda tanggung setiap kali perlu mencari sebuah file.

---

**Panduan Terkait:**

- [Union Remote — Menggabungkan Penyimpanan Gratis Antar Penyedia di RcloneView](https://rcloneview.com/support/blog/union-remote-combine-free-storage-rcloneview)
- [Virtual Remotes — Penjelasan Combine, Union, dan Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [Alias Remote — Path Pintasan di RcloneView](https://rcloneview.com/support/blog/alias-remote-shortcut-paths-rcloneview)

<CloudSupportGrid />
