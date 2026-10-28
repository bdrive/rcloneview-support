---
slug: migrate-pikpak-to-pcloud-rcloneview
title: "PikPak에서 pCloud로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - tayson
description: "RcloneView로 PikPak에서 pCloud로 마이그레이션하세요: 두 리모트 연결, Dry Run 미리 보기, 클라우드 간 복사, Folder Compare로 결과 검증."
keywords:
  - PikPak에서 pCloud로 마이그레이션
  - PikPak pCloud 전송
  - PikPak 파일을 pCloud로 이동
  - PikPak pCloud 마이그레이션
  - RcloneView 클라우드 간 전송
  - PikPak pCloud 동기화
  - rclone GUI
  - 클라우드 마이그레이션 도구
  - pCloud 파일 전송
  - 클라우드 전송 검증
tags:
  - RcloneView
  - pikpak
  - pcloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# PikPak에서 pCloud로 마이그레이션 — RcloneView로 파일 전송하기

> PikPak 라이브러리를 두 클라우드 사이에서 직접 pCloud로 옮기세요. 먼저 미리 보고, 마지막에 검증까지 합니다.

PikPak은 저장한 다운로드와 미디어가 쌓이는 곳이 되기 쉽고, 언젠가는 그 파일들을 장기 보관할 곳이 필요해집니다. 노트북으로 전부 내려받았다가 다시 pCloud에 올리는 방식은 느리고 불안정합니다. RcloneView는 한 창에서 두 서비스를 연결하고 서로 직접 전송하며, 작업은 미리 보고, 반복 실행하고, 기록에서 검토할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## PikPak과 pCloud를 리모트로 추가하기

**New Remote**를 열어 PikPak을 먼저 추가한 다음 pCloud를 추가하세요. pCloud는 OAuth를 사용합니다. 브라우저가 열리면 로그인하고, API 키 없이 리모트가 연결됩니다. 나중에 작업 목록을 읽기 쉽게 유지하도록 각 리모트에 `pikpak-source`, `pcloud-dest`처럼 알아보기 쉬운 이름을 지정하세요.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 PikPak과 pCloud 리모트 추가하기" class="img-large img-center" />

두 리모트를 저장했다면 각각 Explorer 패널에서 여세요. 원본과 대상을 나란히 탐색하면 무언가 이동하기 전에 올바른 계정을 보고 있는지 확인할 수 있습니다.

## 클라우드 간 복사

PikPak 패널의 폴더를 pCloud 패널로 끌어다 놓으세요. 서로 다른 리모트 사이로 끌면 복사가 수행되므로, 원본은 직접 삭제하기로 결정할 때까지 PikPak에 그대로 남습니다. 라이브러리가 크다면 끌어다 놓기보다 저장된 Copy 작업이 더 좋습니다. 연결이 끊겨도 다시 실행할 수 있기 때문입니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="PikPak에서 pCloud로의 클라우드 간 전송" class="img-large img-center" />

RcloneView는 Windows, macOS, Linux의 한 창에서 90개 이상의 클라우드 스토리지 서비스를 관리하므로, 이번 마이그레이션과 앞으로 연결할 다른 서비스에도 같은 도구를 쓸 수 있습니다.

## Dry Run으로 미리 보기

Sync 또는 Job Manager 마법사에서 작업을 만들고 원본과 대상 폴더를 선택한 뒤, 실제 전송 전에 **Dry Run**을 실행하세요. 복사될 파일 목록이 표시되므로 잘못 고른 폴더를 비용 없이 발견할 수 있습니다. 옮길 파일을 줄여야 한다면 필터링 단계에서 최대 파일 크기를 설정하거나 pCloud에 두고 싶지 않은 파일 형식을 제외하세요.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView에서 복사 작업 실행하기" class="img-large img-center" />

미리 보기가 올바르다면 작업을 실행하고 Transferring 탭에서 속도와 진행 상황을 확인하세요. PikPak의 응답이 느려지기 시작하면 파일 전송 수를 낮추세요.

## Folder Compare로 검증하기

작업이 끝나면 PikPak을 왼쪽, pCloud를 오른쪽에 두고 **Compare**를 여세요. 왼쪽에만 있는 파일을 필터링하면 도착하지 않은 항목을 볼 수 있으며, 그 파일들을 복사하면 됩니다. Job History는 각 실행의 상태, 크기, 파일 수를 기록으로 보관합니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="PikPak과 pCloud 사이의 Folder Compare" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **New Remote**에서 PikPak과 pCloud를 추가하세요.
3. PikPak에서 pCloud로 Copy 작업을 만들고 **Dry Run**을 실행하세요.
4. 작업을 실행한 다음, 원본에서 무엇이든 삭제하기 전에 **Compare**로 검증하세요.

미리 보고 검증할 수 있는 마이그레이션은 깔끔하게 끝날 것이라고 믿을 수 있는 마이그레이션입니다.

---

**관련 가이드:**

- [PikPak에서 Google Drive로 마이그레이션](https://rcloneview.com/support/blog/migrate-pikpak-to-google-drive-rcloneview)
- [pCloud에서 Mega로 마이그레이션](https://rcloneview.com/support/blog/migrate-pcloud-to-mega-rcloneview)
- [PikPak 클라우드 다운로드 관리](https://rcloneview.com/support/blog/manage-pikpak-cloud-downloads-rcloneview)

<CloudSupportGrid />
