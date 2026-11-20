---
slug: migrate-icloud-drive-to-pcloud-rcloneview
title: "iCloud Drive에서 pCloud로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - tayson
description: "RcloneView로 iCloud Drive 파일을 pCloud로 옮기세요. 두 리모트를 연결하고, Dry Run으로 미리 보고, 클라우드 간 동기화 작업을 실행한 뒤 폴더 비교로 확인합니다."
keywords:
  - iCloud Drive에서 pCloud로
  - iCloud Drive pCloud 마이그레이션
  - iCloud pCloud 전송
  - iCloud Drive 파일 옮기기
  - pCloud 마이그레이션 도구
  - Windows와 Linux용 iCloud Drive 대안
  - 클라우드 간 마이그레이션 GUI
  - RcloneView iCloud Drive
  - RcloneView pCloud
tags:
  - RcloneView
  - pcloud
  - cloud-to-cloud
  - migration
  - macos
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# iCloud Drive에서 pCloud로 마이그레이션 — RcloneView로 파일 전송하기

> Finder 창을 오가거나 중간에 멈춘 브라우저 업로드와 씨름하지 않고 iCloud Drive 라이브러리를 pCloud로 옮기세요.

iCloud Drive는 가진 기기가 모두 Apple 기기일 때 편리합니다. 하지만 Windows 노트북이나 Linux 워크스테이션이 합류하면 많은 사용자가 모든 플랫폼에서 똑같이 동작하는 클라우드를 찾게 되고, pCloud는 흔히 선택되는 곳입니다. RcloneView는 두 서비스를 하나의 창에서 연결하고, 반복 실행할 수 있는 동기화 작업으로 데이터를 복사하며, 기존 구독을 해지하기 전에 결과를 확인할 수 있게 해 줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## iCloud Drive와 pCloud를 리모트로 연결하기

**Remote** 탭을 열고 **New Remote**를 클릭합니다. **iCloud Drive**를 선택하고 Apple 계정 자격 증명을 입력한 뒤, Apple이 기기로 보내는 인증 요청을 완료하세요. rclone의 iCloud Drive 백엔드는 고급 데이터 보호(Advanced Data Protection)와 함께 작동하지 않으므로, Apple 계정에서 이 설정을 꺼야 합니다. iCloud Drive 지원에는 rclone v1.69 이상이 필요하며, RcloneView에 포함된 내장 rclone이 이 요구 사항을 충족하므로 별도로 설치할 것은 없습니다.

다음으로 **pCloud**를 추가합니다. pCloud는 OAuth를 사용하므로 브라우저 창이 열리고 로그인하면 리모트가 자동으로 저장됩니다. API 키는 필요하지 않습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive and pCloud remotes in RcloneView" class="img-large img-center" />

두 리모트를 저장했으면 왼쪽 Explorer 패널에서 iCloud Drive를, 오른쪽 패널에서 pCloud를 엽니다. 옮길 iCloud 폴더를 마우스 오른쪽 버튼으로 클릭하고 **Get Size**를 사용해 시작 전에 데이터 양을 확인하세요.

## Dry Run으로 마이그레이션 미리 보기

**Home** 탭에서 동기화 작업을 만듭니다. iCloud Drive 폴더를 소스로, `/From-iCloud` 같은 새 pCloud 폴더를 대상으로 설정합니다. iCloud Drive가 절대 변경되지 않도록 방향은 단방향("Modifying destination only")으로 유지하세요.

실행하기 전에 **Dry Run**을 클릭하세요. RcloneView는 실제로 아무것도 옮기지 않고, 복사할 모든 파일과 대상에서 삭제할 항목을 목록으로 보여 줍니다. Mac 번들 폴더, `.DS_Store` 파일, 잊고 있던 오래된 휴대폰 백업 폴더 같은 의외의 항목을 발견하기 좋은 시점입니다. 옮기고 싶지 않은 항목은 Step 3에서 사용자 지정 필터를 추가해 제외하세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="iCloud Drive and pCloud side by side in RcloneView for a cloud-to-cloud transfer" class="img-large img-center" />

이것은 Apple과 pCloud 사이의 서버 측 복사가 아니라는 점에 유의하세요. 데이터는 RcloneView를 실행하는 컴퓨터를 거쳐 흐르므로, 유선 연결과 절전 모드로 들어가지 않는 컴퓨터가 있으면 대용량 마이그레이션을 한 번에 끝내는 데 도움이 됩니다.

## 실행, 모니터링, 확인

작업을 시작하고 **Transferring** 탭에서 진행률, 파일 수, 현재 속도를 확인하세요. 연결이 끊기면 같은 작업을 다시 실행하면 됩니다. 동기화는 없거나 다른 파일만 전송하므로 이미 완료된 파일은 건너뜁니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring an iCloud Drive to pCloud transfer in the RcloneView Transferring tab" class="img-large img-center" />

작업이 끝나면 왼쪽에 iCloud Drive, 오른쪽에 pCloud를 두고 **Compare**를 엽니다. "Show left-only files"와 "Show different files"를 켜세요. 결과가 비어 있으면 마이그레이션이 완료된 것입니다. **Job History**에는 각 실행의 상태, 크기, 파일 수가 기록됩니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying the iCloud Drive to pCloud migration with RcloneView Folder Compare" class="img-large img-center" />

## 시작하기

RcloneView는 Windows, macOS, Linux에서 실행되므로 이전이 끝난 뒤에는 어느 컴퓨터에서든 새 pCloud 라이브러리를 관리할 수 있습니다.

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. iCloud Drive(Apple 계정 로그인)와 pCloud(브라우저 OAuth)를 리모트로 추가합니다.
3. iCloud Drive에서 pCloud 폴더로 가는 단방향 동기화 작업을 만들고 **Dry Run**으로 확인합니다.
4. 작업을 실행한 뒤, iCloud 사본을 정리하기 전에 **Compare**로 결과를 확인합니다.

확인 가능하고 반복 실행할 수 있는 마이그레이션이라면, 빠뜨린 파일이 있을까 걱정하지 않고 클라우드를 바꿀 수 있습니다.

---

**관련 가이드:**

- [iCloud Drive에서 Google Drive로 마이그레이션 — RcloneView로 파일 전송하기](https://rcloneview.com/support/blog/migrate-icloud-drive-to-google-drive-rcloneview)
- [pCloud 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [iCloud Drive 동기화 오류 해결 — RcloneView로 해결하는 방법](https://rcloneview.com/support/blog/fix-icloud-drive-sync-errors-rcloneview)

<CloudSupportGrid />
