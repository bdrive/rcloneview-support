---
sidebar_position: 4
description: Pelajari cara mengonfigurasi WebDAV sebagai remote storage di RcloneView untuk sinkronisasi dan akses file.
keywords:
  - rcloneview
  - webdav
  - remote storage
  - cloud storage
  - sync
  - webdav configuration
  - rclone
tags:
  - webdav
  - Remote-Storage
  - remote-connection
date: 2025-06-20
author: Jay
---
# WebDAV

## Cara Menambahkan WebDAV menggunakan RcloneView

### Langkah 1: Membuka Jendela Konfigurasi Remote Baru

- Klik **`+ New Remote`** dari menu atas di bawah **`Remote`**.
- Alternatifnya, klik tombol **`+`** pada panel Explorer dan pilih **`New Remote`** untuk memulai konfigurasi remote.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>

### Langkah 2: Menambahkan Remote WebDAV

#### Pada tab **`Provider`**:
1. Cari **`webdav`**.
2. Pilih **`WebDAV`** dari daftar.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-webdav-remote-provider.png" alt="add webdav remote provider" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-webdav-remote-options.png" alt="add webdav remote options" class="img-medium img-center" />
</div>

#### Pada tab **`Options`**:
3. Masukkan URL Remote
4. Masukkan nama pengguna login Anda
5. Masukkan kata sandi Anda

<details>
<summary>Detail Opsi</summary>

Detail Opsi

| Field          | Deskripsi                                                                                                                                                                                                                |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `url`          | URL WebDAV remote (misalnya, https://webdav.example.com/)  Anda juga dapat menentukan nomor port khusus (misalnya, https://webdav.example.com:5020)                                                                          |
| `vendor`       | (Opsional) Biarkan kosong atau isi dengan penyedia layanan yang kompatibel dengan WebDAV (misalnya, fastmail, nextcloud, owncloud, sharepoint, sharepoint-ntlm, rclone)  Lihat daftar lengkap: [WebDAV Provider Notes](https://rclone.org/webdav/#provider-notes) |
| `user`         | Nama pengguna login Anda                                                                                                                                                                                                     |
| `pass`         | Kata sandi login Anda (disamarkan)                                                                                                                                                                                               |
| `bearer_token` | (Opsional) Biasanya dibiarkan kosong                                                                                                                                                                                              |



</details>
#### Pada tab **`Name`**:
6. Masukkan nama unik dan mudah dikenali untuk remote ini (misalnya, `myWebDAV`).

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-webdav-remote-name.png" alt="add webdav remote name" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-webdav-remote-save.png" alt="add webdav remote save" class="img-medium img-center" />
</div>
#### Pada tab **`Save`**:
5. Klik **`Save`** untuk menyelesaikan pengaturan remote.

### Langkah 3: Memverifikasi Remote WebDAV yang Ditambahkan di RcloneView

1. Dari menu atas, klik **`Remote Manager`** di bawah tab **`Remote`**.
2. Pastikan **remote WebDAV** Anda muncul di jendela **Remote Manager**.

✅ **Selesai!** Remote WebDAV Anda kini berhasil dikonfigurasi dan siap digunakan di RcloneView.
