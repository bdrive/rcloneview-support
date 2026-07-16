---
slug: rcloneview-synology-rclone-gui
title: "Synology NAS에서 GUI로 rclone 사용하기: SSH 필요 없음"
authors:
  - tayson
description: "SSH나 CLI 없이 Synology NAS에서 rclone을 실행하세요. RcloneView로 리모트를 관리하고, 변경 사항을 비교하고, 암호화하고, 클라우드 백업을 안전하게 자동화할 수 있습니다."
keywords:
  - synology rclone
  - rclone synology nas
  - rcloneview synology
  - synology cloud backup
  - rclone gui
  - no ssh backup
  - nas to cloud backup
  - rcloneview jobs
  - compare first backup
  - rcloneview crypt remote

tags:
  - sync
  - file-management
---

import RvCta from '@site/src/components/RvCta';

# Synology NAS에서 GUI로 rclone 사용하기: SSH 필요 없음

> Synology 사용자는 SSH나 CLI의 위험 없이 rclone의 강력함을 원합니다. RcloneView는 하나의 작업 공간에서 시각적 제어, 더 안전한 백업, 반복 가능한 자동화를 제공합니다.

DSM 도구는 좋은 출발점이지만, 많은 NAS 사용자는 결국 클라우드 지원의 공백, 취약한 제어, 불명확한 비용이나 보안 트레이드오프 같은 한계에 부딪힙니다. rclone은 확실한 업그레이드지만, 전통적인 방식은 SSH와 명령줄 지식을 요구합니다. 이 가이드는 CLI 부담을 없애면서 rclone의 강력함을 유지하는 GUI 우선 아키텍처를 보여줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## "Synology rclone"이 인기 검색어인 이유

Synology NAS 사용자는 보통 다음 세 가지를 원합니다.

- DSM 도구보다 폭넓은 클라우드 지원
- Copy, Sync, 필터에 대한 파일 단위 제어
- 벤더 종속과 불투명한 백업 포맷으로부터의 자유

rclone은 이 모든 것을 제공하지만, 대부분의 가이드는 SSH와 CLI를 전제로 합니다. 실제 검색 의도는 단순합니다. *터미널 없이 rclone을 사용하는 것*.

## rclone은 강력하지만 CLI 전용이라는 장벽이 있다

일반적인 NAS rclone 설정은 다음과 같습니다.

- SSH 활성화
- 터미널로 접속
- `rclone.conf` 편집 또는 관리
- 수동 또는 cron을 통한 명령 실행

많은 NAS 사용자에게 이는 실제 위험이 됩니다.

- 오타로 데이터가 삭제될 수 있음
- Sync 전 시각적 미리보기가 없음
- 실패 후 로그를 추적하기 어려움

## 더 나은 아키텍처: NAS는 저장소, GUI는 제어

핵심 아이디어:

- NAS는 **데이터 엔진**으로 남는다
- RcloneView가 **컨트롤 센터**가 된다

내부적으로는 여전히 rclone을 사용하지만, 시각적이고 안전한 인터페이스를 통해 관리합니다.

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="Synology NAS detection and connection" class="img-large img-center" />

## RcloneView가 Synology 워크플로우에서 바꾸는 것

- SSH 없는 리모트 설정
- 전송 전 시각적 Compare
- 한 곳에 모인 작업 이력과 로그
- cron 대신 GUI 스케줄링

RcloneView는 NAS를 대체하지 않습니다. CLI의 번거로움 없이 NAS를 클라우드 준비 상태로 만들어 줄 뿐입니다.

## 일반적인 설정 옵션 (SSH 중심이 아닌 워크플로우)

### 옵션 1: NAS를 소스로, RcloneView를 컨트롤러로

- NAS 공유 폴더 -> 클라우드 대상
- 모든 Copy/Sync/Compare를 RcloneView에서 제어

### 옵션 2: 하이브리드 모델

- NAS는 데이터를 로컬에 저장
- RcloneView가 Compare, 암호화, 스케줄링을 담당

## SSH 의존 없는 단계별 흐름

### 1단계: 보호할 NAS 데이터 식별

- 기본적으로 전체 볼륨은 건너뛰기
- 중요한 공유 폴더 선택
- 프로젝트나 사용자별로 구분

### 2단계: RcloneView에 클라우드 리모트 추가

