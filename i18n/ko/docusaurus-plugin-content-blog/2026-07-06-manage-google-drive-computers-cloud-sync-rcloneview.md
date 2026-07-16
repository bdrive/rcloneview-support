---
slug: manage-google-drive-computers-cloud-sync-rcloneview
title: "구글 드라이브 컴퓨터 관리 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - jay
description: "RcloneView에서 구글 드라이브 컴퓨터 폴더를 연결하고 백업하여, 데스크톱 백업 데이터를 하나의 GUI에서 90개 이상의 클라우드 제공업체로 동기화하세요."
keywords:
  - google drive computers
  - google drive computers backup
  - root_folder_id google drive
  - rcloneview google drive computers
  - backup and sync computers folder
  - google drive desktop backup
  - google drive computers sync
  - manage google drive computers
tags:
  - google-drive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 구글 드라이브 컴퓨터 관리 — RcloneView로 파일 동기화 및 백업하기

> 구글의 백업 및 동기화 앱이 드라이브로 밀어 넣는 데스크톱 폴더는 일반적인 드라이브 트리 바깥에 존재합니다 — RcloneView는 이 폴더에 직접 연결하여 다른 리모트와 마찬가지로 탐색, 복사, 백업할 수 있게 해줍니다.

워크스테이션에서 "내 컴퓨터 백업" 폴더가 활성화된 구글 드라이브 데스크톱 클라이언트를 실행하면, 해당 파일들은 일반 리모트가 기본적으로 볼 수 없는 드라이브의 특정 영역에 저장됩니다 — 일반 폴더 경로가 아닌 컴퓨터 ID로 지정되기 때문입니다. 이 때문에 GUI에서 접근하기가 까다롭고, 더 넓은 백업 또는 아카이브 전략에 포함시키기도 어렵습니다. RcloneView는 이를 설정 가능한 리모트 옵션으로 노출시켜, 컴퓨터 백업을 일반 클라우드 스토리지와 마찬가지로 탐색, 필터링, 복사할 수 있는 또 하나의 소스로 만들어줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 컴퓨터 백업에 연결하기

구글 드라이브의 일반 리모트 설정은 사용자 본인의 드라이브 루트와 그곳에 직접 만든 폴더만 노출합니다. 컴퓨터 백업에 접근하려면, RcloneView의 새 리모트 마법사에서 특정 컴퓨터의 백업 ID를 가리키는 `root_folder_id` 값을 입력하면 됩니다 — 설정이 완료되면 해당 기기의 백업된 폴더(바탕화면, 문서 또는 데스크톱 클라이언트에서 선택한 항목)가 일반 폴더 트리와 똑같이 탐색기 패널에 나타납니다. 이는 여러 직원의 노트북을 관리하는 IT 팀이나, 브라우저에 로그인하지 않고도 특정 기기의 백업 및 동기화 클라이언트가 실제로 무엇을 캡처했는지 확인하고 싶은 사용자에게 유용합니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 root_folder_id를 사용하여 컴퓨터 백업에 접근하도록 구글 드라이브 리모트를 구성하는 화면" class="img-large img-center" />

연결이 완료되면, 이 리모트는 다른 구글 드라이브 연결과 동일한 파일 작업을 지원합니다: 썸네일 미리보기, 폴더 트리 탐색, 우클릭 복사/다운로드, 그리고 특정 기기가 드라이브로 전송한 용량을 확인할 수 있는 크기 확인 기능까지 가능합니다. RcloneView는 동일한 창에서 90개 이상의 제공업체에 걸쳐 마운트와 동기화를 수행하므로, 한쪽 패널에 컴퓨터 백업을 두고 다른 패널에는 대상 아카이브를 두는 방식으로 작업할 수 있습니다.

## 여러 대의 기기를 하나의 아카이브로 통합하기

여러 워크스테이션을 백업하는 조직에서는 각 기기마다 고유한 ID를 가진 컴퓨터 폴더가 하나씩 생겨나며, 이로 인해 "회사 노트북에서 백업된 모든 것"을 한눈에 파악하기가 어려워집니다. 각 기기마다 별도의 리모트를 설정하고 공유 대상(로컬 NAS, S3 버킷, 또는 별도의 드라이브 계정) 으로 예약된 단방향 동기화 작업을 실행하면, 흩어져 있던 백업 데이터를 각 직원의 드라이브 화면 안에 갇혀 있게 두는 대신 실제로 관리할 수 있는 하나의 장소로 통합할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView에서 구글 드라이브 컴퓨터 백업을 통합 아카이브 대상으로 동기화하는 화면" class="img-large img-center" />

동기화 마법사 3단계의 필터링 설정은 이러한 작업을 효율적으로 유지하는 데 도움이 됩니다 — 임시 파일, 시스템 캐시, 불필요한 확장자를 제외하면 통합 아카이브에는 데스크톱 클라이언트가 캡처한 모든 파일을 그대로 복제하는 대신 실제로 보관할 가치가 있는 것만 남습니다.

## 반복 확인 예약하기

컴퓨터 백업은 고정된 상태가 아닙니다 — 데스크톱 클라이언트가 자체 동기화 주기를 실행할 때마다 계속 늘어나기 때문에, 아카이브로의 일회성 복사는 금방 오래된 정보가 되어버립니다. PLUS 라이선스 사용자는 동기화 작업에 크론탭 형식의 일정을 연결하여 새로 백업된 파일이 자동으로, 반복적으로 반영되도록 할 수 있습니다. 작업 기록에서는 각 기기의 컴퓨터 폴더가 마지막으로 캡처된 시점, 전송된 용량, 그리고 작업이 정상적으로 완료되었는지 여부를 정확히 확인할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView에서 구글 드라이브 컴퓨터 리모트에 대해 반복 동기화 작업을 예약하는 화면" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 새 구글 드라이브 리모트를 만들고 `root_folder_id`를 대상 컴퓨터의 백업 ID로 설정합니다.
3. 탐색기 패널을 살펴보고 예상되는 데스크톱 폴더가 나타나는지 확인합니다.
4. 통합 아카이브 대상으로 향하는 단방향 동기화 작업을 설정하고, PLUS 라이선스를 사용 중이라면 예약을 설정합니다.

데스크톱 백업 데이터가 브라우저에서만 확인할 수 있는 컴퓨터 ID 뒤에 갇혀 있어서는 안 됩니다 — RcloneView로 가져오면 나머지 클라우드 스토리지와 동일한 수준의 가시성과 보호를 받을 수 있습니다.

---

**관련 가이드:**

- [RcloneView로 구글 드라이브 스토리지 관리 — 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [RcloneView로 구글 드라이브 '공유 문서함' 관리 — 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-google-drive-shared-with-me-rcloneview)
- [RcloneView로 구글 드라이브를 로컬 드라이브로 마운트하기](https://rcloneview.com/support/blog/mount-google-drive-as-local-drive-rcloneview)

<CloudSupportGrid />
