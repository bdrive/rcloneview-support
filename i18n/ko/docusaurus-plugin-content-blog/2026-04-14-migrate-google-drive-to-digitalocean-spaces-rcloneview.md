---
slug: migrate-google-drive-to-digitalocean-spaces-rcloneview
title: "Google Drive에서 DigitalOcean Spaces로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - tayson
description: "RcloneView를 사용하여 Google Drive의 파일을 DigitalOcean Spaces 오브젝트 스토리지로 이동하세요. CLI 스크립팅 없이 클라우드 간 직접 마이그레이션을 수행하는 단계별 가이드입니다."
keywords:
  - migrate Google Drive to DigitalOcean Spaces
  - Google Drive to object storage migration
  - DigitalOcean Spaces backup from Google Drive
  - rclone Google Drive DigitalOcean
  - cloud-to-cloud migration Google Drive
  - move Google Drive to S3 compatible
  - RcloneView Google Drive migration
  - DigitalOcean Spaces file transfer
tags:
  - RcloneView
  - google-drive
  - digitalocean-spaces
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive에서 DigitalOcean Spaces로 마이그레이션 — RcloneView로 파일 전송하기

> RcloneView는 Google Drive에서 DigitalOcean Spaces로의 마이그레이션을 로컬 스테이징 없이 직접 클라우드 간 전송으로 처리하며, 진행 상황을 완전히 확인할 수 있고 완료 시 체크섬 검증도 수행합니다.

Google Drive에서 DigitalOcean Spaces로 파일을 이동하는 것은 소비자 중심의 스토리지에서 인프라급 오브젝트 스토리지로 마이그레이션하는 개발자들 사이에서 흔한 워크플로입니다. 스타트업은 파일 공유를 위해 Google Drive를 사용하던 방식에서 벗어나, 프로그래밍 방식 접근, CDN 통합, 그리고 대규모 사용 시 더 낮은 GB당 비용을 위해 Spaces로 전환할 수 있습니다. RcloneView는 두 제공업체에 동시에 연결하여 기가바이트 단위의 데이터를 로컬 머신을 거치지 않고 직접 전송합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 두 리모트 준비하기

Google Drive를 OAuth 리모트로 추가하세요: **Remote 탭 → New Remote → Google Drive**를 선택하고 브라우저에서 인증합니다. Drive 폴더가 즉시 탐색기에 표시됩니다.

DigitalOcean Spaces를 S3 호환 리모트로 추가하세요: **New Remote → Amazon S3 Compatible → DigitalOcean Spaces**를 선택합니다. Spaces 액세스 키, 시크릿 키, 리전 엔드포인트(예: `nyc3.digitaloceanspaces.com`)를 입력합니다. 대상 버킷이 아직 없다면 DigitalOcean 제어판에서 생성하세요.

탐색기를 2개 패널 레이아웃으로 열어 왼쪽에는 Google Drive를, 오른쪽에는 DigitalOcean Spaces를 배치합니다. 마이그레이션을 실행하기 전에 양쪽을 모두 살펴보고 폴더 구조를 확인하세요.

<img src="/support/images/en/blog/new-remote.png" alt="Setting up Google Drive and DigitalOcean Spaces remotes in RcloneView" class="img-large img-center" />

## 마이그레이션 실행하기

폴더 단위 마이그레이션(예: `Google Drive:/Client Projects/`를 `do-spaces:projects-bucket/`로 마이그레이션)의 경우, Job Manager의 동기화 작업 마법사를 사용하세요. 소스와 대상을 설정한 뒤 2단계에서 다음을 구성합니다.

- **동시 전송 수**: 빠른 연결에서 최대 처리량을 위해 8~12로 설정
- **체크섬 검증**: 활성화 — Google Drive는 자체 해시 방식을 사용하며, rclone이 변환을 처리합니다
- **재시도 횟수**: 3회 — 전체 작업을 실패시키지 않고 일시적인 Google API 속도 제한을 처리합니다

먼저 드라이런을 실행하세요. Google Drive에는 Spaces로 직접 복사할 수 없는 Google Docs, Sheets, Slides 파일이 포함된 경우가 많습니다(이 파일들은 다운로드 가능한 파일이 아니라 Google 자체 형식으로만 존재합니다). 드라이런을 실행하면 이러한 항목이 표시되며, 먼저 내보낼지 아니면 필터 규칙으로 제외할지 결정할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Google Drive to DigitalOcean Spaces cloud-to-cloud transfer in RcloneView" class="img-large img-center" />

## Google Workspace 파일 처리하기

네이티브 Google Workspace 파일(Docs, Sheets, Slides)은 직접적인 파일 형식이 없어 반드시 내보내기(export)해야 합니다. rclone은 전송 중에 이러한 파일을 PDF나 Office 형식으로 자동 내보낼 수 있습니다. RcloneView의 동기화 작업에서는 내보내기 형식을 별도로 설정하지 않는 한 Google Docs는 기본적으로 건너뜁니다. 일회성 내보내기 작업을 수행하려면 터미널 탭에서 `rclone copy --drive-export-formats docx,xlsx,pptx`를 실행하거나, Settings → Global Rclone Flags에서 커스텀 플래그를 추가하세요.

일반 파일(PDF, 이미지, 동영상, 코드)은 별도의 처리 없이 전송되며, 원본 형식과 파일명이 그대로 유지된 채 Spaces에 저장됩니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying Google Drive to DigitalOcean Spaces migration with folder comparison" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Google Drive(OAuth)와 DigitalOcean Spaces(S3 자격 증명)를 리모트로 추가합니다.
3. Job Manager에서 동기화 작업을 생성하고, 드라이런을 실행한 뒤 Google Workspace 파일 처리 방식을 검토합니다.
4. 마이그레이션을 실행하고 폴더 비교 기능으로 완료 여부를 확인합니다.

RcloneView로 Google Drive에서 DigitalOcean Spaces로 마이그레이션하는 것은 체계적이고 검증 가능한 과정이며, 작업 이력과 전송 로그를 통해 무엇이 언제 이동했는지 명확한 기록을 확인할 수 있습니다.

---

**관련 가이드:**

- [RcloneView로 DigitalOcean Spaces 클라우드 동기화 및 백업 관리하기](https://rcloneview.com/support/blog/manage-digitalocean-spaces-cloud-sync-backup-rcloneview)
- [RcloneView로 Google Drive에서 AWS S3로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-google-drive-to-aws-s3-rcloneview)
- [RcloneView를 이용한 체크섬 검증 클라우드 마이그레이션](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
