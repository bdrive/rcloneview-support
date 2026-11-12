---
slug: cloud-storage-genealogy-family-history-rcloneview
title: "Penyimpanan Cloud untuk Peneliti Silsilah — Lestarikan Arsip Sejarah Keluarga dengan RcloneView"
authors:
  - tayson
description: "Lindungi catatan hasil pindaian, file pohon keluarga, dan rekaman sejarah lisan dengan RcloneView: pencadangan multi-cloud, enkripsi, dan verifikasi untuk arsip silsilah."
keywords:
  - penyimpanan cloud untuk silsilah
  - pencadangan sejarah keluarga
  - pencadangan arsip silsilah
  - cadangkan file pohon keluarga
  - dokumen keluarga hasil pindaian di cloud
  - pencadangan rekaman sejarah lisan
  - penyimpanan file perkumpulan silsilah
  - lestarikan foto keluarga di beberapa cloud
  - pencadangan data DNA terenkripsi
  - RcloneView silsilah
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Penyimpanan Cloud untuk Peneliti Silsilah — Lestarikan Arsip Sejarah Keluarga dengan RcloneView

> Puluhan tahun penelitian bisa tersimpan di satu drive laptop. RcloneView menyalinnya ke beberapa cloud dan memeriksa bahwa setiap salinan cocok.

Arsip silsilah tumbuh dalam bentuk yang beragam. Seorang peneliti sejarah keluarga mungkin menyimpan 40.000 pindaian TIFF buku register paroki, beberapa ekspor GEDCOM pohon keluarga, berjam-jam wawancara WAV dengan kerabat lanjut usia, dan file data DNA mentah. Perkumpulan silsilah sukarelawan menyimpan campuran yang sama di drive bersama dan disk USB cadangan. RcloneView memberi kedua kelompok satu aplikasi desktop untuk menyalin arsip tersebut ke penyimpanan cloud yang sudah mereka gunakan dan menjaga salinannya tetap mutakhir.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Semua Lokasi Arsip dalam Satu Jendela

Sebagian besar peneliti menyebarkan materinya di beberapa layanan: folder Google Drive yang dibagikan dengan sepupu, tautan Dropbox dari arsip yang jauh, dan drive eksternal berisi pindaian master. Di RcloneView, Anda menambahkan masing-masing sebagai remote. Google Drive, Dropbox, OneDrive, dan pCloud terhubung melalui login di browser. Backblaze B2 memerlukan Application Key ID dan key. NAS Synology dapat terdeteksi di jaringan lokal.

Buka hingga empat panel Explorer berdampingan dan seret folder pindaian dari drive eksternal ke remote cloud. Menyeret antar-remote yang berbeda akan menyalin, sehingga file asli tetap di tempatnya.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a cloud storage remote in RcloneView for a genealogy archive" class="img-large img-center" />

## Simpan Lebih dari Satu Salinan Pindaian yang Tak Tergantikan

Memindai ulang halaman sensus hanyalah merepotkan. Rekaman suara kakek atau nenek yang hilang tidak akan kembali. Gunakan sinkronisasi 1:N untuk mengirim satu folder sumber ke beberapa tujuan dalam satu job, misalnya folder pindaian master ke pCloud sekaligus ke bucket Backblaze B2. Hubungkan S3, Azure, atau Backblaze B2 dengan akses baca/tulis penuh pada FREE License.

Sebelum menjalankan pertama kali, gunakan Dry Run untuk melihat daftar apa yang akan disalin dan dihapus. Sinkronisasi satu arah hanya mengubah tujuan, sehingga folder master di drive Anda tidak pernah tersentuh.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Copying family history scans between cloud remotes in RcloneView" class="img-large img-center" />

## Lindungi Data DNA dan Catatan Kerabat yang Masih Hidup

File DNA mentah dan catatan tentang orang yang masih hidup memerlukan perhatian lebih dibanding register pernikahan abad ke-19. Bungkus folder cloud dengan remote **Crypt**, dan RcloneView akan mengenkripsi nama file, nama folder, serta isinya sebelum diunggah. Penyedia hanya menyimpan data terenkripsi, dan Anda menelusurinya dalam keadaan terdekripsi di RcloneView seperti biasa. Simpan kata sandi Crypt di tempat yang aman: tanpanya, file tidak dapat didekripsi.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare in RcloneView showing differences between archive copies" class="img-large img-center" />

## Verifikasi Salinan dan Otomatiskan Pembaruan

Gunakan Folder Compare untuk membandingkan master lokal dengan setiap salinan cloud. Filter menampilkan file yang hanya ada di satu sisi atau berbeda ukuran, dan Copy right atau Copy left menutup celah dengan satu klik. Dengan PLUS License, jadwal bergaya crontab dapat menjalankan sinkronisasi setiap Minggu malam, dan Job History mencatat status, ukuran, serta jumlah file setiap eksekusi.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a weekly family archive backup job in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan drive eksternal atau NAS Anda serta dua remote cloud, seperti pCloud dan Backblaze B2.
3. Buat job sinkronisasi dari folder arsip master Anda dengan kedua cloud sebagai tujuan, lalu jalankan Dry Run.
4. Tambahkan remote Crypt untuk file DNA dan catatan orang yang masih hidup, lalu periksa salinannya dengan Folder Compare.

Dengan dua salinan terverifikasi di luar lokasi, penelitian Anda akan bertahan lebih lama dari drive mana pun.

---

**Panduan Terkait:**

- [Penyimpanan Cloud untuk Museum dan Arsip](https://rcloneview.com/support/blog/cloud-storage-museums-archives-rcloneview)
- [Sinkronisasi Satu-ke-Banyak ke Beberapa Tujuan](https://rcloneview.com/support/blog/one-to-many-sync-multiple-destinations-rcloneview)
- [Enkripsi Pencadangan Cloud dengan Remote Crypt](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
