---
slug: rcloneview-dietpi-lightweight-cloud-sync
title: "Instal dan Gunakan RcloneView di DietPi untuk Sinkronisasi Cloud yang Ringan"
authors: [tayson]
description: "Pelajari cara menginstal dan mengonfigurasi RcloneView di DietPi untuk sinkronisasi cloud yang efisien dan ringan pada single-board computer seperti Raspberry Pi, Odroid, dan NanoPi."
keywords:
  - rcloneview dietpi
  - sinkronisasi cloud dietpi
  - pencadangan cloud raspberry pi
  - sinkronisasi cloud ringan
  - dietpi rclone gui
  - penyimpanan cloud sbc
  - penyimpanan remote dietpi
  - raspberry pi rclone
  - sinkronisasi cloud headless
  - pencadangan cloud daya rendah
tags: [linux, platform, installation, raspberry-pi, automation]
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Instal dan Gunakan RcloneView di DietPi untuk Sinkronisasi Cloud yang Ringan

> Ubah Raspberry Pi atau single-board computer apa pun menjadi stasiun sinkronisasi cloud yang bertenaga dan selalu aktif dengan RcloneView yang berjalan di DietPi.

DietPi adalah sistem operasi berbasis Debian yang sangat ringan, dirancang khusus untuk single-board computer (SBC) seperti Raspberry Pi, Odroid, NanoPi, dan banyak lainnya. Dengan jejak minimal yang hanya membutuhkan 400 MB ruang disk dan di bawah 100 MB RAM saat idle, DietPi adalah platform ideal untuk menjalankan solusi sinkronisasi cloud yang selalu aktif. Dengan menggabungkan DietPi dengan RcloneView, Anda mendapatkan GUI manajemen file cloud lengkap yang didukung oleh kekuatan rclone, semuanya berjalan pada perangkat keras yang harganya lebih murah dari semangkuk makanan dan hanya mengonsumsi daya di bawah 5 watt. Panduan ini akan memandu Anda melalui setiap langkah, mulai dari menginstal DietPi hingga menjadwalkan pencadangan otomatis yang berjalan tanpa henti.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengapa DietPi untuk Sinkronisasi Cloud?

DietPi berbeda dari Raspberry Pi OS standar dan distribusi Linux lainnya dalam beberapa hal penting yang membuatnya ideal untuk tugas sinkronisasi cloud yang khusus.

**Penggunaan sumber daya minimal.** DietPi menghilangkan layanan yang tidak perlu, desktop environment, dan proses latar belakang. Instalasi DietPi yang baru hanya menggunakan sekitar 50-80 MB RAM, sehingga sebagian besar sumber daya SBC Anda tersedia untuk transfer rclone dan operasi file.

**Katalog perangkat lunak yang dioptimalkan.** Alat `dietpi-software` menyediakan daftar paket perangkat lunak yang dioptimalkan dan terkurasi yang terinstal dengan konfigurasi yang tepat secara langsung. Ini berarti lebih sedikit waktu untuk memecahkan masalah dependensi dan lebih banyak waktu untuk mengelola penyimpanan cloud Anda.

**Desain headless-first.** DietPi dibangun untuk berjalan headless sejak awal. Anda dapat mengelola semuanya melalui SSH, yang merupakan hal yang tepat dibutuhkan untuk perangkat sinkronisasi khusus yang berada di lemari atau terpasang di belakang TV Anda.

**Dukungan SBC yang luas.** DietPi mendukung lebih dari 30 model SBC termasuk Raspberry Pi (semua model dari Zero hingga 5), Odroid (C4, N2+, XU4), NanoPi, Pine64, dan bahkan mesin virtual. Konfigurasi sinkronisasi cloud Anda dapat dipindahkan di berbagai perangkat keras.

**Pembaruan otomatis.** DietPi menangani pembaruan sistem melalui mekanisme pembaruannya sendiri, menjaga stasiun sinkronisasi Anda tetap aman tanpa intervensi manual.

## Prasyarat dan Rekomendasi Perangkat Keras

Sebelum memulai instalasi, siapkan hal-hal berikut:

