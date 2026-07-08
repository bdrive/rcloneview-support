---
slug: migrate-dropbox-to-cloudflare-r2-rcloneview
title: "Dropbox에서 Cloudflare R2로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - tayson
description: "RcloneView를 사용하여 Dropbox에서 Cloudflare R2로 파일을 이전하세요. OAuth와 API 토큰으로 연결하고, 대용량 파일을 처리하며, R2의 무료 송신(egress) 요금 혜택을 누리세요."
keywords:
  - migrate Dropbox to Cloudflare R2
  - Dropbox R2 transfer RcloneView
  - Dropbox to R2 migration
  - Cloudflare R2 cloud sync
  - zero egress cloud storage
  - cloud-to-cloud migration tool
  - Dropbox alternative R2
  - RcloneView migration guide
tags:
  - RcloneView
  - dropbox
  - cloudflare-r2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Dropbox에서 Cloudflare R2로 마이그레이션 — RcloneView로 파일 전송하기

> Cloudflare R2는 송신(egress) 요금이 없는 S3 호환 오브젝트 스토리지를 제공합니다 — RcloneView는 클라우드 간 동기화 작업으로 Dropbox에서의 이전을 간편하게 만들어줍니다.

Cloudflare R2는 Dropbox에서 벗어나려는 팀들에게 매력적인 대안이 되었습니다. 송신 비용이 없고 S3 호환 API를 지원하기 때문에 R2는 개발자 워크플로우, 정적 자산 파이프라인, 비용을 중시하는 아카이빙 전략에 자연스럽게 부합합니다. 기존 Dropbox 파일을 R2로 옮기는 작업은 일회성 클라우드 간 마이그레이션이며, RcloneView는 로컬 컴퓨터를 거치지 않고 이를 처리합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 1단계 — Dropbox 연결

RcloneView를 열고 **원격 관리자(Remote Manager)**로 이동합니다. **새 원격(New Remote)**을 클릭하고 **Dropbox**를 선택합니다. 대부분의 OAuth 제공자와 마찬가지로 Dropbox는 브라우저를 열어 인증을 진행합니다 — 로그인 후 Allow를 클릭하세요. RcloneView가 토큰을 저장하면 리모트가 즉시 나타납니다. 파일 탐색기에서 이를 열어 Dropbox 파일과 폴더가 보이는지 확인하세요.

Dropbox Business 계정을 사용 중이라면, 이전하려는 콘텐츠를 소유한 계정으로 로그인되어 있는지 확인하세요. 다른 사람이 소유한 공유 폴더는 접근 제한이 있을 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Dropbox and Cloudflare R2 in RcloneView Remote Manager" class="img-large img-center" />

## 2단계 — Cloudflare R2 연결

**원격 관리자(Remote Manager)**에서 **새 원격(New Remote)**을 클릭하고 **S3 Compatible**을 선택합니다. Cloudflare R2는 S3 호환 자격 증명을 사용합니다:

- **Access Key ID**: Cloudflare R2 API 토큰에서 확인 (Cloudflare 대시보드의 R2 > Manage API Tokens에서 생성)
- **Secret Access Key**: 해당 시크릿 값
- **Endpoint**: `https://{account-id}.r2.cloudflarestorage.com`

계정 ID는 Cloudflare 대시보드 사이드바에서 확인할 수 있습니다. 리모트를 저장한 후 열어서 R2 버킷이 보이는지 확인하세요. 대상 버킷이 없다면 새로 생성하세요.

## 3단계 — 마이그레이션 작업 설정

**작업(Jobs)**으로 이동하여 **새 작업(New Job)**을 클릭합니다. Dropbox를 소스로 설정합니다. 루트를 선택하여 전체를 이전하거나 특정 폴더를 선택할 수 있습니다. Cloudflare R2를 대상으로 설정하고 목표 버킷을 지정합니다.

작업 마법사의 2단계에서 마이그레이션 옵션을 구성합니다:

- 파일 목록을 미리 확인하려면 **드라이 런(Dry Run)**을 활성화한 상태로 시작하세요
- Dropbox 마이그레이션의 경우 **전송(transfers)**을 4~6으로 설정하세요 (값이 너무 높으면 Dropbox 속도 제한에 걸릴 수 있습니다)
- 대용량 파일이 손상 없이 전송되었는지 확인하려면 **체크섬 검증(checksum verification)**을 활성화하세요

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating files from Dropbox to Cloudflare R2 cloud-to-cloud" class="img-large img-center" />

## 대용량 파일 처리

Cloudflare R2는 최대 5TB 크기의 객체를 지원하며, RcloneView는 대용량 파일에 대해 자동으로 멀티파트 업로드를 사용합니다. Dropbox는 파일당 최대 2TB 크기 제한이 있습니다. 실제로 대부분의 Dropbox 마이그레이션에서는 파일 크기가 제한 범위 내에 충분히 들어옵니다. 예외적으로 매우 큰 파일이 있고 전송이 실패한다면, Log 탭에서 구체적인 오류 메시지를 확인하고 동시 전송 수를 줄이는 것을 고려하세요.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer progress during Dropbox to R2 migration" class="img-large img-center" />

## 4단계 — 확인 및 완료

주요 마이그레이션 작업이 끝난 후 **폴더 비교(Folder Compare)**를 사용하여 확인하세요. Dropbox 소스와 R2 대상을 나란히 열어 RcloneView가 차이점을 식별하도록 합니다. 누락된 파일이 있다면 작업을 다시 실행하세요. 마이그레이션이 완료되었다고 확신하면, 애플리케이션이 R2를 가리키도록 업데이트하고 Dropbox 접근을 정리할 수 있습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **원격 관리자(Remote Manager)**에서 OAuth를 통해 Dropbox를 연결하세요.
3. API 토큰, 시크릿, 계정 ID 엔드포인트를 사용하여 Cloudflare R2를 연결하세요.
4. 마이그레이션 작업을 생성하고, 드라이 런으로 미리 확인한 다음 전체 전송을 실행하세요.

Cloudflare R2로 전환하면 Dropbox의 사용자당 가격 모델을 없애고, Cloudflare 네트워크에서 접근하는 콘텐츠에 대한 송신 비용을 제거할 수 있습니다.

---

**관련 가이드:**

- [RcloneView로 Wasabi에서 Cloudflare R2로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-wasabi-to-cloudflare-r2-rcloneview)
- [RcloneView로 Azure Blob에서 Cloudflare R2로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-azure-blob-to-cloudflare-r2-rcloneview)
- [RcloneView로 Dropbox 속도 제한 API 오류 해결하기](https://rcloneview.com/support/blog/fix-dropbox-rate-limit-api-errors-rcloneview)

<CloudSupportGrid />
