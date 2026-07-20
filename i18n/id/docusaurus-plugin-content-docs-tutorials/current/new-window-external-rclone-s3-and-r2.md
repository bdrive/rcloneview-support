---
sidebar_position: 11
description: "Pelajari cara mentransfer file besar dari AWS S3 ke Cloudflare R2 dengan kecepatan tinggi menggunakan Rclone daemon eksternal di EC2, yang dikelola sepenuhnya dengan RcloneView."
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - aws
  - ec2
  - aws s3
  - external rclone
  - cloud to cloud transfer
  - cloud sync
  - Cloud Migration
  - cloud storage
  - cloud transfer
  - file synchronization
  - cloudflare r2
  - cloudflare s3 api
  - cloudflare r2 rclone
tags:
  - RcloneView
  - cloud-file-transfer
  - cloud-migration
  - Tutorial
  - cloud-to-cloud
  - aws-s3
  - cloudflare-r2
  - aws-ec2
date: 2025-07-13
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# Transfer File Berkinerja Tinggi Antara AWS S3 dan Cloudflare R2 melalui Rclone Eksternal di EC2

Tim modern sering kali mengelola beberapa platform penyimpanan objek sekaligus dan segera menyadari bahwa bandwidth, latensi, dan biaya egress menjadi hambatan kritis ketika dataset besar melewati desktop lokal. Menjalankan **Rclone** langsung pada instans cloud—lalu mengendalikannya melalui **RcloneView**—mendorong lalu lintas berat ke dalam backbone berkecepatan tinggi milik cloud dan menjaga laptop Anda tetap keluar dari jalur data.

<img src="/support/images/en/tutorials/transfer-files-between-aws-s3-and-cloudflare-r2-with-external-rclone.png" alt="transfer files between aws s3 and cloudflare r2 with external rclone" class="img-medium img-center" />

Panduan di bawah ini mengadaptasi struktur panduan "Sync AWS S3 and Google Drive via EC2" dan memperluasnya ke skenario S3 ↔ R2. Anda akan:

1. Menjalankan Rclone sebagai daemon remote-control (**rcd**) pada server AWS EC2.
2. Membuka jendela RcloneView terpisah dan menyambungkannya ke Rclone eksternal tersebut.
3. Menambahkan remote AWS S3 dan Cloudflare R2 di dalam Rclone yang di-hosting di EC2.
4. Melakukan transfer, sinkronisasi, atau menjadwalkan job—sepenuhnya cloud-to-cloud—tanpa batasan bandwidth lokal.

