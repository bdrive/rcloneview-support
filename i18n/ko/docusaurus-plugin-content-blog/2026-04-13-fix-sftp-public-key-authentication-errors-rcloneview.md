---
slug: fix-sftp-public-key-authentication-errors-rcloneview
title: "SFTP 공개 키 인증 오류 해결하기 — RcloneView로 SSH 문제 해결"
authors:
  - tayson
description: "RcloneView에서 SFTP 공개 키 인증 실패를 문제 해결합니다. 잘못된 키 경로, 권한, 암호구문 문제, 키 형식 문제를 진단합니다."
keywords:
  - SFTP public key error RcloneView
  - fix SFTP authentication failure
  - SSH key auth rclone SFTP
  - SFTP permission denied public key
  - RcloneView SFTP troubleshooting
  - SSH key format rclone
  - SFTP key passphrase error
  - rclone SFTP connection fix
tags:
  - sftp
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# SFTP 공개 키 인증 오류 해결하기 — RcloneView로 SSH 문제 해결

> SFTP 공개 키 인증 실패는 거의 항상 키 경로, 파일 권한, 또는 암호구문 불일치로 인해 발생합니다 — 이 가이드는 각 원인을 체계적으로 다룹니다.

SFTP는 RcloneView에서 원격 리눅스 서버에 연결하는 가장 일반적인 방법 중 하나이며, 공개 키 인증은 비밀번호보다 선호되는 보안 방식입니다. 키 인증이 실패하면 `ssh: handshake failed`, `permission denied (publickey)`, 또는 `no supported methods remain`처럼 이해하기 어려운 오류가 나타날 수 있습니다. 이 가이드는 가장 흔한 원인과 각각을 진단하고 해결하는 방법을 다룹니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView의 SFTP 리모트 설정

RcloneView에서 SFTP 리모트를 생성할 때 키 기반 인증과 관련된 필드는 다음과 같습니다:

- **Host**: 서버 호스트명 또는 IP
- **User**: SSH 사용자명
- **Key file**: 개인 키 파일의 경로 (예: `~/.ssh/id_rsa` 또는 `C:\Users\you\.ssh\id_ed25519`)
- **Key file passphrase**: 키를 복호화하는 암호구문 (설정된 경우)

리모트마다 비밀번호 인증과 키 인증은 상호 배타적입니다. 키 파일을 지정하는 경우 비밀번호 필드는 비워 두세요.

<img src="/support/images/en/blog/new-remote.png" alt="SFTP remote configuration with key auth in RcloneView" class="img-large img-center" />

## 일반적인 오류 1: 잘못된 키 파일 경로

키 인증 실패의 가장 흔한 원인은 잘못되었거나 접근할 수 없는 키 파일 경로입니다. 다음을 확인하세요:

- 경로가 존재하며 (`.pub` 공개 키가 아닌) **개인** 키를 가리키는지
- 윈도우에서는 전체 절대 경로를 사용하는지 (예: `C:\Users\username\.ssh\id_rsa`)
- 리눅스/macOS에서는 `~/.ssh/id_rsa`가 올바르게 확장되는지 — 확실하지 않다면 전체 경로를 사용하세요

RcloneView에서 SFTP 리모트 설정을 열고 키 파일 경로를 확인하세요. 해당 위치에 파일이 없으면 인증이 조용히 실패하거나 도움이 되지 않는 오류를 표시합니다.

## 일반적인 오류 2: 지나치게 개방된 키 파일 권한

리눅스와 macOS에서 SSH는 다른 사용자가 읽을 수 있는 개인 키 파일 사용을 거부합니다. 키 파일 권한이 지나치게 개방되어 있으면 `Permissions 0644 for '~/.ssh/id_rsa' are too open`이라는 메시지가 표시됩니다. 해결 방법:

```
chmod 600 ~/.ssh/id_rsa
chmod 700 ~/.ssh
```

윈도우에서는 파일 보안 설정을 통해 키 파일 권한을 관리합니다. 키 파일이 자신의 사용자 계정에만 접근 가능하고 모든 사용자(Everyone)와 공유되지 않도록 하세요.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an SFTP connection test in RcloneView" class="img-large img-center" />

## 일반적인 오류 3: 암호구문 불일치

개인 키가 암호구문으로 보호되어 있다면, RcloneView SFTP 리모트 설정의 암호구문 필드가 정확히 일치해야 합니다. 키에 암호구문이 설정되어 있는데 필드가 비어 있으면 인증이 실패합니다. 반대로 암호구문이 없는 키에 암호구문을 입력해도 실패합니다.

키 암호구문이 올바른지 테스트하려면 터미널을 열고 `ssh -i /path/to/key user@host`를 실행하세요 — 암호구문을 요청하고 정상적으로 수락한다면 자격 증명이 올바른 것입니다. 그런 다음 RcloneView 리모트를 그에 맞게 업데이트하세요.

## 일반적인 오류 4: 지원되지 않는 키 형식

오래된 OpenSSH 개인 키(PEM 형식)는 폭넓게 지원되지만, rclone에 내장된 Go SSH 라이브러리 버전에 따라 일부 새로운 ED25519 키의 OpenSSH 네이티브 형식은 문제를 일으킬 수 있습니다. `ssh: no supported methods remain` 오류가 발생한다면:

- 키를 PEM 형식으로 변환하세요: `ssh-keygen -p -m PEM -f ~/.ssh/id_ed25519`
- 또는 RSA 키를 생성하세요: `ssh-keygen -t rsa -b 4096`

## 진단을 위한 로그 확인

SFTP 연결 시도가 실패한 후 RcloneView에서 **Log** 탭을 여세요. 로그에는 전체 SSH 핸드셰이크 오류가 표시됩니다. 더 자세한 정보가 필요하다면 RcloneView의 **Terminal** 탭을 사용해 `-vv` 플래그와 함께 rclone 명령을 직접 실행하면 전체 SSH 협상 과정이 출력됩니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing SFTP connection errors in RcloneView logs" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. SFTP 리모트 설정을 열고 키 파일 경로가 올바른 개인 키를 가리키는지 확인하세요.
3. 리눅스/macOS에서는 `ls -la ~/.ssh/`로 키 파일 권한을 확인하고 `chmod 600`으로 수정하세요.
4. 암호구문 필드가 키의 암호구문과 일치하는지 확인한 다음, Remote Manager에서 연결을 테스트하세요.

경로, 권한, 암호구문을 체계적으로 확인하면 대부분의 SFTP 공개 키 인증 실패를 해결할 수 있습니다.

---

**관련 가이드:**

- [SFTP 연결 거부 및 타임아웃 오류 해결하기](https://rcloneview.com/support/blog/fix-sftp-connection-refused-timeout-rcloneview)
- [RcloneView로 rclone 오류 문제 해결하기](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [네트워크 오류로 중단된 클라우드 동기화 해결하기](https://rcloneview.com/support/blog/fix-cloud-sync-interrupted-network-retry-rcloneview)

<CloudSupportGrid />
