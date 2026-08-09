---
slug: manage-rackcorp-cloud-sync-backup-rcloneview
title: "Kelola Object Storage RackCorp — Sinkronkan dan Cadangkan File dengan RcloneView"
authors:
  - morgan
description: "Hubungkan object storage RackCorp ke RcloneView untuk sinkronisasi lintas platform, pencadangan, dan mount berdampingan dengan 90+ penyedia cloud lainnya."
keywords:
  - penyimpanan RackCorp
  - pencadangan cloud RackCorp
  - RackCorp RcloneView
  - GUI object storage kompatibel S3
  - sinkronisasi penyimpanan RackCorp
  - cadangkan RackCorp
  - mount object storage sebagai drive lokal
  - pengelola file multi-cloud
  - alat sinkronisasi penyimpanan cloud
  - perangkat lunak pencadangan object storage
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Object Storage RackCorp — Sinkronkan dan Cadangkan File dengan RcloneView

> Bawa object storage RackCorp yang kompatibel dengan S3 ke dalam jendela yang sama dengan cloud lain, drive lokal, dan folder bersama NAS Anda.

Tim yang sudah menjalankan infrastruktur di RackCorp sering kali harus menggunakan klien S3 terpisah hanya untuk memindahkan file masuk dan keluar dari sebuah bucket. RcloneView menghilangkan langkah ekstra ini dengan memperlakukan RackCorp seperti remote lainnya — jelajahi, sinkronkan, mount, dan cadangkan berdampingan dengan Google Drive, S3, atau disk lokal dalam explorer yang sama. Berbeda dengan alat yang hanya bisa mount, RcloneView juga menyediakan sinkronisasi dan perbandingan folder (Folder Compare) — pada lisensi FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menambahkan RackCorp sebagai Remote

RackCorp diakses melalui protokol S3 milik rclone, sehingga pengaturannya mengikuti pola input kredensial yang sama seperti layanan kompatibel S3 lainnya: Access Key ID, Secret Access Key, dan endpoint regional yang tepat. Buka tab Remote > New Remote, pilih opsi kompatibel S3, lalu tempelkan kredensial dari akun RackCorp Anda.

Setelah disimpan, RackCorp akan muncul sebagai tab tersendiri di panel Explorer, tepat di samping remote lain yang telah Anda konfigurasi. Tidak perlu menghafal jalur bucket — folder tree dan breadcrumb bar memungkinkan navigasi secara visual, dan klik kanan > Copy Full Path memberikan string berformat `remote:bucket/path` jika Anda membutuhkannya di terminal rclone bawaan.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan remote baru yang kompatibel dengan S3 di RcloneView" class="img-large img-center" />

## Sinkronisasi dan Pencadangan ke RackCorp

Setelah remote terhubung, gunakan wizard Sync untuk membangun tugas pencadangan yang dapat diulang. Langkah 1 menetapkan sumber lokal atau cloud Anda dan folder tujuan RackCorp; Langkah 2 memungkinkan Anda menyesuaikan jumlah transfer file bersamaan dan jumlah transfer multi-thread untuk kumpulan data besar; Langkah 3 menerapkan filter berdasarkan jenis file, ukuran, atau usia sehingga file sementara dan cache tidak ikut terkirim ke bucket.

Jalankan Dry Run terlebih dahulu untuk melihat pratinjau file mana saja yang akan disalin atau dihapus sebelum melakukan transfer sesungguhnya — ini menangkap kesalahan pemetaan folder sebelum menyentuh data produksi. Untuk tugas yang berulang, simpan pekerjaan tersebut di Job Manager agar nantinya muncul di Job History lengkap dengan log transfer.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Mengonfigurasi tugas pencadangan terjadwal ke penyimpanan RackCorp" class="img-large img-center" />

## Mount RackCorp sebagai Drive Lokal

Jika Anda lebih suka bekerja dengan objek RackCorp seperti file biasa, mount bucket tersebut sebagai drive virtual. Pilih folder remote di Explorer, klik ikon Mount di toolbar panel, lalu pilih mode cache VFS — mode Writes adalah pilihan default yang solid, karena menyimpan perubahan secara lokal terlebih dahulu sebelum mengunggahnya.

Bucket yang sudah di-mount akan muncul di Mount Manager, tempat Anda dapat melakukan unmount, membukanya kembali di file browser native, atau mengubah status mount langsung dari system tray tanpa perlu membawa jendela utama ke depan.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount bucket RackCorp sebagai drive lokal dari Remote Explorer" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buat Access Key ID dan Secret Access Key dari akun RackCorp Anda.
3. Tambahkan RackCorp sebagai remote kompatibel S3 baru menggunakan tab Remote > New Remote.
4. Buat tugas sinkronisasi atau mount bucket secara langsung, sesuai alur kerja Anda.

Setelah RackCorp terhubung ke RcloneView, ia tidak lagi menjadi alat terpisah yang mengharuskan Anda berpindah konteks, melainkan menjadi tujuan lain dalam rutinitas pencadangan reguler Anda.

---

**Panduan Terkait:**

- [Kelola Object Storage Linode — Sinkronkan dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-linode-object-storage-cloud-sync-backup-rcloneview)
- [Kelola Object Storage Hetzner — Sinkronkan dan Cadangkan dengan RcloneView](https://rcloneview.com/support/blog/manage-hetzner-object-storage-cloud-sync-rcloneview)
- [Migrasikan Amazon S3 ke Cloudflare R2 dengan RcloneView](https://rcloneview.com/support/blog/migrate-amazon-s3-to-cloudflare-r2-rcloneview)

<CloudSupportGrid />
