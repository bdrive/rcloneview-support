---
slug: sync-box-to-wasabi-rcloneview
title: "Sinkronisasi Box ke Wasabi — Pencadangan Cloud dengan RcloneView"
authors:
  - tayson
description: "Sinkronkan Box ke Wasabi dengan RcloneView: hubungkan kedua remote, pratinjau dengan Dry Run, jalankan pencadangan satu arah, dan verifikasi hasilnya dengan Folder Compare."
keywords:
  - sinkronisasi box ke wasabi
  - pencadangan box ke wasabi
  - transfer box wasabi
  - RcloneView box
  - RcloneView wasabi
  - sinkronisasi cloud ke cloud
  - pencadangan box ke object storage
  - pencadangan S3 wasabi
tags:
  - RcloneView
  - box
  - wasabi
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sinkronisasi Box ke Wasabi — Pencadangan Cloud dengan RcloneView

> Simpan salinan independen konten Box Anda di penyimpanan objek Wasabi dengan sinkronisasi satu arah yang dapat diulang.

Box adalah tempat yang nyaman untuk berkolaborasi, tetapi salinan kedua di luar platform melindungi Anda dari penghapusan tidak sengaja, penguncian akun, dan celah retensi. Wasabi adalah penyimpanan objek yang kompatibel dengan S3, sehingga menjadi target yang wajar untuk salinan tersebut. RcloneView menghubungkan kedua layanan dalam satu jendela, dan sinkronisasi dasar serta Dry Run tersedia dengan lisensi FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hubungkan Box dan Wasabi sebagai Remote

Box menggunakan OAuth berbasis browser. Di RcloneView, tambahkan remote baru, pilih Box, dan masuk saat browser terbuka. Jika organisasi Anda menggunakan Box for Business, remote memerlukan `box_sub_type = enterprise`. Wasabi ditambahkan sebagai remote yang kompatibel dengan S3: masukkan Access Key, Secret Key, dan endpoint untuk region Wasabi Anda.

Setelah kedua remote muncul di Remote Manager, buka keduanya berdampingan di dua panel Explorer. Anda kemudian dapat menelusuri pohon folder Box di sebelah kiri dan bucket Wasabi di sebelah kanan sebelum mengonfigurasi apa pun.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote Box dan Wasabi di RcloneView" class="img-large img-center" />

## Pratinjau dengan Dry Run Sebelum Sinkronisasi

Bayangkan sebuah agensi desain dengan 800 GB folder proyek klien di Box. Sebelum sinkronisasi pertama, jalankan Dry Run. Dry Run menampilkan file yang akan disalin dan file yang akan dihapus, tanpa mengubah apa pun. Ini membantu Anda menghindari mengarahkan sinkronisasi ke path bucket yang salah.

Untuk pencadangan, sinkronisasi satu arah ("Modifying destination only") adalah arah yang tepat: Box tetap menjadi sumber acuan dan Wasabi mencerminkannya. Ingatlah bahwa sinkronisasi juga menghapus file tujuan yang sudah tidak ada di sumber, jadi gunakan bucket atau prefix khusus untuk mirror.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transfer cloud ke cloud antara Box dan Wasabi" class="img-large img-center" />

## Konfigurasikan Job Sinkronisasi

Wizard Job memandu melalui empat langkah: storage, advanced settings, filter, dan penjadwalan. Tingkatkan jumlah transfer file jika Anda memiliki banyak dokumen kecil, dan aktifkan perbandingan checksum bila Anda menginginkan verifikasi berbasis hash. Filter bawaan mencakup opsi Box Docs, berguna karena Box Notes dan item khusus online lainnya tidak berperilaku seperti file biasa.

Beri nama job dengan huruf, angka, tanda hubung, atau garis bawah, simpan, lalu jalankan. Progres, kecepatan, dan jumlah file muncul di tab Transferring.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Menjalankan job sinkronisasi Box ke Wasabi yang tersimpan" class="img-large img-center" />

## Jadwalkan dan Verifikasi

Sinkronisasi berbasis jadwal adalah fitur PLUS, dengan field bergaya crontab dan simulator yang menampilkan pratinjau waktu eksekusi berikutnya. Eksekusi setiap malam menjaga salinan Wasabi tetap mutakhir. Setelah setiap eksekusi, buka Riwayat Job (Job History) untuk memeriksa status, ukuran, dan jumlah file, atau gunakan Folder Compare untuk memastikan kedua sisi sama.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Menjadwalkan job sinkronisasi berulang di RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan remote Box melalui OAuth dan remote Wasabi dengan key dan endpoint-nya.
3. Buat job sinkronisasi dari Box ke bucket Wasabi khusus, dan jalankan Dry Run terlebih dahulu.
4. Jalankan job, lalu verifikasi dengan Folder Compare dan Riwayat Job.

Mirror yang sudah diuji dan terjadwal mengubah Box dari satu titik kegagalan tunggal menjadi separuh dari pencadangan yang sesungguhnya.

---

**Panduan Terkait:**

- [Migrasi Box ke Wasabi](https://rcloneview.com/support/blog/migrate-box-to-wasabi-rcloneview)
- [Sinkronisasi Google Drive ke Box](https://rcloneview.com/support/blog/sync-google-drive-to-box-rcloneview)
- [Memperbaiki Error Sinkronisasi Wasabi](https://rcloneview.com/support/blog/fix-wasabi-sync-errors-rcloneview)

<CloudSupportGrid />
