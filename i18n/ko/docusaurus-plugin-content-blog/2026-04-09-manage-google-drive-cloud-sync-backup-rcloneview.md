---
slug: manage-google-drive-cloud-sync-backup-rcloneview
title: "RcloneView로 Google Drive 파일과 클라우드 동기화 관리하기"
authors:
  - tayson
description: "RcloneView로 Google Drive 파일을 관리하세요. 시각적 GUI를 사용하여 Google Drive, 공유 드라이브, 그리고 다른 클라우드 제공업체 간의 데이터를 동기화, 백업, 전송할 수 있습니다."
keywords:
  - rcloneview
  - google drive sync rcloneview
  - google drive backup
  - google drive file manager
  - google drive cloud sync tool
  - google drive to s3
  - google drive rclone gui
  - google shared drives backup
  - google drive multi-cloud
  - google drive automated backup
tags:
  - google-drive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 Google Drive 파일과 클라우드 동기화 관리하기

> Google Drive는 Google Workspace의 근간이지만, 백업과 클라우드 간 전송을 관리하려면 기본 클라이언트 이상의 기능이 필요합니다 — **RcloneView**는 시각적 인터페이스를 통해 그 제어권을 제공합니다.

Google Drive는 Gmail, Drive, Photos에 공유되는 15GB의 무료 저장 공간으로 20억 명이 넘는 사용자에게 서비스를 제공합니다. Workspace 플랜은 Enterprise 등급에서 무제한 저장 공간까지 확장됩니다. Google Drive 기본 데스크톱 클라이언트는 파일을 로컬 컴퓨터로 동기화하지만, AWS S3, OneDrive, NAS로 데이터를 복제할 수는 없습니다. RcloneView는 Drive API v3를 통해 Google Drive에 연결하며, Google Drive와 다른 모든 스토리지 제공업체 간에 탐색, 동기화, 복사, 이동, 백업 예약까지 가능한 완전한 파일 관리 인터페이스를 제공합니다.

과제 자료를 보호하려는 학생이든, 수천 개의 RAW 파일을 관리하는 사진작가든, 공유 드라이브를 독립적인 백업 대상으로 동기화하려는 Workspace 관리자든, RcloneView는 기본 클라이언트가 제공하지 않는 기능을 제공합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView에서 Google Drive 연결하기

Google Drive를 추가하는 과정은 표준 OAuth 2.0 흐름을 사용합니다. 리모트 관리자를 열고 **Google Drive**를 선택한 후 인증을 클릭하세요. 브라우저 창이 열리면 Google 계정으로 로그인하고 접근 권한을 부여합니다. 토큰은 로컬 rclone 설정에 안전하게 저장됩니다.

설정 중에는 접근 범위를 선택합니다 — 전체 드라이브 접근, 읽기 전용, 또는 RcloneView가 생성한 파일로 제한되는 파일 수준 접근입니다. 대부분의 백업 및 동기화 워크플로우에는 전체 접근이 적합한 선택입니다. 이 단계에서 공유 드라이브(이전 명칭 팀 드라이브)에 대한 접근도 구성할 수 있으며, ID로 특정 공유 드라이브를 선택하거나 RcloneView가 사용 가능한 모든 드라이브를 나열하도록 할 수 있습니다.

Google Drive는 API 할당량을 강제합니다 — 기본적으로 프로젝트당 100초에 10,000건의 쿼리입니다. RcloneView는 403 userRateLimitExceeded 응답을 지수 백오프로 자동 처리합니다. 대규모 작업의 경우, 자체 Google Cloud 프로젝트를 등록하고 자신의 클라이언트 ID를 제공하여 할당량 한도를 늘릴 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Google Drive remote in RcloneView Remote Manager" class="img-large img-center" />

## 내 드라이브 vs. 공유 드라이브

Google Drive는 내 드라이브(사용자 계정에 연결된 개인 저장 공간)와 공유 드라이브(파일이 개인이 아닌 팀 소유인 조직 소유 저장 공간)를 구분합니다. 이 구분은 동기화와 백업에 있어 중요한데, 공유 드라이브는 소유권 규칙, 더 엄격한 파일 명명 규칙, 별도의 저장 할당량이 다르기 때문입니다.

RcloneView는 두 가지 모두 투명하게 처리합니다. 듀얼 패널 탐색기에서 내 드라이브와 공유 드라이브를 나란히 열어 폴더 내용을 비교하고 둘 사이를 동기화할 수 있습니다. 내 드라이브에서 공유 드라이브로 동기화할 때, RcloneView는 공유 드라이브의 제약 사항에 맞춰 자동으로 조정합니다 — 지원되지 않는 문자가 포함된 파일은 이름이 변경되고, 바로가기 파일은 사용자 설정에 따라 해석되거나 건너뜁니다.

## Google Drive와 다른 클라우드 제공업체 간 동기화

RcloneView의 듀얼 패널 탐색기는 Google Drive를 다른 리모트와 나란히 배치합니다. 저렴한 백업을 위해 전체 Drive를 Backblaze B2로 동기화하거나, 특정 프로젝트 폴더를 아카이브용으로 AWS S3에 복사하거나, 비용 효율적인 콜드 스토리지를 위해 오래된 파일을 Wasabi로 이동할 수 있습니다.

Google Drive는 파일 무결성 검증에 MD5 체크섬을 사용합니다. RcloneView는 동기화 중 MD5 비교를 기본적으로 지원하므로 실제로 변경된 파일만 전송됩니다. 이는 시간과 API 할당량을 모두 절약해 줍니다. 고정된 파일 크기 없이 클라우드 네이티브 형식으로 저장되는 Google Docs, Sheets, Slides의 경우, RcloneView는 다운로드 및 동기화 중에 이를 표준 형식(docx, xlsx, pptx)으로 내보냅니다.

