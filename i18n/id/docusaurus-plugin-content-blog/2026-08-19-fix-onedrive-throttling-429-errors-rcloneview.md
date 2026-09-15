---
slug: fix-onedrive-throttling-429-errors-rcloneview
title: "Mengatasi Error Throttling 429 OneDrive — Sinkronisasi Andal dengan RcloneView"
authors:
  - steve
description: "Hentikan error throttling 429 Too Many Requests OneDrive yang mengganggu sinkronisasi besar — konfigurasikan retry dan batas transfer di RcloneView."
keywords:
  - OneDrive 429 error
  - OneDrive throttling fix
  - OneDrive too many requests
  - RcloneView OneDrive sync
  - fix OneDrive API rate limit
  - OneDrive sync failed retry
  - reduce OneDrive throttling
  - OneDrive large sync errors
  - Microsoft Graph API throttling
tags:
  - RcloneView
  - onedrive
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mengatasi Error Throttling 429 OneDrive — Sinkronisasi Andal dengan RcloneView

> Ketika OneDrive mulai mengembalikan 429 Too Many Requests di tengah sinkronisasi, solusinya bukan mencoba ulang secara membabi buta — melainkan mengurangi seberapa keras Anda membebani Microsoft Graph API.

OneDrive menerapkan batas laju permintaan pada Microsoft Graph API, dan job sinkronisasi yang memindahkan ribuan file kecil atau berjalan bersamaan dengan beberapa job lain dapat dengan cepat melampaui batas tersebut, menyebabkan transfer berhenti atau gagal di tengah jalan dengan respons 429. Ini berbeda dari error kuota atau penyimpanan penuh — akun masih memiliki ruang, tetapi Microsoft untuk sementara menolak permintaan karena permintaan tersebut datang terlalu cepat. RcloneView memberi Anda kontrol langsung atas konkurensi transfer dan perilaku retry, sehingga Anda dapat menyetel job OneDrive agar tetap berada di bawah ambang batas, alih-alih terus membombardir API hingga gagal.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengenali Error Throttling 429

Periksa tab Log di Info View bagian bawah dan cari respons HTTP 429 atau pesan yang menyebutkan rate limiting selama job OneDrive berlangsung — ini berbeda dari kegagalan autentikasi atau pesan "kuota terlampaui", yang menunjukkan token kedaluwarsa atau akun penuh. Error throttling cenderung muncul secara beruntun di tengah job besar, sering kali ketika banyak file kecil ditransfer secara bersamaan dibandingkan beberapa file besar. Jika job akhirnya selesai setelah beberapa kali retry dengan jeda di antaranya, itu adalah tanda kuat bahwa logika retry bawaan sudah pulih dari throttling dengan sendirinya.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log showing a OneDrive sync job with retries" class="img-large img-center" />

## Menurunkan Konkurensi untuk Mengurangi Throttling

Solusi paling langsung adalah mengurangi jumlah permintaan yang dikirim RcloneView ke OneDrive sekaligus. Pada langkah Advanced Settings dari job sinkronisasi, turunkan jumlah file transfer dan jumlah equality checker — spesifikasi merekomendasikan 4 atau lebih sedikit equality checker untuk backend yang throttling-nya agresif, dan OneDrive adalah salah satunya. Multi-thread transfer juga dapat dikurangi dari nilai default 4, atau dinonaktifkan sepenuhnya dengan menyetelnya ke 0, yang menukar sebagian throughput mentah demi job yang selesai tanpa terkena rate limit.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring transfer settings for a OneDrive sync job" class="img-large img-center" />

## Biarkan Retry Melakukan Tugasnya

Job sinkronisasi RcloneView menyertakan pengaturan "Retry entire sync if fails" yang secara default disetel ke 3 kali percobaan, yang sering kali cukup untuk melewati jendela throttling sementara karena rate limit OneDrive akan direset setelah periode cooldown singkat. Hindari menyetel nilai ini ke 1 (menonaktifkan retry) pada job OneDrive mana pun yang memindahkan banyak file, karena sebaliknya satu respons 429 saja akan membuat seluruh job gagal, bukannya otomatis dicoba ulang. RcloneView mount dan sinkronisasi 90+ penyedia dari satu jendela di Windows, macOS, dan Linux, jadi jika OneDrive hanyalah salah satu dari beberapa remote dalam alur kerja Anda, Anda dapat mengatur jeda antar job pada penyedia yang berbeda untuk menghindari penumpukan permintaan pada satu backend yang paling rentan terhadap throttling.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a OneDrive sync job to run at off-peak times" class="img-large img-center" />

## Menjarangkan Waktu Job Terjadwal

Jika Anda menjalankan job sinkronisasi OneDrive sesuai jadwal, hindari memicu beberapa job OneDrive pada waktu yang persis sama — bahkan pada folder yang berbeda sekalipun, job-job tersebut tetap berbagi rate limit akun yang sama. Pengguna lisensi PLUS dapat menjarangkan jadwal bergaya crontab dengan selisih beberapa menit antar job agar permintaan tidak menumpuk, dan dapat melihat pratinjau waktu eksekusi mendatang dengan simulator jadwal sebelum menyimpan. Untuk transfer satu kali yang sangat besar, menjalankan job pada jam sepi juga dapat mengurangi kemungkinan bertabrakan dengan trafik otomatis lain pada akun Microsoft yang sama.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html) jika belum melakukannya.
2. Buka job OneDrive yang menampilkan error 429 dan periksa tab Log-nya untuk melihat pola kegagalan.
3. Kurangi file transfer dan equality checker di Advanced Settings, dan pastikan retry disetel ke minimal 3.
4. Jalankan ulang job dan perhatikan tab Transferring untuk memastikan job selesai tanpa terhenti.

Sinkronisasi yang lebih lambat namun stabil dan selesai dengan andal lebih baik daripada sinkronisasi cepat yang gagal di tengah jalan dan membuat Anda bertanya-tanya apa yang sebenarnya sudah ditransfer.

---

**Panduan Terkait:**

- [Mengelola Penyimpanan OneDrive — Sinkronisasi dan Backup File dengan RcloneView](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Mengatasi Error Sinkronisasi OneDrive — Cara Menyelesaikannya dengan RcloneView](https://rcloneview.com/support/blog/fix-onedrive-sync-errors-rcloneview)
- [Mengatasi Error Rate Limiting API Cloud dengan RcloneView](https://rcloneview.com/support/blog/fix-cloud-api-rate-limiting-errors-rcloneview)

<CloudSupportGrid />
