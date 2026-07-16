---
slug: sync-google-drive-to-wasabi-archive-rcloneview
title: "Google Drive를 Wasabi로 동기화 — RcloneView로 저렴하게 아카이브 및 백업하기"
authors:
  - tayson
description: "AWS S3 비용의 일부만으로 안정적인 백업을 위해 Google Drive를 Wasabi 핫 클라우드 스토리지에 아카이브하세요. RcloneView를 사용합니다."
keywords:
  - Google Drive backup
  - Wasabi cloud storage
  - affordable cloud archive
  - backup to Wasabi
  - RcloneView
  - cloud-to-cloud sync
  - data archival
  - cost-effective backup
  - Google Drive archive
  - hot storage
tags:
  - google-drive
  - wasabi
  - archive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive를 Wasabi로 동기화 — RcloneView로 저렴하게 아카이브 및 백업하기

> Google Drive는 활발한 협업에는 편리하지만, 장기 보관 비용은 점점 늘어납니다. Wasabi는 절반 가격의 S3 호환 핫 스토리지를 제공하므로 RcloneView로 Google Drive를 아카이브하기에 완벽합니다.

Google Drive는 팀 협업에 이상적이지만, 무제한 저장 공간에는 보존 관리의 복잡성이 따릅니다. Wasabi는 예측 가능한 요금제와 유출(egress) 비용 없이 핫 클라우드 스토리지를 제공합니다. RcloneView는 완료된 프로젝트, 오래된 파일, 콜드 데이터를 Wasabi로 아카이브하는 과정을 자동화합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Google Drive와 Wasabi 연결하기

RcloneView에서 두 리모트를 설정하는 과정은 빠르고 안전합니다.

**Google Drive:**
1. **Add Remote** 클릭 → **Google Drive** 선택
2. OAuth를 통해 RcloneView 인증
3. 폴더/파일 접근 권한 부여
4. 연결 확인

**Wasabi:**
1. **Add Remote** 클릭 → **Wasabi** 선택
2. Wasabi Access Key와 Secret Key 입력
3. 버킷과 리전 선택
4. 연결 테스트

![New Remote Setup](/images/en/blog/new-remote.png)

## Google Drive를 Wasabi 핫 스토리지로 아카이브하기

파일을 이동하기 위해 일회성 또는 반복 동기화 작업을 생성하세요. Wasabi의 핫 스토리지는 글레이셔처럼 복원 지연 없이 즉시 접근할 수 있습니다.

**아카이브 시나리오:**
- **프로젝트 완료**: 프로젝트 종료 후 클라이언트 산출물 아카이브
- **스토리지 최적화**: 90일 이상 된 파일을 Wasabi로 이동
- **컴플라이언스 백업**: 검색 가능한 업무 기록 사본 유지

![Wasabi Transfer Setup](/images/en/tutorials/wasabi-drag-and-drop.png)

## 실시간 전송 성능 모니터링

RcloneView는 아카이브 작업의 전송 속도, 처리된 파일 수, 남은 시간 등 실시간 지표를 표시합니다.

![Real-Time Transfer Monitoring](/images/en/tutorials/wasabi-real-time-monitoring-transferring.png)

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView 다운로드**.
2. [wasabi.com](https://wasabi.com/)에서 Wasabi 계정 생성.
3. OAuth 인증을 사용해 Google Drive를 리모트로 추가.
4. Wasabi 버킷을 리모트로 구성.
5. 동기화 또는 복사 작업을 생성하고 아카이브 시작.
6. 아카이브를 최신 상태로 유지하기 위해 정기 백업 예약.

저렴하게 아카이브하고, 즉시 조회하세요—Wasabi와 RcloneView가 이를 간단하게 만들어 줍니다.

---

**관련 가이드:**

- [RcloneView로 Google Drive를 Backblaze B2에 동기화하기](https://rcloneview.com/support/blog/sync-google-drive-to-backblaze-b2-rcloneview)
- [RcloneView로 Google Drive를 S3 Glacier에 아카이브하기](https://rcloneview.com/support/blog/archive-google-drive-to-s3-glacier-rcloneview)
- [클라우드 스토리지 유출(Egress) 비용 — RcloneView로 피하는 방법](https://rcloneview.com/support/blog/cloud-storage-egress-fees-avoid-rcloneview)

<CloudSupportGrid />
