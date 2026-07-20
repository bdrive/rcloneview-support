---
sidebar_position: 3
description: "Pelajari cara mendeteksi Synology NAS secara otomatis di jaringan lokal Anda, lalu menghubungkannya ke RcloneView menggunakan WebDAV, SMB, atau SFTP."
keywords:
  - rcloneview
  - Synology NAS
  - deteksi otomatis
  - transfer NAS ke cloud
  - SMB
  - WebDAV
  - SFTP
  - integrasi Synology
  - sinkronisasi penyimpanan cloud
  - pencadangan cloud
  - google drive
  - onedrive
  - drag and drop
  - job scheduler
  - manajemen multi-cloud
tags:
  - RcloneView
  - Tutorial
  - synology
  - NAS
  - auto-detection
  - cloud-file-transfer
  - webdav
  - sftp
  - cloud-migration
  - multi-cloud
  - sync
  - job
  - drag-and-drop
date: 2025-09-11
author: Jay
---
import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';

# Integrasi Synology NAS yang Mudah dengan RcloneView: Deteksi Otomatis, Pengaturan & Transfer File

Hubungkan Synology NAS Anda dengan mudah ke layanan cloud seperti Google Drive, OneDrive, atau iCloud menggunakan **RcloneView**. Dengan deteksi otomatis, dukungan bawaan untuk SMB, WebDAV, dan SFTP, serta tanpa pengaturan yang rumit, Anda dapat mentransfer, mensinkronkan, atau menjadwalkan job antara NAS dan drive cloud Anda—semuanya dari GUI yang mudah digunakan.

## **✅ Mengapa Menggunakan RcloneView untuk Transfer NAS ke Cloud?**

Jika Anda menggunakan Synology NAS sebagai server rumah, pencadangan kantor, atau penyimpanan media, kemungkinan besar Anda juga memiliki akun penyimpanan cloud. Dengan RcloneView, Anda tidak perlu mengunduh file secara manual atau mempelajari alat command-line.

Sebagai gantinya, Anda mendapatkan:

- 🚀 Deteksi otomatis perangkat NAS di jaringan lokal Anda
    
- 🔄 Job sinkronisasi & transfer antara NAS dan penyimpanan cloud
    
- 👨‍💻 Pengaturan berbasis GUI untuk WebDAV, SMB, FTP, dan SFTP
    
- 📅 Jadwalkan job pencadangan otomatis dari NAS ke cloud
    
- ✅ Bandingkan isi folder sebelum melakukan sinkronisasi
    
- 🧠 Tidak memerlukan keterampilan command-line
  

Baik Anda seorang pemula maupun administrator sistem, **RcloneView membuat pengelolaan NAS ke cloud menjadi sederhana**.

## **🧰 Langkah 1: Deteksi NAS Anda di Jaringan Lokal**
  

RcloneView secara otomatis memindai jaringan lokal Anda untuk mencari perangkat Synology NAS.

<img src="/support/images/en/tutorials/synology-nas-auto-detect.png" alt="synology nas auto detect" class="img-medium img-center" />


- Pastikan NAS dan komputer Anda berada di **jaringan lokal yang sama**.
    
- Perangkat NAS yang terdeteksi akan muncul dalam daftar yang menampilkan:
    
    - Nama perangkat, IP, alamat MAC, port DSM
        
    - Tautan untuk membuka **DSM (DiskStation Manager)**


:::info Deteksi Otomatis NAS Tidak Berfungsi pada VLAN
Jika Anda menggunakan VLAN (Virtual Local Area Network), RcloneView mungkin tidak dapat mendeteksi Synology NAS Anda secara otomatis.

Ini karena fitur deteksi otomatis mengandalkan protokol multicast atau broadcast, yang biasanya dibatasi atau diblokir antar-VLAN demi alasan keamanan dan isolasi lalu lintas.
:::

  
### Pilih Metode Koneksi

  Dari dropdown, pilih cara untuk terhubung:

- **WebDAV** (default dan direkomendasikan)
- **SMB**
- **FTP**
- **SFTP**

**🔗 Perlu mengonfigurasi hal ini di Synology terlebih dahulu?**

Lihat panduan pengaturan DSM resmi:

- [Mengatur WebDAV di Synology](https://kb.synology.com/en-global/DSM/help/WebDAVServer/webdav_server)
- [Mengaktifkan SMB di Synology](https://kb.synology.com/en-global/DSM/help/SMBService/smbservice_smb_settings)
- [Mengatur FTP di Synology](https://kb.synology.com/en-global/DSM/help/DSM/AdminCenter/file_ftp_setting) 
- [Mengatur SFTP di Synology](https://kb.synology.com/en-global/DSM/help/DSM/AdminCenter/file_ftp_sftp) 

:::important Konfigurasi Port Forwarding & DDNS

Jika NAS Anda berada di belakang router atau beroperasi dalam lingkungan NAT (Network Address Translation), Anda harus **mengonfigurasi port forwarding** pada router setelah mengaktifkan WebDAV, SMB, FTP, atau SFTP di DSM.

📘 Pelajari lebih lanjut: [Panduan Port Forwarding Synology](https://kb.synology.com/en-global/DSM/tutorial/Quick_Start_External_Access#x_anchor_id5)

Selain itu, untuk mengakses NAS Anda melalui internet menggunakan **akses berbasis domain, bukan alamat IP**, Anda dapat mengonfigurasi layanan **DDNS (Dynamic DNS)** milik Synology.

🌐 Pelajari lebih lanjut: [Panduan Pengaturan DDNS Synology](https://kb.synology.com/en-global/DSM/tutorial/Quick_Start_External_Access#x_anchor_id3)

:::


## **🔗 Langkah 2: Tambahkan Synology NAS sebagai Remote**

Setelah memilih NAS dan metode koneksi Anda, RcloneView akan secara otomatis memandu Anda melalui wizard **`+ New Remote`**:

- **Provider** dipilih secara otomatis berdasarkan metode koneksi yang Anda pilih (misalnya, WebDAV, SMB, SFTP).
- **Remote Name** terisi otomatis (misalnya, `Synology-28`) — namun Anda dapat mengubahnya jika mau.
- **URL & Port**:  
  - Untuk **WebDAV**, masukkan URL lengkap (misalnya, `https://abc.synology.me:5006`)  
  - Untuk **SMB / FTP / SFTP**, masukkan **host** (misalnya, `192.168.1.100`) dan **port** yang sesuai:
    - `445` untuk SMB  
    - `21` untuk FTP  
    - `22` untuk SFTP
- **Username dan Password**: Masukkan kredensial akun NAS yang Anda gunakan untuk mengakses folder bersama.

<div class="img-grid-3">
<img src="/support/images/en/tutorials/add-synology-webdav-remote.png" alt="add synology webdav remote" class="img-medium img-center" />
<img src="/support/images/en/tutorials/add-synology-smb-remote.png" alt="add synology smb remote" class="img-medium img-center" />
<img src="/support/images/en/tutorials/add-synology-sftp-remote.png" alt="add synology sftp remote" class="img-medium img-center" />
</div>

📌 **Butuh bantuan lebih lanjut untuk masing-masing metode?**  
Berikut panduan pengaturan mendetail:

- 👉 [Cara Menambahkan Remote SFTP](/howto/remote-storage-connection-settings/sftp)
- 👉 [Cara Menambahkan Remote WebDAV](/howto/remote-storage-connection-settings/webdav)



✅ Setelah ditambahkan, remote NAS Anda akan muncul di Remote List.  
Anda kemudian dapat membukanya di panel **Explorer** untuk menelusuri file atau memulai transfer.

<img src="/support/images/en/tutorials/synology-nas-webdav-and-google-drive.png" alt="synology nas webdav and google drive" class="img-medium img-center" />

## **💽 Langkah 2.5: Mount NAS sebagai Local Drive (Explorer/Finder)**

Mount folder NAS mana pun sebagai local drive di Windows (misalnya, `W:`) atau sebagai lokasi di macOS Finder. Gunakan tombol Mount di toolbar Explorer.

### Cara Melakukan Mount

1. Di **Browse/Explorer** RcloneView, buka remote NAS Anda dan navigasikan ke folder yang ingin Anda mount.
2. Klik ikon **Mount (<img src="/support/icons/mount-icon.png" alt="mount icon" class="inline-icon" />)** di toolbar bagian atas.
3. Konfigurasikan opsi:
   - Windows: pilih huruf drive (Auto atau pilih sendiri)
   - macOS: konfirmasikan nama folder mount (default seperti `~/homefolder/<Remote name>`),
4. Klik **Save and mount**. Folder akan muncul sebagai local disk:
   - Windows: di bawah "This PC", misalnya, `synology-28-webdav … (W:)`
   - macOS: di bawah "Locations" pada Finder

<img src="/support/images/en/tutorials/mount-synology-nas-as-local-drive.png" alt="mount synology nas as local drive" class="img-medium img-center" />
                
:::tip Unmount
Untuk melakukan unmount, klik **Unmount** di RcloneView atau eject drive dari OS.
:::

:::note Prasyarat
Melakukan mount melalui `rclone mount` mungkin memerlukan driver filesystem OS. Jika belum terpasang, ikuti tautan berikut:
- Windows: [WinFsp](https://winfsp.dev/)
- macOS: [macFUSE](https://osxfuse.github.io/)

Untuk performa, RcloneView mengaktifkan **VFS cache** selama operasi berat. Pemuatan metadata awal mungkin memerlukan waktu sejenak tergantung kondisi jaringan.
:::

Untuk detail lengkap dan metode tambahan, lihat:

- [Metode 1: Mount dari Remote Explorer](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-1-mount-from-remote-explorer)
- [Metode 2: Mount melalui Mount Manager](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-2-mount-via-mount-manager)
- [Melihat dan Mengelola Mounted Drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#view-and-manage-mounted-drives)
- [Quick Mount dari System Tray](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#view-and-manage-mounted-drives)

## **🚚 Langkah 3: Transfer atau Sinkronisasi File**

  
Setelah NAS Anda terhubung sebagai Remote, RcloneView memberi Anda **4 cara canggih untuk mengelola file** antara NAS dan penyimpanan cloud Anda.

  
### **🖱️ Metode 1: Drag & Drop**

1. Buka tab **Browse**.
    
2. Muat remote **NAS** Anda di satu panel, dan remote cloud Anda (misalnya Google Drive) di panel lainnya.
    
3. Cukup seret file dari satu panel dan lepaskan di panel lainnya.
    
4. Transfer dimulai secara instan. Anda dapat memantaunya di tab **Transfer Logs**.
    
<img src="/support/images/en/tutorials/synology-nas-to-google-drag-and-drop.png" alt="synology nas to google drag and drop" class="img-medium img-center" />

  👉 Pelajari lebih lanjut: [Menelusuri Remote Storage](/howto/rcloneview-basic/browse-and-manage-remote-storage)


### **🔍 Metode 2: Bandingkan Isi Folder**

1. Buka folder NAS dan cloud di kedua panel Explorer.
    
2. Klik **Compare** pada tab **Home** di menu bagian atas.
    
3. RcloneView akan menyoroti:
    
    - File yang hanya ada di satu sisi
        
    - File dengan konflik ukuran atau checksum
        
    - File yang identik
        
    
4. Gunakan **Copy →**, **← Copy**, atau **Delete** untuk melakukan tindakan pada file.
    
<img src="/support/images/en/tutorials/compare-synology-nas-and-google-drive.png" alt="compare synology nas and google drive" class="img-medium img-center" />

  👉 Pelajari lebih lanjut: [Membandingkan Folder](/howto/rcloneview-basic/compare-folder-contents)


### **🔁 Metode 3: Sinkronisasi atau Job Satu Kali**

1. Pilih sumber (NAS) dan tujuan (cloud).
    
2. Klik **Sync** untuk membuka opsi sinkronisasi.
    
3. Pilih arah, dry-run, filter, dan sebagainya.
    
4. Jalankan sinkronisasi segera atau klik **Save to Jobs**.
    

  <img src="/support/images/en/tutorials/sync-job-synology-to-google-drive.png" alt="sync job synology to google drive" class="img-medium img-center" />
  

👉 Pelajari lebih lanjut:

- [Menyinkronkan Remote Storage](/howto/rcloneview-basic/synchronize-remote-storages)
    
- [Membuat Sync Job](/howto/rcloneview-basic/create-sync-jobs)
    


### **⏰ Metode 4: Menjadwalkan Job Berulang**

1. Buka **Job Manager** → klik **Add Job**.
    
2. Pilih folder NAS dan cloud Anda.
    
3. Tentukan jadwal (harian, mingguan, cron).
    
4. Simpan dan aktifkan job.
    

  ✅ Job akan berjalan secara otomatis di latar belakang pada waktu yang dijadwalkan.
 

👉 Pelajari lebih lanjut: [Penjadwalan dan Eksekusi Job](/howto/rcloneview-advanced/job-scheduling-and-execution)



## **🧾 Ringkasan**

  

Dengan integrasi Synology NAS milik RcloneView, Anda dapat:

- Mendeteksi dan terhubung ke NAS tanpa pengaturan teknis
    
- Menggunakan SMB, SFTP, FTP, atau WebDAV dengan mudah
    
- Mentransfer, mensinkronkan, atau menjadwalkan job pencadangan ke cloud mana pun
    
  
Tanpa command line. Tanpa skrip. Cukup pengelolaan file cloud yang cepat, canggih, dan fleksibel.

  
## **🔗 Panduan Terkait**

- [Cara Menambahkan Remote SFTP](/howto/remote-storage-connection-settings/sftp)
- [Cara Menambahkan Remote WebDAV](/howto/remote-storage-connection-settings/webdav)
- [Membandingkan Isi Folder](/howto/rcloneview-basic/compare-folder-contents)
- [Menelusuri & Mengelola Remote Storage](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Menyinkronkan Remote Storage](/howto/rcloneview-basic/synchronize-remote-storages)
- [Membuat Sync Job](/howto/rcloneview-basic/create-sync-jobs)
- [Menjalankan & Mengelola Job](/howto/rcloneview-basic/execute-manage-job)
- [Penjadwalan dan Eksekusi Job](/howto/rcloneview-advanced/job-scheduling-and-execution)

🧠 **Mulai hubungkan NAS Anda ke cloud hari ini dengan RcloneView.**

<CloudSupportGrid />
