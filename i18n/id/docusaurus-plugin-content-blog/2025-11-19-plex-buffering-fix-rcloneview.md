---
slug: plex-buffering-fix-rcloneview
title: "Atasi Buffering Plex dengan Cepat Menggunakan RcloneView — Sesuaikan Mount, VFS Cache, dan Batas Jaringan"
authors:
  - tayson
description: Hentikan buffering Plex saat streaming dari Google Drive, Dropbox, S3, atau cloud lainnya dengan menggunakan mount manager RcloneView, preset VFS cache, dan diagnostik performa alih-alih mengejar flag CLI.
keywords:
  - rcloneview
  - plex buffering fix
  - plex vfs cache
  - rclone plex mount
  - plex stuttering cloud
  - google drive plex
  - plex 4k streaming
tags:
  - RcloneView
  - plex
  - performance
  - troubleshooting
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Atasi Buffering Plex dengan Cepat Menggunakan RcloneView — Sesuaikan Mount, VFS Cache, dan Batas Jaringan

> Plex hanya akan semulus penyimpanan di baliknya. Dengan RcloneView Anda dapat melihat, menyesuaikan, dan memantau setiap pengaturan yang diperlukan untuk streaming pustaka 4K dari Google Drive, Dropbox, Wasabi, atau S3 tanpa jeda.

Buffering Plex memiliki banyak penyebab—disk yang lambat, VFS cache yang kurang memadai, scanner yang terlalu agresif, atau throttling Google Drive. RcloneView menghadirkan GUI di atas rclone sehingga Anda dapat melakukan mount ke cloud, mengatur mode cache, dan memantau throughput secara real-time tanpa perlu menghafal flag. Artikel ini memberikan checklist bagi admin Plex untuk menghilangkan stutter dan mengembalikan malam-malam nonton maraton Anda.

<!-- truncate -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Triase cepat: apakah ini masalah Plex, jaringan, atau mount?

| Gejala | Kemungkinan penyebab | Yang harus diperiksa di RcloneView |
| --- | --- | --- |
| Buffering setelah 30–60 detik | Cache tidak menampung seluruh file atau cache berada di disk yang lambat | Detail mount → Cache Mode (**Full**) dan **Cache max size** yang cukup besar di SSD |
| Buffering saat melompati bab | Data cache kedaluwarsa terlalu cepat | Advanced mount options → perpanjang jendela **Cache max age** dan **Dir cache time** (5–15 menit) |
| Streaming lancar secara lokal tetapi macet dari jarak jauh | Bottleneck jaringan/ISP | Pastikan mount berada di penyimpanan cepat; periksa LAN/ISP. Gunakan Mount Manager untuk memastikan mount tetap terpasang. |
| SD berjalan lancar tetapi 4K gagal | Ukuran cache terlalu kecil untuk file besar atau path mount berubah | Advanced options → Naikkan **Cache max size** dan pertahankan **Target** tetap atau **Mount to local path** untuk Plex |
| Pemindaian pustaka membuat Plex freeze | Pengambilan direktori berulang | Advanced options → **Dir cache time** (misalnya, 5–15 menit); jadwalkan pemindaian di luar jam sibuk |

Jika mount adalah bottleneck-nya, solusinya ada di RcloneView.

## Langkah 1 — Mount cloud dengan default yang tepat

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

1. Tambahkan remote cloud Anda (Google Drive, Dropbox, Wasabi, S3, dll.) di **Explorer → + New Remote**. Butuh penyegaran? Lihat [/support/howto/remote-storage-connection-settings/add-oath-online-login](/howto/remote-storage-connection-settings/add-oath-online-login).
2. Buka **Mount Manager → Add Mount**.
3. Pilih folder remote yang menyimpan media (`gdrive-media:Movies`) dan atur path mount yang terlihat oleh Plex (drive letter di Windows atau `/Volumes/CloudMovies` di macOS/Linux).
4. Biarkan **Target** pada `Auto` kecuali Plex membutuhkan drive letter tetap. Untuk menguncinya, pilih sebuah letter (Windows) atau aktifkan **Mount to local path** dan arahkan ke folder permanen (Linux/macOS).
5. Di **Advanced**, biarkan **Mount type** pada `cmount` untuk Windows; gunakan `nfsmount` hanya jika Anda sudah mengandalkan NFS di Linux/macOS. Centang **Network drive** di Windows agar layanan Plex dapat melihat mount tersebut. Gunakan **Allow other** di Linux saat Plex berjalan sebagai user lain. Biarkan **Read only** nonaktif jika Anda menambahkan file atau subtitle melalui mount.
6. Pada **Cache mode**, pilih **Full** (terbaik untuk Plex). Atur **Cache max size**, **Cache max age**, dan **Dir cache time** pada dialog yang sama agar media besar tetap ter-cache.
7. Aktifkan **Auto start on launch** agar mount kembali aktif saat server reboot.

  <img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />


