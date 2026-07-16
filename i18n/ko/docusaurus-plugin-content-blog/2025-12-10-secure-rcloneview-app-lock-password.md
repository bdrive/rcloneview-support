---
slug: secure-rcloneview-app-lock-password
title: "앱 잠금으로 RcloneView 보호하기: 리모트, 작업, 기록을 안전하게"
authors:
  - tayson
description: "RcloneView에 앱 잠금으로 비밀번호 보호를 추가해, 공유 PC에서도 권한이 있는 사용자만 리모트, 전송 기록, 작업, 마운트, 내부 데이터베이스를 볼 수 있도록 하세요."
keywords:
  - rcloneview security
  - rcloneview app lock
  - rclone password protect
  - secure rclone gui
  - protect rclone remotes
  - rclone_view.db
  - cloud automation security
  - shared pc security
  - job history protection
  - transfer history protection
tags:
  - security
  - job-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';


# 앱 잠금으로 RcloneView 보호하기: 리모트, 작업, 기록을 안전하게

> 공유 PC나 회사 PC를 사용하시나요? 앱 잠금을 켜서 RcloneView를 열 때 비밀번호를 요구하도록 하면, 리모트와 작업, 전송 기록을 다른 사람이 볼 수 없게 됩니다.

RcloneView의 앱 잠금은 앱을 실행하거나 다시 열 때 간단한 비밀번호 화면을 추가합니다. 이 기능은 리모트, 작업 정의, 마운트 설정, 작업 기록, 전송 로그가 저장된 내부 데이터베이스(`rclone_view.db`)를 보호하므로, 워크스테이션을 여러 사람이 공유하더라도 민감한 자동화 정보가 비공개로 유지됩니다.

<!-- truncate -->


<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## 앱 잠금이 보호하는 대상

- `rclone.conf`에 저장된 리모트 정의 및 자격 증명(앱을 통한 접근 제어)
- 전송 기록 및 로그
- 작업 설정 및 예약 정보
- 마운트 구성 및 UI 상태
- 모든 것을 연결하는 SQLite 데이터베이스(`rclone_view.db`)

<img src="/support/images/en/tutorials/applock/app-lock-locking.png" class="img-medium img-center" alt="App Lock enabled screen" />

## 누구에게 유용한가

- 하나의 워크스테이션이나 점프 박스를 공유하는 팀
- 예약된 동기화/마운트 작업을 실행하며 변조 방지가 필요한 IT 관리자
- 민감한 크로스 클라우드 워크플로우(백업, 컴플라이언스 아카이브)를 사용하는 사용자
- OS 수준의 변경 없이 빠른 보안 계층을 원하는 모든 사람

## 앱 잠금 켜는 방법 (1분이면 충분합니다)

1) 상단 메뉴에서 **설정 → 일반 설정(Settings → General Settings)**을 엽니다.
<img src="/support/images/en/tutorials/applock/mainwindow-menu-settings.png" class="img-medium img-center" alt="Open Settings menu" />

2) **일반(General)**에서 **앱 잠금 사용(Enable App Lock)**을 체크하고, 비밀번호를 입력한 뒤 **닫기(Close)**를 클릭합니다.
<img src="/support/images/en/tutorials/applock/app-lock-settings.png" class="img-medium img-center" alt="App Lock toggle" />
<img src="/support/images/en/tutorials/applock/app-lock-settings-password.png" class="img-medium img-center" alt="Set App Lock password" />

이제 끝입니다. 다음번에 RcloneView를 시작하거나 창을 다시 열면 잠금 해제 화면이 나타납니다.

<img src="/support/images/en/tutorials/applock/app-lock-unlock.png" class="img-medium img-center" alt="App Lock unlock prompt" />

## 비밀번호를 잊어버렸을 때 초기화하기

- 잠금 해제 화면에서 **앱 초기화(Reset App)**를 클릭합니다.
- 초기화를 확인하면 앱 잠금과 모든 내부 데이터(설정, 작업, 전송 기록, 작업 기록)가 삭제됩니다.
- `rclone.conf`는 그대로 유지되므로, 앱을 다시 열면 리모트 정의를 계속 사용할 수 있습니다.

<img src="/support/images/en/tutorials/applock/app-lock-reset-app.png" class="img-medium img-center" alt="Reset App button" />
<img src="/support/images/en/tutorials/applock/app-lock-reset-app-confirm.png" class="img-medium img-center" alt="Reset App confirmation" />

## 안전한 운영을 위한 모범 사례

- 여러 사용자가 세션을 열 수 있는 공유 PC나 사무실에서는 앱 잠금을 사용하세요.
- OS 계정 비밀번호나 디스크 암호화와 함께 사용하면 다중 보호 계층을 구성할 수 있습니다.
- 작업 이름은 명확하게 짓되, 이름이나 메모에 비밀 정보를 넣지 마세요.
- `rclone_view.db`는 안전하고 사용자가 쓰기 가능한 위치에 백업하세요([데이터베이스 위치 변경하기](/tutorials/change-rcloneview-database-location) 참고).
- 스케줄러는 신뢰할 수 있는 작업에 대해서만 활성화하고, 작업 기록(Job History)을 통해 모니터링하세요.

## 빠른 FAQ

**앱 잠금이 예약된 작업을 멈추게 하나요?**
아니요—예약해둔 작업은 계속 실행됩니다. 앱 잠금은 UI 접근을 제한해 다른 사람이 이를 보거나 변경하지 못하게 할 뿐입니다.

**앱 잠금을 초기화하면 어떻게 되나요?**
내부 데이터는 삭제되지만 `rclone.conf`는 유지되므로 리모트는 남아 있습니다. 필요에 따라 작업과 기록을 다시 생성하면 됩니다.

**터미널은 계속 사용할 수 있나요?**
네. 잠금이 해제되면 내장 터미널은 정상적으로 작동합니다. 앱 잠금은 실행 시 접근만 제한합니다.

## 마무리

비밀번호 프롬프트는 작아 보일 수 있지만, 리모트와 자동화, 기록을 지키는 강력한 방패가 됩니다. 앱 잠금을 활성화하고 `rclone_view.db`를 안전한 위치에 보관하면서, 공유 기기에서도 클라우드 워크플로우가 비공개로 유지된다는 확신을 갖고 사용하세요.

<CloudSupportGrid />
