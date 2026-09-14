---
slug: fix-public-link-not-supported-errors-rcloneview
title: "공개 링크 지원 안 됨 오류 해결하기 — RcloneView로 파일을 올바르게 공유하기"
authors:
  - tayson
description: "RcloneView에서 Get Public Link 오류를 해결하고, 어떤 리모트가 공유 가능한 링크를 지원하는지 확인하며, 나머지 경우를 위한 안전한 대안을 사용하세요."
keywords:
  - RcloneView
  - 공개 링크 오류
  - 공개 링크 지원 안 됨
  - 클라우드 파일 공유
  - rclone 공개 링크
  - 클라우드 스토리지 공유
  - 공유 링크 수정
  - 클라우드 파일 공유 문제 해결
  - 리모트 관리자
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-storage
  - file-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 공개 링크 지원 안 됨 오류 해결하기 — RcloneView로 파일을 올바르게 공유하기

> Get Public Link를 우클릭해도 아무 일도 일어나지 않는다면 — 그 이유와 대신 해야 할 일을 알려드립니다.

RcloneView의 Explorer 패널은 우클릭 메뉴에서 **Get Public Link** 명령을 제공하지만, 이는 백엔드가 네이티브 공유 API를 노출하는 리모트에서만 동작합니다. 순수 프로토콜 연결이나 지원하지 않는 공급자에서 시도하면 URL 대신 요청이 실패하거나 오류가 반환됩니다. RcloneView의 Remote Manager와 듀얼 패널 Explorer 덕분에 어떤 리모트에 있는지 쉽게 확인하고, 대신 링크 생성이 가능한 곳으로 파일을 옮길 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 일부 리모트에서 Get Public Link가 실패하는 이유

공개 링크 생성은 기반 스토리지 백엔드가 무엇을 지원하는지에 달려 있습니다. Google Drive, Dropbox, Microsoft OneDrive, Box, pCloud처럼 네이티브 공유 API를 갖춘 공급자는 rclone이 해당 공급자 고유의 링크 엔드포인트를 호출하기 때문에 공유 가능한 URL을 반환합니다. SFTP, FTP, WebDAV, SMB/CIFS 같은 프로토콜 기반 연결은 이런 개념 자체가 없습니다 — 이들은 공유 플랫폼이 아니라 순수한 파일 전송 프로토콜이므로, 명령이 호출할 대상이 존재하지 않습니다. S3 호환 엔드포인트(Amazon S3, Wasabi, Backblaze B2, Cloudflare R2)는 대신 공급자 자체 콘솔에서 설정한 버킷 정책이나 사전 서명된 URL을 통해 공개 액세스를 처리합니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView new remote screen showing different provider types" class="img-large img-center" />

버그라고 단정하기 전에 리모트가 어느 범주에 속하는지 확인하세요. Remote 탭에서 Remote Manager를 열고 리모트 유형을 확인하면 실패 원인이 즉시 설명되는 경우가 많습니다.

## 리모트와 권한 설정 확인하기

링크를 지원해야 할 OAuth 기반 공급자인데도 실패한다면, 다음 단계는 계정이 해당 파일이나 폴더를 공유할 권한을 가지고 있는지 확인하는 것입니다. 이런 리모트의 비즈니스나 엔터프라이즈 버전은 조직 수준에서 외부 공유를 제한하는 경우가 있으며, 이는 RcloneView에서 동일한 실패한 요청으로 나타납니다. 토큰이 오래된 것 같다면 Remote Manager를 통해 리모트를 다시 인증하고, 공급자 자체 웹 인터페이스에서 공유 가능하다고 알려진 파일로 먼저 재시도하세요.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView folder compare view for verifying file locations before sharing" class="img-large img-center" />

마운트 전용 도구와 달리, RcloneView는 FREE 라이선스에서도 동기화와 폴더 비교를 지원하므로, 더 이상 문제를 해결하려 애쓰는 대신 링크를 생성할 수 없는 리모트에서 링크 생성이 가능한 리모트로 파일을 빠르게 복사할 수 있습니다.

## 링크를 지원하지 않는 리모트를 위한 안전한 대안

SFTP, FTP, WebDAV, SMB, 그리고 대부분의 S3 호환 버킷의 경우, 실질적인 해결책은 네이티브 링크를 지원하는 리모트로 파일을 복사하거나, 공급자 자체 콘솔(버킷 정책, 사전 서명된 URL, 또는 NAS 측 공유)을 통해 배포를 처리하는 것입니다. 두 개의 열린 Explorer 패널 사이에서 RcloneView의 드래그 앤 드롭을 사용해 사본을 옮긴 다음, 대상 리모트에서 Get Public Link를 실행하세요.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView job scheduling for repeatable copy-and-share workflows" class="img-large img-center" />

반복적으로 필요한 작업이라면, 이 복사 단계를 Job Manager에 Job으로 저장해 두면 매번 동기화 후 동일한 파일이 자동으로 링크 생성이 가능한 리모트에 도착하도록 할 수 있습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Remote Manager를 열어 문제가 되는 리모트가 실제로 어떤 백엔드 유형을 사용하는지 확인하세요.
3. 토큰이 만료되었을 수 있는 OAuth 리모트를 다시 인증한 다음, 공유 가능하다고 알려진 파일로 링크를 재시도하세요.
4. 프로토콜 또는 S3 호환 리모트의 경우, 드래그 앤 드롭으로 파일을 링크 생성이 가능한 리모트에 복사한 다음 그곳에서 링크를 생성하세요.

어떤 리모트가 링크를 공유할 수 있는지 미리 알아두면 나중에 지원 티켓을 하나 줄일 수 있습니다.

---

**관련 가이드:**

- [RcloneView로 클라우드 파일의 공유 가능한 공개 링크 받기](https://rcloneview.com/support/blog/link-public-shared-links-cloud-rcloneview)
- [Google Drive 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [RcloneView로 클라우드 전송 권한 거부 오류 해결하기](https://rcloneview.com/support/blog/fix-cloud-transfer-permission-denied-errors-rcloneview)

<CloudSupportGrid />
