---
slug: sync-nextcloud-to-koofr-rcloneview
title: "Sinkronkan Nextcloud ke Koofr — Pencadangan Cloud dengan RcloneView"
authors:
  - robin
description: "Jaga instans Nextcloud tetap dicadangkan ke Koofr dengan RcloneView — sinkronisasi langsung dari cloud ke cloud antara dua penyedia penyimpanan yang mengutamakan privasi."
keywords:
  - sinkronkan Nextcloud ke Koofr
  - pencadangan Nextcloud ke Koofr
  - RcloneView Nextcloud
  - RcloneView Koofr
  - pencadangan cloud self-hosted
  - sinkronisasi cloud ke cloud
  - transfer Nextcloud Koofr
  - pencadangan penyimpanan cloud Eropa
tags:
  - RcloneView
  - nextcloud
  - koofr
  - cloud-to-cloud
  - sync
  - european-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sinkronkan Nextcloud ke Koofr — Pencadangan Cloud dengan RcloneView

> Berikan instans Nextcloud yang di-self-host sebuah pencadangan off-site di Koofr, yang berjalan sesuai jadwal alih-alih ekspor manual.

Nextcloud populer justru karena menempatkan penyimpanan di bawah kendali Anda sendiri, tetapi kendali itu juga berarti satu kegagalan server, satu update yang bermasalah, atau satu kesalahan disk dapat membawa serta satu-satunya salinan dari segalanya. Koofr menjadi pasangan yang alami sebagai salinan kedua karena ia juga merupakan penyedia yang berbasis di UE dan mengutamakan privasi — pencadangan akan berada di tempat dengan sikap residensi data yang serupa, bukan di jurisdiksi yang tidak terkait. RcloneView terhubung ke keduanya sebagai remote biasa dan menjalankan penyalinan langsung di antara keduanya, sehingga pencadangan tidak bergantung pada server Nextcloud Anda yang juga berfungsi sebagai klien unggah.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Nextcloud dan Koofr

Tambahkan Nextcloud sebagai remote melalui tab Remote > Remote Baru menggunakan WebDAV — Nextcloud mengekspos file-nya melalui WebDAV pada URL yang ditampilkan panel admin instans Anda di bawah Pengaturan, sehingga Anda memerlukan alamat server, nama pengguna Anda, dan kata sandi aplikasi alih-alih kata sandi login biasa Anda. Tambahkan Koofr secara terpisah melalui alur login OAuth-nya sendiri. RcloneView me-mount DAN mensinkronkan lebih dari 90 penyedia dari satu jendela, di Windows, macOS, dan Linux, sehingga pengaturan dua remote yang sama tetap berfungsi baik server Nextcloud Anda berada di NAS rumahan maupun VPS sewaan.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Nextcloud WebDAV remote in RcloneView" class="img-large img-center" />

Setelah kedua remote muncul di Remote Manager, buka dua panel Explorer bersebelahan untuk memastikan Anda dapat menelusuri struktur folder Nextcloud dan melihat tujuan Koofr (yang mungkin masih kosong) sebelum menyiapkan apa pun yang otomatis.

## Membangun Tugas Sinkronisasi

Gunakan wizard Sync 4 langkah alih-alih drag and drop sekali saja untuk jenis pencadangan ini — atur Nextcloud sebagai sumber dan Koofr sebagai tujuan, pilih sinkronisasi satu arah agar Koofr hanya menerima salinan dan Nextcloud tetap menjadi sumber utama, lalu jalankan Dry Run terlebih dahulu untuk memastikan daftar file terlihat benar sebelum ada transfer yang sebenarnya terjadi.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync from Nextcloud to Koofr in RcloneView" class="img-large img-center" />

Pada Langkah 3, kecualikan apa pun yang tidak ingin Anda duplikasi ke off-site — folder versi bergaya `.git` milik Nextcloud sendiri atau pustaka media besar yang tersinkronisasi yang sudah Anda cadangkan di tempat lain merupakan kandidat yang baik untuk aturan filter, sehingga menjaga salinan Koofr tetap fokus pada apa yang benar-benar memerlukan redundansi.

## Menjadwalkan Pencadangan Berulang

Sinkronisasi satu kali hanya melindungi Anda dari kegagalan hari ini, bukan kegagalan bulan depan. Dengan lisensi PLUS, Langkah 4 pada wizard menambahkan penjadwalan bergaya crontab, sehingga sinkronisasi Nextcloud-ke-Koofr berjalan setiap malam atau setiap minggu tanpa Anda perlu membuka aplikasinya.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Nextcloud to Koofr backup job in RcloneView" class="img-large img-center" />

Job History kemudian memberi Anda catatan berkelanjutan dari setiap eksekusi terjadwal — status penyelesaian, jumlah file, dan durasi — sehingga Anda dapat memastikan pencadangan benar-benar berjalan, bukan hanya berasumsi bahwa tugas terjadwal bekerja diam-diam di latar belakang.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan instans Nextcloud Anda sebagai remote WebDAV dan Koofr sebagai remote OAuth.
3. Bangun tugas Sync satu arah dari Nextcloud ke Koofr, menyaring apa pun yang tidak perlu Anda duplikasi.
4. Jadwalkan tugas agar berjalan otomatis dan periksa Job History secara berkala untuk memastikan tugas selesai.

Server self-hosted hanya seaman pencadangannya, dan mengarahkan pencadangan itu ke penyedia kedua yang independen menutup celah titik kegagalan tunggal yang biasanya masih terbuka pada self-hosting.

---

**Panduan Terkait:**

- [Sinkronkan Koofr ke Proton Drive — Pencadangan Cloud dengan RcloneView](https://rcloneview.com/support/blog/sync-koofr-to-proton-drive-rcloneview)
- [Perbaiki Kesalahan Sinkronisasi Nextcloud — Cara Mengatasinya dengan RcloneView](https://rcloneview.com/support/blog/fix-nextcloud-sync-errors-rcloneview)
- [Migrasikan Koofr ke Jottacloud — Transfer File dengan RcloneView](https://rcloneview.com/support/blog/migrate-koofr-to-jottacloud-rcloneview)

<CloudSupportGrid />
