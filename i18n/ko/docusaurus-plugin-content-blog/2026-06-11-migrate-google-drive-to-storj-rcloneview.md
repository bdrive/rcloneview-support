---
slug: migrate-google-drive-to-storj-rcloneview
title: "Google Drive에서 Storj로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - jay
description: "RcloneView를 사용해 Google Drive 파일을 Storj 분산형 스토리지로 마이그레이션하는 방법을 알아보세요 — 클라우드 간 전송을 위한 단계별 가이드입니다."
keywords:
  - migrate Google Drive to Storj
  - Google Drive to Storj migration
  - Storj decentralized cloud storage
  - RcloneView cloud migration
  - move files from Google Drive to Storj
  - cloud-to-cloud transfer RcloneView
  - Storj S3-compatible GUI
  - Google Drive migration tool
  - decentralized cloud backup RcloneView
tags:
  - RcloneView
  - google-drive
  - storj
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive에서 Storj로 마이그레이션 — RcloneView로 파일 전송하기

> 명령어를 한 줄도 작성하지 않고 Google Drive 전체를 Storj의 분산형, 종단 간 암호화 스토리지로 옮기세요.

Google Drive에 민감한 프로젝트 파일을 저장하는 팀들은 종종 더 강력한 데이터 주권, 낮은 이그레스 비용, 또는 도구 체인을 위한 S3 호환 액세스가 필요한 시점에 도달합니다. Storj는 파일 청크를 전 세계 독립 노드에 분산시켜 종단 간 암호화와 지리적 이중화를 기본적으로 제공합니다. RcloneView는 이 마이그레이션을 간단하게 만들어줍니다. 브라우저 인증 설정을 통해 두 리모트를 연결한 다음, 복사 작업을 실행하여 로컬 머신을 통해 Google Drive에서 Storj로 파일을 전송하면 됩니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Google Drive와 Storj를 리모트로 연결하기

파일을 전송하기 전에 두 클라우드 계정 모두 RcloneView에 리모트로 등록되어 있어야 합니다. Google Drive는 OAuth 브라우저 인증을 사용합니다 — Remote 탭을 열고 **New Remote**를 클릭한 다음 Google Drive를 선택하면, RcloneView가 브라우저 창을 열어 연결을 승인할 수 있게 해줍니다. API 키나 자격 증명을 수동으로 관리할 필요가 없습니다.

Storj는 S3 호환 액세스를 사용합니다. RcloneView의 New Remote 마법사에서 **S3** 제공자 유형을 선택하고 S3 제공자로 Storj를 선택하세요. Storj Access Key ID, Secret Access Key, Storj S3 게이트웨이 엔드포인트를 입력합니다. 저장이 완료되면 탐색기 패널에 리모트가 나타나 Storj 버킷을 익숙한 파일 브라우저 형태로 볼 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Storj as remotes in RcloneView" class="img-large img-center" />

두 리모트를 모두 등록하면 RcloneView의 듀얼 패널 탐색기에서 나란히 열 수 있습니다. 왼쪽 패널(Google Drive)에서 오른쪽 패널(Storj)로 폴더를 드래그하여 간단한 일회성 복사를 수행하거나, 대규모 마이그레이션을 위한 관리형 작업을 설정할 수 있습니다.

## 마이그레이션 작업 구성하기

300GB의 에셋을 보유한 디자인 에이전시나 수년간 공유해 온 문서를 가진 리서치 팀처럼 Google Drive 전체를 마이그레이션하는 경우에는 Job을 사용하는 것이 적절한 방법입니다. Home 탭에서 **Job Manager**를 클릭한 다음 **Add Job**을 클릭하세요. 소스를 Google Drive 리모트와 폴더로 설정하고, 대상을 Storj 버킷으로 설정합니다. Google Drive에서 원본을 삭제하지 않고 모든 소스 파일을 전송하려면 작업 유형으로 **Copy**를 선택하세요.

2단계(Advanced Settings)에서는 연결 상태에 맞게 동시 파일 전송 수를 설정합니다. 기본 멀티스레드 전송 수인 4는 대부분의 인터넷 연결에 적합합니다. 파일 무결성을 보장하려면 **checksum** 검증을 활성화하세요 — RcloneView는 각 전송 후 체크섬을 비교하여 전송 중 발생할 수 있는 손상을 잡아냅니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a Google Drive to Storj copy job in RcloneView" class="img-large img-center" />

3단계에서는 특정 파일 유형만 마이그레이션하고 싶을 때 필터링 규칙을 추가할 수 있습니다 — 예를 들어 `.tmp` 작업 파일을 제외하거나 특정 기간보다 최신인 파일로 전송을 제한할 수 있습니다. 이는 활성 작업 공간을 마이그레이션할 때 일부 임시 파일을 새로운 스토리지 제공자로 옮기고 싶지 않은 경우 특히 유용합니다.

## 전송 모니터링 및 확인하기

**Run**을 클릭하면 RcloneView 하단의 Transferring 탭에서 전송 속도, 파일 개수, 이동한 총 용량 등 실시간 진행 상황을 확인할 수 있습니다. 대규모 마이그레이션의 경우, 다른 리모트로 이동하더라도 RcloneView는 백그라운드에서 작업을 계속 진행합니다 — 전송이 중단되더라도 2단계에서 재시도 횟수를 설정해 두면 중단된 지점부터 다시 이어서 진행됩니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the Google Drive to Storj migration job in RcloneView" class="img-large img-center" />

작업이 완료되면 RcloneView의 **Folder Compare** 기능(Home 탭 > Compare)을 사용하여 양쪽이 일치하는지 확인하세요. 왼쪽 패널을 Google Drive 소스로, 오른쪽 패널을 Storj 대상으로 지정합니다. Folder Compare는 한쪽에만 존재하거나 크기가 다른 파일을 찾아내어, Google Drive 작업 공간을 정리하기 전에 명확한 감사 추적을 제공합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Google Drive to Storj migration" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. **Remote 탭 > New Remote**를 통해 Google Drive 리모트를 추가하고 OAuth 브라우저 로그인을 완료합니다.
3. Storj Access Key, Secret Key, 게이트웨이 엔드포인트와 함께 S3 제공자 유형을 사용하여 Storj 리모트를 추가합니다.
4. **Job Manager**를 열고 Google Drive 폴더에서 Storj 버킷으로의 Copy 작업을 생성한 다음, 2단계에서 checksum을 활성화하고 Run을 클릭합니다.

Storj의 아키텍처는 기본적으로 파일의 지리적 분산과 종단 간 암호화를 제공합니다 — RcloneView를 사용하면 몇 시간의 스크립팅 작업이 아니라 단 몇 분 만에 그 목표에 도달할 수 있습니다.

---

**관련 가이드:**

- [RcloneView로 Dropbox에서 Storj로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-dropbox-to-storj-rcloneview)
- [RcloneView로 OneDrive에서 Storj로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-onedrive-to-storj-rcloneview)
- [Storj 클라우드 스토리지 관리 — RcloneView로 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-storj-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
