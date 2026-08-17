---
slug: fix-pikpak-sync-errors-rcloneview
title: "Memperbaiki Kesalahan Sinkronisasi PikPak — Mengatasi Masalah Koneksi dengan RcloneView"
authors:
  - steve
description: "Atasi kesalahan sinkronisasi dan koneksi PikPak yang umum terjadi di RcloneView dengan pemeriksaan Dry Run, pengaturan percobaan ulang, dan langkah autentikasi ulang OAuth."
keywords:
  - kesalahan sinkronisasi PikPak
  - PikPak RcloneView
  - memperbaiki koneksi PikPak
  - token OAuth PikPak
  - kesalahan pencadangan PikPak
  - mengatasi masalah sinkronisasi cloud
  - transfer file PikPak
  - masalah rclone PikPak
  - percobaan ulang sinkronisasi PikPak
tags:
  - RcloneView
  - troubleshooting
  - tips
  - pikpak
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Memperbaiki Kesalahan Sinkronisasi PikPak — Mengatasi Masalah Koneksi dengan RcloneView

> Transfer yang macet dan tugas PikPak yang gagal biasanya berasal dari beberapa penyebab yang dapat diperbaiki — berikut cara mendiagnosis dan menyelesaikannya di RcloneView.

Tugas sinkronisasi PikPak yang gagal di tengah jalan, macet tanpa kemajuan, atau menampilkan kesalahan koneksi sangat mengganggu ketika Anda mengandalkan pencadangan terjadwal. Sebagian besar masalah ini disebabkan oleh token yang kedaluwarsa, konkurensi transfer yang diatur terlalu agresif, atau filter yang secara diam-diam mengecualikan file yang seharusnya Anda sinkronkan. RcloneView memberi Anda alat diagnostik — Job History, Dry Run, dan terminal bawaan — untuk mengisolasi penyebab sebenarnya alih-alih menebak-nebak.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mendiagnosis Kegagalan di Job History

Sebelum mengubah pengaturan apa pun, buka Job Manager dan periksa entri dari eksekusi yang gagal di Job History. Bidang Status menunjukkan apakah tugas tersebut Errored atau Canceled, dan Time Spent memberi tahu apakah tugas gagal seketika (biasanya masalah autentikasi) atau di tengah jalan (biasanya file tertentu atau gangguan jaringan). Filter berdasarkan rentang tanggal untuk membandingkan proses yang gagal dengan proses sebelumnya yang berhasil.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Meninjau tugas sinkronisasi PikPak yang gagal di Job History RcloneView" class="img-large img-center" />

Jika tugas selalu gagal seketika di setiap percobaan, koneksi remote PikPak kemungkinan besar telah terputus — uji ulang dari Remote Manager sebelum mengubah pengaturan sinkronisasi.

## Autentikasi Ulang dan Menguji Ulang Remote

Buka Remote Manager, pilih remote PikPak Anda, dan verifikasi apakah koneksi masih berhasil. Jika pengujian gagal, remote perlu ditambahkan ulang dengan kredensial baru — koneksi PikPak dapat memerlukan autentikasi ulang setelah periode tidak aktif yang lama. Setelah pengujian berhasil, jalankan ulang tugas yang sama sebagai eksekusi satu kali sebelum menyimpannya kembali ke jadwal Anda.

<img src="/support/images/en/blog/new-remote.png" alt="Menguji koneksi remote PikPak di Remote Manager RcloneView" class="img-large img-center" />

RcloneView menghubungkan PikPak bersama lebih dari 90 penyedia lainnya dalam jendela yang sama, sehingga mengautentikasi ulang satu remote tidak akan pernah mengganggu cloud atau tugas sinkronisasi lain yang telah Anda konfigurasikan.

## Menyesuaikan Pengaturan Transfer dan Filter

Jika pengujian koneksi berjalan baik tetapi transfer masih macet, buka Advanced Settings pada tugas sinkronisasi dan turunkan jumlah transfer file bersamaan serta jumlah equality checkers — PikPak dapat membatasi permintaan paralel yang terlalu agresif. Periksa juga Filtering Settings di Langkah 3: filter max file age atau ukuran yang terlalu luas dapat secara diam-diam melewatkan file yang Anda harapkan tersinkronkan, yang terlihat seperti kegagalan padahal bukan.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Menyesuaikan pengaturan tugas sinkronisasi untuk pencadangan PikPak di RcloneView" class="img-large img-center" />

Jalankan Dry Run setelah perubahan pengaturan apa pun. Fitur ini menampilkan daftar persis file mana yang akan disalin atau dihapus tanpa menyentuh akun PikPak Anda, sehingga Anda dapat memastikan perbaikan berhasil sebelum melakukan sinkronisasi langsung.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Periksa entri tugas yang gagal di Job History untuk mengetahui kapan dan bagaimana kegagalan terjadi.
3. Uji ulang koneksi remote PikPak di Remote Manager dan perbarui kredensial jika diperlukan.
4. Turunkan konkurensi transfer dan periksa ulang filter, lalu konfirmasikan dengan Dry Run sebelum menjadwalkan ulang.

Meluangkan beberapa menit untuk mengisolasi penyebab di Job History menghemat jauh lebih banyak waktu dibandingkan berulang kali menjalankan ulang tugas yang gagal karena alasan yang belum Anda identifikasi.

---

**Panduan Terkait:**

- [Mengelola PikPak — Unduhan Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-pikpak-cloud-downloads-rcloneview)
- [Migrasi PikPak ke Google Drive — Transfer File dengan RcloneView](https://rcloneview.com/support/blog/migrate-pikpak-to-google-drive-rcloneview)
- [Sinkronkan PikPak ke Google Drive dan S3 dengan RcloneView](https://rcloneview.com/support/blog/sync-pikpak-cloud-google-drive-s3-rcloneview)

<CloudSupportGrid />
