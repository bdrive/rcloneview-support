---
slug: fix-ssl-tls-certificate-errors-cloud-rcloneview
title: "Memperbaiki Error Sertifikat SSL/TLS untuk Koneksi Cloud di RcloneView"
authors:
  - tayson
description: "Diagnosis dan perbaiki error sertifikat SSL/TLS saat menyambung ke penyimpanan cloud di RcloneView. Atasi sertifikat kedaluwarsa, masalah sertifikat self-signed, dan intersepsi proxy perusahaan."
keywords:
  - rcloneview
  - ssl certificate error
  - tls certificate error
  - cloud connection ssl fix
  - self-signed certificate rclone
  - certificate verify failed
  - x509 certificate error
  - corporate proxy ssl
  - rclone tls error
  - cloud storage connection fix
tags:
  - RcloneView
  - troubleshooting
  - security
  - cloud-storage
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Memperbaiki Error Sertifikat SSL/TLS untuk Koneksi Cloud di RcloneView

> Error sertifikat SSL/TLS mencegah RcloneView membangun koneksi aman ke penyedia cloud. Error ini mulai dari sertifikat kedaluwarsa hingga intersepsi proxy perusahaan — berikut cara mendiagnosis dan mengatasinya.

Setiap koneksi yang dibuat RcloneView ke penyedia cloud menggunakan HTTPS dengan enkripsi TLS. Proses handshake TLS memverifikasi identitas server melalui sertifikat SSL-nya. Ketika verifikasi ini gagal, RcloneView tidak dapat terhubung — tidak bisa menjelajah, transfer, maupun sinkronisasi. Error sertifikat sangat umum terjadi di lingkungan perusahaan dengan proxy yang melakukan inspeksi SSL, saat menyambung ke penyimpanan self-hosted (MinIO, Nextcloud, Seafile), atau saat waktu sistem tidak akurat.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pesan Error Umum

- **"x509: certificate signed by unknown authority"**: Sertifikat server diterbitkan oleh Certificate Authority (CA) yang tidak dipercaya oleh sistem Anda. Umum terjadi pada penyimpanan self-hosted dan proxy perusahaan.
- **"x509: certificate has expired or is not yet valid"**: Periode validitas sertifikat tidak sesuai dengan waktu sistem saat ini. Bisa jadi sertifikatnya memang sudah kedaluwarsa, atau jam sistem Anda yang salah.
- **"x509: certificate is valid for X, not Y"**: Common Name atau Subject Alternative Names pada sertifikat tidak cocok dengan hostname yang Anda sambungkan. Ini terjadi ketika URL endpoint tidak sesuai dengan sertifikat.
- **"tls: failed to verify certificate"**: Kegagalan verifikasi TLS yang bersifat umum. Periksa pesan error lengkap untuk detailnya.
- **"remote TLS connection closed unexpectedly"**: Proses handshake TLS terputus, sering kali disebabkan oleh firewall atau proxy.

## Perbaikan 1: Periksa Jam Sistem

Penyebab paling sederhana dan paling sering terlewat: jam sistem Anda salah. Sertifikat TLS memiliki jendela validitas (Not Before / Not After). Jika jam Anda berada di luar jendela ini, setiap sertifikat akan tampak tidak valid.

Di Windows, periksa Settings > Time & Language > Date & Time dan pastikan "Set time automatically" diaktifkan. Di Linux, jalankan `timedatectl` dan periksa apakah waktunya sudah benar. Di macOS, periksa System Preferences > Date & Time.

Jam sistem yang meleset bahkan beberapa jam saja dapat memicu error sertifikat, terutama untuk sertifikat yang baru diterbitkan atau mendekati masa kedaluwarsa.

## Perbaikan 2: Proxy Perusahaan / Inspeksi SSL

Banyak jaringan perusahaan menggunakan proxy yang melakukan inspeksi SSL, yang mencegat koneksi HTTPS, mendekripsinya untuk diperiksa, lalu mengenkripsinya kembali dengan sertifikat milik organisasi. Ini pada dasarnya adalah operasi man-in-the-middle yang dipercaya oleh perangkat yang dikelola perusahaan (karena CA perusahaan terpasang di trust store sistem) tetapi mungkin tidak dipercaya oleh bundel sertifikat bawaan rclone.

Untuk memperbaikinya, Anda perlu memberi tahu rclone agar menggunakan trust store sertifikat sistem Anda, atau menyediakan sertifikat CA perusahaan secara eksplisit:

- **Opsi A**: Atur flag `--ca-cert` di custom flags RcloneView agar mengarah ke file sertifikat CA perusahaan. Contoh: `--ca-cert /path/to/corporate-ca.pem`.
- **Opsi B**: Di Linux, pastikan sertifikat CA perusahaan terpasang di trust store sistem (`/etc/ssl/certs/` pada Debian/Ubuntu, `/etc/pki/tls/certs/` pada RHEL/CentOS). Jalankan `update-ca-certificates` setelah menambahkan sertifikat.
- **Opsi C**: Di Windows, jika CA perusahaan terpasang di certificate store Windows, rclone mungkin tidak menggunakannya secara default (rclone memakai implementasi TLS Go-nya sendiri). Ekspor CA perusahaan dari certificate store Windows sebagai file PEM lalu gunakan `--ca-cert`.

Hubungi departemen IT Anda untuk mendapatkan sertifikat CA perusahaan jika Anda belum memilikinya.

## Perbaikan 3: Sertifikat Self-Signed (Penyimpanan Self-Hosted)

Saat menyambung ke penyimpanan self-hosted seperti MinIO, Nextcloud melalui WebDAV, atau server SFTP pribadi dengan sertifikat TLS self-signed, rclone akan menolak koneksi karena sertifikat tersebut tidak diterbitkan oleh CA tepercaya.

Anda memiliki dua opsi:

- **Direkomendasikan**: Tambahkan sertifikat self-signed Anda ke trust store sistem, atau gunakan `--ca-cert` yang mengarah ke file sertifikat tersebut. Cara ini tetap menjaga verifikasi TLS sambil mempercayai sertifikat spesifik Anda.
- **Tidak direkomendasikan tetapi terkadang diperlukan**: Gunakan `--no-check-certificate` di custom flags. Ini menonaktifkan verifikasi sertifikat sepenuhnya, sehingga koneksi rentan terhadap serangan man-in-the-middle. Hanya gunakan ini untuk pengujian di jaringan tepercaya, jangan pernah di lingkungan produksi.

Khusus untuk MinIO, pertimbangkan untuk membuat sertifikat yang sah menggunakan Let's Encrypt (gratis) daripada menggunakan sertifikat self-signed.

## Perbaikan 4: Sertifikat Server Kedaluwarsa

Jika sertifikat penyedia cloud memang sudah kedaluwarsa, tidak ada yang bisa Anda lakukan dari sisi klien — penyedia layanan yang harus memperbaruinya. Hal ini jarang terjadi pada penyedia besar (AWS, Google, Microsoft, Dropbox) tetapi bisa terjadi pada penyedia yang lebih kecil atau solusi self-hosted.

Verifikasi dengan memeriksa sertifikat melalui browser web: buka URL penyedia layanan dan klik ikon gembok untuk melihat detail sertifikat. Jika sertifikat sudah kedaluwarsa, hubungi penyedia layanan tersebut. Untuk penyimpanan self-hosted, perbarui sertifikat menggunakan CA Anda atau Let's Encrypt.

## Perbaikan 5: Ketidakcocokan Hostname

Ketidakcocokan hostname sertifikat terjadi ketika URL yang Anda sambungkan tidak cocok dengan Common Name atau Subject Alternative Names pada sertifikat. Ini umum terjadi ketika:

- Anda menyambung ke endpoint yang kompatibel dengan S3 menggunakan alamat IP alih-alih hostname.
- URL endpoint mengandung salah ketik atau menggunakan subdomain berbeda dari yang tercakup oleh sertifikat.
- Anda mengakses layanan melalui load balancer atau reverse proxy yang menyajikan sertifikat berbeda.

Perbaiki dengan menggunakan hostname persis yang menjadi tujuan penerbitan sertifikat tersebut. Periksa konfigurasi remote di Remote Manager RcloneView dan pastikan URL endpoint cocok dengan hostname pada sertifikat.

## Perbaikan 6: Perbarui rclone dan RcloneView

Versi rclone yang lebih lama mungkin menggunakan bundel sertifikat usang yang tidak menyertakan Certificate Authority yang lebih baru. Perbarui ke versi terbaru RcloneView, yang menyertakan binary rclone terbaru dengan sertifikat CA yang mutakhir.

## Mendiagnosis Masalah Sertifikat

Saat error sertifikat terjadi, kumpulkan detailnya menggunakan terminal bawaan RcloneView:

1. Jalankan `rclone lsd remote:` dengan `--verbose` untuk melihat pesan error lengkap termasuk detail sertifikat.
2. Gunakan `openssl s_client -connect endpoint:443` (jika tersedia) untuk memeriksa rantai sertifikat server.
3. Periksa penerbit sertifikat, tanggal kedaluwarsa, dan Subject Alternative Names untuk mengidentifikasi masalah spesifiknya.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Jika Anda mengalami error sertifikat, periksa dulu jam sistem Anda.
3. Untuk lingkungan perusahaan, dapatkan dan konfigurasikan sertifikat CA perusahaan.
4. Untuk penyimpanan self-hosted, tambahkan sertifikat self-signed ke trust store Anda.

Error sertifikat SSL/TLS selalu bisa diselesaikan — perbaikannya tergantung apakah masalahnya ada pada jam sistem Anda, proxy perusahaan, sertifikat self-signed, atau sertifikat server yang kedaluwarsa. Mengidentifikasi akar masalah dari pesan error adalah kunci untuk mendapatkan solusi dengan cepat.

---

**Panduan Terkait:**

- [Menambahkan AWS S3 dan yang Kompatibel dengan S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Menambahkan WebDAV](https://rcloneview.com/support/howto/remote-storage-connection-settings/webdav)
- [Menjelajah dan Mengelola Penyimpanan Remote](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)

<CloudSupportGrid />
