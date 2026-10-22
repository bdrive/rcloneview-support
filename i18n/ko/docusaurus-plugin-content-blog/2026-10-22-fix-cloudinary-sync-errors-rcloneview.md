---
slug: fix-cloudinary-sync-errors-rcloneview
title: "Cloudinary 동기화 오류 해결 — RcloneView로 연결, 전송, 누락 파일 문제 해결"
authors:
  - jay
description: "RcloneView로 Cloudinary 동기화 오류 해결: 리모트 재확인, 작업 기록과 DEBUG 로그 확인, 동시 전송 수 낮추기, 폴더 비교로 결과 검증."
keywords:
  - Cloudinary 동기화 오류 해결
  - Cloudinary 동기화 실패
  - Cloudinary rclone 오류
  - RcloneView 문제 해결
  - Cloudinary 누락 파일
  - rclone DEBUG 로그
  - 폴더 비교
  - 클라우드 동기화 문제 해결
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-storage
  - dam
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cloudinary 동기화 오류 해결 — RcloneView로 연결, 전송, 누락 파일 문제 해결

> Cloudinary 작업이 실패하면 RcloneView의 작업 기록, DEBUG 로그, 폴더 비교를 통해 원인이 리모트, 전송 부하, 도착하지 않은 파일 중 무엇인지 확인할 수 있습니다.

Cloudinary 동기화가 모호한 오류와 함께 멈추거나, 폴더가 불완전해 보이는 상태로 끝나면 명령줄만으로는 원인을 찾기 어렵습니다. RcloneView는 리모트 확인, 작업 기록, 로그, 나란히 보는 비교를 한 창에 모아 두었으므로 무작정 다시 실행하지 않고 근거를 바탕으로 작업할 수 있습니다. RcloneView는 한 창에서 90개 이상의 제공자를 마운트하고 동기화하며, Windows, macOS, Linux에서 사용할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 리모트가 여전히 연결되는지 확인

작업이 몇 초 안에 실패한다면 데이터보다 먼저 리모트를 의심하세요. Remote 탭에서 Remote Manager를 열고 Cloudinary 리모트를 편집한 다음, 자격 증명이 변경되었거나 만료되었다면 다시 입력합니다. 그런 다음 Explorer 패널에서 리모트를 열어 루트 폴더를 탐색합니다. 정상적으로 목록이 표시되면 연결은 정상이며 문제는 다른 곳에 있습니다.

내장 Terminal 탭에서 `rclone about "remote:"`를 실행해 계정이 응답하는지 빠르게 확인할 수도 있습니다. `remote`는 사용 중인 리모트 이름으로 바꾸세요.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView Remote Manager에서 Cloudinary 리모트 편집" class="img-large img-center" />

## 작업 기록 확인 및 DEBUG 로깅 켜기

Job History를 열어 실패한 실행의 상태, 소요 시간, 파일 수를 확인하세요. 중간에 오류가 발생한 작업은 보통 자격 증명보다 특정 파일이나 전송 부하가 원인입니다.

파일별 정확한 메시지를 보려면 Settings > Embedded Rclone으로 이동해 rclone 로깅을 켜고 레벨을 DEBUG로 설정한 뒤 Restart Embedded Rclone을 클릭합니다. 실패를 재현한 다음 Log 탭이나 설정한 로그 폴더에서 로그를 읽으세요.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="오류가 발생한 Cloudinary 작업을 보여주는 RcloneView 작업 기록" class="img-large img-center" />

## 동시 전송 수를 낮추고 재실행 미리 보기

간헐적인 실패는 한 번에 이동하는 파일 수를 줄이면 완화되는 경우가 많습니다. 동기화 마법사 2단계에서 파일 전송 수를 줄이고 equality checkers를 4 이하로 설정하세요. 이는 느린 백엔드를 위한 권장 값입니다. "Retry entire sync if fails"는 3으로 유지하면 일시적인 실패를 최대 세 번까지 재시도합니다.

다시 실행하기 전에 Dry Run으로 복사되거나 삭제될 파일을 검토하면 재시도가 예상치 못한 결과를 낳지 않습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="동시 전송 수를 낮춰 RcloneView에서 Cloudinary 작업 재실행" class="img-large img-center" />

## 폴더 비교로 검증

재실행 후 한쪽에는 로컬 폴더, 다른 쪽에는 Cloudinary를 놓고 Compare를 엽니다. left-only, right-only, different 파일을 필터링해 아직 누락되었거나 일치하지 않는 항목을 확인한 다음, 전체 작업을 반복하는 대신 해당 항목만 복사하세요.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Cloudinary에서 누락된 파일을 나열한 폴더 비교" class="img-large img-center" />

## 시작하기

1. **RcloneView 다운로드**: [rcloneview.com](https://rcloneview.com/src/download.html)에서 받으세요.
2. Remote Manager에서 Cloudinary 리모트를 다시 확인하고 루트 폴더가 표시되는지 확인합니다.
3. Job History를 확인하고 실패한 작업에 대해 DEBUG 로깅을 켭니다.
4. 동시 전송 수를 낮추고 Dry Run을 실행한 뒤 재실행하고, 폴더 비교로 결과를 확인합니다.

로그와 비교 결과로 원인이 보이면 Cloudinary 실패는 짧고 반복 가능한 해결 과정이 됩니다.

---

**관련 가이드:**

- [Cloudinary 스토리지 관리 — RcloneView로 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-cloudinary-cloud-sync-backup-rcloneview)
- [RcloneView로 SugarSync 동기화 오류 해결](https://rcloneview.com/support/blog/fix-sugarsync-sync-errors-rcloneview)
- [클라우드 전송 로그 및 디버그 — RcloneView에서 문제 해결](https://rcloneview.com/support/blog/log-debug-troubleshoot-transfers-rcloneview)

<CloudSupportGrid />
