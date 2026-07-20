---
slug: check-verify-cloud-file-integrity-rcloneview
title: "RcloneView의 Check 및 Compare 기능으로 클라우드 파일 무결성 검증하기"
authors:
  - tayson
description: "RcloneView의 check 및 compare 기능을 사용해 클라우드 파일 무결성을 검증하고, 비트 부패를 감지하고, 체크섬을 확인하고, 제공업체 간 마이그레이션 성공 여부를 확인하세요."
keywords:
  - rclone check files
  - verify cloud file integrity
  - rcloneview compare folders
  - cloud checksum verification
  - detect bit rot cloud storage
  - post migration verification
  - rclone file validation
  - compare source destination cloud
  - rcloneview check feature
  - cloud data integrity tool
tags:
  - RcloneView
  - feature
  - cloud-sync
  - guide
  - tips
  - best-practices
  - security
  - monitoring
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView의 Check 및 Compare 기능으로 클라우드 파일 무결성 검증하기

> 파일을 클라우드에 복사하는 것은 작업의 절반에 불과합니다. 모든 바이트가 온전히 도착했는지 검증하는 것이야말로 신뢰할 수 있는 워크플로와 막연한 기대에 의존하는 워크플로를 가르는 지점입니다.

수 테라바이트를 여러 제공업체 간에 이동하거나, 매일 밤 백업을 실행하거나, 중요한 데이터셋을 아카이브하는 작업에는 모두 공통된 위험이 있습니다. 바로 조용한 손상입니다. 전송 중단, 제공업체 측 버그, 또는 시간이 지남에 따라 발생하는 단순한 비트 부패로 인해 파일이 대상 위치에 존재하는 것처럼 보이지만 실제로는 원본과 다를 수 있습니다. Rclone은 원본과 대상 파일을 하나씩 비교하는 전용 `check` 명령을 제공하며, RcloneView는 이 과정을 시각적이고 접근하기 쉽게 만들어 줍니다. 이 가이드는 클라우드 파일을 언제, 어떻게 검증해야 하는지 설명합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 파일 무결성 검증이 중요한 이유

클라우드 제공업체는 내부적으로 데이터를 복제하지만, 어떤 시스템도 오류로부터 완전히 자유롭지 않습니다. 검증을 통해 실제 문제를 발견할 수 있는 가장 흔한 시나리오는 다음과 같습니다.

- **전송 중단** -- 대용량 복사 중 네트워크가 끊기면 이름만으로는 완전해 보이지만 실제로는 부분적인 파일이 대상에 남을 수 있습니다.
- **비트 부패** -- 저장 매체는 수개월 또는 수년에 걸쳐 열화되어 거의 접근하지 않는 파일의 비트를 뒤집을 수 있습니다.
- **제공업체 버그** -- 간헐적인 API 오류로 인해 오류를 발생시키지 않으면서도 0바이트 업로드나 잘린 쓰기가 발생할 수 있습니다.
- **마이그레이션 검증** -- 수십만 개의 파일을 제공업체 간에 이동한 후, 아무것도 유실되거나 변경되지 않았다는 증거가 필요합니다.

검증 단계가 없으면 이러한 문제는 실제로 해당 파일이 필요해질 때까지 발견되지 않습니다.

## Rclone Check의 작동 방식

`rclone check` 명령은 원본과 대상 경로를 비교하여 차이가 있는 파일을 보고합니다. 관련된 제공업체에 따라 다음 방법 중 하나를 사용합니다.

| 방법 | 작동 방식 | 사용 시점 |
|--------|-------------|-----------|
| **해시 검사** | 두 제공업체가 보고하는 체크섬(MD5, SHA1 등)을 비교 | 두 제공업체가 공통 해시를 지원할 때 |
| **크기 검사** | 파일 크기만 비교 | 공통 해시를 사용할 수 없을 때 |
| **다운로드 검사** | 두 파일을 모두 다운로드하여 바이트 단위로 비교 | `--download` 플래그로 강제 실행 |

두 제공업체가 모두 지원할 경우 해시 기반 검사가 가장 빠르고 신뢰할 수 있습니다. Google Drive, OneDrive, S3 호환 제공업체, Backblaze B2는 모두 파일 해시를 보고하지만, 항상 같은 유형인 것은 아닙니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView compare folders showing file differences" class="img-large img-center" />

## RcloneView에서 Compare 사용하기

RcloneView에 내장된 **Compare** 기능은 원본과 대상 폴더를 시각적으로 나란히 비교해 줍니다.

1. **Explorer** 창을 열고 한쪽에는 원본 리모트를, 다른 쪽에는 대상 리모트를 선택합니다.
2. 비교하려는 폴더로 이동합니다.
3. **Compare**를 클릭하여 분석을 실행합니다.
4. 결과를 검토합니다 -- 파일은 일치, 원본에만 존재, 대상에만 존재, 또는 다름 상태에 따라 색상으로 구분되어 표시됩니다.

이 시각적 방식은 특정 폴더를 부분적으로 점검하거나, 명령줄 출력을 외우지 않고도 마이그레이션 이후 결과를 검토할 때 이상적입니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView two-pane explorer with source and destination" class="img-large img-center" />

## 터미널에서 Rclone Check 실행하기

전체 리모트에 대한 완전한 무결성 스캔을 수행하려면 RcloneView에서 **Terminal**을 열고 다음을 실행하세요.

```bash
rclone check source:path dest:path
```

알아두면 유용한 플래그는 다음과 같습니다.

| 플래그 | 목적 |
|------|---------|
| `--size-only` | 크기만 비교하고 해시 검사는 건너뜀 |
| `--download` | 두 사본을 모두 다운로드하여 바이트 단위 비교를 강제 실행 |
| `--one-way` | 원본 파일이 대상에 존재하는지만 확인 (반대 방향은 확인하지 않음) |
| `--combined report.txt` | 일치 및 불일치 결과를 종합한 리포트를 파일로 작성 |
| `--missing-on-src missing.txt` | 대상에는 있지만 원본에는 없는 파일을 기록 |
| `--missing-on-dst missing.txt` | 원본에는 있지만 대상에는 없는 파일을 기록 |
| `--error errors.txt` | 검사에 실패한 파일을 기록 |

철저한 마이그레이션 이후 검사 예시:

```bash
rclone check gdrive:/Archive s3-backup:archive-bucket --combined /tmp/check-report.txt
```

## 마이그레이션 이후 검증 워크플로

제공업체 간 데이터를 마이그레이션한 후, 다음 워크플로를 따라 성공 여부를 확인하세요.

1. **원본에서 대상으로 단방향 검사를 실행**하여 모든 원본 파일이 도착했는지 확인합니다.
   ```bash
   rclone check source:path dest:path --one-way
   ```
2. **불일치 항목을 검토**합니다 -- 보고된 차이는 다시 복사가 필요한 파일을 나타냅니다.
3. `--ignore-existing`을 제거한 상태에서 RcloneView의 copy 또는 sync 기능을 사용해 **실패한 파일을 다시 전송**합니다.
4. **검사를 다시 실행**하여 모든 차이가 해결되었는지 확인합니다.
5. `--combined` 플래그를 사용해 감사 목적으로 **리포트를 저장**합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing completed check operations" class="img-large img-center" />

## 시간에 따른 비트 부패 감지하기

장기 아카이브의 경우 주기적인 무결성 검사를 예약하세요.

1. RcloneView에서 아카이브에 대해 `rclone check`를 실행하는 **Job**을 생성합니다.
2. **Job Scheduler**를 사용해 매주 또는 매월 실행하도록 예약합니다.
3. 각 실행 후 작업 기록을 검토하여 새로 손상된 파일을 발견합니다.

이는 파일이 한 번 작성되고 거의 읽히지 않는 콜드 스토리지 계층(S3 Glacier, Backblaze B2 아카이브)에서 특히 중요합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule periodic integrity check in RcloneView" class="img-large img-center" />

## 제공업체 간 체크섬 호환성

모든 제공업체가 동일한 해시 알고리즘을 지원하는 것은 아닙니다. 간단한 참고표는 다음과 같습니다.

| 제공업체 | MD5 | SHA1 | 기타 |
|----------|-----|------|-------|
| Google Drive | 지원 | 미지원 | Quickxor 사용 가능 |
| OneDrive | 미지원 | 미지원 | QuickXorHash |
| Amazon S3 | 지원 (단일 파트의 경우 ETag) | 미지원 | -- |
| Backblaze B2 | 미지원 | 지원 | SHA1 네이티브 |
| Dropbox | 미지원 | 미지원 | Dropbox 콘텐츠 해시 |
| SFTP/Local | 지원 | 지원 | 다양함 |

두 제공업체가 공통 해시를 공유하지 않는 경우, rclone은 크기만 비교하는 방식으로 대체됩니다. 이런 경우 바이트 수준의 확실성을 위해 `--download`를 사용하세요.

## 모범 사례

- **대규모 마이그레이션 후에는 항상 검증하세요** -- 복사 명령이 성공했다고 해서 모든 파일이 온전하다는 보장은 없습니다.
- **`--combined` 리포트를 사용**하여 일치 및 불일치 항목에 대한 감사 가능한 기록을 만드세요.
- 수개월간 손대지 않는 아카이브 데이터에 대해서는 **주기적인 검사를 예약**하세요.
- 가능하면 크기만 비교하는 방식보다 **해시 검사를 우선**하세요 -- 크기가 같은데 손상이 발생하는 경우는 드물지만 실제로 일어날 수 있습니다.
- 검사 후 **드라이런 동기화를 실행**하여 불일치를 자동으로 수정하세요.

---

**관련 가이드:**

- [클라우드 간 전송 및 동기화](https://rcloneview.com/support/blog/effortless-cloud-to-cloud-transfers-syncing)
- [Google Drive에서 Amazon S3로의 증분 백업](https://rcloneview.com/support/blog/incremental-backup-google-drive-to-amazon-s3)
- [중단되거나 실패한 전송 복구하기](https://rcloneview.com/support/blog/recover-interrupted-failed-transfers-rcloneview)

<CloudSupportGrid />
