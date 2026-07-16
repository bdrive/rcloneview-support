---
slug: lsf-lsjson-remote-file-listing-rcloneview
title: "RcloneView 탐색기로 원격 파일 목록 확인 및 분석하기"
authors:
  - tayson
description: "RcloneView 탐색기를 사용해 원격 클라우드 파일을 시각적으로 나열, 정렬, 분석하세요. rclone lsf 및 lsjson 명령어를 직관적인 GUI 파일 관리로 대체합니다."
keywords:
  - rcloneview
  - rclone lsf
  - rclone lsjson
  - remote file listing
  - cloud storage analysis
  - file size analysis
  - cloud file management
  - storage usage
  - directory comparison
  - cloud file explorer
tags:
  - feature
  - file-management
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView 탐색기로 원격 파일 목록 확인 및 분석하기

> 클라우드 계정 전체에 무엇이 저장되어 있는지 파악하는 것은 효과적으로 관리하기 위한 첫걸음입니다. **RcloneView** 탐색기는 복잡한 CLI 명령어를 직관적인 탐색, 정렬, 분석으로 대체하는 시각적 파일 목록 확인 경험을 제공합니다.

rclone CLI는 다양한 형식으로 파일 세부 정보를 출력하는 `lsf`, `lsjson` 같은 강력한 파일 목록 명령어를 제공합니다. 이러한 명령어는 스크립팅에 유용하지만 일상적인 파일 탐색에는 이상적이지 않습니다. 특정 파일을 찾거나 저장 공간을 많이 차지하는 항목을 식별하기 위해 수천 줄의 터미널 출력을 읽는 것은 번거롭고 실수하기 쉽습니다.

RcloneView의 탐색기는 이러한 경험을 시각적이고 상호작용이 가능한 형태로 바꿔줍니다. 동일한 기반 데이터를 정렬, 필터링, 다중 열 보기가 가능한 익숙한 파일 관리자 인터페이스로 제공받을 수 있습니다. 파일 크기, 수정 날짜, 유형을 한눈에 확인하고, 클릭 한 번으로 디렉터리 구조를 파고들 수 있습니다.

원시 CLI 출력이 여전히 필요한 사용자를 위해, RcloneView의 내장 터미널은 `rclone lsf`와 `lsjson` 명령어를 키 입력 한 번으로 사용할 수 있게 해주어, 하나의 애플리케이션에서 두 방식의 장점을 모두 누릴 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 탐색기에서 시각적으로 파일 목록 확인하기

RcloneView의 탐색기 패널은 설정된 모든 리모트의 내용을 표준 파일 관리자 레이아웃으로 표시합니다. 리모트를 선택하고 디렉터리로 이동하면 다음을 확인할 수 있습니다.

- 일반적인 파일 유형을 알아볼 수 있는 아이콘과 함께 표시되는 **파일 및 폴더 이름**.
- 사람이 읽기 쉬운 형식(KB, MB, GB)으로 표시되는 **파일 크기**.
- 각 파일이 마지막으로 업데이트된 시점을 보여주는 **수정 날짜**.
- 각 폴더에 몇 개의 항목이 있는지 확인할 수 있는 디렉터리의 **파일 개수**.

이는 `rclone lsf --format "pst" remote:path`를 실행하는 것의 시각적 등가물이지만, 모든 항목과 직접 상호작용할 수 있다는 차이가 있습니다. 폴더를 클릭하면 열립니다. 파일을 마우스 오른쪽 버튼으로 클릭하면 복사, 이동, 삭제 같은 작업을 수행할 수 있습니다. 여러 파일을 선택해 일괄 작업을 수행할 수도 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## 크기, 날짜, 이름으로 정렬하기

원격 파일 목록을 확인하는 가장 흔한 이유 중 하나는 특정 항목을 찾거나 패턴을 식별하는 것입니다. RcloneView의 탐색기는 이를 간단하게 만들어주는 열 기반 정렬을 지원합니다.

- **크기순 정렬**로 저장 공간 할당량을 가장 많이 차지하는 대용량 파일을 빠르게 찾을 수 있습니다. 이는 저장 용량 제한이 있는 클라우드 제공업체의 경우, 소수의 대용량 파일이 사용량 대부분을 차지할 때 특히 유용합니다.
- **날짜순 정렬**로 최근 수정된 파일을 확인하거나, 몇 달 동안 손대지 않은 오래된 콘텐츠를 찾거나, 최근 동기화 작업이 예상한 파일을 업데이트했는지 확인할 수 있습니다.
- 대략 무엇을 찾고 있는지 알고 있을 때는 **이름순 정렬**로 알파벳순으로 탐색할 수 있습니다.

열 머리글을 클릭하면 해당 열을 기준으로 정렬됩니다. 다시 클릭하면 정렬 순서가 반대로 바뀝니다. 이 간단한 상호작용은 CLI에서 `rclone lsf` 출력을 `sort` 명령어로 파이프하는 작업을 대체합니다.

## 대용량 파일 찾기 및 저장 공간 사용량 분석하기

저장 비용은 누적되며, 공간이 어디에 사용되고 있는지 아는 것은 비용 관리에 필수적입니다. RcloneView는 별도의 감사 스크립트를 실행하지 않고도 저장 공간 사용량을 분석하는 데 도움을 줍니다.

1. 탐색기에서 리모트의 루트로 이동합니다.
2. 크기 내림차순으로 정렬하여 가장 큰 파일을 즉시 표면화합니다.
3. 대용량 디렉터리를 파고들어 어떤 하위 디렉터리가 전체 사용량에 가장 많이 기여하는지 확인합니다.

