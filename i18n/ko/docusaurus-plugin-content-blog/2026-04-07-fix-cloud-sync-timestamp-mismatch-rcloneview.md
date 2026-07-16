---
slug: fix-cloud-sync-timestamp-mismatch-rcloneview
title: "RcloneView에서 클라우드 동기화 타임스탬프 불일치 오류 해결하기"
authors:
  - tayson
description: "RcloneView에서 클라우드 동기화 중 발생하는 타임스탬프 불일치 오류를 해결합니다. 시계 오차, 시간대 차이, 공급자 메타데이터 제한, 체크섬 비교, --use-server-modtime 및 --no-update-modtime 같은 플래그를 다룹니다."
keywords:
  - rclone timestamp mismatch
  - cloud sync time error
  - rclone modification time wrong
  - rclone use server modtime
  - rclone no update modtime
  - cloud sync checksum comparison
  - rclone timezone issue
  - rclone clock skew fix
  - cloud provider timestamp support
  - rcloneview sync mismatch fix
tags:
  - troubleshooting
  - tips
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView에서 클라우드 동기화 타임스탬프 불일치 오류 해결하기

> 타임스탬프 불일치는 변경되지 않은 파일을 rclone이 다시 전송하게 만들어 대역폭과 시간을 낭비시킵니다. 이 가이드는 왜 이런 문제가 발생하는지, 그리고 RcloneView에서 이를 올바르게 처리하도록 구성하는 방법을 설명합니다.

rclone이 두 위치 간 파일을 동기화할 때는 수정 타임스탬프를 비교하여 어떤 파일을 업데이트해야 하는지 결정합니다. 소스와 대상이 동일한 파일에 대해 다른 타임스탬프를 보고하면 — 단 1초 차이라도 — rclone은 해당 파일이 변경된 것으로 간주하고 다시 전송합니다. 이는 불필요한 전송, 늘어난 대역폭 비용, 그리고 결코 깔끔하게 끝나지 않는 것처럼 보이는 동기화 작업으로 이어집니다. 이 문제는 서로 다른 클라우드 공급자 간에 동기화하거나, 타임스탬프를 다르게 처리하는 로컬 스토리지와 클라우드 리모트 간에 동기화할 때 특히 흔하게 발생합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 타임스탬프 불일치가 발생하는 이유

타임스탬프는 단순해 보입니다 — 파일이 특정 시각에 수정되었다는 것뿐이죠 — 하지만 클라우드 공급자 전반의 실제 상황은 훨씬 복잡합니다. 여러 요인으로 인해 동일한 파일이 소스와 대상에서 서로 다른 수정 시각을 보고할 수 있습니다.

### 공급자 간 시계 오차

각 클라우드 공급자는 자체 내부 시계를 유지합니다. 대부분 NTP를 사용해 밀리초 단위로 동기화되지만, 파일에 저장되는 타임스탬프는 업로드 과정의 서로 다른 시점에 설정될 수 있습니다. 어떤 공급자는 업로드가 시작된 시각을 기록하고, 다른 공급자는 완료된 시각을 기록합니다. 대용량 파일의 경우 이 차이가 몇 초 이상이 될 수 있습니다.

### 시간대와 정밀도 차이

일부 공급자는 타임스탬프를 UTC로 저장하고, 다른 공급자는 사용자의 로컬 시간대로 저장하며, 일부는 정밀도를 절삭합니다. 예를 들면:

- **Google Drive**는 밀리초 단위 정밀도로 수정 시각을 저장하며 사용자 지정 수정 시각 설정을 허용합니다.
- **OneDrive**는 초 단위 정밀도로 수정 시각을 지원합니다.
- **Amazon S3**는 객체 메타데이터에 수정 시각을 기본적으로 지원하지 않으며, 대신 업로드 시각을 last-modified 헤더로 기록합니다.
- **Dropbox**는 클라이언트가 설정한 수정 시각을 보존하지만 초 단위까지만 유지합니다.
- **SFTP**는 원격 파일 시스템에 의존하며, 초 또는 마이크로초 단위 정밀도를 가질 수 있습니다.

