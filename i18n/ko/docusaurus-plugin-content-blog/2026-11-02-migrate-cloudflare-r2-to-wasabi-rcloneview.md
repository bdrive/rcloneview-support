---
slug: migrate-cloudflare-r2-to-wasabi-rcloneview
title: "Cloudflare R2를 Wasabi로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - robin
description: "RcloneView로 Cloudflare R2 버킷을 Wasabi로 옮기기: S3 호환 리모트 두 개를 연결하고, Dry Run 후 버킷 간 복사, Folder Compare로 검증합니다."
keywords:
  - Cloudflare R2를 Wasabi로 마이그레이션
  - R2에서 Wasabi로 전송
  - R2 버킷을 Wasabi로 이동
  - S3 호환 버킷 마이그레이션
  - 클라우드 간 전송
  - RcloneView Cloudflare R2
  - RcloneView Wasabi
  - 오브젝트 스토리지 마이그레이션 GUI
tags:
  - RcloneView
  - cloudflare-r2
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cloudflare R2를 Wasabi로 마이그레이션 — RcloneView로 파일 전송하기

> Cloudflare R2 버킷을 하나의 창에서 Wasabi로 복사하세요. 먼저 Dry Run을 하고, 끝난 뒤 시각적으로 확인합니다.

Cloudflare R2와 Wasabi는 모두 S3 프로토콜을 사용하므로 둘 사이의 데이터 이동은 개념적으로 간단합니다. 하지만 CLI 플래그만으로 하려면 엔드포인트 두 개와 자격 증명 두 세트를 다뤄야 하고, 무엇이 도착했는지 확인하기도 쉽지 않습니다. RcloneView는 두 곳을 리모트로 연결해 GUI에서 복사, 모니터링, 검증을 할 수 있게 해 줍니다. FREE 라이선스에서 S3 호환 서비스를 읽기/쓰기 전체 권한으로 연결할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## S3 호환 리모트 두 개 연결하기

New Remote 대화 상자를 열고 먼저 Cloudflare R2를 추가하세요. R2에는 API 토큰, Account ID, 그리고 `https://<ACCOUNT_ID>.r2.cloudflarestorage.com` 형식의 엔드포인트가 필요합니다. 버킷을 만든 뒤 Cloudflare 대시보드에서 토큰을 생성하세요. RcloneView의 R2 설정에서는 토큰에 Admin Read & Write 권한이 필요합니다.

다음으로 Wasabi를 추가하세요. Wasabi 콘솔의 Access Key와 Secret Key를 입력하고, 대상 버킷이 있는 리전에 맞는 엔드포인트를 선택합니다. 대상 버킷은 Wasabi에서 미리 만들어 두거나 Explorer 패널에서 폴더를 만들 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 Cloudflare R2와 Wasabi 리모트 추가" class="img-large img-center" />

## 두 패널에서 복사 계획하기

왼쪽 Explorer 패널에서 R2 리모트를, 오른쪽에서 Wasabi 리모트를 여세요. 옮기려는 버킷이나 프리픽스로 이동합니다. 수 테라바이트의 미디어 아카이브를 가진 스튜디오라면 전체 버킷을 옮기기 전에 먼저 프로젝트 프리픽스 하나를 이동해 권한과 이름 규칙을 확인해 볼 수 있습니다.

양쪽 모두 리모트이므로 RcloneView는 이를 두 리모트 간 클라우드 간 전송으로 실행하며, 직접 다운로드 후 업로드하는 단계를 따로 관리할 필요가 없습니다. 리모트가 다를 때 패널 사이로 드래그하면 기본적으로 복사되며, 반복 실행이 필요하면 Sync 마법사에서 Copy 작업을 만들 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView에서 두 패널 사이의 클라우드 간 전송" class="img-large img-center" />

## Dry Run, 조정, 실행

실제 전송 전에 작업 마법사에서 Dry Run을 켜세요. 어떤 파일이 복사될지 정확히 보여 주므로, 데이터가 이동하기 전에 잘못된 프리픽스를 발견할 수 있습니다. Advanced Settings에서 작은 오브젝트가 많은 버킷이라면 파일 전송 수를 늘리고, 크기만이 아니라 해시와 크기로 비교하려면 체크섬 비교를 켜세요. 필터 단계에서 임시 폴더를 제외하거나 파일 나이로 제한할 수 있습니다.

Job Manager에서 작업을 시작하고 Transferring 탭에서 진행 상황을 확인하세요. 속도, 파일 수, 전송된 바이트가 실시간으로 갱신됩니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView의 Job Manager에서 마이그레이션 작업 실행" class="img-large img-center" />

## Folder Compare로 검증하기

작업이 끝나면 왼쪽에 R2, 오른쪽에 Wasabi를 두고 Compare를 여세요. left-only 파일로 필터링하면 누락된 항목을, different 파일로 필터링하면 크기 불일치를 확인할 수 있습니다. 남은 항목이 있으면 Copy right로 채우고 결과가 깨끗해질 때까지 다시 비교하세요. 실행의 상태, 소요 시간, 파일 합계는 Job History에서 확인하세요.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView의 Folder Compare로 버킷 마이그레이션 검증" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. New Remote에서 Cloudflare R2와 Wasabi 리모트를 추가하세요.
3. 두 리모트를 나란한 패널에서 열고 Dry Run으로 Copy 작업을 실행하세요.
4. 작업을 실행한 뒤 Folder Compare로 결과를 확인하세요.

Compare가 깨끗하게 일치할 때까지 R2는 그대로 두세요. 그러면 안심하고 스토리지를 전환할 수 있습니다.

---

**관련 가이드:**

- [Wasabi를 Cloudflare R2로 마이그레이션](https://rcloneview.com/support/blog/migrate-wasabi-to-cloudflare-r2-rcloneview)
- [RcloneView로 Wasabi 스토리지 관리하기](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [RcloneView로 Cloudflare R2 관리하기](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)

<CloudSupportGrid />
