---
slug: fix-slow-s3-bucket-listing-many-small-files-rcloneview
title: "작은 파일이 많은 S3 버킷의 느린 목록 조회와 동기화 해결 — RcloneView로 튜닝하기"
authors:
  - morgan
description: "작은 파일이 많은 버킷에서 S3 동기화와 목록 조회가 느릴 때, RcloneView에서 checker, 전송 수, 필터를 조정하고 Dry Run으로 확인하세요."
keywords:
  - 작은 파일 S3 동기화 느림
  - S3 버킷 목록 조회 느림
  - rclone checkers 튜닝
  - S3 수백만 파일 동기화
  - RcloneView S3
  - S3 동기화 개선
  - 작은 파일 전송 느림
  - S3 호환 동기화 성능
tags:
  - RcloneView
  - troubleshooting
  - tips
  - s3
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 작은 파일이 많은 S3 버킷의 느린 목록 조회와 동기화 해결 — RcloneView로 튜닝하기

> 작은 파일이 수십만 개 있는 버킷의 동기화가 느린 이유는 대역폭이 아니라 객체당 오버헤드 때문이며, 몇 가지 작업 설정으로 개선할 수 있습니다.

사진가의 프록시 폴더나 애플리케이션 로그 아카이브에는 아주 많은 작은 객체가 쌓일 수 있습니다. 각 객체마다 목록 항목, 비교, 요청이 필요하므로 네트워크가 한가해도 동기화는 느리게 진행됩니다. RcloneView는 작업 마법사에서 관련 rclone 설정을 제공하므로 플래그를 직접 작성하지 않고도 조정할 수 있습니다. S3, Azure, Backblaze B2를 FREE 라이선스에서 읽기/쓰기 모두 연결할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 작은 파일이 느린 이유

큰 파일에서는 처리량이 지배적입니다. 작은 파일에서는 요청 수가 지배적입니다. 모든 객체가 목록에 나열되고, 크기·시간·체크섬으로 비교되며, 개별적으로 업로드됩니다. 이때의 느림은 대개 요청당 지연 시간과 제공업체 측 속도 제한 때문이므로 대역폭을 늘려도 효과가 없습니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="파일 수와 속도를 보여주는 Transferring 탭" class="img-large img-center" />

실행 중에 Transferring 탭을 여세요. 속도는 낮은데 파일 수가 꾸준히 증가한다면 대역폭이 아니라 요청 수가 병목입니다.

## 작업 설정 조정

동기화 마법사의 2단계에서 파일 전송 수를 늘리면 더 많은 객체가 병렬로 이동합니다. equality checkers의 기본값은 8이며, 느리거나 제한이 걸리는 백엔드에서는 4 이하를 사용하라는 것이 권장 사항입니다. 동시 확인이 너무 많으면 제한이 걸려 오히려 상황이 나빠질 수 있기 때문입니다. 한 번에 하나의 값만 변경하고 다시 실행하세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="전송 수와 checker에 대한 작업 고급 설정" class="img-large img-center" />

체크섬 비교를 활성화하면 크기 확인에 더해 해시 계산이 추가되므로, 속도보다 무결성이 중요할 때만 사용하세요. 일시적인 오류로 긴 작업이 중단되지 않도록 재시도 설정은 기본값 3으로 유지하세요.

## 작업량 줄이기

3단계 필터는 목록 조회 부하를 줄여 줍니다. 최대 파일 연령으로 오래된 객체를 건너뛰고, 필요 없는 폴더를 제외하고, 미리 정의된 필터로 특정 파일 형식을 제외하세요. 거대한 작업 하나를 접두사별 작업으로 나누면 실패를 격리하고 다시 실행하기도 쉬워집니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView에서 튜닝한 동기화 작업 실행" class="img-large img-center" />

필터를 변경한 후에는 항상 Dry Run을 실행해, 실제 실행 전에 어떤 파일이 복사되거나 삭제될지 정확히 확인하세요.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. 느린 작업을 열고 Transferring 탭을 확인해 요청 수가 병목인지 확인합니다.
3. 전송 수와 checker를 하나씩 조정하고, 필터를 추가해 범위를 줄입니다.
4. Job History에서 소요 시간을 비교하고 가장 좋은 설정을 유지합니다.

작고 체계적인 변경이 밤새 걸리던 동기화를 일상적인 작업으로 바꿔 줍니다.

---

**관련 가이드:**

- [S3 멀티파트 업로드 실패 해결](https://rcloneview.com/support/blog/fix-s3-multipart-upload-failures-rcloneview)
- [느린 클라우드 전송 속도 해결](https://rcloneview.com/support/blog/fix-slow-cloud-transfers-speed-rcloneview)
- [클라우드 API 속도 제한 오류 해결](https://rcloneview.com/support/blog/fix-cloud-api-rate-limiting-errors-rcloneview)

<CloudSupportGrid />
