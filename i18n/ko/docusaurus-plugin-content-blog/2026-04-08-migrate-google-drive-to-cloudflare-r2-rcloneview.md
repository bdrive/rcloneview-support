---
slug: migrate-google-drive-to-cloudflare-r2-rcloneview
title: "RcloneView로 Google Drive를 Cloudflare R2로 마이그레이션하기"
authors:
  - tayson
description: "RcloneView를 사용하여 Google Drive 파일을 Cloudflare R2로 마이그레이션하세요. 설정, Google 문서 변환, 검증, 제로 송신 비용 이점까지 다루는 단계별 가이드입니다."
keywords:
  - rcloneview
  - google drive to cloudflare r2
  - migrate google drive
  - google drive migration tool
  - cloudflare r2 migration
  - cloud to cloud migration
  - google docs export
  - zero egress migration
  - google drive backup r2
  - cloud storage migration gui
tags:
  - RcloneView
  - google-drive
  - cloudflare-r2
  - migration
  - cloud-migration
  - cloud-to-cloud
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 Google Drive를 Cloudflare R2로 마이그레이션하기

> Google Drive에서 Cloudflare R2로 이전하면 송신(egress) 비용이 사라지고 S3 호환 방식으로 데이터에 접근할 수 있습니다 — **RcloneView**가 전체 마이그레이션 과정을 시각적으로 처리해 줍니다.

Google Drive는 강력한 협업 플랫폼이지만, 저장 용량 수요가 늘고 데이터 접근 방식이 변화함에 따라 많은 팀이 확장성과 API 유연성을 위해 오브젝트 스토리지로 눈을 돌리고 있습니다. Cloudflare R2는 송신 비용이 전혀 없는 S3 호환 스토리지를 제공하여, 프로그래밍 방식으로 제공해야 하는 데이터에 매력적인 이전 대상입니다. RcloneView는 이 두 가지 매우 다른 스토리지 모델 사이의 간극을 메워, Google 문서 형식 변환, 대용량 파일 전송, 마이그레이션 후 검증을 하나의 GUI에서 처리합니다.

이 가이드는 두 리모트를 설정하는 것부터 모든 파일이 온전히 도착했는지 확인하는 것까지 전체 마이그레이션 과정을 안내합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Google Drive에서 Cloudflare R2로 마이그레이션해야 하는 이유

Google Drive 요금제는 100GB 기준 월 $1.99부터 시작하며, Google Workspace 하의 엔터프라이즈 등급까지 확장됩니다. 협업에는 저렴하지만, Google Drive는 프로그래밍 방식의 데이터 접근을 염두에 두고 설계되지 않았습니다. API 속도 제한, S3 호환성 부재, 사용자별 저장 용량 할당은 정적 자산 제공, 데이터셋 호스팅, CI/CD 파이프라인 공급에는 적합하지 않습니다.

Cloudflare R2는 이러한 한계를 해결합니다. GB당 월 $0.015에 송신 비용이 전혀 없어, 읽기 위주 워크로드에서 R2는 훨씬 저렴합니다. S3 호환 API 덕분에 기존 도구와 SDK를 수정 없이 그대로 사용할 수 있습니다. 데이터가 Google Drive에서 시작되었지만 이제 S3 엔드포인트를 통해 접근해야 한다면, R2로의 마이그레이션이 논리적인 다음 단계입니다.

## RcloneView에서 Google Drive 설정하기

리모트 관리자를 열고 Google Drive 리모트를 추가하세요. RcloneView는 OAuth 2.0을 사용합니다. authorize를 클릭하고 Google 계정에 로그인한 뒤 접근 권한을 부여하세요. 토큰은 rclone 설정에 로컬로 저장됩니다.

공유 드라이브가 있는 Google Workspace 계정에서 마이그레이션하는 경우, 개인 내 드라이브뿐 아니라 특정 공유 드라이브에 접근하도록 RcloneView를 구성할 수 있습니다. 이는 데이터가 여러 팀 드라이브에 분산되어 있는 조직 단위 마이그레이션에서 중요합니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive remote in RcloneView" class="img-large img-center" />

## RcloneView에서 Cloudflare R2 설정하기

R2를 S3 호환 리모트로 추가하세요. 리모트 관리자에서 **Amazon S3 Compatible**을 선택하고 다음을 구성합니다.

- **Provider**: Cloudflare
- **Access Key ID** 및 **Secret Access Key**: Cloudflare 대시보드에서 생성
- **Endpoint**: `https://<account-id>.r2.cloudflarestorage.com`

마이그레이션을 시작하기 전에 Cloudflare 대시보드나 RcloneView 탐색기에서 대상 버킷을 생성하세요. 나중에 쉽게 식별할 수 있도록 데이터 출처를 반영하는 버킷 이름을 선택하세요. 예: `gdrive-archive-2026`.

## Google 문서 형식 변환 처리하기

이는 Google Drive에서 마이그레이션할 때 가장 중요하게 고려해야 할 사항입니다. Google 네이티브 형식인 문서, 스프레드시트, 프레젠테이션, 드로잉은 전통적인 의미의 파일이 아닙니다. 이들은 Google 생태계 내에서만 존재하며 디스크 상 용량이 0바이트입니다.

RcloneView가 이러한 파일을 내보낼 때 표준 형식으로 변환합니다.

