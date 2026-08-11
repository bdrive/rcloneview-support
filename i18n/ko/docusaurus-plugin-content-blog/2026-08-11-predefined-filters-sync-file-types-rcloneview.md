---
slug: predefined-filters-sync-file-types-rcloneview
title: "사전 정의 필터 — RcloneView에서 필요한 파일만 동기화하기"
authors:
  - steve
description: "RcloneView의 사전 정의 필터를 사용해 전체 폴더를 전송하는 대신 이미지, 동영상, 음악, 문서만 동기화하세요."
keywords:
  - RcloneView 필터
  - 사전 정의 필터
  - 파일 형식 동기화
  - 클라우드 동기화 필터
  - 선택적 동기화
  - 이미지 전용 동기화
  - 동영상 동기화 필터
  - 문서 동기화 필터
  - Google Docs 필터
tags:
  - RcloneView
  - feature
  - filters
  - sync
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 사전 정의 필터 — RcloneView에서 필요한 파일만 동기화하기

> 제외 규칙을 직접 작성하지 않고도, 필요 없는 파일 형식은 건너뛰고 필요한 것만 동기화하세요.

모든 동기화 작업이 폴더 안의 모든 파일을 옮겨야 하는 것은 아닙니다. RAW 파일, PSD 파일, 그리고 그 옆에 놓인 청구서 PDF까지 뒤섞인 공유 드라이브를 백업하는 사진 스튜디오라면 보통 이미지에만 관심이 있습니다. RcloneView의 필터링 설정 단계에는 일반적인 파일 카테고리를 위한 원클릭 사전 정의 필터가 포함되어 있어, 처음부터 사용자 지정 규칙 세트를 만들지 않고도 동기화 작업의 범위를 정확히 필요한 콘텐츠로만 제한할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 사전 정의 필터가 다루는 항목

동기화 마법사의 3단계인 필터링 설정에서는 음악, 동영상, 이미지, 문서, Google Docs, Box Docs에 대해 원클릭 사전 정의 필터를 제공합니다. 하나를 선택하면 작업이 해당 파일 형식만 대상으로 제한됩니다 — 예를 들어 이미지를 선택하면, 소스 폴더 안에 얼마나 깊이 중첩되어 있든, 그 옆에 무엇이 있든 상관없이 동기화 작업이 나머지 모든 것을 무시합니다.

이는 시간이 지나면서 쌓이는 혼합 콘텐츠 폴더에 특히 유용합니다: 내보낸 동영상, 브랜드 문서, 스프레드시트로 가득한 마케팅 팀의 공유 드라이브 전체를 동영상 아카이브 리모트로 그대로 미러링할 필요는 없습니다. 사전 정의 필터 하나만으로도 이후 수동 정리 작업 없이 대상 폴더를 깔끔하게 유지할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView 동기화 마법사에서 사전 정의 파일 형식 필터 선택하기" class="img-large img-center" />

Google Docs 및 Box Docs 옵션은 전송 중 일반 파일처럼 동작하지 않는 공급자 고유의 문서 형식을 특별히 대상으로 합니다 — Google Drive나 Box에서 동기화할 때 네이티브 문서와 업로드된 바이너리 파일을 분리하고 싶은 경우에 유용합니다.

## 사전 정의 필터와 사용자 지정 필터 결합하기

사전 정의 필터는 사용자 지정 규칙과 배타적이지 않습니다. 예를 들어 사전 정의된 이미지 필터에 `/thumbnails/*` 경로 규칙 같은 추가 사용자 지정 제외를 함께 적용하여, 그렇지 않으면 깔끔한 이미지 전용 동기화를 어지럽힐 생성된 미리보기 파일을 잘라낼 수 있습니다. 사용자 지정 필터는 최대 파일 크기와 최대 파일 나이 제약도 지원하므로, RAW 파일 2TB를 보유한 사진 스튜디오라면 이미지 필터와 파일 나이 기준을 결합하여 전체 과거 아카이브가 아닌 최근 촬영분만 동기화할 수 있습니다.

마운트 전용 도구와 달리 RcloneView는 FREE 라이선스에서도 동기화와 폴더 비교를 제공하므로, 일회성 전송을 실행하든 저장된 반복 작업을 실행하든 이 필터링이 동일하게 적용됩니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="두 리모트 사이에서 이미지 파일만 전송하는 필터링된 동기화 작업" class="img-large img-center" />

## 드라이 런으로 필터링 결과 확인하기

크거나 익숙하지 않은 폴더에 필터링된 동기화를 적용하기 전에, 먼저 드라이 런(Dry Run) 모드로 실행해 보세요. 드라이 런은 현재 필터 설정에서 복사 및 삭제될 파일의 정확한 목록을 보여주므로, 사전 정의 필터가 원하는 대로 걸러지고 있는지 — 그리고 실제로 전송하고 싶었던 파일을 조용히 제외하고 있지는 않은지 — 가장 빠르게 확인할 수 있는 방법입니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="필터링된 동기화 작업을 실행하기 전에 드라이 런으로 미리보기" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 새 동기화 작업을 시작하고 소스와 대상 리모트를 선택하세요.
3. 3단계 필터링 설정에서 동기화하려는 콘텐츠 유형에 맞는 사전 정의 필터를 선택하세요.
4. 드라이 런을 실행해 결과를 확인한 다음, 작업을 저장하여 이후 동기화에서도 동일한 필터를 재사용하세요.

파일을 미리 수동으로 정리하는 대신 동기화 단계에서 필터링하면, 대상 폴더를 실제로 필요한 콘텐츠에 집중하도록 유지할 수 있습니다.

---

**관련 가이드:**

- [드라이 런 — RcloneView에서 전송 전 클라우드 동기화 미리보기](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [필터가 적용된 폴더 비교 — RcloneView에서 비교 범위 제한하기](https://rcloneview.com/support/blog/folder-compare-with-filter-rcloneview)
- [Bisync — RcloneView를 이용한 양방향 클라우드 동기화](https://rcloneview.com/support/blog/bisync-bidirectional-cloud-sync-rcloneview)

<CloudSupportGrid />
