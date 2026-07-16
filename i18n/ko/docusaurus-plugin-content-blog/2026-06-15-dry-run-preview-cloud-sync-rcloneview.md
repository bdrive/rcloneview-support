---
slug: dry-run-preview-cloud-sync-rcloneview
title: "드라이 런 미리보기 — RcloneView에서 변경 사항을 적용하기 전에 클라우드 동기화 테스트하기"
authors:
  - tayson
description: "RcloneView의 드라이 런 모드를 사용하여 클라우드 동기화가 실행되기 전에 복사되거나 삭제될 파일을 미리 확인하세요 — 대용량 또는 민감한 전송을 위한 필수 안전 점검입니다."
keywords:
  - dry run cloud sync
  - test sync before running
  - RcloneView dry run
  - preview cloud sync changes
  - simulate cloud backup
  - cloud sync safety check
  - rclone dry run GUI
  - avoid accidental file deletion
  - cloud sync simulation
  - verify sync before commit
tags:
  - feature
  - tips
  - troubleshooting
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 드라이 런 미리보기 — RcloneView에서 변경 사항을 적용하기 전에 클라우드 동기화 테스트하기

> 수 테라바이트의 데이터를 동기화하거나 대상에서 파일을 삭제하기 전에, RcloneView의 드라이 런 모드를 사용하여 파일을 하나도 이동시키지 않고 예정된 모든 변경 사항을 미리 확인하세요.

클라우드 동기화 작업에서 가장 값비싼 실수 중 하나는 작업이 중요한 파일을 삭제하거나, 최신 버전을 덮어쓰거나, 포함될 의도가 전혀 없던 수천 개의 파일을 끌어왔다는 사실을 나중에서야 발견하는 것입니다. RcloneView에 내장된 드라이 런 기능은 이러한 위험을 완전히 제거합니다. 실행 전에 동기화 작업을 시뮬레이션함으로써, 어떤 파일이 복사될지와 어떤 파일이 삭제될지를 정확히 검토할 수 있으며, 실제 전송이 시작되기 전에 작업 구성에 대한 완전한 확신을 가질 수 있습니다. 이는 새 작업을 처음 설정할 때나 기존 작업의 필터 규칙을 조정한 후 특히 유용합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 드라이 런이 보여주는 것

RcloneView에서 드라이 런을 실행하면, 작업 엔진이 구성된 소스와 대상에 대해 전체 동기화 로직을 수행하지만 실제 파일 작업은 전혀 실행하지 않습니다. 결과는 두 가지 중요한 범주로 나뉜 상세한 미리보기입니다. 소스에서 대상으로 **복사될 파일**과, 소스와 일치시키기 위해 대상에서 **삭제될 파일**입니다. 전체 작업 목록을 스크롤하며 승인하기 전에 각 항목을 확인할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Reviewing planned file operations in a dry run simulation in RcloneView" class="img-large img-center" />

이는 대상이 소스를 정확히 미러링하도록 수정되는 단방향 동기화 작업에서 가장 중요합니다. 파일이 최근 소스 폴더에서 제거되었지만 여전히 대상에 필요한 경우, 드라이 런은 실제로 삭제가 일어나기 전에 예정된 삭제 작업을 보여줍니다. 예를 들어 500,000건의 사건 문서를 Amazon S3에 백업하는 로펌은 실행 전에 예약된 각 배치를 확인함으로써 우발적인 데이터 손실을 방지하는 큰 이점을 얻습니다.

## RcloneView에서 드라이 런을 실행하는 방법

RcloneView에서 드라이 런을 사용하는 것은 간단합니다. **작업 관리자(Job Manager)**에서 동기화 작업을 생성하거나 열고, 소스와 대상, 그리고 파일 유형 제외, 최대 파일 크기, 폴더 깊이 제한과 같은 필터링 옵션을 구성합니다. 테스트할 준비가 되면 일반 실행 대신 **드라이 런(Dry Run)** 옵션을 선택합니다. RcloneView는 시뮬레이션을 수행하고 전송(Transferring) 탭에 예정된 작업의 전체 목록을 표시합니다 — 실제 실행을 의도적으로 시작하기 전까지는 어떠한 데이터도 이동하지 않습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Starting a dry run simulation for a cloud sync job in RcloneView" class="img-large img-center" />

드라이 런 결과를 검토한 후에는 필터 설정을 다듬고 필요한 만큼 시뮬레이션을 반복할 수 있습니다. 예정된 작업 목록이 정확히 기대한 대로일 때만 실제 동기화를 실행해야 합니다. 이 반복적인 접근 방식은 여러 클라우드 공급자에 걸친 대규모 디렉터리 구조에서 복잡한 필터 규칙을 다룰 때 특히 유용합니다.

## 작업 기록에서 드라이 런 결과 확인하기

RcloneView는 모든 드라이 런을 **작업 기록(Job History)** 화면에 실제 작업 실행과 나란히 시뮬레이션 실행으로 명확하게 표시하여 기록합니다. 시뮬레이션된 파일 수, 예상 총 용량, 소요 시간, 그리고 발생한 경고나 오류를 확인할 수 있어 변경 사항을 적용하기 전에 작업의 동작을 완전히 파악할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Dry run simulation recorded in RcloneView job history with status details" class="img-large img-center" />

정기적으로 예약된 백업을 실행하는 팀의 경우, 구성 변경 후 드라이 런을 수행하는 것은 타협할 수 없는 안전 단계입니다. 데이터가 전송되지 않고 저장 공간도 소비되지 않으므로 비용이 전혀 들지 않지만, 그렇지 않으면 동기화가 완료된 후에야 드러났을 되돌리기 어려운 실수를 방지해 줍니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **홈 탭 > 동기화(Sync)**를 열고 소스와 대상으로 새 동기화 작업을 구성하세요.
3. 작업 관리자에서 **드라이 런(Dry Run)** 모드를 선택하여 예정된 모든 파일 작업을 미리 확인하세요.
4. 복사 및 삭제 목록을 검토하고 필요하면 필터를 조정한 후, 확신을 가지고 실제 동기화를 실행하세요.

드라이 런은 신중하고 되돌릴 수 있는 클라우드 작업과 값비싼 뜻밖의 사고를 구분 짓는 가장 간단한 습관입니다.

---

**관련 가이드:**

- [RcloneView로 필터 규칙과 선택적 동기화 사용하기](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [RcloneView로 체크섬 검증 클라우드 마이그레이션 수행하기](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)
- [RcloneView로 일일 클라우드 백업 자동화하기](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
