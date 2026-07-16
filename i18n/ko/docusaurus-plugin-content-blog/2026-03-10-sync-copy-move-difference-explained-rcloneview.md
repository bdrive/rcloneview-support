---
slug: sync-copy-move-difference-explained-rcloneview
title: "동기화 vs 복사 vs 이동 — 어떤 클라우드 전송 작업을 사용해야 할까?"
authors:
  - tayson
description: "클라우드 전송 시 동기화, 복사, 이동 중 언제 무엇을 써야 할지 헷갈리시나요? RcloneView에서 각 작업의 차이와 올바른 선택 기준을 설명합니다."
keywords:
  - rclone sync vs copy
  - cloud sync vs copy difference
  - when to use sync or copy
  - rclone move command
  - cloud transfer operations
  - sync copy move explained
  - rclone operations guide
  - cloud file operations
  - which cloud sync type
  - safe cloud transfer method
tags:
  - RcloneView
  - sync
  - copy
  - move
  - guide
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 동기화 vs 복사 vs 이동 — 어떤 클라우드 전송 작업을 사용해야 할까?

> 여러 클라우드 사이에 파일을 전송하고 싶으신가요? RcloneView는 동기화, 복사, 이동 세 가지 방식을 제공합니다. 서로 비슷해 보이지만, 잘못 선택하면 의도치 않게 파일이 삭제될 수 있습니다. 각 방식이 어떻게 동작하고 언제 사용해야 하는지 알아봅니다.

이는 클라우드 파일 관리에서 가장 중요한 결정 중 하나입니다. 각 작업은 대상(destination)에는 존재하지만 원본(source)에는 없는 파일을 어떻게 처리하는지에서 서로 다르게 동작합니다. 이 차이를 이해하면 실수로 인한 데이터 손실을 막을 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 세 가지 작업

### 복사(Copy)

**동작 방식**: 원본에서 대상으로 파일을 복사합니다. 대상에 이미 동일한 파일이 있으면 건너뛰고, 다른 파일이 있으면 덮어씁니다.

**하지 않는 것**: 대상에서 어떤 파일도 삭제하지 않습니다. 절대로.

```
Source:      A, B, C
Destination: B, D
After Copy:  B, D, A, C  (D is untouched, A and C are added)
```

### 동기화(Sync)

**동작 방식**: 대상을 원본과 동일하게 만듭니다. 새로운 파일과 변경된 파일을 복사하고, **원본에 없는 파일은 대상에서 삭제합니다.**

```
Source:      A, B, C
Destination: B, D
After Sync:  A, B, C  (D is deleted! A and C are added)
```

### 이동(Move)

**동작 방식**: 복사와 비슷하지만, 전송이 성공적으로 끝나면 **원본에서 파일을 삭제합니다.**

```
Source:      A, B, C
Destination: B, D
After Move:
  Source: (empty)
  Destination: B, D, A, C
```

## 빠른 비교표

| 동작 | 복사 | 동기화 | 이동 |
|----------|:----:|:----:|:----:|
| 대상에 새 파일 추가 | ✅ | ✅ | ✅ |
| 변경된 파일 업데이트 | ✅ | ✅ | ✅ |
| 대상에서 삭제 | ❌ | ✅ | ❌ |
| 원본에서 삭제 | ❌ | ❌ | ✅ |
| 백업에 안전 | ✅ | ⚠️ | ❌ |
| 완전한 미러 생성 | ❌ | ✅ | ❌ |

## 각 작업을 언제 사용할까

### 복사를 사용해야 할 때:

- **백업할 때** — 안전망이 필요한 경우입니다. 복사는 대상에서 절대 삭제하지 않으므로, 원본에서 파일을 삭제하더라도 백업본은 그대로 남아 있습니다.
- **초기 마이그레이션** — 새로운 클라우드로 처음 데이터를 옮길 때.
- **파일 추가** — 기존 파일에 영향을 주지 않고 새 콘텐츠를 추가하고 싶을 때.
- **확신이 서지 않을 때** — 복사는 가장 안전한 기본 선택입니다. 대상에서 데이터를 잃을 일이 없습니다.

**예시:**
- 매일 백업: Google Drive → Backblaze B2.
- 초기 마이그레이션: OneDrive → Google Drive.
- 클라이언트 전달: 완성된 파일을 클라이언트의 Dropbox로 복사.

### 동기화를 사용해야 할 때:

