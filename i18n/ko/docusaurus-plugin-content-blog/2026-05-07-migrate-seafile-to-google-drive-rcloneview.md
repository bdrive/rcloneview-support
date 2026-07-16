---
slug: migrate-seafile-to-google-drive-rcloneview
title: "Seafile에서 Google Drive로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - tayson
description: "RcloneView의 클라우드 간 전송 및 동기화 도구를 사용하여 자체 호스팅 Seafile 서버에서 Google Drive로 파일을 마이그레이션하는 단계별 가이드."
keywords:
  - Seafile migration
  - Google Drive
  - RcloneView
  - cloud-to-cloud transfer
  - self-hosted migration
  - file migration
  - Seafile to Google Drive
  - rclone seafile
tags:
  - RcloneView
  - seafile
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Seafile에서 Google Drive로 마이그레이션 — RcloneView로 파일 전송하기

> 자체 호스팅 Seafile 서버에서 Google Drive로 전환하는 것은 생각보다 쉽습니다 — RcloneView를 사용하면 두 서비스를 모두 리모트로 연결하고 중간 다운로드 과정 없이 라이브러리를 직접 전송할 수 있습니다.

Seafile은 인기 있는 자체 호스팅 협업 플랫폼이지만, 많은 팀이 유지 관리 부담을 줄이고 생산성 도구와의 통합을 강화하기 위해 결국 Google Drive와 같은 관리형 클라우드 서비스로 마이그레이션합니다. RcloneView는 Seafile을 Google Drive와 함께 완전한 리모트로 취급하여, Seafile 라이브러리를 탐색하고 깔끔한 그래픽 워크플로우로 Google Drive에 직접 복사할 수 있게 해줍니다. 명령줄 지식이 필요하지 않으며, 내장된 rclone 바이너리가 모든 작업을 처리합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Seafile 서버 연결하기

RcloneView에서 **New Remote**를 클릭하고 제공업체 목록에서 **Seafile**을 선택합니다. Seafile 서버 URL, 사용자 이름, 비밀번호를 입력합니다. 서버에서 2FA를 사용하는 경우 설정 중에 일회용 토큰도 입력해야 합니다. 그러면 RcloneView가 듀얼 패널 파일 탐색기에 개인 및 공유 라이브러리를 모두 나열합니다.

Seafile 라이브러리가 암호화되어 있는 경우, RcloneView가 파일을 복호화하고 읽으려면 라이브러리 비밀번호가 필요합니다. 전체 마이그레이션을 시도하기 전에 작은 암호화된 라이브러리에 대한 액세스를 테스트하여 자격 증명이 올바르게 작동하는지 확인하는 것이 좋습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Seafile remote in RcloneView" class="img-large img-center" />

## Google Drive 추가하기

**New Remote** > **Google Drive**를 통해 Google Drive용 두 번째 리모트를 추가합니다. RcloneView가 OAuth 인증을 위한 브라우저 창을 엽니다 — Google 계정으로 로그인하고 요청된 권한을 부여합니다. 인증 후 Google Drive 리모트가 탐색기에 나타납니다. My Drive나 공유 드라이브의 어떤 폴더로든 이동하여 마이그레이션 대상으로 사용할 수 있습니다.

전송을 시작하기 전에 Google Drive에 전용 폴더(예: `Seafile Migration/`)를 만드는 것을 고려해 보세요. 이렇게 하면 전환 기간 동안 마이그레이션된 콘텐츠가 기존 파일과 분리되어 정리된 상태로 유지됩니다.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging Seafile libraries to Google Drive in RcloneView" class="img-large img-center" />

## 마이그레이션 실행하기

두 리모트를 듀얼 패널 보기에서 모두 열어두면, 소규모 마이그레이션의 경우 개별 Seafile 라이브러리를 Google Drive로 드래그할 수 있습니다. 전체 서버 마이그레이션의 경우 **Job Wizard**를 사용하여 동기화 작업을 생성합니다: Seafile을 소스로, 대상 Google Drive 폴더를 목적지로 설정합니다. 4단계 마법사를 통해 수정 시간 보존 여부를 포함한 전송 옵션을 구성할 수 있습니다.

먼저 **드라이런**을 실행하여 전송될 내용을 미리 확인하세요 — 이는 파일이 수천 개에 달하는 대규모 Seafile 인스턴스에 특히 유용합니다. 미리보기가 올바른지 확인한 후 실제 전송을 시작합니다. RcloneView의 **Job Manager**는 실시간 진행 상황을 보여주며, **Job History**는 마이그레이션 감사 추적을 위해 결과를 기록합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Seafile to Google Drive migration job in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. **New Remote** > **Seafile**을 클릭하고 서버 URL, 사용자 이름, 비밀번호를 입력합니다.
3. **New Remote** > **Google Drive**를 클릭하고 OAuth 인증 절차를 완료합니다.
4. 듀얼 패널 탐색기에서 두 리모트를 나란히 엽니다.
5. **Job Wizard**를 사용하여 동기화 작업을 생성하고, 드라이런을 실행한 다음 전체 마이그레이션을 실행합니다.

RcloneView를 사용하면 Seafile에서 Google Drive로의 마이그레이션이 수동으로 파일 하나하나를 옮기는 작업이 아니라 체계적이고 감사 가능한 프로세스가 됩니다.

---

**관련 가이드:**

- [Seafile 관리 — RcloneView로 클라우드 동기화 및 백업](https://rcloneview.com/support/blog/manage-seafile-cloud-sync-backup-rcloneview)
- [Google Drive 관리 — RcloneView로 클라우드 동기화 및 백업](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [RcloneView로 Seafile을 AWS S3에 동기화하기](https://rcloneview.com/support/blog/sync-seafile-to-aws-s3-rcloneview)

<CloudSupportGrid />
