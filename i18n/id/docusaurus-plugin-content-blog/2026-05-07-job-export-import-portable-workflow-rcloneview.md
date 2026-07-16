---
slug: job-export-import-portable-workflow-rcloneview
title: "Ekspor dan Impor Job — Alur Kerja Sinkronisasi Portabel di RcloneView"
authors:
  - tayson
description: "Pelajari cara mengekspor dan mengimpor job sinkronisasi di RcloneView untuk berbagi alur kerja antar mesin, menstandarkan konfigurasi tim, dan memulihkan setelah migrasi sistem."
keywords:
  - RcloneView job export
  - sync job import
  - portable sync workflow
  - job manager export
  - team sync configuration
  - backup sync jobs
  - migrate RcloneView jobs
  - job portability
tags:
  - feature
  - job-management
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Ekspor dan Impor Job — Alur Kerja Sinkronisasi Portabel di RcloneView

> RcloneView memungkinkan Anda mengekspor semua job sinkronisasi ke file JSON dan mengimpornya di mesin lain mana pun — membuat alur kerja Anda benar-benar portabel dan konfigurasi tim Anda konsisten.

Menyiapkan job sinkronisasi yang kompleks membutuhkan waktu: memilih remote sumber dan tujuan yang tepat, mengonfigurasi aturan filter, mengatur batas bandwidth, dan menyesuaikan opsi untuk setiap job. Hal terakhir yang Anda inginkan adalah mengulangi pekerjaan itu saat beralih ke komputer baru, menambahkan workstation kedua, atau merekrut anggota tim baru. Fitur ekspor dan impor job RcloneView mengatasi hal ini dengan menangkap seluruh konfigurasi job Anda dalam file JSON portabel yang dapat dimuat pada instalasi RcloneView mana pun.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengekspor Job Sinkronisasi Anda

Untuk mengekspor job Anda, buka **Job Manager** di RcloneView dan cari opsi **Export** di toolbar atau menu konteks. RcloneView mengekspor semua job sinkronisasi yang telah dikonfigurasi — termasuk jalur sumber/tujuan, aturan filter, flag rclone, dan informasi penjadwalannya — ke dalam satu file JSON. Anda dapat memilih lokasi penyimpanan file ini.

Merupakan praktik yang baik untuk mengekspor job Anda secara berkala sebagai bagian dari strategi pencadangan yang lebih luas. Simpan JSON hasil ekspor di folder cloud (misalnya, bucket pencadangan Google Drive atau Backblaze B2 Anda) agar selalu dapat diakses terlepas dari apa yang terjadi pada mesin lokal Anda. Anggap ini sebagai pencadangan dari konfigurasi pencadangan Anda.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Job Manager in RcloneView showing export option" class="img-large img-center" />

## Mengimpor Job di Mesin Baru

Di mesin tujuan, instal RcloneView dari [rcloneview.com](https://rcloneview.com/src/download.html) dan siapkan remote cloud yang diperlukan (nama remote yang sama harus ada agar job yang diimpor dapat berfungsi dengan benar). Kemudian buka **Job Manager** dan gunakan fungsi **Import** untuk memuat file JSON hasil ekspor Anda. Semua job sinkronisasi Anda akan langsung muncul, siap dijalankan.

Alur kerja ini sangat berharga setelah migrasi komputer. Alih-alih membuat ulang selusin job sinkronisasi secara manual, proses impor hanya membutuhkan waktu beberapa detik. Proses yang sama berlaku untuk standardisasi tim: seorang pemimpin tim membuat dan mengekspor konfigurasi job baku, lalu mendistribusikan file JSON tersebut kepada semua anggota tim yang kemudian mengimpornya ke instalasi RcloneView masing-masing.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Imported jobs visible in RcloneView Job Manager" class="img-large img-center" />

## Standardisasi Tim dan Pemulihan Bencana

Bagi tim yang mengelola beberapa tujuan cloud, konsistensi dalam konfigurasi job sinkronisasi sangatlah penting. Jika setiap anggota tim mengonfigurasi job mereka sendiri secara manual, perbedaan pada aturan filter atau jalur tujuan dapat menyebabkan file terlewat atau penimpaan yang tidak diinginkan. Dengan menjaga satu file ekspor job utama dan mengimpornya ke semua mesin tim, Anda memastikan semua orang menjalankan alur kerja yang identik.

Fitur ekspor/impor ini juga berfungsi sebagai mekanisme pemulihan bencana yang ringan untuk konfigurasi sinkronisasi Anda. Jika RcloneView perlu diinstal ulang atau sebuah mesin diganti, memulihkan seluruh alur kerja Anda hanya membutuhkan dua langkah: impor konfigurasi remote rclone dan impor JSON job. Fitur ekspor/impor RcloneView tersedia pada tingkatan gratis — tidak diperlukan lisensi PLUS untuk fitur ini.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Standardized sync jobs shared across team machines in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Konfigurasikan job sinkronisasi Anda di **Job Manager** pada mesin utama Anda.
3. Gunakan **Export** di Job Manager untuk menyimpan semua job ke file JSON.
4. Simpan file ekspor di lokasi pencadangan cloud untuk keamanan.
5. Di mesin baru, instal RcloneView, siapkan nama remote yang sesuai, dan **Import** JSON untuk memulihkan semua job.

Ekspor dan impor job menjadikan RcloneView sebagai platform sinkronisasi yang benar-benar portabel — di mana investasi alur kerja Anda tidak pernah terikat pada satu mesin saja.

---

**Panduan Terkait:**

- [Otomatiskan Pencadangan Cloud Harian dengan RcloneView](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [Cadangkan dan Migrasikan Konfigurasi Rclone dengan RcloneView](https://rcloneview.com/support/blog/backup-migrate-rclone-config-rcloneview)
- [Operasi Batch di RcloneView](https://rcloneview.com/support/blog/batch-operations-rcloneview)

<CloudSupportGrid />
