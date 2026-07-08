---
slug: sync-google-drive-to-box-rcloneview
title: "Google Drive를 Box로 동기화 — RcloneView로 클라우드 백업하기"
authors:
  - kai
description: "RcloneView로 Google Drive를 Box에 동기화하는 방법을 알아보세요. 두 플랫폼 간 파일을 전송하고, 크로스 클라우드 백업을 자동화하며, 팀을 동기화된 상태로 유지하세요."
keywords:
  - sync Google Drive to Box
  - Google Drive Box RcloneView
  - cloud-to-cloud sync RcloneView
  - Google Drive Box backup
  - migrate Google Drive Box
  - RcloneView cross-cloud transfer
  - automate Google Drive backup Box
  - Google Workspace Box sync
  - Box cloud backup RcloneView
  - Google Drive Box file transfer
tags:
  - RcloneView
  - google-drive
  - box
  - cloud-to-cloud
  - cloud-sync
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive를 Box로 동기화 — RcloneView로 클라우드 백업하기

> 팀이 Google Workspace와 Box에 콘텐츠를 나누어 저장하고 있다면, RcloneView는 스크립팅 없이 그 간극을 메워줍니다.

많은 조직이 Google Drive에 활성 파일을 보관하는 동시에 Box를 컴플라이언스 아카이브, 클라이언트 포털, 또는 부서별 공유 공간으로 사용합니다. 이 두 플랫폼을 수동으로 동기화 상태로 유지하는 것은 오류가 발생하기 쉽고 시간이 많이 소요됩니다. RcloneView는 Google Drive에서 콘텐츠를 가져와 Box로 전송하는 클릭 몇 번의 워크플로를 제공합니다 — 일회성 마이그레이션이든, 매일 밤 실행되는 증분 백업이든, 감사 목적으로 지속적으로 갱신되는 복사본이든 상관없습니다. 두 서비스 모두 rclone에서 네이티브로 지원되므로 전송은 효율적이며 체크섬으로 검증됩니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Google Drive와 Box를 RcloneView에 연결하기

Google Drive와 Box 모두 RcloneView에서 OAuth 브라우저 인증을 사용하므로, 계정당 설정에 2분도 걸리지 않습니다. Remote 탭을 열고 New Remote를 클릭한 다음 Google Drive를 선택하세요. 브라우저 창이 열리면 Google 계정으로 로그인하고 권한을 부여하면 됩니다 — API 키를 수동으로 만들 필요가 없습니다. Box에 대해서도 동일한 단계를 반복합니다: New Remote, Box 선택, 브라우저 OAuth 흐름 완료.

Google 공유 드라이브(팀 드라이브)를 사용하는 경우, 설정 시 `shared_with_me` 옵션을 활성화하거나 공유 드라이브 ID를 루트 폴더로 지정하여 모든 팀 콘텐츠가 Explorer 패널에 표시되도록 하세요. Box for Business 계정의 경우, 리모트를 생성할 때 `box_sub_type = enterprise`를 설정하면 엔터프라이즈 폴더와 권한이 활성화됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Box remotes in RcloneView" class="img-large img-center" />

## 클라우드 간 전송 실행하기

왼쪽 Explorer 패널에서 Google Drive를, 오른쪽에서 Box를 엽니다. Google Drive에서 소스 폴더 — 팀의 공유 `Projects` 폴더나 클라이언트 산출물 디렉터리 — 로 이동한 다음, 복사할 항목을 선택하여 Box 패널로 드래그합니다. RcloneView는 복사 작업을 확인하고 두 클라우드 서비스 간에 데이터를 직접 스트리밍하며, 로컬 컴퓨터는 제어 역할만 수행하므로 자신의 대역폭 사용량을 낮게 유지할 수 있습니다.

화면 하단의 Transferring 탭은 현재 속도, 파일 수, 총 이동 바이트 수 등 실시간 진행 상황을 보여줍니다. 프레젠테이션 자료, 비디오 자산, 스프레드시트에 걸친 대규모 전송의 경우, RcloneView의 멀티스레드 엔진이 여러 파일을 동시에 이동시켜 순차 복사에 비해 총 전송 시간을 크게 줄여줍니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Google Drive to Box in RcloneView" class="img-large img-center" />

## 지속적인 백업을 위한 동기화 작업 설정하기

반복적인 백업을 위해서는 Job Manager를 사용하여 Sync 작업을 생성하세요. Google Drive 폴더를 소스로, Box 폴더를 대상으로 선택하고 필터링 규칙을 구성합니다 — 예를 들어 `.gdoc` Google Docs 바로가기 파일을 제외하거나 지난 30일 이내에 수정된 콘텐츠로 동기화를 제한할 수 있습니다. 단방향 동기화 모드는 Google Drive 콘텐츠를 수정하지 않고 Box에 변경 사항을 기록하므로, 실제 운영 중인 워크스페이스에 대해서도 안전하게 실행할 수 있습니다.

첫 실제 실행 전에는 Dry Run 옵션을 사용하여 어떤 파일이 복사되거나 덮어써질지 정확히 미리 확인하세요. Job History는 모든 실행을 타임스탬프, 전송 크기, 상태 코드와 함께 기록하여 컴플라이언스 팀이 참조할 수 있는 명확한 감사 추적을 제공합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Google Drive to Box sync job in RcloneView" class="img-large img-center" />

## 예약 동기화로 자동화하기 (PLUS 라이선스)

PLUS 라이선스를 사용하면 Google Drive → Box 동기화를 원하는 crontab 간격으로 자동 실행되도록 예약할 수 있습니다 — 매일 자정, 매주 월요일 아침, 또는 IT 정책에 필요한 사용자 지정 주기로 설정할 수 있습니다. 작업 마법사의 Schedule 단계에서 Minute, Hour, Day-of-Week 필드를 입력하세요. 모든 실행은 타임스탬프와 상태 코드와 함께 Job History에 기록되므로, 컴플라이언스 팀은 동기화가 언제 실행되었는지, 성공했는지 여부를 정확히 감사할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a Google Drive to Box automated sync in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Remote 탭 > New Remote > Google Drive(OAuth 브라우저 로그인)를 통해 Google Drive 계정을 추가합니다.
3. Remote 탭 > New Remote > Box(OAuth 브라우저 로그인)를 통해 Box 계정을 추가합니다.
4. Explorer 패널에서 두 리모트를 나란히 열고 파일을 드래그하여 즉시 복사하거나, Job Manager에서 반복 가능한 워크플로를 위한 Sync 작업을 생성하세요.
5. 예약 기능(PLUS 라이선스)을 활성화하여 동기화를 정기적으로 자동화하고 완료 알림을 설정하세요.

잘 관리된 Google Drive-to-Box 동기화는 컴플라이언스 아카이브를 최신 상태로 유지하고 크로스 플랫폼 파일 접근을 일관되게 유지합니다 — RcloneView를 사용하면 5분 만에 설정할 수 있습니다.

---

**관련 가이드:**

- [RcloneView로 Google Drive 클라우드 동기화 및 백업 관리하기](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [RcloneView로 Box 클라우드 동기화 및 백업 관리하기](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Box를 Google Drive로 동기화 — RcloneView로 클라우드 백업하기](https://rcloneview.com/support/blog/sync-box-to-google-drive-rcloneview)

<CloudSupportGrid />
