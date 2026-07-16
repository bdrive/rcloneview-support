---
slug: log-debug-troubleshoot-transfers-rcloneview
title: "클라우드 전송 로그 및 디버그 — RcloneView에서 문제 해결하기"
authors:
  - tayson
description: "RcloneView의 로깅 및 디버그 기능을 활용해 전송 문제를 진단하는 방법을 익혀보세요. 로그를 읽고, 디버그 모드를 활성화하고, 클라우드 동기화 문제를 체계적으로 해결하는 방법을 배웁니다."
keywords:
  - cloud transfer logs
  - debug mode transfer issues
  - transfer troubleshooting
  - rcloneview logging
  - debug cloud sync
  - transfer error diagnosis
  - rclone logging configuration
  - troubleshoot cloud transfers
tags:
  - feature
  - troubleshooting
  - monitoring
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 클라우드 전송 로그 및 디버그 — RcloneView에서 문제 해결하기

> 전송 실패는 사용자를 답답하게 만들지만, 알 수 없는 오류 메시지는 더욱 답답하게 만듭니다. RcloneView의 포괄적인 로깅 및 디버그 기능은 무엇이 잘못되었는지, 그리고 어떻게 고쳐야 하는지를 정확히 보여줍니다.

파일 전송이 중간에 멈추고 알 수 없는 타임아웃 메시지가 나타납니다. 동기화 작업은 성공했다고 보고하지만 파일은 여전히 동기화되지 않은 상태입니다. 예약된 백업이 조용히 시간을 놓쳤습니다. 실제로 무슨 일이 일어났는지 알 수 없다면 문제 해결은 추측에 불과합니다. RcloneView의 로깅 및 디버그 기능은 불투명함을 명확함으로 바꿔주며, 어떤 파일이 성공했고 어떤 파일이 실패했는지, 그리고 정확히 그 이유가 무엇인지 보여줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView에서 디버그 모드 활성화하기

디버그 모드는 RcloneView와 rclone이 수행하는 모든 작업을 노출합니다. 환경설정 메뉴에서 Logging > Debug Level로 이동한 뒤 "DEBUG"로 설정하면 됩니다. 이를 통해 네트워크 요청, 인증 흐름, 파일 비교, 권한 확인 내용을 최대 상세 수준으로 기록할 수 있습니다.

활성화되면 RcloneView의 로그는 모든 트랜잭션을 기록합니다. 이제 문제가 되는 전송을 실행해 보세요. 각 API 호출, 파일 확인, 결정 사항이 문서화됩니다. 이러한 상세함은 인증 타이밍 문제, 권한 거부, 공급자별 API 특이사항, 특정 지점에서의 네트워크 실패와 같은 미묘한 문제를 진단하는 데 도움이 됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView preferences and logging configuration" class="img-large img-center" />

## RcloneView 로그 읽고 해석하기

RcloneView는 로그를 사용자 구성 디렉터리에 저장합니다. Windows에서는 `%APPDATA%/RcloneView/logs/`에서 찾을 수 있습니다. Linux/Mac에서는 `~/.config/rcloneview/logs/`를 확인하세요. 각 작업은 타임스탬프가 찍힌 로그 파일을 생성합니다. 관련 로그를 텍스트 편집기에서 여세요.

살펴봐야 할 주요 섹션은 다음과 같습니다. "Authentication"은 자격 증명이 올바르게 작동했는지 보여줍니다. "File Enumeration"은 RcloneView가 발견한 파일과 그 속성을 보여줍니다. "Transfer" 로그는 개별 파일 업로드/다운로드를 바이트 수와 소요 시간과 함께 보여줍니다. "Errors" 섹션은 권한 거부, 할당량 부족, 체크섬 불일치, 타임아웃 발생과 같은 문제를 강조합니다.

문제와 일치하는 키워드를 검색하세요. 타임아웃 오류를 찾고 있나요? "timeout" 또는 "deadline exceeded"를 검색하세요. 권한 실패를 조사 중인가요? "permission denied" 또는 "access denied"를 검색하세요. 대부분의 오류는 일관되게 반복되며, 동일한 전송에서 여러 번 나타납니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing detailed transfer records" class="img-large img-center" />

## 고급 디버깅: Verbose 모드와 Trace 로깅

표준 디버그 모드로는 세부 정보가 부족할 때, 디버그 레벨과 함께 Verbose 모드(Logging > Verbose)를 활성화하세요. Verbose 모드는 HTTP 헤더, 요청 본문, 원시 API 응답을 출력합니다. 이 기능은 공급자별 문제를 조사할 때 사용하세요. 예를 들어 Google Drive가 이 파일을 왜 거부하는지, S3가 왜 전송 속도를 제한하는지 등을 확인할 수 있습니다.

전문적인 진단을 위해서는 Trace 모드(최고 로깅 수준)를 활성화하세요. Trace는 모든 시스템 호출, 메모리 작업, 네트워크 패킷 세부 정보를 캡처합니다. 이는 로그 파일을 빠르게 채우지만, 네트워크 스택이나 파일 시스템 상호작용의 깊은 문제를 드러냅니다. Trace 모드는 통제된 조건에서 재현 가능한 문제에 한해 사용하세요.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView job configuration with logging options" class="img-large img-center" />

## 로그로 드러나는 흔한 문제들

로그는 반복되는 문제를 정확히 짚어줍니다. "Insufficient quota" 오류는 클라우드 공급자의 저장 공간이 가득 찼다는 의미입니다. "Rate limit exceeded"는 API 호출 한도에 도달했다는 것을 나타냅니다. 병렬 스레드를 줄이거나 요청 간격을 늘리세요. "Checksum mismatch"는 전송 중 파일 손상이나 공급자 캐싱 문제를 보여줍니다.

네트워크 타임아웃은 "context deadline exceeded" 또는 "connection reset by peer"로 나타납니다. 타임아웃 값을 늘리거나 전송 속도를 줄이세요. 권한 오류 "403 Forbidden"은 자격 증명 문제나 폴더 권한 부족을 의미합니다. 로그를 읽고 나면 각 오류 유형은 특정 해결책과 연결됩니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneView real-time transfer monitoring with detailed metrics" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Preferences > Logging > Debug Level을 통해 디버그 모드를 활성화하세요.
3. 문제가 되는 전송을 실행하고 자연스럽게 실패하게 두세요.
4. 해당 로그 파일을 열고 오류 키워드를 검색해 근본 원인을 파악하세요.

전송 실패를 더 이상 알 수 없는 블랙박스처럼 취급하지 마세요. RcloneView의 로깅은 문제 해결을 답답함에서 체계적인 문제 해결 과정으로 바꿔줍니다. 답은 로그 안에 있습니다. 어디를 봐야 하는지만 알면 됩니다.

---

**관련 가이드:**

- [느린 클라우드 전송 해결 — RcloneView에서 속도 최적화하기](https://rcloneview.com/support/blog/fix-slow-cloud-transfers-speed-rcloneview)
- [클라우드 동기화 멈춤 또는 정지 문제 해결 — RcloneView에서 중단된 전송 해결하기](https://rcloneview.com/support/blog/fix-cloud-sync-stuck-hanging-rcloneview)
- [클라우드 API 속도 제한 오류 해결 — RcloneView에서 공급자 제한 해결하기](https://rcloneview.com/support/blog/fix-cloud-api-rate-limiting-errors-rcloneview)

<CloudSupportGrid />