- Google Drive, OneDrive, S3, Wasabi, Backblaze
- OAuth 또는 키 기반 설정

<img src="/support/images/en/blog/new-remote.png" alt="New Remote screen" class="img-large img-center" />

### 3단계: NAS 폴더를 소스로 취급

- 매핑되거나 마운트된 NAS 경로 사용
- 읽기/쓰기 권한을 명시적으로 유지

## NAS + rclone에서 GUI가 중요한 이유

### 시각적 안전성

- Copy와 Sync가 명확히 구분됨
- 방향 오류를 더 쉽게 발견

### 전송 전 Compare

- 데이터 이동 전에 정확한 차이를 확인
- 임시 파일이나 캐시 파일 같은 NAS 노이즈 필터링

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results filters" class="img-large img-center" />

### 비전문가를 위한 낮은 위험

- 외울 CLI 문법이 없음
- 파괴적인 실수의 여지가 적음

## NAS 데이터에 Compare 사용하기

NAS 폴더에는 흔히 다음이 포함됩니다.

- `@eaDir`
- 임시 캐시
- 패키지가 생성한 파일

Compare는 실제 변경 사항을 식별하고 불필요한 업로드를 피하도록 도와줍니다. 또한 각 백업 실행 전에 비용을 미리 파악할 수 있게 해줍니다.

<img src="/support/images/en/tutorials/wasabi-and-local-compare-and-copy.png" alt="Compare and copy only changes" class="img-large img-center" />

## NAS 백업을 위한 Copy vs Sync

### Copy (권장 기본값)

- 대상에서 삭제가 발생하지 않음
- 백업에 가장 안전함
- 롤백이 쉬움

### Sync (고급 사용자 전용)

- 통제된 미러링에만 사용
- 항상 먼저 Dry Run 실행

<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run.png" alt="Sync dry run" class="img-large img-center" />

## 업로드 전 NAS 데이터 암호화 (Crypt Remote)

NAS 암호화는 데이터가 NAS를 벗어나면 더 이상 보호해 주지 않습니다. Crypt Remote는 업로드 전에 클라이언트 측 암호화를 제공합니다.

- 파일 내용 및 선택적 파일명 암호화
- 클라우드에서의 제로 지식(zero-knowledge) 저장

<div class="img-grid-2">
<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/new-remote-add-crypt.png" alt="Add Crypt remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/virtual-add-select-remote-and-folder.png" alt="Select Crypt target folder" class="img-large img-center" />
</div>

## cron 없는 스케줄링 및 자동화

Copy나 Sync를 Job으로 저장한 뒤 시각적으로 예약하세요.

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/save-sync-to-jobs.png" alt="Save sync to Jobs" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-scheduling.png" alt="Add job scheduling" class="img-large img-center" />
</div>

이를 통해 다음을 얻을 수 있습니다.

- 작업 이력과 실패 가시성
- 반복 가능한 구성
- 팀 간 인수인계 용이성

## 실제 NAS 백업 시나리오

### 홈 NAS -> Google Drive

- 사진과 문서
- 빠른 단일 파일 복원

### 소규모 오피스 NAS -> S3 또는 Wasabi

- 예측 가능한 비용과 장기 저장
- 통제된 Copy 작업

### 파워 유저 또는 IT 관리자

- NAS -> 멀티 클라우드 대상
- 부서나 프로젝트별로 분리된 작업

## 보안 및 안전 고려 사항

- 가능하면 읽기 전용 마운트 사용
- 백업 작업과 동기화 작업을 분리
- 클라우드에서 파일을 직접 열어 복원 테스트

## 흔한 오해

**"CLI가 항상 더 낫다"**
강력하지만, 프로덕션 NAS 데이터에서는 위험합니다.

**"GUI는 초보자용일 뿐"**
GUI는 운영 안전성과 감사 가능성(auditability)을 향상시킵니다.

## 결론: rclone은 강력하고, 중요한 것은 제어다

Synology 사용자는 유연성 때문에 rclone을 선택합니다. RcloneView는 그 강력함을 유지하면서 SSH와 CLI의 번거로움을 없애 줍니다. 더 안전한 워크플로우, 더 나은 가시성, 신뢰할 수 있는 백업을 얻을 수 있습니다.

터미널 없이 Synology에서 rclone을 사용하고 싶다면, 이것이 가장 간단한 방법입니다.