밀리초 정밀도를 가진 공급자에서 초 단위 정밀도를 가진 공급자로 동기화하면 반올림으로 인해 일관된 1초(또는 그 이하) 차이가 발생합니다.

### 수정 시각을 지원하지 않는 경우

일부 클라우드 스토리지 백엔드는 수정 시각 보존을 아예 지원하지 않습니다:

- **S3 호환 스토리지**(AWS S3, Wasabi, S3 모드의 Backblaze B2, Cloudflare R2)는 원본 파일의 수정 시각이 아니라 업로드 시각을 저장합니다. rclone은 이를 우회하기 위해 원본 수정 시각을 객체 메타데이터(X-Amz-Meta-Mtime)에 저장하지만, 이는 초기 업로드 시 rclone이 해당 메타데이터를 설정한 경우에만 작동합니다.
- 공급자의 웹 인터페이스나 다른 도구를 통해 업로드된 파일에는 이 메타데이터가 없어, 이후 동기화에서 불일치가 발생합니다.

### 전송 중 메타데이터가 보존되지 않는 경우

파일이 원래 rclone이 아닌 다른 도구로 대상에 업로드되었거나, 프록시나 CDN에 의해 메타데이터 헤더가 제거된 경우, rclone은 예상되는 수정 시각 메타데이터를 찾을 수 없습니다. 이 경우 공급자의 last-modified 시각으로 대체되며, 이는 소스와 다를 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folder contents" class="img-large img-center" />

## 문제 진단하기

수정 조치를 적용하기 전에 실제로 타임스탬프가 원인인지 확인하세요. RcloneView에서 또는 터미널에서 드라이런(dry-run) 동기화를 실행합니다:

```bash
rclone sync source: dest: --dry-run -v
```

출력을 살펴보세요. 다음과 같은 줄이 보이면:

```
NOTICE: file.txt: Skipped copy (src older)
```

또는 내용이 동일함에도 파일이 전송 대상으로 표시된다면 타임스탬프가 원인일 가능성이 높습니다. 특정 파일을 직접 비교해볼 수도 있습니다:

```bash
rclone lsl source:path/to/file.txt
rclone lsl dest:path/to/file.txt
```

`lsl` 명령은 파일 크기, 수정 시각, 경로를 보여줍니다. 타임스탬프를 비교해보세요 — 크기는 일치하는데 시각이 몇 초 차이 나거나 시간대가 다르게 표시된다면 타임스탬프 불일치가 있는 것입니다.

RcloneView에서는 **폴더 비교(Compare Folders)** 기능을 사용해 차이를 시각적으로 확인할 수 있습니다. 비교 화면은 크기, 타임스탬프, 체크섬이 다른 파일을 강조 표시하여 타임스탬프만 다른 경우를 쉽게 식별할 수 있게 해줍니다.

## --use-server-modtime 사용하기

`--use-server-modtime` 플래그는 메타데이터에 저장된 시각이 아니라 서버가 보고하는 수정 시각을 사용하도록 rclone에 지시합니다. 다음과 같은 경우에 유용합니다:

- 파일이 원래 어떻게 업로드되었는지와 무관하게 일관된 동작을 원할 때.
- 메타데이터 수정 시각이 신뢰할 수 없거나 누락된 경우.
- 서로 다른 도구로 업로드된 파일이 있는 두 위치 간에 동기화하는 경우.

```bash
rclone sync source: dest: --use-server-modtime
```

RcloneView에서는 작업 구성의 고급 옵션 또는 사용자 지정 플래그 항목에서 이 플래그를 추가할 수 있습니다.

**사용 시점:** rclone이 아닌 다른 도구로 파일이 업로드된 S3 호환 백엔드에서 동기화하거나, 메타데이터 헤더가 일관되지 않은 경우.

