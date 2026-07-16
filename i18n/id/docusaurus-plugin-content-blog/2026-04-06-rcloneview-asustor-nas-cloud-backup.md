---
slug: rcloneview-asustor-nas-cloud-backup
title: "Menjalankan RcloneView di NAS ASUSTOR untuk Pencadangan Cloud Otomatis"
authors:
  - tayson
description: "Perangkat NAS ASUSTOR cukup bertenaga untuk menjalankan RcloneView melalui Docker. Siapkan pencadangan cloud otomatis, mount penyimpanan remote, dan pantau transfer langsung dari NAS Anda."
keywords:
  - rcloneview asustor nas
  - asustor nas cloud backup
  - asustor docker rcloneview
  - asustor cloud sync alternative
  - asustor nas rclone gui
  - asustor automated backup cloud
  - asustor mount cloud storage
  - asustor nas s3 backup
  - asustor cloud file manager
  - rcloneview nas setup
tags:
  - RcloneView
  - nas
  - platform
  - backup
  - cloud-backup
  - guide
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Menjalankan RcloneView di NAS ASUSTOR untuk Pencadangan Cloud Otomatis

> NAS ASUSTOR Anda berjalan 24/7 — jadikan itu mesin pencadangan cloud yang selalu aktif. RcloneView mengubah NAS Anda menjadi pusat manajemen file multi-cloud dengan pencadangan terjadwal, mounting cloud, dan pemantauan transfer secara real-time.

Perangkat NAS ASUSTOR dilengkapi prosesor Intel atau ARM, menjalankan sistem operasi ADM (ASUSTOR Data Master), dan mendukung Docker melalui aplikasi Portainer atau baris perintah. Ini membuatnya mampu menjalankan RcloneView sebagai layanan yang di-containerized — selalu aktif, selalu melakukan pencadangan, tanpa membebani desktop atau laptop. Baik Anda ingin mencadangkan share NAS ke Backblaze B2, mensinkronkan folder dengan Google Drive, atau mem-mount S3 sebagai volume lokal, RcloneView di NAS ASUSTOR Anda menangani semuanya dari GUI berbasis web.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Menjalankan Pencadangan Cloud di NAS Anda

Menjalankan pencadangan cloud langsung di NAS memiliki beberapa keunggulan dibandingkan menjalankannya di workstation:

- **Operasi selalu aktif** — NAS Anda sudah berjalan 24/7. Pencadangan dijalankan sesuai jadwal tanpa memerlukan PC yang menyala.
- **Akses data NAS dengan kecepatan LAN** — tidak perlu menarik file melalui jaringan ke PC sebelum diunggah. NAS membaca langsung dari disknya sendiri.
- **Manajemen terpusat** — semua tugas pencadangan, jadwal, dan log tersimpan di NAS. Perangkat apa pun dengan browser dapat mengelolanya.
- **Tidak menguras sumber daya workstation** — alihkan beban CPU dan bandwidth dari transfer besar ke NAS.

## Kompatibilitas NAS ASUSTOR

RcloneView melalui Docker berjalan di model ASUSTOR dengan:

- Prosesor berbasis **Intel** (x86_64): seri AS31, AS32, AS33, AS52, AS54, AS61, AS62, AS63, AS64, AS65, AS67, Lockerstor, Lockerstor Pro, dan Flashstor.
- Prosesor berbasis **ARM**: seri Drivestor dan Drivestor Pro (varian ARM AS11, AS33) — verifikasi dukungan Docker untuk model spesifik Anda.
- **ADM 4.0 atau lebih baru** dengan Docker (Portainer) terinstal dari App Central.
- **Minimal 2 GB RAM** direkomendasikan (4 GB+ untuk transfer besar secara bersamaan).

## Menginstal RcloneView melalui Docker

### Langkah 1 — Instal Docker dari App Central

1. Buka **App Central** di antarmuka web ADM Anda.
2. Cari **Portainer** (atau Docker-CE jika tersedia).
3. Instal dan jalankan aplikasi Portainer.

### Langkah 2 — Deploy container RcloneView

Buka Portainer di `http://your-nas-ip:9443` dan buat container baru, atau gunakan SSH untuk melakukan deploy melalui baris perintah:

```bash
docker run -d \
  --name rcloneview \
  -p 5572:5572 \
  -v /volume1/Docker/rcloneview/config:/config/rclone \
  -v /volume1:/data/volume1 \
  --restart unless-stopped \
  rcloneview/rcloneview:latest
```

Pemetaan volume utama:

- `/volume1/Docker/rcloneview/config` — menyimpan konfigurasi remote rclone Anda secara permanen.
- `/volume1` — mengekspos volume NAS utama Anda ke RcloneView untuk operasi pencadangan.

### Langkah 3 — Akses antarmuka web

Buka browser Anda dan navigasikan ke `http://your-nas-ip:5572`. Anda akan melihat dasbor RcloneView.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView new remote setup on ASUSTOR NAS" class="img-large img-center" />

## Menghubungkan Remote Cloud

Dari antarmuka RcloneView, tambahkan penyedia penyimpanan cloud Anda:

### Pengaturan umum untuk pencadangan NAS

