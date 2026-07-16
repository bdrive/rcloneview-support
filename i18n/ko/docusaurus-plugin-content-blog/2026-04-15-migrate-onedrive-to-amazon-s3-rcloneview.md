---
slug: migrate-onedrive-to-amazon-s3-rcloneview
title: "OneDrive를 Amazon S3로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - tayson
description: "RcloneView로 OneDrive를 Amazon S3로 마이그레이션하세요 — GUI를 사용해 클라우드 간 파일을 전송하고, 문서를 아카이브하며, Microsoft 스토리지 의존도를 줄일 수 있습니다."
keywords:
  - OneDrive to Amazon S3 migration
  - OneDrive to S3 transfer
  - cloud migration tool
  - RcloneView OneDrive
  - S3 archive
  - OneDrive export
  - Microsoft to AWS migration
  - cloud-to-cloud transfer
  - OneDrive S3 backup
  - reduce OneDrive costs
tags:
  - onedrive
  - amazon-s3
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OneDrive를 Amazon S3로 마이그레이션 — RcloneView로 파일 전송하기

> OneDrive는 Microsoft 365 워크플로우에 적합하지만, S3는 비용 효율적인 아카이빙과 AWS 통합에 강점이 있습니다 — RcloneView는 로컬 다운로드 없이 OneDrive 콘텐츠를 S3로 직접 마이그레이션합니다.

OneDrive는 Microsoft 365 환경에 자연스럽게 통합되지만, Microsoft 라이선스 비용을 절감하거나 AWS 인프라로 통합하거나 S3 네이티브 아카이빙이 필요한 조직은 때때로 OneDrive 콘텐츠를 Amazon S3로 옮겨야 합니다. RcloneView는 OneDrive와 S3를 동시에 연결하고 로컬 디스크 공간을 소모하지 않으면서 데이터를 스트리밍하는 직접적인 클라우드 간 마이그레이션 경로를 제공합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## OneDrive와 Amazon S3 연결하기

RcloneView에서 OAuth 브라우저 인증을 통해 **Microsoft OneDrive**를 추가합니다 — **Remote 탭 > New Remote > Microsoft OneDrive**. 그런 다음 Access Key ID, Secret Access Key, AWS Region을 사용해 **Amazon S3**를 추가합니다. OneDrive for Business 계정의 경우, 리모트가 조직의 테넌트와 적절한 라이브러리를 대상으로 하도록 구성하세요.

<img src="/support/images/en/blog/new-remote.png" alt="Adding OneDrive and Amazon S3 remotes in RcloneView" class="img-large img-center" />

두 리모트가 모두 활성화되면 RcloneView의 듀얼 패널 탐색기에서 나란히 탐색할 수 있습니다 — 왼쪽에는 OneDrive의 폴더 계층 구조, 오른쪽에는 S3 버킷 구조가 표시됩니다. 이 화면은 마이그레이션 매핑을 계획하는 데 도움이 됩니다. 어떤 OneDrive 폴더가 어떤 S3 프리픽스로 이동하는지 확인할 수 있습니다.

## 파일 전송하기

**Job Manager**에서 OneDrive 폴더에서 대상 S3 버킷 경로로 **Copy** 작업을 생성합니다. OneDrive에서 S3로 1.5TB의 아카이브된 프로젝트 파일을 마이그레이션하는 회사의 경우, Copy(Sync가 아닌)가 적합한 작업 유형입니다 — 마이그레이션 기간 동안 소스 파일을 보존하면서 모든 것을 S3로 복사하여 삭제 전에 검증할 시간을 확보할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="OneDrive to Amazon S3 migration job in RcloneView" class="img-large img-center" />

Advanced Settings의 멀티스레드 전송 및 동시 파일 수 설정으로 처리량을 극대화할 수 있습니다. RcloneView의 기반이 되는 rclone은 OneDrive의 API 스로틀링과 자동 재시도를 처리합니다 — 제공업체가 일시적으로 요청을 제한하더라도 마이그레이션은 수동 개입 없이 계속됩니다.

## 검증 및 정리

마이그레이션 후 **Folder Compare**를 사용해 모든 파일이 올바르게 전송되었는지 확인하세요. OneDrive 소스와 S3 대상을 비교하면 — 비교 화면에 각 쪽에만 있는 파일과 일치하는 파일이 표시되어, OneDrive 콘텐츠를 제거하기 전에 확실한 체크리스트를 제공합니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying OneDrive to S3 migration with Folder Compare in RcloneView" class="img-large img-center" />

확인이 끝나면 OneDrive 콘텐츠를 단계적으로 아카이브하거나 삭제할 수 있습니다. **Job History** 로그는 마이그레이션의 영구 기록을 제공합니다 — 무엇이, 언제 전송되었는지, 얼마나 많은 데이터가 이동했는지 — Microsoft 365 구독을 해지할 때 규정 준수 문서로 유용합니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **OneDrive** 리모트(OAuth)와 **Amazon S3** 리모트(Access Key 자격 증명)를 추가하세요.
3. Job Manager에서 OneDrive에서 S3 버킷으로 향하는 **Copy** 작업을 생성하세요.
4. OneDrive 콘텐츠를 제거하기 전에 **Folder Compare**로 모든 파일이 전송되었는지 확인하세요.

RcloneView로 OneDrive에서 Amazon S3로 마이그레이션하면 복잡한 IT 프로젝트가 모든 단계에서 완전한 가시성과 검증을 갖춘 잘 관리되는 자동화된 작업으로 바뀝니다.

---

**관련 가이드:**

- [RcloneView로 OneDrive를 Google Drive로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-onedrive-to-google-drive-rcloneview)
- [RcloneView로 OneDrive를 Backblaze B2로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-onedrive-to-backblaze-b2-rcloneview)
- [OneDrive 클라우드 스토리지 관리 — RcloneView로 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
