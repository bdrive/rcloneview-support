---
slug: sync-yandex-disk-to-onedrive-rcloneview
title: "Sinkronisasi Yandex Disk ke OneDrive — Pencadangan Cloud dengan RcloneView"
authors:
  - steve
description: "Sinkronkan Yandex Disk ke OneDrive dengan RcloneView, mencerminkan file antara dua penyedia sesuai jadwal dari satu GUI lintas platform."
keywords:
  - sync yandex disk to onedrive
  - yandex disk onedrive backup
  - yandex disk to microsoft onedrive
  - rcloneview yandex disk
  - cloud to cloud sync
  - yandex disk migration
  - onedrive backup destination
  - cross-cloud file sync
tags:
  - RcloneView
  - yandex-disk
  - onedrive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Sinkronisasi Yandex Disk ke OneDrive — Pencadangan Cloud dengan RcloneView

> Menyimpan salinan kerja di OneDrive sementara Yandex Disk tetap menjadi sumber tidak memerlukan ekspor dan unggah ulang apa pun — RcloneView menghubungkan keduanya sebagai remote dan mensinkronkan folder secara langsung, cloud ke cloud.

Yandex Disk merupakan pilihan penyimpanan utama yang umum bagi pengguna dan tim yang bekerja di Rusia dan pasar sekitarnya, tetapi kolaborator atau alat downstream sering kali mengharapkan file berada di OneDrive — untuk integrasi Office, serah terima SharePoint, atau sekadar karena di sanalah lokasi sisa organisasi berada. Memindahkan file di antara keduanya biasanya berarti mengunduh semuanya secara lokal terlebih dahulu lalu mengunggahnya kembali, yang menggandakan waktu transfer dan menghabiskan ruang disk lokal secara tidak perlu. RcloneView terhubung ke Yandex Disk dan OneDrive sebagai remote dalam jendela yang sama dan mentransfer langsung di antara keduanya, sepenuhnya melewati perjalanan bolak-balik lokal.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan Kedua Remote

Yandex Disk terhubung ke RcloneView melalui login browser OAuth — tidak diperlukan API key terpisah atau entri token manual, alur yang sama seperti yang digunakan untuk Google Drive atau Dropbox. OneDrive terhubung dengan cara yang sama. Setelah keduanya terautentikasi, buka dua panel Explorer secara berdampingan, satu mengarah ke root Yandex Disk dan yang lain ke folder OneDrive target, sehingga Anda dapat memastikan struktur folder di kedua sisi sebelum mengonfigurasi tugas transfer.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Yandex Disk and OneDrive as remotes in RcloneView" class="img-large img-center" />

RcloneView juga mensinkronkan dan membandingkan folder pada lisensi FREE — tidak diperlukan tingkatan berbayar terpisah hanya untuk memindahkan file antara dua penyedia cloud, yang penting untuk migrasi satu kali di mana Anda tidak ingin berkomitmen pada langganan hanya untuk satu transfer.

## Mengonfigurasi Tugas Sinkronisasi

Langkah 1 pada wizard sinkronisasi adalah tempat transfer didefinisikan: pilih folder Yandex Disk sebagai sumber, folder OneDrive sebagai tujuan, dan pilih "Modifying destination only" untuk cerminan satu arah yang menjaga OneDrive tetap sesuai dengan Yandex Disk tanpa menyentuh aslinya. Sebelum menjalankannya secara nyata, gunakan Dry Run untuk melihat pratinjau file mana saja yang akan disalin — ini menangkap masalah penamaan atau folder yang tak terduga besarnya sebelum data benar-benar berpindah, yang layak dilakukan mengingat betapa berbedanya kedua penyedia dapat melaporkan metadata file.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job from Yandex Disk to OneDrive in RcloneView" class="img-large img-center" />

Pengaturan filtering di Langkah 3 memungkinkan Anda mengecualikan jenis file yang tidak perlu ikut dipindahkan — file media besar atau folder yang sudah tersinkronisasi dapat dilewati menggunakan ukuran file maksimum atau aturan pengecualian path khusus, menjaga salinan OneDrive tetap fokus pada apa yang benar-benar dibutuhkan kolaborator.

## Memantau Transfer

Setelah tugas berjalan, tab Transferring pada Info View di bagian bawah menampilkan progres langsung: persentase selesai, kecepatan transfer saat ini, dan jumlah file, sehingga Anda dapat memastikan arsip Yandex Disk yang besar benar-benar sedang berpindah, bukan macet. Setelah tugas selesai, Job History mencatat total ukuran yang ditransfer, durasi, dan status penyelesaian, memberi Anda catatan yang bisa dirujuk jika kolaborator kelak menanyakan apakah sekumpulan file tertentu sudah berhasil dipindahkan.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Viewing Job History after syncing Yandex Disk to OneDrive in RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Hubungkan Yandex Disk dan OneDrive sebagai remote melalui login OAuth.
3. Konfigurasikan tugas sinkronisasi satu arah dari Yandex Disk ke OneDrive dan jalankan Dry Run terlebih dahulu.
4. Jalankan sinkronisasi, lalu periksa Job History untuk memastikan transfer selesai sesuai harapan.

Pencadangan lintas cloud seharusnya tidak memerlukan jalan memutar melalui disk lokal — dengan kedua penyedia aktif dalam jendela yang sama, file-file tersebut cukup berpindah ke tempat yang seharusnya.

---

**Panduan Terkait:**

- [Mengelola Penyimpanan Yandex Disk — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-yandex-disk-cloud-sync-backup-rcloneview)
- [Mengelola Penyimpanan OneDrive — Sinkronisasi dan Pencadangan File dengan RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Migrasi Yandex Disk ke Dropbox dengan RcloneView](https://rcloneview.com/support/blog/migrate-yandex-disk-to-dropbox-rcloneview)

<CloudSupportGrid />
