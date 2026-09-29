---
slug: fix-put-io-sync-errors-rcloneview
title: "Put.io 동기화 오류 해결 — RcloneView로 진단하고 해결하기"
authors:
  - kai
description: "RcloneView로 Put.io 동기화 오류 해결: OAuth 재인증, 전송 설정 조정, 작업 기록과 로그 확인, Folder Compare로 결과 검증."
keywords:
  - put.io 동기화 오류 해결
  - put.io 인증 오류
  - put.io 전송 실패
  - putio rclone 오류
  - RcloneView put.io
  - put.io oauth 재인증
  - 클라우드 동기화 문제 해결
  - put.io 다운로드 실패
  - rclone 로그 디버그
  - put.io 동기화 GUI
tags:
  - RcloneView
  - troubleshooting
  - tips
  - putio
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Put.io 동기화 오류 해결 — RcloneView로 진단하고 해결하기

> 만료된 인증부터 과도한 동시 전송까지, Put.io 전송이 실패하는 일반적인 원인을 RcloneView에 내장된 도구로 하나씩 점검합니다.

Put.io 동기화가 중간에 멈추면 로그인 문제인지, 네트워크 문제인지, 작업 설정 문제인지 알기 어렵습니다. RcloneView는 근거를 한곳에 모아 보여 줍니다. Transferring 탭, Job History, 로그 뷰어가 각각 다른 측면을 보여 주고, Folder Compare는 작업 후에도 여전히 누락된 항목을 알려 줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 먼저 인증부터 확인

Put.io는 브라우저 기반 OAuth로 연결됩니다. 작업이 인증 또는 권한 오류 메시지와 함께 즉시 실패한다면 저장된 인증 정보를 가장 먼저 의심해야 합니다. Remote 탭에서 **Remote Manager**를 열고 Put.io 리모트를 편집한 뒤 브라우저 로그인을 다시 진행하세요. 파일이 있는 Put.io 계정과 같은 계정으로 로그인해야 합니다. 같은 브라우저에 다른 계정이 로그인되어 있으면 목록이 비어 보이는 경우가 흔합니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 Put.io 리모트 재인증" class="img-large img-center" />

재인증 후에는 F5(macOS는 Cmd+R)로 Put.io 패널을 새로 고치고, 작업을 다시 실행하기 전에 폴더가 제대로 표시되는지 확인하세요.

## Job History와 로그 읽기

작업이 중간에 실패하면 **Job History**를 여세요. 각 실행에는 실행 유형, 시작 시간, 소요 시간, 상태(Completed, Errored, Canceled), 총 크기, 속도, 파일 수가 기록됩니다. 실패한 실행을 이전의 정상 실행과 비교하면 초반에 실패했는지(자격 증명 문제), 후반에 실패했는지(네트워크나 용량 문제)를 알 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Errored와 Completed로 표시된 Put.io 실행이 있는 Job History" class="img-large img-center" />

자세한 내용은 **Settings > Embedded Rclone**에서 파일 로깅을 켜고 로그 레벨을 DEBUG로 설정한 다음 Restart Embedded Rclone을 클릭하세요. 오류를 재현한 뒤 로그 탭에서 실패한 파일과 오류 문구를 확인합니다. Terminal 탭에서 `rclone about "putio:"`(본인의 리모트 이름 사용)을 실행해 리모트가 응답하는지 확인할 수도 있습니다.

## 작업 설정 조정

원격 서비스의 전송 실패는 스스로 만든 경우가 많습니다. 동기화 마법사의 Advanced Settings에서 **Number of file transfers**와 **Number of equality checkers**를 낮추세요. 느린 백엔드에서는 checkers를 4 이하로 유지하도록 안내하고 있습니다. **Retry entire sync if fails**는 기본값인 3으로 두면 짧은 중단은 스스로 복구됩니다. 아주 큰 파일이 문제라면 최대 파일 크기 필터를 사용해 작은 파일을 먼저 처리하고 나머지는 별도로 처리하세요.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="설정을 조정한 뒤 Put.io 동기화 작업 실행" class="img-large img-center" />

## 누락된 항목 확인

다시 실행한 후 한쪽에 Put.io, 다른 쪽에 대상 위치를 두고 **Compare**를 여세요. Left-only 파일은 도착하지 못한 파일이며, **Copy right**는 그 파일만 전송합니다. RcloneView는 마운트와 동기화와 함께 이 기능을 FREE 라이선스에서 제공하므로 업그레이드 없이 복구를 마칠 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="대상에 아직 없는 파일을 보여 주는 Folder Compare" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. Remote Manager에서 Put.io 리모트를 재인증하고 목록을 새로 고칩니다.
3. Job History를 확인하고, 원인이 분명하지 않으면 DEBUG 로깅을 켭니다.
4. 동시 전송 수를 낮춰 다시 실행한 뒤 Compare로 남은 항목을 복사합니다.

증거를 먼저 읽으면 막연한 실패가 구체적이고 해결 가능한 설정 문제로 바뀝니다.

---

**관련 가이드:**

- [Put.io 스토리지 관리](https://rcloneview.com/support/blog/manage-put-io-cloud-sync-backup-rcloneview)
- [Put.io에서 Google Drive로 마이그레이션](https://rcloneview.com/support/blog/migrate-put-io-to-google-drive-rcloneview)
- [OAuth 토큰 만료 클라우드 동기화 오류 해결](https://rcloneview.com/support/blog/fix-oauth-token-expired-cloud-sync-rcloneview)

<CloudSupportGrid />
