---
slug: rcloneview-synology-rclone-gui
title: "Menggunakan rclone di Synology NAS dengan GUI: Tanpa SSH"
authors:
  - tayson
description: "Jalankan rclone untuk Synology NAS tanpa SSH atau CLI. Gunakan RcloneView untuk mengelola remote, membandingkan perubahan, mengenkripsi, dan mengotomatiskan pencadangan cloud dengan aman."
keywords:
  - synology rclone
  - rclone synology nas
  - rcloneview synology
  - synology cloud backup
  - rclone gui
  - no ssh backup
  - nas to cloud backup
  - rcloneview jobs
  - compare first backup
  - rcloneview crypt remote

tags:
  - sync
  - file-management
---

import RvCta from '@site/src/components/RvCta';

# Menggunakan rclone di Synology NAS dengan GUI: Tanpa SSH

> Pengguna Synology menginginkan kekuatan rclone tanpa risiko SSH atau CLI. RcloneView memberi Anda kontrol visual, pencadangan yang lebih aman, dan otomasi yang dapat diulang dalam satu ruang kerja.

Alat bawaan DSM adalah titik awal yang baik, tetapi banyak pengguna NAS akhirnya menemui batasan: dukungan cloud yang terbatas, kontrol yang lemah, serta tradeoff biaya atau keamanan yang tidak jelas. rclone adalah upgrade yang jelas, tetapi jalur tradisionalnya membutuhkan SSH dan keterampilan command-line. Panduan ini menunjukkan arsitektur berbasis GUI yang mempertahankan kekuatan rclone sambil menghilangkan beban CLI.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa pencarian "Synology rclone" begitu populer

Pengguna Synology NAS biasanya menginginkan tiga hal:

- Dukungan cloud yang lebih luas dibanding alat bawaan DSM
- Kontrol tingkat file untuk Copy, Sync, dan filter
- Kebebasan dari vendor lock-in dan format pencadangan yang tidak transparan

rclone memberikan semua itu, tetapi sebagian besar panduan mengasumsikan penggunaan SSH dan CLI. Maksud pencarian sebenarnya sederhana: *menggunakan rclone tanpa terminal*.

## rclone itu andal, tapi CLI saja menjadi penghalang

Pengaturan rclone NAS yang umum biasanya berarti:

- Mengaktifkan SSH
- Terhubung melalui terminal
- Mengedit atau mengelola `rclone.conf`
- Menjalankan perintah secara manual atau melalui cron

Bagi banyak pengguna NAS, hal itu menciptakan risiko nyata:

- Kesalahan ketik bisa menghapus data
- Tidak ada pratinjau visual sebelum Sync
- Log sulit ditelusuri setelah terjadi kegagalan

## Arsitektur yang lebih baik: NAS untuk penyimpanan, GUI untuk kontrol

Ide utamanya:

- NAS tetap menjadi **mesin data**
- RcloneView menjadi **pusat kendali**

Anda tetap menggunakan rclone di baliknya, tetapi mengelolanya melalui antarmuka visual yang aman.

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="Synology NAS detection and connection" class="img-large img-center" />

## Apa yang diubah RcloneView untuk alur kerja Synology

- Pengaturan remote tanpa SSH
- Compare visual sebelum transfer apa pun
- Riwayat job dan log dalam satu tempat
- Penjadwalan via GUI, bukan cron

RcloneView tidak menggantikan NAS Anda. RcloneView membuat NAS Anda siap-cloud tanpa hambatan CLI.

## Opsi pengaturan umum (tanpa alur kerja berpusat pada SSH)

### Opsi 1: NAS sebagai sumber, RcloneView sebagai pengendali

- Folder bersama NAS -> target cloud
- Semua Copy/Sync/Compare dikendalikan di RcloneView

### Opsi 2: Model hybrid

- NAS menyimpan data secara lokal
- RcloneView menangani Compare, enkripsi, dan penjadwalan

## Alur langkah demi langkah tanpa ketergantungan SSH

### Langkah 1: Identifikasi data NAS yang perlu dilindungi

- Lewati seluruh volume secara default
- Pilih folder bersama yang penting
- Pisahkan berdasarkan proyek atau pengguna

### Langkah 2: Tambahkan remote cloud di RcloneView

