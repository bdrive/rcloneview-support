---
slug: rclone-about-storage-usage-analysis-rcloneview
title: "Menganalisis Penggunaan Penyimpanan Cloud dan Kuota dengan RcloneView"
authors:
  - tayson
description: "Pantau penggunaan penyimpanan cloud, periksa kuota, identifikasi folder besar, dan rencanakan kapasitas di berbagai provider menggunakan dashboard RcloneView dan perintah rclone about."
keywords:
  - rclone about storage usage
  - cloud storage quota monitor
  - rcloneview storage analysis
  - check cloud storage space
  - cloud capacity planning
  - storage usage per remote
  - rclone disk usage
  - cloud quota monitoring tool
  - compare cloud storage usage
  - rcloneview dashboard storage
tags:
  - feature
  - tips
  - cost-optimization
  - dashboard
  - monitoring
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Menganalisis Penggunaan Penyimpanan Cloud dan Kuota dengan RcloneView

> Sebelum Anda dapat mengoptimalkan biaya cloud, Anda perlu melihat dengan jelas ke mana penyimpanan Anda digunakan. RcloneView menempatkan data penggunaan dan informasi kuota untuk setiap remote yang terhubung dalam satu tempat.

Sebagian besar biaya penyimpanan cloud didorong oleh volume. Baik Anda membayar per gigabyte di S3, tetap berada dalam free tier di Google Drive, atau berbagi kuota tim di OneDrive, mengetahui berapa banyak ruang yang digunakan setiap remote sangat penting untuk kontrol biaya dan perencanaan kapasitas. Perintah `about` milik rclone melakukan query ke API provider untuk mendapatkan total, terpakai, bebas, dan ruang yang ada di trash. RcloneView menampilkan informasi ini secara visual sehingga Anda dapat memantau semua remote Anda tanpa harus berpindah-pindah antara dashboard provider.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Apa yang Dilaporkan Rclone About

Perintah `rclone about` mengembalikan metrik penyimpanan langsung dari API provider. Respons tipikal mencakup:

| Metrik | Deskripsi |
|--------|-------------|
| **Total** | Total kuota penyimpanan yang dialokasikan untuk akun |
| **Used** | Ruang yang saat ini digunakan oleh file |
| **Free** | Ruang tersedia yang tersisa |
| **Trashed** | Ruang yang digunakan oleh item di trash/recycle bin |
| **Other** | Ruang yang digunakan oleh layanan lain (misalnya, Gmail untuk akun Google) |

Tidak semua provider melaporkan semua kolom. Layanan yang kompatibel dengan S3, misalnya, sering hanya melaporkan ruang yang terpakai karena bucket tidak memiliki kuota tetap. Google Drive melaporkan kelima kolom tersebut, menjadikannya salah satu yang paling informatif.

## Melihat Penggunaan Penyimpanan di RcloneView

RcloneView menyediakan ringkasan visual dari remote yang terhubung:

1. Buka **RcloneView** dan navigasikan ke **Dashboard** atau **Remote Explorer**.
2. Pilih remote yang ingin Anda periksa.
3. Lihat ringkasan penyimpanan yang menunjukkan ruang terpakai, bebas, dan total.

Untuk pemeriksaan cepat di semua remote, dashboard memberi Anda tampilan sekilas dari konsumsi setiap provider yang terhubung.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView remote list showing connected cloud providers" class="img-large img-center" />

## Menjalankan Rclone About dari Terminal

Untuk angka mentah atau scripting, buka **Terminal** di RcloneView dan jalankan:

```bash
rclone about gdrive:
```

Contoh output:

```
Total:   15 GiB
Used:    9.2 GiB
Free:    5.8 GiB
Trashed: 1.4 GiB
Other:   3.1 GiB
```

Untuk memeriksa beberapa remote dengan cepat:

```bash
rclone about gdrive:
rclone about onedrive:
rclone about s3-backup:
```

Gunakan `--json` untuk output yang dapat dibaca mesin dan dapat diuraikan oleh script:

```bash
rclone about gdrive: --json
```

## Mengidentifikasi Folder Besar

Mengetahui total penggunaan adalah langkah awal. Menemukan folder mana yang mengonsumsi ruang paling banyak memerlukan perintah `rclone size`:

```bash
rclone size gdrive:/Photos
```

Perintah ini mengembalikan jumlah total dan ukuran semua file di path yang ditentukan. Untuk menemukan folder terbesar Anda, jalankan terhadap direktori tingkat atas dan bandingkan.

Di **Explorer** milik RcloneView, Anda dapat menjelajahi remote mana pun dan melihat ukuran folder saat Anda menavigasi, sehingga memudahkan untuk menemukan pemakan ruang tanpa menjalankan perintah.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView explorer browsing cloud folders with size information" class="img-large img-center" />

## Pemantauan Kuota di Berbagai Provider

Provider yang berbeda menangani kuota secara berbeda:

| Provider | Model Kuota | Catatan |
|----------|------------|-------|
| **Google Drive** | Dibagikan di antara Drive, Gmail, Photos | 15 GB gratis; paket Workspace bervariasi |
| **OneDrive** | Alokasi per pengguna | 5 GB gratis; paket Microsoft 365 menawarkan 1 TB+ |
| **Dropbox** | Kuota per akun | 2 GB gratis; Plus menawarkan 2 TB |
| **Backblaze B2** | Bayar sesuai penggunaan, tanpa kuota tetap | Ditagih bulanan per GB yang disimpan |
| **Amazon S3** | Bayar sesuai penggunaan, tanpa kuota tetap | Harga bertingkat berdasarkan storage class |
| **pCloud** | Kuota seumur hidup atau langganan | 10 GB gratis; paket seumur hidup tersedia |

Untuk provider bayar sesuai penggunaan seperti S3 dan B2, tidak ada kuota yang harus dicapai, tetapi memantau penggunaan secara langsung mengontrol tagihan Anda. Untuk provider berbasis kuota, kehabisan ruang secara diam-diam merusak sinkronisasi dan pencadangan.

## Merencanakan Kapasitas dan Memperkirakan Biaya

Gunakan data penggunaan penyimpanan untuk merencanakan ke depan:

1. **Lacak pertumbuhan dari waktu ke waktu** -- jalankan `rclone about` secara berkala dan catat hasilnya. Spreadsheet sederhana yang melacak penggunaan bulanan per remote mengungkap tren.
2. **Perkirakan biaya bulanan** untuk provider bayar sesuai penggunaan:
   - Backblaze B2: $0.006/GB/bulan untuk penyimpanan
   - Amazon S3 Standard: $0.023/GB/bulan
   - Wasabi: $0.0069/GB/bulan (minimum 1 TB)
3. **Atur peringatan** -- jika remote berbasis kuota melewati 80% penggunaan, rencanakan pembersihan atau upgrade.
4. **Bandingkan provider** -- jika satu remote lebih murah per GB, pertimbangkan untuk memindahkan data dingin ke sana.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare storage consumption across cloud providers" class="img-large img-center" />

## Mengembalikan Ruang dari Trash

Salah satu konsumen penyimpanan yang paling sering diabaikan adalah trash. Google Drive dan OneDrive sama-sama menghitung file yang dibuang ke trash terhadap kuota Anda. Output `rclone about` menunjukkan ruang trash secara eksplisit, dan Anda dapat mengembalikannya dengan:

```bash
rclone cleanup gdrive:
```

Di RcloneView, ini tersedia melalui UI tanpa perlu mengetik perintah. Mengembalikan ruang trash sering kali menjadi cara tercepat untuk membebaskan gigabyte tanpa menghapus file aktif mana pun.

## Membandingkan Penggunaan di Berbagai Provider

Saat mengelola beberapa akun cloud, perbandingan lintas provider membantu dalam keputusan seperti:

- **Di mana menyimpan pencadangan baru** -- rutekan data ke remote dengan ruang paling lega.
- **Provider mana yang perlu diskalakan** -- jika biaya S3 tumbuh lebih cepat daripada B2, selidiki alasannya.
- **Kapan harus mengarsipkan** -- pindahkan data yang jarang diakses dari penyimpanan mahal ke tier yang lebih murah.

Dashboard multi-remote milik RcloneView membuat perbandingan ini langsung terlihat. Alih-alih login ke tiga dashboard provider yang berbeda, Anda melihat semua data penggunaan dalam satu antarmuka.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView dashboard showing multiple remote storage status" class="img-large img-center" />

## Praktik Terbaik

- **Periksa kuota sebelum memulai transfer besar** -- tujuan yang penuh akan menyebabkan kegagalan diam-diam.
- **Pantau penggunaan trash** dan bersihkan secara rutin untuk menghindari konsumsi kuota hantu.
- **Catat penggunaan bulanan** untuk pelacakan biaya dan analisis tren.
- **Gunakan `rclone size`** pada folder tertentu untuk menemukan konsumen ruang terbesar.
- **Otomatiskan pemeriksaan** dengan menyimpan perintah `rclone about` sebagai scheduled job di RcloneView.

---

**Panduan Terkait:**

- [Membersihkan Penyimpanan Cloud: Mengosongkan Trash dan Menghapus Versi Lama](https://rcloneview.com/support/blog/cleanup-empty-trash-cloud-storage-rcloneview)
- [Perbandingan Wasabi vs Backblaze B2 vs IDrive e2](https://rcloneview.com/support/blog/wasabi-vs-backblaze-b2-vs-idrive-e2-comparison-rcloneview)
- [Google Drive vs OneDrive untuk Bisnis](https://rcloneview.com/support/blog/google-drive-vs-onedrive-for-business-rcloneview)

<CloudSupportGrid />
