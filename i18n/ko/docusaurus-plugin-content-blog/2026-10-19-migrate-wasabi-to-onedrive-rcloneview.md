---
slug: migrate-wasabi-to-onedrive-rcloneview
title: "Wasabi를 OneDrive로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - tayson
description: "RcloneView로 Wasabi를 OneDrive로 마이그레이션하세요: 두 리모트를 연결하고, Dry Run으로 미리 확인한 뒤, 버킷 데이터를 클라우드 간 복사하고 Folder Compare로 검증합니다."
keywords:
  - Wasabi OneDrive 마이그레이션
  - Wasabi OneDrive 전송
  - Wasabi 버킷을 OneDrive로 이동
  - RcloneView Wasabi
  - RcloneView OneDrive
  - 클라우드 간 마이그레이션
  - Wasabi OneDrive 동기화
  - S3에서 OneDrive로
tags:
  - RcloneView
  - wasabi
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Wasabi를 OneDrive로 마이그레이션 — RcloneView로 파일 전송하기

> 다운로드 후 다시 업로드하는 우회 대신, 미리 확인하고 검증할 수 있는 클라우드 간 복사로 Wasabi 버킷의 데이터를 OneDrive로 옮기세요.

Wasabi에 프로젝트 아카이브를 보관하던 팀이 동료들이 이미 Microsoft 365에서 작업하는 OneDrive로 그 데이터를 옮겨야 할 때가 있습니다. 오브젝트 스토리지와 파일 동기화 서비스는 동작 방식이 달라서, 무작정 복사하면 예상치 못한 문제가 생길 수 있습니다. RcloneView는 두 서비스를 나란히 연결하고, Dry Run으로 작업을 미리 확인하며, 이후 결과를 검증합니다. FREE 라이선스로 S3, Azure, Backblaze B2를 전체 읽기/쓰기로 연결할 수 있으며, 그 밖의 90개 이상의 제공자도 함께 사용할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Wasabi와 OneDrive 연결하기

Wasabi는 rclone의 S3 프로토콜로 접근하므로 Access Key, Secret Key, 그리고 Wasabi 리전의 엔드포인트를 입력합니다. OneDrive는 브라우저 OAuth를 사용합니다. RcloneView가 Microsoft 로그인 페이지를 열면 접근을 승인하는 것만으로 복사할 키 없이 리모트가 연결됩니다.

두 리모트를 두 개의 Explorer 패널에서 여세요. 버킷과 OneDrive 폴더 트리를 살펴보며 데이터가 어디에 있고 어디로 가야 하는지 파악하세요.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 Wasabi와 OneDrive 리모트 추가하기" class="img-large img-center" />

## 복사 계획 세우기

완성된 프로젝트 폴더가 담긴 여러 버킷을 가진 디자인 스튜디오를 상상해 보세요. 모든 것을 한 번에 옮기는 대신 작업마다 버킷 하나 또는 프리픽스 하나씩 복사하세요. 짧은 작업은 재시도하기도, 확인하기도 쉽습니다.

OneDrive에 이미 보관하려는 파일이 있다면 Sync 대신 Copy를 선택하세요. 단방향 동기화는 대상이 원본과 일치하도록 만들기 때문입니다. 필터 단계에서는 파일 크기나 기간을 제한하고 Document, Image, Video 같은 사전 정의 그룹을 사용할 수 있습니다. 또한 미리 파일 이름을 검토하세요. 오브젝트 키에는 OneDrive가 거부할 수 있는 문자나 매우 긴 경로가 포함될 수 있으므로, Dry Run에 잠깐 시간을 들일 가치가 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="마이그레이션 전에 Wasabi와 OneDrive 폴더 비교하기" class="img-large img-center" />

## 전송 실행하기

간단히 한 번 옮기려면 Wasabi 패널의 폴더를 OneDrive 패널로 끌어다 놓으세요. 서로 다른 리모트 간 드래그는 이동이 아니라 복사이므로, 만족할 때까지 버킷은 그대로 유지됩니다. 반복 실행이 필요하면 4단계 마법사(스토리지, 고급 설정, 필터, 스케줄링)로 작업을 저장하세요(스케줄링은 PLUS 필요).

Transferring 탭에서 속도, 파일 수, 진행률을 확인하세요. 대용량 실행 중 OneDrive가 느려지면 Advanced Settings에서 동시 파일 전송 수를 낮추세요. Sync 작업은 실패하면 전체 실행을 재시도합니다(기본값: 3회).

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Wasabi에서 OneDrive로의 클라우드 간 전송" class="img-large img-center" />

## 검증하고 기록 남기기

복사가 끝나면 두 루트에서 Folder Compare를 여세요. 필터로 왼쪽에만 있는 파일, 오른쪽에만 있는 파일, 동일한 파일, 다른 파일을 확인할 수 있고, 누락된 항목은 한 번의 클릭으로 복사할 수 있습니다. Job History에는 시작 시간, 소요 시간, 상태, 전송된 파일 수가 기록되어 마이그레이션 로그 역할도 합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Wasabi에서 OneDrive로의 마이그레이션 작업 기록" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Wasabi 리모트(액세스 키, 시크릿 키, 리전 엔드포인트)와 OneDrive 리모트(브라우저 로그인)를 추가하세요.
3. 프리픽스 하나에 Dry Run을 실행한 뒤 복사 작업을 실행하세요.
4. Folder Compare로 검증하고 나머지 버킷도 같은 방식으로 반복하세요.

단계별로 검증하며 마이그레이션하면 버킷을 정리하기 전에 모든 파일이 확인된 상태가 됩니다.

---

**관련 가이드:**

- [OneDrive를 Wasabi로 마이그레이션](https://rcloneview.com/support/blog/migrate-onedrive-to-wasabi-rcloneview)
- [Wasabi 스토리지 관리하기](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Dry Run: 전송 전에 동기화 미리 보기](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
