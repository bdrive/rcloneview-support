---
slug: migrate-box-to-wasabi-rcloneview
title: "Box에서 Wasabi로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - casey
description: "폴더 비교, 동기화 작업, 드라이런을 활용해 RcloneView로 Box의 파일을 Wasabi 핫 클라우드 스토리지로 안전하게 이전하세요."
keywords:
  - migrate Box to Wasabi
  - Box to Wasabi transfer
  - Box cloud migration
  - Wasabi hot storage
  - RcloneView Box Wasabi
  - cloud to cloud transfer tool
  - Box storage backup
  - Wasabi sync software
  - move files between clouds
  - Box S3 migration
tags:
  - RcloneView
  - box
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box에서 Wasabi로 마이그레이션 — RcloneView로 파일 전송하기

> Box 계정의 파일과 폴더를 로컬 디스크를 거치지 않고 곧바로 Wasabi의 S3 호환 핫 스토리지로 옮겨보세요.

문서 협업을 위해 Box를 도입한 팀도 시간이 지나면 장기 보관용으로는 한계를 느끼는 경우가 있으며, 이때 Wasabi의 S3 호환 오브젝트 스토리지가 아카이브, 미디어 라이브러리, 백업 세트의 다음 저장소가 됩니다. RcloneView는 두 서비스를 같은 창에서 연결할 수 있어, 로컬 머신을 거치는 느린 다운로드 후 업로드 과정 대신 클라우드 간 직접 전송으로 마이그레이션이 이루어집니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Box와 Wasabi를 리모트로 연결하기

Box는 OAuth 방식으로 추가합니다 — Remote 탭에서 New Remote를 클릭하면 계정 로그인을 위한 브라우저 창이 열리고, 인증이 완료되면 RcloneView가 자동으로 연결됩니다. 전사 차원의 뷰가 필요한 비즈니스 계정은 설정 중에 `box_sub_type = enterprise`를 지정할 수 있습니다. Wasabi는 S3 호환 리모트 타입으로 추가하며, Access Key, Secret Key, 그리고 대상 리전의 Wasabi 엔드포인트를 사용합니다.

두 리모트가 모두 설정되면 Explorer에 각각 별도의 탭으로 표시되며, 한 패널에는 Box를, 다른 패널에는 Wasabi를 열어 파일을 옮기기 전에 두 파일 트리를 나란히 확인할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and Wasabi remotes in RcloneView" class="img-large img-center" />

## 전송 전 비교하기

Folder Compare는 Box 소스 폴더와 Wasabi 대상 폴더를 나란히 배치하여 각 쪽에서 누락된 항목, 이미 동일한 항목, 크기가 다른 항목을 표시합니다. 처음 마이그레이션할 때는 대량 동기화를 실행하기 전에 Box 라이브러리 전체가 빠짐없이 반영되었는지 확인하는 가장 빠른 방법이며, 전송이 끝난 후에는 검증 단계로도 활용됩니다 — 복사 후에도 "left-only"로 표시된 파일은 다시 살펴봐야 합니다.

Folder Compare 안에서 복사를 실행하면 대상에 아직 없거나 크기가 다른 파일만 처리되므로, 마이그레이션이 중간에 중단되었더라도 이미 Wasabi로 옮겨진 파일을 다시 복사하지 않고 재개할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Box and Wasabi folders before migration" class="img-large img-center" />

## Sync로 마이그레이션 실행하기

대량 전송의 경우, Sync 마법사의 4단계에서 소스/대상 선택, 전송 동시성, 필터링을 처리합니다 — 이는 Box의 임시 협업 파일처럼 Wasabi로 옮기고 싶지 않은 파일 유형을 제외할 때 유용합니다. Dry Run은 실제로 아무것도 이동하기 전에 정확히 어떤 파일이 복사될지 미리 보여주는데, 수년간 쌓인 Box 라이브러리에서 실수를 되돌리는 비용이 클 때 특히 중요합니다.

RcloneView는 Windows, macOS, Linux에서 하나의 창으로 90개 이상의 프로바이더를 마운트하고 동기화할 수 있으므로, 여기서 Box와 Wasabi에 사용한 워크플로를 새로운 도구를 배울 필요 없이 다른 리모트 조합에도 그대로 적용할 수 있습니다. 동기화 작업이 Job Manager에 저장되면 상태, 전송된 크기, 소요 시간 같은 이력이 나중에 참고할 수 있도록 계속 남아 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Running a sync job from Box to Wasabi in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. Remote Manager에서 OAuth 로그인으로 Box를, S3 호환 자격 증명으로 Wasabi를 추가합니다.
3. Box 소스와 Wasabi 대상 사이에서 Folder Compare를 실행해 전송 전에 범위를 확인합니다.
4. 먼저 Dry Run을 활성화한 상태로 Sync 작업을 생성한 뒤, 실제로 실행하고 Transferring 탭에서 진행 상황을 추적합니다.

두 리모트를 같은 탐색기 안에서 볼 수 있으므로, Box 라이브러리를 Wasabi로 옮기는 작업이 여러 도구를 오가는 번거로운 과정이 아니라 하나의 안내된 워크플로가 됩니다.

---

**관련 가이드:**

- [Box 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Wasabi 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Box에서 Google Drive로 마이그레이션 — RcloneView로 파일 전송하기](https://rcloneview.com/support/blog/migrate-box-to-google-drive-rcloneview)

<CloudSupportGrid />
