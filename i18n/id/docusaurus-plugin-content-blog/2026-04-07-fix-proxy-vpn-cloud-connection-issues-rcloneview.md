---
slug: fix-proxy-vpn-cloud-connection-issues-rcloneview
title: "Mengatasi Masalah Koneksi Cloud dengan Proxy dan VPN di RcloneView"
authors:
  - tayson
description: "Selesaikan kegagalan sinkronisasi dan transfer cloud di RcloneView saat berada di balik proxy perusahaan atau VPN. Mencakup pengaturan HTTP_PROXY, error sertifikat SSL, split tunneling, masalah resolusi DNS, dan teknik bypass firewall."
keywords:
  - rclone proxy settings
  - rclone VPN connection error
  - rclone corporate proxy fix
  - rclone SSL certificate error
  - rclone HTTPS_PROXY config
  - rclone DNS resolution failure
  - rclone firewall blocked
  - rcloneview proxy configuration
  - rclone split tunneling VPN
  - fix rclone connection behind proxy
tags:
  - troubleshooting
  - tips
  - security
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mengatasi Masalah Koneksi Cloud dengan Proxy dan VPN di RcloneView

> Proxy perusahaan dan VPN sering kali merusak koneksi sinkronisasi cloud dengan error timeout dan sertifikat yang membingungkan. Panduan ini membahas setiap skenario umum dan cara mengonfigurasi RcloneView agar bekerja dengan andal di balik pembatasan jaringan.

Banyak organisasi mengarahkan lalu lintas internet melalui server proxy atau mewajibkan koneksi VPN bagi pekerja jarak jauh. Meskipun langkah-langkah ini meningkatkan keamanan, seringkali langkah tersebut mengganggu panggilan API penyimpanan cloud. Rclone dan RcloneView memerlukan akses HTTPS langsung ke endpoint penyedia cloud, dan apa pun yang berada di antara mesin Anda dan endpoint tersebut — proxy, firewall, tunnel VPN, atau perangkat inspeksi SSL — dapat menyebabkan kegagalan koneksi. Errornya bervariasi mulai dari timeout dan kegagalan DNS hingga error TLS handshake dan penolakan sertifikat. Panduan ini akan membahas setiap masalah dan memberikan solusi konkret.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Mengonfigurasi Variabel Lingkungan HTTP_PROXY dan HTTPS_PROXY

Rclone menghormati variabel lingkungan proxy HTTP standar yang digunakan oleh sebagian besar alat jaringan. Jika organisasi Anda mewajibkan proxy untuk akses internet, Anda harus mengatur variabel ini agar rclone tahu ke mana harus mengarahkan lalu lintasnya.

### Mengatur Variabel Proxy

**Windows (System Environment Variables):**

1. Buka **Settings > System > About > Advanced System Settings > Environment Variables**.
2. Di bawah System Variables (atau User Variables), tambahkan:
   - `HTTP_PROXY` = `http://proxy.company.com:8080`
   - `HTTPS_PROXY` = `http://proxy.company.com:8080`
   - `NO_PROXY` = `localhost,127.0.0.1,.internal.company.com`
3. Mulai ulang RcloneView agar variabel baru terdeteksi.

**macOS / Linux (shell profile):**

Tambahkan ke `~/.bashrc`, `~/.zshrc`, atau `/etc/environment`:

```bash
export HTTP_PROXY="http://proxy.company.com:8080"
export HTTPS_PROXY="http://proxy.company.com:8080"
export NO_PROXY="localhost,127.0.0.1,.internal.company.com"
```

Muat ulang file tersebut atau mulai ulang sesi terminal Anda.

### Proxy dengan Autentikasi

Jika proxy Anda memerlukan username dan password, sertakan kredensial dalam URL:

```
http://username:password@proxy.company.com:8080
```

Karakter khusus dalam password harus di-URL-encode (misalnya, `@` menjadi `%40`, `#` menjadi `%23`).

### Proxy SOCKS5

Untuk proxy SOCKS5 (umum digunakan dengan tunnel SSH), gunakan:

```
socks5://proxy.company.com:1080
```

Atur ini sebagai `HTTP_PROXY` dan `HTTPS_PROXY`.

### Memverifikasi Konfigurasi Proxy

Uji apakah rclone dapat menjangkau penyedia cloud melalui proxy:

```bash
rclone lsd remote: --dump headers -v
```

Jika koneksi berhasil, Anda akan melihat daftar direktori. Flag `--dump headers` menampilkan header HTTP, yang dapat mengonfirmasi bahwa proxy sedang digunakan.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## Mengatasi Error Sertifikat SSL

Error sertifikat SSL/TLS adalah masalah paling umum di balik proxy perusahaan. Banyak organisasi menggunakan inspeksi SSL (juga disebut HTTPS interception atau man-in-the-middle inspection) di mana proxy mendekripsi dan mengenkripsi ulang lalu lintas HTTPS menggunakan certificate authority (CA) milik organisasi sendiri. Rclone tidak mempercayai CA ini secara default, sehingga menyebabkan error seperti:

- `x509: certificate signed by unknown authority`
- `TLS handshake timeout`
- `SSL certificate problem: unable to get local issuer certificate`

### Solusi: Tambahkan Sertifikat CA Perusahaan

1. **Dapatkan sertifikat root CA perusahaan** dari departemen IT Anda. Biasanya berupa file `.pem` atau `.crt`.
2. **Beri tahu rclone untuk mempercayainya** menggunakan flag `--ca-cert`:
   ```bash
   rclone lsd remote: --ca-cert /path/to/corporate-ca.pem
   ```
3. **Jadikan permanen** dengan mengaturnya di environment konfigurasi rclone Anda. Tambahkan ke shell profile Anda:
   ```bash
   export RCLONE_CA_CERT="/path/to/corporate-ca.pem"
   ```
4. Di RcloneView, tambahkan `--ca-cert /path/to/corporate-ca.pem` sebagai flag kustom pada konfigurasi remote atau job Anda.

### Solusi: Tambahkan CA ke System Trust Store

Sebagai alternatif, tambahkan CA perusahaan ke trust store sistem operasi Anda sehingga semua aplikasi (termasuk rclone) mempercayainya secara otomatis:

**Windows:**
```
certutil -addstore "Root" corporate-ca.crt
```

**macOS:**
```bash
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain corporate-ca.crt
```

**Linux (Debian/Ubuntu):**
```bash
sudo cp corporate-ca.crt /usr/local/share/ca-certificates/
sudo update-ca-certificates
```

### Pilihan Terakhir: Nonaktifkan Verifikasi SSL

Jika Anda tidak dapat memperoleh sertifikat CA perusahaan, Anda dapat menonaktifkan verifikasi SSL sepenuhnya. Ini **tidak disarankan** untuk penggunaan produksi karena menghilangkan perlindungan terhadap serangan man-in-the-middle yang sesungguhnya:

```bash
rclone lsd remote: --no-check-certificate
```

Gunakan ini hanya untuk pengujian guna memastikan bahwa masalahnya memang pada sertifikat, lalu lanjutkan dengan solusi sertifikat CA yang tepat.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## Mengatasi Masalah DNS di Balik VPN

Koneksi VPN sering kali mengganti pengaturan DNS sistem Anda, yang dapat menyebabkan domain penyedia cloud gagal di-resolve atau ter-resolve ke alamat yang salah.

### Gejala

- `dial tcp: lookup storage.googleapis.com: no such host`
- `dial tcp: lookup graph.microsoft.com: i/o timeout`
- Koneksi yang sebelumnya berfungsi sebelum VPN terhubung kini gagal.

### Solusi

**Periksa resolusi DNS:**

```bash
nslookup storage.googleapis.com
nslookup graph.microsoft.com
nslookup api.dropboxapi.com
```

Jika perintah ini gagal atau mengembalikan IP yang tidak diharapkan saat menggunakan VPN, DNS adalah penyebabnya.

**Gunakan server DNS tertentu:**

Beberapa klien VPN memungkinkan Anda mengonfigurasi pengaturan DNS. Pastikan VPN Anda menggunakan server DNS yang dapat me-resolve domain penyedia cloud publik. Jika VPN Anda memaksa penggunaan server DNS internal yang tidak dapat me-resolve domain eksternal, minta tim IT Anda menambahkan aturan DNS forwarding untuk domain penyedia cloud.

**Override DNS manual (sementara):**

Tambahkan endpoint penyedia cloud ke hosts file Anda sebagai solusi sementara:

- Windows: `C:\Windows\System32\drivers\etc\hosts`
- macOS/Linux: `/etc/hosts`

Cara ini rentan karena penyedia cloud mengganti alamat IP secara berkala, tetapi dapat membuka blokir sementara sambil menunggu solusi DNS yang tepat diatur.

**Flush DNS cache** setelah melakukan perubahan:

```bash
# Windows
ipconfig /flushdns

# macOS
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder

# Linux
sudo systemd-resolve --flush-caches
```

## Mengonfigurasi Split Tunneling

Split tunneling hanya merutekan lalu lintas perusahaan melalui VPN sambil membiarkan lalu lintas penyimpanan cloud langsung ke internet. Ini menghindari proxy dan VPN sekaligus untuk koneksi penyedia cloud, dan sering kali menyelesaikan semua masalah sekaligus.

### Cara Mengaturnya

Split tunneling biasanya dikonfigurasi di klien VPN atau oleh departemen IT Anda. Anda perlu meminta agar domain atau rentang IP berikut dikecualikan dari tunnel VPN:

**Google Drive / Google Cloud:**
- `*.googleapis.com`
- `*.google.com`
- `accounts.google.com`

**Microsoft OneDrive / SharePoint / Azure:**
- `*.sharepoint.com`
- `*.onedrive.com`
- `graph.microsoft.com`
- `login.microsoftonline.com`
- `*.blob.core.windows.net`

**Amazon S3:**
- `*.amazonaws.com`
- `s3.*.amazonaws.com`

**Dropbox:**
- `*.dropbox.com`
- `*.dropboxapi.com`

**Penyedia lain:** Periksa dokumentasi penyedia untuk domain endpoint API-nya.

Jika departemen IT Anda tidak dapat mengonfigurasi split tunneling, solusi proxy dan sertifikat yang dijelaskan di atas adalah alternatif terbaik Anda.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

## Melewati Firewall Perusahaan

Firewall perusahaan mungkin memblokir port, protokol, atau domain tertentu yang diperlukan oleh rclone. Masalah umum terkait firewall:

### Port yang Diblokir

Rclone menggunakan HTTPS (port 443) untuk sebagian besar penyedia cloud. Jika port 443 diblokir untuk lalu lintas non-browser, koneksi rclone akan timeout. Periksa dengan departemen IT Anda untuk memastikan HTTPS outbound diizinkan untuk proses rclone.

### Domain yang Diblokir

Beberapa firewall memblokir akses ke domain penyimpanan cloud tertentu. Jika organisasi Anda tidak secara resmi mendukung penyedia cloud tertentu, endpoint API-nya mungkin ada di blocklist. Anda akan melihat error timeout atau pesan connection refused. Satu-satunya solusi adalah meminta tim IT Anda menambahkan domain yang diperlukan ke allowlist.

### Deep Packet Inspection

Beberapa firewall generasi baru memeriksa lalu lintas HTTPS lebih dari sekadar level sertifikat. Firewall tersebut mungkin memblokir koneksi yang tidak terlihat seperti lalu lintas browser standar. Header User-Agent milik rclone mengidentifikasinya sebagai rclone, yang mungkin ditandai oleh beberapa aturan DPI. Anda dapat mengatur User-Agent kustom:

```bash
rclone lsd remote: --user-agent "Mozilla/5.0"
```

Ini adalah solusi sementara dan sebaiknya hanya digunakan jika sudah dipastikan perlu dan disetujui oleh tim IT Anda.

### Refresh Token OAuth Melalui Proxy

Penyedia cloud yang menggunakan OAuth (Google Drive, OneDrive, Dropbox) secara berkala melakukan refresh access token. Jika endpoint refresh token diblokir atau proxy mengganggu alur OAuth, Anda akan melihat error autentikasi meskipun kredensial Anda benar. Pastikan endpoint OAuth berikut dapat diakses:

- `oauth2.googleapis.com` (Google)
- `login.microsoftonline.com` (Microsoft)
- `api.dropbox.com/oauth2/token` (Dropbox)

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

## Mengatasi Timeout Koneksi

Saat koneksi timeout di balik proxy atau VPN, gunakan langkah-langkah berikut untuk mempersempit penyebabnya:

1. **Uji konektivitas dasar:**
   ```bash
   curl -v https://storage.googleapis.com
   ```
   Jika curl berhasil tetapi rclone tidak, kemungkinan masalahnya adalah variabel lingkungan proxy yang tidak terdeteksi oleh rclone.

2. **Uji dengan logging verbose:**
   ```bash
   rclone lsd remote: -vv --dump headers --dump auth
   ```
   Ini menunjukkan secara pasti apa yang dikirim dan diterima rclone.

3. **Periksa gangguan proxy:**
   ```bash
   rclone lsd remote: --no-check-certificate -vv
   ```
   Jika ini berhasil tetapi perintah normal tidak, inspeksi SSL adalah penyebabnya.

4. **Uji tanpa VPN** (jika memungkinkan) untuk memastikan VPN terlibat.

5. **Tingkatkan timeout** untuk koneksi proxy yang lambat:
   ```bash
   rclone lsd remote: --timeout 60s --contimeout 30s
   ```

6. **Periksa log RcloneView** di Job History untuk pesan error yang lebih detail.

## Konfigurasi Persisten di RcloneView

Setelah Anda menemukan kombinasi pengaturan proxy, jalur sertifikat, dan flag yang tepat, simpan agar Anda tidak perlu menemukannya kembali:

- **Variabel lingkungan** — atur `HTTP_PROXY`, `HTTPS_PROXY`, dan `RCLONE_CA_CERT` di profil sistem Anda agar berlaku untuk semua operasi rclone.
- **Flag kustom dalam job** — di konfigurasi job RcloneView, tambahkan flag seperti `--ca-cert`, `--timeout`, atau `--contimeout` sebagai parameter kustom.
- **Pengaturan per remote** — beberapa pengaturan dapat ditambahkan langsung ke konfigurasi remote di `rclone.conf`.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Atur variabel lingkungan proxy** jika jaringan Anda memerlukan proxy.
3. **Instal sertifikat CA perusahaan Anda** jika inspeksi SSL sedang digunakan.
4. **Uji konektivitas** dengan perintah sederhana `rclone lsd remote:` sebelum mengatur job sinkronisasi.
5. **Simpan konfigurasi yang berhasil** sebagai job RcloneView untuk sinkronisasi yang konsisten dan dapat diulang.

Pembatasan jaringan tidak harus menghalangi Anda mengelola penyimpanan cloud secara efektif. Dengan pengaturan proxy dan konfigurasi sertifikat yang tepat, RcloneView bekerja dengan andal bahkan di lingkungan perusahaan yang paling terkunci sekalipun.

---

**Panduan Terkait:**

- [Menambahkan Penyimpanan Remote](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [Menambahkan Login Online OAuth](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [Menjalankan dan Mengelola Job](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)

<CloudSupportGrid />
