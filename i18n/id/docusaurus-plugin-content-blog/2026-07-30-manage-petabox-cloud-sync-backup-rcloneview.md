---
slug: manage-petabox-cloud-sync-backup-rcloneview
title: "Mengelola Penyimpanan Petabox — Sinkronkan dan Cadangkan Berkas dengan RcloneView"
authors:
  - steve
description: "Hubungkan penyimpanan objek yang kompatibel dengan S3, Petabox, ke RcloneView untuk penelusuran berkas lintas platform, sinkronisasi, dan pencadangan otomatis."
keywords:
  - penyimpanan Petabox
  - penyimpanan objek Petabox
  - GUI penyimpanan kompatibel S3
  - RcloneView Petabox
  - perangkat lunak pencadangan cloud
  - sinkronkan Petabox ke cloud
  - kelola GUI penyimpanan cloud
  - alat sinkronisasi penyimpanan objek
  - pengelola berkas multi-cloud
  - pengaturan kredensial S3
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mengelola Penyimpanan Petabox — Sinkronkan dan Cadangkan Berkas dengan RcloneView

> Telusuri, sinkronkan, dan cadangkan bucket penyimpanan objek Petabox dari antarmuka grafis, alih-alih mengedit kredensial S3 secara manual di berkas konfigurasi.

Petabox diakses melalui protokol kompatibel S3 milik rclone, sehingga menghubungkannya berarti memasukkan Access Key, Secret Key, dan URL endpoint — jenis pengaturan yang mudah salah ketik dari baris perintah. RcloneView mengubah proses tersebut menjadi formulir terpandu dan memadukannya dengan penjelajah berkas dua panel yang lengkap, mesin sinkronisasi, dan penjadwal tugas, sehingga tim yang sudah menyimpan data di Petabox dapat mengelolanya bersama semua remote lain dalam satu jendela.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Petabox sebagai Remote yang Kompatibel dengan S3

Menambahkan Petabox di RcloneView menggunakan alur pemasukan kredensial yang sama seperti layanan kompatibel S3 lainnya: buka tab Remote > New Remote, pilih jenis kompatibel S3, lalu masukkan Access Key ID, Secret Access Key, dan endpoint Petabox. Jika integrasi Petabox Anda sudah berjalan melalui daemon rclone bersama di server, Connect Manager dapat mengarahkan RcloneView ke instans rclone eksternal tersebut alih-alih menggunakan yang tertanam.

Setelah disimpan, remote tersebut muncul sebagai tab tersendiri di panel Explorer, di sebelah penyimpanan cloud atau lokal lain yang sudah dikonfigurasi. Remote Alias dapat memperpendek jalur bucket yang bertingkat dalam menjadi nama singkat yang lebih mudah dinavigasi sehari-hari.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Petabox S3-compatible remote in RcloneView" class="img-large img-center" />

## Menelusuri, Menyinkronkan, dan Mencadangkan Data Petabox

Setelah remote terhubung, tata letak dua panel File Explorer memudahkan perbandingan antara apa yang sudah ada di Petabox dengan folder lokal atau remote cloud lain. Seret dan lepas antar panel akan memicu penyalinan ketika sumber dan tujuan adalah remote yang berbeda, dan menu klik kanan mencakup ganti nama, hapus, dapatkan ukuran, serta unduh/unggah untuk operasi berkas rutin.

Untuk pencadangan berulang, wizard Sync empat langkah menangani sumber dan tujuan, konkurensi transfer, serta aturan pemfilteran, termasuk opsi seperti usia berkas maksimum dan filter yang telah ditentukan untuk jenis media atau dokumen. Hubungkan layanan kompatibel S3 seperti Petabox dengan akses baca/tulis penuh pada lisensi FREE — tidak diperlukan peningkatan lisensi hanya untuk menulis data kembali ke bucket. Sinkronisasi 1:N dapat mencerminkan bucket Petabox yang sama ke beberapa tujuan dalam satu tugas, berguna saat pencadangan perlu mendarat baik di drive lokal maupun penyedia cloud kedua.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job between Petabox storage and another remote" class="img-large img-center" />

## Mengotomatiskan Pencadangan Petabox Berulang

Job Manager menyimpan setiap tugas sinkronisasi, penyalinan, atau pemindahan dalam satu daftar, dengan setiap eksekusi dicatat di Job History beserta status, ukuran transfer, dan jumlah berkas. Dry Run memberikan pratinjau tepat berkas mana yang akan disalin atau dihapus sebelum benar-benar menjalankan transfer — layak diperiksa sebelum sinkronisasi pertama berskala besar ke bucket Petabox baru.

Pengguna lisensi PLUS dapat melampirkan jadwal bergaya crontab ke sebuah tugas agar pencadangan Petabox berjalan secara otomatis pada interval berulang, dengan opsi simulasi untuk melihat pratinjau waktu eksekusi mendatang sebelum menyimpan.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring backup job for Petabox storage" class="img-large img-center" />

## Memasang Petabox sebagai Drive Lokal

Penyimpanan Petabox juga dapat dipasang (mount) sebagai drive virtual, memungkinkan aplikasi desktop lain membaca dan menulis konten bucket seolah-olah berkas lokal. Konfigurasi mount mencakup mode cache VFS (bawaan: writes), batas ukuran cache, dan mode baca saja, dan mount dapat dimulai baik dari bilah alat panel remote maupun dari Mount Manager khusus.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a Petabox bucket as a local drive in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka tab Remote > New Remote dan pilih opsi kompatibel S3 untuk memasukkan kredensial dan endpoint Petabox Anda.
3. Gunakan Folder Compare atau seret dan lepas untuk memindahkan data yang sudah ada ke Petabox, lalu siapkan tugas Sync untuk pencadangan berkelanjutan.
4. Tambahkan tugas tersebut ke Job Manager dan, pada PLUS, lampirkan jadwal agar pencadangan berjalan tanpa intervensi manual.

Setelah remote dikonfigurasi, penyimpanan Petabox berperilaku seperti koneksi lain mana pun di RcloneView — dapat ditelusuri, disinkronkan, dan siap dicadangkan sesuai jadwal.

---

**Panduan Terkait:**

- [Mengelola Penyimpanan Outscale — Sinkronkan dan Cadangkan Berkas dengan RcloneView](https://rcloneview.com/support/blog/manage-outscale-cloud-sync-backup-rcloneview)
- [Mengelola Penyimpanan Objek Scaleway — Sinkronisasi Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Mengelola Penyimpanan Selectel — Sinkronkan dan Cadangkan Berkas dengan RcloneView](https://rcloneview.com/support/blog/manage-selectel-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
