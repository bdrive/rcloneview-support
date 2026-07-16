---
slug: folder-comparison-guide-detect-differences-rcloneview
title: "폴더 비교 심층 가이드 — 클라우드 스토리지 위치 간의 모든 차이 탐지하기"
authors:
  - tayson
description: "RcloneView의 폴더 비교 기능은 두 클라우드 스토리지 위치 간의 누락된 파일, 크기 불일치, 동기화 드리프트를 찾아냅니다. 실전 예제와 함께하는 완벽 가이드."
keywords:
  - folder comparison tool
  - compare cloud folders
  - detect missing files cloud
  - cloud sync verification
  - compare google drive onedrive
  - folder diff tool
  - cloud storage comparison
  - verify cloud backup
  - find missing cloud files
  - cloud folder diff
tags:
  - folder-comparison
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 폴더 비교 심층 가이드 — 클라우드 스토리지 위치 간의 모든 차이 탐지하기

> 지난주에 백업을 실행했습니다. 모든 파일이 제대로 전달됐을까요? 크기는 정확할까요? 빠진 것은 없을까요? 이를 확실히 알 수 있는 유일한 방법은 원본과 대상을 파일 단위로 비교하는 것입니다. 폴더 비교가 바로 그 역할을 합니다.

폴더 비교는 RcloneView에서 가장 유용한 기능 중 하나입니다. 로컬, NAS, 클라우드를 조합한 두 스토리지 위치를 비교하여 정확히 무엇이 다른지 보여줍니다. 누락된 파일, 크기 불일치, 날짜 차이, 한쪽에만 존재하는 파일이 모두 명확하게 표시됩니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 폴더 비교가 보여주는 것

### 파일 카테고리

두 위치를 비교하면 파일은 다음과 같이 분류됩니다.

- **일치(Match)** — 두 위치에 동일한 크기와 수정 시간으로 파일이 존재합니다. ✅
- **왼쪽에만 존재(Left only)** — 원본(왼쪽)에만 파일이 존재합니다. 복사가 필요할 수 있습니다.
- **오른쪽에만 존재(Right only)** — 대상(오른쪽)에만 파일이 존재합니다. 고아 파일이거나 여분의 복사본일 수 있습니다.
- **다름(Different)** — 두 위치에 파일이 존재하지만 크기 또는 날짜가 다릅니다. 업데이트가 필요할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Comparison results" class="img-large img-center" />

## 폴더 비교를 사용해야 할 때

### 1) 백업 후 — 완전성 검증

Copy 또는 Sync 작업을 실행한 후 원본과 대상을 비교하세요.

- **모두 일치하나요?** → 백업이 완료된 것입니다.
- **왼쪽에만 존재하는 파일이 있나요?** → 백업되지 않은 파일입니다. 원인을 조사하세요.
- **오른쪽에만 존재하는 파일이 있나요?** → 원본에서는 삭제됐지만 백업에는 남아 있는 파일입니다(Copy 작업에서는 정상입니다).

### 2) 동기화 전 — 변경 사항 미리보기

Sync 작업을 실행하기 전에 비교하여 무엇이 변경될지 확인하세요.

- **왼쪽에만 존재** → 대상으로 복사됩니다.
- **오른쪽에만 존재** → 대상에서 삭제됩니다(Sync에서만 발생!).
- **다름** → 덮어쓰기됩니다.

이는 시각적인 드라이 런과 같습니다.

### 3) 마이그레이션 후 — 누락 여부 확인

한 클라우드에서 다른 클라우드로 마이그레이션한 후:

- 이전 클라우드와 새 클라우드를 비교하세요.
- 모든 파일이 "일치" 또는 "오른쪽에만 존재"(이미 대상에 있음) 상태여야 합니다.
- "왼쪽에만 존재"하는 파일이 있다면 누락된 것이므로 다시 전송해야 합니다.

### 4) 정기 점검 — 드리프트 탐지

예약된 동기화가 있더라도 조용히 문제가 발생할 수 있습니다. 매월 비교를 통해 다음을 발견할 수 있습니다.

