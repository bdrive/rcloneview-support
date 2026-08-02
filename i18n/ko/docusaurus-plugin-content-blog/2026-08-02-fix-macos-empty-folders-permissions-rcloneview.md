---
slug: fix-macos-empty-folders-permissions-rcloneview
title: "macOS 데스크탑, 문서 폴더가 비어 보이는 문제 해결 — RcloneView 권한 수정"
authors:
  - robin
description: "macOS에서 RcloneView가 데스크탑, 문서, 다운로드 폴더를 비어있는 것으로 표시하는 문제를 해결하세요. 올바른 개인정보 보호 권한을 부여하고 전체 파일 접근을 복원합니다."
keywords:
  - macOS 빈 폴더 문제 해결
  - RcloneView macOS 권한
  - 데스크탑 폴더 비어있음 macOS
  - 문서 폴더 비어있음 macOS
  - macOS 전체 디스크 접근
  - 개인정보 보호 및 보안 파일과 폴더
  - macOS 클라우드 동기화 권한
  - RcloneView 문제 해결
  - macOS 파일 접근 거부
  - RcloneView macOS 수정
tags:
  - RcloneView
  - troubleshooting
  - tips
  - macos
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# macOS 데스크탑, 문서 폴더가 비어 보이는 문제 해결 — RcloneView 권한 수정

> RcloneView가 Mac의 데스크탑, 문서, 또는 다운로드 폴더를 비어있는 것으로 표시한다면, 이는 거의 항상 아직 부여되지 않은 macOS 개인정보 보호 권한 때문이지 동기화 문제가 아닙니다.

Catalina 이후 macOS는 데스크탑, 문서, 다운로드 폴더를 개인정보 보호 및 보안 권한 뒤에 잠급니다. 동기화 소스로 로컬 폴더를 탐색할 때의 RcloneView를 포함하여 이를 읽으려는 모든 앱은 명시적으로 승인받아야 합니다. 처음으로 로컬-클라우드 백업 작업을 설정하는 사용자들은 종종 이 문제를 겪습니다: 폴더 트리는 로드되지만, 파일이 디스크에 명확히 존재함에도 파일 목록은 비어있는 상태로 유지됩니다. RcloneView는 90개 이상의 클라우드 제공업체에 연결하고 동기화하지만, 이 특정 문제는 전적으로 macOS 측면에 있으며 2분이면 해결되는 수정 사항입니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 폴더가 비어 보이는 이유

macOS는 데스크탑, 문서, 다운로드를 보호된 위치로 취급합니다. 앱이 이 중 하나를 처음 읽으려고 시도할 때 권한 프롬프트가 표시되며, 초기 설정 중 실수로 발생하기 쉬운 이 프롬프트가 닫히거나 거부되면 앱은 오류 대신 조용히 빈 목록을 받습니다. RcloneView의 탐색기(Explorer) 패널은 폴더 자체를 보여주고 경우에 따라 정확한 파일 수까지 표시하지만, OS가 파일 시스템 계층에서 콘텐츠를 보류하고 있기 때문에 근본적인 파일 목록은 비어있는 상태로 유지됩니다.

이것은 클라우드 리모트 문제와는 별개입니다. Google Drive나 Dropbox 리모트도 비어 보인다면, 그것은 다른 문제입니다 — 이 수정 사항은 동기화 소스나 대상으로 사용되는 로컬 macOS 폴더에만 특정하게 적용됩니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView folder view affected by macOS privacy permissions" class="img-large img-center" />

## 올바른 권한 부여하기

시스템 설정 > 개인정보 보호 및 보안 > 파일과 폴더를 열고, 목록에서 RcloneView를 찾아 데스크탑 폴더, 문서 폴더, 다운로드 폴더 토글을 개별적으로 활성화하세요. RcloneView가 목록에 아직 나타나지 않는다면, 앱에서 해당 폴더 중 하나로 먼저 탐색하여 권한 프롬프트를 트리거하세요 — macOS는 접근을 시도한 앱만 목록에 표시합니다.

지속적인 문제가 있거나 세 개의 보호된 폴더 외부 위치(외장 드라이브, 네트워크 공유)에서 동기화하는 경우, 동일한 개인정보 보호 및 보안 패널에서 전체 디스크 접근 권한을 부여하는 것이 더 철저한 해결책입니다. 이는 데스크탑, 문서, 다운로드 그리고 OS가 제한할 수 있는 다른 모든 위치를 포함합니다.

<img src="/support/images/en/blog/new-remote.png" alt="Granting macOS Files and Folders permission to RcloneView" class="img-large img-center" />

이러한 권한을 변경한 후에는 RcloneView를 창만 닫는 것이 아니라 완전히 재시작해야 합니다. macOS는 앱의 파일 접근을 실행 시점에만 재평가하므로, 폴더 콘텐츠가 올바르게 나타나기 전에 완전 종료 후 재실행이 필요합니다.

## 수정 확인 및 동기화 구축하기

재시작 후, 이전에 비어있던 폴더로 다시 탐색하세요 — 파일 및 폴더 수가 이제 하단 요약에 정상적으로 표시되어야 합니다. 실제 동기화 작업을 실행하기 전에, 의도한 클라우드 대상에 대해 폴더 비교(Folder Compare)를 사용하여 RcloneView가 로컬 측에서 볼 수 있어야 할 모든 것을 이제 볼 수 있는지 확인하세요. 이는 불완전한 백업으로 이어지기 전에 남아있는 접근 문제를 발견합니다.

권한이 정상 작동하는 것이 확인되면, 평소대로 동기화 작업을 구축하세요: 로컬 폴더를 소스로, 클라우드 리모트를 대상으로 설정하고, 전송될 내용을 미리보기 위해 먼저 드라이 런(Dry Run)을 활성화하세요.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Building a local-to-cloud sync job after fixing macOS permissions" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 시스템 설정 > 개인정보 보호 및 보안 > 파일과 폴더를 여세요.
3. RcloneView에 대해 데스크탑, 문서, 다운로드 접근을 활성화하거나 전체 디스크 접근을 부여하세요.
4. RcloneView를 완전히 종료했다가 다시 실행한 후, 폴더 콘텐츠가 올바르게 로드되는지 확인하세요.

이 권한 모델은 macOS에서 사용자 데이터를 보호하기 위해 존재하며, 한 번 부여되면 RcloneView는 이후 모든 동기화 작업에 대해 로컬 파일에 완전하고 중단 없는 접근을 유지합니다.

---

**관련 가이드:**

- [RcloneView로 macOS "너무 많은 파일 열림" 오류 해결하기](https://rcloneview.com/support/blog/fix-macos-too-many-open-files-rcloneview)
- [macOS Sequoia에서의 RcloneView — 클라우드 스토리지 동기화](https://rcloneview.com/support/blog/rcloneview-macos-sequoia-cloud-sync)
- [전송 후 클라우드 동기화에서 파일이 누락되는 문제 해결 — RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)

<CloudSupportGrid />
