---
sidebar_position: 3
description: "RcloneView에서 데이터를 복사하지 않고 여러 클라우드 폴더를 하나의 가상 뷰로 결합하는 방법으로, 멀티 클라우드 탐색과 통합 작업에 이상적입니다."
keywords:
  - rcloneview
  - combine remote
  - virtual remote
  - multi cloud
  - union remote
  - cloud viewer
  - remote manager
tags:
  - RcloneView
  - combine
  - remote-storage
  - virtual-remote
  - multi-cloud
date: 2025-12-08
author: tayson
---

# Combine

## RcloneView로 Combine 추가하는 방법

**Combine 리모트**는 여러 클라우드 리모트의 폴더를 하나의 가상 뷰로 병합합니다. 데이터를 복사하거나 이동하지 않고, 여러 위치를 하나의 폴더처럼 탐색할 수 있게 해줄 뿐입니다.

유용한 이유:

- 여러 클라우드에 흩어진 데이터를 한 곳에서 볼 수 있습니다.
- 서로 다른 서비스의 프로젝트 폴더를 하나의 작업 공간처럼 다룰 수 있습니다.
- 백업/동기화 작업을 마치 하나의 리모트인 것처럼 실행할 수 있습니다.
- 추가 저장 공간이나 중복 파일이 필요 없습니다.

Combine 리모트는 사실상 멀티 클라우드 뷰어입니다.

---

## Combine 리모트 생성

### 1단계 — **New Remote** → **Virtual** → **Combine**

<img src="/support/images/en/howto/remote-storage-connection-settings/combine/new-remote-add-combine.png" alt="new remote add combine" class="img-large img-center" />

### 2단계 — Combine 세부 정보 입력

각 항목마다 세 가지 필드가 필요합니다.

- **Remote name**: Combine 리모트의 이름 (예: `MyCombine`)
- **Directory**: Combine 뷰 내에 표시될 폴더 이름 (예: `Folder1`)
- **Remote Path**: 포함할 실제 클라우드 경로. 폴더 아이콘을 클릭하면 등록된 리모트에서 선택할 수 있습니다.

<img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-select-folder-1.png" alt="combine select folder first" class="img-large img-center" />

첫 번째 경로를 선택한 후:  
<img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-select-folder-2.png" alt="combine select folder second" class="img-large img-center" />

**Add Remote**를 사용해 Folder2, Folder3 등을 추가하세요.  
모든 항목을 설정하면:  
<img src="/support/images/en/howto/remote-storage-connection-settings/combine/virtual-add-combine-input.png" alt="combine input window" class="img-large img-center" />

**Add Remote**를 클릭하여 Combine 리모트를 생성합니다.

### 3단계 — Remote Manager에서 확인

<img src="/support/images/en/howto/remote-storage-connection-settings/combine/virtual-remote-manager-combine.png" alt="remote manager combine" class="img-large img-center" />

---

## Explorer에서 결합된 폴더 확인

Explorer에서 Combine 리모트를 열면 추가된 각 폴더를 확인할 수 있습니다.

**Folder1 — Google Drive 예시**  
<img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-check-folder-1.png" alt="combine check folder google drive" class="img-large img-center" />  
`mygoogledrive:Meet Recordings`와 동일한 내용을 보여줍니다.

**Folder2 — Dropbox 예시**  
<img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-check-folder-2.png" alt="combine check folder dropbox" class="img-large img-center" />  
`drop:assets`와 동일한 내용을 보여줍니다.

---

## Combine을 사용해야 할 때

- 여러 클라우드의 데이터를 한 번에 확인하고 싶을 때
- 여러 리모트에 나뉘어 있는 프로젝트 폴더를 통합하고 싶을 때
- 백업 또는 동기화 작업을 하나의 가상 리모트로 관리하고 싶을 때
- 원본 구조는 그대로 유지하면서 뷰만 통합하고 싶을 때
- 저장 공간 중복 없이 통합된 작업 공간을 얻고 싶을 때

---

## 요약

| Feature                 | Description                                    |
| ----------------------- | ---------------------------------------------- |
| **Combine Remote**      | 여러 폴더를 하나의 가상 뷰로 병합               |
| **No data duplication** | 파일은 원래 위치에 그대로 유지됨                |
| **Add various remotes** | Drive, Dropbox, OneDrive, S3 등과 함께 작동     |
| **Use cases**           | 통합 탐색, 멀티 클라우드 백업, 프로젝트 관리    |

Combine 리모트를 사용하면 파일을 이동하거나 중복시키지 않고도 멀티 클라우드 데이터를 마치 한 곳에 있는 것처럼 관리할 수 있습니다.
