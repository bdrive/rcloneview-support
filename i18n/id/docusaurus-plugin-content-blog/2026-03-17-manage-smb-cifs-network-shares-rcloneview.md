---
slug: manage-smb-cifs-network-shares-rcloneview
title: "Kelola Network Share SMB/CIFS — Sinkronkan File Server Kantor ke Cloud dengan RcloneView"
authors:
  - tayson
description: "SMB network share adalah tulang punggung file server kantor. Pelajari cara menghubungkannya ke RcloneView dan sinkronisasi ke Google Drive, S3, atau cloud apa pun untuk pencadangan dan akses jarak jauh."
keywords:
  - smb cloud sync
  - cifs cloud backup
  - network share to cloud
  - smb to google drive
  - file server cloud sync
  - smb to s3 backup
  - windows share cloud
  - network drive cloud backup
  - smb rclone
  - office file server cloud
tags:
  - RcloneView
  - smb
  - nas
  - sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Kelola Network Share SMB/CIFS — Sinkronkan File Server Kantor ke Cloud dengan RcloneView

> File server perusahaan Anda sudah berjalan bertahun-tahun. Semua orang mengaksesnya melalui mapped network drive. Namun tidak ada pencadangan offsite, dan pekerja jarak jauh tidak bisa mengaksesnya dari rumah. Sinkronisasi cloud menyelesaikan kedua masalah ini.

SMB/CIFS (Server Message Block / Common Internet File System) adalah protokol di balik setiap shared folder Windows, file share NAS, dan file server kantor. Protokol ini andal dan cepat di jaringan lokal, tetapi tidak dirancang untuk integrasi cloud atau akses jarak jauh. RcloneView menjembatani kesenjangan itu — hubungkan SMB share Anda dan sinkronkan ke penyedia cloud mana pun untuk pencadangan, akses jarak jauh, dan pemulihan bencana.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Menghubungkan SMB Share ke RcloneView

<img src="/support/images/en/blog/new-remote.png" alt="Add SMB remote" class="img-large img-center" />

Tambahkan SMB share Anda sebagai remote menggunakan alamat server, nama share, dan kredensial. Network share Anda akan muncul di explorer dua panel.

## Alur Kerja Utama

### Mencadangkan file server ke cloud

Lindungi file server kantor Anda dengan pencadangan cloud ke S3, B2, atau Google Drive:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="File server to cloud backup" class="img-large img-center" />

### Mengaktifkan akses jarak jauh

Sinkronkan isi file server ke Google Drive atau OneDrive sehingga pekerja jarak jauh dapat mengakses file dari mana saja tanpa VPN.

### Menjadwalkan pencadangan malam hari

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule file server backup" class="img-large img-center" />

Jalankan pencadangan pada malam hari saat jaringan kantor sedang sepi.

### Memverifikasi integritas pencadangan

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify file server backup" class="img-large img-center" />

Bandingkan SMB share dengan salinan cloud untuk memastikan tidak ada yang terlewat.

### Migrasi ke cloud

Berencana untuk memensiunkan file server? Transfer semuanya ke penyimpanan cloud secara bertahap, per departemen.

## Tips Performa

- **Jalankan pencadangan di luar jam kerja** untuk menghindari kepadatan jaringan
- **Gunakan sinkronisasi incremental** — hanya file yang berubah yang ditransfer setiap kali dijalankan
- **Atur concurrency yang sesuai** — 2-4 transfer untuk server bersama
- **Kecualikan file sementara** — filter `~$*`, `.tmp`, `Thumbs.db`

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Tambahkan SMB share** Anda sebagai remote.
3. **Tambahkan tujuan cloud** untuk pencadangan.
4. **Buat sync job** dan jadwalkan.
5. **Verifikasi secara berkala** dengan Folder Comparison.

File server Anda layak mendapatkan jaring pengaman cloud.

---

**Panduan Terkait:**

- [Mount SFTP/SMB sebagai Local Drive](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [Mount dan Sinkronisasi Remote File System](https://rcloneview.com/support/blog/mount-sync-remote-file-systems-rcloneview)
- [Penjadwalan Job](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
