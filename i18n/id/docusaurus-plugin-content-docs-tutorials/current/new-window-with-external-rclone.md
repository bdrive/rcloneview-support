---
sidebar_position: 5
description: Pelajari cara mensinkronkan Google Drive dan AWS S3 langsung di cloud menggunakan RcloneView yang terhubung ke instance Rclone eksternal yang berjalan di AWS EC2.
keywords:
  - rcloneview
  - cloud
  - sync
  - rclone
  - aws
  - ec2
  - google drive
  - aws s3
  - external rclone
  - cloud to cloud transfer
  - cloud sync
  - Cloud Migration
  - cloud storage
  - cloud transfer
  - file synchronization
tags:
  - RcloneView
  - aws-ec2
  - google-drive
  - Sync
  - cloud-file-transfer
  - cloud-migration
  - cloud-to-cloud
  - aws-s3
date: 2025-06-19
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# Sinkronkan AWS S3 dan Google Drive melalui External Rclone di EC2

Mensinkronkan data antar layanan penyimpanan cloud (misalnya Google Drive ↔ AWS S3) menggunakan **RcloneView** sangatlah mudah berkat **Embedded Rclone** bawaannya. Saat Anda menginstal RcloneView, mesin bawaan ini otomatis disertakan dan biasanya digunakan untuk mengelola transfer file dari **PC lokal** Anda.

Namun, menggunakan Embedded Rclone berarti **semua lalu lintas transfer mengalir melalui komputer lokal Anda**. Hal ini dapat memperlambat proses secara signifikan—terutama saat mensinkronkan dataset besar atau saat menggunakan jaringan yang lebih lambat.

Sebagai contoh, mensinkronkan file dari **Google Drive ke AWS S3** menggunakan Embedded Rclone melibatkan pengunduhan file ke mesin lokal Anda lalu mengunggahnya ke S3. Transfer ganda ini tidak hanya menambah latensi, tetapi juga menghabiskan bandwidth lokal Anda.

<img src="/support/images/en/tutorials/sync-aws-s3-and-google-drive-via-ec2.png" alt="sync aws s3 and google drive via ec2" class="img-medium img-center" />
Solusi yang lebih baik dalam kasus ini adalah **menjalankan Rclone langsung pada instance cloud**—seperti **server AWS EC2**. Dengan menghubungkan RcloneView ke **External Rclone yang berjalan di EC2** tersebut, Anda dapat:

- Menghindari perutean lalu lintas melalui PC lokal Anda  
- Melakukan transfer cloud-ke-cloud langsung di dalam cloud (Google → EC2 → S3)  
- Memanfaatkan infrastruktur jaringan cloud berkecepatan lebih tinggi    

Arsitektur ini secara signifikan meningkatkan performa dan mengurangi beban pada perangkat lokal Anda.

Dalam tutorial ini, kami akan memandu Anda cara menggunakan fitur **New Window RcloneView** untuk terhubung ke **External Rclone di EC2**, lalu mensinkronkan file antara **Google Drive** dan **AWS S3** sepenuhnya dari cloud.

:::caution Biaya AWS EC2 dan Transfer Jaringan Mungkin Berlaku  

Menjalankan Rclone pada instance EC2 dapat menghasilkan transfer yang lebih cepat, tetapi perlu diperhatikan bahwa **AWS mungkin membebankan biaya untuk penggunaan komputasi dan transfer data keluar ke layanan lain**.  

