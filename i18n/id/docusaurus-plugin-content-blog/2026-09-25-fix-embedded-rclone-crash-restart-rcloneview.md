---
slug: fix-embedded-rclone-crash-restart-rcloneview
title: "Mengatasi Crash Rclone Bawaan — Restart dan Pulihkan dengan RcloneView"
authors:
  - tayson
description: "Atasi putusnya koneksi rclone bawaan di RcloneView dengan langkah restart, pencatatan log, dan opsi cadangan rclone eksternal."
keywords:
  - crash rclone bawaan
  - koneksi rclone terputus
  - pemecahan masalah RcloneView
  - restart rclone bawaan
  - error rclone rc api
  - file log rclone
  - koneksi rclone eksternal
  - rcloneview tidak terhubung
  - pembaruan otomatis rclone
  - perbaiki error rclone
tags:
  - RcloneView
  - troubleshooting
  - tips
  - reference
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mengatasi Crash Rclone Bawaan — Restart dan Pulihkan dengan RcloneView

> Ketika footer menampilkan "terputus" alih-alih nomor versi, mesin rclone bawaan telah berhenti merespons — berikut cara memulihkannya tanpa kehilangan riwayat pekerjaan Anda.

RcloneView dilengkapi dengan binary rclone bawaan yang berkomunikasi dengan aplikasi melalui alamat API lokal, secara default `http://127.0.0.1:5582`. Sebagian besar waktu koneksi ini tidak terlihat — Anda tidak pernah memikirkannya karena selalu berjalan dengan baik. Namun jika proses bawaan tersebut dihentikan paksa oleh batas sumber daya OS, aturan firewall lokal yang bentrok, atau kunci konfigurasi yang rusak, informasi koneksi di footer berhenti melaporkan versi dan setiap remote di panel Explorer Anda menjadi tidak responsif sekaligus. Itulah tanda bahwa Anda sedang menghadapi crash rclone bawaan, bukan masalah autentikasi satu remote saja.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Memastikan Ini Masalah Mesin Bawaan, Bukan Satu Remote

Cara tercepat untuk membedakannya: jika hanya satu tab atau remote yang gagal dimuat sementara panel lainnya bekerja normal, itu adalah masalah khusus remote tersebut — token OAuth yang tidak valid, kredensial salah, atau gangguan pada penyedia layanan. Jika setiap remote di setiap panel berhenti merespons secara bersamaan dan versi rclone di footer menghilang, proses bawaan itu sendiri yang berhenti. Periksa tab Settings > Embedded Rclone; jika kolom versi kosong atau menampilkan error, Anda telah memastikannya.

RcloneView melakukan mount DAN sinkronisasi lebih dari 90 penyedia dari satu jendela, di Windows, macOS, dan Linux, dan semuanya melewati satu proses bawaan tunggal ini — itulah sebabnya crash di sini terlihat seperti gangguan total, bukan error khusus satu penyedia.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView settings tab showing embedded rclone connection status" class="img-large img-center" />

## Merestart Proses Bawaan

Buka tab Settings > Embedded Rclone dan gunakan kontrol restart di sana — ini akan menjalankan ulang binary bawaan tanpa perlu menutup dan membuka kembali RcloneView itu sendiri. Pekerjaan mana pun yang sedang dalam proses transfer saat crash terjadi akan ditampilkan sebagai Errored di Job History, bukan Completed, jadi periksa setelahnya dan jalankan ulang apa pun yang belum selesai; pengaturan Retry entire sync if fails milik RcloneView (terdapat pada langkah Advanced Settings di setiap pekerjaan) membantu menyerap gangguan semacam ini secara otomatis pada eksekusi berikutnya.

Jika restart terus gagal, periksa jalur binary rclone di Settings > Embedded Rclone > Local Rclone location. Jalur yang mengarah ke binary yang telah dipindahkan, dihapus, atau dikarantina oleh antivirus akan mencegah proses berjalan bahkan setelah mengklik restart.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView job scheduling and retry settings" class="img-large img-center" />

## Mengaktifkan Pencatatan Log untuk Crash Berulang

Crash satu kali jarang memerlukan investigasi mendalam, tetapi crash berulang berbeda. Aktifkan Enable rclone Logging di Settings > Embedded Rclone, atur Log level ke DEBUG, lalu restart proses bawaan untuk memulai file log baru. Reproduksi crash tersebut, kemudian periksa tab Log di Info View bagian bawah atau file log langsung di jalur yang dikonfigurasi pada Log folder. Jika Anda memerlukan bantuan untuk menafsirkannya, tim dukungan RcloneView menerima file log di rcloneview@bdrive.com — lampirkan log level DEBUG, bukan ringkasan, karena baris error yang tepat sangat penting.

Pastikan juga kolom Global Rclone Flags pada bagian pengaturan yang sama tidak berisi flag yang tertinggal atau tidak kompatibel dari sesi pemecahan masalah sebelumnya — flag yang tidak valid dapat mencegah proses bawaan berjalan dengan bersih setiap kali.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing errored jobs after a connection interruption" class="img-large img-center" />

## Beralih ke Instance Rclone Eksternal

Jika mesin bawaan terus mengalami crash pada mesin tertentu — umum terjadi pada perangkat keras dengan sumber daya terbatas — Anda dapat mengarahkan RcloneView ke instance rclone eksternal sebagai gantinya. Jalankan `rclone rcd --rc-user=<user> --rc-pass=<pass> --rc-addr=127.0.0.1:5572` dari terminal, lalu tambahkan di Settings > Connect Manager > New Connection menggunakan alamat dan kredensial tersebut. Ini memisahkan siklus hidup proses rclone dari aplikasi RcloneView, sehingga masalah pada GUI tidak dapat mematikan mesin transfer Anda, dan sebaliknya.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html) jika Anda memerlukan instalasi baru.
2. Periksa Settings > Embedded Rclone untuk melihat apakah kolom versi kosong guna memastikan crash.
3. Gunakan kontrol restart, lalu tinjau Job History untuk item yang ditandai Errored.
4. Aktifkan pencatatan log DEBUG jika crash berulang, dan beralih ke koneksi rclone eksternal jika terus terjadi.

Proses bawaan yang crash terlihat mengkhawatirkan karena semua remote mati sekaligus, tetapi solusinya hampir selalu hanya sejauh satu kali restart — dan pencatatan log mengubah misteri menjadi diagnosis satu baris pada kejadian berikutnya.

---

**Panduan Terkait:**

- [Mengatasi Error Password Konfigurasi Rclone — Selesaikan Masalah Konfigurasi Terenkripsi dengan RcloneView](https://rcloneview.com/support/blog/fix-rclone-config-password-errors-rcloneview)
- [Mengatasi Penggunaan Memori dan CPU Tinggi pada Transfer Rclone dengan RcloneView](https://rcloneview.com/support/blog/fix-rclone-high-memory-cpu-usage-rcloneview)
- [Pembaruan Otomatis Rclone — Jaga Mesin Bawaan Anda Tetap Terkini di RcloneView](https://rcloneview.com/support/blog/rclone-self-update-rcloneview)

<CloudSupportGrid />
