---
slug: migrate-put-io-to-google-drive-rcloneview
title: "Migrasi Put.io ke Google Drive — Transfer File dengan RcloneView"
authors:
  - jay
description: "Migrasikan file dari Put.io ke Google Drive dengan RcloneView, GUI lintas platform yang mentransfer, memverifikasi, dan mengatur konten cloud."
keywords:
  - put.io ke google drive
  - migrasi file put.io
  - migrasi putio
  - RcloneView put.io
  - transfer cloud ke cloud
  - migrasi google drive
  - memindahkan torrent yang diunduh ke cloud
  - rclone put.io
  - transfer put.io ke drive
  - alat migrasi penyimpanan cloud
tags:
  - RcloneView
  - putio
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Put.io ke Google Drive — Transfer File dengan RcloneView

> Pindahkan semua yang tersimpan di Put.io ke Google Drive dengan alur kerja visual seret-dan-lepas, alih-alih berpindah-pindah antara dua antarmuka web yang terpisah.

Put.io adalah tempat mendarat yang bagus untuk torrent yang diunduh dan file jarak jauh, tetapi tidak dirancang untuk pengarsipan jangka panjang atau berbagi tim seperti Google Drive. Setelah unduhan selesai di Put.io, banyak pengguna masih harus menariknya secara manual lalu mengunggah ulang ke tempat lain. RcloneView terhubung ke kedua layanan sekaligus dan memungkinkan Anda menyalin atau memindahkan konten langsung di antara keduanya, cloud ke cloud, tanpa melalui disk lokal Anda terlebih dahulu.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Put.io dan Google Drive Berdampingan

Explorer RcloneView mendukung hingga empat panel sekaligus, jadi Anda dapat membuka akun Put.io di satu panel dan Google Drive di panel lainnya, dilihat berdampingan. Put.io dan Google Drive keduanya ditambahkan dengan cara yang sama — login OAuth berbasis peramban, tanpa kunci API atau token akses terpisah yang perlu disalin secara manual. Setelah kedua remote dikonfigurasi, masing-masing muncul sebagai tab tersendiri, dan berpindah di antara keduanya bersifat instan.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Put.io and Google Drive as separate remotes in RcloneView" class="img-large img-center" />

Dengan kedua panel terbuka, Anda dapat menelusuri folder unduhan Put.io folder demi folder dan memutuskan dengan tepat apa yang dipindahkan, alih-alih memigrasikan semuanya secara sembarangan. Berbeda dengan alat yang hanya bisa mount, RcloneView juga melakukan sinkronisasi dan perbandingan folder — bahkan pada lisensi FREE, sehingga transfer satu kali tidak memerlukan biaya apa pun selain waktu yang dibutuhkan untuk menjalankannya.

## Menjalankan Transfer sebagai Job

Alih-alih menyeret file satu per satu, siapkan job Copy atau Move melalui wizard Sync 4 langkah. Pilih Put.io sebagai sumber dan folder Google Drive Anda sebagai tujuan, lalu gunakan langkah Advanced Settings untuk menyesuaikan jumlah transfer file bersamaan sesuai koneksi Anda. Jika Anda tidak yakin cakupan job sudah tepat, jalankan Dry Run terlebih dahulu — ini menampilkan daftar setiap file yang akan disalin tanpa mengubah apa pun, yang layak dilakukan sebelum migrasi media berskala besar.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Copying files from Put.io to Google Drive in RcloneView" class="img-large img-center" />

Untuk migrasi satu kali, gunakan mode eksekusi One-time agar tidak tersimpan sebagai job berulang. Jika Anda berencana terus menambahkan file ke Put.io sebelum menyelesaikan pemindahan, simpan sebagai job agar Anda bisa menjalankannya lagi nanti dan hanya mengambil konten baru.

## Memverifikasi Pemindahan dengan Folder Compare

Setelah transfer selesai, buka Folder Compare untuk memeriksa kedua lokasi berdampingan. Ini menandai file yang hanya ada di satu sisi dan file dengan ukuran yang tidak cocok, sehingga Anda dapat memastikan migrasi selesai sebelum menghapus apa pun dari Put.io.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing job history after a Put.io to Google Drive transfer" class="img-large img-center" />

Job History juga menyimpan catatan transfer — jumlah file, total ukuran, dan durasi — yang berguna jika Anda memigrasikan pustaka besar secara bertahap selama beberapa sesi.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan remote Put.io Anda melalui alur login OAuth peramban.
3. Tambahkan remote Google Drive Anda dengan cara yang sama, melalui login OAuth peramban.
4. Buat job Copy atau Move dari Put.io ke folder tujuan Anda, jalankan Dry Run, lalu eksekusi.

Mengosongkan penyimpanan Put.io ke tempat permanen di Google Drive menjaga unduhan Anda tetap terorganisir tanpa langkah unggah manual kedua.

---

**Panduan Terkait:**

- [Migrasi OneDrive ke Google Drive — Transfer File dengan RcloneView](https://rcloneview.com/support/blog/migrate-onedrive-to-google-drive-rcloneview)
- [Mengelola Penyimpanan Put.io — Sinkronisasi dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-put-io-cloud-sync-backup-rcloneview)
- [Streaming dan Sinkronisasi Media Put.io ke NAS atau Cloud Anda dengan RcloneView](https://rcloneview.com/support/blog/stream-sync-putio-media-nas-cloud-rcloneview)

<CloudSupportGrid />
