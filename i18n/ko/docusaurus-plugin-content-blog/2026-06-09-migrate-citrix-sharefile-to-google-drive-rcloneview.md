---
slug: migrate-citrix-sharefile-to-google-drive-rcloneview
title: "Citrix ShareFile을 Google Drive로 마이그레이션하기 — RcloneView로 기업 파일 전송하기"
authors:
  - jay
description: "RcloneView를 사용하여 Citrix ShareFile을 Google Drive로 마이그레이션하는 방법을 알아보세요. 스크립트나 CLI 없이 GUI로 기업 문서와 폴더를 이동할 수 있습니다."
keywords:
  - Citrix ShareFile to Google Drive migration
  - migrate ShareFile to Google Drive
  - ShareFile Google Drive transfer
  - cloud file migration tool
  - RcloneView ShareFile migration
  - enterprise cloud migration
  - ShareFile alternative Google Drive
  - cloud storage migration GUI
tags:
  - sharefile
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Citrix ShareFile을 Google Drive로 마이그레이션하기 — RcloneView로 기업 파일 전송하기

> 코드를 한 줄도 작성하지 않고 ShareFile 라이브러리 전체를 Google Drive로 옮기세요—RcloneView가 시각적인 단계별 인터페이스로 전송을 처리합니다.

Citrix ShareFile은 기업용 파일 공유 플랫폼으로서 많은 조직에서 잘 사용되고 있지만, 팀들은 Google Workspace와의 긴밀한 통합, 실시간 협업, 익숙한 인터페이스 때문에 점점 더 Google Drive로 전환하고 있습니다. 조직이 이러한 전환을 계획하고 있다면, RcloneView는 클라우드 간 전송을 간단하게 만들어줍니다. 두 리모트를 연결하고, 복사 작업을 구성한 다음, 실시간 진행 상황 모니터링과 함께 최대 속도로 파일을 이동하면 됩니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 팀들이 ShareFile에서 Google Drive로 전환하는 이유

ShareFile은 유능한 기업용 플랫폼이지만 사용자 프로비저닝, 폴더 권한, 외부 공유 정책 등 신중한 IT 관리가 필요하여 관리 부담이 늘어납니다. Google Drive는 특히 Google Workspace와 함께 사용할 경우, 팀원들이 파일을 먼저 다운로드하지 않고도 브라우저에서 문서에 댓글을 달고 편집하고 공유할 수 있게 하여 협업을 단순화합니다.

ShareFile에 PDF, 프레젠테이션, 계약서, 미디어 파일 등 대규모 라이브러리를 보유한 조직의 경우, 마이그레이션의 과제는 폴더 구조나 파일 무결성을 잃지 않으면서 수만 개의 파일을 안정적으로 이동하는 것입니다. RcloneView는 ShareFile과 Google Drive를 모두 탐색 가능한 리모트로 취급하고, 검증된 rclone 전송 엔진을 사용하여 실제 데이터 이동을 처리함으로써 이 문제를 해결합니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new remote in RcloneView" class="img-large img-center" />

## RcloneView에서 Citrix ShareFile 연결하기

RcloneView를 열고 **Remote 탭 > New Remote**로 이동합니다. 제공업체 목록에서 Citrix ShareFile을 선택합니다. ShareFile 서브도메인 호스트네임과 Root Folder ID가 필요합니다—이는 리모트의 루트로 접근하려는 ShareFile 내 폴더의 식별자입니다. RcloneView는 필요한 각 필드를 단계별로 안내하며, 저장이 완료되면 ShareFile 리모트가 Explorer의 패널로 표시되어 전송을 시작하기 전에 폴더를 탐색하고 데이터에 접근 가능한지 확인할 수 있습니다.

ShareFile은 기업 수준의 인증을 사용하므로 인증 절차가 완료되기까지 잠시 기다려야 합니다. 연결이 완료되면 전체 ShareFile 폴더 계층 구조를 탐색하고, 파일 크기를 확인하고, 마이그레이션을 시작하기 전에 구조를 검증할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer configuration in RcloneView" class="img-large img-center" />

## Google Drive 구성 및 마이그레이션 실행하기

**Remote 탭 > New Remote**를 통해 Google Drive를 두 번째 리모트로 추가합니다. Google Drive는 OAuth 브라우저 인증을 사용합니다—RcloneView가 브라우저 탭을 열면 Google 계정으로 로그인하며, API 키를 수동으로 관리할 필요 없이 연결이 자동으로 설정됩니다.

두 리모트가 모두 준비되면 **Home 탭 > Sync**로 이동하여 4단계 동기화 마법사를 엽니다. Citrix ShareFile을 소스로, Google Drive를 대상으로 설정합니다. 실행하기 전에 **Dry Run** 옵션을 사용하여 변경 사항을 적용하지 않고 정확히 어떤 파일이 복사될지 미리 확인하세요—실수로 인한 덮어쓰기가 큰 비용을 초래할 수 있는 대규모 기업 마이그레이션에서 중요한 안전 점검입니다. 미리보기 결과에 만족하면 작업을 실행하고 창 하단의 Transferring 탭에서 실시간 진행 상황을 모니터링합니다.

마이그레이션 기간 동안에도 ShareFile에 파일이 계속 추가되는 조직의 경우, PLUS 라이선스로 예약 동기화 기능을 사용하면 새로 추가된 콘텐츠를 포착하기 위한 후속 실행을 자동화할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a migration job in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. Citrix ShareFile을 리모트로 추가합니다(Remote 탭 > New Remote), 서브도메인 호스트네임과 Root Folder ID를 입력합니다.
3. OAuth 브라우저 로그인을 사용하여 Google Drive를 두 번째 리모트로 추가합니다.
4. Sync 마법사를 열고 ShareFile을 소스로, Google Drive를 대상으로 설정한 다음 먼저 Dry Run을 실행합니다.
5. 마이그레이션을 실행하고 Transferring 탭에서 진행 상황을 모니터링합니다.

Google Drive로의 마이그레이션이 반드시 수개월에 걸친 IT 작업을 의미하지는 않습니다—RcloneView는 복잡한 기업 마이그레이션을 팀이 매 단계에서 실행하고 검증할 수 있는 안정적이고 반복 가능한 GUI 워크플로로 압축합니다.

---

**관련 가이드:**

- [Citrix ShareFile을 OneDrive와 SharePoint로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-citrix-sharefile-onedrive-sharepoint-rcloneview)
- [Citrix ShareFile 스토리지 관리하기 — RcloneView로 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-citrix-sharefile-cloud-sync-backup-rcloneview)
- [RcloneView로 SharePoint를 Google Drive로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-sharepoint-to-google-drive-rcloneview)

<CloudSupportGrid />
