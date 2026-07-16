---
slug: rclone-ncdu-storage-analysis-rcloneview
title: "RcloneView에서 Rclone NCDU로 클라우드 스토리지 사용량 분석하기"
authors: [tayson]
description: "RcloneView를 통해 rclone ncdu를 사용하여 클라우드 스토리지 사용량을 분석하고, 대용량 파일을 찾고, 여러 클라우드 제공업체의 디스크 공간을 관리하세요."
keywords:
  - rclone ncdu
  - cloud storage analysis
  - disk usage cloud
  - rcloneview storage analyzer
  - find large files cloud
  - cloud storage space
  - rclone disk usage
  - storage usage breakdown
  - cloud folder size
  - analyze remote storage
tags: [feature, tips, cli, monitoring, dashboard, performance]
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView에서 Rclone NCDU로 클라우드 스토리지 사용량 분석하기

> RcloneView의 통합 터미널을 통해 rclone의 강력한 NCDU 도구로 클라우드 스토리지 공간이 정확히 어디에서 소비되고 있는지 확인하세요.

클라우드 스토리지 비용은 소리 없이 슬금슬금 늘어날 수 있습니다. 여기저기 잊혀진 백업 폴더 하나, 저기 압축되지 않은 동영상 파일 묶음 하나, 그러다 보면 어느새 자신이 사용 중인지도 몰랐던 수 테라바이트의 스토리지에 대한 비용을 지불하고 있게 됩니다. Rclone에는 리모트 스토리지를 스캔하여 디렉터리 크기를 대화형으로 탐색 가능한 형태로 보여주는 내장 NCDU(NCurses Disk Usage) 도구가 포함되어 있습니다. RcloneView의 통합 터미널과 파일 탐색기를 통해 ncdu 스캔을 실행하고, 공간을 많이 차지하는 파일과 폴더를 찾아내고, 즉시 조치를 취해 스토리지를 확보할 수 있습니다. 이 가이드는 기본적인 스캔부터 여러 클라우드 제공업체에 걸친 고급 분석 워크플로까지 모든 것을 다룹니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Rclone NCDU란 무엇인가?

Rclone NCDU는 클래식 리눅스 `ncdu`(NCurses Disk Usage) 유틸리티를 클라우드에 맞게 구현한 버전입니다. 원본 ncdu는 로컬 파일시스템을 분석하지만, rclone의 구현은 Google Drive, Amazon S3, Dropbox, OneDrive, Backblaze B2를 비롯해 rclone이 지원하는 70개 이상의 다른 제공업체 등 모든 리모트 스토리지 백엔드와 함께 작동합니다.

`rclone ncdu`를 실행하면 지정된 리모트 경로를 재귀적으로 스캔하여 모든 파일과 디렉터리의 크기를 계산합니다. 결과는 다음과 같은 작업을 할 수 있는 대화형 터미널 인터페이스로 제공됩니다.

- **디렉터리 탐색**: 중첩된 폴더 구조를 드릴다운
- **크기순 정렬**: 공간을 가장 많이 차지하는 항목을 즉시 확인
- **개수순 정렬**: 작은 파일이 지나치게 많은 디렉터리 찾기
- **삭제 표시**: 인터페이스에서 바로 파일을 삭제 대상으로 표시
- **결과 내보내기**: 오프라인 분석이나 보고용으로 결과 내보내기

단순히 클라우드 스토리지를 탐색하는 것에 비해 가지는 핵심 장점은 속도와 포괄성입니다. 수천 개의 폴더를 수동으로 검토하는 것은 비현실적이지만, ncdu는 한 번의 스캔으로 모든 것을 확인하고 우선순위가 매겨진 실행 가능한 형태로 결과를 제시합니다.

**제공업체별 도구와의 차이점:**

대부분의 클라우드 제공업체는 어떤 형태로든 스토리지 사용량 표시 기능을 제공하지만, 흔히 다음과 같은 한계가 있습니다.
- Google Drive는 전체 사용량은 보여주지만 폴더별로 세분화하지 않습니다
- S3는 상세 분석을 위해 CloudWatch 지표나 타사 도구가 필요합니다
- Dropbox는 공유 폴더별 사용량은 보여주지만 중첩된 구조는 놓칩니다

