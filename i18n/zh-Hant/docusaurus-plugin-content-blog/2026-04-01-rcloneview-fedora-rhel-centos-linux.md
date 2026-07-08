---
slug: rcloneview-fedora-rhel-centos-linux
title: "在 Fedora、RHEL 與 CentOS Linux 上安裝並使用 RcloneView"
authors:
  - tayson
description: "在以 RPM 為基礎的 Linux 發行版——Fedora、RHEL、CentOS 和 Rocky Linux——上安裝 RcloneView。在企業與工作站 Linux 上設定雲端同步與備份。"
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

# 在 Fedora、RHEL 與 CentOS Linux 上安裝並使用 RcloneView

> Fedora、Red Hat Enterprise Linux（RHEL）、CentOS Stream 與 Rocky Linux 都是以 RPM 為基礎的發行版，廣泛用於工作站與企業伺服器。RcloneView 可在這些發行版上執行，為 Red Hat 生態系統帶來視覺化的雲端儲存管理。

雖然 Ubuntu 與 Debian 系發行版在教學中最受關注，但以 RPM 為基礎的家族——Fedora（桌面與工作站）、RHEL（企業）、CentOS Stream（上游測試）以及 Rocky Linux／AlmaLinux（RHEL 替代方案）——在 Linux 部署中佔有很大比例。RcloneView 的 Linux 版本可在整個家族中運作，設定也相當簡單。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 支援的發行版

| 發行版 | 版本 | 架構 |
|-------------|---------|-------------|
| Fedora | 38+ | x86_64, aarch64 |
| RHEL | 8, 9 | x86_64, aarch64 |
| CentOS Stream | 8, 9 | x86_64 |
| Rocky Linux | 8, 9 | x86_64, aarch64 |
| AlmaLinux | 8, 9 | x86_64 |

## 步驟 1 — 安裝 RcloneView

從 [rcloneview.com](https://rcloneview.com/src/download.html) 下載適合的 Linux 套件。

對於以 RPM 為基礎的發行版，RcloneView 以 **AppImage** 或直接二進位檔形式發布——這是一個不需要系統安裝的獨立可執行檔。

**下載並執行（AppImage）：**

```bash
# Download RcloneView AppImage
wget https://rcloneview.com/src/download.html -O RcloneView.AppImage

# Make it executable
chmod +x RcloneView.AppImage

# Run
./RcloneView.AppImage
```

另外，若要建立桌面應用程式項目：

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

## 步驟 2 — 安裝 FUSE（掛載功能所需）

雲端硬碟掛載功能需要 FUSE。在以 RPM 為基礎的發行版上：

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

在以 RHEL 為基礎的系統上，你可能還需要啟用 FUSE 模組：
```bash
echo "fuse" | sudo tee -a /etc/modules-load.d/fuse.conf
```

驗證 FUSE 是否可用：
```bash
fusermount3 --version
```

## 步驟 3 — 安裝 Rclone（若尚未內建）

RcloneView 需要另外安裝 rclone。在以 RPM 為基礎的發行版上：

**使用官方 rclone 安裝程式（建議）：**
```bash
sudo -v ; curl https://rclone.org/install.sh | sudo bash
```

**在 Fedora 上使用 dnf：**
```bash
sudo dnf install rclone
```

**驗證安裝：**
```bash
rclone version
```

## 步驟 4 — 啟動 RcloneView 並新增遠端

啟動 RcloneView 並新增你的雲端帳戶：

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Add cloud remotes in RcloneView on Fedora" class="img-large img-center" />

對於需要 OAuth 的遠端（Google Drive、OneDrive、Dropbox），RcloneView 會開啟系統瀏覽器。在沒有桌面環境的 RHEL 伺服器安裝中，可使用 `--auth-no-browser` rclone 旗標，或透過有瀏覽器的機器進行授權後再複製權杖。

## 無頭伺服器部署（RHEL/CentOS）

對於沒有桌面環境的 RHEL 伺服器，可在後端模式下執行 RcloneView，並透過遠端瀏覽器存取：

1. 啟動 RcloneView 的 API 後端：
   ```bash
   ./rcloneview --no-browser --api-port 5572 &
   ```
2. 透過 SSH 連接埠轉發從遠端機器存取：
   ```bash
   ssh -L 5572:localhost:5572 user@your-rhel-server
   ```
3. 在本機瀏覽器中開啟 `http://localhost:5572`。

## 在 Linux 上排程工作

若要在 RHEL 或 Fedora 上進行自動化備份，可搭配 RcloneView 的工作排程使用 systemd 計時器或 cron：

**使用 cron：**
```bash
# Edit crontab
crontab -e

# Add nightly backup at 2 AM
0 2 * * * /usr/bin/rclone sync /data/important s3-remote:backup-bucket --log-file /var/log/rclone-backup.log
```

**使用 systemd 計時器**（在 RHEL 8/9 上為首選）：

建立 `/etc/systemd/system/rclone-backup.service`：
```ini
[Unit]
Description=Rclone Cloud Backup

[Service]
Type=oneshot
User=backup-user
ExecStart=/usr/bin/rclone sync /data/important s3-remote:backup-bucket
```

建立 `/etc/systemd/system/rclone-backup.timer`：
```ini
[Unit]
Description=Daily rclone backup

[Timer]
OnCalendar=daily
Persistent=true

[Install]
WantedBy=timers.target
```

啟用並啟動：
```bash
sudo systemctl enable --now rclone-backup.timer
```

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule cloud backup jobs on Linux" class="img-large img-center" />

## SELinux 注意事項

以 RHEL 為基礎的發行版預設以強制（enforcing）模式執行 SELinux。若 RcloneView 在存取某些路徑或掛載硬碟時發生問題：

```bash
# Check for SELinux denials
sudo ausearch -m avc -ts recent | grep rclone

# Allow rclone to read user home directories (if needed)
sudo setsebool -P user_home_t:process allow_execmem 1
```

大多數操作不需要修改 SELinux 即可運作。掛載操作可能需要在掛載點上設定適當的 SELinux 情境。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **安裝 FUSE** 以支援掛載：`sudo dnf install fuse fuse3`。
3. 透過官方安裝程式**安裝 rclone**。
4. **執行 RcloneView**，新增你的雲端遠端，開始管理雲端儲存。

Fedora 工作站與 RHEL 伺服器在 RcloneView 的 Linux 支援中屬於一等公民。所有 70 多個雲端供應商、掛載、加密、排程與資料夾比對功能，運作方式與其他平台完全相同。

---

**相關指南：**

- [在 Ubuntu 與 Debian Linux 上安裝 RcloneView](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [在 ARM Linux 上執行 RcloneView](https://rcloneview.com/support/blog/rcloneview-arm-linux-cloud-sync)
- [在 Docker 中執行 RcloneView](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)

<CloudSupportGrid />
