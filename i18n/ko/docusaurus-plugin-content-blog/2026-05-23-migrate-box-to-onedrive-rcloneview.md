---
slug: migrate-box-to-onedrive-rcloneview
title: "Box에서 OneDrive로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - morgan
description: "RcloneView를 사용하여 Box에서 Microsoft OneDrive로 파일을 마이그레이션하는 단계별 가이드입니다. 빠르고 안정적인 클라우드 간 파일 전송과 전체 진행 상황 모니터링을 제공합니다."
keywords:
  - migrate box to onedrive
  - box to onedrive transfer
  - cloud migration box onedrive
  - rcloneview box onedrive
  - box onedrive migration guide
  - transfer files from box to onedrive
  - box cloud migration tool
  - onedrive migration from box rcloneview
  - move files box to microsoft onedrive
tags:
  - RcloneView
  - box
  - onedrive
  - cloud-to-cloud
  - migration
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box에서 OneDrive로 마이그레이션 — RcloneView로 파일 전송하기

> RcloneView를 사용하면 Box에서 Microsoft OneDrive로의 마이그레이션이 간단해집니다 — 두 계정을 연결하고 전송 작업을 구성한 뒤 브라우저를 거치지 않고 전체 파일 라이브러리를 이동할 수 있습니다.

Box에서 Microsoft OneDrive로 전환하는 조직들은 동일한 문제를 반복적으로 겪습니다: 데이터 손실이나 콘텐츠 중복 없이, 느린 수동 다운로드-재업로드 과정을 견디지 않고도 수천 개의 파일을 안정적으로 이동해야 합니다. RcloneView는 데스크톱 GUI를 통해 전체 마이그레이션을 처리하며, 두 클라우드 서비스 간에 클라우드 간(cloud-to-cloud) 경로로 파일을 직접 전송하는 동안 실시간으로 진행 상황을 모니터링할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Box와 OneDrive 연결하기

첫 번째 단계는 두 계정을 RcloneView에 리모트로 추가하는 것입니다. **Remote** 탭에서 **New Remote**를 클릭하고 **Box**를 선택합니다. RcloneView가 OAuth 인증을 위한 브라우저 창을 엽니다 — 로그인하고 액세스 권한을 부여한 다음 앱으로 돌아옵니다. **OneDrive**에 대해서도 동일한 과정을 반복하며, 마찬가지로 브라우저 기반 OAuth 로그인을 사용합니다.

두 리모트가 모두 저장되면 Settings 탭의 **Layout** 옵션을 사용하여 두 개의 Explorer 패널을 나란히 엽니다. 왼쪽 패널에서 Box 소스 폴더로, 오른쪽 패널에서 OneDrive 대상 폴더로 이동합니다. 이 이중 패널 보기는 전송을 시작하기 전에 기존 구조를 명확하게 파악할 수 있게 해줍니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and OneDrive as remotes in RcloneView" class="img-large img-center" />

Box for Business 계정을 마이그레이션하는 경우, 리모트 구성에서 `box_sub_type = enterprise`를 설정하세요 — 설정 마법사에 이 필드가 포함되어 있습니다. OneDrive for Business 또는 SharePoint 문서 라이브러리의 경우, OneDrive 설정 단계에서 적절한 계정 유형을 선택하세요. 두 엔터프라이즈 유형 모두 브라우저 OAuth를 통해 동일한 방식으로 인증됩니다.

## 마이그레이션 작업 실행하기

두 리모트가 모두 구성되면 **Job Manager**를 열고 **Add Job**을 클릭합니다. Box 폴더를 소스로, 대상 OneDrive 폴더를 목적지로 선택합니다. 일회성 마이그레이션의 경우 **Copy** 작업 유형을 사용하면 OneDrive를 채우는 동안 Box의 모든 파일이 그대로 유지됩니다 — 전송되면서 Box에서 파일을 제거하려는 경우에만 **Move**를 사용하세요.

고급 설정에서 **checksum verification**(체크섬 검증)을 활성화하여 각 파일이 손상 없이 도착했는지 확인합니다. 이는 네트워크 중단이 눈에 띄지 않게 손상된 사본을 만들어낼 수 있는 대규모 마이그레이션에서 특히 유용합니다. 또한 재시도 횟수(기본값: 3)를 설정하여 수동 재시작 없이도 두 공급자 중 어느 쪽에서든 발생하는 일시적인 API 오류를 처리할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud copy job from Box to OneDrive in RcloneView" class="img-large img-center" />

전체 전송을 실행하기 전에 **Dry Run** 모드를 사용하여 작업을 시뮬레이션하세요. 미리보기는 정확히 어떤 파일이 복사될지 보여주므로, 실제 마이그레이션에 대역폭과 시간을 투입하기 전에 불일치하는 폴더 구조나 예상치 못하게 큰 파일을 미리 발견하는 데 도움이 됩니다.

## 진행 상황 모니터링 및 결과 확인

전송 중에는 RcloneView 인터페이스 하단의 **Transferring** 탭에서 현재 속도, 완료된 파일 수, 이동된 총 데이터, 경과 시간 등 실시간 진행 상황을 확인할 수 있습니다. 예를 들어 법무팀이 10년치 계약 문서를 이동하는 것과 같은 대규모 마이그레이션의 경우, 이러한 가시성은 작업에 걸리는 시간을 추정하고 업무 시간을 기준으로 계획을 세우는 데 필수적입니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Monitoring Box to OneDrive transfer progress in RcloneView" class="img-large img-center" />

작업이 완료되면 **Job History** 패널에서 전체 실행 요약을 확인하세요. 오류가 발생한 파일이 있으면 로그에 정확한 경로와 오류 메시지가 표시되므로 전체 작업을 다시 실행하지 않고도 개별적으로 문제를 해결할 수 있습니다. 기록을 검토한 후, RcloneView의 **Folder Compare** 기능을 사용하여 Box 소스와 OneDrive 대상을 나란히 비교하고 Box 계정을 폐기하기 전에 모든 파일이 올바르게 전송되었는지 확인하세요.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Box to OneDrive migration in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. OAuth 인증을 통해 **Remote > New Remote**에서 **Box**를 리모트로 추가합니다.
3. OAuth 인증을 통해 **OneDrive**를 두 번째 리모트로 추가합니다.
4. Job Manager에서 Box를 소스로, OneDrive를 목적지로 하는 **Copy** 작업을 생성하고, 체크섬 검증을 활성화한 다음 실행합니다.

RcloneView를 사용하면 Box에서 OneDrive로의 이전이 깔끔하고 감사 가능한 작업이 됩니다 — 수동 다운로드도, 중간 저장소도 필요 없으며 처음부터 끝까지 완전한 진행 상황 가시성을 제공합니다.

---

**관련 가이드:**

- [RcloneView로 Box를 Google Drive와 동기화하기](https://rcloneview.com/support/blog/sync-box-to-google-drive-rcloneview)
- [RcloneView로 무중단 Box에서 Dropbox 마이그레이션하기](https://rcloneview.com/support/blog/zero-downtime-box-to-dropbox-rcloneview)
- [RcloneView로 Box를 Backblaze B2로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-box-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
