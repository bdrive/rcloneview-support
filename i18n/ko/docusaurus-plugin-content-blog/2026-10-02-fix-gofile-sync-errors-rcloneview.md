---
slug: fix-gofile-sync-errors-rcloneview
title: "Gofile 동기화 오류 해결 — RcloneView로 토큰, 업로드, 목록 문제 해결하기"
authors:
  - jay
description: "RcloneView의 작업 기록, 로그, 내장 터미널을 사용해 잘못된 토큰, 업로드 실패, 빈 목록 같은 Gofile 동기화 오류를 해결하세요."
keywords:
  - Gofile 동기화 오류 해결
  - Gofile rclone 오류
  - Gofile 잘못된 토큰
  - Gofile 업로드 실패
  - Gofile 문제 해결
  - RcloneView Gofile
  - Gofile 계정 API 토큰
  - rclone Gofile 리모트
  - 클라우드 동기화 문제 해결
  - Gofile GUI
tags:
  - RcloneView
  - gofile
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gofile 동기화 오류 해결 — RcloneView로 토큰, 업로드, 목록 문제 해결하기

> Gofile 동기화 실패의 대부분은 오래된 토큰, 잘못된 루트 폴더, 재시도가 필요한 전송이라는 몇 가지 원인으로 귀결되며, RcloneView는 작업 기록과 로그에서 각각을 확인할 수 있게 해 줍니다.

Gofile은 브라우저 로그인이 아닌 계정 API 토큰으로 인증하므로, 오류는 주로 "unauthorized" 메시지나 비어 보이는 폴더로 나타납니다. 명령줄로 추측하는 대신 RcloneView의 작업 기록, 로그, 터미널을 사용하면 어느 단계에서 실패했는지 정확히 확인할 수 있습니다. RcloneView는 Windows, macOS, Linux에서 하나의 창으로 90개 이상의 제공업체를 마운트하고 동기화합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 계정 API 토큰부터 확인하기

가장 흔한 실패 원인은 유효하지 않거나 오래된 토큰입니다. Gofile 토큰은 Gofile 프로필 페이지의 Account API Token 필드에서 찾을 수 있습니다. 토큰을 재발급했거나 붙여넣을 때 끝에 공백이 들어갔다면 모든 요청이 거부됩니다.

Remote 탭에서 Remote Manager를 열고 Gofile 리모트를 편집한 뒤 토큰을 다시 붙여넣으세요. 그런 다음 Explorer 패널에서 리모트의 루트를 탐색합니다. 목록이 로드되면 인증은 정상이며 문제는 다른 곳에 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 Gofile 리모트를 편집하고 계정 API 토큰을 다시 입력하는 모습" class="img-large img-center" />

## 작업 기록과 로그 확인하기

예약 작업이나 수동 작업이 Errored로 끝나면 Job History를 여세요. 각 항목에는 실행 유형, 소요 시간, 상태, 크기, 파일 수가 기록되어 있어, 작업이 즉시 실패했는지(대개 인증 문제) 중간에 실패했는지(대개 네트워크 또는 파일 단위 문제) 알 수 있습니다.

더 자세한 내용은 Settings > Embedded Rclone에서 rclone 로깅을 활성화하고 레벨을 DEBUG로 설정한 뒤 내장 rclone을 재시작하고 실패를 재현하세요. 로그에는 각 파일에 대해 반환된 정확한 오류가 표시됩니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Errored 상태의 Gofile 동기화 작업을 보여주는 RcloneView 작업 기록" class="img-large img-center" />

## Dry Run으로 업로드 실패 원인 분리하기

일부 파일만 실패한다면 먼저 Dry Run을 실행하세요. 아무것도 변경하지 않고 복사되거나 삭제될 항목을 나열하므로 원본과 대상이 예상과 같은지 확인할 수 있습니다. 그런 다음 동기화 마법사 2단계에서 파일 전송 수를 낮추고 "Retry entire sync if fails"는 기본값인 3으로 유지하세요. 병렬 전송을 줄이면 간헐적인 업로드 오류가 해소되는 경우가 많습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView에서 전송 설정을 조정한 뒤 Gofile 동기화 작업을 실행하는 모습" class="img-large img-center" />

## Folder Compare로 확인하기

다시 실행한 후 Compare를 사용해 로컬 폴더와 Gofile 폴더를 나란히 비교하세요. 왼쪽에만 있는 파일, 오른쪽에만 있는 파일, 다른 파일 필터로 아직 누락된 항목을 정확히 확인할 수 있으므로 모든 파일을 다시 업로드할 필요가 없습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Gofile에 없는 파일을 강조 표시하는 Folder Compare 화면" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Remote Manager에서 Gofile Account API Token을 다시 입력하고 루트 폴더가 표시되는지 확인하세요.
3. 작업이 Errored이면 Job History를 검토하고 DEBUG 로깅을 활성화하세요.
4. Dry Run을 실행하고 동시 전송 수를 줄인 뒤 Folder Compare로 확인하세요.

토큰, 로그, 차이점을 명확히 파악하면 막연한 Gofile 실패도 빠르게 해결할 수 있습니다.

---

**관련 가이드:**

- [Gofile 스토리지 관리 — RcloneView로 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-gofile-cloud-sync-backup-rcloneview)
- [RcloneView로 Put.io 동기화 오류 해결](https://rcloneview.com/support/blog/fix-put-io-sync-errors-rcloneview)
- [RcloneView로 클라우드 동기화 멈춤 및 중단 해결](https://rcloneview.com/support/blog/fix-cloud-sync-stuck-hanging-rcloneview)

<CloudSupportGrid />
