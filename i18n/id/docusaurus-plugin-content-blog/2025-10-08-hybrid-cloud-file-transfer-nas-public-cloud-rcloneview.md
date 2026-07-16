---
slug: hybrid-cloud-file-transfer-nas-public-cloud-rcloneview
title: "Transfer File Hybrid Cloud Antara NAS On-Prem dan Public Cloud Menggunakan RcloneView"
authors:
  - tayson
description: "Mount, sinkronisasi, dan otomatisasi transfer antara NAS on-prem (SMB/SFTP) dan public cloud seperti S3, Wasabi, Google Drive, dan Dropbox menggunakan Explorer dua panel, Compare, Sync, dan Jobs terjadwal dari RcloneView."
keywords:
  - rcloneview
  - hybrid cloud
  - nas backup
  - smb sftp
  - webdav
  - s3 transfer
  - google drive sync
  - wasabi backup
  - mount remote drive
  - rclone gui
tags:
  - cloud
  - sync
  - nas
  - mount
  - hybrid-cloud
  - sftp
  - smb
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Transfer File Hybrid Cloud Antara NAS On-Prem dan Public Cloud Menggunakan RcloneView

> Hubungkan NAS on-prem dan public cloud tanpa harus bergulat dengan CLI. RcloneView memungkinkan Anda menambahkan SMB/SFTP/WebDAV, membuka cloud secara berdampingan, membandingkan perubahan dengan Compare, melakukan mount drive, dan menjadwalkan sinkronisasi setiap malam—sehingga penyimpanan hybrid tetap rapi dan dapat diprediksi.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/rcloneview-user-interface.png" alt="RcloneView user interface overview" class="img-medium img-center" />

## Mengapa hybrid cloud itu sulit (dan sepadan)

- NAS on-prem memberikan akses LAN yang cepat untuk editor dan render node, tetapi tidak memiliki ketahanan off-site.  
- Public cloud (S3/Wasabi/Drive/Dropbox) menambah daya tahan dan berbagi secara global, tetapi bandwidth dan biaya perlu diperhitungkan.  
- Tim harus menangani izin yang berbeda-beda (ACL pada NAS vs. OAuth/cloud RBAC) dan konvensi folder yang berbeda.  
- Menyalin secara manual berisiko menimbulkan overwrite, versi yang hilang, dan kepanikan di tengah malam.  
- GUI yang menyatukan kedua sisi mengurangi beban kognitif dan memungkinkan Anda melakukan otomatisasi dengan percaya diri.

## Local FS vs. remote FS dalam satu panel

- **Local/NAS (SMB/SFTP/WebDAV):** mirip POSIX, sensitif terhadap izin, latensi rendah di LAN.  
- **Cloud:** object storage (S3/Wasabi) atau bergaya drive (Google Drive/Dropbox); membutuhkan OAuth atau key.  
- RcloneView memperlakukan masing-masing sebagai remote yang dapat Anda buka, bandingkan, mount, dan sinkronkan dalam satu antarmuka.

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/explorer-view-layout.png" alt="Two-pane Explorer layout" class="img-medium img-center" />

## Tambahkan remote NAS on-prem Anda (SMB/SFTP/WebDAV)

1. Klik **Remote → + New Remote** atau tombol **+** di Explorer.  
2. Pilih **SMB** (untuk share Windows/NAS) atau **SFTP** (server Linux/UNIX).  
3. Masukkan alamat server, share/path, dan kredensial (tambahkan domain jika SMB memerlukannya).  
4. Simpan dan uji penelusuran di Explorer dua panel.

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/create-remote-by-remote-manager.png" alt="Create remote from Remote Manager" class="img-medium img-center" />

## Tambahkan remote public cloud Anda

- **S3/Wasabi/B2/R2:** gunakan access/secret key; pilih region dan bucket.  
- **Google Drive/Dropbox:** klik **Connect** untuk menyelesaikan OAuth; tidak perlu menempelkan token.  
- **Endpoint WebDAV:** tempelkan URL dan autentikasi.  
- Simpan remote NAS dan cloud di **Remote Manager** agar dapat digunakan kembali.

