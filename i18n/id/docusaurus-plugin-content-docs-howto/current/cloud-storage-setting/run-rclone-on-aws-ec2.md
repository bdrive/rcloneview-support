---
sidebar_position: 2
description: "Panduan langkah demi langkah untuk menyiapkan dan menjalankan daemon Rclone Remote Control (rcd) pada instance AWS EC2 berbasis Ubuntu, termasuk akses API dan konfigurasi layanan systemd."
keywords:
  - rcloneview
  - rclone
  - aws
  - ec2
  - remote control
  - rclone rcd
  - systemd
  - ubuntu
  - daemon
  - cloud storage
  - rclone api
  - external rclone
tags:
  - RcloneView
  - aws
  - aws-ec2
  - remote-server
  - rclone-rcd
  - external-rclone
  - rclone
date: 2025-07-03
author: Jay
---
# Menjalankan Rclone Engine di AWS EC2

  Panduan ini membahas cara menyiapkan **daemon rcd milik Rclone** pada **instance EC2 berbasis Ubuntu**, sehingga memungkinkan akses API remote dari luar AWS.

---

## **✅ Ringkasan Langkah demi Langkah**

1. [Meluncurkan instance EC2](#launch-an-ec2-instance)
2. [Konfigurasi Security Group (buka port 5572)](#adjust-security-group-if-needed)
3. [SSH ke dalam instance](#ssh-into-the-ec2-instance)
4. [Instal Rclone](#install-rclone)
5. [Menjalankan daemon rclone rcd](#run-the-rclone-rcd-daemon)
6. [Menguji akses Rclone API dari luar](#verify-external-api-access)
7. [Menjalankan Rclone rcd sebagai Layanan systemd](#run-rclone-rcd-as-a-systemd-service)

---

### Meluncurkan Instance EC2

- Masuk ke AWS Management Console  
- Buka **EC2 → Launch Instance**  
- Konfigurasikan sebagai berikut:  
    - **Name**: rclone-server (atau sesuai pilihan Anda)  
    - **AMI**: Ubuntu Server 22.04 LTS (atau 20.04 LTS)   
    - **Instance type**: t2.micro (memenuhi syarat Free Tier)  
    - **Key pair**: Buat baru atau pilih yang sudah ada (untuk akses SSH)  
    - **Storage**: Minimal 8 GB  
    - **Network**: VPC default  
    - **Security group inbound rules**:  
        - SSH (port 22): dibatasi hanya untuk IP Anda  
        - **Custom TCP (port 5572): 0.0.0.0/0** — diperlukan untuk Rclone API  
- Luncurkan instance  

---

### Konfigurasi Security Group (jika diperlukan)

Kunjungi EC2 → Instances → Pilih instance Anda → tab Security → Klik Security Group → Edit inbound rules:

```
Type: Custom TCP
Port: 5572
Source: 0.0.0.0/0  (atau batasi hanya untuk IP Anda)
```

---

### SSH ke dalam Instance EC2

Dari terminal lokal Anda:

```
chmod 400 /path/to/your-key.pem
ssh -i /path/to/your-key.pem ubuntu@<EC2-PUBLIC-IP>
```

🔗 Untuk panduan membuat dan menggunakan pasangan kunci .pem, lihat [halaman resmi AWS “Create a key pair”](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-key-pairs.html)  .

---

### Instal Rclone

```
curl https://rclone.org/install.sh | sudo bash
rclone version
```

---

### Menjalankan Daemon rclone rcd

```
rclone rcd \
  --rc-user=admin \
  --rc-pass=admin \
  --rc-addr=0.0.0.0:5572
```

- --rc-user/--rc-pass: mengamankan akses API
- --rc-addr: mendengarkan pada semua interface sehingga Anda dapat terhubung dari luar
- --rc-web-gui: meluncurkan antarmuka web

💡 Untuk operasi yang berkelanjutan, pertimbangkan untuk menjalankannya di bawah tmux, screen, atau sebagai layanan systemd.

---

### Memverifikasi Akses API dari Luar

Jalankan pemeriksaan kesehatan sederhana menggunakan curl:

```
curl -X POST -u admin:admin \
  "http://<EC2-PUBLIC-IP-or-DNS>:5572/rc/noop"
```

Respons yang diharapkan:

```
{}
```

Ini mengonfirmasi bahwa Rclone remote control (RC) API sedang berjalan dan menerima permintaan yang terautentikasi.

:::important 🛠️ Catatan
- Pastikan untuk mengganti admin:admin dengan --rc-user dan --rc-pass sebenarnya yang Anda tentukan saat memulai daemon.
- Ganti `<EC2-PUBLIC-IP-or-DNS>` dengan IP publik atau nama DNS instance EC2 Anda yang sebenarnya.
- Endpoint harus diawali dengan /rc/. Perintah /rc/noop tidak melakukan apa pun dan hanya mengonfirmasi bahwa API tersedia.
:::

---

#### **🔐 Praktik Terbaik Keamanan yang Direkomendasikan**

- Gunakan kredensial yang kuat dan unik untuk --rc-user / --rc-pass  
- Batasi akses melalui:
    - Daftar putih IP yang sempit di AWS Security Group, atau   
    - Bind ke IP tertentu: `--rc-addr=<your_ip>:5572`  
- Untuk mengamankan lalu lintas, pertimbangkan untuk menambahkan HTTPS melalui reverse proxy (misalnya, Nginx + TLS) atau layanan seperti Cloudflare Tunnel    

---
### Menjalankan Rclone rcd sebagai Layanan systemd

Untuk menjaga daemon Rclone (`rcd`) tetap berjalan di latar belakang bahkan setelah reboot, Anda dapat mendaftarkannya sebagai layanan systemd pada sistem Linux Anda (seperti instance Ubuntu EC2).
- Layanan ini akan otomatis dimulai saat sistem boot.
- Layanan ini berjalan secara andal di latar belakang dengan restart otomatis jika terjadi kegagalan.

---

#### 1. Membuat File Layanan systemd

Buat file berikut:

````

```bash
sudo nano /etc/systemd/system/rclone-rcd.service
````

Tempelkan konten berikut (sesuaikan rc-user, rc-pass, dan flag lain sesuai kebutuhan):

```
[Unit]
Description=Rclone Remote Control Daemon
After=network-online.target

[Service]
User=ubuntu
ExecStart=/usr/bin/rclone rcd \
  --rc-user=admin \
  --rc-pass=admin \
  --rc-addr=0.0.0.0:5572 \
  --rc-web-gui \
  --log-file=/var/log/rclone.log \
  --log-level=INFO
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

> 🔒 **Catatan Keamanan**: Ubah kredensial admin menjadi sesuatu yang aman di lingkungan produksi.

---

#### 2. Memuat Ulang systemd dan Mengaktifkan Layanan

```
sudo systemctl daemon-reexec
sudo systemctl daemon-reload
sudo systemctl enable rclone-rcd
sudo systemctl start rclone-rcd
```

---

#### 3. Memverifikasi Status

Untuk memastikan bahwa daemon sedang berjalan:

```
sudo systemctl status rclone-rcd
```

Anda akan melihat active (running) berwarna hijau.

---


Dengan langkah-langkah ini, daemon Rclone Anda berjalan di cloud, dapat diakses sepenuhnya melalui RcloneView atau klien lainnya—siap untuk mengelola penyimpanan remote Anda secara efisien dari mana saja.
