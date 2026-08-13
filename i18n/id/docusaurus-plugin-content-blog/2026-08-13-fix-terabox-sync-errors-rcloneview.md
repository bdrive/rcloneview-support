---
slug: fix-terabox-sync-errors-rcloneview
title: "Memperbaiki Error Sinkronisasi Terabox — Cara Mengatasinya dengan RcloneView"
authors:
  - morgan
description: "Diagnosis dan atasi kegagalan sinkronisasi Terabox yang umum terjadi di RcloneView, mulai dari koneksi timeout hingga transfer yang macet, menggunakan log, percobaan ulang, dan filter."
keywords:
  - error sinkronisasi Terabox
  - pemecahan masalah RcloneView
  - masalah koneksi Terabox
  - memperbaiki error sinkronisasi
  - pemecahan masalah sinkronisasi cloud
  - timeout Terabox
  - rclone terabox
  - perbaikan transfer macet
tags:
  - RcloneView
  - terabox
  - troubleshooting
  - tips
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Memperbaiki Error Sinkronisasi Terabox — Cara Mengatasinya dengan RcloneView

> Pekerjaan sinkronisasi Terabox yang macet, timeout, atau gagal di tengah jalan biasanya bisa ditelusuri ke beberapa penyebab umum — log, pengaturan percobaan ulang, dan alat dry run milik RcloneView membuat penyebab ini mudah diidentifikasi.

Ruang penyimpanan gratis Terabox membuatnya menjadi target pencadangan yang populer, tetapi API-nya bisa kurang toleran dibandingkan penyedia yang lebih besar saat menghadapi beban transfer yang berkelanjutan, terutama dengan banyak file kecil atau unggahan batch besar. Ketika sebuah pekerjaan Terabox di RcloneView melaporkan error atau berhenti berkembang, solusinya jarang sesederhana mengklik jalankan lagi — yang perlu dilakukan adalah mengidentifikasi apakah pekerjaan tersebut menyentuh batas koneksi, sesi kedaluwarsa, atau masalah tingkat file, lalu menyesuaikan pengaturan pekerjaan sesuai kebutuhan. RcloneView juga menyinkronkan dan membandingkan folder, bukan hanya me-mount-nya, sehingga Anda dapat memastikan dengan tepat apa yang berhasil dan tidak berhasil ditransfer sebelum mencoba lagi.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Pola Kegagalan Sinkronisasi Terabox yang Umum

Sebagian besar error Terabox di RcloneView terbagi menjadi tiga kelompok. Error koneksi muncul sebagai timeout atau koneksi ditolak di tengah transfer, biasanya karena terlalu banyak transfer bersamaan yang mengenai batas laju Terabox sekaligus. Error autentikasi muncul saat token sesi Terabox telah kedaluwarsa, yang terlihat sebagai kegagalan mendadak pada pekerjaan yang sebelumnya berjalan lancar. Error tingkat file — satu file yang berulang kali gagal sementara sisa pekerjaan selesai — biasanya menunjukkan karakter nama file yang tidak didukung atau file yang berubah di sisi Terabox selama transfer.

Periksa **tab Transferring** terlebih dahulu untuk melihat kategori mana yang Anda hadapi: pekerjaan yang langsung gagal pada setiap file menunjukkan masalah autentikasi, sedangkan yang gagal secara berkala pada file yang tersebar menunjukkan pembatasan laju atau ketidakstabilan koneksi.

<img src="/support/images/en/blog/new-remote.png" alt="Menghubungkan ulang remote Terabox di RcloneView" class="img-large img-center" />

## Membaca Log dan Riwayat Pekerjaan

Aktifkan logging terperinci di **Settings > Embedded Rclone > Enable rclone Logging**, dan atur level log ke **DEBUG** sebelum mereproduksi masalah. Ini menangkap respons API tepat yang dikembalikan Terabox, yang jauh lebih berguna untuk diagnosis dibandingkan error ringkasan yang ditampilkan di dialog pekerjaan. **Job History** di Job Manager juga mencatat apakah proses yang gagal berstatus Completed, Errored, atau Canceled, beserta total ukuran dan jumlah file — berguna untuk mengetahui apakah error terjadi mendekati awal (kemungkinan autentikasi) atau di tengah proses (kemungkinan pembatasan laju).

Jika sesi telah kedaluwarsa, hubungkan ulang remote Terabox melalui **Remote Manager** untuk memperbarui kredensial sebelum mencoba pekerjaan lagi.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Meninjau riwayat pekerjaan Terabox dan status error di RcloneView" class="img-large img-center" />

## Menyesuaikan Percobaan Ulang, Jumlah Transfer, dan Filter

Untuk kegagalan akibat pembatasan laju, turunkan **Number of file transfers** dan **Number of multi-thread transfers** di Langkah 2 wizard pekerjaan — koneksi bersamaan yang lebih sedikit mengurangi kemungkinan Terabox membatasi sesi di tengah pekerjaan. Menaikkan **Retry entire sync if fails** dari nilai default 3 memberi kegagalan sementara lebih banyak kesempatan untuk pulih secara otomatis tanpa intervensi manual.

Jika jenis file tertentu terus-menerus gagal, tambahkan filter kustom di Langkah 3 untuk mengecualikannya sementara, selesaikan sisa sinkronisasi, lalu selidiki file tersebut secara terpisah. Menjalankan **dry run** setelahnya memastikan pengecualian tersebut berhasil sebelum Anda menerapkan pekerjaan yang telah disesuaikan.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Memantau pekerjaan sinkronisasi Terabox yang dicoba ulang di RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Aktifkan logging DEBUG di Settings > Embedded Rclone sebelum mereproduksi error.
3. Periksa Job History untuk mengidentifikasi apakah kegagalan terjadi di awal (autentikasi) atau tersebar (pembatasan laju).
4. Turunkan jumlah transfer atau tambahkan percobaan ulang, lalu konfirmasi perbaikan dengan dry run.

Dengan pengaturan yang tepat disesuaikan dengan batasan Terabox, pekerjaan sinkronisasi berhenti gagal secara diam-diam dan mulai selesai dengan andal.

---

**Panduan Terkait:**

- [Mengelola Terabox — Sinkronisasi dan Pencadangan Cloud dengan RcloneView](https://rcloneview.com/support/blog/manage-terabox-cloud-sync-backup-rcloneview)
- [Menyinkronkan Penyimpanan Gratis Terabox ke Cloud Lain dengan RcloneView](https://rcloneview.com/support/blog/sync-terabox-free-storage-other-clouds-rcloneview)
- [Memperbaiki Sinkronisasi Cloud yang Macet atau Hang — Cara Mengatasinya dengan RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-stuck-hanging-rcloneview)

<CloudSupportGrid />
