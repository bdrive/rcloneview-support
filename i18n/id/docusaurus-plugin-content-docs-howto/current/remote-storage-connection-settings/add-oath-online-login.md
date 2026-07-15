---
sidebar_position: 2
description: "Pelajari cara mengonfigurasi remote cloud di RcloneView menggunakan OAuth atau login berbasis browser."
keywords:
  - rcloneview
  - SSO
  - OAuth
  - Dropbox
  - Onedrive
  - Box
  - pCloud
  - Yandex
  - premiumize
  - put
  - zoho
  - google cloud storage
  - citrix
  - sharefile
  - hidrive
  - rclone
  - Remote Connection
tags:
  - SSO
  - OAuth
  - dropbox
  - onedrive
  - box
  - pcloud
  - yandex
  - premiumizw
  - PLUS-Feature
  - zoho
  - google-cloud-storage
  - citrix
  - sharefile
  - hidrive
date: 2025-06-23
author: Jay
---
# Login Otomatis (OneDrive, Box ...)

RcloneView memudahkan koneksi ke penyedia cloud utama seperti **Google Drive, OneDrive, Dropbox, Box** menggunakan login berbasis browser yang sederhana (OAuth).

:::important Tidak Ada Opsi yang Diperlukan
**✅ Untuk sebagian besar penyedia, Anda hanya perlu memasukkan nama remote.**  
**✅ Anda dapat melewati tab Options dan langsung melanjutkan ke login browser.**
:::

Saat Anda mengklik **Save**, RcloneView akan membuka jendela browser tempat Anda dapat masuk ke akun cloud Anda. Setelah login selesai, remote Anda akan otomatis ditambahkan dan siap digunakan—tanpa perlu pengaturan manual.

## Panduan Pengaturan Cepat

1. Buka **RcloneView** dan klik **`+ New Remote`** dari menu atas atau panel Explorer.
2. Pada tab **Provider**, pilih layanan cloud Anda (misalnya, Google Drive, OneDrive).
3. Lewati tab **Options** (kecuali diminta informasi tambahan). Lihat tabel di bawah untuk panduannya.
4. Lanjutkan ke langkah **Save** dan klik **Save**.
5. Jendela browser akan terbuka — masuk ke akun cloud Anda.
6. Setelah login, remote akan otomatis ditambahkan.

👉 Ingin contoh lebih detail? Lihat: [Cara Menghubungkan Google Drive](../#step-2-adding-remote-storage-google-drive-example)
## Penyedia Cloud yang Didukung & Persyaratan Pengaturan

| Penyedia Cloud               | Opsi yang Diperlukan                                              |
| --------------------------- | ---------------------------------------------------------------- |
| Google Drive                | Tidak ada                                                         |
| Google Drive Shared with Me | **Advanced Options:**<br />`shared_with_me` = **true**           |
| Google Drive Computers      | **Advanced Options:**<br />`root_folder_id` = `<ID folder Anda>` |
| Dropbox                     | Tidak ada                                                         |
| Dropbox for Business        | **Advanced Options:**<br />`dropbox_business` = **true**         |
| Microsoft OneDrive          | Tidak ada                                                         |
| Box                         | Tidak ada                                                         |
| Box for Business            | `box_sub_type = enterprise`                                      |
| pCloud                      | Tidak ada                                                         |
| Yandex Disk                 | Tidak ada                                                         |
| premiumize.me               | Tidak ada                                                         |
| put.io                      | Tidak ada                                                         |
| Zoho WorkDrive              | `Region` diperlukan                                               |
| Google Cloud Storage        | `Project Number` diperlukan                                       |
| Citrix ShareFile            | `Root Folder ID` diperlukan                                       |
| HiDrive                     | Tidak ada                                                         |

## Contoh: Google Drive Shared with Me (memerlukan Advanced Options)

**Google Drive Shared with Me** memungkinkan pengguna mengakses file dan folder yang telah dibagikan secara eksplisit oleh pengguna lain kepada mereka, tanpa menambahkannya ke drive mereka sendiri. Ini berguna saat berkolaborasi lintas organisasi atau tim tanpa menduplikasi penyimpanan.

RcloneView mendukung fitur ini melalui pengaturan opsi lanjutan (advanced option) selama konfigurasi remote.

Pada tab **Options**:

1. Gulir ke bawah dan klik **`Show advanced options`** di bagian bawah layar.
2. Temukan kolom `shared_with_me` dan atur ke **`true`** dari dropdown.
3. Biarkan opsi lainnya sebagai default kecuali diperlukan konfigurasi khusus.
4. Klik **Next**, lalu selesaikan login di browser Anda saat diminta.

:::tip
Pengaturan `shared_with_me = true` memberi tahu Rclone untuk hanya menampilkan file dan folder yang dibagikan dengan akun Google Anda.
:::

<img src="/support/images/en/howto/remote-storage-connection-settings/google-drive-shared-with-me-options.png" alt="google drive shared with me options" class="img-medium img-center" />
## Contoh: Google Drive Computers (memerlukan Advanced Options)

**Google Drive "Computers"** adalah fitur yang menyinkronkan file lokal dari perangkat Anda (misalnya, laptop atau desktop) ke cloud di bawah bagian khusus "Computers" di Google Drive. Setiap komputer muncul sebagai folder terpisah dan memerlukan `root_folder_id` yang unik untuk diakses melalui Rclone.

🔗 Pelajari lebih lanjut tentang fitur ini: [Access synced computers in Google Drive](https://support.google.com/drive/answer/3096479)

### Cara Menghubungkan Google Drive Computers di RcloneView

1. Buka [drive.google.com](https://drive.google.com/) dan klik komputer target Anda (misalnya, **My Laptop**) di bagian **Computers**.
2. Salin **Computer ID** dari URL.  
   Misalnya, pada  
   `https://drive.google.com/drive/folders/1CxHRI9sdfeeeerAW_1dThrh0W-ze0m2snZ`,  
   ID-nya adalah string setelah `folders/`:  
   `1CxHRI9sdfeeeerAW_1dThrh0W-ze0m2snZ  
3. Buka **RcloneView**, klik **`+ New Remote`** di bawah menu **Remote**, pilih **Google Drive**, lalu lanjutkan ke tab **Options**.
4. Gulir ke bawah dan klik **`Show advanced options`**.
5. Tempelkan Computer ID yang telah disalin ke kolom `root_folder_id`.
6. Klik **Next** dan ikuti login OAuth untuk menyelesaikan pengaturan.

<div class="img-grid-3">
  <img src="/support/images/en/howto/remote-storage-connection-settings/google-drive-computers-id-copy.png" alt="google drive computers id copy" class="img-medium img-center" />
  <img src="/support/images/en/howto/remote-storage-connection-settings/add-google-drive-computer-remote-options.png" alt="add google drive computer remote options" class="img-medium img-center" />
  <img src="/support/images/en/howto/remote-storage-connection-settings/add-google-drive-computers-options-root-folder-id.png" alt="add google drive computers options root folder id" class="img-medium img-center" />
</div>

✅ Setelah pengaturan selesai, Anda dapat menjelajahi dan mengakses folder Google Drive yang disinkronkan dari perangkat Anda langsung di dalam RcloneView.

## Contoh: Menghubungkan Box for Business

Pada tab **Options**:
- Pilih **enterprise** untuk `box_sub_type`
- Lanjutkan dengan pengaturan default  
- Saat diminta, masuk melalui portal SSO organisasi Anda di browser


✅ Setelah login, remote akan muncul di RcloneView dan siap digunakan.
