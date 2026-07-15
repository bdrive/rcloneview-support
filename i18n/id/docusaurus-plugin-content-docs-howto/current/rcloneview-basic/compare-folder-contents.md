---
sidebar_position: 4
description: "Pelajari cara membandingkan folder lokal dan remote, memfilter hasil, serta menyalin atau menghapus file secara langsung menggunakan fitur Compare tingkat lanjut dari RcloneView."
keywords:
  - rcloneview
  - rclone
  - bandingkan folder
  - salin folder
  - perbedaan file
  - sinkronisasi cloud
  - manajemen file
  - transfer file
  - file explorer
  - manajemen remote storage
tags:
  - RcloneView
  - compare
  - cloud-storage
  - folder-differences
  - Remote-storage-managent
date: 2025-05-30
author: Jay
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Membandingkan isi folder

RcloneView membantu Anda mengidentifikasi perbedaan antara dua folder—baik di disk lokal maupun antar remote cloud—serta menyalin atau mengelola file secara efisien menggunakan fitur Compare bawaannya.

## Memilih folder untuk dibandingkan

Untuk mulai membandingkan folder:
- Buka dua tab pada panel Explorer.
- Pilih folder yang ingin dibandingkan dari pohon folder, atau masukkan path lengkap secara manual menggunakan Path Bar.
- Klik tombol **`Compare`** pada menu **`Home`** di bagian atas untuk memulai perbandingan.

<img src="/support/images/en/howto/rcloneview-basic/select-compare-folder.png" alt="select compare folder" class="img-medium img-center" />
Setelah perbandingan selesai, sebuah popup ringkasan akan muncul.
Untuk menonaktifkan pesan ini di kemudian hari, centang **"Don't show this message again."**
<img src="/support/images/en/howto/rcloneview-basic/folder-comparison-completed.png" alt="folder comparison completed" class="img-medium img-center" />
Untuk detail mengenai tata letak layar perbandingan folder dan arti setiap ikon, silakan lihat panduan perbandingan folder.

## Hasil perbandingan dan mengelola file

Perbandingan folder memungkinkan Anda untuk langsung membandingkan dan memilih file untuk dikelola.

Namun, jika Anda perlu melakukan sinkronisasi folder besar atau mengelola beberapa folder remote secara efisien, menggunakan **`Sync`** adalah cara yang lebih praktis.

### Menampilkan berdasarkan jenis hasil yang dipilih

Anda dapat memfilter hasil perbandingan untuk hanya menampilkan file yang relevan dengan operasi Anda.  
Ini membantu Anda fokus pada file yang perlu disalin atau ditinjau.

Sebagai contoh, jika Anda ingin menyalin file dari folder remote kiri ke folder kanan:

- Klik ikon **`Show left-only files`** <img src="/support/icons/show-left-only-files.png" alt="show left only files" class="inline-icon" /> untuk menampilkan hanya file yang ada di folder kiri tetapi tidak ada di kanan.
- Klik ikon **`Show different files`** <img src="/support/icons/show-different-files.png" alt="show different files" class="inline-icon" /> untuk menampilkan file yang ada di kedua folder tetapi berbeda ukurannya.
- Dengan cara ini, Anda dapat fokus hanya pada file target untuk disalin ke sisi kanan, tanpa terganggu oleh file yang sudah tersinkronisasi.

> ✅ Ini membuat pemilihan dan penyalinan file yang diperlukan dalam satu arah menjadi jauh lebih mudah.
<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="compare display select" class="img-medium img-center" />



<details>
<summary>Detail ikon lainnya</summary>

#### Memahami ikon pada jendela Compare
<Tabs>
<TabItem value="Display Icons" label="Ikon Tampilan">
Saat Anda mengklik setiap ikon dengan mouse, perilaku pemfilteran berikut akan diterapkan.  
Mengklik lagi akan mengaktifkan atau menonaktifkan filter tersebut.

Ketika beberapa ikon dipilih, file yang cocok dengan **salah satu** kondisi yang dipilih akan ditampilkan (logika **OR**).

