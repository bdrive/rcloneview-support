---
slug: lsf-lsjson-remote-file-listing-rcloneview
title: "Menampilkan dan Menganalisis File Remote dengan RcloneView Explorer"
authors:
  - tayson
description: "Gunakan RcloneView Explorer untuk menampilkan, mengurutkan, dan menganalisis file cloud remote secara visual. Gantikan perintah rclone lsf dan lsjson dengan GUI yang intuitif untuk manajemen file."
keywords:
  - rcloneview
  - rclone lsf
  - rclone lsjson
  - remote file listing
  - cloud storage analysis
  - file size analysis
  - cloud file management
  - storage usage
  - directory comparison
  - cloud file explorer
tags:
  - feature
  - file-management
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Menampilkan dan Menganalisis File Remote dengan RcloneView Explorer

> Memahami apa yang tersimpan di seluruh akun cloud Anda adalah langkah pertama untuk mengelolanya secara efektif. **RcloneView** Explorer menyediakan pengalaman penampilan file secara visual yang menggantikan perintah CLI yang rumit dengan penjelajahan, pengurutan, dan analisis yang intuitif.

CLI rclone menawarkan perintah penampilan file yang canggih seperti `lsf` dan `lsjson` yang menghasilkan detail file dalam berbagai format. Perintah-perintah ini berguna untuk scripting, tetapi tidak ideal untuk eksplorasi file sehari-hari. Membaca ribuan baris output terminal untuk menemukan file tertentu atau mengidentifikasi penyebab boros penyimpanan itu melelahkan dan rawan kesalahan.

Explorer milik RcloneView mengubah pengalaman ini menjadi sesuatu yang visual dan interaktif. Anda mendapatkan data dasar yang sama, tetapi disajikan dalam antarmuka file manager yang familiar dengan pengurutan, pemfilteran, dan tampilan multi-kolom. Anda dapat melihat ukuran file, tanggal modifikasi, dan jenis file sekilas, serta menelusuri struktur direktori hanya dengan satu klik.

Bagi pengguna yang masih membutuhkan output CLI mentah, terminal bawaan RcloneView membuat perintah `rclone lsf` dan `lsjson` hanya sejauh satu ketukan tombol, memberikan Anda yang terbaik dari kedua dunia dalam satu aplikasi.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Penampilan File Visual di Explorer

Panel Explorer RcloneView menampilkan isi dari remote yang telah dikonfigurasi dalam tata letak file manager standar. Saat Anda memilih remote dan menavigasi ke suatu direktori, Anda akan melihat:

- **Nama file dan folder** dengan ikon yang mudah dikenali untuk jenis file umum.
- **Ukuran file** ditampilkan dalam format yang mudah dibaca manusia (KB, MB, GB).
- **Tanggal modifikasi** yang menunjukkan kapan setiap file terakhir diperbarui.
- **Jumlah file** untuk direktori, sehingga Anda dapat melihat berapa banyak item yang terdapat di setiap folder.

Ini adalah padanan visual dari menjalankan `rclone lsf --format "pst" remote:path`, tetapi dengan kemampuan untuk berinteraksi langsung dengan setiap item. Klik folder untuk membukanya. Klik kanan pada file untuk aksi seperti menyalin, memindahkan, atau menghapus. Pilih beberapa file untuk operasi batch.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## Mengurutkan Berdasarkan Ukuran, Tanggal, dan Nama

Salah satu alasan paling umum untuk menampilkan file remote adalah menemukan item tertentu atau mengidentifikasi pola. Explorer RcloneView mendukung pengurutan berbasis kolom yang membuat hal ini menjadi sangat mudah:

- **Urutkan berdasarkan ukuran** untuk dengan cepat menemukan file terbesar yang menghabiskan kuota penyimpanan Anda. Ini sangat berguna bagi penyedia cloud dengan batas penyimpanan, di mana beberapa file besar mungkin menyumbang sebagian besar penggunaan Anda.
- **Urutkan berdasarkan tanggal** untuk mengidentifikasi file yang baru saja dimodifikasi, menemukan konten usang yang belum tersentuh selama berbulan-bulan, atau memverifikasi bahwa operasi sinkronisasi terbaru telah memperbarui file yang diharapkan.
- **Urutkan berdasarkan nama** untuk penjelajahan alfabetis saat Anda kira-kira tahu apa yang Anda cari.

Klik header kolom mana pun untuk mengurutkan berdasarkan kolom tersebut. Klik lagi untuk membalik urutan pengurutan. Interaksi sederhana ini menggantikan proses menyalurkan output `rclone lsf` melalui perintah `sort` di CLI.

## Menemukan File Besar dan Menganalisis Penggunaan Penyimpanan

Biaya penyimpanan bisa bertambah, dan mengetahui ke mana ruang Anda digunakan sangat penting untuk manajemen biaya. RcloneView membantu Anda menganalisis penggunaan penyimpanan tanpa menjalankan skrip audit terpisah:

1. Navigasikan ke root remote di Explorer.
2. Urutkan berdasarkan ukuran secara menurun untuk segera menampilkan file terbesar.
3. Telusuri direktori besar untuk melihat subdirektori mana yang paling banyak berkontribusi terhadap total penggunaan.

Alur kerja ini menggantikan pola CLI umum yaitu menjalankan `rclone lsjson --recursive remote: | jq 'sort_by(.Size) | reverse'` dan mencoba mengurai output JSON secara visual. Di Explorer, informasi yang sama disajikan dalam antarmuka yang dapat diurutkan dan diklik.

