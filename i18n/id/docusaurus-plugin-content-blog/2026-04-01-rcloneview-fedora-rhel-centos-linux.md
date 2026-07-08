---
slug: rcloneview-fedora-rhel-centos-linux
title: "Instal dan Gunakan RcloneView di Fedora, RHEL, dan CentOS Linux"
authors:
  - tayson
description: "Instal RcloneView di distribusi Linux berbasis RPM — Fedora, RHEL, CentOS, dan Rocky Linux. Siapkan sinkronisasi cloud dan pencadangan pada Linux enterprise dan workstation."
keywords:
  - rcloneview fedora
  - rcloneview rhel
  - rcloneview centos
  - rclone gui rpm linux
  - install rcloneview fedora linux
  - rclone gui red hat linux
  - rcloneview rocky linux
  - cloud sync fedora linux
  - rclone centos gui
  - rpm based linux cloud management
tags:
  - RcloneView
  - linux
  - platform
  - installation
  - guide
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Instal dan Gunakan RcloneView di Fedora, RHEL, dan CentOS Linux

> Fedora, Red Hat Enterprise Linux (RHEL), CentOS Stream, dan Rocky Linux adalah distribusi berbasis RPM yang banyak digunakan untuk workstation dan server enterprise. RcloneView berjalan di semuanya, menghadirkan manajemen penyimpanan cloud secara visual ke ekosistem Red Hat.

Meskipun Ubuntu dan distribusi berbasis Debian mendapatkan sebagian besar perhatian Linux dalam tutorial, keluarga berbasis RPM — Fedora (desktop dan workstation), RHEL (enterprise), CentOS Stream (pengujian upstream), dan Rocky Linux/AlmaLinux (alternatif RHEL) — mewakili sebagian besar deployment Linux. Build Linux RcloneView bekerja di seluruh keluarga ini, dan penyiapannya mudah.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Distribusi yang Didukung

| Distribusi | Versi | Arsitektur |
|-------------|---------|-------------|
| Fedora | 38+ | x86_64, aarch64 |
| RHEL | 8, 9 | x86_64, aarch64 |
| CentOS Stream | 8, 9 | x86_64 |
| Rocky Linux | 8, 9 | x86_64, aarch64 |
| AlmaLinux | 8, 9 | x86_64 |

## Langkah 1 — Instal RcloneView

