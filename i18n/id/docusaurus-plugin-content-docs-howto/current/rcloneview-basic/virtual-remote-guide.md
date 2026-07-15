---
sidebar_position: 15
description: "Pahami Virtual Remote di RcloneView dan pelajari cara menambahkan lapisan virtual Alias, Crypt, Combine, Union, dan lainnya untuk alur kerja cloud yang lebih cepat dan aman."
keywords:
  - rcloneview
  - virtual remote
  - alias
  - crypt
  - union
  - combine
  - cache
  - chunker
  - hasher
  - compress
tags:
  - RcloneView
  - virtual-remote
  - remote-storage
  - encryption
  - multi-cloud
date: 2025-12-08
author: tayson
---

# Ikhtisar dan Pengaturan Virtual Remote

Virtual Remote menambahkan lapisan fungsional di atas remote cloud yang sudah ada. Virtual Remote tidak menyimpan data itu sendiri; sebaliknya, ia membuat remote Anda saat ini lebih nyaman, cepat, aman, atau fleksibel.

---

## Apa itu Virtual Remote?

Virtual Remote adalah lapisan fitur yang:

- Memperluas remote yang sudah ada tanpa memindahkan data.
- Menyimpan data tetap di remote asli sambil menambahkan kenyamanan.
- Membantu akses yang lebih cepat, privasi, atau tampilan terpadu.

---

## Jenis-jenis Virtual Remote

RcloneView menyediakan sembilan jenis Virtual Remote:

1. **Alias**  
   Pintasan untuk langsung menuju ke folder cloud tertentu.  
   Contoh: bookmark path Google Drive yang dalam untuk akses instan.  
   👉 Lihat: [Panduan Alias Remote](/howto/remote-storage-connection-settings/alias-remote)

2. **Crypt**  
   Mengenkripsi nama file, konten, dan folder untuk privasi.  
   👉 Lihat: [Panduan Crypt Remote](/howto/remote-storage-connection-settings/crypt-remote)

3. **Memory**  
   Menyimpan data di RAM untuk penggunaan sementara yang sangat cepat; terhapus saat ditutup.

4. **Cache**  
   Mempercepat remote yang lambat dengan caching; pembacaan berulang dan streaming lebih cepat.

5. **Chunker**  
   Membagi file besar menjadi beberapa bagian (chunk) untuk melewati batas ukuran layanan dan meningkatkan stabilitas.

6. **Combine**  
   Menampilkan beberapa folder di bawah satu remote sebagai subfolder terpisah.  
   👉 Lihat: [Panduan Combine Remote](/howto/remote-storage-connection-settings/combine-remote)

7. **Union**  
   Menggabungkan beberapa folder menjadi satu tampilan terpadu.  
   👉 Lihat: [Panduan Union Remote](/howto/remote-storage-connection-settings/union-remote)

8. **Hasher**  
   Menambahkan hashing pada backend yang tidak memilikinya; berguna untuk pemeriksaan integritas.

9. **Compress**  
   Mengompresi file sebelum diunggah untuk menghemat ruang.

---

## Cara Menambahkan Virtual Remote

Semua Virtual Remote dibuat dari **New Remote > Virtual**.

<img src="/support/images/en/howto/remote-storage-connection-settings/add-remote-virtual.png" alt="add virtual remote" class="img-large img-center" />

### Langkah 1 — Buka New Remote

- Dari menu atas: **`Remote` > `New Remote`**.
- Pilih tab **`Virtual`** untuk melihat semua jenis Virtual Remote.

### Langkah 2 — Pilih jenis Virtual Remote

Setiap jenis memiliki kolom wajib masing-masing. Contoh:

- **Alias**: nama + folder target.
- **Crypt**: kata sandi enkripsi + folder target.
- **Union**: beberapa upstream `Remote:Path`.
- **Combine**: label direktori + daftar path remote.
- **Chunker**: remote sumber + pengaturan chunk.

RcloneView memandu Anda melalui input yang diperlukan untuk setiap jenis.

### Langkah 3 — Gunakan Virtual Remote

Setelah dibuat, Virtual Remote akan muncul seperti remote biasa di:

- **Remote Manager**
- Penjelajah file **Explorer**
- Dialog **Sync / Compare / Job**

Ingat: Virtual Remote adalah lapisan fitur. File sebenarnya tetap berada di path remote yang mendasarinya.

---

## Kapan Menggunakan Virtual Remote

| Kebutuhan                             | Virtual Remote yang Direkomendasikan |
| -------------------------------------- | ------------------------------------- |
| Memperkuat keamanan cloud              | Crypt                                 |
| Melihat beberapa folder secara bersama | Union                                 |
| Bookmark atau merapikan path yang rumit| Alias                                 |
| Mengatur proyek yang kompleks          | Combine                               |
| Mengunggah file yang sangat besar      | Chunker                               |
| Mempercepat pembacaan berulang         | Cache                                 |
| Memverifikasi integritas data          | Hasher                                |
| Menghemat penyimpanan dengan kompresi  | Compress                              |

---

## Referensi Cepat

| Virtual Remote | Peran                                          |
| --------------- | ----------------------------------------------- |
| Alias           | Pintasan folder                                  |
| Crypt           | Penyimpanan terenkripsi                          |
| Memory          | Penyimpanan sementara berbasis RAM               |
| Cache           | Peningkatan kecepatan melalui caching            |
| Chunker         | Memecah file besar untuk diunggah                |
| Combine         | Mengelompokkan beberapa folder sebagai tampilan terpisah |
| Union           | Menggabungkan beberapa folder menjadi satu tampilan |
| Hasher          | Menambahkan hashing untuk pemeriksaan integritas |
| Compress        | Mengompresi file sebelum diunggah                |

Virtual Remote membuat alur kerja cloud lebih andal dan fleksibel. Di RcloneView, Anda dapat mengaktifkan kemampuan ini hanya dengan beberapa klik—tanpa pengaturan yang rumit.
