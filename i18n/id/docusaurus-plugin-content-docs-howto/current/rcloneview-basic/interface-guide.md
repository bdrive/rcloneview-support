---
sidebar_position: 1
description: "Penjelasan visual tata letak RcloneView, termasuk title bar, menu utama, file explorer, dan tab transfer."
keywords:
  - rcloneview
  - rclone GUI
  - cloud file manager
  - remote storage management
  - file explorer
  - cloud to cloud transfer
  - file synchronization
  - rcloneview interface
  - rcloneview layout
  - toolbar
  - transfer status
tags:
  - RcloneView
  - UI-guide
  - file-explorer
  - Remote-Storage
  - layout
  - interface
  - cloud-file-transfer
  - Remote-storage-managent
date: 2025-05-27
author: Jay
---
# Panduan Antarmuka RcloneView

RcloneView memiliki tata letak yang intuitif sehingga pengguna dapat menjelajahi, membandingkan, dan mentransfer file antara penyimpanan lokal dan remote cloud. Berikut adalah penjelasan setiap bagian secara mendetail.

<img src="/support/images/en/howto/rcloneview-basic/rcloneview-user-interface.png" alt="rcloneview user interface" class="img-large img-center" />
## ① Title Bar

Menampilkan nama aplikasi dan tombol kontrol jendela standar:

- `—`: Minimize
- `□`: Maximize / Restore
- `X`: Keluar dari RcloneView

## ② Main Menu Bar

Tab navigasi utama untuk mengakses fitur inti:

- **`Home`** – Alat untuk sinkronisasi dan perbandingan file, penjadwalan job, dan dukungan multi-jendela  
- **`Remote`** – Menambah, mengonfigurasi, dan mount remote penyimpanan cloud  
- **`Settings`** – Mengelola koneksi remote, preferensi umum, dan tata letak antarmuka  
- **`Help`** – Mengakses dukungan produk, aktivasi lisensi, umpan balik, dan pemeriksaan pembaruan  

## ③ Toolbar

Toolbar berubah secara dinamis sesuai dengan tab menu yang dipilih:

  ### Saat `Home` dipilih:

| Tombol        | Deskripsi                                                                          |
| ------------- | ------------------------------------------------------------------------------------ |
| `Sync`        | Menyinkronkan file dan folder antara direktori yang dipilih di dua panel explorer |
| `Compare`     | Membandingkan perbedaan antara direktori yang dipilih di dua panel explorer           |
| `Job Manager` | Membuat dan mengelola job sinkronisasi berulang antara remote yang sering digunakan     |
| `New Window`  | Membuka jendela RcloneView baru untuk terhubung ke instance Rclone daemon yang berbeda        |
 
### Saat `Remote` dipilih:

<img src="/support/images/en/howto/rcloneview-basic/remote-tab-toolbar.png" alt="remote tab toolbar" class="img-medium img-center" />

| Tombol           | Deskripsi                                                                      |
| ---------------- | ---------------------------------------------------------------------------------- |
| `New Remote`     | Membuat koneksi baru ke remote penyimpanan cloud                                |
| `Remote Manager` | Melihat, mengedit, atau menghapus remote yang tersimpan                                              |
| `Mount Manager`  | Mount remote sebagai drive lokal                                                  |
| `Job Manager`    | Membuat dan mengelola job sinkronisasi berulang antara remote yang sering digunakan |
  
### Saat `Settings` dipilih:
<img src="/support/images/en/howto/rcloneview-basic/settings-menu-toolbar.png" alt="settings menu toolbar" class="img-medium img-center" />

| Tombol             | Deskripsi                                                                                                  |
| ------------------ | ------------------------------------------------------------------------------------------------------------ |
| `Connect Manager`  | Mengelola dan beralih antara koneksi Rclone daemon internal atau eksternal                                     |
| `General settings` | Mengonfigurasi bahasa aplikasi, jalur file, tema, perilaku drag-and-drop, opsi Rclone internal, dan lainnya. |
| `Layout`           | Beralih antara tata letak panel horizontal dan vertikal untuk tampilan folder tree dan daftar file                   |
| `View count`       | Beralih antara tampilan file explorer satu panel dan dua panel                                                 |

### Saat `Help` dipilih:
<img src="/support/images/en/howto/rcloneview-basic/help-menu-toolbar.png" alt="help menu toolbar" class="img-medium img-center" />

| Tombol                 | Deskripsi                           |
| ---------------------- | ------------------------------------- |
| `Check for Updates`    | Memeriksa apakah versi baru tersedia   |
| `Feedback`             | Mengirim umpan balik atau melaporkan masalah      |
| `Homepage`             | Mengunjungi situs resmi RcloneView |
| `Register License Key` | Mengaktifkan lisensi PLUS Anda            |

## ④ File Explorer Pane

Setiap panel memungkinkan Anda menjelajahi drive lokal atau remote cloud menggunakan antarmuka bertab.  
Anda dapat membuka sumber yang berbeda di setiap panel dan mentransfer file di antara keduanya dengan mudah.

  <img src="/support/images/en/howto/rcloneview-basic/file-explorer-pannel-layout.png" alt="file explorer panel layout" class="img-medium img-center" />
Panel ini mencakup komponen berikut:

1. **Tab Bar** – Menampilkan koneksi saat ini (misalnya, Local Disk, myAwsS3, myGoogleDrive)  
2. **Breadcrumb Path Bar** – > Menampilkan jalur folder saat ini dan mendukung navigasi cepat dengan mengklik atau mengetik dengan saran otomatis. 
3. **Pane Toolbar** – Mencakup aksi cepat:  
	- <img src="/support/icons/alias-icon.png" alt="alias icon" class="inline-icon" /> **Create Alias (Favorite)** — Menyimpan folder saat ini sebagai favorit untuk akses cepat  
	- <img src="/support/icons/mount-icon.png" alt="mount icon" class="inline-icon" />**Mount Folder** — Mount folder yang dipilih sebagai drive lokal  
	- <img src="/support/icons/settings-icon.png" alt="settings icon" class="inline-icon" /> **Edit Remote Settings** — Mengubah konfigurasi remote yang terhubung  
	- <img src="/support/icons/refresh-icon.png" alt="refresh icon" class="inline-icon" /> **Refresh** — Memuat ulang isi folder saat ini
4. **Folder Tree** – Navigator folder yang dapat diciutkan  
5. **File/Folder List View** – Menampilkan isi dengan nama, jenis, tanggal diubah, dan ukuran  
6. **Summary Footer** – Menampilkan jumlah total file/folder dan total ukuran file

## ⑤ Transfer Status Tabs

Menampilkan status dan riwayat operasi sinkronisasi atau transfer file:

| Tab             | Deskripsi                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------- |
| **`Transfer`**  | Menampilkan semua job transfer aktif yang sedang berjalan, termasuk kecepatan, progres, dan waktu tersisa |
| **`Completed`** | Mencantumkan semua job sinkronisasi atau salin yang telah selesai dengan detail seperti waktu, ukuran, dan ID job               |
| **`Log`**       | Menampilkan entri log berstempel waktu dengan timestamp, jenis job, pesan, dan status               |
## ⑥ Footer

- **Version Info**: Versi RcloneView yang sedang berjalan (misalnya, `RcloneView 0.6.301`)
- **License Info**: Menunjukkan jenis lisensi (`FREE License` atau `PLUS License`)
- **Rclone Connection Info**: Menampilkan instance rclone yang terhubung, alamat server, dan OS
  - Contoh: `Connected to rclone v1.69.1 (http://127.0.0.1:5582, windows)`
