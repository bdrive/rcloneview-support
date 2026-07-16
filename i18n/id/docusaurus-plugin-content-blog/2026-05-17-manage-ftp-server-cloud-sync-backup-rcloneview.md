---
slug: manage-ftp-server-cloud-sync-backup-rcloneview
title: "Kelola Penyimpanan Server FTP — Sinkronisasi dan Pencadangan File dengan RcloneView"
authors:
  - robin
description: "Hubungkan dan kelola server FTP Anda dengan RcloneView. Sinkronisasi dan cadangkan file FTP ke Google Drive, S3, Backblaze B2, dan lebih dari 90 penyedia penyimpanan cloud."
keywords:
  - manajemen server FTP
  - sinkronisasi FTP cloud
  - pencadangan FTP ke cloud
  - RcloneView FTP
  - transfer file FTP
  - sinkronisasi FTP ke Google Drive
  - FTP ke Amazon S3
  - alat pencadangan cloud FTP
  - kelola penyimpanan FTP
  - FTP rclone GUI
tags:
  - ftp
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Penyimpanan Server FTP — Sinkronisasi dan Pencadangan File dengan RcloneView

> RcloneView mengubah server FTP Anda menjadi remote kelas satu — jelajahi, sinkronkan, dan cadangkan file-filenya secara visual berdampingan dengan Google Drive, S3, dan lebih dari 90 penyedia cloud lainnya.

FTP tetap menjadi tulang punggung banyak lingkungan hosting web, arsip media lama, dan server distribusi file internal. Mengelola file FTP biasanya berarti harus berpindah-pindah antara sesi terminal, daftar direktori manual, dan skrip buatan sendiri. RcloneView memperlakukan server FTP Anda persis seperti akun penyimpanan cloud lainnya — Anda mendapatkan antarmuka visual yang konsisten untuk menjelajahi, mentransfer, dan mencadangkan file tanpa perlu menyentuh baris perintah.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Server FTP Anda di RcloneView

Buka tab **Remote** dan klik **New Remote**. Dari daftar penyedia, pilih FTP lalu masukkan hostname atau alamat IP server Anda, port, nama pengguna, dan kata sandi. Jika server Anda mendukung FTPS (FTP over TLS), Anda dapat mengaktifkannya di opsi lanjutan untuk koneksi yang terenkripsi.

Setelah disimpan, remote FTP akan muncul di panel explorer berdampingan dengan akun cloud Anda. Anda dapat memperluas pohon foldernya, menjelajahi sub-direktori, serta melihat nama file, ukuran, dan stempel waktu modifikasi — pengalaman yang sama seperti yang Anda dapatkan dengan Amazon S3 atau Dropbox.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new FTP remote in RcloneView" class="img-large img-center" />

## Menjelajahi dan Mentransfer File FTP secara Visual

Explorer multi-panel milik RcloneView adalah tempat manajemen FTP menjadi efisien. Buka remote FTP Anda di satu panel dan tujuan cloud — bucket Backblaze B2, folder Google Drive, atau prefix Amazon S3 — di panel lainnya. Tarik dan lepas file antar-panel untuk memulai penyalinan. Gunakan Ctrl+Klik atau Shift+Klik untuk memilih banyak file sekaligus saat memindahkan sekumpulan aset. Klik kanan untuk mengganti nama, menghapus, membuat folder, atau melihat ukuran folder.

Bagi agensi web yang menyimpan file klien di server FTP dan perlu mengarsipkannya ke object storage, atau bagi tim media yang mendistribusikan aset dari host FTP ke berbagai penyedia CDN cloud, tampilan berdampingan ini menggantikan alur kerja manual yang rawan kesalahan.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files from FTP remote to cloud storage in RcloneView" class="img-large img-center" />

## Membuat Job Sinkronisasi Antara FTP dan Penyimpanan Cloud

Untuk alur kerja yang berulang, **Job Manager** milik RcloneView memungkinkan Anda mengonfigurasi job sinkronisasi atau penyalinan antara server FTP dan tujuan cloud mana pun. Wizard 4 langkah ini mencakup pemilihan sumber dan tujuan, pengaturan lanjutan (transfer bersamaan, verifikasi checksum), serta aturan filter (jenis file, batas ukuran, ambang usia).

Jalankan **Dry Run** terlebih dahulu — ini akan menampilkan pratinjau setiap file yang akan disalin atau dihapus tanpa melakukan perubahan apa pun. Ini sangat berguna untuk sumber FTP yang mungkin memiliki struktur direktori kompleks atau berisiko mengalami penimpaan file yang tidak diinginkan.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Executing a sync job from FTP to cloud storage in RcloneView" class="img-large img-center" />

Setelah setiap eksekusi, tab **Job History** menampilkan waktu eksekusi, kecepatan transfer, jumlah file, dan status akhir — memberi Anda jejak audit yang jelas tentang apa yang dipindahkan dan kapan.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing FTP to cloud backup results in RcloneView" class="img-large img-center" />

Dengan **lisensi PLUS**, Anda dapat melampirkan jadwal bergaya cron ke job sinkronisasi FTP — mencadangkan unggahan baru setiap malam atau menyinkronkan ke penyimpanan cloud secara mingguan, semuanya tanpa perlu membiarkan sesi tetap terbuka.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka **Remote** > **New Remote** dan pilih FTP dari daftar penyedia.
3. Masukkan host server, port, nama pengguna, dan kata sandi Anda, lalu simpan remote tersebut.
4. Buka remote FTP Anda di satu panel dan tujuan cloud di panel lainnya.
5. Gunakan **Job Manager** untuk mengonfigurasi job sinkronisasi dan jalankan Dry Run sebelum transfer langsung pertama.

Menghubungkan server FTP Anda ke RcloneView berarti Anda tidak perlu lagi menulis skrip sinkronisasi — setiap transfer terlacak, dapat diulang, dan dapat diaudit dari satu antarmuka tunggal.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Server SFTP — Sinkronisasi Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [Migrasikan Server FTP ke Penyimpanan Cloud dengan RcloneView](https://rcloneview.com/support/blog/migrate-ftp-server-to-cloud-storage-rcloneview)
- [Hubungkan Server WebDAV dan Sinkronisasi Cloud dengan RcloneView](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)

<CloudSupportGrid />
