---
slug: fix-azure-blob-sas-token-auth-errors-rcloneview
title: "RcloneView로 Azure Blob Storage SAS 토큰 및 인증 오류 해결하기"
authors:
  - tayson
description: "rclone에서 Azure Blob Storage SAS 토큰 및 인증 오류를 해결합니다. RcloneView의 설정 도구를 사용하여 401, 403 및 만료된 토큰 문제를 해결하는 방법을 알아보세요."
keywords:
  - rcloneview
  - azure blob storage
  - sas token error
  - azure authentication error
  - azure 403 forbidden
  - azure 401 unauthorized
  - rclone azure setup
  - azure blob sas token
  - azure storage connection
  - fix azure rclone
tags:
  - RcloneView
  - troubleshooting
  - azure
  - cloud-storage
  - tips
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 Azure Blob Storage SAS 토큰 및 인증 오류 해결하기

> Azure Blob Storage 인증은 여러 방식과 미묘한 설정 오류로 인해 까다로울 수 있습니다. **RcloneView**는 설정 과정을 단순화하고 401/403 오류를 빠르게 해결하도록 도와줍니다.

Azure Blob Storage는 강력하고 널리 사용되는 객체 스토리지 서비스이지만, rclone에서 연결하려면 인증을 정확하게 설정해야 합니다. 액세스 키, SAS 토큰, 또는 서비스 주체(Service Principal) 중 무엇을 사용하든, 설정값 하나만 잘못되어도 워크플로 전체를 막아버리는 알기 힘든 오류 메시지가 발생할 수 있습니다.

이 가이드는 rclone에서 자주 발생하는 Azure Blob Storage 인증 오류를 다루고, 사용 가능한 다양한 인증 방식을 설명하며, RcloneView의 시각적 리모트 설정을 사용하여 각 문제를 해결하는 방법을 안내합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Azure 인증 방식 개요

Azure Blob Storage는 rclone을 통해 여러 인증 방식을 지원합니다. 현재 어떤 방식을 사용하고 있는지 파악하는 것이 문제 해결의 첫 단계입니다.

- **스토리지 계정 액세스 키**: 전체 스토리지 계정에 대한 전체 액세스 권한을 부여하는 공유 키입니다. 간단하지만 강력하므로 루트 비밀번호처럼 취급해야 합니다.
- **SAS 토큰(공유 액세스 서명)**: 특정 권한, 시간 제한, 선택적 IP 제한과 함께 제한된 액세스를 부여하는 범위 지정 토큰입니다. 외부 공유 시 액세스 키보다 더 안전합니다.
- **서비스 주체(Azure AD)**: Azure AD 애플리케이션을 사용하는 OAuth 기반 인증입니다. 역할 기반 액세스 제어가 필요한 엔터프라이즈 환경에 적합합니다.
- **관리 ID(Managed Identity)**: Azure 내부(예: Azure VM)에서 실행할 때 사용 가능합니다. Azure의 ID 서비스를 자동으로 사용합니다.

각 방식마다 고유한 설정 매개변수와 실패 유형이 있습니다. 아래 섹션에서는 각 방식에서 가장 흔히 발생하는 오류를 다룹니다.

## 만료된 SAS 토큰 (401 Unauthorized)

가장 흔한 SAS 토큰 오류는 만료입니다. SAS 토큰에는 시작 시간과 만료 시간이 있습니다. 토큰이 만료되면 모든 요청이 `401 Unauthorized` 또는 `403 AuthenticationFailed` 오류를 반환합니다.

**증상:**
```
HTTP 401: Server failed to authenticate the request.
AuthenticationFailed: Signed expiry time must be after signed start time.
```

**해결 방법:**

1. Azure Portal을 열고 해당 스토리지 계정으로 이동합니다.
2. 보안 + 네트워킹 섹션의 **공유 액세스 서명**으로 이동합니다.
3. 넉넉한 기간으로 새 만료 날짜를 설정합니다(예: 개인 용도라면 1년, 공유 액세스라면 더 짧게).
4. 새 SAS 토큰을 생성합니다.
5. RcloneView에서 Azure Blob 리모트를 편집하고 이전 SAS 토큰을 새 토큰으로 교체합니다.
6. 연결을 테스트하여 액세스가 복구되었는지 확인합니다.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## 잘못된 SAS 토큰 권한 (403 Forbidden)

SAS 토큰이 유효하더라도 원하는 작업에 필요한 권한이 부족할 수 있습니다. 예를 들어, 읽기 권한만 있는 토큰은 rclone이 업로드, 삭제, 또는 컨테이너 목록 조회를 시도할 때 실패합니다.

**증상:**
```
HTTP 403: This request is not authorized to perform this operation.
AuthorizationPermissionMismatch
```

**rclone 작업에 필요한 권한:**

| 작업 | 필요한 SAS 권한 |
|---|---|
| 컨테이너 목록 조회 | List |
| 파일 탐색 | Read, List |
| 파일 업로드 | Write, Create |
| 파일 삭제 | Delete |
| 전체 동기화 | Read, Write, Delete, List, Create |

**해결 방법:** Azure Portal에서 필요한 모든 권한을 포함한 새 SAS 토큰을 생성하세요. rclone 동기화 작업의 경우 일반적으로 Read, Write, Delete, List, Add, Create 권한이 필요합니다. 확실하지 않다면 개인 스토리지 계정에서는 모든 권한을 활성화하세요.

## IP 제한으로 인한 액세스 차단 (403 Forbidden)

SAS 토큰은 특정 IP 주소 또는 범위로 제한될 수 있습니다. 사무실 네트워크에서 토큰을 생성했지만 집에서 사용하려고 하면 IP 제한으로 인해 차단됩니다.

