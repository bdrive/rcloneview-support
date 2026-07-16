---
slug: fix-azure-blob-sas-token-auth-errors-rcloneview
title: "Memperbaiki Error SAS Token dan Autentikasi Azure Blob Storage dengan RcloneView"
authors:
  - tayson
description: "Perbaiki error SAS token dan autentikasi Azure Blob Storage di rclone. Pelajari cara mengatasi masalah token 401, 403, dan kedaluwarsa menggunakan alat konfigurasi RcloneView."
keywords:
  - rcloneview
  - azure blob storage
  - sas token error
  - azure authentication error
  - azure 403 forbidden
  - azure 401 unauthorized
  - rclone azure setup
  - azure blob sas token
  - azure storage connection
  - fix azure rclone
tags:
  - RcloneView
  - troubleshooting
  - azure
  - cloud-storage
  - tips
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Memperbaiki Error SAS Token dan Autentikasi Azure Blob Storage dengan RcloneView

> Autentikasi Azure Blob Storage bisa jadi rumit, dengan berbagai metode dan jebakan kesalahan konfigurasi yang halus. **RcloneView** menyederhanakan proses konfigurasi dan membantu Anda mengatasi error 401/403 dengan cepat.

Azure Blob Storage adalah layanan object storage yang canggih dan banyak digunakan, tetapi menghubungkannya dari rclone mengharuskan autentikasi diatur dengan tepat. Baik Anda menggunakan access key, SAS token, atau service principal, satu parameter yang salah konfigurasi saja dapat menghasilkan pesan error yang membingungkan dan menghentikan alur kerja Anda sepenuhnya.

Panduan ini membahas error autentikasi Azure Blob Storage yang paling umum ditemui saat menggunakan rclone, menjelaskan berbagai metode autentikasi yang tersedia, dan memandu Anda memperbaiki setiap masalah menggunakan konfigurasi remote visual dari RcloneView.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Gambaran Umum Metode Autentikasi Azure

Azure Blob Storage mendukung beberapa metode autentikasi melalui rclone. Memahami metode mana yang Anda gunakan adalah langkah pertama dalam troubleshooting:

- **Storage Account Access Key**: Kunci bersama yang memberikan akses penuh ke seluruh storage account. Sederhana namun berkekuatan besar -- perlakukan seperti password root.
- **SAS Token (Shared Access Signature)**: Token dengan cakupan terbatas yang memberikan akses terbatas dengan izin, batas waktu, dan pembatasan IP opsional yang spesifik. Lebih aman daripada access key untuk berbagi ke pihak eksternal.
- **Service Principal (Azure AD)**: Autentikasi berbasis OAuth menggunakan aplikasi Azure AD. Paling cocok untuk lingkungan enterprise dengan kontrol akses berbasis peran.
- **Managed Identity**: Tersedia saat dijalankan dari dalam Azure (misalnya, Azure VM). Menggunakan layanan identitas Azure secara otomatis.

Setiap metode memiliki parameter konfigurasi dan mode kegagalannya sendiri. Bagian-bagian di bawah ini membahas error paling umum untuk masing-masing metode.

## SAS Token Kedaluwarsa (401 Unauthorized)

Error SAS token yang paling umum adalah kedaluwarsa. SAS token memiliki waktu mulai dan waktu kedaluwarsa. Setelah token kedaluwarsa, setiap permintaan akan mengembalikan error `401 Unauthorized` atau `403 AuthenticationFailed`.

**Gejala:**
```
HTTP 401: Server failed to authenticate the request.
AuthenticationFailed: Signed expiry time must be after signed start time.
```

**Cara memperbaiki:**

1. Buka Azure Portal dan navigasi ke Storage Account Anda.
2. Buka **Shared access signature** di bagian Security + networking.
3. Atur tanggal kedaluwarsa baru dengan jangka waktu yang cukup panjang (misalnya, 1 tahun untuk penggunaan pribadi, lebih pendek untuk akses bersama).
4. Buat SAS token baru.
5. Di RcloneView, edit remote Azure Blob Anda dan ganti SAS token lama dengan yang baru.
6. Uji koneksi untuk memastikan akses telah pulih.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## Izin SAS Token Salah (403 Forbidden)

SAS token bisa saja valid tetapi tidak memiliki izin yang diperlukan untuk operasi Anda. Misalnya, token yang hanya memiliki izin Read akan gagal saat rclone mencoba mengunggah, menghapus, atau mendaftar container.

**Gejala:**
```
HTTP 403: This request is not authorized to perform this operation.
AuthorizationPermissionMismatch
```

**Izin yang diperlukan untuk operasi rclone:**

| Operasi | Izin SAS yang Diperlukan |
|---|---|
| Mendaftar container | List |
| Menjelajahi file | Read, List |
| Mengunggah file | Write, Create |
| Menghapus file | Delete |
| Sinkronisasi penuh | Read, Write, Delete, List, Create |

**Cara memperbaiki:** Buat SAS token baru di Azure Portal dengan semua izin yang diperlukan. Untuk operasi sinkronisasi rclone, Anda biasanya memerlukan Read, Write, Delete, List, Add, dan Create. Jika ragu, aktifkan semua izin untuk storage account pribadi Anda.

## Pembatasan IP Memblokir Akses (403 Forbidden)

SAS token dapat dibatasi pada alamat IP atau rentang IP tertentu. Jika Anda membuat token saat berada di jaringan kantor tetapi mencoba menggunakannya dari rumah, pembatasan IP akan memblokir Anda.

**Gejala:**
```
HTTP 403: This request is not authorized to perform this operation using this source IP.
```

**Cara memperbaiki:**

- Buat SAS token baru tanpa pembatasan IP, atau
- Tambahkan alamat IP Anda saat ini ke rentang yang diizinkan dalam konfigurasi SAS token, atau
- Gunakan access key Storage Account sebagai gantinya, yang tidak terkena pembatasan IP.

Jika Anda menggunakan IP dinamis (kebanyakan koneksi rumahan), hindari menggunakan SAS token dengan pembatasan IP kecuali Anda dapat memperbaruinya secara berkala.

## Error Access Key (401 Unauthorized)

Jika Anda menggunakan access key Storage Account, error biasanya berarti key salah atau nama account salah.

**Penyebab umum:**

- Menyalin key dengan spasi kosong atau karakter baris baru yang tertinggal.
- Menggunakan Key1 padahal sudah dirotasi dan Key2 kini yang aktif.
- Salah mengeja nama storage account.
- Menggunakan connection string alih-alih hanya key-nya saja.

**Cara memperbaiki di RcloneView:**

1. Buka Azure Portal, navigasi ke Storage Account Anda, dan buka **Access keys**.
2. Klik **Show** di sebelah Key1 atau Key2, lalu salin key dengan hati-hati.
3. Edit remote Azure Blob Anda di RcloneView dan tempelkan key ke kolom `key`.
4. Periksa kembali bahwa kolom `account` cocok persis dengan nama storage account Anda (case-sensitive).
5. Uji koneksi.

## Error Konfigurasi Service Principal

Autentikasi service principal memerlukan tiga nilai: tenant ID, client ID, dan client secret. Nilai yang hilang atau salah untuk salah satu dari ini akan menyebabkan kegagalan autentikasi.

**Gejala:**
```
HTTP 401: AADSTS7000215: Invalid client secret provided.
HTTP 401: AADSTS70001: Application with identifier 'xxx' was not found.
```

**Cara memperbaiki:**

1. Di Azure Portal, buka **Azure Active Directory > App registrations**.
2. Temukan aplikasi Anda dan verifikasi **Application (client) ID**.
3. Periksa **Directory (tenant) ID** di halaman overview.
4. Di bawah **Certificates & secrets**, buat client secret baru jika yang lama sudah kedaluwarsa.
5. Di RcloneView, perbarui konfigurasi remote dengan nilai tenant, client_id, dan client_secret yang benar.
6. Pastikan service principal memiliki peran **Storage Blob Data Contributor** yang ditetapkan pada storage account.

## Membuat SAS Token yang Benar Langkah demi Langkah

Untuk menghindari masalah SAS token sepenuhnya, ikuti proses berikut:

1. Buka Azure Portal dan navigasi ke Storage Account Anda.
2. Klik **Shared access signature** di menu sebelah kiri.
3. Di bagian **Allowed services**, pilih **Blob**.
4. Di bagian **Allowed resource types**, pilih **Container** dan **Object**.
5. Di bagian **Allowed permissions**, pilih semua izin yang Anda butuhkan (Read, Write, Delete, List, Add, Create).
6. Atur **Start date** ke hari ini dan **Expiry date** ke tanggal mendatang yang wajar.
7. Biarkan **Allowed IP addresses** kosong kecuali Anda memerlukan pembatasan IP.
8. Atur **Allowed protocols** ke **HTTPS only**.
9. Klik **Generate SAS and connection string**.
10. Salin **SAS token** (dimulai dengan `?sv=`). Hapus `?` di awal saat menempelkannya ke konfigurasi rclone.

## Menguji Koneksi Anda di RcloneView

Setelah mengonfigurasi atau memperbarui remote Azure Blob Anda, segera uji koneksinya:

1. Buka remote di panel explorer RcloneView.
2. Verifikasi bahwa container Anda terdaftar.
3. Navigasi ke dalam container dan pastikan Anda dapat melihat file.
4. Coba unggah file uji kecil untuk memverifikasi izin write.
5. Hapus file uji tersebut untuk memastikan izin delete.

Jika ada langkah yang gagal, pesan error akan menunjukkan izin atau masalah konfigurasi spesifik. Atasi di konfigurasi remote dan uji kembali.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. Tambahkan remote Azure Blob Storage menggunakan metode autentikasi pilihan Anda (access key atau SAS token).
3. Uji koneksi dengan menjelajahi container Anda di panel explorer.
4. Jika Anda mengalami error 401 atau 403, lihat bagian terkait di atas untuk mendiagnosis dan memperbaiki masalah.

Error autentikasi Azure hampir selalu disebabkan oleh token yang kedaluwarsa, izin yang hilang, atau kredensial yang salah salin. Troubleshooting yang sistematis menggunakan alat visual RcloneView membuat proses identifikasi dan penyelesaian masalah menjadi mudah.

---

**Panduan Terkait:**

- [Menjelajahi dan Mengelola Remote Storage](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [Menambahkan AWS S3 dan yang Kompatibel dengan S3](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [Menyinkronkan Remote Storage Secara Instan](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)

<CloudSupportGrid />
