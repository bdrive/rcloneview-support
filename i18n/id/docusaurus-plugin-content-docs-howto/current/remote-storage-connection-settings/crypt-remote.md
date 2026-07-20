---
sidebar_position: 2
description: Tambahkan Crypt Remote di RcloneView untuk mengenkripsi file dan nama file di atas remote cloud yang sudah ada, sambil tetap mengakses semuanya dari dalam aplikasi.
keywords:
  - rcloneview
  - crypt
  - virtual remote
  - encrypted remote
  - cloud encryption
  - remote manager
  - privacy
tags:
  - RcloneView
  - crypt
  - remote-storage
  - encryption
  - virtual-remote
date: 2025-12-08
author: tayson
---

# Crypt

## Cara Menambahkan Crypt Menggunakan RcloneView

**Crypt Remote** menambahkan lapisan enkripsi di atas remote cloud yang sudah ada (Google Drive, OneDrive, dll.).  
File tetap berada di remote asli, sementara remote Crypt menangani enkripsi dan dekripsi.

Mengapa ini berguna:

- Mencegah provider melihat isi file.
- Juga dapat mengenkripsi nama file untuk privasi penuh.
- Dekripsi terjadi secara otomatis di dalam RcloneView.
- Ideal untuk pencadangan data sensitif.

---

## Mengapa Crypt Remote Bisa Terlihat Kosong

Pengguna sering mengharapkan untuk melihat file polos mereka di dalam remote Crypt. Namun, kenyataannya:

- Crypt hanya menampilkan file **terenkripsi**.
- File polos di remote yang mendasarinya **tidak** ditampilkan di tampilan Crypt (ini normal).

Contoh:

- `mygoogledrive:Meet Recordings` berisi file polos.
- `MyCryptGoogle:` membungkus folder yang sama dengan Crypt.
- Di remote Crypt, folder tersebut terlihat kosong—ini memang seharusnya begitu.

Saat Anda mengunggah **melalui Crypt**, file disimpan dalam bentuk terenkripsi, sehingga:

- File tersebut muncul secara normal (terdekripsi) di remote Crypt.
- File tersebut muncul dengan nama terenkripsi di remote asli.

---

## Membuat Crypt Remote melalui New Remote

### Langkah 1 — Buka **New Remote** → **Virtual** → **Crypt**

<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/new-remote-add-crypt.png" alt="new remote add crypt" class="img-large img-center" />

### Langkah 2 — Masukkan detail Crypt

Kolom yang wajib diisi:

- **Remote name**: Nama untuk remote Crypt (misalnya, `MyCryptGoogle`).
- **Remote (folder to encrypt)**: Klik pemilih folder untuk memilih remote dan folder yang sudah ada yang ingin dilindungi.

<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/virtual-add-select-remote-and-folder.png" alt="select target remote and folder for crypt" class="img-large img-center" />

Setelah memilih, tinjau pengaturannya lalu klik **Add Remote**.  
<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/virtual-add-crypt-input.png" alt="crypt input window" class="img-large img-center" />

### Langkah 3 — Konfirmasi di Remote Manager

<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/virtual-remote-manager-crypt.png" alt="remote manager crypt" class="img-large img-center" />

---

## Mengunggah dan Melihat File di Crypt Remote

Saat Anda mengunggah melalui remote Crypt:

- File akan **dienkripsi saat diunggah**.
- Tampilan Crypt menunjukkan **nama yang sudah terdekripsi** demi kenyamanan.
- Remote yang mendasarinya menunjukkan **nama file terenkripsi**.

Contoh perbandingan:  
<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/crypt-upload-file-compare.png" alt="crypt upload file compare" class="img-large img-center" />

| Lokasi tampilan                 | Yang Anda lihat                        |
| -------------------------------- | ---------------------------------------- |
| `MyCryptGoogle:`                | Nama file terlihat polos (terdekripsi) |
| `mygoogledrive:Meet Recordings` | Nama file terenkripsi (sesuai harapan) |

---

## Mengapa Menggunakan Crypt Remote

- Provider cloud tidak dapat membaca isi file.
- Nama file dapat dienkripsi untuk privasi penuh.
- Dekripsi otomatis di RcloneView membuat penggunaan tetap sederhana.
- Cocok untuk pencadangan aman, dokumen sensitif, dan drive bersama.
- Gabungkan dengan scheduler untuk pencadangan terenkripsi otomatis.

---

## Ringkasan

| Fitur                       | Deskripsi                                          |
| ---------------------------- | --------------------------------------------------- |
| **Crypt Remote**           | Lapisan enkripsi di atas remote yang sudah ada     |
| **Visibilitas file polos** | File polos disembunyikan di tampilan Crypt (normal) |
| **Unggahan melalui Crypt** | Disimpan terenkripsi; terlihat terdekripsi di tampilan Crypt |
| **Tujuan**                  | Pencadangan cloud yang aman dan perlindungan privasi |
