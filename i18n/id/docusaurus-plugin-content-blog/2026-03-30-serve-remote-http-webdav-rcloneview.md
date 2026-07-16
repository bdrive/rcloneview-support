---
slug: serve-remote-http-webdav-rcloneview
title: "Melayani Remote via HTTP dan WebDAV — Bagikan File Cloud dengan RcloneView"
authors:
  - tayson
description: "Gunakan RcloneView untuk melayani remote penyimpanan cloud melalui HTTP dan WebDAV, memungkinkan berbagi file dan akses dari browser, file manager, dan perangkat lain."
keywords:
  - rcloneview serve
  - serve http rclone
  - webdav cloud storage
  - serve remote files
  - rcloneview webdav
  - cloud file sharing
  - http file server
  - rclone serve webdav
  - share cloud files locally
  - webdav server rcloneview
tags:
  - feature
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Melayani Remote via HTTP dan WebDAV — Bagikan File Cloud dengan RcloneView

> Ubah remote penyimpanan cloud apa pun menjadi server HTTP atau WebDAV lokal dan akses file Anda dari browser, file manager, dan pemutar media.

Fungsi serve rclone memungkinkan Anda mengekspos remote penyimpanan cloud sebagai layanan jaringan lokal. RcloneView membuat fitur ini mudah diakses melalui GUI-nya, memungkinkan Anda menjalankan server HTTP atau WebDAV untuk remote yang telah dikonfigurasi hanya dengan beberapa klik. Ini membuka berbagai alur kerja yang bermanfaat: menjelajahi bucket S3 di browser web, mount Google Drive di perangkat yang tidak memiliki dukungan native, atau melakukan streaming file media dari Wasabi langsung ke pemutar video.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Melayani Penyimpanan Cloud Melalui HTTP

Mode serve HTTP RcloneView menjalankan server web ringan yang menampilkan file penyimpanan cloud Anda melalui tampilan direktori yang ramah browser. Arahkan ke remote mana pun — Google Drive, Dropbox, bucket S3, atau bahkan remote crypt terenkripsi — dan ini akan menghasilkan antarmuka HTML yang dapat dijelajahi pada alamat lokal seperti `http://localhost:8080`.

Ini sangat berguna untuk berbagi file dengan kolega di jaringan yang sama tanpa memberikan mereka akses langsung ke kredensial penyimpanan cloud Anda. Jalankan server HTTP, bagikan URL lokalnya, dan mereka dapat menjelajahi serta mengunduh file melalui browser web mereka. Server hanya berjalan selama RcloneView terbuka, dan Anda mengontrol remote atau subdirektori mana yang diekspos.

Untuk tim yang bekerja di lingkungan jaringan air-gapped atau terbatas, serve HTTP menyediakan cara untuk mengakses materi referensi, dokumentasi, atau dataset yang tersimpan di cloud tanpa perlu menginstal klien penyedia cloud di setiap workstation. Satu mesin yang menjalankan RcloneView berfungsi sebagai titik akses.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring a cloud remote to serve via HTTP in RcloneView" class="img-large img-center" />

## Melayani Penyimpanan Cloud Melalui WebDAV

WebDAV (Web Distributed Authoring and Versioning) memperluas HTTP dengan kemampuan manajemen file — membaca, menulis, mengganti nama, dan menghapus file melalui jaringan. Ketika Anda melayani remote via WebDAV di RcloneView, penyimpanan cloud menjadi dapat diakses sebagai drive jaringan di perangkat mana pun yang mendukung WebDAV, termasuk Windows, macOS, Linux, iOS, dan Android.

Di Windows, Anda dapat memetakan share WebDAV sebagai drive jaringan melalui File Explorer. Di macOS, gunakan dialog "Connect to Server" di Finder. Di Linux, file manager seperti Nautilus dan Dolphin mendukung WebDAV secara native. Ini berarti penyimpanan Google Drive, OneDrive, atau S3 Anda muncul sebagai folder biasa di perangkat yang mungkin tidak memiliki aplikasi klien cloud khusus.

Serve WebDAV juga memungkinkan integrasi dengan aplikasi yang mendukung WebDAV sebagai backend penyimpanan. Editor dokumen, pemutar media, dan alat pencadangan dapat membaca dari dan menulis ke penyimpanan cloud Anda melalui endpoint WebDAV tanpa konfigurasi khusus cloud apa pun.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Serving a cloud remote as WebDAV for network access via RcloneView" class="img-large img-center" />

## Autentikasi dan Keamanan

Secara default, serve HTTP dan WebDAV berjalan tanpa autentikasi, sehingga hanya cocok untuk jaringan tepercaya. Untuk skenario apa pun yang melibatkan data sensitif atau eksposur jaringan, RcloneView mendukung konfigurasi autentikasi dasar HTTP dengan nama pengguna dan kata sandi. Ini memastikan hanya pengguna yang berwenang yang dapat mengakses file yang dilayani.

Untuk keamanan tambahan, ikat server ke `127.0.0.1` (hanya localhost) untuk mencegah akses dari mesin lain di jaringan. Jika Anda memerlukan akses jarak jauh, gabungkan endpoint serve dengan SSH tunnel atau VPN alih-alih mengeksposnya langsung ke internet. Panel konfigurasi serve RcloneView memungkinkan Anda mengatur alamat bind, port, dan kredensial autentikasi sebelum menjalankan server.

Saat melayani remote crypt terenkripsi, file didekripsi secara on-the-fly saat diakses. Ini berarti Anda dapat menyimpan data terenkripsi di cloud dan melayaninya secara lokal dalam bentuk terdekripsi — berguna untuk mengakses arsip sensitif tanpa mendekripsinya secara permanen di disk.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring active serve connections and file transfers in RcloneView" class="img-large img-center" />

## Alur Kerja Praktis

**Streaming media:** Layani remote cloud yang berisi file video atau audio melalui HTTP, lalu buka URL file di VLC atau pemutar media lainnya. Ini menghindari pengunduhan seluruh pustaka media ke penyimpanan lokal.

**Akses file lintas perangkat:** Jalankan RcloneView di server rumah atau workstation yang selalu aktif dan layani penyimpanan cloud Anda melalui WebDAV. Hubungkan dari tablet, ponsel, atau komputer lain di jaringan yang sama.

**Pengembangan dan pengujian:** Layani bucket S3 secara lokal selama pengembangan untuk menguji aplikasi yang mengonsumsi file dari URL web, tanpa perlu men-deploy ke lingkungan staging.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Browsing served cloud storage files through RcloneView interface" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Konfigurasikan remote penyimpanan cloud yang ingin Anda layani (S3, Google Drive, Dropbox, dll.).
3. Buka panel serve, pilih mode HTTP atau WebDAV, atur port dan autentikasi opsional.
4. Jalankan server dan akses file cloud Anda dari browser atau file manager di alamat lokal.

Fitur serve RcloneView mengubah penyimpanan cloud menjadi sumber daya lokal yang langsung dapat diakses untuk perangkat mana pun di jaringan Anda.

---

**Panduan Terkait:**

- [Bisync Sinkronisasi Dua Arah — Sinkronisasi Cloud Dua Arah di RcloneView](https://rcloneview.com/support/blog/bisync-bidirectional-sync-rcloneview)
- [Menghubungkan Server WebDAV untuk Sinkronisasi Cloud dengan RcloneView](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [Mount SFTP dan SMB sebagai Drive Lokal dengan RcloneView](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)

<CloudSupportGrid />
