---
slug: migrate-box-to-aws-s3-rcloneview
title: "Box에서 AWS S3로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - tayson
description: "RcloneView를 사용해 Box에서 AWS S3로 파일을 마이그레이션하세요. 체크섬 검증과 예약 작업으로 확장 가능한 S3 스토리지에 엔터프라이즈 콘텐츠를 전송할 수 있습니다."
keywords:
  - box to aws s3
  - migrate box to s3
  - box cloud migration
  - aws s3 transfer
  - cloud-to-cloud migration
  - rcloneview box transfer
  - enterprise cloud migration
  - box to amazon s3
  - box backup to s3
  - object storage migration
tags:
  - RcloneView
  - box
  - amazon-s3
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box에서 AWS S3로 마이그레이션 — RcloneView로 파일 전송하기

> 조직의 콘텐츠를 Box에서 AWS S3로 옮기면 대규모의 프로그래밍 가능한 스토리지를 활용할 수 있습니다 — 그리고 RcloneView가 번거로운 작업을 대신 처리해 줍니다.

Box는 메타데이터, 워크플로, 거버넌스 기능을 통해 엔터프라이즈 콘텐츠 관리에서 뛰어난 강점을 보입니다. 하지만 아키텍처가 AWS 네이티브 서비스 중심으로 전환되면 — 업로드를 처리하는 Lambda 함수, 데이터 레이크를 쿼리하는 Athena, 자산을 서비스하는 CloudFront — 파일을 S3에 저장하는 것이 Box와 AWS 스택을 연결하는 미들웨어를 없애줍니다. RcloneView는 시각적 인터페이스를 통해 Box에서 S3 버킷으로 파일을 마이그레이션하며, 폴더 구조를 유지하고 모든 전송을 검증합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Box에서 AWS S3로 이동해야 하는 이유

AWS S3는 여섯 가지 스토리지 클래스에 걸쳐 세분화된 가격 정책과 함께 사실상 무제한의 스토리지를 제공합니다 — 자주 액세스하는 데이터를 위한 S3 Standard부터, 장기 보관용으로 월 GB당 0.00099달러인 S3 Glacier Deep Archive까지 다양합니다. Box는 엔터프라이즈 플랜에서 사용자당 월 20달러를 초과할 수 있는 사용자별 라이선스 요금을 부과하며, 스토리지는 개별 할당이 아닌 풀링 방식으로 제공됩니다.

개발 팀 입장에서 S3의 생태계는 타의 추종을 불허합니다. 이벤트 알림은 Lambda 함수를 트리거하고, S3 Select는 데이터를 제자리에서 쿼리하며, 버전 관리와 복제 규칙은 데이터 손실을 방지하고, IAM 정책은 세밀한 액세스 제어를 제공합니다. Box의 API는 강력하지만 콘텐츠 협업을 위해 설계된 것이지 인프라 수준의 스토리지 작업을 위한 것이 아닙니다. S3로 마이그레이션하면 파일 스토리지가 나머지 AWS 인프라와 일치하게 됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Box and AWS S3 remotes in RcloneView" class="img-large img-center" />

## Box 및 S3 리모트 구성하기

RcloneView에서 공급자 유형으로 "Box"를 선택하여 Box 리모트를 추가하세요. OAuth 흐름이 브라우저를 열어 Box 인증을 진행합니다. Box 계정 자격 증명으로 로그인하고 RcloneView를 승인하세요. 이 리모트는 소유한 모든 공유 폴더를 포함하여 Box 루트 폴더에 연결됩니다.

AWS S3의 경우 새 리모트를 생성하고 "Amazon S3"를 선택하세요. AWS 액세스 키 ID와 비밀 액세스 키를 입력하거나, RcloneView가 EC2 인스턴스에서 실행 중이라면 IAM 역할을 사용하세요. 대상 리전을 선택하고 버킷 이름을 지정하세요. RcloneView는 자격 증명을 검증하고 버킷에 대한 액세스를 확인합니다. 새 버킷을 생성해야 한다면, 원하는 리전, 암호화, 버전 관리 설정으로 먼저 AWS 콘솔에서 생성하세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring Box to S3 cloud-to-cloud transfer in RcloneView" class="img-large img-center" />

## 마이그레이션 실행하기

듀얼 패널 탐색기를 사용해 한쪽에서는 Box를, 다른 쪽에서는 S3를 탐색하세요. 마이그레이션하려는 Box 폴더 — 전체 부서 디렉터리, 프로젝트 아카이브, 또는 특정 콘텐츠 트리 — 를 선택하세요. 반대편에서 대상 S3 프리픽스로 이동하세요.

관리형 마이그레이션을 위해 작업 관리자에서 복사 작업을 생성하세요. Box를 소스로, S3를 대상으로 설정하세요. "복사" 모드를 사용하면 Box에서 파일을 삭제하지 않고 전송하여 롤백 경로를 확보할 수 있습니다. Box의 API는 SHA-1 체크섬을 사용하고 S3는 MD5와 ETag 해시를 저장합니다 — RcloneView는 기본적으로 파일 크기와 수정 시간을 사용해 비교하며, 선택적으로 체크섬 검증도 사용할 수 있습니다.

Box는 API 속도 제한을 적용합니다(엔터프라이즈 계정 기준 초당 약 10회 API 호출). RcloneView는 자동 재시도와 지수 백오프로 이러한 제한을 준수합니다. 수십만 개의 파일이 있는 대규모 마이그레이션의 경우, 예약된 시간대를 사용하여 며칠에 걸쳐 작업을 실행하세요.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Starting a Box to AWS S3 migration job in RcloneView" class="img-large img-center" />

## 마이그레이션 후 검증 및 전환

전송이 완료된 후, RcloneView의 비교 기능을 사용해 마이그레이션을 검증하세요. 두 리모트를 나란히 열고 폴더 비교를 실행하여 파일 수, 크기, 구조를 확인하세요. 건너뛰거나 오류가 발생한 파일이 있는지 작업 기록을 검토하고, 작업을 다시 실행하여 이를 처리하세요.

액세스 패턴에 따라 S3 버킷의 스토리지 클래스를 설정하는 것을 고려하세요. 자주 액세스하는 프로젝트 파일은 S3 Standard에 두고, 보관용 콘텐츠는 수명 주기 정책을 통해 S3 Intelligent-Tiering이나 Glacier로 이동할 수 있습니다. 전환 기간 동안 RcloneView에서 Box 리모트를 활성 상태로 유지하면서, 모든 사용자가 워크플로를 S3로 마이그레이션할 때까지 증분 동기화 작업을 실행하세요.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Box to S3 migration transfers" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Box 리모트를 생성할 때 OAuth를 통해 Box 계정을 인증하세요.
3. IAM 자격 증명으로 AWS S3 리모트를 추가하고 대상 버킷과 리전을 선택하세요.
4. Box에서 S3로의 복사 작업을 생성하고, 속도 제한 처리를 구성한 다음, 대규모 데이터셋의 경우 여러 날에 걸쳐 예약하세요.

S3에서 모든 콘텐츠가 검증되면, 애플리케이션을 전환하고 팀이 전환을 완료하는 대로 Box 스토리지를 폐기하세요.

---

**관련 가이드:**

- [RcloneView로 Box에서 SharePoint 및 OneDrive로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-box-to-sharepoint-onedrive-rcloneview)
- [RcloneView로 Box에서 Google Drive로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-box-to-google-drive-rcloneview)
- [RcloneView로 Box 스토리지를 네트워크 드라이브로 마운트하기](https://rcloneview.com/support/blog/mount-box-storage-network-drive-rcloneview)

<CloudSupportGrid />
