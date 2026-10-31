---
slug: migrate-onedrive-to-mega-rcloneview
title: "OneDrive에서 Mega로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - jay
description: "RcloneView로 Microsoft OneDrive의 파일을 Mega로 옮기세요. 두 리모트를 연결하고, 드라이 런을 실행하고, 클라우드 간 복사 후 폴더 비교로 결과를 확인합니다."
keywords:
  - OneDrive Mega 마이그레이션
  - OneDrive에서 Mega로 전송
  - OneDrive 파일을 Mega로 이동
  - OneDrive Mega 마이그레이션 도구
  - 클라우드 간 전송
  - RcloneView OneDrive
  - RcloneView Mega
  - Mega GUI 클라이언트
tags:
  - RcloneView
  - onedrive
  - mega
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OneDrive에서 Mega로 마이그레이션 — RcloneView로 파일 전송하기

> 수작업 다운로드와 재업로드 대신, 시각적이고 반복 가능한 클라우드 간 작업으로 OneDrive 라이브러리를 Mega로 옮기세요.

수년간 쌓인 문서를 Microsoft OneDrive에서 Mega로 옮기려면 보통 내 디스크를 거치는 느린 우회로를 거쳐야 합니다. RcloneView는 두 서비스를 리모트로 연결해 서로 직접 복사하며, 쓰기 전에 미리보기를 제공하고 완료 후에는 누락이 없는지 비교로 확인할 수 있습니다. RcloneView는 하나의 창에서 90개 이상의 제공업체를 마운트하고 동기화하며 Windows, macOS, Linux에서 실행됩니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## OneDrive와 Mega를 리모트로 연결

OneDrive는 브라우저 기반 OAuth를 사용합니다. 리모트를 추가할 때 Microsoft OneDrive를 선택하고 로그인하면 RcloneView가 토큰을 저장합니다. Mega는 다릅니다. 이메일과 비밀번호를 직접 입력하므로 시작하기 전에 준비해 두세요.

리모트 이름은 `onedrive-main`, `mega-archive`처럼 알아보기 쉽게 지정하세요. 나중에 작업 기록을 읽거나 `onedrive-main:Projects` 같은 전체 경로를 rclone 터미널에 복사할 때 명확한 이름이 도움이 됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 OneDrive와 Mega 리모트 추가" class="img-large img-center" />

## 실행 전에 복사 계획 세우기

두 리모트를 나란히 배치된 Explorer 패널에서 열고 옮길 폴더를 탐색하세요. 소스에서 Get Size를 사용해 전송할 데이터 양을 가늠하고, Mega 계정에 충분한 공간이 있는지 확인하세요.

첫 마이그레이션에는 Sync보다 **Copy**를 선택하세요. Copy는 대상에서 아무것도 삭제하지 않으므로 폴더를 잘못 선택해도 데이터가 지워지지 않습니다. 필터링 단계를 사용해 필요 없는 파일 형식을 건너뛰거나, 최대 파일 크기 또는 기간으로 제한할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView에서 두 리모트 간 클라우드 간 전송" class="img-large img-center" />

## 드라이 런 후 실제 전송

드라이 런(Dry Run)은 한 바이트도 쓰지 않고 복사될 항목을 나열합니다. 검토한 뒤 작업을 실행하세요. Transferring 탭에는 진행률, 속도, 파일 수가 표시되며 실행 중인 작업은 언제든 취소할 수 있습니다.

대용량 라이브러리라면 Mega가 속도를 제한할 때 동시 파일 전송 수를 낮추고, 일시적인 네트워크 끊김으로 작업이 중단되지 않도록 기본 재시도 횟수를 유지하세요.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView에서 복사 작업 실행" class="img-large img-center" />

## 폴더 비교로 확인

작업이 끝나면 왼쪽에 OneDrive, 오른쪽에 Mega를 두고 Compare를 여세요. 필터로 왼쪽에만 있는 파일을 표시할 수 있어, 전송에 실패한 항목이 바로 눈에 띕니다. 같은 화면에서 누락된 파일을 복사할 수도 있습니다. 작업 기록(Job History)에는 해당 실행의 상태, 크기, 속도, 파일 수가 기록됩니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="OneDrive와 Mega 간 폴더 비교 결과" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. OneDrive(OAuth)와 Mega(이메일 및 비밀번호)를 리모트로 추가하세요.
3. OneDrive에서 Mega로 Copy 작업을 만들고, 드라이 런을 실행한 뒤 실제로 실행하세요.
4. 원본을 정리하기 전에 폴더 비교로 확인하세요.

미리 보고, 모니터링하고, 확인할 수 있는 마이그레이션이라면 자신 있게 끝낼 수 있습니다.

---

**관련 가이드:**

- [Mega 스토리지 관리 — RcloneView로 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-mega-cloud-sync-backup-rcloneview)
- [OneDrive 스토리지 관리 — RcloneView로 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [Google Drive에서 Mega로 마이그레이션 — RcloneView로 파일 전송하기](https://rcloneview.com/support/blog/migrate-google-drive-to-mega-rcloneview)

<CloudSupportGrid />
