---
slug: migrate-onedrive-to-azure-blob-rcloneview
title: "OneDrive에서 Azure Blob으로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - tayson
description: "RcloneView를 사용해 OneDrive 파일을 Azure Blob Storage로 마이그레이션하세요. CLI 도구나 스크립트 없이 기업 문서를 확장 가능한 오브젝트 스토리지로 이전할 수 있습니다."
keywords:
  - onedrive to azure blob
  - migrate onedrive to azure
  - onedrive azure blob transfer
  - cloud-to-cloud migration
  - azure blob storage migration
  - rcloneview onedrive transfer
  - microsoft cloud migration
  - enterprise cloud migration
  - onedrive backup azure
  - object storage migration
tags:
  - RcloneView
  - onedrive
  - azure
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OneDrive에서 Azure Blob으로 마이그레이션 — RcloneView로 파일 전송하기

> OneDrive에서 Azure Blob Storage로 전환하면 팀에 확장 가능하고 프로그래밍 가능한 오브젝트 스토리지를 제공할 수 있으며, RcloneView를 사용하면 이 전환 과정이 매우 간편해집니다.

OneDrive는 일상적인 문서 협업에는 잘 작동하지만, 기업 팀은 종종 스토리지 한도를 초과하거나 Azure의 REST API를 통한 프로그래밍 방식 파일 접근이 필요해집니다. Azure Blob Storage는 계층형 요금제(Hot, Cool, Archive), 방대한 확장성, 그리고 Azure Functions, Logic Apps, Data Factory와의 긴밀한 통합을 제공합니다. RcloneView는 두 Microsoft 서비스를 연결하여 코드를 한 줄도 작성하지 않고 OneDrive에서 Azure Blob 컨테이너로 파일을 마이그레이션할 수 있게 해줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## OneDrive가 한계에 도달했을 때

OneDrive for Business는 대부분의 Microsoft 365 요금제에서 사용자당 1TB를 제공하며, 최대 5TB까지 확장 애드온을 추가할 수 있습니다. 이는 조직에 수년간의 프로젝트 아카이브, 미디어 자산, 규정 준수 기록이 쌓이기 전까지는 넉넉해 보입니다. Azure Blob Storage는 엑사바이트 규모까지 확장되며, Cool 계층에서는 GB당 월 $0.018라는 저렴한 비용으로 이용할 수 있습니다 — 이는 동일한 용량의 OneDrive 비용의 일부에 불과합니다.

단순한 용량 외에도 Azure Blob은 OneDrive가 따라올 수 없는 기능을 제공합니다. 규제 준수를 위한 불변 스토리지 정책, 전 세계 콘텐츠 전송을 위한 Azure CDN 통합, Shared Access Signatures(SAS)를 통한 세밀한 접근 제어 등입니다. 아카이브성 데이터나 대규모 데이터를 OneDrive에서 Azure Blob으로 마이그레이션하면 이미 사용 중인 인프라 안에 스토리지를 중앙화할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Creating OneDrive and Azure Blob remotes in RcloneView" class="img-large img-center" />

## 두 리모트 설정하기

RcloneView에서 제공자 유형으로 "Microsoft OneDrive"를 선택해 OneDrive 리모트를 추가합니다. OAuth 흐름이 시작되어 브라우저에서 Microsoft 계정 인증을 진행합니다. 소스 파일이 위치한 곳에 따라 OneDrive Personal, OneDrive for Business, 또는 특정 SharePoint 문서 라이브러리 중에서 선택하세요. 인증이 완료되면 RcloneView는 선택한 드라이브의 루트를 표시합니다.

Azure Blob의 경우, 새 리모트를 만들고 "Microsoft Azure Blob Storage"를 선택합니다. Storage Account 이름과 Account Key 또는 SAS URL을 입력합니다. 조직에서 Azure Active Directory 인증을 강제하는 경우, RcloneView는 해당 방식도 지원합니다. 대상 컨테이너를 선택하거나 작업 구성을 위해 컨테이너 이름을 기록해 두세요. RcloneView는 연결을 확인하고 기존 컨테이너와 블롭 목록을 표시합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Setting up a cloud-to-cloud transfer from OneDrive to Azure Blob" class="img-large img-center" />

## 마이그레이션 실행하기

한쪽에는 OneDrive, 다른 한쪽에는 Azure Blob이 있는 2단 탐색기를 엽니다. 마이그레이션하려는 OneDrive 폴더로 이동합니다 — 예를 들어 `/Documents/Projects` 또는 전체 루트입니다. Azure 쪽에서는 대상 컨테이너로 이동합니다.

체계적인 마이그레이션을 위해 Job Manager에서 Copy 작업을 생성하세요. OneDrive를 소스 경로로, Azure Blob 컨테이너를 대상으로 설정합니다. 전환 기간 동안 OneDrive에서 파일을 삭제하지 않고 전송하려면 "Copy" 모드를 선택하세요. 작업을 여러 번 실행할 계획이라면 `--ignore-existing` 플래그를 활성화하여 이미 전송된 파일을 효율적으로 건너뛸 수 있습니다.

OneDrive의 API는 대규모 전송 속도를 늦출 수 있는 속도 제한을 부과합니다. RcloneView는 자동으로 스로틀링과 재시도를 처리하며, Microsoft의 제한 범위 내에서 처리량을 최적화하기 위해 병렬 전송(`--transfers` 플래그)을 구성할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Migration job history showing OneDrive to Azure Blob transfers" class="img-large img-center" />

## 마이그레이션 후 검증

작업이 완료되면 RcloneView의 비교 기능을 사용해 OneDrive와 Azure Blob 간의 파일 개수와 크기를 비교하세요. 두 리모트를 나란히 열고 비교를 실행하여 불일치 항목을 확인합니다. Azure Blob은 업로드된 객체에 대해 MD5 해시를 저장하므로, 체크섬 검증을 통해 전송 중 발생한 손상을 확인할 수 있습니다.

검증이 끝나면 애플리케이션이 OneDrive 대신 Azure Blob에서 읽도록 구성하세요. 전환 완료 전까지 사용자가 OneDrive에 계속 추가하는 파일을 포착할 수 있도록, 전환 기간 동안 RcloneView에서 OneDrive 리모트 연결을 유지하며 주기적인 동기화 작업을 실행하세요.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling periodic OneDrive to Azure Blob sync during migration" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Microsoft OAuth를 통해 OneDrive 계정을 인증하고 올바른 드라이브 유형을 선택하세요.
3. Storage Account 이름과 액세스 키 또는 SAS 토큰을 사용해 Azure Blob 리모트를 추가하세요.
4. OneDrive에서 Azure Blob으로 Copy 작업을 생성하고, 체크섬 검증을 활성화한 뒤 실행하세요.

모든 파일이 Azure Blob에 있는지 확인되면, 워크플로를 리디렉션하고 원하는 속도에 맞춰 OneDrive 스토리지를 정리하세요.

---

**관련 가이드:**

- [RcloneView로 OneDrive를 Google Drive로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-onedrive-to-google-drive-rcloneview)
- [RcloneView로 Azure Blob Storage를 로컬 드라이브로 마운트하기](https://rcloneview.com/support/blog/mount-azure-blob-storage-local-drive-rcloneview)
- [RcloneView로 Azure Blob을 AWS S3와 동기화하기](https://rcloneview.com/support/blog/sync-azure-blob-to-aws-s3-rcloneview)

<CloudSupportGrid />
