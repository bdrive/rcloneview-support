---
slug: fix-icloud-drive-sync-errors-rcloneview
title: "iCloud Drive 동기화 오류 해결 — RcloneView로 문제 해결하는 방법"
authors:
  - tayson
description: "RcloneView에서 iCloud Drive 동기화 오류를 진단하고 해결하는 방법 — 인증 문제, rclone 버전 요구사항, macOS에서의 일반적인 연결 문제를 다룹니다."
keywords:
  - iCloud Drive sync errors RcloneView
  - fix iCloud Drive rclone errors
  - iCloud Drive authentication problem
  - RcloneView iCloud troubleshoot
  - iCloud Drive connection failed
  - rclone iCloud Drive setup
  - fix iCloud backup RcloneView
  - iCloud Drive macOS sync issues
tags:
  - RcloneView
  - macos
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# iCloud Drive 동기화 오류 해결 — RcloneView로 문제 해결하는 방법

> rclone에서 iCloud Drive를 지원하려면 특정한 설정이 필요합니다. RcloneView에서 iCloud를 사용할 때 발생하는 인증 실패, 버전 불일치, 연결 오류를 진단하는 방법을 알아봅니다.

iCloud Drive는 rclone으로 설정하기에 비교적 복잡한 클라우드 제공업체 중 하나입니다. Apple의 인증이 Apple ID 자격 증명에 의존하며 2단계 인증 절차를 포함할 수 있기 때문입니다. RcloneView는 내장된 rclone 백엔드를 통해 이를 처리하지만, iCloud를 올바르게 작동시키려면 몇 가지 전제 조건을 충족해야 합니다. 이 가이드에서는 가장 흔한 실패 지점들을 살펴봅니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 전제 조건: rclone v1.69 이상 필요

iCloud Drive 지원은 rclone v1.69에서 도입되었습니다. `unknown provider type: iclouddrive` 또는 `remote type not found`와 같은 오류가 표시된다면, 내장된 rclone 버전이 너무 오래된 것입니다. RcloneView에서는 창 하단의 **푸터 바**에서 현재 rclone 버전을 확인할 수 있습니다. v1.69.1보다 오래된 버전이 표시된다면 **Help 탭 → Check for Updates**를 사용하여 최신 내장 rclone으로 업데이트하세요.

RcloneView는 최신 내장 rclone 바이너리와 함께 제공되지만, 이전 버전의 설치본을 사용 중이라면 자체 업데이트를 실행하면 이 유형의 오류가 완전히 해결됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive as a new remote in RcloneView" class="img-large img-center" />

## 인증 실패 및 Apple ID 2단계 인증

**Remote 탭 → New Remote**를 통해 iCloud Drive를 추가할 때, RcloneView는 Apple ID(이메일)와 비밀번호를 입력하라는 메시지를 표시합니다. 대부분의 계정에서 Apple이 이제 요구하는 2단계 인증(2FA)을 사용 중이라면, 신뢰할 수 있는 Apple 기기에 표시되는 2FA 코드도 입력해야 합니다. 리모트 설정 마법사 진행 중 메시지가 표시되면 코드를 입력하세요.

이 단계에서 흔히 발생하는 오류로는 `INVALID_EMAIL`(Apple ID 이메일 주소가 올바른지 확인), `AUTHENTICATION_FAILED`(Apple 계정에 강화된 보안이 설정되어 있는 경우 앱 전용 비밀번호가 필요할 수 있음), 그리고 2FA 프롬프트에 신속히 응답하지 않을 경우 발생하는 타임아웃 오류가 있습니다. Apple이 계정에 앱 전용 비밀번호를 강제하는 경우, appleid.apple.com에서 비밀번호를 생성하여 일반 비밀번호 대신 사용하세요.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Testing iCloud Drive connection in RcloneView" class="img-large img-center" />

## 느린 목록 로딩 또는 부분적인 파일 표시

iCloud Drive는 온디맨드 스토리지를 사용하므로, 파일이 iCloud에만 저장되어 있고 로컬에 다운로드되지 않은 경우가 있습니다. rclone을 통해 탐색할 때 Mac에 아직 로컬로 캐시되지 않은 파일은 메타데이터가 제한적으로 표시되거나 목록을 불러오는 데 시간이 더 걸릴 수 있습니다. 이는 정상적인 동작이며, iCloud가 Apple 서버에서 파일 메타데이터를 가져와야 하기 때문입니다.

폴더 목록이 불완전하게 표시된다면 패널을 새로고침해 보세요(F5 또는 우클릭 메뉴의 **Reload**). 대용량 iCloud 라이브러리의 경우, 비교 작업 중 rclone이 iCloud API를 과도하게 호출하는 속도를 줄이기 위해 작업 설정에서 **Number of equality checkers**를 더 낮은 값(2~4)으로 설정하세요.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="iCloud Drive transfer monitoring in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 푸터 바를 통해 내장된 rclone 버전이 v1.69.1 이상인지 확인하세요.
3. 리모트를 설정할 때 Apple ID와 2FA 코드(또는 앱 전용 비밀번호)를 사용하세요.
4. 목록 로딩이 느리거나 타임아웃이 발생하면 체커 동시성을 줄이세요.

올바르게 설정되면 iCloud Drive는 백업 및 크로스 클라우드 전송을 위한 RcloneView 워크플로우에 원활하게 통합됩니다.

---

**관련 가이드:**

- [RcloneView로 iCloud Drive 클라우드 동기화 관리하기](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [RcloneView에서 macOS "Too Many Open Files" 오류 해결하기](https://rcloneview.com/support/blog/fix-macos-too-many-open-files-rcloneview)
- [macOS Sonoma에서의 RcloneView — 클라우드 동기화 및 백업](https://rcloneview.com/support/blog/rcloneview-macos-sonoma-cloud-sync)

<CloudSupportGrid />
