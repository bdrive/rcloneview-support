---
slug: manage-citrix-sharefile-cloud-sync-backup-rcloneview
title: "Citrix ShareFile 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - tayson
description: "RcloneView로 Citrix ShareFile 스토리지를 연결하고 관리하는 방법을 알아보세요. 하나의 GUI에서 ShareFile 데이터를 다른 클라우드로 동기화, 백업, 전송할 수 있습니다."
keywords:
  - Citrix ShareFile
  - ShareFile 동기화
  - ShareFile 백업
  - ShareFile 클라우드 관리
  - RcloneView ShareFile
  - 기업용 파일 동기화
  - ShareFile을 클라우드로
  - 클라우드 스토리지 관리
  - ShareFile 마이그레이션
  - RcloneView 클라우드 동기화
tags:
  - RcloneView
  - sharefile
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Citrix ShareFile 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기

> Citrix ShareFile을 RcloneView에 연결하고, 하나의 GUI에서 90개 이상의 다른 클라우드 스토리지 서비스와 함께 기업 파일을 관리하세요.

Citrix ShareFile은 안전한 파일 공유와 문서 관리를 위해 기업과 전문 서비스 팀에서 널리 사용됩니다. ShareFile은 자체 클라이언트를 제공하지만, 여러 클라우드 플랫폼에서 파일을 관리하는 팀은 종종 중앙화된 도구가 필요합니다. rclone을 기반으로 구축된 GUI 클라이언트인 RcloneView를 사용하면 Google Drive, OneDrive, Amazon S3 등 다른 서비스와 함께 ShareFile을 하나의 인터페이스에서 연결할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView에 Citrix ShareFile 연결하기

RcloneView에 Citrix ShareFile을 추가하려면 ShareFile 계정 자격 증명과 Root Folder ID가 필요합니다. Root Folder ID는 rclone이 연결의 루트로 사용할 ShareFile 계정 내 폴더를 식별하며, 일반적으로 ShareFile 웹 인터페이스의 폴더 속성에서 찾을 수 있습니다.

리모트를 설정하려면 RcloneView를 열고 Remote 탭으로 이동한 다음 New Remote를 클릭하세요. 제공자 목록에서 Citrix ShareFile을 선택하고 Root Folder ID를 포함한 필수 구성 정보를 입력합니다. RcloneView에는 내장 rclone 바이너리가 포함되어 있어 별도의 rclone 설치가 필요하지 않습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Citrix ShareFile remote in RcloneView" class="img-large img-center" />

연결이 완료되면 File Explorer에 ShareFile이 리모트로 표시됩니다. RcloneView 인터페이스를 벗어나지 않고도 폴더를 탐색하고, 파일 메타데이터(이름, 크기, 수정 날짜)를 확인하고, 복사, 잘라내기, 붙여넣기, 이름 변경, 삭제와 같은 작업을 수행할 수 있습니다.

## ShareFile을 다른 클라우드 서비스와 동기화하기

RcloneView를 통해 ShareFile을 관리할 때 얻을 수 있는 실질적인 이점 중 하나는 다른 클라우드 스토리지와 직접 동기화할 수 있다는 점입니다. 예를 들어, 법률 회사는 장기 보관을 위해 ShareFile 클라이언트 폴더를 Amazon S3로 동기화하거나, Microsoft 365 통합을 위해 ShareFile 콘텐츠를 OneDrive로 미러링할 수 있습니다.

동기화 작업을 생성하려면 Home 탭에서 Sync 버튼을 클릭하고 4단계 마법사를 따르세요. ShareFile 폴더를 소스(또는 대상)로 선택하고, 대상 리모트와 폴더를 선택하고, 전송 옵션을 구성하고, 선택적으로 필터링 규칙을 추가합니다. Dry Run 기능을 사용하면 동기화를 실행하기 전에 어떤 파일이 복사되거나 삭제될지 정확히 미리 볼 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Citrix ShareFile to another cloud with RcloneView" class="img-large img-center" />

지속적인 데이터 보호를 위해, 예약 동기화(PLUS 라이선스에서 제공)를 사용하면 crontab 방식의 일정으로 ShareFile 백업을 매일, 매주, 또는 사용자 지정 간격으로 실행할 수 있습니다. Job History는 시작 시간, 소요 시간, 파일 개수, 상태와 함께 모든 실행 내역을 추적합니다.

## ShareFile 콘텐츠 정리 및 비교하기

RcloneView의 Folder Compare 기능은 ShareFile 콘텐츠를 백업 대상과 대조하여 감사하는 데 유용합니다. Home 탭의 Compare 버튼을 통해 실행하고, 한쪽에 ShareFile을, 다른 쪽에 대상 스토리지를 선택하면 한쪽에만 존재하는 파일, 크기가 다른 파일, 동일한 파일을 강조 표시합니다.

이러한 비교 우선 워크플로우는 마이그레이션에 유용합니다. 동기화 전에 비교를 실행하여 정확히 무엇이 변경될지 파악할 수 있습니다. 보다 세분화된 감사를 위해, Folder Compare with Filter(PLUS 라이선스)를 사용하면 파일 형식이나 폴더 이름으로 비교 범위를 제한할 수 있어 대규모 ShareFile 저장소를 다룰 때 유용합니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder comparison between ShareFile and backup storage in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Remote 탭을 열고 **New Remote**를 클릭한 다음 Citrix ShareFile을 선택하세요.
3. ShareFile 자격 증명과 Root Folder ID를 입력하여 설정을 완료하세요.
4. Sync 마법사를 사용하여 ShareFile을 원하는 대상 클라우드로 백업하는 작업을 생성하세요.

하나의 인터페이스에서 ShareFile을 다른 클라우드 서비스와 함께 관리하면 컨텍스트 전환을 줄이고 백업, 마이그레이션, 파일 정리에 일관된 워크플로우를 제공합니다.

---

**관련 가이드:**

- [RcloneView로 SharePoint 클라우드 동기화 및 백업 관리하기](https://rcloneview.com/support/blog/manage-sharepoint-cloud-sync-backup-rcloneview)
- [RcloneView로 Citrix ShareFile을 OneDrive 및 SharePoint로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-citrix-sharefile-onedrive-sharepoint-rcloneview)
- [RcloneView로 클라우드 간 마이그레이션하기](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)

<CloudSupportGrid />
