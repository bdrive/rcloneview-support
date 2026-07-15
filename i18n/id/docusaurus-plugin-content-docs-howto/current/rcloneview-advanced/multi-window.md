---
sidebar_position: 3
description: Pelajari cara mengelola instance Rclone embedded maupun eksternal secara bersamaan menggunakan fitur New Window di RcloneView.
keywords:
  - rcloneview
  - new window
  - multi-connection
  - external rclone
  - embedded rclone
  - multiple rclone
tags:
  - RcloneView
  - new-window
  - multi-connection
  - external-rclone
  - embedded-rclone
  - multi-windows
date: 2025-06-22
author: Jay
---
# Menggunakan Beberapa Koneksi Rclone dengan New Window

RcloneView menyediakan antarmuka yang fleksibel untuk mengelola beberapa instance Rclone secara bersamaan. Ini sangat berguna ketika bekerja dengan setup Rclone embedded maupun eksternal sekaligus.

## Arsitektur Rclone Embedded

Dalam konfigurasi default, RcloneView menyertakan binary Rclone bawaan (Embedded Rclone). Instance ini memungkinkan pengguna mengelola remote cloud melalui antarmuka GUI yang mudah digunakan.

### 🔹 Model Embedded

- RcloneView menyertakan Rclone dan berkomunikasi dengannya melalui API.
- File diakses dan dikelola langsung melalui Rclone.
- Cocok untuk sebagian besar skenario penggunaan desktop lokal.

<img src="/support/images/en/howto/rcloneview-advanced/embedded-rclone-model.png" alt="embedded rclone model" class="img-medium img-center" />
## Arsitektur Rclone Eksternal

Untuk kasus penggunaan yang lebih lanjut, seperti mengelola remote pada server jarak jauh atau instance cloud, RcloneView dapat terhubung ke instance Rclone eksternal yang berjalan di tempat lain.

### 🔹 Model Eksternal

- RcloneView terhubung ke server Rclone jarak jauh (melalui Rclone RC).
- Rclone jarak jauh bertanggung jawab untuk mengakses dan menyinkronkan penyimpanan cloud.
- Berguna untuk mengelola lingkungan Rclone yang di-hosting di cloud (misalnya, AWS EC2, server Linux).

<img src="/support/images/en/howto/rcloneview-advanced/external-rclone-model.png" alt="external rclone model" class="img-medium img-center" />
## Fitur New Window: Mengelola Kedua Model

Untuk mendukung instance Rclone embedded dan eksternal secara bersamaan, RcloneView menyertakan fitur **New Window**. Fitur ini memungkinkan pengguna meluncurkan beberapa instance GUI RcloneView, masing-masing terhubung ke backend Rclone yang berbeda.

### ✅ Manfaat Utama

- Setiap window dapat terhubung ke instance Rclone yang unik.
- Kelola lingkungan lokal dan jarak jauh secara paralel.
- Bandingkan, sinkronkan, dan salin antar cloud atau lingkungan yang berbeda dengan mulus.

### 🔸 Contoh: Home Window (Rclone Embedded)

Window ini terhubung ke Rclone bawaan yang disertakan dengan RcloneView.

<img src="/support/images/en/howto/rcloneview-advanced/rcloneview-home-window.png" alt="rcloneview home window" class="img-medium img-center" />
:::important Ikon Home untuk Window Utama
Window RcloneView utama (yang terhubung ke Rclone embedded) dapat dikenali dari **ikon home** <img src="/support/icons/home-icon.png" alt="home icon" class="inline-icon" /> yang terletak di sebelah logo RcloneView di pojok kanan atas.

:::
### 🔸 Contoh: New Window (Rclone Eksternal)

Window ini terhubung ke Rclone eksternal yang berjalan pada server Linux AWS.

:::info Cara Menjalankan Rclone Engine di AWS EC2  
Untuk mempelajari cara men-deploy dan mengelola daemon API Rclone (`rcd`) pada instance EC2 berbasis Ubuntu, lihat: [Cara Menjalankan Rclone di Server AWS EC2](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)  
:::
<img src="/support/images/en/howto/rcloneview-advanced/rcloneview-new-window.png" alt="rcloneview new window" class="img-medium img-center" />
## 🚩Perbandingan: Rclone Embedded vs. Rclone Eksternal

| Fitur                                  | Rclone Embedded                      | Rclone Eksternal                            |
| ------------------------------------- | ------------------------------------ | ------------------------------------------- |
| Berjalan di Mesin Lokal                | ✅ Ya                                 | ❌ Tidak (Berjalan di server jarak jauh)     |
| Akses ke Disk Lokal                    | Ya — PC lokal tempat RcloneView berjalan | Ya — Server tempat Rclone eksternal berjalan |
| Menggunakan Binary Rclone Bawaan       | ✅ Disertakan secara default          | ❌ Memerlukan instalasi terpisah             |
| Dapat Dikonfigurasi di `Settings > Location` | ✅ Didukung                     | ❌ Tidak berlaku                             |
| Memerlukan Konfigurasi Jaringan        | ❌ Tidak                              | ✅ Ya (Host, Port, Autentikasi diperlukan)   |
| Performa Jaringan                      | Bergantung pada jaringan lokal/rumah | Bergantung pada jaringan server/cloud       |

 💡 Gunakan fitur **New Window** untuk mengelola beberapa instance Rclone secara paralel — misalnya, hubungkan satu window ke Rclone embedded untuk tugas lokal, dan window lainnya ke Rclone eksternal untuk operasi sisi cloud.

