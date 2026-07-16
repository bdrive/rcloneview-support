---
slug: fix-google-drive-storage-quota-exceeded-rcloneview
title: "Google Drive 저장 용량 초과 문제 해결 — RcloneView로 파일 이동하기"
authors:
  - tayson
description: "Google Drive 저장 용량 초과 문제를 해결하세요 — RcloneView로 파일을 다른 클라우드로 이동하고, 공간을 확보하고, Drive 저장 공간을 관리할 수 있습니다."
keywords:
  - Google Drive storage full
  - quota exceeded fix
  - Google Drive cleanup
  - move files from Google Drive
  - free up Google Drive space
  - RcloneView storage management
  - cloud storage overflow
  - Drive quota solution
  - Google Drive archive
  - Google Drive space recovery
tags:
  - google-drive
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive 저장 용량 초과 문제 해결 — RcloneView로 파일 이동하기

> Google Drive 용량이 가득 차면 업로드가 막히고 작업 흐름이 중단됩니다 — RcloneView는 용량을 가장 많이 차지하는 항목을 찾아내어 비용 효율적인 아카이브 스토리지로 이동시켜, 즉시 용량을 확보해줍니다.

Google Drive에 "저장용량이 가득 찼습니다"라는 메시지가 표시되거나 업로드가 용량 초과 오류로 실패하기 시작하면, 익숙한 선택지에 직면하게 됩니다: 추가 저장 공간을 구매하거나, 콘텐츠를 이동시키는 것입니다. RcloneView는 세 번째 방법을 제공합니다 — 용량이 크거나 오래된 파일을 효율적으로 식별하여 Google Drive에서 더 저렴한 스토리지 등급으로 이동시켜, 데이터 손실 없이 용량을 확보합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 용량을 차지하고 있는 항목 파악하기

RcloneView에서 Google Drive를 연결합니다 (**Remote 탭 > New Remote > Google Drive**, OAuth 로그인). 연결이 완료되면 탐색기에서 폴더를 마우스 오른쪽 버튼으로 클릭하고 **Get Size**를 선택해 해당 폴더가 차지하는 저장 공간을 확인합니다. 최상위 폴더들을 체계적으로 탐색해보세요 — 비디오 익스포트 파일, 압축되지 않은 프로젝트 파일, 중복된 데이터셋이 Drive 계정이 가득 차는 가장 흔한 원인입니다.

<img src="/support/images/en/blog/new-remote.png" alt="Browsing Google Drive in RcloneView to identify storage usage" class="img-large img-center" />

RcloneView의 **Folder Compare** 기능은 중복 콘텐츠를 식별하는 데 도움이 됩니다: 이름이 비슷한 두 폴더를 비교하여 두 위치 모두에 존재하는 파일(같은 콘텐츠가 두 번 백업된 경우)을 찾아내고, 안전하게 한쪽 사본을 삭제할 수 있게 해줍니다. 비교 결과의 "same files" 필터는 두 위치 간의 정확히 일치하는 파일을 짚어줍니다.

## 아카이브 스토리지로 파일 이동하기

정리할 대용량 폴더를 찾았다면, RcloneView에 아카이브 리모트를 설정합니다 — **Amazon S3**, **Backblaze B2**, **Wasabi**는 비용 효율적인 콜드 스토리지 등급으로 적합합니다. **Job Manager**에서 **Move** 작업을 생성합니다: 소스는 크거나 오래된 파일이 있는 Google Drive 폴더로, 대상은 아카이브 버킷으로 지정합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Moving Google Drive files to Backblaze B2 archive in RcloneView" class="img-large img-center" />

Move 작업은 파일을 대상 위치로 복사한 다음 원본에서 삭제합니다 — 이를 통해 데이터를 보존하면서 즉시 Drive 용량을 확보할 수 있습니다. 더 이상 공동 작업 접근이 필요 없는 완료된 프로젝트 200GB를 Drive에 보관 중인 영상 편집자라면, B2로의 Move 작업 한 번으로 용량 전체를 확보할 수 있습니다. RcloneView의 **Transferring** 탭에서 실시간으로 진행 상황을 확인할 수 있습니다.

## 앞으로의 용량 초과 문제 예방하기

당장의 용량 초과 문제를 해결한 후에는, RcloneView의 예약 기능(PLUS 라이선스)을 이용해 정기적인 아카이브 정책을 설정하세요. **Max File Age** 필터(예: 180일 이상 지난 파일)를 적용한 Sync 작업을 구성하면, 매월 자동으로 오래된 콘텐츠를 Drive에서 콜드 스토리지로 아카이브하여 — Drive를 축적 공간이 아닌 활성 작업 공간으로 유지할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Google Drive archiving in RcloneView" class="img-large img-center" />

**Job History** 탭은 각 아카이빙 실행 기록을 추적하여, Drive에서 무엇이 언제 이동되었는지 명확한 기록을 제공합니다 — 이는 나중에 오래된 아카이브 파일에 접근해야 할 때 유용합니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. RcloneView에서 Google Drive를 연결하고 **Get Size**로 가장 큰 폴더를 확인합니다.
3. 아카이브 스토리지(S3, B2, Wasabi)를 두 번째 리모트로 추가합니다.
4. Job Manager에서 용량이 큰 폴더에서 아카이브 리모트로 이동하는 **Move** 작업을 생성합니다.

Google Drive가 가득 찬 것은 저장 용량의 한계가 아니라 관리의 문제입니다 — RcloneView는 콘텐츠를 적절한 등급으로 이동시켜 Drive를 계속 원활하게 사용할 수 있도록 도구를 제공합니다.

---

**관련 가이드:**

- [RcloneView로 Google Drive 용량 및 API 속도 제한 오류 해결하기](https://rcloneview.com/support/blog/fix-google-drive-quota-rate-limit-api-errors)
- [Google Drive 클라우드 스토리지 관리 — RcloneView로 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Backblaze B2 클라우드 스토리지 관리 — RcloneView로 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
