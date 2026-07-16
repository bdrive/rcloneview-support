---
slug: fix-onedrive-sync-errors-rcloneview
title: "OneDrive 동기화 오류 해결하기 — RcloneView로 해결하는 방법"
authors:
  - tayson
description: "만료된 OAuth 토큰, 속도 제한부터 전송 멈춤, 체크섬 불일치까지 RcloneView에서 흔히 발생하는 Microsoft OneDrive 동기화 오류를 진단하고 해결합니다."
keywords:
  - onedrive sync errors rcloneview
  - fix onedrive sync issues
  - onedrive rate limit error rclone
  - onedrive authentication expired rcloneview
  - microsoft onedrive transfer stalled
  - fix onedrive connection rcloneview
  - onedrive backup errors troubleshoot
  - cloud sync troubleshooting guide
  - onedrive rclone gui fix
  - resolve onedrive sync failures
tags:
  - RcloneView
  - onedrive
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OneDrive 동기화 오류 해결하기 — RcloneView로 해결하는 방법

> RcloneView에서 발생하는 OneDrive 동기화 오류는 대개 세 가지 원인 중 하나로 귀결됩니다 — 만료된 OAuth 토큰, API 속도 제한, 잘못 구성된 전송 설정 — 그리고 각각은 앱 내에서 명확한 해결 방법이 있습니다.

Microsoft OneDrive는 가장 널리 사용되는 비즈니스 클라우드 플랫폼 중 하나이지만, API 동작 방식으로 인해 간혹 전송이 멈추거나, 미완료되거나, 조용히 실패하는 동기화 오류가 발생할 수 있습니다. RcloneView는 타임스탬프가 기록된 로그, 실시간 전송 모니터링, 세밀한 작업 제어를 통해 명령줄을 사용하지 않고도 이러한 문제를 체계적으로 진단할 수 있는 환경을 제공합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 먼저 로그 탭을 확인하세요

설정을 변경하기 전에 RcloneView 하단의 정보 보기(Info View)에서 **로그(Log)** 탭을 여세요. 모든 전송 및 동기화 작업은 OneDrive API가 반환한 오류 코드를 포함하여 타임스탬프가 기록된 항목을 여기에 기록합니다. `AccessDenied` 또는 `InvalidAuthenticationToken` 메시지는 만료된 OAuth 토큰을 나타내고, `429 Too Many Requests` 메시지는 속도 제한을 나타내며, `EOF` 또는 연결 오류는 대개 OneDrive 자체의 문제가 아니라 네트워크 중단을 의미합니다.

변경 작업을 하기 전에 정확한 오류 유형을 파악하면 시간을 절약할 수 있습니다 — 토큰 문제에 대한 해결 방법은 속도 제한 문제에 대한 해결 방법과 완전히 다릅니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history and log tab in RcloneView for diagnosing OneDrive sync errors" class="img-large img-center" />

## OAuth 토큰이 만료되면 다시 인증하세요

RcloneView의 OneDrive 연결은 OAuth 브라우저 인증을 사용합니다. 액세스 토큰은 활성 세션 중에는 자동으로 갱신되지만, 리모트가 오랫동안 유휴 상태였다면 토큰이 완전히 만료될 수 있으며 — 이 경우 해당 OneDrive 계정을 대상으로 하는 모든 동기화 작업이 인증 오류로 실패하게 됩니다.

해결 방법은 간단합니다: **리모트(Remote)** 탭 > **리모트 관리자(Remote Manager)**로 이동하여 OneDrive 리모트를 찾고 **편집(Edit)**을 클릭하세요. RcloneView가 브라우저 창을 열어 다시 로그인하고 새 토큰을 발급받을 수 있게 해줍니다. 저장한 후에는 실패한 작업을 다시 실행하세요. 작업 구성을 변경할 필요는 없으며 — 자격 증명만 갱신하면 됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="Editing a OneDrive remote in RcloneView Remote Manager to refresh OAuth token" class="img-large img-center" />

## 속도 제한 오류에는 동시 전송 수를 줄이세요

OneDrive는 사용자별 API 속도 제한을 적용하며, 동시 파일 전송 수가 높게 설정된 작업은 `429` 응답을 유발할 수 있습니다 — 이는 부분적인 실패나 재시도를 일으켜 전체 작업 속도를 크게 저하시킵니다. 기본 재시도 횟수(3회)는 종종 속도 제한 문제를 가려서 간헐적인 오류처럼 보이게 만듭니다.

**작업 관리자(Job Manager)**에서 작업을 열고 **편집(Edit)**을 클릭하세요. 2단계(고급 설정)에서 **파일 전송 수(Number of file transfers)**를 기본값에서 2~4로 낮추세요. 작업이 동등성 검사기(equality checker)를 많이 사용하는 경우 해당 값도 줄이는 것이 좋습니다 — 메타데이터 요청에 느리게 응답하는 백엔드의 경우 공식 권장값은 4 이하입니다. 작업을 저장한 후 다시 실행하세요.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Editing OneDrive job settings to reduce concurrent transfers in RcloneView" class="img-large img-center" />

## 실패한 작업을 다시 실행하기 전에 드라이 런을 사용하세요

부분 동기화는 대상 폴더를 일관되지 않은 상태로 남길 수 있습니다 — 일부 파일은 전송되고 일부는 전송되지 않은 상태입니다. 실패한 작업을 다시 실행하기 전에 **드라이 런(dry run)** 모드를 사용하여 어떤 파일이 복사되거나 삭제될지 미리 확인하세요. 드라이 런은 아무런 변경도 하지 않습니다 — 예정된 작업의 전체 목록을 생성하여 이전 작업이 중단된 지점부터 작업이 깔끔하게 완료될지 확인할 수 있게 해줍니다.

작업 관리자에서 작업을 선택하고 실행 옵션에서 **드라이 런(Dry Run)**을 선택하세요. 특히 이전 작업이 실행되는 동안 원본 폴더가 변경되었다면 파일 목록을 주의 깊게 검토하세요.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Dry run preview of OneDrive sync job in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 작업이 실패한 후 **로그(Log)** 탭을 열어 변경 작업을 하기 전에 구체적인 오류 유형을 파악하세요.
3. 인증 오류의 경우 리모트 관리자에서 OneDrive 리모트를 편집하고 브라우저를 통해 다시 인증하세요.
4. 속도 제한 오류의 경우 작업의 2단계 고급 설정에서 동시 파일 전송 수를 2~4로 줄인 후, 먼저 드라이 런 미리보기로 다시 실행하세요.

근본 원인에 맞는 해결책을 적용하면 대부분의 OneDrive 동기화 오류는 몇 분 안에 해결됩니다 — RcloneView의 작업 기록과 로그 출력이 이를 빠르게 해결하는 데 필요한 모든 것을 제공합니다.

---

**관련 가이드:**

- [클라우드 전송 멈춤 문제 해결하기 — RcloneView로 해결하는 방법](https://rcloneview.com/support/blog/fix-cloud-transfer-stalled-progress-rcloneview)
- [OneDrive에서 Amazon S3로 마이그레이션 — RcloneView로 파일 전송하기](https://rcloneview.com/support/blog/migrate-onedrive-to-amazon-s3-rcloneview)
- [Backblaze B2를 OneDrive와 동기화하기 — RcloneView로 클라우드 백업하기](https://rcloneview.com/support/blog/sync-backblaze-b2-to-onedrive-rcloneview)

<CloudSupportGrid />
