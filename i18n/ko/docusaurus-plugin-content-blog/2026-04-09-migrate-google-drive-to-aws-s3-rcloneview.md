---
slug: migrate-google-drive-to-aws-s3-rcloneview
title: "RcloneView로 Google Drive에서 AWS S3로 마이그레이션하기"
authors:
  - tayson
description: "RcloneView로 Google Drive에서 AWS S3로 마이그레이션하세요. 두 리모트를 설정하고, 전송을 계획하고, 데이터를 이동하고, 마이그레이션을 단계별로 검증합니다."
keywords:
  - rcloneview
  - google drive to aws s3
  - migrate google drive to s3
  - google drive s3 migration
  - google drive to amazon s3
  - cloud storage migration
  - google drive backup to s3
  - google workspace to aws
  - rclone google drive s3
  - cloud to cloud migration gui
tags:
  - RcloneView
  - google-drive
  - amazon-s3
  - migration
  - cloud-migration
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 Google Drive에서 AWS S3로 마이그레이션하기

> Google Drive에서 AWS S3로 이전하면 객체 단위 제어, 라이프사이클 정책, 인프라급 내구성을 확보할 수 있습니다 — **RcloneView**가 시각적 인터페이스를 통해 전송을 처리합니다.

Google Drive는 협업과 문서 편집에 강점이 있지만, 세밀한 접근 제어, 프로그래밍 방식 통합, 장기 보관이 필요한 조직은 종종 그 한계를 넘어서게 됩니다. AWS S3는 11개의 9로 표현되는 내구성, 콜드 스토리지를 위한 Glacier로의 라이프사이클 전환, IAM 기반 접근 정책을 제공합니다. Google Drive에서 S3로의 마이그레이션은 서로 다른 인증 모델, 서로 다른 파일 시맨틱, 그리고 잠재적으로 테라바이트 단위의 데이터 때문에 부담스럽게 느껴질 수 있습니다. RcloneView는 복잡한 과정을 뒤에서 처리하는 시각적 GUI로 이 작업을 단순화합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Google Drive에서 AWS S3로 마이그레이션하는 이유

Google Drive는 Google 고유의 메타데이터 — MIME 타입, 공유 권한, 네이티브 문서 형식(Docs, Sheets, Slides) — 를 가진 객체로 파일을 저장합니다. AWS S3는 사용자 정의 메타데이터를 가진 원시 바이트로 객체를 저장하여 프로그래밍 방식 접근에 더 큰 유연성을 제공합니다. 이 마이그레이션을 선택하는 일반적인 이유는 다음과 같습니다.

- **비용 최적화**: S3 Standard는 대략 $0.023/GB/월이며, S3 Glacier Deep Archive는 $0.00099/GB/월까지 낮아집니다. 접근 빈도가 낮은 대용량 데이터셋의 경우 S3가 Google Workspace 스토리지 플랜보다 훨씬 저렴합니다.
- **인프라 통합**: AWS에서 실행되는 애플리케이션은 IAM 역할로 S3에 직접 접근할 수 있어 OAuth 토큰과 API 할당량이 필요 없습니다.
- **컴플라이언스**: S3는 WORM 준수를 위한 Object Lock, IP 기반 제한을 위한 버킷 정책, 감사 로깅을 위한 CloudTrail을 지원합니다.
- **라이프사이클 관리**: 파일을 Standard에서 Infrequent Access, 그리고 Glacier로 나이에 따라 자동 전환하여 수동 개입 없이 비용을 절감할 수 있습니다.

## 두 리모트 설정하기

### Google Drive 리모트

RcloneView의 리모트 관리자를 열고 Google Drive 리모트를 추가합니다. 전체 접근 범위를 선택하여 OAuth로 인증합니다. 공유 드라이브(Shared Drives)를 마이그레이션해야 한다면 설정 중에 대상 공유 드라이브를 선택하세요. 대규모 마이그레이션의 경우, 기본 제한인 100초당 10,000건의 쿼리보다 API 할당량을 늘리기 위해 자체 Google Cloud 프로젝트 클라이언트 ID를 등록하는 것을 고려하세요.

### AWS S3 리모트

리모트 관리자에서 S3 리모트를 추가합니다. AWS 액세스 키 ID와 시크릿 액세스 키를 입력하고, 대상 리전을 선택하고, 버킷 이름을 지정합니다. 버킷이 존재하지 않는 경우 RcloneView나 AWS 콘솔에서 생성할 수 있습니다. 스토리지 클래스는 자주 접근하는 데이터의 경우 Standard를, 보관용 마이그레이션의 경우 Standard-IA를 선택하세요.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and AWS S3 remotes in RcloneView" class="img-large img-center" />

