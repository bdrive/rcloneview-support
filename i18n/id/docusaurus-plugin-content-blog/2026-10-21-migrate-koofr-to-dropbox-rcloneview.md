---
slug: migrate-koofr-to-dropbox-rcloneview
title: "Migrasi Koofr ke Dropbox — Transfer File dengan RcloneView"
authors:
  - robin
description: "Migrasi Koofr ke Dropbox dengan RcloneView: hubungkan kedua remote, pratinjau dengan Dry Run, salin dari cloud ke cloud, dan verifikasi hasilnya dengan Folder Compare."
keywords:
  - migrasi Koofr ke Dropbox
  - transfer Koofr ke Dropbox
  - RcloneView Koofr
  - RcloneView Dropbox
  - migrasi cloud ke cloud
  - pencadangan Koofr
  - sinkronisasi Dropbox
  - rclone GUI
  - memindahkan file antar cloud
  - alat migrasi cloud
tags:
  - RcloneView
  - koofr
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Koofr ke Dropbox — Transfer File dengan RcloneView

> Pindahkan pustaka Koofr ke Dropbox lewat transfer cloud ke cloud, dengan pratinjau sebelum menyalin dan perbandingan sesudahnya.

Berpindah dari Koofr ke Dropbox biasanya karena folder tim bersama, alur kerja klien, atau aplikasi yang hanya terintegrasi dengan Dropbox. Mengunduh semuanya ke laptop lalu mengunggah ulang itu lambat dan rentan gagal. RcloneView, GUI yang dibangun di atas rclone, menghubungkan kedua layanan sebagai remote dan mentransfer di antara keduanya dalam satu job, dan Anda dapat memantau progresnya sepanjang waktu.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hubungkan Koofr dan Dropbox sebagai Remote

Buka tab Remote dan klik **New Remote**. Dropbox menggunakan OAuth berbasis browser: RcloneView membuka halaman login, Anda menyetujui akses, dan remote terhubung tanpa kunci API. Jika target Anda adalah akun Dropbox for Business, aktifkan pengaturan `dropbox_business` saat membuat remote. Tambahkan Koofr dengan cara yang sama dari daftar penyedia dan masuk dengan akun yang akan Anda tinggalkan.

RcloneView mengelola 90+ layanan penyimpanan cloud dari satu jendela di Windows, macOS, dan Linux, sehingga kedua remote tampil berdampingan di explorer yang sama.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote Koofr dan Dropbox di RcloneView" class="img-large img-center" />

## Rencanakan Tata Letak Folder Sebelum Menyalin

Buka Koofr di panel explorer kiri dan Dropbox di panel kanan. Tentukan apakah Anda memindahkan semuanya atau hanya folder tertentu. Studio fotografi dengan folder klien bertahun-tahun bisa menyalin satu tahun sekali, sedangkan tim kecil mungkin memindahkan seluruh pohon folder sekaligus. Opsi **Get Size** di menu klik kanan menunjukkan besar data sebuah folder, yang membantu memperkirakan lama job.

Gunakan langkah filter di wizard job untuk melewati hal-hal tak perlu seperti folder `.git/` atau file di atas ukuran maksimum.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Membandingkan folder Koofr dan Dropbox di RcloneView" class="img-large img-center" />

## Jalankan Dry Run, Lalu Transfer

Buat job dari tab Home: Koofr sebagai sumber, Dropbox sebagai tujuan, dan pilih Copy agar file asli tetap utuh sampai Anda yakin. Jalankan **Dry Run** terlebih dahulu. Dry Run menampilkan file mana yang akan disalin, sehingga Anda bisa menemukan folder tujuan yang salah sebelum ada data yang dipindahkan. Setelah itu jalankan job; transfer cloud ke cloud mengalir di antara kedua layanan, dan tab Transferring menampilkan kecepatan, jumlah file, dan progres.

Dropbox dapat memperlambat permintaan saat menerima banyak panggilan sekaligus. Jika Anda melihat pesan pembatasan laju, kurangi jumlah transfer file di Advanced Settings dan biarkan job mencoba ulang.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfer cloud ke cloud dari Koofr ke Dropbox" class="img-large img-center" />

## Verifikasi dan Simpan Riwayat Job

Setelah penyalinan selesai, buka **Compare** pada kedua folder. File Left-only menunjukkan apa yang belum sampai; perbedaan ukuran ditandai secara terpisah. Tutup celah dengan menyalin dari tampilan perbandingan, lalu periksa **Job History** untuk melihat status, durasi, dan jumlah file di setiap eksekusi.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Riwayat job untuk migrasi Koofr ke Dropbox" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan Koofr dan Dropbox dari **Remote > New Remote**.
3. Buat job Copy dari Koofr ke Dropbox dan jalankan Dry Run.
4. Jalankan job, lalu verifikasi dengan Folder Compare sebelum menghapus salinan Koofr.

Migrasi yang bisa dipratinjau dan diverifikasi adalah migrasi yang bisa Anda selesaikan dengan percaya diri.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Koofr — Sinkronisasi dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Kelola Penyimpanan Dropbox — Sinkronisasi dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Dry Run — Pratinjau Sinkronisasi Cloud di RcloneView](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)

<CloudSupportGrid />