- Google Drive, OneDrive, S3, Wasabi, Backblaze
- Pengaturan berbasis OAuth atau kunci

<img src="/support/images/en/blog/new-remote.png" alt="New Remote screen" class="img-large img-center" />

### Langkah 3: Perlakukan folder NAS sebagai sumber

- Gunakan path NAS yang dipetakan atau di-mount
- Jaga agar izin baca/tulis tetap eksplisit

## Mengapa GUI penting untuk NAS + rclone

### Keamanan visual

- Copy vs Sync ditampilkan secara eksplisit
- Kesalahan arah lebih mudah terdeteksi

### Compare sebelum transfer

- Lihat delta yang tepat sebelum memindahkan data
- Filter noise NAS seperti file temp atau cache

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results filters" class="img-large img-center" />

### Risiko lebih rendah bagi non-ahli

- Tidak perlu mengingat sintaks CLI
- Lebih sedikit ruang untuk kesalahan yang merusak

## Menggunakan Compare dengan data NAS

Folder NAS sering berisi:

- `@eaDir`
- cache sementara
- file hasil generate package

Compare membantu Anda mengidentifikasi perubahan nyata dan menghindari upload yang tidak perlu. Compare juga memberi visibilitas biaya sebelum setiap proses pencadangan dijalankan.

<img src="/support/images/en/tutorials/wasabi-and-local-compare-and-copy.png" alt="Compare and copy only changes" class="img-large img-center" />

## Copy vs Sync untuk pencadangan NAS

### Copy (default yang direkomendasikan)

- Tidak ada penghapusan di tujuan
- Paling aman untuk pencadangan
- Mudah untuk di-rollback

### Sync (hanya untuk penggunaan lanjutan)

- Hanya untuk mirror yang terkendali
- Selalu jalankan Dry Run terlebih dahulu

<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run.png" alt="Sync dry run" class="img-large img-center" />

## Enkripsi data NAS sebelum upload (Crypt Remote)

Enkripsi NAS tidak melindungi data setelah data tersebut meninggalkan NAS. Crypt Remote memberi Anda enkripsi sisi klien sebelum upload.

- Enkripsi konten file dan nama file (opsional)
- Penyimpanan zero-knowledge di cloud

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/new-remote-add-crypt.png" alt="Add Crypt remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/virtual-add-select-remote-and-folder.png" alt="Select Crypt target folder" class="img-large img-center" />
</div>

## Penjadwalan dan otomasi tanpa cron

Simpan Copy atau Sync sebagai Job, lalu jadwalkan secara visual.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/save-sync-to-jobs.png" alt="Save sync to Jobs" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-scheduling.png" alt="Add job scheduling" class="img-large img-center" />
</div>

Ini memberi Anda:

- Riwayat job dan visibilitas kegagalan
- Konfigurasi yang dapat diulang
- Serah terima yang lebih mudah antar tim

## Skenario pencadangan NAS di dunia nyata

### NAS rumahan -> Google Drive

- Foto dan dokumen
- Pemulihan file tunggal yang cepat

### NAS kantor kecil -> S3 atau Wasabi

- Biaya dan penyimpanan jangka panjang yang dapat diprediksi
- Job Copy yang terkendali

### Power user atau admin IT

- NAS -> target multi-cloud
- Job terpisah per departemen atau proyek

## Pertimbangan keamanan dan keselamatan

- Gunakan mount read-only jika memungkinkan
- Pisahkan job backup dari job sync
- Uji pemulihan dengan membuka file langsung di cloud

## Mitos umum

**"CLI selalu lebih baik"**
Andal, tetapi berisiko pada data NAS produksi.

**"GUI hanya untuk pemula"**
GUI meningkatkan keamanan operasional dan auditabilitas.

## Kesimpulan: rclone itu andal, kontrol adalah segalanya

Pengguna Synology memilih rclone karena fleksibilitasnya. RcloneView mempertahankan kekuatan itu sambil menghilangkan hambatan SSH dan CLI. Anda mendapatkan alur kerja yang lebih aman, visibilitas yang lebih baik, dan pencadangan yang dapat Anda percaya.

Jika Anda ingin menggunakan rclone di Synology tanpa terminal, ini adalah jalur paling sederhana.
