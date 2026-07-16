---
slug: fix-sftp-connection-refused-timeout-rcloneview
title: "Mengatasi Error Connection Refused dan Timeout SFTP di RcloneView"
authors:
  - tayson
description: "Selesaikan error connection refused, timeout, dan autentikasi SFTP di RcloneView. Membahas aturan firewall, SSH key, konfigurasi port, dan penyesuaian timeout."
keywords:
  - sftp connection refused rclone
  - sftp timeout error rcloneview
  - fix sftp connection rclone
  - rclone sftp ssh key error
  - sftp firewall blocked
  - sftp port configuration rclone
  - rcloneview sftp setup
  - ssh connection timeout fix
  - sftp authentication failed rclone
  - rclone sftp troubleshoot
tags:
  - RcloneView
  - troubleshooting
  - sftp
  - guide
  - tips
  - self-hosted
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mengatasi Error Connection Refused dan Timeout SFTP di RcloneView

> Error SFTP di RcloneView hampir selalu berasal dari konfigurasi jaringan, pengaturan autentikasi, atau pengaturan sisi server. Panduan ini membahas setiap penyebab umum beserta cara memperbaikinya.

SFTP (SSH File Transfer Protocol) adalah salah satu remote yang paling banyak digunakan di rclone, menghubungkan RcloneView ke server mana pun yang memiliki akses SSH — perangkat NAS, server Linux, shared hosting, dan infrastruktur self-hosted. Berbeda dengan API penyedia cloud, SFTP bergantung pada keterjangkauan jaringan, aturan firewall, dan konfigurasi SSH, sehingga ada lebih banyak titik potensi kegagalan. Berikut cara mendiagnosis dan menyelesaikan masalah SFTP yang paling umum.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pesan Error SFTP yang Umum

| Pesan Error | Kemungkinan Penyebab |
|--------------|-------------|
| `connection refused` | Server SSH tidak berjalan, port salah, atau diblokir firewall |
| `connection timed out` | Firewall menjatuhkan paket, server tidak terjangkau, atau masalah jaringan |
| `ssh: handshake failed` | Ketidakcocokan SSH key, algoritma tidak kompatibel, atau konfigurasi sisi server |
| `permission denied (publickey)` | File key salah, key tidak diotorisasi di server, atau masalah passphrase |
| `permission denied (password)` | Password salah atau autentikasi password dinonaktifkan di server |
| `no supported methods remain` | Server memerlukan metode autentikasi yang tidak dikonfigurasi di rclone |
| `ssh: unable to authenticate` | Kredensial tidak diberikan atau ditolak |
| `too many authentication failures` | SSH agent menawarkan terlalu banyak key sebelum key yang benar dicoba |

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="View SFTP error details in RcloneView job history" class="img-large img-center" />

## Perbaikan 1: Connection Refused

Error "connection refused" berarti koneksi TCP ditolak secara aktif. Network stack server dapat dijangkau, tetapi tidak ada layanan yang mendengarkan pada port target.

### Periksa Apakah SSH Berjalan

Di server remote, jalankan `sudo systemctl status sshd`. Jika SSH tidak berjalan, jalankan dengan `sudo systemctl start sshd && sudo systemctl enable sshd`.

### Verifikasi Port

Port SSH default adalah 22, tetapi banyak server menggunakan port khusus. Periksa dengan `grep -i "^Port" /etc/ssh/sshd_config`. Di RcloneView, pastikan pengaturan port remote SFTP sesuai. Ketidakcocokan antara port 22 dan port khusus seperti 2222 adalah salah satu penyebab paling umum.

<img src="/support/images/en/blog/new-remote.png" alt="Configure SFTP remote port in RcloneView" class="img-large img-center" />

### Periksa Blokir Firewall Lokal

Di server, verifikasi bahwa firewall mengizinkan koneksi masuk pada port SSH. Gunakan `sudo ufw status` (Ubuntu/Debian), `sudo firewall-cmd --list-ports` (RHEL/Fedora), atau `sudo iptables -L -n | grep 22`. Jika port diblokir, tambahkan aturan untuk mengizinkannya.

## Perbaikan 2: Connection Timeout

Timeout berarti paket dikirim tetapi tidak ada respons yang diterima. Ini biasanya merupakan masalah tingkat jaringan, bukan masalah konfigurasi sisi server.

### Keterjangkauan Jaringan

Uji konektivitas dasar dari mesin Anda:

```bash
ping server-hostname
telnet server-hostname 22
```

Jika `ping` berhasil tetapi `telnet` ke port 22 gagal, ada firewall antara Anda dan server yang memblokir port SSH.

### Router dan Firewall NAT

Jika server SFTP berada di belakang router NAT, pastikan port forwarding dikonfigurasi untuk mengarahkan lalu lintas eksternal pada port SSH ke IP server internal. Tanpa port forwarding, koneksi dari luar jaringan lokal akan timeout.

### Blokir Firewall ISP atau Korporat

