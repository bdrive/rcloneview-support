---
slug: fix-cloudflare-r2-upload-errors-rcloneview
title: "Perbaiki Error Upload Cloudflare R2 — Cara Mengatasinya dengan RcloneView"
authors:
  - jay
description: "Diagnosis dan perbaiki error upload dan sinkronisasi Cloudflare R2 di RcloneView — mencakup izin API token, konfigurasi endpoint, kegagalan multipart upload, dan masalah rate limit."
keywords:
  - Cloudflare R2 upload errors RcloneView
  - fix R2 sync errors
  - Cloudflare R2 API token error
  - R2 multipart upload failure
  - RcloneView Cloudflare R2 troubleshoot
  - fix R2 403 permission error
  - Cloudflare R2 connection issues
  - rclone R2 upload fix
tags:
  - RcloneView
  - cloudflare-r2
  - troubleshooting
  - tips
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Perbaiki Error Upload Cloudflare R2 — Cara Mengatasinya dengan RcloneView

> Cloudflare R2 memiliki persyaratan kredensial dan endpoint tertentu yang menyebabkan error jika salah dikonfigurasi. Berikut cara mendiagnosis dan memperbaiki kegagalan upload dan sinkronisasi R2 yang paling umum di RcloneView.

Cloudflare R2 adalah layanan penyimpanan objek yang kompatibel dengan S3 dan menghilangkan biaya egress, sehingga menarik untuk distribusi konten dan beban kerja pencadangan. Namun, model autentikasi R2 sedikit berbeda dari AWS S3 standar — R2 menggunakan Account ID beserta API token, bukan pasangan kunci bergaya IAM yang biasa digunakan sebagian besar pengguna S3. Mengatur detail ini dengan benar di RcloneView adalah kunci untuk mengatasi sebagian besar error R2.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Error: 403 Forbidden atau Invalid Credentials

Error R2 yang paling umum adalah respons `403 Forbidden`, biasanya disebabkan oleh konfigurasi API token yang salah. Saat menambahkan Cloudflare R2 di **Remote tab → New Remote**, Anda memerlukan tiga informasi: **R2 API Token** (dengan izin Object Read/Write untuk bucket tertentu), **Account ID** (dapat ditemukan di dashboard Cloudflare), dan URL endpoint R2 dengan format `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`.

Kesalahan umum adalah menggunakan Global API Key alih-alih API token khusus R2. Buat API token khusus di bagian R2 Cloudflare di bawah **Manage API Tokens**, dan pastikan token tersebut memiliki izin minimal "Object Read & Write" untuk bucket target. Jika Anda mendapatkan error `403` saat listing bucket tetapi tidak saat mengakses file individual, token mungkin tidak memiliki izin list tingkat bucket — buat ulang dengan scope "Account → R2 → Read/Write".

<img src="/support/images/en/blog/new-remote.png" alt="Configuring Cloudflare R2 credentials in RcloneView" class="img-large img-center" />

## Error: Multipart Upload Failed atau Upload Tidak Lengkap

R2 mendukung multipart upload (diperlukan untuk file di atas 100MB), tetapi multipart upload yang tidak lengkap dapat meninggalkan bagian (part) yatim piatu di bucket Anda dan menyebabkan upload berikutnya dengan nama file yang sama gagal. Di **Log tab** RcloneView, cari pesan seperti `upload multipart failed` atau `NoSuchUpload`.

Solusinya adalah dengan terlebih dahulu membersihkan multipart upload yatim piatu dari bucket R2 Anda menggunakan dashboard Cloudflare atau terminal rclone di dalam RcloneView. Kemudian coba lagi upload dengan jumlah stream multipart bersamaan yang lebih rendah di Advanced Settings pada job tersebut. Mengatur `--s3-upload-concurrency 4` melalui opsi **Global Rclone Flags** di Settings dapat menstabilkan upload besar ke R2.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Retrying a failed R2 upload job in RcloneView" class="img-large img-center" />

## Error Endpoint dan Region

Cloudflare R2 tidak menggunakan kode region AWS standar. Jika Anda melihat error `NoSuchBucket` atau `InvalidLocationConstraint`, verifikasi URL endpoint di konfigurasi remote Anda. Format yang benar adalah `https://<YOUR_ACCOUNT_ID>.r2.cloudflarestorage.com` — account ID harus sesuai persis dengan akun Cloudflare Anda. Kolom region sebaiknya dikosongkan atau diatur ke `auto` untuk R2.

Jika Anda menyalin endpoint dari layanan S3 yang berbeda, periksa kembali apakah endpoint tersebut dimulai dengan prefix Account ID Anda dan bukan URL region AWS seperti `s3.us-east-1.amazonaws.com`.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring R2 upload after fixing configuration errors" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Verifikasi bahwa R2 API Token Anda memiliki izin Object Read/Write pada bucket target.
3. Pastikan URL endpoint menggunakan format `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`.
4. Untuk file besar, kurangi concurrency multipart upload dan bersihkan upload yatim piatu yang ada.

Jika dikonfigurasi dengan benar, Cloudflare R2 dengan RcloneView menawarkan performa yang sangat baik untuk pencadangan dan pengarsipan dengan biaya yang dapat diprediksi.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Cloud Cloudflare R2 dengan RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Perbaiki Error S3 Access Denied Permission dengan RcloneView](https://rcloneview.com/support/blog/fix-s3-access-denied-permission-errors-rcloneview)
- [Perbaiki Kegagalan S3 Multipart Upload dengan RcloneView](https://rcloneview.com/support/blog/fix-s3-multipart-upload-failures-rcloneview)

<CloudSupportGrid />
