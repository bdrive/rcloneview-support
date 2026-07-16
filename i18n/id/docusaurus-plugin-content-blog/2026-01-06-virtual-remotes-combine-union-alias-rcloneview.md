---
slug: virtual-remotes-combine-union-alias-rcloneview
title: "Virtual Remote RcloneView: Combine, Union, dan Alias untuk Membangun Satu Ruang Kerja Multi-Cloud"
authors:
  - tayson
description: "Gunakan virtual remote RcloneView untuk menyatukan folder multi-cloud tanpa menyalin data. Pelajari kapan memilih Alias, Combine, atau Union dan cara membangun alur kerja yang lebih rapi."
keywords:
  - virtual remote
  - combine remote
  - union remote
  - alias remote
  - multi cloud viewer
  - rcloneview virtual remote
  - cloud workspace
  - multi cloud management
  - rcloneview workflow
  - cloud file organization
tags:
  - RcloneView
  - cloud-storage
  - file-management
  - sync
  - multi-cloud
---

import RvCta from '@site/src/components/RvCta';

# Virtual Remote RcloneView: Combine, Union, dan Alias untuk Membangun Satu Ruang Kerja Multi-Cloud

> Sebaran multi-cloud membuat folder sulit ditemukan. Virtual remote di RcloneView memungkinkan Anda menyatukan tampilan tanpa memindahkan atau menduplikasi satu pun berkas.

Virtual remote adalah salah satu cara tercepat untuk merapikan alur kerja multi-cloud Anda. Alih-alih berpindah antar tab atau mengonfigurasi ulang job, Anda dapat membuat tampilan virtual yang mengarah ke remote dan folder yang sudah ada. Data asli Anda tetap berada di tempatnya, tetapi ruang kerja Anda menjadi lebih mudah dinavigasi dan diotomatisasi.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa virtual remote itu penting

- Berhenti menggali path yang dalam setiap kali Anda menjalankan job atau membandingkan folder.
- Menyajikan beberapa cloud sebagai satu ruang kerja tanpa menyalin data.
- Menjaga konsistensi pengaturan Anda di Explorer, Compare, Sync, dan Jobs.

## Apa itu virtual remote di RcloneView?

Virtual remote berada di atas remote dan folder yang sudah ada. Mereka tidak menyimpan data itu sendiri. Sebaliknya, mereka mengarah ke lokasi yang sudah Anda miliki dan menampilkannya sebagai tampilan baru yang lebih rapi.

Buat melalui **New Remote → Virtual**:

- **Alias**: pintasan ke folder yang dalam.
- **Combine**: satu tampilan yang menampilkan beberapa folder berdampingan.
- **Union**: satu tampilan gabungan yang memadukan beberapa folder menjadi satu.

<img src="/support/images/en/blog/new-remote.png" alt="New Remote screen" class="img-large img-center" />

## Alias remote: akses instan ke folder yang dalam

**Paling cocok untuk**: folder yang sering Anda buka setiap hari.

Alias adalah bookmark. Ia membuka folder tertentu secara instan, yang sangat cocok untuk job berulang atau path tim bersama.

Contoh: bookmark folder tim bersama seperti `Drive:Team/Projects/Client-A` dan buka sebagai `Alias_ClientA`.

<img src="/support/images/en/howto/remote-storage-connection-settings/alias/new-remote-add-alias.png" alt="Add alias remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-alias-file-browser.png" alt="Alias remote file browser" class="img-large img-center" />

Panduan: [/support/howto/remote-storage-connection-settings/alias-remote](/howto/remote-storage-connection-settings/alias-remote)

## Combine remote: satu tampilan, banyak folder

**Paling cocok untuk**: dashboard dan kumpulan proyek.

Combine menampilkan folder berdampingan di dalam satu remote. Setiap folder mempertahankan struktur aslinya, tetapi Anda menelusurinya di satu tempat.

Contoh: buat remote Combine `Marketing_Assets` yang berisi:

- `Drive:Marketing`
- `Dropbox:Assets`

<img src="/support/images/en/howto/remote-storage-connection-settings/combine/new-remote-add-combine.png" alt="Add combine remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-check-folder-1.png" alt="Combine view example" class="img-large img-center" />

Panduan: [/support/howto/remote-storage-connection-settings/combine-remote](/howto/remote-storage-connection-settings/combine-remote)

## Union remote: satu folder gabungan lintas cloud

**Paling cocok untuk**: arsip terkumpul atau ingesti multi-sumber.

Union menggabungkan beberapa folder menjadi satu tampilan yang berpadu. Ini ideal ketika Anda ingin semuanya terlihat seperti satu folder tunggal meskipun berkasnya berada di cloud yang berbeda.

Contoh: gabungkan rekaman mentah bulanan dari dua remote menjadi satu tampilan `Raw_Footage`.

<img src="/support/images/en/howto/remote-storage-connection-settings/union/new-remote-add-union.png" alt="Add union remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/union/union-check-folder-1.png" alt="Union view example" class="img-large img-center" />

Panduan: [/support/howto/remote-storage-connection-settings/union-remote](/howto/remote-storage-connection-settings/union-remote)

## Panduan cepat memilih: Alias vs Combine vs Union

| Kebutuhan | Pilih | Alasan |
| --- | --- | --- |
| Cepat membuka folder yang dalam | **Alias** | Pintasan tunggal ke path tertentu |
| Melihat beberapa folder berdampingan | **Combine** | Mempertahankan struktur folder terpisah |
| Memperlakukan beberapa folder sebagai satu | **Union** | Tampilan gabungan untuk data terkumpul |

## Alur kerja praktis dengan virtual remote

- **Bandingkan sebelum sinkronisasi**: jalankan Compare pada tampilan Combine atau Union untuk melihat perbedaan terlebih dahulu.  
  Panduan: [/support/howto/rcloneview-basic/compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents)
- **Sinkronisasi dari beberapa sumber**: sinkronisasi remote Union ke tujuan pencadangan untuk mencerminkan arsip yang berpadu.  
  Panduan: [/support/howto/rcloneview-basic/synchronize-remote-storages](/howto/rcloneview-basic/synchronize-remote-storages)
- **Simpan job sekali saja**: gunakan Job Manager untuk menjadwalkan sinkronisasi virtual remote dan biarkan berjalan otomatis.  
  Panduan: [/support/howto/rcloneview-basic/create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs)
- **Mount opsional**: mount virtual remote dan telusuri sebagai drive lokal.  
  Panduan: [/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results filters" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-scheduling.png" alt="Add job scheduling" class="img-large img-center" />
</div>
<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount from Remote Explorer" class="img-large img-center" />

## Praktik terbaik dan konvensi penamaan

- Gunakan prefiks yang jelas: `Alias_ProjectX`, `Combine_Marketing`, `Union_Archive`.
- Simpan catatan sumber di nama job atau deskripsi Job Manager.
- Hindari mencampur folder yang tidak berkaitan dalam satu Union agar tidak membingungkan.
- Gunakan Combine saat Anda menginginkan kejelasan, dan Union saat Anda menginginkan kesederhanaan.

## Kesimpulan

Virtual remote mengurangi hambatan di seluruh alur kerja multi-cloud. Alias, Combine, dan Union memungkinkan Anda membangun ruang kerja yang rapi tanpa menyalin data, sehingga tim dapat bergerak lebih cepat sambil menjaga struktur tetap utuh. Coba salah satunya hari ini dan lihat betapa mudahnya navigasi harian Anda.
