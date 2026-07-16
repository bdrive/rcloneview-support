---
slug: rclone-ncdu-storage-analysis-rcloneview
title: "Menganalisis Penggunaan Penyimpanan Cloud dengan Rclone NCDU di RcloneView"
authors: [tayson]
description: "Gunakan rclone ncdu melalui RcloneView untuk menganalisis penggunaan penyimpanan cloud, menemukan file berukuran besar, dan mengelola ruang disk di berbagai penyedia cloud."
keywords:
  - rclone ncdu
  - analisis penyimpanan cloud
  - penggunaan disk cloud
  - rcloneview storage analyzer
  - temukan file besar di cloud
  - ruang penyimpanan cloud
  - rclone disk usage
  - rincian penggunaan penyimpanan
  - ukuran folder cloud
  - analisis remote storage
tags: [feature, tips, cli, monitoring, dashboard, performance]
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Menganalisis Penggunaan Penyimpanan Cloud dengan Rclone NCDU di RcloneView

> Temukan dengan tepat ke mana ruang penyimpanan cloud Anda terpakai menggunakan tool NCDU rclone yang canggih, yang dapat diakses langsung melalui terminal terintegrasi RcloneView.

Biaya penyimpanan cloud dapat membengkak secara diam-diam. Sebuah folder pencadangan yang terlupakan di sini, sekumpulan file video yang tidak terkompresi di sana, dan tiba-tiba Anda membayar untuk terabyte penyimpanan yang tidak Anda sadari sedang digunakan. Rclone menyertakan tool NCDU (NCurses Disk Usage) bawaan yang memindai remote storage Anda dan menampilkan rincian ukuran direktori secara interaktif dan dapat dinavigasi. Melalui terminal terintegrasi dan file explorer RcloneView, Anda dapat menjalankan pemindaian ncdu, mengidentifikasi file dan folder yang menghabiskan ruang, serta segera mengambil tindakan untuk mendapatkan kembali ruang penyimpanan. Panduan ini mencakup semuanya, mulai dari pemindaian dasar hingga alur kerja analisis lanjutan di berbagai penyedia cloud.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Apa Itu Rclone NCDU?

Rclone NCDU adalah versi adaptasi cloud dari utilitas `ncdu` (NCurses Disk Usage) klasik di Linux. Sementara ncdu asli menganalisis sistem file lokal, implementasi rclone bekerja dengan backend remote storage apa pun yang didukung rclone, termasuk Google Drive, Amazon S3, Dropbox, OneDrive, Backblaze B2, dan lebih dari 70 penyedia lainnya.

Saat Anda menjalankan `rclone ncdu`, perintah ini melakukan pemindaian rekursif pada path remote yang ditentukan, menghitung ukuran setiap file dan direktori. Hasilnya ditampilkan dalam antarmuka terminal interaktif tempat Anda dapat:

- **Menavigasi direktori** untuk masuk lebih dalam ke struktur folder bertingkat
- **Mengurutkan berdasarkan ukuran** untuk segera melihat konsumen ruang terbesar
- **Mengurutkan berdasarkan jumlah** untuk menemukan direktori dengan jumlah file kecil yang berlebihan
- **Menandai file untuk dihapus** langsung dari antarmuka
- **Mengekspor hasil** untuk analisis offline atau pelaporan

Keunggulan utama dibandingkan sekadar menelusuri penyimpanan cloud Anda adalah kecepatan dan kelengkapannya. Peninjauan manual terhadap ribuan folder tidak praktis, tetapi ncdu memindai semuanya dalam satu kali proses dan menampilkan hasilnya dalam format yang terprioritas dan dapat ditindaklanjuti.

**Perbedaannya dengan tool bawaan masing-masing penyedia:**

Sebagian besar penyedia cloud menawarkan semacam tampilan penggunaan penyimpanan, tetapi sering kali terbatas:
- Google Drive menampilkan total penggunaan tetapi tidak merincinya per folder
- S3 memerlukan metrik CloudWatch atau tool pihak ketiga untuk analisis mendetail
- Dropbox menampilkan penggunaan per folder bersama tetapi melewatkan struktur bertingkat

