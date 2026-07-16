---
slug: fix-nextcloud-sync-errors-rcloneview
title: "Mengatasi Error Sinkronisasi Nextcloud — Menyelesaikan Masalah WebDAV dan Autentikasi dengan RcloneView"
authors:
  - morgan
description: "Atasi error sinkronisasi Nextcloud di RcloneView — perbaiki kegagalan autentikasi WebDAV, konflik file lock 423, error SSL, dan timeout transfer yang lambat."
keywords:
  - fix Nextcloud sync errors
  - Nextcloud WebDAV authentication error
  - Nextcloud 423 locked fix
  - Nextcloud connection timeout RcloneView
  - Nextcloud SSL certificate error rclone
  - RcloneView Nextcloud troubleshooting
  - Nextcloud backup not working
  - WebDAV sync errors fix
  - rclone Nextcloud 401 error
  - Nextcloud file lock conflict resolution
tags:
  - troubleshooting
  - nextcloud
  - tips
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mengatasi Error Sinkronisasi Nextcloud — Menyelesaikan Masalah WebDAV dan Autentikasi dengan RcloneView

> Kegagalan sinkronisasi Nextcloud di RcloneView hampir selalu bersumber dari salah satu dari empat penyebab utama — dan masing-masing memiliki solusi yang konkret dan dapat direproduksi.

Nextcloud adalah platform cloud self-hosted yang paling banyak digunakan, tetapi antarmuka WebDAV-nya menimbulkan jenis masalah sinkronisasi tersendiri. Saat RcloneView melakukan sinkronisasi ke atau dari server Nextcloud, error muncul sebagai kegagalan autentikasi 401, respons file lock 423, penolakan sertifikat SSL, atau transfer yang macet di tengah proses. Setiap kode error memberi tahu Anda persis di mana harus mencari — dan solusinya biasanya hanya berupa satu perubahan konfigurasi di RcloneView atau di server Nextcloud itu sendiri.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Kegagalan Autentikasi (401 Unauthorized)

Error 401 di **tab Log** RcloneView berarti Nextcloud menolak kredensial pada remote WebDAV Anda. Penyebab paling umum adalah menggunakan kata sandi akun biasa alih-alih app password Nextcloud. Ketika autentikasi dua faktor diaktifkan pada akun Nextcloud Anda, kata sandi standar tidak akan pernah berfungsi untuk akses API — Anda harus membuat app password khusus.

Masuk ke antarmuka web Nextcloud Anda, buka **Settings > Security > App Passwords**, buat app password baru dengan label yang mudah dikenali seperti "RcloneView", dan segera salin app password tersebut. Kemudian di RcloneView, buka **tab Remote > Remote Manager**, pilih remote Nextcloud Anda, klik **Edit**, ganti kata sandi dengan app password baru, lalu simpan. Jalankan ulang job sinkronisasi yang gagal dan perhatikan tab Log — error 401 seharusnya tidak muncul lagi.

Jika Anda tidak menggunakan autentikasi dua faktor namun tetap melihat error 401, pastikan format URL WebDAV sudah benar. Path WebDAV standar Nextcloud adalah `https://your-server.com/remote.php/dav/files/your-username/` — tanda garis miring di akhir yang hilang atau username yang salah dalam path dapat menghasilkan error yang tampak seperti masalah autentikasi meskipun kredensial sudah valid.

<img src="/support/images/en/blog/new-remote.png" alt="Editing Nextcloud WebDAV credentials in RcloneView Remote Manager" class="img-large img-center" />

## Konflik File Lock (423 Locked)

Nextcloud menggunakan penguncian file di sisi server untuk mencegah modifikasi bersamaan, dan RcloneView dapat mengalami respons 423 Locked saat melakukan sinkronisasi file yang sedang dibuka oleh klien desktop Nextcloud aktif atau sesi browser web. Hal ini paling sering terjadi pada jam kerja ketika anggota tim sedang aktif mengedit file sementara job pencadangan terjadwal juga sedang berjalan.