**증상:**
```
HTTP 403: This request is not authorized to perform this operation using this source IP.
```

**해결 방법:**

- IP 제한 없이 새 SAS 토큰을 생성하거나,
- SAS 토큰 설정에서 허용 범위에 현재 IP 주소를 추가하거나,
- IP 제한을 받지 않는 스토리지 계정 액세스 키를 대신 사용합니다.

동적 IP를 사용하는 경우(대부분의 가정용 인터넷), 정기적으로 업데이트할 수 없다면 IP 제한이 있는 SAS 토큰 사용을 피하세요.

## 액세스 키 오류 (401 Unauthorized)

스토리지 계정 액세스 키를 사용하는 경우, 오류는 대개 키가 잘못되었거나 계정 이름이 올바르지 않다는 의미입니다.

**흔한 원인:**

- 키를 복사할 때 공백이나 줄바꿈 문자가 함께 복사됨.
- Key1이 교체되어 현재는 Key2가 활성화된 상태에서 Key1을 사용함.
- 스토리지 계정 이름 오타.
- 키 대신 연결 문자열(connection string)을 사용함.

**RcloneView에서 해결하는 방법:**

1. Azure Portal에서 해당 스토리지 계정으로 이동하여 **액세스 키**를 엽니다.
2. Key1 또는 Key2 옆의 **표시**를 클릭한 후 키를 신중하게 복사합니다.
3. RcloneView에서 Azure Blob 리모트를 편집하고 `key` 필드에 키를 붙여넣습니다.
4. `account` 필드가 스토리지 계정 이름과 정확히 일치하는지(대소문자 구분) 다시 확인합니다.
5. 연결을 테스트합니다.

## 서비스 주체 설정 오류

서비스 주체 인증에는 테넌트 ID, 클라이언트 ID, 클라이언트 시크릿 세 가지 값이 필요합니다. 이 중 하나라도 누락되거나 잘못되면 인증에 실패합니다.

**증상:**
```
HTTP 401: AADSTS7000215: Invalid client secret provided.
HTTP 401: AADSTS70001: Application with identifier 'xxx' was not found.
```

**해결 방법:**

1. Azure Portal에서 **Azure Active Directory > 앱 등록**으로 이동합니다.
2. 해당 애플리케이션을 찾아 **애플리케이션(클라이언트) ID**를 확인합니다.
3. 개요 페이지에서 **디렉터리(테넌트) ID**를 확인합니다.
4. **인증서 및 비밀번호(Certificates & secrets)**에서 기존 클라이언트 시크릿이 만료되었다면 새로 생성합니다.
5. RcloneView에서 리모트 설정을 올바른 tenant, client_id, client_secret 값으로 업데이트합니다.
6. 서비스 주체에 스토리지 계정에 대한 **Storage Blob Data Contributor** 역할이 할당되어 있는지 확인합니다.

## 올바른 SAS 토큰을 단계별로 생성하기

SAS 토큰 문제를 애초에 방지하려면 다음 절차를 따르세요.

1. Azure Portal을 열고 해당 스토리지 계정으로 이동합니다.
2. 왼쪽 메뉴에서 **공유 액세스 서명**을 클릭합니다.
3. **허용된 서비스**에서 **Blob**을 선택합니다.
4. **허용된 리소스 유형**에서 **컨테이너**와 **개체**를 선택합니다.
5. **허용된 권한**에서 필요한 모든 권한을 선택합니다(Read, Write, Delete, List, Add, Create).
6. **시작 날짜**를 오늘로, **만료 날짜**를 적절한 미래 날짜로 설정합니다.
7. IP 제한이 필요하지 않다면 **허용된 IP 주소**를 비워둡니다.
8. **허용된 프로토콜**을 **HTTPS만**으로 설정합니다.
9. **SAS 및 연결 문자열 생성**을 클릭합니다.
10. **SAS 토큰**(`?sv=`로 시작)을 복사합니다. rclone 설정에 붙여넣을 때는 앞의 `?`를 제거하세요.

## RcloneView에서 연결 테스트하기

Azure Blob 리모트를 설정하거나 업데이트한 후에는 즉시 연결을 테스트하세요.

1. RcloneView의 탐색기 창에서 리모트를 엽니다.
2. 컨테이너가 목록에 표시되는지 확인합니다.
3. 컨테이너로 이동하여 파일이 보이는지 확인합니다.
4. 작은 테스트 파일을 업로드하여 쓰기 권한을 확인합니다.
5. 테스트 파일을 삭제하여 삭제 권한을 확인합니다.

어느 단계에서든 실패하면 오류 메시지가 구체적인 권한 또는 설정 문제를 알려줍니다. 리모트 설정에서 해당 문제를 수정하고 다시 테스트하세요.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="drag and drop" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 원하는 인증 방식(액세스 키 또는 SAS 토큰)으로 Azure Blob Storage 리모트를 추가합니다.
3. 탐색기 창에서 컨테이너를 탐색하여 연결을 테스트합니다.
4. 401 또는 403 오류가 발생하면 위의 관련 섹션을 참조하여 문제를 진단하고 해결하세요.

Azure 인증 오류는 거의 항상 만료된 토큰, 누락된 권한, 또는 잘못 복사된 자격 증명 때문에 발생합니다. RcloneView의 시각적 도구를 사용한 체계적인 문제 해결로 문제를 쉽게 파악하고 해결할 수 있습니다.

---

**관련 가이드:**

- [원격 스토리지 탐색 및 관리](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [AWS S3 및 S3 호환 스토리지 추가](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [원격 스토리지 즉시 동기화](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)

<CloudSupportGrid />
