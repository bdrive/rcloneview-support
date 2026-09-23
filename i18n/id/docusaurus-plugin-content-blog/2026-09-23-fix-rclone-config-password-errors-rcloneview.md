---
slug: fix-rclone-config-password-errors-rcloneview
title: "Memperbaiki Error Config Password Rclone — Mengatasi Masalah Konfigurasi Terenkripsi dengan RcloneView"
authors:
  - robin
description: "Atasi error Config Password rclone.conf di RcloneView — terkunci, gagal dekripsi, dan lupa kata sandi — lalu sambungkan kembali remote Anda."
keywords:
  - error config password rclone
  - rclone.conf terenkripsi
  - RcloneView config password
  - rclone conf gagal dekripsi
  - lupa config password rclone
  - config password tidak cocok
  - enkripsi config rclone
  - remote RcloneView terkunci
  - memulihkan config rclone
  - pemulihan config rclone
tags:
  - RcloneView
  - troubleshooting
  - tips
  - security
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Memperbaiki Error Config Password Rclone — Mengatasi Masalah Konfigurasi Terenkripsi dengan RcloneView

> Ketika Config Password yang melindungi rclone.conf Anda tidak lagi sinkron, semua remote di RcloneView berhenti dimuat secara bersamaan — berikut cara mendiagnosisnya dan mendapatkan akses kembali.

Tab Settings RcloneView menyediakan opsi **Config Password** di bawah Embedded Rclone, yang mengenkripsi seluruh file rclone.conf Anda — file yang menyimpan setiap remote yang telah Anda konfigurasikan, bukan hanya satu penyedia. Ini berbeda dari mengenkripsi masing-masing file dengan remote Crypt; Config Password melindungi kredensial dan token semua remote Anda sekaligus. Ketika kata sandi tersebut salah, hilang, atau tidak lagi sinkron dengan nilai yang sebenarnya mengenkripsi file tersebut, RcloneView tidak dapat mendekripsi remote mana pun, dan seluruh explorer tampak kosong atau menampilkan error koneksi saat startup.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengenali Masalah Config Password

Gejalanya biasanya menyeluruh, bukan sebagian: alih-alih hanya satu remote yang gagal terhubung, semua remote — Google Drive, S3, Dropbox, semuanya — gagal sekaligus, biasanya tepat setelah RcloneView dimulai atau setelah proses rclone bawaan (embedded) dimulai ulang. Periksa tab **Log** di Info View bagian bawah, atau aktifkan pencatatan log berbasis file di Settings > Embedded Rclone dengan level log diatur ke DEBUG, lalu mulai ulang proses rclone bawaan. Kegagalan dekripsi config akan terlihat jelas di log, berbeda dari error autentikasi khusus penyedia, dan ini menjadi cara yang jelas untuk membedakannya dari token OAuth yang kedaluwarsa atau kunci API yang dicabut.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Meninjau riwayat pekerjaan dan log setelah error config password di RcloneView" class="img-large img-center" />

## Penyebab Umum dan Cara Mengatasinya

Sebagian besar masalah Config Password berasal dari salah satu situasi berikut:

**Kata sandi dimasukkan secara salah setelah pembaruan atau instal ulang.** Jika Anda memindahkan RcloneView ke mesin baru atau menginstalnya ulang, masukkan kembali Config Password yang tepat di Settings > Embedded Rclone > Config Password. Tidak ada kecocokan sebagian — satu karakter yang salah saja sudah mencegah dekripsi seluruh file.

**Path rclone.conf yang usang.** Pengaturan Local Rclone config location di RcloneView menunjuk ke file tertentu. Jika instalasi sebelumnya meninggalkan config yang tidak terenkripsi atau terenkripsi secara berbeda di path tersebut, RcloneView mungkin membaca file yang sama sekali salah. Pastikan lokasi config di Settings sesuai dengan lokasi rclone.conf terenkripsi Anda yang sebenarnya.

**Kata sandi lupa tanpa opsi pemulihan.** Enkripsi config rclone tidak memiliki backdoor — jika kata sandi benar-benar hilang, rclone.conf yang ada tidak dapat didekripsi. Satu-satunya jalan ke depan adalah menghapus file terenkripsi dan menambahkan kembali setiap remote dari awal melalui **Remote** > **New Remote**, itulah sebabnya menyimpan nilai ini di pengelola kata sandi sama pentingnya dengan kredensial penyedia cloud apa pun.

<img src="/support/images/en/blog/new-remote.png" alt="Menambahkan kembali remote di RcloneView setelah reset config password" class="img-large img-center" />

## Mencegah Terkunci di Masa Depan

Sebelum mengubah Config Password, ekspor definisi pekerjaan Anda saat ini dengan opsi **Export** pada Job Manager — ini menyimpan pengaturan pekerjaan sebagai file JSON portabel, mendokumentasikan remote dan pekerjaan mana yang ada meskipun tidak memulihkan kredensial dengan sendirinya. RcloneView juga me-mount dan menyinkronkan 90+ penyedia dari satu jendela di Windows, macOS, dan Linux, sehingga membangun ulang remote dari awal melalui New Remote hanya memakan waktu beberapa menit, bukan berjam-jam.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Meninjau pengaturan pekerjaan sebelum mengubah config password di RcloneView" class="img-large img-center" />

Saat meningkatkan masalah ke dukungan, ikuti langkah pengumpulan log yang sama seperti untuk masalah rclone lainnya: aktifkan logging DEBUG, mulai ulang proses rclone bawaan, reproduksi kegagalan, lalu kirim file log — error dekripsi jauh lebih mudah didiagnosis dari output log mentah dibandingkan dari tangkapan layar.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Periksa Settings > Embedded Rclone > Config Password dan pastikan cocok dengan nilai yang awalnya mengenkripsi rclone.conf Anda.
3. Aktifkan logging DEBUG dan mulai ulang proses rclone bawaan untuk memastikan kegagalan tersebut adalah error dekripsi, bukan masalah autentikasi penyedia.
4. Jika kata sandi benar-benar tidak dapat dipulihkan, hapus config terenkripsi dan tambahkan kembali remote melalui New Remote.

Config Password melindungi setiap kredensial di rclone.conf Anda sekaligus, jadi perlakukan dengan kehati-hatian yang sama seperti kata sandi utama — kehilangannya berarti Anda harus membangun ulang daftar remote dari awal.

---

**Panduan Terkait:**

- [Fix Rclone Config Corruption and Recovery Issues in RcloneView](https://rcloneview.com/support/blog/fix-rclone-config-corruption-rcloneview)
- [Fix Crypt Remote Decryption Errors — Password and Config Issues with RcloneView](https://rcloneview.com/support/blog/fix-crypt-remote-password-decrypt-errors-rcloneview)
- [Fix License Key Activation Errors — Resolve PLUS License Issues with RcloneView](https://rcloneview.com/support/blog/fix-license-key-activation-errors-rcloneview)

<CloudSupportGrid />
