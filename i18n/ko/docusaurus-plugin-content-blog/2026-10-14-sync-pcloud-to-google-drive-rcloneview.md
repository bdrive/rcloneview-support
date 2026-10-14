---
slug: sync-pcloud-to-google-drive-rcloneview
title: "pCloud를 Google Drive로 동기화 — RcloneView로 클라우드 백업"
authors:
  - jay
description: "RcloneView로 pCloud를 Google Drive로 동기화하세요: 두 리모트를 연결하고, Dry Run으로 미리 확인하고, 한 화면에서 클라우드 간 백업을 예약합니다."
keywords:
  - pcloud google drive 동기화
  - pcloud google drive 백업
  - RcloneView pcloud
  - 클라우드 간 동기화
  - pcloud google drive 전송
  - pcloud 파일 백업
  - 두 번째 사본 클라우드 백업
  - 클라우드 동기화 예약
  - rclone GUI
tags:
  - RcloneView
  - pcloud
  - google-drive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# pCloud를 Google Drive로 동기화 — RcloneView로 클라우드 백업

> 미리 확인하고, 실행하고, 예약할 수 있는 클라우드 간 동기화 작업으로 pCloud 파일의 두 번째 사본을 Google Drive에 보관하세요.

중요한 파일을 하나의 클라우드에만 두면 계정 잠금, 실수로 인한 삭제, 동기화 실수에 노출됩니다. pCloud를 Google Drive에 미러링하면 다른 제공업체에 독립된 사본이 생깁니다. RcloneView는 OAuth로 두 서비스를 연결한 뒤 작업으로 둘 사이의 데이터를 동기화합니다. RcloneView는 하나의 창에서 90개 이상의 제공업체를 마운트하고 동기화하며 Windows, macOS, Linux에서 사용할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## pCloud와 Google Drive 연결

두 제공업체 모두 브라우저 기반 OAuth 로그인을 사용합니다. RcloneView에서 새 리모트 대화상자를 열고 pCloud를 선택한 뒤 브라우저가 열리면 로그인하세요. Google Drive도 같은 방식으로 반복합니다. 인증이 끝나면 각 리모트가 Remote Manager와 Explorer에 나타나며, 2분할 레이아웃에서 폴더를 나란히 탐색할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 pCloud와 Google Drive 리모트 추가" class="img-large img-center" />

## 동기화 전에 확인

300GB 규모의 pCloud 프로젝트 아카이브를 Drive에 미러링하려는 프리랜서 디자이너를 생각해 보세요. 아무것도 건드리기 전에 두 폴더에 Folder Compare를 사용하세요. 한쪽에만 있는 파일, 서로 다른 파일, 일치하는 파일이 표시되므로 첫 동기화가 정확히 무엇을 할지 알 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView에서 pCloud와 Google Drive 폴더 비교" class="img-large img-center" />

## 동기화 작업 만들기

동기화 마법사는 소스와 대상 선택, 고급 설정 조정, 필터 설정, 선택적 일정 설정의 네 단계로 구성됩니다. 소스로 pCloud, 대상으로 Google Drive를 선택하고 대상만 변경하는 단방향 옵션을 사용하세요. 필터로 임시 파일을 건너뛰거나 파일 크기를 제한하고, Dry Run으로 복사 또는 삭제될 파일 목록을 확인하세요. 단방향 동기화는 대상을 소스와 똑같이 맞추므로 예기치 않은 삭제가 없는지 Dry Run 결과를 항상 확인하세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView에서 pCloud에서 Google Drive로의 클라우드 간 전송" class="img-large img-center" />

## 모니터링 및 예약

작업을 실행하며 전송 진행 상황을 실시간으로 확인한 뒤 Job History에서 결과를 검토하세요. PLUS 라이선스에서는 crontab 형식의 일정을 추가해 미러가 주기적으로 갱신되도록 할 수 있습니다(RcloneView는 System Tray에서 계속 실행됩니다).

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView에서 pCloud에서 Google Drive로의 동기화 작업 예약" class="img-large img-center" />

## 시작하기

1. **RcloneView 다운로드**: [rcloneview.com](https://rcloneview.com/src/download.html)에서 받으세요.
2. OAuth 로그인으로 pCloud와 Google Drive를 리모트로 추가합니다.
3. 소스와 대상 폴더를 비교한 다음 단방향 동기화 작업을 만듭니다.
4. Dry Run을 실행하고, 작업을 실행한 뒤, Job History에서 검토합니다.

다른 제공업체에 검증된 두 번째 사본을 두면 단일 장애 지점이 실질적인 백업으로 바뀝니다.

---

**관련 가이드:**

- [pCloud 스토리지 관리 — RcloneView로 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Google Drive를 pCloud로 마이그레이션 — RcloneView로 파일 전송](https://rcloneview.com/support/blog/migrate-google-drive-to-pcloud-rcloneview)
- [Dropbox를 pCloud로 동기화 — RcloneView로 클라우드 백업](https://rcloneview.com/support/blog/sync-dropbox-to-pcloud-rcloneview)

<CloudSupportGrid />
