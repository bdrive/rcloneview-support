---
slug: fix-empty-folders-not-syncing-rcloneview
title: "빈 폴더가 동기화되지 않는 문제 해결하기 — RcloneView로 디렉터리 생성 활성화하기"
authors:
  - robin
description: "클라우드 동기화 중 빈 폴더가 사라지는 이유와 RcloneView의 빈 디렉터리 생성 옵션으로 이를 해결하는 방법을 알아보세요."
keywords:
  - 빈 폴더 동기화 안됨
  - 클라우드 동기화 폴더 누락 해결
  - RcloneView 빈 디렉터리 생성
  - 클라우드 동기화 폴더 구조
  - rclone 빈 디렉터리 동기화
  - 폴더 구조 유지되지 않음
  - 동기화 시 빈 폴더 누락
  - RcloneView 동기화 설정
tags:
  - RcloneView
  - troubleshooting
  - tips
  - sync
  - job-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 빈 폴더가 동기화되지 않는 문제 해결하기 — RcloneView로 디렉터리 생성 활성화하기

> 동기화 작업이 정성껏 정리한 빈 폴더를 남겨두고 간다면, 해결책은 클라우드 제공업체의 버그가 아니라 RcloneView 동기화 설정의 토글 하나입니다.

rclone을 포함한 대부분의 동기화 엔진은 실제로 데이터를 담고 있는 오브젝트만 전송합니다 — 빈 폴더는 복사할 것이 없으므로 기본적으로 완전히 건너뛰어집니다. 이는 단순한 백업에는 문제가 없지만, 프로젝트 템플릿이나 클라이언트 인테이크 트리, 또는 파일이 도착하기 전부터 팀이 보게 될 것으로 기대하는 플레이스홀더 디렉터리처럼 고정된 폴더 구조에 의존하는 워크플로에는 지장을 줍니다. RcloneView는 이 동작을 제어하는 설정을 동기화 마법사에서 직접 노출하므로, 설정 파일을 건드리거나 작업을 무작정 다시 실행할 필요가 없습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 빈 폴더가 누락되는 이유

RcloneView가 (rclone을 통해) 동기화 중 소스 트리를 탐색할 때, 전송 목록은 디렉터리가 아닌 파일을 기준으로 구성됩니다. 그 아래 어디에도 파일이 없는 하위 폴더만 담고 있는 폴더는 전송 가능한 오브젝트를 하나도 만들어내지 못하므로, 대상 측에 그 폴더가 존재해야 한다는 신호가 전혀 전달되지 않습니다. 이는 결함이 아니라 예상된 동기화 동작이지만, 폴더 간 동기화가 빈 가지까지 포함해 트리 구조를 그대로 보존한다고 가정하는 사람에게는 놀라운 결과로 다가옵니다.

<img src="/support/images/en/blog/new-remote.png" alt="1단계 구성 옵션을 보여주는 RcloneView 동기화 설정 마법사" class="img-large img-center" />

이 설정은 소스, 대상, 동기화 방향과 함께 동기화 구성 마법사의 1단계에 있습니다 — 기본적으로 꺼져 있어서 처음 볼 때는 놓치기 쉽습니다.

## 빈 디렉터리 생성 옵션 켜기

4단계 동기화 마법사의 1단계에서 작업을 저장하기 전에 "빈 디렉터리 생성" 옵션을 활성화하세요. 이 옵션을 켜면 RcloneView는 rclone에 현재 파일이 없는 가지까지 포함해 대상에 전체 디렉터리 구조를 복제하도록 지시합니다. 이는 예약을 통해 반복적으로 실행되는 작업에서 가장 중요합니다 — 오늘은 비어 있는 폴더라도 다음 주에는 파일을 받을 수 있으며, 대상 구조가 미리 준비되어 있으면 새 콘텐츠가 어디에 위치해야 하는지에 대한 혼란을 피할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView 동기화 구성 1단계의 빈 디렉터리 생성 토글" class="img-large img-center" />

마운트 전용 도구와 달리 RcloneView는 FREE 라이선스에서도 동기화와 폴더 비교까지 지원하므로, 이 해결책은 하나의 대상만 미러링하든 1:N 동기화로 여러 대상에 소스를 분산시키든 동일하게 적용됩니다.

## Dry Run으로 수정 사항 검증하기

전체 동기화를 실행하기 전에 RcloneView의 Dry Run 기능을 사용해 어떤 폴더와 파일이 생성되거나 변경될지 정확히 미리 확인하세요. Dry Run은 대상을 건드리지 않고 대기 중인 작업 목록을 표시하며, 이는 실제로 작업을 실행하기 전에 빈 폴더가 제대로 나타날지 확인할 수 있는 신뢰할 만한 방법입니다 — 특히 이미 오랫동안 실행되어 온 작업에 이 옵션을 소급 적용하는 경우에 유용합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView에서 동기화 작업을 실행하기 전 드라이 런 미리보기 실행하기" class="img-large img-center" />

옵션을 활성화하지 않은 채 이미 실행된 예약 작업이 있다면, "빈 디렉터리 생성"을 체크한 상태로 다시 저장하고 한 번 더 실행하세요 — 다음 실행에서 대상의 누락된 디렉터리 구조가 보완됩니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 동기화 작업을 열거나 새로 만든 뒤 1단계: 스토리지 구성으로 이동하세요.
3. 저장하기 전에 "빈 디렉터리 생성"을 체크하세요.
4. 먼저 Dry Run을 실행해 폴더 구조가 예상과 일치하는지 확인하세요.

체크박스 하나만으로 동기화하는 모든 클라우드에서 폴더 구조를 그대로 유지할 수 있습니다.

---

**관련 가이드:**

- [폴더 비교 가이드 — RcloneView로 차이점 탐지하기](https://rcloneview.com/support/blog/folder-comparison-guide-detect-differences-rcloneview)
- [Dry Run — RcloneView로 전송 전 클라우드 동기화 미리보기](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)
- [필터 규칙 — RcloneView로 선택적 동기화하기](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)

<CloudSupportGrid />
