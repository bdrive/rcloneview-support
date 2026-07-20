---
slug: manage-internet-archive-uploads-with-rcloneview
title: "Cara Mengunggah dan Mengelola File Internet Archive dengan RcloneView"
authors:
  - tayson
description: "Gunakan RcloneView untuk mengunggah file ke Internet Archive, mengatur koleksi, dan menyinkronkan arsip lokal. GUI visual untuk backend Internet Archive milik rclone."
keywords:
  - internet archive rcloneview
  - upload to internet archive rclone
  - internet archive rclone gui
  - archive.org file upload
  - internet archive cloud sync
  - rcloneview internet archive
  - archive.org bulk upload
  - internet archive backup
  - rclone internet archive backend
  - preserve files internet archive
tags:
  - RcloneView
  - internet-archive
  - cloud-storage
  - backup
  - guide
  - digital-preservation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cara Mengunggah dan Mengelola File Internet Archive dengan RcloneView

> Internet Archive melestarikan pengetahuan manusia — buku, musik, perangkat lunak, video, dan halaman web — secara gratis, selamanya. RcloneView memudahkan Anda mengunggah, mengatur, dan menyinkronkan file Anda sendiri ke archive.org tanpa perlu menyentuh command line.

Internet Archive (archive.org) menawarkan penyimpanan cloud gratis dan permanen untuk file yang dapat dibagikan secara publik. Layanan ini digunakan oleh peneliti, arsiparis, pendidik, dan siapa pun yang ingin berkontribusi pada digital commons. Backend Internet Archive milik rclone membuatnya dapat di-script, dan RcloneView membungkus kekuatan tersebut dalam antarmuka visual — memungkinkan Anda menelusuri item arsip Anda, mengunggah file baru, dan menyinkronkan koleksi hanya dengan beberapa klik.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Apa yang Bisa Anda Lakukan dengan RcloneView + Internet Archive

- **Mengunggah file dan folder** ke item archive.org yang sudah ada atau yang baru
- **Menelusuri item yang telah diunggah** secara visual, seperti file manager
- **Menyinkronkan koleksi lokal** ke Internet Archive untuk pelestarian
- **Menyalin file** antara Internet Archive dan penyedia cloud lainnya
- **Memantau progres transfer** secara real time

## Menyiapkan Remote Internet Archive

### Langkah 1 — Dapatkan kredensial Internet Archive Anda

1. Buat akun gratis di [archive.org](https://archive.org).
2. Buka **My Account → Settings → Security** dan buat **S3-like API key** (Access Key + Secret Key). Meskipun namanya demikian, ini bukan AWS — ini adalah API kompatibel S3 milik archive.org sendiri.

### Langkah 2 — Tambahkan remote di RcloneView

Buka RcloneView dan klik **New Remote**:

<img src="/support/images/en/blog/new-remote.png" alt="Add Internet Archive remote in RcloneView" class="img-large img-center" />

1. Pilih **Internet Archive** dari daftar jenis remote.
2. Masukkan **Access Key ID** dan **Secret Access Key** Anda dari archive.org.
3. Beri nama remote (misalnya, `internet-archive`) dan simpan.

### Langkah 3 — Telusuri item Anda

Setelah terhubung, RcloneView menampilkan item archive.org Anda sebagai folder. Setiap "item" di Internet Archive adalah wadah untuk satu unggahan (seperti album, hasil pindai buku, atau koleksi video).

## Mengunggah File ke Internet Archive

### Mengunggah item baru

Untuk membuat item archive.org baru dan mengunggah file ke dalamnya:

1. Di panel kanan RcloneView, navigasikan ke dalam remote `internet-archive` Anda.
2. Buat folder baru dengan pengidentifikasi item yang unik (misalnya, `my-1980s-radio-recordings`).
3. Seret dan lepas file dari panel lokal Anda ke dalam folder item.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Browse and upload to Internet Archive items" class="img-large img-center" />

RcloneView mentransfer file dan menampilkan progres secara langsung. Internet Archive memproses unggahan secara asinkron — item Anda akan dapat diakses publik dalam beberapa menit hingga beberapa jam tergantung ukuran file.

### Mengunggah ke item yang sudah ada

Navigasikan ke folder item yang sudah ada, lalu salin atau pindahkan file ke dalamnya. RcloneView menangani unggahan multipart dan logika percobaan ulang secara otomatis.

## Menyinkronkan Koleksi Arsip Lokal

Untuk menjaga folder lokal tetap tersinkronisasi dengan item Internet Archive — ideal untuk proyek pengarsipan berkelanjutan:

1. Buka **Jobs** di RcloneView.
2. Atur **Source** ke folder lokal Anda (misalnya, `D:\my-archive-project`).
3. Atur **Destination** ke item Internet Archive Anda (misalnya, `internet-archive:my-1980s-radio-recordings`).
4. Pilih mode **Sync** untuk mengunggah hanya file baru atau yang berubah.
5. Jadwalkan agar berjalan mingguan atau sesuai permintaan.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule sync job to Internet Archive" class="img-large img-center" />

## Mengunduh dan Menyalin dari Internet Archive

RcloneView bekerja dua arah. Anda juga dapat:

- **Mengunduh file** dari item archive.org publik ke mesin lokal Anda.
- **Menyalin item** dari Internet Archive ke cloud lain (misalnya, archive.org → Google Drive atau Backblaze B2) untuk pelestarian redundan.

## Catatan Penting tentang Backend Internet Archive

| Perilaku | Detail |
|----------|--------|
| Pembuatan item | Folder baru menjadi item archive.org baru |
| Visibilitas | Item yang diunggah bersifat publik secara default |
| Penghapusan file | Penghapusan diantrekan; archive.org memprosesnya secara perlahan |
| Checksum | Checksum MD5 diverifikasi saat unggah |
| Batas kecepatan | Hormati batas crawl archive.org — hindari membebani API secara berlebihan |

## Kasus Penggunaan

**Proyek pengarsipan digital** — Unggah hasil pindai, rekaman, atau dokumen yang ingin Anda lestarikan secara permanen di domain publik.

**Pelestarian perangkat lunak** — Kontribusikan perangkat lunak lama, game, atau ROM (di mana lisensi mengizinkan) ke arsip.

**Redundansi pencadangan** — Gunakan Internet Archive sebagai lapisan pencadangan sekunder gratis untuk data yang tidak sensitif dan dapat dibagikan secara publik.

**Dataset penelitian** — Unggah dataset dengan lisensi publik agar peneliti di seluruh dunia dapat mengaksesnya.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Buat kunci API archive.org Anda** di archive.org pada bagian Account Settings.
3. **Tambahkan remote Internet Archive** di wizard pengaturan remote RcloneView.
4. **Unggah, sinkronkan, dan lestarikan** — file Anda akan tersimpan di archive.org secara gratis, selamanya.

Internet Archive telah menyimpan web dan budaya manusia sejak 1996. RcloneView memudahkan Anda untuk berkontribusi dengan materi digital Anda sendiri.

---

**Panduan Terkait:**

- [Enkripsi Pencadangan Cloud dengan RcloneView](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [Otomatisasi Pencadangan Cloud Harian](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [Strategi Pencadangan Multi-Cloud](https://rcloneview.com/support/blog/multi-cloud-backup-strategy-rcloneview)

<CloudSupportGrid />
