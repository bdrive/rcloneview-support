---
slug: fix-google-drive-quota-rate-limit-api-errors
title: "Mengatasi Error Kuota, Rate Limit, dan API Google Drive dengan RcloneView"
authors:
  - tayson
description: Atasi kuota 750 GB/hari Google Drive, userRateLimitExceeded, dan error API acak menggunakan penyesuaian job visual, Scheduler, dan diagnostik RcloneView yang dibangun di atas mesin rclone.
keywords:
  - rcloneview
  - google drive quota error
  - google drive rate limit
  - userRateLimitExceeded
  - rclone drive api
  - fix google drive 403
  - drive api automation
tags:
  - google-drive
  - troubleshooting
  - automation
unlisted: true
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mengatasi Error Kuota, Rate Limit, dan API Google Drive dengan RcloneView

> Lelah dengan `userRateLimitExceeded`, `quotaExceeded`, atau respons 429 acak? RcloneView memberi pengguna Google Drive tingkat lanjut sebuah toolkit GUI untuk memprediksi, menyiasati, dan memulihkan diri dari throttling API tanpa harus mengawasi script secara manual.

Baik Anda sedang mengarsipkan pustaka media, menggabungkan Shared Drive, atau melakukan sinkronisasi MEGA ke Google Workspace, pada akhirnya Anda akan menemui batasan Drive:
- Kuota upload & copy **750 GB/hari** per pengguna
- Ukuran file maksimum **5 TB** (format selain Google Docs)
- Panggilan API yang dibatasi burst (`userRateLimitExceeded`, `rateLimitExceeded`, 429)
- Gangguan backend sesekali (5xx, connection reset)

Alih-alih coba-coba lewat CLI, panduan ini menunjukkan cara menjaga job tetap berjalan lancar melalui Explorer, Scheduler, dan diagnostik RcloneView sehingga setiap transfer dilanjutkan tepat dari titik terakhir.

<!-- truncate -->

## Pahami error Drive sebelum bereaksi

| Teks error | Penyebab utama | Solusi di RcloneView |
| --- | --- | --- |
| `userRateLimitExceeded`, `rateLimitExceeded` | Terlalu banyak request per detik dari satu user/project | Kurangi **Checkers/Transfers**, aktifkan `--tpslimit`, atur jarak waktu (stagger) di Scheduler |
| `quotaExceeded`, `403: insufficient storage` | Total byte upload + copy melebihi 750 GB/hari ATAU Drive tujuan sudah penuh | Bagi job per folder, tambahkan jeda antar batch, pilih akun lain atau tunggu reset kuota |
| `403: The user does not have sufficient permissions for file` | Shared Drive atau kepemilikan file yang salah | Gunakan **Compare** untuk memeriksa path, verifikasi keanggotaan Shared Drive |
| `5xx backendError` / `Internal Error` | Gangguan sementara di sisi Google | Aktifkan retries, exponential backoff, dan biarkan Scheduler melanjutkan job |
| `drive: rateLimitExceeded: Too many requests for this file` | Pembaruan cepat pada satu file yang sama | Aktifkan transfer chunked, batasi concurrency |

RcloneView menampilkan pesan-pesan ini di Job History dan log sehingga Anda bisa menemukan tepat pada timestamp dan objek mana kegagalan terjadi.

## Langkah 1 — Baseline penggunaan Drive Anda

1. **Cek sisa kuota**: Di Google Workspace Admin atau pengaturan Drive, konfirmasi penyimpanan yang tersedia untuk user atau Shared Drive tujuan.
2. **Segmentasikan data**: Gunakan Explorer di RcloneView untuk mengelompokkan migrasi ke dalam folder logis (`Finance FY24`, `Video RAW`, dsb). Drag-and-drop ke folder staging untuk mengukur ukurannya.
3. **Jalankan Compare**: [Panduan Compare folders](/howto/rcloneview-basic/compare-folder-contents) membantu Anda melihat pratinjau delta dan menghindari penyalinan duplikat yang menghabiskan kuota.

<CloudSupportGrid />

## Langkah 2 — Sesuaikan transfer sebelum menjadwalkan

Buka **Job Manager → Add Job** (lihat [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)) dan fokuslah pada pengaturan berikut:

- **Transfers vs. Checkers**: Atur transfers ke `4-8` untuk jaringan 1 Gbps; turunkan ke `2` saat error mulai meningkat. Checkers di `4` menjaga verifikasi tetap sehat tanpa membanjiri API.
- **Ukuran chunk**: Biarkan default kecuali Google membatasi upload video berukuran besar; jika begitu, kurangi ukuran chunk untuk mengurangi beban burst.
- **`--drive-stop-on-upload-limit`**: Aktifkan flag ini (checkbox di Advanced options) agar RcloneView berhenti dengan mulus setelah kuota 750 GB terpakai, alih-alih terus-menerus melempar error 403.
- **Batas bandwidth**: Di **Settings → Transfers**, atur misalnya `200 Mbps` agar jaringan lokal tetap stabil.

Simpan job dengan nama yang deskriptif seperti `Drive-Master-Library-Sync`.

## Langkah 3 — Jadwalkan sesuai kuota

Gunakan Scheduler (Langkah 4 pada wizard job) untuk meminimalkan tabrakan:

