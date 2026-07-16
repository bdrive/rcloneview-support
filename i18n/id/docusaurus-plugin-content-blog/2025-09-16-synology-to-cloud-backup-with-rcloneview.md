---
slug: synology-to-cloud-backup-with-rcloneview
title: "Synology → Cloud, Jadi Mudah: Pencadangan Off-Site & Sinkronisasi dengan RcloneView"
authors:
  - jay
description: Lindungi Synology NAS Anda dengan pencadangan off-site ke Backblaze, Google Drive, Amazon S3, pCloud, Wasabi, dan lainnya—rencanakan, pratinjau, dan otomatiskan di GUI RcloneView.
keywords:
  - rcloneview
  - synology nas backup
  - backblaze b2
  - google drive
  - amazon s3
  - wasabi
  - pcloud
  - cloud backup
  - scheduled sync
  - rclone GUI
tags:
  - RcloneView
  - synology
  - cloud-backup
  - s3
  - google-drive
  - Backblaze
  - wasabi
  - pcloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synology → Cloud, Jadi Mudah: Pencadangan Off-Site & Sinkronisasi dengan RcloneView

> Simpan salinan kedua di luar lokasi tanpa skrip atau terminal. Cadangkan **Synology NAS** Anda ke **Backblaze, Google Drive, Amazon S3, pCloud, Wasabi**, dan lainnya—secara visual, andal, dan terjadwal.

## Pendahuluan — Mengapa perlu mendorong pencadangan Synology Anda ke luar lokasi?

NAS sangat cocok untuk akses lokal yang cepat—foto keluarga, proyek kreatif, dan berbagi tim hanya berjarak satu LAN. Namun **hanya mengandalkan on-prem** memiliki risiko: pencurian, kebakaran, penghapusan tidak sengaja, atau kegagalan multi-drive. Menambahkan **salinan cloud off-site** memberi Anda:

<!-- truncate -->

- **Ketahanan**: bertahan dari bencana lokal dengan salinan remote yang dapat dipulihkan.  
- **Fleksibilitas**: pulihkan dari mana saja, bahkan saat Anda jauh dari kantor/rumah.  
- **Tata kelola**: gabungkan retensi NAS dengan versioning dan kebijakan bucket cloud.

**Synology NAS sekilas**  
- Penyimpanan pusat yang dapat dijangkau melalui **SMB/NFS** (mount sebagai folder lokal) atau endpoint jaringan seperti **WebDAV** dan **SFTP**.  
- Ideal untuk pencadangan yang selalu aktif, hosting media, dan pusat berbagi file tim.

**Destinasi cloud sekilas**  
- **Google Drive**: kolaborasi dan berbagi di Google Workspace.  
- **Amazon S3 / Wasabi / Backblaze B2**: object storage dengan bucket, region, dan aturan lifecycle.  
- **pCloud**: penyimpanan yang ramah pengguna dengan penanganan file yang leluasa.  

**Mengapa mengirim NAS → cloud sekarang?**  
- Ciptakan **jaring pengaman off-site**.  
- **Standardisasi** pencadangan ke satu destinasi (atau multi-cloud).  
- Manfaatkan **kebijakan & versioning** yang tersedia di banyak platform cloud.

<!-- Obsidian note: CTA 컴포넌트 -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />
## Langkah 1 — Persiapan

Sebelum Anda mulai:

1. **Tentukan cakupan Anda** — folder bersama mana di Synology (mis., `/photo`, `/projects`, `/backup`) yang akan dipindahkan ke cloud?  
2. **Pastikan kapasitas cloud** — pastikan akun atau bucket tujuan memiliki ruang (ditambah ruang cadangan untuk versi).  
3. **Pilih metode koneksi NAS**  
   - **Local path**: mount share NAS via **SMB/NFS** di OS Anda dan gunakan sebagai **Local** di RcloneView.  
   - **WebDAV**: aktifkan **WebDAV Server** milik Synology dan hubungkan dengan WebDAV di RcloneView.  
   - **SFTP**: aktifkan SSH/SFTP di Synology dan hubungkan dengan **SFTP**.  
4. **Pilih cloud Anda** — Google Drive, Amazon S3/Wasabi, Backblaze B2, pCloud, dsb.  
5. **Tentukan kadensi** — arsip sekali jalan, sinkronisasi berkala, atau **pekerjaan terjadwal setiap malam**.  
6. **Uji coba dulu** — jalankan tes kecil untuk memvalidasi path, izin, dan throughput.

🔍 Ringkasan yang membantu:
- [Tutorial Cloud ↔ Synology](/tutorials/synology-nas-cloud-transfer)


## 3) Langkah 2 — Hubungkan koneksi di RcloneView

RcloneView membungkus konfigurasi rclone menjadi alur yang terpandu dan tinggal klik.

