---
slug: migrate-sugarsync-to-backblaze-b2-rcloneview
title: "SugarSync에서 Backblaze B2로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - steve
description: "RcloneView로 SugarSync의 파일을 Backblaze B2로 옮기세요. 두 리모트를 연결하고, Dry Run으로 전송을 확인하고, Folder Compare로 결과를 검증합니다."
keywords:
  - SugarSync Backblaze B2 마이그레이션
  - SugarSync B2 전송
  - SugarSync 마이그레이션
  - Backblaze B2 백업
  - 클라우드 간 마이그레이션
  - RcloneView SugarSync
  - SugarSync 대체 스토리지
  - rclone SugarSync B2
  - 클라우드 마이그레이션 GUI
  - 오브젝트 스토리지 백업
tags:
  - RcloneView
  - sugarsync
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# SugarSync에서 Backblaze B2로 마이그레이션 — RcloneView로 파일 전송하기

> 수년간 쌓인 SugarSync 폴더를 직접 다운로드하고 다시 업로드하지 않고도 Backblaze B2 버킷으로 옮기세요.

SugarSync를 오래 사용한 팀은 버킷과 애플리케이션 키를 자동화에 활용하기 좋은 오브젝트 스토리지로 아카이브를 옮기고 싶어 하는 경우가 많습니다. RcloneView는 하나의 창에서 두 서비스에 모두 연결되므로, 폴더를 SugarSync에서 Backblaze B2로 바로 복사하고 이전 계정을 정리하기 전에 결과를 확인할 수 있습니다. FREE 라이선스로 S3, Azure, Backblaze B2에 읽기/쓰기 전체 권한으로 연결하세요.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 두 리모트 연결하기

Remote 탭을 열고 New Remote를 클릭하세요. 계정 자격 증명으로 SugarSync를 추가한 다음, Backblaze 키 관리 페이지에서 발급한 Application Key ID와 Application Key로 Backblaze B2를 추가합니다. 대상이 명확하도록 Backblaze에서 먼저 대상 버킷을 만들어 두세요.

SugarSync를 한쪽 Explorer 패널에, B2 버킷을 다른 쪽 패널에 배치하세요. 무언가를 설정하기 전에 두 곳을 탐색하여 접근이 가능한지 확인합니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 SugarSync 및 Backblaze B2 리모트 추가" class="img-large img-center" />

## 드래그 앤 드롭 또는 동기화 작업으로 복사하기

작은 폴더는 SugarSync 패널에서 B2 패널로 드래그하세요. 서로 다른 리모트 간 드래그는 복사로 처리되므로 원본은 그대로 남습니다. 전체 마이그레이션에는 4단계 동기화 마법사를 사용하세요. 소스와 대상을 선택하고, 전송 수를 설정하고, 필터를 추가하고, 필요하면 PLUS 라이선스로 예약할 수 있습니다.

대상의 어떤 것도 삭제되지 않도록 첫 번째 실행에는 Sync 작업 대신 Copy 작업을 사용하세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView에서 SugarSync에서 Backblaze B2로 클라우드 간 전송" class="img-large img-center" />

## 미리 보기, 모니터링, 검증

먼저 Dry Run을 실행하세요. 복사될 파일을 나열하므로 데이터가 이동하기 전에 잘못된 경로를 찾아낼 수 있습니다. 작업이 실행되는 동안 Transferring 탭에서 진행률, 속도, 파일 수를 확인할 수 있습니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Transferring 탭에서 SugarSync에서 B2로의 전송 모니터링" class="img-large img-center" />

완료되면 Compare를 열어 SugarSync와 B2를 나란히 보세요. 왼쪽에만 있는 파일은 아직 도착하지 않은 항목이며, 비교 화면에서 바로 복사할 수 있습니다. Job History에는 각 실행 기록이 남습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="SugarSync와 Backblaze B2의 내용이 일치함을 확인하는 Folder Compare" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. SugarSync와 Backblaze B2를 리모트로 추가하고 대상 버킷을 만드세요.
3. Copy 작업을 만들고 Dry Run을 실행한 뒤 전송을 시작하세요.
4. SugarSync 계정을 닫기 전에 Folder Compare로 확인하세요.

B2에 검증된 사본이 있으면 이전 서비스를 안심하고 정리할 수 있습니다.

---

**관련 가이드:**

- [RcloneView로 SugarSync에서 Google Drive 및 OneDrive로 마이그레이션](https://rcloneview.com/support/blog/migrate-sugarsync-google-drive-onedrive-rcloneview)
- [RcloneView로 SugarSync 스토리지 관리](https://rcloneview.com/support/blog/manage-sugarsync-cloud-sync-backup-rcloneview)
- [RcloneView로 Backblaze B2 스토리지 관리](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
