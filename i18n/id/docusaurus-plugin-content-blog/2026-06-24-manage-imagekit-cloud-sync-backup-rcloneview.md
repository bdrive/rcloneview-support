---
slug: manage-imagekit-cloud-sync-backup-rcloneview
title: "Kelola Penyimpanan ImageKit — Sinkronisasi dan Cadangkan File dengan RcloneView"
authors:
  - jay
description: "Pelajari cara menghubungkan ImageKit ke RcloneView dan melakukan sinkronisasi, pencadangan, atau mengatur pustaka aset media Anda di berbagai platform dengan GUI visual."
keywords:
  - ImageKit cloud storage
  - ImageKit sync backup
  - RcloneView ImageKit
  - kelola file ImageKit
  - ImageKit rclone GUI
  - cadangkan aset ImageKit
  - manajemen media cloud
  - backup penyimpanan CDN gambar
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - guide
  - dam
  - media
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Penyimpanan ImageKit — Sinkronisasi dan Cadangkan File dengan RcloneView

> Hubungkan ImageKit ke RcloneView untuk menelusuri, menyinkronkan, dan mencadangkan aset media Anda menggunakan GUI visual — tanpa perlu command line.

Tim yang mengandalkan ImageKit untuk pengiriman gambar dan video sering kali mengumpulkan ribuan aset asli di pustaka media platform tersebut. Meskipun dashboard web ImageKit menangani unggahan satu per satu dengan baik, memindahkan media dalam jumlah besar — atau menjaga pencadangan di luar lokasi — jauh lebih praktis dengan alat sinkronisasi khusus. RcloneView terhubung langsung ke ImageKit melalui backend rclone, memberi Anda penjelajah file dua panel, pekerjaan sinkronisasi sekali klik, dan riwayat pekerjaan, semuanya dari satu jendela di Windows, macOS, atau Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan ImageKit sebagai Remote di RcloneView

Menambahkan ImageKit ke RcloneView hanya membutuhkan beberapa langkah melalui wizard pengaturan remote terpandu. Buka tab **Remote** dan klik **New Remote**, lalu cari ImageKit dalam daftar penyedia. Masukkan kredensial Anda saat diminta — tersedia di pengaturan developer ImageKit Anda — dan simpan remote tersebut. Setelah dikonfigurasi, pustaka media ImageKit Anda akan muncul sebagai panel yang dapat dijelajahi di file explorer, berdampingan dengan remote lain yang telah Anda hubungkan.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new ImageKit remote in RcloneView" class="img-large img-center" />

Berbeda dengan alat yang hanya mendukung mount, RcloneView juga memungkinkan Anda menyinkronkan dan membandingkan folder di seluruh remote yang terhubung — termasuk ImageKit — pada lisensi FREE. Misalnya, agensi digital yang mengelola ratusan aset gambar klien dapat mencerminkan pustaka ImageKit mereka ke NAS lokal atau bucket cloud terpisah dengan menjalankan pekerjaan sinkronisasi dari panel ImageKit, menjaga arsip yang terverifikasi tanpa menyentuh command line.

## Menelusuri dan Mentransfer File Media

Setelah terhubung, struktur folder ImageKit akan muncul di penjelajah dua panel. Anda dapat menavigasi direktori, memilih beberapa file menggunakan Ctrl+Click atau Shift+Click, dan menyeret file antara ImageKit dan remote lain yang terhubung — drive lokal, bucket S3, atau layanan cloud lainnya. Klik kanan pada file mana pun untuk mengunduhnya secara lokal, atau seret item dari file manager Anda ke RcloneView untuk mengunggahnya langsung ke ImageKit.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to back up ImageKit media assets" class="img-large img-center" />

## Menyiapkan Pencadangan Otomatis dari ImageKit

Bagi tim yang secara rutin mempublikasikan aset visual baru, pekerjaan sinkronisasi memastikan setiap file memiliki pencadangan terkini. Di **Job Manager**, buat pekerjaan Sync baru dengan ImageKit sebagai sumber dan tujuan pencadangan Anda — folder lokal, Backblaze B2, Amazon S3, atau remote lain yang terhubung. Pada langkah Advanced Settings, aktifkan **checksum verification** untuk memastikan setiap file yang ditransfer benar dengan membandingkan hash konten, bukan hanya ukuran dan nama file.

Sebelum melakukan transfer penuh, gunakan **Dry Run** untuk melihat pratinjau file mana yang akan disalin atau dihapus. Ini sangat berguna setelah mengubah pengaturan filter atau menambahkan tujuan baru, karena menampilkan daftar file yang tepat tanpa membuat perubahan apa pun pada data Anda.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed ImageKit backup transfers" class="img-large img-center" />

**Job History** mencatat setiap transfer beserta waktu mulai, durasi, jumlah file, ukuran total, dan status penyelesaian, memberi Anda jejak audit yang jelas untuk operasi pencadangan media Anda dari waktu ke waktu.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Buka tab **Remote**, klik **New Remote**, lalu pilih ImageKit dari daftar penyedia.
3. Masukkan kredensial ImageKit Anda dan simpan remote tersebut.
4. Buat pekerjaan Sync di **Job Manager** dengan ImageKit sebagai sumber dan tujuan pencadangan Anda.

Dengan RcloneView, pustaka media ImageKit Anda menjadi bagian dari strategi pencadangan otomatis yang lebih luas tanpa menulis satu perintah pun.

---

**Panduan Terkait:**

- [Kelola Penyimpanan Cloudinary — Sinkronisasi dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-cloudinary-cloud-sync-backup-rcloneview)
- [Kelola Penyimpanan Google Photos — Sinkronisasi dan Cadangkan File dengan RcloneView](https://rcloneview.com/support/blog/manage-google-photos-cloud-sync-backup-rcloneview)
- [Panduan Transfer Cloud dengan Drag and Drop menggunakan RcloneView](https://rcloneview.com/support/blog/drag-drop-cloud-transfer-guide-rcloneview)

<CloudSupportGrid />
