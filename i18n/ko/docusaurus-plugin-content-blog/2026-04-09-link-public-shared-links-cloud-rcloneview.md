---
slug: link-public-shared-links-cloud-rcloneview
title: "RcloneView로 클라우드 파일의 공개 공유 링크 생성하기"
authors:
  - tayson
description: "RcloneView의 link 명령어를 사용하여 클라우드 파일의 공개 다운로드 링크를 생성하세요. 계정 액세스 권한을 부여하지 않고도 Google Drive, OneDrive, Dropbox, S3 등에서 파일을 공유할 수 있습니다."
keywords:
  - rcloneview
  - public link cloud file
  - share cloud file link
  - rclone link command
  - generate download link
  - presigned url s3
  - shared link google drive
  - cloud file sharing
  - public url cloud storage
  - share file without account
tags:
  - feature
  - tips
  - collaboration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 클라우드 파일의 공개 공유 링크 생성하기

> 클라우드 파일을 공유하려면 보통 제공업체의 웹 인터페이스로 이동해 권한을 조정하고 링크를 복사해야 합니다. RcloneView의 링크 기능은 파일 탐색기에서 바로 공유 가능한 URL을 생성합니다 — 이를 지원하는 모든 제공업체에서 사용할 수 있습니다.

계정에 대한 액세스 권한이 없는 사람과 클라우드에 저장된 파일을 공유해야 할 때, 공개 링크 또는 사전 서명된(pre-signed) 링크가 표준적인 해결책입니다. Google Drive는 공유 가능한 링크를 생성하고, S3는 사전 서명된 URL을 생성하며, Dropbox는 공유 링크를 제공합니다 — 각각 서로 다른 인터페이스와 워크플로를 통해 이루어집니다. RcloneView는 이를 하나의 작업으로 통합합니다: 파일을 마우스 오른쪽 버튼으로 클릭하고, 링크를 생성한 뒤, 공유하면 됩니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 제공업체별 공개 링크 작동 방식

클라우드 제공업체마다 파일 공유 방식이 다릅니다.

| 제공업체 | 링크 유형 | 기본 만료 기간 | 참고 사항 |
|---|---|---|---|
| Google Drive | 공유 가능한 링크 | 만료 없음 | 파일 권한이 "링크가 있는 모든 사용자"로 변경됨 |
| OneDrive | 공유 링크 | 설정 가능 | 익명 또는 조직 범위로 제한 |
| Dropbox | 공유 링크 | 만료 없음 | 읽기 전용 다운로드 링크 |
| AWS S3 | 사전 서명된 URL | 설정 가능(최대 7일) | 임시, 암호학적으로 서명됨 |
| Backblaze B2 | 다운로드 URL | 만료 없음 | 버킷이 공개 상태여야 하거나 인증 토큰 사용 |
| Cloudflare R2 | 사전 서명된 URL | 설정 가능 | S3 호환 사전 서명된 URL |

RcloneView는 내부적으로 rclone의 `link` 명령어를 사용하여 각 제공업체에 맞는 링크 유형을 자동으로 생성합니다. 제공업체별 공유 메커니즘을 알 필요 없이 RcloneView가 이를 처리합니다.

## RcloneView에서 링크 생성하기

파일의 공개 링크를 생성하려면:

1. RcloneView 탐색기에서 파일로 이동합니다.
2. 파일을 마우스 오른쪽 버튼으로 클릭하고 링크/공유 옵션을 선택합니다.
3. RcloneView가 링크를 생성하여 클립보드에 복사합니다(또는 수동 복사를 위해 표시합니다).

만료 기능을 지원하는 제공업체(S3 사전 서명된 URL 등)의 경우, 사용자 지정 옵션에서 `--expire` 플래그를 사용하여 링크 유효 기간을 지정할 수 있습니다. 예를 들어 `--expire 24h`는 24시간 후 만료되는 링크를 생성합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Generating a public link for a cloud file in RcloneView" class="img-large img-center" />

## 터미널을 통해 link 명령어 사용하기

더 세밀한 제어가 필요하다면 RcloneView에 내장된 터미널을 사용해 link 명령어를 직접 실행하세요.

```
rclone link remote:path/to/file.pdf
```

이 명령은 공개 URL을 출력합니다. S3 호환 제공업체의 경우 만료 시간을 추가할 수 있습니다.

```
rclone link remote:bucket/file.pdf --expire 48h
```

터미널 방식은 여러 파일에 대한 링크를 생성하거나 워크플로의 일부로 링크 생성을 스크립트화할 때 유용합니다.

## 제공업체별 동작 방식

### Google Drive

Google Drive 파일의 링크를 생성하면 rclone은 해당 파일의 공유 설정을 "링크가 있는 모든 사용자가 볼 수 있음"으로 변경합니다. 수동으로 공유를 해제하지 않는 한 링크는 만료되지 않습니다. 이는 파일의 권한을 변경한다는 점에 유의하세요 — URL을 가진 누구나 파일에 액세스할 수 있습니다.

