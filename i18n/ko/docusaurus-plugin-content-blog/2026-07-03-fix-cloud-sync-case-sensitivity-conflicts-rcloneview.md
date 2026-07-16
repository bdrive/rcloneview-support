---
slug: fix-cloud-sync-case-sensitivity-conflicts-rcloneview
title: "클라우드 동기화 대소문자 구분 충돌 해결 — RcloneView로 중복 파일 정리하기"
authors:
  - tayson
description: "Windows나 macOS의 대소문자 구분 없는 파일 시스템이 대소문자를 구분하는 클라우드 스토리지와 만날 때 발생하는 중복 파일 생성을 RcloneView로 방지하세요."
keywords:
  - cloud sync case sensitivity
  - duplicate files cloud sync
  - case sensitive filenames cloud storage
  - fix cloud sync duplicates
  - windows macos case insensitive sync
  - cloud storage filename conflicts
  - rcloneview sync errors
  - resolve cloud sync duplicate uploads
tags:
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 클라우드 동기화 대소문자 구분 충돌 해결 — RcloneView로 중복 파일 정리하기

> "Report.pdf"와 "report.pdf"는 Windows와 macOS에서는 동일한 파일로 보이지만, 대부분의 클라우드 스토리지에서는 서로 다른 두 개의 파일입니다 — 이 불일치는 동기화 작업이 이를 감지하도록 구성되기 전까지 폴더를 조용히 중복 파일로 채워 나갑니다.

Windows와 macOS는 기본적으로 로컬 드라이브를 대소문자를 구분하지 않도록 포맷하므로, `Invoice.pdf`와 `invoice.pdf`는 디스크상에서 동일한 파일로 취급됩니다. 반면 Google Drive, Dropbox, Amazon S3를 비롯한 대부분의 클라우드 백엔드는 대소문자를 구분하기 때문에, 두 파일을 별개의 객체로 아무렇지 않게 저장합니다. 그 결과 폴더에는 서서히 거의 동일한 중복 파일들이 쌓이고, 동기화 작업이 어디선가 갑자기 사본을 "생성"하는 것처럼 보이거나, 한 기기에서 이름을 바꾼 파일이 클라우드에 이미 존재하는 버전과 결코 정확히 일치하지 않는 덮어쓰기 루프가 발생합니다. RcloneView가 기본 파일 시스템의 동작 방식을 바꿀 수는 없지만, 이러한 충돌이 문제로 번지기 전에 파악하고 제어할 수 있는 가시성과 도구를 제공합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 폴더 비교로 대소문자 충돌 찾아내기

실제 동기화 실패가 아니라 대소문자 구분 문제인지 빠르게 확인하는 가장 좋은 방법은 로컬 폴더와 클라우드 대상 사이에서 폴더 비교(Folder Compare)를 실행하는 것입니다. 대소문자만 다른 파일은 양쪽에서 "동일"로 매칭되지 않고 별개의 항목으로 표시되는데, 이것이 확실한 신호입니다 — 진짜 중복 콘텐츠 문제는 크기가 다르게 나타나지만, 순수한 대소문자 불일치는 크기는 같고 이름만 다른 두 항목으로 표시되는 경우가 많습니다. 비교 화면의 "다른 파일 표시"와 "왼쪽 전용 / 오른쪽 전용 표시" 필터를 사용하면 전체 폴더 트리를 일일이 스크롤하지 않고도 이런 쌍을 쉽게 골라낼 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using Folder Compare to identify case sensitivity duplicates between local and cloud storage" class="img-large img-center" />

## 단방향 동기화와 체크섬으로 덮어쓰기 루프 방지하기

양방향 동기화(베타)는 대소문자 충돌이 가장 큰 피해를 주는 경우입니다. 이름이 바뀐 파일을 한쪽에서는 새 업로드로, 다른 쪽에서는 오래된 삭제로 해석할 수 있기 때문입니다. 해당 작업을 단방향 "대상만 수정" 동기화로 전환하면 이런 모호함이 사라집니다 — 한쪽이 항상 기준이 되므로, 원본에서 대소문자만 바뀐 이름 변경은 중복을 유발하는 대신 대상을 단순히 업데이트합니다. 동기화 마법사 2단계에서 체크섬 비교 옵션을 활성화하는 것도 도움이 됩니다. 파일 이름 매칭에만 의존하지 않고 해시와 크기로 파일을 비교하므로, 대소문자 차이와 실제 콘텐츠 변경이 뒤섞였을 때 오탐을 줄여줍니다. RcloneView는 하나의 창에서 90개 이상의 공급자를 마운트하고 동기화할 수 있으며 Windows, macOS, Linux에서 모두 사용할 수 있어, 충돌이 특정 기기의 파일 시스템 동작에서 비롯되었는지 파악하기가 더 쉽습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job with checksum comparison to avoid case sensitivity duplicates" class="img-large img-center" />

## 기존 중복 파일 안전하게 정리하기

폴더 비교로 대소문자 중복 쌍을 확인했다면, 삭제하기 전에 반드시 드라이 런(Dry Run)을 먼저 실행하세요 — 실제 변경 없이 삭제될 파일 목록을 정확히 보여주는데, 두 "중복" 파일이 대소문자 불일치가 처음 발생한 이후 실제로 내용이 달라졌을 수도 있으므로 이 단계가 중요합니다. 드라이 런 결과가 올바른지 확인한 후, 비교 화면의 삭제 작업을 사용해 오래된 사본을 제거하고 올바르고 최신인 파일 이름을 가진 버전을 남기세요.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a dry run before cleaning up case sensitivity duplicate files in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 영향을 받은 로컬 폴더와 클라우드 대상 간에 폴더 비교를 실행하세요.
3. 별개 항목으로 표시되지만 크기가 같은 파일을 필터링하여 대소문자 충돌을 골라내세요.
4. 체크섬 비교를 활성화한 단방향 동기화로 전환한 다음, 중복 파일을 정리하기 전에 드라이 런을 실행하세요.

약간의 가시성만 있으면, 조용히 파일을 계속 중복시키는 문제가 아니라 실제로 해결할 수 있는 문제로 바꿀 수 있습니다.

---

**관련 가이드:**

- [파일 이름 특수 문자 문제 해결 — RcloneView로 클라우드 동기화 문제 해결하기](https://rcloneview.com/support/blog/fix-filename-special-characters-cloud-sync-rcloneview)
- [클라우드 동기화 중복 파일 문제 해결 — RcloneView로 해결하는 방법](https://rcloneview.com/support/blog/fix-cloud-sync-duplicate-files-rcloneview)
- [드라이 런 — RcloneView에서 전송 전 클라우드 동기화 미리보기](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)

<CloudSupportGrid />
