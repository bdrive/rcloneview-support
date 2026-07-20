---
sidebar_position: 9
description: Ubah lokasi penyimpanan database SQLite RcloneView (rclone_view.db) dan pilih folder yang aman serta dapat ditulis untuk history, job, mount, dan status UI.
keywords:
  - rcloneview
  - database
  - rclone_view.db
  - settings
  - path settings
  - job history
  - transfer history
  - sqlite
  - backup
tags:
  - RcloneView
  - Tutorial
  - settings
  - backup
  - database
date: 2025-12-08
author: tayson
---

# Mengubah Lokasi Penyimpanan Database

RcloneView menyimpan status intinya dalam file SQLite bernama **`rclone_view.db`**. Database ini menyimpan riwayat transfer, definisi job, pengaturan mount, riwayat eksekusi job, dan status UI—semua yang dibutuhkan aplikasi untuk "mengingat apa yang Anda lakukan" dan "menampilkan status saat ini" di antarmuka.

Secara default, database berada di folder Documents Anda. Anda dapat memindahkannya ke lokasi lain yang dapat ditulis, seperti drive eksternal atau folder pencadangan yang tersinkronisasi.

<img src="/support/images/en/tutorials/database/database-windows-path.png" class="img-medium img-center" alt="Default database path on Windows" />

## Jalur database default berdasarkan OS

| Platform | Jalur default                              |
| -------- | ------------------------------------------ |
| Windows  | `C:\Users\<user>\Documents\rclone_view.db` |
| macOS    | `/Users/<user>/Documents/rclone_view.db`   |
| Linux    | `/home/<user>/Documents/rclone_view.db`    |

## Cara mengubah lokasi database

Anda dapat memilih folder yang dapat ditulis (lokal atau eksternal) langsung dari dalam RcloneView.

### Langkah 1 — Buka Settings

- Buka **Settings → General Settings** pada menu atas.  
  <img src="/support/images/en/tutorials/database/database-settings-menu.png" class="img-medium img-center" alt="Open Settings menu" />

### Langkah 2 — Embedded Rclone → Path Settings

- Di jendela Settings, buka **Embedded Rclone → Path Settings**.
- Klik **Database folder** untuk memilih lokasi baru bagi `rclone_view.db`.  
  <img src="/support/images/en/tutorials/database/database-settings-dlg.png" class="img-medium img-center" alt="Database folder picker" />

- Gunakan ikon folder untuk menelusuri direktori target; RcloneView akan menempatkan `rclone_view.db` di sana.

## Peringatan izin dan jalur

RcloneView menguji izin tulis dengan membuat file sementara di folder yang dipilih. Folder sistem tertentu memblokir penulisan untuk pengguna standar dan akan memicu peringatan:

- **Windows**: `C:\Program Files`, `C:\Windows`, dll.
- **macOS**: `/Applications`, `/System`, `/usr`, dll.
- **Linux**: `/usr`, `/opt`, `/etc`, dll.

<img src="/support/images/en/tutorials/database/database-settings-warning.png" class="img-medium img-center" alt="Permission warning" />

Jika Anda melihat peringatan ini, pilih jalur lain yang memiliki akses tulis penuh.

## Lokasi yang direkomendasikan

- `C:\Users\<user>\Documents`
- `C:\Users\<user>\AppData\Roaming`
- Folder pribadi mana pun yang Anda miliki dengan izin tulis
- Drive eksternal yang Anda kendalikan (pastikan ada akses tulis)

Hindari lokasi yang lambat atau dibatasi izinnya, dan perhatikan bahwa network share dapat menimbulkan latensi.

## Tips perawatan database

- Hindari folder yang dilindungi sistem.
- Jika menggunakan folder cloud-sync, pilih layanan yang dapat mensinkronisasi file kecil secara andal (misalnya, OneDrive, Dropbox).
- Cadangkan `rclone_view.db` secara berkala.
- Hindari jalur jaringan dengan latensi tinggi untuk database yang sedang aktif digunakan.

## Ringkasan singkat

| Item                | Detail                                                      |
| ------------------- | ------------------------------------------------------------ |
| File database       | `rclone_view.db`                                           |
| Yang disimpan       | Riwayat transfer, job, mount, status UI                    |
| Jalur default       | Folder Documents pengguna                                  |
| Mengubah jalur       | Settings → Embedded Rclone → Path Settings                 |
| Pemeriksaan izin    | Uji penulisan file sementara                                |
| Lokasi terbaik      | Folder yang dapat ditulis pengguna (Documents, Roaming, drive eksternal) |

Pilih lokasi yang stabil dan dapat ditulis untuk `rclone_view.db` agar RcloneView tetap andal dan riwayat Anda tetap utuh.
