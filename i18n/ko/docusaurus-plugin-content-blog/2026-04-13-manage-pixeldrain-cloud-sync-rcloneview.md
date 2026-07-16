---
slug: manage-pixeldrain-cloud-sync-rcloneview
title: "Pixeldrain 클라우드 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - tayson
description: "Pixeldrain을 RcloneView에 연결하여 호스팅된 파일을 탐색하고, 백업이나 장기 보관을 위해 다른 클라우드 제공업체로 동기화하세요."
keywords:
  - Pixeldrain RcloneView
  - Pixeldrain 클라우드 동기화
  - Pixeldrain 백업
  - Pixeldrain 파일 관리
  - Pixeldrain rclone GUI
  - Pixeldrain 파일 전송
  - 클라우드 백업 Pixeldrain
  - Pixeldrain 동기화 설정
tags:
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Pixeldrain 클라우드 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기

> Pixeldrain은 개인 클라우드 스토리지 기능을 갖춘 파일 호스팅 서비스입니다 — RcloneView는 이를 더 넓은 클라우드 생태계와 연결하여 백업 및 체계적인 파일 관리를 지원합니다.

Pixeldrain은 파일 공유 및 호스팅 플랫폼이면서 동시에 개인 클라우드 스토리지 역할도 수행하여, 사용자가 파일을 업로드, 정리, 공유할 수 있게 해줍니다. 웹 인터페이스는 기본적인 작업을 처리할 수 있지만, Pixeldrain의 콘텐츠를 다른 클라우드로 동기화하거나 로컬 아카이브로 내려받아야 하는 사용자에게는 전용 도구가 더 유용합니다. RcloneView는 Pixeldrain을 지원 제공업체로 포함하고 있어, 다른 모든 리모트와 함께 연결하여 하나의 인터페이스에서 전송을 관리할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView에 Pixeldrain 연결하기

RcloneView를 열고 **Remote Manager**로 이동합니다. **New Remote**를 클릭하고 제공업체 목록에서 **Pixeldrain**을 찾습니다. 연결은 Pixeldrain API 키를 사용하며, 이는 Pixeldrain 웹사이트의 계정 설정에서 생성할 수 있습니다. 설정 양식에 API 키를 입력하고 저장합니다.

저장이 완료되면 File Explorer에서 해당 리모트를 엽니다. Pixeldrain의 파일과 디렉터리가 패널에 로드되어 탐색 및 전송이 가능해집니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Pixeldrain remote in RcloneView" class="img-large img-center" />

## 파일 탐색 및 정리

RcloneView의 File Explorer는 다른 모든 제공업체와 동일한 트리 및 목록 보기로 Pixeldrain 스토리지를 표시합니다. 디렉터리를 탐색하고, 파일을 선택하고, 우클릭 옵션을 사용하여 복사, 이동, 삭제할 수 있습니다. 이미지가 많은 컬렉션의 경우 **Thumbnail View**로 전환하여 그리드 형태로 미리보기를 확인할 수 있습니다 — Pixeldrain에 사진이나 스크린샷을 호스팅하고 있고 전송 전에 콘텐츠를 확인하고 싶을 때 유용합니다.

Google Drive, Backblaze B2, 또는 로컬 폴더 등 다른 리모트를 가리키는 두 번째 패널을 열면 Pixeldrain과 대상 사이에서 파일을 직접 드래그 앤 드롭할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Pixeldrain folders with another cloud in RcloneView" class="img-large img-center" />

## 백업 작업 생성하기

Pixeldrain 콘텐츠를 체계적으로 백업하려면 **Job** 기능을 사용하세요. **Jobs**로 이동하여 **New Job**을 클릭하고 Pixeldrain을 소스로 설정합니다. 대상으로는 설정된 리모트 중 아무거나 선택할 수 있습니다. 작업 마법사의 2단계에서 전송 옵션을 구성합니다:

- **Number of transfers**: 동시에 전송할 파일 수
- **Dry Run**: 실제로 이동하지 않고 복사될 내용을 미리 확인
- **Checksum verification**: 전송 후 데이터 무결성을 확인하려면 활성화

작업을 실행하면 RcloneView가 전송 속도와 파일 수를 포함한 실시간 진행 상황을 표시합니다. 작업이 완료되면 결과가 **Job History**에 기록됩니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Pixeldrain files to another cloud provider" class="img-large img-center" />

## 검증을 위한 폴더 비교

Pixeldrain에서 다른 클라우드로 콘텐츠를 마이그레이션한 후, **Folder Compare** 도구를 사용하면 전송이 완전하게 이루어졌는지 확신할 수 있습니다. Pixeldrain 소스와 대상 폴더를 나란히 열면 RcloneView가 한쪽에만 존재하거나 크기가 다른 파일을 강조 표시합니다. 여러 세션에 걸쳐 마이그레이션을 진행했고 누락된 것이 없는지 확인하고 싶을 때 특히 유용합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing Pixeldrain sync records" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. pixeldrain.com의 계정 설정에서 Pixeldrain API 키를 생성하세요.
3. **Remote Manager**를 열고 **New Remote**를 클릭한 후 **Pixeldrain**을 선택하고 API 키를 입력하세요.
4. 파일을 탐색하고 원하는 대상 클라우드로 백업 작업을 구성하세요.

RcloneView를 사용하면 Pixeldrain 콘텐츠를 보다 체계적인 장기 스토리지 환경으로 손쉽게 옮길 수 있습니다.

---

**관련 가이드:**

- [RcloneView로 클라우드 간 마이그레이션하기](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)
- [전송 후 클라우드 동기화 누락 파일 해결하기](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)
- [작업 기록 및 전송 로그 모니터링](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)

<CloudSupportGrid />
