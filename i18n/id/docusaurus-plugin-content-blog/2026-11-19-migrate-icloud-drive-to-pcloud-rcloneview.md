---
slug: migrate-icloud-drive-to-pcloud-rcloneview
title: "Migrasi iCloud Drive ke pCloud — Transfer File dengan RcloneView"
authors:
  - jay
description: "Pindahkan file dari iCloud Drive ke pCloud dengan RcloneView. Hubungkan kedua cloud, pratinjau salinan dengan Dry Run, transfer antar-cloud, dan verifikasi dengan Folder Compare."
keywords:
  - migrasi iCloud Drive ke pCloud
  - transfer iCloud Drive ke pCloud
  - pindahkan file dari iCloud Drive
  - alat migrasi iCloud Drive
  - migrasi pCloud
  - transfer cloud ke cloud
  - rcloneview icloud drive
  - rcloneview pcloud
  - rclone gui icloud drive
tags:
  - RcloneView
  - pcloud
  - cloud-to-cloud
  - migration
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi iCloud Drive ke pCloud — Transfer File dengan RcloneView

> Pindahkan folder iCloud Drive Anda ke pCloud dengan job salin yang dapat Anda pratinjau, pantau, dan verifikasi, tanpa harus menaruh semuanya di disk lokal terlebih dahulu.

Orang beralih dari iCloud Drive ke pCloud karena alasan praktis: rumah tangga yang memakai campuran perangkat Windows, Linux, dan Mac, atau pekerja lepas yang menginginkan satu akun penyimpanan yang bekerja sama di setiap desktop. iCloud Drive tidak memiliki fitur ekspor bawaan ke layanan cloud lain, sehingga sebagian besar migrasi berubah menjadi "unduh semuanya ke Mac, lalu unggah lagi". RcloneView terhubung ke kedua layanan sekaligus dan menyalin file di antara keduanya melalui rclone, sehingga transfer berjalan antar-cloud dari satu jendela.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hubungkan iCloud Drive dan pCloud sebagai Remote

Dukungan iCloud Drive memerlukan rclone v1.69 atau yang lebih baru. RcloneView sudah dilengkapi binary rclone tertanam yang memenuhi persyaratan ini, jadi tidak ada yang perlu dipasang tambahan. Buka tab Remote, klik **New Remote**, pilih iCloud Drive, lalu masukkan kredensial akun Apple Anda. Kemudian tambahkan pCloud. pCloud masuk melalui login OAuth di browser, jadi Anda tidak perlu membuat kunci API apa pun.

Setelah kedua remote terhubung, buka dua panel Explorer berdampingan. Klik kanan folder tingkat atas di iCloud Drive dan pilih **Get Size** untuk melihat berapa banyak data yang akan dipindahkan. Angka itu memberi tahu Anda apakah paket pCloud Anda masih memiliki ruang sebelum file pertama disalin.

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive and pCloud remotes in RcloneView" class="img-large img-center" />

## Buat Job Salin dan Pratinjau dengan Dry Run

Untuk migrasi, job **Copy** adalah pilihan yang hati-hati: job ini menambahkan file ke pCloud dan tidak pernah menghapus apa pun di sana. Pilih **Sync** hanya jika pCloud harus mencerminkan iCloud Drive persis, termasuk penghapusan.

Di Job Manager, buat job dengan folder iCloud Drive sebagai sumber dan folder pCloud sebagai tujuan. Di Step 2, biarkan pengaturan percobaan ulang pada nilai default 3 agar koneksi yang terputus tidak mengakhiri proses. Step 3 memungkinkan Anda mengecualikan data yang tidak lagi diperlukan. Filter khusus dapat mengecualikan image `.iso` atau folder `.git/`, dan usia file maksimum dapat meninggalkan file lama yang tidak terpakai.

Jalankan **Dry Run** sebelum transfer sebenarnya. Ambil contoh seorang desainer yang memindahkan 300 GB proyek klien: Dry Run mencantumkan setiap file yang akan disalin, sehingga struktur folder dapat dipastikan sebelum menghabiskan berjam-jam untuk transfer.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud copy from iCloud Drive to pCloud in RcloneView" class="img-large img-center" />

## Jalankan Transfer dan Pantau Progres

Mulai job dan pantau tab Transferring, yang menampilkan progres, kecepatan, dan jumlah file. Untuk pustaka yang besar, buat satu job per folder tingkat atas (Documents, Desktop, folder proyek). Jika satu batch gagal, Anda cukup menjalankan ulang batch tersebut. Setiap proses dicatat di Job History beserta status, ukuran total, dan jumlah file, sehingga Anda memiliki catatan tentang apa yang dipindahkan dan kapan.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing completed iCloud Drive to pCloud copy runs" class="img-large img-center" />

## Verifikasi Hasil dengan Folder Compare

Klik **Compare** dan buka folder iCloud Drive di kiri serta folder pCloud di kanan. Saring file yang hanya ada di kiri dan file yang berbeda untuk menemukan yang terlewat, lalu gunakan **Copy right** untuk mengirim file yang hilang. Setelah kedua sisi ditampilkan sama, Anda dapat menghentikan penyimpanan lama dengan yakin.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing iCloud Drive and pCloud folders after migration" class="img-large img-center" />

## Memulai

RcloneView melakukan mount dan sinkronisasi 90+ penyedia dari satu jendela, di Windows, macOS, dan Linux.

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan iCloud Drive (rclone v1.69+ tertanam sudah disertakan) dan pCloud melalui login OAuth-nya.
3. Buat job Copy dari iCloud Drive ke pCloud dan periksa dengan Dry Run.
4. Jalankan job, lalu pastikan hasilnya dengan Folder Compare sebelum Anda menurunkan paket iCloud.

Migrasi yang diverifikasi folder demi folder membawa file Anda ke pCloud dengan setiap folder terdata.

---

**Panduan Terkait:**

- [Kelola Penyimpanan iCloud Drive — Sinkronisasi dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [Kelola Penyimpanan pCloud — Sinkronisasi dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Migrasi iCloud Drive ke Dropbox — Transfer File dengan RcloneView](https://rcloneview.com/support/blog/migrate-icloud-drive-to-dropbox-rcloneview)

<CloudSupportGrid />