**Persyaratan perangkat keras:**
- SBC yang didukung (Raspberry Pi 3B+ atau lebih baru direkomendasikan untuk performa terbaik)
- Kartu MicroSD (minimal 16 GB, direkomendasikan 32 GB) atau USB SSD untuk performa I/O yang lebih baik
- Koneksi Ethernet (direkomendasikan untuk sinkronisasi yang andal) atau adaptor WiFi
- Catu daya yang sesuai untuk SBC Anda (5V 3A untuk Raspberry Pi 4/5)

**Persyaratan perangkat lunak:**
- Image DietPi yang diunduh dari [dietpi.com](https://dietpi.com) untuk SBC spesifik Anda
- Alat flashing image seperti balenaEtcher atau Raspberry Pi Imager
- Klien SSH (sudah tersedia di terminal macOS/Linux, atau PuTTY di Windows)

**Pertimbangan performa berdasarkan model SBC:**

| Model SBC | RAM | Penggunaan yang Direkomendasikan |
|-----------|-----|----------------|
| Raspberry Pi Zero 2W | 512 MB | Sinkronisasi ringan, satu remote |
| Raspberry Pi 3B+ | 1 GB | Sinkronisasi sedang, 2-3 remote |
| Raspberry Pi 4/5 | 2-8 GB | Sinkronisasi berat, banyak remote, mounting |
| Odroid N2+ | 4 GB | Transfer dengan throughput tinggi |
| NanoPi R5S | 4 GB | Perangkat sinkronisasi network-attached |

## Menginstal DietPi dan Rclone

Mulailah dengan mem-flash DietPi ke kartu SD atau SSD Anda, lalu boot SBC Anda dan hubungkan melalui SSH.

**Langkah 1: Flash dan boot DietPi.**

Unduh image DietPi yang sesuai untuk perangkat keras Anda, flash menggunakan balenaEtcher, masukkan media ke SBC Anda, dan nyalakan. DietPi akan melakukan pengaturan awal secara otomatis pada boot pertama.

**Langkah 2: Hubungkan melalui SSH.**

```bash
ssh root@<your-sbc-ip>
# Default password: dietpi
```

Pada login pertama, DietPi akan memandu Anda melalui konfigurasi awal termasuk perubahan kata sandi, pengaturan zona waktu, dan pemilihan perangkat lunak.

**Langkah 3: Instal rclone melalui dietpi-software.**

DietPi menyertakan rclone dalam katalog perangkat lunak yang dioptimalkan:

```bash
dietpi-software install 80
```

Software ID 80 adalah rclone. Ini menginstal build rclone yang dikonfigurasi dan dioptimalkan dengan tepat untuk arsitektur Anda.

Sebagai alternatif, Anda dapat menginstal rclone versi terbaru secara manual:

```bash
curl https://rclone.org/install.sh | sudo bash
```

**Langkah 4: Verifikasi instalasi.**

```bash
rclone version
```

Ini memastikan rclone telah terinstal dan menampilkan nomor versi beserta backend yang didukung.

## Menyiapkan RcloneView dengan External Rclone

Karena instalasi DietPi pada SBC sering kali berjalan headless, Anda akan menggunakan RcloneView dalam mode external rclone. Ini memungkinkan RcloneView yang berjalan di komputer desktop Anda untuk terhubung dan mengendalikan instance rclone di perangkat DietPi Anda.

<img src="/support/images/en/howto/rcloneview-advanced/external-rclone-model.png" alt="external rclone model" class="img-large img-center" />

**Langkah 1: Jalankan daemon remote control rclone di DietPi.**

Pada perangkat DietPi Anda, jalankan rclone dengan antarmuka RC (remote control) diaktifkan:

```bash
rclone rcd --rc-addr :5572 --rc-user admin --rc-pass yourpassword --rc-serve
```

Untuk pengaturan yang persisten, buat systemd service:

```bash
sudo cat > /etc/systemd/system/rclone-rc.service << 'EOF'
[Unit]
Description=Rclone Remote Control Daemon
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=dietpi
ExecStart=/usr/bin/rclone rcd --rc-addr :5572 --rc-user admin --rc-pass yourpassword --rc-serve
Restart=on-failure
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl enable rclone-rc
sudo systemctl start rclone-rc
```

**Langkah 2: Hubungkan RcloneView ke instance rclone DietPi Anda.**

Pada komputer desktop Anda, buka RcloneView dan beralih ke mode external rclone. Masukkan alamat IP perangkat DietPi Anda, port 5572, dan kredensial yang telah Anda konfigurasikan.

<img src="/support/images/en/howto/rcloneview-advanced/embedded-rclone-model.png" alt="embedded rclone model" class="img-large img-center" />

RcloneView sekarang mengendalikan instance rclone yang berjalan di perangkat DietPi Anda. Semua operasi file, transfer, dan mount dijalankan pada SBC itu sendiri.

## Menambahkan Remote Cloud di DietPi

Dengan RcloneView terhubung ke instance rclone DietPi Anda, Anda dapat menambahkan remote penyimpanan cloud melalui GUI.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

**Untuk penyedia berbasis OAuth (Google Drive, Dropbox, OneDrive):**

Karena DietPi biasanya berjalan headless tanpa browser, Anda perlu mengotorisasi token OAuth pada mesin yang memiliki browser, lalu mentransfer konfigurasinya. RcloneView menyederhanakan proses ini:

1. Buka dialog konfigurasi remote di RcloneView.
2. Pilih penyedia cloud Anda (misalnya, Google Drive).
3. RcloneView menangani alur OAuth melalui browser desktop Anda.
4. Token yang dihasilkan disimpan dalam konfigurasi rclone pada perangkat DietPi Anda.

**Untuk penyedia yang kompatibel dengan S3 (AWS S3, Wasabi, Backblaze B2, MinIO):**

Remote S3 hanya memerlukan access key, sehingga bekerja dengan lancar di lingkungan headless:

1. Klik "New Remote" di RcloneView.
2. Pilih penyedia yang kompatibel dengan S3.
3. Masukkan access key ID, secret access key, region, dan endpoint Anda.
4. Uji koneksi dan simpan.

**Untuk remote SFTP/WebDAV:**

Ini sangat berguna untuk sinkronisasi antara perangkat DietPi Anda dan server lain di jaringan lokal Anda:

1. Tambahkan remote SFTP atau WebDAV di RcloneView.
2. Masukkan host, username, dan detail autentikasi.
3. Simpan dan jelajahi penyimpanan remote.

## Menjadwalkan Pencadangan Otomatis

Salah satu keuntungan terbesar menjalankan RcloneView pada perangkat DietPi adalah kemampuan untuk membuat jadwal pencadangan otomatis yang berjalan 24/7 dengan daya minimal.

**Membuat sync job di RcloneView:**

Pertama, siapkan sync job yang menentukan apa yang akan disinkronkan dan ke mana:

1. Buka explorer dua panel RcloneView.
2. Pilih remote sumber dan tujuan.
3. Konfigurasikan opsi sinkronisasi (sinkronisasi satu arah, sinkronisasi dua arah, atau copy).
4. Simpan konfigurasi sebagai job yang diberi nama.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

**Menyiapkan jadwal:**

Penjadwalan job RcloneView memungkinkan Anda menentukan kapan dan seberapa sering sync job Anda berjalan:

- **Pencadangan harian:** Jadwalkan sinkronisasi malam hari untuk direktori penting pada pukul 2:00 pagi saat lalu lintas jaringan rendah.
- **Sinkronisasi inkremental per jam:** Untuk data penting, jalankan sinkronisasi inkremental setiap jam. Deteksi delta rclone memastikan hanya file yang berubah yang ditransfer.
- **Perbandingan penuh mingguan:** Jadwalkan bisync mingguan dengan `--resync` untuk menangkap setiap ketidaksesuaian.

**Menggunakan cron sebagai cadangan:**

Jika Anda lebih suka penjadwalan tingkat sistem, Anda juga dapat menggunakan cron langsung di DietPi:

```bash
crontab -e
```

Tambahkan entri seperti:

```
# Daily backup at 2 AM
0 2 * * * rclone sync /mnt/data remote:backup --log-file /var/log/rclone-backup.log

# Hourly sync of critical documents
0 * * * * rclone copy /home/dietpi/documents remote:documents --max-age 1h
```

## Optimasi Sumber Daya untuk Perangkat Berdaya Rendah

Menjalankan rclone pada SBC membutuhkan perhatian terhadap penggunaan sumber daya. Berikut adalah optimasi utama:

**Manajemen memori:**

```bash
# Limit rclone's memory usage with transfer settings
rclone sync source: dest: \
  --transfers 2 \
  --checkers 4 \
  --buffer-size 16M \
  --drive-chunk-size 32M
```

Pada Raspberry Pi dengan 1 GB RAM, pengaturan ini mencegah rclone mengonsumsi terlalu banyak memori. Perangkat dengan RAM 4+ GB dapat menggunakan nilai yang lebih tinggi.

**Optimasi I/O:**

Kartu MicroSD memiliki daya tahan tulis dan kecepatan yang terbatas. Pertimbangkan strategi berikut:

- **Gunakan USB SSD** untuk penyimpanan lokal dan cache rclone. Ini secara signifikan meningkatkan kecepatan transfer dan memperpanjang usia penyimpanan Anda.
- **Aktifkan VFS cache rclone** dengan hemat. Tetapkan `--vfs-cache-max-size` untuk membatasi penggunaan disk.
- **Catat log ke tmpfs** untuk menghindari penulisan kartu SD yang tidak perlu:

```bash
mkdir -p /tmp/rclone-logs
rclone sync source: dest: --log-file /tmp/rclone-logs/sync.log
```

**Optimasi jaringan:**

```bash
# Limit bandwidth during peak hours
rclone sync source: dest: --bwlimit "08:00,512k 23:00,off"
```

Ini membatasi bandwidth hingga 512 KB/s selama jam siang hari dan menghapus batasan pada malam hari.

**Memantau penggunaan sumber daya:**

Gunakan alat pemantauan bawaan DietPi untuk mengawasi stasiun sinkronisasi Anda:

```bash
# Check memory usage
dietpi-process_tool

# Monitor disk I/O
iotop -o

# View rclone transfer stats
rclone rc core/stats
```

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

## Pemantauan dan Pemecahan Masalah

**Memantau transfer dari jarak jauh:**

Dengan daemon RC yang berjalan, Anda dapat memantau transfer dari RcloneView pada mesin mana pun di jaringan Anda. Dasbor pemantauan transfer real-time menampilkan:

- Transfer aktif dengan persentase progres
- Kecepatan transfer dan estimasi waktu penyelesaian
- Jumlah error dan status percobaan ulang
- Penggunaan bandwidth

**Masalah spesifik DietPi yang umum:**

| Masalah | Solusi |
|-------|----------|
| OAuth token expiry | Otorisasi ulang melalui alur OAuth RcloneView dari desktop Anda |
| SD card I/O errors | Beralih ke USB SSD atau kurangi operasi tulis |
| Kehabisan memori saat sinkronisasi besar | Kurangi `--transfers` dan `--buffer-size` |
| Koneksi jaringan terputus selama transfer panjang | Aktifkan `--retries 10 --low-level-retries 20` |
| Transfer lambat pada Pi Zero | Batasi ke `--transfers 1 --checkers 2` |

**Melihat riwayat job:**

RcloneView menyimpan riwayat semua job yang telah dijalankan, memudahkan Anda untuk memverifikasi bahwa pencadangan terjadwal telah berhasil diselesaikan.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="job history" class="img-large img-center" />

## Memulai

Menyiapkan RcloneView di DietPi mengubah single-board computer yang murah menjadi perangkat sinkronisasi cloud khusus yang selalu aktif. Kombinasi penggunaan sumber daya minimal DietPi dan GUI RcloneView yang intuitif membuat manajemen penyimpanan cloud dapat diakses bahkan pada perangkat keras yang paling terbatas sekalipun. Mulailah dengan sync job satu remote yang sederhana, verifikasi bahwa job tersebut berjalan dengan andal, lalu kembangkan ke beberapa remote dan jadwal otomatis seiring bertambahnya kepercayaan diri Anda.

---

**Panduan Terkait:**
- [Menambahkan Penyimpanan Remote (Contoh Google Drive)](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [Penjadwalan dan Eksekusi Job](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Menggunakan RcloneView dengan External Rclone](https://rcloneview.com/support/tutorials/new-window-with-external-rclone)

<CloudSupportGrid />
