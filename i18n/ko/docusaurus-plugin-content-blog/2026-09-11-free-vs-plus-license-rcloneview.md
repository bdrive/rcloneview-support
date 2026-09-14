---
slug: free-vs-plus-license-rcloneview
title: "FREE vs PLUS 라이선스 — RcloneView 기능 비교"
authors:
  - alex
description: "RcloneView의 FREE와 PLUS 라이선스 기능을 나란히 비교하세요 — 예약, 다중 창, 자동 마운트, 필터링된 비교까지 — 올바른 플랜을 선택하기 위해."
keywords:
  - RcloneView 라이선스
  - RcloneView FREE vs PLUS
  - RcloneView PLUS 기능
  - 예약된 클라우드 동기화
  - 다중 창 파일 관리자
  - 시작 시 자동 마운트
  - 필터가 있는 폴더 비교
  - RcloneView 라이선스 비교
  - 클라우드 동기화 자동화
  - 크로스 플랫폼 파일 관리자
tags:
  - RcloneView
  - feature
  - guide
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# FREE vs PLUS 라이선스 — RcloneView 기능 비교

> 클라우드 스토리지 워크플로우를 구축하기 전에 각 RcloneView 라이선스가 무엇을 제공하는지 정확히 파악하세요.

FREE와 PLUS 라이선스 중 선택하는 데 추측이 필요해서는 안 됩니다. RcloneView는 기능을 명확하게 나눕니다: FREE 라이선스는 이미 90개 이상의 제공업체에 걸친 전체 파일 관리, 동기화, 마운트를 다루며, PLUS는 파워 유저와 팀을 위한 자동화 및 다중 인스턴스 기능을 추가합니다. 이 가이드는 각 등급에 무엇이 포함되어 있는지 정확히 설명하여, 실제 작업 방식에 맞는 라이선스를 선택할 수 있도록 돕습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## FREE 라이선스가 이미 포함하는 것

FREE 라이선스는 축소된 체험판이 아닙니다 — 완전한 일상용 도구 모음입니다. 클라우드 드라이브 마운트 및 언마운트, 전체 파일 탐색기 작업(복사, 이동, 삭제, 이름 변경), 기본 Folder Compare, 그리고 전체 Sync & Job Management 시스템이 모두 무료로 포함됩니다. 즉 1:N 동기화(하나의 소스를 여러 대상에 미러링), 상세 로그가 포함된 Job History, 동기화 실행 전 Dry Run 미리보기, 작업 구성의 내보내기/가져오기가 모두 FREE에서 작동합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing completed sync jobs on the FREE license" class="img-large img-center" />

마운트 전용 도구와 달리, RcloneView는 FREE 라이선스에서도 동일한 90개 이상의 클라우드 제공업체에 걸쳐 동기화와 폴더 비교를 수행하며, OAuth 또는 서비스에 따른 자격 증명 기반 설정을 통해 Remote Manager로 연결됩니다.

## PLUS가 잠금 해제하는 기능

PLUS는 RcloneView가 무인으로 실행되거나 여러 컨텍스트에서 동시에 실행되어야 하는 사용자를 위해 만들어졌습니다. 핵심 기능은 Schedule-Based Sync입니다: 분, 시, 요일, 일, 월 필드를 사용하는 크론탭 방식 예약과, 실행 전에 다음 실행 시간을 미리 볼 수 있는 예약 시뮬레이터가 포함됩니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring a crontab-style sync schedule in RcloneView PLUS" class="img-large img-center" />

예약 기능과 함께 PLUS는 Auto Mount on Startup(기기가 부팅되는 즉시 마운트된 드라이브 준비), Auto Start Schedule on Startup, 각자 상태를 가진 독립적인 RcloneView 인스턴스를 실행할 수 있는 Multi-Window 지원, 폴더 이름이나 파일 유형으로 비교를 제한하는 Folder Compare with Filter를 추가합니다.

## 워크플로우에 맞는 라이선스 선택하기

수동으로 전송을 트리거하고, 파일 관리자처럼 클라우드 스토리지를 탐색하며, 가끔 비교나 동기화를 실행한다면 FREE가 전체 워크플로우를 다룹니다. 앱을 열지 않고도 예약에 따라 동기화 작업이 실행되어야 하거나, 재부팅 후 드라이브가 자동으로 마운트되어야 하거나, 별도의 프로젝트를 위해 여러 개의 독립적인 RcloneView 창이 필요하다면 PLUS가 수동 단계를 없애줍니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job manually from the RcloneView Job Manager" class="img-large img-center" />

## 시작하기

1. **RcloneView 다운로드**: [rcloneview.com](https://rcloneview.com/src/download.html)에서 다운로드하세요.
2. 리모트를 설정하고 수동 동기화나 마운트를 실행하여 FREE 기능 세트가 일상적인 사용에 적합한지 확인하세요.
3. 매일 같은 시간에 동일한 전송을 반복하고 있다면, 예약을 만들어 PLUS 예약 기능이 적합한지 확인해보세요.
4. 어떤 등급이 워크플로우에 맞는지 결정한 후 Help > Activate License에서 라이선스 키를 활성화하세요.

실제 습관에 라이선스를 맞추는 것 — 그 반대가 아니라 — 이 클라우드 스토리지 설정을 단순하고 예측 가능하게 유지합니다.

---

**관련 가이드:**

- [예약 모범 사례 — RcloneView의 크론 및 재시도](https://rcloneview.com/support/blog/schedule-best-practices-cron-retry-rcloneview)
- [RcloneView의 다중 창 병렬 Explorer](https://rcloneview.com/support/blog/multi-window-parallel-explorer-rcloneview)
- [RcloneView의 필터가 있는 Folder Compare](https://rcloneview.com/support/blog/folder-compare-with-filter-rcloneview)

<CloudSupportGrid />
