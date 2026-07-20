---
sidebar_position: 8
description: Pelajari cara mount penyimpanan cloud remote sebagai drive virtual menggunakan RcloneView, termasuk konfigurasi melalui Remote Explorer, Mount Manager, dan akses melalui system tray.
keywords:
  - rcloneview
  - rclone
  - mount
  - mount manager
  - cloud drive
  - virtual drive
  - rclone mount
  - local drive
  - remote explorer
  - remote storage management
tags:
  - RcloneView
  - mount
  - local-drive
  - virtual-drive
  - cloud-storage
  - Remote-storage-managent
date: 2025-06-19
author: Jay
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Mount Penyimpanan Cloud sebagai Local Drive

:::important Prasyarat untuk Mounting
Sebelum melakukan mount, pastikan remote target sudah ditambahkan ke RcloneView.   
Lihat: [Add a New Remote](/howto/rcloneview-basic/remote-manager#add-a-new-remote)
:::

## Mount Penyimpanan Remote di RcloneView

RcloneView memungkinkan Anda melakukan mount penyimpanan remote sebagai drive virtual untuk memudahkan akses dan pengelolaan.  
Panduan ini menjelaskan cara melakukan mount penyimpanan remote menggunakan dua metode dan mengelola konfigurasi mount.

### Metode 1: Mount dari Remote Explorer

Anda dapat melakukan mount folder remote secara langsung sambil menjelajahi isinya.

1. Pada panel **Remote Explorer**, pilih folder remote yang ingin di-mount. 
2. Klik **ikon Mount** (<img src="/support/icons/mount-icon.png" alt="mount icon" class="inline-icon" />) di sudut atas panel Remote Explorer.
3. Dialog **Mount** akan terbuka dengan path remote yang dipilih otomatis terisi.
4. Konfigurasikan pengaturan mount:
   - **Target**: Pilih `Auto` atau tetapkan huruf driver secara manual dari daftar.
   - (opsional) centang "Mount to local path" untuk menentukan lokasi mount kustom.
   - Aktifkan **Auto mount** agar remote ini otomatis di-mount saat RcloneView dijalankan.
5. Klik **Save and mount** untuk menerapkan pengaturan dan langsung melakukan mount.
   - Alternatifnya, klik **Save** untuk hanya menyimpan konfigurasi mount dan melakukan mount nanti.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-medium img-center" />

<details>
<summary>Advanced Mount Options</summary>

Advanced Mount Options

| Field                        | Description                                                                                                                                                                                                                                                      |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Volume name**    | (Opsional) Tetapkan nama kustom untuk volume yang di-mount. Nama ini mungkin ditampilkan di file manager atau UI sistem Anda.                                                                                                                                        |
| **Mount type**     | Pilih backend mount: <br /> - `cmount` (default untuk Windows): Menggunakan engine mount internal berbasis C mirip FUSE milik Rclone dengan kompatibilitas tinggi <br />- `nfsmount` (alternatif, umumnya untuk lingkungan Linux/macOS). Menggunakan protokol NFS untuk melakukan mount remote |
| **Network drive**  | Centang kotak ini untuk menandai mount sebagai network drive. Ini dapat memengaruhi cara OS memperlakukan folder yang di-mount.                                                                                                                                       |
| **Read only**      | Mengaktifkan mode read-only, mencegah operasi tulis ke remote.                                                                                                                                                                                               |
| **Allow other**    | Mengizinkan akses ke filesystem yang di-mount oleh pengguna lain selain yang melakukan mount (umumnya digunakan di Linux).                                                                                                                                        |
| **Cache mode**     | Mengontrol perilaku caching. Opsi meliputi:  <br />- `off`  <br />- `minimal`  <br />- `writes`  <br />- `full`  <br />Mode default `writes` melakukan cache pada operasi tulis.                                                                                              |
| **Cache max size** | Ukuran cache maksimum yang diizinkan dalam byte.  <br />Contoh: 1073741824 = 1GB.  <br />Atur ke `-1` untuk tanpa batas.                                                                                                                                            |
| **Cache max age**  | Berapa lama data cache tetap valid. Satuan waktu dalam **nanodetik**. Contoh: 3600000000000 = 1 jam.                                                                                                                                               |
| **Dir cache time** | Waktu validitas cache direktori. Satuan waktu dalam **nanodetik**. Contoh: 300000000000 = 5 menit.                                                                                                                                   |

💡 Gunakan opsi ini hanya jika Anda sudah familier dengan pengaturan mount. Nilai default sudah bekerja dengan baik untuk sebagian besar pengguna.

</details>
### Metode 2: Mount melalui Mount Manager

Anda juga dapat mengonfigurasi dan melakukan mount penyimpanan menggunakan **Mount Manager**.

1. Klik tombol **`Mount Manager`** di bawah tab **`Remote`** pada bilah menu atas.  
2. Klik **`New mount`** untuk membuat konfigurasi mount baru.  
3. Pilih remote dan opsional tentukan subdirektori untuk di-mount.  
4. Konfigurasikan opsi mount:  
   - **Target**: Pilih `Auto` atau tetapkan huruf drive secara manual dari daftar.  
   - (Opsional) Aktifkan **Mount to local path** untuk menentukan path mount kustom.  
   - Aktifkan **Auto mount** agar remote ini otomatis di-mount saat RcloneView dijalankan.  
1. Klik **`Save`** untuk menyimpan konfigurasi mount tanpa langsung melakukan mount.  
   - Untuk menyimpan dan langsung melakukan mount remote, klik **`Save and mount`**.  

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="mount from mount manager" class="img-medium img-center" />
## Melihat dan Mengelola Drive yang Di-mount

Untuk melihat atau mengelola konfigurasi mount Anda, buka dialog **Mount Manager** dengan mengklik tombol **`Mount Manager`** di bawah tab **`Remote`** pada menu utama.

Semua konfigurasi mount yang tersimpan akan ditampilkan di jendela Mount Manager.  
Setiap konfigurasi dikategorikan berdasarkan **status** saat ini:
- **Mounted**: Remote sedang di-mount dan aktif.
- **Unmounted**: Mount tersimpan tetapi saat ini tidak sedang di-mount.
  <img src="/support/images/en/howto/rcloneview-basic/mount-manager-status.png" alt="mount manager status" class="img-medium img-center" />
Anda dapat melakukan tindakan berikut tergantung pada statusnya:


<Tabs>
<TabItem value="Status: mounted" label="🟢 Status: mounted">

- <img src="/support/icons/unmount-icon.png" alt="unmount icon" class="inline-icon" /> : **Unmount** — Klik untuk melepas mount remote yang sedang aktif.
- <img src="/support/icons/disabled-edit-mount.png" alt="disabled edit mount" class="inline-icon" /> : (Disabled)Edit
- <img src="/support/icons/open-mount-folder.png" alt="open mount folder" class="inline-icon" /> : **Open** — Klik untuk membuka folder yang di-mount di file explorer Anda.
- <img src="/support/icons/disabled-delete-mount-configuration.png" alt="disabled delete mount configuration" class="inline-icon" /> : (Disabled)Delete
</TabItem>



<TabItem value="Status: Configured" label="🟠 Status: Unmounted">

- <img src="/support/icons/mount-run-icon.png" alt="mount run icon" class="inline-icon" /> : **Mount** — Klik untuk melakukan mount remote yang dipilih secara manual.
- <img src="/support/icons/edit-mount-configuration.png" alt="edit mount configuration" class="inline-icon" /> : **Edit** — Klik untuk mengubah pengaturan mount.
- <img src="/support/icons/disabled-open-mount-folder.png" alt="disabled open mount folder" class="inline-icon" /> : (Disabled)Open
- <img src="/support/icons/delete-mount-configuration.png" alt="delete mount configuration" class="inline-icon" /> : **Delete** — Klik untuk menghapus konfigurasi mount.
</TabItem>

</Tabs>


<br />
<br />

:::tip Quick Mount dari System Tray
Anda juga dapat mengelola mount dengan cepat melalui ikon system tray.

1. Klik kanan **ikon RcloneView** di system tray.
2. Arahkan kursor ke menu **Mount**.
3. Anda dapat:
   - Melihat drive yang sedang di-mount dan melakukan mount atau unmount pada drive tersebut
   - Unmount all
   - Start a new mount
<img src="/support/images/en/howto/rcloneview-basic/mount-from-system-tray.png" alt="mount from system tray" class="img-small img-left" />

:::

