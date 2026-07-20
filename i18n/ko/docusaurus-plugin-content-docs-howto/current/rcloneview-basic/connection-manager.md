---
sidebar_position: 9
description: "RcloneView 연결 관리자를 사용하여 내장 Rclone과 외부 Rclone 인스턴스를 구성하고 전환하는 방법을 알아봅니다."
keywords:
  - rcloneview
  - connection
  - remote control
  - embedded rclone
  - external rclone
  - connection manager
  - rclone
  - rclone rcd
  - rc server
  - Remote Connection
  - rclone connection
tags:
  - RcloneView
  - connection
  - remote-control
  - embedded-rclone
  - external-rclone
  - connection-manager
  - rclone-rcd
date: 2025-06-22
author: Jay
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# RcloneView에서 Rclone 연결 관리하기

RcloneView는 Rclone의 Remote Control(RC) API를 통해 통신하는 클라우드 스토리지용 GUI 기반 파일 관리자입니다. 기본적으로 **내장 Rclone(Embedded Rclone)** 인스턴스가 함께 제공되지만, 외부 Rclone 인스턴스(**External Rclone**)에 연결하는 것도 지원합니다.

이 가이드에서는 **연결 관리자(Connection Manager)**를 사용하여 이러한 연결을 관리하는 방법을 설명합니다.

## 연결 관리자 개요

RcloneView는 두 가지 모드로 Rclone과 통신합니다:

- **내장 Rclone** (기본, 내장)
- **외부 Rclone** (사용자 구성, 네트워크 연결)

**연결 관리자**를 사용하면 이러한 Rclone 인스턴스를 조회하고, 전환하고, 관리할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/connection-manager-with-embedded-rclone-only.png" alt="connection manager with embedded rclone only" class="img-medium img-center" />

### 내장 Rclone

RcloneView에는 **내장 Rclone**이라는 사전 설치된 Rclone 바이너리가 포함되어 있으며, 자동으로 실행됩니다.

| 필드                       | 설명                                                                    |
| --------------------------- | ------------------------------------------------------------------------------ |
| **Address**                 | 일반적으로 `http://127.0.0.1:5582` (로컬호스트 루프백)                         |
| **Rclone Version**          | 예: `v1.70.1`                                                             |
| **Connected** / **Connect** | 현재 상태를 나타냅니다. 연결되어 있지 않으면 **Connect**를 클릭하여 활성화하세요. |
| **Self Update**             | 클릭하면 최신 Rclone 버전으로 업그레이드됩니다.                                 |

### 외부 Rclone 목록

외부 Rclone은 사용자가 일반적으로 `rclone rcd`를 통해 수동으로 실행하는 독립형 Rclone 인스턴스를 의미합니다. 다음과 같은 환경에서 실행될 수 있습니다:

- 로컬 머신 (테스트용)
- 원격 서버 (예: AWS EC2)
- Docker 컨테이너 내부

각 항목에는 다음이 표시됩니다:

| 필드 | 설명 |
|-------|-------------|
| **Display Name** | 사용자가 정의한 이름 (예: `aws-rclone`) |
| **Remote Address** | API 엔드포인트, 예: `http://<host>:5572` |
| **Username** | 인증이 활성화된 경우 |
| **Rclone Version** | 연결된 인스턴스에서 가져옴 |

**사용 가능한 작업**:
- **Connect** – 이 인스턴스를 활성화합니다
- **Edit** – 주소, 자격 증명 또는 SSL 옵션을 수정합니다
- **Delete** – 목록에서 제거합니다

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/external-rclone-added.png" alt="external rclone added" class="img-medium img-center" />
<img src="/support/images/en/howto/rcloneview-basic/external-rclone-selected.png" alt="external rclone selected" class="img-medium img-center" />
</div>

### 현재 선택 표시기

연결 관리자 대화상자 상단에는 다음이 표시됩니다:

- `Selected: Embedded Rclone` – 기본 내장 인스턴스가 활성화되어 있음
- `Selected: aws-rclone` – 사용자 지정 외부 인스턴스가 사용 중임

한 번에 하나의 연결만 활성화할 수 있습니다. 현재 선택 사항은 다음에 영향을 줍니다:

- 리모트 목록 표시 여부
- 마운트/작업(Job) 동작
- 구성 작업

:::important 참고
- 한 번에 하나의 Rclone 연결만 활성화할 수 있습니다.
- 내장 연결과 외부 연결 사이를 자유롭게 전환할 수 있습니다.

💡 두 인스턴스를 나란히 관리하려면 새 RcloneView 창을 여세요.

- 외부 Rclone을 사용할 수 없게 되면 언제든지 내장 버전으로 되돌릴 수 있습니다.
:::

## 새 외부 Rclone 추가하기

실행 중인 `rclone rcd` 서버에 연결하려면:

<img src="/support/images/en/howto/rcloneview-basic/new-connection-form.png" alt="new connection form" class="img-medium img-center" />

1. 연결 관리자 하단의 **New Connection**을 클릭합니다.
2. 양식을 작성합니다:

| 필드 | 설명 |
|-------|-------------|
| **Display Name** | 예: `aws-rclone` |
| **Remote Address** | 전체 API 엔드포인트 (`http://<host>:5572`) |
| **Username / Password** | 인증이 활성화된 경우 필수 |
| **Disable SSL Verification** | 자체 서명 인증서 또는 개발용 |
<br />
<br />

3. **Test connection**을 클릭합니다. 성공하면 **Save**를 클릭합니다.

:::important 참고

💡 외부 Rclone을 사용 가능하게 하려면 다음과 같이 실행하세요:

```bash
rclone rcd --rc-user=<user> --rc-pass=<pass> --rc-addr=127.0.0.1:5572
```

:::
