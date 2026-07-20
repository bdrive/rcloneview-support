---
slug: manage-google-photos-cloud-sync-backup-rcloneview
title: "Google Photos 저장공간 관리 — RcloneView로 사진 동기화 및 백업하기"
authors:
  - tayson
description: "Google Photos를 RcloneView에 연결하여 사진 라이브러리를 로컬 저장소나 다른 클라우드 제공업체로 백업하세요. 원본 손실 없이 Google Photos를 관리할 수 있습니다."
keywords:
  - Google Photos RcloneView 백업
  - Google Photos 로컬 백업 다운로드
  - Google Photos 클라우드 동기화
  - rclone Google Photos GUI
  - Google Photos 외장 드라이브 백업
  - Google Photos to S3 백업
  - Google Photos 저장공간 관리
  - RcloneView Google Photos
tags:
  - RcloneView
  - google-photos
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Photos 저장공간 관리 — RcloneView로 사진 동기화 및 백업하기

> RcloneView는 OAuth를 통해 Google Photos에 연결하여 사진 라이브러리를 탐색하고, 원본을 로컬 저장소나 다른 클라우드 제공업체로 백업하며, 예약된 내보내기를 실행할 수 있게 해줍니다.

Google Photos는 수십억 명의 Android 사용자를 위한 기본 사진 백업 솔루션이지만, 그 자체로는 백업이 아닙니다. Google 계정이 침해되거나, 저장공간 할당량을 초과하거나, 서비스 약관이 변경되면 사진 라이브러리가 위험에 처할 수 있습니다. RcloneView는 Google Photos를 Google Drive와는 별개의 리모트로 연결하여, 라이브러리에 직접 액세스해 외장 드라이브, NAS 장치, 또는 Amazon S3나 Backblaze B2 같은 콜드 클라우드 스토리지로 다운로드 및 백업할 수 있게 해줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView에서 Google Photos 설정하기

Google Photos는 RcloneView의 리모트 설정에서 별도의 제공업체로 표시됩니다. **Remote 탭 → New Remote → Google Photos**로 이동하여 OAuth 브라우저 로그인으로 인증하세요. RcloneView(rclone을 통해)에 사진에 대한 읽기 액세스 권한을 부여하라는 메시지가 표시되며, 인증 후 라이브러리가 연도와 앨범별로 정리되어 Explorer 패널에 나타납니다.

Google Photos API는 앨범별 또는 날짜 기반 폴더별로 특정 구조에 따라 사진을 표시한다는 점에 유의하세요. API를 통해 사진을 재정리할 수는 없지만, Google One 저장공간이 있다면 카메라에서 업로드된 RAW 파일을 포함하여 원본을 전체 해상도로 탐색하고 다운로드할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Google Photos as a remote in RcloneView" class="img-large img-center" />

## Google Photos를 로컬 저장소로 백업하기

가장 일반적인 사용 사례는 Google Photos 라이브러리 전체를 외장 드라이브나 NAS로 다운로드하는 것입니다. Job Manager에서 Google Photos를 소스로, 로컬 외장 드라이브(또는 NAS 경로)를 대상으로 하는 Copy 작업을 생성하세요. **기존 파일 건너뛰기**를 활성화하면 이후 실행이 증분 방식으로 처리되어, 마지막 백업 이후 새로 추가된 사진만 다운로드됩니다.

10년치 사진 5만 장, 총 150GB를 보유한 가족의 경우, 초기 다운로드에는 몇 시간이 걸립니다. 일정을 한 번 실행으로 설정하여 밤새 실행하세요. 이후 매주 예약된 실행은 그 주에 업로드된 새 사진만 추가하여, 전체를 다시 전송하지 않고도 로컬 백업을 최신 상태로 유지합니다.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Backing up Google Photos library to local storage in RcloneView" class="img-large img-center" />

## 크로스 클라우드 백업: Google Photos에서 S3 또는 Backblaze B2로

클라우드 간 백업을 위해서는 Google Photos를 소스로, Amazon S3 또는 Backblaze B2를 대상으로 설정하세요. 이렇게 하면 별도의 클라우드 제공업체에 사진 라이브러리의 독립적인 백업이 생성되어, 로컬 저장공간 용량이 없어도 Google 계정 문제로부터 보호받을 수 있습니다.

동기화 마법사 3단계의 필터 규칙을 사용하여 특정 파일 형식(`.jpg`, `.heic`, `.mp4`, `.raw`)만 포함하고, 필요 없다면 Google의 메타데이터 JSON 사이드카 파일을 제외하세요. 일상적인 작업에서는 최근 12개월간의 사진만 백업하도록 최대 파일 나이 필터를 설정하고, 과거 아카이브를 위해서는 별도의 일회성 작업을 만드세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Google Photos to Backblaze B2 cross-cloud backup in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. New Remote 마법사에서 OAuth 브라우저 인증을 통해 Google Photos를 리모트로 추가하세요.
3. Google Photos에서 외장 드라이브나 클라우드 백업 버킷으로 Copy 작업을 생성하세요.
4. 새 사진을 자동으로 캡처하도록 매주 증분 실행을 예약하세요.

RcloneView를 사용하면 Google Photos는 안정적으로 백업할 수 있는 소스가 되어, 소중한 추억이 Google 인프라와 독립된 사본을 갖도록 보장합니다.

---

**관련 가이드:**

- [RcloneView로 Google Photos를 외장 드라이브와 NAS에 백업하기](https://rcloneview.com/support/blog/backup-google-photos-external-drive-nas-rcloneview)
- [RcloneView로 클라우드 사진 라이브러리 정리하기](https://rcloneview.com/support/blog/declutter-cloud-photo-library-rcloneview)
- [RcloneView로 Google Drive 클라우드 동기화 및 백업 관리하기](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
