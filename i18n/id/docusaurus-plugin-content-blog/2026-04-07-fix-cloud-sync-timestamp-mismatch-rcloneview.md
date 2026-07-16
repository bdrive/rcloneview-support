---
slug: fix-cloud-sync-timestamp-mismatch-rcloneview
title: "Memperbaiki Error Ketidakcocokan Timestamp Sinkronisasi Cloud di RcloneView"
authors:
  - tayson
description: "Selesaikan error ketidakcocokan timestamp saat sinkronisasi cloud di RcloneView. Membahas clock skew, perbedaan zona waktu, keterbatasan metadata provider, perbandingan checksum, dan flag seperti --use-server-modtime dan --no-update-modtime."
keywords:
  - rclone timestamp mismatch
  - cloud sync time error
  - rclone modification time wrong
  - rclone use server modtime
  - rclone no update modtime
  - cloud sync checksum comparison
  - rclone timezone issue
  - rclone clock skew fix
  - cloud provider timestamp support
  - rcloneview sync mismatch fix
tags:
  - troubleshooting
  - tips
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Memperbaiki Error Ketidakcocokan Timestamp Sinkronisasi Cloud di RcloneView

> Ketidakcocokan timestamp menyebabkan rclone mentransfer ulang file yang sebenarnya tidak berubah, membuang bandwidth dan waktu. Panduan ini menjelaskan mengapa hal ini terjadi dan cara mengonfigurasi RcloneView agar dapat menanganinya dengan benar.

Saat rclone melakukan sinkronisasi file antara dua lokasi, rclone membandingkan timestamp modifikasi untuk menentukan file mana yang perlu diperbarui. Jika sumber dan tujuan melaporkan timestamp berbeda untuk file yang sama — bahkan hanya selisih satu detik — rclone akan menganggap file tersebut berubah dan mentransfernya lagi. Hal ini menyebabkan transfer yang tidak perlu, biaya bandwidth membengkak, dan job sinkronisasi yang seolah tidak pernah selesai dengan bersih. Masalah ini terutama sering terjadi saat melakukan sinkronisasi antar provider cloud yang berbeda, atau antara penyimpanan lokal dan remote cloud yang menangani timestamp secara berbeda.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Ketidakcocokan Timestamp Terjadi

Timestamp terlihat sederhana — sebuah file dimodifikasi pada waktu tertentu — tetapi kenyataannya di berbagai provider cloud jauh lebih kompleks. Beberapa faktor dapat menyebabkan file yang sama melaporkan waktu modifikasi berbeda di sumber dan tujuan.

### Clock Skew Antar Provider

Setiap provider cloud memiliki clock internalnya sendiri. Meskipun sebagian besar tersinkronisasi hingga hitungan milidetik menggunakan NTP, timestamp yang disimpan untuk sebuah file mungkin diatur pada titik berbeda dalam proses upload. Satu provider mungkin mencatat waktu saat upload dimulai, provider lain saat upload selesai. Untuk file besar, selisih ini bisa mencapai beberapa detik atau lebih.

### Perbedaan Zona Waktu dan Presisi

Beberapa provider menyimpan timestamp dalam UTC, yang lain dalam zona waktu lokal pengguna, dan sebagian memotong presisinya. Contohnya:

- **Google Drive** menyimpan waktu modifikasi dengan presisi milidetik dan memungkinkan pengaturan waktu modifikasi kustom.
- **OneDrive** mendukung waktu modifikasi dengan presisi detik.
- **Amazon S3** secara native tidak mendukung waktu modifikasi pada metadata objek — sebagai gantinya, S3 mencatat waktu upload sebagai header last-modified.
- **Dropbox** mempertahankan waktu modifikasi yang diatur klien, tetapi hanya hingga presisi detik.
- **SFTP** bergantung pada filesystem remote, yang mungkin memiliki presisi detik atau mikrodetik.

