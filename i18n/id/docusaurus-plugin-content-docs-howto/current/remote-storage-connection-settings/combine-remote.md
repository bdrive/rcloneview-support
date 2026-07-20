---
sidebar_position: 3
description: Gabungkan beberapa folder cloud menjadi satu tampilan virtual di RcloneView tanpa menyalin data, ideal untuk penjelajahan multi-cloud dan pekerjaan terpadu.
keywords:
  - rcloneview
  - combine remote
  - virtual remote
  - multi cloud
  - union remote
  - cloud viewer
  - remote manager
tags:
  - RcloneView
  - combine
  - remote-storage
  - virtual-remote
  - multi-cloud
date: 2025-12-08
author: tayson
---

# Combine

## Cara Menambahkan Combine Menggunakan RcloneView

**Combine Remote** menggabungkan folder dari beberapa remote cloud menjadi satu tampilan virtual. Fitur ini tidak menyalin atau memindahkan data—fitur ini hanya memungkinkan Anda menjelajahi beberapa lokasi sebagai satu folder.

Manfaatnya:

- Melihat data yang tersebar di berbagai cloud dalam satu tempat.
- Memperlakukan folder proyek dari layanan berbeda sebagai satu ruang kerja.
- Menjalankan pekerjaan pencadangan/Sinkronisasi seolah-olah itu satu remote.
- Tidak ada penyimpanan tambahan atau file duplikat.

Combine Remote pada dasarnya adalah penampil multi-cloud.

---

## Membuat Combine Remote

### Langkah 1 — **New Remote** → **Virtual** → **Combine**

<img src="/support/images/en/howto/remote-storage-connection-settings/combine/new-remote-add-combine.png" alt="new remote add combine" class="img-large img-center" />

### Langkah 2 — Masukkan detail Combine

Anda memerlukan tiga kolom untuk setiap entri:

- **Remote name**: Nama remote Combine (misalnya, `MyCombine`).
- **Directory**: Nama folder seperti yang akan muncul di dalam tampilan Combine (misalnya, `Folder1`).
- **Remote Path**: Path cloud aktual yang akan disertakan. Klik ikon folder untuk memilih dari remote yang sudah terdaftar.

<img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-select-folder-1.png" alt="combine select folder first" class="img-large img-center" />

Setelah memilih path pertama:  
<img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-select-folder-2.png" alt="combine select folder second" class="img-large img-center" />

Gunakan **Add Remote** untuk menambahkan Folder2, Folder3, dan seterusnya.  
Setelah semua entri diatur:  
<img src="/support/images/en/howto/remote-storage-connection-settings/combine/virtual-add-combine-input.png" alt="combine input window" class="img-large img-center" />

Klik **Add Remote** untuk membuat remote Combine.

### Langkah 3 — Konfirmasi di Remote Manager

<img src="/support/images/en/howto/remote-storage-connection-settings/combine/virtual-remote-manager-combine.png" alt="remote manager combine" class="img-large img-center" />

---

## Memeriksa Folder Gabungan di Explorer

Buka remote Combine di Explorer untuk melihat setiap folder yang telah ditambahkan.

**Folder1 — contoh Google Drive**  
<img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-check-folder-1.png" alt="combine check folder google drive" class="img-large img-center" />  
Menampilkan konten yang sama dengan `mygoogledrive:Meet Recordings`.

**Folder2 — contoh Dropbox**  
<img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-check-folder-2.png" alt="combine check folder dropbox" class="img-large img-center" />  
Menampilkan konten yang sama dengan `drop:assets`.

---

## Kapan Menggunakan Combine

- Melihat data di beberapa cloud sekaligus.
- Menggabungkan folder proyek yang terpisah di berbagai remote.
- Mengelola pekerjaan pencadangan atau Sinkronisasi melalui satu remote virtual.
- Menjaga struktur asli tetap utuh sambil menyatukan tampilan.
- Menghindari penyimpanan duplikat sambil mendapatkan ruang kerja gabungan.

---

## Ringkasan

| Feature                 | Description                                    |
| ----------------------- | ---------------------------------------------- |
| **Combine Remote**      | Menggabungkan beberapa folder menjadi satu tampilan virtual |
| **No data duplication** | File tetap berada di lokasi aslinya            |
| **Add various remotes** | Berfungsi dengan Drive, Dropbox, OneDrive, S3, dll. |
| **Use cases**           | Penjelajahan terpadu, pencadangan multi-cloud, proyek |

Combine Remote memungkinkan Anda mengelola data multi-cloud seolah-olah berada di satu tempat—tanpa memindahkan atau menduplikasi file.
