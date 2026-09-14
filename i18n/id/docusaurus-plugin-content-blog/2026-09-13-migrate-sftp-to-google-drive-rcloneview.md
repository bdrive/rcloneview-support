---
slug: migrate-sftp-to-google-drive-rcloneview
title: "Migrasi dari SFTP ke Google Drive — Transfer File dengan RcloneView"
authors:
  - kai
description: "Migrasikan file dari server SFTP ke Google Drive menggunakan explorer dua panel, pratinjau dry run, dan tugas sinkronisasi terjadwal milik RcloneView."
keywords:
  - RcloneView
  - migrasi SFTP ke Google Drive
  - migrasi SFTP ke cloud
  - transfer file SFTP
  - transfer file SSH ke cloud
  - migrasi penyimpanan cloud
  - GUI klien SFTP
  - cadangan Google Drive
  - alat transfer file yang aman
  - menonaktifkan server SFTP
tags:
  - RcloneView
  - sftp
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi dari SFTP ke Google Drive — Transfer File dengan RcloneView

> Pensiunkan server SFTP lama tanpa kehilangan satu file pun, dengan menggunakan RcloneView untuk memindahkan semuanya langsung ke Google Drive.

Banyak tim masih menjalankan server SFTP internal untuk pengiriman file, tetapi menjaga kredensial SSH, aturan firewall, dan ruang disk pada mesin tersebut menjadi mahal dibandingkan membiarkan Google Drive menangani penyimpanan dan berbagi. RcloneView terhubung ke host SFTP dan Google Drive sekaligus dalam satu jendela yang sama, sehingga Anda dapat menelusuri, membandingkan, dan mentransfer di antara keduanya tanpa menyentuh terminal. Ini adalah langkah pertama yang praktis bagi tim IT kecil yang bermigrasi dari server file lama sebelum akhirnya menonaktifkan perangkat keras tersebut untuk selamanya.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Server SFTP dan Google Drive Secara Berdampingan

Tambahkan remote SFTP terlebih dahulu: masukkan alamat host dan kredensial SSH di wizard New Remote, menggunakan port 22 secara default. Tambahkan Google Drive sebagai remote kedua melalui login browser OAuth-nya — tanpa perlu memasukkan kunci API. Buka keduanya di panel Explorer terpisah menggunakan tata letak panel terbagi milik RcloneView, sehingga Anda dapat melihat struktur folder lengkap di kedua sisi sekaligus.

<img src="/support/images/en/blog/new-remote.png" alt="Adding an SFTP remote and a Google Drive remote in RcloneView" class="img-large img-center" />

RcloneView melakukan mount sekaligus sinkronisasi lebih dari 90 penyedia dari satu jendela, di Windows, macOS, dan Linux, sehingga pengaturan yang sama tetap berfungsi baik server SFTP berada di jaringan lokal Anda maupun hanya dapat diakses melalui jump host.

## Pratinjau Migrasi Sebelum Memindahkan Apa Pun

Sebelum mentransfer file yang telah terkumpul bertahun-tahun, jalankan Folder Compare antara root SFTP dan folder Google Drive tujuan untuk melihat dengan tepat apa yang belum ada di sisi tujuan. Kemudian konfigurasikan transfer tersebut sebagai tugas Sync dan gunakan Dry Run untuk mensimulasikan penyalinan — RcloneView akan menampilkan daftar setiap file yang akan dipindahkan dan setiap folder yang akan dibuat, tanpa benar-benar menulis apa pun sampai Anda mengonfirmasinya.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Comparing SFTP and Google Drive folder contents before migration in RcloneView" class="img-large img-center" />

Langkah ini paling penting ketika server SFTP telah mengumpulkan folder bersarang dengan penamaan yang tidak konsisten selama bertahun-tahun — dry run membuka kejutan-kejutan tersebut sebelum menjadi insiden dukungan di tengah malam.

## Mengotomatiskan Sisa Transfer dengan Tugas Terjadwal

Untuk arsip SFTP yang besar, jangan mencoba memindahkan semuanya sekaligus. Simpan migrasi tersebut sebagai Job di Job Manager, atur jumlah transfer file agar sesuai dengan throughput jaringan Anda yang realistis, dan biarkan berjalan di latar belakang sementara Anda terus bekerja di panel Explorer lainnya. Jika server SFTP perlu tetap aktif selama beberapa minggu lagi saat masa peralihan, penjadwalan lisensi PLUS memungkinkan Anda mengulang sinkronisasi dengan jadwal bergaya crontab sehingga Google Drive tetap mutakhir hingga server lama dimatikan.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring SFTP to Google Drive sync job in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan server SFTP Anda sebagai remote menggunakan alamat host dan kredensial SSH-nya.
3. Tambahkan Google Drive sebagai remote kedua melalui alur login browser OAuth.
4. Jalankan Folder Compare dan Dry Run, lalu simpan transfer tersebut sebagai Job sebelum benar-benar menjalankannya.

Setelah tugas sinkronisasi selesai dengan bersih pada eksekusi berulang tanpa ada lagi yang perlu disalin, server SFTP lama sudah aman untuk dimatikan.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Server SFTP — Sinkronkan dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [Kelola Penyimpanan Google Drive — Sinkronkan dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Mount SFTP dan SMB sebagai Drive Lokal dengan RcloneView](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)

<CloudSupportGrid />
