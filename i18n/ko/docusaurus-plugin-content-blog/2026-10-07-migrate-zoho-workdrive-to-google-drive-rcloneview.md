---
slug: migrate-zoho-workdrive-to-google-drive-rcloneview
title: "Zoho WorkDrive에서 Google Drive로 마이그레이션 — RcloneView로 파일 전송"
authors:
  - kai
description: "RcloneView로 Zoho WorkDrive에서 Google Drive로 마이그레이션: 리전을 선택하고 두 리모트를 연결한 뒤 Dry Run, 클라우드 간 복사, 결과 검증까지 진행하세요."
keywords:
  - Zoho WorkDrive에서 Google Drive로 마이그레이션
  - Zoho WorkDrive 전송
  - Zoho WorkDrive 내보내기
  - Zoho 파일을 Google Drive로 이동
  - 클라우드 간 마이그레이션
  - RcloneView
  - rclone GUI
  - Zoho WorkDrive 백업
  - Google Drive 동기화
  - 폴더 비교
tags:
  - RcloneView
  - zoho
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Zoho WorkDrive에서 Google Drive로 마이그레이션 — RcloneView로 파일 전송

> Zoho WorkDrive의 팀 폴더를 미리 보기와 검증 과정을 거쳐 Google Drive로 클라우드 간 직접 복사하세요.

회사가 Zoho 제품군에서 Google Workspace로 옮길 때 WorkDrive의 팀 폴더도 어딘가로 옮겨야 합니다. 모든 파일을 내려받아 다시 업로드하는 것은 느리고 감사하기도 어렵습니다. RcloneView는 두 서비스를 연결하고 클라우드 간 파일을 전송하므로, 하나의 창에서 마이그레이션을 미리 보고, 실행하고, 검증할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Zoho WorkDrive와 Google Drive 연결

Zoho WorkDrive에는 설정이 하나 더 필요합니다. 리모트를 만들 때 **Region**을 선택해야 하며, 이 값은 Zoho 계정의 데이터 센터와 일치해야 합니다. Google Drive는 OAuth 브라우저 로그인을 사용합니다. Remote 탭을 열고 **New Remote**를 클릭한 다음 각 서비스를 차례로 추가하세요.

기본 동기화와 폴더 비교는 FREE 라이선스에서 사용할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Zoho WorkDrive 및 Google Drive 리모트 만들기" class="img-large img-center" />

## 폴더 매핑 계획하기

Explorer 패널 두 개를 열어 왼쪽에 WorkDrive, 오른쪽에 Google Drive를 놓습니다. 팀 폴더를 살펴보고 각각 어디로 옮길지 정하세요. 예를 들어 분기 보고서 150 GB를 가진 재무팀은 전용 공유 드라이브 폴더로, 개인 파일은 내 드라이브로 매핑할 수 있습니다.

용량이 큰 폴더는 Get Size로 전송 시간을 가늠해 보세요. Sync 마법사의 필터링 단계에서는 오래된 아카이브처럼 필요 없는 폴더나 파일 형식을 최대 파일 사용 기간 또는 사용자 지정 필터로 제외할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="나란히 놓은 Zoho WorkDrive와 Google Drive" class="img-large img-center" />

## Dry Run 후 전송

WorkDrive에서 Google Drive로 Copy 작업을 만들고 먼저 **Dry Run**을 실행하세요. Dry Run은 아무것도 변경하지 않고 복사될 파일 목록을 보여 줍니다. 미리 보기가 만족스러우면 작업을 실행하고 Transferring 탭에서 진행 상황을 확인합니다.

오류가 발생하면 작업은 설정된 횟수만큼 재시도하며, Job History에는 실행마다 상태, 크기, 파일 수가 기록됩니다. 다시 실행하면 누락된 파일만 복사됩니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView에서 마이그레이션 작업 실행" class="img-large img-center" />

## 검증하고 기록 남기기

Home 탭에서 **Compare**를 열어 WorkDrive와 Google Drive를 비교하세요. 왼쪽에만 있는 파일을 필터링해 전송되지 않은 항목을 찾아 복사합니다. Job History는 마이그레이션 승인 절차에 보관할 수 있는 타임스탬프가 찍힌 기록을 제공합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Zoho WorkDrive 마이그레이션의 Job History" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Zoho WorkDrive(올바른 Region 선택)와 Google Drive 리모트를 추가하세요.
3. Copy 작업을 만들고 Dry Run으로 전송 내용을 미리 확인하세요.
4. 작업을 실행하고 WorkDrive를 종료하기 전에 Folder Compare로 검증하세요.

비교 결과가 깨끗해질 때까지 소스를 그대로 두면 전환 위험을 낮출 수 있습니다.

---

**관련 가이드:**

- [Zoho WorkDrive 클라우드 동기화 관리](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [Zoho WorkDrive를 OneDrive로 동기화](https://rcloneview.com/support/blog/sync-zoho-workdrive-to-onedrive-rcloneview)
- [Zoho WorkDrive 동기화 오류 해결](https://rcloneview.com/support/blog/fix-zoho-workdrive-sync-errors-rcloneview)

<CloudSupportGrid />
