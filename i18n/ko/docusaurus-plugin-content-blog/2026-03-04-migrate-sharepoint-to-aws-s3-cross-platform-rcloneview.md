---
slug: migrate-sharepoint-to-aws-s3-cross-platform-rcloneview
title: "RcloneView로 SharePoint 파일을 AWS S3로 마이그레이션하여 크로스 플랫폼 접근 지원하기"
authors:
  - tayson
description: "크로스 플랫폼 접근, 장기 보관, 멀티 클라우드 이중화를 위해 RcloneView를 사용하여 Microsoft SharePoint 문서 라이브러리를 AWS S3로 이동하거나 백업하세요."
keywords:
  - sharepoint to s3
  - sharepoint migration aws
  - sharepoint backup s3
  - migrate sharepoint files
  - sharepoint to aws transfer
  - sharepoint archival s3
  - sharepoint cross platform
  - sharepoint rclone
  - sharepoint s3 sync
  - sharepoint document library backup
tags:
  - RcloneView
  - sharepoint
  - aws-s3
  - cloud-storage
  - migration
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 SharePoint 파일을 AWS S3로 마이그레이션하여 크로스 플랫폼 접근 지원하기

> SharePoint는 Microsoft 중심 팀에게는 훌륭하지만, AWS에서 데이터를 사용해야 하거나 Microsoft 생태계 밖에서 접근해야 할 때는 파일을 꺼내오는 일이 생각보다 어렵습니다. RcloneView가 그 간극을 메워줍니다.

Microsoft SharePoint는 Microsoft 365와 긴밀하게 통합되어 있어 많은 기업에서 기본 문서 저장소로 사용됩니다. 하지만 개발팀이 AWS 위에서 운영되거나, 데이터 과학 파이프라인에 S3 접근이 필요하거나, 단순히 크로스 플랫폼 백업이 필요한 경우 — SharePoint에서 데이터를 추출하는 일이 문제가 됩니다. RcloneView는 SharePoint 문서 라이브러리에 연결하여 시각적이고 검증 가능한 워크플로로 콘텐츠를 S3(또는 다른 클라우드)로 전송합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## SharePoint를 S3로 옮겨야 하는 이유

- **AWS 기반 인프라** — 애플리케이션과 컴퓨팅이 AWS에서 실행됩니다. 데이터도 그곳에 있어야 합니다.
- **크로스 플랫폼 접근** — S3는 범용 API를 통해 어떤 언어, 프레임워크, 플랫폼에서도 접근할 수 있습니다.
- **비용 효율적인 보관** — S3 Glacier는 SharePoint보다 저렴한 장기 보관 옵션을 제공합니다.
- **컴플라이언스** — 일부 규정은 Microsoft 생태계 밖에 데이터 사본을 두도록 요구합니다.
- **벤더 다변화** — 단일 벤더에 대한 의존도를 줄입니다.

## SharePoint 연결하기

1. **Add Remote**를 클릭한 후 **SharePoint**(또는 **OneDrive for Business**)를 선택합니다.
2. OAuth로 인증합니다 — RcloneView가 Microsoft 로그인을 위해 브라우저를 엽니다.
3. 접근하려는 SharePoint 사이트와 문서 라이브러리를 선택합니다.
4. 저장하면 SharePoint 라이브러리를 탐색할 수 있습니다.

### AWS S3 연결하기

1. **Add Remote**를 클릭한 후 **Amazon S3**를 선택합니다.
2. Access Key ID와 Secret Access Key를 입력합니다.
3. 리전을 선택합니다.

<img src="/support/images/en/blog/new-remote.png" alt="Add SharePoint and S3 remotes" class="img-large img-center" />

## 마이그레이션 워크플로

### 1단계: 탐색 및 평가

SharePoint 라이브러리와 S3 버킷을 나란히 확인합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse SharePoint alongside S3" class="img-large img-center" />

### 2단계: 복사

1. **Copy job**을 생성합니다: SharePoint 라이브러리 → S3 버킷.
2. 전송을 실행하고 실시간으로 모니터링합니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor SharePoint to S3 transfer" class="img-large img-center" />

### 3단계: 검증

[폴더 비교](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)로 완전성을 확인합니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify SharePoint migration to S3" class="img-large img-center" />

### 4단계: 지속적인 동기화 자동화

전환 기간 동안 SharePoint와 S3를 동기화 상태로 유지합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule SharePoint to S3 sync" class="img-large img-center" />

## 활용 사례

- **데이터 파이프라인 수집** — AWS Lambda, Glue, Athena에서 처리할 수 있도록 SharePoint 문서를 S3로 자동으로 전송합니다.
- **장기 보관** — 오래된 SharePoint 콘텐츠를 S3 Glacier로 이동해 Microsoft 라이선스 비용을 절감합니다.
- **재해 복구** — 중요한 SharePoint 데이터의 독립적인 S3 사본을 유지합니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. **SharePoint**와 **AWS S3**를 리모트로 추가합니다.
3. **복사, 검증, 예약** — 전체 마이그레이션 또는 지속적인 동기화를 수행합니다.

SharePoint가 벤더 종속을 의미할 필요는 없습니다. RcloneView는 여러분의 Microsoft 데이터를 이동 가능하게 만들어 줍니다.

---

**관련 가이드:**

- [SharePoint에서 Google Drive로 마이그레이션](https://rcloneview.com/support/blog/sharepoint-to-google-drive-migration-rcloneview)
- [AWS S3 및 S3 호환 스토리지 추가](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [폴더 내용 비교](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [작업 예약](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
