---
sidebar_position: 3
description: "Panduan langkah demi langkah untuk mengonfigurasi SharePoint Online sebagai remote menggunakan Rclone CLI di Windows dan memverifikasinya melalui RcloneView."
keywords:
  - rcloneview
  - rclone
  - sharepoint
  - microsoft 365
  - Onedrive
  - penyimpanan remote
  - business
  - rclone cli
  - penyimpanan cloud
  - Remote Connection
tags:
  - microsoft
  - cli
  - sharepoint
  - Remote-Storage
  - remote-connection
  - cloud-storage
date: 2025-05-22
author: Jay
---
# SharePoint untuk Pengguna Microsoft 365 Business

## Cara Menambahkan SharePoint Menggunakan Rclone CLI (Windows)

### Langkah 1: Buka Command Prompt

- Tekan `Win + R`, ketik `cmd`, lalu tekan `Enter`.

<img src="/support/images/en/howto/remote-storage-connection-settings/connect-using-cli/windows-command-prompt.png" alt="windows command prompt" class="img-medium img-left" />
### Langkah 2: Mulai Konfigurasi Rclone

Di jendela Command Prompt, ketik:

```windows
rclone config
```

Anda akan melihat menu berikut:

```
No remotes found - make a new one
n) New remote
s) Set configuration password
q) Quit config
n/s/q> n
```

Ketik `n` lalu tekan Enter untuk membuat remote baru.

### Langkah 3: Siapkan SharePoint

Ikuti perintah berikut:

- **Name**: Berikan nama yang jelas untuk remote Anda (misalnya, `mySharePoint`).

```windows
Enter name for new remote.
name> mySharePoint
```

- **Storage**: Pilih OneDrive dengan mengetik `onedrive` atau nomor yang sesuai (biasanya `36`) dari daftar.

```
Storage> onedrive
```

- **client_id dan client_secret**: Biarkan kosong kecuali Anda memiliki kredensial khusus.

```
client_id> (press Enter)
client_secret> (press Enter)
```

- **Region**: Pilih global sebagai default.

```
Choose national cloud region for OneDrive.
Choose a number from below, or type in your own value of type string.
Press Enter for the default (global).
 1 / Microsoft Cloud Global
   \ (global)
 2 / Microsoft Cloud for US Government
   \ (us)
 3 / Microsoft Cloud Germany (deprecated - try global region first).
   \ (de)
 4 / Azure and Office 365 operated by Vnet Group in China
   \ (cn)
region> (press Enter)
```

- **Option tenant**: Biarkan kosong kecuali memang diperlukan.

```
Enter a value. Press Enter to leave empty.
tenant> (press Enter)
```

- **Edit advanced config?** Masukkan `n`.

```
Edit advanced config? (y/n)
y/n> n
```

- **Use auto config?** Masukkan `y`.

```
Use web browser to automatically authenticate rclone with remote?
....
y) Yes (default)
n) No
y/n> y
```

Sebuah jendela browser akan terbuka secara otomatis. Masuk dengan akun Microsoft Anda (akun business) dan berikan izin yang diminta.

### Langkah 4: Konfigurasi Situs SharePoint

Setelah autentikasi, pilih jenis akun Anda:

- Untuk menambahkan situs SharePoint, pilih opsi `2` (Root SharePoint site) atau `4` (Search for a SharePoint site):

```
Choose a number from below, or type in an existing value of type string.
Press Enter for the default (onedrive).
 1 / OneDrive Personal or Business
   \ (onedrive)
 2 / Root Sharepoint site
   \ (sharepoint)
   / Sharepoint site name or URL
 3 | E.g. mysite or https://contoso.sharepoint.com/sites/mysite
   \ (url)
 4 / Search for a Sharepoint site
   \ (search)
 5 / Type in driveID (advanced)
   \ (driveid)
 6 / Type in SiteID (advanced)
   \ (siteid)
   / Sharepoint server-relative path (advanced)
 7 | E.g. /teams/hr
   \ (path)
config_type> 2
```

- Masukkan URL situs SharePoint Anda atau pilih dari hasil pencarian.

- Tinjau dan konfirmasi konfigurasi yang ditampilkan:

```
Keep this "mySharePoint" remote?
y) Yes this is OK (default)
e) Edit this remote
d) Delete this remote
y/e/d> y
```

- Keluar dari konfigurasi Rclone:

```
Current remotes:

Name                 Type
====                 ====
mySharePoint         onedrive

e) Edit existing remote
n) New remote
d) Delete remote
r) Rename remote
c) Copy remote
s) Set configuration password
q) Quit config
e/n/d/r/c/s/q> q
```

**Selesai!** Situs SharePoint Anda kini telah berhasil dikonfigurasi.

### Langkah 5: Uji Koneksi

Verifikasi konfigurasi Anda dengan menampilkan daftar isi situs SharePoint Anda:

```
rclone ls mySharePoint:
```

Jika dikonfigurasi dengan benar, Anda akan melihat daftar file Anda.

### Langkah 6: Verifikasi SharePoint di RcloneView

Jalankan **RcloneView**.

1. Klik **Remote > Remote Manager** dari menu bar.

2. Konfirmasi bahwa **SharePoint** Anda muncul di jendela **Remote Manager**.

<div class="img-grid-2">
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-icloud-verify-step1.png" alt="add icloud drive verify step1" class="img-medium img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/connect-using-cli/add-sharepoint-for-ms365.png" alt="add sharepoint for microsoft 365 business" class="img-medium img-center" />
</div>
