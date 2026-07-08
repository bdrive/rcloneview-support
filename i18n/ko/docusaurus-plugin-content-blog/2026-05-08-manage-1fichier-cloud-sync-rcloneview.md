---
slug: manage-1fichier-cloud-sync-rcloneview
title: "1Fichier 클라우드 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - steve
description: "1Fichier를 RcloneView에 연결하여 GUI 기반 파일 관리, 자동 백업, 클라우드 간 전송을 수행하세요. 명령줄 도구 없이 1Fichier 라이브러리를 관리할 수 있습니다."
keywords:
  - 1Fichier RcloneView 동기화
  - 1Fichier 파일 GUI 관리
  - 1Fichier 클라우드 백업
  - 1Fichier 파일 전송 RcloneView
  - 1Fichier to Google Drive
  - rclone 1Fichier GUI
  - 1Fichier 스토리지 관리
  - 1Fichier 백업 도구
tags:
  - RcloneView
  - 1fichier
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 1Fichier 클라우드 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기

> 1Fichier 계정을 RcloneView에 연결하여 파일을 관리하고, 자동 백업을 생성하고, 명령줄을 사용하지 않고도 데이터를 다른 클라우드 제공업체로 전송하세요.

1Fichier는 넉넉한 스토리지 제공과 파일 공유 기능으로 인기 있는 프랑스의 클라우드 스토리지 및 파일 호스팅 서비스입니다. 1Fichier 웹 인터페이스는 탐색과 수동 다운로드를 처리하지만, 대용량 라이브러리를 이동하거나 자동 백업을 생성하거나 1Fichier를 멀티 클라우드 워크플로우에 통합해야 하는 사용자는 더 강력한 도구가 필요합니다. RcloneView의 1Fichier 백엔드는 깔끔한 GUI를 통해 이 모든 작업을 처리합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 1Fichier를 RcloneView에 연결하기

RcloneView에서 **Remote 탭 → New Remote**를 열고 제공업체 목록에서 1Fichier를 선택하세요. 인증에는 1Fichier API 키가 필요하며, 이는 1Fichier 계정 설정의 API 섹션에서 생성할 수 있습니다. API 키를 RcloneView의 구성 대화 상자에 붙여넣고 저장하세요. 리모트는 즉시 사용할 준비가 됩니다.

1Fichier 폴더와 파일은 탐색기 패널에 표시되며, 폴더 트리로 탐색하고 정렬 가능한 파일 목록으로 볼 수 있습니다. 모든 폴더의 총 개수와 크기는 오른쪽 클릭 → **Get Size**를 통해 확인할 수 있으며, 이는 마이그레이션이나 백업 작업을 계획하기 전에 데이터 양을 파악하는 데 유용합니다.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting 1Fichier to RcloneView as a new remote" class="img-large img-center" />

## 1Fichier 콘텐츠 다운로드 및 정리하기

1Fichier에 대용량 파일 아카이브를 저장하고 Google Drive, OneDrive, 또는 로컬 NAS와 같은 더 접근하기 쉬운 제공업체로 이동하려는 사용자에게는 RcloneView의 클라우드 간 Copy 작업이 적합한 도구입니다. 한 패널에서 1Fichier를 열고 다른 패널에서 대상을 연 다음, Job Manager에서 Copy 작업을 생성하세요. 적절한 전송 동시성을 설정하세요 — 1Fichier는 무료 계정에 다운로드 속도 제한을 부과하므로, 프리미엄 계정 사용자는 더 빠른 처리량을 경험할 수 있습니다.

파일 유형이나 폴더 이름으로 작업을 필터링하여 콘텐츠를 선택적으로 마이그레이션하세요. 예를 들어, 혼합 콘텐츠 아카이브에서 비디오 파일만 추출하거나 특정 폴더 구조만 복사하고 나머지는 그대로 둘 수 있습니다.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files from 1Fichier to another cloud in RcloneView" class="img-large img-center" />

## 1Fichier로 파일 백업하기

1Fichier의 파일 호스팅 기능은 특히 유럽에 보관된 사본을 원하는 사용자에게 실행 가능한 보조 백업 대상이 됩니다. Google Drive, Dropbox, 또는 로컬 폴더를 소스로 하고 1Fichier 계정을 대상으로 하는 Sync 또는 Copy 작업을 생성하세요. Job Manager는 실패 시 전송 재시도를 처리하는데, 이는 파일 호스팅 서비스의 API 응답 시간이 가변적일 수 있다는 점을 고려할 때 중요합니다.

**Transferring 탭**에서 전송 진행 상황을 모니터링하고, 언제 무엇이 백업되었는지에 대한 전체 감사 기록을 확인하려면 **Job History**를 검토하세요.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring 1Fichier backup transfer progress in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 1Fichier 계정 설정에서 API 키를 생성하세요.
3. **Remote 탭 → New Remote**에서 1Fichier를 리모트로 추가하세요.
4. Copy 또는 Sync 작업을 생성하여 1Fichier 데이터를 이동하거나 백업하세요.

RcloneView는 다른 제공업체에서 사용하는 것과 동일한 드래그 앤 드롭 인터페이스로 1Fichier를 클라우드 스토리지 툴킷의 관리 가능한 일부로 만들어 줍니다.

---

**관련 가이드:**

- [RcloneView로 1Fichier 스토리지 다운로드 및 정리하기](https://rcloneview.com/support/blog/download-organize-1fichier-cloud-storage-rcloneview)
- [RcloneView로 클라우드 간 마이그레이션하기](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)
- [RcloneView로 여러 클라우드 계정 관리하기](https://rcloneview.com/support/blog/manage-multiple-cloud-accounts-with-rcloneview)

<CloudSupportGrid />
