---
slug: migrate-pcloud-to-dropbox-rcloneview
title: "pCloud에서 Dropbox로 마이그레이션 — RcloneView로 파일 전송"
authors:
  - tayson
description: "RcloneView로 pCloud에서 Dropbox로 마이그레이션: OAuth로 두 서비스를 연결하고, Dry Run으로 미리 확인한 뒤 클라우드 간 복사하고 Folder Compare로 검증하세요."
keywords:
  - pCloud에서 Dropbox로 마이그레이션
  - pCloud to Dropbox 전송
  - pCloud 파일을 Dropbox로 이동
  - pCloud Dropbox 마이그레이션 도구
  - 클라우드 간 전송
  - RcloneView
  - rclone GUI
  - pCloud 동기화
  - Dropbox 동기화
  - 폴더 비교
tags:
  - RcloneView
  - pcloud
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# pCloud에서 Dropbox로 마이그레이션 — RcloneView로 파일 전송

> pCloud 라이브러리 전체를 내 디스크에 먼저 다운로드하지 않고 Dropbox로 옮기세요.

pCloud에서 Dropbox로 옮기는 경우는 대개 팀이 공유용으로 Dropbox를 표준으로 정했거나 고객사가 요구하기 때문입니다. 수백 GB를 직접 내려받아 다시 업로드하는 것은 느리고 오류가 나기 쉽습니다. RcloneView는 rclone을 통해 두 서비스를 연결하고, 하나의 창에서 Dry Run과 검증 단계를 거치며 클라우드 간 파일을 전송합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## pCloud와 Dropbox 연결

RcloneView에서 pCloud와 Dropbox는 모두 OAuth 브라우저 로그인을 사용하므로 API 키가 필요 없습니다. Remote 탭을 열고 **New Remote**를 클릭한 다음 pCloud를 선택하고, 브라우저가 열리면 로그인하세요. Dropbox도 같은 방법으로 추가합니다. Dropbox Business 계정을 사용한다면 설정 중에 `dropbox_business = true` 옵션을 활성화하세요.

RcloneView는 Windows, macOS, Linux에서 90개 이상의 클라우드 스토리지 서비스를 지원하므로, 두 계정이 Explorer 패널에 나란히 표시됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 pCloud 및 Dropbox 리모트 추가" class="img-large img-center" />

## Dry Run으로 마이그레이션 미리 보기

아무것도 옮기기 전에 Sync 마법사를 열고 pCloud를 소스로, Dropbox 폴더를 대상으로 선택합니다. 첫 마이그레이션에는 소스를 건드리지 않도록 **Copy** 방식을 사용하세요. **Dry Run**을 실행하면 전송될 모든 파일 목록을 확인하고 폴더 구조가 의도한 위치에 만들어지는지 점검할 수 있습니다.

예를 들어 디자이너가 pCloud에 400 GB의 프로젝트 폴더를 가지고 있다고 가정해 보겠습니다. Dry Run으로 용량이 큰 파일이나 불필요한 하위 폴더를 찾아내고, Sync 마법사의 필터링 단계에서 최대 파일 크기, 파일 사용 기간 또는 사용자 지정 필터 규칙으로 제외할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="pCloud에서 Dropbox로의 클라우드 간 전송" class="img-large img-center" />

## 전송 실행 및 진행 상황 모니터링

작업을 시작하고 Transferring 탭에서 진행률과 파일 수를 확인하세요. Advanced Settings에서 파일 전송 수를 조정하고 체크섬 비교를 활성화할 수 있습니다. 실행 도중 실패하면 작업의 재시도 설정(기본값 3)에 따라 동기화를 다시 시도하며, 다시 실행하면 누락된 파일만 복사됩니다.

데이터는 rclone을 통해 두 서비스 사이에서 직접 이동하므로 전체 라이브러리를 담을 로컬 디스크 여유 공간이 필요하지 않습니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneView에서 실행 중인 전송 모니터링" class="img-large img-center" />

## Folder Compare로 검증

전송이 끝나면 Home 탭에서 **Compare**를 열고 왼쪽에 pCloud, 오른쪽에 Dropbox를 지정합니다. 왼쪽에만 있는 파일과 다른 파일을 필터링해 누락된 항목을 찾은 뒤, Copy right로 빈틈을 채우세요. Job History에서 상태, 크기, 파일 수를 확인해 마이그레이션 기록으로 남길 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="pCloud와 Dropbox 간 Folder Compare" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Remote 탭에서 OAuth 로그인으로 pCloud와 Dropbox 리모트를 추가하세요.
3. pCloud에서 Dropbox로 Copy 작업을 만들고 먼저 Dry Run을 실행하세요.
4. 작업을 실행한 뒤, 이전 계정을 정리하기 전에 Folder Compare로 검증하세요.

단계별로 검증하며 진행하는 마이그레이션은 Dropbox에 필요한 모든 것이 갖춰질 때까지 pCloud 데이터를 그대로 보존합니다.

---

**관련 가이드:**

- [pCloud에서 OneDrive로 마이그레이션](https://rcloneview.com/support/blog/migrate-pcloud-to-onedrive-rcloneview)
- [Dropbox를 pCloud로 동기화](https://rcloneview.com/support/blog/sync-dropbox-to-pcloud-rcloneview)
- [Dry Run — 클라우드 동기화 미리 보기](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)

<CloudSupportGrid />
