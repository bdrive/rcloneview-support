---
slug: manage-internet-archive-uploads-with-rcloneview
title: "RcloneView로 Internet Archive 파일 업로드 및 관리하는 방법"
authors:
  - tayson
description: "RcloneView를 사용해 Internet Archive에 파일을 업로드하고, 컬렉션을 정리하며, 로컬 아카이브를 동기화하세요. rclone의 Internet Archive 백엔드를 위한 비주얼 GUI입니다."
keywords:
  - internet archive rcloneview
  - upload to internet archive rclone
  - internet archive rclone gui
  - archive.org file upload
  - internet archive cloud sync
  - rcloneview internet archive
  - archive.org bulk upload
  - internet archive backup
  - rclone internet archive backend
  - preserve files internet archive
tags:
  - RcloneView
  - internet-archive
  - cloud-storage
  - backup
  - guide
  - digital-preservation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 Internet Archive 파일 업로드 및 관리하는 방법

> Internet Archive는 책, 음악, 소프트웨어, 영상, 웹페이지 등 인류의 지식을 무료로, 영구히 보존합니다. RcloneView를 사용하면 명령줄을 사용하지 않고도 archive.org에 파일을 업로드하고, 정리하고, 동기화할 수 있습니다.

Internet Archive(archive.org)는 공개적으로 공유 가능한 파일을 위한 무료 영구 클라우드 스토리지를 제공합니다. 연구자, 아키비스트, 교육자, 그리고 디지털 공유 자산에 기여하고 싶은 모든 사람이 이용하고 있습니다. rclone의 Internet Archive 백엔드는 이를 스크립트화할 수 있게 해주며, RcloneView는 그 기능을 비주얼 인터페이스로 감싸 아카이브 항목을 탐색하고, 새 파일을 업로드하고, 몇 번의 클릭만으로 컬렉션을 동기화할 수 있게 해줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView + Internet Archive로 할 수 있는 것

- 기존 또는 새로운 archive.org 항목에 **파일 및 폴더 업로드**
- 파일 관리자처럼 **업로드한 항목을 시각적으로 탐색**
- 보존을 위해 **로컬 컬렉션을 Internet Archive에 동기화**
- Internet Archive와 다른 클라우드 제공업체 간 **파일 복사**
- **실시간으로 전송 진행 상황 모니터링**

## Internet Archive 리모트 설정하기

### 1단계 — Internet Archive 자격 증명 발급받기

