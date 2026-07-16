---
slug: sync-onedrive-to-hetzner-storage-box-rcloneview
title: "RcloneView로 OneDrive를 Hetzner Storage Box에 동기화 — 클라우드 백업"
authors:
  - jay
description: "RcloneView를 사용해 OneDrive를 Hetzner Storage Box에 동기화하세요. SFTP 백업을 설정하고, 자동 동기화를 예약하며, 유럽 스토리지로 Microsoft 파일을 보호합니다."
keywords:
  - sync OneDrive to Hetzner Storage Box
  - Microsoft OneDrive Hetzner backup
  - RcloneView OneDrive Hetzner
  - Hetzner Storage Box SFTP backup
  - cloud storage to Hetzner sync
  - OneDrive backup Europe GDPR
  - cloud file sync automation
  - Hetzner cloud backup tool
  - OneDrive off-site backup
tags:
  - RcloneView
  - onedrive
  - hetzner
  - sftp
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 OneDrive를 Hetzner Storage Box에 동기화 — 클라우드 백업

> RcloneView로 OneDrive 파일을 Hetzner Storage Box에 동기화하여 독립적인 오프사이트 백업을 만드세요—스크립트가 필요 없습니다.

Hetzner Storage Box는 비용 효율적이면서 유럽에서 호스팅되는 SFTP 스토리지 솔루션으로, 주요 대형 클라우드 사업자 외에 신뢰할 수 있고 개인정보를 존중하는 백업 스토리지를 원하는 개발자와 IT 팀에게 인기가 있습니다. RcloneView로 Microsoft OneDrive 콘텐츠를 Hetzner Storage Box에 동기화하면 Microsoft 생태계와 완전히 독립된 오프사이트 사본이 만들어집니다—재해 복구, GDPR을 고려한 데이터 거주지 요구사항, 또는 예기치 않은 계정 정지에 대한 보호에 유용합니다. 전체 워크플로는 rclone 명령을 한 줄도 작성하지 않고 RcloneView의 시각적 인터페이스를 통해 구성할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## OneDrive와 Hetzner Storage Box를 리모트로 구성하기

동기화하기 전에 두 서비스를 모두 RcloneView에 리모트로 등록해야 합니다. OneDrive는 OAuth 브라우저 인증을 사용합니다—**Remote** 탭 → **New Remote** → **OneDrive**를 클릭하면 RcloneView가 브라우저를 열어 원클릭 Microsoft 로그인을 진행합니다. API 키나 클라이언트 자격 증명을 수동으로 관리할 필요가 없습니다. 개인 OneDrive 계정과 Microsoft 365용 비즈니스 OneDrive 모두 이 흐름으로 동작합니다.

Hetzner Storage Box는 SFTP를 통해 연결됩니다. New Remote 대화상자에서 **SFTP**를 선택한 다음, Storage Box 호스트명(`u{number}.your-storagebox.de` 형식)과 사용자명, 비밀번호 또는 SSH 개인 키 경로를 입력합니다. Hetzner는 비밀번호 인증과 키 기반 인증을 모두 지원합니다—여러 백업 대상을 관리하는 팀은 평문 비밀번호를 저장하지 않고 무인 자동화를 하기 위해 SSH 키를 선호하는 경우가 많습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding OneDrive and Hetzner Storage Box as remotes in RcloneView" class="img-large img-center" />

두 리모트가 모두 RcloneView의 탐색기 탭에 나타나면, 동기화 작업을 만들기 전에 각 측을 탐색하여 연결을 확인하세요.

## OneDrive-to-Hetzner 동기화 작업 만들기

두 리모트가 준비되면 Home 탭에서 **Job Manager**를 열고 **Add Job**을 클릭합니다. 4단계 마법사에서 OneDrive 소스 폴더를 설정하세요—전체 OneDrive 루트일 수도 있고, `Documents/Contracts`와 같은 특정 하위 폴더나 공유 Teams 폴더일 수도 있습니다. Hetzner Storage Box 경로를 대상으로 설정합니다.

Advanced Settings 단계에서는 연결 속도에 맞게 동시 전송 수를 구성하고, 중요한 데이터에 대해서는 체크섬 검증을 활성화하세요. 30GB의 사건 파일을 Hetzner에 백업하는 법률 사무소는 체크섬 모드를 통해 모든 문서가 손상 없이 도착하는지 확인할 수 있습니다—전송 중 발생할 수 있는 손상을 잡아냅니다. Filtering 단계에서는 임시 Office 잠금 파일(`.tmp`, `.lock`)을 제외하거나, PDF와 스프레드시트 같은 특정 문서 유형으로 작업 범위를 제한할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OneDrive to Hetzner Storage Box sync job configuration in RcloneView" class="img-large img-center" />

먼저 드라이런 시뮬레이션을 실행하세요—RcloneView는 실제로 변경 사항을 적용하지 않고 어떤 파일이 복사되거나 제거될지 정확히 보여줍니다. 미리보기가 만족스러우면 작업을 실행합니다. 하단의 **Transferring** 탭은 실행 내내 실시간 전송 진행 상황, 전송 속도, 파일 수를 표시합니다.

## 자동 백업 예약 및 모니터링

RcloneView PLUS 라이선스가 있으면 crontab 일정으로 OneDrive-to-Hetzner 백업을 자동화할 수 있습니다. 매일 오전 03:00에 동기화를 설정하면 수동 개입 없이 매일 밤 OneDrive 파일이 Hetzner에 백업됩니다. 마법사의 일정 시뮬레이터는 다음 실행 시간을 미리 보여주므로 작업을 저장하기 전에 패턴을 확인할 수 있습니다.

작업 기록은 전체 감사 로그를 유지합니다—각 실행마다 시작 시간, 소요 시간, 전송 속도, 파일 수, 결과가 기록됩니다. 일시적인 네트워크 문제로 백업이 실패하면 RcloneView의 구성 가능한 재시도 로직이 자동으로 작업을 다시 시도합니다. 작업 완료 알림(PLUS에서 제공)을 사용하면 팀이 다음 영업일이 시작되기 전에 모든 실패를 알림받을 수 있습니다—따라서 어떤 백업 창도 조용히 지나치지 않습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling daily OneDrive to Hetzner Storage Box sync in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Remote 탭 → **New Remote** → OneDrive를 통해 **OneDrive**를 OAuth 리모트로 추가하세요.
3. 호스트명과 자격 증명을 사용하여 **Hetzner Storage Box**를 SFTP 리모트로 추가하세요.
4. **Job Manager**에서 OneDrive를 소스로, Hetzner 경로를 대상으로 하는 동기화 작업을 만드세요.

OneDrive를 Hetzner Storage Box에 백업하면 클라우드 서비스가 예기치 않게 중단되더라도 Microsoft 파일이 보호되도록, 저비용의 유럽 호스팅 안전망을 자동으로 운영할 수 있습니다.

---

**관련 가이드:**

- [RcloneView로 Hetzner Storage Box 동기화 관리하기](https://rcloneview.com/support/blog/manage-hetzner-storage-box-sync-rcloneview)
- [OneDrive 스토리지 관리 — RcloneView로 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [RcloneView로 Dropbox를 Hetzner Storage Box에 동기화하기](https://rcloneview.com/support/blog/sync-dropbox-to-hetzner-storage-box-rcloneview)

<CloudSupportGrid />
