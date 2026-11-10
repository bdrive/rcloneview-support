---
slug: global-rclone-flags-settings-rcloneview
title: "글로벌 Rclone 플래그 — RcloneView의 모든 작업에 사용자 지정 옵션 적용하기"
authors:
  - alex
description: "RcloneView의 글로벌 Rclone 플래그로 추가 rclone 옵션을 전체에 적용하는 방법과 로깅, 구성 비밀번호, 바이너리 경로 설정을 설명합니다."
keywords:
  - rclone 글로벌 플래그
  - RcloneView 설정
  - rclone 플래그 GUI
  - 내장 rclone 설정
  - no-check-certificate
  - rclone 로그 레벨
  - rclone 구성 비밀번호
  - 사용자 지정 rclone 바이너리
  - RcloneView 고급 설정
tags:
  - RcloneView
  - feature
  - tips
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 글로벌 Rclone 플래그 — RcloneView의 모든 작업에 사용자 지정 옵션 적용하기

> 설정에서 rclone 플래그를 한 번만 지정하면 작업마다 반복하지 않고 RcloneView 전체에 적용됩니다.

모든 곳에 rclone 옵션 하나를 추가해야 하는 환경이 있습니다. 개인 서버의 자체 서명 인증서, 사용자 지정 로그 위치, 암호화된 구성 파일 등이 그 예입니다. 이러한 항목은 Embedded Rclone 설정 페이지에 있습니다. RcloneView는 하나의 창에서 90개 이상의 제공자를 마운트하고 동기화하며 Windows, macOS, Linux에서 동작하고, 이 설정은 내장 엔진 전체에 적용됩니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 설정 위치

Settings 탭을 열고 Embedded Rclone을 선택하세요. rclone 바이너리 위치, rclone.conf 위치, 기본 다운로드 및 업로드 폴더, Stop rclone on App Exit 토글, 로깅 옵션, Config Password 필드, Global Rclone Flags 입력란이 있습니다.

Embedded Rclone은 기본적으로 `http://127.0.0.1:5582`에서 수신하며, RcloneView는 rclone RC API를 통해 이 엔진과 통신합니다. 이 설정을 바꾸면 엔진이 시작되는 방식이 바뀌므로 수정 후 Embedded Rclone을 다시 시작하세요.

<img src="/support/images/en/blog/new-remote.png" alt="내장 rclone 설정을 사용하는 RcloneView 리모트 설정 화면" class="img-large img-center" />

## 글로벌 Rclone 플래그 사용하기

Global Rclone Flags 필드는 전체에 적용되는 추가 rclone 플래그를 받습니다. 문서에 나온 예는 `--no-check-certificate`로, WebDAV나 HTTPS 기반 서버가 자체 서명 인증서를 사용할 때 유용합니다. 인증서 검증을 끄는 옵션이므로 공개 엔드포인트가 아닌 신뢰할 수 있는 개인 서버에만 사용하세요.

개별 작업을 조정할 때는 작업별 Advanced Settings(전송 수, 체커 수, 체크섬, 재시도)를 사용하는 편이 좋습니다. 글로벌 플래그는 정말로 모든 곳에 필요한 옵션에만 쓰세요.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="글로벌 플래그를 보완하는 RcloneView의 작업 설정" class="img-large img-center" />

## 로깅과 구성 보호

Enable rclone Logging을 선택하고 로그 폴더와 파일 이름을 지정한 뒤 DEBUG, INFO, NOTICE, ERROR 중 레벨을 고르세요. DEBUG는 가장 상세하며 문제를 보고할 때 지원팀이 요청하는 레벨입니다. Restart Embedded Rclone을 클릭하고 문제를 재현한 다음 로그 파일을 보내세요.

rclone.conf가 암호화되어 있다면 내장 엔진이 리모트를 읽을 수 있도록 여기에 Config Password를 입력하세요. 사용자 지정 rclone 바이너리나 구성 경로를 지정할 수도 있으며, 앱 내 Self Update로 내장 rclone을 최신 상태로 유지할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView에서 rclone 로그와 함께 사용하는 Job History" class="img-large img-center" />

## 시작하기

1. **RcloneView 다운로드**: [rcloneview.com](https://rcloneview.com/src/download.html)에서 받으세요.
2. Settings, Embedded Rclone 순서로 열어 현재 경로를 확인하세요.
3. 필요한 플래그를 Global Rclone Flags에 추가하고, 기록이 필요하면 로깅을 활성화하세요.
4. Embedded Rclone을 다시 시작하고 작은 테스트 작업을 실행하세요.

잘 고른 몇 가지 글로벌 설정만으로 추가 클릭 없이 모든 작업을 일관되게 유지할 수 있습니다.

---

**관련 가이드:**

- [Log Debug: 전송 문제 해결](https://rcloneview.com/support/blog/log-debug-troubleshoot-transfers-rcloneview)
- [RcloneView의 Rclone Self Update](https://rcloneview.com/support/blog/rclone-self-update-rcloneview)
- [SSL/TLS 인증서 오류 해결](https://rcloneview.com/support/blog/fix-ssl-tls-certificate-errors-cloud-rcloneview)

<CloudSupportGrid />
