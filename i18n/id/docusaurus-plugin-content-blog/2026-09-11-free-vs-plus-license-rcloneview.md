---
slug: free-vs-plus-license-rcloneview
title: "Lisensi FREE vs PLUS — Perbandingan Fitur di RcloneView"
authors:
  - alex
description: "Bandingkan fitur lisensi FREE dan PLUS RcloneView secara berdampingan — penjadwalan, multi-jendela, mount otomatis, dan perbandingan dengan filter — untuk memilih paket yang tepat."
keywords:
  - lisensi RcloneView
  - RcloneView FREE vs PLUS
  - fitur RcloneView PLUS
  - sinkronisasi cloud terjadwal
  - pengelola file multi-jendela
  - mount otomatis saat startup
  - perbandingan folder dengan filter
  - perbandingan lisensi RcloneView
  - otomatisasi sinkronisasi cloud
  - pengelola file lintas platform
tags:
  - RcloneView
  - feature
  - guide
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Lisensi FREE vs PLUS — Perbandingan Fitur di RcloneView

> Ketahui persis apa yang dibuka oleh setiap lisensi RcloneView sebelum Anda membangun alur kerja penyimpanan cloud di sekitarnya.

Memilih antara lisensi FREE dan PLUS seharusnya tidak memerlukan tebakan. RcloneView membagi kumpulan fiturnya dengan jelas: lisensi FREE sudah mencakup manajemen file, sinkronisasi, dan mount penuh di lebih dari 90 penyedia, sementara PLUS menambahkan otomatisasi dan kemampuan multi-instance untuk pengguna tingkat lanjut dan tim. Panduan ini menjabarkan dengan tepat apa yang ada di setiap tingkatan sehingga Anda dapat mencocokkan lisensi dengan cara kerja Anda yang sebenarnya.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Yang Sudah Termasuk dalam Lisensi FREE

Lisensi FREE bukan versi uji coba yang dipangkas — ini adalah kumpulan alat lengkap untuk penggunaan sehari-hari. Mount dan unmount drive cloud, operasi penjelajah file lengkap (salin, pindah, hapus, ganti nama), Folder Compare dasar, dan seluruh sistem Sync & Job Management semuanya disertakan tanpa biaya. Itu berarti sinkronisasi 1:N (satu sumber dicerminkan ke banyak tujuan), Job History dengan log terperinci, pratinjau Dry Run sebelum menjalankan sinkronisasi, dan Export/Import konfigurasi pekerjaan semuanya berfungsi di FREE.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing completed sync jobs on the FREE license" class="img-large img-center" />

Tidak seperti alat yang hanya bisa mount, RcloneView juga melakukan sinkronisasi dan membandingkan folder — bahkan pada lisensi FREE — di seluruh 90+ penyedia cloud yang sama, terhubung melalui Remote Manager dengan OAuth atau pengaturan berbasis kredensial tergantung layanannya.

## Yang Dibuka oleh PLUS

PLUS dibuat untuk orang yang membutuhkan RcloneView berjalan tanpa pengawasan atau di beberapa konteks sekaligus. Fitur andalannya adalah Schedule-Based Sync: penjadwalan bergaya crontab dengan kolom menit, jam, hari dalam seminggu, tanggal, dan bulan, ditambah simulator jadwal untuk melihat pratinjau waktu eksekusi berikutnya sebelum menerapkannya.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring a crontab-style sync schedule in RcloneView PLUS" class="img-large img-center" />

Selain penjadwalan, PLUS menambahkan Auto Mount on Startup (sehingga drive yang di-mount siap begitu mesin Anda menyala), Auto Start Schedule on Startup, dukungan Multi-Window untuk menjalankan instance RcloneView independen dengan statusnya masing-masing, dan Folder Compare with Filter untuk membatasi perbandingan berdasarkan nama folder atau jenis file.

## Memilih Lisensi yang Tepat untuk Alur Kerja Anda

Jika Anda memicu transfer secara manual, menjelajahi penyimpanan cloud seperti pengelola file, dan sesekali menjalankan perbandingan atau sinkronisasi, FREE sudah mencakup seluruh alur kerja Anda. Jika Anda memerlukan pekerjaan sinkronisasi yang berjalan sesuai jadwal tanpa membuka aplikasi, drive yang di-mount secara otomatis setelah reboot, atau beberapa jendela RcloneView independen untuk proyek terpisah, PLUS menghilangkan langkah-langkah manual tersebut.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job manually from the RcloneView Job Manager" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Siapkan remote Anda dan jalankan sinkronisasi atau mount manual untuk memastikan kumpulan fitur FREE sesuai dengan penggunaan harian Anda.
3. Jika Anda mendapati diri mengulangi transfer yang sama pada waktu yang sama setiap hari, coba buat jadwal untuk melihat apakah penjadwalan PLUS cocok.
4. Aktifkan kunci lisensi di Help > Activate License setelah Anda memutuskan tingkatan mana yang sesuai dengan alur kerja Anda.

Mencocokkan lisensi dengan kebiasaan Anda yang sebenarnya — bukan sebaliknya — membuat pengaturan penyimpanan cloud Anda tetap sederhana dan dapat diprediksi.

---

**Panduan Terkait:**

- [Praktik Terbaik Penjadwalan — Cron dan Percobaan Ulang di RcloneView](https://rcloneview.com/support/blog/schedule-best-practices-cron-retry-rcloneview)
- [Explorer Paralel Multi-Jendela di RcloneView](https://rcloneview.com/support/blog/multi-window-parallel-explorer-rcloneview)
- [Folder Compare dengan Filter di RcloneView](https://rcloneview.com/support/blog/folder-compare-with-filter-rcloneview)

<CloudSupportGrid />
