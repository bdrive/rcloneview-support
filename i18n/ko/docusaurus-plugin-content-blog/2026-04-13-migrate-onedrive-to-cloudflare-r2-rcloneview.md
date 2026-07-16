---
slug: migrate-onedrive-to-cloudflare-r2-rcloneview
title: "OneDrive에서 Cloudflare R2로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - tayson
description: "RcloneView를 사용해 개발자 워크플로우와 CDN 통합을 위해 OneDrive 파일을 Cloudflare R2로 이동하세요. OAuth와 API 토큰으로 연결하고, 필터를 적용한 뒤 동기화합니다."
keywords:
  - migrate OneDrive to Cloudflare R2
  - OneDrive R2 transfer RcloneView
  - OneDrive to Cloudflare R2 sync
  - cloud storage migration developer
  - Cloudflare R2 object storage
  - OneDrive alternative R2
  - S3 compatible storage migration
  - RcloneView OneDrive migration
tags:
  - onedrive
  - cloudflare-r2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OneDrive에서 Cloudflare R2로 마이그레이션 — RcloneView로 파일 전송하기

> Cloudflare R2는 CDN 및 Workers 파이프라인과 네이티브로 통합됩니다 — RcloneView는 로컬 머신을 거치지 않고 OneDrive에서 R2로의 마이그레이션을 처리합니다.

Cloudflare 생태계로 워크로드를 옮기는 개발자와 팀들은 종종 OneDrive에 저장된 자산을 Cloudflare R2로 옮겨야 합니다. R2는 Cloudflare Workers, Pages, CDN과 직접 통합되는 제로 이그레스(zero-egress) S3 호환 오브젝트 스토리지를 제공하여, 정적 자산, 미디어 파일, 빌드 아티팩트에 이상적입니다. RcloneView는 OAuth를 통해 OneDrive에 연결하고 API 토큰을 통해 Cloudflare R2에 연결하며, 선택적 필터 규칙과 함께 클라우드 간 동기화 작업으로 마이그레이션을 실행합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## OneDrive 연결하기

RcloneView를 열고 **리모트 관리자**로 이동합니다. **새 리모트**를 클릭하고 제공업체 목록에서 **OneDrive**를 선택합니다. RcloneView가 브라우저를 열어 OAuth 인증을 진행합니다 — Microsoft 계정으로 로그인하고 접근을 승인하세요. 개인 OneDrive, OneDrive for Business, SharePoint 문서 라이브러리 모두 이 방식으로 접근할 수 있습니다.

인증 후, 파일 탐색기에서 리모트를 엽니다. 마이그레이션할 폴더로 이동하여 경로를 기록해 둡니다.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting OneDrive and Cloudflare R2 in RcloneView" class="img-large img-center" />

## Cloudflare R2 연결하기

다시 **리모트 관리자**로 돌아가 **새 리모트**를 클릭하고 **S3 Compatible**을 선택합니다. Cloudflare R2 자격 증명을 입력합니다:

- **Access Key ID**: Cloudflare 대시보드 → R2 → Manage API Tokens에서 확인 (Object Read & Write 권한이 있는 API 토큰을 생성하세요)
- **Secret Access Key**: 토큰 시크릿
- **Endpoint**: `https://{your-account-id}.r2.cloudflarestorage.com`

리모트를 저장합니다. 파일 탐색기에서 대상 버킷으로 이동합니다(없으면 생성). 버킷 콘텐츠가 표시되는지 확인하여 접근 권한을 검증합니다.

## 필터를 사용한 마이그레이션 작업 구성

**작업**으로 이동하여 **새 작업**을 클릭합니다. OneDrive를 소스로 설정하고 마이그레이션할 특정 폴더를 지정합니다. Cloudflare R2를 대상으로 설정하고 대상 버킷 경로를 지정합니다.

작업 마법사의 2단계에서 **필터 규칙**을 적용하여 마이그레이션 범위를 좁힐 수 있습니다:

- 특정 파일 유형만 마이그레이션 (예: `--include "*.jpg"`, `--include "*.pdf"`)
- 시스템 폴더나 임시 파일 제외 (예: `--exclude ".DS_Store"`)
- 실제로 실행하기 전에 **드라이 런**으로 필터링된 결과를 미리 확인

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud migration from OneDrive to Cloudflare R2" class="img-large img-center" />

## 마이그레이션 실행하기

드라이 런을 비활성화하고 작업을 실행합니다. RcloneView는 전송 패널에 초당 파일 수, 현재 속도, 총 이동 데이터량 등 실시간 진행 상황을 표시합니다. OneDrive에서 R2로의 전송은 서버 간 전송이며, 로컬 머신은 데이터 통로가 아닌 오케스트레이터 역할을 합니다.

큰 파일은 자동으로 멀티파트 업로드를 사용합니다. 전송 도중 파일이 실패하면 로그 탭에 구체적인 오류가 표시됩니다. 작업을 다시 실행해도 안전합니다 — 이미 전송된 파일은 건너뜁니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring OneDrive to Cloudflare R2 transfer in real time" class="img-large img-center" />

## 마이그레이션 후 검증

마이그레이션 후 양쪽을 확인하려면 **폴더 비교**를 사용하세요. 비교 화면에서 OneDrive 소스와 R2 대상을 열면 — RcloneView가 한쪽에만 존재하는 파일을 강조 표시합니다. 중요한 마이그레이션의 경우, 작업 설정에서 체크섬 검증을 활성화하여 바이트 단위의 정확성을 보장하세요.

검증이 완료되면 Cloudflare Worker 바인딩, CDN 규칙, 또는 애플리케이션 설정을 OneDrive 대신 R2 버킷을 가리키도록 업데이트할 수 있습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **리모트 관리자**에서 OAuth를 통해 OneDrive를 연결합니다.
3. API 토큰과 계정 ID 엔드포인트를 사용해 Cloudflare R2를 연결합니다.
4. 선택적 필터와 함께 마이그레이션 작업을 생성하고, 드라이 런으로 미리 확인한 뒤 실행합니다.

Cloudflare R2의 긴밀한 CDN 통합과 제로 이그레스 요금제는 이전에 OneDrive에 있던 콘텐츠의 매력적인 이전 대상이 되게 합니다.

---

**관련 가이드:**

- [RcloneView로 Dropbox에서 Cloudflare R2로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-dropbox-to-cloudflare-r2-rcloneview)
- [RcloneView로 Google Drive에서 Cloudflare R2로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-google-drive-to-cloudflare-r2-rcloneview)
- [RcloneView로 Azure Blob에서 Cloudflare R2로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-azure-blob-to-cloudflare-r2-rcloneview)

<CloudSupportGrid />
