---
sidebar_position: 3
description: Pelajari cara menjelajahi, menyalin, dan mengelola file di penyimpanan lokal dan cloud menggunakan antarmuka drag-and-drop dan menu klik kanan RcloneView.
keywords:
  - rcloneview
  - manajemen file
  - salin file
  - pindahkan file
  - drag and drop
  - transfer file cloud
  - penyimpanan cloud
  - file explorer
  - transfer cloud ke cloud
  - remote browser
  - unggah
  - unduh
  - purge
  - hapus
tags:
  - howto
  - file-management
  - cloud-storage
  - drag-and-drop
  - cloud-file-transfer
  - file-explorer
date: 2025-05-27
author: Jay
---
# Manajemen File dengan RcloneView  

RcloneView memungkinkan Anda menjelajahi, mentransfer, dan mengatur file antara disk lokal dan berbagai layanan penyimpanan cloud dengan mudah menggunakan antarmuka yang familiar, mirip Explorer.   

Panduan ini akan membahas:   

- Menjelajahi penyimpanan remote
- Menyalin file menggunakan drag & drop
- Mengelola file dengan menu klik kanan
 
## Menjelajahi Penyimpanan Remote

Anda dapat membuka remote cloud yang terhubung dan melihatnya seperti folder lokal.

### Cara Menjelajahi Remote:

1. Klik tab **`+`** pada **Explorer pane**.
2. Pilih penyimpanan remote yang ingin Anda buka.
3. Remote yang dipilih akan terbuka di tab baru, siap untuk operasi file.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/file-explorer-open-remote.png" alt="file explorer open remote" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/file-explorer-remote-open-complete.png" alt="file explorer remote open complete" class="img-medium img-center" />
</div>

:::tip Tata Letak Tampilan
Buka **`Settings > Layout`** untuk beralih antara tampilan vertikal dan horizontal 
<img src="/support/images/en/howto/rcloneview-basic/explorer-view-layout.png" alt="explorer view layout" class="img-small img-left" />
:::

## Menyalin File menggunakan Drag and Drop

Anda dapat mentransfer file antara penyimpanan lokal dan cloud menggunakan drag & drop sederhana.
#### Menyalin Antara Dua Remote

Seret file dari satu tab remote ke tab remote lainnya di RcloneView untuk menyalinnya antar penyimpanan cloud.
<video src="/support/videos/en/howto/rcloneview-basic/rclonview-explorer-drag-and-drop.mp4" class="video-medium video-center" controls muted loop playsinline>
  rclonview explorer drag and drop
</video>

**👉  Untuk Multi-Select dan Aksi Massal**
Anda dapat memilih beberapa file sekaligus untuk melakukan operasi batch.
- Gunakan **`Ctrl + Click`** untuk memilih beberapa file individual.
- Gunakan **`Shift + Click`** untuk memilih rentang file.

**👉  Perilaku Drag & Drop **
- **Remote yang sama** = Operasi pindah (Move)  
- **Remote yang berbeda** = Operasi salin (Copy)


:::tip Petunjuk
-  Jika Anda tidak ingin melihat popup konfirmasi saat menyalin, hilangkan centang pada kotak centang **Confirm drag and drop**.
- Untuk mengaktifkan kembali popup tersebut nanti, buka **Settings > General settings > Confirm drag and drop** dan centang kembali.
:::

#### Menyalin dari Windows Explorer ke Remote di RcloneView
- Anda juga dapat menyeret file langsung dari **Windows File Explorer** ke tab RcloneView untuk mengunggahnya ke penyimpanan cloud.
<video src="/support/videos/en/howto/rcloneview-basic/windows-explorer-drag-and-drop.mp4" class="video-medium video-center" controls muted loop playsinline>
  windows explorer drag and drop
</video>
### Mengelola File dengan Menu Klik Kanan

RcloneView mendukung operasi file lengkap melalui menu klik kanan yang praktis.

### Aksi yang Tersedia:

- <img src="/support/icons/download-icon.png" alt="download icon" class="inline-icon" />**Download** – Menyimpan file ke disk lokal Anda  
- <img src="/support/icons/upload-icon.png" alt="upload icon" class="inline-icon" />**Upload** – Mengirim file lokal ke remote cloud  
- <img src="/support/icons/copy icon.png" alt="copy icon" class="inline-icon" />**Copy / <img src="/support/icons/paste-icon.png" alt="paste icon" class="inline-icon" />Paste** – Menyalin file antar folder atau remote  
- <img src="/support/icons/cut-icon.png" alt="cut icon" class="inline-icon" />**Cut / <img src="/support/icons/paste-icon.png" alt="paste icon" class="inline-icon" />Paste** – Memindahkan file ke lokasi lain  
- <img src="/support/icons/delete-icon.png" alt="delete icon" class="inline-icon" />**Delete** – Menghapus file atau folder  
- <img src="/support/icons/rename-icon.png" alt="rename icon" class="inline-icon" />**Rename** – Mengganti nama file atau folder  
- <img src="/support/icons/new-folder-icon.png" alt="new folder icon" class="inline-icon" />**New Folder** – Membuat folder baru  
- <img src="/support/icons/refresh-icon.png" alt="refresh icon" class="inline-icon" />**Reload** – Menyegarkan konten folder
