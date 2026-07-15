---
sidebar_position: 2
description: "Perbaiki masalah Desktop, Documents, atau Downloads yang tidak muncul di RcloneView pada macOS dengan memberikan izin, mengaktifkan Full Disk Access, dan mengumpulkan log untuk dukungan."
keywords:
  - rcloneview
  - macos
  - izin
  - file dan folder
  - full disk access
  - pemecahan masalah
  - faq
tags:
  - RcloneView
  - macOS
  - Troubleshooting
  - FAQ
  - Permissions
date: 2025-11-07
author: Jay
---
# Tidak Bisa Melihat Folder Lokal di Mac (Desktop/Documents/Downloads)

Jika Anda baru saja menginstal RcloneView di macOS dan tidak dapat melihat folder seperti **Desktop**, **Documents**, atau **Downloads** di panel "Local Disk" sebelah kiri, ini hampir selalu merupakan masalah izin privasi macOS. Panduan ini menunjukkan cara memberikan akses dan apa yang harus dicoba jika folder masih tampak kosong.

Untuk tur singkat mengenai Explorer itu sendiri, lihat: [Browse and Manage Remote Storage](/howto/rcloneview-basic/browse-and-manage-remote-storage).

## Mengapa Ini Terjadi

Sejak macOS 10.15 (Catalina), Apple mewajibkan aplikasi untuk meminta izin sebelum mengakses folder yang dilindungi seperti Desktop, Documents, dan Downloads. Jika Anda mengklik "Don't Allow" atau aplikasi belum memiliki izin, folder-folder tersebut akan tampak kosong di RcloneView.

## Saat Munculnya Popup Izin

Anda mungkin akan melihat dialog macOS pada saat pertama kali membuka RcloneView atau ketika mengklik folder yang dilindungi.

1) Jika Anda melihat popup yang meminta akses ke folder Documents, klik **Allow**.

<img src="/support/images/en/howto/FAQ/mac-allow-access-to-folder-and-files1.png" alt="mac allow access to folder and files1" class="img-medium img-center" />

2) Jika Anda mengklik folder yang dilindungi (misalnya, Downloads) di panel kiri dan prompt serupa muncul, klik **Allow**.

<img src="/support/images/en/howto/FAQ/mac-allow-access-to-folder-and-files2.png" alt="mac allow access to folder and files2" class="img-medium img-center" />

3) Jika Anda mengklik **Don't Allow**, folder akan tampak kosong sampai izin diberikan.

<img src="/support/images/en/howto/FAQ/empth-folder-by-dont-allow.png" alt="empth folder by dont allow" class="img-large img-center" />

## Perbaiki: Berikan Akses di System Settings (Tindakan Pertama)

Jika folder masih tampak kosong, atau Anda tidak sengaja mengklik "Don't Allow," berikan akses melalui macOS System Settings.

**Langkah-langkah (macOS Ventura, Sonoma, Sequoia):**

1. Buka `System Settings > Privacy & Security > Files & Folders`.
2. Temukan **RcloneView**.
3. Aktifkan toggle untuk folder yang Anda inginkan (misalnya, **Documents Folder**, **Downloads Folder**).  
4. Buka kembali folder tersebut di RcloneView.

<img src="/support/images/en/howto/FAQ/change-setting-for-accessing-to-files-and-folders.png" alt="change setting for accessing to files and folders" class="img-large img-center" />

Jika Anda tidak melihat RcloneView dalam daftar ini, jalankan RcloneView sekali, coba buka folder yang dilindungi, dan macOS seharusnya akan menampilkan prompt lagi.

## Masih Belum Berhasil? Tambahkan Full Disk Access (Tindakan Kedua)

Jika toggle Files & Folders sudah diaktifkan dan Anda masih tidak dapat menelusuri isinya, coba tambahkan RcloneView ke **Full Disk Access**.

1. Buka `System Settings > Privacy & Security > Full Disk Access`.
2. Klik tombol `+` dan pilih aplikasi **RcloneView** dari `Applications`.
3. Pastikan toggle diaktifkan untuk RcloneView.
4. Mulai ulang RcloneView dan coba lagi.

<img src="/support/images/en/howto/FAQ/mac-allow-full-disk-access.png" alt="mac allow full disk access" class="img-medium img-center" />

## Masih Membutuhkan Bantuan? Kumpulkan Log dan Hubungi Dukungan

Jika akses masih terblokir setelah langkah-langkah di atas, silakan kirimkan log kepada kami agar kami dapat membantu.

1. Di RcloneView, buka `Settings > Embedded Rclone`.
2. Di bawah **Logging Configuration**, aktifkan logging, pilih **Log folder**, biarkan nama file (misalnya, `rclone.log`), dan atur **Log level** ke **DEBUG**.
3. Klik **Restart Embedded Rclone** untuk menerapkan perubahan.
4. Reproduksi masalah tersebut (coba buka folder yang bermasalah), lalu kirim file log ke [rcloneview@bdrive.com](mailto:rcloneview@bdrive.com) dengan deskripsi singkat langkah-langkah yang Anda lakukan.

:::caution Restart Diperlukan
Log hanya akan tercatat setelah Anda mengklik **Restart Embedded Rclone**. Jangan lewati langkah ini.
:::

<img src="/support/images/en/howto/FAQ/setting-for-collecting-log-file.png" alt="setting for collecting log file" class="img-large img-center" />

## Panduan Terkait

- Mengelola file lokal/cloud di Explorer: [Browse and Manage Remote Storage](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- Ikhtisar lengkap Settings (termasuk Embedded Rclone dan Logging): [General Settings](/howto/rcloneview-basic/general-settings#logging-configuration)

---

Jika Anda memerlukan bantuan lebih lanjut, kirim email kepada kami di **[rcloneview@bdrive.com](mailto:rcloneview@bdrive.com)**.
