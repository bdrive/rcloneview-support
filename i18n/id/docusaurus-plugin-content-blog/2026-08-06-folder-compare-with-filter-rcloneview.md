---
slug: folder-compare-with-filter-rcloneview
title: "Perbandingan Folder dengan Filter — Perbandingan Presisi di RcloneView"
authors:
  - alex
description: "Kecualikan gangguan dari perbandingan folder dengan aturan filter RcloneView — lewati artefak build, cache, dan jenis file yang tidak diinginkan sebelum membandingkan."
keywords:
  - filter perbandingan folder
  - kecualikan file dari perbandingan
  - aturan filter RcloneView
  - bandingkan folder pola pengecualian
  - filter perbedaan folder cloud
  - lewati perbandingan folder .git
  - perbandingan folder selektif
  - filter verifikasi cadangan cloud
tags:
  - RcloneView
  - feature
  - folder-comparison
  - filters
  - compare
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Perbandingan Folder dengan Filter — Perbandingan Presisi di RcloneView

> Perbandingan folder lengkap hanya berguna jika hasilnya tidak terkubur di bawah file yang sejak awal tidak pernah Anda pedulikan.

Menjalankan Perbandingan Folder biasa antara dua lokasi penyimpanan besar sering kali menghasilkan tumpukan perbedaan yang tidak ada hubungannya dengan data yang sebenarnya perlu Anda verifikasi — cache build, folder `.git`, file sementara, dan ISO yang sebenarnya tidak pernah perlu dicadangkan. Perbandingan Folder dengan Filter dari RcloneView memungkinkan Anda mengecualikan kategori-kategori tersebut sebelum perbandingan dijalankan, sehingga hasilnya hanya mencerminkan file yang benar-benar penting.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Perbandingan Terfilter Itu Penting

Perbandingan mentah antara dua pohon direktori besar memperlakukan setiap file dengan tingkat kepentingan yang sama, yang berarti repositori sumber dengan riwayat `.git` yang besar atau folder proyek yang penuh dengan image `.iso` dapat mengalahkan perbedaan yang sebenarnya ingin Anda temukan. Memfilter cakupan perbandingan ke nama folder dan jenis file yang relevan mengubah hasil yang berisik dan sulit dibaca menjadi daftar terfokus yang menunjukkan persis apa yang berubah pada data yang Anda pedulikan.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Hasil perbandingan folder terfilter di RcloneView" class="img-large img-center" />

RcloneView juga menyediakan sinkronisasi dan perbandingan folder pada lisensi FREE, dengan perbandingan terfilter ditambahkan sebagai penyempurnaan tingkat PLUS bagi tim yang membutuhkannya.

## Menyiapkan Aturan Filter

Aturan filter mengikuti pola yang sama seperti yang digunakan di bagian lain RcloneView: mengecualikan berdasarkan ekstensi, jalur folder, atau nama folder yang tepat. Aturan seperti `.iso` menghapus setiap file ISO dari perbandingan di mana pun letaknya, `/.git/*` hanya mengecualikan file `.git` di tingkat root, `/.git/` menghapus folder `.git` di tingkat root secara khusus, dan `.git/` menghapus setiap folder `.git` betapa pun dalamnya folder tersebut bersarang. Gabungkan beberapa aturan untuk mempersempit perbandingan hingga tepat pada jenis file dan jalur yang layak ditinjau.

<img src="/support/images/en/blog/new-remote.png" alt="Mengonfigurasi aturan filter untuk perbandingan folder di RcloneView" class="img-large img-center" />

Ini adalah fitur lisensi PLUS — Perbandingan Folder dasar yang tidak difilter (menampilkan file hanya-kiri, hanya-kanan, sama, dan berbeda) tersedia di setiap tingkat lisensi, dan pemfilteran dibangun di atas mesin perbandingan yang sama.

## Skenario Pemfilteran Praktis

Tim pengembangan yang membandingkan folder proyek dengan cadangan cloud biasanya mengecualikan `node_modules/`, `.git/`, dan direktori output build, karena hal-hal tersebut dapat dibuat ulang dan tidak seharusnya memengaruhi apakah cadangan sudah lengkap. Tim media yang mengarsipkan pustaka foto RAW sering mengecualikan file cache sidecar dan pratinjau thumbnail sehingga perbandingan berfokus pada aset gambar yang sebenarnya. Dan siapa pun yang mengaudit migrasi antara dua akun cloud dapat mengecualikan folder sementara atau scratch yang memang tidak pernah dimaksudkan untuk bertahan setelah perpindahan, sehingga menjaga daftar hanya-kiri dan hanya-kanan terbatas pada file yang benar-benar memerlukan perhatian.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Meninjau hasil perbandingan terfilter sebelum bertindak atas perbedaan" class="img-large img-center" />

Setelah perbandingan terfilter selesai, tindakan yang sama berlaku seperti Perbandingan Folder lainnya: salin file hanya-kiri ke sisi kanan, tinjau file hanya-kanan sebelum menghapusnya, dan perbarui apa pun yang ditandai sebagai berbeda — hanya saja tanpa gangguan dari file yang sengaja dikecualikan.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Jalankan **Compare** dari tab Home dan pilih dua folder Anda.
3. Buka pengaturan filter dan tambahkan aturan pengecualian untuk nama folder dan jenis file yang ingin Anda kesampingkan.
4. Jalankan perbandingan dan tinjau daftar hasil yang dibatasi pada hal-hal yang benar-benar penting.

Perbandingan terfilter mengubah tumpukan gangguan menjadi daftar singkat yang dapat ditindaklanjuti — persis seperti yang Anda butuhkan sebelum memutuskan apa yang akan disalin, diperbarui, atau dibiarkan saja.

---

**Panduan Terkait:**

- [Pembahasan Mendalam Perbandingan Folder — Deteksi Setiap Perbedaan Antara Lokasi Penyimpanan Cloud](https://rcloneview.com/support/blog/folder-comparison-guide-detect-differences-rcloneview)
- [Aturan Filter Rclone Dijelaskan — Pola Sertakan dan Kecualikan dengan RcloneView](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)
- [Aturan Filter untuk Sinkronisasi Selektif — Panduan RcloneView](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)

<CloudSupportGrid />
