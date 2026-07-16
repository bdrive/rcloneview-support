---
slug: manage-sugarsync-cloud-sync-backup-rcloneview
title: "SugarSync 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - tayson
description: "SugarSync를 RcloneView에 연결하고 클라우드 파일을 시각적으로 관리하세요. 사용하기 쉬운 GUI로 여러 플랫폼에서 SugarSync 데이터를 동기화, 백업, 전송할 수 있습니다."
keywords:
  - SugarSync cloud storage management
  - RcloneView SugarSync sync
  - SugarSync backup files
  - SugarSync file transfer GUI
  - SugarSync rclone
  - manage SugarSync with RcloneView
  - SugarSync desktop client alternative
  - SugarSync cloud backup tool
  - sync SugarSync files
  - SugarSync multi-cloud
tags:
  - sugarsync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# SugarSync 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기

> RcloneView는 SugarSync 스토리지에 완전한 GUI 제어 기능을 제공합니다 — SugarSync 자체 데스크톱 클라이언트에만 의존하지 않고도 파일을 탐색, 동기화, 백업할 수 있습니다.

SugarSync는 여러 기기에서 안정적인 파일 동기화가 필요한 소규모 비즈니스와 개인 전문가들에게 신뢰받아온 클라우드 백업 솔루션입니다. SugarSync의 자체 앱이 일상적인 동기화를 처리하는 동안, RcloneView는 IT 관리자와 파워 유저를 위한 강력한 기능을 추가합니다: 예약 작업, 클라우드 간 전송, 대량 마이그레이션, 그리고 다른 클라우드 계정과 함께하는 중앙 집중식 관리까지 지원합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## SugarSync를 RcloneView에 연결하기

RcloneView는 rclone의 SugarSync 백엔드를 사용하여 SugarSync에 연결합니다. RcloneView에서 Remote 탭 > New Remote로 이동하여 제공업체 목록에서 SugarSync를 선택하세요. SugarSync 계정 자격 증명으로 인증하라는 메시지가 표시되며, 토큰은 RcloneView의 암호화된 로컬 저장소에 안전하게 저장됩니다.

연결이 완료되면 Magic Briefcase를 포함한 SugarSync 폴더와 사용자 지정 동기화 폴더가 파일 탐색기에 표시됩니다. 폴더 내용을 탐색하고, 파일 크기를 확인하고, 마우스 오른쪽 버튼 클릭 컨텍스트 메뉴를 사용하여 파일 관리 작업을 수행할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding SugarSync as a remote in RcloneView" class="img-large img-center" />

## SugarSync를 다른 클라우드로 백업하기

SugarSync를 RcloneView에 연결하는 매력적인 사용 사례 중 하나는 클라우드 간 백업입니다 — SugarSync의 콘텐츠를 Backblaze B2나 Amazon S3 같은 보조 제공업체로 복사하는 것입니다. SugarSync에 수년간의 고객 문서를 보관해온 프리랜서 컨설턴트라면, 매주 동기화 작업을 구성하여 해당 콘텐츠를 S3 호환 아카이브에 미러링함으로써 기본 계정에 접근할 수 없게 되는 경우를 대비한 이중화를 확보할 수 있습니다.

RcloneView의 동기화 마법사는 소스 선택, 대상 설정, 필터링 옵션, 예약 설정을 안내합니다. 체크섬 검증을 활성화하면 전송된 모든 파일이 소스와 정확히 일치하는지 확인할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a backup job from SugarSync in RcloneView" class="img-large img-center" />

## SugarSync 파일 탐색 및 정리하기

듀얼 패널 파일 탐색기를 사용하면 SugarSync와 다른 클라우드 또는 로컬 폴더를 나란히 작업할 수 있습니다. RcloneView에 내장된 폴더 비교 기능으로 폴더 내용을 시각적으로 비교하세요 — 한쪽에는 존재하지만 다른 쪽에는 없는 파일을 찾거나, 불완전한 동기화를 나타낼 수 있는 크기 차이가 있는 파일을 식별할 수 있습니다.

수천 개의 파일이 있는 대규모 SugarSync 라이브러리의 경우, 파일 목록의 정렬 및 필터 기능을 사용하여 빠르게 탐색하세요. 하단의 요약 정보는 전체 파일 수와 합산된 스토리지 크기를 한눈에 보여줍니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing SugarSync folder contents in RcloneView" class="img-large img-center" />

## SugarSync에서 마이그레이션하기

SugarSync에서 다른 제공업체로 마이그레이션할 계획이라면, RcloneView는 이 과정을 상당히 단순화합니다. SugarSync에서 목표 대상으로의 일회성 동기화 작업을 구성하고, 드라이 런으로 전송될 내용을 미리 확인한 다음, 전체 마이그레이션을 실행하세요. 작업 기록은 이동된 파일에 대한 완전한 기록을 제공합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating SugarSync data to another cloud provider with RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Remote 탭 > New Remote로 이동하여 SugarSync를 선택합니다.
3. SugarSync 자격 증명으로 인증하고 리모트를 저장합니다.
4. 탐색기에서 파일을 탐색하고 다른 제공업체로의 동기화 또는 백업 작업을 구성합니다.

RcloneView는 SugarSync 사용자에게 이미 익숙한 워크플로우를 대체하지 않으면서도 엔터프라이즈급 동기화 및 백업 도구를 제공합니다.

---

**관련 가이드:**

- [Dropbox 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Google Drive 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [프리랜서와 독립 계약자를 위한 클라우드 스토리지 — RcloneView](https://rcloneview.com/support/blog/cloud-storage-freelancers-independent-contractors-rcloneview)

<CloudSupportGrid />
