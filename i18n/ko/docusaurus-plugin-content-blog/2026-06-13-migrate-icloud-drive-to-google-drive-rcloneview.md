---
slug: migrate-icloud-drive-to-google-drive-rcloneview
title: "iCloud Drive를 Google Drive로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - jay
description: "RcloneView를 사용하여 iCloud Drive를 Google Drive로 마이그레이션하세요 — 수동 다운로드 없이 Apple 클라우드 파일을 Google로 전송하는 단계별 가이드입니다."
keywords:
  - iCloud Drive to Google Drive
  - migrate iCloud Drive to Google Drive
  - iCloud Drive migration
  - transfer iCloud files to Google Drive
  - RcloneView iCloud Drive
  - cloud migration tool
  - move files from iCloud to Google Drive
  - cross-cloud file transfer
  - iCloud Drive sync RcloneView
tags:
  - cloud-to-cloud
  - migration
  - google-drive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# iCloud Drive를 Google Drive로 마이그레이션 — RcloneView로 파일 전송하기

> 전체 파일을 먼저 다운로드하지 않고도 iCloud Drive 라이브러리 전체를 Google Drive로 옮기세요 — RcloneView가 두 서비스 사이에서 전송을 직접 처리합니다.

Apple 중심 워크플로우에서 Google Workspace로 전환하거나, 단순히 모든 플랫폼에서 파일에 접근하고 싶을 때는 iCloud Drive를 Google Drive로 마이그레이션해야 하는 경우가 많습니다. 수 기가바이트에 달하는 데이터를 수동으로 다운로드했다가 다시 업로드하는 것은 시간을 낭비할 뿐만 아니라 전송이 불완전하게 끝날 위험도 있습니다. RcloneView는 두 서비스에 직접 연결하여 클라우드 간에 파일을 이동시키며, 이 과정 내내 원본 파일을 그대로 유지합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## iCloud Drive에서 Google Drive로 이동해야 하는 이유

iCloud Drive는 Apple 생태계와 긴밀하게 통합되어 있지만, macOS와 iOS 밖에서는 사용 경험이 파편화됩니다. Google Drive는 모든 주요 플랫폼에서 기본적으로 작동하며, 크로스 플랫폼 팀이 매일 의존하는 Google Workspace 도구와 연결됩니다. 예를 들어 300GB 규모의 프로젝트 파일을 보유한 디자인 스튜디오는 Google Docs와 Slides만 사용하는 클라이언트를 온보딩할 때 모든 것을 Google Drive에 두어야 할 수 있습니다.

iCloud Drive는 Desktop, Documents 등의 폴더를 Apple 서버에 조용히 동기화하기 때문에, 명확한 인벤토리 없이 수년간 파일이 쌓여 있는 경우가 많습니다. Google Drive로 마이그레이션하면 중앙 집중식 가시성, 세밀한 공유 제어, 그리고 Apple 계정 없이도 모든 기기에서의 접근이 가능해집니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive and Google Drive as remotes in RcloneView" class="img-large img-center" />

## RcloneView에서 iCloud Drive 설정하기

RcloneView에 내장된 rclone 바이너리(v1.69.1 이상)는 iCloud Drive 지원에 필요한 rclone v1.69 최소 요구사항을 충족합니다. 별도의 설치가 필요하지 않습니다.

iCloud Drive를 추가하려면 **Remote** 탭을 열고 **New Remote**를 클릭하세요. 제공업체 목록에서 iCloud Drive를 선택한 다음 Apple ID 이메일 주소와 비밀번호를 입력합니다. Apple 계정에서 2단계 인증을 사용하는 경우, Apple ID 보안 설정에서 앱 전용 비밀번호를 생성하여 일반 비밀번호 대신 사용하세요. 저장하고 나면 iCloud Drive 폴더가 파일 탐색기 패널에 즉시 나타납니다 — Desktop, Documents 및 기타 동기화된 디렉터리를 모두 탐색할 수 있습니다.

## Google Drive 연결하기

Google Drive는 OAuth 인증을 사용합니다. RcloneView에서 새 리모트를 추가하고 Google Drive를 선택하면, 브라우저 창이 자동으로 열려 Google 계정에 로그인하고 접근 권한을 부여할 수 있습니다. API 키나 개발자 자격 증명은 필요하지 않습니다. 연결은 몇 초 안에 완료되며, iCloud Drive 옆의 두 번째 패널에 Drive 폴더가 나타납니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from iCloud Drive to Google Drive in RcloneView" class="img-large img-center" />

## 마이그레이션 실행하기

두 리모트가 모두 구성되면 **Job Manager**를 열고 **Copy** 작업을 생성하세요. iCloud Drive 소스 폴더를 설정하고, 대상 폴더로 Google Drive 폴더를 선택한 다음 작업 이름을 지정합니다. Copy 모드는 대상에 아직 존재하지 않는 파일만 전송하며 원본은 건드리지 않습니다 — iCloud Drive의 내용은 그대로 유지됩니다.

전체 전송을 실행하기 전에 작업 옵션에서 **Dry Run**을 실행해 보세요. RcloneView는 복사될 모든 파일 — 이름, 경로, 크기 — 을 실제로 데이터를 옮기지 않고 보여줍니다. 이 미리보기 기능은 iCloud Drive에 수년간 쌓인 다양한 콘텐츠가 있을 때 시작하기 전에 범위를 확인하는 데 특히 유용합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a cloud migration job in RcloneView" class="img-large img-center" />

확인이 끝나면 작업을 실행하고 인터페이스 하단의 **Transferring** 탭에서 진행 상황을 확인하세요. 속도, 파일 개수, 완료 퍼센트가 실시간으로 업데이트됩니다. 대용량 라이브러리의 경우 작업의 고급 설정에서 체크섬 검증을 활성화하여 모든 파일이 손상 없이 도착했는지 확인하세요.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **Remote** 탭을 열고 **New Remote**를 클릭한 다음, Apple ID 자격 증명으로 iCloud Drive를 추가합니다.
3. OAuth 브라우저 로그인을 통해 Google Drive를 두 번째 리모트로 추가합니다.
4. iCloud Drive 폴더를 소스로, Google Drive 폴더를 대상으로 하는 Copy 작업을 생성합니다.
5. Dry Run을 실행하여 전송을 미리 확인한 다음, 작업을 실행하고 Transferring 탭에서 진행 상황을 모니터링합니다.

두 서비스를 나란히 연결해 두면, iCloud Drive 전체를 Google Drive로 마이그레이션하는 일은 작업 하나를 구성하고 실행시키는 것만으로 끝납니다.

---

**관련 가이드:**

- [iCloud Drive 관리하기 — RcloneView로 클라우드 동기화](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [RcloneView로 Dropbox를 Google Drive로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-dropbox-to-google-drive-with-rcloneview)
- [RcloneView로 Google Drive를 pCloud로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-google-drive-to-pcloud-rcloneview)

<CloudSupportGrid />
