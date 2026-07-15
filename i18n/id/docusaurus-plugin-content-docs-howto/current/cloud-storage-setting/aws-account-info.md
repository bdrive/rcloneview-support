---
sidebar_position: 1
description: Panduan langkah demi langkah untuk mengambil AWS Access Key ID, Secret Access Key, dan kode Region Anda secara aman untuk menghubungkan RcloneView ke AWS S3.
keywords:
  - rcloneview
  - rclone
  - aws account
  - access key id
  - secret key id
  - region code
  - s3 setup
  - iam
  - aws s3
  - aws
  - secret access key
tags:
  - RcloneView
  - aws-account
  - secret-key-id
  - access-key-id
  - credentials
  - secret-access-key
  - aws-s3
date: 2025-05-26
author: Jay
---
# Cara Mendapatkan AWS Access Key dan Region Anda untuk Rclone

Sebelum Anda dapat menambahkan AWS S3 sebagai remote di RcloneView, Anda memerlukan **Access Key ID**, **Secret Access Key**, dan kode **Region** AWS Anda. Panduan ini akan memandu Anda melalui langkah-langkah untuk menghasilkan kredensial ini secara aman dari akun AWS Anda.

## Langkah demi Langkah: Mendapatkan AWS Access Key ID dan Secret Access Key Anda

Untuk menghubungkan Rclone ke AWS S3, Anda harus membuat access key di akun AWS Anda:

1. **Masuk (Log in)** ke [AWS Management Console](https://aws.amazon.com/console).
2. Buka **IAM (Identity and Access Management)**.  
   Anda dapat mencari "IAM" di kolom pencarian layanan AWS.
3. Di sidebar kiri, klik **Users**, lalu klik **username IAM** Anda.
4. Buka tab **Security credentials**.
5. Gulir ke bagian **Access keys** dan klik **Create access key**.
6. Pilih:  
   `✔ Application running outside AWS`
7. Secara opsional, masukkan deskripsi (misalnya, `RcloneView Access`) untuk membantu melacak key tersebut.
8. Klik **Create access key**.
9. Pada layar terakhir, salin keduanya:
   - **Access Key ID**
   - **Secret Access Key**

:::important
⚠️ Key ini hanya akan ditampilkan **satu kali**. Pastikan untuk **menyimpannya dengan aman** (misalnya, di pengelola kata sandi/password manager).
:::

## Cara Menemukan Region AWS S3 Anda

Anda juga harus mengetahui **Region** AWS tempat bucket S3 Anda berada. Ini diperlukan saat menyiapkan remote Rclone.

### Opsi 1: Periksa melalui AWS S3 Console

1. Kunjungi [Amazon S3 Console](https://s3.console.aws.amazon.com/s3/home).
2. Temukan bucket Anda di dalam daftar.
3. Kolom **Region** akan menampilkan region tersebut (misalnya, `ap-northeast-2` untuk Seoul, `us-east-1` untuk Virginia).

### Opsi 2: Merujuk pada Daftar Region Resmi

Lihat dokumentasi resmi ini untuk semua region yang tersedia beserta kodenya:

👉 [AWS Region Codes and Endpoints](https://docs.aws.amazon.com/general/latest/gr/s3.html)

:::danger Tips Keamanan
🔒 **Jangan pernah membagikan atau memperlihatkan kredensial AWS Anda secara publik.**  
Rotasi key secara berkala dan hapus key yang tidak digunakan melalui **IAM Console**.
:::
