---
slug: rcloneview-connection-manager-embedded-external
title: "RcloneView Connection Manager: Beralih antara rclone Embedded dan External untuk Operasi Cloud yang Lebih Aman"
authors:
  - tayson
description: "Gunakan RcloneView Connection Manager untuk beralih antara instance rclone Embedded dan External, mengisolasi environment, dan menjalankan workflow yang lebih aman dan dapat diaudit."
keywords:
  - rcloneview connection manager
  - embedded rclone
  - external rclone
  - rclone rcd gui
  - rcloneview remote control
  - rclone instance switch
  - cloud automation gui
  - rcloneview workflow
  - rclone gui
  - rcloneview enterprise
tags:
  - sync
  - file-management
  - job-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView Connection Manager: Beralih antara rclone Embedded dan External untuk Operasi Cloud yang Lebih Aman

> Butuh pemisahan yang bersih antara pekerjaan pribadi, data produksi, dan environment pengujian? RcloneView Connection Manager memungkinkan Anda beralih instance rclone dalam hitungan detik -- tanpa risiko CLI.

RcloneView menyertakan engine rclone Embedded, tetapi juga dapat terhubung ke instance rclone External (lokal, remote, atau container). Ini memberi Anda cara yang aman untuk mengisolasi environment, menguji perubahan, dan beroperasi pada skala enterprise tanpa harus menulis ulang konfigurasi atau berpindah-pindah terminal.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa Connection Manager penting

Sebagian besar pengguna rclone pada akhirnya menghadapi salah satu masalah berikut:

- Sebuah test run mengubah remote produksi
- Satu mesin membutuhkan kredensial yang berbeda dari mesin lain
- Anda ingin server remote yang melakukan transfer sementara PC Anda tetap bersih

Connection Manager mengatasi hal ini dengan memungkinkan Anda beralih antara instance rclone **Embedded** dan **External** hanya dengan satu klik.

## Embedded vs External rclone (model mental singkat)

- **rclone Embedded**: sudah terpasang bawaan (bundled), lokal, dan selalu tersedia
- **rclone External**: dikelola pengguna, dapat berjalan di server, NAS, atau mesin terpisah

Ini adalah fondasi untuk workflow yang aman: mengisolasi environment alih-alih mencampurnya.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-advanced/embedded-rclone-model.png" alt="Embedded rclone model" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-advanced/external-rclone-model.png" alt="External rclone model" class="img-large img-center" />
</div>

## Apa yang dilakukan Connection Manager

Connection Manager memungkinkan Anda untuk:

- Melihat semua instance rclone yang tersedia
- Terhubung ke satu instance pada satu waktu
- Beralih antara Embedded dan External secara instan
- Menjaga konfigurasi tetap terisolasi per instance

<img src="/support/images/en/howto/rcloneview-basic/connection-manager-with-embedded-rclone-only.png" alt="Connection Manager with embedded rclone" class="img-large img-center" />

## Mengapa ini adalah workflow yang sangat berharga bagi tim

### 1) Pengujian dan validasi yang lebih aman

Gunakan instance external untuk menguji perubahan tanpa menyentuh remote produksi.

### 2) Pemisahan environment yang bersih

Jalankan satu instance untuk staging, satu lagi untuk produksi. Tidak ada konfigurasi yang tercampur.

### 3) Compute remote untuk transfer besar

Biarkan server atau NAS menangani transfer besar sementara desktop Anda tetap ringan.

### 4) Pemulihan lebih cepat dari kesalahan

Jika instance external gagal atau bermasalah, beralih kembali ke Embedded secara instan.

## Langkah demi langkah: menambahkan koneksi rclone External

1) Buka **Settings -> Connection Manager**.
2) Klik **New Connection**.
3) Masukkan alamat remote untuk `rclone rcd`.

<img src="/support/images/en/howto/rcloneview-basic/new-connection-form.png" alt="New connection form" class="img-large img-center" />

Setelah ditambahkan, Anda dapat menghubungkan, mengedit, atau menghapus entri tersebut.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/external-rclone-added.png" alt="External rclone added" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/external-rclone-selected.png" alt="External rclone selected" class="img-large img-center" />
</div>

Panduan: [/support/howto/rcloneview-basic/connection-manager](/howto/rcloneview-basic/connection-manager)

## Kasus penggunaan umum

### Isolasi personal vs bisnis

Simpan remote pribadi di Embedded, remote bisnis di External.

### Transfer sisi server

Jalankan rclone di server (EC2, NAS, atau Docker). Gunakan RcloneView sebagai UI pengontrol.

### Operasi multi-window

Buka jendela RcloneView baru untuk mengelola instance lain tanpa perlu beralih.

<img src="/support/images/en/howto/rcloneview-advanced/rcloneview-new-window.png" alt="Open new RcloneView window" class="img-large img-center" />

## Praktik terbaik untuk workflow yang andal

- Beri nama instance external secara jelas (misalnya, `Prod-Rclone`, `Lab-Rclone`).
- Pastikan jadwal job terikat pada instance yang benar.
- Gunakan Compare sebelum Sync saat berpindah environment.
- Dokumentasikan remote mana yang berada di masing-masing instance.

## Kesalahan umum yang harus dihindari

- Menjalankan job produksi pada instance pengujian
- Membagikan satu instance external untuk tim yang tidak berkaitan
- Lupa instance mana yang sedang aktif

Connection Manager mengatasi sebagian besar masalah ini dengan konteks visual dan peralihan cepat.

## Kesimpulan

RcloneView Connection Manager mengubah rclone menjadi sistem multi-environment yang aman. Embedded sempurna untuk penggunaan sehari-hari. External ideal untuk isolasi, transfer sisi server, dan workflow enterprise. Beralihlah sesuai kebutuhan dan jaga operasi tetap bersih.

<CloudSupportGrid />
