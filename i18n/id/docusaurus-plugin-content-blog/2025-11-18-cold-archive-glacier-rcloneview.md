---
slug: tiered-cloud-archive-glacier-rcloneview
title: "Pencadangan Cloud Bertingkat ke S3 Standard, Wasabi, dan Glacier Deep Archive dengan RcloneView"
authors:
  - tayson
description: Bangun pipeline pencadangan hot-warm-cold dengan RcloneView di S3/Wasabi untuk pemulihan cepat dan Glacier Deep Archive untuk retensi berbiaya sangat rendah, menggunakan job Sync/Copy terjadwal dan kebijakan lifecycle.
keywords:
  - glacier deep archive
  - cold storage
  - tiered backup
  - rclone s3
  - rcloneview
  - wasabi archive
  - lifecycle policy
  - cloud backup
  - archive retention
tags:
  - archive
  - s3
  - glacier
  - wasabi
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Pencadangan Cloud Bertingkat ke S3 Standard, Wasabi, dan Glacier Deep Archive dengan RcloneView

> Jaga agar pemulihan data terbaru tetap cepat dan retensi jangka panjang tetap murah: hot di S3 Standard, warm di Wasabi/R2, dan archive di Glacier Deep Archive—dengan jadwal RcloneView dan kebijakan lifecycle bucket.

Satu kelas penyimpanan jarang cocok untuk semua file. Rancang pipeline bertingkat: salin data terbaru ke S3 Standard untuk akses cepat, cerminkan ke tier warm berbiaya rendah (Wasabi/R2) untuk redundansi geografis, dan dorong snapshot bulanan ke Glacier Deep Archive untuk retensi kepatuhan. RcloneView melapisi GUI di atas rclone sehingga Anda dapat menjadwalkan Sync, memverifikasi dengan Compare, dan menjaga aturan lifecycle tetap utuh—tanpa skrip shell.

<!-- truncate -->

**Dokumen terkait**

- Membuat Job Sync: https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs
- Penjadwalan & Eksekusi Job (Plus): https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution
- Membandingkan folder: https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents
- Mount sebagai drive lokal: https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Mengapa pencadangan bertingkat dengan RcloneView

- Kecepatan pemulihan: File terbaru tetap berada di S3 Standard untuk penarikan data dengan latensi rendah.
- Kontrol biaya: Salinan warm di Wasabi/R2; deep archive di Glacier dengan biaya sen per TB-bulan.
- Ketahanan: Multi-cloud dan multi-region mengurangi risiko ketergantungan pada satu provider.
- Tanpa skrip: Job visual, jadwal, dan log alih-alih cron/YAML.
- Bukti: Job Compare menampilkan penyimpangan (drift) sebelum Anda perlu melakukan pemulihan.

## Gambaran arsitektur

```
[Primary (NAS/Drive/OneDrive)] --(Hourly Sync)--> [S3 Standard hot copy]
                                         \
                                          --(Daily Sync)--> [Wasabi/R2 warm copy]
                                          --(Monthly Copy)--> [Glacier Deep Archive]
```

- Hot: S3 Standard (pemulihan cepat).
- Warm: Wasabi atau R2 (murah + ramah egress untuk pemulihan).
- Cold: Glacier Deep Archive untuk retensi 90-365 hari (gunakan lifecycle bucket untuk memindahkan objek).

## Prasyarat

- Tiga remote yang dikonfigurasi di RcloneView (misalnya, `s3:hot`, `wasabi:warm`, `s3:archive`).
- Versioning pada bucket hot/warm; aturan lifecycle pada bucket archive untuk berpindah ke Glacier Deep Archive.
- Izin IAM/API: list/read/write + multipart; izin restore Glacier untuk tier cold.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## Langkah 1: Membangun job Sync hot dan warm

1. Buat job **Sync** (Primary -> S3 hot).
2. Di **Advanced Settings**, atur jumlah transfer dan aktifkan perbandingan checksum jika kedua sisi mendukung hash.
3. Di **Filtering Settings**, kecualikan folder cache/temp.
4. Buat job **Sync** kedua (Primary -> Wasabi/R2 warm) dengan pengaturan dan filter serupa.
5. Simpan kedua job di Job Manager.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />

## Langkah 2: Menambahkan job Copy cold archive

1. Buat job **Copy** (S3 hot -> bucket archive Glacier). Gunakan Copy, bukan Sync, untuk menghindari penghapusan pada archive.
2. Di **Advanced Settings**, atur jumlah transfer dan perbandingan checksum sesuai kebutuhan.
3. Gunakan aturan lifecycle bucket untuk memindahkan objek ke Glacier Deep Archive dan mengakhiri versi lama setelah periode kepatuhan.

## Langkah 3: Menjadwalkan semuanya

- Di wizard Job (Langkah 4: Scheduling, Plus), atur interval: hot per jam, warm setiap malam, cold bulanan.
- Gunakan **Simulate** untuk melihat pratinjau jadwal dan atur jumlah percobaan ulang di Advanced Settings.
- Tambahkan Compare mingguan (hot vs warm) untuk menangkap penyimpangan sejak dini.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configure the job scheduler in RcloneView" class="img-large img-center" />

## Langkah 4: Memverifikasi integritas

- Jalankan Compare antara hot dan warm setelah sync penuh pertama.
- Untuk archive, lakukan pemeriksaan spot pada pemulihan: lakukan retrieval Glacier kecil dan pastikan file terbuka dengan benar.
- Simpan file canary kecil (misalnya, `canary.txt`) di setiap tier dan periksa keberadaannya di laporan Compare.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

## Langkah 5: Playbook pemulihan

- Pemulihan cepat: tarik dari warm (Wasabi/R2) atau hot (S3 Standard) tergantung egress/lokasi.
- Pemulihan mendalam: mulai restore Glacier untuk prefix yang dibutuhkan; lalu Copy kembali ke warm/hot.
- Gunakan Mount di RcloneView untuk menjelajah sebelum copy massal agar tidak memulihkan folder yang salah.

## Tips penyesuaian

- Sensitif terhadap latensi/egress: turunkan jumlah transfer selama jam kerja; naikkan di luar jam kerja.
- Biaya Glacier: kelompokkan archive secara bulanan; hindari unggahan kecil yang sering untuk mengurangi permintaan PUT dan retrieval.
- Keamanan: pasangkan hot/warm dengan Object Lock (lihat panduan immutable) untuk memblokir penghapusan oleh ransomware.
- Penamaan: beri awalan folder tanggal pada snapshot (misalnya, `archive/2025-11/`) untuk mempermudah lifecycle dan pemulihan.

## Daftar periksa pemecahan masalah

- Penundaan pemulihan: retrieval Glacier dapat memakan waktu berjam-jam—rencanakan RPO/RTO sesuai kebutuhan.
- AccessDenied pada archive: pastikan peran IAM mengizinkan `glacier:InitiateJob`/restore untuk bucket tersebut.
- Ditemukan drift: jalankan ulang Sync hot/warm; jika archive kehilangan objek, lakukan re-Copy delta dari hot.
- Biaya melonjak: aktifkan lifecycle expiration setelah masa retensi; batasi konkurensi selama jendela egress puncak.



Buat tingkatan sekali, jadwalkan selalu, dan jaga biaya serta RPO tetap terkendali dengan RcloneView.

<CloudSupportGrid />
