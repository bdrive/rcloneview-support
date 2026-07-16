---
slug: migrate-dropbox-to-proton-drive-rcloneview
title: "Dropbox에서 Proton Drive로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - jay
description: "종단 간 암호화 스토리지를 위해 Dropbox 파일을 Proton Drive로 이동하세요. RcloneView로 몇 가지 간단한 단계만으로 클라우드 간 마이그레이션하는 방법을 알아보세요."
keywords:
  - migrate Dropbox to Proton Drive
  - Dropbox to Proton Drive transfer
  - cloud-to-cloud migration RcloneView
  - Proton Drive backup
  - Dropbox migration privacy
  - move files Dropbox Proton Drive
  - encrypted cloud storage migration
  - RcloneView cloud transfer guide
  - switch from Dropbox to Proton Drive
  - Proton Drive sync RcloneView
tags:
  - dropbox
  - proton-drive
  - migration
  - cloud-to-cloud
  - privacy
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Dropbox에서 Proton Drive로 마이그레이션 — RcloneView로 파일 전송하기

> RcloneView를 사용하면 Dropbox 라이브러리 전체를 로컬 다운로드나 수동 재업로드, 명령줄 사용 없이 클라우드 간(cloud-to-cloud) 방식으로 직접 Proton Drive로 전송할 수 있습니다.

많은 팀에게 Dropbox를 떠나는 결정은 결국 데이터 프라이버시 문제로 귀결됩니다. Dropbox는 서버에 파일을 평문(plaintext)으로 저장하기 때문에, Dropbox 직원이나 사법 당국이 영장을 통해 사용자의 데이터에 접근할 수 있습니다. ProtonMail 개발팀이 만든 Proton Drive는 파일이 Proton 서버에 도달하기 전에 클라이언트 측에서 암호화하므로, Proton조차 사용자의 콘텐츠를 읽을 수 없습니다. RcloneView는 두 서비스에 동시에 연결하여 폴더 구조와 파일 무결성을 그대로 유지하면서 데이터를 클라우드 간으로 직접 이동함으로써 이 마이그레이션 과정을 단순화합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Dropbox와 Proton Drive를 리모트로 추가하기

파일을 전송하기 전에 두 클라우드 계정을 모두 RcloneView에 추가하세요. **Remote 탭 > New Remote**로 이동하여 **Dropbox**를 선택합니다. RcloneView가 OAuth 인증을 위한 브라우저 창을 엽니다. Dropbox에 로그인하고 접근 권한을 부여하세요. 인증이 완료되면 리모트가 자동으로 저장됩니다.

Proton Drive에 대해서도 같은 과정을 반복합니다. 리모트 목록에서 **Proton Drive**를 선택하고 Proton 이메일 주소와 비밀번호를 입력하세요. 2단계 인증이 활성화되어 있다면 요청 시 코드를 입력합니다. RcloneView에 내장된 rclone 바이너리는 Proton Drive를 네이티브로 지원합니다(rclone v1.69 이상이 필요하며, 이는 기본 번들에 포함되어 있습니다). 두 리모트가 모두 추가되면 듀얼 패널 파일 탐색기에 탭으로 표시됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Dropbox and Proton Drive as remotes in RcloneView" class="img-large img-center" />

## Folder Compare로 마이그레이션 계획하기

무언가를 전송하기 전에 RcloneView의 **Folder Compare** 도구를 사용해 Dropbox에 무엇이 있고 Proton Drive에는 이미 무엇이 있는지 파악하세요. Home 탭에서 **Compare** 버튼을 클릭하고 Dropbox를 왼쪽 소스로, Proton Drive를 오른쪽으로 설정합니다. 비교 화면에는 Dropbox에만 존재하는 파일(left-only), 양쪽에 모두 존재하는 일치 파일, 크기 차이가 표시되어 실제로 이동이 필요한 항목을 명확히 파악할 수 있습니다.

이미 일부 파일을 수동으로 Proton Drive에 복사해 두었고 중복 작업을 피하고 싶은 경우 이 단계가 특히 유용합니다. "left-only"로 필터링하여 Proton Drive에 없는 항목만 확인한 뒤 해당 항목만 복사하면 됩니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer setup from Dropbox to Proton Drive in RcloneView" class="img-large img-center" />

## 클라우드 간 전송 실행하기

전체 마이그레이션을 진행하려면 **Sync** 마법사를 사용하세요. Home 탭에서 **Sync**를 클릭하고 Dropbox를 소스로, Proton Drive를 대상으로 설정한 뒤 작업 이름을 지정합니다(예: `dropbox-proton-migration`). 작업 유형으로 **Copy**를 선택하면 Dropbox의 원본을 그대로 유지하면서 Proton Drive 사본을 생성하므로, 마이그레이션을 검증할 때까지 Dropbox를 그대로 보존할 수 있습니다.

마법사의 2단계에서 **체크섬 검증**을 활성화하여 모든 파일이 손상 없이 도착했는지 확인하세요. 데이터 무결성이 보장되어야 하는 민감한 문서의 경우 이 단계가 매우 중요합니다. 실제 작업을 실행하기 전에 먼저 **Dry Run**을 실행하여 전송될 파일을 미리 확인하세요.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using folder compare to verify Dropbox files before migration to Proton Drive" class="img-large img-center" />

## 진행 상황 모니터링 및 완료 확인

전송이 진행되는 동안 RcloneView 하단의 **Transferring** 탭에서 실시간 전송 속도, 파일 개수, 진행률을 확인할 수 있습니다. 로펌의 클라이언트 문서 5만 개처럼 대용량 Dropbox 라이브러리는 몇 시간이 걸릴 수 있습니다. RcloneView가 시스템 트레이로 최소화된 상태에서도 작업은 백그라운드에서 계속 진행됩니다.

작업이 완료되면 Folder Compare를 다시 실행하여 left-only 파일이 0개인지 확인하세요. Dropbox에 여전히 "left-only"로 표시된 항목이 있다면 전송이 실패했음을 의미하며, 해당 항목만 선택적으로 다시 실행할 수 있습니다. RcloneView의 **Job History**는 시작 시간, 총 바이트 수, 속도, 상태를 포함한 전체 실행 기록을 남기므로 컴플라이언스나 IT 감사에 적합한 영구 기록으로 활용할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the Dropbox to Proton Drive migration job in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **Remote 탭 > New Remote**에서 OAuth로 Dropbox를, 이메일/비밀번호로 Proton Drive를 추가하세요.
3. **Folder Compare**를 사용하여 전송 전에 두 계정 간의 차이를 점검하세요.
4. 체크섬 검증이 포함된 Copy 동기화 작업을 생성하고 실행하여 마이그레이션을 완료하세요.

RcloneView에서 두 리모트를 모두 연결하면 Dropbox에서 Proton Drive로 데이터를 이동하는 작업이 스크립트도, 중간 다운로드도 필요 없는 시각적이고 관리하기 쉬운 작업이 되며, 전 과정에 걸쳐 명확한 감사 추적을 남길 수 있습니다.

---

**관련 가이드:**

- [RcloneView로 Dropbox 클라우드 스토리지 관리하기](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [RcloneView로 Proton Drive 클라우드 동기화 관리하기](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [RcloneView로 Dropbox에서 Wasabi로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-dropbox-to-wasabi-rcloneview)

<CloudSupportGrid />
