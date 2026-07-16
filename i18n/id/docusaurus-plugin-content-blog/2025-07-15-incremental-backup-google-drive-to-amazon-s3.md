---
slug: backup-google-drive-to-amazon-s3
title: Mencadangkan Google Drive ke Amazon S3 dengan RcloneView
authors:
  - jay
description: Salin folder Google Drive ke Amazon S3 dengan tools point-and-click dari RcloneView—hubungkan sekali, jalankan pencadangan, dan simpan salinan tambahan untuk ketenangan pikiran.
keywords:
  - rcloneview
  - google drive
  - amazon s3
  - cloud backup
  - cloud sync
  - rclone gui
tags:
  - google-drive
  - amazon-s3
  - cloud-backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mencadangkan Google Drive ke Amazon S3 dengan RcloneView

> Pertahankan kelancaran kerja tim di Google Drive dan simpan salinan cadangan di Amazon S3. Dengan RcloneView Anda cukup klik untuk seluruh proses pencadangan—tanpa skrip, tanpa command line.

## Apa yang membuat kombinasi ini berguna?

- **Google Drive** adalah tempat dokumen, spreadsheet, dan folder bersama Anda hidup sehari-hari.  
- **Amazon S3** menyimpan salinan selama bertahun-tahun dengan versioning, lifecycle policies, dan tingkat arsip berbiaya rendah.  
- **RcloneView** menghubungkan keduanya dengan explorer dual-pane, pratinjau perbandingan, dan pekerjaan terjadwal sehingga Anda selalu tahu apa yang sedang dipindahkan.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Sebelum Anda mulai

