---
sidebar_position: 14
description: Salin jalur folder lengkap—termasuk nama remote—dalam satu langkah dari Path bar RcloneView untuk perintah dan otomatisasi yang presisi.
keywords:
  - rcloneview
  - rclone
  - copy path
  - remote path
  - path bar
  - automation
  - terminal
tags:
  - RcloneView
  - path-bar
  - copy-path
  - rclone
date: 2025-12-05
author: tayson
---

# Menggunakan Fitur Copy Full Path di RcloneView

Fitur **Copy Full Path** memungkinkan Anda mengambil seluruh jalur folder — secara opsional beserta nama remote — dalam satu tindakan. Fitur ini sangat cocok untuk menulis perintah `rclone`, menjalankan pengujian di Terminal, membagikan jalur cloud yang tepat, dan menghindari kesalahan dalam skrip.

---

## Di Mana Menemukan Copy Full Path

Anda dapat mengakses Copy Full Path dari **Path bar** di bagian atas Remote File Browser.  
<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path.png" alt="copy full path path bar" class="img-medium img-center" />

Klik kanan pada Path bar untuk melihat opsi berikut:

- **Cut**
- **Copy**
- **Paste**
- **Copy Full Path (with Remote)**
- **Select All**

<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-all.png" alt="copy full path context menu" class="img-medium img-center" />

---

## Select All — Menyorot Seluruh Jalur

Memilih **Select All** akan menyorot seluruh teks pada kolom Path sehingga Anda dapat menyalinnya dengan cepat.  
<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-select-all.png" alt="copy full path select all" class="img-medium img-center" />

Setelah disalin dan ditempel (misalnya, ke Notepad), nama folder lokal (misalnya, `Meet recordings`) akan muncul persis seperti yang ditampilkan.  
<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-select-copy-notepad.png" alt="copy full path notepad" class="img-medium img-center" />

---

## Copy Full Path (with Remote) — Remote + Jalur Folder

**Copy Full Path (with Remote)** akan menangkap:

- Nama remote
- Jalur folder lengkap
- Format `remote:path` yang tepat untuk `rclone`

Contoh hasil:

```
mygoogledrive:Meet recordings
```

<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-select-copy-full-path.png" alt="copy full path with remote" class="img-medium img-center" />

Menempelkannya ke Notepad akan menampilkan jalur yang siap digunakan:  
<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-select-copy-full-path-notepad.png" alt="copy full path with remote notepad" class="img-medium img-center" />

Format ini dapat langsung digunakan dalam perintah seperti:

```bash
rclone copy "mygoogledrive:Meet recordings" /local/backup
```

---

## Kapan Menggunakan Fitur Ini

- **Menulis perintah `rclone`**: Tempel jalur remote yang akurat secara instan.
- **Menguji jalur di Terminal**: Gunakan `remote:path` tanpa perlu mengetik ulang.
- **Menghindari kesalahan skrip**: Cegah salah ketik dalam otomatisasi atau batch job.
- **Membagikan jalur ke rekan tim**: Kirim lokasi yang presisi untuk dukungan atau kolaborasi.

---

## Referensi Cepat

| Aksi                              | Fungsinya                                  |
| --------------------------------- | ------------------------------------------ |
| **Copy**                          | Menyalin teks yang dipilih pada Path bar   |
| **Select All**                    | Memilih seluruh teks jalur                 |
| **Copy Full Path (with Remote)**  | Menyalin format `remote:path` (disarankan) |
| **Paste**                         | Menyisipkan teks clipboard ke Path bar     |

Fitur Copy Full Path terlihat sederhana, tetapi untuk otomatisasi, scripting, dan transfer yang presisi, fitur ini merupakan salah satu pendongkrak produktivitas tercepat di RcloneView.