이 워크플로는 `rclone lsjson --recursive remote: | jq 'sort_by(.Size) | reverse'`를 실행하고 JSON 출력을 시각적으로 파싱하려는 일반적인 CLI 패턴을 대체합니다. 탐색기에서는 동일한 정보가 정렬 가능하고 클릭 가능한 인터페이스로 제공됩니다.

더 깊이 있는 분석을 위해서는 RcloneView의 내장 터미널을 사용해 `rclone ncdu remote:`를 실행하면 애플리케이션 내에서 바로 상호작용 가능한 저장 공간 사용량 분석을 확인할 수 있습니다.

## 디렉터리 트리 비교하기

RcloneView의 2단 탐색기 레이아웃은 여러 리모트 간의 디렉터리 내용을 비교하도록 설계되었습니다. 왼쪽에 하나의 리모트를 불러오고 오른쪽에 다른 리모트를 불러온 다음, 구조를 시각적으로 비교하세요.

- 한쪽 리모트에는 존재하지만 다른 쪽에는 없는 파일을 식별합니다.
- 불완전한 전송을 나타낼 수 있는 파일 크기 차이를 발견합니다.
- 동기화 작업이 예상한 결과를 만들어냈는지 확인합니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

내장 비교 기능은 한 걸음 더 나아가 두 디렉터리 간의 차이점을 자동으로 강조 표시합니다. 이는 `rclone check source: dest:`를 실행하는 것의 시각적 등가물이지만, 차이점에 즉시 조치를 취할 수 있는 상호작용 디스플레이가 함께 제공됩니다.

## 고급 쿼리를 위한 내장 터미널 사용하기

시각적 탐색기가 제공하는 범위를 넘어서는 고급 파일 목록 확인 요구에 대해, RcloneView는 내장 터미널을 포함하고 있습니다. 이를 통해 다음을 포함한 모든 rclone CLI 명령어에 직접 접근할 수 있습니다.

**`rclone lsf`**로 간단한 형식의 목록 확인:
```
rclone lsf remote:documents --format "pst" --recursive
```
경로, 크기, 타임스탬프가 포함된 모든 파일을 파이핑이나 저장에 적합한 평면 형식으로 나열합니다.

**`rclone lsjson`**으로 구조화된 데이터 확인:
```
rclone lsjson remote:documents --recursive --no-modtime
```
파일 메타데이터를 JSON으로 출력하며, 프로그래밍 방식 분석이나 다른 도구에 입력하는 데 유용합니다.

**`rclone size`**로 저장 공간 요약 확인:
```
rclone size remote:
```
리모트에 저장된 파일과 바이트의 빠른 총계를 제공합니다.

터미널은 RcloneView 내에서 실행되므로, 별도의 콘솔을 열거나 rclone 경로를 설정할 필요가 없습니다. 기존에 설정한 리모트 구성을 바로 사용할 수 있습니다.

## 여러 리모트를 동시에 탐색하기

RcloneView의 탐색기는 여러 리모트를 동시에 여는 것을 지원합니다. 이는 여러 클라우드 제공업체에 걸쳐 파일을 관리하는 사용자에게 특히 유용합니다.

- 한쪽 창에는 Google Drive를, 다른 쪽에는 OneDrive를 열어 폴더 구조를 비교합니다.
- 해당하는 로컬 디렉터리를 참조하면서 S3 버킷을 탐색합니다.
- Backblaze B2와 Wasabi의 파일을 나란히 확인하여 여러 제공업체 간 백업을 검증합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

각 창은 독립적으로 작동하므로 다른 창에 영향을 주지 않고 자신의 속도에 맞춰 탐색, 정렬, 열람할 수 있습니다. 리모트 간에 이동해야 할 파일을 찾으면 드래그 앤 드롭으로 간단히 옮길 수 있습니다.

## 실용적인 파일 분석 워크플로

다음은 RcloneView에서 일반적인 파일 분석 작업을 수행하는 방법입니다.

**마이그레이션 전 클라우드 저장 공간 감사:**
소스 리모트를 탐색하고, 날짜순으로 정렬하여 활성 파일과 오래된 파일을 구분한 다음, 마이그레이션할 항목과 보관하거나 삭제할 항목을 결정합니다. 이 준비 단계는 마이그레이션 시간과 비용을 크게 줄일 수 있습니다.

**백업 완전성 검증:**
소스 리모트와 백업 리모트를 나란히 열고, 각각에서 동일한 디렉터리로 이동한 다음, 비교 기능을 사용해 모든 파일이 올바르게 복사되었는지 확인합니다.

**중복 또는 오래된 파일 찾기:**
이름순으로 정렬하여 이름이 비슷한 파일을 찾거나, 날짜순으로 정렬하여 몇 년 동안 수정되지 않은 파일을 찾습니다. 불필요한 파일을 제거하여 저장 공간 할당량을 확보하고 비용을 줄입니다.

**파일 인벤토리 생성:**
내장 터미널을 사용해 `rclone lsjson --recursive remote:`를 실행하고 출력을 문서화, 규정 준수, 또는 감사 목적으로 저장합니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. 리모트 관리자에서 클라우드 스토리지 리모트를 추가합니다.
3. 탐색기를 열고 아무 리모트나 탐색하여 크기, 날짜, 유형이 포함된 파일을 확인합니다.
4. 정렬, 비교, 내장 터미널을 사용해 더 깊이 있는 분석을 수행합니다.

빠르게 시각적으로 훑어보든 상세한 파일 인벤토리가 필요하든, RcloneView의 탐색기는 CLI 구문을 기억할 필요 없이 모든 정보를 손끝에서 제공합니다.

---

**관련 가이드:**

- [원격 스토리지 탐색 및 관리](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [폴더 내용 비교](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [실시간 전송 모니터링](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />
