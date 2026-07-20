---
sidebar_position: 7
description: Pelajari cara menambahkan Azure File Storage di RcloneView.
keywords:
  - rcloneview
  - azure file storage
  - azure files
  - smb
  - cloud storage
  - remote storage
  - Remote Connection
  - rclone
tags:
  - azure
  - azure-files
  - Remote-Storage
  - remote-connection
  - cloud-storage
date: 2025-12-03
author: tayson
---

# Azure File Storage

## Cara Menambahkan Azure File Storage Menggunakan RcloneView

Azure File Storage menggunakan SMB dan memerlukan tiga item untuk terhubung:

- **Azure Storage Account Name**
- **Storage Account Shared Key**
- **Azure File Share Name**

Anda dapat menyalin ketiganya dari **Azure Portal** (Storage account > **Access keys** untuk shared key, dan **File shares** untuk nama share).

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-share-account-key.png" alt="get azure storage account name and account shared key" class="img-large img-center" />

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-share-name.png" alt="get azure storage share name" class="img-large img-center" />

### Langkah 1: Buka Jendela New Remote

- Klik **`+ New Remote`** dari menu atas di bawah **`Remote`**.
- Atau klik tombol **`+`** di panel Explorer dan pilih **`New Remote`**.

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="add new remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote-explorer.png" alt="add new remote explorer" class="img-large img-center" />
</div>

### Langkah 2: Pilih Azure File Storage sebagai Storage Provider

1. Di bilah **Search Provider**, ketik `Azure File Storage`.
2. Klik opsi **Azure File Storage** dari daftar.

Anda kemudian akan diarahkan ke layar konfigurasi untuk Azure File Storage.

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-new-remote.png" alt="select azure file storage to add remote" class="img-large img-center" />

### Langkah 3: Konfigurasikan Remote Azure File Storage Anda

Isi informasi yang diperlukan pada formulir:

- **Remote name**: Nama yang mudah dikenali untuk remote Anda (mis., `MyAzureFileStorage`)
- **account**: Azure Storage **Account Name**. Isi dengan Azure Storage Account Name yang digunakan.
- **key**: **Storage Account Shared Key**
- **share_name**: **Azure Files Share Name**. Ini wajib diisi dan merupakan nama share yang akan diakses.

Setelah mengisi semua nilai, klik **`Add Remote`** untuk menyelesaikan penyiapan.

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-new-remote-settings.png" alt="remote configure azure file storage" class="img-large img-center" />

### Langkah 4: Konfirmasi Remote yang Ditambahkan

Setelah ditambahkan, remote Azure File Storage baru Anda (mis., `MyAzure`) akan muncul di daftar **Remote Manager**.

Sekarang Anda dapat:

- Klik **`Open`** untuk menelusuri file Anda.
- Menggunakannya dalam pekerjaan sinkronisasi, salin, atau mount.
- Mengelola atau menghapus remote kapan saja.

<img src="/support/images/en/howto/remote-storage-connection-settings/azure-file-storage/azure-file-remote-manager.png" alt="remote manager azure file storage view" class="img-large img-center" />

✅ **Selesai!** Anda telah berhasil menghubungkan penyimpanan **Azure File Storage** Anda ke **RcloneView**.

**Selesai!** Sekarang Anda dapat menelusuri dan mentransfer file di Azure File Share Anda langsung dari RcloneView.