<img src="/support/icons/show-left-only-files.png" alt="show left only files" class="inline-icon" /> : Menampilkan hanya file yang ada di folder kiri tetapi tidak ada di kanan.

<img src="/support/icons/show-left-only-files.png" alt="show left only files" class="inline-icon" /> : Menampilkan hanya file yang ada di folder kanan tetapi tidak ada di kiri.

<img src="/support/icons/same-file-icon.png" alt="same file icon" class="inline-icon" /> : Menampilkan hanya file yang ada di kedua folder dan identik.

<img src="/support/icons/show-different-files.png" alt="show different files" class="inline-icon" />  : Menampilkan file yang ada di kedua folder tetapi berbeda ukurannya.

<img src="/support/icons/show-errored-files.png" alt="show errored files" class="inline-icon" /> : Menampilkan error atau konflik apa pun.

</TabItem>

<TabItem value="Navigate Icons" label="Ikon Navigasi">
Ikon-ikon ini digunakan pada tampilan **Compare** untuk berpindah ke atas atau ke bawah melalui hierarki folder berdasarkan struktur daftar folder datar (flat) saat ini.

<img src="/support/icons/navigate-to-upper-folder.png" alt="navigate to upper folder" class="inline-icon" /> : Berpindah ke **folder atas** pada daftar saat ini.

<img src="/support/icons/navigate-to-lower-folder.png" alt="navigate to lower folder" class="inline-icon" /> : Berpindah ke **folder bawah** pada daftar saat ini.

</TabItem>

<TabItem value="Operation Icons" label="Ikon Operasi">
Ikon-ikon ini digunakan untuk melakukan operasi file di dalam folder—seperti menghapus file atau menyalinnya ke kiri atau kanan.

<img src="/support/icons/copy-file-to-right.png" alt="copy file to right" class="inline-icon" /> : Menyalin file yang dipilih ke folder kanan.

<img src="/support/icons/copy-files-to-left.png" alt="copy files to left" class="inline-icon" /> : Menyalin file yang dipilih ke folder kiri.

<img src="/support/icons/delete-files.png" alt="delete files" class="inline-icon" /> : Menghapus file yang dipilih dari salah satu sisi.

</TabItem>

<TabItem value="Find Icons" label="Ikon Find">
Ikon **Find** digunakan pada **tampilan Compare** untuk menemukan folder dengan perubahan jumlah file atau ukuran file yang paling signifikan.

<img src="/support/icons/find-folder-by-count.png" alt="find folder by count" class="inline-icon" /> : Menemukan folder berdasarkan jumlah file yang berubah selama perbandingan.

<img src="/support/icons/find-folder-by-size.png" alt="find folder by size" class="inline-icon" /> : Menemukan folder berdasarkan total ukuran file yang berubah selama perbandingan.

<img src="/support/icons/find-folder-with-largest-change.png" alt="find folder with largest change" class="inline-icon" /> : Menemukan dan berpindah ke folder dengan perubahan jumlah file atau ukuran paling signifikan.

<img src="/support/icons/find-folder-with-next-large-change.png" alt="find folder with next large change" class="inline-icon" /> : Berpindah ke folder berikutnya dengan perbedaan jumlah file atau ukuran yang lebih besar.

<img src="/support/icons/find-folder-with-smallest-change.png" alt="find folder with smallest change" class="inline-icon" /> : Menemukan dan berpindah ke folder dengan jumlah perubahan paling sedikit.

<img src="/support/icons/find-folder-with-next-smaller-change.png" alt="find folder with next smaller change" class="inline-icon" /> : Berpindah ke folder berikutnya dengan perubahan jumlah file atau ukuran yang lebih kecil.

</TabItem>

</Tabs>


</details>


### Menyalin file antar folder remote

#### Memilih file untuk disalin

- Gunakan `Ctrl + Click` untuk memilih file satu per satu
- Gunakan `Shift + Click` untuk memilih rentang file
- Atau cukup gunakan drag and drop antar panel

