---
slug: cleanup-empty-trash-cloud-storage-rcloneview
title: "Bersihkan Penyimpanan Cloud: Kosongkan Sampah dan Hapus Versi Lama dengan RcloneView"
authors:
  - tayson
description: "Bebaskan ruang penyimpanan cloud dengan mengosongkan sampah, menghapus versi file lama, dan membersihkan data yatim di Google Drive, OneDrive, S3, dan lainnya menggunakan RcloneView."
keywords:
  - rclone cleanup cloud storage
  - empty google drive trash rclone
  - onedrive recycle bin cleanup
  - remove old versions s3
  - free cloud storage space
  - rcloneview cleanup feature
  - cloud storage versioning cleanup
  - rclone delete old versions
  - reclaim cloud quota
  - cloud storage trash management
tags:
  - feature
  - cleanup
  - tips
  - cost-optimization
  - file-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Bersihkan Penyimpanan Cloud: Kosongkan Sampah dan Hapus Versi Lama dengan RcloneView

> File yang dihapus dan versi lama diam-diam menghabiskan kuota cloud Anda. RcloneView memudahkan Anda membersihkannya dan mendapatkan kembali ruang penyimpanan yang sudah Anda bayar.

Setiap kali Anda menghapus file di Google Drive, file itu masuk ke sampah. Setiap kali OneDrive menimpa sebuah dokumen, versi lamanya tetap disimpan. Setiap kali bucket S3 dengan versioning aktif menerima pembaruan, objek sebelumnya tetap ada. Salinan tak terlihat ini menumpuk selama berbulan-bulan bahkan bertahun-tahun, menghabiskan kuota dan membengkakkan tagihan penyimpanan. Perintah `cleanup` milik rclone menghapus penumpukan tersembunyi ini, dan RcloneView memungkinkan Anda menjalankannya hanya dengan beberapa klik.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Bagaimana File yang Dibuang dan Diberi Versi Menghabiskan Kuota

Sebagian besar penyedia cloud menghitung file yang dibuang ke sampah dan file berversi sebagai bagian dari kuota penyimpanan Anda. Dampaknya sering kali lebih besar dari yang diperkirakan:

| Penyedia | Apa yang Dihitung ke Kuota | Kebijakan Penghapusan Otomatis |
|----------|--------------------------|-------------------|
| **Google Drive** | File di sampah, semua versi file | Sampah otomatis terhapus setelah 30 hari |
| **OneDrive** | Item di recycle bin, riwayat versi | Recycle bin otomatis terhapus setelah 93 hari |
| **Dropbox** | File yang dihapus dan versi sebelumnya | Disimpan selama 30 hari (Basic) atau 180 hari (Professional) |
| **Amazon S3** | Semua versi objek (jika versioning aktif) | Tidak ada penghapusan otomatis; memerlukan aturan lifecycle |
| **Backblaze B2** | Semua versi file | Tidak ada penghapusan otomatis tanpa aturan lifecycle |
| **Google Cloud Storage** | Versi objek yang bukan versi terkini | Dapat dikonfigurasi melalui kebijakan lifecycle |

Akun Google Drive yang kapasitasnya sudah 90% mungkin memiliki 5-10% penggunaannya hanya berada di sampah. Pada bucket S3 dengan versioning, versi lama dapat menggandakan atau melipattigakan konsumsi penyimpanan aktual seiring waktu.

## Menjalankan Cleanup per Penyedia

### Sampah Google Drive

Sampah Google Drive adalah sumber penggunaan tersembunyi yang paling umum. Untuk mengosongkannya:

```bash
rclone cleanup gdrive:
```

Ini akan menghapus secara permanen semua file di sampah Google Drive. Tidak ada undo -- pastikan Anda tidak membutuhkan apa pun di sampah sebelum menjalankan ini.

Di RcloneView, Anda dapat memicu cleanup dari UI tanpa membuka terminal. Buka remote Google Drive Anda dan gunakan aksi cleanup.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView showing Google Drive remote ready for cleanup" class="img-large img-center" />

### Recycle Bin OneDrive

OneDrive menyimpan file yang dihapus di recycle bin hingga 93 hari:

```bash
rclone cleanup onedrive:
```

Ini akan mengosongkan recycle bin. Untuk akun OneDrive Business dengan recycle bin besar, ini dapat membebaskan ruang signifikan secara langsung.

### Objek Berversi di S3

Bucket S3 dengan versioning aktif menumpuk versi objek lama. Cleanup pada rclone menghapus versi yang bukan versi terkini:

```bash
rclone cleanup s3-remote:my-bucket
```

Untuk bucket dengan ribuan objek berversi, operasi ini mungkin memakan waktu. Anda dapat menargetkan prefix tertentu untuk membersihkan secara selektif:

```bash
rclone cleanup s3-remote:my-bucket/logs/
```

### Dropbox dan Penyedia Lainnya