### Opsi mount lanjutan yang diterjemahkan untuk pengguna Plex

Nama-nama field ini sesuai dengan dialog Mount di RcloneView. Nilai default mengikuti panduan [Mount Cloud Storage as a Local Drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive); kolom "ramah Plex" menjelaskan cara mengaturnya untuk streaming.

| Field RcloneView | Fungsinya | Pengaturan yang ramah Plex |
| --- | --- | --- |
| Volume name | Label yang ditampilkan oleh OS/file manager. | Opsional; gunakan nama yang jelas seperti `Plex Cloud`. |
| Mount type | Engine backend (`cmount` default di Windows, `nfsmount` umumnya di Linux/macOS). | Tetap gunakan `cmount` kecuali Anda sudah menggunakan NFS; mengubahnya jarang memperbaiki buffering. |
| Target | Drive letter atau target mount yang ditetapkan otomatis. | `Auto` sudah cukup; pilih letter/path tetap jika Plex berjalan sebagai service. |
| Mount to local path | Lokasi mount kustom. | Gunakan saat Plex mengharapkan path Unix yang stabil (misalnya, `/mnt/plex-media`). |
| Network drive | Menandai mount sebagai network drive di Windows. | Aktifkan agar akun layanan Plex dapat melihat mount. |
| Read only | Memblokir penulisan ke remote. | Biarkan nonaktif agar unduhan subtitle atau perubahan metadata diizinkan; aktifkan hanya untuk mount khusus pemutaran. |
| Allow other | Mengizinkan user OS lain mengakses mount (Linux). | Aktifkan jika Plex berjalan di bawah user yang berbeda dari login Anda. |
| Cache mode | Perilaku VFS cache: `off`, `minimal`, `writes`, `full` (default `writes`). | Gunakan **Full** untuk Plex agar seluruh file tetap ter-cache dan mempercepat seeking. |
| Cache max size | Ukuran maksimum VFS cache (byte). `-1` = tanpa batas. | Tetapkan ukuran eksplisit (misalnya, `75000000000` untuk ~75 GB) untuk menjaga ruang SSD. |
| Cache max age | Berapa lama data cache tetap valid (nanodetik). | 3600000000000 = 1 jam, 21600000000000 = 6 jam. Mulai dengan 6–12 jam agar file 4K tetap hangat. |
| Dir cache time | Berapa lama daftar direktori tetap ter-cache (nanodetik). | 300000000000 = 5 menit, 900000000000 = 15 menit. Sesuaikan dengan frekuensi pemindaian Anda (biasanya 5–15 menit). |

## Langkah 2 — Sesuaikan ukuran dan kesegaran VFS cache untuk Plex

RcloneView menyediakan pengaturan cache yang secara langsung memengaruhi pemutaran Plex. Masukkan nilai waktu dalam **nanodetik**.

- **Cache mode**: Gunakan **Full** untuk Plex agar seluruh file tetap berada di cache demi seeking yang lancar. Jika Anda juga menulis subtitle/metadata melalui mount, Full tetap berfungsi; biarkan **Read only** tidak dicentang agar penulisan diizinkan.
- **Cache max size**: Sediakan cukup ruang SSD untuk stream bersamaan (misalnya, ~75–100 GB per pengguna 4K aktif). Contoh: `107374182400` ≈ 100 GB.
- **Cache max age**: Jaga agar media yang ter-cache tetap hangat selama beberapa jam sehingga kembali ke sebuah episode tidak perlu mengambil ulang data. Contoh: `21600000000000` = 6 jam; `43200000000000` = 12 jam.
- **Dir cache time**: Kurangi perubahan direktori yang berulang saat Plex melakukan pemindaian. Contoh: `300000000000` = 5 menit; `900000000000` = 15 menit. Segarkan secara manual setelah menambahkan konten.
- RcloneView tidak menampilkan `VFS read ahead`, `buffer-size`, atau `--tpslimit`; fokuslah pada field cache di atas untuk manfaat terbesar bagi Plex.

## Langkah 3 — Sesuaikan throughput RcloneView dengan kebutuhan Plex

