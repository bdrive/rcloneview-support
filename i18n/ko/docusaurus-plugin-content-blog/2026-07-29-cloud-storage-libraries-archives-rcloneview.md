---
slug: cloud-storage-libraries-archives-rcloneview
title: "도서관과 아카이브를 위한 클라우드 스토리지 — RcloneView를 활용한 장기 디지털 보존"
authors:
  - alex
description: "도서관과 아카이브가 검증된 백업과 접근 제어를 통해 디지털화된 컬렉션을 클라우드 스토리지 전반에서 관리하는 데 RcloneView를 활용하는 방법."
keywords:
  - 도서관을 위한 클라우드 스토리지
  - 디지털 아카이브 백업
  - 디지털 보존 클라우드 스토리지
  - RcloneView 아카이브
  - 도서관 디지털화 스토리지
  - 체크섬 검증 백업 아카이브
  - 멀티 클라우드 디지털 보존
  - 아카이브 클라우드 동기화
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
  - digital-preservation
  - archive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 도서관과 아카이브를 위한 클라우드 스토리지 — RcloneView를 활용한 장기 디지털 보존

> 디지털화된 필사본, 마이크로필름 스캔본, 구술 역사 녹음본은 둘 이상의 장소에 존재할 때만 안전합니다 — RcloneView는 전담 IT팀 없이도 이러한 이중화를 관리할 수 있게 해줍니다.

특별 컬렉션을 디지털화하는 도서관이나 수십 년간의 기관 기록을 보존하는 아카이브는 결국 손실되면 다시 만들 수 없는 수 테라바이트 분량의 고해상도 스캔본, 오디오, 비디오를 보유하게 됩니다. 클라우드 스토리지는 내구성 문제를 해결해 주지만, 대부분의 기관은 단일 제공업체에만 의존하지 않습니다 — 예산 제약, 보조금 요건, 또는 지리적으로 분산된 스토리지를 선호하는 성향 때문에 컬렉션이 둘 이상의 클라우드에 분산되거나 미러링되는 경우가 많습니다. RcloneView는 아키비스트에게 90개 이상의 클라우드 스토리지 서비스를 하나의 창에서 관리할 수 있는 환경을 제공하며, 도서관 직원에게 명령줄 기술을 요구하지 않습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 여러 제공업체에 걸쳐 디지털화 컬렉션 미러링하기

디지털 보존의 모범 사례는 가급적 서로 다른 스토리지 시스템에 여러 개의 독립적인 사본을 두는 것입니다. RcloneView의 1:N 동기화를 사용하면 아카이브가 하나의 소스 폴더 — 예를 들어 방금 완료된 디지털화 필사본 스캔본 배치 — 를 여러 클라우드 대상에 동시에 지정할 수 있어, 하나의 동기화 작업만으로 직원이 같은 전송을 수동으로 두 번 실행하지 않고도 중복 사본을 유지할 수 있습니다. 이 기능은 FREE 라이선스에서도 사용할 수 있으며, 보조금 예산이나 빠듯한 예산으로 운영되는 기관에는 중요한 부분입니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="디지털화된 아카이브를 두 개의 클라우드 대상으로 미러링하는 RcloneView 1:N 동기화 설정" class="img-large img-center" />

FREE 라이선스에서도 S3, Azure, Backblaze B2를 완전한 읽기/쓰기 권한으로 연결할 수 있어, 자주 접근하지 않는 콜드 보존 마스터본에는 저비용 오브젝트 스토리지를 사용하고, 작업용 사본은 Google Drive나 Dropbox처럼 협업에 더 적합한 제공업체에 유지하는 아카이브에 적합합니다.

## 체크섬 비교로 무결성(Fixity) 검증하기

보존 작업은 파일이 전송 중이나 수년간의 보관 기간 동안 알아채지 못한 채 손상되지 않았는지 아는 것에 달려 있습니다 — 아키비스트들은 이를 무결성(fixity)이라고 부릅니다. RcloneView의 동기화 작업은 체크섬 검증을 지원하여 수정 날짜만이 아니라 해시와 크기로 파일을 비교하며, 동기화 마법사 2단계의 체크섬 활성화 옵션은 대상에서 모든 바이트가 일치하는지 확인합니다. Folder Compare는 두 번째 검증 계층을 더해, 직원이 두 스토리지 위치를 나란히 시각적으로 감사하여 누락되거나 불일치하는 파일을 즉시 찾아낼 수 있게 합니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="아카이브 컬렉션의 체크섬 검증 사본을 감사하는 RcloneView Folder Compare 화면" class="img-large img-center" />

미러링된 각 사본에 대해 주기적으로 비교를 실행하는 것은 터미널에서 rclone 명령을 직접 작성하지 않고도 가능한 실용적인 무결성 점검 루틴입니다.

## 시스템 관리자 없이 수집(Ingest) 예약하기

디지털화 작업은 대개 지속적으로 새 배치를 만들어냅니다 — 스캔 스테이션이 한 상자의 문서 작업을 끝내면, 그 파일들은 로컬 스토리지에서 영구 아카이브로 옮겨져야 합니다. PLUS 라이선스가 있으면 RcloneView의 크론탭 방식 예약 기능이 이러한 수집 작업을 반복적으로 자동화하며, Job History는 시작 시간, 소요 시간, 전송된 파일 수, 상태 등 모든 실행에 대한 완전한 감사 기록을 제공합니다. 이 기록은 후원 기관이나 감독 기구에 보존 준수 여부를 입증해야 하는 기관에 중요합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView에서 디지털 아카이브의 반복 수집 작업 예약하기" class="img-large img-center" />

Job Export를 사용하면 아카이브가 전체 동기화 설정 세트를 이동 가능한 JSON 파일로 저장할 수 있어, 보존 워크플로 자체를 문서화하거나 새로운 시스템 사서에게 인계할 때 유용합니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 기본 스토리지 리모트와 하나 이상의 보존용 사본 대상을 연결하세요.
3. 체크섬 검증을 활성화한 1:N 동기화 작업을 설정하세요.
4. Folder Compare를 주기적으로 사용해 모든 미러링된 사본의 무결성을 감사하세요.

제대로 미러링되고 체크섬으로 검증된 아카이브는 "백업이 잘 됐기를 바란다"는 막연한 기대를 도서관이나 아카이브가 실제로 증명할 수 있는 것으로 바꿔줍니다.

---

**관련 가이드:**

- [폴더 비교 가이드 — RcloneView로 차이점 탐지하기](https://rcloneview.com/support/blog/folder-comparison-guide-detect-differences-rcloneview)
- [RcloneView로 체크섬 검증 클라우드 마이그레이션하기](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)
- [1:N 동기화 — RcloneView로 여러 대상에 동기화하기](https://rcloneview.com/support/blog/one-to-many-sync-multiple-destinations-rcloneview)

<CloudSupportGrid />