**트레이드오프:** 서버 수정 시각은 원본 파일 수정 시각이 아니라 업로드 시각을 반영합니다. 즉, 재업로드 전에 파일이 수정되었는지 rclone이 감지할 수 없으며 업로드 타임스탬프만 확인할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## --no-update-modtime 사용하기

`--no-update-modtime` 플래그는 파일 복사 후 rclone이 대상의 수정 시각을 설정하지 못하도록 막습니다. 기본적으로 rclone은 파일을 복사한 뒤 대상의 수정 시각을 소스와 일치하도록 설정합니다. 대상이 수정 시각 설정을 지원하지 않거나(또는 반올림하는 경우), 다음 동기화 시 지속적인 불일치가 발생합니다.

```bash
rclone sync source: dest: --no-update-modtime
```

**사용 시점:** 대상 공급자가 수정 시각 설정을 지원하지 않거나, 시각을 설정하는 동작 자체가 반올림 오류를 일으켜 불필요한 재전송을 유발하는 경우.

**트레이드오프:** 수정 시각이 일치하지 않으므로 rclone은 이후 동기화 시 변경 사항을 감지하기 위해 다른 방법(예: 체크섬)을 사용해야 합니다.

## 체크섬 기반 비교로 전환하기

소스와 대상 간 타임스탬프가 근본적으로 신뢰할 수 없다면, 수정 시각 대신 체크섬으로 파일을 비교하도록 rclone에 지시할 수 있습니다. 이는 파일이 실제로 변경되었는지 판단하는 가장 신뢰할 수 있는 방법입니다.

```bash
rclone sync source: dest: --checksum
```

`--checksum` 플래그를 사용하면 rclone은 양쪽 파일에 대한 해시(MD5, SHA-1 또는 기타 지원되는 알고리즘)를 계산하거나 가져와서 해시가 다른 파일만 전송합니다.

**장점:**

- 타임스탬프를 완전히 무시하므로 시계 오차나 정밀도 차이로 인한 오탐이 사라집니다.
- 메타데이터 차이가 아닌 실제 콘텐츠 변경을 감지합니다.
- 모든 공급자에서 안정적으로 작동합니다.

**단점:**

- 모든 파일에 대해 체크섬을 계산하거나 가져와야 하므로 대용량 파일 세트에서는 속도가 느려집니다.
- 일부 공급자는 모든 파일에 대해 체크섬을 반환하지 않습니다(예: 멀티파트로 업로드된 S3 객체는 표준 MD5 해시가 아닌 복합 ETag를 가집니다).
- API 호출이 늘어나며, 이는 속도 제한에 걸리거나 비용을 유발할 수 있습니다.

RcloneView에서는 동기화 작업 설정에서 체크섬 비교를 활성화할 수 있습니다. 대용량 데이터셋의 경우, 체크섬 기반 동기화를 일정 주기(예: 매주)로 실행하고 일일 증분 백업에는 타임스탬프 기반 동기화를 사용하는 것을 고려하세요.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

## 공급자별 타임스탬프 처리 방식

각 공급자의 타임스탬프 처리 방식을 이해하면 올바른 동기화 전략을 선택하는 데 도움이 됩니다.

| Provider | Modtime Support | Precision | Notes |
|---|---|---|---|
| Google Drive | Full | Millisecond | Allows setting custom modtime via API |
| OneDrive | Full | Second | Supports setting modtime |
| Dropbox | Full | Second | Client-set modtime preserved |
| Amazon S3 | Metadata only | Second | Rclone stores modtime in X-Amz-Meta-Mtime |
| Backblaze B2 | Metadata only | Millisecond | Stored in file info headers |
| Wasabi | Metadata only | Second | S3-compatible, uses X-Amz-Meta-Mtime |
| Cloudflare R2 | Metadata only | Second | S3-compatible, metadata-based |
| SFTP | Depends on FS | Varies | Depends on remote filesystem |
| Azure Blob | Metadata only | Second | Rclone uses metadata headers |
| Google Cloud Storage | Metadata only | Second | Custom metadata for modtime |

