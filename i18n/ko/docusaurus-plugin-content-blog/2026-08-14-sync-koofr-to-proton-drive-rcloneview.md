---
slug: sync-koofr-to-proton-drive-rcloneview
title: "Koofr를 Proton Drive와 동기화하기 — RcloneView로 클라우드 백업하기"
authors:
  - alex
description: "RcloneView를 사용하여 Koofr에서 Proton Drive로 파일을 동기화하는 방법을 알아보세요. 두 클라우드를 동기화 상태로 백업하는 크로스 플랫폼 GUI입니다."
keywords:
  - Koofr를 Proton Drive와 동기화
  - Koofr Proton Drive 백업
  - RcloneView Koofr
  - RcloneView Proton Drive
  - 클라우드 간 동기화
  - Koofr 백업
  - Proton Drive 동기화
  - 암호화된 클라우드 백업
  - 멀티 클라우드 동기화 도구
tags:
  - RcloneView
  - koofr
  - proton-drive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Koofr를 Proton Drive와 동기화하기 — RcloneView로 클라우드 백업하기

> 먼저 로컬 디스크로 다운로드하지 않고도 Koofr 파일의 상시 백업을 Proton Drive에 유지하세요.

Koofr는 다른 계정을 통합할 수도 있는 유럽의 클라우드 스토리지 서비스이며, Proton Drive는 Proton Mail 제작사가 만든 종단 간 암호화 스토리지를 제공합니다. 어떤 사용자는 두 가지를 모두 원합니다 — 통합 뷰를 위한 Koofr와 프라이버시 보장을 위한 Proton Drive — RcloneView를 사용하면 이 둘을 나란히 연결하고 로컬 드라이브를 거치지 않고 클라우드 간에 직접 동기화할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Koofr와 Proton Drive를 리모트로 추가하기

Remote Manager를 통해 계정 자격 증명으로 Koofr를 리모트로 추가한 다음, Proton 이메일, 비밀번호, 선택적 2단계 인증 코드로 인증하는 Proton Drive에 대해서도 동일한 과정을 반복하세요. 두 리모트 모두 탐색기에 별도의 탭으로 표시되므로, 전송을 설정하기 전에 한 패널에서 Koofr를, 다른 패널에서 Proton Drive를 열어 나란히 비교할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 Koofr와 Proton Drive를 리모트로 추가하기" class="img-large img-center" />

FREE 라이선스에서도 S3, Azure, Backblaze B2를 완전한 읽기/쓰기로 연결할 수 있으므로, Koofr에서 Proton Drive로의 동기화가 이미 실행 중인 오브젝트 스토리지 백업과 나란히, 모두 같은 창에서 이루어집니다.

## 단방향 동기화 설정하기

Home 탭에서 Sync 마법사를 열고 Koofr를 소스로, Proton Drive를 대상으로 선택한 다음, Koofr 원본을 절대 변경하지 않는 단방향 백업을 위해 "Modifying destination only"를 선택하세요. Advanced Settings에서 체크섬 비교를 활성화하면 수정 시간만이 아니라 해시와 크기로 파일이 매칭되며, 이는 Koofr와 Proton Drive가 타임스탬프를 다르게 보고할 때 중요합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Koofr에서 Proton Drive로의 단방향 동기화 설정하기" class="img-large img-center" />

실제로 실행하기 전에 드라이 런(Dry Run)을 사용하여 어떤 파일이 복사될지 정확히 확인하고, Koofr 계정 전체가 아니라 특정 폴더만 미러링하려면 파일 유형, 최대 크기, 폴더 깊이에 따른 필터를 적용하세요.

## 백업 예약 및 추적하기

설정을 Job Manager에 작업으로 저장하면, PLUS 라이선스 사용자는 crontab 형식의 일정을 연결하여 Koofr-Proton Drive 동기화가 설정된 주기로 자동 실행되도록 할 수 있으며, 커밋하기 전에 다가오는 실행 시간을 미리 확인할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Koofr에서 Proton Drive로의 반복 동기화 작업 예약하기" class="img-large img-center" />

각 실행은 소요 시간, 전송 속도, 파일 수, 총 전송 크기와 함께 Job History에 기록되어, 백업이 정상적으로 실행되었는지 확인하거나 재시도가 필요한 실행을 찾을 수 있는 기록을 제공합니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Remote Manager에서 Koofr와 Proton Drive를 리모트로 추가하세요.
3. Koofr에서 Proton Drive로의 단방향 동기화 작업을 만들고 먼저 드라이 런을 실행하세요.
4. 작업을 저장하고, PLUS 사용자라면 손쉬운 반복 백업을 위한 일정을 연결하세요.

설정을 완료하면, Koofr 파일이 실행할 때마다 Proton Drive에 미러링되어 RcloneView를 벗어나지 않고도 암호화된 사본을 갖게 됩니다.

---

**관련 가이드:**

- [RcloneView로 Proton Drive 스토리지 관리하기 — 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [RcloneView로 Koofr 스토리지 관리하기 — 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [Proton Drive에서 Backblaze B2로 마이그레이션하기 — RcloneView로 파일 전송](https://rcloneview.com/support/blog/migrate-proton-drive-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
