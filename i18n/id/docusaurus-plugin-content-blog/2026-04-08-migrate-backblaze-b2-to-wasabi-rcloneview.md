---
slug: migrate-backblaze-b2-to-wasabi-rcloneview
title: "Migrasikan Backblaze B2 ke Wasabi dengan RcloneView"
authors:
  - tayson
description: "Migrasikan dari Backblaze B2 ke Wasabi dengan RcloneView. Bandingkan model harga, siapkan kedua remote, transfer data, dan verifikasi migrasi langkah demi langkah."
keywords:
  - rcloneview
  - backblaze b2 to wasabi
  - migrate b2 to wasabi
  - wasabi cloud migration
  - backblaze migration tool
  - s3 compatible migration
  - cloud storage migration
  - wasabi no egress fees
  - b2 data transfer
  - object storage migration gui
tags:
  - RcloneView
  - backblaze-b2
  - wasabi
  - migration
  - cloud-migration
  - s3-compatible
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasikan Backblaze B2 ke Wasabi dengan RcloneView

> Backblaze B2 menawarkan biaya penyimpanan yang rendah, tetapi biaya egress dan API dapat bertambah — **RcloneView** membuat migrasi ke harga flat-rate Wasabi menjadi sederhana dan dapat diverifikasi.

Backblaze B2 dan Wasabi adalah dua penyedia object storage yang kompatibel dengan S3 paling populer bagi tim yang memperhatikan biaya. Meskipun B2 dikenal dengan tarif penyimpanan per-GB yang rendah ($0,006/GB/bulan), model harganya mencakup biaya egress ($0,01/GB) dan biaya per-transaksi yang dapat mengejutkan tim dengan beban kerja yang banyak membaca data. Wasabi menawarkan tarif flat ($0,0069/GB/bulan) tanpa biaya egress atau API, sehingga biaya menjadi sepenuhnya dapat diprediksi. RcloneView menangani migrasi antara kedua penyedia yang kompatibel dengan S3 ini dengan antarmuka visual yang menghilangkan kebutuhan skrip CLI.

Panduan ini membahas migrasi secara lengkap — mulai dari memahami perbedaan harga hingga memverifikasi setiap objek setelah transfer.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Migrasi dari Backblaze B2 ke Wasabi

Keputusan untuk migrasi biasanya bermuara pada prediktabilitas. Tarif penyimpanan B2 sedikit lebih rendah daripada Wasabi, tetapi setelah memperhitungkan egress dan transaksi Class B/C, total biaya sering kali melebihi tarif flat Wasabi — terutama untuk beban kerja yang sering membaca data.

Pertimbangkan skenario berikut: 10 TB penyimpanan di B2 berbiaya $60/bulan. Jika Anda mengunduh 5 TB data tersebut setiap bulan (menyajikan media, mendistribusikan build, menjalankan analitik), egress menambah $50. Transaksi Class B untuk mencantumkan dan mengunduh file menambah biaya lebih lanjut. Di Wasabi, 10 TB yang sama berbiaya total $69/bulan, terlepas dari seberapa banyak data yang Anda baca atau berapa banyak panggilan API yang Anda buat.

Wasabi juga menerapkan kebijakan penyimpanan minimum 90 hari — menghapus objek sebelum 90 hari akan dikenakan biaya pro-rata untuk sisa periode tersebut. Pertimbangkan hal ini dalam perencanaan Anda jika Anda menyimpan data berumur pendek.

## Menyiapkan Backblaze B2 di RcloneView

Buka Remote Manager dan tambahkan remote Backblaze B2. Anda dapat menggunakan API B2 native atau API yang kompatibel dengan S3. Untuk keperluan migrasi, endpoint yang kompatibel dengan S3 direkomendasikan karena memungkinkan RcloneView menggunakan logika transfer yang sama untuk sumber maupun tujuan.

Masukkan Application Key ID dan Application Key B2 Anda. Jika Anda memiliki kunci khusus bucket, gunakan itu untuk keamanan yang lebih ketat — kunci tersebut hanya memerlukan akses baca untuk sumber.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Backblaze B2 remote in RcloneView" class="img-large img-center" />

## Menyiapkan Wasabi di RcloneView

Tambahkan Wasabi sebagai remote yang kompatibel dengan S3. Di Remote Manager, pilih **Amazon S3 Compatible** dan konfigurasikan:

- **Provider**: Wasabi
- **Access Key** dan **Secret Key**: Dihasilkan dari konsol Wasabi
- **Region**: Pilih region yang paling dekat dengan pengguna Anda (us-east-1, eu-central-1, ap-northeast-1, dll.)
- **Endpoint**: Dikonfigurasi otomatis berdasarkan region yang dipilih

Buat bucket tujuan Anda di konsol Wasabi atau melalui explorer RcloneView. Pilih region yang sama dengan basis pengguna utama Anda untuk meminimalkan latensi.

