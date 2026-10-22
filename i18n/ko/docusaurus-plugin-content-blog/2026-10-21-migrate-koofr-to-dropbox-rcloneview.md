---
slug: migrate-koofr-to-dropbox-rcloneview
title: "Koofr를 Dropbox로 마이그레이션 — RcloneView로 파일 전송"
authors:
  - robin
description: "RcloneView로 Koofr를 Dropbox로 마이그레이션하세요: 두 리모트를 연결하고, Dry Run으로 미리 확인한 뒤, 클라우드 간 복사를 실행하고 Folder Compare로 결과를 검증합니다."
keywords:
  - Koofr를 Dropbox로 마이그레이션
  - Koofr Dropbox 전송
  - RcloneView Koofr
  - RcloneView Dropbox
  - 클라우드 간 마이그레이션
  - Koofr 백업
  - Dropbox 동기화
  - rclone GUI
  - 클라우드 간 파일 이동
  - 클라우드 마이그레이션 도구
tags:
  - RcloneView
  - koofr
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Koofr를 Dropbox로 마이그레이션 — RcloneView로 파일 전송

> Koofr 라이브러리를 클라우드 간 전송으로 Dropbox에 옮기세요. 복사 전에 미리 확인하고, 끝난 뒤에는 비교로 검증합니다.

Koofr에서 Dropbox로 옮기는 이유는 대개 공유 팀 폴더, 고객 워크플로, 또는 Dropbox하고만 연동되는 앱 때문입니다. 모든 파일을 노트북에 내려받았다가 다시 업로드하는 방식은 느리고 불안정합니다. rclone 기반 GUI인 RcloneView는 두 서비스를 리모트로 연결해 하나의 작업으로 전송하며, 진행 상황을 처음부터 끝까지 지켜볼 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Koofr와 Dropbox를 리모트로 연결하기

Remote 탭을 열고 **New Remote**를 클릭하세요. Dropbox는 브라우저 기반 OAuth를 사용합니다. RcloneView가 로그인 페이지를 열고, 접근을 승인하면 API 키 없이 리모트가 연결됩니다. 대상이 Dropbox for Business 계정이라면 리모트를 만들 때 `dropbox_business` 설정을 활성화하세요. Koofr도 제공업체 목록에서 같은 방식으로 추가하고, 떠나려는 계정으로 로그인합니다.

RcloneView는 Windows, macOS, Linux에서 하나의 창으로 90개 이상의 클라우드 스토리지 서비스를 관리하므로, 두 리모트를 같은 탐색기에 나란히 놓고 볼 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 Koofr와 Dropbox 리모트 추가하기" class="img-large img-center" />

## 복사하기 전에 폴더 구조 계획하기

왼쪽 탐색기 패널에서 Koofr를, 오른쪽에서 Dropbox를 여세요. 전체를 옮길지 일부 폴더만 옮길지 정합니다. 수년치 고객 폴더를 가진 사진 스튜디오라면 한 해씩 나눠 복사할 수 있고, 소규모 팀이라면 전체 트리를 한 번에 옮길 수도 있습니다. 우클릭 메뉴의 **Get Size** 옵션은 폴더의 데이터 크기를 보여 주므로 작업 시간을 가늠하는 데 도움이 됩니다.

작업 마법사의 필터 단계를 사용하면 `.git/` 폴더 같은 불필요한 항목이나 최대 크기를 넘는 파일을 건너뛸 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView에서 Koofr와 Dropbox 폴더 비교하기" class="img-large img-center" />

## Dry Run 후 전송 실행하기

Home 탭에서 작업을 만드세요. Koofr를 소스로, Dropbox를 대상으로 지정하고, 확신이 설 때까지 원본을 그대로 두도록 Copy를 선택합니다. 먼저 **Dry Run**을 실행하세요. 복사될 파일 목록을 보여 주므로 데이터가 이동하기 전에 잘못된 대상 폴더를 발견할 수 있습니다. 그런 다음 작업을 실행하면 클라우드 간 전송이 두 서비스 사이에서 스트리밍되며, Transferring 탭에서 속도, 파일 수, 진행률을 확인할 수 있습니다.

Dropbox는 한꺼번에 많은 호출을 받으면 요청을 늦출 수 있습니다. 속도 제한 메시지가 보이면 Advanced Settings에서 파일 전송 수를 줄이고 작업이 재시도하도록 두세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Koofr에서 Dropbox로의 클라우드 간 전송" class="img-large img-center" />

## 검증하고 작업 기록 남기기

복사가 끝나면 두 폴더에 대해 **Compare**를 여세요. Left-only 파일은 도착하지 않은 항목을 보여 주고, 크기 차이는 별도로 표시됩니다. 비교 보기에서 복사해 빈틈을 채운 다음, **Job History**에서 각 실행의 상태, 소요 시간, 파일 수를 확인하세요.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Koofr에서 Dropbox로의 마이그레이션 작업 기록" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **Remote > New Remote**에서 Koofr와 Dropbox를 추가합니다.
3. Koofr에서 Dropbox로 Copy 작업을 만들고 Dry Run을 실행합니다.
4. 작업을 실행한 뒤, Koofr 사본을 정리하기 전에 Folder Compare로 검증합니다.

미리 확인하고 검증할 수 있는 마이그레이션은 자신 있게 끝낼 수 있습니다.

---

**관련 가이드:**

- [Koofr 스토리지 관리 — RcloneView로 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Dropbox 스토리지 관리 — RcloneView로 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Dry Run — RcloneView에서 클라우드 동기화 미리 보기](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)

<CloudSupportGrid />
