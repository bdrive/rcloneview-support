---
slug: cloud-storage-drone-survey-mapping-rcloneview
title: "드론 측량 및 매핑 회사를 위한 클라우드 스토리지 — RcloneView로 대용량 데이터셋 관리하기"
authors:
  - jay
description: "드론 측량 이미지, 정사영상, LiDAR 데이터셋을 RcloneView의 동기화, 마운트, 비교 도구로 여러 클라우드 스토리지 제공업체에서 관리하세요."
keywords:
  - 드론 측량 클라우드 스토리지
  - 매핑 회사 백업
  - 정사영상 파일 저장
  - LiDAR 데이터 클라우드 동기화
  - 드론 이미지 백업
  - 지리공간 데이터 관리
  - RcloneView 드론 측량
  - 측량 회사 클라우드 스토리지
  - 드론 데이터 전송
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

# 드론 측량 및 매핑 회사를 위한 클라우드 스토리지 — RcloneView로 대용량 데이터셋 관리하기

> 원본 촬영 이미지, 처리된 정사영상, 포인트 클라우드는 빠르게 쌓입니다 — RcloneView는 팀이 사용하는 모든 클라우드에서 이를 정리된 상태로 유지합니다.

한 번의 드론 측량 비행만으로도 수만 장의 원본 이미지가 생성될 수 있으며, 정사영상이나 LiDAR 포인트 클라우드 같은 처리된 결과물은 사이트당 수십 기가바이트에 달하는 경우가 흔합니다. 측량 및 매핑 회사는 일반적으로 활성 처리를 위한 빠른 로컬 드라이브, 클라이언트 전달을 위한 클라우드 스토리지, 완료된 프로젝트를 위한 저렴한 아카이브 계층으로 데이터를 나누어 관리하며, 이는 파일이 여러 위치 사이를 끊임없이 이동해야 함을 의미합니다. RcloneView는 제공업체별로 별도의 업로드 도구를 오가는 대신 하나의 인터페이스에서 이러한 이동을 관리합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 원본 촬영 데이터와 처리된 결과물 정리하기

원본 촬영 아카이브, 처리 작업 공간, 완성된 결과물을 클라이언트와 공유하는 클라우드 위치에 각각 별도의 리모트를 설정하세요. RcloneView의 다중 패널 Explorer를 사용하면 최대 4개의 위치를 나란히 볼 수 있어, 원본 이미지를 로컬 디스크에서 아카이빙하기 전에 처리된 정사영상이 원본 촬영 폴더와 일치하는지 확인할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 드론 측량 데이터용 클라우드 리모트 설정하기" class="img-large img-center" />

FREE 라이선스에서도 S3, Azure, Backblaze B2를 완전한 읽기/쓰기 권한으로 연결할 수 있습니다. 이는 대용량으로 처리된 데이터셋을 좌석당 비용 없이 오브젝트 스토리지로 장기 보관하며 클라이언트에 제공해야 하는 측량 회사에 중요합니다.

## 수동 업로드 없이 대용량 비행 데이터셋 동기화하기

동기화 작업의 소스를 로컬 촬영 폴더로, 대상을 클라우드 스토리지로 설정한 뒤 Advanced Settings에서 동시 파일 전송 수를 업로드 대역폭에 맞게 조정하세요 — 작은 원본 이미지가 많을 때는 소수의 대용량 처리 파일보다 더 높은 동시성이 유리합니다. max file age 필터를 사용하면 현장 작업이 활발한 날에는 최근 비행 데이터만 동기화하여 시간이 중요한 결과물을 위한 대역폭을 확보할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView로 드론 측량 이미지를 클라우드 스토리지에 동기화하기" class="img-large img-center" />

새 사이트를 처음 동기화하기 전에 Dry Run을 실행해 폴더 구조와 파일 수가 비행 로그와 일치하는지 확인하세요. 이렇게 하면 누락된 폴더가 클라이언트에게 문제가 되기 전에 미리 발견할 수 있습니다.

## Folder Compare로 결과물 검증하기

프로젝트를 클라이언트에게 인도하거나 아카이빙하기 전에 Folder Compare를 사용해 클라우드 스토리지에 업로드된 모든 파일이 로컬 처리 폴더와 일치하는지 확인하세요. 한쪽에만 존재하는 파일과 크기가 다른 파일을 표시해 주므로, 클라이언트가 정사영상에서 누락된 타일을 발견하기 전에 중단된 업로드를 잡아낼 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView에서 로컬 드론 측량 파일을 클라우드 스토리지와 비교하기" class="img-large img-center" />

반복적으로 거래하는 측량 클라이언트의 경우, 이러한 작업을 예약 동기화 작업(PLUS 라이선스)으로 저장해 두면 설정한 일정에 따라 각 새 비행 데이터가 올바른 클라이언트 폴더에 도착하며, Job History에서 각 데이터셋이 정확히 언제 전달되었는지 기록을 확인할 수 있습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 로컬 촬영 드라이브, 처리 작업 공간, 클라이언트 전달용 클라우드 스토리지에 대한 리모트를 추가하세요.
3. 일반적인 비행 데이터셋 크기에 맞게 전송 동시성을 조정한 동기화 작업을 구성하세요.
4. 원본 촬영 이미지를 아카이빙하기 전, 업로드 후마다 Folder Compare를 실행해 데이터셋이 완전히 전송되었는지 확인하세요.

여러 스토리지 계층에 걸쳐 비행 데이터를 정리해 두면 파일을 찾는 데 드는 시간이 줄어들고, 모든 클라이언트 전달이 완전하다는 확신을 가질 수 있습니다.

---

**관련 가이드:**

- [농업 및 축산업을 위한 클라우드 스토리지 — RcloneView로 현장 데이터 관리하기](https://rcloneview.com/support/blog/cloud-storage-agriculture-farming-rcloneview)
- [RcloneView를 활용한 건설 프로젝트 관리 클라우드 스토리지](https://rcloneview.com/support/blog/cloud-storage-construction-project-management-rcloneview)
- [RcloneView로 대용량 클라우드 전송 가속화하기](https://rcloneview.com/support/blog/accelerate-large-cloud-transfers-rcloneview)

<CloudSupportGrid />
