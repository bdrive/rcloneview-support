---
sidebar_position: 10
description: Pelajari cara mengonfigurasi preferensi umum, tata letak antarmuka, Notifikasi, dan pengaturan Rclone tersemat di RcloneView.
keywords:
  - rcloneview
  - rclone
  - pengaturan rcloneview
  - preferensi umum
  - mode gelap
  - log rclone
  - konfigurasi rclone
tags:
  - RcloneView
  - settings
  - configuration
  - preferences
date: 2025-06-22
author: Jay
---
# Pengaturan Umum

Menu **Settings** RcloneView dibagi menjadi empat tab agar lebih jelas dan mudah disesuaikan:

- **General**
- **Interfaces & Notifications**
- **Embedded Rclone**
- **Network & Misc.**

Setiap tab memungkinkan Anda mengonfigurasi bagian aplikasi yang berbeda. Berikut adalah rincian tiap bagiannya.

---

## 🛠 General

<img src="/support/images/en/howto/rcloneview-basic/general-settings.png" alt="general settings" class="img-medium img-center" />
### Bahasa

- **Language**: Pilih bahasa antarmuka pengguna yang Anda inginkan dari menu dropdown.

### Perilaku Saat Startup

- **Launch at login**: Menjalankan RcloneView secara otomatis saat Anda masuk ke sistem.

:::important Auto Start: Penjadwalan dan Mounting

Saat **Launch at login** diaktifkan:  

- Setiap tugas terjadwal yang didefinisikan di [**Job Scheduler**](/howto/rcloneview-advanced/job-scheduling-and-execution) akan otomatis berjalan saat login.  
- Setiap remote yang dikonfigurasi untuk auto-mounting di [**Mount Manager**](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-1-mount-from-remote-explorer) akan otomatis di-mount saat RcloneView dijalankan.  
:::

- **Start minimized**: Menjalankan RcloneView langsung ke system tray.

- **Auto-detect Synology NAS**: Secara otomatis memindai jaringan lokal untuk mendeteksi perangkat Synology NAS.

### Reset

- **Restore Default Settings**: Mengatur ulang semua opsi ke nilai default aslinya.

---

## 🎛  Interfaces & Notifications

<img src="/support/images/en/howto/rcloneview-basic/interface-settings.png" alt="interface settings" class="img-medium img-center" />
### Tampilan UI

- **Dark mode**: Beralih antara tema terang dan gelap.
- **Theme color**: Pilih dari warna aksen yang tersedia.

### Seret dan Lepas (Drag and Drop)

- **Confirm drag and drop**: Mengaktifkan popup konfirmasi saat memindahkan file melalui drag-and-drop.

### Show Job Types (Filter Log Transfer)

Pilih jenis tugas yang ingin ditampilkan di panel Transfer Log:
- **Download**
- **Upload**
- **Sync**

<img src="/support/images/en/howto/rcloneview-basic/notification-dialogs-settings.png" alt="notification dialogs settings" class="img-medium img-center" />
### Dialog Notifikasi

Tentukan jenis notifikasi pop-up yang ingin Anda terima saat menggunakan RcloneView:

- **Show job state log**: Menampilkan dialog log terperinci setelah setiap tugas transfer selesai.
- **Show comparison completed**: Memberi notifikasi saat tugas perbandingan folder berhasil selesai.
- **Show confirmation before deleting files in compare**: Meminta konfirmasi sebelum menghapus file apa pun saat perbandingan folder.
- **Show sync completion notification**: Menampilkan pesan saat operasi sinkronisasi selesai.
- **Show network error dialog**: Memberi peringatan segera jika terjadi kesalahan koneksi jaringan selama tugas berlangsung.

---

## ⚙️ Embedded Rclone

<img src="/support/images/en/howto/rcloneview-basic/embedded-rclone-settings.png" alt="embedded rclone settings" class="img-medium img-center" />

### Siklus Hidup Embedded

- **Stop rclone on App Exit**: Secara otomatis menghentikan proses `rclone` tersemat saat RcloneView ditutup.

:::caution Restart Diperlukan Setelah Perubahan Apa Pun

Setelah mengubah pengaturan apa pun di tab **Embedded Rclone** — termasuk konfigurasi path, flag global, atau opsi logging — klik **Restart Embedded Rclone** untuk menerapkan perubahan.  
Ini akan me-restart proses Rclone tersemat dan dapat mengganggu tugas yang sedang berjalan.

:::
### Pengaturan Path

- **Local Rclone location**: Path absolut ke binary `rclone` Anda.
- **Local Rclone config location**: Path ke file `rclone.conf` Anda (berisi informasi remote).
- **Default download folder**: Direktori tempat file yang diunduh akan disimpan.
- **Default upload folder**: Direktori yang digunakan sebagai sumber untuk tugas upload.

   <img src="/support/images/en/howto/rcloneview-basic/embedded-rclone-advanced-options-settings.png" alt="embedded rclone advanced options settings" class="img-medium img-center" />
### Opsi Lanjutan

- **Global Rclone Flags**: Flag tambahan yang diteruskan ke rclone (misalnya, `--s3-directory-markers`).
- **Config Password**: Kata sandi untuk konfigurasi rclone yang terenkripsi. Jika Anda mengatur kata sandi ini, maka file konfigurasi rclone akan dienkripsi.

<img src="/support/images/en/howto/rcloneview-basic/embedded-rclone-logging-configuration-settings.png" alt="embedded rclone logging configuration settings" class="img-medium img-center" />
### Konfigurasi Logging

- **Enable rclone Logging**: Mengaktifkan logging berbasis file untuk operasi Rclone.
- **Log folder**: Direktori untuk menyimpan file log.
- **Log file name**: Nama file default untuk log.
- **Log level**: Pilih tingkat detail log (DEBUG, INFO, NOTICE, ERROR).

---

## 🌐 Network & Misc

<img src="/support/images/en/howto/rcloneview-basic/network-etc-settings.png" alt="network etc settings" class="img-medium img-center" />

### Jaringan

- **Proxy settings**: Mengonfigurasi proxy (fitur akan segera hadir).
- **Rclone connection manager**: Melihat atau mengelola koneksi Rclone yang aktif.  
  → [Baca selengkapnya](/howto/rcloneview-basic/connection-manager)

### Diagnostik

- **Application Log**: Membuka log internal untuk membantu pemecahan masalah atau pelaporan bug.

---

## ✅ Ringkasan

Pengaturan ini memungkinkan Anda mengontrol sepenuhnya bagaimana RcloneView berperilaku saat startup, bagaimana ia berinteraksi dengan Rclone, dan bagaimana ia mengomunikasikan hasil tugas atau error kepada Anda. Sesuaikan pengaturan ini dengan alur kerja Anda, baik saat menjadwalkan sinkronisasi, melakukan automount drive, atau memecahkan masalah jaringan.
