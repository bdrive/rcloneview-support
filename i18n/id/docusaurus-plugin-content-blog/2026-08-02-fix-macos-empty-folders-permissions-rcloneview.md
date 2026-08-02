---
slug: fix-macos-empty-folders-permissions-rcloneview
title: "Memperbaiki Folder Desktop dan Dokumen Kosong di macOS — Perbaikan Izin dengan RcloneView"
authors:
  - robin
description: "Perbaiki masalah RcloneView yang menampilkan folder Desktop, Dokumen, atau Unduhan kosong di macOS. Berikan izin privasi yang tepat dan pulihkan akses file secara penuh."
keywords:
  - perbaikan folder kosong macOS
  - izin RcloneView macOS
  - folder Desktop kosong macOS
  - folder Dokumen kosong macOS
  - Akses Disk Penuh macOS
  - Privasi Keamanan Berkas dan Folder
  - izin sinkronisasi cloud macOS
  - pemecahan masalah RcloneView
  - akses berkas ditolak macOS
  - perbaiki RcloneView macOS
tags:
  - RcloneView
  - troubleshooting
  - tips
  - macos
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Memperbaiki Folder Desktop dan Dokumen Kosong di macOS — Perbaikan Izin dengan RcloneView

> Jika RcloneView menampilkan folder Desktop, Dokumen, atau Unduhan di Mac Anda sebagai kosong, hal ini hampir selalu disebabkan oleh izin privasi macOS yang belum diberikan — bukan masalah sinkronisasi.

Sejak Catalina, macOS mengunci folder Desktop, Dokumen, dan Unduhan di balik izin Privasi & Keamanan, dan setiap aplikasi yang ingin membacanya — termasuk RcloneView saat menelusuri folder lokal sebagai sumber sinkronisasi — harus disetujui secara eksplisit. Pengguna yang menyiapkan pekerjaan cadangan lokal-ke-cloud pertama mereka sering mengalami ini: pohon folder dimuat, tetapi daftar berkas tetap kosong meskipun berkas jelas ada di disk. RcloneView terhubung dan sinkron dengan 90+ penyedia cloud, tetapi masalah khusus ini sepenuhnya ada di sisi macOS, dan merupakan perbaikan dua menit.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Folder Terlihat Kosong

macOS memperlakukan Desktop, Dokumen, dan Unduhan sebagai lokasi yang dilindungi. Aplikasi menerima prompt izin saat pertama kali mencoba membaca salah satunya, dan jika prompt itu ditutup atau ditolak — yang mudah terjadi secara tidak sengaja selama pengaturan awal — aplikasi diam-diam menerima daftar kosong alih-alih pesan kesalahan. Panel Explorer RcloneView akan menampilkan folder itu sendiri, bahkan jumlah berkas yang benar dalam beberapa kasus, tetapi daftar berkas yang mendasarinya tetap kosong karena OS menahan konten di lapisan sistem berkas.

Ini terpisah dari masalah remote cloud apa pun. Jika remote Google Drive atau Dropbox Anda juga terlihat kosong, itu adalah masalah yang berbeda — perbaikan ini secara khusus berlaku untuk folder macOS lokal yang digunakan sebagai sumber atau tujuan sinkronisasi.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView folder view affected by macOS privacy permissions" class="img-large img-center" />

## Memberikan Izin yang Tepat

Buka Pengaturan Sistem > Privasi & Keamanan > Berkas dan Folder, temukan RcloneView dalam daftar, dan aktifkan sakelar untuk Folder Desktop, Folder Dokumen, dan Folder Unduhan satu per satu. Jika RcloneView belum muncul dalam daftar, picu prompt izin dengan menelusuri ke salah satu folder tersebut di aplikasi terlebih dahulu — macOS hanya mencantumkan aplikasi yang telah mencoba mengakses.

Untuk masalah yang terus berlanjut, atau jika Anda menyinkronkan dari lokasi di luar tiga folder yang dilindungi (drive eksternal, berbagi jaringan), memberikan Akses Disk Penuh di panel Privasi & Keamanan yang sama adalah perbaikan yang lebih menyeluruh. Ini mencakup Desktop, Dokumen, Unduhan, dan lokasi lain mana pun yang mungkin dibatasi OS.

<img src="/support/images/en/blog/new-remote.png" alt="Granting macOS Files and Folders permission to RcloneView" class="img-large img-center" />

RcloneView harus dimulai ulang sepenuhnya — bukan hanya menutup jendela — setelah mengubah izin ini. macOS hanya mengevaluasi ulang akses berkas aplikasi saat diluncurkan, jadi keluar sepenuhnya lalu membuka kembali diperlukan sebelum konten folder muncul dengan benar.

## Memverifikasi Perbaikan dan Membangun Sinkronisasi Anda

Setelah dimulai ulang, telusuri kembali ke folder yang sebelumnya kosong — jumlah berkas dan folder sekarang seharusnya muncul normal di ringkasan footer. Sebelum menjalankan pekerjaan sinkronisasi yang sesungguhnya, gunakan Folder Compare terhadap tujuan cloud yang Anda maksud untuk memastikan RcloneView sekarang dapat melihat semua yang seharusnya terlihat di sisi lokal, menangkap celah akses yang tersisa sebelum berubah menjadi cadangan yang tidak lengkap.

Setelah izin dikonfirmasi berfungsi, bangun pekerjaan sinkronisasi Anda seperti biasa: folder lokal sebagai sumber, remote cloud sebagai tujuan, dengan Dry Run diaktifkan terlebih dahulu untuk melihat pratinjau persis apa yang akan ditransfer.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Building a local-to-cloud sync job after fixing macOS permissions" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka Pengaturan Sistem > Privasi & Keamanan > Berkas dan Folder.
3. Aktifkan akses Desktop, Dokumen, dan Unduhan untuk RcloneView, atau berikan Akses Disk Penuh.
4. Keluar sepenuhnya lalu jalankan kembali RcloneView, lalu verifikasi bahwa konten folder dimuat dengan benar.

Model izin ini ada untuk melindungi data pengguna di macOS, dan setelah diberikan sekali, RcloneView mempertahankan akses penuh dan tanpa gangguan ke berkas lokal Anda untuk setiap pekerjaan sinkronisasi berikutnya.

---

**Panduan Terkait:**

- [Memperbaiki Kesalahan "Terlalu Banyak Berkas Terbuka" macOS dengan RcloneView](https://rcloneview.com/support/blog/fix-macos-too-many-open-files-rcloneview)
- [RcloneView di macOS Sequoia — Sinkronisasi Penyimpanan Cloud](https://rcloneview.com/support/blog/rcloneview-macos-sequoia-cloud-sync)
- [Memperbaiki Berkas yang Hilang Setelah Transfer pada Sinkronisasi Cloud dengan RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)

<CloudSupportGrid />
