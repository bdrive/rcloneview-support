---
slug: folder-compare-with-filter-rcloneview
title: "필터를 사용한 폴더 비교 — RcloneView의 정밀 비교"
authors:
  - alex
description: "RcloneView의 필터 규칙으로 폴더 비교에서 불필요한 항목을 제외하세요 — 비교 전에 빌드 산출물, 캐시, 원치 않는 파일 유형을 건너뛰세요."
keywords:
  - 폴더 비교 필터
  - 비교에서 파일 제외
  - RcloneView 필터 규칙
  - 폴더 비교 제외 패턴
  - 클라우드 폴더 차이 필터
  - .git 폴더 비교 건너뛰기
  - 선택적 폴더 비교
  - 클라우드 백업 검증 필터
tags:
  - RcloneView
  - feature
  - folder-comparison
  - filters
  - compare
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 필터를 사용한 폴더 비교 — RcloneView의 정밀 비교

> 전체 폴더 비교는 애초에 신경 쓰지 않았던 파일들에 결과가 파묻히지 않을 때만 유용합니다.

두 개의 대용량 스토리지 위치 사이에서 일반 폴더 비교를 실행하면, 실제로 확인해야 하는 데이터와는 무관한 차이점들로 가득 찬 결과가 나오는 경우가 많습니다 — 빌드 캐시, `.git` 폴더, 임시 파일, 그리고 애초에 백업할 필요가 없었던 ISO 파일들이 그렇습니다. RcloneView의 필터를 사용한 폴더 비교(Folder Compare with Filter)를 사용하면 비교가 실행되기 전에 이런 항목들을 제외할 수 있어, 결과가 실제로 중요한 파일만 반영하게 됩니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 필터링된 비교가 중요한 이유

두 개의 대형 디렉터리 트리 사이의 원시 비교는 모든 파일을 동등하게 중요한 것으로 취급하므로, 방대한 `.git` 기록이 있는 소스 리포지토리나 `.iso` 이미지로 가득 찬 프로젝트 폴더가 실제로 찾으려는 차이점들을 압도해 버릴 수 있습니다. 비교 범위를 관련 폴더 이름과 파일 유형으로 필터링하면, 잡음이 많고 읽기 어려운 결과가 관심 있는 데이터에서 정확히 무엇이 변경되었는지를 보여주는 집중된 목록으로 바뀝니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView의 필터링된 폴더 비교 결과" class="img-large img-center" />

RcloneView는 FREE 라이선스에서도 동기화와 폴더 비교를 제공하며, 이를 필요로 하는 팀을 위한 PLUS 등급의 향상 기능으로 필터링된 비교가 그 위에 추가됩니다.

## 필터 규칙 설정하기

필터 규칙은 RcloneView의 다른 곳에서 사용되는 것과 동일한 패턴을 따릅니다: 확장자, 폴더 경로, 또는 정확한 폴더 이름으로 제외합니다. `.iso`와 같은 규칙은 위치에 상관없이 모든 ISO 파일을 비교에서 제외하고, `/.git/*`는 루트 레벨의 `.git` 파일만 제외하며, `/.git/`는 루트 `.git` 폴더 자체를 제거하고, `.git/`는 아무리 깊이 중첩되어 있어도 모든 `.git` 폴더를 제거합니다. 여러 규칙을 조합하여 검토할 가치가 있는 파일 유형과 경로로 비교 범위를 정확히 좁힐 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 폴더 비교를 위한 필터 규칙 구성하기" class="img-large img-center" />

이는 PLUS 라이선스 기능입니다 — 필터링되지 않은 기본 폴더 비교(왼쪽 전용, 오른쪽 전용, 동일 파일, 다른 파일 표시)는 모든 라이선스 등급에서 사용할 수 있으며, 필터링은 동일한 비교 엔진 위에 구축됩니다.

## 실전 필터링 시나리오

프로젝트 폴더를 클라우드 백업과 비교하는 개발 팀은 일반적으로 `node_modules/`, `.git/`, 빌드 출력 디렉터리를 제외합니다. 이러한 항목들은 재생성이 가능하므로 백업이 완전한지 여부를 판단하는 데 반영되어서는 안 되기 때문입니다. RAW 사진 라이브러리를 보관하는 미디어 팀은 사이드카 캐시 파일과 썸네일 미리보기를 제외하여 비교가 실제 이미지 자산에 집중되도록 하는 경우가 많습니다. 그리고 두 클라우드 계정 간의 마이그레이션을 감사하는 사람은 이동 중에 남을 필요가 없었던 임시 또는 스크래치 폴더를 제외하여, 왼쪽 전용 및 오른쪽 전용 목록을 실제로 주의가 필요한 파일로만 제한할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="차이점에 대해 조치하기 전에 필터링된 비교 결과 검토하기" class="img-large img-center" />

필터링된 비교가 완료되면, 다른 폴더 비교와 동일한 작업이 적용됩니다: 왼쪽 전용 파일을 오른쪽으로 복사하고, 오른쪽 전용 파일을 삭제하기 전에 검토하고, 다르다고 표시된 항목을 업데이트합니다 — 다만 의도적으로 제외된 파일들의 방해 없이 진행할 수 있습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 홈 탭에서 **비교(Compare)**를 실행하고 두 폴더를 선택하세요.
3. 필터 설정을 열고 제외하고 싶은 폴더 이름과 파일 유형에 대한 제외 규칙을 추가하세요.
4. 비교를 실행하고 실제로 중요한 항목으로 범위가 지정된 결과 목록을 검토하세요.

필터링된 비교는 잡음으로 가득한 벽을 짧고 실행 가능한 목록으로 바꿔줍니다 — 복사, 업데이트, 또는 그대로 둘지를 결정하기 전에 정확히 필요한 것입니다.

---

**관련 가이드:**

- [폴더 비교 심층 분석 — 클라우드 스토리지 위치 간의 모든 차이점 감지하기](https://rcloneview.com/support/blog/folder-comparison-guide-detect-differences-rcloneview)
- [Rclone 필터 규칙 설명 — RcloneView로 포함 및 제외 패턴 사용하기](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)
- [선택적 동기화를 위한 필터 규칙 — RcloneView 가이드](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)

<CloudSupportGrid />