Solusi yang paling andal adalah masalah waktu: jadwalkan job sinkronisasi RcloneView pada jam-jam sepi — larut malam atau selama jendela waktu dengan aktivitas rendah yang dapat diprediksi — menggunakan scheduler pada lisensi PLUS. Di **Advanced Settings** pada job tersebut, kurangi jumlah transfer file simultan. Transfer paralel yang lebih sedikit berarti lebih sedikit permintaan lock bersamaan, dan lock sementara akan hilang lebih cepat ketika RcloneView tidak membombardir server dari segala arah sekaligus.

RcloneView mencoba ulang operasi yang gagal hingga jumlah percobaan ulang yang Anda konfigurasikan (default: 3). Setelah job selesai, periksa **Job History** untuk melihat apakah ada file yang menunjukkan status Errored. Jika jumlah error kecil, menjalankan ulang job sinkronisasi secara manual akan menyelesaikan sisa konflik lock setelah file yang terpengaruh ditutup.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Nextcloud sync job history and error details in RcloneView" class="img-large img-center" />

## Error Sertifikat SSL

Instalasi Nextcloud self-hosted sering menggunakan sertifikat SSL self-signed, yang secara default ditolak oleh rclone. Kegagalan ini muncul di tab Log sebagai error verifikasi sertifikat. Untuk mengatasinya, buka **tab Settings > Embedded Rclone** dan tambahkan `--no-check-certificate` pada kolom **Global Rclone Flags**. Pengaturan ini berlaku secara global untuk semua remote, jadi jika ada remote lain yang menggunakan sertifikat valid yang ingin Anda tetap verifikasi, pertimbangkan untuk menambahkan sertifikat self-signed tersebut ke penyimpanan sertifikat tepercaya pada sistem operasi Anda sebagai alternatif.

Untuk server Nextcloud di balik reverse proxy, pastikan proxy tersebut meneruskan header yang benar. Proxy yang salah konfigurasi dapat menyebabkan redirect loop yang muncul sebagai error SSL atau koneksi meskipun sertifikatnya sendiri valid.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring active Nextcloud sync progress in RcloneView Transferring tab" class="img-large img-center" />

## Transfer Lambat dan Timeout di Tengah Job

Lapisan WebDAV Nextcloud lebih lambat dibandingkan backend yang kompatibel dengan S3 untuk direktori dengan banyak file kecil. Jika job sinkronisasi mengalami timeout atau macet pada folder besar, mulailah dengan **Dry Run** untuk menghitung total file yang terlibat. Untuk direktori dengan puluhan ribu file kecil, kurangi jumlah transfer simultan di **Advanced Settings** dan tingkatkan **retry count** untuk memberi server lebih banyak waktu pemulihan antar batch.

Terapkan filter ukuran file dan usia file pada Langkah 3 di wizard sinkronisasi untuk memecah job besar menjadi batch yang lebih kecil: sinkronkan terlebih dahulu file yang dimodifikasi dalam 30 hari terakhir, lalu jalankan file yang lebih lama secara terpisah. Ini menjaga setiap proses tetap dalam cakupan yang dapat dikelola dan mengurangi kemungkinan satu timeout membatalkan transfer yang berlangsung berjam-jam.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Nextcloud sync job after adjusting transfer settings in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Setelah sinkronisasi Nextcloud gagal, buka **tab Log** dan catat kode error HTTP sebelum mengubah apa pun.
3. Untuk error 401: buat ulang app password di Nextcloud Settings dan perbarui kredensial remote Anda.
4. Untuk error 423: jadwalkan ulang job ke jam sepi dan kurangi transfer paralel di Advanced Settings.

Membaca kode error terlebih dahulu mengubah penyelesaian masalah Nextcloud dari coba-coba menjadi perbaikan lima menit yang dapat diprediksi.

---

**Panduan Terkait:**

- [Mengelola Nextcloud — Sinkronisasi Cloud dan Pencadangan dengan RcloneView](https://rcloneview.com/support/blog/manage-nextcloud-cloud-sync-backup-rcloneview)
- [Sinkronisasi Nextcloud ke Google Drive dengan RcloneView](https://rcloneview.com/support/blog/sync-nextcloud-to-google-drive-rcloneview)
- [Mengatasi Error Koneksi dan Autentikasi WebDAV dengan RcloneView](https://rcloneview.com/support/blog/fix-webdav-connection-authentication-errors-rcloneview)

<CloudSupportGrid />
