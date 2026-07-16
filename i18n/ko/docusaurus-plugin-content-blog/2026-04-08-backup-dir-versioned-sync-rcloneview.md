---
slug: backup-dir-versioned-sync-rcloneview
title: "RcloneView로 버전 관리 클라우드 동기화를 위한 Backup Dir 사용하기"
authors:
  - tayson
description: "RcloneView에서 --backup-dir을 사용하여 버전 관리 클라우드 동기화를 만드는 방법을 알아보세요. 덮어쓰인 파일을 백업 디렉터리로 이동시켜 이전 버전을 안전하게 보관합니다."
keywords:
  - rcloneview
  - backup-dir
  - versioned sync
  - cloud backup versioning
  - rclone backup directory
  - safe cloud sync
  - file version history
  - cloud file recovery
  - sync with backup
  - rclone suffix
tags:
  - RcloneView
  - feature
  - cloud-sync
  - backup
  - guide
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 버전 관리 클라우드 동기화를 위한 Backup Dir 사용하기

> 동기화 도중 실수로 파일을 덮어쓰거나 삭제하는 것은 모든 클라우드 사용자에게 악몽과도 같습니다. **RcloneView**는 `--backup-dir`을 기본 지원하여 버전 관리 동기화를 손쉽게 만들어주며, 이전 버전을 다시는 잃어버리지 않도록 해줍니다.

일반적인 동기화 작업을 실행하면, 소스와 다른 대상의 파일은 덮어쓰이고, 소스에 더 이상 존재하지 않는 파일은 삭제됩니다. 이는 효율적이지만 동시에 파괴적이기도 합니다. 소스의 파일이 손상되었거나, 여전히 필요한 파일을 실수로 삭제한 경우, 그 변경 사항은 되돌릴 방법 없이 대상에도 그대로 전파됩니다.

`--backup-dir` 플래그는 이 문제를 우아하게 해결합니다. 덮어쓰이거나 삭제될 파일을 영구적으로 제거하는 대신, rclone은 먼저 이를 별도의 백업 디렉터리로 이동시킵니다. 이를 통해 손실될 뻔한 모든 파일이 사용자가 지정한 위치에 보존되는 완전한 안전망을 얻게 됩니다.

RcloneView에서는 사용자 지정 플래그 인터페이스를 통해 `--backup-dir`을 설정할 수 있어, 명령줄 문법을 외우지 않고도 버전 관리 동기화의 모든 기능을 활용할 수 있습니다. 날짜가 표시된 버전을 위한 `--suffix`와 결합하면, 기존 클라우드 스토리지만으로 가벼운 파일 버전 관리 시스템을 구축할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## --backup-dir이 실제로 하는 일

동기화 작업 중 대상에서 덮어쓰거나 삭제해야 하는 파일이 발견되면, `--backup-dir`이 해당 동작을 가로챕니다. 파일을 파괴하는 대신, rclone은 지정된 백업 디렉터리로 파일을 이동시키며 상대 경로 구조를 그대로 유지합니다.

예를 들어, 동기화가 대상의 `documents/report.docx`를 덮어쓰는 경우, 이전 버전은 `backup/documents/report.docx`로 이동됩니다. 디렉터리 계층 구조가 유지되므로, 나중에 특정 파일을 쉽게 찾아 복원할 수 있습니다.

이는 다음 두 가지 시나리오에 적용됩니다:
- **덮어쓰인 파일**: 소스 파일이 더 최신이거나 다른 경우, 새 버전으로 교체되기 전에 이전 대상 사본이 백업 디렉터리로 이동됩니다.
- **삭제된 파일**: 파일이 대상에는 존재하지만 소스에는 없는 경우, 영구적으로 제거되는 대신 백업 디렉터리로 이동됩니다.

## 버전 관리 동기화가 필수적인 이유

일반적인 동기화 작업은 항상 대상이 소스를 정확히 미러링하기를 원한다고 가정합니다. 이는 문제가 생기기 전까지는 잘 작동합니다. 다음과 같은 흔한 시나리오를 생각해 보세요:

- 소스의 파일이 손상되거나 랜섬웨어에 감염되고, 그 손상이 눈치채기 전에 백업으로 전파됩니다.
- 실수로 폴더를 삭제했는데, 다음 예약된 동기화가 대상에서도 이를 제거합니다.
- 동료가 공유 문서를 덮어쓰고, 이전 버전이 양쪽 위치 모두에서 사라집니다.

`--backup-dir`을 사용하면 이러한 모든 상황을 복구할 수 있습니다. 이전 버전은 백업 디렉터리에 안전하게 보관되며, 이후의 동기화 작업으로부터 영향을 받지 않습니다.

## RcloneView에서 --backup-dir 설정하기

RcloneView는 작업 설정에서 사용자 지정 rclone 플래그를 지원합니다. 버전 관리 동기화를 설정하는 방법은 다음과 같습니다:

1. **작업 관리자(Job Manager)**를 열고 새 동기화 작업을 만들거나 기존 작업을 편집합니다.
2. 평소처럼 소스 및 대상 리모트를 설정합니다.
3. **사용자 지정 플래그(Custom Flags)** 섹션에서 다음을 추가합니다: `--backup-dir remote:backup/2026-04-08`
4. 저장하고 작업을 실행합니다.

백업 디렉터리는 대상과 동일한 리모트에 둘 수도 있고, 완전히 다른 리모트에 둘 수도 있습니다. `backup/2026-04-08`처럼 날짜 기반 경로를 사용하면 각 날짜에 밀려난 파일들을 각자의 폴더에 정리된 상태로 유지할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

## --backup-dir과 --suffix를 결합하여 날짜가 표시된 버전 만들기

더 세밀한 버전 관리를 위해, `--backup-dir`과 `--suffix`를 결합하여 백업된 각 파일에 타임스탬프를 추가할 수 있습니다. 이는 동일한 파일이 여러 번 수정되고 동기화될 때 파일명 충돌을 방지합니다.

사용자 지정 플래그 섹션에 두 플래그를 모두 추가합니다:

```
--backup-dir remote:backup --suffix .2026-04-08
```

이 설정에서 `report.docx`가 덮어쓰이면, 이전 버전은 `backup/report.docx.2026-04-08`로 저장됩니다. 다음 날 갱신된 접미사로 다시 동기화를 실행하면, 충돌 없이 날짜별 버전 이력이 쌓이게 됩니다.

일정에 따라 실행되는 자동화된 작업의 경우, 실행 날짜에 연동된 동적 접미사를 사용하여 각 실행마다 고유한 이름의 백업이 생성되도록 할 수 있습니다.

## 실전 예시

**버전 보존이 포함된 일일 백업:**
매일 밤 Google Drive를 Backblaze B2로 동기화하며, 그날 밀려난 파일들을 날짜별 백업 폴더에 저장합니다. 30일이 지나면 오래된 백업 디렉터리를 정리하여 스토리지 비용을 관리할 수 있습니다.

**팀 프로젝트 보호:**
공유 Dropbox 폴더를 S3로 동기화하면서, `--backup-dir`을 사용해 팀원이 삭제하거나 덮어쓴 파일을 포착합니다. 이는 클라우드 제공업체의 프리미엄 버전 관리 기능 없이도 가벼운 감사 추적 역할을 합니다.

**마이그레이션 안전망:**
한 클라우드에서 다른 클라우드로 마이그레이션할 때, 초기 동기화 중 `--backup-dir`을 사용하여 덮어쓰일 대상 파일을 포착합니다. 마이그레이션이 계획대로 진행되지 않을 경우, 완전한 롤백 지점을 확보할 수 있습니다.

## 복구 워크플로

RcloneView에서 백업 디렉터리로부터 파일을 복원하는 것은 간단합니다:

1. **리모트 탐색기(Remote Explorer)**를 열고 백업 디렉터리로 이동합니다.
2. 디렉터리 구조를 탐색하여 필요한 파일을 찾습니다. 원래 폴더 계층 구조가 그대로 유지됩니다.
3. 드래그 앤 드롭 또는 복사 작업을 사용하여 파일을 원래 위치로 되돌립니다.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

백업 디렉터리는 리모트 상의 일반 폴더일 뿐이므로, 이를 탐색하거나 파일을 다운로드하거나, 심지어 보관용으로 다른 위치에 동기화할 수도 있습니다.

## 시간 경과에 따른 백업 스토리지 관리

버전 관리된 백업은 시간이 지남에 따라 누적되므로, 보존 전략을 세우는 것이 중요합니다. 다음은 몇 가지 접근 방식입니다:

- **날짜 기반 폴더**: 날짜가 포함된 백업 디렉터리 경로(예: `backup/2026-04-08`)를 사용하고, 보존 기간보다 오래된 폴더를 주기적으로 삭제합니다.
- **접미사 기반 정리**: `--suffix`를 사용할 때, 오래된 날짜 접미사가 붙은 파일을 식별하여 제거할 수 있습니다.
- **별도의 저비용 스토리지**: 백업 디렉터리를 Wasabi나 Backblaze B2 같은 저렴한 오브젝트 스토리지 제공업체로 지정하면, 장기 보존 비용을 최소화할 수 있습니다.

RcloneView의 탐색기를 사용하면 백업 디렉터리를 탐색하고, 공간을 다시 확보하고 싶을 때 오래된 버전을 쉽게 삭제할 수 있습니다.

## --backup-dir 모범 사례

- `--backup-dir` 설정을 실제로 적용하기 전에 항상 드라이런(dry run)으로 먼저 테스트하여 파일이 올바른 위치로 전달되는지 확인하세요.
- 가능하면 백업 디렉터리를 대상과 동일한 리모트에 두세요. 같은 리모트 내의 이동은 즉시 이루어지며 대역폭을 소비하지 않습니다.
- 자동화된 정리 스크립트가 오래된 버전을 쉽게 식별할 수 있도록 백업 경로에 일관된 명명 규칙을 사용하세요.
- 중요한 데이터의 경우 다른 리모트에도 `--backup-dir`을 결합하여, 빠른 복구가 가능한 로컬 백업과 지리적으로 분리된 아카이브를 동시에 확보하세요.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. 소스 및 대상 리모트를 설정한 동기화 작업을 만듭니다.
3. 사용자 지정 플래그 필드에 `--backup-dir remote:backup/YYYY-MM-DD`를 추가하여 버전 관리 동기화를 활성화합니다.
4. 먼저 드라이런을 실행하여 설정을 확인한 다음, 작업을 실행합니다.

`--backup-dir`을 설정하면, 모든 동기화 작업이 안전하고 되돌릴 수 있는 프로세스가 됩니다. 일방향 동기화의 효율성과 함께, 그 무엇도 영구히 사라지지 않는다는 안심을 얻을 수 있습니다.

---

**관련 가이드:**

- [리모트 스토리지 탐색 및 관리](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [동기화 작업 만들기](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [작업 실행 및 관리](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)

<CloudSupportGrid />
