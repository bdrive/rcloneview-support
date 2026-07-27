---
slug: cloud-storage-museums-archives-rcloneview
title: "박물관과 아카이브를 위한 클라우드 스토리지 — RcloneView를 활용한 디지털 보존"
authors:
  - tayson
description: "박물관과 아카이브는 RcloneView를 사용해 클라우드 스토리지와 콜드 아카이브 티어 전반에서 디지털화된 컬렉션을 동기화하고, 검증하고, 백업합니다."
keywords:
  - 박물관을 위한 클라우드 스토리지
  - 디지털 아카이브 백업
  - 디지털 보존 소프트웨어
  - 아카이브 컬렉션 동기화
  - 박물관 디지털화 워크플로우
  - 콜드 스토리지 아카이브 동기화
  - RcloneView 아카이브
  - 폴더 비교 검증
  - 박물관 멀티 클라우드 백업
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - digital-preservation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 박물관과 아카이브를 위한 클라우드 스토리지 — RcloneView를 활용한 디지털 보존

> 디지털화된 컬렉션은 업로드만으로는 안전하지 않으며, 모든 사본이 검증되어야 안전합니다 — RcloneView는 아키비스트에게 이를 증명할 수 있는 방법을 제공합니다.

4만 장의 사진 원판을 디지털화하는 지역 역사 박물관이 마주하는 문제는 스캔 작업 자체와는 무관합니다. TIFF 마스터 파일이 만들어지면 이는 두 개의 독립된 저장 위치에 존재해야 하며, 누군가는 그 사본들이 수년에 걸쳐 동일하게 유지되는지 확인해야 합니다. RcloneView는 이러한 검증 워크플로우를 직접 처리하며, 작업용 클라우드 스토리지와 장기 아카이브 티어를 연결하고 "업로드 완료"라는 맹목적인 메시지 대신 폴더 단위의 비교 결과를 직원들에게 제공합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 마스터 파일과 접근용 사본

아카이브는 일반적으로 두 개의 계층을 유지합니다: 보존을 위한 비압축 마스터 파일(TIFF, WAV, ProRes)과 공개 전시나 연구자 요청에 사용되는 더 작은 접근용 사본(JPEG, MP3, H.264)입니다. RcloneView의 멀티 패널 탐색기는 직원들이 두 계층을 나란히 확인할 수 있게 해줍니다 — 한쪽 패널은 큐레이터가 새로 디지털화한 항목을 업로드하는 작업용 클라우드 드라이브에, 다른 패널은 마스터 파일을 위한 Amazon S3 Glacier급 스토리지나 Backblaze B2 같은 콜드 아카이브 리모트에 연결합니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 아카이브 저장용으로 새로운 클라우드 리모트 추가하기" class="img-large img-center" />

RcloneView가 90개 이상의 제공업체에 연결되기 때문에, 기관은 단일 벤더의 콜드 스토리지 제품에 종속되지 않습니다. 박물관은 한 제공업체에 마스터 파일을 보관하고, 재해 복구 이중화를 위해 다른 제공업체에 두 번째 사본을 미러링하면서도 동일한 창에서 모두 관리할 수 있습니다.

## 사본 간 무결성 검증

파일을 한 번 업로드하는 것은 보존이 아닙니다 — 수년 후에도 원본과 일치하는지 확인하는 것이 보존입니다. RcloneView의 폴더 비교 기능은 두 위치를 나란히 확인하여 크기가 다르거나, 한쪽에만 존재하거나, 전송 중 오류가 발생한 파일을 표시합니다. 정기적인 고정성 검사를 수행하는 아키비스트는 작업용 컬렉션과 아카이브 미러본에 비교 기능을 적용한 뒤 "다른 파일" 필터를 검토하여, 조용한 손상이나 불완전한 전송이 영구적인 손실이 되기 전에 발견할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="두 아카이브 저장 위치 간 폴더 비교 결과 검토하기" class="img-large img-center" />

마운트 기능만 제공하는 클라우드 도구와 달리, RcloneView는 FREE 라이선스에서도 동기화와 폴더 비교를 제공하므로, 무결성 검사를 시작하는 데 유료 등급이 필요하지 않습니다.

## 카탈로그 메타데이터의 예약 백업

컬렉션 관리 시스템(CMS 데이터베이스, 검색 도구, EAD/MARC 레코드)은 항목이 카탈로그화됨에 따라 끊임없이 변경됩니다. RcloneView의 작업 관리자를 사용하면 아카이브가 CMS 내보내기 폴더를 일정에 따라 클라우드 스토리지로 미러링하는 반복 동기화 작업을 정의할 수 있어(PLUS 라이선스), 직원이 수동 내보내기를 기억해야 할 필요 없이 메타데이터 백업이 자동으로 이루어집니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView에서 아카이브 메타데이터를 위한 반복 백업 작업 예약하기" class="img-large img-center" />

Dry Run 모드를 사용하면 디지털화 팀이 동기화가 실제로 적용되기 전에 어떤 파일에 영향을 미칠지 미리 확인할 수 있으며, 이는 작업이 자칫 수정된 카탈로그 레코드를 오래된 것으로 덮어쓸 수 있는 경우에 중요합니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. 주요 클라우드 스토리지용 리모트와 콜드 아카이브 또는 오프사이트 백업 제공업체용 두 번째 리모트를 추가합니다.
3. 디지털화된 마스터 파일의 초기 동기화를 실행한 다음, 폴더 비교로 두 사본이 일치하는지 확인합니다.
4. 카탈로그 메타데이터를 위한 반복 작업을 설정하여 카탈로그화 작업이 손실될 위험이 없도록 합니다.

컬렉션은 가장 덜 검증된 사본만큼만 안전합니다 — 검증이 우연히 이루어지길 바라는 대신 이를 정기적인 절차로 만드는 것이 수십 년에 걸친 디지털화 작업을 복구 가능한 상태로 유지하는 방법입니다.

---

**관련 가이드:**

- [RcloneView로 Internet Archive 업로드 관리하기](https://rcloneview.com/support/blog/manage-internet-archive-uploads-with-rcloneview)
- [Google Drive를 Internet Archive와 동기화 — RcloneView를 활용한 클라우드 백업](https://rcloneview.com/support/blog/sync-google-drive-to-internet-archive-rcloneview)
- [연구 및 학술용 클라우드 스토리지 — RcloneView 가이드](https://rcloneview.com/support/blog/cloud-storage-research-academia-rcloneview)

<CloudSupportGrid />
