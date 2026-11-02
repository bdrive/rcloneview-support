---
slug: fix-backblaze-b2-sync-errors-rcloneview
title: "Memperbaiki Error Sinkronisasi Backblaze B2 — Diagnosis dan Solusi dengan RcloneView"
authors:
  - alex
description: "Atasi error sinkronisasi Backblaze B2 dengan RcloneView: periksa cakupan Application Key, baca log, atur transfer dan percobaan ulang, lalu verifikasi hasilnya dengan Folder Compare."
keywords:
  - memperbaiki error sinkronisasi Backblaze B2
  - Backblaze B2 401 unauthorized
  - izin application key B2
  - sinkronisasi B2 gagal
  - pemecahan masalah rclone B2
  - RcloneView Backblaze B2
  - error upload B2
  - pemecahan masalah sinkronisasi cloud
tags:
  - RcloneView
  - troubleshooting
  - tips
  - backblaze-b2
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Memperbaiki Error Sinkronisasi Backblaze B2 — Diagnosis dan Solusi dengan RcloneView

> Sebagian besar kegagalan sinkronisasi B2 berasal dari beberapa penyebab: cakupan key, percobaan ulang, atau log yang belum Anda periksa.

Sinkronisasi Backblaze B2 yang macet atau melaporkan error biasanya dapat diperbaiki dalam hitungan menit setelah Anda melihat apa yang sebenarnya dilaporkan rclone. RcloneView menampilkan status job, log, dan terminal bawaan dalam satu jendela sehingga Anda bisa mendiagnosis tanpa menebak-nebak. Hubungkan S3, Azure, atau Backblaze B2 dengan akses baca/tulis penuh pada lisensi FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Periksa Application Key Terlebih Dahulu

Remote B2 diautentikasi dengan Application Key ID dan Application Key. Jika job langsung gagal dengan error otorisasi, penyebab yang umum adalah key yang dibatasi ke bucket lain, key tanpa izin tulis, atau kesalahan salin-tempel di mana key ID dan key tertukar atau ada spasi di akhir.

Buka Remote Manager, edit remote B2, lalu masukkan ulang kedua nilai tersebut. Jika Anda membuat key baru di halaman manajemen key Backblaze, ingat bahwa Application Key lengkap hanya ditampilkan sekali saat pembuatan. Kemudian jelajahi bucket di Explorer: jika daftar file tampil tetapi upload gagal, kemungkinan key tidak memiliki izin tulis.

<img src="/support/images/en/blog/new-remote.png" alt="Mengedit remote Backblaze B2 di RcloneView" class="img-large img-center" />

## Baca Job History dan Log

Buka Job History untuk melihat status setiap eksekusi (Completed, Errored, atau Canceled), durasi, jumlah file, dan kecepatan. Eksekusi yang hanya error pada sebagian file menunjukkan masalah per file; eksekusi yang gagal sejak awal menunjukkan masalah kredensial atau konektivitas.

Untuk detail lebih lanjut, aktifkan logging rclone di Settings > Embedded Rclone, atur level log ke DEBUG, mulai ulang embedded rclone, lalu ulangi masalahnya. Tab Log dan file log kemudian menampilkan entri berstempel waktu yang dapat Anda cari untuk menemukan file atau pesan yang gagal.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History menampilkan eksekusi yang error dan selesai di RcloneView" class="img-large img-center" />

## Atur Transfer dan Percobaan Ulang

Error pada eksekusi besar sering disebabkan oleh konkurensi yang terlalu tinggi. Di Advanced Settings job, kurangi jumlah transfer file dan equality checker (disarankan 4 checker atau kurang untuk backend yang lambat). Biarkan "Retry entire sync if fails" pada nilai default 3 agar gangguan jaringan sesaat pulih dengan sendirinya. Bagi fotografer yang menyinkronkan ribuan file RAW semalaman, menurunkan konkurensi adalah penyesuaian pertama yang masuk akal saat error muncul.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Memantau transfer secara langsung di tab Transferring RcloneView" class="img-large img-center" />

## Verifikasi dan Jalankan Ulang dengan Aman

Setelah perubahan, jalankan Dry Run untuk melihat pratinjau apa yang akan disalin atau dihapus. Lalu jalankan job dan gunakan Folder Compare antara folder lokal dan bucket B2: file left-only adalah yang masih perlu diunggah, dan file different menunjukkan ketidakcocokan ukuran. Gunakan Copy right untuk menutup kekurangan, lalu bandingkan ulang hingga hasilnya bersih.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare mengonfirmasi sinkronisasi B2 di RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Masukkan ulang B2 Application Key ID dan Key Anda di Remote Manager.
3. Aktifkan logging DEBUG dan jalankan ulang job yang gagal.
4. Kurangi konkurensi, jalankan Dry Run, lalu verifikasi dengan Folder Compare.

Pemeriksaan yang metodis terhadap key, log, dan pengaturan mengubah sebagian besar error B2 menjadi perbaikan cepat.

---

**Panduan Terkait:**

- [Mengelola Backblaze B2 dengan RcloneView](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Memperbaiki Error Sinkronisasi Wasabi](https://rcloneview.com/support/blog/fix-wasabi-sync-errors-rcloneview)
- [Dry Run: Pratinjau Sinkronisasi Sebelum Transfer](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
