---
slug: fix-sftp-connection-errors-rcloneview
title: "Perbaiki Error Koneksi SFTP — Atasi Masalah Transfer File SSH dengan RcloneView"
authors:
  - alex
description: "Diagnosis dan perbaiki error koneksi SFTP yang umum terjadi di RcloneView — kegagalan autentikasi, ketidakcocokan host key, dan timeout — agar transfer SSH kembali berjalan."
keywords:
  - fix SFTP connection errors RcloneView
  - SFTP SSH file transfer troubleshooting
  - RcloneView SFTP setup guide
  - SFTP authentication failure rclone
  - SSH file transfer errors
  - SFTP host key mismatch fix
  - rclone SFTP troubleshooting
  - resolve SFTP sync errors
  - SFTP remote cloud sync
  - RcloneView troubleshooting tips
tags:
  - RcloneView
  - sftp
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Perbaiki Error Koneksi SFTP — Atasi Masalah Transfer File SSH dengan RcloneView

> Error SFTP di RcloneView hampir selalu berakar dari beberapa penyebab utama — kesalahan konfigurasi autentikasi, aturan firewall, atau kegagalan verifikasi host key — dan masing-masing memiliki solusi langsung.

SFTP (SSH File Transfer Protocol, port 22) adalah metode andalan untuk mentransfer file antara mesin lokal dan server: web host, perangkat NAS on-premises, dan VM cloud semuanya umum menyediakan antarmuka SFTP. Ketika RcloneView tidak dapat menjangkau remote SFTP, pesan error di tab Log menunjukkan penyebabnya, tetapi berbagai kemungkinan masalah — kredensial yang salah, port yang diblokir, host key yang tidak cocok, path yang dibatasi — dapat membuat diagnosis terasa seperti menebak-nebak. Panduan ini membahas error SFTP yang paling umum dan cara mengatasinya secara sistematis.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengonfigurasi Remote SFTP dengan Benar

Sebagian besar error koneksi berawal dari pengaturan remote. Di RcloneView, buka **Remote tab > New Remote** dan pilih **SFTP** dari daftar provider. Kolom yang wajib diisi adalah **Host** (hostname atau alamat IP polos — jangan sertakan `sftp://`), **Port** (defaultnya 22), **Username**, dan metode **Authentication**, yang bisa berupa password atau path file kunci privat SSH.

Kesalahan yang sering terjadi adalah memasukkan `sftp://hostname` di kolom Host. RcloneView (melalui rclone) hanya mengharapkan hostname atau IP polos, dan prefix `sftp://` menyebabkan koneksi langsung ditolak. Jika server Anda menggunakan autentikasi berbasis kunci, pastikan path file kunci privat menunjuk ke file yang benar di mesin lokal Anda. Di Linux dan macOS, izin file kunci harus `600` atau lebih ketat — klien SSH akan menolak menggunakan kunci yang dapat dibaca oleh semua orang.

<img src="/support/images/en/blog/new-remote.png" alt="Creating a new SFTP remote in RcloneView" class="img-large img-center" />

## Mendiagnosis Kegagalan Autentikasi

Kegagalan autentikasi muncul di **Log tab** RcloneView dengan pesan seperti `ssh: handshake failed` atau `Permission denied (publickey,password)`. Lakukan pemeriksaan berikut secara berurutan:

1. **Verifikasi username** — sambungkan sekali menggunakan klien SSH terminal untuk memastikan nama akun yang tepat. RcloneView menggunakan kredensial yang sama, dan huruf besar/kecil berpengaruh.
2. **Periksa mode kunci versus password** — jika server mewajibkan login berbasis kunci, entri password di RcloneView akan gagal. Kosongkan password dan masukkan path kunci privat sebagai gantinya.
3. **Aktifkan logging DEBUG** — buka Settings > Embedded Rclone > Enable rclone Logging, atur level ke DEBUG, lalu reproduksi kegagalannya. File log akan mencatat seluruh proses handshake SSH dan menunjukkan tepatnya di mana penolakan terjadi.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView transfer view for an active SFTP sync job" class="img-large img-center" />

## Mengatasi Error Ketidakcocokan Host Key

Saat pertama kali rclone terhubung ke server SFTP, ia mencatat host key server tersebut. Jika kunci itu berubah di kemudian hari — karena pembangunan ulang server, instalasi ulang OS, atau rotasi sertifikat — rclone akan memunculkan error `host key mismatch` dan menolak koneksi untuk mencegah serangan man-in-the-middle. Untuk mengatasinya, buka tab **Rclone Terminal** di RcloneView dan jalankan:

```
rclone config show <remote-name>
```

Identifikasi path `known_hosts_file` yang ditampilkan pada output, buka file tersebut di editor teks, dan hapus entri lama untuk host yang bermasalah. Percobaan koneksi berikutnya akan meminta Anda mempercayai kunci baru dan menyimpannya dengan bersih.

## Memperbaiki Masalah Firewall dan Timeout

Jika percobaan koneksi macet tanpa error — atau menghasilkan `dial tcp: connection timed out` — kemungkinan besar masalahnya adalah firewall yang memblokir port 22, baik di sisi server maupun jaringan klien. Gunakan tab Terminal untuk menguji apakah rclone dapat menjangkau server dengan `rclone about <remote-name>:` dan bandingkan hasilnya dengan koneksi SSH terminal langsung. Jika klien SSH berhasil tetapi rclone mengalami timeout, periksa apakah mesin Anda atau jaringan perusahaan menerapkan aturan firewall outbound yang memengaruhi koneksi non-browser. Untuk jaringan yang memblokir port 22 outbound, minta administrator server untuk membuka SFTP pada port alternatif — solusi umum adalah port 443 — dan perbarui kolom Port pada pengaturan remote RcloneView Anda sesuai dengan itu.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an SFTP sync job in the RcloneView Job Manager" class="img-large img-center" />

## Meninjau Riwayat Job Setelah Transfer yang Gagal

Setelah koneksi stabil, tinjau tampilan **Job History** untuk memastikan bahwa proses yang sebelumnya gagal tidak meninggalkan file parsial di tujuan. RcloneView mencatat status, jumlah transfer, kecepatan, dan kode error setiap job. Pemindaian cepat akan mengidentifikasi sinkronisasi yang belum selesai dan perlu dijalankan ulang, dan opsi Dry Run memungkinkan Anda melihat pratinjau file mana saja yang akan disalin atau dihapus sebelum menjalankan operasi tersebut.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history view showing SFTP sync results in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka **Remote tab > New Remote > SFTP** dan masukkan hostname polos (tanpa prefix `sftp://`), port, username, dan kredensial autentikasi.
3. Aktifkan logging DEBUG di Settings untuk mencatat seluruh proses handshake SSH saat terjadi error.
4. Periksa **Job History** setelah transfer yang gagal untuk mengidentifikasi sinkronisasi parsial yang perlu dijalankan ulang.

Dengan kredensial yang tepat dan tampilan yang jelas terhadap log output rclone, sebagian besar error SFTP dapat diselesaikan dengan cepat — dan RcloneView memudahkan Anda memverifikasi hasil dan kembali melakukan transfer file secara produktif.

---

**Panduan Terkait:**

- [Kelola File Server FTP — Sinkronisasi Cloud dan Pencadangan dengan RcloneView](https://rcloneview.com/support/blog/manage-ftp-server-cloud-sync-backup-rcloneview)
- [Mount SFTP dan SMB sebagai Drive Lokal dengan RcloneView](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [Atasi Error Rclone dengan RcloneView](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />
