---
sidebar_position: 6
description: Pelajari cara menambahkan penyimpanan Gofile di RcloneView.
keywords:
  - rcloneview
  - rclone
  - gofile
  - remote storage
  - cloud storage
  - Remote Connection
tags:
  - gofile
  - remote-connection
  - Remote-Storage
  - cloud-storage
date: 2025-05-27
author: Jay
---
# Gofile

## Cara Menambahkan Gofile Menggunakan RcloneView (Windows)


### Langkah 1: Membuka Jendela Konfigurasi Remote Baru

- Klik **`+ New Remote`** dari menu atas di bawah **`Remote`**.
- Alternatifnya, klik tombol **`+`** pada panel Explorer dan pilih **`New Remote`** untuk memulai konfigurasi remote.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>
### Langkah 2: Menambahkan Remote Gofile

#### Pada tab **`Provider`**:

1. Cari **`gofile`**.
2. Pilih **`Gofile`** dari daftar.

#### Pada tab **`Options`**:

3. Masukkan **Access Token** Anda.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-provider.png" alt="add go file provider" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-option.png" alt="add gofile remote option" class="img-medium img-center" />
</div>
:::info Cara mendapatkan Access Token
 - Kunjungi [https://gofile.io/myprofile](https://gofile.io/myprofile)
 - Masuk ke akun Gofile Anda.
- Gulir ke bawah untuk menemukan **`Account API Token`** dan salin token tersebut.
:::

#### Pada tab **`Name`**:

4. Berikan **`Remote name`** untuk remote ini (misalnya, `myGofile`).

#### Pada tab **`Save`**:

5. Klik **`Save`** untuk menyelesaikan penambahan remote.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-name.png" alt="add go file remote name" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-save.png" alt="add gofile remote save" class="img-medium img-center" />
</div>


### Langkah 3: Memverifikasi Remote Gofile yang Ditambahkan di RcloneView

Jalankan **RcloneView**.

1. Dari menu bar, klik **`Remote Manager`** di bawah tab **`Remote`**.
2. Pastikan remote **`Gofile`** Anda muncul di jendela **`Remote Manager`**.

<div class="img-grid-2">
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-icloud-verify-step1.png" alt="verify aws s3 step1" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-verify.png" alt="add go file remote verify" class="img-medium img-center" />
</div>


✅ **Selesai!** Remote **`Gofile`** Anda kini berhasil dikonfigurasi dan siap digunakan di **RcloneView**.


## 🔗 Sumber Daya Tambahan

- 🔐 Dapatkan token Anda: [https://gofile.io/myprofile](https://gofile.io/myprofile)