- **Google 문서**는 `.docx`(Microsoft Word)가 됩니다
- **Google 스프레드시트**는 `.xlsx`(Microsoft Excel)가 됩니다
- **Google 프레젠테이션**은 `.pptx`(Microsoft PowerPoint)가 됩니다

리모트 설정에서 내보내기 형식을 구성할 수 있습니다. 팀에서 PDF나 OpenDocument 형식을 선호한다면 마이그레이션 시작 전에 이에 맞게 조정하세요. 내보낸 파일은 댓글, 제안 모드, 실시간 협업 링크와 같은 Google 특유의 기능을 잃게 된다는 점에 유의하세요.

이미 표준 형식으로 되어 있는 파일(업로드된 PDF, 이미지, ZIP)의 경우, 변환 없이 바이트 단위로 그대로 복사됩니다.

## 마이그레이션 실행하기

두 리모트가 모두 구성되었으면 2단 탐색기를 여세요. 왼쪽에 Google Drive, 오른쪽에 R2 버킷을 배치합니다. 전체 드라이브를 마이그레이션하거나 특정 폴더만 선택할 수 있습니다.

전체 마이그레이션의 경우 동기화 작업을 사용하세요. RcloneView는 Google Drive의 모든 파일을 열거하고, 네이티브 Google 형식을 내보내며, 모든 것을 R2로 전송합니다. 실시간 모니터링 대시보드는 파일별 진행 상황, 전송 속도, 예상 완료 시간을 보여줍니다.

대용량 마이그레이션(수백 기가바이트 이상)의 경우 다음 최적화를 고려하세요.

- **병렬 전송 수 늘리기**: R2는 높은 동시성을 잘 처리합니다. 처리량을 극대화하려면 병렬 전송 수를 8~16으로 늘리세요.
- **대역폭 스케줄링 사용**: 업무 시간 중 마이그레이션하는 경우, 다른 네트워크 사용자에게 영향을 주지 않도록 대역폭을 제한하세요.
- **단계별 실행**: 한 번에 모든 것을 마이그레이션하기보다 폴더 단위로 마이그레이션하세요. 이렇게 하면 각 배치를 검증하고 중단 시 재개하기가 더 쉬워집니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring Google Drive to R2 migration progress in RcloneView" class="img-large img-center" />

## Compare로 마이그레이션 검증하기

마이그레이션이 완료되면 Google Drive와 R2 사이에서 RcloneView의 비교(compare) 작업을 실행하세요. 비교 화면은 다음을 강조 표시합니다.

- **소스에만 있는 파일**: 전송에 실패했거나 건너뛴 항목
- **대상에만 있는 파일**: 예상치 못한 추가 항목(드물지만 확인할 가치가 있음)
- **차이가 있는 파일**: 불완전한 전송을 나타내는 크기나 해시 불일치

Google 문서 파일은 내보낸 형식이 0바이트인 Google 네이티브 형식과 다르기 때문에 항상 다르게 표시된다는 점에 유의하세요. 의미 있는 비교를 위해서는 네이티브가 아닌 파일에 집중하세요. 표준 파일에서 불일치가 나타나면 누락되거나 변경된 항목만 전송하도록 동기화를 다시 실행하세요.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying Google Drive to R2 migration with compare in RcloneView" class="img-large img-center" />

## 마이그레이션 이후: 증분 동기화

초기 마이그레이션 후, 전환 기간 동안 R2를 Google Drive와 동기화 상태로 유지하고 싶을 수 있습니다. RcloneView에서 예약 동기화 작업을 설정하세요. 필요에 따라 매일 또는 매시간 실행할 수 있습니다. 이렇게 하면 완전히 전환하기 전까지 Google Drive에 추가된 새 파일이 자동으로 R2에 복제됩니다.

전환이 완료되고 모든 접근 지점이 R2를 참조하게 되면, 동기화 작업을 비활성화하고 선택적으로 Google Drive 데이터를 보관하거나 삭제할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling incremental sync from Google Drive to R2 in RcloneView" class="img-large img-center" />

## 작업 기록 및 감사 추적

모든 마이그레이션 실행은 RcloneView의 작업 기록에 기록됩니다. 각 실행에 대해 전송된 파일 수, 이동된 바이트 수, 발생한 오류, 소요 시간을 검토할 수 있습니다. 이는 규정 준수를 위한 감사 추적을 제공하며, 마이그레이션 중이나 이후에 발생하는 문제를 해결하는 데 도움이 됩니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing Google Drive to R2 migration runs" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. OAuth를 통해 Google Drive를, S3 호환 리모트로 Cloudflare R2를 추가하세요.
3. Google 문서 내보내기 형식(docx, xlsx, pptx 또는 선호하는 대안)을 구성하세요.
4. 2단 탐색기를 사용하여 마이그레이션을 실행하고 비교 기능으로 결과를 검증하세요.

Google Drive는 협업에 뛰어나지만, S3 호환의 송신 비용 없는 스토리지가 필요할 때는 Cloudflare R2가 목적지이며 — RcloneView가 그 다리가 되어 줍니다.

---

**관련 가이드:**

- [Google Drive 추가하기](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [AWS S3 및 S3 호환 스토리지 추가하기](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [폴더 내용 비교하기](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)

<CloudSupportGrid />
