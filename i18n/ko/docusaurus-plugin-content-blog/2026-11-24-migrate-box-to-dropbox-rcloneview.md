---
slug: migrate-box-to-dropbox-rcloneview
title: "Box에서 Dropbox로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - tayson
description: "RcloneView로 Box를 Dropbox로 마이그레이션하세요. OAuth로 두 리모트를 연결하고, Dry Run으로 미리 확인한 뒤, 클라우드 간 폴더를 복사하고 Folder Compare로 검증합니다."
keywords:
  - Box Dropbox 마이그레이션
  - Box에서 Dropbox로 이전
  - Box에서 Dropbox로 파일 전송
  - Box Dropbox 클라우드 간 전송
  - Box 폴더를 Dropbox로 옮기기
  - Dropbox for Business 마이그레이션
  - RcloneView Box Dropbox
  - rclone Box Dropbox GUI
  - 클라우드 마이그레이션 도구
tags:
  - RcloneView
  - box
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box에서 Dropbox로 마이그레이션 — RcloneView로 파일 전송하기

> Box 폴더 트리를 클라우드 간에 직접 Dropbox로 옮기고, 변경 전에 범위를 미리 확인하고, 결과를 나란히 비교해 확인하세요.

팀이 Box에서 Dropbox로 옮기는 이유는 다양합니다. 합병, 새 고객사의 요구, 혹은 이미 Dropbox를 쓰고 있는 크리에이티브 부서 때문일 수도 있습니다. 어려운 부분은 수년간 쌓인 공유 폴더를 아무것도 잃지 않고 옮기는 일입니다. RcloneView는 두 서비스에 리모트로 연결하고 rclone을 통해 복사를 실행하므로, 모든 파일을 노트북에 먼저 다운로드하지 않고 하나의 창에서 마이그레이션을 계획·실행·검증할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Box와 Dropbox를 리모트로 연결하기

두 서비스 모두 OAuth를 사용하므로 API 키를 복사할 필요가 없습니다. **Remote tab > New Remote**를 열고 Box를 선택한 뒤, 브라우저가 열리면 로그인하세요. Dropbox도 같은 방법으로 추가합니다. 어느 쪽이든 비즈니스 계정이라면 설정 중에 해당 옵션을 지정하세요. Box for Business는 `box_sub_type = enterprise`, Dropbox for Business는 `dropbox_business = true`입니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and Dropbox remotes in RcloneView" class="img-large img-center" />

왼쪽 Explorer 패널에 Box를, 오른쪽 패널에 Dropbox를 여세요. 둘을 나란히 탐색하면 작업을 만들기 전에 예상한 폴더가 보이는지, 대상 폴더가 존재하는지 확인할 수 있습니다. Box 폴더를 마우스 오른쪽 버튼으로 클릭하고 **Get Size**를 선택하면 옮길 데이터 양을 가늠할 수 있습니다.

## Copy 작업을 만들고 미리 확인하기

마이그레이션에는 **Copy** 작업이 신중한 선택입니다. Dropbox에 파일을 추가만 하고 대상에서 아무것도 삭제하지 않기 때문입니다. **Home tab > Sync** 또는 Job Manager에서 작업을 만들고, Box 폴더를 소스로, Dropbox 폴더를 대상으로 선택한 뒤 `box-marketing-to-dropbox`처럼 알아보기 쉬운 이름을 붙이세요.

Advanced Settings에서는 이 조합의 경우 체크섬을 끈 상태로 두세요. Box와 Dropbox는 서로 다른 해시 유형을 사용하므로, rclone은 대신 크기와 수정 시간으로 파일을 비교합니다. Dropbox에서 속도 제한이 걸리기 시작하면 파일 전송 수를 늘리기보다 줄이세요. Filtering 단계에서는 미리 정의된 **Box Docs** 필터로 Box 고유 문서를 따로 처리할 수 있고, 사용자 지정 규칙으로 정리하기로 한 폴더를 건너뛸 수 있습니다.

먼저 **Dry Run**을 실행하세요. 실제로 전송하지 않고 복사될 모든 파일을 나열해 주므로, 에이전시가 60,000개의 고객 자산을 옮기면서 이해관계자와 범위를 확인하고 싶을 때 유용합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Box to Dropbox in RcloneView" class="img-large img-center" />

## 실행, 모니터링, 감사 기록 남기기

작업을 시작하고 **Transferring** 탭에서 진행률, 속도, 파일 수를 확인하세요. 대규모 마이그레이션을 최상위 폴더별로 작업을 나누면 하나의 오류가 전체를 막지 않습니다. 모든 실행은 상태, 전체 크기, 파일 수와 함께 **Job History**에 기록되며, 마이그레이션을 승인하는 담당자를 위한 기록으로도 활용됩니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing Box to Dropbox migration runs" class="img-large img-center" />

## Folder Compare로 검증하기

작업이 끝나면 Box 소스와 Dropbox 대상에 대해 **Folder Compare**를 여세요. 왼쪽에만 있는 파일로 필터링해 도착하지 않은 파일을 찾고, Copy right로 빠진 부분을 채우세요. 아직 Box에 저장하는 사람이 있는 전환 기간에는 최종 전환 전에 같은 Copy 작업을 다시 실행해 새 파일을 가져오세요.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare verifying Box and Dropbox contents" class="img-large img-center" />

## 시작하기

마운트 전용 도구와 달리, RcloneView는 동기화와 폴더 비교도 지원하며 FREE License에서도 사용할 수 있습니다.

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 필요하면 비즈니스 옵션을 켜고 OAuth로 Box와 Dropbox를 리모트로 추가하세요.
3. Box에서 Dropbox로 가는 Copy 작업을 만들고 Dry Run으로 검토하세요.
4. 작업을 실행한 뒤 Folder Compare와 Job History에서 결과를 확인하세요.

미리 확인하고 검증한 마이그레이션이라면, 팀은 어떤 폴더가 누락되었는지 걱정하지 않고 Dropbox로 옮겨 갈 수 있습니다.

---

**관련 가이드:**

- [Box 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Dropbox 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [RcloneView로 Dropbox를 Box에 동기화하기](https://rcloneview.com/support/blog/sync-dropbox-to-box-rcloneview)

<CloudSupportGrid />
