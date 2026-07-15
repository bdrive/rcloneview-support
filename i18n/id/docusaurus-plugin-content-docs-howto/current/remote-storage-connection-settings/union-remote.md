---
sidebar_position: 4
description: Tambahkan Union Remote di RcloneView untuk menggabungkan beberapa lokasi Remote:Path menjadi satu tampilan folder terpadu tanpa menduplikasi data.
keywords:
  - rcloneview
  - union remote
  - virtual remote
  - merged folder
  - multi cloud
  - remote manager
  - union
tags:
  - RcloneView
  - union
  - remote-storage
  - virtual-remote
  - multi-cloud
date: 2025-12-08
author: tayson
---

# Union

## Cara Menambahkan Union Menggunakan RcloneView

**Union Remote** menggabungkan folder dari beberapa remote cloud menjadi satu folder terpadu. Ini berbeda dari Combine:

- **Combine** menampilkan folder secara berdampingan.
- **Union** menggabungkan beberapa folder menjadi satu tampilan.

Union berguna untuk:

- Mengakses data lintas remote seolah-olah berada dalam satu folder.
- Penelusuran satu panel dan tata letak pencadangan multi-cloud.
- Membangun sistem file virtual tanpa menyalin atau memindahkan data.

---

## Membuat Union Remote

### Langkah 1 — **New Remote** → **Virtual** → **Union**

<img src="/support/images/en/howto/remote-storage-connection-settings/union/new-remote-add-union.png" alt="new remote add union" class="img-large img-center" />

### Langkah 2 — Masukkan detail Union

Isi:

- **Remote name**: misalnya, `MyUnion`.
- **Upstreams (Remote:Path)**: Setiap Upstream adalah satu lokasi folder yang sebenarnya.

Tambahkan Upstream pertama dengan memilih remote dan folder:  
<img src="/support/images/en/howto/remote-storage-connection-settings/union/union-select-folder-1.png" alt="union select folder first" class="img-large img-center" />

Untuk menambahkan Upstream lainnya, klik **Add Remote** dan pilih folder berikutnya:  
<img src="/support/images/en/howto/remote-storage-connection-settings/union/union-select-folder-2.png" alt="union select folder second" class="img-large img-center" />

Tambahkan sebanyak mungkin Upstream sesuai kebutuhan, lalu tinjau pengaturannya:  
<img src="/support/images/en/howto/remote-storage-connection-settings/union/virtual-add-union-input.png" alt="union input window" class="img-large img-center" />

Klik **Add Remote** untuk membuat Union remote.

### Langkah 3 — Konfirmasi di Remote Manager

<img src="/support/images/en/howto/remote-storage-connection-settings/union/virtual-remote-manager-union.png" alt="remote manager union" class="img-large img-center" />

---

## Memeriksa Union di Explorer

Buka Union remote di Explorer. Konten dari semua Upstream akan muncul sebagai satu folder gabungan.

**Upstreams 1 — Contoh Google Drive**  
<img src="/support/images/en/howto/remote-storage-connection-settings/union/union-check-folder-1.png" alt="union check folder google drive" class="img-large img-center" />  
Sesuai dengan `mygoogledrive:Meet Recordings`.

**Upstreams 2 — Contoh Dropbox**  
<img src="/support/images/en/howto/remote-storage-connection-settings/union/union-check-folder-2.png" alt="union check folder dropbox" class="img-large img-center" />  
Sesuai dengan `drop:assets`.

---

## Combine vs Union (Perbedaan Utama)

| Fitur                | Combine Remote                     | Union Remote                            |
| --------------------- | ----------------------------------- | ----------------------------------------- |
| Gaya tampilan          | Menampilkan beberapa folder secara terpisah | Menampilkan satu tampilan gabungan        |
| Aturan penulisan       | Tidak digabungkan; folder terpisah  | Penulisan baru mengikuti kebijakan Union  |
| Struktur file          | Folder1 / Folder2                   | Satu folder virtual gabungan              |
| Paling cocok untuk     | Pengorganisasian                    | Penggabungan multi-cloud dan penggunaan terpadu |

---

## Kapan Menggunakan Union

- Melihat data dari beberapa cloud sekaligus dalam satu folder.
- Proyek yang tersebar di beberapa remote yang memerlukan tampilan terpadu.
- Menjalankan pekerjaan Sync/pencadangan terhadap satu virtual remote.
- Menyediakan tampilan gabungan tanpa menduplikasi penyimpanan.

---

## Ringkasan

| Fitur             | Deskripsi                                            |
| ------------------ | ----------------------------------------------------- |
| **Union Remote**   | Menggabungkan beberapa entri `Remote:Path` menjadi satu tampilan |
| **Upstreams**      | Folder remote sebenarnya yang membentuk union         |
| **Manfaat**        | Konsolidasi multi-cloud, akses satu panel              |
| **Tujuan**         | Penelusuran terpadu, pencadangan/Sync, penyatuan proyek |

Union Remote adalah virtual remote yang andal untuk mengelola lingkungan multi-cloud melalui satu tampilan folder gabungan.