1. [archive.org](https://archive.org)에서 무료 계정을 만듭니다.
2. **My Account → Settings → Security**로 이동해 **S3-like API key**(Access Key + Secret Key)를 생성합니다. 이름과 달리 이는 AWS가 아니라 archive.org 자체의 S3 호환 API입니다.

### 2단계 — RcloneView에 리모트 추가하기

RcloneView를 열고 **New Remote**를 클릭합니다.

<img src="/support/images/en/blog/new-remote.png" alt="Add Internet Archive remote in RcloneView" class="img-large img-center" />

1. 리모트 유형 목록에서 **Internet Archive**를 선택합니다.
2. archive.org에서 발급받은 **Access Key ID**와 **Secret Access Key**를 입력합니다.
3. 리모트 이름을 지정하고(예: `internet-archive`) 저장합니다.

### 3단계 — 항목 탐색하기

연결이 완료되면 RcloneView는 archive.org 항목을 폴더로 보여줍니다. Internet Archive의 각 "항목(item)"은 하나의 업로드(앨범, 도서 스캔, 영상 컬렉션 등)를 담는 컨테이너입니다.

## Internet Archive에 파일 업로드하기

### 새 항목 업로드하기

새 archive.org 항목을 만들고 파일을 업로드하려면:

1. RcloneView의 오른쪽 패널에서 `internet-archive` 리모트 내부로 이동합니다.
2. 고유한 항목 식별자로 새 폴더를 만듭니다(예: `my-1980s-radio-recordings`).
3. 로컬 패널에서 항목 폴더로 파일을 드래그 앤 드롭합니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Browse and upload to Internet Archive items" class="img-large img-center" />

RcloneView가 파일을 전송하고 실시간 진행 상황을 보여줍니다. Internet Archive는 업로드를 비동기로 처리하며, 파일 크기에 따라 몇 분에서 몇 시간 안에 항목이 공개적으로 접근 가능해집니다.

### 기존 항목에 업로드하기

기존 항목 폴더로 이동해 파일을 복사하거나 이동합니다. RcloneView가 멀티파트 업로드와 재시도 로직을 자동으로 처리합니다.

## 로컬 아카이브 컬렉션 동기화하기

지속적인 아카이빙 프로젝트에 이상적인, 로컬 폴더를 Internet Archive 항목과 동기화 상태로 유지하려면:

1. RcloneView에서 **Jobs**를 엽니다.
2. **Source**를 로컬 폴더로 설정합니다(예: `D:\my-archive-project`).
3. **Destination**을 Internet Archive 항목으로 설정합니다(예: `internet-archive:my-1980s-radio-recordings`).
4. 새 파일이나 변경된 파일만 업로드하도록 **Sync** 모드를 선택합니다.
5. 매주 또는 필요할 때 실행되도록 예약합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule sync job to Internet Archive" class="img-large img-center" />

## Internet Archive에서 다운로드 및 복사하기

RcloneView는 양방향으로 작동합니다. 다음과 같은 작업도 가능합니다.

- 공개된 archive.org 항목에서 로컬 컴퓨터로 **파일 다운로드**
- 이중 보존을 위해 Internet Archive에서 다른 클라우드로 **항목 복사**(예: archive.org → Google Drive 또는 Backblaze B2)

## Internet Archive 백엔드에 관한 중요 참고 사항

| 동작 | 세부 사항 |
|----------|--------|
| 항목 생성 | 새 폴더는 새로운 archive.org 항목이 됩니다 |
| 공개 범위 | 업로드된 항목은 기본적으로 공개됩니다 |
| 파일 삭제 | 삭제는 대기열에 들어가며, archive.org가 이를 천천히 처리합니다 |
| 체크섬 | 업로드 시 MD5 체크섬이 검증됩니다 |
| 속도 제한 | archive.org의 크롤링 제한을 준수하세요 — API에 과도한 요청을 보내지 마세요 |

## 사용 사례

**디지털 아카이빙 프로젝트** — 퍼블릭 도메인에 영구 보존하고 싶은 스캔 자료, 녹음, 문서를 업로드합니다.

**소프트웨어 보존** — 라이선스가 허용하는 범위에서 오래된 소프트웨어, 게임, ROM을 아카이브에 기여합니다.

**백업 이중화** — 민감하지 않고 공개적으로 공유 가능한 데이터를 위한 무료 보조 백업 계층으로 Internet Archive를 활용합니다.

**연구 데이터셋** — 전 세계 연구자가 접근할 수 있도록 공개 라이선스로 데이터셋을 업로드합니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. archive.org의 Account Settings에서 **archive.org API 키를 생성**합니다.
3. RcloneView의 리모트 설정 마법사에서 **Internet Archive 리모트를 추가**합니다.
4. **업로드, 동기화, 보존** — 여러분의 파일은 archive.org에서 무료로, 영구히 존재하게 됩니다.

Internet Archive는 1996년부터 웹과 인류 문화를 저장해오고 있습니다. RcloneView는 여러분만의 디지털 자료를 손쉽게 기여할 수 있도록 도와줍니다.

---

**관련 가이드:**

- [RcloneView로 클라우드 백업 암호화하기](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [매일 클라우드 백업 자동화하기](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [멀티 클라우드 백업 전략](https://rcloneview.com/support/blog/multi-cloud-backup-strategy-rcloneview)

<CloudSupportGrid />
