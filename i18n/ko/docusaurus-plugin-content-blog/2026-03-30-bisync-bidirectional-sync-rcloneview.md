---
slug: bisync-bidirectional-sync-rcloneview
title: "Bisync 양방향 동기화 — RcloneView의 투웨이 클라우드 동기화"
authors:
  - tayson
description: "RcloneView의 bisync 양방향 동기화를 사용해 여러 기기와 여러 클라우드 제공업체 간에 로컬 파일과 클라우드 파일을 양방향으로 동기화하는 방법을 알아보세요."
keywords:
  - bisync rcloneview
  - 양방향 동기화
  - 투웨이 클라우드 동기화
  - rclone bisync
  - 클라우드 파일 동기화
  - 투웨이 파일 동기화
  - bisync 설정
  - rcloneview 동기화
  - 멀티 디바이스 동기화
  - 양방향 백업
tags:
  - feature
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Bisync 양방향 동기화 — RcloneView의 투웨이 클라우드 동기화

> Bisync는 변경 사항을 양방향으로 전파하여, 어느 한쪽을 덮어쓰지 않으면서 로컬 파일과 클라우드 스토리지를 완벽하게 미러링된 상태로 유지합니다.

일반적인 동기화 작업은 단방향입니다. 소스와 대상을 일치시키기 위해 소스에 없는 파일을 대상에서 삭제합니다. Bisync는 다르게 동작합니다. 마지막 실행 이후 양쪽의 변경 사항을 추적하여 추가, 수정, 삭제를 양방향으로 전파합니다. RcloneView는 rclone의 bisync 기능을 그래픽 인터페이스로 제공하여, 명령줄 스크립트를 작성하지 않고도 양방향 클라우드 동기화를 사용할 수 있게 해줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Bisync의 작동 방식

Rclone의 bisync 명령은 각 성공적인 실행 후 소스(Path1)와 대상(Path2) 양쪽의 상태를 기록하는 한 쌍의 목록 파일을 유지합니다. 이후 실행 시 bisync는 각 쪽의 현재 상태를 저장된 목록과 비교하여 무엇이 변경되었는지 확인합니다. Path1의 새 파일은 Path2로 복사되고, Path2의 새 파일은 Path1로 복사되며, 삭제 역시 양방향으로 미러링됩니다.

충돌 감지 기능이 내장되어 있습니다. 동일한 파일이 실행 사이에 양쪽에서 수정된 경우, bisync는 한쪽 버전을 조용히 덮어쓰는 대신 이를 충돌로 표시합니다. 기본 동작은 충돌하는 사본의 이름을 변경하여 두 버전을 모두 보존함으로써 수동으로 차이를 해결할 수 있게 합니다. 이는 여러 사용자나 기기가 동일한 문서를 편집할 수 있는 공유 워크플로에서 매우 중요합니다.

첫 번째 bisync 실행에는 초기 기준 목록을 설정하기 위한 `--resync` 플래그가 필요합니다. RcloneView는 새 bisync 작업을 생성할 때 이를 자동으로 처리합니다. 초기 실행은 resync를 수행하며, 이후 예약된 모든 실행은 일반 델타 모드로 동작합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Bisync bidirectional transfer configuration in RcloneView" class="img-large img-center" />

## RcloneView에서 Bisync 설정하기

RcloneView에서 bisync 작업을 생성하려면 작업 관리자를 열고 작업 유형으로 bisync를 선택합니다. 두 경로를 선택합니다. 예를 들어 `/home/user/Documents`와 같은 로컬 디렉터리를 Path1로, Google Drive 폴더를 Path2로 지정할 수 있습니다. Dropbox 폴더를 OneDrive와 미러링하는 것처럼 두 클라우드 리모트 간에도 bisync를 사용할 수 있습니다.

필터 규칙은 표준 동기화와 마찬가지로 bisync에서도 동작합니다. 포함 및 제외 패턴을 사용하여 bisync를 특정 파일 유형이나 하위 디렉터리로 제한하세요. 예를 들어 로컬 프로젝트 폴더와 공유 OneDrive 디렉터리 사이에서 임시 파일과 OS 메타데이터는 무시하고 `*.docx`와 `*.xlsx` 파일만 bisync할 수 있습니다.

RcloneView의 작업 스케줄러는 15분마다, 매시간, 또는 사용자 지정 cron 일정에 따라 bisync를 정기적으로 실행하는 기능을 지원합니다. 실행 간격을 짧게 유지하면 충돌이 발생할 수 있는 시간을 최소화하고 로컬 컴퓨터와 클라우드 스토리지 간의 거의 실시간에 가까운 동기화를 보장할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a bisync job from the RcloneView job manager" class="img-large img-center" />

## Bisync의 실제 활용 사례

**멀티 디바이스 문서 동기화:** 작업 중인 문서 폴더를 데스크톱과 클라우드 스토리지 간에 동기화된 상태로 유지하세요. 랩톱에서 파일을 편집하면(랩톱 역시 자체 bisync 작업을 통해 동일한 클라우드 폴더와 동기화됨) 다음 실행 시 변경 사항이 연결된 모든 기기에 전파됩니다.

**협업 프로젝트 폴더:** 클라우드 스토리지 폴더를 공유하는 팀은 bisync를 사용해 로컬 작업 사본을 유지할 수 있습니다. 각 팀원의 로컬 변경 사항은 클라우드로 푸시되고, 동료의 원격 변경 사항은 자동으로 다운로드됩니다. 충돌 감지 기능은 동시 편집이 서로를 조용히 덮어쓰지 않도록 보장합니다.

**하이브리드 로컬-클라우드 워크플로:** 빠른 로컬 파일 접근이 필요하면서도 클라우드 백업을 원하는 개발자나 디자이너는 프로젝트 디렉터리를 bisync할 수 있습니다. 로컬 파일 작업은 즉시 반영되며, 클라우드 사본은 백업 및 공유 목적으로 최신 상태를 유지합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring bisync job in RcloneView" class="img-large img-center" />

## Bisync 모범 사례

충돌을 최소화하려면 일관된 일정으로 bisync를 실행하세요. 실행 간격이 길어질수록 편집이 충돌할 가능성이 높아집니다. 활발하게 작업하는 디렉터리의 경우 15~30분 간격이 응답성과 리소스 사용량 사이에서 좋은 균형을 이룹니다. 필터 없이 매우 큰 디렉터리 트리에서 bisync를 실행하는 것은 피하세요. 목록 비교에 시간이 오래 걸릴 수 있습니다. RcloneView의 작업 기록을 사용해 반복되는 충돌을 모니터링하고 그에 맞게 워크플로를 조정하세요.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Bisync job history showing completed two-way synchronization runs" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 소스 및 대상 리모트(로컬 폴더, Google Drive, OneDrive 등)를 구성합니다.
3. 작업 관리자에서 새 bisync 작업을 생성하고 초기 resync를 실행합니다.
4. 지속적인 양방향 동기화를 위해 원하는 간격으로 bisync 작업을 예약합니다.

RcloneView의 Bisync는 스크립트, cron 작업, 명령줄의 복잡함 없이 진정한 양방향 클라우드 동기화를 데스크톱에서 제공합니다.

---

**관련 가이드:**

- [Sync, Copy, Move — RcloneView에서 차이점 설명](https://rcloneview.com/support/blog/sync-copy-move-difference-explained-rcloneview)
- [RcloneView의 필터 규칙과 선택적 동기화](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [RcloneView vs Syncthing — 비교](https://rcloneview.com/support/blog/rcloneview-vs-syncthing-comparison)

<CloudSupportGrid />
