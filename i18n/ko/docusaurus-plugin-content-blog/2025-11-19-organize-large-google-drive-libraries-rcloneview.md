---
slug: organize-google-drive-libraries-rcloneview
title: "RcloneView로 대용량 Google Drive 라이브러리 정리하기 -- 정렬, 필터, 비교, 중복 파일 정리"
authors:
  - tayson
description: RcloneView의 듀얼 패널 탐색기, Compare 필터, 선택적 복사/삭제 작업을 활용해 방대한 Google Drive 라이브러리를 정리하고, Drive 웹 UI보다 빠르게 중복 파일을 제거하세요.
keywords:
  - google drive cleanup
  - google drive remove duplicates
  - organize google drive files
  - rcloneview compare
  - rclone filter
  - rclone dedupe
  - drive duplicate finder
  - manage google workspace storage
  - cloud file management
  - rclone gui
tags:
  - google-drive
  - productivity
  - cleanup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 대용량 Google Drive 라이브러리 정리하기 -- 정렬, 필터, 비교, 중복 파일 정리

> "공유 문서함"이 미로처럼 복잡해지고 중복된 ZIP 파일이 용량을 갉아먹을 때, RcloneView는 정리 작업을 주말 프로젝트가 아닌 안내된 워크플로로 바꿔줍니다.

지저분한 Google Drive 트리는 대개 사소하게 시작됩니다. 디자이너가 아무 폴더에나 내보낸 파일을 던져 넣고, 자동 저장된 문서는 여기저기서 버전이 늘어나며, 공유 드라이브는 대행사의 예전 구조를 그대로 물려받습니다. Google은 수동 검색 정도만 제공하기 때문에 팀은 중복 자산, 비대해진 캐시 폴더, 뒤죽박죽인 명명 규칙을 감수하며 살아갑니다. RcloneView는 rclone 위에 듀얼 패널 GUI를 얹어, 수백만 개의 객체를 한눈에 파악하고 크기나 날짜순으로 정렬하며, 불필요한 경로를 필터링하고 중복 파일을 확신을 갖고 삭제할 수 있게 해줍니다.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Google Workspace 테넌트에 정리 계획이 필요한 이유

- 웹용 Drive는 실제 폴더 크기를 숨기고 나란히 비교하는 기능이 없어, 무엇을 삭제해도 되는지 판단하기가 어렵습니다.
- 중복된 아카이브나 미디어 미리보기는 특히 Business Standard/Plus 요금제에서 공유 저장 공간 비용을 크게 잡아먹습니다.
- 법무, 마케팅, 엔지니어링 팀은 자동화가 최신 파일을 찾을 수 있도록 결정론적인 폴더 경로(예: `/Brand/2023/Campaign-A`)가 필요합니다.
- 정기적인 검토 없이는 방치된 녹화본과 내보내기 파일이 쌓여, 접근 정책이 바뀔 때 컴플라이언스 위험을 초래합니다.

## RcloneView가 Google Drive 정리를 가속하는 방법

RcloneView는 검증된 rclone 백엔드를 활용해 Drive 콘텐츠를 로컬 파일 관리자처럼 보여줍니다.

- **듀얼 패널 탐색기:** 두 개의 Drive 폴더를 마운트하거나 Drive와 아카이브 공간을 비교해, 삭제하기 전에 무엇이 변경되었는지 확인할 수 있습니다.
- **Compare 뷰 컨트롤:** 왼쪽에만 있는 파일, 오른쪽에만 있는 파일, 서로 다른 파일을 강조 표시한 뒤, [/support/howto/rcloneview-basic/compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents)에 문서화된 동일한 UI로 일괄 복사하거나 삭제할 수 있습니다.
- **필터링 도구:** Plus 라이선스 사용자는 같은 가이드의 필터링 섹션에 나온 절차에 따라 Compare 필터 안에서 캐시, 렌더 파일, `.git/` 폴더를 직접 제외할 수 있습니다.
- **결과 토글 & 이동 도구:** 뷰를 전환(Left-only, Right-only, Different)하고, Compare의 "찾기" 아이콘을 이용해 크기/개수 차이가 가장 큰 폴더로 바로 이동할 수 있습니다.
- **안전한 작업:** 모든 삭제나 복사 작업은 rclone의 검사를 거치므로 Compare에서 강조된 파일만 건드리게 되어, 실수로 무작정 삭제하는 상황을 피할 수 있습니다.

  <img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## 준비 체크리스트

| 항목                    | 중요한 이유                                                                                                                |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Google Workspace 권한 범위 | 정리하려는 공유 드라이브 또는 내 드라이브 영역에 최소 콘텐츠 관리자 권한이 있는 계정을 사용하세요.                      |
| 최신 RcloneView 빌드 | 정리 작업을 실행하기 전에 먼저 업데이트(Help -> Check for updates)하여 최근 개선된 Compare 안정성과 대용량 폴더 정렬 수정 사항을 적용하세요.      |
| Plus 라이선스 (선택 사항) | Compare Filter UI를 사용하려면 필요합니다. Plus가 없어도 비교/복사/삭제는 가능하지만 필터링 패턴은 비활성화된 상태로 남습니다.       |
| 기준 대상 위치    | 불필요한 파일을 삭제하기 전에 꼭 보관해야 할 데이터를 복사할 수 있도록 두 번째 Drive 폴더, NAS, S3 버킷을 연결하는 것을 고려하세요.           |

## 단계별 정리 청사진

### 1. 어질러진 상태 파악하기

원격 탐색기를 열고 관심 있는 Drive 위치(공유 드라이브, 부서별 폴더, 개인 내 드라이브)를 연결하세요. 나중에 Compare에서 알아보기 쉽도록 각 리모트에 명확한 이름을 붙이세요(예: `drive_creative`, `drive_finance_archive`).

### 2. Compare로 스냅샷 찍기