- Pertahankan **Target atau Mount to local path** tetap agar pustaka Plex tidak pernah kehilangan path mount-nya setelah reboot.
- Gunakan **Auto start on launch** agar mount kembali aktif sebelum layanan Plex dimulai.
- Di Windows, aktifkan **Network drive**; di Linux, aktifkan **Allow other** agar akun layanan Plex dapat melihat mount.
- Pantau status **Mount Manager**. Jika sebuah mount berubah menjadi Unmounted, mount ulang dari sana atau dari menu system tray alih-alih membangun ulang pustaka.
- Untuk pengaturan multi-pustaka, buat mount terpisah (misalnya, Movies vs. Shows) dan atur **Cache max size** per mount agar satu pustaka tidak menggusur cache pustaka lainnya.

## Langkah 4 — Perkuat pengaturan jaringan + OS

- **Jaringan lokal**: Hubungkan server Plex melalui Ethernet; atur QoS agar mendapatkan prioritas bandwidth.
- **Windows**: Mount menggunakan drive letter tetap dan pastikan layanan Plex berjalan sebagai user yang sama dengan pemilik mount.
- **Linux/macOS**: Gunakan `/etc/fstab` atau launch agent hanya setelah memverifikasi bahwa auto-mount RcloneView berfungsi—konsistensi lebih penting daripada skrip manual.
- **Batas bandwidth**: Di **Settings → Transfers**, biarkan bandwidth tanpa batas untuk streaming LAN, tetapi tetapkan batas atas (misalnya, 300 Mbps) jika beban kerja lain berbagi jalur yang sama.


## Cheatsheet troubleshooting

| Masalah | Solusi |
| --- | --- |
| Buffering setelah periode idle | Naikkan **Cache max age** (misalnya, 6–12 jam) dan biarkan **Cache mode** pada Full agar bagian yang ter-cache tetap hangat |
| Buffering saat beberapa pengguna streaming | Naikkan **Cache max size** agar cukup untuk file 4K yang berjalan bersamaan dan pastikan SSD memiliki ruang kosong |
| Drive ter-unmount di malam hari | Aktifkan **Auto start on launch** dan gunakan **Target** tetap atau **Mount to local path** |
| Plex tidak dapat melihat mount | Di Windows, periksa **Network drive** dan jalankan Plex dengan kredensial yang sama; di Linux, aktifkan **Allow other** |
| Pemindaian pustaka lambat | Naikkan **Dir cache time** menjadi 5–15 menit; segarkan cache setelah menambahkan konten baru |

## Solusi buffering di dunia nyata

1. **Kolektor 4K HDR**  
   - Cache Mode: Full  
   - Cache max size: 120 GB (SSD/NVMe)  
   - Cache max age: 12 jam (`43200000000000` ns)  
   - Dir cache time: 15 menit (`900000000000` ns)  
   Hasil: Lompatan bab instan, buffer &lt;1 detik untuk remux Dolby Vision.

2. **Server keluarga dengan campuran 1080p/4K**  
   - Dua mount: `Movies`, `Shows`, masing-masing dengan ukuran cache sendiri  
   - Job scheduler menghangatkan folder yang sering ditonton setiap malam  
   Hasil: Cache terpisah mencegah kartun anak-anak menggusur cache film.

3. **Pengguna yang bepergian dengan LTE**  
   - Batas bandwidth: 80 Mbps  
   - Transcoding Plex diatur ke 8 Mbps 1080p  
   - Mount RcloneView tetap pada mode cache **Full**; penulisan tetap antre hingga konektivitas kembali  
   Hasil: Stream tetap stabil bahkan melalui hotspot seluler.

## FAQ

**Apakah saya perlu mount terpisah untuk setiap pustaka?**  
Tidak wajib, tetapi memisahkan pustaka besar membuat cache lebih mudah dikelola dan memungkinkan Anda menyesuaikan ukuran/usia cache per pustaka (misalnya, cache age yang lebih panjang untuk film 4K dibandingkan episode TV).

## Nonton tanpa jeda

Buffering Plex dapat diatasi begitu Anda menaklukkan mount, cache, dan kuota. RcloneView menyediakan GUI untuk mengonfigurasi VFS cache dengan benar, memantau throughput, dan mengotomatiskan pemanasan cache—tanpa perlu menebak-nebak skrip shell. Sesuaikan pengaturan di atas, pantau grafik transfer Anda, dan nikmati pustaka Plex yang berperilaku seperti penyimpanan lokal.


<CloudSupportGrid />
