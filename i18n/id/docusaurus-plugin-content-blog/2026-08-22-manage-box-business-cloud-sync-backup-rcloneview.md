---
slug: manage-box-business-cloud-sync-backup-rcloneview
title: "Mengelola Penyimpanan Box for Business — Sinkronisasi dan Pencadangan File dengan RcloneView"
authors:
  - robin
description: "Hubungkan Box for Business ke RcloneView untuk penjelajahan file lintas platform, sinkronisasi cloud-ke-cloud, dan pencadangan terjadwal akun Box enterprise."
keywords:
  - box for business
  - penyimpanan enterprise box
  - rcloneview box business
  - sinkronisasi box business
  - box_sub_type enterprise
  - gui penyimpanan cloud enterprise
  - pencadangan akun tim box
  - manajemen penyimpanan cloud bisnis
  - migrasi box business
  - manajemen file multi-cloud
tags:
  - RcloneView
  - box
  - business
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mengelola Penyimpanan Box for Business — Sinkronisasi dan Pencadangan File dengan RcloneView

> Hubungkan akun enterprise Box for Business ke RcloneView, lalu jelajahi, sinkronkan, dan cadangkan folder perusahaan bersama dengan setiap cloud lain yang Anda kelola.

Akun Box for Business mengatur konten berdasarkan folder yang dikelola secara enterprise, bukan satu akun pribadi tunggal, sehingga koneksi Box standar memerlukan satu pengaturan tambahan agar berfungsi dengan benar. RcloneView menangani hal ini secara langsung, memberi admin IT satu jendela untuk menjelajah, mentransfer, dan melindungi konten Box enterprise tanpa harus berpindah antara aplikasi web Box dan klien sinkronisasi terpisah.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menyiapkan Remote Box for Business

Menambahkan akun Box for Business dimulai dengan cara yang sama seperti koneksi Box pribadi: klik New Remote, pilih Box, dan selesaikan login OAuth di browser Anda. Perbedaannya hanya satu pengaturan tambahan — `box_sub_type = enterprise` — yang mengarahkan remote ke struktur akun enterprise, bukan ke ruang milik satu pengguna. Setelah pengaturan tersebut diterapkan, folder akun enterprise akan dimuat di panel Explorer persis seperti remote lainnya.

Berbeda dari alat yang hanya bisa mount, RcloneView juga dapat melakukan sinkronisasi dan membandingkan folder — pada lisensi FREE — sehingga admin yang mengelola Box bersama cloud departemen lain tidak memerlukan aplikasi terpisah hanya untuk memindahkan file di antara keduanya.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Box for Business remote in RcloneView" class="img-large img-center" />

## Menjelajahi Folder Enterprise

Setelah terhubung, panel File Explorer menampilkan struktur folder enterprise dengan kolom Name, Type, Modified date, dan Size yang sama seperti yang digunakan pada setiap remote, ditambah pohon folder yang dapat dilipat untuk menavigasi hierarki departemen yang dalam. Opsi Copy Full Path pada bilah jalur breadcrumb menghasilkan jalur dalam format `remote:path`, yang berguna saat menyerahkan lokasi ke Terminal rclone bawaan untuk pengecekan penyimpanan cepat dengan `rclone about`.

Pemilihan berganda dengan Ctrl+Click dan Shift+Click memungkinkan Anda mengambil folder proyek tertentu dari ruang enterprise yang besar tanpa harus menelusuri seluruh akun.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browsing Box for Business enterprise folders in RcloneView Explorer" class="img-large img-center" />

## Mencadangkan Data Enterprise ke Cloud Kedua

Menyimpan file enterprise hanya pada satu penyedia adalah risiko yang enggan ditanggung banyak tim IT, sehingga mencerminkan konten Box for Business ke Amazon S3, Backblaze B2, atau cloud lain sebagai salinan sekunder adalah pola yang umum. Wizard Sync 4 langkah milik RcloneView mencakup hal ini: pilih remote Box for Business sebagai sumber, pilih remote tujuan, dan atur arah sinkronisasi menjadi satu arah agar tujuan pencadangan mencerminkan sumber tanpa menyentuh apa pun di hulu. Pengaturan Filtering dapat mengecualikan media berukuran besar atau membatasi pekerjaan hanya pada file di bawah usia tertentu, sehingga pencadangan tetap fokus pada hal yang benar-benar penting.

Menjalankan Dry Run sebelum sinkronisasi penuh pertama menampilkan daftar pasti file yang akan disalin dan dihapus, yang layak dilakukan sebelum memindahkan data senilai satu akun enterprise penuh.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Box for Business backup job in RcloneView" class="img-large img-center" />

## Mengotomatiskan Pencadangan Berulang

Pengguna lisensi PLUS dapat melampirkan jadwal bergaya crontab ke pekerjaan pencadangan Box for Business sehingga berjalan setiap malam atau setiap minggu tanpa campur tangan manual. Job History kemudian mencatat jenis eksekusi, durasi, status, dan total ukuran yang ditransfer untuk setiap pengoperasian, memberi admin catatan yang dapat diperiksa tanpa harus menelusuri konsol admin Box sendiri.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan remote Box baru dan atur `box_sub_type = enterprise` selama konfigurasi.
3. Jelajahi folder enterprise di panel Explorer dan konfirmasi akses ke departemen yang Anda butuhkan.
4. Buat pekerjaan Sync untuk mencerminkan data enterprise ke cloud kedua, dan jadwalkan jika Anda menggunakan lisensi PLUS.

Remote Box for Business yang dikonfigurasi dengan benar menjadikan RcloneView sebagai jaring pengaman praktis untuk data perusahaan yang jika tidak, hanya akan tersimpan di satu tempat.

---

**Panduan Terkait:**

- [Mengelola Penyimpanan Box — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Migrasi Box ke OneDrive — Transfer File dengan RcloneView](https://rcloneview.com/support/blog/migrate-box-to-onedrive-rcloneview)
- [Mount Penyimpanan Box sebagai Drive Jaringan dengan RcloneView](https://rcloneview.com/support/blog/mount-box-storage-network-drive-rcloneview)

<CloudSupportGrid />