Beberapa ISP dan jaringan korporat memblokir koneksi keluar pada port 22. Uji dengan port alternatif atau gunakan VPN untuk melewati pembatasan tersebut.

### Penyesuaian Timeout di Rclone

Timeout koneksi default rclone mungkin terlalu singkat untuk koneksi dengan latensi tinggi. Anda dapat menambahnya dengan menambahkan flag `--contimeout`. Untuk penundaan respons server yang spesifik pada SFTP, pertimbangkan mengatur `--timeout` ke nilai yang lebih tinggi (misalnya, `5m` untuk server yang lambat).

## Perbaikan 3: Kegagalan Autentikasi SSH Key

Autentikasi berbasis key adalah metode paling aman dan direkomendasikan untuk koneksi SFTP, tetapi kesalahan konfigurasi cukup umum terjadi.

### Verifikasi Path File Key

Di RcloneView, konfigurasi remote SFTP mencakup kolom untuk path file SSH key. Pastikan:

- Path mengarah ke **private** key (misalnya, `~/.ssh/id_rsa` atau `~/.ssh/id_ed25519`), bukan public key.
- File tersebut ada dan dapat dibaca oleh akun pengguna Anda.
- File key memiliki izin yang benar (`600` di Linux/macOS).

### Otorisasi Key di Server

Public key harus terdaftar di `~/.ssh/authorized_keys` pada server. Tambahkan dengan `cat ~/.ssh/id_ed25519.pub >> ~/.ssh/authorized_keys`, lalu pastikan izinnya `600` untuk file dan `700` untuk direktori `.ssh`.

### Key yang Dilindungi Passphrase

Jika private key Anda memiliki passphrase, rclone memerlukannya untuk mendekripsi key tersebut. Di konfigurasi remote SFTP RcloneView, masukkan passphrase pada kolom yang sesuai. Jika dibiarkan kosong, autentikasi akan gagal secara diam-diam.

### Konflik SSH Agent

Jika SSH agent berjalan dengan banyak key yang dimuat, server mungkin menolak koneksi setelah terlalu banyak percobaan key yang gagal (batas default biasanya 6). Anda dapat menentukan file key yang tepat di konfigurasi rclone untuk melewati agent, atau mengurangi jumlah key yang dimuat di agent Anda.

## Perbaikan 4: Masalah Autentikasi Password

### Autentikasi Password Dinonaktifkan di Server

Banyak server menonaktifkan autentikasi password demi keamanan. Periksa dengan `grep -i "PasswordAuthentication" /etc/ssh/sshd_config`. Jika diatur ke `no`, Anda harus menggunakan autentikasi berbasis key sebagai gantinya.

### Password Salah

Pastikan Anda memasukkan password yang benar di konfigurasi remote SFTP RcloneView. Rclone menyimpan password dalam format tersamar di `rclone.conf` — jika Anda mengedit konfigurasi secara manual, gunakan `rclone obscure` untuk mengenkode password dengan benar.

## Perbaikan 5: Batasan Koneksi Bersamaan

Server SFTP sering membatasi jumlah sesi simultan. Rclone secara default menggunakan 4 transfer bersamaan, tetapi beberapa server hanya mengizinkan 1 atau 2 koneksi.

Jika Anda melihat kegagalan koneksi yang muncul sesekali selama transfer besar, kurangi konkurensi:

- Atur `--transfers 1` atau `--transfers 2` untuk membatasi koneksi paralel.
- Atur `--checkers 1` untuk mengurangi jumlah operasi pemeriksaan yang berjalan bersamaan.

Beberapa penyedia shared hosting sangat membatasi. Mulailah dengan konkurensi rendah dan tingkatkan secara bertahap.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor SFTP transfer progress in RcloneView" class="img-large img-center" />

## Perbaikan 6: Ketidakcocokan Algoritma SSH

Server lama mungkin tidak mendukung algoritma SSH modern, atau server yang telah diperketat keamanannya mungkin menolak algoritma lama. Jika Anda melihat error "handshake failed", perbarui perangkat lunak server SSH jika memungkinkan, atau periksa `/etc/ssh/sshd_config` untuk pembatasan `KexAlgorithms`, `Ciphers`, dan `MACs`.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView explorer with SFTP remote connected" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Tambahkan remote SFTP** dengan host, port, dan pengaturan autentikasi yang benar.
3. **Uji koneksi** dengan menjelajahi remote di explorer.
4. **Ikuti checklist** di atas jika Anda mengalami error.

Masalah SFTP hampir selalu merupakan masalah konfigurasi, bukan bug perangkat lunak. Memeriksa setiap lapisan secara metodis — jaringan, firewall, autentikasi, dan pengaturan server — menyelesaikan sebagian besar kasus.

---

**Panduan Terkait:**

- [Mengatasi Error Rclone di RcloneView](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [Mengatasi Kerusakan Konfigurasi Rclone](https://rcloneview.com/support/blog/fix-rclone-config-corruption-rcloneview)
- [Memulihkan Transfer yang Terputus](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)

<CloudSupportGrid />
