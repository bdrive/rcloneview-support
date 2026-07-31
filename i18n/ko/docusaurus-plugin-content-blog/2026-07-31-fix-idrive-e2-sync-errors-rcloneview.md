---
slug: fix-idrive-e2-sync-errors-rcloneview
title: "IDrive e2 동기화 오류 해결하기 — RcloneView로 S3 호환 스토리지 문제 해결하기"
authors:
  - kai
description: "액세스 키 문제부터 멈춘 전송, 불일치 파일까지 RcloneView에서 흔히 발생하는 IDrive e2 동기화 오류를 명확한 단계별 해결책으로 해결하세요."
keywords:
  - idrive e2 동기화 오류
  - idrive e2 rcloneview 해결
  - idrive e2 액세스 키 오류
  - idrive e2 연결 시간 초과
  - idrive e2 업로드 실패
  - rcloneview 문제 해결
  - idrive e2 s3 동기화
  - idrive e2 백업 오류
  - s3 호환 스토리지 오류
  - 클라우드 스토리지 문제 해결
tags:
  - RcloneView
  - idrive-e2
  - troubleshooting
  - tips
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# IDrive e2 동기화 오류 해결하기 — RcloneView로 S3 호환 스토리지 문제 해결하기

> IDrive e2 동기화 작업이 자격 증명을 거부하거나, 전송 도중 멈추거나, 파일 불일치를 남기고 있나요? **RcloneView**는 원인을 정확히 파악하고 전송을 다시 진행할 수 있는 가시성을 제공합니다.

IDrive e2는 S3 호환 오브젝트 스토리지 서비스이므로, 대부분의 동기화 문제는 몇 가지 동일한 원인으로 귀결됩니다: 잘못된 액세스 키 쌍, 잘못된 리전 엔드포인트, 또는 도중에 네트워크 문제가 발생한 전송입니다. RcloneView는 FREE 라이선스에서도 IDrive e2에 완전한 읽기/쓰기 권한으로 연결되며, Job History, Log 탭, Dry Run 도구를 통해 무작정 다시 실행하는 대신 작업이 정확히 어디서 실패했는지 짚어낼 수 있습니다. 이 가이드는 가장 흔한 IDrive e2 동기화 오류와 RcloneView 내에서 각각을 해결하는 방법을 다룹니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 액세스 키 또는 인증 거부

IDrive e2 리모트가 갑자기 인증 오류를 반환한다면, 가장 흔한 원인은 RcloneView에서 리모트를 설정한 이후 IDrive e2 측에서 재발급되거나 취소된 액세스 키 ID 또는 시크릿 액세스 키, 또는 계정의 리전과 더 이상 일치하지 않는 엔드포인트 URL입니다.

**해결 방법:**

Remote Manager를 열고 IDrive e2 리모트를 선택한 다음, IDrive e2 대시보드에서 현재 액세스 키 ID와 시크릿 액세스 키를 다시 입력합니다. 엔드포인트 필드가 IDrive e2 계정에 표시된 정확한 리전과 일치하는지 다시 확인하세요. 엔드포인트가 일치하지 않으면 잘못된 키와 동일한 거부가 발생하기 때문입니다. 리모트가 계속 실패하면 삭제한 뒤 New Remote 마법사를 통해 깔끔하게 다시 만드세요.

<img src="/support/images/en/blog/new-remote.png" alt="Reconfiguring an IDrive e2 remote in RcloneView" class="img-large img-center" />

## Job History에서 동기화 작업이 멈추거나 오류로 표시됨

버킷 일부만 복사한 뒤 "Errored"로 표시되거나, 도중에 멈춘 것처럼 보이는 작업은 대개 일시적인 네트워크 끊김, S3 엔드포인트의 일시적인 속도 제한, 또는 나머지 배치를 막는 문제 있는 이름의 단일 객체 때문에 발생합니다.

**해결 방법:**

Job History를 확인하고 "Errored"로 필터링하여 정확히 어떤 실행과 타임스탬프에서 실패했는지 확인하세요. 작업 마법사 Step 2에서 "Retry entire sync if fails" 값을 높이세요 — 기본값 3이 대부분의 일시적인 실패를 자동으로 복구합니다. 특정 객체가 계속 실패한다면 Step 3에서 사용자 지정 필터 규칙으로 제외하고 나머지 전송이 완료되는지 확인하세요.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Adjusting retry settings for an IDrive e2 sync job in RcloneView" class="img-large img-center" />

## 느리거나 제한된 업로드

오브젝트 스토리지 엔드포인트는 동시 스트림을 너무 많이 여는 연결을 제한하는 경우가 있으며, 이는 전송 실패가 아니라 예상보다 훨씬 느리게 진행되는 업로드로 나타납니다.

**해결 방법:**

동기화 마법사 Step 2에서 "Number of file transfers"와 "Number of multi-thread transfers" 값을 낮추세요 — 동시 처리 개수가 높으면 일부 S3 호환 백엔드에서 속도 제한을 유발할 수 있습니다. 변경 후 속도가 안정되는지 Transferring 탭에서 확인하고, 재시도된 파일이 불필요하게 다시 전송되지 않도록 체크섬 비교를 활성화하세요.

## 동기화 후 파일이 일치하지 않음

동기화가 완료된 후 IDrive e2의 객체 수나 크기가 소스와 일치하지 않는다면, 이는 대개 스토리지 측 버그가 아니라 동기화 방향 실수나 의도한 것보다 많은 항목을 제외하는 필터 규칙 때문입니다.

**해결 방법:**

실제 동기화 전에 Dry Run을 실행하여 정확히 무엇이 복사되거나 삭제될지 미리 확인함으로써, 버킷에 영향을 주기 전에 방향 오류를 잡아내세요. 그런 다음 소스와 IDrive e2 리모트 사이에서 Folder Compare를 사용하세요 — Folder Compare의 크기 변화 탐색 도구가 어떤 폴더가 다른지 빠르게 보여주며, 동기화와 비교 모두 RcloneView의 FREE 라이선스에서 사용할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing source and IDrive e2 bucket contents in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. 인증이 실패하는 경우 IDrive e2 리모트를 다시 입력하거나 새로 만듭니다.
3. Job History에서 정확한 실패 지점을 확인하고 재시도, 필터, 스레드 설정을 그에 맞게 조정합니다.
4. 문제를 해결한 후에는 Dry Run과 Folder Compare를 실행하여 앞으로의 동기화가 깨끗한지 확인합니다.

Job History를 먼저 확인하고, Dry Run, 그다음 Compare를 실행하는 짧은 진단 루틴이면 터미널을 열지 않고도 대부분의 IDrive e2 동기화 문제를 해결할 수 있습니다.

---

**관련 가이드:**

- [IDrive e2 스토리지 관리하기 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [IDrive e2를 S3 호환 클라우드 백업으로 관리하기 — RcloneView](https://rcloneview.com/support/blog/manage-idrive-e2-s3-cloud-backup-rcloneview)
- [RcloneView로 S3 멀티파트 업로드 실패 해결하기](https://rcloneview.com/support/blog/fix-s3-multipart-upload-failures-rcloneview)

<CloudSupportGrid />
