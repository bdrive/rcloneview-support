---
slug: backup-cctv-nvr-to-cloud-rcloneview
title: "Cara Mencadangkan dan Mengarsipkan Rekaman CCTV/NVR ke Penyimpanan Cloud Secara Otomatis Menggunakan RcloneView"
authors:
  - tayson
description: "Kirim video CCTV/NVR dari NAS, SMB, atau path SFTP ke Wasabi, S3, atau Google Drive dengan RcloneView. Gunakan Compare, Sync Jobs yang mendukung checksum, dan jadwal otomatis untuk melindungi bukti rekaman tanpa unggah manual."
keywords:
  - rcloneview
  - pencadangan cctv
  - arsip cloud nvr
  - wasabi s3
  - pencadangan google drive
  - smb sftp
  - penyimpanan surveillance
  - verifikasi checksum
  - pencadangan terjadwal
  - pemulihan bencana
tags:
  - cloud
  - sync
  - nas
  - cctv
  - sftp
  - smb
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cara Mencadangkan dan Mengarsipkan Rekaman CCTV/NVR ke Penyimpanan Cloud Secara Otomatis Menggunakan RcloneView

> Jaga keamanan video surveillance dari pencurian, kebakaran, atau kerusakan perangkat. RcloneView menghubungkan folder NVR di NAS/SFTP/SMB ke Wasabi, S3, atau Google Drive, lalu mengotomatiskan Compare + Sync Jobs sehingga hanya rekaman baru yang dipindahkan dan bukti tetap utuh.

<!-- truncate -->


<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## 1. Mengapa pencadangan cloud penting untuk rekaman CCTV

- Disk NVR/NAS cepat penuh karena perekaman 24/7.  
- Pencurian, kebakaran, atau vandalisme dapat menghapus satu-satunya salinan.  
- Kepatuhan dan audit menuntut jangka waktu retensi yang lebih lama.  
- Peninjauan jarak jauh dan berbagi bukti memerlukan akses off-site.  
- Menyalin file H.264/H.265 berukuran multi-GB secara manual rawan kesalahan.

## 2. Apa yang membuat file surveillance sulit ditangani

- Penulisan berkelanjutan menghasilkan ribuan klip berbasis tanggal.  
- Bitrate besar (1080p/4K) membebani bandwidth saat pencadangan.  
- Struktur folder berbeda-beda per vendor (YYYY/MM/DD, ID kamera).  
- Perlu transfer terjadwal (per jam/harian) tanpa pengawasan manusia.  
- Integritas penting: frame yang rusak melemahkan nilai pembuktian.

## 3. Bagaimana RcloneView membantu

- Hubungkan sumber **NAS/SMB/SFTP/WebDAV** dan target **Wasabi/S3/Google Drive** dalam satu antarmuka.  
- Explorer dua panel membuat pemindahan cloud-ke-cloud atau LAN-ke-cloud menjadi visual dan langsung.  
- **Compare** menandai klip baru/berubah sehingga Anda hanya mengirim delta.  
- Dukungan **Checksum** (S3/Wasabi) memvalidasi unggahan.  
- **Sync Jobs + penjadwalan** menjalankan pencadangan secara otomatis, tanpa memerlukan skrip.

<!-- Image verified: exists -->


## 4. Panduan langkah demi langkah untuk pencadangan CCTV/NVR

### Langkah 1) Hubungkan penyimpanan NVR (SMB atau SFTP)

1. Klik **Remote → + New Remote**.  
2. Pilih **SMB** (untuk share NAS/Windows) atau **SFTP** (untuk ekspor NVR Linux).  
3. Masukkan alamat server, share/path, dan kredensial (tambahkan domain jika diperlukan).  
4. Simpan dan konfirmasi daftarnya di Remote Manager.

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/create-remote-by-remote-manager.png" alt="Create NVR remote from Remote Manager" class="img-medium img-center" />

### Langkah 2) Tambahkan target cloud Anda (Wasabi/S3/Google Drive)

- **Wasabi/S3**: tempelkan access/secret key, region, bucket.  
- **Google Drive**: klik **Connect** dan selesaikan OAuth di browser.  
- Tampilkan kedua remote berdampingan untuk memudahkan kerja.

### Langkah 3) Buka sumber dan tujuan

1. Buka **Browse**.  
2. Panel kiri: buka folder NVR (misalnya, `/recordings/2025/12/08`).  
3. Panel kanan: buka bucket atau folder Drive untuk pencadangan.  
4. Perluas beberapa folder tanggal untuk memverifikasi path.

