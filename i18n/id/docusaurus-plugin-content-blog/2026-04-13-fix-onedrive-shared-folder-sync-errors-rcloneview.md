---
slug: fix-onedrive-shared-folder-sync-errors-rcloneview
title: "Perbaiki Error Sinkronisasi Folder Bersama OneDrive — Selesaikan dengan RcloneView"
authors:
  - tayson
description: "Atasi kegagalan sinkronisasi folder bersama OneDrive di RcloneView. Perbaiki error izin akses, shared drive yang hilang, dan masalah akses saat menyinkronkan konten OneDrive yang dibagikan."
keywords:
  - OneDrive shared folder sync error
  - OneDrive sync fix
  - OneDrive shared drive RcloneView
  - fix OneDrive permissions
  - OneDrive shared folder access
  - Microsoft OneDrive troubleshooting
  - OneDrive sync problem
  - RcloneView OneDrive error
  - OneDrive for Business sync
  - cloud sync troubleshooting
tags:
  - RcloneView
  - onedrive
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Perbaiki Error Sinkronisasi Folder Bersama OneDrive — Selesaikan dengan RcloneView

> Diagnosis dan perbaiki kegagalan sinkronisasi folder bersama OneDrive di RcloneView — mulai dari error izin akses dan shortcut yang hilang hingga masalah akses OneDrive for Business organisasi.

Sistem folder bersama OneDrive memiliki nuansa yang sering membuat banyak alat sinkronisasi tersandung. Folder yang dibagikan kepada Anda oleh rekan kerja tidak berperilaku sama seperti penyimpanan OneDrive milik Anda sendiri — folder tersebut muncul secara berbeda di API dan memerlukan konfigurasi khusus agar dapat diakses dengan rclone. Ketika RcloneView tidak dapat melihat atau menyinkronkan folder bersama, akar penyebabnya hampir selalu merupakan salah satu dari beberapa masalah yang sudah dikenal. Panduan ini membahas kegagalan sinkronisasi folder bersama yang paling umum dan cara mengatasinya.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Folder Bersama Tidak Terlihat di RcloneView

OneDrive menampilkan folder bersama secara berbeda dari penyimpanan Anda sendiri. Folder yang dibagikan dari OneDrive pengguna lain muncul di bagian "Shared" pada antarmuka web, tetapi folder tersebut tidak secara otomatis menjadi bagian dari folder root Anda di API kecuali Anda telah menambahkannya sebagai Shortcut ke OneDrive Anda.

**Perbaikan:** Di antarmuka web OneDrive, temukan folder bersama yang perlu Anda sinkronkan dan klik "Add shortcut to My files." Ini akan membuat shortcut di root OneDrive Anda sendiri yang dapat diakses melalui API standar — dan karenanya terlihat serta dapat disinkronkan di RcloneView. Setelah menambahkan shortcut, muat ulang File Explorer RcloneView dengan menekan F5 atau mengklik Reload.

<img src="/support/images/en/blog/new-remote.png" alt="OneDrive shared folder access configuration in RcloneView" class="img-large img-center" />

## Error Izin Akses Saat Menyinkronkan Folder Bersama

Error 403 Forbidden atau "access denied" saat menyinkronkan folder bersama OneDrive biasanya menunjukkan salah satu dari tiga situasi berikut:

1. **Berbagi hanya-baca:** Pemilik folder membagikannya dengan izin view-only. Anda tidak dapat menulis atau menghapus di dalamnya. Jika Anda mencoba menyinkronkan dalam arah yang memerlukan akses tulis, konfirmasikan kepada pemilik folder bahwa Anda memiliki izin Edit.

2. **Keterbatasan akses tamu (guest):** Akun eksternal (guest) pada OneDrive for Business memiliki akses API yang dibatasi. Beberapa operasi sinkronisasi diblokir oleh kebijakan berbagi organisasi.

3. **Kebijakan Conditional Access:** Tenant Microsoft 365 korporat mungkin menerapkan kebijakan Conditional Access yang membatasi akses API dari perangkat atau aplikasi yang tidak sesuai (non-compliant). Hubungi administrator IT Anda jika Anda menerima kegagalan autentikasi yang berulang meskipun sudah berhasil login.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Diagnosing OneDrive shared folder permission errors in RcloneView" class="img-large img-center" />

## Masalah Shared Library pada OneDrive for Business

Library yang didukung SharePoint (termasuk document library SharePoint yang ditampilkan sebagai folder OneDrive) memerlukan pengaturan remote terpisah di RcloneView. Alih-alih menggunakan remote OneDrive pribadi, tambahkan remote SharePoint yang mengarah ke URL situs, atau gunakan OneDrive for Business dengan konfigurasi situs SharePoint yang sesuai.

Untuk tim yang sering mengalami error panjang path pada OneDrive for Business, flag `--onedrive-no-versions` milik rclone dapat mengurangi overhead API untuk operasi sinkronisasi. Tambahkan flag kustom melalui Settings > Embedded Rclone > Global Rclone Flags di RcloneView.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing OneDrive sync job history and error logs in RcloneView" class="img-large img-center" />

## Melakukan Autentikasi Ulang untuk Token yang Sudah Basi

Token OAuth OneDrive dapat kedaluwarsa atau menjadi tidak valid — terutama setelah perubahan kata sandi, pembaruan autentikasi multi-faktor, atau peristiwa keamanan akun. Token yang basi tampak sebagai error 401 Unauthorized yang berulang selama sinkronisasi.

Untuk melakukan autentikasi ulang, buka Remote Manager di tab Remote RcloneView, pilih remote OneDrive Anda, lalu edit. Alur edit akan meminta Anda menjalankan ulang proses OAuth, membuka jendela browser untuk autentikasi baru. Setelah menyelesaikan login baru, simpan remote yang telah diperbarui dan coba lagi tugas sinkronisasi tersebut.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Untuk folder bersama, tambahkan terlebih dahulu sebagai "Shortcuts to My files" di antarmuka web OneDrive.
3. Konfirmasikan Anda memiliki izin yang tepat (Edit, bukan hanya View) untuk folder yang perlu Anda sinkronkan.
4. Lakukan autentikasi ulang pada remote OneDrive Anda jika Anda mengalami error 401 yang berulang.

Sebagian besar masalah folder bersama OneDrive bermuara pada perbedaan tingkat API Microsoft antara folder yang dimiliki, dibagikan, dan shortcut — memahami hal ini membuat pemecahan masalah menjadi jauh lebih langsung.

---

**Panduan Terkait:**

- [Kelola Sinkronisasi Cloud dan Pencadangan OneDrive dengan RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Perbaiki Error Sinkronisasi OneDrive: Delta Token dan Panjang Path dengan RcloneView](https://rcloneview.com/support/blog/fix-onedrive-sync-errors-delta-token-path-length-rcloneview)
- [Perbaiki Error Sinkronisasi Cloud OAuth Token Expired dengan RcloneView](https://rcloneview.com/support/blog/fix-oauth-token-expired-cloud-sync-rcloneview)

<CloudSupportGrid />