- 보고되지 않은 실패한 전송.
- 속도 제한으로 건너뛴 파일.
- 손상된 파일(크기 차이).
- 작업 도중 만료된 OAuth 토큰.

## 실전 예제

### Google Drive와 S3 백업 비교

원본: Google Drive(기본 저장소).
대상: S3(백업).

**정상적인 백업 후 예상 결과:**
- 대부분의 파일: 일치 ✅
- 일부 "왼쪽에만 존재": 마지막 백업 이후 Google Drive에 추가된 파일(다음번에 복사됨).
- 소수 "오른쪽에만 존재": Google Drive에서는 삭제됐지만 백업에는 보존된 파일(백업이 이를 보존했다는 뜻이므로 좋은 신호입니다).

### 두 NAS 볼륨 비교

왼쪽: NAS 볼륨 1(활성 데이터).
오른쪽: NAS 볼륨 2(미러).

**차이가 있다면 미러가 동기화되지 않았다는 뜻입니다.** 즉시 수정하세요.

### 클라우드 계정 해지 전 비교

Dropbox를 해지하기 전:
1. Dropbox와 Google Drive(데이터를 마이그레이션한 곳)를 비교하세요.
2. "왼쪽에만 존재"하는 파일이 0개인지 확인하세요(Dropbox의 모든 파일이 Google Drive에 있어야 함).
3. 그런 다음에만 Dropbox를 해지하세요.

## 비교 옵션

### 확인 방법

- **크기(Size)** — 파일 크기를 비교합니다. 빠르지만 비트 단위 손상은 감지하지 못합니다.
- **수정 시간(Modification time)** — 타임스탬프를 비교합니다. 업데이트된 파일을 감지하는 데 유용합니다.
- **체크섬(Checksum)** — 파일 해시(MD5, SHA1)를 비교합니다. 가장 느리지만 가장 철저합니다. 비트 손상과 파일 손상을 감지합니다.

중요한 데이터에는 체크섬을 사용하세요. 일상적인 점검에는 크기와 수정 시간으로 충분합니다.

### 성능 팁

- **대용량 디렉터리(10,000개 이상 파일)** — 비교에 몇 분이 걸릴 수 있습니다. 인내심을 가지세요.
- **클라우드 간 비교** — 양쪽 클라우드를 모두 나열해야 합니다. 효율을 위해 `--fast-list`를 사용하세요.
- **범위 좁히기** — 전체 클라우드 대신 특정 하위 디렉터리를 비교하면 더 빠른 결과를 얻을 수 있습니다.

## 차이에 대응하기

비교 후에는 바로 조치를 취할 수 있습니다.

- **왼쪽에만 존재하는 파일** → 선택하여 오른쪽으로 복사합니다.
- **다른 파일** → 선택하여 오른쪽에서 업데이트합니다.
- **오른쪽에만 존재하는 파일** → 보관할지 삭제할지 검토합니다.

이로써 폴더 비교는 단순한 진단 도구가 아니라 워크플로 도구가 됩니다.

## 배치 작업과의 통합

v1.3 배치 작업(Batch Jobs)에는 비교 단계를 포함할 수 있습니다.

1. 원본 → 대상으로 복사합니다.
2. 원본과 대상을 비교합니다.
3. Slack을 통해 차이를 보고합니다.

이 자동화된 백업 후 검증 워크플로를 통해 백업 상태를 항상 파악할 수 있습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 비교하려는 **두 위치를 추가**하세요.
3. 두 위치 간에 **폴더 비교를 실행**하세요.
4. 일치, 왼쪽에만 존재, 오른쪽에만 존재, 다름 등 **결과를 검토**하세요.
5. 복사, 업데이트, 조사 등 **차이에 대응**하세요.

검증할 수 없다면 신뢰할 수도 없습니다.

---

**관련 가이드:**

- [폴더 내용 비교하기](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [동기화 작업 생성하기](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [작업 기록 및 모니터링](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
