---
slug: migrate-koofr-to-mega-rcloneview
title: "Migrasi Koofr ke Mega — Transfer File dengan RcloneView"
authors:
  - steve
description: "Migrasi Koofr ke Mega dengan RcloneView: hubungkan kedua remote, pratinjau dengan Dry Run, salin file antar cloud, dan verifikasi dengan Folder Compare."
keywords:
  - migrasi Koofr ke Mega
  - transfer Koofr ke Mega
  - pindahkan file Koofr ke Mega
  - migrasi Koofr Mega
  - RcloneView antar cloud
  - sinkronisasi Koofr ke Mega
  - rclone GUI
  - alat migrasi cloud
  - transfer file Mega
  - verifikasi transfer cloud
tags:
  - RcloneView
  - koofr
  - mega
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Koofr ke Mega — Transfer File dengan RcloneView

> Salin pustaka Koofr Anda ke Mega langsung antar kedua cloud, dengan pratinjau terlebih dahulu dan pemeriksaan verifikasi di akhir.

Koofr dan Mega memiliki pendekatan yang berbeda terhadap penyimpanan, dan berpindah di antara keduanya secara manual berarti mengunduh semuanya lalu mengunggahnya kembali. Bagi fotografer dengan folder proyek bertahun-tahun atau kantor kecil dengan dokumen bersama, itu berarti berjam-jam mengawasi prosesnya. RcloneView menghubungkan kedua layanan dalam satu jendela dan mentransfer langsung di antara keduanya, dengan job yang bisa dipratinjau, diulang, dan ditinjau di riwayat.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Tambahkan Koofr dan Mega sebagai Remote

Buka **Remote > New Remote** dan tambahkan Koofr menggunakan kredensial yang diminta oleh dialog pengaturan. Lalu tambahkan Mega dengan email dan kata sandi Anda. Mega adalah remote dengan input kredensial, bukan OAuth, sehingga tidak ada langkah di browser. Setelah keduanya muncul di Remote Manager, Anda dapat membuka masing-masing di panel Explorer tersendiri.

Koofr dan Mega berada di daftar remote yang sama bersama penyedia lain yang didukung.

<img src="/support/images/en/blog/new-remote.png" alt="Membuat remote Koofr dan Mega di RcloneView" class="img-large img-center" />

## Rencanakan Transfer

Mulailah dengan menelusuri folder Koofr yang ingin Anda pindahkan. Gunakan **Get Size** pada folder terbesar agar Anda tahu apa yang diharapkan, dan catat apa saja yang bisa ditinggalkan. Mega menerapkan batas transfer dan penyimpanan akun yang bergantung pada paket Anda, jadi pastikan tujuan memiliki ruang yang cukup sebelum menjalankan job besar, bukan menemukannya di tengah jalan.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Koofr dan Mega ditelusuri berdampingan di RcloneView" class="img-large img-center" />

## Buat Job Copy dan Jalankan Dry Run

Di wizard Sync, atur Koofr sebagai sumber dan folder Mega sebagai tujuan. Pilih tipe job **Copy** agar file Mega yang sudah ada tidak pernah dihapus. Di Advanced Settings, Anda dapat menyesuaikan jumlah transfer file dan equality checker; turunkan jika salah satu layanan melambat atau mengembalikan error. Gunakan filtering untuk melewati tipe file atau folder yang tidak ingin Anda bawa.

Jalankan **Dry Run** sebelum job sesungguhnya. Fitur ini menunjukkan dengan tepat file mana yang akan disalin, sehingga kesalahan memilih folder sumber terdeteksi tanpa biaya. Ketika pratinjau sudah benar, jalankan job dan pantau kecepatan serta progres di tab Transferring.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Memantau transfer antar cloud di tab Transferring" class="img-large img-center" />

## Verifikasi dan Simpan Catatan

Setelah dijalankan, buka **Compare** dengan Koofr di kiri dan Mega di kanan. Filter file yang hanya ada di kiri atau yang berbeda untuk melihat apa yang belum tiba, lalu salin dengan aksi salin pada tampilan compare. Job History menyimpan status, durasi, ukuran, dan jumlah file dari setiap eksekusi, sehingga Anda memiliki catatan sebelum menghentikan akun lama.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History menampilkan transfer Koofr ke Mega yang telah selesai" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan Koofr dan Mega dari **Remote > New Remote**.
3. Buat job Copy dari Koofr ke Mega dan jalankan Dry Run.
4. Jalankan job dan konfirmasi dengan Folder Compare sebelum menghapus apa pun di Koofr.

Menyalin dulu lalu memverifikasi berarti file Koofr Anda tetap tersedia sampai Mega memiliki semuanya.

---

**Panduan Terkait:**

- [Migrasi Koofr ke Dropbox](https://rcloneview.com/support/blog/migrate-koofr-to-dropbox-rcloneview)
- [Migrasi pCloud ke Mega](https://rcloneview.com/support/blog/migrate-pcloud-to-mega-rcloneview)
- [Perbaiki Error Koneksi dan Kuota Mega](https://rcloneview.com/support/blog/fix-mega-connection-quota-errors-rcloneview)

<CloudSupportGrid />
