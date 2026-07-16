---
slug: manage-terabox-cloud-sync-backup-rcloneview
title: "Kelola Penyimpanan Terabox — Sinkronisasi dan Pencadangan File dengan RcloneView"
authors:
  - alex
description: "Kelola penyimpanan cloud Terabox dengan RcloneView — sinkronkan, cadangkan, dan transfer file di 90+ penyedia dari satu GUI lintas platform. Tidak perlu CLI."
keywords:
  - sinkronisasi Terabox
  - pencadangan Terabox
  - kelola penyimpanan Terabox
  - Terabox RcloneView
  - manajemen cloud Terabox
  - transfer file Terabox
  - sinkronkan Terabox ke Google Drive
  - alat pencadangan cloud Terabox
  - panduan RcloneView Terabox
  - manajer penyimpanan cloud Terabox
tags:
  - RcloneView
  - terabox
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Penyimpanan Terabox — Sinkronisasi dan Pencadangan File dengan RcloneView

> Hubungkan Terabox ke RcloneView untuk pengalaman manajemen cloud lengkap — jelajahi, sinkronkan, cadangkan, dan transfer file Anda tanpa menyentuh command line.

Terabox menawarkan kuota penyimpanan cloud gratis yang besar, menjadikannya pilihan populer untuk menyimpan arsip video, file proyek, dan pencadangan pribadi. Namun mengelola penyimpanan tersebut secara efisien — terutama saat Anda perlu memindahkan file ke penyedia lain atau menjadwalkan pencadangan rutin — memerlukan alat yang tepat. RcloneView melakukan mount DAN sinkronisasi 90+ penyedia dari satu jendela, di Windows, macOS, dan Linux, sehingga Terabox menyatu secara alami ke dalam alur kerja multi-cloud yang sudah Anda miliki.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Terabox ke RcloneView

Menambahkan Terabox sebagai remote hanya butuh waktu semenit. Buka RcloneView dan navigasikan ke tab **Remote**, lalu klik **New Remote**. Gulir daftar penyedia dan pilih Terabox, masukkan kredensial akun Anda saat diminta, lalu simpan. RcloneView menyimpan koneksi tersebut dalam konfigurasi rclone bawaannya, sehingga Anda tidak perlu mengulangi pengaturan ini.

Setelah terhubung, Terabox akan muncul sebagai tab di panel Explorer. Anda dapat menjelajahi folder, membuat direktori baru, mengganti nama file, dan memeriksa penggunaan penyimpanan — semuanya dari antarmuka dua panel yang sama yang Anda gunakan untuk setiap penyedia lain. Bilah jalur breadcrumb memudahkan navigasi hierarki folder yang dalam tanpa kehilangan jejak posisi Anda.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Terabox as a new remote in RcloneView" class="img-large img-center" />

## Sinkronisasi dan Pencadangan File dari Terabox

Wizard sinkronisasi empat langkah milik RcloneView memungkinkan Anda mengonfigurasi pekerjaan pencadangan Terabox dalam hitungan menit. Jadikan Terabox sebagai sumber, pilih tujuan apa pun — folder lokal, drive eksternal, atau penyedia cloud lain — dan beri nama pekerjaan tersebut. Langkah lanjutan memungkinkan Anda mengatur jumlah transfer bersamaan dan mengaktifkan verifikasi checksum, memastikan setiap file yang sampai di tujuan cocok byte-demi-byte dengan aslinya.

Sebelum menjalankan sinkronisasi penuh, jalankan **Dry Run** dari Job Manager untuk melihat pratinjau file mana yang akan disalin atau dihapus. Ini sangat berguna saat bekerja dengan arsip Terabox berukuran besar, di mana penghapusan yang tidak disengaja bisa merugikan. Setelah Anda puas dengan pratinjau tersebut, jalankan pekerjaan tersebut dan pantau progres secara real-time di tab Transferring di bagian bawah layar.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job from Terabox in RcloneView" class="img-large img-center" />

## Transfer File Terabox ke Cloud Lain

Kasus penggunaan yang umum adalah memigrasikan konten keluar dari Terabox ke penyedia dengan lokalitas data regional yang lebih ketat atau biaya egress yang lebih rendah. Dengan kedua remote terbuka berdampingan di panel Explorer, Anda dapat menyeret file langsung dari Terabox ke Amazon S3, Google Drive, Backblaze B2, atau penyedia lain yang didukung RcloneView. Drag-and-drop antar remote yang berbeda selalu menyalin, bukan memindahkan, sehingga file asli Terabox Anda tetap utuh hingga Anda memutuskan untuk membersihkannya.

Untuk migrasi yang lebih besar, buat pekerjaan Copy atau Sync khusus. RcloneView mendukung sinkronisasi 1:N pada lisensi FREE, artinya Anda dapat mendorong satu folder Terabox ke beberapa tujuan dalam satu kali menjalankan pekerjaan — berguna saat Anda menginginkan pencadangan utama sekaligus salinan arsip dingin.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Terabox to another provider" class="img-large img-center" />

## Meninjau Riwayat Pekerjaan dan Memantau Transfer

Setelah setiap eksekusi, RcloneView mencatat hasilnya di **Job History**. Anda dapat memfilter berdasarkan rentang tanggal, memeriksa apakah suatu pekerjaan selesai, error, atau dibatalkan, serta meninjau total byte yang ditransfer dan kecepatan transfer. Bagi siapa pun yang mengelola pustaka Terabox besar di berbagai alur kerja, jejak audit ini sangat berharga untuk mendeteksi anomali — lonjakan mendadak pada jumlah error sering kali menandakan batas kuota atau masalah jaringan yang perlu diselidiki.

Pemegang lisensi PLUS dapat melampirkan jadwal bergaya cron ke pekerjaan Terabox mana pun dan mengaktifkan notifikasi saat selesai, sehingga pencadangan benar-benar berjalan tanpa perlu campur tangan manual.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history view showing Terabox sync results in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka tab **Remote** dan klik **New Remote**, lalu pilih Terabox dan masukkan kredensial Anda.
3. Jelajahi folder Terabox Anda di panel Explorer dan identifikasi konten mana yang ingin Anda cadangkan atau transfer.
4. Buat pekerjaan Sync atau Copy menggunakan wizard empat langkah, jalankan Dry Run untuk memverifikasi rencana, lalu eksekusi.

Pencadangan Terabox yang dikonfigurasi dengan baik hanya membutuhkan waktu beberapa menit untuk disiapkan dan memberi Anda keyakinan penuh bahwa konten yang tersimpan direplikasi dengan aman ke mana pun Anda butuhkan.

---

**Panduan Terkait:**

- [Sinkronkan Penyimpanan Gratis Terabox ke Cloud Lain dengan RcloneView](https://rcloneview.com/support/blog/sync-terabox-free-storage-other-clouds-rcloneview)
- [Kelola Penyimpanan Cloud MEGA — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-mega-cloud-sync-backup-rcloneview)
- [Migrasi Cloud-ke-Cloud dengan RcloneView](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)

<CloudSupportGrid />