1. Buka **RcloneView** → klik **`+ New Remote`**  
2. **Tambahkan Synology (sumber)** melalui salah satu:  
   - **Local**: pilih folder NAS yang sudah di-mount (mis., `Z:\NAS\Projects` atau `/Volumes/NAS/Projects`)  
   - **WebDAV**: gunakan endpoint/kredensial WebDAV Synology → beri nama (mis., `NAS-WebDAV`)  
   - **SFTP**: host/IP, port, dan akun → beri nama (mis., `NAS-SFTP`)  
3. **Tambahkan Cloud (destinasi)**, misalnya:  
   - **Google Drive**: login OAuth → beri nama `MyGoogleDrive`  
   - **Amazon S3 / Wasabi**: provider **S3** → access key/secret, region, bucket → beri nama `MyS3` / `MyWasabi`  
   - **Backblaze B2**: provider **B2** (atau endpoint yang kompatibel S3 jika berlaku) → beri nama `MyB2`  
   - **pCloud**: alur sign-in/token → beri nama `MyPcloud`  
4. Pastikan keduanya muncul berdampingan di panel Explorer.

🔍 Panduan yang membantu:  
- [Pengaturan OAuth Cepat (Google Drive, dll.)](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)
- [Menambahkan Remote S3 (Amazon S3/Wasabi)](/howto/remote-storage-connection-settings/s3)
- [Tutorial Cloud ↔ Synology](/tutorials/synology-nas-cloud-transfer)

<img src="/support/images/en/tutorials/synology-nas-webdav-and-google-drive.png" alt="synology nas webdav and google drive" class="img-medium img-center" />

## 4) Langkah 3 — Jalankan pencadangan/sinkronisasi (tiga metode praktis)

RcloneView menawarkan tiga pendekatan yang mudah. Mulai dari yang kecil, lalu tingkatkan dengan percaya diri.

### A) Drag & Drop (salin manual)
- Buka **Synology (Local/WebDAV/SFTP)** di satu sisi dan **cloud** Anda di sisi lain, lalu **seret folder/file melintasi kedua sisi**.  
- Cocok untuk pemindahan selektif dan hasil cepat.  

👉 Lihat selengkapnya: [Menyalin File menggunakan Drag and Drop](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

### B) Compare & Copy (pratinjau perubahan)
- Jalankan **Compare** untuk melihat apa yang baru/berubah di NAS dibanding bucket/drive cloud Anda.  
- Salin hanya delta—lebih sedikit kejutan, proses lebih cepat.  

👉 Lihat selengkapnya: [Membandingkan dan Mengelola File](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results highlighting changed files" class="img-medium img-center" />

### C) Sync & Scheduled Jobs (otomatisasi)
- Gunakan **Sync** untuk mencerminkan folder NAS yang dipilih ke destinasi cloud Anda.  
- Lakukan **dry-run** terlebih dahulu, lalu simpan sebagai **Job** yang dapat digunakan kembali dan tambahkan jadwal (harian/mingguan).  

👉 Lihat selengkapnya:
- [Menyinkronkan Remote Storage](/howto/rcloneview-basic/synchronize-remote-storages)
- [Membuat Sync Job](/howto/rcloneview-basic/create-sync-jobs)
- [Penjadwalan dan Eksekusi Job](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a saved job in RcloneView" class="img-medium img-center" />

**Tips pro**
- Untuk **cloud tipe S3** (S3/Wasabi/B2 yang kompatibel S3), buat bucket terlebih dahulu dan pilih region yang tepat.  
- Aktifkan **versioning** pada bucket yang mendukung untuk rollback yang lebih aman.  
- Jaga sumber NAS tetap **read-only selama cutover** untuk mencegah drift.  
- Gunakan filter untuk mengecualikan folder cache/temp dari pencadangan.


## 5) Kesimpulan — Poin utama & tips tambahan

- **Mengapa melakukan ini**: jaring pengaman off-site yang tahan lama, opsi pemulihan bencana yang lebih cepat, dan retensi terpadu.  
- **Cara kerjanya**: RcloneView menghubungkan Synology NAS dan destinasi cloud Anda, lalu memungkinkan Anda **Drag & Drop**, **Compare**, atau **Sync**—dengan **penjadwalan** untuk pencadangan tanpa perlu campur tangan manual.  
- **Skalakan dengan aman**: uji coba dulu, patuhi kuota provider, dan pantau log job untuk jejak audit yang bersih.


## FAQ

**T. Bisakah saya mencadangkan ke beberapa cloud?**  
**J.** Ya—tambahkan beberapa destinasi (mis., S3 dan Google Drive) dan buat job atau jadwal terpisah untuk masing-masing.

**T. Apakah saya perlu command line?**  
**J.** Tidak. RcloneView adalah GUI lengkap—konfigurasikan remote, pratinjau perubahan, jalankan sinkronisasi, dan jadwalkan job tanpa CLI.


**Siap membuat pencadangan Synology Anda berjalan otomatis—off-site dan terkendali?**  

<CloudSupportGrid />
