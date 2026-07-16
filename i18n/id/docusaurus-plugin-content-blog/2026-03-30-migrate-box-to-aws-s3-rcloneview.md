---
slug: migrate-box-to-aws-s3-rcloneview
title: "Migrasi Box ke AWS S3 — Transfer File dengan RcloneView"
authors:
  - tayson
description: "Migrasikan file dari Box ke AWS S3 menggunakan RcloneView. Transfer konten enterprise ke penyimpanan S3 yang skalabel dengan verifikasi checksum dan pekerjaan terjadwal."
keywords:
  - box to aws s3
  - migrate box to s3
  - box cloud migration
  - aws s3 transfer
  - cloud-to-cloud migration
  - rcloneview box transfer
  - enterprise cloud migration
  - box to amazon s3
  - box backup to s3
  - object storage migration
tags:
  - box
  - amazon-s3
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Box ke AWS S3 — Transfer File dengan RcloneView

> Memindahkan konten organisasi Anda dari Box ke AWS S3 membuka penyimpanan yang dapat diprogram dalam skala besar — dan RcloneView menangani pekerjaan beratnya.

Box unggul dalam manajemen konten enterprise dengan fitur metadata, alur kerja, dan tata kelolanya. Namun ketika arsitektur Anda bergeser ke layanan native AWS — fungsi Lambda yang memproses unggahan, Athena yang menjalankan query pada data lake, atau CloudFront yang menyajikan aset — menyimpan file di S3 menghilangkan middleware yang dibutuhkan untuk menjembatani Box dengan stack AWS Anda. RcloneView memigrasikan file dari Box ke bucket S3 melalui antarmuka visual, mempertahankan struktur folder dan memverifikasi setiap transfer.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Beralih dari Box ke AWS S3

AWS S3 menawarkan penyimpanan yang hampir tak terbatas dengan harga granular di enam kelas penyimpanan — mulai dari S3 Standard untuk data yang sering diakses hingga S3 Glacier Deep Archive seharga $0,00099 per GB per bulan untuk penyimpanan jangka panjang. Box mengenakan biaya lisensi per pengguna yang bisa melebihi $20 per pengguna per bulan pada paket enterprise, dan penyimpanannya dikumpulkan (pooled) bukan dialokasikan secara individual.

Bagi tim pengembang, ekosistem S3 tak tertandingi. Notifikasi event memicu fungsi Lambda, S3 Select melakukan query data langsung di tempat, aturan versioning dan replikasi melindungi dari kehilangan data, dan kebijakan IAM menyediakan kontrol akses yang terperinci. API Box mumpuni tetapi dirancang untuk kolaborasi konten, bukan operasi penyimpanan tingkat infrastruktur. Bermigrasi ke S3 menyelaraskan penyimpanan file Anda dengan infrastruktur AWS lainnya.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and AWS S3 remotes in RcloneView" class="img-large img-center" />

## Mengonfigurasi Remote Box dan S3

Tambahkan remote Box di RcloneView dengan memilih "Box" sebagai tipe provider. Alur OAuth akan membuka browser Anda untuk autentikasi Box. Masuk dengan kredensial akun Box Anda dan otorisasi RcloneView. Remote akan terhubung ke folder root Box Anda, termasuk semua folder yang dibagikan kepada Anda yang Anda miliki.

Untuk AWS S3, buat remote baru dan pilih "Amazon S3." Masukkan Access Key ID dan Secret Access Key AWS Anda, atau gunakan IAM role jika RcloneView berjalan di instance EC2. Pilih region target Anda dan tentukan nama bucket. RcloneView akan memvalidasi kredensial dan mengonfirmasi akses ke bucket. Jika Anda perlu membuat bucket baru, lakukan terlebih dahulu di AWS Console dengan region, enkripsi, dan pengaturan versioning pilihan Anda.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring Box to S3 cloud-to-cloud transfer in RcloneView" class="img-large img-center" />

## Menjalankan Migrasi

Gunakan explorer dua panel untuk menjelajahi Box di satu sisi dan S3 di sisi lainnya. Pilih folder Box yang ingin Anda migrasikan — seluruh direktori departemen, arsip proyek, atau pohon konten tertentu. Arahkan ke prefix S3 target di sisi lainnya.

Untuk migrasi terkelola, buat pekerjaan Copy di Job Manager. Atur Box sebagai sumber dan S3 sebagai tujuan. Gunakan mode "Copy" untuk mentransfer file tanpa menghapusnya dari Box, memberi Anda jalur rollback. API Box menggunakan checksum SHA-1, sedangkan S3 menyimpan hash MD5 dan ETag — RcloneView menangani perbandingan menggunakan ukuran file dan waktu modifikasi secara default, dengan opsi verifikasi checksum tersedia bila diperlukan.

Box memberlakukan batas laju API (sekitar 10 panggilan API per detik untuk akun enterprise). RcloneView menghormati batas ini dengan percobaan ulang otomatis dan exponential backoff. Untuk migrasi besar dengan ratusan ribu file, jalankan pekerjaan selama beberapa hari menggunakan jendela terjadwal.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Starting a Box to AWS S3 migration job in RcloneView" class="img-large img-center" />

## Validasi Pasca-Migrasi dan Cutover

Setelah transfer selesai, validasi migrasi menggunakan fitur compare RcloneView. Buka kedua remote berdampingan dan jalankan perbandingan folder untuk memeriksa jumlah file, ukuran, dan struktur. Tinjau riwayat pekerjaan untuk file yang terlewat atau mengalami error, lalu jalankan ulang pekerjaan untuk menangkapnya.

Pertimbangkan untuk mengatur kelas penyimpanan bucket S3 berdasarkan pola akses. File proyek yang sering diakses sebaiknya berada di S3 Standard, sementara konten yang diarsipkan dapat dipindahkan ke S3 Intelligent-Tiering atau Glacier melalui kebijakan lifecycle. Jaga agar remote Box tetap aktif di RcloneView selama periode transisi, jalankan pekerjaan sinkronisasi inkremental hingga semua pengguna telah memigrasikan alur kerja mereka ke S3.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Box to S3 migration transfers" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Autentikasi akun Box Anda melalui OAuth saat membuat remote Box.
3. Tambahkan remote AWS S3 Anda dengan kredensial IAM dan pilih bucket serta region target.
4. Buat pekerjaan Copy dari Box ke S3, konfigurasikan penanganan batas laju, dan jadwalkan selama beberapa hari untuk dataset besar.

Setelah semua konten diverifikasi di S3, alihkan aplikasi Anda dan nonaktifkan penyimpanan Box seiring tim Anda menyelesaikan cutover.

---

**Panduan Terkait:**

- [Migrasi Box ke SharePoint dan OneDrive dengan RcloneView](https://rcloneview.com/support/blog/migrate-box-to-sharepoint-onedrive-rcloneview)
- [Migrasi Box ke Google Drive dengan RcloneView](https://rcloneview.com/support/blog/migrate-box-to-google-drive-rcloneview)
- [Mount Penyimpanan Box sebagai Network Drive dengan RcloneView](https://rcloneview.com/support/blog/mount-box-storage-network-drive-rcloneview)

<CloudSupportGrid />
