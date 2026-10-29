---
slug: cloud-storage-funeral-homes-rcloneview
title: "Penyimpanan Cloud untuk Rumah Duka — Lindungi Catatan Keluarga dengan RcloneView"
authors:
  - alex
description: "Rumah duka dapat mencadangkan catatan layanan, kontrak, foto, dan video kenangan ke beberapa cloud dengan RcloneView: sinkronisasi terjadwal, enkripsi, dan Folder Compare."
keywords:
  - penyimpanan cloud untuk rumah duka
  - pencadangan file rumah duka
  - penyimpanan dokumen rumah duka
  - pencadangan video kenangan
  - pencadangan cloud terenkripsi
  - pencadangan cloud usaha kecil
  - rcloneview rumah duka
  - pencadangan multi-cloud
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Penyimpanan Cloud untuk Rumah Duka — Lindungi Catatan Keluarga dengan RcloneView

> Simpan kontrak layanan, foto kenangan, dan video peringatan dengan aman di lebih dari satu tempat.

Rumah duka menyimpan catatan yang diharapkan keluarga tetap ada selama puluhan tahun: kontrak yang telah ditandatangani, berita duka, berkas prapenyelenggaraan, tayangan slide foto, dan rekaman upacara yang bisa mencapai beberapa gigabyte. Data ini sering hanya berada di satu PC kantor atau satu akun cloud. RcloneView memberi staf kecil cara visual untuk menyalin data tersebut ke lokasi kedua dan ketiga tanpa skrip.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Satu Salinan Tidak Cukup

Bayangkan sebuah rumah duka dengan folder kasus selama 15 tahun di drive bersama, ditambah akun Dropbox untuk foto kiriman keluarga. Kerusakan disk, penghapusan tidak sengaja, atau login yang diretas akan memengaruhi semua kasus sekaligus. Pola yang baik adalah satu salinan utama, satu salinan cloud di lokasi lain, dan satu cloud kedua atau drive lokal yang independen.

RcloneView terhubung ke 90+ penyedia, termasuk Google Drive, OneDrive, Dropbox, Backblaze B2, Wasabi, serta disk lokal atau eksternal. Memasangkan drive bisnis dengan bucket penyimpanan objek menjaga cadangan tetap berada di akun dan penyedia yang berbeda dari aslinya.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote cloud dan lokal untuk pencadangan rumah duka di RcloneView" class="img-large img-center" />

## Buat Job Pencadangan yang Dapat Diulang

Buat job **Sync** atau **Copy** dari wizard 4 langkah: sumbernya adalah folder catatan kasus, tujuannya adalah remote pencadangan. Gunakan Copy jika Anda tidak ingin penghapusan di sumber ikut menyebar. Jalankan **Dry Run** terlebih dahulu untuk melihat apa yang akan disalin atau dihapus.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Menyalin folder kasus ke cloud pencadangan di RcloneView" class="img-large img-center" />

Dengan lisensi PLUS, langkah terakhir wizard menambahkan penjadwalan bergaya crontab, sehingga job malam hari dapat berjalan setelah kantor tutup. Job History mencatat status, ukuran, dan jumlah file dari setiap proses, yang berguna sebagai bukti bahwa pencadangan berjalan.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Menjadwalkan job pencadangan malam hari di RcloneView" class="img-large img-center" />

## Lindungi Catatan Sensitif

Detail keluarga dan keuangan layak dienkripsi. Buat remote virtual **Crypt** di atas tujuan pencadangan, dan RcloneView mengenkripsi nama file, nama folder, serta isi sebelum meninggalkan komputer. Simpan kata sandi Crypt di tempat terpisah dari komputer kantor; tanpa kata sandi tersebut, data tidak dapat didekripsi.

Gunakan **Folder Compare** secara berkala untuk memastikan cadangan sama dengan sumber. File yang hanya ada di sisi kiri menunjukkan apa yang belum disalin, dan file dengan ukuran berbeda menandai unggahan yang tidak lengkap.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare memverifikasi cadangan rumah duka" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan penyimpanan utama dan tujuan pencadangan dengan **New Remote**.
3. Bungkus tujuan dalam remote Crypt untuk file kasus yang sensitif.
4. Buat job Copy, jalankan Dry Run, lalu jadwalkan (PLUS) atau jalankan setelah setiap upacara.

Catatan yang bertahan lebih lama daripada pembuatnya layak mendapatkan rencana pencadangan yang bertahan lebih lama daripada akun mana pun.

---

**Panduan Terkait:**

- [Cloud Storage for Law Firms — Secure Client Files with RcloneView](https://rcloneview.com/support/blog/cloud-storage-law-firms-rcloneview)
- [Cloud Storage for Tax Preparers](https://rcloneview.com/support/blog/cloud-storage-tax-preparers-rcloneview)
- [Encrypt Cloud Backups with a Crypt Remote](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