:::danger Biaya Transfer Data AWS
Lalu lintas intra-region dalam Availability Zone yang sama gratis, tetapi lalu lintas antar-AZ dan egress Internet dikenakan biaya (umumnya $0.02/GB AZ-ke-AZ; $0.09/GB ke Internet).
Lihat: [AWS Pricing – Data Transfer](https://aws.amazon.com/ec2/pricing/on-demand/#Data_Transfer)
:::

## **Mengapa Menggunakan Rclone Eksternal?**

| Rclone Lokal (Embedded)                                                                  | Rclone Eksternal di EC2                                                                    |
| -------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| Jalur lalu lintas: **S3 → PC lokal → R2** — dua hop dan dibatasi oleh kecepatan upload rumah. | Jalur lalu lintas: **S3 → EC2 → R2** — satu hop di dalam backbone cloud, sering kali 10-25 Gbit/s. |
| Batasan ISP rumah atau bandwidth asimetris memperlambat migrasi besar.                         | Throughput jauh lebih tinggi; tanpa batasan lokal.                                                  |
| CPU dan RAM lokal harus melakukan hashing setiap byte.                                                | Membebankan CPU ke VM cloud; Anda bisa memilih ukuran instans lebih besar sesuai kebutuhan.                |
| Kemungkinan masalah NAT/firewall.                                                      | IP publik dengan port 5572 terbuka (atau tunnel melalui SSH).                                          |

## Bagian 1. Menjalankan Rclone di EC2 (Rclone Eksternal)

1. **Luncurkan instans EC2 Ubuntu** (t3.medium atau lebih besar untuk upload multi-thread).
2. **Buka TCP 5572** di Security Group (atau gunakan tunnel SSH).
3. **Instal Rclone**:
```bash
curl https://rclone.org/install.sh | sudo bash
```
4. **Jalankan daemon rcd** dengan basic auth:
```bash
rclone rcd --rc-addr=0.0.0.0:5572 --rc-user=admin --rc-pass=admin --log-level INFO
```
    Flag `--rc-addr` mengekspos endpoint HTTP agar dapat dipanggil oleh RcloneView.
    
5. **Health-check** dari laptop Anda:
```bash
   curl -u admin:admin -X POST "http://<EC2-IP or DNS-NAME>:5572/rc/noop"
```
    Respons JSON `{}` mengonfirmasi bahwa daemon sedang berjalan (listening).

👉 Pelajari lebih lanjut: [How to Run Rclone on AWS EC2 Server](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)

## Bagian 2. Membuka Jendela RcloneView Baru

Untuk menjaga koneksi tetap terorganisir, RcloneView memungkinkan setiap jendela beroperasi dengan engine Rclone-nya sendiri.

1. Jalankan **RcloneView**  
2. Klik tombol **`New Window`** dari menu `Home`. 
3. Sebuah jendela aplikasi baru akan terbuka. Instans ini independen dari jendela utama dan akan mempertahankan konteks koneksinya sendiri.  

  📌 _Anda akan menyambungkan jendela ini ke Rclone Eksternal (EC2) Anda pada langkah berikutnya._  

👉 Pelajari lebih lanjut: [Using Multiple Rclone Connections with New Window](/howto/rcloneview-advanced/multi-window).

## Bagian 3. Menyambung ke Rclone yang Di-hosting di EC2

Pada **jendela yang baru dibuka**, ikuti langkah-langkah berikut untuk menyambung ke Rclone Eksternal yang di-hosting di EC2:

1. Di jendela baru, buka **Settings → Connection Manager**.
2. Klik **New Connection** dan isi formulir:

| Field          | Value                              |
| -------------- | ---------------------------------- |
| Display Name   | `ec2-rclone`                       |
| Remote Address | `http://<EC2-IP or DNS-NAME>:5572` |
| Username       | `admin`                            |
| Password       | `admin`                            |

4. Klik **`Test Connection`** untuk memverifikasi pengaturan.  
   Anda akan melihat respons koneksi berhasil.  
5. Jika pengujian berhasil, klik **`Save`**, lalu **`Connect`**.  
6. Anda kini tersambung ke **instans Rclone Eksternal yang berjalan di EC2**, dan status koneksi akan muncul di bagian atas jendela.   

<div class="img-grid-2"> <img src="/support/images/en/tutorials/new-connection-to-ec2-rclone.png" alt="Create EC2 connection" class="img-medium img-center" /> <img src="/support/images/en/tutorials/connected-to-ec2-rclone.png" alt="Connected to EC2" class="img-medium img-center" /> </div>

## Bagian 4. Menambahkan Remote AWS S3 & Cloudflare R2 (melalui Rclone Eksternal)


### ➕ Menambahkan Remote AWS S3

1. Buka tab **`Remote`**, lalu klik **`+ New Remote`**.
2. Pada tab **`Provider`**, pilih **Amazon S3**.
3. Pada tab **`Options`**:
   - Atur `provider` ke `AWS`
   - Masukkan **Access Key ID** dan **Secret Access Key** Anda
   - Region dan endpoint dapat dibiarkan default kecuali ingin disesuaikan
4. Klik **Save** untuk menyelesaikan pengaturan.

👉 Pelajari lebih lanjut:   
- [How to Add S3 Remote](/howto/remote-storage-connection-settings/s3)
- [How to get AWS S3 Access credential](/howto/cloud-storage-setting/aws-account-info)
    
### ➕ Menambahkan Remote Cloudflare R2

1. Sekali lagi, klik **`+ New Remote`** pada tab `Remote`.
2. Pada tab **`Provider`**, pilih **S3** (ya, lagi—R2 menggunakan protokol S3).
3. Pada tab **`Options`**:
   - Atur `provider` ke `Cloudflare`
   - Masukkan **Cloudflare R2 Access Key** dan **Secret Key** Anda
   - Atur `endpoint` ke `https://<accountid>.r2.cloudflarestorage.com`
1. Klik **Save** untuk menyelesaikan pengaturan remote R2.

👉 Pelajari lebih lanjut:   
- [How to Add S3 Remote](/howto/remote-storage-connection-settings/s3)
- [How to get cloudflare R2 Access credential](/howto/cloud-storage-setting/cloudflare-r2-credential)
    
<img src="/support/images/en/tutorials/open-aws-s3-and-cloudflare-r2-remotes.png" alt="open aws s3 and cloudflare r2 remotes" class="img-medium img-center" />

## Bagian 5. Sinkronisasi File Antara AWS S3 dan Cloudflare R2

### 🔁 Metode A: Menggunakan Sync atau Job

1. Pada panel Explorer, pilih folder **Cloudflare R2** dan folder **AWS S3** yang ingin Anda sinkronkan.
2. Klik tombol **`Sync`** pada menu `home`.
3. Pilih opsi sinkronisasi (satu arah atau dua arah), pratinjau tindakan, lalu konfirmasi.
4. RcloneView menjalankan sinkronisasi dan menampilkan progres pada tab log **`transfer`**.

- Untuk transfer berulang atau terjadwal:
  1. Klik **`Save to Jobs`** pada modal Sync, atau buka **`Job Manager`** → **`Add Job`**.
  2. Konfigurasikan sumber, tujuan, dan opsi.
  3. Simpan dan jalankan secara manual atau atur jadwal.

👉 Pelajari lebih lanjut:
- [Synchronize Remote Storages](/howto/rcloneview-basic/synchronize-remote-storages)
- [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)
- [Execute & Manage Jobs](/howto/rcloneview-basic/execute-manage-job)

---

### ⏰ Metode B: Menjadwalkan Job Sinkronisasi Berulang

1. Pada panel Explorer, pilih folder **Cloudflare R2** dan **AWS S3** yang ingin Anda jaga tetap tersinkronisasi.
2. Buka **`Job Manager`** dari menu **`Home`** atau **`Remote`**, lalu klik **`Add Job`**.
3. Konfirmasikan sumber dan tujuan Anda.
4. Gunakan editor jadwal untuk mengatur kapan job harus berjalan. Pratinjau jadwal Anda sebelum menyimpan.
5. Simpan dan aktifkan job terjadwal.

RcloneView akan menjalankan sinkronisasi pada waktu yang Anda tentukan. Periksa detail eksekusi dan log pada **`Job History`** dan terima notifikasi setelah selesai.

👉 Pelajari lebih lanjut: [Job Scheduling and Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)

##  ⚡ Cheat-Sheet Penyetelan Performa

| Parameter                 | Nilai yang Disarankan                                    | Level Dampak | Alasan                                                                                                                                                                         |
| ------------------------- | ---------------------------------------------------- | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--s3-chunk-size`         | `50M`                                                | *****        | Bagian yang lebih besar mengurangi operasi Class-A pada R2 dan meningkatkan kecepatan[1](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311).   |
| `--s3-upload-concurrency` | `32–64`                                              | ***          | Meningkatkan thread multipart untuk R2.                                                                                                                                               |
| `--transfers`             | `32–64`                                              | *            | Upload objek paralel meningkatkan throughput pada tautan 10 Gbit[1](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311). |
| `--s3-disable-checksum`   | Tambahkan hanya saat merekonsiliasi <br />checksum secara eksternal | ****         | Melewati bottleneck hashing per-bagian—gunakan dengan hati-hati[1](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311).        |
## 📈 Hasil Penyetelan Dunia Nyata

Untuk memaksimalkan performa selama transfer cloud-to-cloud, kami menyempurnakan konfigurasi **remote Cloudflare R2** seperti dijelaskan di bawah ini.

:::caution Hanya Hasil Eksperimental

RcloneView adalah GUI frontend untuk Rclone. Tips penyetelan performa dan benchmark yang dibagikan di sini didasarkan pada pengujian eksperimental yang terinspirasi dari postingan komunitas ( [How to Maximize Multipart Upload Speed to Cloudflare R2](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311)) dan dapat bervariasi tergantung lingkungan cloud, region, kondisi jaringan, dan kasus penggunaan spesifik Anda.

Hasil ini **tidak dijamin** dan sebaiknya hanya digunakan sebagai referensi.
:::

### 🔧 Cara Memperbarui Pengaturan Remote R2

Untuk mengubah konfigurasi remote R2 target:

1. Pada panel **Explorer**, klik ikon roda gigi di sebelah remote Cloudflare R2 Anda, atau buka **Remote Manager → Edit**.
2. Pada tab **`Options`**, klik **`Show advanced options`**.
3. Atur nilai berikut:
   - `chunk_size = 50Mi`
   - `upload_concurrency = 32`
4. Simpan perubahan Anda.

Opsi `disable_checksum` juga dapat memberikan dampak signifikan terhadap kecepatan transfer. Namun, untuk pengujian ini, kami membiarkannya pada nilai default (`false`) untuk menjaga pemeriksaan integritas selama transfer file.
<img src="/support/images/en/tutorials/chunk-size-and-upload-concurrency-settings.png" alt="chunk size and upload concurrency settings" class="img-medium img-center" />
### 📉 Baseline: Performa Default

Saat menggunakan **pengaturan default**:

```text
- chunk_size = 5Mi 
- upload_concurrency = 4. 
```

kami mengamati kecepatan transfer sekitar **114 MB/s** saat memindahkan file besar dari **AWS S3** ke **Cloudflare R2** melalui **Rclone yang di-hosting di EC2**.
<img src="/support/images/en/tutorials/transfer-speed-with-default-options.png" alt="transfer speed with default options" class="img-medium img-center" />

### 🚀 Setelah Penyetelan: Peningkatan Performa 4×

Dengan memperbarui remote Cloudflare R2 menggunakan pengaturan yang dioptimalkan:

```text
- chunk_size = 50Mi 
- upload_concurrency = 32

```

dan mempertahankan `disable_checksum = false`, kami mencapai kecepatan sekitar **440 MB/s**—sebuah **peningkatan 4×** dibandingkan default.

<img src="/support/images/en/tutorials/high-transfer-speed-with-chunk-size-and-upload-concurrency.png" alt="high transfer speed with chunk size and upload concurrency" class="img-medium img-center" />
## ✅ Ringkasan

Transfer cloud-to-cloud tidak lagi perlu merangkak melalui laptop Anda. Dengan membebankan pekerjaan berat ke daemon Rclone eksternal di EC2, Anda membuka kecepatan migrasi mendekati line-rate, menghindari kejutan biaya egress AWS, dan menjaga alur kerja Anda tetap sepenuhnya visual di dalam RcloneView. Mulailah perpindahan S3 ↔ R2 berikutnya dengan percaya diri—dan ucapkan selamat tinggal pada bottleneck lokal.

---

## 🔗 Panduan Terkait

- **Pengaturan Penyimpanan**
	- [How to Add S3-Compatible Remotes](/howto/remote-storage-connection-settings/s3)
	- [How to Get AWS S3 Access Credentials](/howto/cloud-storage-setting/aws-account-info)
	- [How to Get Cloudflare R2 Access Credentials](/howto/cloud-storage-setting/cloudflare-r2-credential)
- **EC2 & Rclone Jarak Jauh**
	- [How to Run Rclone on AWS EC2](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)
- **Manajemen Jendela & Koneksi**
	- [Using Multiple Rclone Connections with New Window](/howto/rcloneview-advanced/multi-window)
	- [Manage Multiple RcloneView Windows](https://www.perplexity.ai/support/howto/rcloneview-advanced/multi-window) <!-- external duplicate, optional to keep -->
- **Sinkronisasi dan Kontrol Job**
	- [Synchronize Remote Storages](/howto/rcloneview-basic/synchronize-remote-storages)
	- [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)
	- [Execute & Manage Jobs](/howto/rcloneview-basic/execute-manage-job)
	- [Job Scheduling and Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)
- **Pertimbangan Biaya**
	- [AWS Pricing – Data Transfer](https://aws.amazon.com/ec2/pricing/on-demand/#Data_Transfer)
- **Optimisasi Performa**
	- [How to Maximize Multipart Upload Speed to Cloudflare R2](https://forum.rclone.org/t/how-to-maximize-single-file-multipart-upload-speed-to-cloudflare-r2-s3-compatible/34311)

<CloudSupportGrid />
