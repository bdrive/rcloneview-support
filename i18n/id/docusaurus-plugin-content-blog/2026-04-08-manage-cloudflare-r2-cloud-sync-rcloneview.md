---
slug: manage-cloudflare-r2-cloud-sync-rcloneview
title: "Kelola Penyimpanan Cloudflare R2 dan Sinkronisasi Cloud dengan RcloneView"
authors:
  - tayson
description: "Kelola penyimpanan Cloudflare R2 dengan RcloneView. Jelajahi bucket, sinkronkan file, dan jadwalkan pencadangan tanpa biaya egress menggunakan GUI visual yang kompatibel dengan S3."
keywords:
  - rcloneview
  - cloudflare r2 management
  - cloudflare r2 sync
  - r2 backup tool
  - r2 file manager
  - r2 s3 compatible gui
  - cloudflare r2 rclone
  - zero egress cloud storage
  - r2 bucket management
  - r2 multi-cloud sync
tags:
  - cloudflare-r2
  - r2
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Penyimpanan Cloudflare R2 dan Sinkronisasi Cloud dengan RcloneView

> Cloudflare R2 menghadirkan penyimpanan objek yang kompatibel dengan S3 tanpa biaya egress — **RcloneView** memberi Anda antarmuka visual untuk mengelola bucket, menyinkronkan data, dan mengotomatiskan pencadangan.

Cloudflare R2 dengan cepat mendapatkan popularitas sebagai alternatif yang hemat biaya dibandingkan AWS S3. Dengan menghilangkan biaya egress per gigabyte, R2 membuat pengambilan data menjadi lebih terprediksi dan terjangkau — sebuah terobosan bagi beban kerja yang sering menyajikan konten. RcloneView terhubung ke R2 menggunakan API yang kompatibel dengan S3 dan menyediakan GUI manajemen file yang lengkap: jelajahi bucket, unggah dan unduh file, sinkronkan dengan cloud lain, dan jadwalkan pencadangan otomatis.

Baik Anda menghosting aset statis, mengarsipkan log aplikasi, atau menggunakan R2 sebagai pusat data terpadu di berbagai cloud, RcloneView menghilangkan kebutuhan akan perintah CLI dan membuat pengelolaan R2 dapat diakses oleh semua orang di tim Anda.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Cloudflare R2 di RcloneView

R2 menggunakan kredensial yang kompatibel dengan S3, sehingga menambahkannya ke RcloneView mengikuti alur pengaturan remote S3. Buka Remote Manager, pilih **Amazon S3 Compatible**, dan masukkan kredensial R2 Anda:

- **Provider**: Cloudflare
- **Access Key ID**: Dihasilkan dari dasbor Cloudflare di bawah R2 > Manage R2 API Tokens
- **Secret Access Key**: Secret yang sesuai
- **Endpoint**: `https://<account-id>.r2.cloudflarestorage.com`

Setelah dikonfigurasi, RcloneView akan menampilkan semua bucket R2 Anda di panel explorer. Anda dapat membuat bucket baru, menghapus bucket yang kosong, dan menjelajahi hierarki objek seperti halnya dengan sistem file mana pun.

R2 tidak mendukung semua fitur S3 — khususnya, R2 tidak memiliki kebijakan lifecycle dan beberapa kasus khusus multipart upload. RcloneView menangani keterbatasan ini dengan baik, beralih ke operasi yang kompatibel ketika fitur yang tidak didukung ditemui.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Cloudflare R2 remote in RcloneView" class="img-large img-center" />

## Keunggulan Tanpa Biaya Egress

Pembeda terbesar dari R2 adalah model penetapan harganya. AWS S3 mengenakan biaya $0,09/GB untuk data yang ditransfer keluar ke internet. Untuk beban kerja yang menyajikan 10 TB per bulan, itu berarti $900 hanya untuk egress. R2 tidak mengenakan biaya apa pun untuk egress — Anda hanya membayar untuk penyimpanan ($0,015/GB/bulan) dan operasi Class A/B.

Ini membuat R2 ideal sebagai target sinkronisasi. Anda dapat mereplikasi data dari Google Drive, OneDrive, atau S3 ke R2, lalu menyajikannya tanpa khawatir tentang tagihan bandwidth. RcloneView membuat replikasi ini menjadi sederhana: atur pekerjaan sinkronisasi dari sumber mana pun ke bucket R2 Anda, dan biaya untuk mengakses data tersebut turun menjadi nol.

Bagi tim yang mendistribusikan dataset besar — file media, build perangkat lunak, model machine learning — penghematannya sangat besar. Sinkronisasi terjadwal RcloneView memastikan R2 selalu memiliki salinan terbaru.

## Menyinkronkan R2 dengan Penyedia Cloud Lain

Explorer dua panel RcloneView menempatkan R2 berdampingan dengan remote lainnya. Alur kerja umum meliputi:

- **Google Drive ke R2**: Mencadangkan dokumen kolaboratif ke R2 untuk retensi jangka panjang yang hemat biaya.
- **S3 ke R2**: Mencerminkan bucket S3 yang ada ke R2 untuk mengurangi biaya egress tanpa mengubah lapisan aplikasi Anda.
- **R2 ke Backblaze B2**: Membuat arsip sekunder pada penyedia yang berbeda untuk pemulihan bencana.

