---
slug: copy-full-path-remote-paths-rcloneview
title: "Salin Path Lengkap — Menyalin Path Remote dengan Cepat di RcloneView"
authors:
  - robin
description: "Gunakan perintah Salin Path Lengkap RcloneView untuk langsung mendapatkan string remote:path untuk perintah rclone CLI, skrip, dan konfigurasi job."
keywords:
  - RcloneView salin path lengkap
  - path remote rclone
  - salin path dengan remote
  - sintaks path rclone CLI
  - bilah path breadcrumb
  - alur kerja terminal RcloneView
  - path scripting rclone
  - salin path remote cloud
tags:
  - RcloneView
  - feature
  - cli
  - tips
  - productivity
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Salin Path Lengkap — Menyalin Path Remote dengan Cepat di RcloneView

> Berhenti mengetik ulang nama remote dan path folder secara manual — klik kanan pada bilah breadcrumb dan salin string `remote:path` persis seperti yang diharapkan rclone.

Siapa pun yang menggabungkan GUI RcloneView dengan perintah rclone CLI tahu betul kerumitan ini: Anda menemukan folder secara visual, lalu harus menyusun ulang path-nya secara manual untuk merujuknya dalam skrip atau perintah terminal. Fitur Salin Path Lengkap di RcloneView menghilangkan langkah ini sepenuhnya dengan menghasilkan format persis `mygoogledrive:Meet recordings` yang digunakan rclone, siap ditempelkan langsung ke dalam perintah, filter job, atau skrip otomatisasi.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Lokasi Perintah Ini

Salin Path Lengkap terdapat pada menu klik kanan di Bilah Path Breadcrumb di bagian atas setiap panel Explorer, berdampingan dengan Potong, Salin, Tempel, dan Pilih Semua. Navigasikan ke folder mana pun — lokal atau cloud — klik kanan pada bilah path itu sendiri (bukan pada baris file), lalu pilih Salin Path Lengkap. RcloneView menuliskan nama remote dan path folder ke clipboard dengan sintaks `remote:path` yang sama seperti yang diharapkan oleh CLI rclone itu sendiri, file konfigurasi, dan panggilan RC API.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView breadcrumb path bar with right-click context menu open" class="img-large img-center" />

Hal ini penting karena rclone sangat ketat terhadap sintaks tersebut: tanda titik dua memisahkan nama remote dari path, dan kesalahan kecil (garis miring yang tidak perlu, titik dua yang hilang) menjadi salah satu penyebab umum error "directory not found" saat orang mengetik path secara manual dari ingatan.

## Mengapa Ini Lebih Baik daripada Mengetik Path Secara Manual

Mengetik path secara manual menjadi tidak praktis begitu nama folder mengandung karakter Unicode, spasi, atau struktur bersarang yang dalam — justru jenis path yang paling mudah salah ketik dan sulit di-debug. Salin Path Lengkap menghindari semua itu dengan menyalin string literal yang sudah diresolusi RcloneView saat merender struktur folder, sehingga apa yang Anda tempel dijamin sesuai dengan isi remote yang sebenarnya. RcloneView juga mendukung sinkronisasi dan perbandingan folder — dengan lisensi FREE — dan Salin Path Lengkap bekerja dengan cara yang sama di ketiga fitur ini: Explorer, konfigurasi job Sync, dan Folder Compare.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Selecting a folder path for comparison in RcloneView" class="img-large img-center" />

Fitur ini sangat berguna saat menyiapkan folder sumber atau tujuan pada job Sync, atau saat menulis aturan filter khusus yang membutuhkan prefiks path yang tepat — menempelkan path yang disalin menghindari kesalahan ketik kecil yang secara diam-diam mengecualikan file yang salah.

## Memadukannya dengan Terminal Bawaan

Salin Path Lengkap paling bertenaga bila dipadukan dengan Terminal Rclone di Info View bagian bawah. Salin path dari Explorer, beralih ke tab Terminal, dan tempelkan langsung ke perintah seperti `rclone lsf` atau `rclone about` tanpa keluar dari aplikasi atau mengetik ulang apa pun. Ini menjadikan RcloneView sebagai alat alur kerja hybrid: jelajahi secara visual untuk menemukan folder yang Anda butuhkan, lalu langsung beralih ke kendali level CLI untuk hal-hal yang belum ditawarkan oleh GUI.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an rclone command referencing a copied remote path" class="img-large img-center" />

Bagi siapa pun yang membuat skrip untuk tugas pemeliharaan rutin — pengecekan `rclone size`, atau `rclone check` manual antara dua folder — pintasan ini menghilangkan langkah yang paling rawan kesalahan saat menulis perintah tersebut secara manual.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html) jika belum melakukannya.
2. Buka remote mana pun di Explorer dan navigasikan ke folder yang ingin Anda rujuk.
3. Klik kanan Bilah Path Breadcrumb dan pilih Salin Path Lengkap.
4. Tempelkan string `remote:path` yang disalin ke dalam job Sync, aturan filter, atau Terminal Rclone bawaan.

Setelah ini menjadi kebiasaan, mengetik path remote secara manual akan terasa seperti cara kerja yang lambat.

---

**Panduan Terkait:**

- [Terminal RcloneView: Gunakan Kekuatan Penuh rclone CLI di Dalam GUI](https://rcloneview.com/support/blog/rcloneview-terminal-rclone-cli-inside-gui)
- [Pintasan Keyboard dan Tips Produktivitas RcloneView](https://rcloneview.com/support/blog/keyboard-shortcuts-productivity-rcloneview)
- [10 Tips Explorer Dua Panel yang Akan Mempercepat Manajemen File Cloud Anda di RcloneView](https://rcloneview.com/support/blog/two-pane-explorer-productivity-tips-rcloneview)

<CloudSupportGrid />
