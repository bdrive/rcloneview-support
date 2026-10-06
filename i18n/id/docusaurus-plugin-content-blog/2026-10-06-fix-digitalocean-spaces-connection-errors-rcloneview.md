---
slug: fix-digitalocean-spaces-connection-errors-rcloneview
title: "Perbaiki Error Koneksi DigitalOcean Spaces — Atasi Masalah Endpoint dan Kunci dengan RcloneView"
authors:
  - jay
description: "Perbaiki error koneksi DigitalOcean Spaces seperti access denied dan signature mismatch dengan memeriksa endpoint, region, dan kunci di RcloneView."
keywords:
  - perbaiki error koneksi DigitalOcean Spaces
  - DigitalOcean Spaces access denied
  - Spaces SignatureDoesNotMatch
  - endpoint region DigitalOcean Spaces
  - pemecahan masalah penyimpanan kompatibel S3
  - rclone DigitalOcean Spaces
  - RcloneView DigitalOcean Spaces
  - access key Spaces
tags:
  - RcloneView
  - troubleshooting
  - tips
  - digitalocean-spaces
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Perbaiki Error Koneksi DigitalOcean Spaces — Atasi Masalah Endpoint dan Kunci dengan RcloneView

> Sebagian besar kegagalan koneksi DigitalOcean Spaces bermuara pada tiga pengaturan: endpoint, region, dan access key.

Anda sudah menambahkan remote Spaces, tetapi daftar bucket kosong, atau setiap permintaan mengembalikan access denied atau error signature. Karena Spaces adalah layanan kompatibel S3, penyebabnya biasanya ketidakcocokan kecil dalam konfigurasi remote. RcloneView memungkinkan Anda memeriksa dan memperbaiki remote, lalu mengujinya kembali dari jendela yang sama.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Periksa Endpoint dan Region Terlebih Dahulu

Endpoint Spaces bersifat spesifik per region, dengan format `<region>.digitaloceanspaces.com`, misalnya `nyc3.digitaloceanspaces.com`. Jika region pada endpoint berbeda dari region tempat Space dibuat, permintaan akan gagal meskipun kunci Anda benar. Buka Remote Manager dari tab Remote, edit remote, lalu bandingkan endpoint dengan region yang ditampilkan di panel kontrol DigitalOcean Anda.

Gunakan endpoint regional saja, bukan URL khusus Space yang menyertakan nama bucket. Menambahkan nama bucket ke endpoint adalah penyebab umum hasil aneh seperti "bucket not found".

<img src="/support/images/en/blog/new-remote.png" alt="Mengedit endpoint remote kompatibel S3 di RcloneView" class="img-large img-center" />

## Verifikasi Access Key dan Secret

Spaces menggunakan pasangan access key sendiri, terpisah dari token API DigitalOcean Anda. Menempelkan token API ke kolom key adalah kesalahan yang sering terjadi. Jika ragu, buat ulang pasangan kunci Spaces, lalu tempel kembali kedua nilainya sambil memperhatikan spasi di awal atau akhir yang terbawa saat menyalin.

Jika pencantuman daftar berhasil tetapi unggahan gagal, kunci mungkin tidak memiliki izin tulis pada Space tersebut. Buat kunci dengan akses yang sesuai dan perbarui remote.

## Uji dari Terminal Bawaan

RcloneView menyertakan tab Terminal di Info View bagian bawah. Jalankan `rclone listremotes` untuk memastikan remote ada, lalu `rclone about "myspaces:"` atau pencantuman sederhana untuk melihat teks error mentah. Pesan yang persis akan menunjukkan apakah masalahnya pada autentikasi, endpoint, atau jaringan.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Riwayat job RcloneView yang menampilkan transfer dengan error" class="img-large img-center" />

Periksa tab Log dan Job History untuk kegagalan yang berulang. Jika error hanya muncul pada transfer besar, turunkan jumlah transfer file di Advanced Settings job untuk meringankan beban.

## Singkirkan Masalah Jaringan dan Waktu

Error signature juga dapat berasal dari jam sistem yang meleset jauh, karena permintaan yang ditandatangani bergantung pada waktu saat ini. Perbaiki jam Anda lalu coba lagi. Proxy perusahaan dan firewall yang memeriksa TLS juga dapat memutus koneksi, jadi uji dari jaringan lain jika kunci dan endpoint tampak benar.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Menjalankan transfer ke DigitalOcean Spaces di RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka Remote Manager, edit remote Spaces Anda, dan konfirmasi endpoint regional.
3. Masukkan kembali access key dan secret Spaces.
4. Uji dengan menyalin folder kecil, lalu jalankan ulang job lengkap Anda.

Endpoint dan pasangan kunci yang dikonfigurasi dengan benar mengubah kegagalan yang samar menjadi alur kerja yang andal dan dapat diulang.

---

**Panduan Terkait:**

- [Kelola DigitalOcean Spaces — Sinkronisasi dan Pencadangan dengan RcloneView](https://rcloneview.com/support/blog/manage-digitalocean-spaces-cloud-sync-backup-rcloneview)
- [Perbaiki Error Izin S3 Access Denied dengan RcloneView](https://rcloneview.com/support/blog/fix-s3-access-denied-permission-errors-rcloneview)
- [Perbaiki Error Sertifikat SSL/TLS dengan RcloneView](https://rcloneview.com/support/blog/fix-ssl-tls-certificate-errors-cloud-rcloneview)

<CloudSupportGrid />
