---
slug: fix-sftp-public-key-authentication-errors-rcloneview
title: "Perbaiki Error Autentikasi Public Key SFTP — Selesaikan Masalah SSH dengan RcloneView"
authors:
  - tayson
description: "Atasi kegagalan autentikasi public key SFTP di RcloneView. Diagnosis path key yang salah, izin file, masalah passphrase, dan masalah format key."
keywords:
  - SFTP public key error RcloneView
  - fix SFTP authentication failure
  - SSH key auth rclone SFTP
  - SFTP permission denied public key
  - RcloneView SFTP troubleshooting
  - SSH key format rclone
  - SFTP key passphrase error
  - rclone SFTP connection fix
tags:
  - sftp
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Perbaiki Error Autentikasi Public Key SFTP — Selesaikan Masalah SSH dengan RcloneView

> Kegagalan autentikasi public key SFTP hampir selalu disebabkan oleh ketidaksesuaian path key, izin file, atau passphrase — panduan ini membahas masing-masing secara sistematis.

SFTP adalah salah satu cara paling umum untuk menghubungkan server Linux jarak jauh di RcloneView, dan autentikasi public key adalah metode keamanan yang lebih disarankan dibandingkan password. Saat autentikasi key gagal, error yang muncul bisa membingungkan: `ssh: handshake failed`, `permission denied (publickey)`, atau `no supported methods remain`. Panduan ini membahas penyebab paling umum serta cara mendiagnosis dan memperbaiki masing-masing.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Konfigurasi Remote SFTP di RcloneView

Saat Anda membuat remote SFTP di RcloneView, kolom yang relevan untuk autentikasi berbasis key adalah:

- **Host**: hostname atau IP server
- **User**: username SSH
- **Key file**: path ke file private key Anda (misalnya, `~/.ssh/id_rsa` atau `C:\Users\you\.ssh\id_ed25519`)
- **Key file passphrase**: passphrase yang mendekripsi key (jika diatur)

Autentikasi password dan autentikasi key saling eksklusif untuk setiap remote. Jika Anda menentukan file key, kosongkan kolom password.

<img src="/support/images/en/blog/new-remote.png" alt="SFTP remote configuration with key auth in RcloneView" class="img-large img-center" />

## Error Umum 1: Path File Key Salah

Penyebab paling umum dari kegagalan autentikasi key adalah path file key yang salah atau tidak dapat dijangkau. Periksa:

- Path tersebut ada dan menunjuk ke **private** key (bukan public key `.pub`)
- Di Windows, gunakan path absolut lengkap (misalnya, `C:\Users\username\.ssh\id_rsa`)
- Di Linux/macOS, `~/.ssh/id_rsa` akan diekspansi dengan benar — jika ragu, gunakan path lengkap

Di RcloneView, buka pengaturan remote SFTP dan verifikasi path file key. Jika file tidak ada di lokasi tersebut, autentikasi akan gagal secara diam-diam atau dengan error yang tidak informatif.

## Error Umum 2: Izin File Key Terlalu Terbuka

Di Linux dan macOS, SSH menolak menggunakan file private key yang dapat dibaca oleh siapa saja (world-readable). Jika izin file key terlalu longgar, Anda akan melihat `Permissions 0644 for '~/.ssh/id_rsa' are too open`. Perbaiki dengan:

```
chmod 600 ~/.ssh/id_rsa
chmod 700 ~/.ssh
```

Di Windows, izin file key dikelola melalui pengaturan keamanan file. Pastikan file key hanya dapat diakses oleh akun pengguna Anda dan tidak dibagikan kepada Everyone.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an SFTP connection test in RcloneView" class="img-large img-center" />

## Error Umum 3: Passphrase Tidak Cocok

Jika private key Anda dilindungi passphrase, kolom passphrase di pengaturan remote SFTP RcloneView harus cocok persis. Kolom passphrase yang kosong padahal key memiliki passphrase yang diatur akan menyebabkan autentikasi gagal. Sebaliknya, memasukkan passphrase untuk key yang tidak memilikinya juga akan gagal.

Untuk menguji apakah passphrase key Anda benar, buka terminal dan jalankan `ssh -i /path/to/key user@host` — jika diminta memasukkan passphrase dan berhasil diterima, kredensial tersebut benar. Kemudian perbarui remote RcloneView sesuai dengan itu.

## Error Umum 4: Format Key Tidak Didukung

Private key OpenSSH lama (format PEM) didukung secara luas, tetapi beberapa key ED25519 baru dalam format native OpenSSH mungkin menyebabkan masalah tergantung pada versi library Go SSH yang tertanam di rclone. Jika Anda menemukan `ssh: no supported methods remain`:

- Konversi key ke format PEM: `ssh-keygen -p -m PEM -f ~/.ssh/id_ed25519`
- Atau buat key RSA: `ssh-keygen -t rsa -b 4096`

## Membaca Log untuk Diagnosis

Buka tab **Log** di RcloneView setelah upaya koneksi SFTP gagal. Log tersebut menampilkan error handshake SSH secara lengkap. Untuk detail tambahan, gunakan tab **Terminal** di RcloneView untuk menjalankan perintah rclone dengan flag `-vv` secara langsung, yang akan menampilkan seluruh proses negosiasi SSH.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing SFTP connection errors in RcloneView logs" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka pengaturan remote SFTP Anda dan verifikasi path file key menunjuk ke private key yang benar.
3. Di Linux/macOS, periksa izin file key dengan `ls -la ~/.ssh/` dan perbaiki dengan `chmod 600`.
4. Pastikan kolom passphrase cocok dengan passphrase key Anda, lalu uji koneksi dari Remote Manager.

Pemeriksaan sistematis terhadap path, izin, dan passphrase akan menyelesaikan sebagian besar kegagalan autentikasi public key SFTP.

---

**Panduan Terkait:**

- [Perbaiki Error Connection Refused dan Timeout SFTP](https://rcloneview.com/support/blog/fix-sftp-connection-refused-timeout-rcloneview)
- [Atasi Error rclone dengan RcloneView](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [Perbaiki Sinkronisasi Cloud yang Terganggu oleh Error Jaringan](https://rcloneview.com/support/blog/fix-cloud-sync-interrupted-network-retry-rcloneview)

<CloudSupportGrid />
