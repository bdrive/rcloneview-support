---
slug: fix-sugarsync-sync-errors-rcloneview
title: "SugarSync 동기화 오류 해결 — 인증, 전송, 누락 파일 문제를 RcloneView로 해결"
authors:
  - morgan
description: "SugarSync 인증 실패, 중단된 전송, 누락된 파일 같은 동기화 오류를 RcloneView의 로그, 작업 기록, Folder Compare로 점검하세요."
keywords:
  - SugarSync 동기화 오류 해결
  - SugarSync rclone 오류
  - SugarSync 인증 실패
  - SugarSync 업로드 실패
  - SugarSync 문제 해결
  - RcloneView SugarSync
  - rclone SugarSync 리모트
  - 클라우드 동기화 문제 해결
  - SugarSync GUI
tags:
  - RcloneView
  - sugarsync
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# SugarSync 동기화 오류 해결 — 인증, 전송, 누락 파일 문제를 RcloneView로 해결

> SugarSync 작업이 실패했을 때, RcloneView의 작업 기록, DEBUG 로그, Folder Compare로 원인이 리모트인지, 전송 부하인지, 도착하지 않은 파일인지 확인할 수 있습니다.

모호한 오류와 함께 멈추거나 폴더가 불완전해 보인 채 끝나는 SugarSync 동기화는 명령줄만으로는 진단하기 어렵습니다. RcloneView는 리모트 점검, 작업 기록, 로그, 나란히 비교하는 화면을 한 창에 모아, 무작정 다시 실행하는 대신 근거를 바탕으로 작업할 수 있게 해 줍니다. RcloneView는 Windows, macOS, Linux에서 한 창으로 90개 이상의 제공업체를 마운트하고 동기화합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 리모트가 여전히 연결되는지 확인

작업이 몇 초 만에 실패한다면 데이터보다 먼저 리모트를 의심하세요. Remote 탭에서 Remote Manager를 열어 SugarSync 리모트를 편집하고, 계정 정보가 바뀌었다면 다시 인증합니다. 그런 다음 Explorer 패널에서 리모트를 열어 루트 폴더를 탐색하세요. 정상적으로 목록이 나타나면 연결은 문제없고 원인은 다른 곳에 있습니다.

내장 Terminal 탭에서 `rclone about "remote:"`를 실행해(`remote`는 사용 중인 리모트 이름으로 바꾸세요) 계정이 응답하는지 빠르게 확인할 수도 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView Remote Manager에서 SugarSync 리모트 편집" class="img-large img-center" />

## 작업 기록 확인 및 DEBUG 로깅 켜기

Job History를 열어 실패한 실행의 상태, 소요 시간, 파일 수를 확인하세요. 중간에 오류가 나는 작업은 보통 자격 증명이 아니라 특정 파일이나 전송 부하를 가리킵니다.

파일별 정확한 메시지를 보려면 Settings > Embedded Rclone으로 이동해 rclone 로깅을 켜고 수준을 DEBUG로 설정한 뒤 Restart Embedded Rclone을 클릭합니다. 오류를 재현한 다음 Log 탭이나 지정한 로그 폴더에서 로그를 확인하세요.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="오류가 발생한 SugarSync 작업을 보여 주는 RcloneView 작업 기록" class="img-large img-center" />

## 동시 전송 수 낮추고 재실행 미리보기

간헐적인 업로드 실패는 한 번에 옮기는 파일 수를 줄이면 완화되는 경우가 많습니다. 동기화 마법사의 2단계에서 파일 전송 수를 줄이고 equality checkers를 4 이하로 설정하세요. 이는 느린 백엔드에 대한 권장 사항입니다. 일시적인 실패가 최대 세 번까지 재시도되도록 "Retry entire sync if fails"는 3으로 유지하세요.

다시 실행하기 전에 Dry Run으로 복사되거나 삭제될 파일을 검토하면 재시도가 예상치 못한 결과를 만들지 않습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView에서 동시 전송 수를 줄여 SugarSync 작업 재실행" class="img-large img-center" />

## Folder Compare로 검증

재실행 후 Compare를 열어 한쪽에는 로컬 폴더를, 다른 쪽에는 SugarSync를 두세요. 왼쪽에만 있는 파일, 오른쪽에만 있는 파일, 서로 다른 파일을 필터링해 아직 누락되었거나 일치하지 않는 항목을 확인한 다음, 전체 작업을 반복하는 대신 해당 항목만 복사합니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="SugarSync에 없는 파일을 보여 주는 Folder Compare" class="img-large img-center" />

## 시작하기

1. **RcloneView 다운로드**: [rcloneview.com](https://rcloneview.com/src/download.html)에서 받으세요.
2. Remote Manager에서 SugarSync 리모트를 다시 인증하고 루트 폴더 목록이 나타나는지 확인합니다.
3. Job History를 확인하고 실패하는 작업에 대해 DEBUG 로깅을 켭니다.
4. 동시 전송 수를 낮추고 Dry Run을 실행한 뒤 다시 실행하고, Folder Compare로 결과를 확인합니다.

로그와 비교 결과에서 원인이 드러나면 SugarSync 오류는 짧고 반복 가능한 해결 절차가 됩니다.

---

**관련 가이드:**

- [SugarSync 스토리지 관리 — RcloneView로 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-sugarsync-cloud-sync-backup-rcloneview)
- [RcloneView로 SugarSync를 Backblaze B2로 마이그레이션](https://rcloneview.com/support/blog/migrate-sugarsync-to-backblaze-b2-rcloneview)
- [RcloneView로 OpenDrive 동기화 오류 해결](https://rcloneview.com/support/blog/fix-opendrive-sync-errors-rcloneview)

<CloudSupportGrid />
