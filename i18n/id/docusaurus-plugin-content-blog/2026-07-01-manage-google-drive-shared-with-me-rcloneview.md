---
slug: manage-google-drive-shared-with-me-rcloneview
title: "Kelola Google Drive Shared With Me — Sinkronisasi dan Pencadangan File dengan RcloneView"
authors:
  - alex
description: "Jelajahi, sinkronkan, dan cadangkan folder Shared with Me di Google Drive menggunakan GUI lintas platform RcloneView, tanpa kehilangan jejak konten yang dibagikan."
keywords:
  - google drive shared with me
  - google drive shared with me sync
  - rcloneview google drive
  - backup shared google drive folders
  - google drive gui client
  - shared_with_me rclone
  - google drive collaboration backup
  - manage shared google drive files
tags:
  - RcloneView
  - google-drive
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Google Drive Shared With Me — Sinkronisasi dan Pencadangan File dengan RcloneView

> File yang dibagikan orang lain kepada Anda berada di ruang terpisah dari Drive milik Anda sendiri — RcloneView memungkinkan Anda menjelajahi, mencadangkan, dan menyinkronkan konten yang dibagikan tersebut semudah menangani file Anda sendiri.

Bagian "Shared with Me" pada Google Drive menyimpan setiap file dan folder yang dibagikan oleh rekan kerja, klien, atau kolaborator ke akun Anda, tetapi bagian ini secara default bukan bagian dari struktur folder Drive reguler Anda. Pemisahan ini membuat konten yang dibagikan mudah terlupakan, terutama saat folder klien perlu diarsipkan secara lokal atau dicerminkan ke cloud lain untuk keamanan. RcloneView mengatasi hal ini dengan menghubungkan ke ruang Shared with Me sebagai remote yang dapat dijelajahi tersendiri, sehingga Anda dapat memperlakukan konten yang dibagikan seperti folder lain dalam alur kerja Anda.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan ke Konten Shared With Me

Remote Google Drive standar hanya menampilkan file yang Anda miliki atau yang telah Anda tempatkan dalam struktur folder Anda sendiri. Untuk mengakses item yang dibagikan kepada Anda, konfigurasi remote RcloneView menyediakan pengaturan `shared_with_me` untuk remote Google Drive — mengaktifkannya akan mengarahkan koneksi ke tampilan Shared with Me, bukan ke root Drive pribadi Anda. Artinya, Anda tidak memerlukan akun Google kedua atau solusi alternatif berbasis browser untuk mengakses folder yang dibagikan klien; Anda mengonfigurasinya sekali di wizard New Remote, dan struktur folder yang dibagikan akan muncul di panel Explorer seperti koneksi lainnya.

<img src="/support/images/en/blog/new-remote.png" alt="Creating a new Google Drive remote configured for Shared with Me content in RcloneView" class="img-large img-center" />

Setelah terhubung, remote Shared with Me berperilaku seperti sumber file biasa: navigasi struktur folder, pratinjau thumbnail untuk gambar, dan menu klik kanan standar untuk menyalin, mengunduh, serta Get Public Link semuanya berfungsi dengan cara yang sama. RcloneView juga menyinkronkan dan membandingkan folder — pada lisensi FREE — sehingga konten yang dibagikan tidak terbatas pada penjelajahan baca saja.

## Mencadangkan Folder yang Dibagikan Sebelum Menghilang

Folder yang dibagikan dapat menghilang dari tampilan Anda jika pemilik mencabut akses atau menghapus file sumber, yang merupakan risiko nyata ketika bergantung pada Drive milik orang lain untuk hasil kerja proyek. Menjalankan tugas sinkronisasi satu arah dari remote Shared with Me ke Google Drive Anda sendiri, disk lokal, atau bucket penyimpanan objek akan membuat salinan independen yang Anda kendalikan. Konfigurasikan tugas dengan arah "Modifying destination only" agar tujuan pencadangan selalu mencerminkan kondisi terkini folder yang dibagikan tanpa mengubah aslinya.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing a Google Drive Shared with Me folder to a backup destination in RcloneView" class="img-large img-center" />

Untuk hubungan klien yang berkelanjutan, pengaturan filter memungkinkan Anda mengecualikan jenis file yang tidak perlu diarsipkan — Google Docs atau ekstensi tertentu dapat dilewati menggunakan aturan filter bawaan atau khusus pada Langkah 3 wizard sinkronisasi, sehingga pencadangan tetap berfokus pada file yang benar-benar penting.

## Menjadwalkan Perlindungan Berkelanjutan

Folder yang dibagikan dan diperbarui klien setiap minggu membutuhkan lebih dari sekadar salinan satu kali. Pengguna lisensi PLUS dapat melampirkan jadwal bergaya crontab pada tugas sinkronisasi sehingga konten Shared with Me dicadangkan secara otomatis dan berulang, tanpa perlu menjalankan ulang tugas secara manual. Job History kemudian mencatat status, ukuran yang ditransfer, dan durasi setiap kali dijalankan, memberi Anda jejak audit yang jelas mengenai kapan konten yang dibagikan terakhir kali diambil.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring backup job for a Google Drive Shared with Me remote" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buat remote Google Drive baru dan aktifkan opsi `shared_with_me` selama pengaturan.
3. Jelajahi struktur folder Shared with Me di panel Explorer untuk memastikan folder yang diharapkan muncul.
4. Siapkan tugas sinkronisasi satu arah ke tujuan pencadangan, dan jadwalkan jika Anda menggunakan lisensi PLUS.

Konten yang dibagikan tidak seharusnya menjadi titik buta dalam strategi pencadangan Anda — membawanya ke RcloneView menempatkannya di bawah perlindungan yang sama dengan semua yang Anda kelola.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Google Drive — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Memperbaiki Error Izin Google Shared Drive — Cara Mengatasi dengan RcloneView](https://rcloneview.com/support/blog/fix-google-shared-drive-permission-errors-rcloneview)
- [Menyinkronkan Dua Akun Google Drive dengan RcloneView](https://rcloneview.com/support/blog/sync-two-google-drive-accounts-rcloneview)

<CloudSupportGrid />