## Mount remote file system seperti drive lokal

Mount membantu aplikasi yang mengharuskan path lokal (NLE, DAW, CAD). Mount manager RcloneView menjauhkan Anda dari flag CLI.

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount from Remote Explorer" class="img-medium img-center" />

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/mount-manager-status.png" alt="Mount manager status view" class="img-medium img-center" />

- Mount dari remote card atau toolbar, pilih drive letter/path, dan atur cache/buffer.  
- Mulai/hentikan mount di **Mount Manager** tanpa perlu restart.  
- Ideal untuk mengedit langsung dari SFTP/SMB atau menampilkan S3 sebagai folder untuk tugas ringan.

## Bandingkan sebelum menyalin

Perpindahan hybrid bisa jadi berantakan; Compare membuat perbedaan menjadi jelas.

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/folder-comparison-completed.png" alt="Folder comparison results" class="img-medium img-center" />

- Buka NAS di sebelah kiri, bucket cloud di sebelah kanan, lalu tekan **Compare**.  
- Menyoroti file yang **hilang**, **berbeda ukuran**, dan **cocok**.  
- Salin hanya bagian yang berbeda dari NAS → cloud (atau sebaliknya) untuk menghindari overwrite pada edit yang lebih baru.

## Alur sync dan copy yang cocok untuk hybrid cloud

- **One-way copy** untuk pencadangan/arsip; tidak menghapus di tujuan.  
- **One-way sync with delete** ketika Anda sengaja mencerminkan NAS ke cloud.  
- **Two-way sync** secukupnya (hanya jika kedua sisi aktif berubah).  
- Gunakan **filter include/exclude** untuk melewati cache, proxy, dan render sementara.

## Menangani izin tanpa drama

- **SMB:** selaraskan domain/workgroup; pastikan ACL share dan ACL filesystem mengizinkan penulisan.  
- **SFTP:** verifikasi UID/GID dan kepemilikan folder di server; sesuaikan `chmod` di sisi server jika diperlukan.  
- **WebDAV:** beberapa host memblokir MOVE/DELETE; gunakan copy-only jika ragu.  
- Jika mount bersifat read-only, mount ulang dengan user yang tepat atau sesuaikan opsi mount di dialog.

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/log-tab.png" alt="Log tab showing transfer details" class="img-medium img-center" />

- Periksa **Logs** untuk petunjuk 401/403/550/permission-denied dan coba lagi setelah diperbaiki.

## Tips performa untuk NAS ↔ cloud

- Jadwalkan job besar di luar jam kerja; batasi bandwidth selama jam kerja.  
- Untuk S3/Wasabi, jaga concurrency tetap moderat agar tidak terkena throttling; aktifkan **checksum** jika didukung.  
- Untuk SFTP melalui WAN, kurangi transfer paralel jika terjadi packet loss; pertimbangkan kompresi hanya jika CPU memungkinkan.  
- Hindari melakukan mount ganda pada share SMB yang sama di jaringan yang tidak stabil.

## Otomatisasi dengan Jobs dan jadwal

- Simpan Sync/Copy mana pun sebagai **Job** (misalnya, `nas-to-s3-nightly`).  
- Buka **Job Manager → Add Job**, pilih job yang tersimpan, dan jadwalkan **02:00 setiap hari**.  
- Atur jeda beberapa job (NAS → S3, NAS → Drive, Drive → NAS) untuk meminimalkan konflik.

<!-- Image verified: exists and path corrected with /support -->
<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Create job schedule" class="img-medium img-center" />

### Contoh set job

- **NAS (SMB) → Wasabi (one-way copy)**: arsip mingguan untuk RAW/PROJECT.  
- **NAS (SFTP) → Google Drive Shared Drive (one-way sync)**: EDIT/EXPORT harian untuk kolaborasi.  
- **S3 → NAS (one-way copy)**: menarik potongan arsip dingin untuk uji restore lokal bulanan.

