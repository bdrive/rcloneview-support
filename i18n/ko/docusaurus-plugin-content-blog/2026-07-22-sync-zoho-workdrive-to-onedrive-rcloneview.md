---
slug: sync-zoho-workdrive-to-onedrive-rcloneview
title: "Zoho WorkDrive를 OneDrive와 동기화하기 — RcloneView로 클라우드 백업하기"
authors:
  - steve
description: "RcloneView로 Zoho WorkDrive에서 Microsoft OneDrive로 파일을 동기화하여 두 비즈니스 스토리지 계정을 모두 백업된 최신 상태로 유지하세요."
keywords:
  - Zoho WorkDrive를 OneDrive와 동기화
  - Zoho WorkDrive 백업
  - Zoho WorkDrive OneDrive 마이그레이션
  - RcloneView Zoho WorkDrive
  - 크로스 클라우드 비즈니스 백업
  - Microsoft OneDrive 동기화 도구
  - 멀티 클라우드 파일 전송
  - 클라우드 간 동기화 GUI
  - 비즈니스 파일 스토리지 백업
tags:
  - RcloneView
  - zoho
  - onedrive
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Zoho WorkDrive를 OneDrive와 동기화하기 — RcloneView로 클라우드 백업하기

> 파일을 일일이 내보내거나 부서마다 별도의 전송 작업을 스크립트로 작성하지 않고도 Zoho WorkDrive 팀 폴더를 Microsoft OneDrive에 지속적으로 백업하세요.

일상 협업을 위해 Zoho WorkDrive를 표준으로 채택한 팀도 여전히 Microsoft OneDrive에 대한 존재가 필요한 경우가 많습니다. Microsoft 생태계에서만 작업하는 클라이언트 때문일 수도 있고, 합병으로 인해 두 스토리지 플랫폼을 동시에 사용하게 되었기 때문일 수도 있으며, 단순히 Zoho 인프라 밖에 비즈니스 파일의 두 번째 사본을 두고 싶기 때문일 수도 있습니다. WorkDrive에서 수동으로 다운로드해 OneDrive에 다시 업로드하는 방식은 파일 수가 조금만 많아져도 확장이 어렵고, 무엇이 언제 실행되었는지에 대한 기록도 남기지 않습니다. RcloneView는 두 플랫폼을 하나의 인터페이스에서 연결해 이 전송을 반복 가능한 동기화 작업으로 바꿔줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Zoho WorkDrive와 OneDrive를 리모트로 연결하기

OneDrive는 RcloneView의 New Remote 마법사에서 표준 브라우저 기반 OAuth 로그인으로 연결되며, 별도의 API 키가 필요하지 않습니다. Zoho WorkDrive는 설정 중 한 단계가 더 필요한데, 워크스페이스가 생성된 지역에 따라 Zoho가 데이터를 서로 다른 지리적 지역에 호스팅하기 때문에 계정에 맞는 올바른 지역을 선택해야 합니다. 두 리모트가 모두 추가되면 Explorer에 별도의 탭으로 표시되며, 각각 로컬 폴더와 마찬가지로 탐색하거나 필터링하거나 서로 비교할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Zoho WorkDrive and OneDrive as remotes in RcloneView" class="img-large img-center" />

## 두 플랫폼 간 동기화 작업 구성하기

Sync 마법사의 첫 번째 단계에서는 소스(Zoho WorkDrive 폴더)와 대상(OneDrive 폴더), 작업 이름, 동기화 방향을 선택합니다. 대상만 수정하는 One-way 동기화는 안정적인 공식 모드이며, WorkDrive를 원본으로 유지하는 백업 방식 작업에 적합한 선택입니다. 2단계에서는 전송 동시성과 동등성 검사를 다루며, WorkDrive의 API가 과도한 병렬 요청 아래에서 느리게 응답할 경우 값을 낮추는 것이 유용합니다. 3단계의 필터링 설정에서는 문서나 미디어 유형을 위한 사전 정의 필터나 `/.tmp/*`와 같은 사용자 지정 제외 규칙을 사용해 작업 범위를 실제로 중요한 폴더나 파일 유형으로만 좁힐 수 있습니다.

Zoho WorkDrive와 OneDrive 간의 동기화에는 라이선스 업그레이드가 필요하지 않은데, 1:N 동기화와 기본 Sync & Job Management 모두 FREE 등급에 포함되어 있기 때문입니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a sync job from Zoho WorkDrive to OneDrive" class="img-large img-center" />

## 전송 확인 및 자동화하기

실제 데이터로 작업을 실행하기 전에, Dry Run은 동기화를 시뮬레이션하고 실제로 복사될 파일 목록을 정확히 보여주므로, 무언가가 실제로 이동하기 전에 잘못 설정된 필터나 의도하지 않은 폴더를 미리 발견할 수 있습니다. 작업이 올바르게 보이면 Job Manager에 저장하며, 이후 수동으로 다시 실행하거나 PLUS 라이선스에서는 crontab 방식의 일정에 연결해 WorkDrive에서 OneDrive로의 백업이 누군가 트리거해야 한다는 것을 기억하지 않아도 자동으로 실행되도록 할 수 있습니다.

Job History는 모든 실행의 시작 시간, 소요 시간, 상태, 전송된 총 파일 수를 기록하므로, 예약된 백업이 밤사이 조용히 실패하지 않고 실제로 완료되었는지 확인하는 데 유용합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring sync job from Zoho WorkDrive to OneDrive" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. Remote 탭 > New Remote를 통해 Zoho WorkDrive(올바른 지역 선택)와 OneDrive(OAuth 로그인)를 연결합니다.
3. WorkDrive 폴더에서 OneDrive 대상으로 One-way Sync 작업을 만들고 필요에 따라 필터를 적용합니다.
4. Dry Run을 실행해 파일 목록을 확인한 뒤, 작업을 저장하고 PLUS 라이선스라면 일정을 설정합니다.

두 플랫폼이 같은 창에서 연결되면, Zoho WorkDrive와 OneDrive를 동기화 상태로 유지하는 일이 반복되는 수동 작업 대신 예약된 작업이 됩니다.

---

**관련 가이드:**

- [Zoho WorkDrive 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [Google Drive를 RcloneView로 로컬 드라이브에 마운트하기](https://rcloneview.com/support/blog/mount-google-drive-as-local-drive-rcloneview)
- [필터 규칙 — RcloneView에서 선택적 동기화하기](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)

<CloudSupportGrid />