분석하려는 두 폴더를 여세요. 예를 들어 왼쪽에 `drive_creative:/2023/Projects`, 오른쪽에 `drive_creative:/Archive/2023`을 엽니다. **Compare**(Home 리본)를 클릭하세요. 요약 창에 완료가 표시되면 Compare 탭으로 전환해 집계된 개수와 파일 상태를 확인합니다([전체 안내](/howto/rcloneview-basic/compare-folder-contents#display-by-selected-result-type)).

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />
  
  

### 3. 노이즈를 걸러내고 신호에 집중하기

**Filter** 아이콘을 클릭해 렌더 파일, 프록시, 기타 불필요한 폴더를 제외하세요. 숨기고 싶은 항목에 따라 `Cache/`, `_Proxies/`, `.bak`, `.zip` 같은 패턴을 추가합니다. 필터는 해당 Compare 세션 동안 유지되므로, 의미 있는 파일만 남을 때까지 스캔을 반복해서 실행할 수 있습니다(같은 사용법 문서의 "필터를 사용해 비교 결과 다듬기" 참고).

### 4. Compare 뷰로 중복 파일 찾아내기

Compare 툴바를 사용해 차이점에 집중한 뒤, 변화가 가장 큰 폴더로 이동하세요.

- **Left-only**는 작업 폴더에는 있지만 아카이브에는 없는 파일을 보여줍니다.
- **Right-only**는 이미 아카이브된 파일을 나타내며, 작업 사본을 삭제해도 안전하다는 신호입니다.
- **Different**는 이름은 같지만 크기가 다른 파일을 드러내는데, 대개 중복된 내보내기 파일인 경우가 많습니다.
- (Compare 가이드에 문서화된) **Find** 아이콘을 사용해 크기나 파일 개수 차이가 가장 큰 폴더로 바로 이동해 먼저 정리하세요.

문제가 되는 항목을 선택(`Ctrl`+클릭 또는 `Shift`+클릭)하고 복사할지 삭제할지 머릿속으로 표시해 두세요.

### 5. 보관할 파일은 복사하고, 나머지는 정리하기

보존하고 싶은 폴더를 찾았다면 **Copy -&lt;** 또는 **&lt;- Copy**를 클릭해 안전한 대상 위치로 옮기세요. 복사가 완료되었는지 확인한 뒤(사용법 문서에 언급된 동일 아이콘 확인), 정리하려는 쪽에서 중복 파일을 선택하고 **Delete**를 누르세요. Drive API에 과부하가 걸리지 않도록 배치 단위로 작업하고, 상태 표시줄에서 성공 건수를 확인하세요.

### 6. 드래그 앤 드롭으로 구조 재구성하기

수십 개의 프로젝트 폴더를 새로운 분류 체계로 옮겨야 하나요? (Compare 밖의) 탐색기 패널을 사용해 폴더 전체를 더 나은 위치로 드래그하거나 그 자리에서 이름을 바꿀 수 있습니다. 모든 작업이 rclone을 통해 실행되므로, 가능한 경우 원격 이동이 서버 측에서 처리되어 시간과 대역폭을 절약할 수 있습니다.

### 7. 기록, 반복, 그리고 자동 보고서 생성

부서별로 Compare 프리셋을 저장해 매달 같은 정리 작업을 다시 실행할 수 있게 하세요. 여기에 `Copy`와 `--dry-run`으로 구성한 일회성 Sync 작업([/support/howto/rcloneview-basic/create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs) 참고)을 결합하면, 보관되거나 삭제될 항목에 대한 보고서를 이해관계자들에게 이메일로 전송할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />
  


## 워크플로 예시

| 시나리오                                      | RcloneView에서 할 일                                                                                                                          |
| --------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| 저장 용량 한도에 도달한 마케팅 공유 드라이브 | `/Assets/`와 `/Archive/Assets/`를 비교하고, `/_Proxies/`를 필터링하고, 클라이언트 승인 폴더를 아카이브로 복사하고, 중복된 RAW 덤프를 삭제합니다.          |
| 교사 폴더를 정리하는 교육 기관        | **Different**와 **Left-only** 뷰를 사용해 오래된 수업 폴더를 찾아내고, 최종 강의계획서를 컴플라이언스 보관소로 복사하고, 중복된 내보내기 파일을 삭제합니다.         |
| 정리해고/법적 보류를 준비하는 엔지니어링 팀  | `My Drive` 스냅샷을 법적 보류 버킷과 비교하고, `.git/`을 필터링하고, 산출물을 복사한 뒤, 나머지는 감사 가능한 로그와 함께 삭제 대상으로 표시합니다. |

## 원활한 정리를 위한 모범 사례

- 삭제하기 전에 먼저 **dry-run** Compare를 실행해 개수를 파악하세요.
- Drive API 제한을 피하기 위해 Compare 세션은 각각 50만 개 객체 이하로 유지하세요. 필요하다면 연도나 부서별로 나누세요.
- 업무 시간 중 속도 제한에 걸리지 않도록 대량 삭제 작업은 저녁이나 주말로 옮기세요.
- 보고서만 필요할 때는 읽기 전용 서비스 계정을 사용하고, 실제 정리 작업 시에는 권한이 상승된 계정으로 전환하세요.

## 앞으로도 Drive를 가볍게 유지하기

팀이 RcloneView로 Drive 폴더를 비교, 필터링, 정렬하는 속도가 얼마나 빠른지 경험하고 나면, 긴급 용량 문제가 터질 때까지 기다리는 대신 매달 정기적인 관리 작업을 예약할 의지가 생깁니다. 정리 방법을 SOP로 문서화하고, Compare 프리셋을 내보내 모든 공유 드라이브 소유자와 공유해 중복 파일과 불필요한 파일이 다시는 쌓이지 않도록 하세요.


<CloudSupportGrid />