### Dry-run dan verifikasi

- Jalankan **dry-run** pada eksekusi pertama untuk memastikan apa yang akan dipindahkan.  
- Setelah sinkronisasi, buka kembali **Compare**; hanya perbedaan yang diharapkan yang seharusnya tersisa.  
- Untuk S3/Wasabi, pertahankan versioning + aturan lifecycle untuk mengendalikan biaya dan menjaga riwayat.

## Atur strategi folder hybrid Anda

- Standarkan template (misalnya, `Project/RAW`, `EDIT`, `EXPORT`, `ARCHIVE`) di NAS maupun cloud.  
- Simpan proxy di cloud untuk berbagi cepat; simpan RAW di NAS/S3 untuk kualitas asli.  
- Gunakan **Copy** untuk arsip, **Sync** untuk workspace aktif, **Mount** untuk kompatibilitas aplikasi.  
- Dokumentasikan remote mana yang menjadi "sumber kebenaran" untuk setiap folder guna menghindari penghapusan tidak sengaja.

## Alur kerja dunia nyata (langkah demi langkah)

1. **Hubungkan remote:** tambahkan SMB/SFTP untuk NAS, tambahkan S3/Wasabi dan Google Drive.  
2. **Buka dua panel:** NAS di kiri, cloud di kanan; pastikan daftar file muncul.  
3. **Bandingkan folder pilot kecil:** pastikan perbedaannya sesuai.  
4. **Jalankan one-way copy ke cloud:** mulai dengan pencadangan yang tidak merusak.  
5. **Simpan sebagai Job + jadwalkan:** setiap malam pukul 02:00 hanya untuk perbedaan.  
6. **Mount untuk aplikasi:** mount NAS atau S3 ketika editor membutuhkan akses berbasis path.  
7. **Tinjau log:** periksa retry, pesan throttling, atau izin di Logs.  
8. **Uji restore berkala:** salin kembali dari cloud ke folder NAS sementara untuk memverifikasi integritas.  
9. **Perbaiki filter:** kecualikan cache/render; sertakan hanya master dan file proyek untuk arsip.  
10. **Serah terima tim:** bagikan template folder dan jadwal job agar semua orang mengikuti peta yang sama.

## Daftar troubleshooting cepat

- Melihat 403/550? Periksa kembali kredensial, ACL share, atau kebijakan bucket.  
- WAN lambat? Turunkan concurrency dan aktifkan batas bandwidth; jadwalkan di malam hari.  
- Mount tidak bisa menulis? Mount ulang dengan user yang benar atau sesuaikan izin SMB.  
- Penghapusan WebDAV gagal? Salin lalu hapus secara manual; beberapa host memblokir MOVE/DELETE.  
- Ada salinan duplikat? Gunakan Compare untuk membersihkan dengan aman; hindari two-way sync kecuali diperlukan.

## Checklist untuk go live

- [ ] Remote NAS (SMB/SFTP/WebDAV) sudah ditambahkan dan dapat ditelusuri.  
- [ ] Remote cloud (S3/Wasabi/Drive/Dropbox) sudah ditambahkan dan diautentikasi.  
- [ ] Template folder dicerminkan di kedua sisi.  
- [ ] Compare pilot dan dry-run telah selesai.  
- [ ] Job disimpan dan dijadwalkan (disarankan pukul 02:00).  
- [ ] Checksum diaktifkan jika didukung; log dipantau.  
- [ ] Uji restore dilakukan dan didokumentasikan.

## Ringkasan

RcloneView mengubah pekerjaan hybrid cloud menjadi alur kerja yang dapat diulang: tambahkan remote NAS dan cloud, bandingkan sebelum menyalin, lakukan mount saat aplikasi membutuhkan path lokal, dan otomatisasi pencadangan dengan Jobs dan jadwal. Dengan log yang terlihat, retry, dan dukungan checksum, Anda dapat mempertahankan performa on-prem dan ketahanan cloud tanpa perlu menyentuh CLI.

<CloudSupportGrid />
