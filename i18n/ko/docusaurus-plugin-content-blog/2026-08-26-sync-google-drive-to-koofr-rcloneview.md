---
slug: sync-google-drive-to-koofr-rcloneview
title: "Google Drive를 Koofr와 동기화 — RcloneView로 클라우드 백업하기"
authors:
  - alex
description: "RcloneView로 Google Drive를 Koofr와 동기화해 유럽에 호스팅된 백업 사본을 명령줄 없이 구성하세요."
keywords:
  - sync google drive to koofr
  - google drive koofr 백업
  - RcloneView koofr 동기화
  - 유럽 클라우드 백업 google drive
  - koofr 클라우드 스토리지 동기화
  - google drive koofr 마이그레이션
  - 크로스 클라우드 동기화 도구
  - koofr google drive 전송
  - 클라우드 간 동기화 rcloneview
tags:
  - RcloneView
  - google-drive
  - koofr
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive를 Koofr와 동기화 — RcloneView로 클라우드 백업하기

> rclone 명령어를 하나도 작성하지 않고도 Google Drive의 유럽 호스팅 미러를 Koofr에 유지하세요.

EU 기반 고객이 있거나 데이터 거주지 요건이 있는 팀은 종종 Google Drive 콘텐츠의 두 번째 사본을 유럽 인프라에 두고 싶어 합니다. EU에 기반한 Koofr는 이 역할에 자연스럽게 어울리지만, 변경할 때마다 파일을 수동으로 다시 업로드하는 것은 지속 가능하지 않습니다. RcloneView는 두 계정을 연결하고 저장된 작업으로 동기화를 실행하여, 수동으로 파일을 옮기지 않고도 Koofr 사본을 최신 상태로 유지합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Google Drive와 Koofr 연결하기

두 리모트 모두 각 프로바이더에 맞는 설정 방법을 사용합니다: Google Drive는 OAuth 브라우저 로그인으로 연결되고, Koofr도 Remote 탭 > New Remote에서 같은 방식으로 추가됩니다. 두 리모트가 모두 Remote Manager에 나타나면, Explorer 패널 두 개를 나란히 열어 — 하나는 Google Drive, 하나는 Koofr — 자동화된 작업을 설정하기 전에 빠른 테스트 복사를 드래그 앤 드롭으로 시도해볼 수 있습니다. 두 패널은 별도의 리모트이므로, 그 사이의 드래그는 항상 이동이 아니라 복사입니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Koofr remotes in RcloneView" class="img-large img-center" />

## 동기화 작업 구성하기

Home 탭에서 동기화 마법사를 실행하고 Google Drive를 소스로, Koofr를 대상으로 설정하세요. 단방향 "대상만 수정"을 선택하면 소스에서 실수로 아무것도 삭제하지 않으면서 Koofr 사본이 항상 Drive를 반영하게 됩니다. 2단계에서 체크섬 비교를 활성화하면 파일이 수정 시간이 아니라 콘텐츠로 매칭되므로, 파일이 Drive에 도달하기 전에 여러 동기화 클라이언트를 거칠 때 중요합니다.

RcloneView의 1:N 동기화는 동일한 Google Drive 폴더를 Koofr와 추가 대상에 동시에 미러링할 수 있습니다 — FREE 라이선스에서도 가능하며, 나중에 작업을 다시 만들지 않고도 보조 백업 대상을 추가할 때 유용합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job from Google Drive to Koofr" class="img-large img-center" />

## 첫 동기화 전에 Dry Run 실행하기

전체 전송을 실행하기 전에 Dry Run을 실행하여 정확히 어떤 파일이 복사될지 미리 보고, Koofr에서 예기치 않게 삭제되는 파일이 없는지 확인하세요. 이는 대상 폴더에 이미 콘텐츠가 있는 Koofr 계정에 대해 작업을 처음 실행할 때 특히 유용합니다. 충돌이 실제로 덮어쓰기가 되기 전에 미리 드러내주기 때문입니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job from Google Drive to Koofr in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Google Drive와 Koofr를 모두 리모트로 추가하세요.
3. 체크섬 비교를 활성화한 단방향 동기화 작업을 만드세요.
4. Dry Run을 실행한 다음 작업을 실행해 첫 번째 Koofr 미러를 만드세요.

지속적인 Google Drive-Koofr 동기화는 몇 번의 클릭만으로 다시 실행할 수 있는 유럽 호스팅 백업을 제공하므로, 복구용 사본이 작업을 처음부터 다시 만드는 데 의존하지 않게 됩니다.

---

**관련 가이드:**

- [Koofr에서 Google Drive로 마이그레이션 — RcloneView로 파일 전송하기](https://rcloneview.com/support/blog/migrate-koofr-to-google-drive-rcloneview)
- [Koofr 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Koofr를 Amazon S3와 동기화 — RcloneView로 클라우드 백업하기](https://rcloneview.com/support/blog/sync-koofr-to-amazon-s3-rcloneview)

<CloudSupportGrid />