#### Melakukan operasi penyalinan

Setelah file dipilih:
- Klik tombol **`Copy →`** untuk menyalin file yang dipilih dari sisi kiri ke sisi kanan.
- Klik tombol **`← Copy`** untuk menyalin dari kanan ke kiri.

💡 Penyalinan hanya terjadi jika:
- File tersebut tidak ada di sisi target
- File tersebut ada di kedua sisi tetapi memiliki ukuran yang berbeda

Setelah penyalinan selesai:
- File yang disalin akan ditandai dengan ikon **`equal`** <img src="/support/icons/equal-icon.png" alt="equal icon" class="inline-icon" /> pada tampilan perbandingan
- Status bar di bagian bawah akan diperbarui dengan detail penyelesaian
<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/compare-copy-operation.png" alt="compare copy operation" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/compare-copy-operation-completed.png" alt="compare copy operation completed" class="img-medium img-center" />
</div>
:::important Checksum (segera hadir)
Secara default, RcloneView membandingkan file berdasarkan nama dan ukuran.  
Namun, ini mungkin tidak cukup untuk mendeteksi perbedaan konten ketika nama dan ukuran file sama.
✅ Perbandingan checksum akan memungkinkan verifikasi konten file pada tingkat byte.  
Fitur ini direncanakan untuk pembaruan mendatang dan akan membantu memastikan akurasi sinkronisasi yang lebih tinggi.
:::
#### Menghapus file

Anda juga dapat menghapus file yang dipilih dari salah satu folder:
- Klik tombol **`Delete`** di sebelah kiri untuk menghapus file dari folder kiri
- Klik tombol **`Delete`** di sebelah kanan untuk menghapus file dari folder kanan

⚠️ Penghapusan bersifat permanen. Periksa kembali file yang dipilih sebelum melanjutkan.
 
## Menggunakan filter untuk mempertajam perbandingan

Fitur filter memungkinkan Anda menjalankan perbandingan folder secara lebih efisien dengan mengecualikan file atau folder tertentu dari hasil.

 :::important Diperlukan Lisensi Plus
Pemfilteran tersedia pada versi Lisensi **Plus** RcloneView.
:::

### Mengapa menggunakan filter?

Anda mungkin ingin mengecualikan folder atau jenis file tertentu yang tidak relevan dengan tugas perbandingan Anda.  
Dengan alat filter, Anda dapat dengan mudah menentukan file atau folder mana yang harus diabaikan selama perbandingan.

### Cara mengecualikan folder tertentu:

Sebagai contoh, untuk mengecualikan semua folder bernama `folder2` dari perbandingan:
1. Klik ikon **`Filter`** <img src="/support/icons/filter-run-icon.png" alt="filter run icon" class="inline-icon" /> pada layar Compare.
2. Pada kolom input filter, ketik `folder2/` dan klik **`Add`**.
3. Folder tersebut akan muncul pada kategori **`Others`**.
4. Centang kotak di sebelah `folder2/` dan klik **`OK`** untuk menerapkan filter.
5. Jalankan ulang perbandingan.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/add-custom-filter-rule.png" alt="add custom filter rule" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/addjust-custom-filter-rule.png" alt="addjust custom filter rule" class="img-medium img-center" />
</div>

💡 Pemfilteran sangat membantu ketika folder seperti `cache`, `temp`, atau direktori konfigurasi pribadi hanya ada sebagai referensi dan tidak perlu dibandingkan atau disalin.



<details>
<summary>Aturan Filter yang Sering Digunakan</summary>

#### Contoh filter yang umum digunakan

**`.iso`** : Mengecualikan semua file .iso

**`/.git/*`** : Hanya mengecualikan file di dalam folder .git pada root, tidak termasuk subfolder

**`/.git/`** :  Mengecualikan seluruh folder .git pada root, termasuk semua isi di dalamnya

**`.git/`** : Mengecualikan semua folder .git dan seluruh isinya, di mana pun lokasinya

</details>
