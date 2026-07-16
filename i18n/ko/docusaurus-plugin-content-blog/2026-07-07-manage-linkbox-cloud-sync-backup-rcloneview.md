---
slug: manage-linkbox-cloud-sync-backup-rcloneview
title: "Linkbox 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - kai
description: "Linkbox 클라우드 스토리지를 RcloneView에 연결하여 드래그 앤 드롭 파일 관리, 예약 백업, 하나의 데스크톱 앱에서 여러 제공업체 간 동기화를 이용해보세요."
keywords:
  - Linkbox
  - Linkbox 클라우드 스토리지
  - Linkbox 파일 관리
  - Linkbox 백업
  - Linkbox 동기화
  - RcloneView Linkbox
  - 클라우드 파일 관리자
  - Linkbox 대체 클라이언트
tags:
  - file-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Linkbox 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기

> 완전한 데스크톱 탐색기, 예약 백업, 다른 클라우드로의 원클릭 전송 기능으로 Linkbox를 일상적인 파일 워크플로우에 통합하세요.

Linkbox는 온라인에서 파일을 저장하고 공유하기에 편리한 서비스지만, 웹 인터페이스는 대량 파일 관리, 폴더 비교, 반복적인 백업 작업을 위해 설계되지 않았습니다. RcloneView는 Linkbox 위에 네이티브 데스크톱 레이어를 추가하여 제대로 된 파일 탐색기, 드래그 앤 드롭 업로드, 자동 동기화를 제공함으로써 Linkbox가 더 이상 고립된 스토리지 저장소가 아니라 진정한 멀티 클라우드 워크플로우의 일부가 되도록 해줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Linkbox를 리모트로 추가하기

Remote 탭을 열고 New Remote를 클릭하여 설정 마법사를 시작하세요. RcloneView는 제공업체 목록에서 Linkbox를 선택하고 필요한 연결 정보를 입력하는 과정을 안내한 다음, 저장하기 전에 연결을 테스트합니다. 추가되면 Linkbox는 다른 구성된 리모트와 마찬가지로 Explorer 패널에 탭으로 표시되므로, 브라우저 탭을 열지 않고도 폴더를 탐색하고, 파일을 미리 보고, 크기를 확인할 수 있습니다.

RcloneView는 Windows, macOS, Linux에서 하나의 창으로 90개 이상의 제공업체를 마운트하고 동기화하기 때문에, Linkbox는 Google Drive, S3 버킷, NAS 공유와 함께 동일한 탐색기 화면에 나란히 표시됩니다. 서비스마다 별도의 앱이 필요하지 않습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Linkbox remote in RcloneView remote setup wizard" class="img-large img-center" />

연결한 후에는 Remote Manager를 사용하여 언제든지 Linkbox 구성을 검토하거나 수정할 수 있으며, Linkbox 콘텐츠를 다른 리모트와 나란히 비교하려는 경우 여러 패널을 전환할 수도 있습니다.

## Linkbox 콘텐츠 자동 백업하기

변경할 때마다 Linkbox에 파일을 수동으로 다시 업로드하는 것은 잊어버리기 쉽습니다. RcloneView의 Job Manager를 사용하면 Linkbox에서 로컬 드라이브, 외장 SSD, 또는 다른 클라우드 제공업체로 새 파일과 변경된 파일을 반복적으로 가져오는 동기화(Sync), 복사(Copy), 또는 다운로드(Download) 작업을 정의할 수 있습니다. 4단계 작업 마법사는 소스/대상 선택, 전송 동시성, 필터링을 다루므로, 예를 들어 백업 실행 전에 임시 파일을 제외하거나 최대 파일 나이를 제한할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a backup job from Linkbox to another cloud destination in RcloneView" class="img-large img-center" />

먼저 Dry Run을 실행하여 실제 전송을 실행하기 전에 정확히 어떤 파일이 복사되거나 삭제될지 미리 확인하세요. 아직 완전히 확인하지 않은 콘텐츠가 있는 Linkbox 폴더에 작업을 처음 지정할 때 특히 유용합니다.

## Linkbox 작업 예약 및 모니터링

PLUS 라이선스 사용자의 경우 Job Manager의 예약 단계에서 crontab 스타일의 시간 설정을 지원하므로, Linkbox 백업을 매일 밤, 매주, 또는 보존 정책에 맞는 주기로 실행할 수 있으며 직접 트리거할 필요가 없습니다. FREE 라이선스 사용자도 필요할 때마다 동일한 작업을 수동으로 또는 일회성으로 실행할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Linkbox backup job in RcloneView Job Manager" class="img-large img-center" />

모든 실행 내역은 시작 시간, 소요 시간, 전송 속도, 파일 수와 함께 Job History에 기록되므로, 원시 로그를 뒤지지 않고도 Linkbox 백업이 성공적으로 완료되었는지 확인하거나 실패한 전송을 조사할 수 있습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Remote 탭을 열고 설정 마법사를 통해 Linkbox를 새 리모트로 추가하세요.
3. Linkbox에서 원하는 대상으로 향하는 Sync 또는 Backup 작업을 생성하세요.
4. Dry Run을 실행한 다음, 작업을 저장하고 원한다면 반복 실행을 예약하세요.

Linkbox가 RcloneView에 연결되면, 더 이상 기억해야 할 별도의 대상이 아니라 통합된 클라우드 워크플로우 안의 또 다른 폴더가 됩니다.

---

**관련 가이드:**

- [Manage Gofile Storage — Sync and Backup Files with RcloneView](https://rcloneview.com/support/blog/manage-gofile-cloud-sync-backup-rcloneview)
- [Manage Pixeldrain Storage — Cloud Sync with RcloneView](https://rcloneview.com/support/blog/manage-pixeldrain-cloud-sync-rcloneview)
- [Manage Uptobox Cloud Downloads with RcloneView](https://rcloneview.com/support/blog/manage-uptobox-cloud-downloads-rcloneview)

<CloudSupportGrid />
