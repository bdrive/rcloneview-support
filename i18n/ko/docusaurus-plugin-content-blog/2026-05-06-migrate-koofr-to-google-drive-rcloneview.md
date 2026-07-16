---
slug: migrate-koofr-to-google-drive-rcloneview
title: "Koofr에서 Google Drive로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - tayson
description: "RcloneView로 Koofr에서 Google Drive로 파일을 이동하세요. 로컬 다운로드 없이 폴더 구조를 유지하며 클라우드 제공업체 간 데이터를 직접 전송합니다."
keywords:
  - migrate Koofr to Google Drive
  - Koofr to Google Drive transfer
  - RcloneView Koofr Google Drive migration
  - cloud to cloud migration tool
  - Koofr migration GUI
  - move files Koofr Google Drive
  - Koofr cloud migration
  - Google Drive import from Koofr
  - RcloneView cloud migration
  - Koofr file transfer tool
tags:
  - RcloneView
  - koofr
  - google-drive
  - cloud-to-cloud
  - migration
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Koofr에서 Google Drive로 마이그레이션 — RcloneView로 파일 전송하기

> RcloneView는 Koofr 파일을 Google Drive로 직접 이동시키며, 폴더 구조를 유지하고 무결성을 검증하며 중간 로컬 저장소가 필요하지 않습니다.

Koofr의 유럽 개인정보 보호 중심 스토리지는 GDPR 준수와 데이터 거주지를 중시하는 사용자들에게 인기가 있습니다. 팀이 Google Workspace로 전환하면서 Koofr의 콘텐츠를 Google Drive로 옮겨야 할 때, RcloneView는 두 제공업체에 동시에 연결하고 클라우드 간 직접 경로로 데이터를 전송하여 마이그레이션을 깔끔하게 처리합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView에서 Koofr와 Google Drive 연결하기

마이그레이션을 시작하기 전에 두 제공업체를 모두 리모트로 추가하세요. Koofr의 경우 Remote 탭 > New Remote로 이동하여 Koofr를 선택하고 Koofr 자격 증명을 사용하여 연결을 완료합니다. Google Drive의 경우 Google Drive를 선택하고 OAuth 브라우저 인증을 완료하세요 — Google Drive의 OAuth 흐름은 완전히 자동화되어 있으며 API 키가 필요하지 않습니다.

두 리모트가 모두 구성되면 듀얼 패널 탐색기를 통해 한쪽에서 Koofr를, 다른 쪽에서 Google Drive를 볼 수 있습니다. 이러한 시각적 비교는 마이그레이션을 계획하는 데 도움이 됩니다: 폴더 구조를 확인하고, 중첩된 디렉터리를 식별하며, Koofr 루트 전체를 마이그레이션할지 특정 하위 폴더만 마이그레이션할지 결정할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Koofr and Google Drive remotes in RcloneView" class="img-large img-center" />

## 마이그레이션 동기화 작업 설정하기

제어되고 반복 가능한 마이그레이션을 위해 RcloneView에서 이름이 지정된 동기화 작업을 생성하세요:

1. **소스:** Koofr 리모트 선택 (루트 또는 특정 폴더)
2. **대상:** Google Drive 리모트 및 대상 폴더 선택
3. **작업 이름:** `koofr-to-gdrive-migration`처럼 설명적인 이름 사용
4. **모드:** Koofr에서 파일을 삭제하지 않고 이동하려면 Copy 선택

대규모 공유 디렉터리를 마이그레이션하는 팀의 경우, **Max folder depth** 필터를 사용하면 최상위 폴더를 독립적으로 마이그레이션하며 다음 단계로 진행하기 전에 각 단계를 검증할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring cloud-to-cloud transfer from Koofr to Google Drive in RcloneView" class="img-large img-center" />

## 전송 전 드라이 런으로 미리보기

RcloneView의 드라이 런 모드를 사용하여 파일을 이동하지 않고도 마이그레이션 범위를 미리 볼 수 있습니다. 드라이 런 출력은 복사될 모든 파일을 폴더별로 정리하여 나열하므로, 작업이 수행할 내용을 정확하게 파악할 수 있습니다. 이는 중첩된 Koofr 폴더 구조를 마이그레이션할 때 실행하기 전에 대상 레이아웃을 확인하고 싶을 때 특히 유용합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the Koofr to Google Drive migration in RcloneView" class="img-large img-center" />

## 전송 진행 상황 모니터링 및 기록 검토

RcloneView의 Transfer 탭은 Koofr에서 Google Drive로의 마이그레이션에 대한 실시간 진행 상황을 보여줍니다 — 전송 중인 파일, 현재 속도, 이동된 총 바이트 수. 완료 후 Job History는 전체 요약을 기록합니다: 총 전송 크기, 소요 시간, 파일 수, 발생한 오류. Google Drive의 API 속도 제한으로 전송이 느려진 경우, 기록 로그에 해당 재시도 이벤트가 기록됩니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Koofr to Google Drive migration in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Remote 탭 > New Remote에서 Koofr와 Google Drive를 리모트로 추가합니다.
3. Koofr에서 Google Drive 대상으로 Copy 또는 Sync 작업을 생성합니다.
4. 드라이 런을 실행하여 미리 본 후 마이그레이션을 실행합니다.

Koofr에서 Google Drive로 이동하는 것은 RcloneView에서 간단한 클라우드 간 작업입니다 — 로컬 디스크 공간이 필요 없으며, 전송되는 모든 파일에 대한 완전한 투명성을 제공합니다.

---

**관련 가이드:**

- [Koofr 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Google Drive 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Koofr vs Jottacloud — RcloneView로 보는 유럽 클라우드 스토리지 비교](https://rcloneview.com/support/blog/koofr-vs-jottacloud-european-cloud-storage-rcloneview)

<CloudSupportGrid />
