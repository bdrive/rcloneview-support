---
slug: rcloneview-fedora-rhel-centos-linux
title: "Fedora, RHEL, CentOS Linux에서 RcloneView 설치 및 사용하기"
authors:
  - tayson
description: "RPM 기반 Linux 배포판 — Fedora, RHEL, CentOS, Rocky Linux에 RcloneView를 설치하세요. 엔터프라이즈 및 워크스테이션 Linux에서 클라우드 동기화와 백업을 설정합니다."
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
  - linux
  - platform
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Fedora, RHEL, CentOS Linux에서 RcloneView 설치 및 사용하기

> Fedora, Red Hat Enterprise Linux(RHEL), CentOS Stream, Rocky Linux는 워크스테이션과 엔터프라이즈 서버에서 널리 사용되는 RPM 기반 배포판입니다. RcloneView는 이 모든 배포판에서 실행되며, Red Hat 생태계에 시각적인 클라우드 스토리지 관리 기능을 제공합니다.

튜토리얼에서는 Ubuntu와 Debian 기반 배포판이 대부분의 Linux 관련 관심을 받지만, RPM 기반 계열 — Fedora(데스크톱 및 워크스테이션), RHEL(엔터프라이즈), CentOS Stream(업스트림 테스트), Rocky Linux/AlmaLinux(RHEL 대안) — 는 상당히 큰 비중의 Linux 배포 환경을 차지하고 있습니다. RcloneView의 Linux 빌드는 이 계열 전체에서 동작하며, 설정 과정도 간단합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 지원되는 배포판

| 배포판 | 버전 | 아키텍처 |
|-------------|---------|-------------|
| Fedora | 38+ | x86_64, aarch64 |
| RHEL | 8, 9 | x86_64, aarch64 |
| CentOS Stream | 8, 9 | x86_64 |
| Rocky Linux | 8, 9 | x86_64, aarch64 |
| AlmaLinux | 8, 9 | x86_64 |

## 1단계 — RcloneView 설치

[rcloneview.com](https://rcloneview.com/src/download.html)에서 알맞은 Linux 패키지를 다운로드합니다.

RPM 기반 배포판의 경우, RcloneView는 **AppImage** 또는 직접 실행 가능한 바이너리 형태로 배포됩니다 — 시스템 설치가 필요 없는 독립 실행 파일입니다.

**다운로드 및 실행(AppImage):**

```bash
# Download RcloneView AppImage
wget https://rcloneview.com/src/download.html -O RcloneView.AppImage

# Make it executable
chmod +x RcloneView.AppImage

# Run
./RcloneView.AppImage
```

또는 데스크톱 애플리케이션 항목으로 등록하려면:

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

## 2단계 — FUSE 설치(마운트 기능용)

클라우드 드라이브 마운트 기능을 사용하려면 FUSE가 필요합니다. RPM 기반 배포판에서는 다음과 같이 설치합니다.

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

RHEL 기반 시스템에서는 FUSE 모듈을 활성화해야 할 수도 있습니다.
```bash
echo "fuse" | sudo tee -a /etc/modules-load.d/fuse.conf
```

FUSE가 정상적으로 사용 가능한지 확인합니다.
```bash
fusermount3 --version
```

## 3단계 — rclone 설치(번들되어 있지 않은 경우)

RcloneView는 rclone을 별도로 설치해야 합니다. RPM 기반 배포판에서는 다음과 같이 진행합니다.

**공식 rclone 설치 스크립트 사용(권장):**
```bash
sudo -v ; curl https://rclone.org/install.sh | sudo bash
```

**Fedora에서 dnf 사용:**
```bash
sudo dnf install rclone
```

**설치 확인:**
```bash
rclone version
```

## 4단계 — RcloneView 실행 및 리모트 추가

RcloneView를 실행하고 클라우드 계정을 추가합니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Add cloud remotes in RcloneView on Fedora" class="img-large img-center" />

OAuth 인증이 필요한 리모트(Google Drive, OneDrive, Dropbox)의 경우, RcloneView는 시스템 브라우저를 엽니다. 데스크톱 환경이 없는 RHEL 서버 설치 환경에서는 `--auth-no-browser` rclone 플래그를 사용하거나, 브라우저가 있는 다른 머신에서 인증을 진행한 후 토큰을 복사해서 사용하세요.

## 헤드리스 서버 배포(RHEL/CentOS)

데스크톱 환경이 없는 RHEL 서버의 경우, RcloneView를 백엔드 모드로 실행하고 원격 브라우저로 접속할 수 있습니다.

1. RcloneView의 API 백엔드를 시작합니다.
   ```bash
   ./rcloneview --no-browser --api-port 5572 &
   ```
2. SSH 포트 포워딩을 통해 원격 머신에서 접속합니다.
   ```bash
   ssh -L 5572:localhost:5572 user@your-rhel-server
   ```
3. 로컬 브라우저에서 `http://localhost:5572`를 엽니다.

## Linux에서 작업 예약하기

RHEL이나 Fedora에서 자동 백업을 설정하려면, RcloneView의 작업 예약 기능과 함께 systemd 타이머나 cron을 사용하세요.

**cron 사용:**
```bash
# Edit crontab
crontab -e

# Add nightly backup at 2 AM
0 2 * * * /usr/bin/rclone sync /data/important s3-remote:backup-bucket --log-file /var/log/rclone-backup.log
```

**systemd 타이머 사용**(RHEL 8/9에서 권장):

`/etc/systemd/system/rclone-backup.service` 파일을 생성합니다.
```ini
[Unit]
Description=Rclone Cloud Backup

[Service]
Type=oneshot
User=backup-user
ExecStart=/usr/bin/rclone sync /data/important s3-remote:backup-bucket
```

`/etc/systemd/system/rclone-backup.timer` 파일을 생성합니다.
```ini
[Unit]
Description=Daily rclone backup

[Timer]
OnCalendar=daily
Persistent=true

[Install]
WantedBy=timers.target
```

활성화 및 시작:
```bash
sudo systemctl enable --now rclone-backup.timer
```

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule cloud backup jobs on Linux" class="img-large img-center" />

## SELinux 관련 참고 사항

RHEL 기반 배포판은 기본적으로 SELinux를 강제(enforcing) 모드로 실행합니다. RcloneView가 특정 경로에 접근하거나 드라이브를 마운트하는 데 문제가 발생한다면 다음을 확인하세요.

```bash
# Check for SELinux denials
sudo ausearch -m avc -ts recent | grep rclone

# Allow rclone to read user home directories (if needed)
sudo setsebool -P user_home_t:process allow_execmem 1
```

대부분의 작업은 SELinux 설정 변경 없이도 정상적으로 동작합니다. 마운트 작업의 경우 마운트 지점에 적절한 SELinux 컨텍스트가 필요할 수 있습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. 마운트 지원을 위해 **FUSE를 설치**합니다: `sudo dnf install fuse fuse3`.
3. 공식 설치 스크립트를 통해 **rclone을 설치**합니다.
4. **RcloneView를 실행**하고, 클라우드 리모트를 추가한 뒤 클라우드 스토리지 관리를 시작하세요.

Fedora 워크스테이션과 RHEL 서버는 RcloneView의 Linux 지원에서 동등하게 우선적으로 다뤄집니다. 70개 이상의 모든 클라우드 제공업체, 마운트, 암호화, 예약, 폴더 비교 기능이 다른 플랫폼과 동일하게 작동합니다.

---

**관련 가이드:**

- [Ubuntu 및 Debian Linux에 RcloneView 설치하기](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [ARM Linux에서 RcloneView 실행하기](https://rcloneview.com/support/blog/rcloneview-arm-linux-cloud-sync)
- [Docker에서 RcloneView 실행하기](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)

<CloudSupportGrid />
