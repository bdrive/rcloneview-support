---
slug: sync-wasabi-to-google-drive-rcloneview
title: "Wasabi를 Google Drive로 동기화 — RcloneView로 클라우드 백업하기"
authors:
  - morgan
description: "RcloneView로 Wasabi를 Google Drive로 동기화하세요: 두 리모트를 연결하고, Dry Run으로 미리 확인한 뒤, 단방향 동기화를 실행하고 Folder Compare로 결과를 검증합니다."
keywords:
  - wasabi를 google drive로 동기화
  - wasabi google drive 백업
  - wasabi google drive 전송
  - RcloneView wasabi
  - RcloneView google drive
  - 클라우드 간 동기화
  - s3에서 google drive로
  - wasabi 버킷 백업
tags:
  - RcloneView
  - wasabi
  - google-drive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Wasabi를 Google Drive로 동기화 — RcloneView로 클라우드 백업하기

> 미리 확인할 수 있는 단방향 동기화로 Wasabi 버킷의 두 번째 사본을 협업하기 좋은 Google Drive에 보관하세요.

Wasabi는 아카이브와 프로젝트 결과물을 보관하는 곳으로 흔히 쓰이지만, 그 파일이 필요한 사람들은 대개 Google Drive에서 일합니다. 두 곳을 동기화하면 동료들이 이미 사용하는 곳에 읽을 수 있는 사본이 생기고, 한쪽 계정에 문제가 생겼을 때를 대비한 두 번째 위치도 확보됩니다. RcloneView는 한 창에서 두 서비스를 연결하고, 작업을 미리 확인하고, 결과를 검증합니다. S3, Azure, Backblaze B2는 FREE 라이선스에서 읽기/쓰기가 모두 가능하게 연결할 수 있으며, 그 밖의 90개 이상 제공업체도 지원합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 두 리모트 연결하기

Wasabi는 rclone의 S3 프로토콜로 연결합니다. Access Key, Secret Key, 그리고 사용 중인 Wasabi 리전의 엔드포인트를 입력하세요. Google Drive는 브라우저 OAuth를 사용하므로, RcloneView가 Google 로그인 페이지를 열고 접근을 승인하면 연결됩니다.

각 리모트를 별도의 Explorer 패널에서 열어, 버킷과 Drive 폴더 트리를 나란히 탐색하면 어떤 프리픽스가 어떤 폴더에 대응하는지 정확히 알 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 Wasabi와 Google Drive 리모트 추가하기" class="img-large img-center" />

## 동기화 작업 구성하기

완성된 편집본이 담긴 버킷을 프로듀서들이 공유 Drive 폴더에서 보길 원하는 영상 스튜디오를 떠올려 보세요. Sync 버튼에서 작업을 만들고, Wasabi 프리픽스를 소스로, Drive 폴더를 대상으로 선택한 다음, 문자, 숫자, 하이픈, 밑줄을 사용해 작업 이름을 지정합니다.

단방향 동기화("Modifying destination only")는 대상을 소스와 동일하게 만들므로, Drive 폴더에만 있는 파일은 삭제됩니다. Drive 폴더에 보관하고 싶은 파일이 있다면 Copy 작업을 사용하세요. Advanced Settings에서는 동시에 전송할 파일 수를 설정하고 체크섬 비교를 활성화할 수 있습니다. Google Docs, Sheets, Slides는 일반 파일이 아니라는 점을 기억하세요. 미리 정의된 Google Docs 필터로 이들을 제외하면 유용합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView에서 Wasabi와 Google Drive 간 클라우드 간 전송" class="img-large img-center" />

## Dry Run으로 미리 확인하기

처음 실제로 실행하기 전에 Dry Run을 사용하세요. 아무것도 변경하지 않고 복사되거나 삭제될 파일의 목록을 보여 주므로, 잘못된 소스 프리픽스나 예기치 않은 삭제를 가장 손쉽게 잡아낼 수 있습니다. 목록이 맞다면 작업을 실행하고 Transferring 탭에서 진행 상황, 속도, 파일 수를 확인하세요.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView에서 동기화 작업 실행하기" class="img-large img-center" />

## 검증하고 반복하기

동기화가 끝나면 두 위치에서 Folder Compare를 열어 한쪽에만 있거나 서로 다른 항목이 남아 있지 않은지 확인하세요. Job History에는 각 실행의 상태, 소요 시간, 크기, 파일 수가 기록되어 과거 실행을 검토할 수 있습니다. PLUS 라이선스에서는 crontab 형식의 일정을 추가하여 사본이 자동으로 갱신되도록 할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView의 Folder Compare 화면" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Access Key, Secret Key, 리전 엔드포인트로 Wasabi 리모트를 추가한 다음, 브라우저 로그인으로 Google Drive를 추가합니다.
3. Wasabi 프리픽스에서 Drive 폴더로 가는 Sync 작업을 만들고 먼저 Dry Run을 실행합니다.
4. 작업을 실행한 뒤 Folder Compare로 결과를 확인합니다.

버킷의 Drive 사본은 아카이브를 팀 전체가 열어볼 수 있는 자료로 바꿔 줍니다.

---

**관련 가이드:**

- [Wasabi를 OneDrive로 마이그레이션](https://rcloneview.com/support/blog/migrate-wasabi-to-onedrive-rcloneview)
- [Dry Run — 전송 전에 동기화 미리 확인하기](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)
- [비교 우선 워크플로](https://rcloneview.com/support/blog/compare-first-workflow-rcloneview)

<CloudSupportGrid />
