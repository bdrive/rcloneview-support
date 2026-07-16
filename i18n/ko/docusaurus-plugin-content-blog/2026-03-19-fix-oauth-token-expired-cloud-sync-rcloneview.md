---
slug: fix-oauth-token-expired-cloud-sync-rcloneview
title: "OAuth 토큰 만료 오류 해결하기 — RcloneView에서 클라우드 계정 재인증하기"
authors:
  - tayson
description: "예약된 백업이 작동을 멈춘 이유는 OAuth 토큰이 만료되었기 때문입니다. RcloneView에서 Google Drive, OneDrive, Dropbox 등 OAuth 제공자의 만료된 토큰을 진단하고 해결하는 방법을 알아봅니다."
keywords:
  - oauth token expired
  - rclone token expired
  - google drive token refresh
  - onedrive oauth expired
  - fix cloud auth error
  - rclone re-authorize
  - cloud sync authentication
  - oauth refresh token
  - fix cloud connection
  - rcloneview re-auth
tags:
  - troubleshooting
  - tips
  - security
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OAuth 토큰 만료 오류 해결하기 — RcloneView에서 클라우드 계정 재인증하기

> 2주 동안 야간 백업이 조용히 실패하고 있었습니다. 오류 메시지는 "token expired"입니다. Google Drive, OneDrive, 또는 Dropbox 연결을 재인증하기만 하면 됩니다 — 해결 방법을 알아봅니다.

OAuth 토큰은 RcloneView를 Google Drive, OneDrive, Dropbox, Box와 같은 클라우드 제공자와 연결해줍니다. 이러한 토큰에는 만료 정책이 있습니다 — Google 토큰은 취소되지 않는 한 무기한 유효하지만 취소될 수 있고, Microsoft 토큰은 90일 동안 사용하지 않으면 만료되며, 비밀번호 변경이나 보안 이벤트가 발생하면 모든 토큰이 무효화됩니다. 토큰이 만료되면 동기화 작업이 눈에 띄지 않게 실패합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 토큰 만료의 일반적인 원인

| 제공자 | 토큰 동작 |
|----------|---------------|
| Google Drive | 취소되기 전까지 리프레시 토큰 유효 (단, 사용자나 관리자가 취소 가능) |
| OneDrive | 90일 동안 미사용 시 만료; 비밀번호 변경 시 무효화 |
| Dropbox | 명시적으로 취소되기 전까지 유효 |
| Box | 갱신 없이 60일 |

## 증상

- 예약된 작업이 "authentication" 또는 "token" 오류와 함께 실패함
- 수동으로 탐색 시 "unauthorized" 메시지가 표시됨
- 작업 기록에서 최근 며칠간 실패가 증가함

## 해결 방법

### 먼저 작업 기록 확인하기

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Identify auth errors" class="img-large img-center" />

패턴을 찾아보세요 — 특정 제공자의 모든 작업이 같은 날짜부터 실패하기 시작했다면 토큰 문제입니다.

### 리모트 재인증하기

리모트 관리자를 열고 문제가 발생한 리모트를 재인증합니다. 이 작업은 새로운 OAuth 흐름을 시작합니다 — 제공자에 로그인하고 다시 접근 권한을 부여하세요.

<img src="/support/images/en/blog/new-remote.png" alt="Re-authorize remote" class="img-large img-center" />

기존 작업 구성은 그대로 유지됩니다. 인증 토큰만 업데이트됩니다.

### 수정 사항 확인하기

테스트 동기화를 실행하여 연결이 정상적으로 작동하는지 확인합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Test after re-auth" class="img-large img-center" />

## 예방 방법

- **알림 활성화** — Slack/Discord/Telegram 알림을 통해 작업이 실패하는 즉시 알 수 있습니다
- **매주 작업 기록 확인** — 실패가 누적되기 전에 발견하세요
- 클라우드 리모트를 재인증하지 않은 채 **비밀번호 변경을 피하세요**
- Google Workspace에는 **서비스 계정 사용** (사용자 토큰과 달리 만료되지 않습니다)

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 인증 관련 실패가 있는지 **작업 기록을 확인**하세요.
3. 리모트 관리자에서 문제가 발생한 리모트를 **재인증**하세요.
4. 향후 실패를 조기에 발견할 수 있도록 **알림을 설정**하세요.

2분간의 재인증으로 몇 주에 걸친 백업 누락을 방지할 수 있습니다.

---

**관련 가이드:**

- [권한 거부 오류 해결하기](https://rcloneview.com/support/blog/fix-permission-denied-cloud-sync-errors-rcloneview)
- [Rclone 오류 문제 해결하기](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [Slack 알림](https://rcloneview.com/support/blog/automate-cloud-sync-slack-notifications-rcloneview)

<CloudSupportGrid />
