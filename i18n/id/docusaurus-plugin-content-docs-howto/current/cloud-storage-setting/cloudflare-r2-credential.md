---
sidebar_position: 3
description: "Cara Mendapatkan Kredensial dan Endpoint Cloudflare R2"
keywords:
  - rcloneview
  - cloud
  - rclone
  - cloudflare r2
  - r2 endpoint
  - access key id
  - secret access key
  - cloudflare r2 rclone
  - cloudflare s3 api
  - connect r2 to rcloneview
tags:
  - RcloneView
  - Cloud
  - cloud-storage
  - credentials
  - configuration
  - access-key-id
  - secret-access-key
  - secret-key-id
  - cloudflare-r2
date: 2025-07-12
author: Jay
---
# Cara Mendapatkan Kredensial dan Endpoint Cloudflare R2

Untuk menghubungkan **Cloudflare R2** ke Rclone atau **RcloneView**, Anda memerlukan tiga informasi utama:

- ✅ Access Key ID  
- ✅ Secret Access Key  
- ✅ URL Endpoint yang Kompatibel dengan S3 R2  

Panduan ini akan memandu Anda cara mengambil informasi tersebut dari dashboard Cloudflare Anda.

---

## 🧰 Prasyarat

Sebelum memulai:

- Anda harus memiliki akun Cloudflare dengan **R2 Object Storage** yang sudah diaktifkan.
- Anda memerlukan akses ke [Cloudflare Dashboard](https://dash.cloudflare.com).
- Pemahaman dasar tentang konsep penyimpanan cloud akan sangat membantu.

---

## 📦 Langkah 1: Membuat R2 Bucket (Jika Belum Ada)

1. Masuk ke [Cloudflare Dashboard](https://dash.cloudflare.com) Anda.
2. Di sidebar kiri, buka **R2 → Object Storage**.
3. Klik **Create bucket**.
4. Masukkan nama unik untuk bucket Anda.
5. Pilih lokasi (misalnya, **Automatic**, atau region seperti `westerneurope`).
6. Klik **Create Bucket**.

Bucket ini akan menjadi lokasi penyimpanan untuk file yang ditransfer menggunakan RcloneView.

---

## 🔐 Langkah 2: Membuat Kredensial API

Untuk melakukan autentikasi dengan R2, Anda perlu membuat API token yang memberikan izin akses.

### ➕ Cara Membuat Access Key dan Secret Key:

1. Buka **Storage & databases -> R2 Object storage → Overview** di dashboard Cloudflare.
2. Klik tombol **Manage** di sebelah **API Tokens** pada bagian **Account Details**.

   <img src="/support/images/en/howto/cloud-storage-setting/cloudflare-manage-r2-api-token.png" alt="cloudflare manage r2 api token" class="img-medium img-center" />
   
3. Klik **Create API Token**. Pilih jenis token (untuk Account atau User) yang sesuai dengan kebutuhan Anda.

<img src="/support/images/en/howto/cloud-storage-setting/cloudflare-create-user-api-token.png" alt="cloudflare create user api token" class="img-medium img-center" />

3. Beri nama pada token (misalnya, `Rclone Access`).
4. Pilih izin:
   - `Admin Read & Write` (akses penuh)  
	❗izin lainnya mungkin tidak mengizinkan akses ke bucket.
1. Pilih apakah akan diterapkan pada:
   - Semua bucket
   - Bucket tertentu saja
7. Opsional, atur masa berlaku (atau biarkan sebagai "Forever").
8. Klik **Create API Token**.

Setelah token dibuat, Cloudflare akan menampilkan:

- **Access Key ID**
- **Secret Access Key**

:::danger Penting
Kredensial ini hanya akan ditampilkan satu kali. Pastikan untuk menyalin dan menyimpannya dengan aman.
:::

---

## **🌐 Langkah 3: Mendapatkan URL Endpoint R2**

1. Buka **R2 → Object Storage** di dashboard Cloudflare Anda.  
2. Klik **nama bucket** Anda untuk membuka detailnya.  
3. Buka tab **Settings**.  
4. Pada bagian **S3 API**, Anda akan menemukan format endpoint dan detail akun.    
    
Tergantung bagaimana API token Anda dibuat, gunakan salah satu format endpoint berikut:

 ### 🔐 Jika API Token Anda memiliki akses level Admin dan diizinkan mengakses semua bucket:

Gunakan endpoint dasar (tanpa path bucket):

```
https://<ACCOUNT_ID>.r2.cloudflarestorage.com
```

### 📦 Jika API Token Anda dibatasi hanya untuk bucket tertentu — atau jika Anda ingin mengakses bucket tertentu:

Gunakan endpoint khusus bucket:

```
https://<ACCOUNT_ID>.r2.cloudflarestorage.com/<BUCKET-NAME>
```

Anda dapat menemukan **ACCOUNT_ID** dan **nama bucket** Anda pada bagian **S3 API** di tab **Settings** bucket:

<img src="/support/images/en/howto/cloud-storage-setting/cloudflare-r2-s3-api-endpoint.png" alt="cloudflare r2 s3 api endpoint" class="img-medium img-center" />

Gunakan endpoint ini saat menyiapkan remote Cloudflare R2 Anda di **RcloneView** atau melalui **Rclone CLI**.

---
   
## ✅ Ringkasan

Anda sekarang seharusnya memiliki nilai-nilai berikut yang siap untuk mengonfigurasi remote Cloudflare R2 Anda:

| Field             | Description                                      |
|------------------|--------------------------------------------------|
| Access Key ID     | Disediakan oleh Cloudflare API token                |
| Secret Access Key | Disediakan oleh Cloudflare API token                |
| Endpoint URL      | Ditemukan di pengaturan bucket R2 (URL yang kompatibel dengan S3) |

Anda sekarang dapat memasukkan nilai-nilai ini ke **RcloneView** saat menyiapkan remote baru yang kompatibel dengan S3, atau menggunakan Rclone CLI.

👉 Selanjutnya: [Cara Menambahkan Remote yang Kompatibel dengan S3 di RcloneView](/howto/remote-storage-connection-settings/s3)