1. **Pilih folder yang penting** – tinjau ruang proyek, Shared drives, dan folder handoff apa pun. Lewati folder cache atau temp yang tidak Anda butuhkan.  
2. **Buat atau pilih S3 bucket** – tentukan region, nama bucket, dan enkripsi default (SSE-S3 atau SSE-KMS). [AWS Documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/serv-side-encryption.html)  
3. **Periksa batasan provider** – Google membatasi transfer Drive API hingga **750 GB per pengguna per hari** dan file hingga **5 TB**. Rencanakan pemindahan besar dalam beberapa hari. [Google for Developers](https://developers.google.com/drive/api/guides/limits) [Google Help](https://support.google.com/drive/answer/37603)  
4. **Petakan struktur folder Anda** – prefix S3 seperti `drive-backup/marketing/2025/` membuat snapshot mudah dijelajahi nantinya.  
5. **Lihat sekali di aplikasi** – lihat sekilas screenshot explorer di [Browse & manage remote storage](/howto/rcloneview-basic/browse-and-manage-remote-storage) agar tata letaknya terasa familiar.

## Langkah 1 — Hubungkan kedua layanan di RcloneView

1. Buka **RcloneView** → tekan **`+ New Remote`**.  
2. Pilih **Google Drive**, masuk (sign in), dan beri remote nama yang jelas seperti `Drive-Main`. Jika Anda mencadangkan Shared drives, aktifkan itu saat setup.  
3. Tambahkan remote lain untuk **Amazon S3**. Tempel access key/secret Anda (atau gunakan IAM role), pilih bucket tujuan, dan beri nama `S3-Backup`.  
4. Konfirmasi kedua remote muncul berdampingan di explorer. [Panduan Remote Manager](/howto/rcloneview-basic/remote-manager) memiliki screenshot tambahan jika Anda butuh penyegaran.

<img src="/support/images/en/tutorials/browsing-aws-s3-and-google-drive-via-ec2-rclone.png" alt="browsing aws s3 and google drive via ec2 rclone" class="img-medium img-center" />

## Langkah 2 — Rencanakan pekerjaan pencadangan

- **Dry run sebuah folder**: Buka `Drive-Main` di sebelah kiri dan `S3-Backup` di sebelah kanan. Seret folder uji kecil ke seberang untuk melihat dialog transfer.  
- **Gunakan Compare**: Tool Compare menyoroti file baru dan yang berubah sebelum Anda menyalin. Ini adalah tampilan yang sama yang ditunjukkan di [Compare folder contents](/howto/rcloneview-basic/compare-folder-contents).  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare view in RcloneView before copying Google Drive files" class="img-medium img-center" />

## Langkah 3 — Jalankan pencadangan pertama

1. Di toolbar pilih **Copy** (sekali jalan) atau **Sync (copy direction)** jika Anda ingin tujuan mencerminkan Drive tanpa menghapus data di Drive.  
2. Tambahkan aturan filtering jika Anda ingin melewati folder seperti `/Personal/`.  
3. Jalankan **Dry Run** terlebih dahulu. Anda akan melihat ringkasan bersih dari transfer yang tertunda.  
4. Klik **Start**. Pantau progres di Job Monitor—byte yang ditransfer, jumlah file, dan peringatan apa pun semuanya muncul di sini.

## Langkah 4 — Jadwalkan salinan lanjutan

Setelah proses pertama terlihat baik:

1. Simpan sebagai **Job** langsung dari dialog penyelesaian.  
2. Buka **Job Manager** → atur jadwal harian atau mingguan. Ini mengikuti pola yang sama seperti [panduan Job scheduling](/howto/rcloneview-advanced/job-scheduling-and-execution).  
3. Periksa pratinjau kalender untuk mengonfirmasi waktu, lalu biarkan RcloneView mengambil alih dari sini.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Scheduling a backup job in RcloneView" class="img-medium img-center" />

## Menjaga salinan S3 tetap rapi

- **Lifecycle policies**: Pindahkan pencadangan yang lebih tua dari 90 hari ke Glacier Instant Retrieval atau Deep Archive untuk mengurangi biaya. [AWS Documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html)  
- **Bucket versioning**: Aktifkan jika Anda ingin setiap overwrite tersimpan. Setiap proses RcloneView kemudian menjadi titik pemulihan.  
- **Tags**: Tambahkan tag seperti `Team=Finance` atau `Compliance=SOC2` ke objek sehingga billing dan audit tetap sederhana.

Blog kami tentang [transfer cloud-to-cloud RcloneView](/blog/Effortless-Cloud-to-Cloud-Transfers-&-Syncing) membahas lebih banyak ide untuk memfilter dan mengatur salinan cloud.

## Pantau dan pulihkan dengan percaya diri

- **Job History**: Setiap proses mencatat byte, durasi, dan pesan error. Ekspor log langsung dari UI saat auditor memintanya.  
- **Dasbor cloud**: Gunakan S3 Storage Lens atau CloudWatch untuk memantau pertumbuhan bucket. [AWS Documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-lens.html)  
- **Langkah pemulihan**: Pilih snapshot yang dibutuhkan di S3, lalu salin kembali ke Drive atau ke bucket lain menggunakan template job RcloneView yang sama.  

## Panduan & sumber daya terkait

- [Setup cepat Google OAuth di RcloneView](/howto/remote-storage-connection-settings/add-oath-online-login)  
- [Setup remote Amazon S3](/howto/remote-storage-connection-settings/s3) — screenshot kredensial langkah demi langkah.  
- [Pemantauan transfer real-time](/howto/rcloneview-basic/real-time-transfer-monitoring) — lihat cara membaca grafik progres job.

## FAQ

**Apakah Google Docs, Sheets, dan Slides ikut tersalin?**  
Ya. RcloneView mengekspornya dalam format yang Anda pilih (DOCX, XLSX, dll.) saat pencadangan berjalan.

**Bagaimana jika saya mencapai batas 750 GB per hari?**  
RcloneView berhenti sejenak dengan pesan yang jelas. Tunggu 24 jam atau beralih ke akun layanan Google lain, lalu mulai ulang job—proses akan dilanjutkan dari titik terakhir.

**Bisakah saya menggunakan Wasabi atau Cloudflare R2 sebagai pengganti AWS S3?**  
Tentu saja. Siapkan remote yang kompatibel dengan S3 di RcloneView dan arahkan ke endpoint provider tersebut.

**Siap menjaga file Google Drive Anda tetap aman dan mudah dicari untuk jangka panjang?**

<CloudSupportGrid />
