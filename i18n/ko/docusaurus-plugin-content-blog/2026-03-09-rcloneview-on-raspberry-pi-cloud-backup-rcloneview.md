---
slug: rcloneview-on-raspberry-pi-cloud-backup-rcloneview
title: "라즈베리 파이에서 RcloneView 실행하기 — 저전력 클라우드 백업 장치 만들기"
authors:
  - tayson
description: "라즈베리 파이를 24/7 클라우드 백업 장치로 만들어보세요. 로컬 스토리지와 클라우드 제공업체 간 자동 동기화를 위해 라즈베리 파이에 RcloneView를 설정합니다."
keywords:
  - rcloneview raspberry pi
  - raspberry pi cloud backup
  - rclone raspberry pi
  - raspberry pi nas cloud sync
  - raspberry pi cloud storage
  - diy cloud backup appliance
  - raspberry pi s3 backup
  - low power cloud sync
  - raspberry pi google drive sync
  - raspberry pi automated backup
tags:
  - raspberry-pi
  - platform
  - self-hosted
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 라즈베리 파이에서 RcloneView 실행하기 — 저전력 클라우드 백업 장치 만들기

> 라즈베리 파이는 5~15와트를 소비합니다. 전구보다 적은 전력입니다. 24/7 켜둔 채로 두면, 여러분이 잠든 사이에도 데이터를 동기화하는 조용하고 항상 켜져 있는 클라우드 백업 장치가 됩니다.

라즈베리 파이는 클라우드 스토리지 작업에 놀라울 만큼 뛰어난 성능을 발휘하는 컴퓨터입니다. 외장 USB 드라이브와 RcloneView를 결합하면, 로컬 파일을 클라우드 스토리지로(혹은 그 반대로) 하루 종일 동기화하는 전용 백업 머신을 갖추게 됩니다 — 그것도 일반 PC나 NAS의 전력 비용의 극히 일부만으로 말이죠.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 왜 클라우드 백업에 라즈베리 파이인가?

### 항상 켜져 있고, 저전력

| 기기 | 소비 전력 | 연간 비용 (24/7) |
|--------|-----------|-------------------|
| 라즈베리 파이 4 | 5~7W | 약 $8 |
| 라즈베리 파이 5 | 8~15W | 약 $14 |
| 데스크톱 PC | 100~300W | 약 $150~400 |
| NAS (2베이) | 20~40W | 약 $30~60 |

라즈베리 파이는 24/7 운영하는 데 드는 비용이 사실상 거의 없습니다.

### 조용하고 작다

팬이 없고(Pi 4), 소음도 없습니다. 선반에 올려두고 잊어버리면 됩니다.

### 충분한 성능

라즈베리 파이 4와 5는 다음을 처리할 수 있습니다:

- 수천 개의 파일을 클라우드 스토리지로 동기화.
- 예약된 백업 작업 실행.
- 로컬 접근을 위한 클라우드 스토리지 마운트.
- 여러 클라우드 계정을 동시에 관리.

## 하드웨어 설정

### 권장 하드웨어

- **라즈베리 파이 4** (4GB) 또는 **라즈베리 파이 5** (4~8GB).
- 로컬 스토리지용 **USB 3.0 외장 드라이브** 또는 SSD.
- OS용 **마이크로 SD 카드** (32GB).
- **이더넷 연결** (대용량 전송 시 Wi-Fi보다 권장).
- **전원 공급 장치** (공식 Pi 전원 공급 장치 권장).

### 스토리지 아키텍처

```
External USB Drive → Raspberry Pi → Cloud Storage
                          ↕
                    RcloneView (scheduling, monitoring)
```

외장 드라이브에는 로컬 파일이 저장됩니다. Pi에서 실행되는 RcloneView가 이를 예약된 일정에 따라 클라우드 스토리지로 동기화합니다.

## 설치

### 1) 라즈베리 파이 OS 설치

Raspberry Pi Imager를 사용해 마이크로 SD 카드에 라즈베리 파이 OS(64비트)를 설치하세요. RcloneView의 GUI를 사용하려면 데스크톱 에디션이 필요합니다.

### 2) RcloneView 설치

[rcloneview.com](https://rcloneview.com/src/download.html)에서 ARM64 `.deb` 패키지를 다운로드합니다:

```bash
sudo dpkg -i rcloneview_*_arm64.deb
sudo apt-get install -f
```

### 3) FUSE 설치 (마운트용)

```bash
sudo apt-get install fuse3
```

### 4) 외장 드라이브 마운트

```bash
sudo mkdir /mnt/backup
sudo mount /dev/sda1 /mnt/backup
```

부팅 시 자동 마운트되도록 `/etc/fstab`에 추가하세요.

### 5) RcloneView 실행

```bash
rcloneview
```

VNC를 통해 헤드리스로 실행하는 경우, `raspi-config`에서 VNC가 활성화되어 있는지 확인하세요.

## 클라우드 백업 구성

### 클라우드 리모트 추가

<img src="/support/images/en/blog/new-remote.png" alt="Add cloud remote on Raspberry Pi" class="img-large img-center" />

백업 대상을 추가하세요 — Google Drive, S3, Backblaze B2, 또는 지원되는 70개 이상의 제공업체 중 하나.

### 백업 작업 생성

외장 드라이브에서 클라우드 스토리지로 복사 작업을 설정합니다:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Create backup job" class="img-large img-center" />

### 자동 백업 예약

야간 백업을 예약합니다:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule Pi backup jobs" class="img-large img-center" />

## 활용 사례

### 1) 홈 파일 서버 백업

가족 사진, 문서, 미디어가 담긴 USB 드라이브를 연결하세요. Google Drive나 Backblaze B2로의 야간 백업을 예약합니다.

### 2) NAS 보완

NAS에 제대로 된 클라우드 동기화 기능이 없다면, Pi를 브리지로 사용하세요:

```
NAS (SMB share) → Pi (reads via mount) → Cloud Storage (via RcloneView)
```

### 3) 보안 카메라 아카이브

로컬 NVR에서 보안 카메라 영상을 클라우드 스토리지로 백업하여 오프사이트 보호를 제공합니다.

### 4) 개발자 백업

코드 저장소와 프로젝트 파일을 클라우드 스토리지로 동기화하세요:

- 소스 파일만 포함하도록 필터링 (`node_modules`, `.git` 제외).
- 매시간 백업 예약.

### 5) 미디어 라이브러리 미러

로컬 미디어 라이브러리의 클라우드 미러를 유지하세요. 외출 시 Google Drive에서 스트리밍하는 데 사용할 수 있습니다.

## 성능 기대치

Pi의 성능에 대해 현실적으로 접근하세요:

| 작업 | 라즈베리 파이 4 | 라즈베리 파이 5 |
|------|----------------|----------------|
| 소용량 파일 동기화 (문서) | 양호 | 우수 |
| 대용량 파일 전송 | USB 3/네트워크에 의해 제한 | 양호 |
| 수천 개의 소용량 파일 | 확인 단계가 느림 | 보통 |
| 암호화 전송 | CPU에 의해 제한 | 더 나음 (AES 지원) |
| 네트워크 속도 | 약 300Mbps (기가비트 이더넷) | 약 1Gbps |

대용량 전송에는 인내심이 도움이 됩니다. Pi는 빠르지 않지만, 24/7 실행되기 때문에 결국 끝마칩니다.

### 최적화 팁

- **병렬 전송 줄이기** — Pi 4에는 2~4개가 최적입니다. Pi 5는 4~8개까지 처리할 수 있습니다.
- **이더넷 사용** — Wi-Fi는 지연 시간을 늘리고 처리량을 줄입니다.
- **한가한 시간에 예약** — 부하가 큰 작업은 야간에 실행하세요.
- **HDD 대신 SSD** — USB SSD는 회전식 디스크보다 읽기 속도가 훨씬 빠릅니다.

## 모니터링 및 검증

백업을 추적하세요:

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor Pi backup transfers" class="img-large img-center" />

폴더 비교로 검증하세요:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify Pi cloud backup" class="img-large img-center" />

## 헤드리스 운영

진정한 '설정 후 잊어버리기' 구성을 위해:

1. VNC를 통해 또는 직접 모든 작업과 일정을 구성합니다.
2. RcloneView 자동 시작을 활성화합니다 ([Ubuntu/Debian 가이드](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux) 참조).
3. 모니터와 키보드를 분리합니다.
4. Pi는 조용히 실행되며, 예약된 작업을 실행합니다.

## 시작하기

1. 외장 USB 드라이브가 있는 **라즈베리 파이 4 또는 5를 준비하세요**.
2. **라즈베리 파이 OS**(64비트 데스크톱)를 설치하세요.
3. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
4. **클라우드 리모트를 추가하고 백업 작업을 생성**하세요.
5. **예약하고 잊어버리세요** — 나머지는 Pi가 처리합니다.

여러분이 만들 수 있는 가장 저렴하고, 가장 조용하고, 가장 효율적인 클라우드 백업 장치입니다.

---

**관련 가이드:**

- [Ubuntu/Debian에 RcloneView 설치하기](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [동기화 작업 생성하기](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [작업 예약](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [클라우드 전송 대역폭 제한 설정](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)

<CloudSupportGrid />
