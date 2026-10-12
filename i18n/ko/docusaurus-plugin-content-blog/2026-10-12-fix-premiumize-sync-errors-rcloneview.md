---
slug: fix-premiumize-sync-errors-rcloneview
title: "premiumize.me 동기화 오류 해결 — RcloneView로 인증 및 전송 문제 해결하기"
authors:
  - casey
description: "RcloneView의 로그, 작업 기록, 폴더 비교를 사용해 인증 만료, 전송 실패, 누락된 파일 등 premiumize.me 동기화 오류를 해결하세요."
keywords:
  - premiumize.me 동기화 오류 해결
  - premiumize rclone 오류
  - premiumize 인증 실패
  - premiumize 전송 실패
  - premiumize 문제 해결
  - RcloneView premiumize
  - 클라우드 동기화 문제 해결
  - premiumize GUI
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# premiumize.me 동기화 오류 해결 — RcloneView로 인증 및 전송 문제 해결하기

> premiumize.me 작업이 실패하면 RcloneView의 작업 기록, DEBUG 로그, 폴더 비교를 통해 원인이 로그인인지, 전송 부하인지, 도착하지 않은 파일인지 확인할 수 있습니다.

premiumize.me 작업이 중간에 멈추거나 폴더가 절반만 복사된 상태로 남는 경우, 명령줄만으로는 원인을 진단하기 어렵습니다. RcloneView는 리모트 확인, 작업 기록, 로그, 나란히 보는 비교 화면을 하나의 창에 모아 두었으므로 무작정 다시 실행하는 대신 실제 원인을 해결할 수 있습니다. RcloneView는 하나의 창에서 90개 이상의 제공자를 마운트하고 동기화하며, Windows, macOS, Linux에서 사용할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 리모트 재인증

premiumize.me는 브라우저에서 OAuth로 연결됩니다. 작업이 몇 초 만에 실패한다면 가장 먼저 로그인을 의심해야 합니다. Remote 탭에서 Remote Manager를 열고 premiumize.me 리모트를 편집한 뒤, 브라우저 안내에 따라 다시 로그인하세요.

그런 다음 Explorer 패널에서 리모트를 열어 루트 폴더를 탐색합니다. 정상적으로 목록이 표시되면 연결은 문제가 없으며, 실패 원인은 전송 자체에 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 premiumize.me 리모트 재인증" class="img-large img-center" />

## 작업 기록 확인 및 DEBUG 로그 활성화

Job History를 열어 실패한 실행의 상태, 소요 시간, 파일 수를 확인하세요. 작업이 중간에 오류로 끝났다면 보통 자격 증명이 아니라 특정 파일이나 부하가 원인입니다.

파일별 정확한 메시지를 보려면 Settings > Embedded Rclone으로 이동해 rclone 로깅을 활성화하고 레벨을 DEBUG로 설정한 뒤 Restart Embedded Rclone을 클릭하세요. 오류를 재현한 다음 Log 탭이나 지정한 폴더의 로그 파일을 확인합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="오류가 발생한 premiumize.me 작업을 보여주는 RcloneView 작업 기록" class="img-large img-center" />

## 부하 줄이기 및 재실행 미리보기

간헐적인 실패는 동시 전송 수를 줄이면 완화되는 경우가 많습니다. 동기화 마법사 2단계에서 파일 전송 수를 낮추고 동등성 검사기(equality checkers)를 4 이하로 설정하세요. 일시적인 오류가 재시도되도록 "Retry entire sync if fails"는 3으로 유지합니다.

재실행 전에 Dry Run을 사용하면 복사되거나 삭제될 파일을 미리 볼 수 있어 재시도 시 예상치 못한 일이 생기지 않습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="낮춘 동시성으로 premiumize.me 작업 재실행" class="img-large img-center" />

## 폴더 비교로 확인

재실행 후 한쪽에는 로컬 폴더, 다른 쪽에는 premiumize.me를 두고 Compare를 엽니다. 왼쪽에만 있는 파일, 오른쪽에만 있는 파일, 다른 파일로 필터링한 다음, 작업 전체를 반복하지 말고 아직 누락된 항목만 복사하세요.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="premiumize.me에 누락된 파일을 보여주는 폴더 비교" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. premiumize.me 리모트를 재인증하고 루트 폴더 목록이 표시되는지 확인합니다.
3. Job History를 확인하고 실패한 작업에 대해 DEBUG 로깅을 켭니다.
4. 동시성을 낮추고 Dry Run을 실행한 뒤 재실행하고 폴더 비교로 검증합니다.

로그와 비교로 원인이 드러나면 premiumize.me 실패도 짧고 반복 가능한 수정 작업으로 바뀝니다.

---

**관련 가이드:**

- [RcloneView로 premiumize.me 클라우드 스토리지 관리하기](https://rcloneview.com/support/blog/manage-premiumize-me-cloud-sync-backup-rcloneview)
- [RcloneView로 premiumize.me 클라우드 다운로드 동기화하기](https://rcloneview.com/support/blog/sync-premiumize-cloud-downloads-rcloneview)
- [RcloneView로 put.io 동기화 오류 해결하기](https://rcloneview.com/support/blog/fix-put-io-sync-errors-rcloneview)

<CloudSupportGrid />
