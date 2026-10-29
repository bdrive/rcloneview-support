---
slug: cloud-storage-funeral-homes-rcloneview
title: "장례식장을 위한 클라우드 스토리지 — RcloneView로 유가족 기록 보호하기"
authors:
  - alex
description: "장례식장은 RcloneView로 장례 기록, 계약서, 사진, 추모 영상을 여러 클라우드에 백업할 수 있습니다: 예약 동기화, 암호화, Folder Compare."
keywords:
  - 장례식장 클라우드 스토리지
  - 장례식장 파일 백업
  - 장례식장 문서 보관
  - 추모 영상 백업
  - 암호화 클라우드 백업
  - 소규모 비즈니스 클라우드 백업
  - rcloneview 장례식장
  - 멀티 클라우드 백업
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

# 장례식장을 위한 클라우드 스토리지 — RcloneView로 유가족 기록 보호하기

> 장례 계약서, 추모 사진, 추모 영상을 두 곳 이상에 안전하게 백업해 두세요.

장례식장은 유가족이 수십 년간 보존되기를 기대하는 기록을 보관합니다. 서명된 계약서, 부고, 사전 준비 서류, 사진 슬라이드쇼, 그리고 수 기가바이트에 달할 수 있는 추모 영상 등입니다. 이런 자료는 대개 사무실 PC 한 대나 클라우드 계정 하나에만 있습니다. RcloneView는 소규모 직원도 스크립트 없이 시각적인 방식으로 이 데이터를 두 번째, 세 번째 위치에 복사할 수 있게 해 줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 사본 하나로는 충분하지 않은 이유

공유 드라이브에 15년 치 사건 폴더가 있고, 유가족이 보낸 사진을 받는 Dropbox 계정을 함께 쓰는 장례식장을 생각해 보세요. 디스크 고장, 실수로 인한 삭제, 계정 탈취 중 하나만 일어나도 모든 사건 기록이 한꺼번에 영향을 받습니다. 바람직한 구성은 기본 사본, 외부 클라우드 사본, 그리고 독립된 두 번째 클라우드 또는 로컬 드라이브입니다.

RcloneView는 Google Drive, OneDrive, Dropbox, Backblaze B2, Wasabi, 로컬 및 외장 디스크를 포함해 90개 이상의 제공업체에 연결됩니다. 업무용 드라이브와 오브젝트 스토리지 버킷을 함께 사용하면 백업이 원본과 다른 계정, 다른 제공업체에 보관됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 장례식장 백업을 위한 클라우드 및 로컬 리모트 추가" class="img-large img-center" />

## 반복 가능한 백업 작업 만들기

4단계 마법사에서 **Sync** 또는 **Copy** 작업을 만드세요. 소스는 사건 기록 폴더, 대상은 백업 리모트입니다. 소스에서 삭제한 내용이 전파되기를 원하지 않는다면 Copy를 사용하세요. 먼저 **Dry Run**을 실행해 어떤 파일이 복사되거나 삭제될지 확인합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView에서 사건 폴더를 백업 클라우드로 복사" class="img-large img-center" />

PLUS 라이선스를 사용하면 마지막 마법사 단계에서 crontab 방식의 스케줄링을 추가할 수 있어, 사무실 업무가 끝난 뒤 매일 밤 작업을 실행할 수 있습니다. Job History에는 각 실행의 상태, 크기, 파일 수가 기록되므로 백업이 실제로 이루어지고 있다는 증거로 활용할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView에서 야간 백업 작업 예약" class="img-large img-center" />

## 민감한 기록 보호하기

가족 정보와 금융 정보는 암호화할 가치가 있습니다. 백업 대상 위에 **Crypt** 가상 리모트를 만들면 RcloneView가 파일 이름, 폴더 이름, 내용을 컴퓨터를 떠나기 전에 암호화합니다. Crypt 비밀번호는 사무실 컴퓨터와 별도의 장소에 보관하세요. 비밀번호가 없으면 데이터를 복호화할 수 없습니다.

백업이 원본과 일치하는지 확인하려면 주기적으로 **Folder Compare**를 사용하세요. 왼쪽에만 있는 파일은 아직 복사되지 않은 항목을 보여 주고, 크기가 다른 파일은 불완전한 업로드를 알려 줍니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare로 장례식장 백업 확인" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **New Remote**로 기본 스토리지와 백업 대상을 추가하세요.
3. 민감한 사건 파일을 위해 대상을 Crypt 리모트로 감싸세요.
4. Copy 작업을 만들고 Dry Run을 실행한 뒤, 예약하거나(PLUS) 장례를 마칠 때마다 실행하세요.

만든 사람보다 오래 남아야 하는 기록에는, 어느 한 계정보다 오래 지속되는 백업 계획이 필요합니다.

---

**관련 가이드:**

- [Cloud Storage for Law Firms — Secure Client Files with RcloneView](https://rcloneview.com/support/blog/cloud-storage-law-firms-rcloneview)
- [Cloud Storage for Tax Preparers](https://rcloneview.com/support/blog/cloud-storage-tax-preparers-rcloneview)
- [Encrypt Cloud Backups with a Crypt Remote](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
