---
sidebar_position: 14
description: Enkripsi file konfigurasi rclone Anda dan gunakan dengan RcloneView dengan mengatur kata sandi konfigurasi di Settings.
keywords:
  - rcloneview
  - rclone config
  - encrypted config
  - config password
  - security
  - rclone.conf
tags:
  - RcloneView
  - Tutorial
  - security
  - settings
  - rclone config
date: 2026-02-12
author: ysh
---

# Menggunakan File Konfigurasi Rclone Terenkripsi

Rclone dapat mengenkripsi file konfigurasinya (`rclone.conf`) sehingga kredensial remote tidak disimpan dalam bentuk teks biasa. RcloneView sepenuhnya mendukung file konfigurasi terenkripsi — Anda hanya perlu memberi tahu kata sandinya.

Tutorial ini membahas:

- Mengapa perlu mengenkripsi konfigurasi rclone Anda
- Cara mengenkripsi konfigurasi yang sudah ada dengan `rclone config`
- Cara memasukkan kata sandi konfigurasi di RcloneView

---

## Mengapa mengenkripsi konfigurasi rclone Anda?

File `rclone.conf` Anda berisi kredensial (token, kata sandi, kunci API) untuk setiap remote yang telah Anda konfigurasikan. Secara default, kredensial ini disimpan dalam bentuk teks biasa. Mengenkripsi file konfigurasi melindungi kredensial tersebut jika seseorang mendapatkan akses ke mesin atau pencadangan Anda.

- Mencegah paparan kredensial dalam bentuk teks biasa.
- Menambahkan lapisan keamanan pada sistem yang digunakan bersama atau multi-pengguna.
- Bekerja dengan semua remote dan fitur rclone — tidak ada yang berubah kecuali file tersebut dienkripsi saat disimpan.

---

## Langkah 1: Enkripsi konfigurasi rclone Anda

Buka terminal dan jalankan:

```bash
rclone config
```

Anda akan melihat menu pilihan. Pilih **`s`** untuk **Set configuration password**:

```
s) Set configuration password
q) Quit config
s/q> s
```

Masukkan kata sandi yang Anda inginkan saat diminta, lalu konfirmasikan. Rclone akan mengenkripsi file konfigurasi yang sudah ada di tempatnya.

:::tip
Jika Anda sudah memiliki remote yang dikonfigurasi, remote tersebut akan tetap berfungsi. Rclone akan mengenkripsi ulang seluruh file dengan kata sandi baru Anda.
:::

:::caution
Ingat kata sandi ini. Jika Anda lupa, Anda perlu mengonfigurasi ulang remote Anda dari awal.
:::

---

## Langkah 2: Masukkan kata sandi konfigurasi di RcloneView

1. Buka **Settings** (dari menu atas).
2. Buka tab **Embedded Rclone**.
3. Gulir ke bawah ke **Advanced Options**.
4. Di kolom **Config Password**, masukkan kata sandi yang sama dengan yang Anda atur di Langkah 1.
5. Klik **Restart Embedded Rclone**.

<img src="/support/images/en/tutorials/encrypted-config/settings-config-password.png" class="img-large img-center" alt="Config Password field in Embedded Rclone settings" />

Selesai — RcloneView akan mendekripsi dan menggunakan konfigurasi terenkripsi Anda secara otomatis. Remote Anda akan muncul dan berfungsi seperti biasa.

---

## Ringkasan

| Item | Deskripsi |
| --- | --- |
| Fungsi | Menggunakan file konfigurasi rclone terenkripsi dengan RcloneView |
| Enkripsi | Jalankan `rclone config` → `s) Set configuration password` |
| Pengaturan RcloneView | Settings → Embedded Rclone → Advanced Options → Config Password |
| Terapkan | Klik **Restart Embedded Rclone** setelah memasukkan kata sandi |
| Paling cocok untuk | Melindungi kredensial pada sistem yang digunakan bersama atau sensitif |
