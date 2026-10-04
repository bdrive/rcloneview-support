---
slug: migrate-google-drive-to-mega-rcloneview
title: "Google Drive를 Mega로 마이그레이션 — RcloneView로 파일 전송"
authors:
  - morgan
description: "RcloneView로 Google Drive를 Mega로 마이그레이션하세요: 클라우드 간 복사, 드라이 런 미리보기, 필터, 검증을 하나의 GUI에서 수행하며 수동 다운로드가 필요 없습니다."
keywords:
  - Google Drive를 Mega로 마이그레이션
  - Google Drive에서 Mega로 전송
  - Mega로 파일 이동
  - RcloneView
  - 클라우드 간 전송
  - Mega 클라우드 스토리지
  - Google Drive 마이그레이션
  - rclone GUI
  - 클라우드 마이그레이션 도구
tags:
  - RcloneView
  - google-drive
  - mega
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive를 Mega로 마이그레이션 — RcloneView로 파일 전송

> 수동으로 다운로드하고 다시 업로드하지 않고 Google Drive 전체 라이브러리를 Mega로 옮기세요.

Google Drive에서 Mega로 전환하려면 보통 아카이브를 내보내고, 다운로드를 기다리고, 다시 업로드해야 합니다. RcloneView는 두 서비스를 리모트로 연결하고 2패널 창에서 서로 복사하며, 파일을 옮기기 전에 드라이 런으로 결과를 미리 볼 수 있습니다. RcloneView는 하나의 창에서 90개 이상의 제공업체를 마운트하고 동기화하며 Windows, macOS, Linux에서 동작합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 두 리모트 연결

Google Drive는 OAuth를 사용합니다. RcloneView가 브라우저를 열면 로그인하고 리모트가 자동으로 생성됩니다. Mega는 새 리모트 대화상자에서 이메일과 비밀번호를 직접 입력합니다. 두 리모트가 Remote Manager에 나타나면 두 개의 탐색기 패널에 나란히 열 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 Google Drive와 Mega 리모트 추가" class="img-large img-center" />

Drive에 300GB의 프로젝트 폴더가 흩어져 있는 프리랜서를 생각해 보세요. 두 계정을 인접한 패널에서 탐색하면 시작하기 전에 원본 폴더와 대상 구조를 확인할 수 있습니다.

## 클라우드 간 복사

Google Drive 패널의 폴더를 Mega 패널로 끌어다 놓으세요. 서로 다른 리모트 간 드래그는 복사로 동작하므로 직접 정리하기 전까지 Drive 데이터는 그대로 유지됩니다. 더 큰 작업은 Job Manager에서 Copy 작업을 만들면 진행 상황 모니터링과 저장된 기록을 사용할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Google Drive에서 Mega로 클라우드 간 전송" class="img-large img-center" />

전송에 Google Docs 파일을 포함하고 싶지 않다면 필터링 단계의 미리 정의된 "Google Docs" 필터로 제외할 수 있습니다. 파일 크기나 기간에 제한을 두어 관련 데이터만 옮길 수도 있습니다.

## 작업 미리보기 및 모니터링

먼저 드라이 런을 실행하세요. 복사될 파일 목록이 표시되므로 잘못된 원본 폴더를 몇 시간을 허비하기 전에 발견할 수 있습니다. 그런 다음 작업을 시작하고 Transferring 탭에서 속도, 파일 수, 진행 상황을 확인하세요. 긴 작업에서 문제가 생기면 Advanced Settings에서 동시 파일 전송 수를 조정할 수 있습니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneView에서 전송 진행 상황 모니터링" class="img-large img-center" />

## 결과 검증

작업이 끝나면 Drive와 Mega 폴더에서 Folder Compare를 여세요. 왼쪽에만 있는 파일, 오른쪽에만 있는 파일, 다른 파일이 강조 표시되며, 누락된 항목은 비교 화면에서 바로 복사할 수 있습니다. Job History에는 각 실행의 상태, 소요 시간, 크기가 기록됩니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Google Drive와 Mega 간 Folder Compare" class="img-large img-center" />

## 시작하기

1. **RcloneView 다운로드:** [rcloneview.com](https://rcloneview.com/src/download.html)에서 받으세요.
2. New Remote에서 Google Drive(OAuth)와 Mega(이메일 및 비밀번호)를 추가합니다.
3. 두 리모트를 두 패널에 열고 테스트 폴더에서 드라이 런을 실행합니다.
4. 전체 라이브러리에 대한 Copy 작업을 만든 다음 Folder Compare로 검증합니다.

스크립트 없이 시각적으로 진행하는 마이그레이션은 Mega에 모든 것이 있다고 확신할 때까지 Drive를 그대로 보존합니다.

---

**관련 가이드:**

- [Mega를 Google Drive로 마이그레이션](https://rcloneview.com/support/blog/migrate-mega-to-google-drive-onedrive-rcloneview)
- [Mega 클라우드 스토리지 관리](https://rcloneview.com/support/blog/manage-mega-cloud-sync-backup-rcloneview)
- [드라이 런: 전송 전 동기화 미리보기](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
