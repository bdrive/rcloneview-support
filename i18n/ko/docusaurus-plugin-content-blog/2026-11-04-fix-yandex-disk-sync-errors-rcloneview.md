---
slug: fix-yandex-disk-sync-errors-rcloneview
title: "Yandex Disk 동기화 오류 해결 — RcloneView로 실패한 전송 진단하고 해결하기"
authors:
  - kai
description: "RcloneView로 Yandex Disk 동기화 오류를 해결하세요: OAuth 재인증, 체커·재시도 조정, DEBUG 로그 확인, Dry Run과 Folder Compare로 결과 검증까지."
keywords:
  - Yandex Disk 동기화 오류 해결
  - Yandex Disk 전송 실패
  - Yandex Disk OAuth 재인증
  - RcloneView Yandex Disk 문제 해결
  - Yandex Disk 동기화 안 됨
  - rclone Yandex 오류
  - 클라우드 동기화 문제 해결
  - rclone 디버그 로그
  - Yandex Disk 백업 실패
  - Yandex Disk 작업 오류
tags:
  - RcloneView
  - yandex-disk
  - troubleshooting
  - tips
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Yandex Disk 동기화 오류 해결 — RcloneView로 실패한 전송 진단하고 해결하기

> Yandex Disk 작업이 왜 오류로 끝났는지 찾고, 전부 다시 복사하지 않고 고치는 단계별 방법입니다.

Job History에서 Yandex Disk 작업이 「Errored」로 끝나면 속상합니다. 밤새 돌린 작업이라면 더욱 그렇습니다. 대부분의 실패는 몇 가지로 나뉩니다. 만료된 로그인, 느린 백엔드에 비해 과도한 병렬 처리, 경로와 필터 실수입니다. RcloneView는 이를 구분하는 데 필요한 설정과 로그를 제공합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Job History와 Log 탭부터 확인하기

**Job History**를 열어 실패한 실행을 찾으세요. 상태, 소요 시간, 전체 크기, 파일 수를 보면 작업이 즉시 실패했는지(인증 또는 경로 문제일 가능성) 중간에 실패했는지(스로틀링 또는 특정 파일 문제일 가능성) 알 수 있습니다. 그다음 하단 Info View의 **Log** 탭에서 실패 시점 전후의 타임스탬프 항목을 확인하세요.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView의 Job History에서 오류로 끝난 실행" class="img-large img-center" />

로그가 충분하지 않다면 Settings > Embedded Rclone에서 rclone Logging을 켜고 레벨을 DEBUG로 설정한 뒤 Restart Embedded Rclone을 클릭하고 문제를 재현하세요. 생성된 파일에서 어떤 작업이 실패했는지 정확히 볼 수 있습니다.

## 만료되었거나 거부된 로그인 재인증하기

Yandex Disk는 브라우저에서 OAuth로 연결됩니다. 폴더 목록 조회가 즉시 실패하거나 모든 파일에서 인증 메시지와 함께 오류가 나면 Remote Manager를 열어 Yandex Disk 리모트를 편집하고 브라우저 로그인을 다시 완료하세요. 그런 다음 Explorer 패널을 새로 고칩니다. 목록이 정상적으로 표시되면 작업을 실행하기 전에 연결이 확인된 것입니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 리모트를 편집하고 재인증하는 화면" class="img-large img-center" />

## 느린 백엔드에 맞게 작업 설정 조정하기

큰 작업에서만 오류가 나타난다면 부하를 낮추세요. Sync 마법사의 Advanced Settings에서 파일 전송 수를 줄이고, 느린 백엔드에서는 equality checkers를 4 이하로 유지하세요(기본값은 8). 전체 동기화 재시도 기본값 3회는 일시적 오류에 유용하므로 켜 둔 채로 두세요. 크기뿐 아니라 내용을 확인해야 한다면 checksum 사용을 고려하세요.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView의 고급 작업 설정과 스케줄" class="img-large img-center" />

## 다시 복사하지 않고 수정 결과 확인하기

**Dry Run**으로 아직 전송될 항목을 확인한 뒤 작업을 다시 실행하세요. **Compare**를 열어 Yandex Disk를 원본과 비교하면 left-only 또는 different 파일이 남은 항목을 보여 주며, 그 파일만 복사할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="남은 차이를 확인하는 Folder Compare" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Job History와 Log 탭에서 실패한 실행을 살펴보세요.
3. 목록 조회가 실패하면 Yandex Disk 리모트를 재인증하세요.
4. 전송 수와 체커를 낮추고 Dry Run 후 다시 실행하여 Compare 하세요.

체계적인 진단은 막연한 「Errored」 상태를 짧고 해결 가능한 목록으로 바꿔 줍니다.

---

**관련 가이드:**

- [Yandex Disk 용량 가득 참 오류 해결](https://rcloneview.com/support/blog/fix-yandex-disk-quota-full-errors-rcloneview)
- [Yandex Disk 클라우드 동기화 및 백업 관리](https://rcloneview.com/support/blog/manage-yandex-disk-cloud-sync-backup-rcloneview)
- [Yandex Disk를 Google Drive와 S3로 동기화](https://rcloneview.com/support/blog/sync-yandex-disk-google-drive-s3-rcloneview)

<CloudSupportGrid />