### Langkah 4) Pratinjau delta dengan Compare

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/folder-comparison-completed.png" alt="Folder comparison showing CCTV deltas" class="img-medium img-center" />

- Klik **Compare** untuk menyoroti file video yang hilang atau berubah ukuran.  
- Selesaikan konflik nama (ID kamera duplikat) sebelum menyalin.  
- Ini mencegah penimpaan klip yang lebih baru di tujuan.

### Langkah 5) Copy atau Sync dengan aman

- Mulailah dengan **copy satu arah** dari NVR → cloud (tanpa penghapusan).  
- Aktifkan **checksum** untuk S3/Wasabi guna memvalidasi unggahan.  
- Gunakan **batas bandwidth** selama jam kerja; lepaskan batas pada malam hari.  
- Untuk hari dengan volume sangat besar, turunkan concurrency untuk menghindari throttling, lalu naikkan kembali nanti.

### Langkah 6) Simpan alur kerja sebagai Job

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/save-sync-to-jobs.png" alt="Save CCTV sync to jobs" class="img-medium img-center" />

1. Di dialog Sync/Copy, klik **Save to Jobs**.  
2. Beri nama (misalnya, `cctv-daily-wasabi`).  
3. Pilih sinkronisasi satu arah jika Anda berencana memangkas klip lama nanti.

### Langkah 7) Jadwalkan eksekusi otomatis

<!-- Image verified: exists with /support prefix -->
<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule CCTV backup job" class="img-medium img-center" />

- Buka **Job Manager → Add Job**.  
- Pilih job yang telah disimpan dan atur jadwal: per jam, setiap 3 jam, atau tiap malam pukul 02:00.  
- Susun jadwal job secara bertahap per grup kamera jika bandwidth terbatas.  
- Periksa **Job History** setelah beberapa kali eksekusi pertama.

## 5. Contoh kebijakan pencadangan

- **Penyimpanan jangka pendek (hot):** simpan 7 hari terakhir di NAS/NVR untuk peninjauan cepat.  
- **Arsip jangka panjang:** kirim semua rekaman ke Wasabi/S3 setiap minggu; aktifkan versioning.  
- **Audit/peninjauan:** salin hari-hari tertentu ke Google Drive untuk investigator dan manajer.  
- **Franchise atau multi-lokasi:** pisahkan bucket/prefix per toko untuk mengisolasi akses.


## 6. Optimasi biaya untuk arsip video

- Simpan rekaman yang jarang diakses di **Wasabi** atau tier infrequent-access S3.  
- Simpan hanya hari-hari aktif di Google Drive untuk berbagi cepat.  
- Gunakan lifecycle rules di S3/Wasabi untuk memindahkan objek lama ke tier yang lebih murah.  
- Kecualikan klip uji kamera dan segmen tanpa gerakan jika kebijakan Anda mengizinkan.

## 7. Memulihkan rekaman saat diperlukan

- Jelajahi remote cloud di Explorer; filter berdasarkan folder tanggal.  
- Salin hanya jam/hari yang relevan ke disk lokal untuk ditinjau.  
- Gunakan **Compare** untuk memastikan file yang dipulihkan cocok dengan aslinya (ukuran/waktu atau checksum).  
- Untuk legal hold, gandakan ke prefix/bucket read-only terpisah.

## 8. Pola implementasi di dunia nyata

- **Retail kecil:** NVR → Wasabi per jam; simpan 30 hari di cloud, 7 hari lokal.  
- **Pabrik:** CCTV → NAS → copy Wasabi tiap malam; arsip cold S3 bulanan.  
- **Jaringan franchise:** prefix per lokasi dalam satu bucket; salinan Drive untuk audit HQ.  
- **Penyedia keamanan:** bucket per pelanggan, job terjadwal, dan remote terenkripsi untuk lokasi yang diatur regulasi.

## 9. Penutup

RcloneView mengubah pencadangan CCTV/NVR menjadi alur kerja yang dapat diprediksi tanpa CLI. Hubungkan NAS atau perekam Anda melalui SMB/SFTP, pasangkan dengan Wasabi/S3/Google Drive, pratinjau delta dengan Compare, dan jadwalkan Sync Jobs yang mendukung checksum. Dengan otomatisasi, logging, dan opsi enkripsi, Anda dapat memenuhi kebutuhan retensi, audit, dan pemulihan bencana tanpa harus mengawasi unggahan setiap malam.

<CloudSupportGrid />