Karena R2 mendukung checksum S3 standar (MD5 melalui ETag untuk unggahan non-multipart), RcloneView dapat secara efisien membandingkan file antara R2 dan penyedia lain yang kompatibel dengan S3. File yang tidak berubah akan dilewati, menjaga operasi sinkronisasi tetap cepat dan biaya API tetap rendah.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Cloudflare R2 with other cloud providers in RcloneView" class="img-large img-center" />

## Menjadwalkan Pencadangan R2 Otomatis

Pencadangan otomatis ke R2 menjadi mudah dengan penjadwal RcloneView. Tentukan pekerjaan sinkronisasi — misalnya, pencadangan malam hari dari folder proyek Google Drive Anda ke bucket R2 — dan atur jadwalnya. RcloneView menangani deteksi delta, mentransfer hanya file yang berubah, dan mencatat setiap eksekusi.

Panel riwayat pekerjaan menyediakan statistik terperinci: file yang ditransfer, file yang dilewati, byte yang dipindahkan, durasi, dan kesalahan yang ditemui. Jika transfer gagal di tengah proses (gangguan jaringan, timeout API), RcloneView akan melanjutkan dari titik terakhir pada eksekusi terjadwal berikutnya.

Untuk data yang penting, pertimbangkan untuk menjalankan dua pekerjaan terjadwal ke bucket R2 yang berbeda di wilayah yang berbeda (R2 mendukung penempatan otomatis atau petunjuk lokasi tertentu). Ini memberikan redundansi geografis tanpa kerumitan mengonfigurasi replikasi lintas wilayah secara manual.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated backups to Cloudflare R2 in RcloneView" class="img-large img-center" />

## Menjelajahi dan Mengelola Bucket R2

Explorer RcloneView memungkinkan Anda menavigasi bucket R2 seolah-olah itu adalah folder lokal. Anda dapat mengunggah file melalui drag-and-drop, membuat prefix seperti folder, mengganti nama objek, dan menghapus secara massal. Explorer menampilkan ukuran objek, stempel waktu terakhir dimodifikasi, dan metadata storage class.

Untuk bucket dengan jutaan objek, RcloneView melakukan paginasi permintaan listing secara efisien sehingga antarmuka tetap responsif. Anda dapat memfilter berdasarkan prefix atau menggunakan fungsi pencarian untuk menemukan objek tertentu tanpa harus menggulir seluruh bucket.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files into Cloudflare R2 buckets in RcloneView" class="img-large img-center" />

## Memantau Transfer dan Mengoptimalkan Performa

R2 mendukung multipart upload untuk objek yang lebih besar dari 5 MB, dan RcloneView menggunakan ini secara otomatis untuk memaksimalkan throughput. Dasbor pemantauan real-time menampilkan progres per file, kecepatan transfer keseluruhan, dan perkiraan waktu tersisa.

Untuk migrasi berskala besar, Anda dapat menyesuaikan concurrency (jumlah transfer paralel) dan ukuran chunk agar sesuai dengan kapasitas jaringan Anda. Pembatasan bandwidth tersedia untuk mencegah transfer R2 menghabiskan seluruh bandwidth yang tersedia selama jam kerja.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Cloudflare R2 transfer progress in RcloneView" class="img-large img-center" />

## Tips Optimasi Biaya

Untuk menjaga biaya R2 serendah mungkin, ikuti praktik berikut dengan RcloneView:

- **Gunakan sinkronisasi, bukan salin**: Sinkronisasi menghapus file di tujuan yang sudah tidak ada di sumber, mencegah objek yatim menumpuk biaya penyimpanan.
- **Filter file yang tidak diperlukan**: Gunakan aturan filter RcloneView untuk mengecualikan file sementara, cache, dan metadata OS dari pencadangan.
- **Pantau pertumbuhan penyimpanan**: Tinjau riwayat pekerjaan secara berkala untuk melacak berapa banyak data yang ditambahkan setiap pekerjaan sinkronisasi ke bucket R2 Anda.
- **Gabungkan dengan bandingkan**: Sebelum menjalankan sinkronisasi berskala besar, gunakan fitur bandingkan RcloneView untuk melihat pratinjau perubahan yang akan terjadi dan menghindari operasi yang tidak perlu.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing R2 bucket contents with source cloud in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buat token API R2 di dasbor Cloudflare dan tambahkan R2 sebagai remote yang kompatibel dengan S3 di Remote Manager.
3. Jelajahi bucket R2 Anda di explorer dua panel dan atur pekerjaan sinkronisasi dari penyedia cloud lain.
4. Jadwalkan pencadangan otomatis untuk menjaga R2 tetap sinkron dengan penyimpanan utama Anda.

Cloudflare R2 menawarkan penetapan harga yang terprediksi tanpa biaya egress, dan RcloneView menyediakan lapisan manajemen visual untuk memanfaatkannya secara maksimal.

---

**Panduan Terkait:**

- [Jelajahi dan Kelola Penyimpanan Remote](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Tambahkan AWS S3 dan yang Kompatibel dengan S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Penjadwalan Pekerjaan](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
