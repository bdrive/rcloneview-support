---
slug: migrate-dropbox-to-jottacloud-rcloneview
title: "Migrasi Dropbox ke Jottacloud — Transfer File dengan RcloneView"
authors:
  - jay
description: "Pindahkan file dari Dropbox ke Jottacloud dengan RcloneView. Hubungkan kedua cloud, pratinjau dengan Dry Run, salin antar-cloud, dan verifikasi hasilnya dengan Folder Compare."
keywords:
  - migrasi dropbox ke jottacloud
  - transfer dropbox ke jottacloud
  - pindahkan file dari dropbox ke jottacloud
  - alat migrasi jottacloud
  - alternatif dropbox eropa
  - migrasi cloud ke cloud gui
  - rcloneview jottacloud
  - rclone dropbox jottacloud
  - migrasi penyimpanan cloud eropa
tags:
  - RcloneView
  - dropbox
  - jottacloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Dropbox ke Jottacloud — Transfer File dengan RcloneView

> Pindahkan folder Dropbox Anda ke Jottacloud langsung antar-cloud, lalu periksa setiap file sebelum menutup akun lama.

Tim dan rumah tangga yang pindah ke penyedia asal Norwegia sering menghadapi kendala yang sama: mengunduh data Dropbox bertahun-tahun ke laptop hanya untuk mengunggahnya lagi itu lambat dan berisiko. RcloneView menghubungkan kedua akun dalam satu jendela dan menjalankan transfer melalui rclone, sehingga file berpindah dari Dropbox ke Jottacloud tanpa Anda harus memindahkannya secara manual lewat folder lokal.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hubungkan Dropbox dan Jottacloud sebagai Remote

Buka tab **Remote** dan klik **New Remote**. Dropbox menggunakan OAuth: browser Anda terbuka, Anda masuk, lalu RcloneView menyimpan koneksinya. Jika file Anda berada di akun tim Dropbox, atur opsi `dropbox_business` agar rclone terhubung ke namespace bisnis.

Tambahkan Jottacloud dengan cara yang sama: pilih Jottacloud dari daftar penyedia dan ikuti petunjuk koneksi. Setelah kedua remote muncul, buka keduanya berdampingan di dua panel Explorer agar Anda dapat melihat sumber dan tujuan sekaligus.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote Dropbox dan Jottacloud di RcloneView" class="img-large img-center" />

## Rencanakan Struktur Folder Sebelum Menyalin

Sebuah agensi desain dengan 600 GB yang tersebar di `Clients`, `Archive`, dan `Shared Assets` sebaiknya menentukan dulu ke mana setiap folder tingkat atas akan ditempatkan. Buat folder tujuan di Jottacloud dari menu klik kanan, lalu gunakan **Get Size** pada setiap folder Dropbox untuk melihat berapa banyak data yang akan dipindahkan di tiap langkah.

Untuk pekerjaan cepat sekali jalan, seret folder dari panel Dropbox ke panel Jottacloud. Menyeret antar-remote yang berbeda selalu menyalin, jadi tidak ada yang dihapus dari Dropbox. Untuk pekerjaan yang lebih besar, job yang disimpan lebih baik karena Anda dapat menjalankannya ulang dan melihat riwayatnya.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfer antar-cloud dari Dropbox ke Jottacloud di RcloneView" class="img-large img-center" />

## Buat Job Migrasi yang Dapat Diulang

Klik **Sync** di tab Home lalu pilih Dropbox sebagai sumber dan Jottacloud sebagai tujuan. Biarkan arahnya satu arah ("Modifying destination only"). Di Advanced Settings, pertahankan pengaturan multi-thread default dan biarkan perbandingan checksum nonaktif (Dropbox dan Jottacloud menggunakan jenis hash yang berbeda, sehingga rclone membandingkan file berdasarkan ukuran dan waktu modifikasi), lalu gunakan Filtering untuk melewati apa pun yang tidak ingin Anda bawa.

Jalankan **Dry Run** terlebih dahulu. Fitur ini menampilkan setiap file yang akan disalin atau dihapus di tujuan, sehingga pilihan folder yang salah dapat ketahuan sebelum membuang waktu berjam-jam. Lalu mulai proses sebenarnya dan pantau kecepatan serta jumlah file di tab **Transferring**.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Menjalankan job migrasi Dropbox ke Jottacloud di RcloneView" class="img-large img-center" />

Jika orang-orang tetap bekerja di Dropbox selama proses pindah, jalankan job yang sama lagi tepat sebelum peralihan. Hanya file baru atau yang berubah yang ditransfer. Dengan lisensi PLUS, Anda dapat menjadwalkan job agar berjalan setiap malam hingga hari peralihan.

## Verifikasi dengan Folder Compare

Sebelum membatalkan Dropbox, klik **Compare** dan buka kedua folder tingkat atas. Aktifkan filter file yang hanya ada di kiri dan file dengan ukuran berbeda: apa pun yang masih tercantum belum sampai atau tidak cocok. Pilih item tersebut dan gunakan **Copy right** untuk melengkapi kekurangannya. Saat tampilan hanya menunjukkan file yang identik, migrasi selesai. **Job History** menyimpan catatan ukuran, kecepatan, dan status setiap proses.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Membandingkan folder Dropbox dan Jottacloud setelah migrasi di RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan Dropbox (OAuth) dan Jottacloud sebagai remote dari **Remote > New Remote**.
3. Buat job Sync satu arah dari Dropbox ke Jottacloud dan pratinjau dengan **Dry Run**.
4. Jalankan job, lalu konfirmasi hasilnya dengan **Compare** sebelum menonaktifkan akun Dropbox.

RcloneView melakukan mount dan sinkronisasi untuk 90+ penyedia dari satu jendela di Windows, macOS, dan Linux, sehingga setelah pindah Anda dapat melakukan mount Jottacloud sebagai drive lokal dengan aplikasi yang sama.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Jottacloud dengan RcloneView: Sinkronisasi, Pencadangan, dan Atur File](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [Migrasi Dropbox ke Koofr — Transfer File dengan RcloneView](https://rcloneview.com/support/blog/migrate-dropbox-to-koofr-rcloneview)
- [Atasi Error Sinkronisasi Jottacloud — Pecahkan Masalah dengan RcloneView](https://rcloneview.com/support/blog/fix-jottacloud-sync-errors-rcloneview)

<CloudSupportGrid />
