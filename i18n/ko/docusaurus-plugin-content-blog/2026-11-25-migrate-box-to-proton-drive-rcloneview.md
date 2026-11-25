---
slug: migrate-box-to-proton-drive-rcloneview
title: "Box에서 Proton Drive로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - casey
description: "RcloneView로 Box의 파일을 Proton Drive로 옮기세요. 두 클라우드를 연결하고, Dry Run으로 미리 보고, 폴더를 복사한 뒤 Folder Compare로 마이그레이션을 검증합니다."
keywords:
  - box에서 proton drive로 마이그레이션
  - box proton drive 전송
  - box 파일을 proton drive로 이동
  - box 마이그레이션 도구
  - proton drive 마이그레이션
  - 클라우드 간 마이그레이션
  - 암호화 클라우드 스토리지 마이그레이션
  - RcloneView box
  - RcloneView proton drive
tags:
  - RcloneView
  - box
  - proton-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box에서 Proton Drive로 마이그레이션 — RcloneView로 파일 전송하기

> 먼저 노트북에 모든 것을 내려받지 않고도 Box 폴더를 Proton Drive의 종단 간 암호화 스토리지로 옮기세요.

팀과 프리랜서는 협업 기능 때문에 Box로 시작했다가, 개인정보 보호에 중점을 둔 Proton Drive로 민감한 보관 자료를 옮기는 경우가 많습니다. 이를 수작업으로 하려면 Box에서 수 기가바이트를 내려받아 브라우저로 다시 업로드해야 합니다. RcloneView는 두 서비스를 한 창에서 연결하므로 폴더를 직접 복사하고, 결과를 확인하고, 나중에 추가되는 파일을 위한 반복 가능한 작업을 유지할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Box와 Proton Drive 연결하기

**Remote tab > New Remote**를 열고 먼저 Box를 추가하세요. Box는 OAuth를 사용하므로 브라우저 창이 열리면 로그인하고 접근을 승인하면 됩니다. API 키를 복사할 필요가 없습니다. 조직에서 Box for Business를 사용한다면 리모트 설정에서 `box_sub_type = enterprise`를 지정해 RcloneView가 엔터프라이즈 폴더를 볼 수 있게 하세요.

다음으로 Proton 이메일과 비밀번호, 그리고 계정에 2FA가 활성화되어 있다면 2FA 코드로 Proton Drive를 추가하세요. Proton Drive 지원에는 rclone v1.69 이상이 필요합니다. RcloneView에 포함된 임베디드 rclone은 이 조건을 충족하며, 사용 중인 버전은 하단 바에 표시됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 Box와 Proton Drive 리모트 추가" class="img-large img-center" />

## 전송 계획 세우기

왼쪽 Explorer 패널에서 Box를, 오른쪽에서 Proton Drive를 여세요. 최상위 Box 폴더에 **Get Size**를 사용해 옮길 데이터 양을 확인하고, 유지하려는 구조를 반영한 대상 폴더 구조를 Proton Drive에 만드세요.

Box Notes 및 기타 Box 고유 문서는 일반 파일이 아닙니다. 동기화 마법사의 **Filtering Settings**에서 사전 정의된 **Box Docs** 필터를 사용하면 전송 도중에 발견하는 대신 이들을 의도적으로 처리할 수 있습니다. 해당 형식에서 필요한 내용은 마이그레이션 전에 Box 안에서 내보내 두세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView에서 클라우드 간 전송을 위해 나란히 열린 Box와 Proton Drive" class="img-large img-center" />

## 마이그레이션 실행하기

소수의 폴더라면 Box 패널에서 Proton Drive 패널로 드래그하세요. 서로 다른 리모트 간 드래그는 데이터를 복사합니다. 전체 마이그레이션이라면 Box를 원본, Proton Drive를 대상으로 하는 **Sync** 작업을 만드세요. Proton Drive는 클라이언트 측에서 파일을 암호화하므로 적당한 동시성으로 시작하는 것이 좋습니다. 오류가 보이면 Advanced Settings에서 파일 전송 수를 낮출 수 있습니다.

항상 먼저 **Dry Run**을 클릭하세요. 복사될 항목과 삭제될 항목을 나열해, 실수로 미러링되어 기존 Proton Drive 콘텐츠가 손상되는 것을 막아 줍니다. 그런 다음 작업을 실행하고 **Transferring** 탭에서 진행률, 속도, 파일 수를 확인하세요.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneView Transferring 탭에서 Box에서 Proton Drive로의 전송 모니터링" class="img-large img-center" />

## Box를 해지하기 전에 검증하기

작업이 끝나면 한쪽에 Box 폴더, 다른 쪽에 Proton Drive 폴더를 두고 **Compare**를 여세요. 왼쪽에만 있는 파일은 넘어가지 못한 항목을 보여 주며, Copy right로 빈틈을 채울 수 있습니다. Job History는 각 실행의 상태, 크기, 파일 수를 기록으로 남깁니다.

RcloneView는 Windows, macOS, Linux에서 한 창으로 90개 이상의 제공업체를 마운트하고 동기화하므로, 다음 이전에도 같은 설정을 그대로 쓸 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="완료된 Box에서 Proton Drive로의 마이그레이션을 확인하는 Job History" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 브라우저 로그인으로 Box를, 이메일·비밀번호·선택적 2FA로 Proton Drive를 추가하세요.
3. Box에서 Proton Drive로 가는 Sync 작업을 만들고 Dry Run으로 미리 확인하세요.
4. 작업을 실행한 뒤 Box 계정을 닫기 전에 Folder Compare로 결과를 확인하세요.

신중하게 검증한 마이그레이션으로, 빠진 것 없이 암호화 스토리지로 안심하고 이전할 수 있습니다.

---

**관련 가이드:**

- [Box 스토리지 관리 — RcloneView로 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Proton Drive 관리 — RcloneView로 클라우드 동기화](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [RcloneView로 Dropbox에서 Proton Drive로 마이그레이션](https://rcloneview.com/support/blog/migrate-dropbox-to-proton-drive-rcloneview)

<CloudSupportGrid />
