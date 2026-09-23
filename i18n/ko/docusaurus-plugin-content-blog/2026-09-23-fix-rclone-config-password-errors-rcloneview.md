---
slug: fix-rclone-config-password-errors-rcloneview
title: "Rclone Config Password 오류 해결 — RcloneView로 암호화된 설정 문제 해결하기"
authors:
  - robin
description: "RcloneView에서 rclone.conf의 Config Password 오류 — 잠김, 복호화 실패, 비밀번호 분실 — 를 해결하고 리모트를 다시 연결하세요."
keywords:
  - rclone config password 오류
  - 암호화된 rclone.conf
  - RcloneView config password
  - rclone conf 복호화 실패
  - rclone config password 분실
  - config password 불일치
  - rclone 설정 암호화
  - RcloneView 리모트 잠김
  - rclone config 복원
  - rclone config 복구
tags:
  - RcloneView
  - troubleshooting
  - tips
  - security
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Rclone Config Password 오류 해결 — RcloneView로 암호화된 설정 문제 해결하기

> rclone.conf를 보호하는 Config Password가 어긋나면 RcloneView의 모든 리모트가 한꺼번에 로드되지 않습니다 — 원인을 진단하고 다시 접속하는 방법을 안내합니다.

RcloneView의 Settings 탭에는 Embedded Rclone 아래에 **Config Password** 옵션이 있으며, 이는 rclone.conf 파일 전체를 암호화합니다 — 이 파일에는 하나의 제공업체가 아니라 설정한 모든 리모트가 담겨 있습니다. 이는 Crypt 리모트로 개별 파일을 암호화하는 것과는 다릅니다. Config Password는 모든 리모트의 자격 증명과 토큰을 한 번에 보호합니다. 이 비밀번호가 틀리거나, 없거나, 파일을 실제로 암호화한 값과 어긋나면 RcloneView는 어떤 리모트도 복호화할 수 없으며, 탐색기 전체가 비어 보이거나 시작 시 연결 오류를 표시합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Config Password 문제 인식하기

증상은 보통 부분적이 아니라 전체적으로 나타납니다: 리모트 하나만 연결에 실패하는 것이 아니라 Google Drive, S3, Dropbox 등 모든 리모트가 한꺼번에 실패하며, 대개 RcloneView 시작 직후나 embedded rclone 프로세스가 재시작된 후에 발생합니다. 하단 Info View의 **Log** 탭을 확인하거나, Settings > Embedded Rclone에서 파일 기반 로깅을 활성화하고 로그 레벨을 DEBUG로 설정한 뒤 embedded rclone 프로세스를 재시작하세요. config 복호화 실패는 제공업체별 인증 오류와 달리 로그에 명확하게 나타나므로, 만료된 OAuth 토큰이나 폐기된 API 키와 구분하는 확실한 방법입니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView에서 config password 오류 이후 작업 기록과 로그를 검토하는 화면" class="img-large img-center" />

## 흔한 원인과 해결 방법

대부분의 Config Password 문제는 다음 몇 가지 상황 중 하나로 귀결됩니다:

**업데이트나 재설치 후 비밀번호를 잘못 입력한 경우.** RcloneView를 새 기기로 옮기거나 재설치했다면, Settings > Embedded Rclone > Config Password에 정확한 Config Password를 다시 입력하세요. 부분 일치는 없습니다 — 문자 하나만 틀려도 파일 전체의 복호화가 차단됩니다.

**오래된 rclone.conf 경로.** RcloneView의 Local Rclone config location 설정은 특정 파일을 가리킵니다. 이전 설치에서 해당 경로에 암호화되지 않았거나 다르게 암호화된 config 파일이 남아 있다면, RcloneView가 완전히 잘못된 파일을 읽고 있을 수 있습니다. Settings의 config 위치가 실제로 암호화된 rclone.conf가 있는 곳과 일치하는지 확인하세요.

**복구 옵션 없이 비밀번호를 잊어버린 경우.** rclone의 config 암호화에는 백도어가 없습니다 — 비밀번호를 정말로 잃어버렸다면 기존 rclone.conf는 복호화할 수 없습니다. 유일한 방법은 암호화된 파일을 제거하고 **Remote** > **New Remote**를 통해 각 리모트를 처음부터 다시 추가하는 것입니다. 그렇기 때문에 이 값을 다른 클라우드 제공업체 자격 증명만큼 중요하게 비밀번호 관리자에 보관해야 합니다.

<img src="/support/images/en/blog/new-remote.png" alt="config password 재설정 후 RcloneView에서 리모트를 다시 추가하는 화면" class="img-large img-center" />

## 앞으로 잠김 방지하기

Config Password를 변경하기 전에 Job Manager의 **Export** 옵션으로 현재 작업 정의를 내보내세요 — 자격 증명 자체를 복원하지는 않지만, 어떤 리모트와 작업이 존재했는지 기록한 이식 가능한 JSON 파일로 작업 설정을 저장합니다. RcloneView는 Windows, macOS, Linux에서 하나의 창으로 90개 이상의 제공업체를 마운트하고 동기화하므로, New Remote를 통해 리모트를 처음부터 다시 구성하는 데는 몇 시간이 아니라 몇 분이면 충분합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView에서 config password를 변경하기 전에 작업 설정을 검토하는 화면" class="img-large img-center" />

지원팀에 문의할 때는 다른 rclone 문제에 사용하는 것과 동일한 로그 수집 절차를 따르세요: DEBUG 로깅을 활성화하고, embedded rclone 프로세스를 재시작하고, 문제를 재현한 뒤 로그 파일을 보내주세요 — 복호화 오류는 스크린샷보다 원본 로그 출력으로 진단하기가 훨씬 쉽습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. Settings > Embedded Rclone > Config Password를 확인하고 원래 rclone.conf를 암호화했던 값과 일치하는지 확인합니다.
3. DEBUG 로깅을 활성화하고 embedded rclone 프로세스를 재시작하여 문제가 제공업체 인증 오류가 아닌 복호화 오류인지 확인합니다.
4. 비밀번호를 정말로 복구할 수 없다면 암호화된 config를 제거하고 New Remote를 통해 리모트를 다시 추가합니다.

Config Password는 rclone.conf의 모든 자격 증명을 한 번에 보호하므로, 마스터 비밀번호와 같은 수준으로 신중하게 관리하세요 — 이를 잃어버리면 리모트 목록을 처음부터 다시 만들어야 합니다.

---

**관련 가이드:**

- [Fix Rclone Config Corruption and Recovery Issues in RcloneView](https://rcloneview.com/support/blog/fix-rclone-config-corruption-rcloneview)
- [Fix Crypt Remote Decryption Errors — Password and Config Issues with RcloneView](https://rcloneview.com/support/blog/fix-crypt-remote-password-decrypt-errors-rcloneview)
- [Fix License Key Activation Errors — Resolve PLUS License Issues with RcloneView](https://rcloneview.com/support/blog/fix-license-key-activation-errors-rcloneview)

<CloudSupportGrid />