Dropbox tidak mendukung perintah cleanup secara langsung melalui rclone. Untuk Dropbox, kelola file yang dihapus dan versinya melalui antarmuka web atau API Dropbox. Penyedia lain seperti pCloud dan Backblaze B2 mendukung cleanup dengan cara serupa seperti contoh di atas.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView explorer showing storage before cleanup" class="img-large img-center" />

## Memeriksa Berapa Banyak Ruang yang Dikonsumsi Sampah

Sebelum menjalankan cleanup, periksa berapa banyak ruang yang bisa Anda dapatkan kembali:

```bash
rclone about gdrive:
```

Output-nya mencakup baris **Trashed** yang menunjukkan persis berapa banyak ruang yang digunakan oleh file yang dihapus:

```
Total:   15 GiB
Used:    12.3 GiB
Free:    2.7 GiB
Trashed: 3.8 GiB
```

Dalam contoh ini, mengosongkan sampah akan langsung membebaskan 3.8 GiB -- lebih dari dua kali lipat ruang yang tersedia.

## Menghapus Versi File Lama Secara Selektif

Beberapa alur kerja mengharuskan Anda mempertahankan versi terbaru sambil menghapus semua yang lebih lama. Rclone mendukung ini dengan perintah khusus backend:

Untuk S3 dengan versioning:

```bash
rclone backend cleanup-hidden s3-remote:my-bucket
```

Ini hanya menghapus versi tersembunyi (yang bukan versi terkini) sambil menjaga versi terkini dari setiap objek tetap utuh.

Untuk Google Drive, Anda dapat menggunakan `--drive-keep-revision-forever=false` dalam konfigurasi remote Anda untuk mencegah penyimpanan versi tanpa batas ke depannya.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Execute cleanup job in RcloneView" class="img-large img-center" />

## Mengotomatiskan Cleanup dengan Job Terjadwal

Cleanup manual memang bekerja, tetapi cleanup terjadwal mencegah masalah ini terulang kembali:

1. Di RcloneView, buat **Job** baru dengan perintah cleanup untuk setiap remote.
2. Buka **Job Scheduler** dan atur jadwal berulang -- bulanan sudah cukup untuk sebagian besar akun.
3. Tinjau **Job History** setelah setiap kali dijalankan untuk memastikan cleanup berhasil.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule automated cleanup job in RcloneView" class="img-large img-center" />

Jadwal cleanup bulanan memastikan sampah dan versi lama tidak pernah menumpuk cukup banyak sehingga menyebabkan masalah kuota atau tagihan yang membengkak.

## Pertimbangan Keamanan

- **Cleanup bersifat permanen** -- file yang dibuang ke sampah tidak dapat dipulihkan setelah menjalankan `rclone cleanup`.
- **Audit sampah terlebih dahulu** -- telusuri sampah penyedia Anda melalui antarmuka web mereka sebelum menghapusnya secara permanen.
- **Versioning S3 memiliki tujuan** -- jika Anda mengandalkan versi untuk rollback, jangan melakukan cleanup secara sembarangan. Pertimbangkan aturan lifecycle yang mempertahankan N versi terakhir sebagai gantinya.
- **Uji coba pada remote yang tidak kritis terlebih dahulu** -- pastikan perilakunya sesuai harapan Anda sebelum menjalankan cleanup pada data produksi.
- **Dry run tidak tersedia** untuk cleanup -- tidak seperti sync atau copy, tidak ada mode `--dry-run`. Lanjutkan dengan yakin hanya setelah meninjau apa yang ada di sampah Anda.

## Dampak terhadap Biaya

Untuk penyedia yang membayar sesuai penggunaan, cleanup secara langsung mengurangi tagihan Anda:

| Penyedia | Biaya Penyimpanan | 100 GB Versi Lama/Sampah |
|----------|-------------|------------------------------|
| Amazon S3 Standard | $0.023/GB/bln | Hemat $2.30/bulan |
| Backblaze B2 | $0.006/GB/bln | Hemat $0.60/bulan |
| Google Cloud Standard | $0.020/GB/bln | Hemat $2.00/bulan |
| Wasabi | $0.0069/GB/bln | Hemat $0.69/bulan |

Untuk penyedia berbasis kuota, cleanup menghindari batas yang dapat mengganggu sinkronisasi dan pencadangan.

---

**Panduan Terkait:**

- [Analisis Penggunaan dan Kuota Penyimpanan Cloud](https://rcloneview.com/support/blog/rclone-about-storage-usage-analysis-rcloneview)
- [Perbandingan Wasabi vs Backblaze B2 vs IDrive e2](https://rcloneview.com/support/blog/wasabi-vs-backblaze-b2-vs-idrive-e2-comparison-rcloneview)
- [Transfer dan Sinkronisasi Cloud-ke-Cloud](https://rcloneview.com/support/blog/effortless-cloud-to-cloud-transfers-syncing)

<CloudSupportGrid />
