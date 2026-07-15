---
sidebar_position: 11
description: "Pelajari cara menambahkan remote Google Drive ke Rclone eksternal yang berjalan di AWS EC2 tanpa menggunakan browser web, menggunakan token OAuth yang dibuat secara lokal."
keywords:
  - rcloneview
  - rclone
  - google drive
  - OAuth
  - token
  - ec2
  - external rclone
  - no browser login
  - headless
  - cloud storage
  - Remote Connection
  - remote storage
tags:
  - Remote-Storage
  - google-drive
  - external-rclone
  - aws-ec2
  - remote-connection
  - cloud-storage
date: 2025-07-07
author: Jay
---
# Menambahkan Google Drive ke Rclone Eksternal di AWS EC2 (Tanpa Browser Web)

Panduan ini menjelaskan cara menambahkan **remote Google Drive** ke **instance Rclone eksternal** yang berjalan pada sistem tanpa browser web yang tersedia, seperti **server AWS EC2 Ubuntu**.

Pada lingkungan seperti ini, menyelesaikan alur login OAuth standar melalui browser tidak dimungkinkan. Sebagai gantinya, Anda dapat menggunakan instalasi RcloneView lokal untuk mendapatkan **token OAuth** yang diperlukan, lalu menggunakannya kembali pada Rclone eksternal yang berjalan di EC2.

:::info Menjalankan Daemon Rclone di EC2
Untuk instruksi cara menginstal dan menjalankan Rclone pada instance EC2,

lihat: 👉 [Cara Menjalankan Rclone Engine di AWS EC2](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)

:::

Prosesnya: buat token OAuth Google Drive di mesin dengan browser, lalu tempel token tersebut ke Rclone eksternal yang berjalan di EC2 melalui RcloneView.

---
## ✅ Langkah 1: Buat token Google Drive (pilih salah satu metode)

**Metode A: `rclone authorize "drive"` (tercepat)**

1. Pada mesin dengan browser dan versi rclone yang sama, jalankan:
   ```bash
   rclone authorize "drive"
   ```
2. Selesaikan login/persetujuan Google di browser.
3. Salin blok token JSON yang ditampilkan (simpan seluruh JSON). Anda akan menempelkan ini ke EC2 pada Langkah 3.

**Metode B: Gunakan remote embedded RcloneView dan salin tokennya**

1. Pada PC lokal Anda, tambahkan Google Drive menggunakan Rclone embedded (OAuth browser normal).  
   👉 [Panduan Cepat: Menambahkan Remote Google Drive](../#step-2-adding-remote-storage-google-drive-example)
2. Buka **Remote Manager**, edit remote Google Drive, klik **Show advanced options**, lalu salin kolom **Token** (JSON).

<img src="/support/images/en/howto/remote-storage-connection-settings/copy-google-oauth-token-from-embedded-rclone.png" alt="copy google oauth token from embedded rclone" class="img-medium img-center" />

👉 Selengkapnya tentang mengedit remote: [Edit Pengaturan Remote](/howto/rcloneview-basic/remote-manager#edit-remote-settings)

---

## ✅ Langkah 2: Hubungkan ke Rclone Eksternal (EC2)

Buka **`jendela baru`** atau gunakan sesi Anda saat ini di RcloneView untuk terhubung ke Rclone yang di-hosting di EC2 Anda:

- Buka `Settings` -> **`Connection Manager`** untuk membuat koneksi baru ke Rclone yang di-hosting di EC2 Anda, atau terhubung ke koneksi yang sudah ada jika sudah dikonfigurasi.

👉 Pelajari selengkapnya: [Menghubungkan Rclone Eksternal](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)  
👉 Pelajari selengkapnya: [Fitur Jendela Baru](/howto/rcloneview-advanced/multi-window#new-window-feature-managing-both-models)

---

## ✅ Langkah 3: Menambahkan remote Google Drive ke Rclone eksternal (tempel token Anda)

1. Pada jendela yang terhubung ke EC2, buka menu `Remote` dan pilih **`+ New Remote`**.
2. Pilih **Google Drive** sebagai provider.
3. Masukkan **`Remote Name`** dan klik **`Show advanced options`**.
4. Tempel **OAuth Token** yang sebelumnya disalin ke kolom **`Token`**.
5. Klik tombol **`Add Remote`** untuk menyelesaikan penyiapan seperti biasa.


<img src="/support/images/en/howto/remote-storage-connection-settings/copy-google-oauth-token-to-external-rclone.png" alt="copy google oauth token to external rclone" class="img-medium img-center" />

:::info **Abaikan Pesan Error Ini**
**Jika RcloneView menampilkan pesan error seperti di bawah ini, Anda dapat mengabaikannya dengan aman.**
Dalam kebanyakan kasus, konfigurasi token berhasil diselesaikan meskipun pesan ini muncul.
Setelah menutup dialog, Anda seharusnya dapat mengakses Google Drive secara normal.  
Ini adalah masalah UI yang sudah diketahui, dan kami akan meningkatkan pengalaman pengguna pada rilis berikutnya.
<img src="/support/images/en/howto/remote-storage-connection-settings/token-input-error-message.png" alt="token input error message" class="img-small img-left" />
:::
Setelah dikonfigurasi, Rclone berbasis EC2 Anda kini dapat mengakses Google Drive bahkan tanpa dukungan browser. Anda dapat mengelola, melakukan sinkronisasi, dan transfer file menggunakan RcloneView seperti biasa.

---

## 🔗 Panduan Terkait

- [Cara Menjalankan Rclone Engine di AWS EC2](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)
- [Menambahkan Remote Google Drive](/howto/#step-2-adding-remote-storage-google-drive-example)
- [Edit Pengaturan Remote](/howto/rcloneview-basic/remote-manager#edit-remote-settings)
- [Menghubungkan Rclone Eksternal](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)
- [Penggunaan Multi-Jendela](/howto/rcloneview-advanced/multi-window#new-window-feature-managing-both-models)
