---
slug: equality-checkers-slow-backends-sync-tuning-rcloneview
title: "Number of Equality Checkers — RcloneView에서 느린 백엔드에 맞게 동기화 비교 조정하기"
authors:
  - kai
description: "RcloneView 동기화 마법사의 Number of equality checkers 설정이 무엇을 하는지, 그리고 SFTP, FTP, WebDAV, 요청 제한이 있는 클라우드 리모트에 맞게 조정하는 방법을 알아보세요."
keywords:
  - rclone checkers 설정
  - number of equality checkers
  - rclone checkers GUI
  - 느린 백엔드 동기화 조정
  - SFTP 동기화 성능
  - WebDAV 동기화 느림
  - 클라우드 API 요청 제한 동기화
  - RcloneView 고급 동기화 설정
  - 체크섬 비교 동기화
tags:
  - RcloneView
  - feature
  - performance
  - cloud-sync
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Number of Equality Checkers — RcloneView에서 느린 백엔드에 맞게 동기화 비교 조정하기

> 동기화는 무엇이든 복사하기 전에 어떤 파일이 이미 일치하는지 판단해야 합니다. checker 수는 그 단계가 스토리지에 얼마나 부하를 주는지를 결정합니다.

RcloneView의 모든 Sync 작업은 실제로 전송이 필요한 항목을 파악하기 위해 소스와 대상 파일을 비교하는 것으로 시작합니다. 이 작업은 equality checker가 수행하며, 동기화 마법사의 Step 2에서 병렬로 실행할 개수를 설정할 수 있습니다. 기본값 8은 대부분의 클라우드 제공업체에 적합하지만, 소규모 SFTP 서버, WebDAV 공유, 또는 API 제한이 엄격한 제공업체는 더 적은 값에서 더 잘 동작하는 경우가 많습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Equality Checker가 하는 일

checker는 양쪽의 파일을 살펴보고 같은 파일인지 판단합니다. 기본적으로 비교에는 크기와 수정 시간이 사용됩니다. 같은 단계에서 **Enable checksum**을 선택하면 대신 해시와 크기로 파일을 비교하는데, 더 엄격하지만 모든 파일에 대해 백엔드에 해시를 요청하게 됩니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Opening a sync job in RcloneView to adjust advanced settings" class="img-large img-center" />

checker는 한 번에 복사할 파일 수를 정하는 **Number of file transfers**와는 별개입니다. 대부분이 변경되지 않은 200,000개의 작은 파일을 동기화할 때는 전송보다 확인에 훨씬 많은 시간이 들기 때문에, checker 수가 전송 수보다 더 중요할 수 있습니다.

## Checker 수를 낮춰야 할 때

RcloneView의 권장 사항은 느린 백엔드에 4 이하를 사용하는 것입니다. 대표적인 경우는 다음과 같습니다:

- **사양이 낮은 서버의 SFTP 또는 FTP.** 병렬 확인은 동시 연결이 늘어난다는 뜻이며, 소형 VPS나 오래된 NAS는 추가 세션을 거부하거나 제한할 수 있습니다.
- 메타데이터 요청에 느리게 응답하는 **WebDAV 공유**.
- 병렬 요청이 몰리면 요청 제한 오류와 재시도가 발생하는 **요청 제한이 엄격한 클라우드 제공업체**.

checker를 낮추면 순수한 병렬성 대신 더 안정적인 진행을 얻게 됩니다. 비교 단계에서 로그에 재시도나 연결 오류가 반복된다면 4로, 그다음 2로 낮추고 다시 실행해 보세요.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring sync progress and speed in the RcloneView Transferring tab" class="img-large img-center" />

## 기본값으로 충분한 경우

Amazon S3, Wasabi, Cloudflare R2 같은 S3 호환 오브젝트 스토리지는 보통 8개의 checker를 문제없이 처리하며, 로컬 디스크나 빠른 LAN NAS는 조정이 거의 필요하지 않습니다. RcloneView는 Windows, macOS, Linux에서 하나의 창으로 90+ 제공업체를 마운트하고 동기화하므로, 한 대의 컴퓨터에서 작업마다 다른 checker 값이 필요한 경우가 흔합니다. S3 작업은 기본값으로 두고 SFTP 작업만 낮추세요.

## Dry Run과 Job History로 변화 측정하기

한 번에 하나의 설정만 바꾸세요. Dry Run으로 작업 범위를 확인한 다음 동기화를 실행하고 Job History를 여세요. Job History는 각 실행의 Time Spent, Status, 파일 수를 기록합니다. 같은 작업을 서로 다른 checker 값으로 두 번 실행한 결과를 비교하면 변경이 도움이 되었는지 알 수 있습니다. 재시도 설정(**Retry entire sync if fails**, 기본값 3)이 계속 작동한다면, 이 역시 백엔드가 더 적은 병렬 요청을 원한다는 신호입니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Comparing sync run durations in RcloneView Job History after changing the checker count" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Job Manager를 열고 느린 리모트를 대상으로 하는 동기화 작업을 편집하세요.
3. Step 2에서 **Number of equality checkers**를 4로 설정하고 **Enable checksum**이 필요한지 결정하세요.
4. 작업을 실행한 다음 Job History에서 이전 실행과 Time Spent 및 상태를 비교하세요.

몇 분의 조정만으로 비교 단계에서 멈추던 동기화를 꾸준히 완료되는 동기화로 바꿀 수 있습니다.

---

**관련 가이드:**

- [클라우드 전송 속도 높이기 — RcloneView의 멀티스레드 업로드와 병렬 스트림](https://rcloneview.com/support/blog/multi-threaded-transfers-parallel-streams-rcloneview)
- [느린 클라우드 전송 해결 — RcloneView에서 동기화와 복사 속도 높이기](https://rcloneview.com/support/blog/fix-slow-cloud-transfers-speed-rcloneview)
- [RcloneView로 체크섬 검증 클라우드 마이그레이션하기 (Drive, Dropbox, S3, R2)](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
