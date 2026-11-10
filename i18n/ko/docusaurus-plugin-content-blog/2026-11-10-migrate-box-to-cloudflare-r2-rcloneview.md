---
slug: migrate-box-to-cloudflare-r2-rcloneview
title: "Box에서 Cloudflare R2로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - robin
description: "RcloneView로 Box에서 Cloudflare R2로 마이그레이션하세요. 두 리모트를 연결하고, 드라이 런으로 복사를 확인한 뒤, 클라우드 간 전송을 실행하고 결과를 검증합니다."
keywords:
  - Box에서 Cloudflare R2로 마이그레이션
  - Box R2 전송
  - Box 클라우드 마이그레이션
  - Cloudflare R2 백업
  - RcloneView
  - 클라우드 간 전송
  - Box에서 S3 호환 스토리지로
  - Box 아카이브를 오브젝트 스토리지로
  - rclone GUI
tags:
  - RcloneView
  - box
  - s3-compatible
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box에서 Cloudflare R2로 마이그레이션 — RcloneView로 파일 전송하기

> 수년간 쌓인 Box 콘텐츠를 내 디스크로 내려받지 않고 Cloudflare R2 오브젝트 스토리지로 옮기세요.

Box 요금제가 부담스러워진 재무팀이나 지난 프로젝트를 정리하는 부서는 오브젝트 스토리지 아카이브를 원하는 경우가 많습니다. RcloneView는 Box와 Cloudflare R2를 나란히 연결해 둘 사이에서 직접 복사합니다. S3, Azure, Backblaze B2는 FREE 라이선스에서 전체 읽기/쓰기로 연결할 수 있으며, R2도 마찬가지입니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Box와 Cloudflare R2 연결하기

Box는 OAuth 리모트입니다. RcloneView가 브라우저를 열고 로그인하면 API 키 없이 리모트가 만들어집니다. 회사에서 Box for Business를 사용한다면 리모트에 `box_sub_type = enterprise`가 필요합니다. 개인용 리모트는 기업 콘텐츠를 볼 수 없으므로 먼저 확인하세요.

Cloudflare R2는 자격 증명을 사용합니다. Cloudflare 대시보드에서 R2 버킷을 만들고 Admin Read & Write 권한의 API 토큰을 생성한 뒤, New Remote 대화상자에 토큰 정보와 계정 엔드포인트 `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`을 입력하세요.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 Box와 Cloudflare R2 리모트 추가" class="img-large img-center" />

## 폴더 구조 계획하기

한쪽 Explorer 패널에는 Box를, 다른 쪽에는 R2를 여세요. R2는 평면 오브젝트 스토리지이므로 복사 전에 프리픽스 구조를 정하세요. 예를 들어 Box 부서별로 최상위 폴더를 하나씩 두고 그 아래에 원래 하위 폴더를 두는 방식입니다. 큰 Box 폴더에는 Get Size를 사용해 옮길 용량을 가늠해 보세요.

Box Notes 같은 Box Docs는 일반 파일이 아닙니다. 동기화 마법사의 사전 정의 필터에는 Box Docs 옵션이 있어, 아카이브에 포함하고 싶지 않다면 제외할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView Explorer 패널에 나란히 표시된 Box와 Cloudflare R2" class="img-large img-center" />

## 드라이 런 후 복사

첫 실행에는 Sync 작업 대신 Copy 작업을 만들어 양쪽에서 아무것도 삭제되지 않게 하세요. 먼저 Dry Run으로 실행하면 RcloneView가 전송 없이 복사할 파일 목록을 보여 주므로 잘못된 소스 폴더를 찾는 데 도움이 됩니다.

Advanced Settings 단계에서 작은 파일이 많다면 파일 전송 수를 늘리고, 해시와 크기로 비교하려면 체크섬 비교를 활성화하세요. 그런 다음 작업을 실행하고 Transferring 탭에서 진행 상황을 확인하세요. 진행률, 속도, 파일 수가 실시간으로 갱신됩니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView에서 Box to R2 복사 작업 실행" class="img-large img-center" />

## 마이그레이션 검증

작업이 끝나면 Folder Compare를 열고 왼쪽에 Box, 오른쪽에 R2를 지정하세요. left-only 필터로 도착하지 않은 항목을 확인하고, different-files 필터로 크기 불일치를 찾으세요. Job History에는 각 실행의 상태, 소요 시간, 총 크기, 파일 수가 남아 감사 추적용 증빙으로 쓸 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare로 Box to R2 마이그레이션 검증" class="img-large img-center" />

## 시작하기

1. **RcloneView 다운로드**: [rcloneview.com](https://rcloneview.com/src/download.html)에서 받으세요.
2. Box 리모트(OAuth)와 Cloudflare R2 리모트(API 토큰과 엔드포인트)를 추가하세요.
3. Box 폴더에서 R2 버킷 프리픽스로 향하는 Copy 작업을 만들고 Dry Run을 실행하세요.
4. 작업을 실행한 뒤 Folder Compare로 결과를 확인하세요.

두 리모트를 연결하고 나면 Box 콘텐츠를 R2로 옮기는 데 몇 번의 클릭이면 충분합니다.

---

**관련 가이드:**

- [Box에서 AWS S3로 마이그레이션](https://rcloneview.com/support/blog/migrate-box-to-aws-s3-rcloneview)
- [RcloneView로 Box 스토리지 관리하기](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Dry Run: 전송 전 동기화 미리보기](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
