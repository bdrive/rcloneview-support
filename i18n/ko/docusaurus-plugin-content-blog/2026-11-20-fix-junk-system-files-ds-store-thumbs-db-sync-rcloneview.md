---
slug: fix-junk-system-files-ds-store-thumbs-db-sync-rcloneview
title: "클라우드 동기화의 불필요한 시스템 파일 정리 — RcloneView로 .DS_Store와 Thumbs.db 제외하기"
authors:
  - kai
description: ".DS_Store, Thumbs.db, desktop.ini가 클라우드 백업을 어지럽히지 않도록 하세요. RcloneView의 동기화 필터, Dry Run, 폴더 비교로 이 파일들을 걸러낼 수 있습니다."
keywords:
  - .DS_Store 클라우드 동기화 제외
  - Thumbs.db 클라우드 백업
  - desktop.ini 동기화 정리
  - 클라우드 스토리지 불필요한 파일 삭제
  - rclone 시스템 파일 제외
  - RcloneView 사용자 지정 필터
  - macOS Windows 클라우드 동기화 정리
  - 숨김 파일 동기화 필터
  - 크로스 플랫폼 클라우드 동기화 팁
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

# 클라우드 동기화의 불필요한 시스템 파일 정리 — RcloneView로 .DS_Store와 Thumbs.db 제외하기

> 운영 체제가 만드는 메타데이터 파일은 백업을 어지럽힙니다. 필터 규칙 몇 개만으로 이 파일들을 확실히 걸러낼 수 있습니다.

Mac과 Windows PC가 함께 사용하는 공유 클라우드 폴더를 열어 보면 보통 모든 디렉터리에 `.DS_Store`가, 이미지 묶음마다 `Thumbs.db`가, 트리 곳곳에 `desktop.ini`가 흩어져 있습니다. 크기는 작지만 파일 수를 부풀리고, 비교 시 "다름"으로 표시되며, 불필요한 재업로드를 일으킵니다. RcloneView에서는 필터 규칙으로 이 파일들을 동기화 작업에서 제외한 뒤, 대상이 깨끗한지 확인할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 이 파일들이 계속 다시 생기는 이유

macOS Finder는 폴더의 보기 설정을 저장하기 위해 `.DS_Store`를 기록합니다. Windows 탐색기는 이미지 미리보기를 캐시하기 위해 `Thumbs.db`를, 폴더 사용자 지정 정보를 저장하기 위해 `desktop.ini`를 만듭니다. 누군가 동기화된 폴더나 마운트된 드라이브를 탐색할 때마다 운영 체제가 이 파일들을 다시 쓸 수 있으므로, 다음 동기화에서는 "변경된" 파일로 인식되어 다시 전송됩니다.

NAS에 40,000개의 프로젝트 폴더를 두고 매일 밤 클라우드로 동기화하는 디자인 에이전시를 생각해 보세요. 실제 작업이 일부 폴더에서만 바뀌었더라도, 탐색한 폴더마다 새 메타데이터 파일이 생길 수 있어 작업 로그가 복잡해지고 정말 중요한 전송이 묻혀 버립니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView Job History showing file counts inflated by system metadata files" class="img-large img-center" />

## 동기화 작업에 제외 필터 추가하기

**Job Manager**에서 작업을 열고 **Edit**을 클릭한 다음 **Step 3: Filtering Settings**로 이동합니다. 사용자 지정 필터에서 파일 이름마다 제외 규칙을 하나씩 추가하세요: `.DS_Store`, `Thumbs.db`, `desktop.ini`. 팀에서 Office도 사용한다면 `~$`로 시작하는 임시 잠금 파일도 제외하는 것을 고려해 보세요. 이 규칙은 rclone의 필터 문법을 사용하며, 문서에 나온 `.iso`나 `.git/` 같은 예시와 같은 문법입니다.

필터는 PLUS 라이선스의 예약 실행을 포함해 작업이 실행될 때마다 적용되므로 한 번만 설정하면 됩니다. Job Manager의 **Export**로 작업을 JSON 파일로 저장하고 다른 컴퓨터에서 **Import**하면 모든 팀원이 같은 규칙을 사용할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Editing sync job settings in RcloneView to add exclusion filters" class="img-large img-center" />

## 미리 보기, 정리, 확인

저장한 뒤 **Dry Run**을 실행하세요. 미리 보기 목록에 더 이상 메타데이터 파일이 전송 대상으로 나타나지 않아야 합니다. 여전히 보인다면 각 규칙의 철자와 대소문자를 확인하세요. 오타는 필터가 무시되는 것처럼 보이는 흔한 원인입니다.

필터는 새 사본이 전송되는 것을 막지만, 이미 클라우드에 있는 파일은 그대로 남습니다. Explorer 패널에서 대상을 열고 남은 파일을 찾아 마우스 오른쪽 버튼 **Delete**로 삭제하세요. 전체 점검을 하려면 소스와 대상 사이에서 **Compare**를 열고 "Show right-only files"를 사용해 이전 실행에서 남은 메타데이터 파일을 찾으세요. PLUS 라이선스에서는 Folder Compare with Filter로 비교 화면에도 같은 제외 규칙을 적용할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using RcloneView Folder Compare to find leftover .DS_Store and Thumbs.db files" class="img-large img-center" />

## 시작하기

RcloneView는 Windows, macOS, Linux에서 하나의 창으로 90개 이상의 서비스를 마운트하고 동기화하므로, 어느 OS가 파일을 만들었든 같은 필터 규칙이 적용됩니다.

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. 동기화 작업을 편집하고 `.DS_Store`, `Thumbs.db`, `desktop.ini`를 사용자 지정 제외 필터로 추가합니다.
3. **Dry Run**을 실행해 메타데이터 파일이 더 이상 전송 대상으로 나타나지 않는지 확인합니다.
4. **Compare**로 이미 클라우드에 남아 있는 파일을 찾아 삭제합니다.

작업 로그가 짧아지고 백업이 깔끔해지면 정말 중요한 변경 사항을 더 쉽게 파악할 수 있습니다.

---

**관련 가이드:**

- [동기화 필터가 파일을 제외하지 않을 때 — RcloneView에서 올바른 제외 규칙 설정하기](https://rcloneview.com/support/blog/fix-sync-filters-not-excluding-files-rcloneview)
- [최대 폴더 깊이와 최대 파일 크기 필터 — RcloneView에서 동기화 대상 제어하기](https://rcloneview.com/support/blog/max-folder-depth-file-size-filters-rcloneview)
- [macOS의 빈 데스크탑 및 문서 폴더 문제 해결 — RcloneView 권한 설정](https://rcloneview.com/support/blog/fix-macos-empty-folders-permissions-rcloneview)

<CloudSupportGrid />
