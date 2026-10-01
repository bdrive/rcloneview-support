---
slug: cloud-storage-landscaping-lawn-care-rcloneview
title: "조경 업체를 위한 클라우드 스토리지 — RcloneView로 작업 파일 보호하기"
authors:
  - alex
description: "조경·잔디 관리 업체를 위한 클라우드 스토리지: RcloneView의 예약 동기화와 암호화로 현장 사진, 설계도, 견적서를 백업하세요."
keywords:
  - 조경 업체 클라우드 스토리지
  - 조경 설계 파일 백업
  - 잔디 관리 업체 백업
  - 작업 현장 사진 백업
  - 조경 클라우드 동기화
  - 암호화 클라우드 백업
  - RcloneView 백업
  - 소규모 업체 클라우드 백업
  - 예약 클라우드 백업
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

# 조경 업체를 위한 클라우드 스토리지 — RcloneView로 작업 파일 보호하기

> 작업자가 일하는 방식을 바꾸지 않고도 현장 사진, 설계 도면, 견적서를 외부에 백업하세요.

조경 업체의 파일은 여기저기 흩어져 있습니다. 시공 전후 사진은 휴대폰에, CAD나 설계 내보내기 파일은 사무실 PC에, 서명된 견적서는 공유 폴더에 있습니다. 시즌 도중 노트북 한 대가 고장 나면 각 고객에게 약속한 내용의 이력도 함께 사라집니다. RcloneView는 소규모 업체가 이 작업물을 클라우드 스토리지로 복사하고 제대로 도착했는지 확인할 수 있는 시각적인 방법을 제공합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 백업 전에 작업 파일 정리하기

사무실 PC에 예측 가능한 폴더 구조를 먼저 만드세요. 고객별로 폴더 하나를 두고, 그 안에 사진, 설계, 견적서, 청구서 하위 폴더를 둡니다. 작업자가 찍은 사진은 매일 업무가 끝날 때 고객 폴더에 넣어 두면 됩니다.

RcloneView 탐색기 패널 한쪽에는 로컬 폴더를, 다른 쪽에는 클라우드 리모트를 여세요. 파일 탐색기에서 현장 사진이 업로드 전에 올바른 작업 폴더에 들어갔는지 확인할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 조경 작업 파일용 클라우드 리모트 추가하기" class="img-large img-center" />

## 업무에 맞는 스토리지 선택하기

RcloneView는 Google Drive, OneDrive, Dropbox, Backblaze B2, Wasabi, Amazon S3를 비롯해 90개 이상의 제공업체를 지원하므로, 이미 사용 중인 계정을 쓰거나 대용량 사진 보관용으로 오브젝트 스토리지를 선택할 수 있습니다.

고객의 주소나 계약서가 포함되어 있다면 대상 위치 위에 Crypt 리모트를 추가하세요. 파일 이름과 내용이 rclone Crypt를 통해 업로드 전에 암호화됩니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView에서 작업 폴더를 클라우드 스토리지로 복사하기" class="img-large img-center" />

## 야간 복사 자동화하기

작업 폴더에서 클라우드 대상으로 Sync 또는 Copy 작업을 만드세요. 먼저 Dry Run으로 무엇이 복사되거나 삭제되는지 미리 확인합니다. 단방향 동기화는 대상만 수정하므로 백업에 적합합니다. PLUS 라이선스에서는 crontab 형식의 스케줄을 추가하여 작업자들이 사진을 올린 뒤 매일 밤 작업이 실행되도록 할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView에서 야간 백업 작업 스케줄 설정하기" class="img-large img-center" />

## 백업이 실제로 성공했는지 확인하기

Job History에는 각 실행의 시작 시간, 소요 시간, 상태, 크기, 파일 수가 표시됩니다. 로컬 폴더와 클라우드 사본 사이에 Folder Compare를 사용하면, 특히 설치 작업이 많았던 한 주가 지난 뒤 누락된 항목을 찾을 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView의 백업 실행 작업 기록" class="img-large img-center" />

## 시작하기

1. **RcloneView 다운로드**: [rcloneview.com](https://rcloneview.com/src/download.html)에서 받으세요.
2. New Remote를 통해 클라우드 스토리지를 추가하고, 민감한 파일용으로 Crypt 리모트도 선택적으로 추가합니다.
3. 작업 폴더에서 클라우드로 Sync 작업을 만들고 Dry Run을 실행합니다.
4. 스케줄을 설정(PLUS)하거나 수동으로 실행한 뒤, 매주 Job History를 검토합니다.

안정적인 백업이 있으면 노트북이 고장 나도 불편한 일일 뿐, 한 시즌의 고객 기록을 잃는 일은 없습니다.

---

**관련 가이드:**

- [HVAC 및 배관 시공업체를 위한 클라우드 스토리지](https://rcloneview.com/support/blog/cloud-storage-hvac-plumbing-contractors-rcloneview)
- [인테리어 디자인 회사를 위한 클라우드 스토리지](https://rcloneview.com/support/blog/cloud-storage-interior-design-firms-rcloneview)
- [측량 회사를 위한 클라우드 스토리지](https://rcloneview.com/support/blog/cloud-storage-surveying-firms-rcloneview)

<CloudSupportGrid />