Rclone ncdu memberikan analisis yang konsisten dan mendetail terlepas dari penyedia mana yang Anda gunakan.

## Menjalankan Pemindaian NCDU Pertama Anda

Memulai dengan ncdu melalui RcloneView sangatlah mudah. Buka terminal terintegrasi RcloneView atau gunakan file explorer untuk pendekatan visual.

**Melalui terminal RcloneView:**

```bash
rclone ncdu remote:
```

Ganti `remote:` dengan nama remote yang telah Anda konfigurasi. Sebagai contoh:

```bash
rclone ncdu gdrive:
rclone ncdu s3:my-bucket
rclone ncdu dropbox:/Documents
```

**Memindai subdirektori tertentu:**

Jika Anda hanya ingin menganalisis sebagian dari penyimpanan Anda, tentukan path-nya:

```bash
rclone ncdu gdrive:/Projects/2025
```

Cara ini jauh lebih cepat dibandingkan memindai seluruh remote, terutama untuk akun penyimpanan berukuran besar.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folder contents" class="img-large img-center" />

**Memahami proses pemindaian:**

Saat ncdu dimulai, ia mendaftar secara rekursif setiap file dan direktori di remote. Waktu yang dibutuhkan bergantung pada:

| Faktor | Dampak |
|--------|--------|
| Jumlah total file | Faktor utama; 100 ribu file bisa memakan waktu beberapa menit |
| Batas laju API | Google Drive membatasi hingga ~10 permintaan/detik |
| Latensi jaringan | Latensi lebih tinggi memperlambat panggilan API |
| Kedalaman direktori | Struktur bertingkat dalam memerlukan lebih banyak panggilan API |

Untuk Google Drive dengan 50.000 file, perkirakan waktu pemindaian 2-5 menit. Untuk bucket S3 dengan jutaan objek, pertimbangkan untuk memindai prefix tertentu daripada seluruh bucket.

## Menavigasi Antarmuka NCDU

Setelah pemindaian selesai, Anda akan disajikan tampilan interaktif. Berikut cara menavigasinya secara efektif.

**Kontrol keyboard:**

| Tombol | Aksi |
|-----|--------|
| Panah Atas/Bawah | Memindahkan seleksi antar item |
| Enter / Panah Kanan | Masuk ke direktori yang dipilih |
| Panah Kiri | Kembali ke direktori induk |
| d | Menghapus file atau direktori yang dipilih |
| s | Mengaktifkan/menonaktifkan pengurutan berdasarkan ukuran |
| c | Mengaktifkan/menonaktifkan pengurutan berdasarkan jumlah (jumlah file) |
| g | Mengaktifkan/menonaktifkan tampilan grafik |
| n | Mengurutkan berdasarkan nama |
| q | Keluar dari ncdu |

**Membaca tampilan:**

Setiap baris pada output ncdu menampilkan:
- Ukuran direktori atau file (dalam format yang mudah dibaca manusia)
- Grafik batang visual yang menunjukkan ukuran relatif dibandingkan item sejenisnya
- Jumlah file yang terkandung (untuk direktori)
- Nama direktori atau file

Item terbesar muncul di bagian atas secara default, sehingga langsung terlihat jelas di mana penyimpanan Anda banyak terpakai.

**Alur kerja navigasi praktis:**

1. Mulai dari level root untuk melihat folder tingkat atas mana yang terbesar.
2. Masuk ke folder terbesar untuk melihat isinya.
3. Lanjutkan menelusuri lebih dalam hingga Anda menemukan file atau subdirektori tertentu yang menghabiskan ruang.
4. Catat path item yang ingin Anda bersihkan.
5. Gunakan file explorer RcloneView untuk menghapus, memindahkan, atau mengarsipkan item tersebut.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## Menemukan File Besar dan Data yang Terlupakan

Kasus penggunaan paling umum untuk ncdu adalah menemukan file yang tidak terduga besar dan data yang terlupakan. Berikut strategi untuk mengidentifikasi berbagai jenis pemborosan penyimpanan.

**Mengidentifikasi file media besar:**

File video, image disk, dan arsip yang tidak terkompresi sering kali menjadi penyebab utama. Saat Anda mengurutkan berdasarkan ukuran di ncdu, item-item ini biasanya langsung muncul di bagian atas. Penyebab umum meliputi:

- Rekaman layar dan hasil ekspor video yang tertinggal di direktori kerja
- Image disk virtual machine yang diunggah sebagai pencadangan
- Arsip ZIP atau TAR yang tidak terkompresi padahal bisa dikompresi
- Salinan duplikat dataset besar di folder yang berbeda

**Menemukan pencadangan yang basi:**

Banyak pengguna menyiapkan pencadangan otomatis lalu melupakannya. Perhatikan:
- Direktori bernama `backup`, `archive`, `old`, atau yang mengandung stempel tanggal
- Beberapa salinan berstempel waktu dari data yang sama
- Dump database yang terus menumpuk tanpa pembersihan

**Mendeteksi file duplikat di berbagai penyedia:**

Jika Anda menggunakan ncdu di beberapa remote, Anda mungkin menemukan data yang sama tersimpan secara redundan:

```bash
# Scan Google Drive
rclone ncdu gdrive:/Backups

# Scan S3
rclone ncdu s3:my-backup-bucket

# Compare the results to find overlapping data
```

**Jenis file besar berdasarkan penyedia:**

Penyedia yang berbeda cenderung menghasilkan jenis pemborosan penyimpanan yang berbeda pula:

| Penyedia | File Besar Umum |
|----------|--------------------|
| Google Drive | Video yang dibagikan, notebook Colab dengan output, ekspor Takeout lama |
| S3 | Arsip log, artefak deployment lama, data lake yang tidak terkompresi |
| OneDrive | Blob OneNote, file tim yang dibagikan, salinan lampiran Outlook |
| Dropbox | Duplikat unggahan kamera, folder bersama lama |

## Mengekspor dan Membandingkan Hasil

Untuk pengelolaan penyimpanan yang berkelanjutan, Anda akan ingin mengekspor hasil ncdu dan melacak perubahan dari waktu ke waktu.

**Mengekspor hasil pemindaian ke sebuah file:**

Perintah `size` milik rclone melengkapi ncdu dengan menyediakan output yang dapat di-script:

```bash
# Get total size of a remote
rclone size gdrive: --json

# List directories with their sizes
rclone lsf gdrive: --dirs-only -R --format "sp" | sort -t ';' -k1 -rn | head -20
```

**Membuat laporan penggunaan penyimpanan:**

Gabungkan perintah rclone untuk membuat laporan yang komprehensif:

```bash
# Generate a JSON report of all file sizes
rclone lsjson gdrive: -R --no-modtime --no-mimetype > storage-report.json

# Use rclone size for quick summaries
rclone size gdrive:/Projects
rclone size gdrive:/Backups
rclone size gdrive:/Media
```

**Membandingkan penggunaan di berbagai penyedia:**

Jika Anda mengelola beberapa akun cloud, jalankan perintah ncdu atau size terhadap masing-masing untuk membandingkannya:

```bash
echo "=== Google Drive ===" && rclone size gdrive:
echo "=== S3 ===" && rclone size s3:my-bucket
echo "=== Dropbox ===" && rclone size dropbox:
echo "=== OneDrive ===" && rclone size onedrive:
```

Ini memberi Anda gambaran yang jelas tentang bagaimana penyimpanan didistribusikan dan di mana upaya optimasi akan memberikan dampak terbesar.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

## Teknik NCDU Tingkat Lanjut

Selain pemindaian dasar, beberapa teknik lanjutan dapat membuat analisis penyimpanan Anda lebih efektif.

**Memfilter pemindaian:**

Gunakan flag filter milik rclone untuk memfokuskan analisis Anda:

```bash
# Only scan files larger than 100 MB
rclone ncdu gdrive: --min-size 100M

# Exclude certain directories from the scan
rclone ncdu gdrive: --exclude "node_modules/**" --exclude ".git/**"

# Only scan specific file types
rclone ncdu s3:my-bucket --include "*.{mp4,avi,mkv,mov}"
```

**Menyimpan cache hasil pemindaian:**

Untuk remote yang sangat besar, pemindaian bisa memakan waktu lama. Aktifkan directory cache milik rclone untuk mempercepat pemindaian berulang:

```bash
rclone ncdu gdrive: --fast-list
```

Flag `--fast-list` menggunakan lebih sedikit panggilan API dengan meminta daftar direktori secara massal. Ini dapat mengurangi waktu pemindaian hingga 50% atau lebih pada penyedia yang mendukungnya (S3, Google Drive, B2).

**Menganalisis penyimpanan yang dibagikan:**

Di Google Drive, penyimpanan yang digunakan oleh file yang dibagikan kepada Anda tidak dihitung terhadap kuota Anda, tetapi file yang Anda miliki di shared drive tetap dihitung. Gunakan ncdu untuk memindai shared drive tertentu:

```bash
rclone ncdu gdrive: --drive-shared-with-me
rclone ncdu gdrive,shared_drive_id=DRIVE_ID:
```

**Menjadwalkan pemindaian rutin:**

Siapkan laporan penyimpanan otomatis menggunakan cron atau job scheduler milik RcloneView:

```bash
# Weekly storage report
0 8 * * MON rclone size gdrive: --json >> /var/log/storage-usage.json
```

## Menindaklanjuti Temuan

Setelah mengidentifikasi pemborosan penyimpanan, gunakan RcloneView untuk langsung mengambil tindakan.

**Menghapus file yang tidak diperlukan:**

Dari antarmuka ncdu, tekan `d` pada file atau direktori mana pun untuk menghapusnya. Alternatifnya, gunakan file explorer RcloneView untuk menelusuri ke path yang teridentifikasi dan menghapus file melalui GUI.

**Memindahkan data dingin ke penyimpanan yang lebih murah:**

Jika Anda menemukan dataset besar yang perlu disimpan tetapi jarang diakses, pindahkan ke tingkat penyimpanan yang lebih murah:

```bash
# Move old archives from Google Drive to Backblaze B2
rclone move gdrive:/Archives/2023 b2:cold-archive/2023 --progress
```

Explorer dua panel milik RcloneView membuat proses drag-and-drop ini menjadi sederhana.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

**Mengompresi sebelum mengarsipkan:**

Untuk data yang didominasi teks seperti log dan CSV, kompresi terlebih dahulu sebelum ditransfer ke penyimpanan dingin:

```bash
# Compress locally, then upload
tar czf archive.tar.gz /path/to/data
rclone copy archive.tar.gz b2:compressed-archives/
```

**Menyiapkan kebijakan siklus hidup:**

Setelah membersihkan, cegah pembengkakan penyimpanan di masa depan dengan mengonfigurasi pembersihan otomatis. Gunakan penjadwalan job milik RcloneView untuk menjalankan tugas pembersihan berkala:

- Hapus file yang lebih lama dari usia tertentu: `rclone delete remote: --min-age 365d`
- Hapus direktori kosong: `rclone rmdirs remote: --leave-root`
- Deduplikasi file di Google Drive: `rclone dedupe gdrive: --dedupe-mode newest`

## Memulai

Rclone NCDU adalah salah satu tool paling berharga dan langsung terasa manfaatnya dalam ekosistem rclone. Satu kali pemindaian saja dapat mengungkap gigabyte data yang terlupakan, file duplikat, dan pemborosan penyimpanan yang bahkan tidak Anda sadari keberadaannya. Melalui RcloneView, Anda dapat menjalankan pemindaian ini, meninjau hasilnya, dan mengambil tindakan tanpa pernah meninggalkan aplikasi. Mulailah dengan memindai akun penyimpanan cloud terbesar Anda, urutkan berdasarkan ukuran, dan telusuri 10 item terbesar teratas. Anda kemungkinan besar akan menemukan penghematan signifikan pada sesi pertama Anda.

---

**Panduan Terkait:**
- [Menelusuri dan Mengelola Remote Storage](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Membandingkan Isi Folder](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Pemantauan Transfer Real-Time](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />
