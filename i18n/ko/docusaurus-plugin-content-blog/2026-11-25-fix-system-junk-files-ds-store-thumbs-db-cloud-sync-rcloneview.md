---
slug: fix-system-junk-files-ds-store-thumbs-db-cloud-sync-rcloneview
title: "클라우드 동기화의 .DS_Store·Thumbs.db 잡동사니 해결 — RcloneView로 시스템 파일 제외하기"
authors:
  - morgan
description: ".DS_Store, Thumbs.db, desktop.ini 파일이 클라우드 백업을 어지럽히지 않게 하세요. RcloneView 필터로 동기화 작업에서 OS 잡동사니 파일을 제외하는 방법을 알아봅니다."
keywords:
  - ds_store 파일 클라우드 동기화
  - thumbs.db 클라우드 스토리지
  - 시스템 파일 동기화 제외
  - desktop.ini 클라우드 백업
  - rclone ds_store 제외
  - RcloneView 사용자 지정 필터
  - 클라우드 동기화 잡동사니 정리
  - 크로스 플랫폼 클라우드 동기화 잡동사니
  - rclone 숨김 파일 필터
tags:
  - RcloneView
  - troubleshooting
  - tips
  - filters
  - cleanup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 클라우드 동기화의 .DS_Store·Thumbs.db 잡동사니 해결 — RcloneView로 시스템 파일 제외하기

> 운영체제가 만드는 잡동사니 파일을 클라우드 폴더에서 빼내, 매번의 동기화가 사람들이 실제로 쓰는 파일만 옮기도록 하세요.

Mac과 Windows를 함께 쓰는 팀이 동기화하는 공유 클라우드 폴더를 열어 보면, 거의 모든 디렉터리에서 같은 불청객을 만나게 됩니다. macOS Finder가 만든 `.DS_Store`, Windows 탐색기가 만든 `Thumbs.db`와 `desktop.ini`입니다. 이 파일들은 파일 목록을 어지럽히고, 파일 수를 부풀리며, 두 컴퓨터가 같은 폴더를 건드릴 때마다 "다른" 파일로 표시됩니다. RcloneView를 사용하면 동기화 작업에서 이 파일들을 제외하고, 이미 클라우드에 올라간 사본도 정리할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 시스템 파일이 계속 클라우드에 나타나는 이유

이 파일들은 콘텐츠가 아니라 메타데이터입니다. Finder는 아이콘 위치와 보기 설정을 기억하기 위해 `.DS_Store`를 쓰고, Windows는 썸네일 캐시용으로 `Thumbs.db`를, 폴더 사용자 지정 정보 저장용으로 `desktop.ini`를 씁니다. 동기화 도구는 이들을 다른 파일과 똑같이 취급하므로, MacBook에서 단방향 동기화를 하면 방문한 모든 폴더에 `.DS_Store`가 업로드됩니다.

규모가 커지면 문제도 커집니다. 프로젝트 폴더 40,000개를 백업하는 디자인 에이전시라면 버킷에 수만 개의 작은 메타데이터 파일이 쌓일 수 있습니다. 각각이 목록 조회와 비교 대상이 되는 별도 객체이므로 이후 동기화 실행이 느려지고, 동료가 자기 컴퓨터에서 폴더를 탐색할 때마다 파일이 바뀌어 다시 전송됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="동기화 제외 설정 전 RcloneView에서 클라우드 리모트 추가" class="img-large img-center" />

## 사용자 지정 필터로 잡동사니 파일 제외하기

해결은 동기화 마법사에서 시작합니다. **Step 3: Filtering Settings**에서 `.DS_Store`, `Thumbs.db`, `desktop.ini`에 대한 사용자 지정 제외 규칙을 추가하세요. 사용자 지정 필터는 파일 형식, 폴더, 경로 규칙을 받으므로, Mac에서 포맷한 외장 드라이브를 동기화할 때 가끔 나타나는 `.Trashes`나 `.Spotlight-V100` 폴더도 제외할 수 있습니다.

작업을 실제로 실행하기 전에 **Dry Run**을 클릭하세요. 시뮬레이션은 복사되거나 삭제될 모든 파일을 나열하므로, 메타데이터 파일이 전송 목록에서 빠졌는지 확인할 수 있습니다. 여전히 보인다면 규칙의 철자를 확인하세요. 필터 규칙은 기본적으로 대소문자를 구분하므로 `Thumbs.db`는 `thumbs.db`와 일치하지 않습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView에서 필터가 적용된 클라우드 동기화 작업 실행" class="img-large img-center" />

## 이미 클라우드에 있는 파일 정리하기

필터는 새 잡동사니를 막지만, 이미 있는 것은 지우지 않습니다. 한 Explorer 패널에서 클라우드 폴더를, 다른 패널에서 로컬 원본을 연 다음 **Compare**를 사용하세요. 로컬에 더 이상 없는 메타데이터 파일은 "Show right-only files"에 나타나고, 양쪽에 여전히 존재하는 사본은 같은 파일 또는 다른 파일로 표시됩니다. 어느 경우든 비교 화면에서 클라우드 쪽 사본을 선택해 바로 삭제할 수 있습니다.

여기서는 단방향 동기화에 주의하세요. 원본을 대상에 미러링하는 동기화는 원본에 더 이상 없는 대상 파일을 삭제하지만, 제외된 파일은 완전히 건너뜁니다. 따라서 Compare에서 정리하는 방식이 이 파일들을 제거하는 가장 명확하고 신중한 방법입니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="클라우드 쪽에 남은 시스템 파일을 보여 주는 RcloneView의 Folder Compare" class="img-large img-center" />

## 매번 깨끗하게 유지하기

필터가 적용된 동기화를 Job Manager에 작업으로 저장하면 매번 제외 규칙이 적용됩니다. RcloneView는 Windows, macOS, Linux에서 같은 필터로 이 작업을 실행하므로, 업로드하는 사람들이 서로 다른 운영체제를 쓸 때 특히 유용합니다. PLUS 라이선스가 있으면 작업을 예약할 수 있고, Job History는 실행별 파일 수를 보여 줍니다. 필터를 추가한 뒤 파일 수가 갑자기 줄었다면 잡동사니가 사라졌다는 좋은 신호입니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="시스템 파일 제외 후 파일 수를 보여 주는 RcloneView의 Job History" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 동기화 작업을 만들거나 편집하고, Step 3에서 `.DS_Store`, `Thumbs.db`, `desktop.ini`를 사용자 지정 제외 필터로 추가하세요.
3. Dry Run을 실행해 메타데이터 파일이 더 이상 전송 목록에 없는지 확인하세요.
4. Compare를 사용해 이미 클라우드에 저장된 사본을 찾아 삭제하세요.

몇 분만 투자해 필터를 설정하면 클라우드 폴더는 읽기 쉬워지고, 동기화 실행은 실제 작업에만 집중합니다.

---

**관련 가이드:**

- [동기화 필터가 파일을 제외하지 않을 때 해결하기](https://rcloneview.com/support/blog/fix-sync-filters-not-excluding-files-rcloneview)
- [Rclone 필터 규칙 — Include와 Exclude 설명](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)
- [가득 찬 클라우드 스토리지 계정 정리하기](https://rcloneview.com/support/blog/manage-cloud-storage-full-cleanup-rcloneview)

<CloudSupportGrid />
