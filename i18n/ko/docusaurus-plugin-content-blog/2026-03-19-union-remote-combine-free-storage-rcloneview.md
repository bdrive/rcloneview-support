---
slug: union-remote-combine-free-storage-rcloneview
title: "유니온 리모트 — RcloneView로 여러 무료 클라우드 계정을 하나의 거대한 스토리지 풀로 결합하기"
authors:
  - tayson
description: "구글 드라이브는 15GB 무료, 원드라이브는 5GB 무료, 드롭박스는 2GB 무료를 제공합니다. RcloneView의 rclone 유니온 리모트를 사용하여 이 모든 것을 하나의 가상 22GB 스토리지 풀로 결합하세요."
keywords:
  - 무료 클라우드 스토리지 결합
  - 유니온 리모트 rclone
  - 클라우드 계정 병합
  - 클라우드 스토리지 결합
  - rclone 유니온 드라이브
  - 무료 클라우드 스토리지 풀
  - 멀티 클라우드 스토리지 풀
  - 구글 드라이브 원드라이브 결합
  - 가상 클라우드 스토리지
  - 클라우드 스토리지 통합
tags:
  - RcloneView
  - feature
  - cloud-storage
  - multi-cloud
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 유니온 리모트 — RcloneView로 여러 무료 클라우드 계정을 하나의 거대한 스토리지 풀로 결합하기

> 구글에서 15GB, 원드라이브에서 5GB, 드롭박스에서 2GB, 테라박스에서 1TB. 개별적으로는 작지만, 유니온 리모트로 결합하면 무료 멀티 테라바이트 스토리지 풀이 됩니다.

대부분의 클라우드 제공업체는 무료 스토리지 티어를 제공하지만, 개별적으로는 본격적으로 사용하기에 너무 작습니다. rclone의 유니온 리모트는 여러 스토리지 위치를 하나의 가상 파일 시스템으로 병합합니다. RcloneView를 사용하면 이를 시각적으로 설정한 다음, 결합된 풀을 마치 하나의 거대한 드라이브처럼 탐색, 동기화, 관리할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 유니온 리모트 작동 방식

유니온 리모트는 여러 리모트를 하나의 가상 뷰로 결합합니다.

- **읽기**: 모든 하위 리모트의 파일이 하나의 디렉터리 목록에 표시됩니다
- **쓰기**: 새 파일은 여유 공간이 가장 많은 리모트에 기록됩니다(또는 구성한 정책에 따라)
- **투명성**: 사용자는 하나의 리모트와 상호작용하며, rclone이 분배를 관리합니다

## 결합할 수 있는 무료 스토리지

| 제공업체 | 무료 티어 |
|----------|----------|
| Google Drive | 15GB |
| OneDrive | 5GB |
| Dropbox | 2GB |
| pCloud | 10GB |
| Terabox | 1TB |
| MEGA | 20GB |
| Icedrive | 10GB |
| Koofr | 10GB |

결합하면: 잠재적으로 1TB 이상의 무료 스토리지를 확보할 수 있습니다.

## 유니온 리모트 설정하기

<img src="/support/images/en/blog/new-remote.png" alt="Create union remote" class="img-large img-center" />

1. 각 무료 클라우드 계정을 개별 리모트로 추가합니다
2. 이들을 모두 결합하는 유니온 리모트를 생성합니다
3. 유니온을 하나의 스토리지 풀로 탐색합니다

## 사용 사례

### 무료 스토리지 극대화

학생, 프리랜서, 예산에 민감한 사용자는 무료 티어를 결합하여 상당한 양의 무료 스토리지를 확보할 수 있습니다.

### 여러 제공업체에 백업 분산

여러 무료 계정에 백업 데이터를 분산시켜 중복성을 확보하세요. 한 제공업체에 문제가 생겨도 다른 제공업체에는 여전히 데이터가 남아 있습니다.

### 계층형 스토리지 풀 생성

빠른 스토리지(구글 드라이브)와 대용량 스토리지(테라박스)를 하나의 풀로 결합합니다.

## 결합된 풀 탐색하기

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse union remote" class="img-large img-center" />

듀얼 패널 탐색기는 유니온 리모트를 다른 리모트와 마찬가지로 표시합니다. 모든 하위 제공업체의 파일이 함께 표시됩니다.

## 중요 참고 사항

- **파일은 하위 리모트 간에 이동하지 않습니다** — 각 파일은 기록된 제공업체에 그대로 유지됩니다
- **삭제**는 파일을 저장하고 있는 제공업체에서 해당 파일을 제거합니다
- **성능**은 목록을 조회할 때 가장 느린 하위 제공업체에 좌우됩니다
- **쓰기 정책**은 새 파일을 받을 제공업체를 결정합니다

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. **무료 클라우드 계정**을 개별 리모트로 추가합니다.
3. 이들을 결합하는 **유니온 리모트를 생성**합니다.
4. 하나의 스토리지 풀로 **탐색하고 사용**합니다.

작은 무료 티어들이 모여 쓸모 있는 것이 됩니다.

---

**관련 가이드:**

- [가상 리모트: 결합, 유니온, 별칭](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [클라우드 계정 난립 관리하기](https://rcloneview.com/support/blog/manage-cloud-sprawl-too-many-accounts-rcloneview)
- [리모트 관리 가이드](https://rcloneview.com/support/blog/remote-management-add-edit-delete-rcloneview)

<CloudSupportGrid />
