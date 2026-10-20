---
slug: read-only-mount-protect-cloud-files-rcloneview
title: "Mount Hanya-Baca — Lindungi File Cloud dari Perubahan Tidak Disengaja dengan RcloneView"
authors:
  - casey
description: "Gunakan opsi mount Read only di RcloneView untuk menjelajahi penyimpanan cloud dari file explorer tanpa risiko pengeditan atau penghapusan yang tidak disengaja."
keywords:
  - mount hanya-baca
  - mount penyimpanan cloud hanya-baca
  - lindungi file cloud
  - mount RcloneView
  - rclone mount hanya-baca
  - cegah penghapusan di drive cloud
  - mount manager
  - drive virtual
tags:
  - RcloneView
  - feature
  - mount
  - cloud-storage
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mount Hanya-Baca — Lindungi File Cloud dari Perubahan Tidak Disengaja dengan RcloneView

> Mount sebuah remote sebagai drive lokal yang bisa dijelajahi dan disalin, tetapi tidak pernah bisa diubah.

Drive cloud yang di-mount berperilaku seperti disk lainnya, artinya penghapusan yang tidak disengaja, seretan ke arah yang salah, atau aplikasi yang menulis ulang file dapat mengubah data cloud Anda. Jika tujuannya hanya membaca, misalnya meninjau arsip atau membuka file referensi, drive yang tidak dapat ditulisi adalah pilihan dengan risiko terendah. Pengaturan mount di RcloneView menyertakan opsi Read only untuk keperluan ini. RcloneView melakukan mount dan sinkronisasi 90+ penyedia dari satu jendela di Windows, macOS, dan Linux.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Kapan Mode Hanya-Baca Berguna

Bayangkan tim kepatuhan yang menyimpan catatan kasus yang sudah ditutup di sebuah bucket. Staf perlu membuka dan menyalin dokumen, tetapi tidak seorang pun boleh dapat mengubahnya. Contoh lain adalah tujuan backup bersama yang ingin Anda periksa dari desktop tanpa mempertaruhkan backup itu sendiri.

Dalam kedua kasus, mount hanya-baca memungkinkan orang memakai alat biasa seperti file explorer, pemutar media, dan penampil, sementara upaya penulisan ditolak. Ini tidak menggantikan izin pada layanan penyimpanan, tetapi menambahkan pengaman di komputer Anda sendiri.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Me-mount folder remote dari explorer RcloneView" class="img-large img-center" />

## Aktifkan Read Only di Mount Manager

Buka Mount Manager dari tab Remote lalu pilih New mount, atau mulai dari ikon Mount di panel Explorer. Pilih remote dan subdirektori, lalu centang **Read only** pada opsi. Di Windows Anda dapat memilih huruf drive, sedangkan di macOS dan Linux Anda menetapkan path mount lokal. Pilih Save and mount untuk langsung menyambungkan drive.

Opsi lain berada di dialog yang sama: nama volume, mode cache (off, minimal, writes secara default, atau full), dan di Windows tampilan sebagai drive jaringan. Karena tidak ada yang ditulis, mode cache default jarang menjadi masalah untuk penggunaan hanya-baca, meskipun full dapat mempercepat pembacaan berulang pada file yang sama.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount Manager dengan opsi mount di RcloneView" class="img-large img-center" />

## Mengubah atau Menghapus Mount

Edit dan Delete dinonaktifkan selama mount aktif, jadi unmount terlebih dahulu dari Mount Manager atau menu system tray. Untuk membuat drive dapat ditulisi nanti, unmount, edit entrinya, hapus centang Read only, lalu mount kembali. Anda dapat menyimpan dua entri untuk remote yang sama, satu hanya-baca untuk menjelajah dan satu dapat ditulisi untuk pekerjaan yang disengaja.

Dengan lisensi PLUS, Auto mount dapat menyambungkan drive Anda saat startup.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Menyalin file antar remote di RcloneView" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan remote yang ingin Anda jelajahi, lalu buka Mount Manager dari tab Remote.
3. Buat mount baru, pilih remote dan folder, lalu centang Read only.
4. Save and mount, lalu buka drive dari file explorer Anda.

Akses hanya-baca memungkinkan Anda membuka semuanya tanpa risiko perubahan.

---

**Panduan Terkait:**

- [Auto Mount saat Startup](https://rcloneview.com/support/blog/auto-mount-startup-rcloneview)
- [VFS Cache untuk Performa Mount](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [Perbaiki Konflik Huruf Drive Mount di Windows](https://rcloneview.com/support/blog/fix-mount-drive-letter-conflict-windows-rcloneview)

<CloudSupportGrid />