Saat Anda melakukan sinkronisasi dari provider dengan presisi milidetik ke provider dengan presisi detik, pembulatan menyebabkan selisih konsisten 1 detik (atau sub-detik).

### Waktu Modifikasi Tidak Didukung

Beberapa backend penyimpanan cloud sama sekali tidak mendukung penyimpanan waktu modifikasi:

- **Penyimpanan yang kompatibel dengan S3** (AWS S3, Wasabi, Backblaze B2 mode S3, Cloudflare R2) menyimpan waktu upload, bukan waktu modifikasi file asli. Rclone mengatasi hal ini dengan menyimpan waktu modifikasi asli pada metadata objek (X-Amz-Meta-Mtime), tetapi ini hanya berfungsi jika metadata tersebut diatur saat upload awal oleh rclone.
- File yang diunggah melalui antarmuka web provider atau tool lain tidak akan memiliki metadata ini, sehingga menyebabkan ketidakcocokan pada sinkronisasi berikutnya.

### Metadata Tidak Dipertahankan Saat Transfer

Jika file awalnya diunggah ke tujuan oleh tool selain rclone, atau jika header metadata dihapus oleh proxy atau CDN, rclone tidak dapat menemukan metadata waktu modifikasi yang diharapkan. Rclone akan menggunakan waktu last-modified dari provider, yang akan berbeda dari sumber.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folder contents" class="img-large img-center" />

## Mendiagnosis Masalah

Sebelum menerapkan perbaikan, pastikan bahwa timestamp memang menjadi penyebab masalahnya. Jalankan sinkronisasi dry-run di RcloneView atau dari terminal:

```bash
rclone sync source: dest: --dry-run -v
```

Perhatikan outputnya. Jika Anda melihat baris seperti:

```
NOTICE: file.txt: Skipped copy (src older)
```

atau file yang ditandai untuk ditransfer meskipun kontennya identik, kemungkinan besar penyebabnya adalah timestamp. Anda juga dapat membandingkan file tertentu:

```bash
rclone lsl source:path/to/file.txt
rclone lsl dest:path/to/file.txt
```

Perintah `lsl` menampilkan ukuran file, waktu modifikasi, dan path. Bandingkan timestamp-nya — jika ukurannya sama tetapi waktunya berselisih beberapa detik atau menunjukkan zona waktu berbeda, berarti Anda mengalami ketidakcocokan timestamp.

Di RcloneView, gunakan fitur **Compare Folders** untuk memeriksa perbedaan secara visual. Tampilan perbandingan ini menyoroti file yang berbeda berdasarkan ukuran, timestamp, atau checksum, sehingga memudahkan Anda mengidentifikasi ketidakcocokan yang hanya berupa timestamp.

## Menggunakan --use-server-modtime

Flag `--use-server-modtime` memberi tahu rclone untuk menggunakan waktu modifikasi yang dilaporkan oleh server, bukan waktu apa pun yang tersimpan di metadata. Ini berguna ketika:

- Anda menginginkan perilaku yang konsisten terlepas dari bagaimana file awalnya diunggah.
- Waktu modifikasi pada metadata tidak dapat diandalkan atau hilang.
- Anda melakukan sinkronisasi antara dua lokasi di mana file diunggah oleh tool yang berbeda.

```bash
rclone sync source: dest: --use-server-modtime
```

Di RcloneView, Anda dapat menambahkan flag ini di konfigurasi job pada opsi lanjutan atau flag kustom.

**Kapan menggunakannya:** Saat melakukan sinkronisasi dari backend yang kompatibel dengan S3 di mana file diunggah oleh tool selain rclone, atau saat header metadata tidak konsisten.

**Trade-off:** Waktu modifikasi dari server mencerminkan waktu upload, bukan waktu modifikasi file asli. Artinya rclone tidak dapat mendeteksi apakah file dimodifikasi sebelum diunggah ulang — rclone hanya melihat timestamp upload.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## Menggunakan --no-update-modtime

