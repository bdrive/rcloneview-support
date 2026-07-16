---
slug: manage-hetzner-storage-box-sync-rcloneview
title: "Hetzner Storage Box 관리 — RcloneView로 동기화 및 백업하기"
authors:
  - tayson
description: "Hetzner Storage Box를 RcloneView에 안전하게 연결하고 SFTP 및 WebDAV 프로토콜로 유럽 클라우드 백업을 위해 클라우드 간 파일을 동기화하는 방법을 알아보세요."
keywords:
  - Hetzner Storage Box
  - SFTP backup
  - WebDAV cloud sync
  - European cloud storage
  - RcloneView
  - secure file sync
  - cloud backup Europe
  - Hetzner SFTP
  - hybrid cloud backup
  - GDPR-compliant cloud storage
tags:
  - hetzner
  - european-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Hetzner Storage Box 관리 — RcloneView로 동기화 및 백업하기

> 유럽 클라우드 스토리지와 멀티 클라우드의 유연함이 만났습니다. Hetzner Storage Box는 경쟁력 있는 가격과 GDPR 준수를 제공하며, 이제 RcloneView에서 다른 클라우드 계정과 함께 손쉽게 관리할 수 있습니다.

Hetzner Storage Box는 안정적이고 합리적인 가격의 클라우드 백업을 찾는 유럽 기업들에게 신뢰받는 선택입니다. SFTP를 사용하든 WebDAV를 사용하든, RcloneView는 Hetzner 계정을 전체 클라우드 생태계와 연결해 대시보드를 벗어나지 않고도 동기화, 백업, 아카이브를 수행할 수 있게 해줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## SFTP로 Hetzner Storage Box 연결하기

RcloneView에서 Hetzner Storage Box 리모트를 추가하는 것은 간단합니다. SFTP는 업계 표준 암호화를 통해 서버에 직접 접근할 수 있게 해줍니다.

1. RcloneView를 열고 **Add Remote**를 클릭합니다
2. 제공업체 목록에서 **SFTP**를 선택합니다
3. Hetzner 자격 증명을 입력합니다:
   - **Host**: `u[account-id].your-storagebox.de`
   - **Username**: Hetzner 로그인 아이디
   - **Password**: Hetzner 비밀번호 또는 SSH 키
4. 포트를 **22**(표준 SFTP)로 설정합니다
5. **Test Connection**을 클릭하여 확인합니다

![New Remote Setup](/images/en/blog/new-remote.png)

## Hetzner를 AWS S3 또는 다른 클라우드와 동기화하기

Hetzner Storage Box가 연결되면 클라우드 간 동기화 작업을 즉시 생성할 수 있습니다.

**활용 사례:**
- **S3로 백업**: 자주 사용하지 않는 파일을 Hetzner에서 Amazon S3 Glacier로 아카이브하여 장기 보관
- **멀티 클라우드 이중화**: Hetzner와 Backblaze B2 간 데이터 미러링
- **하이브리드 워크플로우**: 팀 액세스를 위해 Hetzner Storage Box를 Google Drive와 동기화

![Cloud to Cloud Transfer](/images/en/blog/cloud-to-cloud-transfer-default.png)

## 실시간 모니터링 및 예약

RcloneView의 작업 스케줄러를 사용하면 원하는 일정에 맞춰 Hetzner 백업을 자동화할 수 있습니다. 전송 속도, 오류율, 파일 수를 실시간으로 모니터링하세요.

![Job History and Monitoring](/images/en/howto/rcloneview-basic/job-history.png)

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 아직 계정이 없다면 [hetzner.com](https://www.hetzner.com/storage/storage-box)에서 Hetzner Storage Box 계정을 만드세요.
3. RcloneView에서 SFTP 또는 WebDAV 자격 증명으로 Hetzner 리모트를 추가하세요.
4. 다른 클라우드 제공업체로 첫 번째 동기화 또는 백업 작업을 생성하세요.
5. 필요에 따라 반복 작업을 예약하거나 일회성 전송을 실행하세요.

RcloneView가 복잡한 작업을 처리해주니, 자신 있게 유럽 클라우드 스토리지를 관리하고 데이터에만 집중하세요.

---

**관련 가이드:**

- [SFTP 서버 관리 — RcloneView로 클라우드 동기화](https://rcloneview.com/support/blog/manage-sftp-server-cloud-sync-rcloneview)
- [WebDAV 서버 연결 — RcloneView로 클라우드 동기화](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [OVH 클라우드 오브젝트 스토리지 관리 — RcloneView로 동기화](https://rcloneview.com/support/blog/manage-ovh-cloud-object-storage-sync-rcloneview)

<CloudSupportGrid />