Untuk analisis yang lebih mendalam, Anda dapat menggunakan terminal bawaan RcloneView untuk menjalankan `rclone ncdu remote:` yang menyediakan rincian penggunaan penyimpanan interaktif langsung di dalam aplikasi.

## Membandingkan Struktur Direktori

Tata letak Explorer dua panel milik RcloneView dirancang untuk membandingkan isi direktori antar remote. Muat satu remote di sebelah kiri dan remote lainnya di sebelah kanan, lalu bandingkan strukturnya secara visual:

- Identifikasi file yang ada di satu remote tetapi tidak ada di remote lainnya.
- Temukan perbedaan ukuran file yang mungkin menunjukkan transfer yang tidak lengkap.
- Verifikasi bahwa operasi sinkronisasi menghasilkan hasil yang diharapkan.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

Fitur pembanding bawaan bahkan lebih jauh lagi, secara otomatis menyoroti perbedaan antara dua direktori. Ini adalah padanan visual dari menjalankan `rclone check source: dest:` tetapi dengan tampilan interaktif yang memungkinkan Anda langsung bertindak atas perbedaan yang ditemukan.

## Menggunakan Terminal Bawaan untuk Kueri Lanjutan

Untuk kebutuhan penampilan file lanjutan yang melampaui apa yang disediakan Explorer visual, RcloneView menyertakan terminal bawaan. Ini memberi Anda akses langsung ke semua perintah CLI rclone, termasuk:

**`rclone lsf`** untuk daftar berformat sederhana:
```
rclone lsf remote:documents --format "pst" --recursive
```
Ini menampilkan semua file dengan path, ukuran, dan timestamp dalam format datar yang cocok untuk disalurkan (piping) atau disimpan.

**`rclone lsjson`** untuk data terstruktur:
```
rclone lsjson remote:documents --recursive --no-modtime
```
Ini menghasilkan metadata file sebagai JSON, yang berguna untuk analisis terprogram atau dimasukkan ke alat lain.

**`rclone size`** untuk ringkasan penyimpanan:
```
rclone size remote:
```
Ini memberikan total cepat jumlah file dan byte yang tersimpan pada suatu remote.

Terminal berjalan di dalam RcloneView, sehingga Anda tidak perlu membuka konsol terpisah atau mengonfigurasi path rclone. Konfigurasi remote yang sudah ada sudah tersedia secara langsung.

## Menjelajahi Beberapa Remote Secara Bersamaan

Explorer RcloneView mendukung pembukaan beberapa remote secara bersamaan. Ini sangat berguna bagi pengguna yang mengelola file di beberapa penyedia cloud:

- Buka Google Drive di satu panel dan OneDrive di panel lainnya untuk membandingkan struktur folder.
- Jelajahi bucket S3 sambil merujuk ke direktori lokal yang sesuai.
- Periksa file di Backblaze B2 dan Wasabi berdampingan untuk memverifikasi pencadangan lintas penyedia.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

Setiap panel beroperasi secara independen, sehingga Anda dapat menavigasi, mengurutkan, dan menjelajah sesuai kecepatan Anda sendiri tanpa memengaruhi panel lainnya. Ketika Anda menemukan file yang perlu dipindahkan antar remote, cukup seret dan lepas (drag and drop).

## Alur Kerja Analisis File Praktis

Berikut beberapa tugas analisis file umum dan cara menyelesaikannya di RcloneView:

**Audit penyimpanan cloud sebelum migrasi:**
Jelajahi remote sumber, urutkan berdasarkan tanggal untuk mengidentifikasi file aktif vs. usang, dan tentukan apa yang akan dimigrasikan vs. apa yang akan diarsipkan atau dihapus. Langkah persiapan ini dapat secara signifikan mengurangi waktu dan biaya migrasi.

**Verifikasi kelengkapan pencadangan:**
Buka remote sumber dan remote pencadangan berdampingan, navigasikan ke direktori yang sama pada masing-masing, dan gunakan fitur pembanding untuk memastikan semua file telah disalin dengan benar.

**Temukan file duplikat atau usang:**
Urutkan berdasarkan nama untuk menemukan file dengan nama yang mirip, atau urutkan berdasarkan tanggal untuk menemukan file yang belum dimodifikasi selama bertahun-tahun. Hapus file yang tidak diperlukan untuk membebaskan kuota penyimpanan dan mengurangi biaya.

**Buat inventaris file:**
Gunakan terminal bawaan untuk menjalankan `rclone lsjson --recursive remote:` dan simpan outputnya untuk keperluan dokumentasi, kepatuhan, atau audit.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan remote penyimpanan cloud Anda di Remote Manager.
3. Buka Explorer dan jelajahi remote mana pun untuk melihat file beserta ukuran, tanggal, dan jenisnya.
4. Gunakan pengurutan, pembandingan, dan terminal bawaan untuk analisis yang lebih mendalam.

Baik Anda memerlukan pemindaian visual cepat atau inventaris file yang mendetail, Explorer RcloneView menempatkan semua informasi di ujung jari Anda tanpa mengharuskan Anda mengingat sintaks CLI.

---

**Panduan Terkait:**

- [Menjelajahi dan Mengelola Penyimpanan Remote](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Membandingkan isi folder](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Pemantauan Transfer Real-time](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />
