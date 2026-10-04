---
slug: sync-dropbox-to-box-rcloneview
title: "Dropbox를 Box로 동기화 — RcloneView로 클라우드 백업"
authors:
  - casey
description: "RcloneView로 Dropbox를 Box로 동기화하세요: 두 OAuth 리모트를 연결하고, 드라이 런으로 미리 보고, 작업을 예약하고, Folder Compare로 결과를 검증합니다."
keywords:
  - Dropbox를 Box로 동기화
  - Dropbox에서 Box로 백업
  - Dropbox Box 동기화
  - 클라우드 간 동기화
  - RcloneView
  - Dropbox 백업
  - Box 클라우드 스토리지
  - 멀티 클라우드 백업
  - rclone GUI
tags:
  - RcloneView
  - dropbox
  - box
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Dropbox를 Box로 동기화 — RcloneView로 클라우드 백업

> Dropbox 파일의 두 번째 사본을 Box에 보관하고, 하나의 데스크톱 창에서 관리하세요.

팀은 Dropbox에서 일하는데 고객이나 파트너는 Box를 고집하는 경우가 많습니다. 두 서비스를 수동으로 맞추려면 계속 다운로드하고 다시 업로드해야 합니다. RcloneView는 두 계정을 리모트로 연결하고 폴더를 서로 직접 동기화하며, 미리보기와 기록을 제공하므로 무엇이 바뀌었는지 항상 알 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Dropbox와 Box를 리모트로 추가

두 제공업체 모두 OAuth 브라우저 로그인을 사용하므로 API 키가 필요 없습니다. New Remote를 클릭하고 Dropbox를 선택한 뒤 브라우저에서 접근을 승인하고, Box도 같은 방식으로 반복하세요. 비즈니스 계정은 Dropbox for Business 설정(`dropbox_business = true`) 또는 Box for Business 설정(`box_sub_type = enterprise`)을 사용하므로 해당하는 경우 그 변형을 선택하세요.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 Dropbox와 Box 리모트 생성" class="img-large img-center" />

## 단방향 동기화 작업 구성

동기화 마법사를 열고 Dropbox 폴더를 원본으로, Box 폴더를 대상으로 선택한 뒤 문자, 숫자, 하이픈, 밑줄로 작업 이름을 지정하세요. 단방향 모드는 대상만 변경하므로 백업 역할에 적합합니다. 동기화는 대상을 원본과 일치시키므로 항상 먼저 드라이 런을 실행해 복사되거나 삭제될 파일을 확인하세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Dropbox에서 Box로의 동기화 작업 구성" class="img-large img-center" />

150GB의 고객 납품물을 가진 디자인 에이전시를 떠올려 보세요. 파일 크기나 기간 필터로 무거운 작업 파일을 Box 사본에서 제외할 수 있고, 미리 정의된 필터로 동영상 같은 범주를 건너뛸 수도 있습니다.

## 예약 및 모니터링

PLUS 라이선스에서는 마법사의 4단계에서 crontab 스타일 일정을 사용할 수 있으며, 시뮬레이션 옵션으로 다음 실행 시간을 미리 볼 수 있습니다. 매일 밤 실행하면 수동 작업 없이 Box를 최신 상태로 유지합니다. Transferring 탭은 실시간 속도와 진행 상황을 보여 주고, Job History는 모든 실행의 상태, 소요 시간, 크기, 파일을 기록합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Dropbox에서 Box로의 동기화 작업 예약" class="img-large img-center" />

## Folder Compare로 검증

실행 후 두 폴더에서 Folder Compare를 여세요. 왼쪽에만 있는 파일과 다른 파일이 나열되며, 비교 화면에서 누락된 항목을 복사할 수 있습니다. Job History는 오류가 발생한 실행을 찾는 데 도움이 됩니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Dropbox에서 Box로의 동기화 작업 기록" class="img-large img-center" />

## 시작하기

1. **RcloneView 다운로드:** [rcloneview.com](https://rcloneview.com/src/download.html)에서 받으세요.
2. OAuth 로그인으로 Dropbox와 Box 리모트를 추가합니다.
3. 단방향 동기화 작업을 만들고 드라이 런을 실행합니다.
4. 실행한 다음, PLUS 라이선스가 있다면 예약합니다.

다른 제공업체에 둔 두 번째 사본은 단일 장애 지점을 안전망으로 바꿔 줍니다.

---

**관련 가이드:**

- [무중단 Box에서 Dropbox로](https://rcloneview.com/support/blog/zero-downtime-box-to-dropbox-rcloneview)
- [Box를 Google Drive로 동기화](https://rcloneview.com/support/blog/sync-box-to-google-drive-rcloneview)
- [Dropbox 스토리지 관리](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
