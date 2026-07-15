---
sidebar_position: 2
description: "RcloneView에서 Crypt 리모트를 추가하여 기존 클라우드 리모트 위에 파일과 파일 이름을 암호화하면서 앱 내에서 계속 접근할 수 있습니다."
keywords:
  - rcloneview
  - crypt
  - virtual remote
  - encrypted remote
  - cloud encryption
  - remote manager
  - privacy
tags:
  - RcloneView
  - crypt
  - remote-storage
  - encryption
  - virtual-remote
date: 2025-12-08
author: tayson
---

# Crypt

## RcloneView로 Crypt 추가하는 방법

**Crypt 리모트**는 기존 클라우드 리모트(Google Drive, OneDrive 등) 위에 암호화 계층을 추가합니다.  
파일은 여전히 원본 리모트에 저장되며, Crypt 리모트가 암호화와 복호화를 처리합니다.

유용한 이유:

- 공급자가 파일 내용을 볼 수 없도록 합니다.
- 완전한 프라이버시를 위해 파일 이름도 암호화할 수 있습니다.
- 복호화는 RcloneView 내부에서 자동으로 이루어집니다.
- 민감한 백업에 이상적입니다.

---

## Crypt 리모트가 비어 있는 것처럼 보이는 이유

사용자는 종종 Crypt 리모트에서 일반 파일이 보일 것으로 기대합니다. 하지만:

- Crypt는 **암호화된** 파일만 표시합니다.
- 하위 리모트의 일반 파일은 Crypt 뷰에 표시되지 **않습니다**(정상 동작).

예시:

- `mygoogledrive:Meet Recordings`에는 일반 파일이 들어 있습니다.
- `MyCryptGoogle:`은 Crypt로 동일한 폴더를 감쌉니다.
- Crypt 리모트에서는 비어 있는 것처럼 보이는데, 이는 예상된 동작입니다.

**Crypt를 통해** 업로드하면 파일이 암호화되어 저장되므로:

- Crypt 리모트에서는 정상적으로(복호화되어) 표시됩니다.
- 원본 리모트에서는 암호화된 이름으로 표시됩니다.

---

## New Remote로 Crypt 리모트 생성하기

### 1단계 — **New Remote** → **Virtual** → **Crypt** 열기

<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/new-remote-add-crypt.png" alt="new remote add crypt" class="img-large img-center" />

### 2단계 — Crypt 세부 정보 입력

필수 항목:

- **Remote name**: Crypt 리모트의 이름(예: `MyCryptGoogle`).
- **Remote (folder to encrypt)**: 폴더 선택기를 클릭하여 암호화할 기존 리모트와 폴더를 선택합니다.

<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/virtual-add-select-remote-and-folder.png" alt="select target remote and folder for crypt" class="img-large img-center" />

선택 후 설정을 검토하고 **Add Remote**를 클릭합니다.  
<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/virtual-add-crypt-input.png" alt="crypt input window" class="img-large img-center" />

### 3단계 — Remote Manager에서 확인

<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/virtual-remote-manager-crypt.png" alt="remote manager crypt" class="img-large img-center" />

---

## Crypt 리모트에서 파일 업로드 및 확인하기

Crypt 리모트를 통해 업로드하면:

- 파일이 **업로드 시 암호화**됩니다.
- Crypt 뷰는 편의를 위해 **복호화된 이름**을 표시합니다.
- 하위 리모트는 **암호화된 파일 이름**을 표시합니다.

비교 예시:  
<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/crypt-upload-file-compare.png" alt="crypt upload file compare" class="img-large img-center" />

| 보는 위치                          | 표시되는 내용                              |
| ------------------------------- | ----------------------------------- |
| `MyCryptGoogle:`                | 일반적인 파일 이름처럼 보임(복호화됨) |
| `mygoogledrive:Meet Recordings` | 암호화된 파일 이름(정상)      |

---

## Crypt 리모트를 사용해야 하는 이유

- 클라우드 공급자가 파일 내용을 읽을 수 없습니다.
- 완전한 프라이버시를 위해 파일 이름을 암호화할 수 있습니다.
- RcloneView의 자동 복호화로 사용이 간편합니다.
- 안전한 백업, 민감한 문서, 공유 드라이브에 적합합니다.
- 스케줄러와 결합하여 자동화된 암호화 백업을 구성할 수 있습니다.

---

## 요약

| 기능                    | 설명                                       |
| -------------------------- | ------------------------------------------------- |
| **Crypt Remote**           | 기존 리모트 위의 암호화 계층          |
| **Plain files visibility** | Crypt 뷰에서는 일반 파일이 숨겨짐(정상)     |
| **Uploads via Crypt**      | 암호화되어 저장되며, Crypt 뷰에서는 복호화되어 표시됨 |
| **Purpose**                | 안전한 클라우드 백업 및 프라이버시 보호       |
