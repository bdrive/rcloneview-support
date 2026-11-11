---
slug: fix-sync-filters-not-excluding-files-rcloneview
title: "동기화 필터가 파일을 제외하지 않을 때 — RcloneView로 올바른 제외 규칙 작성하기"
authors:
  - jay
description: "동기화 필터가 파일을 제외하지 않나요? RcloneView에서 제외 규칙이 폴더를 놓치는 이유, 올바른 패턴 작성법, 드라이 런으로 확인하는 방법을 알아보세요."
keywords:
  - 동기화 필터 작동 안 함
  - 클라우드 동기화에서 폴더 제외
  - rclone 필터 파일 제외 안 됨
  - RcloneView 필터 규칙
  - .git 폴더 동기화 제외
  - 클라우드 동기화 제외 규칙
  - 최대 파일 크기 필터
  - 드라이 런 필터 테스트
  - 선택적 클라우드 동기화 문제 해결
tags:
  - RcloneView
  - troubleshooting
  - tips
  - filters
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 동기화 필터가 파일을 제외하지 않을 때 — RcloneView로 올바른 제외 규칙 작성하기

> 제외하려던 파일이 대상에 계속 나타난다면, 원인은 대개 필터가 고장 난 것이 아니라 패턴의 기준 위치(앵커) 지정 방식입니다.

한 개발자가 프로젝트 폴더를 Backblaze B2로 동기화하면서 `.git` 제외 규칙을 추가했습니다. 그런데 다음 날 아침 버킷에는 수천 개의 Git 객체가 그대로 들어 있었습니다. 필터 규칙은 rclone의 매칭 로직을 따르기 때문에 슬래시 하나만 빠져도 규칙이 매칭하는 대상이 달라집니다. RcloneView는 이 규칙을 동기화 마법사의 Step 3에 배치하고, 실제로 파일이 이동하기 전에 테스트할 수 있도록 드라이 런(Dry Run)을 제공합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 제외 규칙이 파일을 놓치는 이유

대부분의 필터 문제는 앵커 지정에서 비롯됩니다. `/`로 시작하는 패턴은 동기화 소스의 루트에서만 매칭됩니다. `/`가 없는 패턴은 어떤 깊이에서도 매칭됩니다. RcloneView 필터 설정에 있는 예시가 그 차이를 보여 줍니다.

- `.iso`는 트리 어디에 있든 해당 확장자의 파일을 제외합니다.
- `/.git/*`는 소스 루트에 있는 `.git` 폴더 바로 안의 파일만 제외합니다.
- `.git/`는 모든 깊이의 `.git` 폴더를 제외하며, 대부분의 개발자가 원하는 것이 바로 이것입니다.

`/.git/*`만 작성했다면 `client-a/app/.git` 같은 중첩 저장소는 여전히 동기화됩니다. `*`는 폴더 경계에서 멈추기 때문에 그 하위 폴더도 마찬가지입니다. 앵커가 없는 폴더 규칙으로 바꾸면 중첩 저장소가 제외됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="동기화 필터를 설정하기 전에 RcloneView에서 리모트 추가하기" class="img-large img-center" />

두 번째로 흔한 실수는 소스 폴더를 잘못 선택하는 것입니다. 루트에 앵커된 패턴은 Step 1에서 고른 폴더를 기준으로 하므로, 소스를 한 단계 위로 옮기면 매칭 대상이 달라집니다.

## 다른 필터 설정도 확인하기

마법사의 필터는 사용자 지정 규칙만이 아닙니다. Step 3에는 **Max file size**(MB 단위), **Max file age**(`y`, `d`, `h`, `m`, `s` 단위), **Max folder depth**, 그리고 Music, Video, Image, Document, Google Docs, Box Docs용 사전 정의 필터도 있습니다. 이 설정들은 함께 적용되므로, 예전에 복제한 작업이 예상과 다르게 동작할 수 있습니다.

예를 들어 테스트할 때 설정한 폴더 깊이 제한을 잊어버리면 더 깊은 하위 폴더가 아무 표시 없이 건너뛰어집니다. 사용자 지정 규칙을 다시 작성하기 전에 Job Manager에서 작업을 열고 필요 없는 제한을 지우세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="필터가 적용된 동기화 결과를 보여 주는 RcloneView의 클라우드 간 전송 화면" class="img-large img-center" />

## 드라이 런과 비교로 수정 결과 검증하기

필터 변경은 절대 실제 데이터로 테스트하지 마세요. 먼저 드라이 런 모드로 작업을 실행합니다. 드라이 런은 복사될 파일과 삭제될 파일 목록을 보여 줍니다. 제외한 경로가 여전히 복사 목록에 나타난다면 패턴이 아직 잘못된 것입니다.

제외된 파일은 대상 쪽에서도 건드리지 않는다는 점을 기억하세요. 원치 않는 파일이 이미 버킷에 들어갔다면, 새 필터로 단방향 동기화를 실행해도 그 파일은 그대로 남습니다. Folder Compare로 해당 파일을 찾아 대상 쪽의 불필요한 `.git` 폴더를 선택하고 그곳에서 삭제하세요. PLUS 라이선스에서는 Folder Compare with Filter가 같은 규칙을 비교에 적용하므로, 작업이 실제로 관리하는 항목만 화면에 표시됩니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="한쪽에만 존재하는 파일을 보여 주는 RcloneView의 Folder Compare" class="img-large img-center" />

드라이 런 결과가 올바르게 보이면 작업을 실행하고, Job History의 파일 수를 드라이 런 미리보기와 비교해 확인하세요.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="필터 수정 후 전송된 파일을 보여 주는 RcloneView Job History" class="img-large img-center" />

## 시작하기

동기화 작업, 필터, 드라이 런, Folder Compare는 모두 FREE 라이선스에 포함되어 있습니다.

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. Job Manager를 열고 작업을 편집하여 Step 1의 소스 폴더와 Step 3의 필터 설정을 검토합니다.
3. 폴더가 어떤 깊이에도 나타날 수 있다면 `/.git/*` 같은 루트 앵커 패턴을 `.git/`로 바꿉니다.
4. 드라이 런을 실행해 제외한 경로가 사라졌는지 확인한 다음, Folder Compare로 남은 파일을 정리합니다.

정확한 필터 규칙은 백업을 간결하게 유지하고, 빌드 결과물과 저장소 데이터가 클라우드 요금에 포함되지 않도록 해 줍니다.

---

**관련 가이드:**

- [Rclone 필터 규칙 설명 — 포함과 제외](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)
- [드라이 런 — 전송 전에 동기화 미리 보기](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)
- [필터를 사용한 Folder Compare](https://rcloneview.com/support/blog/folder-compare-with-filter-rcloneview)

<CloudSupportGrid />
