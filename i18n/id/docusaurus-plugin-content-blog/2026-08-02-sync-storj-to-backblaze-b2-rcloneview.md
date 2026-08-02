---
slug: sync-storj-to-backblaze-b2-rcloneview
title: "Sinkronisasi Storj ke Backblaze B2 — Cadangan Cloud dengan RcloneView"
authors:
  - alex
description: "Sinkronkan berkas dari penyimpanan terdesentralisasi Storj ke Backblaze B2 dengan RcloneView. Simpan salinan redundan di luar jaringan untuk data yang kompatibel dengan S3 Anda."
keywords:
  - Storj ke Backblaze B2
  - sinkronisasi Storj
  - cadangan Storj
  - sinkronisasi Backblaze B2
  - cadangan penyimpanan terdesentralisasi
  - Storj RcloneView
  - sinkronisasi penyimpanan kompatibel S3
  - pencadangan cloud ke cloud
  - redundansi penyimpanan objek
  - sinkronisasi RcloneView
tags:
  - RcloneView
  - storj
  - backblaze-b2
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sinkronisasi Storj ke Backblaze B2 — Cadangan Cloud dengan RcloneView

> Simpan salinan yang redundan dan tersentralisasi dari data penyimpanan terdesentralisasi Storj Anda di Backblaze B2 dengan RcloneView — satu pekerjaan, dua arsitektur penyimpanan yang sangat berbeda.

Storj menyebarkan pecahan berkas terenkripsi ke jaringan node independen, yang sangat baik untuk ketahanan terhadap sensor dan biaya, tetapi ini juga berarti tim sering ingin memiliki cadangan konvensional yang di-host secara terpusat sebagai lapisan perlindungan kedua. Backblaze B2 mengisi peran itu dengan baik: bucket standar yang kompatibel dengan S3 dengan pengambilan yang mudah. RcloneView terhubung ke keduanya melalui dukungan remote yang kompatibel dengan S3 dan memindahkan data di antara keduanya secara langsung, tanpa drive staging lokal.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Storj dan Backblaze B2

Tambahkan Storj sebagai remote di RcloneView menggunakan endpoint gateway yang kompatibel dengan S3 dan access grant-nya, atau pasangan kunci akses Storj native, tergantung bagaimana proyek Anda dikonfigurasi. Tambahkan Backblaze B2 secara terpisah menggunakan Application Key ID dan Application Key Anda dari konsol B2. Kedua remote kemudian muncul sebagai pohon berkas yang dapat dijelajahi berdampingan di panel Explorer, sehingga Anda dapat memastikan struktur bucket dan jumlah objek sebelum membangun pekerjaan sinkronisasi.

RcloneView me-mount DAN menyinkronkan 90+ penyedia dari satu jendela di Windows, macOS, dan Linux, sehingga antarmuka yang sama yang Anda gunakan untuk Storj dan B2 juga menangani cloud lain yang sudah ada dalam tumpukan Anda.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Storj and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## Membangun Pekerjaan Sinkronisasi

Buat pekerjaan sinkronisasi satu arah dengan bucket Storj Anda sebagai sumber dan bucket Backblaze B2 sebagai tujuan — "Hanya memodifikasi tujuan" menjaga B2 sebagai cermin murni yang tidak pernah menulis balik ke Storj. Pada langkah Pengaturan Lanjutan (Advanced Settings), aktifkan perbandingan checksum sehingga berkas dicocokkan berdasarkan hash dan ukuran, bukan hanya waktu modifikasi, yang penting ketika metadata objek berperilaku berbeda di dua backend penyimpanan yang berbeda.

Untuk tim yang mengarsipkan dataset terdesentralisasi — misalnya kelompok riset dengan 4TB rekaman video ter-shard di Storj — langkah Pemfilteran (Filtering) memungkinkan Anda membatasi cakupan eksekusi pertama berdasarkan usia berkas atau ekstensi, sehingga Anda dapat memvalidasi pipeline pada subset sebelum melakukan transfer penuh. Setelah sinkronisasi awal selesai, eksekusi ulang terjadwal hanya memindahkan objek baru atau yang berubah.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing a Storj bucket to Backblaze B2 with RcloneView" class="img-large img-center" />

Jalankan Dry Run terlebih dahulu. Ini mencantumkan setiap objek yang akan disalin tanpa mentransfer apa pun, cara paling aman untuk memastikan cakupan sebelum memindahkan data antara dua penyedia dengan karakteristik harga dan pengambilan yang berbeda.

## Memantau dan Memverifikasi Transfer

Lacak kemajuan di tab Transferring pada Info View bagian bawah — jumlah berkas, kecepatan transfer, dan persentase penyelesaian diperbarui secara langsung saat sinkronisasi berjalan. Setelah selesai, buka Folder Compare antara sumber Storj dan tujuan B2 untuk memastikan setiap objek telah sampai dan cocok berdasarkan ukuran, menangkap objek apa pun yang gagal di tengah jalan karena gangguan jaringan di salah satu sisi.

Job History menyimpan catatan permanen dari setiap eksekusi sinkronisasi, termasuk durasi, total data yang dipindahkan, dan status, sehingga Anda memiliki jejak audit yang menunjukkan dengan tepat kapan cadangan B2 Anda terakhir kali diperbarui dengan Storj.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Storj to Backblaze B2 sync job history in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan Storj sebagai remote menggunakan endpoint yang kompatibel dengan S3 dan kredensial aksesnya.
3. Tambahkan Backblaze B2 menggunakan Application Key ID dan Application Key Anda.
4. Bangun pekerjaan sinkronisasi satu arah, jalankan Dry Run, lalu eksekusi untuk mencerminkan Storj ke B2.

Salinan kedua yang di-host secara terpusat dari data penyimpanan terdesentralisasi menutup celah yang mudah terlewat dalam sebagian besar strategi pencadangan, dan RcloneView menjadikan pemeliharaannya sebagai rutinitas terjadwal yang digerakkan oleh GUI, bukan pekerjaan manual.

---

**Panduan Terkait:**

- [Mengelola Sinkronisasi Cloud Terdesentralisasi Storj dengan RcloneView](https://rcloneview.com/support/blog/manage-storj-decentralized-cloud-sync-rcloneview)
- [Migrasi Backblaze B2 ke Wasabi dengan RcloneView](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-wasabi-rcloneview)
- [Memperbaiki Kesalahan Unggah Storj dengan RcloneView](https://rcloneview.com/support/blog/fix-storj-upload-errors-rcloneview)

<CloudSupportGrid />
