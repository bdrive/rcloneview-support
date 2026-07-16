---
slug: migrate-jottacloud-to-backblaze-b2-rcloneview
title: "Jottacloud에서 Backblaze B2로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - tayson
description: "RcloneView로 Jottacloud에서 Backblaze B2로 파일을 마이그레이션하세요. 노르웨이 클라우드 스토리지를 저렴한 S3 호환 오브젝트 스토리지로 직접 전송할 수 있습니다."
keywords:
  - Jottacloud to Backblaze B2
  - migrate Jottacloud
  - Jottacloud migration
  - Backblaze B2 migration
  - cloud-to-cloud transfer
  - Jottacloud RcloneView
  - Backblaze B2 backup
  - cloud storage migration
  - Norwegian cloud storage
  - RcloneView transfer
tags:
  - jottacloud
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Jottacloud에서 Backblaze B2로 마이그레이션 — RcloneView로 파일 전송하기

> RcloneView로 Jottacloud 파일을 Backblaze B2 오브젝트 스토리지로 이동하세요 — 로컬 중간 다운로드 없이 클라우드 간 직접 마이그레이션이 가능합니다.

Jottacloud는 스칸디나비아와 유럽 전역의 개인과 기업이 사용하는, 개인정보 보호에 강점을 둔 노르웨이 클라우드 스토리지 서비스입니다. 저장 용량 수요가 늘어나면서 일부 사용자는 S3 호환 API, 프로그래밍 방식 접근, 대용량 아카이브나 개발자 워크플로에 더 적합한 계층형 스토리지 옵션을 제공하는 Backblaze B2로 마이그레이션합니다. RcloneView는 두 서비스를 연결하여 전송을 직접 처리합니다 — 중간 매개체로서의 로컬 하드 드라이브가 필요하지 않습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Jottacloud와 Backblaze B2 설정하기

두 리모트를 RcloneView에 추가하는 데는 몇 분밖에 걸리지 않습니다. Jottacloud의 경우 Remote 탭을 열고 New Remote를 클릭한 다음, 제공업체 목록에서 Jottacloud를 선택합니다. 설정에는 Jottacloud 계정 자격 증명이 사용됩니다. Backblaze B2의 경우 Backblaze B2를 선택하고, Backblaze 계정의 App Keys 메뉴에서 생성한 Application Key ID와 Application Key를 입력합니다. 이후 두 리모트 모두 Explorer 패널에서 접근 가능한 파일 트리로 표시됩니다.

Jottacloud 폴더를 탐색하여 이동할 콘텐츠를 파악하세요. Jottacloud는 파일을 기기와 폴더 단위로 구성하므로, 마이그레이션 작업을 만들기 전에 구조를 이해하여 올바른 소스 경로를 선택해야 합니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Jottacloud and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## 마이그레이션 실행하기

Jottacloud 폴더를 소스로, Backblaze B2 버킷을 대상으로 하는 동기화 작업을 생성합니다. 대상 버킷이 아직 없다면 마이그레이션을 실행하기 전에 Backblaze 콘솔에서 직접 생성할 수 있습니다. Sync 마법사의 Advanced Settings 단계에서는 동시 파일 전송 수를 설정하고 체크섬 검증을 활성화할 수 있습니다 — 체크섬 검증은 각 파일이 온전하게 도착했는지 확인해주며, 대용량 사진이나 동영상 아카이브에서 특히 유용합니다.

Jottacloud의 RAW 파일 500GB를 Backblaze B2로 마이그레이션하는 사진작가의 경우, Filtering 단계를 활용하면 단계별 마이그레이션을 관리하기 쉬워집니다. 파일 확장자(`.raw`, `.cr3`, `.arw`)로 필터링하여 카메라 파일을 먼저 마이그레이션한 다음, 이후 작업에서 다른 자산 유형을 처리하세요. Max file age 필터를 사용하면 오래된 자료를 보관하기 전에 최근 작업물을 우선적으로 처리할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Jottacloud files to Backblaze B2 with RcloneView" class="img-large img-center" />

프로덕션 마이그레이션을 시작하기 전에는 항상 Dry Run을 사용하세요. 시뮬레이션은 복사되거나 삭제될 모든 파일을 나열하므로, 실제로 실행하기 전에 범위가 의도와 일치하는지 확인할 수 있습니다.

## 완료된 마이그레이션 검증하기

전송이 끝나면 Folder Compare를 사용하여 완전성을 검증하세요. 소스인 Jottacloud 폴더와 Backblaze B2 대상을 선택하면, 비교 뷰에서 한쪽에만 존재하거나 크기가 다른 파일을 강조 표시합니다. 이를 통해 대규모 마이그레이션에서 자칫 놓치기 쉬운 누락된 파일이나 불완전한 전송을 확인할 수 있습니다.

Job History 패널에서는 각 마이그레이션 실행의 소요 시간, 파일 수, 이동한 총 데이터 양, 최종 상태를 확인할 수 있습니다. 네트워크 문제나 시스템 절전 모드로 인해 실행이 중단된 경우, 동기화 작업을 다시 실행하면 rclone의 증분 처리 방식에 따라 누락되거나 변경된 파일만 다시 전송됩니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Jottacloud to Backblaze B2 migration job history in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Jottacloud 계정 자격 증명을 사용하여 Jottacloud를 리모트로 추가하세요.
3. Application Key ID와 Application Key를 사용하여 Backblaze B2를 추가하세요.
4. Dry Run을 실행하여 미리 확인한 다음, 동기화를 실행하여 파일을 B2 버킷으로 마이그레이션하세요.

RcloneView를 통한 Jottacloud에서 Backblaze B2로의 마이그레이션은 증분 방식이며, 재개 가능하고, 완전히 GUI로 진행됩니다 — 스크립트 작성이 필요하지 않습니다.

---

**관련 가이드:**

- [RcloneView로 Jottacloud 클라우드 동기화 및 백업 관리하기](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [RcloneView로 Dropbox를 Backblaze B2로 백업하기](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)
- [RcloneView로 Wasabi를 Backblaze B2로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-wasabi-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
