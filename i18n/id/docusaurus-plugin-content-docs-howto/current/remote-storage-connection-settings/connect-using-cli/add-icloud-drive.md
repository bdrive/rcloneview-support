---
sidebar_position: 1
description: "Pelajari cara mengonfigurasi iCloud Drive sebagai remote di Rclone menggunakan CLI di Windows, termasuk langkah-langkah untuk autentikasi dua faktor dan integrasi dengan RcloneView."
keywords:
  - rcloneview
  - howto
  - cloud
  - sync
  - rclone
  - icloud
  - cli
  - icloud drive
  - rclone cli
  - windows
  - 2fa
  - remote storage
  - cloud storage
  - Remote Connection
  - apple id
tags:
  - cli
  - icloud
  - windows
  - 2fa
  - Remote-Storage
  - remote-connection
  - cloud-storage
date: 2025-05-21
author: Jay
---
# iCloud Drive

Remote iCloud saat ini hanya dapat ditambahkan melalui Rclone CLI.

:::info
Saat ini, remote seperti iCloud, yang mendukung autentikasi dua faktor (2FA) interaktif, hanya dapat dikonfigurasi melalui CLI. Dukungan untuk mengonfigurasi remote ini melalui UI akan diterapkan pada rilis mendatang.
:::

## Cara Menambahkan iCloud Drive menggunakan Rclone CLI (Windows)

#### Langkah 1: Buka Command Prompt

- Tekan Win + R, ketik cmd, lalu tekan Enter.

<img src="/support/images/en/howto/remote-storage-connection-settings/connect-using-cli/windows-command-prompt.png" alt="windows command prompt" class="img-medium img-left" />

#### Langkah 2: Mulai Konfigurasi Rclone

Buka Command Prompt dan mulai proses konfigurasi Rclone:

```windows
rclone config
```

Anda akan melihat menu:

```
No remotes found - make a new one
n) New remote
s) Set configuration password
q) Quit config
n/s/q> n
```

Ketik n dan tekan Enter untuk membuat remote baru.

#### Langkah 3: Menyiapkan Remote iCloud Drive

Ikuti petunjuknya:

- **Name**: Berikan nama untuk remote baru Anda (misalnya, icloud).

```windows
Enter name for new remote.
name> Myicloud
```

- **Storage**: Pilih iCloud Drive dengan mengetik `iclouddrive` atau nomor yang sesuai (biasanya `59`) dari daftar opsi penyimpanan. Jika tidak tercantum, pastikan Anda menggunakan Rclone v1.69 atau yang lebih baru.

```
Storage> iclouddrive
```

- **Apple ID**: Masukkan alamat email Apple ID Anda.

```
apple_id> your_email@icloud.com
```

- **Password**: Pilih untuk mengetikkan kata sandi Anda sendiri.

```
y) Yes, type in my own password
g) Generate random password
y/g> y
```

- Masukkan kata sandi Apple ID Anda saat diminta.

```
Enter the password
password:
Confirm the password
password:
```

- **Advanced Config**: Kecuali Anda memiliki kebutuhan khusus, Anda dapat melewati konfigurasi lanjutan.

```
Edit advanced config? (y/n)
y/n> n
```

- **Two-Factor Authentication (2FA)**: Jika Apple ID Anda mengaktifkan 2FA (yang direkomendasikan), Anda akan diminta untuk memasukkan kode 2FA yang dikirim ke perangkat tepercaya Anda.

```
Two-factor authentication: please enter your 2FA code
Enter a value.
config_2fa> 123456
```

- **Confirm Configuration**: Tinjau pengaturan dan konfirmasi.

```
y) Yes this is OK (default)
e) Edit this remote
d) Delete this remote
y/e/d> y
```

Remote iCloud Drive Anda sekarang telah dikonfigurasi.

Anda dapat memverifikasi bahwa iCloud Drive telah berhasil ditambahkan seperti yang ditunjukkan di bawah ini. Masukkan q untuk keluar dari rclone config.

```
Current remotes:

Name                 Type
====                 ====
Myicloud             iclouddrive

e) Edit existing remote
n) New remote
d) Delete remote
r) Rename remote
c) Copy remote
s) Set configuration password
q) Quit config
e/n/d/r/c/s/q> q
```
#### Langkah 4: Uji koneksi

Untuk memverifikasi bahwa konfigurasi berhasil, tampilkan daftar isi iCloud Drive Anda:

```
rclone lsd Myicloud:
```

Anda akan melihat daftar direktori di iCloud Drive Anda.

#### Langkah 5: Verifikasi iCloud Drive yang Ditambahkan di RcloneView

Buka **RcloneView**.

1. Dari bilah menu, klik **Remote Manager** di bawah tab **Remote**.
2. Verifikasi bahwa **iCloud Drive** Anda muncul di jendela **Remote Manager**.

<div class="img-grid-2">
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-icloud-verify-step1.png" alt="add icloud drive verify step1" class="img-medium img-center" />
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-icloud-verify-step2.png" alt="add icloud drive verify step2" class="img-medium img-center" />
</div>

:::danger Pertimbangan Penting
- **Advanced Data Protection**: Jika Anda telah mengaktifkan **Advanced Data Protection (ADP)** pada Apple ID Anda, Rclone tidak akan dapat mengakses iCloud Drive Anda. Untuk menggunakan Rclone dengan iCloud Drive, Anda harus menonaktifkan ADP. Anda dapat melakukannya di iPhone Anda dengan menavigasi ke:

```
Settings > [Your Name] > iCloud > Advanced Data Protection
```

- Pastikan 'Advanced Data Protection' dalam keadaan **nonaktif**. Selain itu, 'Access iCloud Data on the Web' harus dalam keadaan **aktif**.

- **Session Validity**: Trust token yang diperoleh selama konfigurasi berlaku selama **30 hari**. Setelah periode ini, Anda perlu melakukan autentikasi ulang menggunakan:

```
rclone reconnect Myicloud:
```

- **App-Specific Passwords**: Saat ini, Rclone **tidak** mendukung app-specific password untuk iCloud Drive. Anda harus menggunakan kata sandi Apple ID reguler Anda bersama dengan 2FA selama pengaturan.

Untuk informasi lebih rinci, lihat dokumentasi resmi Rclone tentang [iCloud Drive](https://rclone.org/iclouddrive/).
:::




