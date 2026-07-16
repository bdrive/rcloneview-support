---
slug: rcloneview-aws-ec2-cloud-sync
title: "서버 측 클라우드 동기화를 위해 AWS EC2에서 RcloneView 실행하기"
authors:
  - tayson
description: "서버 측 클라우드 동기화, 마이그레이션, 백업을 위해 AWS EC2 인스턴스에서 RcloneView를 실행하세요. GUI에 원격으로 접속하고 EC2 대역폭을 활용해 빠른 전송을 수행할 수 있습니다."
keywords:
  - rcloneview
  - aws ec2 cloud sync
  - rcloneview ec2
  - server cloud sync
  - ec2 rclone gui
  - cloud migration server
  - headless cloud sync
  - ec2 data transfer
  - aws ec2 file manager
  - server-side cloud transfer
tags:
  - RcloneView
  - platform
  - amazon-s3
  - cloud-sync
  - guide
  - cloud-migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 서버 측 클라우드 동기화를 위해 AWS EC2에서 RcloneView 실행하기

> AWS EC2 인스턴스에서 RcloneView를 실행하면 클라우드 전송을 위한 서버급 대역폭, 예약 작업을 위한 24시간 운영이 가능해지며, 로컬 머신을 거쳐 데이터를 라우팅할 필요가 없어집니다.

클라우드 제공업체 간에 테라바이트 단위로 마이그레이션할 때는 로컬 인터넷 연결이 병목이 됩니다. 기가비트 네트워킹을 갖춘 AWS EC2 인스턴스는 가정이나 사무실 연결로는 따라갈 수 없는 속도로 클라우드 서비스 간 데이터를 전송할 수 있습니다. EC2에서 RcloneView를 실행하면 로컬 머신을 계속 켜두지 않고도 전송이 24시간 지속되며, S3와 다른 AWS 서비스 간에 이동하는 데이터는 아마존 네트워크 내에 머물러 흔히 송신(egress) 비용 없이 처리됩니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## EC2에서 RcloneView를 실행해야 하는 이유

- **속도**: AWS 데이터 센터의 EC2 인스턴스는 멀티 기가비트 네트워크 연결을 갖추고 있습니다. S3와 외부 제공업체 간 전송은 로컬 연결 대신 이 대역폭을 활용합니다.
- **무료 S3 전송**: 동일 리전 내 EC2와 S3 간 데이터 전송은 무료입니다. 대규모 S3-to-클라우드 마이그레이션의 경우 EC2에서 실행하면 가장 큰 비용인 로컬 송신 비용을 없앨 수 있습니다.
- **24시간 운영**: 예약 작업이 데스크톱 머신을 켜두지 않고도 계속 실행됩니다. EC2 인스턴스가 야간 백업, 주간 마이그레이션, 지속적인 동기화 작업을 처리합니다.
- **데이터 근접성**: 원본 데이터가 AWS(S3, EBS, EFS)에 있는 경우, EC2에서 RcloneView를 실행하면 데이터와 가까운 곳에서 최소 지연 시간으로 작업할 수 있습니다.
- **팀 접근**: 여러 팀원이 동일한 RcloneView 인스턴스에 원격으로 접속하여 설정과 작업 기록을 공유할 수 있습니다.

## EC2 인스턴스 설정하기

### 인스턴스 선택

대부분의 RcloneView 작업에는 소형에서 중형 인스턴스로 충분합니다:

- **t3.medium** (2 vCPU, 4GB RAM): 가벼운 동기화 작업과 소규모 마이그레이션에 적합합니다.
- **m5.large** (2 vCPU, 8GB RAM): 동시 전송과 대용량 파일 작업에 더 적합합니다.
- **c5.xlarge** (4 vCPU, 8GB RAM): 병렬 전송이 많은 대규모 마이그레이션 작업에 적합합니다.

교차 리전 전송 비용을 피하려면 S3 버킷과 동일한 리전의 인스턴스를 선택하세요.

### 운영체제

Ubuntu Server LTS 또는 Amazon Linux 2로 인스턴스를 시작하세요. 두 운영체제 모두 문제없이 RcloneView를 지원합니다. GUI를 위해 가벼운 데스크톱 환경을 설치하세요:

```
# Ubuntu
sudo apt update && sudo apt install -y xfce4 xrdp

# Amazon Linux 2
sudo yum install -y xrdp xfce
```

GUI에 원격으로 연결할 수 있도록 RDP 서비스를 활성화하고 시작하세요.

### 보안 그룹 구성

EC2 보안 그룹에서 다음 포트를 여세요:

- **포트 3389** (RDP): GUI에 대한 원격 데스크톱 접속용입니다. IP 주소로 제한하세요.
- **포트 22** (SSH): 터미널 접속용입니다. IP 주소로 제한하세요.
- **포트 53682** (선택 사항): EC2 인스턴스에서 OAuth 흐름을 실행해야 하는 경우, 이는 rclone의 기본 OAuth 콜백 포트입니다. 대안으로 헤드리스 OAuth 구성을 사용할 수 있습니다.

## EC2에 RcloneView 설치하기

인스턴스에 SSH로 접속하여 RcloneView를 다운로드하세요:

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 Linux AppImage 또는 .deb 패키지를 다운로드합니다.
2. AppImage를 실행 가능하게 만듭니다: `chmod +x RcloneView-*.AppImage`
3. RDP로 접속하여 데스크톱 환경에서 RcloneView를 실행합니다.

## 클라우드 제공업체를 위한 헤드리스 OAuth

EC2 인스턴스에는 일반적으로 OAuth 흐름을 위한 로컬 브라우저가 없습니다. OAuth가 필요한 제공업체(Google Drive, OneDrive, Dropbox)의 경우 헤드리스 인증을 사용하세요:

1. 로컬 머신에서 `rclone authorize "drive"`(또는 해당 제공업체)를 실행하여 OAuth 흐름을 완료합니다.
2. 결과로 나온 토큰을 복사합니다.
3. EC2 인스턴스에서 RcloneView의 리모트 설정에 토큰을 붙여넣습니다.

또는 외부 rclone 인스턴스로 RcloneView를 구성하고 RcloneView 연결 관리자를 통해 OAuth 토큰을 설정할 수도 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/external-rclone-model.png" alt="Configuring external rclone on EC2 for RcloneView" class="img-large img-center" />

## S3 액세스 구성하기

EC2에서 S3에 접속할 때는 정적 액세스 키 대신 IAM 인스턴스 역할을 사용하세요. S3 권한이 부여된 IAM 역할을 EC2 인스턴스에 연결하면, rclone이 인스턴스 메타데이터 서비스를 사용하여 임시 자격 증명을 자동으로 얻습니다. 이는 인스턴스에 액세스 키를 저장하는 것보다 더 안전합니다.

RcloneView의 S3 리모트 설정에서는 액세스 키와 시크릿 키 필드를 비워두고, 환경 인증(environment auth)이 인스턴스 프로필을 사용하도록 설정하세요.

## 대규모 마이그레이션 실행하기

EC2의 대역폭을 활용하면 가정용 연결로는 며칠이 걸릴 대규모 마이그레이션이 몇 시간 만에 완료됩니다:

- **1TB Google Drive에서 S3로**: 지속 속도 기준 약 2~4시간.
- **10TB S3에서 Backblaze B2로**: B2 API 제한(throttling)에 따라 약 1~2일.
- **교차 리전 S3 복제**: AWS 내에서 거의 회선 속도로 처리됩니다.

RcloneView의 멀티스레드 전송은 EC2의 네트워크 용량을 최대한 활용합니다. 대형 인스턴스에서 최대 처리량을 얻으려면 전송(transfers)을 16~32로, 검사(checkers)를 16으로 설정하세요.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Large-scale migration running on EC2 in RcloneView" class="img-large img-center" />

## 서버 측 작업 예약하기

RcloneView의 내장 스케줄러가 반복 작업을 처리합니다. Google Drive에서 S3로의 야간 백업, S3와 Backblaze B2 간 주간 동기화, 또는 재해 복구(DR) 리전으로의 일일 복제를 구성할 수 있습니다. EC2 인스턴스는 RDP로 접속했는지 여부와 관계없이 이러한 작업을 실행합니다.

예약 작업을 위해 EC2 인스턴스를 계속 실행 상태로 두거나, AWS Instance Scheduler나 Lambda 함수를 통한 시작/중지 일정을 사용하여 백업 시간대에만 인스턴스를 실행할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling server-side sync jobs on EC2 in RcloneView" class="img-large img-center" />

## 비용 관리

EC2 비용은 인스턴스 유형과 실행 시간에 따라 달라집니다:

- **t3.medium 온디맨드**: 시간당 약 $0.042 (24시간 실행 시 월 $30)
- **스팟 인스턴스**: 일회성 마이그레이션과 같이 중단 가능한 작업의 경우 최대 90% 저렴합니다.
- **예약 인스턴스**: 장기간 실행되는 서버 측 동기화 설정에 더 낮은 시간당 요금을 제공합니다.

일회성 마이그레이션의 경우 스팟 인스턴스를 사용하세요. 인스턴스를 시작하고, 마이그레이션을 실행하고, 검증한 뒤 종료하면 됩니다. 지속적인 예약 백업의 경우 예약된 t3.small 또는 t3.medium이 비용 효율적입니다.

기억하세요: EC2에서 동일 리전 내 S3 데이터 전송은 무료입니다. 인터넷으로의 아웃바운드 전송(예: Backblaze B2나 Google Drive로)은 표준 AWS 송신 요금이 부과됩니다.

## 시작하기

1. 데스크톱 환경이 포함된 Ubuntu 또는 Amazon Linux로 EC2 인스턴스를 시작합니다.
2. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하여 인스턴스에 설치합니다.
3. 클라우드 제공업체는 헤드리스 OAuth를, S3는 IAM 역할을 사용하여 리모트를 구성합니다.
4. EC2의 대역폭을 활용해 마이그레이션을 실행하고 백업 작업을 예약합니다.
5. 필요하지 않을 때는 비용 관리를 위해 인스턴스를 종료하거나 중지합니다.

EC2에서 RcloneView를 실행하면 AWS 데이터 센터 네트워크의 속도, 전송 관리를 위한 GUI의 편의성, 예약 작업을 위한 24시간 운영을 모두 얻을 수 있습니다 — 대규모 클라우드 마이그레이션과 지속적인 서버 측 동기화에 이상적인 구성입니다.

---

**관련 가이드:**

- [AWS S3 및 S3 호환 스토리지 추가](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [OneDrive 헤드리스 추가](https://rcloneview.com/support/howto/remote-storage-connection-settings/ec2-onedrive-headless)
- [헤드리스 Google Drive](https://rcloneview.com/support/howto/remote-storage-connection-settings/ec2-google-drive-connection)
- [외부 rclone 예제](https://rcloneview.com/support/tutorials/new-window-with-external-rclone)

<CloudSupportGrid />
