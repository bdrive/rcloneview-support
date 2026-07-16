---
slug: sync-google-drive-to-digitalocean-spaces-rcloneview
title: "Sinkronisasi Google Drive ke DigitalOcean Spaces — Pencadangan Cloud dengan RcloneView"
authors:
  - tayson
description: "Sinkronkan Google Drive ke DigitalOcean Spaces untuk pencadangan cloud yang terjangkau dan kompatibel S3. Siapkan tugas sinkronisasi otomatis dengan antarmuka visual RcloneView."
keywords:
  - sync google drive to digitalocean spaces
  - google drive digitalocean backup
  - google drive s3 compatible sync
  - digitalocean spaces backup
  - cloud-to-cloud sync
  - rcloneview google drive sync
  - google drive object storage
  - digitalocean spaces transfer
  - automated cloud backup
  - google drive redundancy
tags:
  - google-drive
  - digitalocean-spaces
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sinkronisasi Google Drive ke DigitalOcean Spaces — Pencadangan Cloud dengan RcloneView

> Mencadangkan Google Drive ke DigitalOcean Spaces memberi Anda jaring pengaman yang terjangkau dan kompatibel S3 untuk setiap berkas di Drive Anda.

Google Drive menangani kolaborasi dan pengeditan real-time dengan sangat baik, tetapi tidak dirancang sebagai target pencadangan arsip. DigitalOcean Spaces menawarkan penyimpanan objek kompatibel S3 dengan tarif tetap sebesar $5 per bulan untuk 250 GB (dengan penyimpanan tambahan $0,02/GB), menjadikannya tujuan pencadangan Drive yang dapat diprediksi dan terjangkau. RcloneView menghubungkan kedua layanan ini dan menjaganya tetap tersinkronisasi melalui tugas terjadwal dengan pemantauan progres secara real-time.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa DigitalOcean Spaces untuk Pencadangan Google Drive

DigitalOcean Spaces menyediakan penyimpanan objek yang kompatibel S3 di berbagai region (NYC, SFO, AMS, SGP, FRA). Model harga tetapnya menghilangkan kejutan biaya per-permintaan yang bisa muncul di AWS S3. Untuk tim yang sudah menjalankan infrastruktur di DigitalOcean, Spaces terintegrasi secara native — berkas yang disinkronkan dari Google Drive langsung dapat diakses oleh Droplet, klaster Kubernetes, dan fungsi serverless.

Opsi pencadangan native Google Drive terbatas. Google Takeout menghasilkan ekspor satu kali, bukan mirror berkelanjutan. Alat pencadangan pihak ketiga sering mengenakan biaya per pengguna yang setara dengan biaya lisensi Google Workspace tambahan. Menyinkronkan Drive ke Spaces melalui RcloneView hanya membebani biaya penyimpanan Spaces dan berjalan di mesin atau server Anda sendiri.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and DigitalOcean Spaces remotes in RcloneView" class="img-large img-center" />

## Menyiapkan Remote

Tambahkan remote Google Drive di RcloneView dengan memilih "Google Drive" sebagai provider. Alur OAuth melakukan autentikasi melalui browser Anda — masuk dengan akun Google Anda dan berikan akses. Anda dapat membatasi ruang lingkup remote ke seluruh Drive, shared drive tertentu, atau satu folder saja dengan mengonfigurasi root folder ID.

Untuk DigitalOcean Spaces, buat remote yang kompatibel S3. Pilih "Amazon S3 Compliant" lalu "DigitalOcean Spaces" dari dropdown provider. Masukkan Access Key dan Secret Key Spaces Anda (dibuat di panel kontrol DigitalOcean di bawah API > Spaces Keys). Atur endpoint ke region pilihan Anda, seperti `nyc3.digitaloceanspaces.com` atau `fra1.digitaloceanspaces.com`. RcloneView memvalidasi kredensial dan menampilkan daftar Spaces yang sudah Anda miliki.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Browsing Google Drive and DigitalOcean Spaces in RcloneView explorer" class="img-large img-center" />

## Membuat Tugas Sinkronisasi

Buka Job Manager RcloneView dan buat tugas baru. Atur Google Drive sebagai sumber dan Space DigitalOcean Anda sebagai tujuan. Pilih mode "Sync" untuk menjaga mirror yang persis sama, atau mode "Copy" jika Anda ingin mempertahankan berkas yang terhapus di Spaces meskipun sudah dihapus dari Drive.

Google Drive menyimpan Google Docs, Sheets, dan Slides sebagai format cloud-native tanpa ekstensi berkas tradisional. RcloneView secara otomatis mengekspor berkas-berkas ini sebagai padanan Microsoft Office-nya (`.docx`, `.xlsx`, `.pptx`) selama transfer, memastikan berkas tersebut sampai di Spaces sebagai berkas yang dapat digunakan. Anda dapat menyesuaikan format ekspor di konfigurasi remote jika Anda lebih memilih PDF atau format lain.

Konfigurasikan transfer paralel untuk mempercepat sinkronisasi awal. Empat hingga delapan transfer bersamaan biasanya bekerja dengan baik dalam batas kuota API Google Drive. Atur batas bandwidth jika Anda berbagi koneksi dengan layanan lain.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time monitoring of Google Drive to DigitalOcean Spaces sync" class="img-large img-center" />

## Penjadwalan dan Pemeliharaan Berkelanjutan

Jadwalkan tugas sinkronisasi untuk berjalan setiap malam atau setiap minggu tergantung seberapa sering Drive Anda berubah. Penjadwal RcloneView mendukung pengaturan waktu bergaya cron, dan setiap eksekusi hanya mentransfer berkas yang berubah sejak sinkronisasi terakhir. Panel riwayat tugas melacak setiap eksekusi dengan stempel waktu, jumlah berkas, dan volume transfer.

DigitalOcean Spaces mendukung CDN bawaan. Setelah berkas Drive Anda disinkronkan, Anda dapat mengaktifkan CDN Spaces untuk menyajikan berkas secara global — berguna untuk mendistribusikan aset pemasaran, dokumentasi, atau media yang berasal dari Google Drive.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling Google Drive to DigitalOcean Spaces backup in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Autentikasi akun Google Drive Anda melalui OAuth dan opsional batasi ruang lingkup remote ke folder atau shared drive tertentu.
3. Tambahkan remote DigitalOcean Spaces Anda dengan API key dan endpoint region Anda.
4. Buat tugas Sync dan jadwalkan agar berjalan secara berkala untuk pencadangan berkelanjutan.

Dengan Google Drive tersinkronisasi ke DigitalOcean Spaces, berkas Anda hidup di dua cloud yang independen — terlindungi dari penghapusan tidak sengaja, penguncian akun, dan gangguan penyedia layanan.

---

**Panduan Terkait:**

- [Transfer Google Drive ke Akun Lain dengan Mudah](https://rcloneview.com/support/blog/transfer-google-drive-to-another-account-easily)
- [Mount DigitalOcean Spaces sebagai Drive Lokal dengan RcloneView](https://rcloneview.com/support/blog/mount-digitalocean-spaces-local-drive-rcloneview)
- [Sinkronkan Linode Object Storage, S3, dan Google Drive dengan RcloneView](https://rcloneview.com/support/blog/sync-linode-object-storage-s3-google-drive-rcloneview)

<CloudSupportGrid />
