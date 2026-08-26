---
slug: manage-box-business-cloud-sync-backup-rcloneview
title: "Box for Business 관리하기 — RcloneView로 동기화 및 백업하기"
authors:
  - robin
description: "RcloneView에서 Box for Business를 연결해 하나의 크로스 플랫폼 GUI로 엔터프라이즈 파일을 탐색, 동기화, 백업하세요."
keywords:
  - box for business
  - box 엔터프라이즈 클라우드 스토리지
  - RcloneView box business
  - box_sub_type enterprise
  - box business 파일 동기화
  - box for business 백업
  - box 엔터프라이즈 계정 관리
  - box 클라우드 스토리지 GUI
  - box business 파일 관리
tags:
  - RcloneView
  - box
  - cloud-storage
  - cloud-sync
  - backup
  - business
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box for Business 관리하기 — RcloneView로 동기화 및 백업하기

> Box for Business 계정은 연결 시 추가 설정이 하나 필요합니다 — RcloneView가 이를 처리한 다음 완전한 파일 관리자를 제공합니다.

Box for Business는 개인용 Box 계정과는 다른 계정 유형으로 운영되며, 올바르게 연결하려면 리모트 설정 중에 엔터프라이즈 플래그를 활성화해야 합니다. 수십 개 좌석에 걸쳐 엔터프라이즈 폴더를 공유하는 디자인 에이전시라면 잘못된 워크스페이스를 조용히 탐색하는 잘못된 리모트를 감당할 수 없습니다. RcloneView는 설정 중에 올바른 설정을 추가한 다음, Box for Business를 다른 모든 리모트와 마찬가지로 취급합니다 — 하나의 창에서 탐색, 동기화, 마운트가 모두 가능합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Box for Business 계정 연결하기

Box for Business는 개인용 Box 계정과 동일한 OAuth 브라우저 로그인을 사용하지만, RcloneView가 개인 폴더 트리 대신 올바른 엔터프라이즈 워크스페이스를 가리키도록 리모트 생성 중에 `box_sub_type = enterprise`를 설정해야 합니다. Remote 탭 > New Remote를 열고 Box를 선택한 다음 브라우저 로그인을 완료하고 저장하기 전에 서브타입을 설정하세요. 마운트만 지원하는 도구와 달리, RcloneView는 Box for Business 리모트에서도 동기화와 폴더 비교를 지원합니다 — FREE 라이선스에서도 가능합니다.

연결이 완료되면 리모트가 다른 클라우드 스토리지와 마찬가지로 Explorer 탭 바에 나타납니다. 엔터프라이즈 폴더를 탐색하고, 하단 요약에서 파일 수와 크기를 확인하고, 매번 다시 인증하지 않고도 여러 Box 워크스페이스 사이를 전환할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Box for Business remote in RcloneView" class="img-large img-center" />

## 엔터프라이즈 폴더 백업하기

동기화 작업은 다른 리모트를 보호하는 것과 동일한 방식으로 Box for Business 콘텐츠를 보호합니다: 동기화 마법사의 1단계에서 소스와 대상을 구성하고, 안정적인 백업 방향을 위해 단방향 "대상만 수정"을 선택한 다음, 3단계에서 필터를 추가해 임시 파일이나 용량이 큰 첨부파일을 제외하세요. 계약서나 클라이언트 산출물을 다루는 팀이라면, 로컬 스토리지나 보조 클라우드 계정으로의 야간 단방향 동기화가 공유 워크스페이스 밖에 복구용 사본을 유지해줍니다.

이후 Job History는 상태, 파일 수, 전송된 크기, 소요 시간 등 모든 실행 기록을 추적하므로, 관리자는 예약이 백그라운드에서 조용히 실행되었으리라 가정하는 대신 백업이 실제로 완료되었는지 확인할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Box for Business backup runs" class="img-large img-center" />

## Box for Business를 로컬 드라이브로 마운트하기

마운트는 엔터프라이즈 계정을 드라이브 문자나 마운트 지점으로 전환하여, 파일을 먼저 다운로드하지 않고도 모든 데스크톱 애플리케이션에서 직접 열 수 있게 해줍니다. 이는 웹 업로드 대화상자 대신 로컬 파일 경로를 기대하는 디자인 또는 문서 소프트웨어를 사용하는 팀에게 중요합니다. 응답성과 안정성의 균형을 위해 캐시 모드를 "writes"로 설정하고, 공유 콘텐츠를 수정해서는 안 되는 검토자를 위해 Read only를 활성화하세요.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting a Box for Business folder from the Remote Explorer panel" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 새 Box 리모트를 만들고 설정 중에 엔터프라이즈 서브타입을 활성화하세요.
3. 중요한 엔터프라이즈 폴더를 백업하기 위해 단방향 동기화 작업을 구성하세요.
4. 직접적인 로컬 파일 액세스가 필요한 팀을 위해 리모트를 마운트하세요.

엔터프라이즈 계정도 다른 클라우드 스토리지와 동일하게 안정적인 동기화와 백업 커버리지를 누릴 자격이 있습니다 — RcloneView는 처음부터 연결이 올바르게 구성되도록 보장할 뿐입니다.

---

**관련 가이드:**

- [Box 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Dropbox for Business 스토리지 관리하기 — RcloneView로 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-dropbox-business-cloud-sync-backup-rcloneview)
- [RcloneView로 Box 스토리지를 네트워크 드라이브로 마운트하여 원활한 팀 액세스 구현](https://rcloneview.com/support/blog/mount-box-storage-network-drive-rcloneview)

<CloudSupportGrid />
