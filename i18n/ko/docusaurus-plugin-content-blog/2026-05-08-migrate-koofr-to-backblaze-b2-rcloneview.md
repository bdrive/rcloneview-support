---
slug: migrate-koofr-to-backblaze-b2-rcloneview
title: "Koofr에서 Backblaze B2로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - tayson
description: "체크섬 검증과 대용량 전송을 위한 자동 재시도 기능을 갖춘 RcloneView를 사용하여 Koofr 클라우드 스토리지에서 Backblaze B2 오브젝트 스토리지로 파일을 마이그레이션하는 방법을 알아보세요."
keywords:
  - Koofr to Backblaze B2 migration
  - migrate Koofr B2 RcloneView
  - Koofr Backblaze B2 transfer
  - switch Koofr to B2 storage
  - cloud migration Koofr
  - Koofr backup Backblaze B2
  - Koofr to S3 migration guide
  - rclone Koofr B2 GUI
tags:
  - koofr
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Koofr에서 Backblaze B2로 마이그레이션 — RcloneView로 파일 전송하기

> RcloneView의 단일 작업으로 Koofr 클라우드 스토리지 라이브러리를 Backblaze B2 오브젝트 스토리지로 이전하세요 — 검증되고, 모니터링되며, 중단되어도 재개 가능합니다.

Koofr는 다른 클라우드 계정을 연결하는 허브 역할도 하는 유럽의 프라이버시 중심 클라우드 스토리지 서비스입니다. 아카이빙이나 비용 절감을 위해 Backblaze B2로 통합하려는 경우, RcloneView는 로컬 다운로드 없이 두 제공업체 간 마이그레이션을 직접 처리합니다. 파일은 Koofr의 WebDAV 기반 백엔드에서 rclone의 전송 엔진을 통해 B2 버킷으로 바로 스트리밍됩니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Koofr와 Backblaze B2 리모트 설정하기

Koofr의 경우 **리모트 탭 → 새 리모트**로 이동하여 제공업체 목록에서 Koofr를 선택합니다. Koofr는 OAuth 로그인을 지원하며, RcloneView가 브라우저 창을 열어 Koofr 계정으로 인증할 수 있게 해줍니다. 비밀번호 기반 접근을 선호한다면 Koofr 계정 설정에서 앱 비밀번호를 생성하여 Koofr 이메일과 함께 사용할 수도 있습니다.

Backblaze B2의 경우 B2 콘솔에서 생성한 Application Key ID와 Application Key를 입력합니다. 구성에서 버킷 이름을 지정하세요. 두 리모트가 모두 저장되면 Koofr를 왼쪽 탐색기 패널에, B2를 오른쪽에 배치하여 둘 다 탐색 가능한지 확인합니다.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Koofr and Backblaze B2 in RcloneView" class="img-large img-center" />

## 마이그레이션 실행하기

홈 탭에서 **동기화**를 클릭하고 작업을 구성합니다. Koofr 폴더를 소스로, B2 버킷을 대상으로 설정하세요. 고급 설정에서 무결성 검증을 위해 **체크섬**을 활성화합니다. Koofr는 내부적으로 WebDAV를 사용하므로 파일 목록 조회가 네이티브 S3보다 다소 느릴 수 있으니, Koofr API에 과부하가 걸리지 않도록 checker 수를 4로 설정하세요.

먼저 **드라이 런**을 실행하여 전송될 전체 파일 목록을 확인합니다. 이는 Koofr가 다른 연결된 계정(Google Drive, Dropbox 등)의 파일도 통합하여 보여주는 대용량 Koofr 라이브러리에서 특히 유용합니다 — 드라이 런을 통해 실제 Koofr 스토리지만 마이그레이션하고 다른 제공업체의 미러링된 뷰는 포함되지 않았는지 확인할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Koofr to Backblaze B2 migration in progress in RcloneView" class="img-large img-center" />

## 중단된 전송 처리하기

마이그레이션이 중단되면(네트워크 끊김, 컴퓨터 절전 모드 등) RcloneView의 동기화 모드는 본질적으로 재개 가능합니다. 동일한 동기화 작업을 다시 실행하면 rclone이 소스와 대상을 비교하여 아직 존재하지 않거나 B2 쪽에서 다른 파일만 전송합니다. 이미 전송된 파일은 다시 보낼 필요가 없습니다.

마이그레이션이 완료된 후에는 **폴더 비교**를 사용하여 Koofr 소스와 B2 대상이 일치하는지 확인하세요. 비교 화면은 Koofr에는 있지만 B2에는 없는 파일을 강조 표시하여 재시도가 필요한 항목을 명확하게 보여줍니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Koofr to B2 migration runs" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Koofr(OAuth)와 Backblaze B2(Application Key)를 리모트로 추가합니다.
3. 드라이 런을 실행하여 범위를 확인한 다음, 체크섬을 활성화한 상태로 마이그레이션을 실행하세요.
4. 완료 후 폴더 비교를 사용하여 마이그레이션이 완전히 성공했는지 확인하세요.

RcloneView로 Koofr에서 Backblaze B2로 마이그레이션하는 것은 전 과정에서 데이터 무결성을 보호하는 신뢰할 수 있고 재개 가능한 프로세스입니다.

---

**관련 가이드:**

- [RcloneView로 Koofr 클라우드 스토리지 관리하기](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [RcloneView로 Koofr에서 Google Drive로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-koofr-to-google-drive-rcloneview)
- [RcloneView로 Backblaze B2 클라우드 스토리지 관리하기](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
