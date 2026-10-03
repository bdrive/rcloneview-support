---
slug: fix-opendrive-sync-errors-rcloneview
title: "OpenDrive 동기화 오류 해결 — RcloneView로 로그인, 업로드, 목록 문제 해결하기"
authors:
  - kai
description: "RcloneView의 작업 기록, 로그, Folder Compare를 사용해 로그인 실패, 중단된 업로드, 누락된 파일 같은 OpenDrive 동기화 오류를 해결하세요."
keywords:
  - OpenDrive 동기화 오류 해결
  - OpenDrive rclone 오류
  - OpenDrive 로그인 실패
  - OpenDrive 업로드 실패
  - OpenDrive 문제 해결
  - RcloneView OpenDrive
  - rclone OpenDrive 리모트
  - 클라우드 동기화 문제 해결
  - OpenDrive GUI
tags:
  - RcloneView
  - opendrive
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OpenDrive 동기화 오류 해결 — RcloneView로 로그인, 업로드, 목록 문제 해결하기

> OpenDrive 동기화가 실패했을 때 RcloneView의 작업 기록, 로그, Folder Compare를 보면 원인이 자격 증명인지, 전송 부하인지, 도착하지 않은 파일인지 확인할 수 있습니다.

동기화 실패는 스스로 원인을 설명해 주지 않는 경우가 많습니다. 작업이 곧바로 멈추기도 하고, 일부 파일이 빠진 채 끝나기도 하며, 폴더가 불완전해 보이기도 합니다. 무작정 다시 실행하는 대신 RcloneView의 작업 기록을 읽고 DEBUG 로깅을 켠 다음 양쪽을 비교하면 실제 원인을 찾을 수 있습니다. RcloneView는 Windows, macOS, Linux에서 하나의 창으로 90개 이상의 제공업체를 마운트하고 동기화합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 연결 및 자격 증명 문제 배제하기

작업이 몇 초 만에 실패한다면 리모트 자체를 의심해 보세요. Remote 탭에서 Remote Manager를 열고 OpenDrive 리모트를 편집하여 계정 정보를 다시 입력합니다. 그런 다음 Explorer 패널에서 리모트를 열고 루트 폴더를 탐색해 보세요. 정상적으로 목록이 표시된다면 연결은 문제가 없고 실패 원인은 다른 곳에 있습니다.

내장 Terminal 탭에서 `rclone about "remote:"`를 실행해 계정이 응답하는지 확인할 수도 있습니다. `remote`는 사용 중인 리모트 이름으로 바꾸세요.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView Remote Manager에서 OpenDrive 리모트 편집" class="img-large img-center" />

## 작업 기록 확인 및 DEBUG 로그 활성화

Job History를 열어 실패한 실행의 상태, 소요 시간, 파일 수를 확인하세요. 중간에 오류로 끝난 작업은 대개 잘못된 로그인보다는 특정 파일이나 전송 부하 문제를 가리킵니다.

파일별 정확한 메시지를 보려면 Settings > Embedded Rclone에서 rclone 로깅을 켜고 수준을 DEBUG로 설정한 뒤 내장 rclone을 다시 시작합니다. 실패를 재현한 다음 Log 탭이나 설정한 로그 폴더에서 로그를 읽어 보세요.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="오류가 발생한 OpenDrive 작업이 표시된 RcloneView 작업 기록" class="img-large img-center" />

## 중단되는 전송의 부하 줄이기

간헐적으로 실패하는 업로드는 한 번에 이동하는 파일 수를 줄이면 개선되는 경우가 많습니다. 동기화 마법사 2단계에서 파일 전송 수와 equality checker 수를 낮추세요(느린 백엔드의 경우 4 이하를 권장합니다). "Retry entire sync if fails"는 3으로 유지하면 일시적인 실패가 자동으로 재시도됩니다.

다시 실행하기 전에 Dry Run을 사용해 복사되거나 삭제될 파일 목록이 예상과 같은지 확인하세요.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView에서 동시 처리 수를 줄여 OpenDrive 작업 다시 실행" class="img-large img-center" />

## Folder Compare로 검증하기

다시 실행한 후 한쪽에는 로컬 폴더, 다른 쪽에는 OpenDrive를 두고 Compare를 여세요. left-only, right-only, different 파일로 필터링하면 아직 빠져 있거나 일치하지 않는 항목을 정확히 확인할 수 있으며, 전체 작업을 반복하는 대신 해당 항목만 복사하면 됩니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="OpenDrive에서 누락된 파일을 보여 주는 Folder Compare" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Remote Manager에서 OpenDrive 자격 증명을 다시 입력하고 루트 폴더가 표시되는지 확인합니다.
3. 실패한 작업의 Job History를 확인하고 DEBUG 로깅을 켭니다.
4. 동시 처리 수를 낮추고 Dry Run을 실행한 뒤 다시 실행하고 Folder Compare로 확인합니다.

로그와 비교를 통해 원인을 파악하면 OpenDrive 오류는 짧고 반복 가능한 수정 작업이 됩니다.

---

**관련 가이드:**

- [OpenDrive 스토리지 관리 — RcloneView로 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-opendrive-cloud-sync-backup-rcloneview)
- [RcloneView로 Gofile 동기화 오류 해결하기](https://rcloneview.com/support/blog/fix-gofile-sync-errors-rcloneview)
- [RcloneView로 클라우드 동기화 멈춤 및 중단 문제 해결하기](https://rcloneview.com/support/blog/fix-cloud-sync-stuck-hanging-rcloneview)

<CloudSupportGrid />
