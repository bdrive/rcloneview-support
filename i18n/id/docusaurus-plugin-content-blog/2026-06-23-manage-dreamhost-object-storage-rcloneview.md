---
slug: manage-dreamhost-object-storage-rcloneview
title: "Kelola DreamHost DreamObjects — Sinkronisasi dan Pencadangan File dengan RcloneView"
authors:
  - robin
description: "Hubungkan DreamHost DreamObjects ke RcloneView untuk manajemen bucket S3-compatible secara visual, sinkronisasi file, dan pencadangan otomatis tanpa menulis satu pun perintah CLI."
keywords:
  - DreamHost DreamObjects
  - DreamObjects S3 storage
  - DreamHost cloud backup
  - S3 compatible storage management
  - sync files to DreamObjects
  - DreamHost object storage RcloneView
  - cloud backup web developers
  - S3 cloud storage GUI
  - DreamHost file sync
tags:
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola DreamHost DreamObjects — Sinkronisasi dan Pencadangan File dengan RcloneView

> DreamHost DreamObjects adalah object store S3-compatible yang hemat biaya—RcloneView memberi Anda cara visual untuk menelusuri bucket, menyinkronkan file, dan menjadwalkan pencadangan tanpa menyentuh command line.

DreamHost DreamObjects berpadu secara alami dengan situs web yang di-hosting di DreamHost: layanan ini menyimpan pencadangan, aset media, dan file statis pada perangkat keras redundan di balik API yang kompatibel dengan S3. Tim yang sudah melakukan hosting di DreamHost dapat memperluas investasi tersebut menjadi pencadangan cloud yang terstruktur dengan menghubungkan DreamObjects ke RcloneView dan mengelola semuanya dari file explorer dua panel. Hubungkan S3, Azure, atau Backblaze B2 dengan akses baca/tulis penuh pada lisensi FREE, dan DreamObjects tidak terkecuali.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa DreamObjects Layak Mendapatkan Alur Kerja Khusus

Agensi web yang mengelola puluhan proyek klien mengumpulkan gigabita media yang diunggah, ekspor database, dan artefak build yang memerlukan salinan offsite secara berkala. DreamObjects menyediakan target offsite tersebut tanpa memerlukan akun cloud terpisah dari penyedia yang tidak tahu apa-apa tentang hosting. Menyimpan ekspor malam hari ke DreamObjects berdampingan dengan situs live berarti bahwa ketika terjadi migrasi atau penghapusan yang tidak disengaja, pemulihan hanya soal mengambil data dari relasi penyedia yang sama, bukan berpindah-pindah antar vendor.

Karena DreamObjects kompatibel dengan S3, RcloneView terhubung ke layanan ini menggunakan tipe remote S3 yang sama seperti yang digunakan untuk Amazon S3, Cloudflare R2, Wasabi, dan puluhan object store lainnya. Jika Anda pernah mengonfigurasi remote bergaya S3 sebelumnya, alur pengaturan DreamObjects akan langsung terasa familier.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new DreamHost DreamObjects S3 remote in RcloneView using Access Key and endpoint credentials" class="img-large img-center" />

## Menghubungkan DreamObjects ke RcloneView

Buka RcloneView dan masuk ke tab **Remote**, lalu klik **New Remote**. Pilih tipe remote **S3** dan masukkan Access Key ID, Secret Access Key, serta URL endpoint bucket DreamObjects Anda dari panel DreamHost. Setelah disimpan, remote baru akan muncul di Remote Manager dan langsung tersedia sebagai panel di Explorer.

Menelusuri DreamObjects dari Explorer terasa seperti menavigasi drive lokal: nama file, ukuran, dan tanggal modifikasi semuanya terlihat. Anda dapat membuat folder, mengunggah file dengan menyeretnya dari panel lokal, menghapus objek dengan klik kanan, dan membuat tautan publik untuk objek yang perlu dibagikan. Tidak perlu masuk ke panel web DreamHost setiap kali Anda perlu memeriksa atau memindahkan file.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files from a local folder into a DreamObjects bucket using RcloneView drag-and-drop upload" class="img-large img-center" />

## Sinkronisasi dan Pencadangan ke DreamObjects

Untuk pencadangan berkala, buat job Sync dari wizard tab **Home**. Pilih folder proyek lokal atau remote cloud lain sebagai sumber, dan path bucket DreamObjects Anda sebagai tujuan. Sebelum menjalankannya, aktifkan **Dry Run** untuk melihat pratinjau setiap file yang akan ditransfer—sangat berguna saat menyinkronkan pustaka media besar untuk pertama kalinya, karena pratinjau ini menangkap file berukuran terlalu besar atau masalah penamaan tanpa memindahkan data apa pun.

Setelah yakin, simpan job ke Job Manager dan jalankan sesuai kebutuhan. Pengguna lisensi PLUS dapat melampirkan jadwal bergaya cron sehingga pencadangan DreamObjects berjalan otomatis setiap malam. Tab **Job History** mencatat setiap eksekusi lengkap dengan jumlah file, kecepatan transfer, ukuran total, dan status akhir, sehingga menyediakan jejak audit yang berguna untuk pelaporan klien atau tinjauan kepatuhan.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to a DreamHost DreamObjects bucket from the RcloneView Job Manager" class="img-large img-center" />

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history tab in RcloneView showing completed DreamObjects backup transfer records" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka **Remote** > **New Remote**, pilih **S3**, dan masukkan Access Key, Secret Key, serta endpoint DreamObjects Anda dari panel DreamHost.
3. Buka remote baru di panel Explorer dan seret file ke dalamnya untuk mengunggah langsung.
4. Buat job Sync di tab **Home**, jalankan Dry Run terlebih dahulu, lalu eksekusi dan tinjau hasilnya di **Job History**.

Pencadangan DreamObjects yang konsisten melindungi proyek web dari penghapusan yang tidak disengaja, migrasi hosting, dan kejadian kehilangan data—tanpa memerlukan keahlian CLI atau pengaturan pemantauan terpisah.

---

**Panduan Terkait:**

- [Kelola Cloudflare R2 Cloud Sync dengan RcloneView](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Kelola Amazon S3 — Sinkronisasi Cloud & Pencadangan dengan RcloneView](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [Kelola Wasabi Cloud Sync & Pencadangan dengan RcloneView](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
