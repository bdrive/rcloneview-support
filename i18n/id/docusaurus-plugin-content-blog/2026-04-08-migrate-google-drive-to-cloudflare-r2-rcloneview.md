---
slug: migrate-google-drive-to-cloudflare-r2-rcloneview
title: "Migrasi Google Drive ke Cloudflare R2 dengan RcloneView"
authors:
  - tayson
description: "Migrasikan file Google Drive ke Cloudflare R2 dengan RcloneView. Panduan langkah demi langkah yang mencakup pengaturan, konversi Google Docs, verifikasi, dan manfaat zero egress."
keywords:
  - rcloneview
  - google drive to cloudflare r2
  - migrate google drive
  - google drive migration tool
  - cloudflare r2 migration
  - cloud to cloud migration
  - google docs export
  - zero egress migration
  - google drive backup r2
  - cloud storage migration gui
tags:
  - RcloneView
  - google-drive
  - cloudflare-r2
  - migration
  - cloud-migration
  - cloud-to-cloud
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Migrasi Google Drive ke Cloudflare R2 dengan RcloneView

> Berpindah dari Google Drive ke Cloudflare R2 menghilangkan biaya egress dan memberi Anda akses yang kompatibel dengan S3 ke data Anda — **RcloneView** menangani seluruh proses migrasi secara visual.

Google Drive adalah platform kolaborasi yang andal, tetapi seiring bertambahnya kebutuhan penyimpanan dan berubahnya pola akses data, banyak tim beralih ke object storage karena skalabilitas dan fleksibilitas API-nya. Cloudflare R2 menawarkan penyimpanan yang kompatibel dengan S3 tanpa biaya egress, menjadikannya tujuan yang menarik untuk data yang perlu diakses secara programatis. RcloneView menjembatani kesenjangan antara dua model penyimpanan yang sangat berbeda ini, menangani konversi format Google Docs, transfer file besar, dan verifikasi pasca-migrasi dalam satu GUI.

Panduan ini membahas proses migrasi secara lengkap — mulai dari mengonfigurasi kedua remote hingga memverifikasi bahwa setiap file tiba dengan utuh.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Migrasi dari Google Drive ke Cloudflare R2

Harga Google Drive dimulai dari $1,99/bulan untuk 100 GB, dan meningkat hingga tingkatan enterprise di bawah Google Workspace. Meskipun terjangkau untuk kolaborasi, Google Drive tidak dirancang untuk akses data secara programatis. Batasan rate limit API, kurangnya kompatibilitas S3, dan kuota penyimpanan per pengguna membuatnya kurang cocok untuk menyajikan aset statis, meng-hosting dataset, atau memberi masukan ke pipeline CI/CD.

Cloudflare R2 mengatasi keterbatasan ini. Dengan harga $0,015/GB/bulan dan tanpa biaya egress, R2 jauh lebih murah untuk beban kerja yang banyak melakukan pembacaan (read-heavy). API-nya yang kompatibel dengan S3 berarti alat dan SDK yang sudah ada dapat bekerja tanpa modifikasi. Jika data Anda dimulai di Google Drive tetapi kini perlu diakses melalui endpoint S3, migrasi ke R2 adalah langkah yang logis.

## Menyiapkan Google Drive di RcloneView

Buka Remote Manager dan tambahkan remote Google Drive. RcloneView menggunakan OAuth 2.0 — klik authorize, masuk ke akun Google Anda, dan berikan akses. Token disimpan secara lokal di konfigurasi rclone Anda.

Jika Anda melakukan migrasi dari akun Google Workspace dengan Shared Drives, Anda dapat mengonfigurasi RcloneView untuk mengakses Shared Drives tertentu, bukan hanya My Drive pribadi Anda. Hal ini penting untuk migrasi organisasi di mana data tersebar di berbagai team drive.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive remote in RcloneView" class="img-large img-center" />

## Menyiapkan Cloudflare R2 di RcloneView

Tambahkan R2 sebagai remote yang kompatibel dengan S3. Di Remote Manager, pilih **Amazon S3 Compatible** dan konfigurasikan:

- **Provider**: Cloudflare
- **Access Key ID** dan **Secret Access Key**: Dihasilkan dari dashboard Cloudflare
- **Endpoint**: `https://<account-id>.r2.cloudflarestorage.com`

Buat bucket tujuan di dashboard Cloudflare atau melalui explorer RcloneView sebelum memulai migrasi. Pilih nama bucket yang mencerminkan sumber data — misalnya, `gdrive-archive-2026` — agar mudah diidentifikasi nantinya.

## Menangani Konversi Format Google Docs

Ini adalah pertimbangan paling penting saat melakukan migrasi dari Google Drive. Format native Google — Docs, Sheets, Slides, Drawings — bukanlah file dalam pengertian tradisional. File-file ini hanya ada dalam ekosistem Google dan memiliki ukuran nol byte di disk.

Saat RcloneView mengekspor file-file ini, file tersebut dikonversi ke format standar:

