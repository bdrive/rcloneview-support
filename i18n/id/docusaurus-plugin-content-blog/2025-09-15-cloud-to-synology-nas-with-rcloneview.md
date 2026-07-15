---
slug: cloud-to-synology-nas-with-rcloneview
title: "Jembatan Cloud-ke-NAS: Cadangkan Google Drive & OneDrive ke Synology dengan RcloneView"
authors:
  - jay
description: Pindahkan dan sinkronkan file dari drive cloud (mis., Google Drive, OneDrive) ke NAS Synology Anda menggunakan alur kerja click-first RcloneView—transfer drag-and-drop, perbandingan visual, dan sinkronisasi terjadwal tanpa CLI.
keywords:
  - rcloneview
  - synology nas
  - pencadangan google drive
  - pencadangan onedrive
  - cloud ke nas
  - webdav
  - sftp
  - rclone GUI
  - sinkronisasi terjadwal
tags:
  - RcloneView
  - synology
  - google-drive
  - onedrive
  - cloud-file-transfer
  - backup
---



import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Jembatan Cloud-ke-NAS: Cadangkan Google Drive & OneDrive ke Synology dengan RcloneView

> Simpan salinan cadangan lokal dan kendalikan data Anda. Cerminkan **drive cloud** Anda ke **NAS Synology** dengan alur kerja point-and-click yang bersih—tanpa perlu command line.

## Cloud ke NAS, cara yang cerdas—mengapa ini penting

Penyimpanan cloud sangat nyaman untuk kolaborasi dan akses dari mana saja. Namun, menyimpan **salinan kedua on-premises** di NAS Synology memberi Anda pencadangan yang terversi, pemulihan secepat LAN, dan independensi dari penyedia mana pun. Dengan **RcloneView**, Anda dapat menghubungkan layanan cloud populer (mis., **Google Drive**, **OneDrive**, dan lainnya yang didukung rclone) serta NAS Anda, lalu **melihat pratinjau, menyalin, dan menjadwalkan** pekerjaan dari satu layar.

<!-- truncate -->

**Memahami drive cloud (sekilas)**  
- Sangat baik untuk kolaborasi dan berbagi secara real-time.  
- Batasan/kuota dari sisi penyedia dapat memengaruhi migrasi berskala besar (rencanakan secara bertahap).  

**Memahami NAS Synology (sekilas)**  
- Pusat penyimpanan Anda yang selalu aktif di rumah atau kantor.  
- Dapat diakses melalui **SMB/NFS** (di-mount sebagai folder lokal), atau protokol jaringan seperti **WebDAV** dan **SFTP**.  
- Ideal untuk pencadangan terpusat, hosting media, dan pengarsipan jangka panjang.

**Mengapa membawa cloud → NAS?**  
- **Ketahanan**: simpan salinan yang dapat diakses offline dan Anda kendalikan.  
- **Kecepatan**: pulihkan folder besar melalui LAN tanpa menunggu bandwidth internet.  
- **Tata kelola**: satukan retensi, akses, dan audit secara lokal.

<!-- Obsidian note: CTA 컴포넌트 -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />
## Langkah 1 – Persiapan

Sebelum Anda mulai:

1. **Tentukan cakupan Anda** — folder Google Drive/OneDrive mana yang perlu disimpan di NAS?  
2. **Pastikan kapasitas NAS** — pastikan ruang kosong cukup dan share/folder tujuan sudah siap.  
3. **Pilih metode koneksi untuk NAS Anda**  

   - **WebDAV**: aktifkan **WebDAV Server** Synology, lalu hubungkan melalui WebDAV di RcloneView.  
   - **SMB**: aktifkan **SMB** Synology, lalu hubungkan melalui SMB di RcloneView.  
   - **SFTP**: aktifkan SSH/SFTP di Synology dan hubungkan melalui **SFTP**.  
4. **Rencanakan frekuensi Anda** — migrasi satu kali, sinkronisasi berkala, atau pekerjaan terjadwal setiap malam.  
5. **Perhatikan batasan penyedia** — pemindahan besar mungkin perlu dipecah menjadi beberapa batch; pertimbangkan uji coba terlebih dahulu.

🔍 Tutorial yang membantu: 

- [Integrasi NAS Synology dengan RcloneView](/tutorials/synology-nas-cloud-transfer)

## Langkah 2 – Menghubungkan koneksi di RcloneView

RcloneView membungkus konfigurasi rclone dalam alur klik-demi-klik yang terpandu.

1. Buka **RcloneView** → klik **`+ New Remote`**  
2. Tambahkan **drive cloud** Anda  
   - **Google Drive**: login OAuth → beri nama (mis., `MyGoogleDrive`)  
   - **OneDrive**: login OAuth → beri nama (mis., `MyOneDrive`)  
   - (Lainnya yang didukung rclone dapat ditambahkan dengan cara serupa)  
3. Tambahkan **target NAS Synology** Anda menggunakan **salah satu** dari berikut:  
   - **WebDAV**: endpoint dari Synology WebDAV Server, kredensial → beri nama (mis., `MyNAS-WebDAV`)  
   - **SMB**: hostIP NAS, port, akun → beri nama (mis., `MyNAS-SMB`)  
   - **SFTP**: hostname/IP NAS, port, akun → beri nama (mis., `MyNAS-SFTP`)  
4. Pastikan keduanya muncul berdampingan di panel Explorer.

🔍 Panduan yang membantu:  
- [Integrasi NAS Synology dengan RcloneView](/tutorials/synology-nas-cloud-transfer)
- [Cara Menambahkan Remote Google Drive](https://rcloneview.com/support/howto/intro#step-2-adding-remote-storage-google-drive-example)  
- [Pengaturan Cepat OAuth (OneDrive/Google)](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)


<img src="/support/images/en/tutorials/synology-nas-webdav-and-google-drive.png" alt="synology nas webdav and google drive" class="img-medium img-center" />

## Langkah 3 – Menjalankan pekerjaan pencadangan/sinkronisasi

RcloneView menawarkan tiga metode praktis. Mulailah dari yang kecil, lalu tingkatkan skalanya.

### A) Drag & Drop (salin manual)
- Buka **Google Drive/OneDrive** di satu sisi dan target **NAS** Anda di sisi lain, lalu **seret folder/file melintasi keduanya**.  
- Cocok untuk pemindahan selektif dan hasil cepat.  

👉 Lihat selengkapnya: [Menyalin File menggunakan Drag and Drop](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

### B) Compare & Copy (pratinjau perubahan)
- Jalankan **Compare** untuk melihat apa yang baru/berubah di cloud dibandingkan NAS Anda.  
- Salin hanya yang berubah—kurangi kejutan dan waktu.  

👉 Lihat selengkapnya: [Membandingkan dan Mengelola File](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results highlighting changed files" class="img-medium img-center" />

### C) Sync & Scheduled Jobs (otomatisasi)
- Gunakan **Sync** untuk mencerminkan folder cloud terpilih ke share NAS Anda.  
- Lakukan **Dry-run** terlebih dahulu, lalu simpan sebagai **Job** yang dapat digunakan kembali dan tambahkan jadwal (setiap malam/mingguan).  

👉 Lihat selengkapnya:
- [Menyinkronkan Remote Storage](/howto/rcloneview-basic/synchronize-remote-storages)
- [Membuat Sync Job](/howto/rcloneview-basic/create-sync-jobs)
- [Penjadwalan dan Eksekusi Job](/howto/rcloneview-advanced/job-scheduling-and-execution)
<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a saved job in RcloneView" class="img-medium img-center" />

## Kesimpulan — Poin penting & tips tambahan

- **Mengapa melakukan ini**: salinan kedua di bawah kendali Anda, pemulihan lebih cepat melalui LAN, dan retensi yang terpadu.  
- **Cara kerjanya**: RcloneView memungkinkan Anda menghubungkan drive cloud dan NAS Synology Anda, lalu **Drag & Drop**, **Compare**, atau **Sync**—dengan **penjadwalan** untuk pencadangan tanpa perlu campur tangan.  
- **Skalakan dengan aman**: uji coba terlebih dahulu, patuhi kuota penyedia, dan pantau log pekerjaan untuk jejak audit yang bersih.

## FAQ

**T. Bisakah RcloneView menjalankan pencadangan berulang secara otomatis?**  
**J.** Ya—simpan Sync Anda sebagai **Job** dan jadwalkan (mis., setiap malam). Anda akan melihat riwayat dan status di Job Manager.

**T. Bagaimana dengan iCloud?**  
**J.** Rclone mendukung banyak penyedia. Untuk layanan tanpa backend langsung, pertimbangkan untuk mengekspor data secara lokal terlebih dahulu, lalu gunakan RcloneView untuk memindahkannya ke NAS Anda.


**Siap menyimpan salinan lokal yang andal dari kehidupan cloud Anda?**  


<!-- Obsidian note: Download 컴포넌트 -->
<CloudSupportGrid />
