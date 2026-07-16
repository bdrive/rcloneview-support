---
slug: drag-drop-cloud-transfer-guide-rcloneview
title: "클라우드 간 드래그 앤 드롭 — RcloneView로 파일을 가장 빠르게 전송하는 방법"
authors:
  - tayson
description: "RcloneView의 듀얼 패널 탐색기에서 드래그 앤 드롭만으로 Google Drive, OneDrive, S3 등 70개 이상의 클라우드 간에 파일을 전송하세요. 명령어도, 스크립트도 필요 없습니다."
keywords:
  - drag drop cloud transfer
  - drag and drop cloud files
  - easy cloud file transfer
  - visual cloud transfer
  - cloud file manager drag drop
  - transfer files between clouds
  - simple cloud migration
  - no code cloud transfer
  - cloud explorer drag drop
  - easy multi cloud transfer
tags:
  - RcloneView
  - drag-and-drop
  - feature
  - cloud-storage
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 클라우드 간 드래그 앤 드롭 — RcloneView로 파일을 가장 빠르게 전송하는 방법

> Google Drive에서 파일을 선택하세요. S3 버킷으로 드래그하세요. 끝입니다. 명령줄도, 스크립트도, 다섯 단계짜리 업로드 과정도 없습니다. 어떤 두 클라우드 사이든 드래그 앤 드롭만 하면 됩니다.

클라우드 파일 전송에 컴퓨터 공학 학위가 필요할 리 없습니다. RcloneView의 듀얼 패널 탐색기는 Google Drive와 S3, OneDrive와 Dropbox, NAS와 Backblaze B2처럼 어떤 두 클라우드 스토리지 위치든 나란히 배치하고, 한쪽에서 다른 쪽으로 드래그하는 것만으로 파일을 전송할 수 있게 해줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 작동 방식

### 듀얼 패널 탐색기

RcloneView는 듀얼 패널 파일 관리자처럼 두 개의 스토리지 위치를 나란히 표시합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Two-pane cloud explorer" class="img-large img-center" />

- **왼쪽 패널**: 어떤 클라우드, NAS, 또는 로컬 드라이브든 가능합니다.
- **오른쪽 패널**: 또 다른 클라우드, NAS, 또는 로컬 드라이브든 가능합니다.

### 드래그 앤 드롭으로 전송하기

1. 한쪽에서 소스 폴더로 이동합니다.
2. 다른 쪽에서 대상 폴더로 이동합니다.
3. 파일이나 폴더를 선택합니다.
4. 한쪽에서 다른 쪽으로 드래그합니다.
5. 전송이 시작됩니다.

### 실시간으로 모니터링하기

파일이 이동하는 동안 전송 진행 상황을 확인하세요.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitor drag and drop transfer" class="img-large img-center" />

## 드래그로 가능한 조합

어떤 조합이든 가능합니다.

| 출발지 | 도착지 | 예시 |
|------|-----|---------|
| Google Drive | AWS S3 | 문서를 S3에 백업 |
| OneDrive | Dropbox | Dropbox를 사용하는 클라이언트와 공유 |
| 로컬 드라이브 | Backblaze B2 | 로컬 백업을 클라우드에 업로드 |
| NAS | Google Drive | NAS 파일을 원격에서 접근 가능하게 만들기 |
| S3 | Azure Blob | 크로스 클라우드 마이그레이션 |
| Dropbox | NAS | 클라우드 파일을 로컬 스토리지에 다운로드 |

## 단순한 드래그 앤 드롭을 넘어서

### 반복 전송을 위해 → 작업 생성하기

같은 파일을 정기적으로 드래그한다면, 이름 붙인 작업으로 저장하세요. 그런 다음 자동으로 실행되도록 예약할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Save drag-drop as scheduled job" class="img-large img-center" />

### 검증을 위해 → 폴더 비교 사용하기

전송 후 양쪽을 비교하여 모든 파일이 제대로 도착했는지 확인하세요.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify transfer completeness" class="img-large img-center" />

### 대용량 전송을 위해 → 진행 상황 모니터링하기

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Track large file transfer" class="img-large img-center" />

## 팁

- **폴더를 드래그**하면 디렉터리 트리 전체를 전송할 수 있습니다.
- **여러 파일을 선택**한 후 드래그하면 일괄 전송이 가능합니다.
- **우클릭**으로 추가 옵션(복사, 이동, 동기화)을 사용할 수 있습니다.
- **주소 표시줄을 사용**하면 특정 경로로 빠르게 이동할 수 있습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **클라우드 계정을 추가**하세요 — 어떤 두 개(또는 그 이상) 프로바이더든 상관없습니다.
3. 듀얼 패널 탐색기에서 **두 계정을 나란히 여세요**.
4. **드래그 앤 드롭**으로 전송하세요.

클라우드 전송, 이제 간단해집니다.

---

**관련 가이드:**

- [동기화 작업 생성하기](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [폴더 내용 비교하기](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [클라우드 스토리지 마운트하기](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)

<CloudSupportGrid />