- **Google Docs** menjadi `.docx` (Microsoft Word)
- **Google Sheets** menjadi `.xlsx` (Microsoft Excel)
- **Google Slides** menjadi `.pptx` (Microsoft PowerPoint)

Anda dapat mengonfigurasi format ekspor di pengaturan remote. Jika tim Anda lebih menyukai format PDF atau OpenDocument, sesuaikan sebelum memulai migrasi. Perlu diperhatikan bahwa file yang diekspor akan kehilangan fitur khusus Google seperti komentar, mode saran (suggestion mode), dan tautan kolaborasi real-time.

Untuk file yang sudah dalam format standar (PDF, gambar, ZIP yang diunggah), transfer dilakukan sebagai salinan byte-demi-byte yang sederhana tanpa perlu konversi.

## Menjalankan Migrasi

Setelah kedua remote dikonfigurasi, buka explorer dua panel. Tempatkan Google Drive di sebelah kiri dan bucket R2 Anda di sebelah kanan. Anda dapat melakukan migrasi seluruh drive atau memilih folder tertentu.

Untuk migrasi penuh, gunakan job sinkronisasi. RcloneView akan mendaftar semua file di Google Drive, mengekspor format native Google, dan mentransfer semuanya ke R2. Dashboard pemantauan real-time menampilkan progres per file, kecepatan transfer, dan estimasi waktu penyelesaian.

Untuk migrasi berskala besar (ratusan gigabyte atau lebih), pertimbangkan optimasi berikut:

- **Tingkatkan transfer paralel**: R2 menangani konkurensi tinggi dengan baik. Tingkatkan jumlah transfer paralel menjadi 8-16 untuk memaksimalkan throughput.
- **Gunakan penjadwalan bandwidth**: Jika migrasi dilakukan pada jam kerja, batasi bandwidth agar tidak mengganggu pengguna jaringan lainnya.
- **Jalankan secara bertahap**: Migrasikan folder demi folder, bukan sekaligus semuanya. Hal ini memudahkan verifikasi setiap batch dan melanjutkan proses jika terganggu.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Google Drive to R2 migration progress in RcloneView" class="img-large img-center" />

## Memverifikasi Migrasi dengan Compare

Setelah migrasi selesai, jalankan operasi compare RcloneView antara Google Drive dan R2. Tampilan compare menyoroti:

- **File hanya di sumber**: Item yang gagal ditransfer atau dilewati
- **File hanya di tujuan**: File ekstra yang tidak terduga (jarang terjadi, tetapi perlu diperiksa)
- **File yang berbeda**: Ketidaksesuaian ukuran atau hash yang menunjukkan transfer yang tidak lengkap

Perlu diperhatikan bahwa file Google Docs akan selalu ditampilkan sebagai berbeda karena format yang diekspor berbeda dari format native Google yang berukuran nol byte. Fokuslah pada file non-native untuk perbandingan yang bermakna. Jika ada file standar yang menunjukkan ketidaksesuaian, jalankan ulang sinkronisasi untuk mentransfer hanya item yang hilang atau berubah.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying Google Drive to R2 migration with compare in RcloneView" class="img-large img-center" />

## Pasca-Migrasi: Sinkronisasi Inkremental

Setelah migrasi awal, Anda mungkin ingin menjaga R2 tetap sinkron dengan Google Drive selama periode transisi. Siapkan job sinkronisasi terjadwal di RcloneView — harian atau per jam, tergantung kebutuhan Anda. Ini memastikan file baru yang ditambahkan ke Google Drive secara otomatis direplikasi ke R2 hingga Anda sepenuhnya beralih.

Setelah transisi selesai dan semua titik akses merujuk ke R2, Anda dapat menonaktifkan job sinkronisasi dan secara opsional mengarsipkan atau menghapus data Google Drive.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling incremental sync from Google Drive to R2 in RcloneView" class="img-large img-center" />

## Riwayat Job dan Jejak Audit

Setiap proses migrasi dicatat dalam riwayat job RcloneView. Anda dapat meninjau jumlah file yang ditransfer, byte yang dipindahkan, error yang ditemui, dan waktu yang berlalu untuk setiap proses. Ini menyediakan jejak audit untuk keperluan kepatuhan dan membantu memecahkan masalah yang muncul selama atau setelah migrasi.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing Google Drive to R2 migration runs" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan Google Drive Anda melalui OAuth dan Cloudflare R2 Anda sebagai remote yang kompatibel dengan S3.
3. Konfigurasikan format ekspor Google Docs (docx, xlsx, pptx atau alternatif pilihan Anda).
4. Jalankan migrasi menggunakan explorer dua panel dan verifikasi hasilnya dengan fitur compare.

Google Drive unggul dalam kolaborasi, tetapi ketika Anda membutuhkan penyimpanan yang kompatibel dengan S3 dan bebas biaya egress, Cloudflare R2 adalah tujuannya — dan RcloneView adalah jembatannya.

---

**Panduan Terkait:**

- [Menambahkan Google Drive](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [Menambahkan AWS S3 dan yang Kompatibel dengan S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Membandingkan isi folder](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
