---
slug: find-unused-files-reduce-cloud-costs-rcloneview
title: "Temukan File Tak Terpakai yang Memboroskan Penyimpanan Cloud — Kurangi Biaya dengan Audit Penyimpanan di RcloneView"
authors:
  - tayson
description: "Tagihan cloud terus bertambah karena tidak ada yang menghapus file lama. Pelajari cara menemukan data yang terlupakan, pencadangan basi, dan duplikat yang tidak perlu di semua akun cloud Anda menggunakan RcloneView."
keywords:
  - reduce cloud storage costs
  - find unused cloud files
  - cloud storage cleanup
  - cloud cost optimization
  - cloud storage waste
  - cloud bill reduction
  - cloud file audit
  - storage cost savings
  - cloud cleanup tool
  - unnecessary cloud files
tags:
  - RcloneView
  - cost-optimization
  - tips
  - cloud-storage
  - organization
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Temukan File Tak Terpakai yang Memboroskan Penyimpanan Cloud — Kurangi Biaya dengan Audit Penyimpanan di RcloneView

> Anda membayar 5 TB di tiga penyedia cloud. Berapa banyak dari itu yang benar-benar dibutuhkan? Bagi kebanyakan pengguna, 30-50% penyimpanan cloud terisi oleh file yang tidak akan pernah diakses lagi.

Tagihan penyimpanan cloud bertambah secara bertahap. Beberapa gigabyte ekstra di sini, pencadangan yang terlupakan di sana, dan tiba-tiba Anda menghabiskan ratusan dolar per tahun untuk data yang tidak digunakan siapa pun. Masalahnya bukan harga per gigabyte — melainkan akumulasi yang tidak terlihat. RcloneView membantu Anda melihat persis apa yang ada di setiap akun dan membuat keputusan yang tepat tentang apa yang perlu disimpan dan apa yang perlu dihapus.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Sumber Pemborosan yang Umum

### Salinan pencadangan lama

Tugas pencadangan membuat salinan. Jika Anda telah mengganti tujuan pencadangan selama bertahun-tahun, salinan lama tetap berada di penyedia sebelumnya dan terus memakan penyimpanan berbayar.

### File duplikat di berbagai penyedia

File yang sama tersimpan di Google Drive, OneDrive, DAN Dropbox — karena Anda melakukan sinkronisasi ke mana-mana "untuk berjaga-jaga."

### File proyek yang basi

Proyek dari 2 tahun lalu masih berada di S3 Standard dengan biaya $23/TB padahal bisa dipindahkan ke Glacier dengan biaya $1/TB.

### Data uji coba dan sementara

Unggahan percobaan, folder pengujian, data cache, file `.DS_Store`, `Thumbs.db` — semuanya bertambah banyak di ribuan folder.

## Cara Menemukan Pemborosan

### Telusuri setiap akun

Hubungkan semua akun cloud Anda dan telusuri secara sistematis:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse cloud accounts" class="img-large img-center" />

### Bandingkan akun untuk mencari duplikat

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Find duplicates across clouds" class="img-large img-center" />

Perbandingan Folder antara dua penyedia menyoroti file yang identik — potensi duplikat yang Anda bayar dua kali.

### Periksa kebaruan pencadangan

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Check backup recency" class="img-large img-center" />

Riwayat tugas menunjukkan kapan pencadangan terakhir dijalankan. Jika sebuah pencadangan belum berjalan selama 6 bulan, apakah masih diperlukan?

## Rencana Aksi

| Temuan | Tindakan | Penghematan |
|---------|--------|---------|
| Pencadangan lama di penyimpanan mahal | Hapus atau pindahkan ke Glacier | $5-20/TB/bulan |
| File duplikat di berbagai penyedia | Simpan satu salinan, hapus sisanya | $5-10/TB/bulan |
| Proyek basi di penyimpanan panas | Arsipkan ke penyimpanan dingin | $15-20/TB/bulan |
| File sementara dan sampah | Hapus | Bervariasi |
| Akun penyedia yang tidak terpakai | Batalkan | Biaya langganan |

## Arsipkan Sebelum Menghapus

Jangan menghapus secara agresif. Pindahkan file lama ke penyimpanan dingin terlebih dahulu — cukup murah untuk disimpan "untuk berjaga-jaga" tetapi biayanya 90% lebih rendah daripada penyimpanan panas.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Hubungkan semua akun cloud**.
3. **Telusuri dan bandingkan** secara sistematis.
4. **Arsipkan data yang tidak terpakai** ke penyimpanan dingin.
5. **Hapus pemborosan yang sesungguhnya** setelah pengarsipan.

Penyimpanan termurah adalah penyimpanan yang tidak Anda butuhkan.

---

**Panduan Terkait:**

- [Panduan Audit Penyimpanan Cloud](https://rcloneview.com/support/blog/cloud-storage-permissions-audit-rcloneview)
- [Biaya Tersembunyi Penyimpanan Cloud](https://rcloneview.com/support/blog/hidden-cloud-storage-costs-save-money-rcloneview)
- [Arsipkan ke S3 Glacier](https://rcloneview.com/support/blog/archive-google-drive-to-s3-glacier-rcloneview)

<CloudSupportGrid />