Unduh paket Linux yang sesuai dari [rcloneview.com](https://rcloneview.com/src/download.html).

Untuk distribusi berbasis RPM, RcloneView didistribusikan sebagai **AppImage** atau biner langsung — executable mandiri yang tidak memerlukan instalasi sistem.

**Unduh dan jalankan (AppImage):**

```bash
# Download RcloneView AppImage
wget https://rcloneview.com/src/download.html -O RcloneView.AppImage

# Make it executable
chmod +x RcloneView.AppImage

# Run
./RcloneView.AppImage
```

Alternatifnya, untuk entri aplikasi desktop:

```bash
# Move to a standard location
mkdir -p ~/.local/bin
mv RcloneView.AppImage ~/.local/bin/rcloneview

# Create a desktop entry (optional)
cat > ~/.local/share/applications/rcloneview.desktop << EOF
[Desktop Entry]
Name=RcloneView
Exec=/home/$USER/.local/bin/rcloneview
Icon=rcloneview
Type=Application
Categories=Utility;Network;
EOF
```

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView running on Linux" class="img-large img-center" />

## Langkah 2 — Instal FUSE (untuk Fitur Mount)

Fitur mount cloud drive memerlukan FUSE. Pada distribusi berbasis RPM:

**Fedora:**
```bash
sudo dnf install fuse fuse3
sudo modprobe fuse
```

**RHEL / CentOS Stream / Rocky Linux:**
```bash
sudo dnf install fuse fuse3
# Add your user to the fuse group
sudo usermod -aG fuse $USER
```

Pada sistem berbasis RHEL, Anda mungkin juga perlu mengaktifkan modul FUSE:
```bash
echo "fuse" | sudo tee -a /etc/modules-load.d/fuse.conf
```

Verifikasi FUSE tersedia:
```bash
fusermount3 --version
```

## Langkah 3 — Instal Rclone (jika belum tersedia)

RcloneView memerlukan rclone yang diinstal secara terpisah. Pada distribusi berbasis RPM:

**Menggunakan installer resmi rclone (direkomendasikan):**
```bash
sudo -v ; curl https://rclone.org/install.sh | sudo bash
```

**Menggunakan dnf di Fedora:**
```bash
sudo dnf install rclone
```

**Verifikasi instalasi:**
```bash
rclone version
```

## Langkah 4 — Jalankan RcloneView dan Tambahkan Remote

Jalankan RcloneView dan tambahkan akun cloud Anda:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Add cloud remotes in RcloneView on Fedora" class="img-large img-center" />

Untuk remote yang memerlukan OAuth (Google Drive, OneDrive, Dropbox), RcloneView membuka browser sistem. Pada instalasi server RHEL tanpa desktop, gunakan flag rclone `--auth-no-browser` atau lakukan otorisasi melalui mesin yang memiliki browser lalu salin token-nya.

## Deployment Server Headless (RHEL/CentOS)

Untuk server RHEL tanpa lingkungan desktop, jalankan RcloneView dalam mode backend-nya dan aksesnya melalui browser jarak jauh:

1. Jalankan backend API RcloneView:
   ```bash
   ./rcloneview --no-browser --api-port 5572 &
   ```
2. Akses dari mesin jarak jauh melalui SSH port forwarding:
   ```bash
   ssh -L 5572:localhost:5572 user@your-rhel-server
   ```
3. Buka `http://localhost:5572` di browser lokal Anda.

## Menjadwalkan Job di Linux

Untuk pencadangan otomatis di RHEL atau Fedora, gunakan systemd timer atau cron bersama penjadwalan job milik RcloneView:

**Menggunakan cron:**
```bash
# Edit crontab
crontab -e

# Add nightly backup at 2 AM
0 2 * * * /usr/bin/rclone sync /data/important s3-remote:backup-bucket --log-file /var/log/rclone-backup.log
```

**Menggunakan systemd timer** (lebih disukai pada RHEL 8/9):

Buat `/etc/systemd/system/rclone-backup.service`:
```ini
[Unit]
Description=Rclone Cloud Backup

[Service]
Type=oneshot
User=backup-user
ExecStart=/usr/bin/rclone sync /data/important s3-remote:backup-bucket
```

Buat `/etc/systemd/system/rclone-backup.timer`:
```ini
[Unit]
Description=Daily rclone backup

[Timer]
OnCalendar=daily
Persistent=true

[Install]
WantedBy=timers.target
```

Aktifkan dan jalankan:
```bash
sudo systemctl enable --now rclone-backup.timer
```

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule cloud backup jobs on Linux" class="img-large img-center" />

## Pertimbangan SELinux

Distribusi berbasis RHEL menjalankan SELinux dalam mode enforcing secara default. Jika RcloneView mengalami kesulitan mengakses jalur tertentu atau melakukan mount drive:

```bash
# Check for SELinux denials
sudo ausearch -m avc -ts recent | grep rclone

# Allow rclone to read user home directories (if needed)
sudo setsebool -P user_home_t:process allow_execmem 1
```

Sebagian besar operasi bekerja tanpa modifikasi SELinux. Operasi mount mungkin memerlukan konteks SELinux yang sesuai pada titik mount.

## Memulai

1. **Unduh RcloneView** dari [rcloneview.com](https://rcloneview.com/src/download.html).
2. **Instal FUSE** untuk dukungan mount: `sudo dnf install fuse fuse3`.
3. **Instal rclone** melalui installer resmi.
4. **Jalankan RcloneView**, tambahkan remote cloud Anda, dan mulai kelola penyimpanan cloud.

Workstation Fedora dan server RHEL adalah warga kelas satu dalam dukungan Linux RcloneView. Lebih dari 70 penyedia cloud, mounting, enkripsi, penjadwalan, dan perbandingan folder bekerja sama seperti pada platform lainnya.

---

**Panduan Terkait:**

- [Instal RcloneView di Ubuntu dan Debian Linux](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [Jalankan RcloneView di Linux ARM](https://rcloneview.com/support/blog/rcloneview-arm-linux-cloud-sync)
- [Jalankan RcloneView di Docker](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)

<CloudSupportGrid />