## Menjalankan Migrasi

Buka explorer dua panel dengan B2 di sebelah kiri dan Wasabi di sebelah kanan. Navigasikan ke bucket B2 yang ingin Anda migrasikan dan bucket tujuan Wasabi.

Untuk migrasi lengkap, buat job sinkronisasi. RcloneView mendaftar semua objek di bucket B2, membandingkannya dengan tujuan Wasabi, dan mentransfer hanya yang hilang atau telah berubah. Karena kedua penyedia mendukung checksum MD5 melalui ETag, perbandingan file berlangsung cepat dan akurat.

Pertimbangan utama untuk transfer:

- **Egress dari B2**: Anda akan dikenakan biaya egress B2 selama migrasi. Untuk meminimalkan biaya, pertimbangkan menggunakan kemitraan egress gratis Backblaze dengan Cloudflare (jika berlaku untuk pengaturan Anda) atau B2 bandwidth alliance.
- **Transfer paralel**: Baik B2 maupun Wasabi mendukung konkurensi tinggi. Atur transfer paralel ke 8-16 untuk throughput optimal.
- **File besar**: Kedua penyedia mendukung multipart upload. RcloneView secara otomatis menggunakan multipart untuk file di atas ambang batas, memastikan transfer objek besar yang andal.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Backblaze B2 to Wasabi in RcloneView two-pane explorer" class="img-large img-center" />

## Memantau Progres Transfer

Dasbor pemantauan real-time menampilkan status setiap file dalam antrean transfer. Anda dapat melacak progres per-file, persentase penyelesaian keseluruhan, dan kecepatan transfer saat ini. Jika kondisi jaringan berubah, jeda transfer dan lanjutkan nanti — RcloneView akan melanjutkan dari titik terakhir.

Untuk migrasi multi-terabyte, transfer dapat berjalan selama berjam-jam atau berhari-hari. Logging RcloneView memastikan Anda memiliki catatan lengkap mengenai apa yang ditransfer, apa yang dilewati, dan error apa pun yang terjadi.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring B2 to Wasabi migration progress in RcloneView" class="img-large img-center" />

## Memverifikasi Migrasi

Setelah transfer selesai, jalankan operasi compare antara sumber B2 dan tujuan Wasabi. RcloneView mencantumkan file yang hanya ada di salah satu sisi dan file yang berbeda dalam ukuran atau checksum. Hasil compare yang bersih — tanpa perbedaan — mengonfirmasi migrasi yang berhasil.

Perhatikan hal berikut:

- **Direktori kosong**: Object storage tidak memiliki direktori sungguhan. Baik B2 maupun Wasabi menggunakan "folder" berbasis prefix. RcloneView menangani hal ini secara konsisten, tetapi verifikasi bahwa logika aplikasi Anda tidak bergantung pada penanda direktori.
- **Preservasi metadata**: Metadata standar (content-type, last-modified) dipertahankan selama transfer yang kompatibel dengan S3. Metadata kustom (x-amz-meta-*) juga ditransfer oleh RcloneView.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying B2 to Wasabi migration with compare in RcloneView" class="img-large img-center" />

## Pembersihan Pasca-Migrasi

Setelah Anda memverifikasi migrasi dan memperbarui semua endpoint aplikasi dari B2 ke Wasabi:

1. **Perbarui DNS dan konfigurasi aplikasi**: Arahkan layanan Anda ke endpoint Wasabi yang baru.
2. **Jalankan sinkronisasi akhir**: Tangkap file apa pun yang ditambahkan ke B2 selama jendela migrasi.
3. **Simpan data B2 sementara**: Pertahankan bucket B2 untuk periode rollback (2-4 minggu adalah hal yang umum).
4. **Hapus data B2**: Setelah memastikan semuanya berfungsi di Wasabi, hapus bucket B2 untuk menghentikan biaya penyimpanan.

Ingat kebijakan penyimpanan minimum 90 hari Wasabi saat merencanakan strategi retensi Anda. Jika Anda menghapus objek dari Wasabi sebelum 90 hari, Anda akan ditagih untuk seluruh periode 90 hari.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing migration job history in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan Backblaze B2 dan Wasabi sebagai remote yang kompatibel dengan S3 di Remote Manager.
3. Jalankan job sinkronisasi dari B2 ke Wasabi menggunakan explorer dua panel dan pantau progres secara real time.
4. Verifikasi migrasi dengan fitur compare dan perbarui endpoint aplikasi Anda.

B2 dan Wasabi sama-sama merupakan penyedia object storage yang sangat baik, tetapi ketika biaya yang dapat diprediksi menjadi penting, model flat-rate Wasabi menang — dan RcloneView membuat perpindahan ini menjadi tanpa hambatan.

---

**Panduan Terkait:**

- [Menambahkan AWS S3 dan yang Kompatibel dengan S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Membandingkan isi folder](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Pemantauan Transfer Real-time](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />
