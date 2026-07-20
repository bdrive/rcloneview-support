---
sidebar_position: 4
description: "RcloneView에서 유니언 리모트를 추가하여 데이터 중복 없이 여러 Remote:Path 위치를 하나의 통합 폴더 뷰로 병합하는 방법을 알아보세요."
keywords:
  - rcloneview
  - union remote
  - virtual remote
  - merged folder
  - multi cloud
  - remote manager
  - union
tags:
  - RcloneView
  - union
  - remote-storage
  - virtual-remote
  - multi-cloud
date: 2025-12-08
author: tayson
---

# Union

## RcloneView를 사용하여 유니언 추가하는 방법

**유니언 리모트(Union Remote)**는 여러 클라우드 리모트의 폴더를 하나의 통합 폴더로 병합합니다. 이는 Combine과 다릅니다:

- **Combine**은 폴더를 나란히 보여줍니다.
- **Union**은 여러 폴더를 하나의 뷰로 병합합니다.

Union은 다음과 같은 경우에 유용합니다:

- 여러 리모트의 데이터를 하나의 폴더처럼 접근할 때.
- 단일 화면 탐색 및 멀티 클라우드 백업 구성.
- 데이터를 복사하거나 이동하지 않고 가상 파일 시스템을 구축할 때.

---

## 유니언 리모트 생성

### 1단계 — **New Remote** → **Virtual** → **Union**

<img src="/support/images/en/howto/remote-storage-connection-settings/union/new-remote-add-union.png" alt="new remote add union" class="img-large img-center" />

### 2단계 — 유니언 세부 정보 입력

다음 항목을 입력합니다:

- **Remote name**: 예: `MyUnion`.
- **Upstreams (Remote:Path)**: 각 Upstream은 실제 폴더 위치 하나를 의미합니다.

리모트와 폴더를 선택하여 첫 번째 Upstream을 추가합니다:  
<img src="/support/images/en/howto/remote-storage-connection-settings/union/union-select-folder-1.png" alt="union select folder first" class="img-large img-center" />

다른 Upstream을 추가하려면 **Add Remote**를 클릭하고 다음 폴더를 선택합니다:  
<img src="/support/images/en/howto/remote-storage-connection-settings/union/union-select-folder-2.png" alt="union select folder second" class="img-large img-center" />

필요한 만큼 Upstream을 추가한 후 설정을 검토합니다:  
<img src="/support/images/en/howto/remote-storage-connection-settings/union/virtual-add-union-input.png" alt="union input window" class="img-large img-center" />

**Add Remote**를 클릭하여 유니언 리모트를 생성합니다.

### 3단계 — Remote Manager에서 확인

<img src="/support/images/en/howto/remote-storage-connection-settings/union/virtual-remote-manager-union.png" alt="remote manager union" class="img-large img-center" />

---

## 탐색기에서 유니언 확인하기

탐색기에서 유니언 리모트를 엽니다. 모든 Upstream의 콘텐츠가 하나의 병합된 폴더로 표시됩니다.

**Upstreams 1 — Google Drive 예시**  
<img src="/support/images/en/howto/remote-storage-connection-settings/union/union-check-folder-1.png" alt="union check folder google drive" class="img-large img-center" />  
`mygoogledrive:Meet Recordings`와 일치합니다.

**Upstreams 2 — Dropbox 예시**  
<img src="/support/images/en/howto/remote-storage-connection-settings/union/union-check-folder-2.png" alt="union check folder dropbox" class="img-large img-center" />  
`drop:assets`와 일치합니다.

---

## Combine과 Union의 주요 차이점

| 기능           | Combine Remote                    | Union Remote                          |
| -------------- | --------------------------------- | ------------------------------------- |
| 표시 방식      | 여러 폴더를 개별적으로 표시       | 하나의 병합된 뷰로 표시               |
| 쓰기 규칙      | 병합되지 않음; 폴더가 분리됨      | 새로운 쓰기는 Union 정책을 따름       |
| 파일 구조      | Folder1 / Folder2                 | 하나로 결합된 가상 폴더               |
| 적합한 용도    | 정리(Organization)                | 멀티 클라우드 병합 및 통합 사용       |

---

## 언제 Union을 사용해야 하나요

- 여러 클라우드의 데이터를 하나의 폴더에서 한 번에 볼 때.
- 여러 리모트에 나뉘어 있는 프로젝트에 통합된 뷰가 필요할 때.
- 하나의 가상 리모트를 대상으로 동기화/백업 작업을 실행할 때.
- 스토리지를 중복하지 않고 병합된 뷰를 제공할 때.

---

## 요약

| 기능             | 설명                                                 |
| ---------------- | --------------------------------------------------- |
| **Union Remote** | 여러 `Remote:Path` 항목을 하나의 뷰로 병합           |
| **Upstreams**    | 유니언을 구성하는 실제 리모트 폴더                    |
| **Benefits**     | 멀티 클라우드 통합, 단일 화면 접근                    |
| **Purpose**      | 통합 탐색, 백업/동기화, 프로젝트 통합                 |

Union Remote는 하나의 병합된 폴더 뷰를 통해 멀티 클라우드 환경을 관리할 수 있는 강력한 가상 리모트입니다.