Flag `--no-update-modtime` mencegah rclone mengatur waktu modifikasi pada tujuan setelah menyalin file. Secara default, rclone menyalin file lalu mengatur waktu modifikasi tujuan agar sesuai dengan sumber. Jika tujuan tidak mendukung pengaturan waktu modifikasi (atau membulatkannya), ini akan menciptakan ketidakcocokan yang terus berulang pada sinkronisasi berikutnya.

```bash
rclone sync source: dest: --no-update-modtime
```

**Kapan menggunakannya:** Saat provider tujuan tidak mendukung pengaturan waktu modifikasi, atau saat proses pengaturan waktu tersebut menimbulkan kesalahan pembulatan yang memicu transfer ulang yang tidak perlu.

**Trade-off:** Tanpa waktu modifikasi yang cocok, rclone harus menggunakan metode lain (seperti checksum) untuk mendeteksi perubahan pada sinkronisasi berikutnya.

## Beralih ke Perbandingan Berbasis Checksum

Jika timestamp pada dasarnya tidak dapat diandalkan antara sumber dan tujuan Anda, Anda dapat memberi tahu rclone untuk membandingkan file berdasarkan checksum, bukan waktu modifikasi. Ini adalah cara paling andal untuk menentukan apakah sebuah file benar-benar telah berubah.

```bash
rclone sync source: dest: --checksum
```

Flag `--checksum` membuat rclone menghitung atau mengambil hash (MD5, SHA-1, atau algoritma lain yang didukung) untuk file di kedua sisi dan hanya mentransfer file yang hash-nya berbeda.

**Keuntungan:**

- Sepenuhnya mengabaikan timestamp — tidak ada lagi false positive akibat clock skew atau perbedaan presisi.
- Mendeteksi perubahan konten yang sebenarnya, bukan sekadar perbedaan metadata.
- Bekerja dengan andal di semua provider.

**Kekurangan:**

- Lebih lambat untuk kumpulan file besar karena rclone harus menghitung atau mengambil checksum untuk setiap file.
- Beberapa provider tidak mengembalikan checksum untuk semua file (misalnya, objek S3 yang diunggah secara multipart memiliki ETag komposit yang bukan hash MD5 standar).
- Meningkatkan jumlah panggilan API, yang dapat memengaruhi batas rate atau menimbulkan biaya.

Di RcloneView, aktifkan perbandingan checksum pada pengaturan job sinkronisasi. Untuk dataset besar, pertimbangkan untuk menjalankan sinkronisasi checksum secara terjadwal (misalnya mingguan) dan menggunakan sinkronisasi berbasis timestamp untuk pencadangan inkremental harian.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

## Bagaimana Provider yang Berbeda Menangani Timestamp

Memahami perilaku timestamp masing-masing provider membantu Anda memilih strategi sinkronisasi yang tepat.

| Provider | Dukungan Modtime | Presisi | Catatan |
|---|---|---|---|
| Google Drive | Penuh | Milidetik | Memungkinkan pengaturan modtime kustom melalui API |
| OneDrive | Penuh | Detik | Mendukung pengaturan modtime |
| Dropbox | Penuh | Detik | Modtime yang diatur klien dipertahankan |
| Amazon S3 | Hanya metadata | Detik | Rclone menyimpan modtime di X-Amz-Meta-Mtime |
| Backblaze B2 | Hanya metadata | Milidetik | Disimpan di header info file |
| Wasabi | Hanya metadata | Detik | Kompatibel dengan S3, menggunakan X-Amz-Meta-Mtime |
| Cloudflare R2 | Hanya metadata | Detik | Kompatibel dengan S3, berbasis metadata |
| SFTP | Tergantung FS | Bervariasi | Tergantung filesystem remote |
| Azure Blob | Hanya metadata | Detik | Rclone menggunakan header metadata |
| Google Cloud Storage | Hanya metadata | Detik | Metadata kustom untuk modtime |

Saat melakukan sinkronisasi antara dua provider dengan dukungan modtime "Penuh" (misalnya Google Drive ke OneDrive), perbandingan berbasis timestamp bekerja dengan andal. Saat melakukan sinkronisasi antara provider "Penuh" dan provider "Hanya metadata", ketidakcocokan sering terjadi kecuali file awalnya diunggah oleh rclone.

## Menggabungkan Flag untuk Hasil Terbaik

Untuk sebagian besar skenario sinkronisasi lintas provider, kombinasi flag memberikan hasil terbaik:

**Untuk sinkronisasi S3-ke-S3 atau S3-ke-cloud di mana file diunggah oleh tool lain:**

```bash
rclone sync source: dest: --checksum --no-update-modtime
```

**Untuk Google Drive ke OneDrive (keduanya mendukung modtime):**

```bash
rclone sync gdrive: onedrive: --modify-window 1s
```

Flag `--modify-window` menambahkan toleransi pada perbandingan timestamp. Mengaturnya ke `1s` berarti file dengan timestamp yang berselisih dalam satu detik dianggap identik. Ini menangani pembulatan akibat perbedaan presisi.

**Untuk sinkronisasi inkremental harian dengan verifikasi penuh sesekali:**

```bash
# Harian (cepat, berbasis timestamp dengan toleransi)
rclone sync source: dest: --modify-window 2s

# Mingguan (menyeluruh, berbasis checksum)
rclone sync source: dest: --checksum
```

Di RcloneView, Anda dapat membuat dua job sinkronisasi terpisah — satu untuk proses harian dengan `--modify-window` dan satu lagi untuk proses mingguan dengan `--checksum` — lalu menjadwalkannya secara independen.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

## Mencegah Masalah Timestamp pada Setup Baru

Jika Anda sedang menyiapkan alur kerja sinkronisasi baru, Anda dapat menghindari sebagian besar masalah timestamp sejak awal:

1. **Gunakan rclone untuk semua transfer** — rclone mengatur metadata secara konsisten, sehingga file yang diunggah oleh rclone akan memiliki metadata waktu modifikasi yang benar di mana pun.
2. **Atur --modify-window dengan tepat** untuk pasangan provider Anda sejak sinkronisasi pertama.
3. **Gunakan mode checksum untuk migrasi awal** — saat memindahkan dataset besar ke provider baru untuk pertama kalinya, gunakan `--checksum` untuk memastikan baseline yang bersih.
4. **Uji coba dengan folder kecil terlebih dahulu** — sinkronisasikan beberapa file, periksa apakah ada ketidakcocokan, lalu tingkatkan skalanya.
5. **Dokumentasikan flag Anda** — saat Anda menemukan kombinasi yang tepat untuk provider Anda, simpan sebagai job RcloneView agar Anda tidak perlu menemukannya lagi di kemudian hari.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Tambahkan remote sumber dan tujuan** Anda di Remote Manager.
3. **Gunakan Compare Folders** untuk memeriksa perbedaan sebelum melakukan sinkronisasi.
4. **Konfigurasikan flag sinkronisasi** (`--checksum`, `--modify-window`, `--no-update-modtime`) sesuai pasangan provider Anda.
5. **Buat job sinkronisasi terjadwal** dan pantau hasilnya di Job History.

Ketidakcocokan timestamp adalah salah satu penyebab paling umum dari sinkronisasi cloud yang tidak efisien. Dengan flag yang tepat dan pemahaman tentang bagaimana masing-masing provider menangani waktu modifikasi, Anda dapat menghilangkan transfer yang tidak perlu dan menjaga job sinkronisasi Anda tetap bersih.

---

**Panduan Terkait:**

- [Membandingkan Konten Folder](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Menyinkronkan Penyimpanan Remote](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)
- [Pemantauan Transfer Secara Real-Time](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />
