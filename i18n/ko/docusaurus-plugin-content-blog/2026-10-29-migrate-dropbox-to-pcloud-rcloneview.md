---
slug: migrate-dropbox-to-pcloud-rcloneview
title: "Dropbox를 pCloud로 마이그레이션 — RcloneView로 파일 전송"
authors:
  - robin
description: "RcloneView로 Dropbox의 파일을 pCloud로 옮기세요: 두 리모트를 연결하고, Dry Run을 실행하고, 클라우드 간 복사 후 Folder Compare로 확인합니다."
keywords:
  - dropbox를 pcloud로 마이그레이션
  - dropbox pcloud 전송
  - dropbox 파일을 pcloud로 이동
  - dropbox pcloud 마이그레이션
  - 클라우드 간 전송
  - rcloneview dropbox
  - rcloneview pcloud
  - dropbox에서 pcloud로 전환
  - dropbox 데이터 전송
tags:
  - RcloneView
  - dropbox
  - pcloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Dropbox를 pCloud로 마이그레이션 — RcloneView로 파일 전송

> 수동으로 다운로드 후 업로드하는 대신, Dropbox 계정을 pCloud로 통제되고 검증 가능한 한 번의 과정으로 옮기세요.

제공업체를 바꾸려면 보통 수 기가바이트를 노트북으로 내려받은 뒤 다시 올려야 합니다. RcloneView는 이를 피할 수 있습니다. Dropbox와 pCloud를 나란히 연결하고 rclone을 통해 클라우드 간 전송을 실행합니다. RcloneView는 Windows, macOS, Linux에서 하나의 창으로 90개 이상의 제공업체를 마운트하고 동기화합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Dropbox와 pCloud 연결하기

두 서비스 모두 RcloneView에서 브라우저 기반 OAuth 로그인을 사용하므로 붙여 넣을 API 키가 없습니다. Remote 탭을 열고 **New Remote**를 클릭한 다음 Dropbox를 선택하고, 열리는 브라우저 창에서 접근을 승인하세요. pCloud도 같은 방식으로 반복합니다. 팀 계정을 마이그레이션하는 경우 Dropbox for Business에는 `dropbox_business = true` 설정이 필요합니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 새 Dropbox 및 pCloud 리모트 추가" class="img-large img-center" />

두 리모트가 만들어지면 두 개의 Explorer 패널에서 각각 여세요. Dropbox 폴더 트리와 pCloud 대상 폴더를 나란히 보면 전체를 옮길지 일부 폴더만 옮길지 쉽게 정할 수 있습니다.

## 실행 전에 복사 계획 세우기

첫 마이그레이션에는 **Copy** 작업을 사용하세요. 소스에서 아무것도 삭제하지 않기 때문입니다. 4단계 작업 마법사에서 Dropbox를 소스로, 전용 pCloud 폴더를 대상으로 선택합니다. Advanced Settings에서는 대용량 사진이나 문서 라이브러리를 위해 파일 전송 수를 늘릴 수 있고, 해시와 크기로 검증하려면 체크섬 비교를 활성화할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView에서 Dropbox에서 pCloud로 클라우드 간 전송" class="img-large img-center" />

필터링도 도움이 됩니다. 최대 파일 크기를 설정하거나 `.git/` 같은 제외 패턴을 지정하면 임시 파일과 빌드 폴더가 나머지 파일과 함께 옮겨지지 않습니다. 먼저 **Dry Run**을 실행하세요. 두 계정을 건드리지 않고 복사될 파일 목록을 보여 줍니다.

## 실행, 모니터링, 검증

작업을 시작하고 Transferring 탭에서 진행률, 속도, 파일 수를 확인하세요. Dropbox는 API 속도 제한을 적용하므로 대용량 전송은 때때로 느려질 수 있습니다. RcloneView는 동기화를 포기하지 않고 재시도합니다(기본 3회).

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneView에서 실행 중인 전송 모니터링" class="img-large img-center" />

작업이 끝나면 Dropbox와 pCloud 폴더에서 **Compare**를 여세요. 왼쪽에만 있는 파일은 도착하지 않은 항목이며, "different" 파일은 크기가 다른 파일입니다. 누락된 파일은 클릭 한 번으로 복사하고, Job History에서 모든 실행의 상태, 총 크기, 파일 수를 확인하세요.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Dropbox와 pCloud의 차이를 보여 주는 Folder Compare" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **New Remote**로 Dropbox와 pCloud를 리모트로 추가하세요.
3. Dropbox를 소스로 하는 Copy 작업을 만들고 Dry Run을 실행하세요.
4. 작업을 실행한 뒤, 기존 계정을 정리하기 전에 Folder Compare로 확인하세요.

Compare에서 왼쪽에만 있는 파일이 없다고 나올 때까지 Dropbox를 그대로 두면, 원본이 대비책으로 남아 있습니다.

---

**관련 가이드:**

- [Manage Dropbox Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Manage pCloud Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Migrate pCloud to Google Drive — Transfer Files with RcloneView](https://rcloneview.com/support/blog/migrate-pcloud-to-google-drive-rcloneview)

<CloudSupportGrid />
