---
slug: fix-embedded-rclone-crash-restart-rcloneview
title: "임베디드 Rclone 충돌 수정하기 — RcloneView로 재시작 및 복구하기"
authors:
  - tayson
description: "재시작 절차, 로깅, 외부 rclone 대체 옵션을 사용하여 RcloneView에서 임베디드 rclone 연결 끊김 문제를 해결하세요."
keywords:
  - 임베디드 rclone 충돌
  - rclone 연결 끊김
  - RcloneView 문제 해결
  - 임베디드 rclone 재시작
  - rclone rc api 오류
  - rclone 로그 파일
  - 외부 rclone 연결
  - rcloneview 연결 안됨
  - rclone 셀프 업데이트
  - rclone 오류 수정
tags:
  - RcloneView
  - troubleshooting
  - tips
  - reference
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 임베디드 Rclone 충돌 수정하기 — RcloneView로 재시작 및 복구하기

> 하단 정보 표시줄에 버전 번호 대신 "연결 끊김"이 표시되면 임베디드 rclone 엔진이 응답을 멈춘 것입니다 — 작업 기록을 잃지 않고 복구하는 방법을 알아보세요.

RcloneView는 앱과 로컬 API 주소(기본값 `http://127.0.0.1:5582`)로 통신하는 임베디드 rclone 바이너리와 함께 제공됩니다. 대부분의 경우 이 연결은 보이지 않습니다 — 항상 잘 작동하기 때문에 신경 쓸 필요가 없습니다. 하지만 임베디드 프로세스가 OS 리소스 제한, 충돌하는 로컬 방화벽 규칙, 손상된 설정 잠금으로 인해 종료되면, 하단 정보 표시줄의 연결 정보가 버전을 표시하지 않게 되고 Explorer 패널의 모든 리모트가 동시에 응답하지 않게 됩니다. 이는 단일 리모트의 인증 문제가 아니라 임베디드 rclone 충돌을 다루고 있다는 신호입니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 단일 리모트 문제가 아니라 임베디드 엔진 문제인지 확인하기

가장 빠르게 구분하는 방법: 나머지 패널은 정상 작동하는데 탭이나 리모트 하나만 로드에 실패한다면 리모트별 문제입니다 — 잘못된 OAuth 토큰, 잘못된 자격 증명, 제공업체 장애 등입니다. 모든 패널의 모든 리모트가 동시에 응답을 멈추고 하단 정보 표시줄의 rclone 버전이 사라진다면 임베디드 프로세스 자체가 중단된 것입니다. Settings 탭 > Embedded Rclone을 확인하세요. 버전 필드가 비어 있거나 오류가 표시되면 확인된 것입니다.

RcloneView는 하나의 창에서 Windows, macOS, Linux 전반에 걸쳐 90개 이상의 제공업체를 마운트하고 동기화하며, 이 모든 것이 단일 임베디드 프로세스를 통해 처리되기 때문에 여기서 발생하는 충돌이 제공업체별 오류가 아니라 전체 중단처럼 보이는 것입니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView settings tab showing embedded rclone connection status" class="img-large img-center" />

## 임베디드 프로세스 재시작하기

Settings 탭 > Embedded Rclone으로 이동하여 재시작 컨트롤을 사용하세요 — RcloneView 자체를 종료하고 다시 열 필요 없이 번들된 바이너리를 다시 실행합니다. 충돌이 발생했을 때 전송 중이던 작업은 Job History에서 Completed가 아닌 Errored로 표시되므로, 이후 확인하여 완료되지 않은 작업을 다시 실행하세요. RcloneView의 Retry entire sync if fails 설정(각 작업의 Advanced Settings 단계에 있음)은 이런 종류의 중단을 이후 실행에서 자동으로 흡수하는 데 도움이 됩니다.

재시작이 계속 실패하면 Settings > Embedded Rclone > Local Rclone location에서 rclone 바이너리 경로를 확인하세요. 이동되었거나, 삭제되었거나, 백신 프로그램에 의해 격리된 바이너리를 가리키는 경로는 재시작 버튼을 클릭해도 프로세스가 실행되지 않게 만듭니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView job scheduling and retry settings" class="img-large img-center" />

## 반복되는 충돌을 위한 로깅 활성화하기

일회성 충돌은 깊이 조사할 필요가 거의 없지만, 반복되는 충돌은 다릅니다. Settings > Embedded Rclone에서 Enable rclone Logging을 켜고 Log level을 DEBUG로 설정한 다음 임베디드 프로세스를 재시작하여 새 로그 파일을 시작하세요. 충돌을 재현한 후 하단 Info View의 Log 탭이나 Log folder에 설정된 경로의 로그 파일을 직접 확인하세요. 해석에 도움이 필요하면 RcloneView 지원팀이 rcloneview@bdrive.com에서 로그 파일을 접수합니다 — 정확한 오류 라인이 중요하므로 요약이 아닌 DEBUG 수준 로그를 첨부하세요.

또한 동일한 설정 섹션의 Global Rclone Flags 필드에 이전 문제 해결 세션에서 남은 잘못되거나 호환되지 않는 플래그가 없는지 확인하세요 — 잘못된 플래그는 매번 임베디드 프로세스가 정상적으로 시작되는 것을 방해할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing errored jobs after a connection interruption" class="img-large img-center" />

## 외부 Rclone 인스턴스로 대체하기

특정 머신에서 임베디드 엔진이 계속 충돌한다면 — 흔히 리소스가 제한된 하드웨어에서 발생합니다 — 대신 RcloneView를 외부 rclone 인스턴스에 연결할 수 있습니다. 터미널에서 `rclone rcd --rc-user=<user> --rc-pass=<pass> --rc-addr=127.0.0.1:5572`를 실행한 다음, 해당 주소와 자격 증명을 사용하여 Settings 탭 > Connect Manager > New Connection에 추가하세요. 이렇게 하면 rclone 프로세스의 수명 주기가 RcloneView 앱과 분리되어, GUI 문제가 전송 엔진을 중단시킬 수 없고 그 반대도 마찬가지입니다.

## 시작하기

1. 새로 설치가 필요하다면 [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Settings > Embedded Rclone에서 버전 필드가 비어 있는지 확인하여 충돌을 확인하세요.
3. 재시작 컨트롤을 사용한 다음 Job History에서 Errored로 표시된 항목을 검토하세요.
4. 충돌이 반복되면 DEBUG 로깅을 활성화하고, 계속 발생하면 외부 rclone 연결로 전환하세요.

충돌된 임베디드 프로세스는 모든 리모트가 한 번에 응답을 멈추기 때문에 심각해 보이지만, 해결책은 거의 항상 재시작 한 번이면 충분합니다 — 그리고 로깅은 다음에 문제가 생겼을 때 미스터리를 한 줄짜리 진단으로 바꿔줍니다.

---

**관련 가이드:**

- [Rclone 설정 비밀번호 오류 수정하기 — RcloneView로 암호화된 설정 문제 해결하기](https://rcloneview.com/support/blog/fix-rclone-config-password-errors-rcloneview)
- [Rclone 전송의 높은 메모리 및 CPU 사용량 문제 수정하기 — RcloneView 활용](https://rcloneview.com/support/blog/fix-rclone-high-memory-cpu-usage-rcloneview)
- [Rclone 셀프 업데이트 — RcloneView에서 임베디드 엔진을 최신 상태로 유지하기](https://rcloneview.com/support/blog/rclone-self-update-rcloneview)

<CloudSupportGrid />
