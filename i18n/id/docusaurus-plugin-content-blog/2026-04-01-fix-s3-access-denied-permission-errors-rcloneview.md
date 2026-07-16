---
slug: fix-s3-access-denied-permission-errors-rcloneview
title: "Mengatasi Error S3 Access Denied dan Permission dengan RcloneView"
authors:
  - tayson
description: "Diagnosis dan atasi error S3 'Access Denied', 403 Forbidden, dan kredensial di rclone dan RcloneView. Mencakup kebijakan IAM, kebijakan bucket, ACL, dan konfigurasi kredensial."
keywords:
  - fix s3 access denied rclone
  - s3 403 forbidden rclone
  - rclone s3 permission error
  - aws s3 access denied rcloneview
  - iam policy s3 rclone
  - s3 bucket policy error
  - rclone aws credentials error
  - s3 acl permission denied
  - troubleshoot s3 rclone
  - fix s3 errors rcloneview
tags:
  - RcloneView
  - amazon-s3
  - aws-s3
  - troubleshooting
  - tips
  - guide
  - cloud-storage
  - security
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mengatasi Error S3 Access Denied dan Permission dengan RcloneView

> "Access Denied" dari penyedia penyimpanan yang kompatibel dengan S3 hampir selalu berarti kesalahan konfigurasi izin — bukan bug. Panduan ini membahas setiap penyebab umum beserta solusinya, mulai dari kebijakan IAM hingga ACL bucket dan kesalahan ketik kredensial.

Error izin S3 sering membuat frustrasi karena sifatnya yang tidak jelas: API mengembalikan `403 Access Denied` tanpa menjelaskan izin spesifik apa yang hilang. Masalahnya bisa berasal dari kebijakan IAM, kebijakan bucket, ACL bucket, ACL objek, pengaturan enkripsi, atau sekadar kredensial yang salah. RcloneView menampilkan error ini secara jelas di riwayat job — panduan ini membantu Anda melacak akar penyebabnya.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mendiagnosis Error

Langkah pertama adalah membaca pesan error yang tepat di riwayat job RcloneView atau output terminal:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="View S3 errors in RcloneView job history" class="img-large img-center" />

Pola error umum dan apa yang ditunjukkannya:

| Pesan Error | Kemungkinan Penyebab |
|--------------|-------------|
| `AccessDenied: Access Denied` | Kebijakan IAM/bucket; kredensial salah |
| `403 Forbidden` | Kebijakan bucket atau blokir ACL |
| `NoCredentialProviders: no valid credentials` | Kredensial belum dikonfigurasi |
| `InvalidAccessKeyId` | Access key salah atau salah ketik |
| `SignatureDoesNotMatch` | Secret key salah |
| `AllAccessDisabled: All access to this object has been disabled` | Pengaturan S3 Block Public Access |
| `AccountProblem` | Masalah akun AWS (penagihan, penangguhan) |

## Solusi 1: Kredensial Salah atau Hilang

Penyebab paling umum dari `AccessDenied` adalah kredensial yang salah pada konfigurasi remote RcloneView.

**Periksa kredensial Anda:**
1. Buka **Remotes** di RcloneView.
2. Pilih remote S3 dan klik **Edit**.
3. Pastikan **Access Key ID** dan **Secret Access Key** sama persis dengan yang ada di konsol AWS IAM Anda (atau konsol penyedia setara).
4. Tempel ulang key jika ragu — spasi tak terlihat merupakan sumber salah ketik yang umum.

Untuk Wasabi, IDrive e2, dan penyedia lain yang kompatibel dengan S3, pastikan juga **Endpoint URL** sesuai dengan endpoint terbaru penyedia untuk wilayah Anda.

## Solusi 2: Izin IAM Tidak Cukup

Jika kredensial sudah benar, kemungkinan user atau role IAM tidak memiliki izin S3 yang diperlukan.