Rclone ncdu는 어떤 제공업체를 사용하든 일관되고 상세한 분석을 제공합니다.

## 첫 NCDU 스캔 실행하기

RcloneView를 통해 ncdu를 시작하는 것은 간단합니다. RcloneView의 통합 터미널을 열거나, 시각적인 방식을 원한다면 파일 탐색기를 사용하세요.

**RcloneView 터미널을 통한 방법:**

```bash
rclone ncdu remote:
```

`remote:`를 구성한 리모트 이름으로 교체하세요. 예를 들면:

```bash
rclone ncdu gdrive:
rclone ncdu s3:my-bucket
rclone ncdu dropbox:/Documents
```

**특정 하위 디렉터리 스캔하기:**

스토리지의 일부만 분석하고 싶다면 경로를 지정하세요.

```bash
rclone ncdu gdrive:/Projects/2025
```

이는 특히 대용량 스토리지 계정의 경우 전체 리모트를 스캔하는 것보다 훨씬 빠릅니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folder contents" class="img-large img-center" />

**스캔 과정 이해하기:**

ncdu가 시작되면 리모트의 모든 파일과 디렉터리를 재귀적으로 나열합니다. 소요 시간은 다음 요소에 따라 달라집니다.

| 요소 | 영향 |
|--------|--------|
| 총 파일 수 | 주요 요인; 10만 개 파일은 몇 분이 걸릴 수 있음 |
| API 속도 제한 | Google Drive는 초당 약 10개 요청으로 제한 |
| 네트워크 지연 | 지연이 클수록 API 호출이 느려짐 |
| 디렉터리 깊이 | 깊이 중첩된 구조는 더 많은 API 호출 필요 |

파일 5만 개가 있는 Google Drive의 경우 스캔 시간은 2~5분 정도로 예상됩니다. 객체가 수백만 개인 S3 버킷의 경우 전체 버킷 대신 특정 접두사를 스캔하는 것을 고려하세요.

## NCDU 인터페이스 탐색하기

스캔이 완료되면 대화형 화면이 표시됩니다. 이를 효과적으로 탐색하는 방법은 다음과 같습니다.

**키보드 조작:**

| 키 | 동작 |
|-----|--------|
| 위/아래 화살표 | 항목 간 선택 이동 |
| Enter / 오른쪽 화살표 | 선택한 디렉터리로 진입 |
| 왼쪽 화살표 | 상위 디렉터리로 돌아가기 |
| d | 선택한 파일 또는 디렉터리 삭제 |
| s | 크기순 정렬 전환 |
| c | 개수순(파일 수) 정렬 전환 |
| g | 그래프 표시 전환 |
| n | 이름순 정렬 |
| q | ncdu 종료 |

**화면 읽는 방법:**

ncdu 출력의 각 행은 다음을 보여줍니다.
- 디렉터리 또는 파일의 크기(사람이 읽기 쉬운 형식)
- 형제 항목과 비교한 상대적 크기를 보여주는 시각적 막대 그래프
- 포함된 파일 수(디렉터리의 경우)
- 디렉터리 또는 파일 이름

기본적으로 가장 큰 항목이 맨 위에 표시되어, 스토리지가 어디에서 소비되고 있는지 즉시 파악할 수 있습니다.

**실용적인 탐색 워크플로:**

1. 루트 레벨에서 시작하여 어떤 최상위 폴더가 가장 큰지 확인합니다.
2. 가장 큰 폴더로 진입하여 내용을 확인합니다.
3. 공간을 소비하는 특정 파일이나 하위 디렉터리를 찾을 때까지 계속 드릴다운합니다.
4. 정리하고 싶은 항목의 경로를 기록합니다.
5. RcloneView의 파일 탐색기를 사용해 해당 항목을 삭제, 이동 또는 보관합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## 대용량 파일과 잊혀진 데이터 찾기

ncdu의 가장 일반적인 사용 사례는 예상치 못하게 큰 파일과 잊혀진 데이터를 찾는 것입니다. 다양한 유형의 스토리지 낭비를 식별하는 전략은 다음과 같습니다.

**대용량 미디어 파일 식별하기:**

동영상 파일, 디스크 이미지, 압축되지 않은 아카이브가 흔한 원인입니다. ncdu에서 크기순으로 정렬하면 이런 항목들이 대체로 즉시 맨 위로 올라옵니다. 흔한 원인은 다음과 같습니다.

- 작업 디렉터리에 남겨진 화면 녹화 및 동영상 내보내기 파일
- 백업으로 업로드된 가상 머신 디스크 이미지
- 압축할 수 있는데도 압축되지 않은 ZIP 또는 TAR 아카이브
- 서로 다른 폴더에 중복 저장된 대용량 데이터셋 사본

**오래된 백업 찾기:**

많은 사용자가 자동 백업을 설정해 두고 잊어버립니다. 다음을 확인해 보세요.
- `backup`, `archive`, `old` 등의 이름이나 날짜 스탬프가 포함된 디렉터리
- 동일한 데이터의 시점별 사본이 여러 개 존재하는 경우
- 정리 없이 계속 쌓이는 데이터베이스 덤프

**여러 제공업체 간 중복 파일 감지하기:**

여러 리모트에 걸쳐 ncdu를 사용하면 동일한 데이터가 중복으로 저장되어 있는 것을 발견할 수 있습니다.

```bash
# Scan Google Drive
rclone ncdu gdrive:/Backups

# Scan S3
rclone ncdu s3:my-backup-bucket

# Compare the results to find overlapping data
```

**제공업체별 대용량 파일 유형:**

제공업체마다 서로 다른 유형의 스토리지 낭비가 발생하는 경향이 있습니다.

| 제공업체 | 흔한 대용량 파일 |
|----------|--------------------|
| Google Drive | 공유 동영상, 출력 결과가 포함된 Colab 노트북, 오래된 Takeout 내보내기 |
| S3 | 로그 아카이브, 오래된 배포 아티팩트, 압축되지 않은 데이터 레이크 |
| OneDrive | OneNote 데이터 블록, 공유 팀 파일, Outlook 첨부 파일 사본 |
| Dropbox | 카메라 업로드 중복, 오래된 공유 폴더 |

## 결과 내보내기 및 비교하기

지속적인 스토리지 관리를 위해서는 ncdu 결과를 내보내고 시간에 따른 변화를 추적하고 싶을 것입니다.

**스캔 결과를 파일로 내보내기:**

Rclone의 `size` 명령은 스크립트로 처리 가능한 출력을 제공하여 ncdu를 보완합니다.

```bash
# Get total size of a remote
rclone size gdrive: --json

# List directories with their sizes
rclone lsf gdrive: --dirs-only -R --format "sp" | sort -t ';' -k1 -rn | head -20
```

**스토리지 사용량 보고서 만들기:**

rclone 명령을 조합해 포괄적인 보고서를 만드세요.

```bash
# Generate a JSON report of all file sizes
rclone lsjson gdrive: -R --no-modtime --no-mimetype > storage-report.json

# Use rclone size for quick summaries
rclone size gdrive:/Projects
rclone size gdrive:/Backups
rclone size gdrive:/Media
```

**제공업체 간 사용량 비교하기:**

여러 클라우드 계정을 관리하는 경우, 각각에 대해 ncdu 또는 size 명령을 실행하여 비교하세요.

```bash
echo "=== Google Drive ===" && rclone size gdrive:
echo "=== S3 ===" && rclone size s3:my-bucket
echo "=== Dropbox ===" && rclone size dropbox:
echo "=== OneDrive ===" && rclone size onedrive:
```

이를 통해 스토리지가 어떻게 분포되어 있는지, 그리고 어디에 최적화 노력을 기울여야 가장 큰 효과를 볼 수 있는지 명확히 파악할 수 있습니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

## 고급 NCDU 기법

기본적인 스캔을 넘어, 몇 가지 고급 기법으로 스토리지 분석을 더 효과적으로 만들 수 있습니다.

**스캔 필터링하기:**

rclone의 필터 플래그를 사용해 분석 범위를 좁히세요.

```bash
# Only scan files larger than 100 MB
rclone ncdu gdrive: --min-size 100M

# Exclude certain directories from the scan
rclone ncdu gdrive: --exclude "node_modules/**" --exclude ".git/**"

# Only scan specific file types
rclone ncdu s3:my-bucket --include "*.{mp4,avi,mkv,mov}"
```

**스캔 결과 캐싱하기:**

매우 큰 리모트의 경우 스캔에 시간이 오래 걸릴 수 있습니다. rclone의 디렉터리 캐시를 활성화해 반복 스캔 속도를 높이세요.

```bash
rclone ncdu gdrive: --fast-list
```

`--fast-list` 플래그는 디렉터리 목록을 대량으로 요청하여 더 적은 API 호출을 사용합니다. 이를 지원하는 제공업체(S3, Google Drive, B2)에서는 스캔 시간을 50% 이상 줄일 수 있습니다.

**공유 스토리지 분석하기:**

Google Drive에서 나와 공유된 파일이 사용하는 스토리지는 내 용량에 포함되지 않지만, 공유 드라이브에서 내가 소유한 파일은 포함됩니다. ncdu를 사용해 특정 공유 드라이브를 스캔하세요.

```bash
rclone ncdu gdrive: --drive-shared-with-me
rclone ncdu gdrive,shared_drive_id=DRIVE_ID:
```

**정기 스캔 예약하기:**

cron이나 RcloneView의 작업 스케줄러를 사용해 자동화된 스토리지 보고서를 설정하세요.

```bash
# Weekly storage report
0 8 * * MON rclone size gdrive: --json >> /var/log/storage-usage.json
```

## 분석 결과에 따라 조치 취하기

스토리지 낭비를 확인한 후에는 RcloneView를 사용해 바로 조치를 취하세요.

**불필요한 파일 삭제하기:**

ncdu 인터페이스에서 파일이나 디렉터리에 `d`를 눌러 삭제할 수 있습니다. 또는 RcloneView의 파일 탐색기를 사용해 확인된 경로로 이동한 다음 GUI로 파일을 삭제할 수 있습니다.

**콜드 데이터를 더 저렴한 스토리지로 이동하기:**

보관은 해야 하지만 거의 액세스하지 않는 대용량 데이터셋을 발견했다면, 더 저렴한 스토리지 티어로 이동하세요.

```bash
# Move old archives from Google Drive to Backblaze B2
rclone move gdrive:/Archives/2023 b2:cold-archive/2023 --progress
```

RcloneView의 2단 탐색기를 사용하면 드래그 앤 드롭으로 간단하게 처리할 수 있습니다.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

**보관 전 압축하기:**

로그나 CSV 같은 텍스트 위주 데이터는 콜드 스토리지로 전송하기 전에 압축하세요.

```bash
# Compress locally, then upload
tar czf archive.tar.gz /path/to/data
rclone copy archive.tar.gz b2:compressed-archives/
```

**수명 주기 정책 설정하기:**

정리를 마친 후에는 자동화된 정리 작업을 구성하여 향후 스토리지 비대화를 방지하세요. RcloneView의 작업 예약 기능을 사용해 주기적인 정리 작업을 실행하세요.

- 일정 기간이 지난 파일 삭제: `rclone delete remote: --min-age 365d`
- 빈 디렉터리 제거: `rclone rmdirs remote: --leave-root`
- Google Drive에서 파일 중복 제거: `rclone dedupe gdrive: --dedupe-mode newest`

## 시작하기

Rclone NCDU는 rclone 생태계에서 가장 즉각적인 가치를 제공하는 도구 중 하나입니다. 단 한 번의 스캔으로 존재하는지도 몰랐던 수 기가바이트의 잊혀진 데이터, 중복 파일, 스토리지 낭비를 드러낼 수 있습니다. RcloneView를 통해 애플리케이션을 벗어나지 않고도 이러한 스캔을 실행하고, 결과를 검토하고, 조치를 취할 수 있습니다. 가장 큰 클라우드 스토리지 계정부터 스캔을 시작하여 크기순으로 정렬하고, 가장 큰 상위 10개 항목을 차례로 처리해 보세요. 첫 세션에서부터 상당한 절약 효과를 발견할 가능성이 높습니다.

---

**관련 가이드:**
- [리모트 스토리지 탐색 및 관리](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [폴더 내용 비교](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [실시간 전송 모니터링](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />
