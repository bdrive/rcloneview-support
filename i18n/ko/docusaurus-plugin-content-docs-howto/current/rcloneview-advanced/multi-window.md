---
sidebar_position: 3
description: "RcloneView의 새 창 기능을 사용하여 내장 Rclone과 외부 Rclone 인스턴스를 동시에 관리하는 방법을 알아보세요."
keywords:
  - rcloneview
  - new window
  - multi-connection
  - external rclone
  - embedded rclone
  - multiple rclone
tags:
  - RcloneView
  - new-window
  - multi-connection
  - external-rclone
  - embedded-rclone
  - multi-windows
date: 2025-06-22
author: Jay
---
# 새 창으로 여러 Rclone 연결 사용하기

RcloneView는 여러 Rclone 인스턴스를 동시에 관리할 수 있는 유연한 인터페이스를 제공합니다. 이는 내장 Rclone과 외부 Rclone 설정을 함께 사용할 때 특히 유용합니다.

## 내장 Rclone 아키텍처

기본 구성에서 RcloneView는 내장 Rclone 바이너리(임베디드 Rclone)를 포함합니다. 이 인스턴스를 통해 사용자는 사용하기 쉬운 GUI 인터페이스로 클라우드 리모트를 관리할 수 있습니다.

### 🔹 내장 모델

- RcloneView는 Rclone을 포함하고 API를 통해 통신합니다.
- 파일은 Rclone을 통해 직접 접근하고 관리됩니다.
- 대부분의 로컬 데스크톱 사용 시나리오에 적합합니다.

<img src="/support/images/en/howto/rcloneview-advanced/embedded-rclone-model.png" alt="embedded rclone model" class="img-medium img-center" />
## 외부 Rclone 아키텍처

원격 서버나 클라우드 인스턴스의 리모트를 관리하는 등의 고급 사용 사례를 위해, RcloneView는 다른 곳에서 실행 중인 외부 Rclone 인스턴스에 연결할 수 있습니다.

### 🔹 외부 모델

- RcloneView는 원격 Rclone 서버(Rclone RC를 통해)에 연결합니다.
- 원격 Rclone이 클라우드 스토리지 접근 및 동기화를 담당합니다.
- 클라우드 호스팅 Rclone 환경(예: AWS EC2, Linux 서버)을 관리하는 데 유용합니다.

<img src="/support/images/en/howto/rcloneview-advanced/external-rclone-model.png" alt="external rclone model" class="img-medium img-center" />
## 새 창 기능: 두 모델 동시 관리

내장 및 외부 Rclone 인스턴스를 동시에 지원하기 위해, RcloneView에는 **새 창** 기능이 포함되어 있습니다. 이를 통해 사용자는 각기 다른 Rclone 백엔드에 연결된 여러 개의 RcloneView GUI 인스턴스를 실행할 수 있습니다.

### ✅ 주요 이점

- 각 창은 고유한 Rclone 인스턴스에 연결할 수 있습니다.
- 로컬 환경과 원격 환경을 동시에 관리할 수 있습니다.
- 서로 다른 클라우드 또는 환경 간에 비교, 동기화, 복사를 원활하게 수행할 수 있습니다.

### 🔸 예시: 홈 창(내장 Rclone)

이 창은 RcloneView에 포함된 내장 Rclone에 연결되어 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/rcloneview-home-window.png" alt="rcloneview home window" class="img-medium img-center" />
:::important 메인 창의 홈 아이콘
메인 RcloneView 창(내장 Rclone에 연결됨)은 오른쪽 상단의 RcloneView 로고 옆에 있는 **홈 아이콘** <img src="/support/icons/home-icon.png" alt="home icon" class="inline-icon" />으로 구분할 수 있습니다.

:::
### 🔸 예시: 새 창(외부 Rclone)

이 창은 AWS Linux 서버에서 실행 중인 외부 Rclone에 연결되어 있습니다.

:::info AWS EC2에서 Rclone 엔진 실행하는 방법  
Ubuntu 기반 EC2 인스턴스에서 Rclone의 API 데몬(`rcd`)을 배포하고 관리하는 방법을 알아보려면 다음을 참조하세요: [AWS EC2 서버에서 Rclone 실행하는 방법](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)  
:::
<img src="/support/images/en/howto/rcloneview-advanced/rcloneview-new-window.png" alt="rcloneview new window" class="img-medium img-center" />
## 🚩비교: 내장 Rclone vs. 외부 Rclone

| 기능                                   | 내장 Rclone                          | 외부 Rclone                                  |
| ------------------------------------- | ------------------------------------ | ------------------------------------------- |
| 로컬 머신에서 실행                     | ✅ 예                                 | ❌ 아니오 (원격 서버에서 실행)                |
| 로컬 디스크 접근                       | 예 — RcloneView가 실행되는 로컬 PC   | 예 — 외부 Rclone이 실행되는 서버              |
| 내장 Rclone 바이너리 사용              | ✅ 기본 포함                          | ❌ 별도 설치 필요                             |
| `설정 > 위치`에서 구성 가능            | ✅ 지원                               | ❌ 해당 없음                                  |
| 네트워크 구성 필요                     | ❌ 아니오                             | ✅ 예 (호스트, 포트, 인증 필요)               |
| 네트워크 성능                          | 로컬/홈 네트워크에 따라 다름          | 서버/클라우드 네트워크에 따라 다름            |

 💡 **새 창** 기능을 사용하여 여러 Rclone 인스턴스를 동시에 관리하세요 — 예를 들어, 로컬 작업을 위해 한 창은 내장 Rclone에 연결하고, 다른 창은 클라우드 측 작업을 위해 외부 Rclone에 연결할 수 있습니다.
