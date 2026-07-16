---
slug: migrate-icloud-drive-to-backblaze-b2-rcloneview
title: "iCloud Drive를 Backblaze B2로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - casey
description: "RcloneView를 사용해 iCloud Drive의 파일을 Backblaze B2로 전송하세요. Apple 클라우드 스토리지를 저렴하고 벤더 독립적인 오브젝트 스토리지로 백업하는 단계별 가이드입니다."
keywords:
  - iCloud Drive to Backblaze B2
  - migrate iCloud Drive Backblaze B2
  - iCloud backup Backblaze B2
  - transfer iCloud files to B2
  - iCloud Drive cloud migration RcloneView
  - RcloneView iCloud Backblaze B2
  - cloud to cloud transfer iCloud
  - Backblaze B2 iCloud backup tool
tags:
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# iCloud Drive를 Backblaze B2로 마이그레이션 — RcloneView로 파일 전송하기

> Apple의 iCloud Drive는 기기 간 동기화에 편리하지만, 파일을 Backblaze B2로 복사하면 RcloneView를 통해 전적으로 GUI로 처리되는 비용 효율적이고 벤더 독립적인 백업을 만들 수 있습니다.

수백만 명의 사용자가 Apple 생태계를 통해 iCloud Drive에 사진, 문서, 프로젝트 아카이브를 저장합니다. iCloud는 Apple 기기 전반에서 원활하게 작동하지만, 조직이나 파워 유저는 벤더 다양성, 더 긴 보존 기간, 플랫폼 독립적인 백업 전략을 위해 내구성 있는 오브젝트 스토리지에 별도의 사본을 두어야 하는 경우가 많습니다. Backblaze B2는 S3 호환 오브젝트 스토리지 서비스로 RcloneView와 자연스럽게 연동되며, 수동 다운로드나 스크립팅, 타사 동기화 클라이언트 없이도 iCloud Drive의 콘텐츠를 전송할 수 있게 해줍니다. FREE 라이선스로도 Backblaze B2를 완전한 읽기/쓰기 권한으로 연결할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView에서 iCloud Drive 설정하기

iCloud Drive는 rclone의 iCloud 백엔드를 통해 RcloneView에서 지원되며, rclone v1.69 이상이 필요합니다 — RcloneView에 내장된 rclone 바이너리는 이미 이 요구 사항을 충족하므로 별도 설치가 필요 없습니다. 연결하려면 **Remote** 탭을 열고 **New Remote**를 클릭한 다음, 제공업체 목록에서 iCloud Drive를 선택하세요. Apple ID 자격 증명으로 인증하며, 계정에 2단계 인증이 활성화되어 있다면 프롬프트가 나타날 때 인증 코드를 입력합니다. 저장이 완료되면 Mac에서와 마찬가지로 iCloud 폴더가 탐색기 패널에 표시됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive as a new remote in RcloneView" class="img-large img-center" />

전송 작업을 구성하기 전에 iCloud Drive 구조 — Desktop, Documents 또는 커스텀 폴더 — 를 탐색하여 콘텐츠 범위를 확인하세요.

## 대상으로 Backblaze B2 연결하기

Backblaze B2는 자격 증명 입력을 통해 연결됩니다. **New Remote**에서 Backblaze B2를 선택하고, Backblaze 계정의 App Keys 섹션에서 생성한 **Application Key ID**와 **Application Key**를 입력하세요. 저장한 후에는 RcloneView의 두 번째 탐색기 패널에서 B2 버킷을 탐색할 수 있습니다. iCloud Drive와 Backblaze B2를 나란히 열어두면 파일이 이동하기 전에 소스와 대상을 명확하게 시각적으로 확인할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="iCloud Drive and Backblaze B2 open side by side in RcloneView" class="img-large img-center" />

## 마이그레이션 전송 실행하기

Home 탭에서 **Sync** 마법사를 여세요. iCloud Drive 폴더를 소스로, Backblaze B2 버킷(또는 그 안의 특정 경로)을 대상으로 설정합니다. Advanced Settings 단계에서 **체크섬 검증**을 활성화하면 타임스탬프만이 아니라 파일 해시를 비교합니다 — 이는 데이터 무결성이 가장 중요한 일회성 마이그레이션에서 특히 유용합니다. 첫 번째 전송에서 오래되고 거의 접근하지 않는 파일을 제외하고 싶다면 **최대 파일 age** 필터를 추가해 최근 콘텐츠만 마이그레이션할 수도 있습니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Live transfer monitoring during an iCloud to Backblaze B2 migration in RcloneView" class="img-large img-center" />

실제 전송 전에는 항상 **Dry Run**을 실행하세요. RcloneView는 복사하거나 건너뛸 파일을 정확히 나열해줍니다 — 대규모 iCloud Drive 라이브러리를 마이그레이션할 때 실수로 인한 덮어쓰기나 누락된 폴더를 되돌리는 데 비용이 클 수 있으므로 실용적인 안전 점검이 됩니다.

## Folder Compare로 마이그레이션 검증하기

전송이 완료된 후에는 RcloneView의 **Folder Compare** 기능을 사용해 양쪽이 일치하는지 확인하세요. Compare 화면을 열고 왼쪽에 iCloud Drive, 오른쪽에 B2 버킷을 설정하면, RcloneView가 왼쪽에만 있는 파일, 오른쪽에만 있는 파일, 크기가 일치하지 않는 파일을 표시해줍니다. 동일한 파일만 표시되는 깔끔한 비교 결과는 마이그레이션이 누락 없이 성공했음을 확인해줍니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare verifying iCloud Drive files match Backblaze B2 after migration" class="img-large img-center" />

지속적인 보호를 위해 **PLUS 라이선스**를 사용하면 매주 또는 매일 반복 동기화 작업을 예약하여 새로 추가된 iCloud Drive 콘텐츠를 캡처하고 B2 사본을 자동으로 최신 상태로 유지할 수 있습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Apple ID 자격 증명을 사용해 iCloud Drive를 새 리모트로 추가하세요.
3. Application Key ID와 Application Key를 사용해 Backblaze B2를 리모트로 추가하세요.
4. 동기화 작업을 구성하세요: iCloud Drive를 소스로, B2 버킷을 대상으로 설정한 다음 먼저 **Dry Run**을 실행하세요.
5. **Folder Compare**로 마이그레이션을 검증한 다음, 필요에 따라 반복 백업을 예약하세요.

RcloneView로 iCloud Drive에서 Backblaze B2로 마이그레이션하면 Apple 파일에 보호되고 검증 가능하며 모든 기기에서 접근 가능한, 내구성 있고 플랫폼 독립적인 오브젝트 스토리지 보금자리를 제공합니다.

---

**관련 가이드:**

- [RcloneView로 iCloud Drive 관리하기](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [RcloneView로 Backblaze B2 관리하기](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [RcloneView로 iCloud Drive를 Google Drive로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-icloud-drive-to-google-drive-rcloneview)

<CloudSupportGrid />