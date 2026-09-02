---
slug: migrate-azure-files-to-onedrive-rcloneview
title: "Migrasi Azure Files ke OneDrive — Transfer File dengan RcloneView"
authors:
  - casey
description: "Migrasikan Azure File Storage ke OneDrive dengan RcloneView. Pindahkan file bisnis antar cloud dengan drag-and-drop, tugas sinkronisasi, dan pratinjau dry-run."
keywords:
  - migrasi azure files ke onedrive
  - migrasi azure file storage
  - migrasi cloud onedrive
  - transfer azure ke onedrive
  - migrasi cloud ke cloud
  - RcloneView azure files
  - RcloneView onedrive
  - pindahkan azure file storage ke onedrive
  - transfer file lintas cloud
  - alat migrasi cloud bisnis
tags:
  - RcloneView
  - azure-files
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Azure Files ke OneDrive — Transfer File dengan RcloneView

> Pindahkan seluruh share Azure File Storage ke OneDrive tanpa harus menyentuh command line atau berpindah-pindah antara dua konsol yang terpisah.

Tim yang menyiapkan Azure File Storage untuk suatu proyek atau share departemen sering kali berkembang melampaui kebutuhan tersebut setelah bagian bisnis lainnya menstandarkan Microsoft 365 dan OneDrive untuk kolaborasi sehari-hari. Mengunggah ulang semuanya secara manual melalui dua portal web yang berbeda memakan waktu dan rawan kesalahan. RcloneView membuka kedua remote berdampingan dalam satu jendela dan memungkinkan Anda memindahkan file langsung di antara keduanya, sehingga migrasi berjalan sebagai satu tugas yang dapat dilacak, bukan rangkaian salin-tempel manual. Berbeda dari alat yang hanya bisa mount, RcloneView juga menyinkronkan dan membandingkan folder — sudah tersedia pada lisensi FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hubungkan Azure Files dan OneDrive Berdampingan

Menambahkan Azure File Storage memerlukan Storage Account Name, Shared Key, dan Share Name dari halaman Access Keys di Azure Portal Anda — wizard penyiapan remote RcloneView meminta persis ketiga kolom ini. Sebaliknya, OneDrive menggunakan OAuth berbasis browser: klik New Remote, pilih OneDrive, lalu masuk melalui jendela pop-up yang dibuka RcloneView untuk Anda. Tidak ada kunci API yang perlu disalin atau ditempel.

Setelah kedua remote dikonfigurasi, buka masing-masing di panel Explorer-nya sendiri menggunakan tata letak dua panel (atau empat panel). Anda akan melihat struktur folder share Azure di satu sisi dan struktur OneDrive Anda di sisi lain, dengan jumlah dan ukuran file ditampilkan di footer masing-masing panel.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan Azure File Storage dan OneDrive sebagai remote di RcloneView" class="img-large img-center" />

## Transfer atau Sinkronkan File Antara Kedua Remote

Untuk migrasi satu kali, pilih folder atau file di panel Azure Files dan seret ke panel OneDrive — menyeret antara dua remote yang berbeda akan melakukan penyalinan, sehingga sumber Azure tetap utuh sampai Anda siap membersihkannya. Untuk share yang lebih besar, gunakan wizard Sync sebagai gantinya: pilih Azure Files sebagai sumber dan OneDrive sebagai tujuan, lalu jalankan Dry Run terlebih dahulu untuk melihat pratinjau file mana saja yang akan disalin sebelum ada yang benar-benar berpindah.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Mentransfer file dari Azure File Storage ke OneDrive" class="img-large img-center" />

Mengaktifkan perbandingan checksum pada langkah Advanced Settings di sinkronisasi berarti RcloneView memverifikasi konten file berdasarkan hash dan ukuran, bukan hanya nama file, yang penting saat migrasi harus dapat dibuktikan telah selesai sepenuhnya.

## Otomatiskan Migrasi dan Pantau Kemajuan

Share berukuran besar jarang selesai dalam satu kali proses. Simpan transfer sebagai tugas di Job Manager sehingga dapat dijalankan ulang untuk menangkap file yang ditambahkan ke Azure Files setelah proses pertama, dan periksa tab Transferring di Info View bagian bawah untuk melihat kemajuan, kecepatan, dan jumlah file secara langsung saat berjalan.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Menjadwalkan tugas sinkronisasi berulang dari Azure Files ke OneDrive di RcloneView" class="img-large img-center" />

Job History mencatat setiap proses — waktu mulai, durasi, status, dan total ukuran yang ditransfer — sehingga Anda memiliki catatan untuk memastikan migrasi telah lengkap sebelum menonaktifkan share Azure.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan remote Azure File Storage Anda dengan Account Name, Shared Key, dan Share Name.
3. Tambahkan OneDrive melalui alur masuk berbasis browser.
4. Jalankan Dry Run, lalu jalankan tugas sinkronisasi dan konfirmasi hasilnya di Job History.

Migrasi yang bersih dan dapat diverifikasi selalu lebih baik daripada penyalinan manual yang terburu-buru.

---

**Panduan Terkait:**

- [Kelola Azure Files Storage — Sinkronkan dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-azure-files-cloud-sync-rcloneview)
- [Kelola Penyimpanan OneDrive — Sinkronkan dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Perbaiki Kesalahan Koneksi Azure Files dengan RcloneView](https://rcloneview.com/support/blog/fix-azure-files-connection-errors-rcloneview)

<CloudSupportGrid />
