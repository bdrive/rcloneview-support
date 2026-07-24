---
slug: fix-koofr-sync-errors-rcloneview
title: "Koofr 동기화 오류 수정 — RcloneView로 문제 해결하기"
authors:
  - morgan
description: "RcloneView에서 로그인 실패부터 용량 초과, 멈춘 전송까지 흔한 Koofr 동기화 오류를 명확한 단계별 해결 방법으로 수정하세요."
keywords:
  - Koofr 동기화 오류
  - RcloneView Koofr 수정
  - Koofr 로그인 실패
  - Koofr 연결 시간 초과
  - Koofr 용량 초과
  - RcloneView 문제 해결
  - Koofr 클라우드 동기화
  - Koofr 백업 오류
  - Koofr rclone
  - 클라우드 스토리지 문제 해결
tags:
  - RcloneView
  - koofr
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Koofr 동기화 오류 수정 — RcloneView로 문제 해결하기

> Koofr 동기화 작업이 멈추거나, 인증에 실패하거나, 파일을 조용히 건너뛰나요? **RcloneView**는 문제를 신속하게 진단하고 해결할 수 있는 가시성과 제어 기능을 제공합니다.

Koofr는 훌륭한 유럽 클라우드 스토리지 옵션이지만, 다른 제공업체와 마찬가지로 동기화 작업에서 인증 문제, 용량 제한, 전송 오류가 발생하여 무엇이 잘못되었는지 궁금해질 수 있습니다. RcloneView의 Job History, Log 탭, Dry Run 도구를 사용하면 추측하는 대신 원인을 손쉽게 찾아낼 수 있습니다. 이 가이드는 가장 흔한 Koofr 동기화 오류와 RcloneView 내에서 각각을 수정하는 방법을 안내합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 로그인 또는 연결 실패

Koofr 리모트가 갑자기 연결되지 않는다면, 저장된 자격 증명이 만료되었거나 Koofr 계정 측에서 취소되었을 수 있으며, 또는 Koofr에서 변경한 비밀번호가 RcloneView에 반영되지 않았을 수 있습니다.

**수정 방법:**

Remote Manager를 열고 Koofr 리모트를 선택한 뒤 자격 증명을 다시 입력하여 연결을 새로 고치세요. 리모트가 계속 연결에 실패하면, 손상된 리모트를 수정하는 대신 삭제한 후 New Remote 마법사를 통해 새 리모트로 다시 추가하세요 — 깨끗하게 재인증하면 대부분의 오래된 세션 문제가 해결됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Koofr remote in RcloneView" class="img-large img-center" />

## 동기화 작업이 중간에 실패함

일부 파일을 복사한 후 멈추거나 Job History에 "Errored" 상태로 표시되는 작업은 대개 일시적인 네트워크 문제, 속도 제한, 또는 나머지 배치를 막고 있는 문제 파일(유효하지 않은 문자, 비정상적으로 긴 경로, 0바이트 잠금 파일) 하나 때문일 수 있습니다.

**수정 방법:**

Job History를 열고 "Errored"로 필터링하여 정확히 어떤 실행이 언제 실패했는지 확인하세요. 작업 마법사 2단계에서 "Retry entire sync if fails" 횟수를 늘리세요 — 기본값 3은 대부분의 일시적인 네트워크 문제를 자동으로 처리합니다. 동일한 파일이 계속 실패한다면, 3단계에서 사용자 지정 필터 규칙을 사용해 일시적으로 제외하고 나머지 동기화가 깔끔하게 완료되는지 확인하세요.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Adjusting retry and advanced sync settings in RcloneView" class="img-large img-center" />

## 스토리지 용량 초과

Koofr로의 업로드가 뚜렷한 오류 없이 동기화 중간에 멈춘다면, 계정이 스토리지 한도에 도달했는지 확인하세요. Koofr는 대부분의 제공업체와 마찬가지로 용량이 가득 차면 새로운 쓰기를 단순히 거부합니다.

**수정 방법:**

내장된 Rclone Terminal 탭에서 `rclone about "koofr:"`를 실행하여 용량 대비 현재 사용량을 확인하세요. 공간이 부족하다면 Folder Compare의 크기 변화 탐색 도구를 사용해 공간을 확보하거나 Koofr 요금제를 업그레이드하기 전에 가장 많은 공간을 차지하는 폴더를 찾으세요.

## 동기화 후 파일이 일치하지 않음

파일이 복사된 것처럼 보이지만 Koofr에서 소스와 다른 크기나 타임스탬프를 보인다면, 이는 대개 Koofr 자체의 버그가 아니라 동기화 방향이나 타이밍 문제입니다.

**수정 방법:**

실제 동기화 전에 Dry Run을 실행하여 정확히 무엇이 복사되거나 삭제될지 미리 확인하세요 — 이렇게 하면 데이터가 영향을 받기 전에 방향 실수를 잡아낼 수 있습니다. 그런 다음 소스와 Koofr 리모트 간에 Folder Compare를 사용해 양쪽이 일치하는지 확인하세요. RcloneView의 동기화와 Folder Compare 도구는 모두 FREE 라이선스에서 사용할 수 있으므로 앱을 벗어나지 않고도 결과를 확인할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing source and Koofr folders in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. 인증이 실패하는 경우 만료된 리모트를 수정하는 대신 Koofr 리모트를 다시 추가합니다.
3. 정확한 실패 지점을 확인하려면 Job History를 확인하고 그에 따라 재시도 또는 필터 설정을 조정합니다.
4. 수정 후 Dry Run과 Folder Compare를 실행하여 이후 동기화가 깨끗한지 확인합니다.

Job History 먼저, 그다음 Dry Run, 그다음 Compare — 이 작은 진단 루틴은 명령줄 없이도 대부분의 Koofr 동기화 문제를 해결합니다.

---

**관련 가이드:**

- [Koofr 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [RcloneView를 사용한 Koofr 멀티 클라우드 허브](https://rcloneview.com/support/blog/koofr-multi-cloud-hub-google-drive-onedrive-dropbox-rcloneview)
- [RcloneView로 Koofr에서 Google Drive로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-koofr-to-google-drive-rcloneview)

<CloudSupportGrid />
