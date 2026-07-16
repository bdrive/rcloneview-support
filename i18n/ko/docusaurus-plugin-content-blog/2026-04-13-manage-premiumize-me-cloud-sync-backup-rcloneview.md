---
slug: manage-premiumize-me-cloud-sync-backup-rcloneview
title: "Premiumize.me 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - tayson
description: "OAuth 브라우저 로그인을 사용하여 Premiumize.me를 RcloneView에 연결하고, 저장된 파일을 다른 클라우드 제공업체로 동기화하여 백업 및 장기 관리를 수행하세요."
keywords:
  - premiumize.me RcloneView
  - premiumize cloud sync
  - premiumize backup
  - manage premiumize files
  - premiumize rclone GUI
  - premiumize media storage
  - cloud transfer premiumize
  - premiumize file management
tags:
  - media
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Premiumize.me 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기

> Premiumize.me는 프리미엄 파일 호스팅과 개인 클라우드 스토리지를 결합한 서비스입니다 — RcloneView를 사용하면 깔끔한 GUI를 통해 해당 콘텐츠를 관리하고 백업할 수 있습니다.

Premiumize.me는 프리미엄 링크 생성기이자 클라우드 다운로드 서비스로 가장 잘 알려져 있지만, 다운로드한 콘텐츠가 저장되는 개인 클라우드 스토리지도 함께 제공합니다. 미디어, 다운로드 파일, 프로젝트 파일을 저장하는 데 사용하고 있다면, 결국 이 파일들을 다른 클라우드로 옮겨 보관하거나 오프라인 접근을 위해 로컬 스토리지로 옮길 방법이 필요해집니다. RcloneView는 OAuth 브라우저 로그인을 통해 Premiumize.me에 연결되므로 설정에 1분도 채 걸리지 않습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## OAuth로 Premiumize.me 연결하기

RcloneView를 실행하고 **원격 관리자(Remote Manager)** 를 엽니다. **새 원격(New Remote)** 을 클릭하고 제공업체 목록에서 **Premiumize** 를 찾습니다. 선택하면 RcloneView가 기본 브라우저를 열고 Premiumize.me OAuth 인증 페이지로 리디렉션합니다. 로그인하고 접근 권한을 허용하세요 — RcloneView는 토큰을 로컬에 저장하므로, 접근 권한을 취소하지 않는 한 다시 인증할 필요가 없습니다.

인증이 완료되면 원격 관리자 목록에 해당 리모트가 나타납니다. 더블클릭하면 파일 탐색기(File Explorer)에서 열립니다. 서비스를 통해 축적한 모든 폴더와 파일이 포함된 Premiumize.me 파일 트리가 로드됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="Creating a Premiumize.me remote in RcloneView" class="img-large img-center" />

## Premiumize.me 라이브러리 탐색하기

RcloneView의 파일 탐색기는 익숙한 2단 패널 레이아웃을 제공합니다. 한쪽에서 Premiumize.me 스토리지를 탐색하고, 다른 쪽에서는 Google Drive, Backblaze B2, 또는 로컬 폴더 등 다른 설정된 리모트를 탐색할 수 있습니다. 여러 파일을 선택하고, 우클릭으로 복사하거나 이동할 수 있으며, 전송 패널에서 진행 상황을 추적할 수 있습니다.

미디어 위주의 라이브러리라면 **썸네일 보기(Thumbnail View)** 모드가 그리드 형태로 이미지 미리보기를 표시하므로, Premiumize.me 스토리지에 사진이나 동영상 썸네일이 있을 때 전송 전에 시각적으로 파악하는 데 유용합니다.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Browsing and transferring Premiumize.me files in RcloneView" class="img-large img-center" />

## Premiumize.me를 다른 클라우드로 동기화하기

간헐적인 파일 이동에는 수동 탐색으로도 충분하지만, 정기적인 백업에는 **작업(Job)** 시스템이 적합한 도구입니다. **작업(Jobs)** 으로 이동하여 **새 작업(New Job)** 을 클릭하고 Premiumize.me를 소스로 설정합니다. 목적지 리모트는 원하는 대로 선택할 수 있습니다 — Backblaze B2는 장기 미디어 보관에 비용 효율적인 옵션이며, Google Drive는 모바일에서 파일에 접근하고 싶을 때 적합합니다.

작업 마법사의 두 번째 단계에서는 **전송 옵션**을 설정할 수 있습니다: 동시 전송 개수를 지정하고, 체크섬을 켜거나 끄고, **드라이 런(Dry Run)** 을 활성화하여 실제로 파일이 이동하기 전에 무엇이 복사될지 미리 확인할 수 있습니다. 이 기능은 Premiumize.me 스토리지가 시간이 지나면서 자연스럽게 커져서 정확한 구조를 파악하기 어려울 때 특히 유용합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring and running a Premiumize.me backup job" class="img-large img-center" />

## 모니터링 및 작업 기록

작업이 실행되면 RcloneView는 결과를 **작업 기록(Job History)** 에 기록합니다. 각 항목에는 시작 시간, 소요 시간, 전송된 파일 수, 전송된 총 데이터량, 오류 여부가 표시됩니다. 이를 통해 모든 동기화 작업에 대한 감사 기록을 확보할 수 있으며, 대규모 Premiumize.me 라이브러리를 여러 세션에 걸쳐 체계적으로 마이그레이션할 때 특히 중요합니다.

전송 도중 네트워크 문제나 Premiumize.me API의 속도 제한으로 인해 실패하더라도, 작업 기록에서 재구성 없이 동일한 작업을 다시 실행할 수 있습니다. RcloneView는 이미 성공적으로 전송된 파일은 건너뛰므로, 중단된 동기화도 중단된 지점부터 이어서 진행됩니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing Premiumize.me sync results" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView 다운로드**.
2. **원격 관리자(Remote Manager)** 를 열고 **새 원격(New Remote)** 을 클릭한 후 **Premiumize** 를 선택합니다.
3. OAuth 브라우저 로그인을 완료하여 계정을 인증합니다.
4. Premiumize.me를 소스로, 원하는 클라우드를 목적지로 하는 동기화 작업을 생성합니다.

RcloneView를 사용하면 Premiumize.me 파일이 더 이상 하나의 서비스에 갇혀 있지 않습니다 — 원하는 일정에 맞춰 백업하고, 보관하고, 마이그레이션하세요.

---

**관련 가이드:**

- [Put.io 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-put-io-cloud-sync-backup-rcloneview)
- [RcloneView로 클라우드 간 마이그레이션하기](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)
- [작업 기록 및 전송 로그 모니터링](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
