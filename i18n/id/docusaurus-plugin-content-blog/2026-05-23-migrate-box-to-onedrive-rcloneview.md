---
slug: migrate-box-to-onedrive-rcloneview
title: "Migrasi Box ke OneDrive — Transfer File dengan RcloneView"
authors:
  - morgan
description: "Panduan langkah demi langkah untuk memigrasikan file Anda dari Box ke Microsoft OneDrive menggunakan RcloneView. Transfer file cloud-to-cloud yang cepat dan andal dengan pemantauan progres penuh."
keywords:
  - migrate box to onedrive
  - box to onedrive transfer
  - cloud migration box onedrive
  - rcloneview box onedrive
  - box onedrive migration guide
  - transfer files from box to onedrive
  - box cloud migration tool
  - onedrive migration from box rcloneview
  - move files box to microsoft onedrive
tags:
  - RcloneView
  - box
  - onedrive
  - cloud-to-cloud
  - migration
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Box ke OneDrive — Transfer File dengan RcloneView

> RcloneView membuat migrasi dari Box ke Microsoft OneDrive menjadi mudah — hubungkan kedua akun, konfigurasikan job transfer, dan pindahkan seluruh pustaka file Anda tanpa perlu membuka browser.

Organisasi yang beralih dari Box ke Microsoft OneDrive menghadapi tantangan yang sama berulang kali: memindahkan ribuan file secara andal tanpa kehilangan data, duplikasi konten, atau harus menjalani siklus unduh-dan-unggah ulang secara manual yang lambat. RcloneView menangani seluruh proses migrasi melalui GUI desktop, mentransfer file langsung antara kedua layanan cloud melalui jalur cloud-to-cloud sementara Anda memantau progresnya secara real time.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Box dan OneDrive

Langkah pertama adalah menambahkan kedua akun sebagai remote di RcloneView. Dari tab **Remote**, klik **New Remote** dan pilih **Box**. RcloneView akan membuka jendela browser untuk autentikasi OAuth — masuk dan berikan akses, lalu kembali ke aplikasi. Ulangi proses yang sama untuk **OneDrive**, yang juga menggunakan login OAuth berbasis browser.

Setelah kedua remote tersimpan, buka dua panel Explorer secara berdampingan menggunakan opsi **Layout** di tab Settings. Navigasikan ke folder sumber Box Anda di panel kiri dan folder tujuan OneDrive di panel kanan. Tampilan dua panel ini memberi Anda gambaran jelas tentang struktur yang ada sebelum transfer dimulai.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and OneDrive as remotes in RcloneView" class="img-large img-center" />

Jika Anda memigrasikan akun Box for Business, atur `box_sub_type = enterprise` pada konfigurasi remote — wizard pengaturan sudah menyertakan kolom ini. Untuk OneDrive for Business atau pustaka dokumen SharePoint, pilih jenis akun yang sesuai selama langkah pengaturan OneDrive. Kedua varian enterprise ini melakukan autentikasi dengan cara yang sama melalui OAuth browser.

## Menjalankan Job Migrasi

Setelah kedua remote dikonfigurasi, buka **Job Manager** dan klik **Add Job**. Pilih folder Box Anda sebagai sumber dan folder tujuan OneDrive sebagai tujuan. Untuk migrasi satu kali, jenis job **Copy** mempertahankan semua file di Box sambil mengisi OneDrive — gunakan **Move** hanya jika Anda ingin file dihapus dari Box saat ditransfer.

Di pengaturan lanjutan, aktifkan **checksum verification** untuk memastikan setiap file tiba secara utuh. Ini sangat berharga untuk migrasi berskala besar di mana gangguan jaringan dapat secara diam-diam menghasilkan salinan yang rusak. Atur juga jumlah percobaan ulang (default: 3) untuk menangani kesalahan API sementara dari kedua penyedia tanpa memerlukan restart manual.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud copy job from Box to OneDrive in RcloneView" class="img-large img-center" />

Sebelum menjalankan transfer penuh, gunakan mode **Dry Run** untuk mensimulasikan job tersebut. Pratinjau ini menunjukkan dengan tepat file mana yang akan disalin, membantu Anda menemukan struktur folder yang tidak sesuai atau file yang ternyata sangat besar sebelum menghabiskan bandwidth dan waktu untuk migrasi yang sebenarnya.

## Memantau Progres dan Memverifikasi Hasil

Selama transfer berlangsung, tab **Transferring** di bagian bawah antarmuka RcloneView menampilkan progres secara langsung: kecepatan saat ini, jumlah file yang selesai, total data yang dipindahkan, dan waktu yang telah berlalu. Untuk migrasi besar — misalnya tim legal yang memindahkan dokumen kontrak selama satu dekade — visibilitas ini sangat penting untuk memperkirakan berapa lama operasi akan berlangsung dan merencanakannya di sekitar jam kerja.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Monitoring Box to OneDrive transfer progress in RcloneView" class="img-large img-center" />

Setelah job selesai, periksa panel **Job History** untuk ringkasan eksekusi lengkap. Jika ada file yang mengalami error, log akan menampilkan jalur dan pesan kesalahan yang tepat sehingga Anda dapat menanganinya satu per satu tanpa perlu menjalankan ulang seluruh job. Setelah meninjau riwayat, gunakan fitur **Folder Compare** milik RcloneView untuk membandingkan sumber Box dan tujuan OneDrive secara berdampingan dan memastikan setiap file berhasil ditransfer sebelum menonaktifkan akun Box.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Box to OneDrive migration in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan **Box** sebagai remote melalui **Remote > New Remote** dengan autentikasi OAuth.
3. Tambahkan **OneDrive** sebagai remote kedua dengan autentikasi OAuth.
4. Buat job **Copy** di Job Manager dengan Box sebagai sumber dan OneDrive sebagai tujuan, aktifkan checksum verification, lalu jalankan.

Berpindah dari Box ke OneDrive adalah operasi yang bersih dan dapat diaudit dengan RcloneView — tanpa unduhan manual, tanpa penyimpanan perantara, dan visibilitas progres penuh dari awal hingga akhir.

---

**Panduan Terkait:**

- [Sinkronisasi Box ke Google Drive dengan RcloneView](https://rcloneview.com/support/blog/sync-box-to-google-drive-rcloneview)
- [Migrasi Box ke Dropbox Tanpa Downtime dengan RcloneView](https://rcloneview.com/support/blog/zero-downtime-box-to-dropbox-rcloneview)
- [Migrasi Box ke Backblaze B2 dengan RcloneView](https://rcloneview.com/support/blog/migrate-box-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
