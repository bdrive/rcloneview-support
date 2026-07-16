---
slug: manage-files-com-cloud-sync-backup-rcloneview
title: "Files.com 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - tayson
description: "SFTP 또는 WebDAV를 통해 Files.com을 RcloneView에 연결하고, 엔터프라이즈 파일 공유를 탐색하며, 안전한 파일 관리를 위한 자동 동기화 및 백업 작업을 실행하세요."
keywords:
  - Files.com RcloneView
  - Files.com SFTP
  - Files.com WebDAV
  - 엔터프라이즈 파일 관리
  - Files.com 클라우드 동기화
  - Files.com 백업
  - SFTP 클라우드 동기화
  - 안전한 파일 전송
tags:
  - sftp
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Files.com 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기

> Files.com은 강력한 엔터프라이즈 파일 관리 플랫폼이며, RcloneView는 SFTP 또는 WebDAV를 통해 여기에 연결하여 깔끔한 데스크톱 GUI로 파일을 동기화, 백업, 관리할 수 있게 해줍니다.

Files.com은 대규모 조직이 의존하는 컴플라이언스 기능, 자동화, 접근 제어를 갖춘 엔터프라이즈급 관리형 파일 전송을 제공합니다. Files.com을 더 넓은 멀티 클라우드 워크플로에 통합해야 하는 팀 — 콘텐츠를 클라우드 백업으로 동기화하거나, 다른 스토리지 제공업체로 파일을 이동하거나, 파일을 대량으로 관리하는 경우 — 에게 RcloneView는 표준 SFTP 및 WebDAV 프로토콜 위에서 작동하는 그래픽 인터페이스를 제공합니다. 별도의 rclone 설치가 필요 없으며, RcloneView 안에 번들로 포함되어 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## SFTP를 통해 Files.com 연결하기

SFTP는 RcloneView를 Files.com에 연결하는 가장 안정적인 방법입니다. RcloneView에서 **New Remote**를 클릭하고 **SFTP**를 선택하세요. Files.com 호스트명(일반적으로 `<your-subdomain>.files.com`)과 사용자 이름, 그리고 비밀번호 또는 SSH 키를 입력합니다. Files.com은 두 가지 인증 방식을 모두 지원하며, 자동화된 워크플로에는 비밀번호 저장을 피할 수 있는 SSH 키 인증이 선호됩니다.

저장한 후에는 Files.com SFTP 리모트가 듀얼 패널 탐색기에 나타납니다. Files.com 폴더 구조를 탐색하고, 드래그 앤 드롭으로 파일을 업로드 및 다운로드하며, RcloneView 인터페이스에서 직접 엔터프라이즈 파일 공유를 관리할 수 있습니다. 모든 작업에 대해 실시간 전송 진행 상황이 표시됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Files.com as an SFTP remote in RcloneView" class="img-large img-center" />

## WebDAV를 통해 연결하기

Files.com은 WebDAV도 지원하며, 방화벽으로 SFTP가 차단되어 있거나 HTTP 기반 접근을 선호하는 경우 대안이 됩니다. RcloneView에서 **New Remote** > **WebDAV**를 클릭하고 Files.com WebDAV URL과 사용자 이름, 비밀번호를 입력하세요. Files.com의 WebDAV 엔드포인트는 일반적으로 `https://<subdomain>.files.com/dav/`에서 제공됩니다.

WebDAV는 일반적인 파일 탐색과 중간 규모의 전송에 잘 작동합니다. 백업 작업에서 수천 개의 파일을 동기화하는 등 대용량 대량 작업의 경우, SFTP가 일반적으로 더 나은 성능과 더 안정적인 대용량 파일 처리를 제공합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Files.com to cloud backup storage in RcloneView" class="img-large img-center" />

## 동기화 및 백업 작업 실행하기

Files.com이 연결되면 **Job Wizard**를 사용하여 동기화 작업을 생성할 수 있습니다. Files.com 폴더를 소스로, 클라우드 백업 대상(예: Amazon S3, Backblaze B2, Google Drive)을 목적지로 설정하세요. 이는 엔터프라이즈 백업의 일반적인 패턴입니다: Files.com이 활성 파일 관리 플랫폼 역할을 하고, 클라우드 오브젝트 스토어가 보관용 사본을 저장합니다.

동기화 작업을 실행하기 전에 **dry run**을 실행하여 올바른 파일이 범위에 포함되어 있는지 확인하세요. 컴플라이언스가 중요한 파일의 경우, RcloneView의 **Job History**가 모든 전송에 대한 전체 감사 추적을 제공합니다. PLUS 라이선스 사용자는 이러한 백업 작업을 자동으로 실행되도록 예약할 수 있어(예: 매일 밤), 수동 개입 없이 Files.com 데이터를 지속적으로 백업할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Files.com backup sync in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **New Remote** > **SFTP**를 클릭하고 Files.com 호스트명, 사용자 이름, SSH 키 또는 비밀번호를 입력합니다.
3. 듀얼 패널 탐색기에서 Files.com 폴더 구조를 탐색합니다.
4. **Job Wizard**를 사용하여 Files.com에서 원하는 클라우드 스토리지로 백업 동기화 작업을 생성합니다.
5. PLUS 라이선스로 반복 백업을 예약하여 자동화된 데이터 보호를 구현합니다.

RcloneView는 Files.com의 엔터프라이즈 파일 관리 기능을 더 넓은 클라우드 스토리지 생태계와 연결하여, 모든 파일 작업을 위한 하나의 그래픽 도구를 제공합니다.

---

**관련 가이드:**

- [Seafile 관리 — RcloneView로 클라우드 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-seafile-cloud-sync-backup-rcloneview)
- [Citrix ShareFile 관리 — RcloneView로 클라우드 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-citrix-sharefile-cloud-sync-backup-rcloneview)
- [RcloneView로 SFTP 연결 거부 및 시간 초과 오류 해결하기](https://rcloneview.com/support/blog/fix-sftp-connection-refused-timeout-rcloneview)

<CloudSupportGrid />
