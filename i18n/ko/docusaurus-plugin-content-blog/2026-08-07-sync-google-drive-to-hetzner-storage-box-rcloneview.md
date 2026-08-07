---
slug: sync-google-drive-to-hetzner-storage-box-rcloneview
title: "Google Drive를 Hetzner Storage Box로 동기화 — RcloneView로 클라우드 백업"
authors:
  - steve
description: "RcloneView의 크로스 프로바이더 동기화 작업을 사용하여 Google Drive 파일을 저렴한 오프사이트 백업을 위해 Hetzner Storage Box로 동기화하세요."
keywords:
  - google drive를 hetzner로 동기화
  - google drive hetzner storage box 백업
  - hetzner storage box rclone
  - google drive 오프사이트 백업
  - 저렴한 클라우드 스토리지 동기화
  - 유럽 클라우드 스토리지 백업
  - google drive rcloneview 동기화
  - hetzner box 백업
  - google drive sftp 백업
  - 클라우드 간 백업
tags:
  - RcloneView
  - google-drive
  - hetzner
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive를 Hetzner Storage Box로 동기화 — RcloneView로 클라우드 백업

> 스크립트 한 줄 작성하지 않고, 데스크톱을 벗어나지 않으면서 Google Drive 파일의 저비용 두 번째 복사본을 Hetzner Storage Box에 보관하세요.

Google Drive는 일상적인 협업에는 편리하지만, 그 자체로 장기 백업 대상으로 설계된 것은 아닙니다 — 독립된 인프라에 두 번째 복사본을 두면 계정 잠김, 실수로 인한 삭제, 또는 예상치 못한 용량 초과로부터 보호할 수 있습니다. Hetzner Storage Box는 테라바이트당 낮은 비용 때문에 이러한 용도로 인기 있는 선택지이며, RcloneView는 명령줄 스크립팅 없이 예약된 동기화 작업을 통해 두 서비스를 직접 연결합니다. RcloneView는 하나의 창에서 두 프로바이더를 모두 마운트하고 동기화할 수 있으며, Windows, macOS, Linux에서 사용할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 두 리모트 연결하기

먼저 표준 OAuth 브라우저 로그인을 통해 리모트 관리자(Remote Manager)에서 Google Drive를 추가하세요 — RcloneView가 인증 흐름을 자동으로 처리하므로 API 키를 입력할 필요가 없습니다. 그런 다음 Hetzner Storage Box를 SFTP 리모트로 추가하고, 자격 증명 입력(Credential Entry) 설정 화면에서 박스의 호스트 주소와 SSH 자격 증명을 입력하세요.

두 리모트가 탐색기 패널에 탭으로 나타나면, 분할 패널 레이아웃을 열어 나란히 살펴보세요. 이는 자동화된 작업을 설정하기 전에 유용한 확인 단계입니다 — 동기화를 실행하기 전에 Storage Box의 대상 폴더 구조가 예상과 일치하는지 확인하세요.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 Google Drive와 Hetzner Storage Box를 리모트로 추가하기" class="img-large img-center" />

## 동기화 작업 구성하기

동기화 마법사에서 Google Drive를 소스로, Hetzner Storage Box를 대상으로 선택한 다음, 소스에서 아무것도 삭제하지 않고 Storage Box가 Google Drive를 미러링하도록 **단방향(One-way)** 동기화 방향을 선택하세요. 3단계에서는 백업할 필요가 없는 파일 유형을 건너뛰기 위해 필터를 적용하세요 — `.tmp` 파일이나 Google Docs 전용 형식을 제외하면 전송량이 줄어들고 이후 실행 속도가 빨라집니다.

고급 설정(Advanced Settings)에서 체크섬(checksum) 비교를 활성화하면, RcloneView가 새로운 수정 날짜를 가진 모든 파일이 아니라 실제로 변경된 파일만 재전송합니다 — 메타데이터 타임스탬프가 콘텐츠 변경 없이 바뀔 수 있는 Google Drive에서 특히 중요합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView에서 Google Drive에서 Hetzner Storage Box로의 단방향 동기화 작업 구성하기" class="img-large img-center" />

## 백업 자동화 및 모니터링

먼저 드라이 런(Dry Run)을 실행하여 어떤 파일이 정확히 복사될지 미리 확인한 다음, 작업을 실행하고 정보 뷰(Info View)의 전송(Transferring) 탭에서 진행 상황을 지켜보세요 — 전송 속도, 파일 수, 총 용량이 표시됩니다. PLUS 라이선스 사용자는 수동 개입 없이 동기화가 반복되도록 크론탭 형식의 일정을 연결할 수 있으며, 작업 기록(Job History)은 이후 감사를 위해 각 실행의 소요 시간과 결과를 영구적으로 기록합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView에서 Google Drive를 Hetzner Storage Box로 동기화하는 반복 작업 예약하기" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. OAuth로 Google Drive를 연결하고 Hetzner Storage Box를 SFTP 리모트로 추가하세요.
3. 필터와 체크섬 비교를 활성화한 단방향 동기화 작업을 생성하세요.
4. 드라이 런을 실행한 다음 동기화를 실행하고 전송(Transferring) 탭에서 모니터링하세요.

독립적이고 저비용인 인프라에 두 번째 복사본을 두는 것은 Google Drive 데이터를 보호하는 가장 간단한 방법 중 하나이며, RcloneView는 수동 파일 작업 없이 이 루틴을 계속 실행되게 해줍니다.

---

**관련 가이드:**

- [Hetzner Storage Box 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-hetzner-storage-box-sync-rcloneview)
- [Dropbox를 Hetzner Storage Box로 동기화 — RcloneView로 클라우드 백업](https://rcloneview.com/support/blog/sync-dropbox-to-hetzner-storage-box-rcloneview)
- [Google Drive 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
