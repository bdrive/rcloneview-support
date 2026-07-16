---
slug: transfer-google-drive-to-another-account-easily
title: Transfer Google Drive ke Akun Lain dengan Mudah menggunakan RcloneView
authors:
  - jay
description: Pindahkan file antar akun Google Drive dengan RcloneView. Rencanakan migrasi, tetap dalam kuota Google, dan otomatiskan transfer—tanpa perlu command line.
keywords:
  - rcloneview
  - google drive transfer
  - migrate google drive
  - cross account transfer
  - cloud sync
  - rclone gui
tags:
  - google-drive
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Transfer Google Drive ke Akun Lain dengan Mudah menggunakan RcloneView

> Ganti akun tanpa kehilangan kendali. RcloneView membungkus backend Google Drive milik rclone dalam GUI yang ramah pengguna sehingga Anda dapat menyerahkan, menggabungkan, atau mengarsipkan data antar akun Drive dengan jelas—dan tanpa scripting.

## Mengapa perlu memindahkan data antar akun Google Drive?

Kelulusan, pergantian pekerjaan, merger, dan proyek pembersihan sederhana sering kali mengharuskan pemindahan file antar akun Google. Utilitas transfer bawaan Google memang membantu, tetapi masih memiliki celah: hanya mencakup My Drive, mengabaikan filter granular, dan tidak dapat menahap atau menjadwalkan migrasi. [Google Help](https://support.google.com/accounts/answer/6386856?hl=en&utm_source=chatgpt.com) [Google Workspace Admin Help](https://support.google.com/a/answer/1247799?hl=en)

<!-- truncate -->

### Ketahui batasannya sebelum memulai

- **Ukuran per file**: Format non-Google dapat mencapai hingga **5 TB** per item; Docs, Sheets, dan Slides memiliki batas terpisah. [Google Help](https://support.google.com/drive/answer/37603?hl=en)
- **Kuota transfer harian**: Drive API mengizinkan **750 GB** unggahan (dan operasi salin) per pengguna per hari; batas ini direset setiap 24 jam. [Google for Developers](https://developers.google.com/drive/api/guides/limits)
- **Aturan kepemilikan**: Transfer personal hanya mencakup Gmail + My Drive. Admin Workspace dapat mengalihkan kepemilikan dalam satu domain, tetapi shared drive lintas domain memerlukan penyalinan. [Google Help](https://support.google.com/accounts/answer/6386856?hl=en) [Google Workspace Admin Help](https://support.google.com/a/answer/1247799?hl=en)

### Ringkasan pendekatan

| Pendekatan | Cocok untuk | Batasan |
|---|---|---|
| Alat "Transfer your content" dari Google | Siswa yang lulus sekolah atau pindah ke Gmail personal | Hanya My Drive + Gmail; tanpa filter; tidak dapat menargetkan shared drive |
| Bagikan ke akun sekunder lalu salin | Serah terima kecil dalam satu domain | Kerja manual; riwayat versi dan komentar dapat terpecah |
| Transfer lintas akun dengan RcloneView | Kombinasi My Drive + Shared drive, pemindahan folder granular, sinkronisasi berulang | Memerlukan remote rclone untuk setiap akun (ditangani oleh wizard RcloneView) |

<!-- Obsidian note: CTA 컴포넌트 -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Persiapan

1. **Perjelas kepemilikan & cakupan**: Buat daftar folder (My Drive dan Shared drive) yang perlu dipindahkan atau tetap ada. Tentukan siapa yang akan memiliki salinan tujuan.
2. **Tinjau kuota**: Periksa ketersediaan penyimpanan dan catat arsip video besar yang mungkin mencapai batas 750 GB/hari.
3. **Rencanakan jendela cutover**: Komunikasikan periode pembekuan atau jadwal bertahap agar kolaborator tahu di mana harus bekerja.
4. **Tandai filter**: Tentukan aturan include/exclude (misalnya, lewati `/Backups/old/` atau hanya pindahkan `/Projects/2024/`).
5. **Cadangkan folder penting**: Untuk konten yang diatur regulasi, ekspor manifest atau riwayat versi sebelum memindahkannya.

🔍 Panduan yang membantu
- [Pengaturan cepat OAuth Google di RcloneView](/howto/remote-storage-connection-settings/add-oath-online-login)
- [Menambahkan remote Google Shared Drive](/howto/remote-storage-connection-settings/connect-using-cli/add-google-shared-drive)

## Menghubungkan kedua akun Google Drive di RcloneView

RcloneView mengubah `rclone config` menjadi wizard terpandu, sehingga Anda dapat mendaftarkan setiap akun Google sekali dan menggunakannya kembali untuk transfer.

1. Buka **RcloneView** → klik **`+ New Remote`**.
2. Pilih **Google Drive** → masuk dengan **akun sumber** → beri remote nama yang jelas (misalnya, `Drive-Source`).
3. Ulangi untuk **akun tujuan** (misalnya, `Drive-Destination`).
4. Jika ada Shared drive yang terlibat, aktifkan di wizard atau tambahkan ID drive-nya.
5. Pastikan kedua remote muncul di panel Explorer dan Anda dapat menjelajahi folder di masing-masing sisi.

<img src="/support/images/en/blog/open-multiple-google-drive-remotes.png" alt="open multiple google drive remotes" class="img-medium img-center" />

## Pilih alur transfer yang tepat di RcloneView

Mulailah dengan folder percontohan sebelum menyalin seluruh akun. Setelah uji coba terlihat baik, lanjutkan dengan pemindahan yang lebih luas atau sinkronisasi terjadwal.

### Drag & Drop (pemindahan manual)

Buka remote sumber di sebelah kiri dan tujuan di sebelah kanan, lalu seret file atau folder melintasinya. Cocok untuk serah terima ad-hoc atau memindahkan beberapa folder Shared drive.
👉 Selengkapnya: [Copying Files using Drag and Drop](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

### Compare & Copy (pratinjau perbedaan)

Jalankan **Compare** untuk melihat daftar apa yang baru, berubah, atau hilang antara kedua akun. Tinjau selisihnya, batalkan pilihan untuk yang ingin dilewati, lalu salin. Sangat cocok untuk migrasi bertahap atau pembersihan setelah jendela pembekuan.
👉 Selengkapnya: [Compare and Manage Files](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-medium img-center" />
### Sync & Scheduled Jobs (otomatisasi cutover)

Gunakan **Sync** untuk mencerminkan folder terpilih hingga tujuan sepenuhnya menggantikan sumber. Selalu jalankan **dry-run** terlebih dahulu, lalu simpan pekerjaan tersebut dan jadwalkan eksekusi harian atau tiap jam hingga cutover selesai.
👉 Selengkapnya:
- [Synchronize Remote Storages](/howto/rcloneview-basic/synchronize-remote-storages)
- [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)
- [Job Scheduling and Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run a saved sync job in RcloneView" class="img-medium img-center" />

**Tips praktis**

- Pecah migrasi menjadi beberapa batch yang tetap di bawah kuota API 750 GB/hari; antrekan batch berikutnya setelah batas direset.
- Saat menyalin konten Shared drive ke My Drive personal, verifikasi izin dan bagikan ulang folder penting dari akun tujuan.
- Jadikan folder sumber read-only selama sinkronisasi terakhir agar selisih akhir tetap kecil dan dapat diprediksi.
- Ekspor log rclone dari Job History milik RcloneView untuk menjaga jejak audit tentang apa yang dipindahkan dan kapan.

## Setelah migrasi

- **Periksa kepemilikan**: Pastikan akun tujuan memiliki file-file penting (terutama Docs/Sheets) dan kolaborator tetap memiliki akses.
- **Bangun ulang shortcut & bookmark**: Shortcut Google tidak ikut terbawa; buat ulang tautan penting di akun baru.
- **Bersihkan sumber**: Arsipkan atau hapus folder lama setelah tujuan menjadi sumber utama untuk mencegah perubahan yang tidak disengaja.
- **Pantau izin shared drive**: Tim besar mungkin memerlukan pembaruan keanggotaan grup agar sesuai dengan struktur kepemilikan baru.

## Kesimpulan — poin penting

- Alat transfer bawaan Google memang membantu tetapi terbatas pada langkah-langkah umum.
- RcloneView memberi Anda pemilihan folder granular, pratinjau, dan sinkronisasi terjadwal antar akun Google Drive—semuanya tetap berbasis GUI sepenuhnya.
- Rencanakan sesuai batas kuota Google, uji coba pemindahan Anda, dan dokumentasikan cutover agar rekan kerja tahu di mana menemukan file terbaru.

## FAQ

**Apakah RcloneView mempertahankan versi file dan komentar?**
File non-Google (PDF, video, ZIP) tetap utuh. Google Docs/Sheets/Slides mempertahankan konten tetapi menghasilkan ID baru saat disalin; RcloneView menampilkannya sebagai file baru sehingga Anda dapat membagikannya ulang sesuai kebutuhan.

**Bisakah saya memindahkan folder Shared drive antar domain?**
Google tidak mengizinkan Shared drive berpindah domain secara langsung. Gunakan RcloneView untuk menyalin konten ke Shared drive yang dimiliki oleh domain tujuan, lalu terapkan ulang izinnya. [Google Workspace Admin Help](https://support.google.com/a/answer/7212025?hl=en)

**Apa yang terjadi jika saya mencapai kuota 750 GB/hari?**
Transfer akan berhenti sementara dengan error rate-limit. Tunggu 24 jam (atau pindah ke akun lain yang masih memiliki kuota) dan lanjutkan pekerjaan tersebut. Log RcloneView menunjukkan di mana transfer berhenti sehingga Anda dapat melanjutkan tanpa menduplikasi file.

**Siap menjadikan transfer lintas akun sebagai item checklist biasa?**

<CloudSupportGrid />