Lihat: [AWS Pricing – Data Transfer](https://aws.amazon.com/ec2/pricing/on-demand/#Data_Transfer)

:::
  
Panduan ini akan memandu Anda cara:

1. Meluncurkan dan mengonfigurasi **Rclone** pada instance AWS EC2  
2. Membuka jendela RcloneView baru  
3. Terhubung ke **External Rclone** di EC2  
4. Menambahkan remote **Google Drive** dan **AWS S3**  
5. Mensinkronkan file langsung di antara keduanya dengan performa yang lebih baik

---

## Bagian 1: Deploy Rclone di EC2 (External Rclone)

Ikuti panduan AWS EC2 untuk meluncurkan Ubuntu, membuka port 5572, menginstal Rclone, dan menjalankan daemon `rcd`  

👉 Lihat: [How to Run Rclone on AWS EC2 Server](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)
 
**Poin penting**:

- `rclone rcd` berjalan dengan `--rc-addr=0.0.0.0:5572`  
- Buka port `5572` di AWS EC2 Security Group Anda
- HTTP Basic auth telah diatur (`--rc-user`, `--rc-pass`)  
- Jalankan daemon dengan:

 ```bash
   rclone rcd --rc-user=admin --rc-pass=admin --rc-addr=0.0.0.0:5572
```

- Verifikasi akses melalui:

```bash
curl -X POST -u admin:admin "http://<EC2-PUBLIC-IP-or-DNS>:5572/rc/noop"

```



---

## Bagian 2: Buka Jendela RcloneView Baru

Untuk menjaga koneksi tetap teratur, RcloneView memungkinkan setiap jendela beroperasi dengan mesin Rclone-nya sendiri.

1. Jalankan **RcloneView**
    
2. Klik tombol **`New Window`** dari menu `Home`
    
3. Jendela aplikasi baru akan terbuka. Instance ini independen dari jendela utama dan akan mempertahankan konteks koneksinya sendiri.
    

  📌 _Anda akan menghubungkan jendela ini ke External Rclone (EC2) Anda pada langkah berikutnya._

  
👉 Pelajari lebih lanjut: [Using Multiple Rclone Connections with New Window](/howto/rcloneview-advanced/multi-window)

---

## Bagian 3: Menghubungkan External Rclone yang Di-host di EC2

Pada **jendela yang baru dibuka**, ikuti langkah-langkah berikut untuk terhubung ke External Rclone Anda yang di-host di EC2:

1. Buka **`Connection Manager`** dari menu `Settings`.

2. Klik **`New Connection`** untuk membuat profil koneksi Rclone baru.

3. Isi kolom yang diperlukan:

    - **Display Name**: `ec2-rclone` (atau nama lain yang Anda inginkan)

    - **Remote Address**: `http://<EC2-PUBLIC-IP-or-DNS-NAME>:5572`

    - **Username / Password**: Gunakan nilai yang Anda tetapkan di Bagian 1 saat memulai daemon Rclone  
      (misalnya, `--rc-user=admin`, `--rc-pass=admin`)

4. Klik **`Test Connection`** untuk memverifikasi pengaturan.  
   Anda akan melihat respons koneksi yang berhasil.

5. Jika pengujian berhasil, klik **`Save`**, lalu **`Connect`**.

6. Anda kini terhubung ke **instance External Rclone yang berjalan di EC2**, dan status koneksi akan muncul di bagian atas jendela.

<div class="img-grid-2">
<img src="/support/images/en/tutorials/new-connection-to-ec2-rclone.png" alt="new connection to ec2 rclone" class="img-medium img-center" />
<img src="/support/images/en/tutorials/connected-to-ec2-rclone.png" alt="connected to ec2 rclone" class="img-medium img-center" />
</div>

👉 Pelajari lebih lanjut: [Add a New External Rclone](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)


---

## Bagian 4: Menambahkan Remote AWS S3 & Google Drive (via External Rclone)

  
Masih di jendela RcloneView yang terhubung ke EC2:

### ➕ Menambahkan Remote AWS S3

1. Klik **`+ New Remote`** di menu `Remote`
    
2. Pada tab **Provider**, cari dan pilih S3
    
3. Pada tab **`Options`**:
    
    - Atur **`Provider`** ke AWS
        
    - Masukkan **`Access Key ID`** dan **`Secret Access Key`** AWS Anda
        
    - Atur **`Region`** dan, jika perlu, atur **Endpoint** untuk layanan yang kompatibel dengan S3
        
    
4. Klik **Save**, beri nama (misalnya, ec2-s3)
    
👉 Pelajari lebih lanjut: [Add AWS S3 Remote](/howto/remote-storage-connection-settings/s3)

### ➕ Menambahkan Remote Google Drive (Menggunakan OAuth Access Token)

Alih-alih menyelesaikan alur login baru berbasis browser, Anda dapat mengikuti langkah-langkah pada panduan di bawah ini untuk menggunakan **OAuth Access Token** yang telah diperoleh sebelumnya:

👉 Lihat: [Set Up Google Drive on External Rclone Without Browser](/howto/remote-storage-connection-settings/ec2-google-drive-connection)

1. Buka **`+ New Remote`** dari menu `Remote`
2. Pilih **Google Drive** sebagai provider
3. Pada tab **Options**, gulir ke bawah dan klik **Show advanced options**
4. Tempel token yang telah disalin sebelumnya ke kolom **`token`**
5. Beri nama remote (misalnya, `ec2-gdrive`) lalu simpan

  <img src="/support/images/en/tutorials/browsing-aws-s3-and-google-drive-via-ec2-rclone.png" alt="browsing aws s3 and google drive via ec2 rclone" class="img-medium img-center" />


---

## Bagian 5: Sinkronkan File Antara AWS S3 dan Google Drive

 Anda kini dapat mentransfer file antara Google Drive dan S3 melalui instance Rclone EC2 Anda.

  ### **📁 Metode A: Bandingkan dan Sinkronkan Sesuai Kebutuhan**

1. Buka tab **Browse**
    
2. Muat **remote Google Drive** di panel kiri (ec2-gdrive:)
    
3. Muat **remote AWS S3** di panel kanan (ec2-s3:)
    
4. Klik **Compare** pada menu atas
    
5. Tinjau perbedaan:
    
    - File yang hanya ada di satu sisi
        
    - Ukuran yang berbeda
        
    - Kecocokan identik
        
    
6. Gunakan **Copy →**, **← Copy**, atau **Delete** untuk mensinkronkan
    

💡 Progres ditampilkan di status bar dan tab transfer log.

  👉 Pelajari lebih lanjut: [Compare Folder Contents](/howto/rcloneview-basic/compare-folder-contents)

---

### **🕒 Metode B: Menyiapkan Sinkronisasi Terjadwal**

1. Buka **Home → Job Manager**, lalu klik **Add Job**
    
2. Pilih **Sync**
    
    - Source: ec2-gdrive:folder
        
    - Destination: ec2-s3:folder
        
    
3. Konfigurasikan:
    
    - Arah sinkronisasi
        
    - Aturan filter (opsional)
        
    
4. (Opsional) Aktifkan **Scheduling**
    
    - Atur pola waktu
        
    - Pratinjau jadwal dengan simulator bawaan
        
    
5. Klik **Save & Enable**
    

  Setelah dijadwalkan, RcloneView akan menjalankan sinkronisasi secara otomatis menggunakan backend Rclone yang di-host di EC2 Anda.

👉 Pelajari lebih lanjut:
- [Synchronize Remote Storages](/howto/rcloneview-basic/synchronize-remote-storages)
- [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)
- [Execute & Manage Jobs](/howto/rcloneview-basic/execute-manage-job)
- [Job Scheduling and Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)
  
---

## Pemeriksaan Akhir

- Pastikan sinkronisasi Anda berhasil diselesaikan melalui panel **Transfer Log** atau **Job History**
    
- Jalankan pemeriksaan berkala pada EC2 untuk memastikan instance tetap terhubung dan responsif
    

---

## 🔗 Panduan Terkait

- [How to Run Rclone on AWS EC2 Server](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)
- [Using Multiple Rclone Connections with New Window](/howto/rcloneview-advanced/multi-window)
- [Add a New External Rclone](/howto/rcloneview-basic/connection-manager#add-a-new-external-rclone)
- [Add AWS S3 Remote](/howto/remote-storage-connection-settings/s3)
- [Compare Folder Contents](/howto/rcloneview-basic/compare-folder-contents)
-  [Synchronize Remote Storages](/howto/rcloneview-basic/synchronize-remote-storages)
- [Create Sync Jobs](/howto/rcloneview-basic/create-sync-jobs)
- [Execute & Manage Jobs](/howto/rcloneview-basic/execute-manage-job)
- [Job Scheduling and Execution](/howto/rcloneview-advanced/job-scheduling-and-execution)



<CloudSupportGrid />