"Full" 수정 시각 지원을 가진 두 공급자 간(예: Google Drive에서 OneDrive로) 동기화할 때는 타임스탬프 기반 비교가 안정적으로 작동합니다. "Full" 공급자와 "Metadata only" 공급자 간에 동기화할 경우, 파일이 원래 rclone으로 업로드되지 않았다면 불일치가 흔하게 발생합니다.

## 최상의 결과를 위한 플래그 조합

대부분의 공급자 간 동기화 시나리오에서는 플래그를 조합하면 가장 좋은 결과를 얻을 수 있습니다:

**다른 도구로 파일이 업로드된 S3-to-S3 또는 S3-to-cloud 동기화의 경우:**

```bash
rclone sync source: dest: --checksum --no-update-modtime
```

**Google Drive에서 OneDrive로(둘 다 수정 시각을 지원):**

```bash
rclone sync gdrive: onedrive: --modify-window 1s
```

`--modify-window` 플래그는 타임스탬프 비교에 허용 오차를 추가합니다. `1s`로 설정하면 타임스탬프가 서로 1초 이내인 파일은 동일한 것으로 간주됩니다. 이는 정밀도 차이로 인한 반올림 문제를 해결해줍니다.

**일일 증분 동기화와 가끔의 전체 검증을 함께 사용하는 경우:**

```bash
# Daily (fast, timestamp-based with tolerance)
rclone sync source: dest: --modify-window 2s

# Weekly (thorough, checksum-based)
rclone sync source: dest: --checksum
```

RcloneView에서는 `--modify-window`를 사용하는 일일 실행용 동기화 작업과 `--checksum`을 사용하는 주간 실행용 동기화 작업을 별도로 만들어 각각 독립적으로 예약할 수 있습니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

## 새 환경에서 타임스탬프 문제 예방하기

새로운 동기화 워크플로를 설정하는 경우, 처음부터 대부분의 타임스탬프 문제를 피할 수 있습니다:

1. **모든 전송에 rclone 사용** — rclone은 메타데이터를 일관되게 설정하므로, rclone으로 업로드된 파일은 어디서나 올바른 수정 시각 메타데이터를 갖게 됩니다.
2. 처음 동기화할 때부터 **공급자 조합에 맞게 --modify-window를 적절히 설정**하세요.
3. **초기 마이그레이션에는 체크섬 모드 사용** — 대용량 데이터셋을 새 공급자로 처음 옮길 때는 `--checksum`을 사용해 깨끗한 기준선을 확보하세요.
4. **작은 폴더로 먼저 테스트** — 소수의 파일을 동기화해 불일치를 확인한 뒤 규모를 확장하세요.
5. **사용한 플래그를 기록** — 공급자 조합에 맞는 올바른 조합을 찾았다면 RcloneView 작업으로 저장해두어 나중에 다시 찾을 필요가 없도록 하세요.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 리모트 관리자에서 **소스와 대상 리모트를 추가**하세요.
3. 동기화 전에 **폴더 비교(Compare Folders)** 기능으로 차이를 확인하세요.
4. 공급자 조합에 맞게 **동기화 플래그**(`--checksum`, `--modify-window`, `--no-update-modtime`)를 구성하세요.
5. **예약 동기화 작업을 생성**하고 작업 기록(Job History)에서 결과를 모니터링하세요.

타임스탬프 불일치는 비효율적인 클라우드 동기화의 가장 흔한 원인 중 하나입니다. 올바른 플래그와 각 공급자가 수정 시각을 처리하는 방식에 대한 이해를 갖추면 불필요한 전송을 없애고 동기화 작업을 깔끔하게 유지할 수 있습니다.

---

**관련 가이드:**

- [폴더 내용 비교](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [원격 스토리지 동기화](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)
- [실시간 전송 모니터링](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />
