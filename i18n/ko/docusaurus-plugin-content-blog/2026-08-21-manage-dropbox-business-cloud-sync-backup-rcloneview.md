---
slug: manage-dropbox-business-cloud-sync-backup-rcloneview
title: "Dropbox for Business 스토리지 관리하기 — RcloneView로 동기화 및 백업하기"
authors:
  - casey
description: "Dropbox for Business를 RcloneView에 연결해 팀 계정을 위한 크로스 플랫폼 파일 탐색, 클라우드 간 동기화, 예약 백업을 이용하세요."
keywords:
  - dropbox for business
  - dropbox business 동기화
  - rcloneview dropbox business
  - dropbox business 백업
  - dropbox_business rclone
  - 엔터프라이즈 dropbox 스토리지
  - 비즈니스 클라우드 스토리지 gui
  - dropbox 팀 계정 동기화
  - 멀티 클라우드 파일 관리
  - dropbox business 마이그레이션
tags:
  - RcloneView
  - dropbox
  - business
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Dropbox for Business 스토리지 관리하기 — RcloneView로 동기화 및 백업하기

> Dropbox for Business 팀 계정을 RcloneView에 연결해서 관리하는 다른 모든 클라우드와 함께 팀 공유 폴더를 탐색, 동기화, 백업하세요.

Dropbox for Business 계정은 개인용 Dropbox와는 다르게 파일을 구성합니다. 팀 폴더, 관리자가 관리하는 공간, 공유 워크스페이스가 모두 비즈니스 로그인 뒤에 자리합니다. RcloneView는 이러한 팀 계정에 직접 연결되어, IT 관리자와 팀 리더가 Dropbox 웹 앱과 별도의 데스크톱 클라이언트를 오가지 않고도 하나의 창에서 비즈니스 콘텐츠를 탐색, 전송, 백업할 수 있게 해줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Dropbox for Business 리모트 설정하기

RcloneView에서 Dropbox for Business 계정을 추가하는 과정은 개인용 Dropbox 연결과 동일하게 시작됩니다: New Remote를 클릭하고 Dropbox를 선택한 다음 브라우저에서 OAuth 로그인을 완료하세요. 차이점은 하나의 추가 설정뿐입니다 — 리모트에서 `dropbox_business = true`를 활성화하면 연결이 개인 계정이 아니라 팀 계정으로 인증됩니다. 설정이 끝나면 비즈니스 계정의 팀 폴더가 다른 리모트와 마찬가지로 Explorer 패널에 나타납니다.

RcloneView는 하나의 창에서 Windows, macOS, Linux 전반에 걸쳐 90개 이상의 서비스를 마운트하고 동기화할 수 있으므로, Dropbox for Business 테넌트와 다른 부서의 클라우드를 함께 관리하는 관리자는 프로바이더별로 애플리케이션을 따로 오갈 필요 없이 같은 세션 안에서 모든 것을 유지할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Dropbox for Business remote in RcloneView" class="img-large img-center" />

## 팀 폴더와 공유 공간 탐색하기

연결이 완료되면 File Explorer 패널에 Dropbox for Business 폴더 구조가 표시되며, 다른 모든 리모트와 동일한 이름, 유형, 수정 날짜, 크기 열을 사용합니다. 여러 부서에 걸친 팀 폴더도 접을 수 있는 폴더 트리를 통해 쉽게 탐색할 수 있으며, 브레드크럼 경로 표시줄의 Copy Full Path 옵션은 스크립트 작성이나 내장된 rclone Terminal로 넘길 때 필요한 `remote:path` 형식으로 경로를 복사해줍니다.

Ctrl+Click 또는 Shift+Click을 이용한 다중 선택을 사용하면 전체 계정을 다루지 않고도 대규모 팀 공간에서 특정 프로젝트 폴더만 손쉽게 골라낼 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browsing Dropbox for Business team folders in RcloneView Explorer" class="img-large img-center" />

## 비즈니스 데이터를 두 번째 클라우드에 백업하기

비즈니스에 중요한 파일을 하나의 프로바이더에만 의존하는 것은 위험하므로, 많은 팀이 Dropbox for Business 콘텐츠를 Amazon S3, Backblaze B2, 또는 다른 클라우드에 미러링하여 두 번째 사본을 마련합니다. RcloneView의 4단계 Sync 마법사는 이를 바로 처리합니다: Dropbox for Business 리모트를 소스로 선택하고, 대상 리모트를 고른 다음, 단방향 동기화를 선택하면 원본을 덮어쓰지 않으면서 백업 대상이 항상 소스를 그대로 반영하게 됩니다. Filtering 설정을 이용해 대용량 미디어 파일을 제외하거나 백업 대상을 특정 기간 이내의 폴더로 제한하면, 작업을 실제로 보호가 필요한 것에만 집중시킬 수 있습니다.

첫 동기화 전에 Dry Run을 실행하면 어떤 파일이 복사될지 정확히 보여주므로, 전체 팀 계정 분량의 데이터를 옮기기 전에 범위를 확인하는 데 유용합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Dropbox for Business backup job in RcloneView" class="img-large img-center" />

## 반복 백업 자동화하기

PLUS 라이선스 사용자는 Dropbox for Business 백업 작업에 crontab 형식의 예약을 걸어, 수동 개입 없이 매일 밤 또는 매주 실행되도록 설정할 수 있습니다. 이후 Job History는 예약된 모든 실행에 대해 실행 유형, 소요 시간, 상태, 전송된 총 용량을 기록하므로, 관리자는 Dropbox 자체 활동 로그를 뒤지지 않고도 검토할 수 있는 감사 기록을 얻게 됩니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 새 Dropbox 리모트를 추가하고 설정 중에 `dropbox_business` 설정을 활성화하세요.
3. Explorer 패널에서 팀 폴더를 탐색하고 필요한 공유 공간에 접근할 수 있는지 확인하세요.
4. Sync 작업을 만들어 비즈니스 데이터를 보조 클라우드에 미러링하고, PLUS 라이선스라면 예약을 설정하세요.

Dropbox for Business 리모트를 제대로 설정하면, 한 곳에만 존재하기 쉬운 팀 데이터를 위한 실질적인 안전망으로 RcloneView를 활용할 수 있습니다.

---

**관련 가이드:**

- [RcloneView로 Dropbox 스토리지 관리하기 — 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Dropbox Business를 Google Workspace로 마이그레이션하기 — RcloneView로 파일 이전](https://rcloneview.com/support/blog/migrate-dropbox-business-to-google-workspace-rcloneview)
- [Dropbox를 AWS S3로 백업하기 — RcloneView 클라우드 백업](https://rcloneview.com/support/blog/backup-dropbox-to-aws-s3-rcloneview)

<CloudSupportGrid />
