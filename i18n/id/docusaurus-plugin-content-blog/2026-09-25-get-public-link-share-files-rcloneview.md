---
slug: get-public-link-share-files-rcloneview
title: "Dapatkan Tautan Publik — Bagikan File Cloud Secara Instan dengan RcloneView"
authors:
  - kai
description: "Pelajari cara membuat tautan publik yang dapat dibagikan untuk file cloud langsung dari file explorer RcloneView, tanpa perlu membuka tab browser."
keywords:
  - dapatkan tautan publik
  - bagikan file cloud
  - tautan yang dapat dibagikan penyimpanan cloud
  - RcloneView tautan publik
  - tautan berbagi google drive
  - tautan berbagi dropbox
  - tautan berbagi box
  - berbagi file cloud
  - tautan publik rclone
  - tautan berbagi onedrive
tags:
  - RcloneView
  - feature
  - file-management
  - cloud-storage
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Dapatkan Tautan Publik — Bagikan File Cloud Secara Instan dengan RcloneView

> Lewati browser: klik kanan file apa pun di RcloneView dan buat tautan publik yang dapat dibagikan dalam hitungan detik.

Berbagi satu file dari cloud biasanya berarti membuka tab browser, masuk ke konsol web penyedia layanan, mencari tombol bagikan, lalu menyalin tautan yang belum tentu memiliki izin sesuai harapan. RcloneView memampatkan seluruh alur kerja tersebut menjadi satu item menu klik kanan. Jika Anda mengelola file di beberapa penyedia dari explorer yang sama, konsistensi ini lebih penting dari yang terdengar — Anda berhenti berpindah-pindah antara lima antarmuka web berbeda hanya untuk mengirim satu file.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cara Kerja Dapatkan Tautan Publik

Perintah **Dapatkan Tautan Publik (Get Public Link)** berada di menu klik kanan yang sama dengan Copy, Cut, Rename, dan Download. Pilih satu atau beberapa file dalam daftar file remote mana pun yang terhubung, klik kanan, lalu pilih Get Public Link. RcloneView meneruskan permintaan tersebut ke backend rclone yang mendasarinya, yang meminta API penyedia layanan untuk membuat tautan dengan izin yang didukung backend tersebut — hanya baca, kedaluwarsa, atau dilindungi kata sandi, tergantung pada apa yang diizinkan penyedia layanan.

Karena ini adalah perilaku khusus penyedia layanan, format tautan dan opsi yang tepat bervariasi. Tautan Dropbox berperilaku berbeda dari tautan Box, dan tidak semua jenis remote mendukung tautan publik sama sekali — remote berbasis protokol seperti server SFTP atau FTP biasa umumnya tidak memiliki konsep "berbagi" seperti drive cloud konsumen. RcloneView menampilkan apa yang benar-benar didukung backend, alih-alih berpura-pura menyediakan tombol universal yang gagal secara diam-diam pada remote yang tidak didukung.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView remote explorer with right-click context menu open" class="img-large img-center" />

## Di Mana Ini Cocok dalam Alur Kerja Harian

Tim yang mengelola hasil kerja klien, aset pemasaran, atau permintaan dokumen sekali pakai mendapatkan manfaat paling besar dari kemampuan membuat tautan di jendela yang sama tempat file sudah berada. Alih-alih mengingat penyedia layanan mana yang menyimpan sebuah file dan membuka situs penyedia tersebut secara terpisah, Anda cukup menelusuri ke file tersebut di panel Explorer RcloneView dan membuat tautan di tempat. Berbeda dengan alat yang hanya melakukan mount, RcloneView juga melakukan sinkronisasi dan membandingkan folder — pada lisensi FREE — sehingga jendela yang sama yang membagikan tautan hari ini juga dapat terus mencadangkan folder tersebut sesuai jadwal keesokan harinya.

Ini sangat berguna ketika aset satu proyek tersebar di beberapa penyedia layanan — misalnya, hasil ekspor foto RAW di Backblaze B2 dan bukti cetak untuk klien di Dropbox. Anda tidak memerlukan dua alur kerja; Anda hanya memerlukan satu explorer dengan dua tab terbuka.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud to cloud file transfer panel in RcloneView" class="img-large img-center" />

## Menggabungkan Tautan Publik dengan Pengorganisasian Folder

Sebelum berbagi, ada baiknya menggunakan tampilan daftar file RcloneView untuk memastikan dengan tepat apa yang Anda ekspos. Beralih ke List View untuk memeriksa ukuran file dan tanggal modifikasi, atau ke Thumbnail View jika Anda membagikan gambar dan ingin pemeriksaan visual cepat bahwa Anda memilih file yang benar. Get Public Link juga berfungsi pada file yang dipilih beberapa sekaligus, sehingga Anda dapat membuat beberapa tautan dalam satu langkah alih-alih mengulangi klik kanan setiap kali.

Jika tautan perlu tetap aktif untuk berbagi berulang terjadwal — misalnya, laporan mingguan yang selalu diambil klien dari URL yang sama — padukan dengan pekerjaan Sync yang menjaga file yang mendasarinya tetap diperbarui pada jalur yang sama, sehingga tautan itu sendiri tidak perlu pernah dibuat ulang.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing scheduled file updates" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Hubungkan remote yang menyimpan file yang ingin Anda bagikan melalui New Remote.
3. Telusuri ke file tersebut di panel Explorer, klik kanan, lalu pilih Get Public Link.
4. Salin tautan yang dihasilkan dan kirimkan — tanpa perlu login browser terpisah.

Setelah ini menjadi bagian dari rutinitas Anda, berbagi file cloud memerlukan tiga klik yang sama, apa pun penyedia layanan dari lebih dari 90 penyedia yang didukung tempat file tersebut berada.

---

**Panduan Terkait:**

- [Mengatasi Error Tautan Publik Tidak Didukung — Bagikan File dengan Benar Menggunakan RcloneView](https://rcloneview.com/support/blog/fix-public-link-not-supported-errors-rcloneview)
- [Dapatkan Ukuran — Hitung Penggunaan Penyimpanan Cloud Secara Instan dengan RcloneView](https://rcloneview.com/support/blog/get-size-calculate-cloud-storage-usage-rcloneview)
- [Tampilan Thumbnail — Jelajahi dan Pratinjau Gambar Cloud Secara Visual dengan RcloneView](https://rcloneview.com/support/blog/thumbnail-view-image-preview-cloud-rcloneview)

<CloudSupportGrid />
