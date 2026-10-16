---
slug: fix-external-rclone-rcd-connection-refused-rcloneview
title: "Atasi Koneksi Rclone Eksternal Ditolak — Pemecahan Masalah Akses rcd dengan RcloneView"
authors:
  - casey
description: "Atasi error koneksi rclone eksternal di RcloneView: periksa rclone rcd, port 5572, kredensial, firewall, dan pengaturan SSL dengan Test Connection."
keywords:
  - rclone rcd connection refused
  - RcloneView rclone eksternal
  - rclone remote control tidak terhubung
  - rclone rcd port 5572
  - RcloneView connect manager
  - rclone rcd autentikasi gagal
  - atasi koneksi rclone rc
  - rclone rcd firewall
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cli
  - self-hosted
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Atasi Koneksi Rclone Eksternal Ditolak — Pemecahan Masalah Akses rcd dengan RcloneView

> Ketika RcloneView tidak dapat menjangkau server rclone eksternal Anda, penyebabnya hampir selalu salah satu dari lima hal yang dapat diperiksa dalam hitungan menit.

RcloneView menyertakan rclone bawaan, tetapi banyak pengguna mengarahkannya ke rclone eksternal yang berjalan di NAS, VPS, atau instans AWS EC2 melalui Connect Manager. Ketika koneksi itu gagal dengan "connection refused", timeout, atau error autentikasi, daftar periksa singkat dapat menemukan penyebabnya.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pastikan rclone rcd Benar-Benar Berjalan

RcloneView berkomunikasi dengan rclone eksternal melalui API Remote Control, yang dijalankan dengan `rclone rcd`. Di server, jalankan dengan kredensial dan alamat yang eksplisit, misalnya `rclone rcd --rc-user=<user> --rc-pass=<pass> --rc-addr=127.0.0.1:5572`. Port eksternal default adalah 5572, sedangkan instans bawaan menggunakan 5582 di localhost.

Kesalahan yang sering terjadi adalah melakukan bind ke `127.0.0.1` lalu terhubung dari mesin lain. Loopback hanya menerima lalu lintas lokal. Untuk server jarak jauh, lakukan bind ke `0.0.0.0:5572` dan batasi akses berdasarkan IP di firewall Anda. Perlu diingat bahwa RcloneView adalah alat GUI dan tidak diinstal di server; server hanya menjalankan rclone.

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="Menghubungkan RcloneView ke host rclone eksternal" class="img-large img-center" />

## Periksa Jalur Jaringan dan Kredensial

Jika rcd berjalan tetapi koneksi masih ditolak, uji jalurnya. Dari mesin yang menjalankan RcloneView, pemeriksaan kesehatan terhadap `/rc/noop` dengan username dan password Anda seharusnya mengembalikan respons. Jika macet, firewall atau security group cloud memblokir port 5572. Di AWS EC2, security group memerlukan aturan Custom TCP untuk 5572 selain SSH yang dibatasi.

Kegagalan autentikasi adalah hal yang terpisah: username dan password yang dimasukkan di RcloneView harus sama persis dengan `--rc-user` dan `--rc-pass`, termasuk huruf besar-kecil.

<img src="/support/images/en/blog/new-remote.png" alt="Memasukkan detail koneksi eksternal di RcloneView" class="img-large img-center" />

## Verifikasi Pengaturan di Connect Manager

Buka Settings > Connect Manager > New Connection, lalu isi Display Name, alamat dalam format `http://<host>:5572`, dan kredensial Anda. Jika server Anda menggunakan sertifikat self-signed, opsi untuk menonaktifkan verifikasi sertifikat SSL memungkinkan koneksi dilanjutkan. Tekan Test Connection sebelum menyimpan agar hasilnya langsung terlihat.

Jika masih gagal, aktifkan logging rclone di Settings > Embedded Rclone, atur level ke DEBUG, mulai ulang, dan reproduksi masalah untuk menangkap log.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Meninjau log dan riwayat di RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Jalankan `rclone rcd` di server dengan user, password, dan alamat yang dapat dijangkau.
3. Buka port di firewall atau security group Anda.
4. Tambahkan koneksi di Connect Manager lalu tekan Test Connection.

Setelah koneksi stabil, Anda dapat mengelola penyimpanan cloud server jarak jauh dari desktop Anda.

---

**Panduan Terkait:**

- [RcloneView Connection Manager — Bawaan dan Eksternal](https://rcloneview.com/support/blog/rcloneview-connection-manager-embedded-external)
- [Atasi Error Sertifikat SSL/TLS](https://rcloneview.com/support/blog/fix-ssl-tls-certificate-errors-cloud-rcloneview)
- [Atasi SFTP Connection Refused dan Timeout](https://rcloneview.com/support/blog/fix-sftp-connection-refused-timeout-rcloneview)

<CloudSupportGrid />
