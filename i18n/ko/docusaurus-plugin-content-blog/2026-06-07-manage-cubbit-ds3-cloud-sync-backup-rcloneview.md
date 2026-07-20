---
slug: manage-cubbit-ds3-cloud-sync-backup-rcloneview
title: "Cubbit DS3 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - alex
description: "Cubbit DS3를 RcloneView에 연결하고 간단한 데스크톱 GUI로 지역 분산된 유럽 클라우드 스토리지를 동기화, 백업, 관리하는 방법을 알아보세요."
keywords:
  - Cubbit DS3 sync
  - Cubbit DS3 backup
  - Cubbit S3-compatible storage
  - RcloneView Cubbit
  - European cloud storage backup
  - geo-distributed object storage
  - Cubbit DS3 setup guide
  - private cloud backup RcloneView
  - S3 compatible storage management
  - Cubbit DS3 file manager
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - s3-compatible
  - object-storage
  - european-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cubbit DS3 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기

> RcloneView는 S3 프로토콜을 통해 Cubbit DS3에 연결되어, CLI 명령어를 한 줄도 작성하지 않고도 지역 분산된 유럽 클라우드 스토리지를 탐색, 동기화, 백업할 수 있게 해줍니다.

Cubbit DS3는 유럽 전역의 노드에 구축된 지역 분산형 S3 호환 오브젝트 스토리지 서비스입니다. 중앙 집중식 제공업체와 달리 Cubbit은 데이터를 분산된 셀 네트워크에 걸쳐 샤딩하고 암호화하므로, GDPR 요구 사항을 준수해야 하는 팀이나 프라이버시 중심 설계의 스토리지를 원하는 사용자에게 매력적인 선택지입니다. Cubbit DS3는 완전히 S3와 호환되므로, RcloneView는 다른 S3 제공업체와 동일한 자격 증명 흐름을 사용해 연결됩니다 — 별도의 플러그인이나 설정이 필요하지 않습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView에 Cubbit DS3 연결하기

RcloneView를 열고 **Remote 탭 > New Remote**로 이동합니다. 리모트 유형으로 **Amazon S3**를 선택한 다음, S3 제공업체 목록에서 **Cubbit DS3**를 선택합니다. Cubbit 콘솔 대시보드에서 복사한 Cubbit Access Key ID, Secret Access Key, S3 엔드포인트 URL을 입력합니다. 리전은 비워 두거나 Cubbit 문서에서 권장하는 값을 사용하세요. **Save**를 클릭하면 파일 탐색기에 Cubbit DS3 리모트가 새 탭으로 나타납니다.

연결은 즉시 적용됩니다. 왼쪽 폴더 트리에서 버킷을 펼쳐 상세 목록 보기로 오브젝트를 탐색하거나, 썸네일 보기로 전환해 버킷에 저장된 이미지 자산을 미리 볼 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Cubbit DS3 as a new S3-compatible remote in RcloneView" class="img-large img-center" />

## Cubbit DS3에서 파일 업로드 및 관리하기

RcloneView의 듀얼 패널 레이아웃은 Cubbit DS3에 파일을 업로드하는 작업을 간단하게 만들어 줍니다. 한쪽 패널에는 로컬 폴더를, 다른 쪽 패널에는 Cubbit DS3 버킷을 엽니다. 예를 들어 건축 설계사무소의 CAD 도면 모음과 같은 폴더를 왼쪽 패널에서 오른쪽 Cubbit 패널로 드래그하세요. RcloneView는 다중 스레드 동시 업로드를 자동으로 처리하며, 하단의 전송 모니터에서 실시간 전송 속도, 파일 수, 진행 상황을 확인할 수 있습니다.

Cubbit 패널의 오브젝트를 마우스 오른쪽 버튼으로 클릭하면 Copy, Cut, Delete, Rename, Get Size, Get Public Link 등 전체 컨텍스트 메뉴가 표시됩니다. **Get Size** 옵션은 동기화 전략을 결정하기 전에 대용량 버킷 폴더의 스토리지 사용량을 계산하는 데 특히 유용합니다.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag-and-drop upload to Cubbit DS3 bucket in RcloneView" class="img-large img-center" />

## Cubbit DS3로의 예약 동기화 작업 설정하기

자동화된 백업을 위해 Home 탭의 **Sync** 버튼을 사용해 4단계 작업 마법사를 실행하세요. 소스로 로컬 폴더나 다른 클라우드 리모트를 선택하고, 대상으로 Cubbit DS3 버킷을 선택합니다. 2단계에서는 동시 파일 전송 수를 늘려 Cubbit의 분산 대역폭을 최대한 활용하세요. 3단계에서는 파일 형식 필터를 적용합니다 — 예를 들어 `.tmp`와 `.log` 파일을 제외해 백업을 깔끔하게 유지할 수 있습니다.

PLUS 라이선스 사용자는 4단계인 cron 방식 예약을 사용할 수 있습니다. 매일 새벽 3시에 실행되는 작업을 설정하고, 최근에 수정된 파일만 동기화하도록 최대 파일 수정 기간 필터를 추가하며, 각 실행을 확인할 수 있도록 이메일 알림을 구성하세요. 이는 데이터셋 아카이브를 규정을 준수하는 유럽 스토리지 백엔드에 매일 밤 자동으로 스냅샷 백업해야 하는 연구팀에게 이상적입니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated sync jobs to Cubbit DS3 in RcloneView" class="img-large img-center" />

## 작업 기록으로 전송 추적하기

각 동기화 실행 후, RcloneView의 **Job History** 뷰는 실행 시간, 소요 시간, 총 전송 바이트, 전송 속도, 최종 상태를 기록합니다. Cubbit DS3의 경우, 중요한 백업이 성공적으로 완료되었는지 확인하거나 실패한 실행을 조사해 어떤 파일이 오류를 일으켰는지 파악할 때 이 감사 로그가 유용합니다.

파괴적인 작업을 수행하기 전에는 **Dry Run** 기능을 사용하세요 — 동기화를 시뮬레이션하고 복사되거나 삭제될 모든 파일을 나열하므로, 버킷을 실제로 건드리지 않고도 범위를 확인할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history log for Cubbit DS3 sync in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. **Remote 탭 > New Remote**로 이동해 Amazon S3를 선택하고, 제공업체로 Cubbit DS3를 선택합니다.
3. Cubbit 콘솔에서 발급받은 Cubbit Access Key, Secret Key, S3 엔드포인트를 입력합니다.
4. 파일 탐색기에서 버킷을 탐색하고 파일을 드래그해 바로 업로드를 시작하세요.

Cubbit DS3를 RcloneView에 연결하면 지역 분산된 유럽 스토리지를 위한 완전한 시각적 워크플로를 얻을 수 있습니다 — 터미널이 필요 없습니다.

---

**관련 가이드:**

- [RcloneView로 Cloudflare R2 클라우드 스토리지 관리하기](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [DigitalOcean Spaces 관리 — RcloneView로 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-digitalocean-spaces-cloud-sync-backup-rcloneview)
- [RcloneView로 S3, Wasabi, R2 스토리지 통합 관리하기](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
