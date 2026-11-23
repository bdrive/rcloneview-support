---
slug: migrate-dropbox-to-jottacloud-rcloneview
title: "Dropbox에서 Jottacloud로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - jay
description: "RcloneView로 Dropbox의 파일을 Jottacloud로 옮기세요. 두 클라우드를 연결하고, Dry Run으로 미리 확인하고, 클라우드 간 복사 후 Folder Compare로 결과를 검증합니다."
keywords:
  - dropbox jottacloud 마이그레이션
  - dropbox jottacloud 전송
  - dropbox에서 jottacloud로 파일 이동
  - jottacloud 마이그레이션 도구
  - 유럽 dropbox 대안
  - 클라우드 간 마이그레이션 GUI
  - rcloneview jottacloud
  - rclone dropbox jottacloud
  - 유럽 클라우드 스토리지 마이그레이션
tags:
  - RcloneView
  - dropbox
  - jottacloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Dropbox에서 Jottacloud로 마이그레이션 — RcloneView로 파일 전송하기

> Dropbox 폴더를 클라우드에서 클라우드로 바로 Jottacloud에 옮기고, 기존 계정을 해지하기 전에 모든 파일을 확인하세요.

노르웨이 서비스로 옮기려는 팀과 가정은 흔히 같은 벽에 부딪힙니다. 수년간 쌓인 Dropbox 데이터를 노트북에 내려받았다가 다시 업로드하는 일은 느리고 위험합니다. RcloneView는 두 계정을 한 창에서 연결하고 rclone을 통해 전송을 실행하므로, 로컬 폴더를 거쳐 직접 옮길 필요 없이 파일이 Dropbox에서 Jottacloud로 이동합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Dropbox와 Jottacloud를 리모트로 연결하기

**Remote** 탭을 열고 **New Remote**를 클릭하세요. Dropbox는 OAuth를 사용합니다. 브라우저가 열리면 로그인하고, RcloneView가 연결을 저장합니다. 파일이 Dropbox 팀 계정에 있다면 rclone이 비즈니스 네임스페이스와 통신하도록 `dropbox_business` 옵션을 설정하세요.

Jottacloud도 같은 방식으로 추가합니다. 공급자 목록에서 Jottacloud를 선택하고 연결 안내를 따르세요. 두 리모트가 모두 나타나면 두 개의 Explorer 패널에 나란히 열어 원본과 대상을 동시에 볼 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 Dropbox와 Jottacloud 리모트 추가하기" class="img-large img-center" />

## 복사 전에 폴더 구성 계획하기

`Clients`, `Archive`, `Shared Assets`에 600 GB가 흩어져 있는 디자인 에이전시라면 먼저 각 최상위 폴더를 어디에 둘지 정해야 합니다. 마우스 오른쪽 버튼 메뉴로 Jottacloud에 대상 폴더를 만든 다음, 각 Dropbox 폴더에서 **Get Size**를 사용해 단계마다 옮길 데이터 양을 확인하세요.

간단한 일회성 작업이라면 Dropbox 패널에서 Jottacloud 패널로 폴더를 끌어다 놓으세요. 서로 다른 리모트 간 드래그는 항상 복사이므로 Dropbox에서는 아무것도 삭제되지 않습니다. 더 큰 작업에는 다시 실행하고 기록을 확인할 수 있는 저장된 작업이 더 좋습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView에서 Dropbox에서 Jottacloud로 클라우드 간 전송" class="img-large img-center" />

## 반복 실행 가능한 마이그레이션 작업 만들기

Home 탭에서 **Sync**를 클릭하고 원본으로 Dropbox, 대상으로 Jottacloud를 선택하세요. 방향은 단방향("Modifying destination only")으로 두세요. Advanced Settings에서는 기본 멀티 스레드 설정을 유지하고 체크섬 비교는 꺼 두세요(Dropbox와 Jottacloud는 서로 다른 해시 유형을 사용하므로 rclone은 크기와 수정 시간으로 파일을 비교합니다). 가져올 필요가 없는 항목은 Filtering으로 건너뛰세요.

먼저 **Dry Run**을 실행하세요. 대상에서 복사되거나 삭제될 모든 파일을 보여 주므로, 잘못된 폴더 선택을 몇 시간을 허비하기 전에 잡아낼 수 있습니다. 그런 다음 실제 실행을 시작하고 **Transferring** 탭에서 속도와 파일 수를 확인하세요.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView에서 Dropbox에서 Jottacloud로의 마이그레이션 작업 실행" class="img-large img-center" />

이전하는 동안에도 사람들이 Dropbox에서 계속 작업한다면, 전환 직전에 같은 작업을 다시 실행하세요. 새 파일이나 변경된 파일만 전송됩니다. PLUS 라이선스에서는 전환일까지 매일 밤 작업이 실행되도록 예약할 수 있습니다.

## Folder Compare로 검증하기

Dropbox를 해지하기 전에 **Compare**를 클릭하고 두 최상위 폴더를 여세요. 왼쪽에만 있는 파일과 크기가 다른 파일 필터를 켜세요. 목록에 남아 있는 항목은 도착하지 않았거나 일치하지 않는 것입니다. 해당 항목을 선택하고 **Copy right**로 빈 곳을 채우세요. 화면에 동일한 파일만 표시되면 마이그레이션이 완료된 것입니다. **Job History**에는 각 실행의 크기, 속도, 상태 기록이 남습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="마이그레이션 후 RcloneView에서 Dropbox와 Jottacloud 폴더 비교하기" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **Remote > New Remote**에서 Dropbox(OAuth)와 Jottacloud를 리모트로 추가하세요.
3. Dropbox에서 Jottacloud로 단방향 Sync 작업을 만들고 **Dry Run**으로 미리 확인하세요.
4. 작업을 실행한 다음 Dropbox 계정을 정리하기 전에 **Compare**로 결과를 확인하세요.

RcloneView는 Windows, macOS, Linux에서 하나의 창으로 90개 이상의 공급자를 마운트하고 동기화하므로, 이전이 끝난 뒤에도 같은 앱으로 Jottacloud를 로컬 드라이브로 마운트할 수 있습니다.

---

**관련 가이드:**

- [RcloneView로 Jottacloud 스토리지 관리하기: 동기화, 백업, 파일 정리](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [Dropbox에서 Koofr로 마이그레이션 — RcloneView로 파일 전송하기](https://rcloneview.com/support/blog/migrate-dropbox-to-koofr-rcloneview)
- [Jottacloud 동기화 오류 해결 — RcloneView로 문제 해결하기](https://rcloneview.com/support/blog/fix-jottacloud-sync-errors-rcloneview)

<CloudSupportGrid />