대용량 전송의 경우 다중 스레드 다운로드를 구성하고 청크 크기를 조정할 수 있습니다. Google Drive는 5MB 이상 파일에 대해 재개 가능한 업로드를 지원하며, RcloneView는 이를 활용하여 전체 파일을 다시 시작하지 않고 중단으로부터 복구합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Google Drive files to another cloud provider in RcloneView" class="img-large img-center" />

## Google Drive 자동 백업 예약하기

Google Drive에 있는 데이터의 단일 사본은 백업이 아닙니다. 실수로 인한 삭제, 계정 정지, 랜섬웨어는 모두 데이터 손실로 이어질 수 있습니다. 별도의 제공업체에 대한 독립적인 백업은 중요한 안전망을 추가합니다.

RcloneView의 스케줄러는 이 과정을 자동화합니다. Google Drive에서 AWS S3나 Backblaze B2로의 야간 동기화 작업을 구성하면, RcloneView가 변경 사항 감지, 전송, 로깅을 처리합니다. 작업 기록 패널은 모든 실행을 통계와 함께 기록합니다 — 전송된 파일, 건너뛴 파일, 이동된 총 바이트 수, 소요 시간입니다.

Workspace 관리자의 경우, 공유 드라이브의 예약된 백업을 통해 팀 데이터가 Google의 인프라와 독립적으로 복제되도록 보장할 수 있습니다. 추가적인 보호 계층을 위해 예약된 백업과 암호화(crypt 리모트 사용)를 함께 사용하세요.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automated Google Drive backup in RcloneView" class="img-large img-center" />

## 폴더 비교 및 데이터 검증

대규모 동기화를 실행하기 전에, RcloneView의 비교 기능은 정확히 무엇이 변경될지 보여줍니다. 두 개의 폴더 — 하나는 Google Drive, 다른 하나는 다른 리모트 — 를 선택하면 RcloneView는 한쪽에만 존재하는 파일, 크기나 해시가 다른 파일, 동일한 파일을 강조 표시합니다.

이는 마이그레이션 이후 특히 유용합니다. Google Drive 원본과 백업 대상 간에 비교를 실행하여 모든 파일이 온전하게 도착했는지 확인하세요. 시각적 차이 표시를 통해 원본을 폐기하기 전에 누락된 부분을 쉽게 발견하고 해결할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Google Drive files with another cloud in RcloneView" class="img-large img-center" />

## Google Drive를 로컬 드라이브로 마운트하기

RcloneView는 Google Drive를 Windows에서는 로컬 드라이브 문자로, macOS와 Linux에서는 마운트 지점으로 마운트할 수 있습니다. 이를 통해 파일 관리자, 비디오 편집기, 명령줄 도구 등 모든 애플리케이션에서 먼저 다운로드하지 않고도 Drive 파일에 직접 접근할 수 있습니다.

최상의 성능을 위해 VFS 캐싱을 활성화하세요. 이는 최근 접근한 파일을 로컬에 저장하여 이후 읽기가 즉각적으로 이루어지도록 합니다. 캐시 크기와 만료 시간은 구성 가능합니다. 마운팅은 전체 동기화 없이 Drive 파일을 탐색하거나 미리 보기해야 하는 미디어 워크플로우에 특히 유용합니다.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mounting Google Drive as a local drive in RcloneView" class="img-large img-center" />

## 실시간 전송 모니터링

대용량 전송 중에 RcloneView는 전송 속도, 파일별 진행 상황, 전체 완료율을 보여주는 실시간 모니터링 대시보드를 제공합니다. 대기열의 나머지 작업에 영향을 주지 않고 개별 전송을 일시 중지, 재개, 취소할 수 있습니다. 대역폭 제한은 Google Drive 전송이 네트워크를 포화시키지 않도록 방지합니다 — 업무 시간에는 제한을 설정하고 야간에는 전체 속도를 허용하세요.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring for Google Drive in RcloneView" class="img-large img-center" />

## 파일 탐색 및 관리

RcloneView의 탐색기는 Google Drive 웹 인터페이스가 제공하지 않는 기능을 제공합니다 — 수만 개의 파일에 대한 일괄 작업, 두 클라우드 제공업체 간의 드래그 앤 드롭, 나란히 놓인 폴더 비교입니다. 탐색기를 통해 Google Drive에서 직접 이름 변경, 이동, 삭제, 폴더 생성을 할 수 있습니다. 공유 드라이브, 바로가기, 중첩된 폴더 구조는 모두 탐색기 패널에서 탐색할 수 있습니다.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files to and from Google Drive in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 리모트 관리자에서 OAuth를 통해 Google 계정을 인증하고 Drive 유형(내 드라이브 또는 공유 드라이브)을 선택하세요.
3. 듀얼 패널 탐색기에서 Google Drive를 탐색하고 다른 제공업체로의 동기화 또는 복사 작업을 설정하세요.
4. S3, B2, 또는 다른 클라우드에 중복 사본을 유지하도록 일일 백업을 예약하세요.

Google Drive는 협업과 문서 편집을 처리하지만, RcloneView는 여러분이 사용하는 모든 클라우드에서 데이터가 백업되고, 이식 가능하며, 접근 가능하도록 보장합니다.

---

**관련 가이드:**

- [Google Drive 추가하기](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [원격 스토리지 탐색 및 관리](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [동기화 작업 생성하기](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [클라우드 스토리지를 로컬 드라이브로 마운트하기](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

<CloudSupportGrid />
