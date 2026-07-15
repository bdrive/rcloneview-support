---
sidebar_position: 1
description: Pelajari cara menginstal RcloneView dan menghubungkan Google Drive sebagai remote menggunakan panduan langkah demi langkah yang sederhana.
keywords:
  - rclone
  - cloud
  - sync
  - rcloneview
  - guide
  - google drive
  - remote storage
  - Quick Start
  - OAuth
tags:
  - RcloneView
  - Cloud
  - Sync
  - getting-started
  - google-drive
  - Remote-Storage
date: 2025-05-26
author: Jay
slug: /
---
# Panduan Cepat Memulai

Panduan ini akan memandu Anda langkah demi langkah dalam menginstal **RcloneView** dan menambahkan **Penyimpanan Cloud (Google Drive)** sebagai remote.

## **Langkah 1: Menginstal RcloneView**

1. Unduh file instalasi dari [**Halaman Unduh RcloneView**](https://rcloneview.com/src/download.html).
2. Jalankan installer yang telah diunduh dan ikuti instruksi di layar untuk menyelesaikan instalasi.
3. Setelah instalasi berhasil, Anda akan melihat layar konfirmasi berikut:
<img src="/support/images/howto/Completed-install.png" alt="Completed-install" class="img-medium img-center" />

## **Langkah 2: Menambahkan Penyimpanan Cloud (Contoh Google Drive)**

### **Membuka Jendela Konfigurasi Remote Baru**

- Klik **`+ New Remote`** dari menu atas di bawah **`Remote`**.
- Atau, klik tombol **`+`** pada panel Explorer dan pilih **`New Remote`** untuk memulai konfigurasi remote.
<img src="/support/images/howto/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
### Menambahkan Remote Google Drive

1. Masukkan **`google`** pada kolom pencarian.
2. Pilih **`Google Drive`** dari hasil pencarian.
3. Masukkan **`Remote name`** yang mudah dikenali (misalnya, MyGoogleDrive).
4. Klik **`Add Remote`** untuk menyelesaikan penambahan remote.

:::tip
Kolom yang ditandai dengan tanda bintang (*) wajib diisi. Pastikan semua kolom wajib telah diisi sebelum menyimpan.
:::
<div class="img-grid-2">
<img src="/support/images/en/howto/new-remote-step1.png" alt="new remote step1" class="img-medium img-center" />
<img src="/support/images/en/howto/add-remote-step2.png" alt="add remote step2" class="img-medium img-center" />
</div>

:::tip Remote Cloud Berbasis OAuth

Sebagian besar penyedia penyimpanan cloud yang mendukung OAuth (login berbasis web), seperti **Google Drive**, **Dropbox**, **Google Photos**, **OneDrive**, **Box**, **pCloud**, **Yandex Disk**, **premiumize.me**, **put.io**, dan **HiDrive**, memungkinkan Anda melewati langkah `Options`—cukup beri nama remote Anda dan login melalui browser.

Namun, **beberapa penyedia memerlukan konfigurasi tambahan** pada tab `Options` sebelum login OAuth:
- **Zoho WorkDrive** – Pemilihan Region
- **Google Cloud Storage** – Input Project Number
- **Citrix ShareFile** – Input Root Folder ID
- **Google Drive Shared with Me** – Aktifkan `shared_with_me`
- **Box for Business** – Pilih `enterprise` untuk box_sub_type

👉 Lihat panduan: [Menghubungkan via Login Browser Web](/howto/remote-storage-connection-settings/add-oath-online-login#supported-cloud-providers--setup-requirements)
:::

## **Langkah 3: Menghubungkan Penyimpanan Cloud Anda (Single Sign-On GoogleDrive)**
### Autentikasi Akun

- Anda akan diarahkan ke halaman login Google SSO.
- Pilih akun Google Anda atau pilih **"Use another account"** untuk masuk dengan akun yang berbeda.

<img src="/support/images/howto/google-choose-account.png" alt="google choose account" class="img-medium img-center" />
:::tip
Jika Anda menggunakan metode login selain login berbasis password seperti yang ditunjukkan di atas, silakan lihat [panduan ini](https://support.google.com/accounts/answer/12849458) untuk menyelesaikan proses login.
:::

### Mengotorisasi Akses RcloneView

- Klik "Continue" untuk menyelesaikan koneksi ke Google Drive Anda.

<img src="/support/images/howto/google-trust-rclone.png" alt="google trust rclone" class="img-medium img-center" />
- Anda akan melihat halaman konfirmasi yang menampilkan **"Success!"**
<img src="/support/images/howto/google-login-complete.png" alt="google login complete" class="img-medium img-center" />
✅ **Selesai!** Remote Google Drive Anda kini telah berhasil terhubung dan siap digunakan di RcloneView.