- **미러링** — 대상이 항상 원본의 정확한 복사본이어야 할 때.
- **활성 작업 폴더** — 삭제를 포함해 모든 변경 사항이 대상에 반영되어야 할 때.
- **저장 공간 정리** — 원본에서 제거된 파일이 미러본에서도 함께 제거되어야 할 때.

**예시:**
- NAS 미러를 S3에 유지(완전한 복제본).
- 두 팀원 사이의 프로젝트 폴더를 미러링.
- 스테이징 서버를 프로덕션 에셋 폴더와 동기화 상태로 유지.

**주의**: 동기화는 파일을 삭제합니다. 항상 먼저 **드라이 런(dry run)**을 실행해 삭제될 항목을 미리 확인하세요.

### 이동을 사용해야 할 때:

- **보관(아카이빙)** — 오래된 파일을 저렴한 스토리지로 옮기고 비용이 높은 원본에서는 제거할 때.
- **처리 파이프라인** — 파일이 인박스에 도착해 처리된 후 아카이브로 옮겨질 때.
- **공간 확보** — 가득 찬 드라이브에서 파일을 클라우드 스토리지로 옮기고 로컬 사본을 제거할 때.

**예시:**
- 90일 이상 된 파일을 Google Drive에서 S3 Glacier로 이동.
- 처리된 업로드 파일을 스테이징 버킷에서 아카이브 버킷으로 이동.
- 가득 찬 휴대폰 백업의 사진을 클라우드 아카이브로 이동.

## 드라이 런이라는 안전망

특히 동기화의 경우, 어떤 작업이든 실행하기 전에 **드라이 런**을 사용해 정확히 무슨 일이 일어날지 미리 확인하세요:

- 어떤 파일이 복사될지.
- 어떤 파일이 삭제될지(동기화 전용).
- 어떤 파일이 이동될지(이동 전용).

이 미리보기는 비용이 전혀 들지 않으며 예기치 않은 상황을 방지해 줍니다.

## 먼저 폴더 비교부터

전송을 실행하기 전, 폴더 비교(Folder Comparison) 기능으로 현재 상태를 파악하세요:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare before transferring" class="img-large img-center" />

이 화면에서 확인할 수 있는 것:
- 양쪽 위치에 모두 존재하는 파일(그리고 일치 여부).
- 원본에만 있는 파일.
- 대상에만 있는 파일.

## 흔히 하는 실수

### 백업에 동기화를 사용하는 경우

```
Day 1: Sync Google Drive → S3  (all files backed up)
Day 2: Accidentally delete a folder from Google Drive
Day 3: Sync Google Drive → S3  (folder deleted from S3 too!)
```

이런 상황을 막으려면 백업에는 **복사**를 사용하세요.

### 미러를 원하는데 복사를 사용하는 경우

```
Day 1: Copy Source → Dest  (files transferred)
Day 2: Delete old files from Source
Day 3: Copy Source → Dest  (old files still on Dest, taking up space)
```

대상을 항상 깔끔하게 유지하고 싶다면 **동기화**를 사용하세요.

### 양쪽 모두에 사본을 남기고 싶은데 이동을 사용하는 경우

이동은 원본을 삭제합니다. 양쪽 위치 모두에 파일이 필요하다면 **복사**를 사용하세요.

## 의사결정 흐름도

1. **양쪽 위치 모두에 파일이 필요한가요?**
   - 예 → 복사 또는 동기화.
   - 아니오(원본에서 제거) → 이동.

2. **대상이 원본과 정확히 일치해야 하나요?**
   - 예(삭제 포함) → 동기화.
   - 아니오(새 파일만 추가) → 복사.

3. **이것이 백업인가요?**
   - 예 → 거의 항상 복사.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **폴더를 비교**해 현재 상태를 파악하세요.
3. 목적에 맞게 **올바른 작업을 선택**하세요.
4. 변경 사항을 미리 보려면 **먼저 드라이 런**을 실행하세요.
5. 확신을 갖고 **실행**하세요.

작업에는 그에 맞는 방식이 있습니다. 추측하지 말고 이해하세요.

---

**관련 가이드:**

- [동기화 작업 생성하기](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [폴더 내용 비교하기](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [Rclone 필터 규칙 설명](https://rcloneview.com/support/blog/rclone-filter-rules-include-exclude-explained-rcloneview)

<CloudSupportGrid />
