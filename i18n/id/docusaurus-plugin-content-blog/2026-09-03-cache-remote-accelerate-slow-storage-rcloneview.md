---
slug: cache-remote-accelerate-slow-storage-rcloneview
title: "Cache Remote — Mempercepat Penyimpanan Cloud yang Lambat di RcloneView"
authors:
  - robin
description: "Pelajari bagaimana cache virtual remote RcloneView mempercepat backend cloud yang lambat dengan menyimpan cache daftar direktori dan data file, termasuk integrasi Plex."
keywords:
  - rclone cache remote
  - pengaturan cache remote rcloneview
  - percepat penyimpanan cloud lambat
  - integrasi rclone cache plex
  - percepat penjelajahan file cloud
  - cache virtual remote rclone
  - virtual remote rcloneview
  - solusi penyimpanan cloud lambat
  - cache cloud plex media server
  - cache direktori rclone
tags:
  - RcloneView
  - feature
  - performance
  - plex
  - mount
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cache Remote — Mempercepat Penyimpanan Cloud yang Lambat di RcloneView

> Beberapa backend cloud lambat saat menampilkan dan menampilkan ulang daftar setiap kali dijelajahi — cache virtual remote mengatasi hal ini dengan mengingat apa yang sudah pernah diambil.

Tidak semua penyedia penyimpanan merespons dengan cepat. Backend dengan batas laju API yang ketat atau latensi tinggi per permintaan dapat membuat penjelajahan terasa lambat, terutama pada struktur folder besar atau saat server media seperti Plex berulang kali memindai pustaka yang sama. RcloneView menghadirkan cache virtual remote milik rclone langsung di wizard New Remote, sehingga Anda dapat membungkus remote yang lambat dengan lapisan cache tanpa perlu mengubah file konfigurasi secara manual.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Yang Dilakukan Cache Remote

Cache remote adalah pembungkus, bukan jenis penyimpanan yang berdiri sendiri — ia berada di antara RcloneView dan remote yang sudah Anda konfigurasi sebelumnya, mencegat daftar direktori dan pembacaan file sehingga permintaan yang berulang tidak lagi menyentuh backend. Saat pertama kali Anda menjelajahi sebuah folder, RcloneView mengambilnya dari remote yang dibungkus seperti biasa; pada kunjungan berikutnya, cache akan menyajikan hasilnya secara lokal, yang sangat terasa pada remote dengan waktu respons API lambat atau batas laju yang ketat.

Ini berbeda dari mode VFS cache bawaan pada mount, yang hanya menyimpan cache data untuk satu sesi mount. Cache virtual remote justru membuat remote baru yang persisten dan memiliki nama sendiri, yang dapat Anda jelajahi, mount, atau sinkronkan secara langsung, dan status cache-nya tetap bertahan meski aplikasi dimulai ulang. Kasus penggunaan nyata yang paling umum adalah memasangkan cache remote dengan integrasi Plex media server, karena tanpa itu pemindaian pustaka yang terus-menerus akan menghasilkan panggilan API berulang yang membebani penyimpanan cloud yang mendasarinya.

<img src="/support/images/en/blog/new-remote.png" alt="Membuat cache virtual remote yang membungkus remote penyimpanan cloud yang sudah ada di RcloneView" class="img-large img-center" />

## Menyiapkan Cache Remote di RcloneView

Buka tab Remote > New Remote lalu pilih Cache dari opsi virtual remote. Anda akan diminta memilih remote dasar yang akan dibungkus — remote ini harus sudah dikonfigurasi di RcloneView, baik itu penyedia cloud, bucket yang kompatibel dengan S3, maupun koneksi berbasis protokol seperti SFTP atau WebDAV. Beri cache remote nama yang berbeda agar jelas terlihat di Tab Bar dan Remote Manager bahwa Anda sedang menjelajahi versi cache, bukan koneksi aslinya.

Setelah dibuat, cache remote akan muncul di Remote Manager bersama remote lainnya dan berperilaku seperti entri lain untuk penjelajahan, mount, atau sinkronisasi. RcloneView me-mount DAN menyinkronkan 90+ penyedia dari satu jendela, di Windows, macOS, dan Linux, sehingga cache remote yang dibangun di atas backend lambat mendapatkan kumpulan fitur yang sama seperti koneksi native — jalankan Dry Run untuk sinkronisasi terhadapnya, tambahkan ke Job Manager, atau mount sebagai drive lokal.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Melakukan mount cache remote dari toolbar panel Remote Explorer" class="img-large img-center" />

## Kapan Caching Benar-Benar Membantu

Caching paling bermanfaat pada remote di mana operasi menampilkan daftar memerlukan biaya besar dibandingkan jumlah data yang berubah — pustaka foto atau video besar yang berulang kali dipindai Plex, struktur folder yang dalam, atau penyedia dengan batas laju yang konservatif sehingga membatasi permintaan beruntun yang cepat. Caching kurang berguna untuk remote yang sering Anda tulis, karena file yang berubah perlu menyebar melalui cache terlebih dahulu sebelum alat lain dapat melihatnya secara konsisten.

Jika Anda melakukan mount cache remote untuk streaming media, pasangkan dengan mode VFS cache milik mount itu sendiri yang diatur ke writes atau full — kedua lapisan cache ini bekerja pada level berbeda dan saling melengkapi.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Job Manager menampilkan pekerjaan sinkronisasi yang berjalan terhadap cache remote" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Konfigurasikan remote lambat yang ingin Anda percepat, jika belum diatur.
3. Buka New Remote, pilih Cache, lalu pilih remote tersebut sebagai remote yang akan dibungkus.
4. Mount atau jelajahi cache remote baru dan bandingkan kecepatan penampilan daftar pada kunjungan kedua ke folder yang sama.

Cache remote tidak akan membuat koneksi internet Anda lebih cepat, tetapi untuk pola penjelajahan yang berulang — terutama pemindaian pustaka media — cache remote mengubah backend yang lambat menjadi terasa instan setelah kunjungan pertama.

---

**Panduan Terkait:**

- [Virtual Remote di RcloneView — Penjelasan Combine, Union, dan Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [Streaming Cloud Plex dengan RcloneView](https://rcloneview.com/support/blog/plex-cloud-mount-rcloneview)
- [Mengatasi Buffering Plex — Penyesuaian VFS Cache di RcloneView](https://rcloneview.com/support/blog/plex-vfs-cache-rcloneview)

<CloudSupportGrid />
