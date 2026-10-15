---
slug: cloud-storage-civil-engineering-rcloneview
title: "토목 엔지니어링 회사를 위한 클라우드 스토리지 — RcloneView로 프로젝트 파일, 측량 데이터, 백업 관리하기"
authors:
  - tayson
description: "토목 엔지니어링 회사를 위한 클라우드 스토리지: 크로스 플랫폼 GUI인 RcloneView로 여러 클라우드에 걸쳐 프로젝트 도면, 측량 데이터, 백업을 정리하세요."
keywords:
  - 토목 엔지니어링 클라우드 스토리지
  - 토목 엔지니어링 파일 백업
  - 엔지니어링 프로젝트 파일 동기화
  - 측량 데이터 클라우드 백업
  - 엔지니어를 위한 멀티 클라우드 백업
  - RcloneView
  - 클라우드 동기화 GUI
  - 대용량 도면 파일 클라우드
  - 프로젝트 아카이브 클라우드 스토리지
  - rclone GUI
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 토목 엔지니어링 회사를 위한 클라우드 스토리지 — RcloneView로 프로젝트 파일, 측량 데이터, 백업 관리하기

> 명령어를 한 줄도 스크립트로 작성하지 않고 도면, 측량 데이터, 완료된 프로젝트를 여러 클라우드에 안전하게 보관하세요.

중견 토목 엔지니어링 회사는 진행 중인 도로 설계 프로젝트는 Google Drive에, 고객 납품물은 Box나 OneDrive에, 수년간 쌓인 완료 프로젝트 아카이브는 NAS에 두는 경우가 많습니다. 각 위치마다 인터페이스가 달라 일관된 백업을 유지하기 어렵습니다. RcloneView는 이 모두를 하나의 창에 모아 시각적으로 복사, 비교, 전송 예약을 할 수 있게 해 줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 엔지니어링 데이터에 멀티 클라우드 방식이 필요한 이유

엔지니어링 프로젝트는 CAD 도면, GIS 내보내기 파일, 포인트 클라우드 스캔, 계산 스프레드시트, 서명된 PDF 패키지 등 크고 다양한 파일 세트를 만들어 냅니다. 고객이 납품물의 보관 위치를 지정하는 경우가 많아 하나의 제공업체만으로는 모두 해결하기 어렵습니다. RcloneView는 90개 이상의 제공업체에 연결되므로 Google Drive, Box, OneDrive, Amazon S3, 로컬 NAS를 탐색기에서 나란히 사용할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="엔지니어링 회사를 위해 RcloneView에서 클라우드 리모트 추가하기" class="img-large img-center" />

RcloneView는 하나의 창에서 90개 이상의 제공업체를 마운트하고 동기화하며 Windows, macOS, Linux에서 동작하므로, 현장 노트북과 사무실 워크스테이션이 동일한 워크플로를 공유할 수 있습니다.

## 완료된 프로젝트를 저비용 오브젝트 스토리지로 아카이브

프로젝트가 종료되면 파일은 거의 변경되지 않지만 수년간 보관해야 합니다. 듀얼 패널 탐색기를 사용하거나 리모트 간 드래그 앤 드롭으로, 완료된 프로젝트 폴더를 활성 작업 공간에서 Backblaze B2나 Wasabi 같은 S3 호환 버킷으로 복사하세요. 서로 다른 리모트 간 이동은 복사로 수행되므로 결과를 확인하기 전까지 원본은 그대로 유지됩니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="프로젝트 아카이브의 클라우드 간 전송" class="img-large img-center" />

## Folder Compare로 납품물 검증

작업 드라이브에서 무언가를 삭제하기 전에 원본과 아카이브 사이에서 Folder Compare를 실행하세요. 필터로 왼쪽에만 있는 파일, 오른쪽에만 있는 파일, 다른 파일을 확인할 수 있어 모든 도면 세트가 건너왔는지 확인할 수 있습니다. 동기화 작업은 먼저 Dry Run으로 실행하여 복사되거나 삭제될 파일을 미리 확인하세요.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="프로젝트 폴더 간 차이를 보여주는 Folder Compare" class="img-large img-center" />

## 진행 중인 프로젝트의 야간 백업 예약

프로젝트 공유 폴더에서 두 번째 클라우드로 동기화 작업을 만들고 crontab 방식 일정을 추가하면 업무 시간 이후에 백업이 실행됩니다. 예약 기능은 PLUS 라이선스가 필요하며, 수동 작업, 작업 기록(Job History), 여러 대상으로의 1:N 동기화는 FREE 라이선스에서 사용할 수 있습니다. 작업 기록에는 실행마다 상태, 크기, 파일 수가 기록되어 감사 추적 자료가 됩니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView에서 야간 백업 작업 예약하기" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 활성 작업 공간, NAS, 아카이브 버킷의 리모트를 추가하세요.
3. 활성 프로젝트에서 아카이브로 동기화 작업을 만들고 먼저 Dry Run을 실행하세요.
4. 일정(PLUS)을 추가하고 처음 몇 번 실행한 뒤 작업 기록을 확인하세요.

엔지니어링 기록을 수년간 보호하는 데 더 이상 맞춤 스크립트가 필요하지 않습니다.

---

**관련 가이드:**

- [건축 회사를 위한 클라우드 스토리지](https://rcloneview.com/support/blog/cloud-storage-architecture-firms-rcloneview)
- [Dry Run — 클라우드 동기화 미리 보기](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [작업 기록과 전송 로그](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
