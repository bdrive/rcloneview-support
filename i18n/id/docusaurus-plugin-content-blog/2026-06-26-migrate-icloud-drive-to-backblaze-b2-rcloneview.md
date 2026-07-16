---
slug: migrate-icloud-drive-to-backblaze-b2-rcloneview
title: "Migrasikan iCloud Drive ke Backblaze B2 — Transfer File dengan RcloneView"
authors:
  - casey
description: "Transfer file dari iCloud Drive ke Backblaze B2 menggunakan RcloneView. Panduan langkah demi langkah untuk mencadangkan penyimpanan cloud Apple Anda ke object storage yang terjangkau dan tidak terikat vendor."
keywords:
  - iCloud Drive to Backblaze B2
  - migrate iCloud Drive Backblaze B2
  - iCloud backup Backblaze B2
  - transfer iCloud files to B2
  - iCloud Drive cloud migration RcloneView
  - RcloneView iCloud Backblaze B2
  - cloud to cloud transfer iCloud
  - Backblaze B2 iCloud backup tool
tags:
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasikan iCloud Drive ke Backblaze B2 — Transfer File dengan RcloneView

> iCloud Drive milik Apple sangat praktis untuk sinkronisasi antar perangkat, tetapi menyalin file Anda ke Backblaze B2 menciptakan pencadangan yang hemat biaya dan tidak terikat vendor, yang sepenuhnya dapat dilakukan melalui GUI RcloneView.

Jutaan pengguna menyimpan foto, dokumen, dan arsip proyek di iCloud Drive melalui ekosistem Apple. Meskipun iCloud bekerja dengan lancar di seluruh perangkat Apple, organisasi dan pengguna tingkat lanjut sering kali membutuhkan salinan kedua di object storage yang andal — untuk diversifikasi vendor, jendela retensi yang lebih panjang, atau strategi pencadangan yang tidak bergantung pada satu platform. Backblaze B2 adalah layanan object storage yang kompatibel dengan S3 dan terintegrasi secara alami dengan RcloneView, memungkinkan Anda mentransfer konten dari iCloud Drive tanpa perlu mengunduh secara manual, scripting, atau klien sinkronisasi pihak ketiga. Hubungkan Backblaze B2 dengan akses baca/tulis penuh pada lisensi FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menyiapkan iCloud Drive di RcloneView

iCloud Drive didukung di RcloneView melalui backend iCloud milik rclone, yang membutuhkan rclone v1.69 atau lebih baru — binari rclone bawaan yang disertakan RcloneView sudah memenuhi persyaratan ini, jadi tidak diperlukan instalasi terpisah. Untuk menghubungkannya, buka tab **Remote**, klik **New Remote**, lalu pilih iCloud Drive dari daftar penyedia. Anda akan melakukan autentikasi dengan kredensial Apple ID Anda dan, jika autentikasi dua faktor diaktifkan pada akun Anda, masukkan kode verifikasi saat diminta. Setelah disimpan, folder iCloud Anda akan muncul di panel explorer persis seperti di Mac.

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive as a new remote in RcloneView" class="img-large img-center" />

Jelajahi struktur iCloud Drive Anda — Desktop, Documents, atau folder khusus lainnya — untuk memastikan cakupan konten sebelum membuat transfer job.

## Menghubungkan Backblaze B2 sebagai Tujuan

Backblaze B2 terhubung melalui input kredensial. Di **New Remote**, pilih Backblaze B2 dan masukkan **Application Key ID** serta **Application Key** Anda — keduanya dihasilkan di akun Backblaze Anda pada bagian App Keys. Setelah disimpan, Anda dapat menelusuri bucket B2 Anda di panel explorer kedua RcloneView. Dengan iCloud Drive dan Backblaze B2 terbuka berdampingan, Anda mendapatkan gambaran visual yang jelas tentang sumber dan tujuan sebelum satu file pun dipindahkan.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="iCloud Drive and Backblaze B2 open side by side in RcloneView" class="img-large img-center" />

## Menjalankan Transfer Migrasi

Buka wizard **Sync** dari tab Home. Atur folder iCloud Drive Anda sebagai sumber dan bucket Backblaze B2 (atau prefix di dalamnya) sebagai tujuan. Pada langkah Advanced Settings, aktifkan **checksum verification** untuk membandingkan hash file alih-alih hanya mengandalkan timestamp — ini sangat berguna untuk migrasi satu kali di mana integritas data menjadi hal yang paling penting. Anda juga dapat menambahkan filter **max file age** untuk hanya memigrasikan konten terbaru jika ingin mengecualikan file lama yang jarang diakses pada proses pertama.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Live transfer monitoring during an iCloud to Backblaze B2 migration in RcloneView" class="img-large img-center" />

Selalu jalankan **Dry Run** sebelum transfer sesungguhnya. RcloneView menampilkan daftar file mana saja yang akan disalin atau dilewati — pemeriksaan keamanan yang praktis saat memigrasikan pustaka iCloud Drive berukuran besar, di mana penimpaan file yang tidak disengaja atau folder yang terlewat bisa merepotkan untuk diperbaiki.

## Memverifikasi Migrasi dengan Folder Compare

Setelah transfer selesai, gunakan fitur **Folder Compare** milik RcloneView untuk memastikan kedua sisi sudah cocok. Buka tampilan Compare, atur iCloud Drive di sebelah kiri dan bucket B2 Anda di sebelah kanan, lalu biarkan RcloneView menampilkan file mana saja yang hanya ada di kiri, hanya ada di kanan, atau memiliki ukuran yang tidak cocok. Perbandingan yang bersih — hanya menampilkan file yang sama — mengonfirmasi bahwa migrasi Anda berhasil tanpa ada yang terlewat.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare verifying iCloud Drive files match Backblaze B2 after migration" class="img-large img-center" />

Untuk perlindungan berkelanjutan, **lisensi PLUS** memungkinkan Anda menjadwalkan sync job berulang — mingguan atau harian — untuk menangkap penambahan baru di iCloud Drive dan menjaga salinan B2 Anda tetap terkini secara otomatis.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan iCloud Drive sebagai remote baru menggunakan kredensial Apple ID Anda.
3. Tambahkan Backblaze B2 sebagai remote dengan Application Key ID dan Application Key Anda.
4. Buat sync job: iCloud Drive sebagai sumber, bucket B2 sebagai tujuan, lalu jalankan **Dry Run** terlebih dahulu.
5. Gunakan **Folder Compare** untuk memverifikasi migrasi, lalu jadwalkan pencadangan berulang sesuai kebutuhan.

Memigrasikan dari iCloud Drive ke Backblaze B2 dengan RcloneView memberikan file Apple Anda tempat yang andal dan tidak bergantung pada platform di object storage — terlindungi, dapat diverifikasi, dan dapat diakses dari perangkat mana pun.

---

**Panduan Terkait:**

- [Mengelola iCloud Drive dengan RcloneView](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [Mengelola Backblaze B2 dengan RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Migrasikan iCloud Drive ke Google Drive dengan RcloneView](https://rcloneview.com/support/blog/migrate-icloud-drive-to-google-drive-rcloneview)

<CloudSupportGrid />
