---
slug: dry-run-preview-sync-before-transfer-rcloneview
title: "Pratinjau Perubahan Sinkronisasi dengan Dry Run Sebelum Transfer di RcloneView"
authors:
  - tayson
description: "Gunakan dry run di RcloneView untuk melihat pratinjau perubahan sinkronisasi sebelum mentransfer file. Tangkap penghapusan yang tidak terduga dan ketidakcocokan filter sebelum menyebabkan kehilangan data."
keywords:
  - rcloneview
  - dry run
  - pratinjau sinkronisasi
  - rclone dry run
  - sync preview
  - sinkronisasi cloud aman
  - mencegah kehilangan data
  - simulasi sinkronisasi
  - pratinjau transfer cloud
  - bandingkan sebelum sinkronisasi
tags:
  - feature
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Pratinjau Perubahan Sinkronisasi dengan Dry Run Sebelum Transfer di RcloneView

> Satu kesalahan konfigurasi sinkronisasi dapat menghapus ribuan file dalam hitungan detik. **RcloneView** memungkinkan Anda melihat pratinjau setiap perubahan dengan dry run sebelum satu byte pun ditransfer, memberi Anda kepercayaan penuh sebelum menjalankan sinkronisasi.

Operasi sync adalah salah satu fitur paling kuat di rclone. Fitur ini membuat tujuan sesuai dengan sumber, mentransfer file baru, memperbarui file yang berubah, dan menghapus file yang sudah tidak ada di sumber. Bagian terakhir itu, penghapusan, adalah yang membuat sync menjadi kuat sekaligus berbahaya.

Dry run mensimulasikan seluruh operasi sinkronisasi tanpa benar-benar memindahkan, menyalin, atau menghapus apa pun. Ini menunjukkan kepada Anda persis apa yang akan terjadi: file mana yang akan ditransfer, mana yang akan dihapus, dan mana yang akan dilewati. Anda meninjau hasilnya, memastikan sesuai dengan ekspektasi Anda, dan baru kemudian menjalankan sinkronisasi yang sesungguhnya.

RcloneView mengintegrasikan dry run langsung ke dalam alur kerja sinkronisasinya, sehingga mudah untuk melihat pratinjau perubahan melalui GUI sebelum menjalankannya. Baik Anda menyinkronkan dua remote cloud atau mencadangkan file lokal ke cloud, dry run harus menjadi langkah pertama Anda setiap saat.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Apa yang Dilakukan Dry Run

Saat Anda mengaktifkan mode dry run, rclone melakukan semua analisis yang sama seperti pada sinkronisasi sesungguhnya: memindai sumber dan tujuan, membandingkan file berdasarkan ukuran, timestamp, atau checksum, dan menyusun daftar operasi yang akan dilakukan. Satu-satunya perbedaan adalah tidak satu pun dari operasi tersebut benar-benar dieksekusi.

Output dry run memberi tahu Anda:
- **File yang akan ditransfer**: File baru atau yang dimodifikasi yang akan disalin dari sumber ke tujuan.
- **File yang akan dihapus**: File di tujuan yang tidak ada di sumber dan akan dihapus.
- **File yang akan dilewati**: File yang identik di kedua sisi dan tidak memerlukan tindakan apa pun.
- **Total volume data**: Berapa banyak data yang akan ditransfer, membantu Anda memperkirakan waktu dan kebutuhan bandwidth.

Simulasi ini bersifat read-only. Tidak ada file yang dipindahkan, disalin, atau dihapus. Sumber dan tujuan Anda tetap sepenuhnya tidak tersentuh.

## Mengapa Dry Run Penting untuk Operasi yang Destruktif

Perintah `sync` pada dasarnya bersifat destruktif karena menghapus file di tujuan yang tidak ada di sumber. Ini memang disengaja, itulah yang membedakan sync dari copy. Namun ini juga berarti kesalahan dapat berakibat fatal:

- **Arah sinkronisasi yang salah**: Jika Anda tidak sengaja menukar sumber dan tujuan, sinkronisasi akan menghapus file sumber Anda agar sesuai dengan tujuan yang kosong atau usang.
- **Path yang salah**: Menyinkronkan ke direktori yang salah dapat menimpa file yang tidak terkait atau memicu penghapusan massal.
- **Kesalahan konfigurasi filter**: Jika filter include/exclude Anda salah, file yang ingin Anda pertahankan mungkin dikecualikan dari pemindaian sumber dan akibatnya dihapus di tujuan.
- **Autentikasi kedaluwarsa**: Jika remote sumber memiliki kredensial yang kedaluwarsa, remote tersebut mungkin tampak kosong, menyebabkan sinkronisasi menghapus semua yang ada di tujuan.

Dry run menangkap semua masalah ini sebelum kerusakan terjadi. Beberapa detik yang dibutuhkan untuk meninjau output dapat menghemat berjam-jam kerja pemulihan.

## Cara Mengaktifkan Dry Run di RcloneView

RcloneView menyediakan cara mudah untuk menjalankan pratinjau sinkronisasi:

1. Buka **Job Manager** dan pilih job sinkronisasi yang ingin Anda lihat pratinjaunya.
2. Tambahkan flag `--dry-run` di bagian **Custom Flags** pada konfigurasi job.
3. Jalankan job tersebut. RcloneView akan mensimulasikan sinkronisasi dan menampilkan hasilnya.
4. Tinjau output di transfer monitor untuk melihat apa yang akan terjadi.
5. Jika semuanya terlihat benar, hapus flag `--dry-run` dan jalankan job tersebut secara nyata.

Sebagai alternatif, Anda dapat menggunakan terminal bawaan untuk menjalankan perintah dry run secara langsung:
```
rclone sync source: dest: --dry-run
```

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

## Membaca Output Dry Run

Output dry run menggunakan format yang sama seperti sinkronisasi sesungguhnya, tetapi tidak ada operasi yang dieksekusi. Berikut yang perlu diperhatikan:

**File yang ditransfer** ditampilkan beserta path dan ukurannya. Verifikasi bahwa ini adalah file yang Anda perkirakan akan diperbarui atau ditambahkan. Jika Anda melihat file yang ditransfer padahal seharusnya sudah sinkron, ini mungkin menandakan ketidakcocokan timestamp atau perbedaan checksum yang layak diselidiki.

**File yang dihapus** adalah item paling kritis untuk ditinjau. Setiap file yang tercantum untuk dihapus akan dihapus secara permanen dari tujuan selama sinkronisasi sesungguhnya. Jika Anda melihat file di sini yang ingin Anda pertahankan, path sumber, filter, atau arah sinkronisasi Anda mungkin perlu disesuaikan.

**File yang dilewati** memastikan bahwa file yang sudah sinkron teridentifikasi dengan benar. Output dry run yang sehat seharusnya menampilkan sebagian besar file yang dilewati dengan sedikit transfer dan penghapusan.

**Statistik ringkasan** di bagian akhir memberi tahu Anda jumlah total transfer, penghapusan, dan volume data secara keseluruhan. Bandingkan angka-angka ini dengan ekspektasi Anda. Jika Anda menyinkronkan folder di mana Anda hanya mengubah satu file, tetapi dry run menunjukkan ribuan transfer, ada sesuatu yang salah konfigurasi.

## Kejutan Umum yang Ditangkap oleh Dry Run

Berikut adalah skenario nyata di mana dry run telah mencegah kehilangan data:

**Penghapusan massal yang tidak terduga**: Anda menyiapkan sinkronisasi dari Google Drive ke S3, tetapi token Google Drive telah kedaluwarsa. Rclone melihat sumber yang kosong dan berencana menghapus semua yang ada di tujuan. Dry run menunjukkan ribuan penghapusan dan nol transfer, langsung menandai masalah tersebut.

**Ketidakcocokan filter**: Anda menambahkan filter exclude untuk file `*.tmp`, tetapi secara tidak sengaja mengetik `*.tmpl`, yang cocok dengan file template Terraform Anda. Dry run menunjukkan file template tersebut akan dihapus dari tujuan, mengingatkan Anda akan kesalahan ketik tersebut.

**Direktori dasar yang salah**: Anda bermaksud menyinkronkan `remote:projects/2026`, tetapi mengetik `remote:projects`. Dry run mengungkapkan bahwa file dari semua tahun proyek akan disinkronkan, berpotensi menimpa file di subdirektori yang tidak Anda maksudkan untuk disentuh.

**Masalah sensitivitas huruf besar/kecil**: Memindahkan file antara remote yang tidak peka huruf besar/kecil (seperti OneDrive) dan yang peka huruf besar/kecil (seperti S3) dapat menciptakan file duplikat. Dry run menunjukkan transfer yang tidak terduga ini sehingga Anda dapat menangani konflik huruf besar/kecil sebelum berlipat ganda.

## Menjadikan Dry Run Bagian dari Alur Kerja Anda

Untuk keamanan maksimal, jadikan dry run bagian dari prosedur operasi standar Anda:

**Untuk sinkronisasi manual**: Selalu jalankan dry run terlebih dahulu sebelum menjalankan operasi sinkronisasi apa pun. Tinjau outputnya, lalu hapus flag tersebut dan jalankan sinkronisasi yang sesungguhnya. Tambahan satu menit sepadan dengan ketenangan pikiran.

**Untuk job terjadwal baru**: Saat membuat sinkronisasi terjadwal baru, jalankan secara manual dengan `--dry-run` terlebih dahulu. Aktifkan jadwal hanya setelah Anda memverifikasi bahwa output dry run sesuai dengan ekspektasi Anda.

**Setelah perubahan konfigurasi**: Setiap kali Anda mengubah sumber, tujuan, filter, atau flag pada suatu job, jalankan dry run sebelum eksekusi berikutnya. Perubahan konfigurasi dapat memiliki efek samping tak terduga yang akan diungkap oleh dry run.

**Secara berkala untuk job yang sudah ada**: Bahkan job terjadwal yang stabil dan berjalan lama pun akan mendapat manfaat dari tinjauan dry run sesekali. Perubahan pada data sumber, konfigurasi remote, atau perilaku penyedia dapat mengubah perilaku sinkronisasi seiring waktu.

## Menggabungkan Dry Run dengan Fitur Compare

Fitur perbandingan folder RcloneView melengkapi dry run dengan menyediakan tampilan berdampingan secara visual dari konten sumber dan tujuan. Digunakan bersama, keduanya memberi Anda visibilitas pra-sinkronisasi yang menyeluruh:

1. Gunakan fitur **Compare** untuk memeriksa secara visual perbedaan antara sumber dan tujuan.
2. Jalankan **dry run** untuk melihat persis apa yang akan dilakukan operasi sinkronisasi terhadap perbedaan tersebut.
3. Verifikasi bahwa operasi yang direncanakan selaras dengan apa yang Anda lihat di perbandingan.
4. Jalankan sinkronisasi dengan penuh keyakinan.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

Fitur compare menunjukkan kepada Anda keadaan saat ini, sementara dry run menunjukkan tindakan yang direncanakan. Bersama-sama, keduanya menghilangkan tebak-tebakan dan memastikan Anda memahami baik apa yang berbeda maupun apa yang akan dilakukan terhadapnya.

## Tingkat Lanjut: Menggunakan --dry-run dengan Flag Lainnya

Dry run bekerja dengan semua flag rclone lainnya, sehingga Anda dapat mensimulasikan konfigurasi produksi Anda yang sebenarnya:

- `--dry-run --backup-dir remote:backup` menampilkan pratinjau baik sinkronisasi maupun di mana salinan cadangan akan disimpan.
- `--dry-run --filter-from filters.txt` memverifikasi bahwa aturan filter Anda menghasilkan hasil yang diharapkan.
- `--dry-run --max-age 24h` mensimulasikan sinkronisasi hanya untuk file yang dimodifikasi dalam 24 jam terakhir.
- `--dry-run -v` menambahkan output verbose untuk detail lebih lanjut tentang setiap operasi yang direncanakan.

Komposabilitas ini berarti Anda dapat menguji konfigurasi apa pun dengan aman sebelum menerapkannya ke produksi.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buat job sinkronisasi dengan sumber dan tujuan yang Anda inginkan.
3. Tambahkan `--dry-run` ke custom flags dan jalankan job untuk melihat pratinjau perubahan.
4. Tinjau output dengan cermat, lalu hapus flag tersebut dan jalankan sinkronisasi yang sesungguhnya.

Dry run tidak memerlukan biaya apa pun, hanya membutuhkan beberapa detik, dan dapat mencegah kehilangan data yang bencana. Jadikan ini langkah pertama dari setiap operasi sinkronisasi, dan Anda tidak akan pernah terkejut dengan apa yang dilakukan sinkronisasi terhadap file Anda.

---

**Panduan Terkait:**

- [Sinkronkan Penyimpanan Remote Secara Instan](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)
- [Bandingkan konten folder](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Buat Job Sinkronisasi](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)

<CloudSupportGrid />
