---
slug: filter-rules-selective-sync-rcloneview
title: "Filter Rules RcloneView: Kecualikan Folder dan Jenis File untuk Sinkronisasi yang Lebih Cepat dan Bersih"
authors:
  - tayson
description: "Bangun alur kerja sinkronisasi selektif dengan filter rules RcloneView untuk melewati noise, mengurangi lalu lintas cloud, dan menjaga pencadangan tetap bersih. Berbasis GUI, tanpa flag CLI."
keywords:
  - rclone filter rules
  - rclone exclude
  - rclone include
  - rcloneview filters
  - selective sync
  - cloud sync optimization
  - reduce sync time
  - file sync filters
  - rcloneview workflow
  - cloud backup efficiency
tags:
  - RcloneView
  - cloud-storage
  - sync
  - file-management
  - backup
---

import RvCta from '@site/src/components/RvCta';

# Filter Rules RcloneView: Kecualikan Folder dan Jenis File untuk Sinkronisasi yang Lebih Cepat dan Bersih

> Sinkronisasi tercepat adalah yang mengabaikan noise. Filter rules RcloneView membantu Anda melewati folder cache, file temporary, dan build artifact sehingga setiap transfer dilakukan dengan sengaja.

Sinkronisasi selektif adalah salah satu topik rclone yang paling banyak dicari karena secara langsung menghemat waktu, bandwidth, dan biaya cloud. Kebanyakan panduan hanya mencantumkan flag CLI lalu berhenti di situ. Postingan ini menunjukkan cara membangun **alur kerja berbasis filter** di RcloneView dengan UI visual yang membuat hasilnya dapat diprediksi.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa filter rules semakin penting

Biaya dan keterlambatan sinkronisasi cloud berasal dari proses scan dan transfer file yang sebenarnya tidak Anda perlukan:

- Folder cache (`.cache`, `node_modules`, `.gradle`)
- File temporary atau preview (`*.tmp`, `*_preview.*`)
- Build artifact yang dibuat otomatis
- Pengecekan metadata berulang pada file yang tidak berubah

Filter memangkas noise dan membuat setiap job Sync atau Copy menjadi lebih kecil, lebih cepat, dan lebih aman.

## Apa yang dilakukan filter rules di RcloneView

Filter menentukan **apa yang disertakan dan dikecualikan sebelum transfer dilakukan**. Di RcloneView, Anda menerapkannya melalui UI Sync/Job, sehingga Anda tidak perlu menghafal sintaks CLI.

Gunakan filter rules untuk:

- Mengecualikan seluruh folder
- Menyertakan hanya path proyek tertentu
- Melewati jenis file yang tidak pernah ingin Anda cadangkan
- Melindungi data yang sensitif atau tidak relevan

## Tempat mengonfigurasi filter di GUI

Anda dapat menambahkan filter saat menjalankan Sync atau membuat Job:

<img src="/support/images/en/howto/rcloneview-basic/sync-filtering-settings.png" alt="Sync filtering settings" class="img-large img-center" />

Tambahkan rule kustom dalam hitungan detik:

<img src="/support/images/en/howto/rcloneview-basic/add-custom-filter-rule.png" alt="Add custom filter rule" class="img-large img-center" />

Edit dan sempurnakan rule sesuai kebutuhan:

<img src="/support/images/en/howto/rcloneview-basic/addjust-custom-filter-rule.png" alt="Adjust custom filter rule" class="img-large img-center" />

## Filter rules praktis (contoh siap pakai)

### Mengecualikan noise umum

- `**/node_modules/**`
- `**/.cache/**`
- `**/*.tmp`
- `**/*.log`

### Hanya sinkronkan folder kerja Anda

- Include: `**/Projects/**`
- Exclude: `**/Downloads/**`

### Rule proyek media

- Include: `**/*.mp4`, `**/*.mov`, `**/*.wav`
- Exclude: `**/*_proxy.*`, `**/*_preview.*`

### Alur kerja desain/kreatif

- Include: `**/*.psd`, `**/*.ai`, `**/*.blend`
- Exclude: `**/renders/**`, `**/cache/**`

## Bandingkan dulu, baru filter, lalu Sync

Filter paling aman ketika Anda memvalidasinya secara visual:

1. Jalankan **Compare** untuk melihat apa yang akan berubah.
2. Sesuaikan filter jika ada sesuatu yang penting menghilang.
3. Sync dengan percaya diri.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results filters" class="img-large img-center" />

Panduan: [/support/howto/rcloneview-basic/compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents)

## Alur kerja berbasis filter (aman by design)

### Langkah 1: Konfirmasi sumber dan tujuan

Gunakan langkah Configure Storage untuk memvalidasi path sebelum melakukan filtering.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/sync-configure-storage.png" alt="Sync configure storage" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/sync-advanced-settings.png" alt="Sync advanced settings" class="img-large img-center" />
</div>

### Langkah 2: Terapkan filter

Tambahkan exclude dan include berdasarkan alur kerja Anda.

<img src="/support/images/en/howto/rcloneview-basic/sync-filtering-settings.png" alt="Sync filtering settings" class="img-large img-center" />

### Langkah 3: Dry run untuk verifikasi

Jalankan Dry Run agar Anda bisa memastikan hasil set yang telah difilter sebelum memindahkan data.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run.png" alt="Sync dry run" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run-details.png" alt="Sync dry run details" class="img-large img-center" />
</div>

## Simpan alur kerja yang difilter sebagai Job

Setelah filter sudah benar, simpan Sync tersebut sebagai Job:

- Perilaku yang konsisten di setiap run
- Mengurangi human error
- Penjadwalan yang mudah untuk pencadangan otomatis

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/save-sync-to-jobs.png" alt="Save sync to Jobs" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-scheduling.png" alt="Add job scheduling" class="img-large img-center" />
</div>

Panduan: [/support/howto/rcloneview-basic/create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs)

## Menjadwalkan sinkronisasi yang difilter

Gunakan Job Scheduling untuk mengotomatisasi pencadangan selektif:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Create job schedule" class="img-large img-center" />

Panduan: [/support/howto/rcloneview-advanced/job-scheduling-and-execution](/howto/rcloneview-advanced/job-scheduling-and-execution)

## Manfaat nyata dari filter rules

- **Sinkronisasi lebih cepat**: lebih sedikit file yang di-scan dan ditransfer
- **Biaya lebih rendah**: lalu lintas API lebih sedikit dan lebih sedikit upload berulang
- **Pencadangan lebih bersih**: hanya file yang bermakna yang dipertahankan
- **Operasi lebih stabil**: log job lebih kecil dan troubleshooting lebih mudah

## Kesalahan umum yang harus dihindari

- Terlalu banyak memfilter folder penting (uji dengan Compare terlebih dahulu)
- Mencampur include/exclude tanpa urutan yang jelas
- Melewati Dry Run pada migrasi berskala besar
- Berasumsi filter berlaku retroaktif pada data lama

## Ringkasan praktik terbaik

- Jadikan filter sebagai bagian dari setiap job Sync atau Copy.  
- Gunakan Compare untuk memvalidasi apa yang akan dihapus oleh filter.  
- Mulai dengan folder uji yang kecil sebelum menerapkan filter ke seluruh dataset.  
- Simpan job yang telah difilter untuk keterulangan dan kemudahan audit.  

## Kesimpulan

Sinkronisasi selektif adalah cara tercepat untuk membuat operasi cloud lebih cepat dan lebih murah. RcloneView mengubah filter rules rclone yang rumit menjadi alur kerja visual yang dapat Anda pahami, uji, dan otomatisasi. Mulailah dengan mengecualikan satu folder yang berisik, dan lihat waktu sinkronisasi Anda menurun pada run berikutnya.
