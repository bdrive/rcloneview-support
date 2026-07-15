---
sidebar_position: 2
description: Pelajari cara menambah, mengedit, dan menghapus remote cloud dan lokal menggunakan RcloneView, termasuk Google Drive, Dropbox, WebDAV, S3, dan lainnya.
keywords:
  - rcloneview
  - remote storage management
  - add remote
  - remote manager
  - cloud sync
  - cloud storage
  - open remote
  - delete remote
  - google drive
  - Dropbox
  - s3 compatible
  - aws s3
  - webdav
  - SFTP
  - Onedrive
  - icloud
  - mega
tags:
  - RcloneView
  - Remote-Storage
  - Remote-manager
  - Remote-storage-managent
  - remote-connection
  - remote-control
  - cloud-storage
date: 2025-06-20
author: Jay
---
# Menambah dan Mengelola Remote Storage di RcloneView

RcloneView memungkinkan Anda menghubungkan dan mengelola layanan penyimpanan cloud maupun lokal.  
Panduan ini menjelaskan cara **menambah**, **mengedit**, dan **menghapus** remote storage menggunakan RcloneView.

## Menambah Remote Baru
  
Anda dapat menambahkan remote storage baru dengan terlebih dahulu membuka dialog **New Remote** lalu menyelesaikan pengaturannya.

### Membuka Dialog **New Remote**

Anda dapat membuka dialog pengaturan **`New Remote`** menggunakan salah satu metode berikut:

<div class="img-grid-3">
<img src="/support/images/en/howto/rcloneview-basic/create-remote-top-remote-menu.png" alt="create remote top remote menu" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/create-remote-by-plus-button.png" alt="create remote by plus button" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/create-remote-by-remote-manager.png" alt="create remote by remote manager" class="img-medium img-center" />
</div>

#### Metode 1: Menggunakan Menu Remote di Bagian Atas

Klik **`+ New Remote`** pada tab Remote di bagian atas.

#### Metode 2: Menggunakan Tombol `+` di Panel Explorer

Klik ikon **`+`** pada panel file explorer (kiri atau kanan), lalu pilih **New Remote**.

#### Metode 3: Menggunakan Remote Manager

Klik tombol **`Remote Manager`** pada tab **`Remote`**, lalu klik tombol **`+`** pada kartu remote yang kosong.


### Menyiapkan Remote Baru

Setelah dialog **New Remote** terbuka, pilih jenis remote (misalnya Google Drive, Dropbox, S3) dan isi pengaturan yang diperlukan.  

Kolom yang tersedia akan berbeda tergantung penyedia yang dipilih.

Untuk instruksi rinci khusus penyedia, silakan lihat [**Pengaturan Koneksi Remote Storage**](/howto/category/remote-storage-connection-settings).  

## Mengelola Remote yang Sudah Ada di RcloneView

Setelah menambahkan remote ke RcloneView, Anda dapat mengelolanya dengan berbagai cara — termasuk membuka, mengedit, atau menghapusnya. Berikut adalah panduan yang menjelaskan cara melakukan setiap tindakan.

### Membuka Remote di Panel Explorer

Anda dapat membuka tampilan folder remote untuk menjelajah atau mentransfer file antara lokal dan cloud.

<div class="img-grid-3">
<img src="/support/images/en/howto/rcloneview-basic/open-remote-by-remote-card.png" alt="open remote by remote card" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/open-remote-by-plus-button.png" alt="open remote by plus button" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/open-remote-by-remote-manager.png" alt="open remote by remote manager" class="img-medium img-center" />
</div>

#### Metode 1: Klik Tombol `Open` pada Kartu Remote

Klik tombol **`Open`** pada kartu remote mana pun di panel sisi kanan.

#### Metode 2: Membuka Remote Menggunakan Tombol `+` di Panel Explorer

Mengklik tombol **`+`** yang terletak di **panel Explorer** kiri atau kanan akan menampilkan daftar semua remote yang telah dikonfigurasi.

1. Klik ikon `+` di panel Explorer tempat Anda ingin membuka remote.
2. Sebuah daftar dropdown akan muncul menampilkan semua remote yang tersedia.
3. Pilih remote yang diinginkan (misalnya, `MyWebDAV`) dari daftar.
4. Remote yang dipilih akan terbuka di panel yang diklik. Jika remote lain sudah terbuka di sana, sebuah **tab baru** akan ditambahkan untuk remote yang dipilih.

:::note
 Remote yang ditandai sebagai **favorit (alias)** ditampilkan di **bagian atas daftar** agar lebih cepat diakses.
:::
#### Metode 3: Menggunakan Tombol `Open` pada Remote Manager

1. Klik tombol **Remote Manager** pada toolbar.
2. Dari dialog Remote Manager, temukan remote yang diinginkan.
3. Klik **`Open`** untuk membukanya di panel penjelajah file.

:::tip Akses Cepat dari System Tray
Anda dapat membuka remote dengan cepat dengan mengklik ikon RcloneView di system tray dan memilih remote dari daftar.  
<img src="/support/images/en/howto/rcloneview-basic/open-remote-via-system-tray.png" alt="open remote via system tray" class="img-small img-left" />
:::

### Mengedit Pengaturan Remote


Anda dapat mengubah pengaturan remote yang sudah ada menggunakan salah satu metode berikut:

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/edit-remote-from-explorer-panel.png" alt="edit remote from explorer panel" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/edit-remote-from-remote-manager.png" alt="edit remote from remote manager" class="img-medium img-center" />
</div>


#### Metode 1: Mengedit dari Panel Explorer  

Jika Anda sedang menjelajahi remote di **Panel Explorer**, klik **ikon gerigi (⚙️)** yang terletak di sudut kanan atas panel remote aktif.

Ini akan membuka dialog **Edit Remote**, tempat Anda dapat memperbarui nilai **Provider** dan **Options** dari remote yang dipilih.  

 ⚠️ **Catatan:** Anda tidak dapat mengganti nama remote di sini.


#### Metode 2: Mengedit dari Remote Manager  

1. Klik tombol **Remote Manager** pada toolbar utama di bawah menu **Remote**.  
2. Di jendela **Remote Manager**, temukan remote yang ingin Anda edit.  
3. Klik tombol **Edit** pada kartu remote untuk membuka dialog **Edit Remote**.

Metode ini juga memungkinkan Anda mengubah **Provider** dan **Options**, tetapi **nama remote** tetap tidak berubah.


### Menghapus Remote


Jika Anda tidak lagi memerlukan remote yang telah dikonfigurasi, Anda dapat menghapusnya dengan aman menggunakan **Remote Manager**.

<img src="/support/images/en/howto/rcloneview-basic/delete-remote.png" alt="delete remote" class="img-medium img-center" />

1. Dari tab **Remote** di menu bagian atas, klik tombol **Remote Manager** pada toolbar.
2. Di jendela **Remote Manager**, temukan remote yang ingin Anda hapus.
3. Klik tombol **`Delete`** pada kartu remote yang bersangkutan.

Tindakan ini akan:
- Menghapus remote secara permanen dari konfigurasi Anda.
- Otomatis menutupnya dari panel Explorer jika sedang terbuka.
