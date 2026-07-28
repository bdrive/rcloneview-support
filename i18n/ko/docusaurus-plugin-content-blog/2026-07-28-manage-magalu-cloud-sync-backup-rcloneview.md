---
slug: manage-magalu-cloud-sync-backup-rcloneview
title: "Magalu Cloud 스토리지 관리하기 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - casey
description: "Magalu Cloud 오브젝트 스토리지를 RcloneView에 연결하여 드래그 앤 드롭 파일 관리, 예약 동기화, 크로스 클라우드 백업을 이용하세요."
keywords:
  - Magalu Cloud RcloneView
  - Magalu 오브젝트 스토리지 GUI
  - Magalu Cloud 스토리지 관리
  - S3 호환 클라우드 백업
  - Magalu Cloud 동기화 도구
  - 브라질 오브젝트 스토리지 GUI
  - Magalu Cloud 파일 관리자
  - RcloneView S3 호환 리모트
  - 클라우드 스토리지 동기화 백업
tags:
  - RcloneView
  - s3-compatible
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Magalu Cloud 스토리지 관리하기 — RcloneView로 파일 동기화 및 백업하기

> 터미널에서 API 자격 증명을 이리저리 다루는 대신, 완전한 드래그 앤 드롭 파일 관리자로 Magalu Cloud 오브젝트 스토리지를 탐색하고 동기화하고 백업하세요.

Magalu Cloud는 S3 호환 오브젝트 스토리지 서비스이므로, S3 프로토콜을 기반으로 만들어진 모든 도구에 바로 통합됩니다. RcloneView는 이를 Amazon S3나 Backblaze B2와 정확히 동일하게 취급합니다: 액세스 키, 시크릿 키, 엔드포인트를 입력하면 버킷이 다른 모든 리모트와 함께 파일 탐색기에 나타납니다. 이는 이미 익숙한 S3 도구를 벗어나지 않으면서 오브젝트 스토리지 옵션을 원하는, 브라질이나 라틴 아메리카에서 이미 워크로드를 운영 중인 팀에게 실용적인 선택이 됩니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Magalu Cloud 리모트 연결하기

Magalu Cloud를 추가하는 과정은 RcloneView가 모든 S3 호환 제공업체에 사용하는 것과 동일한 자격 증명 입력 흐름을 따릅니다: New Remote를 열고 S3 호환 유형을 선택한 뒤, 액세스 키 ID, 시크릿 액세스 키, 그리고 해당 지역의 Magalu Cloud 엔드포인트 URL을 입력하세요. 저장되면 버킷은 전체 폴더 트리 탐색, 이미지 썸네일 미리보기, 복사·이름 변경·삭제·크기 확인을 위한 우클릭 액세스와 함께 Explorer 패널에 로드됩니다 — 별도의 S3 콘솔 탭이 필요 없습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Magalu Cloud S3-compatible remote in RcloneView" class="img-large img-center" />

RcloneView는 rclone의 S3 백엔드를 통해 연결되므로, 표준적인 오브젝트 스토리지 동작이 적용됩니다: 폴더는 키 접두사로 구성된 가상 구조이며, 파일 작업은 rclone이 발행하는 기본 PUT/GET/DELETE 호출로 매핑됩니다. 마운트 전용 도구와 달리, RcloneView는 FREE 라이선스에서도 동기화와 폴더 비교를 제공하므로, Magalu 버킷이 수동적인 탐색에만 국한되지 않습니다.

## Magalu Cloud를 다른 스토리지와 동기화하기

대부분의 팀은 오브젝트 스토리지를 단독으로 사용하지 않습니다 — 백업이나 마이그레이션 계획의 일부로 로컬 드라이브, NAS 박스, 다른 클라우드 제공업체와 함께 사용됩니다. 4단계 동기화 마법사를 사용하면 Magalu 버킷을 소스 또는 대상으로 설정하고, 대량 전송을 안정적으로 처리하기 위해 동시 전송 수와 동등성 검사기 수를 구성하며, 실제로 이동시키고 싶은 파일만 남도록 필터(최대 파일 크기, 최대 기간, 확장자 제외)를 적용할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job with a Magalu Cloud bucket as destination" class="img-large img-center" />

실제 전송을 확정하기 전에 Dry Run을 먼저 실행하여 정확히 어떤 파일이 복사되거나 삭제될지 미리 확인하세요 — 특히 새 버킷에 동기화 작업을 처음 실행할 때, 소스와 대상 폴더를 올바르게 설정하는 것이 가장 중요할 때 유용합니다.

## Magalu 백업 반복 예약하기

지속적인 백업 루틴을 위해, PLUS 라이선스 사용자는 동기화 작업에 크론탭 스타일의 일정을 지정하여 로컬 프로젝트 폴더나 다른 클라우드 리모트가 매일 밤, 매주, 또는 원하는 사용자 지정 주기에 맞춰 자동으로 Magalu Cloud에 미러링되도록 할 수 있습니다. Job History는 이후 각 실행의 소요 시간, 전송 속도, 파일 수, 완료 상태를 추적하여, 터미널 로그를 확인하지 않고도 명확한 감사 기록을 제공합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring backup job to a Magalu Cloud bucket" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. New Remote를 열고 S3 호환 제공업체 유형을 선택한 뒤, Magalu Cloud 액세스 키, 시크릿 키, 엔드포인트를 입력합니다.
3. Explorer 패널에서 버킷을 탐색하여 연결과 폴더 구조를 확인합니다.
4. Magalu 리모트를 대상으로 하는 동기화 또는 백업 작업을 만들고, Dry Run을 실행한 다음 전송을 실행합니다.

연결이 완료되면, Magalu Cloud 버킷은 RcloneView의 다른 리모트와 마찬가지로 동작합니다 — 일상적인 사용, 크로스 클라우드 전송, 예약된 보호를 위한 준비가 완료됩니다.

---

**관련 가이드:**

- [IDrive e2 S3 클라우드 백업 관리하기 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-idrive-e2-s3-cloud-backup-rcloneview)
- [Cloudflare R2 관리하기 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Dry Run — RcloneView로 전송 전에 클라우드 동기화 미리 보기](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
