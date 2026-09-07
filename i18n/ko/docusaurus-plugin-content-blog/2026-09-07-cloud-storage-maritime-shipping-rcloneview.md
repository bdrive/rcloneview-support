---
slug: cloud-storage-maritime-shipping-rcloneview
title: "해운 및 조선업을 위한 클라우드 스토리지 — RcloneView로 선단 데이터 중앙화하기"
authors:
  - robin
description: "RcloneView로 해운 및 조선업 팀을 위해 선박 문서, 화물 기록, 점검 사진을 여러 클라우드와 사무실에 걸쳐 중앙화하세요."
keywords:
  - 해운회사를 위한 클라우드 스토리지
  - 해양 클라우드 스토리지
  - 선단 문서 관리
  - 선박 데이터 백업
  - 해운 산업 클라우드 동기화
  - RcloneView 해양
  - 화물 명세서 백업
  - 해운 다중 사무실 파일 동기화
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

# 해운 및 조선업을 위한 클라우드 스토리지 — RcloneView로 선단 데이터 중앙화하기

> 선단이 의존하는 모든 사무실과 클라우드에서 선박 증명서, 화물 명세서, 점검 사진을 동기화된 상태로 유지하세요.

선박 십여 척을 운영하는 해운회사는 각 사무실이나 용선 파트너가 이미 사용 중인 서비스에 따라 문서가 흩어지기 마련입니다 — 한 지역은 Google Drive를, 다른 지역은 OneDrive를 사용하고, 항구에서 태블릿으로 촬영한 점검 사진은 가장 빠르게 올릴 수 있는 곳에 업로드됩니다. 규정 준수 감사와 승무원 교대 모두 이 데이터를 신속하게 다시 모아야 합니다. RcloneView는 하나의 창에서 모든 계정을 연결하고 동기화 상태를 유지하면서도 회사 전체를 단일 제공업체에 묶어두지 않습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 흩어진 선단 문서를 하나의 화면으로 모으기

승무원 증명서, 선급 검사 보고서, 항만국통제(PSC) 점검 사진은 현장 담당자가 그때 열어둔 클라우드 계정에 저장되는 경우가 많습니다. 각 사무실의 리모트를 RcloneView에 추가하면 파일 하나를 찾기 위해 여러 웹 포털에 로그인하는 대신, 분할 패널에서 최대 4개까지 나란히 놓고 살펴볼 수 있습니다. 어떤 지역이 오브젝트 스토리지에도 기록을 보관한다면, FREE 라이선스로도 읽기/쓰기 전체 권한으로 S3, Azure, Backblaze B2에 연결할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 해운 선단의 여러 클라우드 스토리지 계정 연결하기" class="img-large img-center" />

그런 다음 Folder Compare를 사용하면 특정 선박의 파일 세트 중 최신 버전을 어느 사무실이 가지고 있는지 정확히 확인할 수 있어, 점검 전에 추측할 필요가 없습니다.

## 규정 준수 기록을 위한 예약 백업

규제상의 보관 요건에 따라 화물 명세서와 안전 기록은 누군가 수동으로 기억해서 실행하는 것이 아니라 스스로 돌아가는 백업이 필요합니다. PLUS 라이선스에서는 크론탭 방식의 예약 기능을 설정해 정해진 일정에 따라 기록을 야간에 두 번째 클라우드로 동기화함으로써, 감사관이 어떤 계정을 먼저 요청하든 상관없이 독립된 사본을 유지할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="해운 규정 준수 기록을 위한 백업 작업 예약하기" class="img-large img-center" />

Job History는 모든 실행 기록 — 시작 시간, 파일 개수, 상태 — 을 기록하여, 규제 담당자가 특정 기록이 마지막으로 언제 백업되었는지 물을 때 명확한 감사 추적 자료를 제공합니다.

## 불안정한 선박-육상 업로드 다루기

위성 회선을 통해 선박에서 업로드하는 사진과 서류는 한 번에 끝나지 않는 경우가 많습니다. RcloneView의 동기화 작업에는 설정 가능한 재시도 횟수가 포함되어 있어, 선박에서 육상 사무실로의 전송이 중단되더라도 부분 업로드를 남기지 않고 재개되어 완료됩니다. 예약 동기화 전에 Dry Run을 실행하면 어떤 파일이 대기 중인지 확인할 수 있으며, 선박의 통신 가능 시간이 짧을 때 특히 유용합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView에서 선단 데이터 전송의 작업 기록 검토하기" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. 각 사무실 또는 선박의 클라우드 계정을 별도의 리모트로 연결합니다.
3. Folder Compare를 실행하여 각 문서 세트의 최신 버전을 어느 위치가 보유하고 있는지 확인합니다.
4. 예약 동기화를 설정하여 기록을 규정 준수 아카이브로 통합합니다.

선단의 서류는 선박만큼이나 자주 이동합니다 — 중앙화된 동기화는 그 과정에서 서류가 유실되지 않도록 지켜줍니다.

---

**관련 가이드:**

- [물류 및 공급망을 위한 클라우드 스토리지 — RcloneView](https://rcloneview.com/support/blog/cloud-storage-logistics-supply-chain-rcloneview)
- [하이브리드 클라우드 파일 전송 — RcloneView로 NAS에서 퍼블릭 클라우드로](https://rcloneview.com/support/blog/hybrid-cloud-file-transfer-nas-public-cloud-rcloneview)
- [오프라인 우선 동기화 — RcloneView로 클라우드에서 외장 드라이브로](https://rcloneview.com/support/blog/offline-first-sync-cloud-to-external-drive-with-rcloneview)

<CloudSupportGrid />
