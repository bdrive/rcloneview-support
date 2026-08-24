---
slug: folder-compare-size-change-discovery-rcloneview
title: "가장 큰 변경 사항 찾기 — RcloneView의 Folder Compare 크기 변화 탐색"
authors:
  - steve
description: "RcloneView의 Folder Compare 크기 변화 탐색 도구를 사용해 어떤 클라우드 폴더가 가장 많이, 가장 빠르게 변경되었는지 또는 동기화 전에 검토가 필요한지 확인하세요."
keywords:
  - 폴더 비교 크기 변화 탐색
  - RcloneView 폴더 비교
  - 가장 큰 폴더 변경
  - 클라우드 스토리지 감사
  - 클라우드 폴더 비교
  - 클라우드 파일 변경 감지
  - 클라우드 백업 검증
  - 폴더 크기 변화 추적
  - 클라우드 동기화 모니터링
  - 클라우드 스토리지 변경 감지
tags:
  - RcloneView
  - feature
  - compare
  - folder-comparison
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 가장 큰 변경 사항 찾기 — RcloneView의 Folder Compare 크기 변화 탐색

> 클라우드 트리에 수천 개의 하위 폴더가 있을 때 실제로 무엇이 변경되었는지 찾아내는 것이 가장 어려운 부분입니다 — RcloneView의 크기 변화 탐색 도구가 그것을 대신 찾아줍니다.

대규모 멀티 클라우드 아카이브를 관리하는 사람이라면 누구나 진짜 문제는 비교를 실행하는 것이 아니라 결과를 읽는 것이라는 사실을 알고 있습니다. 수천 개의 하위 폴더가 있는 폴더 트리는 수동으로 훑어보기에는 너무 긴 비교 보고서를 만들어냅니다. RcloneView의 Folder Compare 화면에는 전용 크기 변화 탐색 컨트롤이 포함되어 있어, 정렬되지 않은 파일 목록을 일일이 스크롤하는 대신 조사할 가치가 있는 폴더로 바로 이동할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 크기 변화 탐색이 실제로 하는 일

Folder Compare를 사용하면 로컬 또는 클라우드에 있는 두 폴더를 나란히 시각적으로 비교할 수 있으며, 왼쪽 전용 파일, 오른쪽 전용 파일, 동일한 파일, 다른 파일, 오류 파일을 위한 필터가 함께 제공됩니다. 이러한 필터링 위에 RcloneView는 파일 개수 변화 또는 크기 변화 기준으로 폴더를 찾는 탐색 단축 기능을 추가로 제공하며, 가장 큰 변경, 다음으로 큰 변경, 가장 작은 변경, 다음으로 작은 변경이 있는 폴더로 바로 이동할 수 있습니다.

이 마지막 컨트롤 세트가 RcloneView를 단순한 diff 화면과 구별짓는 부분입니다. 변경이 발생한 위치를 파악하기 위해 모든 하위 폴더를 하나하나 읽는 대신, 비교 도구에 그곳으로 바로 데려가 달라고 요청할 수 있습니다. 이는 공유 미디어 라이브러리, 엔지니어링 저장소, 또는 변화의 90%가 소수의 하위 디렉터리에서 발생하는 클라이언트 폴더 구조처럼 변화가 본질적으로 고르지 않은 리모트에서 가장 유용합니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Selecting comparison result filters in RcloneView Folder Compare" class="img-large img-center" />

## 실제 시나리오

Google Drive와 Backblaze B2 백업 버킷에 걸쳐 수백 개의 프로젝트 폴더를 보유한 공유 클라우드 아카이브를 사용하는 영상 제작 스튜디오를 생각해 보세요. 바쁜 한 주 동안의 편집 작업 후, 이들은 전체 동기화를 실행하기 전에 실제로 어떤 프로젝트 폴더가 변경되었는지 알아야 합니다 — 마지막 자동 작업이 모든 것을 제대로 처리했다고 그냥 믿는 것이 아니라 직접 검증하기 위해서입니다. Folder Compare를 실행하고 "가장 큰 변경"으로 바로 이동하면 활발히 진행 중인 서너 개의 프로젝트가 즉시 드러나는 반면, 수십 개의 손대지 않은 아카이브 폴더는 방해가 되지 않습니다. RcloneView는 또한 Windows, macOS, Linux 전반에 걸쳐 하나의 창에서 90개 이상의 제공업체를 마운트하고 동기화하므로, 상대편이 다른 클라우드든, NAS든, 로컬 드라이브든 동일한 워크플로가 적용됩니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Comparing cloud-to-cloud folder contents in RcloneView" class="img-large img-center" />

## 탐색을 실제 조치로 전환하기

변경된 폴더를 찾은 후에는 동일한 Compare 화면에서 비교 화면을 벗어나지 않고도 바로 조치를 취할 수 있습니다: 오른쪽으로 복사, 왼쪽으로 복사, 또는 선택한 항목 삭제. 이 방식으로 복사된 파일은 자동으로 동일 항목으로 표시되므로, 비교를 다시 실행하면 같은 폴더가 다시 표시되는 대신 수정된 상태가 반영됩니다. 반복적인 감사를 위해서는 수동 Compare 실행과 예약된 동기화 작업을 함께 사용하면 크기 탐색이 유일한 방어선이 아니라 부분 점검 역할을 하게 됩니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing job history after a folder compare and sync in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Home 탭에서 Compare 화면을 열고 비교할 두 소스 폴더를 선택하세요.
3. 비교를 실행한 다음, 가장 큰/가장 작은 변경 탐색 기능을 사용해 중요한 폴더로 이동하세요.
4. 결과 화면에서 직접 복사하거나 삭제한 다음, Compare를 다시 실행해 폴더가 이제 동일하게 표시되는지 확인하세요.

눈으로 읽기에는 너무 큰 클라우드 트리를 관리하는 사람에게, 크기 탐색은 압도적인 비교를 확인해야 할 폴더의 짧고 우선순위가 매겨진 목록으로 바꿔줍니다.

---

**관련 가이드:**

- [폴더 비교 가이드 — RcloneView로 차이점 감지하기](https://rcloneview.com/support/blog/folder-comparison-guide-detect-differences-rcloneview)
- [RcloneView의 필터를 이용한 폴더 비교](https://rcloneview.com/support/blog/folder-compare-with-filter-rcloneview)
- [Dry Run — 클라우드 동기화 전 미리보기](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)

<CloudSupportGrid />
