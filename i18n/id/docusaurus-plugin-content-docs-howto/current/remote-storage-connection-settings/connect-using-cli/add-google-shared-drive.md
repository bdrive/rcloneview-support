---
sidebar_position: 2
description: "Pelajari cara mengonfigurasi Google Shared Drive sebagai remote di Rclone menggunakan CLI pada Windows dan mengelolanya melalui RcloneView."
keywords:
  - rcloneview
  - howto
  - cloud
  - sync
  - rclone
  - google drive
  - shared drive
  - team drive
  - rclone cli
  - remote storage
  - cloud storage
  - windows
  - Remote Connection
tags:
  - google-drive
  - shared-drive
  - team-drive
  - cli
  - cloud-storage
  - Remote-Storage
  - remote-connection
date: 2025-05-22
author: Jay
---
# Google Shared Drive (sebelumnya Team Drive)

## Cara Menambahkan Google Shared Drive menggunakan Rclone CLI (Windows)

### Langkah 1: Buka Command Prompt
  
- Tekan Win + R, ketik cmd, lalu tekan Enter.  

<img src="/support/images/en/howto/remote-storage-connection-settings/connect-using-cli/windows-command-prompt.png" alt="windows command prompt" class="img-medium img-left" />
#### Langkah 2: Mulai Konfigurasi Rclone

Buka Command Prompt dan mulai proses konfigurasi Rclone:

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

Ketik n lalu tekan Enter untuk membuat remote baru.

### Langkah 3: Menyiapkan Google Shared Drive

Ikuti perintah berikut:

- **Name**: Berikan nama untuk remote baru Anda (misalnya, mySharedDrive).

```windows
Enter name for new remote.
name> mySharedDrive
```

- **Storage**: Pilih Google Drive dengan mengetik `drive` atau nomor yang sesuai (biasanya `20`) dari daftar opsi penyimpanan.

```
Storage> 20
```

- **client_id and client_secret**: Biarkan kosong kecuali Anda memiliki kredensial khusus.

```
client_id> (press Enter)
client_secret> (press Enter)
```

- **Scope**: Masukkan `1` untuk memberikan akses penuh ke Google Drive Anda.

```
scope> 1
```

- **Service Account Credentials**: Biarkan kosong kecuali diperlukan secara khusus.
```
service_account_file> (press Enter)
```

- **Advanced Config**: Lewati konfigurasi lanjutan kecuali diperlukan.

```
Edit advanced config? (y/n)
y/n> n
```

- **Auto Config**: Gunakan konfigurasi otomatis untuk penyiapan yang lebih mudah.

```
If not sure try Y. If Y failed, try N.
y) Yes (default)
n) No
y/n> y
```

Jendela browser akan terbuka secara otomatis. [Masuk dengan akun Google Anda dan berikan izin yang diminta.](/howto/#step-3-connecting-your-remote-storage-googledrive-single-sign-on)


### Langkah 4: Konfigurasi Shared Drive

Setelah menyelesaikan autentikasi Google:

- Anda akan melihat perintah: "Configure this as a Shared Drive?" Ketik `y` untuk mengonfirmasi.

```
Configure this as a Shared Drive (Team Drive)?
y) Yes
n) No (default)
y/n> y
```

- Rclone akan menampilkan daftar Shared Drive Anda. Masukkan nomor yang sesuai dengan Shared Drive yang ingin Anda tambahkan.

```
Choose a number from below, or type in your own value of type string.
Press Enter for the default (0APnCeqmeA1p1Uk9PVA).
 1 / Team shared drive
   \ (0APnCeqmeA1p1Uk9PVA)
config_team_drive> 1
```

- Tinjau detail konfigurasi yang ditampilkan lalu konfirmasi.

```
Keep this "mySharedDrive" remote?
y) Yes this is OK (default)
e) Edit this remote
d) Delete this remote
y/e/d> y
```

- Keluar dari antarmuka konfigurasi Rclone.

```
Current remotes:

Name                 Type
====                 ====
mySharedDrive        drive

e) Edit existing remote
n) New remote
d) Delete remote
r) Rename remote
c) Copy remote
s) Set configuration password
q) Quit config
e/n/d/r/c/s/q> q
```

**Selesai!** Google Shared Drive Anda kini berhasil dikonfigurasi dan siap digunakan dengan Rclone.

### Langkah 5: Uji Koneksi

Verifikasi konfigurasi Anda dengan menampilkan daftar isi Google Shared Drive Anda:

```
rclone ls mySharedDrive:
```

Anda akan melihat daftar file dari Shared Drive Anda jika semuanya sudah diatur dengan benar.

#### Langkah 5: Verifikasi iCloud Drive yang Ditambahkan di RcloneView

Buka **RcloneView**.

1. Dari menu bar, klik **Remote Manager** di bawah tab **Remote**.
2. Verifikasi bahwa **Google Shared Drive** Anda muncul di jendela **Remote Manager**.

<div class="img-grid-2">
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-icloud-verify-step1.png" alt="add icloud drive verify step1" class="img-medium img-center" />
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-google-shared-drive.png" alt="add google shared drive - team drive" class="img-medium img-center" />
</div>
