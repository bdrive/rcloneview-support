---
sidebar_position: 8
description: Pelajari cara menambahkan penyimpanan Backblaze B2 di RcloneView.
keywords:
  - rcloneview
  - rclone
  - backblaze
  - b2
  - remote storage
  - cloud storage
  - Remote Connection
tags:
  - backblaze
  - b2
  - remote-connection
  - Remote-Storage
  - cloud-storage
date: 2025-09-20
author: Jay
---

# Backblaze B2

## Cara Menambahkan Backblaze B2 Menggunakan RcloneView (Windows)

### Langkah 1: Buka Remote Manager

- Klik **`+ New Remote`** dari menu atas di bawah **`Remote`**.
- Alternatifnya, klik tombol **`+`** pada panel Explorer dan pilih **`New Remote`** untuk memulai konfigurasi remote.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-medium img-center" />
</div>

### Langkah 2: Pilih Backblaze B2 sebagai Storage Provider

1. Pada bilah **Search Provider**, ketik `b2`.
2. Klik opsi **Backblaze B2** yang muncul.

<img src="/support/images/en/howto/remote-storage-connection-settings/add-backblaze-b2-remote.png" alt="add backblaze b2 remote" class="img-medium img-center" />

Anda akan diarahkan ke layar konfigurasi untuk Backblaze B2.

### Langkah 3: Konfigurasikan Remote Backblaze B2 Anda

Pada formulir setup, isikan informasi wajib berikut:

- **Remote name**: Nama yang mudah diingat untuk remote Anda (misalnya, `MyB2Master`).
- **account**: **Application Key ID** Backblaze Anda.
- **key**: **Application Key** Backblaze Anda.

Setelah memasukkan nilai yang diperlukan, klik **`Add Remote`** untuk menyimpan koneksi.
<img src="/support/images/en/howto/remote-storage-connection-settings/remote-configure-backblaze-b2.png" alt="remote configure backblaze b2" class="img-medium img-center" />

:::info Di mana mendapatkan kredensial ini?

- Masuk ke [akun Backblaze B2](https://secure.backblaze.com/b2_buckets.htm) Anda.
- Buka **App Keys**.
- Buat atau salin pasangan kunci yang sudah ada:
  - Gunakan **Key ID** sebagai `account`
  - Gunakan **Application Key** sebagai `key`
:::


### Langkah 4: Konfirmasi Remote yang Ditambahkan

Setelah ditambahkan, remote Backblaze B2 baru Anda (misalnya, `MyB2Master`) akan muncul dalam daftar **Remote Manager**.

Sekarang Anda dapat:
- Klik **`Open`** untuk menjelajahi remote.
- Menggunakannya dalam operasi copy/sinkronisasi/mount.
- Mengelola atau menghapusnya kapan saja.

<img src="/support/images/en/howto/remote-storage-connection-settings/remote-manager-backblaze-view.png" alt="remote manager backblaze view" class="img-medium img-center" />

✅ **Selesai!** Anda telah berhasil menghubungkan penyimpanan **Backblaze B2** Anda ke **RcloneView**.


## 🔗 Sumber Daya Tambahan

- 🔐 Kelola kunci Anda: [https://secure.backblaze.com/b2_buckets.htm](https://secure.backblaze.com/b2_buckets.htm)
- 📘 Dokumentasi app key: [https://www.backblaze.com/b2/docs/application_keys.html](https://www.backblaze.com/b2/docs/application_keys.html)
