---
sidebar_position: 1
description: Buat Alias Remote di RcloneView untuk menandai folder cloud yang dalam sebagai remote virtual demi akses lebih cepat dan organisasi yang lebih rapi.
keywords:
  - rcloneview
  - howto
  - cloud
  - sync
  - rclone
  - alias remote
  - virtual remote
  - quick access
  - cloud remote shortcut
  - remote shortcut
  - cloud storage
  - remote manager
  - bookmark
tags:
  - RcloneView
  - alias
  - remote-storage
  - shortcut
  - virtual-remote
date: 2025-12-05
author: tayson
---

# Alias

## Cara Menambahkan Alias Menggunakan RcloneView

**Alias Remote** adalah remote virtual yang menandai folder tertentu di dalam remote cloud yang sudah ada. Alih-alih menelusuri struktur folder yang dalam setiap kali, cukup klik Alias dan folder tujuan akan langsung terbuka.

Gunakan Alias saat Anda:

- Sering mengunjungi kembali folder proyek yang dalam.
- Memiliki struktur folder kompleks dan membutuhkan titik masuk cepat.
- Mengelola banyak remote dan menginginkan tampilan yang lebih rapi.
- Ingin memilih folder tertentu lebih cepat di Sync / Compare / Jobs.

**Ringkasan:** Alias = bookmark folder cloud.

---

### Menambahkan Alias Remote (via New Remote)

#### Langkah 1 — Buka **New Remote** dan pilih **Virtual > Alias**

<img src="/support/images/en/howto/remote-storage-connection-settings/alias/new-remote-add-alias.png" alt="alias remote selection" class="img-large img-center" />

#### Langkah 2 — Masukkan informasi Alias

1. **Remote name**: Masukkan nama Alias (mis., `MyAlias`).
2. **Remote (target folder)**: Klik ikon folder dan pilih remote serta folder yang sudah ada yang Anda inginkan.  
   <img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-add-select-remote-and-folder.png" alt="select target remote and folder" class="img-medium img-center" />

   Setelah memilih, konfirmasi detail Alias:  
   <img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-add-alias-input.png" alt="alias input window" class="img-large img-center" />

3. Klik **Add Remote** untuk membuat Alias.

#### Langkah 3 — Periksa Alias di Remote Manager

<img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-remote-manager-alias.png" alt="remote manager alias" class="img-large img-center" />

Buka di file browser untuk memastikan Alias mengarah ke folder tujuan yang tepat:  
<img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-alias-file-browser.png" alt="alias file browser" class="img-large img-center" />

---

### Membuat Alias Lebih Cepat dari Explorer

Anda dapat dengan cepat membuat Alias Remote untuk menandai folder remote yang sering digunakan demi akses yang lebih cepat dan mudah.

1. Di panel **Explorer**, klik ikon **`☆` Alias** di sisi kanan Path Bar.
2. Masukkan nama untuk **Alias** baru Anda.
3. Remote akan langsung ditambahkan dan dibuka sebagai **Alias Remote**, siap digunakan.
<div class="img-grid-3">
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-alias-remote.png" alt="add new alias remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-alias-remote-name.png" alt="add new alias remote name" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-alias-remote-complete.png" alt="add new alias remote complete" class="img-large img-center" />
</div>

---

### Memverifikasi Alias Remote yang Ditambahkan di RcloneView

Alias Remote yang ditambahkan dapat diverifikasi dengan cara yang sama seperti remote cloud lainnya di RcloneView.

1. Dari menu atas, klik **`Remote Manager`** di bawah tab **`Remote`**.
2. Pastikan **Alias Remote** yang baru dibuat muncul di jendela **`Remote Manager`**.
3. Sebagai alternatif, buka tab baru di panel Explorer menggunakan tombol **`☆`** dan pastikan Alias Remote tersedia untuk dijelajahi.

<div class="img-grid-3">
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-icloud-verify-step1.png" alt="verify aws s3 step1" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/added-alias-remote-verify.png" alt="added alias remote verify" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/added-alias-remote-explorer-verify.png" alt="added alias remote explorer verify" class="img-medium img-center" />
</div>

---

### Mengapa Menggunakan Alias Remote

- Hemat waktu: langsung masuk ke folder yang dalam hanya dengan satu klik.
- Menjaga Remote Manager tetap rapi dengan menampilkan jalur penting sebagai entri terpisah.
- Ideal untuk struktur tim/shared-drive yang kompleks.
- Sepenuhnya dapat digunakan dalam alur kerja Sync / Compare / Job seperti remote lainnya.

---

### Ringkasan

| Fitur                       | Deskripsi                                          |
| ---------------------------- | --------------------------------------------------- |
| **Alias via New Remote**     | Membuat remote khusus untuk folder yang dalam       |
| **Alias via Explorer**       | Menambahkan folder saat ini sebagai Alias secara instan |
| **Tampilan Remote Manager**  | Terdaftar seperti remote lainnya                    |
| **Kasus penggunaan**         | Akses cepat, organisasi, otomatisasi                |

Alias itu sederhana namun kuat—meratakan struktur folder yang kompleks, langsung menuju hal yang penting, dan mempercepat setiap tugas cloud.
