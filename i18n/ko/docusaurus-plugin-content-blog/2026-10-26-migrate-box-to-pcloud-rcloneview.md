---
slug: migrate-box-to-pcloud-rcloneview
title: "Box에서 pCloud로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - jay
description: "RcloneView로 Box를 pCloud로 마이그레이션하세요. 두 리모트를 연결하고, Dry Run을 실행하고, 클라우드 간 복사를 수행한 뒤 Folder Compare로 결과를 확인합니다."
keywords:
  - Box에서 pCloud로 마이그레이션
  - Box to pCloud 전송
  - Box 파일을 pCloud로 이동
  - Box pCloud 마이그레이션
  - RcloneView 클라우드 간 전송
  - Box to pCloud 동기화
  - rclone GUI
  - 클라우드 마이그레이션 도구
  - 클라우드 전송 검증
  - Box 대체 스토리지
tags:
  - RcloneView
  - box
  - pcloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box에서 pCloud로 마이그레이션 — RcloneView로 파일 전송하기

> 복사 전에 미리보기를 확인하고 복사 후에는 비교까지 거치면서, Box 폴더를 pCloud로 한 번에 안전하게 옮기세요.

Box 워크스페이스가 더 이상 맞지 않게 된 팀이나, 개인 스토리지를 직접 관리하고 싶은 프리랜서는 같은 문제를 겪곤 합니다. 중첩된 프로젝트 폴더에 들어 있는 수천 개의 파일을 새 계정으로 온전하게 옮겨야 하는 일이죠. 브라우저로 다운로드한 뒤 다시 업로드하는 방식은 느리고 불안정합니다. RcloneView는 Box와 pCloud를 나란히 연결해 둘 사이에서 직접 전송하므로 로컬 디스크에 아무것도 임시 저장할 필요가 없습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Box와 pCloud를 리모트로 연결하기

RcloneView에서 두 서비스 모두 브라우저 기반 OAuth 로그인을 사용합니다. **Remote > New Remote**를 열고 Box를 선택한 뒤, 열리는 브라우저 창에서 접근을 승인하세요. pCloud도 같은 방식으로 반복합니다. 파일이 Box Business 계정에 있다면 엔터프라이즈 하위 유형 설정(`box_sub_type = enterprise`)이 필요하며, 개인 계정에는 필요하지 않습니다.

RcloneView는 Windows, macOS, Linux에서 하나의 창으로 90개 이상의 제공업체를 마운트하고 동기화할 수 있으므로, 두 리모트가 같은 Explorer의 탭으로 나란히 표시됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 Box와 pCloud를 새 리모트로 추가" class="img-large img-center" />

## 복사 전에 양쪽 살펴보기

한쪽 Explorer 패널에는 Box를, 다른 쪽에는 pCloud를 여세요. Folder Tree와 Get Size로 옮길 데이터의 양을 가늠하고, 전체를 옮길지 일부만 옮길지 결정합니다. 서로 다른 두 리모트 사이에서 드래그하면 **복사**가 수행되므로, Box를 정리할 준비가 될 때까지 원본은 그대로 유지됩니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="클라우드 간 전송을 위해 Box와 pCloud를 나란히 연 화면" class="img-large img-center" />

## Dry Run으로 Copy 작업 만들기

파일이 몇 개를 넘는다면 드래그 대신 작업(job)을 만드세요. Sync 마법사에서 Box를 소스로, pCloud 폴더를 대상으로 지정한 다음 **Copy** 작업 유형을 선택하면 대상에서 아무것도 삭제되지 않습니다. 고급 설정에서는 체크섬 비교를 활성화하고, Box가 요청을 제한하기 시작하면 equality checker 수를 낮게 유지하세요. 필터링에서는 Max file size나 `.git/` 같은 제외 규칙으로 필요 없는 파일을 건너뛸 수 있습니다.

먼저 **Dry Run**을 실행하세요. 복사될 파일과 삭제될 파일이 목록으로 표시되므로, 잘못 선택한 폴더를 데이터가 이동하기 전에 발견할 수 있습니다. 미리 정의된 **Box Docs** 필터를 사용하면 Box의 클라우드 전용 문서를 복사 대상에서 제외할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView에서 Box to pCloud Copy 작업 실행" class="img-large img-center" />

## Folder Compare로 검증하기

작업이 끝나면 왼쪽에 Box, 오른쪽에 pCloud를 두고 **Compare**를 여세요. 왼쪽에만 있는 파일과 서로 다른 파일을 필터링하고, 여전히 목록에 남아 있는 항목은 한 번 더 처리해야 합니다. Job History에는 실행마다 상태, 크기, 속도, 파일 수가 기록되어 마이그레이션이 완료되었음을 보여 주는 증거로 활용할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Box와 pCloud의 차이를 보여 주는 Folder Compare" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **Remote > New Remote**에서 Box와 pCloud를 추가하고 OAuth로 로그인하세요.
3. Box에서 pCloud로 Copy 작업을 만들고 Dry Run을 실행하세요.
4. 작업을 실행한 뒤, Box를 정리하기 전에 Folder Compare로 결과를 확인하세요.

복사 후 검증하는 단계별 마이그레이션은 pCloud에 필요한 모든 것이 담길 때까지 Box 데이터를 안전하게 지켜 줍니다.

---

**관련 가이드:**

- [Box에서 Backblaze B2로 마이그레이션](https://rcloneview.com/support/blog/migrate-box-to-backblaze-b2-rcloneview)
- [Box에서 Google Drive로 마이그레이션](https://rcloneview.com/support/blog/migrate-box-to-google-drive-rcloneview)
- [pCloud 스토리지 관리](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
