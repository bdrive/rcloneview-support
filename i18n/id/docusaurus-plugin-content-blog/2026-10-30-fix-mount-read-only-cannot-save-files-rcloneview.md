---
slug: fix-mount-read-only-cannot-save-files-rcloneview
title: "Mengatasi Mount Cloud Read-Only dan Tidak Bisa Menyimpan File — dengan RcloneView"
authors:
  - steve
description: "Drive cloud yang di-mount tidak bisa menyimpan atau mengedit file? Periksa opsi Read only di RcloneView, mode cache, izin, dan FUSE agar mount Anda kembali bisa ditulisi."
keywords:
  - mount drive cloud read-only
  - tidak bisa menyimpan file di drive mount
  - rclone mount read only
  - pemecahan masalah mount RcloneView
  - mode cache VFS writes
  - mount FUSE Linux
  - error penulisan drive cloud
  - pengaturan mount manager
tags:
  - RcloneView
  - troubleshooting
  - tips
  - mount
  - vfs
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mengatasi Mount Cloud Read-Only dan Tidak Bisa Menyimpan File — dengan RcloneView

> Ketika drive cloud yang di-mount menolak penyimpanan, penyebabnya biasanya pengaturan mount atau izin, dan keduanya cepat diperiksa.

Anda sudah me-mount sebuah remote, membuka dokumen, lalu penyimpanan gagal, atau file bisa disalin masuk tetapi tidak bisa diedit. Sebelum menyalahkan penyedia cloud, periksa bagaimana mount dikonfigurasi. RcloneView menampilkan semua opsi yang relevan dalam satu dialog, sehingga Anda dapat menemukan penyebabnya tanpa menyentuh command line. RcloneView juga melakukan sinkronisasi dan membandingkan folder, dengan fitur dasar yang tersedia pada lisensi FREE.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Periksa Opsi Read Only Terlebih Dahulu

Pengaturan mount menyertakan sakelar **Read only**, yang secara default nonaktif. Jika opsi ini aktif saat mount disimpan, setiap penulisan akan ditolak. Buka Mount Manager dari tab Remote, unmount entri tersebut, lalu edit. Edit dan Delete dinonaktifkan selama drive ter-mount, sehingga unmount diperlukan sebelum Anda bisa mengubah apa pun.

Matikan Read only, lalu pilih Save and mount.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mount Manager di RcloneView yang menampilkan pengaturan mount" class="img-large img-center" />

## Tinjau Mode Cache

Mode cache VFS default adalah **writes**, yang menyangga file yang ditulis secara lokal agar aplikasi dapat menyimpan seperti biasa. Mengaturnya ke off atau minimal dapat merusak program yang mengharapkan seek atau menulis ulang file di tempat. Jika editor gagal saat menyimpan, coba writes atau full.

Perhatikan juga ruang kosong pada lokasi cache. Disk cache yang penuh menyebabkan kegagalan penulisan yang tampak seperti masalah izin. Jika Anda mencurigai hal itu, lihat panduan terkait tentang error disk cache VFS penuh di bawah.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mengonfigurasi mode cache saat mount dari remote explorer" class="img-large img-center" />

## Singkirkan Penyebab dari Akun dan Platform

Beberapa remote memang bersifat read-only. Remote HTTP hanya menyediakan akses baca, dan folder bersama yang hanya diberi hak lihat tidak dapat ditulisi apa pun pengaturan mount-nya. Uji dengan mengunggah file melalui panel Explorer: jika itu juga gagal, masalahnya ada pada remote atau izinnya, bukan pada mount.

Di Linux, mount memerlukan FUSE (fuse3 direkomendasikan). Jika pengguna lain perlu mengakses, aktifkan **Allow other**. Di Windows, mount yang muncul sebagai network drive dapat berperilaku berbeda pada beberapa aplikasi, jadi coba ubah opsi tersebut.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Riwayat job untuk memeriksa operasi penulisan yang gagal" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Unmount drive, buka entrinya di Mount Manager, dan pastikan Read only nonaktif.
3. Atur mode cache ke writes dan pastikan ruang disk kosong.
4. Uji unggahan di Explorer untuk memisahkan izin remote dari pengaturan mount.

Sebagian besar kegagalan penulisan berasal dari salah satu pemeriksaan ini, dan semuanya hanya memakan waktu beberapa menit.

---

**Panduan Terkait:**

- [Mengatasi Mount Cloud yang Terputus dan Terlepas dengan RcloneView](https://rcloneview.com/support/blog/fix-cloud-mount-disconnect-drops-rcloneview)
- [Mengatasi Error Disk Cache VFS Penuh dengan RcloneView](https://rcloneview.com/support/blog/fix-vfs-cache-disk-full-errors-rcloneview)
- [Mengatasi Pembukaan File Lambat pada Mount — Mode Cache VFS dengan RcloneView](https://rcloneview.com/support/blog/fix-mount-slow-file-open-vfs-cache-mode-rcloneview)

<CloudSupportGrid />