- **Backblaze B2** — hemat biaya untuk pencadangan NAS berskala besar dengan harga $6/TB/bulan.
- **Wasabi** — penyimpanan kompatibel S3 dengan tarif flat tanpa biaya egress.
- **Google Drive** — sinkronkan folder penting antara NAS dan Drive.
- **Amazon S3** — daya tahan setara enterprise dengan kelas penyimpanan yang fleksibel.
- **SFTP** — cadangkan ke server remote atau NAS kedua.

Setiap remote dikonfigurasi sekali dan disimpan secara permanen. Wizard pengaturan memandu Anda melalui autentikasi untuk setiap penyedia — kunci API untuk layanan yang kompatibel dengan S3, OAuth untuk Google Drive dan OneDrive.

## Menjadwalkan Pencadangan Otomatis

Nilai utama menjalankan RcloneView di NAS Anda adalah pencadangan otomatis tanpa pengawasan. Berikut cara menyiapkannya:

### Membuat tugas pencadangan

1. Buka explorer dua panel di RcloneView.
2. Atur panel kiri ke jalur lokal NAS Anda (misalnya, `/data/volume1/Photos`).
3. Atur panel kanan ke remote cloud Anda (misalnya, `backblaze-b2:nas-backup/photos/`).
4. Pilih **Sync** untuk mencerminkan folder NAS ke cloud, atau **Copy** untuk menambahkan file baru tanpa menghapus data yang telah dihapus.
5. Simpan operasi sebagai tugas bernama.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run a backup job on ASUSTOR NAS with RcloneView" class="img-large img-center" />

### Menjadwalkan tugas

Atur tugas agar berjalan secara otomatis:

- **Setiap hari pukul 02:00** — lakukan pencadangan pada jam penggunaan rendah untuk menghindari dampak pada performa NAS.
- **Sinkronisasi penuh mingguan** — sinkronisasi menyeluruh pada akhir pekan saat permintaan bandwidth paling rendah.
- **Sesuai permintaan** — picu pencadangan secara manual sebelum melakukan perubahan besar.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule automated cloud backups on ASUSTOR NAS" class="img-large img-center" />

## Mounting Penyimpanan Cloud

RcloneView dapat mem-mount penyimpanan cloud sebagai jalur lokal di NAS Anda, membuat file remote dapat diakses seolah-olah berada di disk lokal. Ini berguna untuk:

- **Memperluas kapasitas NAS** dengan penyimpanan cloud.
- **Mengakses file arsip** tanpa perlu mengunduhnya secara manual.
- **Streaming media** dari penyimpanan cloud melalui aplikasi media NAS Anda.

Untuk mengaktifkan mount FUSE di Docker, tambahkan flag berikut ke container Anda:

```bash
--device /dev/fuse --cap-add SYS_ADMIN
```

Kemudian gunakan Mount Manager RcloneView untuk mem-mount remote apa pun ke jalur lokal.

## Memantau Transfer

Saat tugas pencadangan berjalan, pemantauan transfer RcloneView menampilkan progres secara real-time:

- File yang sedang ditransfer
- Kecepatan transfer dan estimasi waktu selesai (ETA)
- Kesalahan dan percobaan ulang
- Jumlah file yang telah selesai

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor NAS cloud backup progress in RcloneView" class="img-large img-center" />

Periksa riwayat tugas untuk memastikan pencadangan terjadwal berhasil diselesaikan. Jika tugas gagal (pemadaman jaringan, kredensial kedaluwarsa), RcloneView mencatat kesalahan tersebut untuk keperluan troubleshooting.

## Praktik Terbaik untuk Pencadangan NAS ASUSTOR

- **Mulai dengan data terpenting Anda** — foto, dokumen, dan basis data terlebih dahulu. Pustaka media dapat menyusul.
- **Gunakan batas bandwidth** selama jam kerja untuk menghindari kejenuhan koneksi internet Anda: atur `--bwlimit 10M` di opsi tugas.
- **Aktifkan versioning** pada penyimpanan cloud Anda untuk melindungi dari ransomware atau penimpaan file yang tidak disengaja.
- **Cadangkan konfigurasi rclone Anda** — direktori `/config/rclone` berisi kredensial cloud Anda. Salin ke lokasi kedua.
- **Pantau kesehatan disk** — pencadangan cloud tidak akan membantu jika disk NAS gagal sebelum pencadangan berjalan. Gunakan peringatan Storage Manager pada ADM.

## Memulai

1. **Instal Portainer** dari App Central ASUSTOR.
2. **Deploy container Docker RcloneView** dengan pemetaan volume seperti yang ditunjukkan di atas.
3. **Tambahkan remote cloud Anda** — Backblaze B2, S3, Google Drive, atau penyedia lain yang didukung.
4. **Buat dan jadwalkan tugas pencadangan** untuk share NAS Anda yang paling penting.
5. **Periksa riwayat tugas setiap minggu** untuk memastikan semuanya berjalan lancar.

NAS ASUSTOR Anda sudah melindungi data Anda secara lokal dengan RAID. Menambahkan pencadangan cloud otomatis dengan RcloneView memberi Anda perlindungan off-site yang sesungguhnya — dan berjalan dengan sendirinya.

---

**Panduan Terkait:**

- [Jembatan Cloud-ke-NAS: Cadangkan ke Synology](https://rcloneview.com/support/blog/cloud-to-synology-nas-with-rcloneview)
- [Menjalankan RcloneView di TrueNAS](https://rcloneview.com/support/blog/rcloneview-truenas-cloud-backup)
- [Otomatiskan Pencadangan Cloud Harian](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