## 마이그레이션 계획하기

데이터를 전송하기 전에 범위를 평가하세요.

1. **용량 감사**: RcloneView의 스토리지 분석 기능을 사용해 Google Drive의 전체 용량을 확인합니다. 이는 S3 비용과 전송 시간을 추정하는 데 도움이 됩니다.
2. **Google 문서 처리**: 네이티브 Google 문서(Docs, Sheets, Slides)는 Drive에서 파일 크기가 없습니다. 마이그레이션 중 RcloneView는 이를 표준 형식(docx, xlsx, pptx)으로 내보냅니다. 이러한 내보내기가 필요한지, 건너뛸 수 있는지 결정하세요.
3. **폴더 구조**: Google Drive는 S3가 다르게 처리하는 문자를 파일명에 허용합니다. RcloneView는 특수 문자를 자동으로 인코딩하지만, 폴더 구조가 지나치게 깊게 중첩되어 있거나 경로 이름이 매우 긴 경우는 검토가 필요합니다.
4. **대역폭**: 100 Mbps 속도에서 1 TB 마이그레이션은 약 22시간이 걸립니다. 다른 작업에 지장이 없도록 마이그레이션을 비피크 시간대에 예약하거나 대역폭 제한을 설정하세요.

## 마이그레이션 실행하기

왼쪽 창에서 Google Drive를, 오른쪽 창에서 S3를 엽니다. Drive의 소스 폴더와 S3의 대상 프리픽스로 이동합니다. Drive 전체를 복사하거나 특정 폴더만 선택할 수 있습니다.

RcloneView는 Google Drive의 MD5 체크섬을 5 GB 미만 파일에 대해 S3 ETag와 비교합니다. 멀티파트로 업로드된 대용량 파일의 경우 S3 ETag가 표준 MD5가 아니므로, RcloneView는 이러한 경우 크기와 수정 시간 비교로 대체합니다.

초기 마이그레이션에서는 대상에서 파일이 삭제될 위험을 피하기 위해 동기화(sync) 대신 복사(copy) 작업을 사용하세요. 초기 전송이 완료되고 데이터를 검증한 후에는 지속적인 복제를 위해 동기화로 전환할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Google Drive to AWS S3 in RcloneView two-pane explorer" class="img-large img-center" />

## 마이그레이션 검증하기

전송이 완료되면 RcloneView의 비교 기능을 사용해 모든 파일이 정상적으로 도착했는지 확인하세요. Google Drive 소스와 S3 대상을 선택하고 비교를 실행합니다. 일치하는 파일은 동일한 것으로 표시되고, 다르거나 누락된 파일은 강조 표시됩니다.

중요한 마이그레이션의 경우, 양쪽에서 체크섬을 계산하고 불일치 사항을 보고하는 검사(check) 작업을 실행하세요. 시간이 더 걸리지만 데이터 무결성에 대한 암호학적 검증을 제공합니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying Google Drive to S3 migration in RcloneView" class="img-large img-center" />

## 마이그레이션 이후: 지속적인 동기화 또는 전환

전환 기간 동안 Google Drive와 S3를 병행 운영하는 경우, RcloneView에서 매일 동기화 작업을 예약하여 S3를 Drive의 변경 사항과 최신 상태로 유지하세요. 전환할 준비가 되면 동기화 작업을 비활성화하고 Google Drive 스토리지를 폐기하면 됩니다.

Google Workspace에서 AWS 네이티브 스택으로 이전하는 조직의 경우, 이 마이그레이션은 흔히 더 큰 플랫폼 전환의 한 부분에 해당합니다. RcloneView가 데이터 이동을 처리하는 동안 팀은 애플리케이션과 워크플로 변경에 집중할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling ongoing Google Drive to S3 sync in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. 리모트 관리자에서 Google Drive와 AWS S3 리모트를 추가합니다.
3. 스토리지 감사를 실행하여 마이그레이션 규모와 비용을 추정합니다.
4. Drive에서 S3로 복사 작업을 실행하고 비교로 검증합니다.
5. 필요하다면 전환할 준비가 될 때까지 지속적인 동기화를 예약합니다.

Google Drive는 협업을 처리하지만, AWS S3는 프로덕션 워크로드가 요구하는 내구성, 라이프사이클 관리, 프로그래밍 방식 접근을 제공합니다. RcloneView는 간단한 마이그레이션 경로로 이 둘을 연결합니다.

---

**관련 가이드:**

- [Google Drive 추가하기](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [AWS S3 및 S3 호환 스토리지 추가하기](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [폴더 내용 비교하기](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [작업 예약](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