1. Aktifkan **Enable Scheduler** dan pilih jendela waktu **Daily** atau **Hourly**.
2. Jalankan upload besar *pada malam hari waktu setempat* agar bertepatan dengan jam paling sepi di Drive.
3. Rangkai beberapa job dengan waktu mulai yang berjeda (misalnya `01:00`, `03:30`, `06:00`) agar kuota tersebar di sepanjang periode reset.
4. Aktifkan **Retries** (3-5) dengan exponential backoff. RcloneView otomatis melanjutkan tepat dari titik berhenti karena rclone menyimpan checksum file dan transfer parsial.
5. Aktifkan **Notifications** agar Anda menerima peringatan email/webhook setiap kali Google memunculkan peringatan kuota.

**Contoh perintah yang ditampilkan di Job Details**

```bash
rclone copy gdrive-main:Video gdrive-archive:Video ^
  --transfers=4 ^
  --checkers=4 ^
  --drive-stop-on-upload-limit ^
  --tpslimit=8 ^
  --retries=5 --low-level-retries=10
```

Anda tidak perlu menjalankan ini secara manual, tetapi perintah ini mendokumentasikan mitigasi untuk keperluan audit.

## Langkah 4 — Bereaksi saat error terjadi

- **Kuota 750 GB/hari tercapai**: Job berhenti dengan entri log yang jelas. Duplikasikan job, ganti subfolder sumber, atau tunggu reset berikutnya pada tengah malam UTC. Scheduler akan melanjutkan secara otomatis.
- **userRateLimitExceeded**: Kurangi transfers/checkers, tambahkan `--tpslimit` (tab Advanced), dan pertimbangkan memindahkan kredensial API ke Google Cloud project khusus untuk mendapatkan kuota per-project yang lebih besar.
- **429 Too Many Requests**: Atur Scheduler untuk berjalan setiap jam dengan batch yang lebih kecil (gunakan filter **Include/Exclude** untuk membagi direktori). Aktifkan `--drive-chunk-size=64M` untuk meratakan burst.
- **Izin Shared Drive**: Gunakan Explorer untuk membuka tujuan setidaknya sekali; jika Drive melempar error izin, alihkan ke user yang berstatus Manager/Content Manager pada Shared Drive tersebut.
- **5xx**: Biarkan retries bekerja. Jika objek yang sama terus gagal, tandai sebagai skipped lewat Compare agar sisa job tetap berjalan sambil Anda menyelidiki masalahnya.

Semua kejadian ini tercatat di **Job History** lengkap dengan log yang dapat diunduh, sehingga bukti untuk tiket dukungan atau laporan kepatuhan tinggal satu klik.

## Langkah 5 — Pantau secara proaktif

- **Panel Transfer**: Amati grafik bandwidth dan status per file agar Anda langsung menyadari throttling.
- **Compare setelah otomasi**: Jalankan ulang Compare (Dry Run) untuk memastikan tidak ada delta yang tersisa setelah kuota di-reset.
- **Activity timeline**: Tampilan Scheduler menampilkan "Last run / Next run / Status" sehingga Anda tahu persis kapan pipeline berhenti karena kuota.
- **Notifications**: Hubungkan job ke Slack/email agar peringatan rate-limit sampai ke tim yang tepat sebelum pengguna menyadari ada file yang hilang.
- **Launch at login**: Aktifkan di Settings agar RcloneView + Scheduler tetap berjalan setelah workstation di-restart.

## Praktik terbaik untuk tim dengan penggunaan Drive tinggi

1. **Rotasi service account**: Bagi admin Workspace, tetapkan service account terpisah per departemen agar kuota terdistribusi.
2. **Staging media besar secara lokal**: Sinkronkan terlebih dahulu ke NAS on-prem, lalu biarkan RcloneView mencerminkan NAS tersebut ke Drive pada malam hari, memecah penggunaan API menjadi lebih kecil.
3. **Beri tag job berdasarkan prioritas**: Data yang mission-critical mendapat jadwal malam hari; arsip yang tidak mendesak berjalan mingguan.
4. **Dokumentasikan preset**: Ekspor definisi job agar rekan tim dapat menggunakan kembali pengaturan yang sudah disesuaikan alih-alih membuat pengaturan baru yang justru memicu rate limit.
5. **Simpan log**: Simpan log RcloneView (JSON/CSV) di bucket audit untuk membuktikan setiap kejadian kuota telah ditangani.

## FAQ

**Bagaimana saya tahu file mana yang mencapai batas?**  
Buka Job History → View Log. Path file yang tepat berada di atas pesan error, sehingga Anda bisa menjalankan ulang hanya direktori tersebut.

**Bisakah saya menyiasati batas 750 GB/hari?**  
Tidak secara langsung. Bagi data ke beberapa akun Google (masing-masing dengan kuotanya sendiri) atau tunggu reset. Filter di RcloneView membantu menyegmentasikan folder tanpa harus memindahkannya secara manual.

**Apakah menurunkan transfers akan memperlambat semuanya?**  
Mungkin, tetapi itu lebih baik daripada job yang crash. Padukan transfers yang lebih rendah dengan Scheduler yang berjalan lebih sering sehingga throughput bersih tetap memenuhi SLA.

**Bagaimana jika API key saya diblokir oleh Drive?**  
Buat Google Cloud project khusus untuk RcloneView/rclone, tambahkan kredensial OAuth, dan batasi akses hanya untuk operator tepercaya. Rotasi key jika terdeteksi penyalahgunaan.

## Jaga kesehatan migrasi Drive

Kuota dan rate limit Drive bersifat permanen, tetapi dengan RcloneView Anda dapat merencanakannya, menerima peringatan dini, dan otomatis melanjutkan job saat Google kembali memberi lampu hijau. Sesuaikan job sekali, jadwalkan, dan biarkan GUI menegakkan praktik terbaik sehingga Anda tidak perlu lagi mengawasi retry secara manual.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />
