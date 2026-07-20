---
slug: rclone-filter-rules-include-exclude-explained-rcloneview
title: "rclone 필터 규칙 완전 정리: 더 똑똑한 동기화를 위한 포함/제외 패턴"
authors:
  - tayson
description: "필요한 것만 동기화하려면 rclone의 필터 규칙을 마스터하세요. RcloneView에서 활용할 수 있는 실전 예제와 함께 include, exclude, filter-from, min/max size/age 패턴을 알아봅니다."
keywords:
  - rclone filter rules
  - rclone include exclude
  - rclone exclude folder
  - rclone filter from file
  - rclone sync specific files
  - rclone ignore files
  - rclone exclude pattern
  - rclone filter examples
  - rclone min size max size
  - rclone selective sync
tags:
  - RcloneView
  - rclone
  - filters
  - sync
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# rclone 필터 규칙 완전 정리: 더 똑똑한 동기화를 위한 포함/제외 패턴

> 모든 것을 동기화하는 것은 비효율적입니다. 잘못된 것을 동기화하는 것은 위험합니다. rclone의 필터 규칙을 사용하면 전송할 대상을 정밀하게 제어할 수 있지만, 문법이 다소 헷갈릴 수 있습니다. 이 가이드에서는 실전 예제를 통해 전체 내용을 상세히 정리합니다.

클라우드 간에 파일을 동기화하거나 복사할 때 모든 파일이 필요한 경우는 드뭅니다. `.pdf` 파일만 필요하거나, `.tmp` 파일을 제외한 모든 것이 필요하거나, 최근 7일 이내에 수정된 파일만, 또는 100MB 미만의 파일만 필요할 수도 있습니다. rclone의 필터 시스템은 이러한 모든 상황을 처리하며, RcloneView를 사용하면 작업 설정에서 이러한 필터를 시각적으로 구성할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## rclone 필터의 작동 방식

rclone은 필터 규칙을 **위에서 아래로 순서대로** 처리합니다. 각 파일에 대해 규칙을 하나씩 확인합니다.

1. 규칙이 일치하면 (규칙에 따라) 해당 파일을 포함하거나 제외합니다.
2. 어떤 규칙도 일치하지 않으면 파일은 **기본적으로 포함**됩니다.

이 "첫 번째로 일치하는 규칙이 우선"이라는 동작 방식을 이해하는 것이 중요합니다. 순서가 매우 중요합니다.

## 기본 패턴

### 특정 파일 또는 폴더 제외하기

```
--exclude "*.tmp"
--exclude "node_modules/**"
--exclude ".DS_Store"
```

이 패턴은 다음을 제외합니다.
- 트리 전체에서 모든 `.tmp` 파일.
- `node_modules` 폴더 전체와 그 안의 모든 내용.
- 모든 `.DS_Store` 파일(macOS 메타데이터).

### 특정 파일만 포함하기

```
--include "*.pdf"
--include "*.docx"
```

`--include`를 사용하면 rclone은 **나머지 모든 파일을 자동으로 제외**합니다. 즉 `--include "*.pdf"`는 "PDF만 동기화하고 나머지는 아무것도 동기화하지 않는다"는 의미입니다.

### include와 exclude 결합하기

```
--include "*.jpg"
--include "*.png"
--exclude "*"
```

이는 JPG와 PNG 파일만 명시적으로 포함합니다. 마지막의 `--exclude "*"`가 나머지 모든 파일을 제외 처리합니다.

## --filter 플래그

`--filter` 플래그는 하나의 규칙 안에서 include와 exclude를 모두 지정할 수 있게 해줍니다.

```
--filter "+ *.pdf"
--filter "+ *.docx"
--filter "- *"
```

`+` 접두사는 포함을, `-`는 제외를 의미합니다. 이는 별도의 `--include`, `--exclude` 플래그와 동일하지만 더 간결합니다.

## Filter-From 파일

복잡한 규칙 세트의 경우 필터를 파일에 담아 사용할 수 있습니다.

```
--filter-from /path/to/filters.txt
```

**filters.txt:**
```
# Include documents
+ *.pdf
+ *.docx
+ *.xlsx

# Include images
+ *.jpg
+ *.png

# Exclude everything else
- *
```

`#`으로 시작하는 줄은 주석입니다. 2~3개를 넘는 규칙이 필요한 동기화 작업이라면 이 방식을 사용하는 것을 권장합니다.

## 디렉토리 필터

### 특정 디렉토리 제외하기

```
--exclude "backup/**"
```

`**`는 "이 디렉토리와 그 안의 모든 것"을 의미합니다.

### 특정 디렉토리만 포함하기

```
--include "/projects/**"
--exclude "*"
```

이는 루트 레벨의 `projects` 폴더만 동기화합니다.

### 패턴으로 디렉토리 제외하기

```
--exclude ".git/**"
--exclude "__pycache__/**"
--exclude "node_modules/**"
```

코드 저장소를 동기화하는 개발자들이 흔히 사용하는 방식으로, 버전 관리 폴더와 의존성 폴더를 건너뜁니다.

## 크기 필터

### 최소 파일 크기

```
--min-size 1M
```

1MB보다 작은 파일을 건너뜁니다. 썸네일이나 작은 캐시 파일을 무시할 때 유용합니다.

### 최대 파일 크기

```
--max-size 100M
```

100MB보다 큰 파일을 건너뜁니다. 문서는 원하지만 동영상 파일은 원하지 않을 때 유용합니다.

### 크기 단위

- `k` 또는 `K` — 킬로바이트
- `M` — 메가바이트
- `G` — 기가바이트

예시: `--min-size 500k --max-size 2G`는 500KB에서 2GB 사이의 파일을 동기화합니다.

## 기간(Age) 필터

### 최근 파일만

```
--max-age 7d
```

최근 7일 이내에 수정된 파일만 동기화합니다. 활성 프로젝트의 증분 백업에 이상적입니다.

### 오래된 파일만

```
--min-age 30d
```

30일 동안 변경되지 않은 파일만 동기화합니다. 오래된 데이터를 보관(아카이빙)할 때 유용합니다.

### 기간 단위

- `ms` — 밀리초
- `s` — 초
- `m` — 분
- `h` — 시간
- `d` — 일
- `w` — 주
- `M` — 개월
- `y` — 년

## 실전 예제

### 예제 1: 문서만 백업하기

Google Drive에서 Backblaze B2로 PDF, Word 문서, 스프레드시트만 동기화합니다.

```
--include "*.pdf"
--include "*.docx"
--include "*.xlsx"
--include "*.pptx"
--exclude "*"
```

### 예제 2: 대용량 동영상 파일 건너뛰기

500MB를 초과하는 동영상 파일을 제외하고 나머지 모두를 동기화합니다.

```
--exclude "*.mp4"
--exclude "*.mov"
--exclude "*.avi"
--exclude "*.mkv"
```

또는 크기 필터를 사용합니다: `--max-size 500M`

### 예제 3: 개발자 프로젝트 동기화

의존성 파일과 빌드 산출물을 제외하고 코드 프로젝트를 동기화합니다.

```
--exclude "node_modules/**"
--exclude ".git/**"
--exclude "__pycache__/**"
--exclude "dist/**"
--exclude "build/**"
--exclude "*.pyc"
```

### 예제 4: 90일이 지난 파일 아카이빙

Google Drive에서 S3 Glacier로 오래된 파일을 이동합니다.

```
--min-age 90d
```

### 예제 5: 사진 백업(RAW는 건너뛰고 JPEG는 유지)

```
--include "*.jpg"
--include "*.jpeg"
--include "*.png"
--include "*.heic"
--exclude "*.cr2"
--exclude "*.nef"
--exclude "*.arw"
--exclude "*"
```

## RcloneView에서 필터 사용하기

RcloneView에서 동기화 또는 복사 작업을 생성할 때 작업 설정에서 필터 규칙을 추가할 수 있습니다. 이 규칙은 rclone에 그대로 전달됩니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configure filter rules in RcloneView jobs" class="img-large img-center" />

### 드라이런으로 확인하기

새로운 필터 규칙을 테스트할 때는 항상 먼저 드라이런(dry run)을 사용하세요. 실제로 파일을 전송하지 않고도 정확히 어떤 파일이 포함되거나 제외될지 확인할 수 있습니다.

### 필터와 함께 폴더 비교하기

[폴더 비교](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents) 기능을 사용하면 소스와 대상의 상태를 확인할 수 있습니다. 필터와 결합하면 정확히 무엇이 동기화될지 파악하는 데 도움이 됩니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder comparison to verify filter results" class="img-large img-center" />

## 흔히 하는 실수

### 디렉토리에 뒤따르는 `**`를 빼먹는 경우

```
# Wrong — only excludes a FILE named "logs"
--exclude "logs"

# Right — excludes the logs DIRECTORY and everything in it
--exclude "logs/**"
```

### 나머지를 제외하지 않고 include만 사용하는 경우

```
# This includes PDFs but doesn't exclude anything else
--include "*.pdf"

# This works — include already implies "exclude everything else"
# But only when using --include alone
```

### 순서가 중요합니다

```
# This excludes everything, then tries to include (too late!)
--exclude "*"
--include "*.pdf"

# This works — include first, then exclude the rest
--include "*.pdf"
--exclude "*"
```

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. 설정에서 필터 규칙을 지정하여 **작업을 생성**합니다.
3. 필터가 원하는 파일을 정확히 잡아내는지 **먼저 드라이런으로 확인**합니다.
4. 확신이 들면 **작업을 실행**합니다.
5. 복잡하고 재사용 가능한 규칙 세트가 필요하다면 **filter-from 파일을 사용**합니다.

필터는 무디게 "모든 것을 동기화"하는 방식을, 정밀하게 "필요한 것만 정확히 동기화"하는 방식으로 바꿔줍니다. 한 번 익혀두면 어디서나 활용할 수 있습니다.

---

**관련 가이드:**

- [동기화 작업 생성하기](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [폴더 내용 비교하기](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [작업 스케줄링](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [클라우드 전송 대역폭 제한 설정하기](https://rcloneview.com/support/blog/set-bandwidth-limits-cloud-transfers-rcloneview)

<CloudSupportGrid />
