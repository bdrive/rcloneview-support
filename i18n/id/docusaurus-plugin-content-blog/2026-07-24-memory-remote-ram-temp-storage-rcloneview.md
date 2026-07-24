---
slug: memory-remote-ram-temp-storage-rcloneview
title: "Remote Memory — Penyimpanan Sementara Berbasis RAM di RcloneView"
authors:
  - casey
description: "Pelajari bagaimana virtual remote Memory milik RcloneView menggunakan penyimpanan sementara berbasis RAM untuk pengujian cepat, staging, dan alur kerja cloud sekali pakai."
keywords:
  - memory remote rclone
  - rcloneview memory remote
  - penyimpanan cloud berbasis RAM
  - virtual remote rcloneview
  - penyimpanan cloud sementara
  - remote pengujian rclone
  - transfer cloud staging
  - rcloneview virtual remotes
  - penyimpanan sekali pakai rclone
  - penyimpanan file dalam memori
tags:
  - RcloneView
  - feature
  - guide
  - tips
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Remote Memory — Penyimpanan Sementara Berbasis RAM di RcloneView

> Butuh ruang kerja sementara yang langsung hilang begitu Anda menutupnya? Virtual remote **Memory** milik RcloneView memberi Anda penyimpanan berbasis RAM untuk menguji job sinkronisasi dan melakukan staging transfer tanpa menyentuh disk.

Di antara virtual remote milik RcloneView — Alias, Crypt, Cache, Chunker, Combine, Union, Hasher, dan Compress — Memory tampil berbeda: ia menyimpan data sepenuhnya di RAM selama sesi berlangsung, tanpa apa pun yang ditulis ke disk dan tanpa apa pun yang tersisa saat keluar. Sifat sementara dan tanpa jejak inilah yang membuatnya berguna untuk sekumpulan alur kerja tertentu, bukan untuk penyimpanan sehari-hari.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Kegunaan Remote Memory

Berbeda dengan Alias (pintasan ke path yang sudah ada) atau Crypt (enkripsi untuk remote yang sudah ada), Memory adalah backend penyimpanan mandiri yang hanya ada di dalam memori proses rclone yang sedang berjalan. Apa pun yang disalin ke dalamnya akan hilang begitu instans rclone bawaan dimulai ulang atau aplikasi ditutup. Sifat sementara dan tanpa jejak itulah yang membuatnya berguna untuk sekumpulan alur kerja tertentu, bukan untuk penyimpanan sehari-hari.

RcloneView me-mount DAN menyinkronkan 90+ penyedia dari satu jendela, di Windows, macOS, dan Linux — remote Memory hanyalah satu entri lagi dalam Remote Manager yang sama, dikonfigurasi dan digunakan dengan cara yang sama seperti koneksi cloud sungguhan.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a transfer job in RcloneView" class="img-large img-center" />

## Menguji Job Sinkronisasi dengan Aman

Sebelum mengarahkan job sinkronisasi baru ke penyimpanan cloud produksi, Anda dapat membuat remote Memory dan menjalankan job tersebut ke sana terlebih dahulu. Ini memastikan pemilihan sumber, aturan filter, dan struktur folder Anda berperilaku sesuai harapan tanpa membahayakan data sungguhan di sisi tujuan. Dikombinasikan dengan Dry Run, ini memberi Anda dua lapis keamanan: pratinjau simulasi, diikuti dengan salinan uji sungguhan yang tidak memakan biaya dan tidak meninggalkan jejak apa pun.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a test sync job in RcloneView" class="img-large img-center" />

## Staging Transfer Antar Penyedia

Saat memindahkan file antara dua penyedia cloud yang tidak melakukan transfer langsung secara efisien, remote Memory dapat berfungsi sebagai titik singgah sementara yang cepat untuk batch kecil — berguna saat memvalidasi operasi batch multi-langkah sebelum benar-benar dijadwalkan. Karena Memory tidak memiliki overhead I/O disk, transfer staging kecil selesai dengan cepat, sehingga Anda dapat mengulangi urutan batch secara gesit.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Managing remotes in RcloneView's Mount Manager" class="img-large img-center" />

## Menyiapkan Remote Memory

Menambahkan remote Memory mengikuti alur New Remote yang sama seperti koneksi lain mana pun di RcloneView.

**Cara menyiapkannya:**

1. Buka tab Remote dan klik **New Remote**.
2. Pilih **Memory** dari daftar jenis virtual remote.
3. Simpan — tidak diperlukan kredensial atau konfigurasi karena penyimpanan sepenuhnya lokal pada proses rclone yang sedang berjalan.
4. Gunakan sebagai sumber atau tujuan dalam job Sync, Copy, atau batch apa pun seperti remote biasa.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files into a remote in RcloneView" class="img-large img-center" />

## Kapan Tidak Menggunakannya

Penyimpanan Memory bukan tujuan backup dan tidak boleh menyimpan apa pun yang perlu Anda pertahankan — memulai ulang rclone atau aplikasi akan menghapusnya sepenuhnya. Penyimpanan ini juga dibatasi oleh RAM sistem yang tersedia, sehingga hanya praktis untuk batch uji kecil, bukan transfer skala besar.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan remote Memory dari bagian Virtual Remotes pada New Remote.
3. Arahkan job sinkronisasi uji ke sana sebelum menjalankan job yang sama ke tujuan sungguhan.
4. Gunakan Job History untuk memastikan pengujian berjalan sesuai harapan, lalu ganti dengan remote cloud sungguhan Anda.

Remote sekali pakai berbasis RAM adalah tambahan kecil, tetapi menutup kesenjangan nyata antara "simulasikan dengan Dry Run" dan "terapkan ke produksi" saat Anda membangun alur kerja baru.

---

**Panduan Terkait:**

- [Virtual Remotes — Combine, Union, dan Alias di RcloneView](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [Remote Alias — Path Pintasan di RcloneView](https://rcloneview.com/support/blog/alias-remote-shortcut-paths-rcloneview)
- [Mengenkripsi Backup Cloud — Panduan Remote Crypt dengan RcloneView](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
