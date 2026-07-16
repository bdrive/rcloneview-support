---
slug: fix-smb-windows-network-share-mount-errors-rcloneview
title: "Perbaiki Error Mount SMB Network Share — Mengatasi Masalah Koneksi dengan RcloneView"
authors:
  - tayson
description: "Diagnosis dan perbaiki error koneksi dan mount SMB/CIFS network share di RcloneView. Selesaikan kegagalan autentikasi, ketidakcocokan protokol, dan masalah izin untuk share Windows."
keywords:
  - SMB mount error RcloneView
  - fix SMB connection error rclone
  - CIFS network share troubleshooting
  - Windows network share mount error
  - rclone SMB authentication error
  - SMB protocol mismatch fix
  - fix network drive connection RcloneView
  - SMB share permission error
tags:
  - troubleshooting
  - smb
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Perbaiki Error Mount SMB Network Share — Mengatasi Masalah Koneksi dengan RcloneView

> Error SMB/CIFS network share di RcloneView umumnya berasal dari ketidakcocokan autentikasi, konflik versi protokol, atau pemblokiran firewall. Berikut cara mendiagnosis dan memperbaiki setiap kasus.

SMB (Server Message Block) / CIFS adalah protokol yang digunakan Windows untuk berbagi file jaringan — perangkat NAS, server file Windows, dan share Samba semuanya menggunakannya. RcloneView terhubung ke share SMB sebagai remote, memungkinkan Anda melakukan sinkronisasi antara SMB dan penyimpanan cloud atau melakukan mount share SMB bersama penyedia cloud lainnya. Namun koneksi SMB sensitif terhadap konfigurasi jaringan: mode autentikasi, versi dialek, dan aturan firewall semuanya memengaruhi berhasil tidaknya koneksi. Panduan ini membahas error SMB paling umum beserta cara memperbaikinya.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pesan Error SMB Umum di RcloneView

Periksa **tab Log** setelah upaya koneksi SMB gagal. Tanda-tanda error umum meliputi:

- `NT_STATUS_LOGON_FAILURE` — nama pengguna atau kata sandi salah
- `NT_STATUS_ACCESS_DENIED` — kredensial benar tetapi izin share menolak akses
- `connection refused` atau `no route to host` — firewall memblokir port 445 (SMB)
- `SMB negotiation failed: Protocol negotiate error` — ketidakcocokan versi protokol antara klien dan server
- `NT_STATUS_IO_TIMEOUT` — server SMB tidak dapat dijangkau atau tidak merespons

Setiap error menunjuk ke penyebab dan perbaikan yang berbeda.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring an SMB remote connection in RcloneView" class="img-large img-center" />

## Memperbaiki Error Autentikasi dan Izin

Untuk `NT_STATUS_LOGON_FAILURE`, periksa format nama pengguna. Autentikasi SMB memerlukan nama pengguna dalam format yang sesuai untuk server:
- Akun domain: `DOMAIN\username` atau `username@domain.com`
- Akun lokal di NAS: cukup `username` (tanpa prefiks domain)
- Akses tamu: biarkan nama pengguna dan kata sandi kosong, atau gunakan `guest`

Untuk `NT_STATUS_ACCESS_DENIED`, kredensial valid tetapi ACL share tidak memberikan akses kepada pengguna yang terautentikasi. Masuk ke panel admin NAS atau server Windows dan periksa apakah izin share menyertakan akses baca (atau baca/tulis) untuk akun Anda.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Testing SMB share connection and browsing files in RcloneView" class="img-large img-center" />

## Memperbaiki Masalah Versi Protokol

Perangkat NAS lama dan server Samba mungkin tidak mendukung dialek SMB3 terbaru yang dinegosiasikan rclone secara default. Di Remote Manager RcloneView, edit remote SMB dan atur bidang **SMB version** secara eksplisit: coba `SMB2` atau `SMB1` untuk perangkat keras lama. Perlu diketahui bahwa SMB1 dinonaktifkan secara default di Windows 10/11 dan Windows Server 2016+ karena alasan keamanan — hindari penggunaan SMB1 jika memungkinkan.

Untuk server Samba (NAS Linux, Synology, QNAP yang menjalankan Samba), periksa pengaturan `min protocol` dan `max protocol` pada file `smb.conf`. Pastikan Samba dikonfigurasi untuk menawarkan setidaknya SMB2.

## Memperbaiki Masalah Firewall dan Konektivitas

SMB memerlukan port TCP 445. Jika RcloneView menampilkan `connection refused` atau `no route to host`, periksa:
- Firewall server (Windows Firewall, firewall NAS) mengizinkan TCP 445 masuk dari IP klien Anda
- Router atau switch jaringan Anda tidak memblokir lalu lintas antar-VLAN pada port 445
- Untuk SMB jarak jauh melalui internet: SMB sebaiknya ditunnel melalui VPN, bukan diekspos langsung

Gunakan tab Terminal RcloneView untuk menjalankan `rclone about smb-remote:` setelah memperbaiki konfigurasi — respons yang berhasil mengonfirmasi bahwa koneksi berfungsi.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting an SMB share as a virtual drive through RcloneView Mount Manager" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Periksa tab Log untuk kode error SMB spesifik setelah koneksi gagal.
3. Perbaiki masalah autentikasi, versi protokol, atau firewall sesuai indikasi error.
4. Uji ulang koneksi melalui Remote Manager sebelum membuat pekerjaan sinkronisasi atau mount.

Error SMB di RcloneView hampir selalu dapat diselesaikan tanpa perlu menginstal ulang apa pun — perubahan konfigurasi yang tepat akan membuat network share Anda terhubung dan bersinkronisasi dengan andal.

---

**Panduan Terkait:**

- [Mount SFTP dan SMB sebagai Local Drive dengan RcloneView](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [Perbaiki Error Connection Refused dan Timeout SFTP dengan RcloneView](https://rcloneview.com/support/blog/fix-sftp-connection-refused-timeout-rcloneview)
- [Mengatasi Error Rclone dengan RcloneView](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />
