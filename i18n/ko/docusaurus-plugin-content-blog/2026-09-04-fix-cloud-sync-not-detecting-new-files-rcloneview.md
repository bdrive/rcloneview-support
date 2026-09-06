---
slug: fix-cloud-sync-not-detecting-new-files-rcloneview
title: "새 파일을 감지하지 못하는 클라우드 동기화 문제 해결 — RcloneView로 해결하기"
authors:
  - jay
description: "캐시 설정, 필터, 새로고침 동작을 조정하여 RcloneView에서 새 파일이나 최근 변경된 파일을 놓치는 클라우드 동기화 작업을 해결하세요."
keywords:
  - 클라우드 동기화 새 파일 감지 안됨
  - rcloneview 동기화 파일 누락
  - 동기화 작업 업데이트 안됨 해결
  - 디렉토리 캐시 오래된 목록
  - rcloneview 문제 해결
  - 클라우드 동기화 새로고침 문제
  - 새 파일 동기화 안됨
  - rclone 동기화 감지 문제 해결
  - 작업이 변경 사항을 반영하지 않음
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - job-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 새 파일을 감지하지 못하는 클라우드 동기화 문제 해결 — RcloneView로 해결하기

> 동기화 작업이 오류 없이 완료되었는데도 새로 추가된 파일이 남아있다면, 그 원인은 거의 항상 연결이 끊긴 것이 아니라 오래된 폴더 목록입니다.

자주 발생하는 지원 패턴이 있습니다: 동기화 작업이 오류 없이 완료되지만, 몇 분 전에 소스 폴더에 추가된 파일이 대상에 전혀 나타나지 않는 경우입니다. 데이터 손실처럼 보이지만, 대부분의 경우 작업이 리모트의 현재 상태 대신 캐시된 디렉토리 목록을 읽었을 뿐입니다. RcloneView는 추측 없이 이를 진단하고 해결할 수 있는 도구를 제공합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Explorer 보기가 단순히 오래된 것인지 확인하기

작업 설정을 건드리기 전에, 파일이 단순히 보기에서 숨겨진 것이 아니라 실제로 동기화에서 누락되었는지 확인하세요. Explorer 패널에서 소스 리모트를 열고 F5(또는 macOS에서는 Cmd+R)를 눌러 강제로 Reload하세요. 파일이 추가된 이후 새로고침하지 않았다면 RcloneView의 파일 목록이 폴더의 오래된 스냅샷을 유지하고 있을 수 있으며, 이것만으로도 놀라울 만큼 많은 "파일 누락" 신고가 해결됩니다.

수동으로 새로고침한 후 파일이 나타나지만 동기화 작업이 마지막 실행에서 여전히 이를 건너뛰었다면, 문제는 Explorer 보기가 아니라 작업 자체의 필터링이나 캐시 동작에 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView에서 새로운 스캔을 강제하기 위해 동기화 작업을 수동으로 실행하기" class="img-large img-center" />

## 필터 규칙과 Max File Age 설정 검토하기

동기화 마법사의 3단계에서는 Max File Age 필터를 설정할 수 있는데, 작업을 테스트한 후 공격적인 값을 그대로 남겨두기 쉽습니다. Max File Age가 너무 좁게 설정되어 있으면 해당 범위를 벗어나는 파일 — 이전 클라우드 복사본에서 물려받은 오래된 타임스탬프를 가진 일부 새로 추가된 파일을 포함해서 — 이 실행에서 조용히 제외됩니다. 영향을 받는 동기화의 Edit Job을 열고 Filtering Settings 단계에서 이름, 확장자, 경로별로 새 파일을 제외할 수 있는 Max File Age, Max File Size 또는 사용자 지정 필터 규칙이 있는지 확인하세요.

RcloneView는 Windows, macOS, Linux에서 하나의 창으로 90개 이상의 제공업체를 마운트하고 동기화하므로, 로컬-클라우드 작업이든 클라우드 간 작업이든 동일한 필터링 로직이 적용됩니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="새 파일을 제외할 수 있는 동기화 필터 설정 검토하기" class="img-large img-center" />

## 마운트 디렉토리 캐시 지연 배제하기

"누락된" 파일이 직접 리모트를 탐색하는 대신 마운트된 드라이브 뒤에 있다면, 마운트 설정의 Dir Cache Time 설정이 보통의 원인입니다. 디렉토리 캐시 시간이 길면 탐색 속도는 빨라지지만, 해당 캐시가 만료될 때까지 마운트된 보기가 다른 곳에서 추가된 파일을 반영하지 않는다는 의미이기도 합니다. 최신 상태가 원시 탐색 속도보다 중요한 리모트의 경우 Mount Manager에서 Dir Cache Time을 낮추거나, 수동으로 마운트를 해제했다가 다시 마운트하여 즉시 새로고침을 강제하세요.

그 후 동기화 작업에서 Dry Run을 실행하세요 — 이제 새 파일로 인식되는 파일 목록이 정확히 표시되므로, 실제 전송을 진행하기 전에 수정 사항을 확인할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="감지 설정을 수정한 후 올바르게 실행된 동기화를 보여주는 작업 기록" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView 다운로드**.
2. 소스 리모트에서 강제로 Reload(F5)하여 오래된 Explorer 보기를 배제하세요.
3. Edit Job을 열고 Filtering Settings에서 새 파일을 제외하는 Max File Age나 사용자 지정 규칙이 있는지 확인하세요.
4. 마운트된 리모트의 경우 Mount Manager에서 Dir Cache Time을 낮춘 다음 다시 마운트하고 Dry Run으로 작업을 다시 실행하여 확인하세요.

대부분의 "파일 누락" 동기화 문제는 실제 전송 실패가 아니라 캐시된 목록이나 간과된 필터에서 비롯됩니다. RcloneView의 Dry Run과 Job History를 사용하면 수정 사항이 제대로 작동했는지 빠르게 확인할 수 있습니다.

---

**관련 가이드:**

- [필터 규칙 — RcloneView의 선택적 동기화](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Dry Run — RcloneView에서 클라우드 동기화 미리보기](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [예약된 동기화가 실행되지 않는 문제 해결 — RcloneView로 해결하기](https://rcloneview.com/support/blog/fix-scheduled-sync-not-running-rcloneview)

<CloudSupportGrid />
