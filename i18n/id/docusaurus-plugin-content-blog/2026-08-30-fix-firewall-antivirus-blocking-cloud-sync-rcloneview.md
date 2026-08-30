---
slug: fix-firewall-antivirus-blocking-cloud-sync-rcloneview
title: "Memperbaiki Firewall dan Antivirus yang Memblokir Sinkronisasi Cloud — Mengatasi Error Koneksi dengan RcloneView"
authors:
  - robin
description: "Diagnosis dan perbaiki tugas sinkronisasi cloud yang macet atau gagal karena firewall, antivirus, atau alat keamanan endpoint memblokir koneksi RcloneView."
keywords:
  - firewall memblokir sinkronisasi cloud
  - antivirus memblokir rclone
  - koneksi RcloneView diblokir
  - sinkronisasi cloud macet firewall
  - memperbaiki error jaringan rclone
  - perlindungan endpoint sinkronisasi cloud
  - mengizinkan RcloneView di firewall
  - koneksi pencadangan cloud gagal
  - masalah sinkronisasi cloud VPN
  - API RC rclone diblokir
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - security
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Memperbaiki Firewall dan Antivirus yang Memblokir Sinkronisasi Cloud — Mengatasi Error Koneksi dengan RcloneView

> Ketika tugas sinkronisasi macet di 0% atau gagal dengan error koneksi umum, penyebab sebenarnya sering kali adalah perangkat lunak keamanan lokal — bukan penyedia cloud.

Tugas sinkronisasi yang tidak pernah dimulai, macet di 0% transfer, atau berhenti dengan pesan timeout yang tidak jelas tidak selalu menunjukkan konfigurasi remote yang salah. Baik di workstation yang dikelola maupun jaringan rumah yang dikunci ketat, firewall, paket antivirus, dan agen perlindungan endpoint secara rutin mencegat koneksi keluar yang dibutuhkan RcloneView — baik ke API penyedia cloud maupun ke proses rclone bawaan lokalnya sendiri — dan kegagalannya terlihat identik dengan gangguan jaringan yang sesungguhnya. RcloneView berjalan sepenuhnya di komputer lokal Anda, jadi setiap koneksi ini berasal dari proses yang dapat Anda periksa dan masukkan ke daftar putih (whitelist) secara langsung.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengenali Blokir Firewall atau Antivirus

Tanda-tanda yang mudah dikenali adalah konsistensi dan kecepatan kejadian: tugas gagal dalam satu atau dua detik setelah dimulai daripada setelah perjuangan yang lambat, tugas yang sama berjalan baik di jaringan lain, atau remote yang baru dibuat gagal dalam uji koneksinya bahkan sebelum mencapai penyedia. rclone bawaan RcloneView mendengarkan secara lokal di `127.0.0.1:5582`, dan alat antivirus yang memeriksa lalu lintas loopback atau memblokir executable yang tidak dikenali agar tidak membuka soket jaringan dapat secara diam-diam memutus tautan tersebut meskipun aplikasi itu sendiri tampak berjalan normal.

<img src="/support/images/en/blog/new-remote.png" alt="Pengujian koneksi remote yang gagal seketika karena koneksi yang diblokir" class="img-large img-center" />

Jika Anda terhubung ke instance rclone eksternal alih-alih yang bawaan, logika yang sama berlaku untuk port 5572 — firewall perusahaan yang hanya mengizinkan lalu lintas pada port web standar (80/443) akan diam-diam menjatuhkannya.

## Mengisolasi Koneksi yang Diblokir

Mulai transfer manual dan perhatikan tab Transferring: tugas yang menunjukkan 0 B/s tanpa henti, tanpa error dan tanpa progres, biasanya berarti koneksi ke server penyedia cloud sedang difilter secara keluar, bukan berarti penyedia sedang down. Mengaktifkan rclone Logging di Settings pada level DEBUG dan mereproduksi masalah tersebut sering kali akan menampilkan entri `connection reset` atau `i/o timeout` yang menunjuk ke host tepat yang diblokir.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Menjalankan tugas sinkronisasi yang macet karena koneksi jaringan yang diblokir" class="img-large img-center" />

Job History juga berguna di sini: tugas yang secara konsisten berakhir dengan "Errored" pada waktu yang berlalu hampir sama, di berbagai remote, menunjuk pada kebijakan jaringan lokal daripada masalah khusus penyedia.

## Mengizinkan RcloneView Melalui Perangkat Lunak Keamanan

Setelah Anda mengonfirmasi blokirannya, tambahkan RcloneView (dan biner rclone yang disertakan) sebagai aplikasi yang diizinkan dalam aturan firewall dan antivirus Anda, alih-alih menonaktifkan perlindungan sepenuhnya. Di Windows, itu berarti aturan inbound/outbound di Windows Defender Firewall atau paket pihak ketiga Anda; di macOS, memberikan akses jaringan di bawah Privacy & Security jika diminta; di Linux, memeriksa `ufw` atau `iptables` bersama agen endpoint apa pun yang dikelola secara terpusat oleh organisasi Anda. Jika Anda menggunakan VPN atau proxy perusahaan, pastikan domain API penyedia cloud juga diizinkan melewatinya — kesalahan konfigurasi split-tunnel menghasilkan gejala transfer macet yang sama seperti blokir firewall lokal.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Sinkronisasi cloud yang mentransfer normal setelah menghapus blokir firewall" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html) jika Anda belum melakukannya.
2. Reproduksi kegagalan dengan rclone Logging level DEBUG diaktifkan dan catat host atau port tepat dalam error tersebut.
3. Tambahkan RcloneView dan proses rclone bawaannya sebagai aplikasi yang diizinkan dalam pengaturan firewall dan antivirus Anda.
4. Jalankan ulang tugas dan konfirmasi bahwa sekarang menunjukkan progres transfer nyata di tab Transferring.

Satu entri daftar putih biasanya menyelesaikan apa yang terlihat seperti kegagalan sinkronisasi yang membandel dan tidak dapat dijelaskan — layak untuk disingkirkan terlebih dahulu sebelum menganggap penyedia cloud atau konfigurasi remote yang salah.

---

**Panduan Terkait:**

- [Memperbaiki Masalah Koneksi Cloud Proxy dan VPN dengan RcloneView](https://rcloneview.com/support/blog/fix-proxy-vpn-cloud-connection-issues-rcloneview)
- [Memperbaiki Error Timeout Sinkronisasi Cloud dengan RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-timeout-errors-rcloneview)
- [Memperbaiki Error Sertifikat SSL/TLS Sinkronisasi Cloud dengan RcloneView](https://rcloneview.com/support/blog/fix-ssl-tls-certificate-errors-cloud-rcloneview)

<CloudSupportGrid />
