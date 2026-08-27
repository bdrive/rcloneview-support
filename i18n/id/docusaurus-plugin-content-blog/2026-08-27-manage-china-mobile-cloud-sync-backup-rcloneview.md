---
slug: manage-china-mobile-cloud-sync-backup-rcloneview
title: "Mengelola Penyimpanan China Mobile — Sinkronisasi dan Cadangkan File dengan RcloneView"
authors:
  - jay
description: "Hubungkan penyimpanan objek yang kompatibel dengan S3 milik China Mobile ke RcloneView untuk penjelajahan lintas platform, transfer seret dan lepas, serta tugas pencadangan terjadwal."
keywords:
  - penyimpanan objek China Mobile
  - kelola penyimpanan cloud China Mobile
  - GUI penyimpanan kompatibel S3
  - RcloneView China Mobile
  - sinkronisasi penyimpanan objek China Mobile
  - pencadangan penyimpanan kompatibel S3
  - China Mobile Ecloud EOS
  - pengelola file penyimpanan objek
  - klien GUI multi-cloud
  - pengaturan kunci akses endpoint S3
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mengelola Penyimpanan China Mobile — Sinkronisasi dan Cadangkan File dengan RcloneView

> Jelajahi, transfer, dan cadangkan penyimpanan objek yang kompatibel dengan S3 milik China Mobile dari jendela yang sama yang Anda gunakan untuk setiap cloud lainnya, tanpa menyentuh terminal.

Tim yang menjalankan infrastruktur melalui penyimpanan objek kompatibel S3 milik China Mobile sering kali berakhir mengelolanya dengan panggilan CLI mentah atau skrip sekali pakai, terpisah dari jejak cloud mereka yang lain. RcloneView memperlakukannya seperti remote kompatibel S3 lainnya — explorer yang sama, tugas sinkronisasi yang sama, perbandingan folder yang sama — sehingga bucket di China Mobile berada tepat di samping Google Drive, Backblaze B2, atau disk lokal dalam satu antarmuka. Hubungkan S3, Azure, atau Backblaze B2 dengan akses baca/tulis penuh pada lisensi FREE, dan hal yang sama berlaku untuk endpoint kompatibel S3 mana pun.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Penyimpanan Objek China Mobile

Penyimpanan objek China Mobile diakses melalui protokol S3 milik rclone, jalur yang sama yang digunakan RcloneView untuk Wasabi, MinIO, atau Cloudflare R2. Di layar New Remote, pilih jenis penyedia yang kompatibel dengan S3 dan masukkan tiga nilai: Access Key ID, Secret Access Key, dan Endpoint layanan. Tidak ada alur OAuth — ini adalah input kredensial, jadi periksa kembali string endpoint tersebut, karena kesalahan ketik di sana adalah alasan paling umum sebuah remote baru gagal pada uji koneksi pertamanya.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote kompatibel S3 China Mobile di RcloneView" class="img-large img-center" />

Setelah remote terhubung, remote tersebut muncul sebagai tab di panel Explorer sama seperti jenis penyimpanan lainnya. Anda dapat membukanya berdampingan dengan panel kedua — disk lokal, cloud lain, atau bucket yang sepenuhnya berbeda — menggunakan tata letak 1 hingga 4 panel.

## Menjelajahi dan Mentransfer File

Dengan remote terbuka, File List menampilkan bucket dan objek dengan kolom yang sama seperti yang Anda harapkan dari pengelola file lokal: nama, jenis, tanggal diubah, ukuran. Klik kanan untuk Copy, Cut, Paste, Rename, New Folder, Download, dan Upload, atau gunakan Ctrl+Klik dan Shift+Klik untuk memilih beberapa item sekaligus sebelum operasi massal.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Mentransfer file antara penyimpanan objek China Mobile dan remote lain" class="img-large img-center" />

Seret dan lepas mengikuti aturan sederhana: memindahkan file dalam remote yang sama akan merelokasinya, sementara menyeretnya antara dua remote yang berbeda akan menyalinnya. Itu membuat transfer ad-hoc antara penyimpanan objek dan cloud lain menjadi soal menyeret pilihan antar panel, bukan mengunduh secara lokal terlebih dahulu.

## Menjadwalkan Pencadangan Berulang

Untuk apa pun yang berulang, wizard empat langkah dari Job Manager mengubah transfer satu kali menjadi tugas yang tersimpan: pilih sumber dan tujuan, sesuaikan konkurensi transfer dan perilaku percobaan ulang, terapkan filter seperti ukuran atau usia maksimum file, dan — pada lisensi PLUS — atur jadwal bergaya crontab. Jalankan Dry Run terlebih dahulu untuk melihat pratinjau secara tepat apa yang akan disalin atau dihapus sebelum mengeksekusinya.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Menjadwalkan tugas pencadangan untuk penyimpanan objek China Mobile di RcloneView" class="img-large img-center" />

Job History kemudian melacak setiap eksekusi — status, durasi, kecepatan transfer, jumlah file — sehingga Anda memiliki catatan tentang apa yang berpindah dan kapan, tanpa harus menggali log mentah.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka New Remote, pilih jenis penyedia kompatibel S3, dan masukkan Access Key ID, Secret Access Key, dan endpoint China Mobile Anda.
3. Jelajahi bucket di Explorer dan uji salinan manual ke atau dari remote lain.
4. Buat tugas sinkronisasi di Job Manager untuk transfer apa pun yang ingin Anda ulangi, dan jalankan Dry Run sebelum eksekusi nyata pertama.

Setelah penyimpanan objek China Mobile berada di samping remote lain Anda dalam satu explorer, memindahkan data berhenti menjadi pekerjaan skrip dan menjadi tugas seret dan lepas.

---

**Panduan Terkait:**

- [Mengelola Penyimpanan Objek RackCorp — Sinkronisasi dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-rackcorp-object-storage-cloud-sync-rcloneview)
- [Mengelola Penyimpanan Objek Scaleway — Sinkronisasi Cloud dan Pencadangan dengan RcloneView](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [Mengelola Penyimpanan Objek Ceph dengan RcloneView — GUI Kompatibel S3 untuk Klaster Ceph Anda](https://rcloneview.com/support/blog/manage-ceph-object-storage-s3-rcloneview)

<CloudSupportGrid />