**Izin minimum agar RcloneView berfungsi:**

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:ListBucket",
        "s3:GetBucketLocation",
        "s3:GetObject",
        "s3:PutObject",
        "s3:DeleteObject",
        "s3:GetObjectAcl",
        "s3:PutObjectAcl"
      ],
      "Resource": [
        "arn:aws:s3:::your-bucket-name",
        "arn:aws:s3:::your-bucket-name/*"
      ]
    }
  ]
}
```

Lampirkan kebijakan ini ke user atau role IAM yang digunakan RcloneView. Untuk menampilkan daftar semua bucket, tambahkan juga `s3:ListAllMyBuckets` pada `Resource: "*"`.

<img src="/support/images/en/blog/new-remote.png" alt="Verify S3 credentials in RcloneView remote settings" class="img-large img-center" />

## Solusi 3: Kebijakan Bucket Memblokir Akses

Kebijakan bucket dapat menimpa izin IAM. Periksa kebijakan bucket di konsol AWS:

1. Buka **S3 → Your Bucket → Permissions → Bucket Policy**.
2. Cari pernyataan `Deny` yang mungkin berlaku untuk user IAM Anda.
3. Periksa juga pengaturan **Block Public Access** — jika Anda mencoba mengatur ACL publik pada objek, pengaturan ini akan memblokirnya.

Kesalahan umum adalah pernyataan `Deny` menyeluruh yang secara tidak sengaja memblokir user IAM Anda:

```json
{
  "Effect": "Deny",
  "Principal": "*",
  "Action": "s3:*",
  "Condition": {
    "Bool": { "aws:SecureTransport": "false" }
  }
}
```

Ini sebenarnya adalah kebijakan penegakan HTTPS yang valid — rclone menggunakan HTTPS secara default, jadi ini seharusnya tidak menyebabkan masalah kecuali Anda secara eksplisit memaksa penggunaan HTTP.

## Solusi 4: Masalah ACL pada Level Objek

Beberapa konfigurasi S3 mewajibkan objek yang diunggah menggunakan ACL tertentu (`bucket-owner-full-control` pada pengaturan lintas akun). Jika Anda mengunggah ke bucket milik orang lain dan mereka mendapatkan `Access Denied` saat membaca unggahan Anda:

Tambahkan `--s3-acl bucket-owner-full-control` di kolom **Custom flags** job pada RcloneView.

## Solusi 5: Kebutuhan Server-Side Encryption (SSE)

Beberapa bucket mewajibkan objek diunggah dengan kunci enkripsi tertentu (SSE-KMS). Mengunggah tanpa kunci tersebut akan menghasilkan Access Denied.

Di custom flags job RcloneView:
```
--s3-sse aws:kms --s3-sse-kms-key-id arn:aws:kms:us-east-1:123456789:key/your-key-id
```

## Solusi 6: MFA Delete atau Object Lock

Jika Object Lock atau MFA Delete diaktifkan pada bucket, operasi tertentu (hapus, timpa) akan diblokir tanpa langkah autentikasi tambahan. Untuk job yang hanya membaca (Copy, bukan Sync), hal ini tidak menjadi masalah. Untuk job Sync yang perlu menghapus file yatim, Anda memerlukan salah satu dari:

- User dengan izin lebih tinggi dan MFA, atau
- Mode job yang tidak menghapus (Copy alih-alih Sync).

## Solusi 7: Ketidaksesuaian Region

Menyambung ke bucket S3 di `us-west-2` melalui endpoint `us-east-1` terkadang mengembalikan Access Denied. Pastikan endpoint atau region remote Anda sesuai dengan region sebenarnya dari bucket tersebut.

Di RcloneView, edit remote dan atur **Region** ke nilai yang benar (misalnya, `us-west-2`).

## Ringkasan Checklist

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Debug S3 issues systematically" class="img-large img-center" />

Ikuti checklist ini secara berurutan:

1. ✅ Kredensial (access key dan secret key) disalin dengan benar tanpa salah ketik
2. ✅ User/role IAM memiliki izin ListBucket, GetObject, PutObject pada bucket
3. ✅ Tidak ada pernyataan Deny pada kebijakan bucket yang memengaruhi user ini
4. ✅ Pengaturan Block Public Access tidak menghalangi operasi yang dimaksud
5. ✅ Region/endpoint sesuai dengan region sebenarnya dari bucket
6. ✅ Persyaratan enkripsi (SSE-KMS) terpenuhi jika bucket mewajibkannya
7. ✅ Persyaratan ACL terpenuhi untuk unggahan lintas akun

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Periksa Job History** untuk pesan error yang tepat.
3. **Cocokkan error** dengan solusi di atas.
4. **Perbarui kredensial atau kebijakan IAM** dan jalankan ulang job.

Error izin S3 hampir selalu merupakan masalah konfigurasi, bukan bug. Diagnosis yang sistematis akan menghilangkannya dengan cepat.

---

**Panduan Terkait:**

- [Mengatasi Error Kuota API Google Drive](https://rcloneview.com/support/blog/fix-google-drive-quota-rate-limit-api-errors)
- [Pencadangan Immutable S3 Object Lock](https://rcloneview.com/support/blog/immutable-s3-object-lock-rcloneview)
- [Mengatasi Error Rclone](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />
