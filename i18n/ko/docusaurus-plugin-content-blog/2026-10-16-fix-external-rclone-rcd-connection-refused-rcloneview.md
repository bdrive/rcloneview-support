---
slug: fix-external-rclone-rcd-connection-refused-rcloneview
title: "외부 Rclone 연결 거부 해결 — RcloneView로 rcd 접속 문제 해결하기"
authors:
  - casey
description: "RcloneView 외부 rclone 연결 오류 해결: rclone rcd, 포트 5572, 자격 증명, 방화벽, SSL 설정을 연결 테스트로 점검하세요."
keywords:
  - rclone rcd 연결 거부
  - RcloneView 외부 rclone
  - rclone 원격 제어 연결 안 됨
  - rclone rcd 포트 5572
  - RcloneView 연결 관리자
  - rclone rcd 인증 실패
  - rclone rc 연결 해결
  - rclone rcd 방화벽
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cli
  - self-hosted
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 외부 Rclone 연결 거부 해결 — RcloneView로 rcd 접속 문제 해결하기

> RcloneView가 외부 rclone 서버에 접속하지 못하는 원인은 거의 항상 몇 분 안에 확인할 수 있는 다섯 가지 중 하나입니다.

RcloneView에는 내장 rclone이 포함되어 있지만, 많은 사용자가 연결 관리자(Connect Manager)를 통해 NAS, VPS 또는 AWS EC2 인스턴스에서 실행 중인 외부 rclone에 접속합니다. 이 연결이 "connection refused", 시간 초과 또는 인증 오류로 실패하면 짧은 체크리스트로 원인을 찾을 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## rclone rcd가 실제로 실행 중인지 확인

RcloneView는 `rclone rcd`로 시작하는 원격 제어(Remote Control) API를 통해 외부 rclone과 통신합니다. 서버에서 자격 증명과 주소를 명시하여 실행하세요. 예: `rclone rcd --rc-user=<user> --rc-pass=<pass> --rc-addr=127.0.0.1:5572`. 외부 rclone의 기본 포트는 5572이고, 내장 인스턴스는 로컬호스트의 5582를 사용합니다.

흔한 실수는 `127.0.0.1`에 바인딩한 뒤 다른 컴퓨터에서 접속하는 것입니다. 루프백 주소는 로컬 트래픽만 허용합니다. 원격 서버라면 `0.0.0.0:5572`에 바인딩하고 방화벽에서 IP로 접근을 제한하세요. RcloneView는 GUI 도구이며 서버에는 설치하지 않습니다. 서버에서는 rclone만 실행합니다.

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="RcloneView를 외부 rclone 호스트에 연결" class="img-large img-center" />

## 네트워크 경로와 자격 증명 확인

rcd가 실행 중인데도 연결이 거부된다면 경로를 테스트하세요. RcloneView를 실행하는 컴퓨터에서 사용자 이름과 비밀번호로 `/rc/noop`에 상태 확인 요청을 보내면 응답이 와야 합니다. 응답 없이 멈춘다면 방화벽이나 클라우드 보안 그룹이 5572 포트를 차단하고 있는 것입니다. AWS EC2에서는 제한된 SSH 규칙 외에 5572용 사용자 지정 TCP 규칙이 필요합니다.

인증 실패는 별개의 문제입니다. RcloneView에 입력한 사용자 이름과 비밀번호는 대소문자를 포함하여 `--rc-user` 및 `--rc-pass`와 정확히 일치해야 합니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 외부 연결 정보 입력" class="img-large img-center" />

## 연결 관리자에서 설정 확인

Settings > Connect Manager > New Connection을 열고 표시 이름, `http://<host>:5572` 형식의 주소, 자격 증명을 입력하세요. 서버가 자체 서명 인증서를 사용한다면 SSL 인증서 검증을 끄는 옵션으로 연결을 진행할 수 있습니다. 저장하기 전에 Test Connection을 눌러 결과를 바로 확인하세요.

그래도 실패하면 Settings > Embedded Rclone에서 rclone 로깅을 활성화하고 로그 수준을 DEBUG로 설정한 뒤 재시작하여 문제를 재현하고 로그를 수집하세요.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView에서 로그와 기록 확인" class="img-large img-center" />

## 시작하기

1. **RcloneView를 다운로드하세요.**  [rcloneview.com](https://rcloneview.com/src/download.html)에서 받을 수 있습니다.
2. 서버에서 사용자, 비밀번호, 접근 가능한 주소를 지정하여 `rclone rcd`를 시작합니다.
3. 방화벽 또는 보안 그룹에서 포트를 엽니다.
4. 연결 관리자에서 연결을 추가하고 Test Connection을 누릅니다.

연결이 안정되면 데스크톱에서 원격 서버의 클라우드 스토리지를 관리할 수 있습니다.

---

**관련 가이드:**

- [RcloneView 연결 관리자 — 내장 및 외부](https://rcloneview.com/support/blog/rcloneview-connection-manager-embedded-external)
- [SSL/TLS 인증서 오류 해결](https://rcloneview.com/support/blog/fix-ssl-tls-certificate-errors-cloud-rcloneview)
- [SFTP 연결 거부 및 시간 초과 해결](https://rcloneview.com/support/blog/fix-sftp-connection-refused-timeout-rcloneview)

<CloudSupportGrid />
