---
slug: fix-cloud-oauth-token-expired-refresh-rcloneview
title: "만료된 클라우드 스토리지 OAuth 토큰 해결하기 — RcloneView로 다시 연결하기"
authors:
  - tayson
description: "Google Drive, Dropbox, OneDrive 및 기타 OAuth 기반 클라우드 제공업체에서 RcloneView의 OAuth 토큰 만료 오류를 진단하고 해결하는 방법을 알아보세요."
keywords:
  - expired OAuth token cloud storage
  - fix rclone OAuth token expired
  - Google Drive token expired RcloneView
  - Dropbox authorization token error
  - OneDrive token refresh rclone
  - cloud storage authentication error
  - rclone reconnect cloud provider
  - fix cloud login expired RcloneView
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 만료된 클라우드 스토리지 OAuth 토큰 해결하기 — RcloneView로 다시 연결하기

> Google Drive, Dropbox, OneDrive 및 기타 제공업체의 OAuth 토큰은 주기적으로 만료됩니다. RcloneView에서 이 오류를 인식하고 리모트 설정을 잃지 않고 재인증하는 방법을 알아보세요.

Google Drive, Dropbox, Microsoft OneDrive, Box, pCloud, Yandex Disk 등 OAuth 기반 클라우드 제공업체는 비밀번호가 아닌 토큰을 통해 접근 권한을 부여합니다. 이러한 토큰에는 만료 정책이 있습니다. 일부는 앱이 활성 상태로 유지되는 한 자동으로 갱신되지만, 일부는 90~180일간 미사용 상태이거나 제공업체의 보안 시스템이 비정상적인 접근 패턴을 감지하면 만료됩니다. 토큰이 만료되면 RcloneView의 동기화 작업은 겉보기에는 심각해 보이지만 쉽게 해결할 수 있는 인증 오류와 함께 실패하기 시작합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 만료된 토큰 오류 인식하기

만료된 OAuth 토큰 오류는 RcloneView의 **Log 탭**에 다음과 같은 메시지로 나타납니다.

- Google Drive: `oauth2: cannot fetch token: 401 Unauthorized` 또는 `Token has been expired or revoked`
- Dropbox: `invalid_grant` 또는 `Token is expired`
- OneDrive: `AADSTS70008: The refresh token has expired`
- Box: `401 Unauthorized: The access token provided has expired`

Transferring 탭에서는 전송된 파일 없이 작업이 0%에서 즉시 실패하는 것을 확인할 수 있습니다. 또한 Explorer 패널에서 리모트가 연결할 수 없는 상태로 표시될 수 있으며, 리모트를 탐색하면 폴더 목록 대신 오류가 반환됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="Viewing remote configuration in RcloneView to fix token errors" class="img-large img-center" />

## Remote Manager를 통한 재인증

만료된 OAuth 토큰을 갱신하려면 **Remote 탭 → Remote Manager**로 이동하여 해당 리모트를 선택하고 **Edit**을 클릭합니다. 리모트 설정 화면에서 OAuth 토큰 섹션을 찾아 재인증 버튼을 클릭하거나(또는 기존 토큰을 삭제) 합니다. RcloneView가 브라우저에서 제공업체의 OAuth 인증 페이지를 엽니다.

클라우드 계정 자격 증명으로 로그인하고 RcloneView(rclone을 통해)에 접근 권한을 다시 부여하면 새 토큰이 자동으로 저장됩니다. 브라우저 탭을 닫고 RcloneView로 돌아가면 이제 리모트가 정상적으로 연결되어야 합니다. Explorer 패널에서 리모트를 탐색하여 테스트해 보세요.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring reconnected cloud remote transfer in RcloneView" class="img-large img-center" />

## 더 엄격한 토큰 정책을 가진 제공업체

**Google Drive** 리프레시 토큰은 계정 소유자가 앱을 승인했고 Google 보안 설정에서 rclone 앱이 취소되지 않은 경우 무기한 유효합니다. Google 계정 → 타사 앱에서 접근 권한을 취소한 경우 처음부터 다시 인증해야 합니다.

**Microsoft OneDrive** 토큰은 90일간 미사용 시 만료됩니다. 3개월 동안 동기화하지 않았다면 재인증이 필요할 것으로 예상하세요. OneDrive for Business 토큰은 Azure AD 관리자가 설정한 조직 정책으로 인해 더 빨리 만료될 수도 있습니다.

**Box**와 **Dropbox** 토큰은 일반적으로 수명이 길지만, 계정 비밀번호를 변경하거나 처음으로 2단계 인증을 활성화하거나 제공업체가 보안 이벤트를 감지한 경우 만료됩니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing failed jobs due to token expiry in RcloneView job history" class="img-large img-center" />

## 향후 중단 방지하기

전송할 데이터가 없더라도 각 OAuth 리모트에 대해 최소 하나의 소규모 동기화 작업을 매주 실행하도록 예약하세요. 토큰을 활발히 사용하면 OneDrive와 같은 제공업체의 미사용으로 인한 만료를 방지할 수 있습니다. Job History 탭을 정기적으로 확인하여 작업 실패가 며칠간 방치되지 않고 즉시 발견되도록 하세요.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 동기화 작업 실패 후 Log 탭에서 OAuth 만료 오류 메시지를 확인하세요.
3. Remote Manager를 열고 해당 리모트를 선택한 다음 Edit을 클릭하여 재인증하세요.
4. 실패한 작업을 다시 실행하기 전에 Explorer 패널에서 연결을 테스트하세요.

RcloneView에서 OAuth 토큰 갱신은 2분도 채 걸리지 않습니다. 재인증이 완료되면 이전에 설정된 모든 동기화 작업이 다른 변경 없이 다시 정상적으로 작동합니다.

---

**관련 가이드:**

- [RcloneView로 Google Drive 할당량 및 속도 제한 오류 해결하기](https://rcloneview.com/support/blog/fix-google-drive-quota-rate-limit-api-errors)
- [RcloneView로 Rclone 오류 문제 해결하기](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [RcloneView 동기화 완료 알림](https://rcloneview.com/support/blog/notification-alerts-sync-complete-rcloneview)

<CloudSupportGrid />
