---
sidebar_position: 5
description: Pelajari cara menambahkan remote SFTP di RcloneView
keywords:
  - rcloneview
  - SFTP
  - remote storage
  - SSH
  - Remote Connection
  - rclone
tags:
  - sftp
  - Remote-Storage
  - ssh
  - remote-connection
date: 2025-06-23
author: Jay
---
# SFTP

## Cara Menambahkan SFTP menggunakan RcloneView

### Langkah 1: Membuka Jendela Konfigurasi Remote Baru

- Klik **`+ New Remote`** dari menu atas di bawah **`Remote`**.
- Alternatifnya, klik tombol **`+`** di panel Explorer dan pilih **`New Remote`** untuk memulai konfigurasi remote.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>

### Langkah 2: Menambahkan Remote SFTP

#### Pada tab **`Provider`**:
1. Ketik **`sftp`** di kotak pencarian.  
2. Pilih **`sftp (SSH/SFTP)`** dari daftar.  

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-sftp-remote-provider.png" alt="add sftp remote provider" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-sftp-remote-options.png" alt="add sftp remote options" class="img-medium img-center" />
</div>
#### Pada tab **`Options`**:
3. Masukkan **host** (misalnya, `myserver.example.com` atau `192.168.1.100`)  
4. Masukkan **username**  
5. Masukkan **nomor port** (default adalah `22`)  
6. Masukkan **password**  


#### Pada tab **`Name`**:
7. Masukkan **nama remote** (misalnya, `MySFTPServer`)  

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-sftp-remote-name.png" alt="add sftp remote name" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-sftp-remote-save.png" alt="add sftp remote save" class="img-medium img-center" />
</div>

#### Pada tab **`Save`**:
8. Klik **`Save`** untuk menyelesaikan pengaturan.

### Langkah 3: Memverifikasi Remote SFTP yang Ditambahkan di RcloneView

1. Buka **`Remote > Remote Manager`**
2. Pastikan **remote SFTP** yang baru saja ditambahkan muncul di daftar.

✅ **Selesai!** Remote SFTP Anda kini berhasil dikonfigurasi dan siap digunakan di RcloneView.