Google Workspace 계정의 경우, 관리자가 링크 공유를 조직 구성원으로만 제한할 수 있습니다. 이 경우 생성된 링크는 조직 내 사용자에게만 작동합니다.

### OneDrive 및 SharePoint

OneDrive는 Microsoft Graph API를 통해 공유 링크를 생성합니다. 링크 유형은 조직의 공유 정책에 따라 달라지며, 익명(누구나 액세스 가능)이거나 조직 구성원으로 제한될 수 있습니다. 개인 OneDrive 계정은 익명 링크를 생성할 수 있습니다.

### AWS S3 및 S3 호환 스토리지

S3 사전 서명된 URL은 가장 안전한 옵션입니다. URL에는 특정 객체에 대한 임시 액세스 권한을 부여하는 암호학적 서명이 포함되어 있습니다. 링크는 지정된 기간이 지나면 만료됩니다(기본값은 상황에 따라 다르며, IAM 사용자 자격 증명의 경우 최대 7일). 객체의 권한에는 아무런 변경이 가해지지 않으며 — 사전 서명된 URL 자체가 인가 정보를 담고 있습니다.

이 때문에 S3 사전 서명된 URL은 파일을 임시로 공유하는 데 이상적입니다. 링크는 지정된 기간 동안만 작동하고 이후 자동으로 무효화되어 별도의 정리 작업이 필요 없습니다.

### Dropbox

Dropbox는 파일에 대한 읽기 전용 액세스를 제공하는 공유 링크를 생성합니다. Dropbox Plus 및 Professional 요금제에서는 기본적으로 링크가 만료되지 않습니다. Dropbox Business에서는 관리자가 만료 정책을 강제할 수 있습니다.

## 사용 사례

### 빠른 파일 공유

클라우드에 저장된 보고서, 디자인 파일 또는 데이터셋의 링크를 생성해 이메일, Slack, 채팅으로 전송하세요. 수신자는 클라우드 계정이나 스토리지 액세스 권한 없이도 파일을 다운로드할 수 있습니다.

### 클라이언트를 위한 임시 액세스

프리랜서와 에이전시의 경우, S3 사전 서명된 URL은 클라이언트에게 결과물을 전달하는 데 이상적입니다. 결과물을 S3에 업로드하고, 7일짜리 사전 서명된 URL을 생성해 클라이언트에게 전송하세요. 7일이 지나면 링크는 자동으로 만료되어 별도의 수동 정리가 필요 없습니다.

### 공개 콘텐츠 배포

문서, 릴리스, 미디어 키트처럼 광범위하게 배포하려는 파일의 경우, Google Drive나 Dropbox에서 영구 링크를 생성하여 웹사이트나 문서에 삽입하세요. RcloneView는 제공업체의 웹 인터페이스로 이동하지 않고도 링크를 생성합니다.

## 보안 고려 사항

- **영구 링크는 파일을 무기한 노출시킵니다**: Google Drive와 Dropbox 링크는 기본적으로 만료되지 않습니다. 민감한 파일을 공유했다면 더 이상 액세스가 필요하지 않을 때 링크를 해제하는 것을 잊지 마세요.
- **사전 서명된 URL은 시간 제한이 있지만 여전히 공유 가능합니다**: 유효 기간 동안 URL을 가진 누구나 파일에 액세스할 수 있습니다. 파일이 기밀 사항이라면 사전 서명된 URL을 공개 채널에 공유하지 마세요.
- **일부 제공업체에서는 링크 생성이 권한을 변경합니다**: Google Drive 링크는 파일의 공유 설정을 변경합니다. 이는 해당 파일에 액세스 권한이 있는 다른 사용자에게도 표시됩니다.
- **공유 링크를 주기적으로 점검하세요**: 특히 민감한 파일에 대해서는 오래된 공유 링크를 검토하고 해제하세요. RcloneView의 탐색기를 사용하면 파일로 이동해 공유 상태를 손쉽게 확인할 수 있습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Remote Manager에서 클라우드 리모트를 추가합니다.
3. 탐색기에서 파일로 이동하여 공개 링크를 생성합니다.
4. 시간 제한이 있는 링크가 필요하면 `--expire` 플래그와 함께 S3 사전 서명된 URL을 사용하세요.

RcloneView에서 공유 가능한 링크를 생성하면 각 제공업체의 웹 인터페이스로 전환할 필요가 없습니다. 빠른 공유 링크, 임시 클라이언트 전달용 URL, 영구 다운로드 링크 중 무엇이 필요하든 RcloneView는 파일 탐색기에서 이를 처리합니다.

---

**관련 가이드:**

- [원격 스토리지 찾아보기 및 관리하기](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [AWS S3 및 S3 호환 스토리지 추가하기](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [브라우저 기반 로그인(OAuth)으로 원격 추가하기](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)

<CloudSupportGrid />
