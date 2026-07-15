---
sidebar_position: 12
description: Instal dan jalankan Rclone di AWS EC2, hubungkan dari RcloneView di PC Anda, dan tambahkan remote OneDrive tanpa menggunakan browser di server.
keywords:
  - rcloneview
  - rclone
  - onedrive
  - headless
  - external rclone
  - aws ec2
  - rclone rcd
  - remote storage
  - cloud migration
tags:
  - Remote-Storage
  - onedrive
  - external-rclone
  - aws-ec2
  - headless
date: 2025-07-15
author: Jay
---
# Menambahkan OneDrive ke External Rclone di AWS EC2 (Headless)

:::info Prasyarat Terkait
Jika Anda memerlukan panduan lengkap pengaturan EC2, lihat 👉 [Cara Menjalankan Rclone Engine di AWS EC2](/howto/cloud-storage-setting/run-rclone-on-aws-ec2).
:::

---

Prosesnya: hasilkan token OAuth OneDrive di mesin yang memiliki browser, lalu tempelkan token tersebut ke external Rclone yang berjalan di EC2 melalui RcloneView.

---

## Langkah 1. Hasilkan token OneDrive (pilih salah satu metode)

**Metode A: `rclone authorize "onedrive"` (paling cepat)**

1. Di mesin yang memiliki browser dan versi rclone yang sama, jalankan:
   ```bash
   rclone authorize "onedrive"
   ```  
2. Selesaikan login/persetujuan Microsoft di browser.  
3. Salin blok token JSON yang dicetak (simpan seluruh JSON-nya). Anda akan menempelkan token ini ke EC2 pada Langkah 3.

**Metode B: Gunakan remote embedded RcloneView dan salin tokennya**

1. Di PC lokal Anda, tambahkan OneDrive menggunakan Rclone embedded (OAuth browser normal).  
2. Buka **Remote Manager**, edit remote OneDrive, klik **Show advanced options**, lalu salin kolom **Token** (JSON).

<img src="/support/images/en/howto/remote-storage-connection-settings/copy-onedrive-oauth-token-from-embedded-rclone.png" alt="copy onedrive oauth token from embedded rclone" class="img-medium img-center" />


👉 Selengkapnya tentang mengedit remote: [Edit Remote Settings](/howto/rcloneview-basic/remote-manager#edit-remote-settings)

---

## Langkah 2. Hubungkan ke External Rclone (EC2)

Buka **jendela baru** atau gunakan sesi Anda saat ini di RcloneView untuk terhubung ke Rclone yang di-hosting di EC2:

- Buka `Settings` -> **`Connection Manager`** untuk membuat koneksi baru ke Rclone yang di-hosting di EC2, atau terhubung ke koneksi yang sudah ada jika sudah dikonfigurasi.

👉 Pelajari lebih lanjut: [Connect External Rclone](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)  
👉 Pelajari lebih lanjut: [New Window Feature](/howto/rcloneview-advanced/multi-window#new-window-feature-managing-both-models)

---

## Langkah 3. Tambahkan remote OneDrive ke external Rclone (tempelkan token Anda)

1. Di jendela yang terhubung ke EC2, buka menu `Remote` dan pilih **`+ New Remote`**.
2. Pilih **OneDrive** sebagai provider.
3. Masukkan **Remote Name** dan klik **Show advanced options**.
4. Tempelkan **OAuth Token** yang sebelumnya disalin ke kolom **Token**.
5. Klik **Add Remote** untuk menyelesaikan pengaturan.


<img src="/support/images/en/howto/remote-storage-connection-settings/copy-onedrive-oauth-token-to-external-rclone.png" alt="copy onedrive oauth token to external rclone" class="img-medium img-center" />
:::info **Abaikan Pop-up Error Ini**
Jika RcloneView menampilkan pesan error seperti di bawah ini, Anda dapat mengabaikannya dengan aman.
Dalam sebagian besar kasus, konfigurasi token tetap berhasil diselesaikan meskipun pesan ini muncul.
Setelah menutup dialog, Anda akan dapat mengakses OneDrive secara normal.  
Ini adalah masalah UI yang sudah diketahui, dan kami akan meningkatkan pengalaman pengguna pada rilis berikutnya.
<img src="/support/images/en/howto/remote-storage-connection-settings/token-input-error-message.png" alt="token input error message" class="img-small img-left" />
:::
Setelah dikonfigurasi, Rclone berbasis EC2 Anda kini dapat mengakses OneDrive bahkan tanpa dukungan browser. Anda dapat mengelola, melakukan sinkronisasi, dan transfer file menggunakan RcloneView seperti biasa.

---

## Tautan terkait

- [Cara Menjalankan Rclone Engine di AWS EC2](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)  
- [Connection Manager](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)  
- [Multi-Window Usage](/howto/rcloneview-advanced/multi-window#new-window-feature-managing-both-models)  
- [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)  
- [Execute and Manage Jobs](/howto/rcloneview-basic/execute-manage-job)  
- [Job Scheduling and Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)
