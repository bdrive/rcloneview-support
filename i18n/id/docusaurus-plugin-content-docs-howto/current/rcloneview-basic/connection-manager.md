---
sidebar_position: 9
description: Pelajari cara mengonfigurasi dan beralih antara instance Embedded dan External Rclone menggunakan Connection Manager RcloneView.
keywords:
  - rcloneview
  - connection
  - remote control
  - embedded rclone
  - external rclone
  - connection manager
  - rclone
  - rclone rcd
  - rc server
  - Remote Connection
  - rclone connection
tags:
  - RcloneView
  - connection
  - remote-control
  - embedded-rclone
  - external-rclone
  - connection-manager
  - rclone-rcd
date: 2025-06-22
author: Jay
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Mengelola Koneksi Rclone di RcloneView

RcloneView adalah pengelola file berbasis GUI untuk penyimpanan cloud yang berkomunikasi dengan **Rclone** melalui Remote Control (RC) API-nya. Secara default, aplikasi ini dilengkapi dengan instance **Embedded Rclone** bawaan, tetapi juga mendukung koneksi ke instance Rclone eksternal (**External Rclone**).

Panduan ini menjelaskan cara mengelola koneksi tersebut menggunakan **Connection Manager**.

## Gambaran Umum Connection Manager

RcloneView berkomunikasi dengan Rclone dalam dua mode:

- **Embedded Rclone** (default, bawaan)
- **External Rclone** (dikonfigurasi pengguna, terhubung jaringan)

**Connection Manager** memungkinkan Anda melihat, beralih, dan mengelola instance Rclone tersebut.

<img src="/support/images/en/howto/rcloneview-basic/connection-manager-with-embedded-rclone-only.png" alt="connection manager with embedded rclone only" class="img-medium img-center" />

### Embedded Rclone

RcloneView menyertakan binary Rclone yang sudah terpasang bernama **Embedded Rclone**, yang berjalan secara otomatis.

| Field                       | Deskripsi                                                                    |
| --------------------------- | ------------------------------------------------------------------------------ |
| **Address**                 | Biasanya `http://127.0.0.1:5582` (localhost loopback)                         |
| **Rclone Version**          | Contoh: `v1.70.1`                                                             |
| **Connected** / **Connect** | Menunjukkan status saat ini. Jika belum terhubung, klik **Connect** untuk mengaktifkan. |
| **Self Update**             | Klik untuk memperbarui ke versi Rclone terbaru.                                 |

### Daftar External Rclone

External Rclone mengacu pada instance Rclone mandiri yang dijalankan secara manual oleh pengguna, biasanya melalui `rclone rcd`. Instance ini dapat berjalan di:

- Mesin lokal (untuk pengujian)
- Server jarak jauh (misalnya, AWS EC2)
- Di dalam kontainer Docker

Setiap entri menampilkan:

| Field | Deskripsi |
|-------|-------------|
| **Display Name** | Nama yang ditentukan pengguna (misalnya, `aws-rclone`) |
| **Remote Address** | Endpoint API, misalnya `http://<host>:5572` |
| **Username** | Jika autentikasi diaktifkan |
| **Rclone Version** | Diambil dari instance yang terhubung |

**Aksi yang Tersedia**:
- **Connect** – Mengaktifkan instance ini
- **Edit** – Mengubah alamat, kredensial, atau opsi SSL
- **Delete** – Menghapus dari daftar

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/external-rclone-added.png" alt="external rclone added" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/external-rclone-selected.png" alt="external rclone selected" class="img-medium img-center" />
</div>

### Indikator Pilihan Saat Ini

Di bagian atas dialog Connection Manager:

- `Selected: Embedded Rclone` – instance bawaan default sedang aktif  
- `Selected: aws-rclone` – instance eksternal khusus sedang digunakan

Hanya satu koneksi yang dapat aktif dalam satu waktu. Pilihan Anda saat ini memengaruhi:

- Visibilitas daftar remote  
- Aksi Mount/Job  
- Operasi konfigurasi

:::important Catatan
- Hanya satu koneksi Rclone yang dapat aktif dalam satu waktu.  
- Anda dapat beralih dengan bebas antara koneksi Embedded dan External.  

💡 Untuk mengelola dua instance secara berdampingan, buka jendela RcloneView baru.

- Jika Rclone eksternal menjadi tidak tersedia, Anda selalu dapat kembali ke versi embedded.
:::

## Menambahkan External Rclone Baru

Untuk terhubung ke server `rclone rcd` yang sedang berjalan:

<img src="/support/images/en/howto/rcloneview-basic/new-connection-form.png" alt="new connection form" class="img-medium img-center" />

1. Klik **New Connection** di bagian bawah Connection Manager.
2. Isi formulir:

| Field | Deskripsi |
|-------|-------------|
| **Display Name** | misalnya, `aws-rclone` |
| **Remote Address** | Endpoint API lengkap (`http://<host>:5572`) |
| **Username / Password** | Diperlukan jika autentikasi diaktifkan |
| **Disable SSL Verification** | Untuk sertifikat self-signed atau penggunaan pengembangan |
<br />
<br />

3. Klik **Test connection**. Jika berhasil, klik **Save**.

:::important Catatan

💡 Agar Rclone eksternal dapat digunakan, jalankan dengan:

```bash
rclone rcd --rc-user=<user> --rc-pass=<pass> --rc-addr=127.0.0.1:5572
```

:::
