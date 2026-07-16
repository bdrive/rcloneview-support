---
slug: avoid-data-loss-wrong-sync-direction-rcloneview
title: "동기화가 파일을 삭제할 수 있는 이유 — 잘못된 동기화 방향으로 인한 데이터 손실 방지하기"
authors:
  - tayson
description: "잘못된 동기화 방향은 파일을 모두 지워버릴 수 있습니다. rclone 동기화가 작동하는 방식, 파일이 삭제되는 이유, 그리고 드라이런과 폴더 비교로 재앙을 막는 방법을 알아보세요."
keywords:
  - sync deleted my files
  - rclone sync data loss
  - wrong sync direction
  - sync vs copy safe
  - prevent sync data loss
  - cloud sync deleted files
  - rclone dry run
  - safe cloud sync
  - sync direction wrong
  - cloud sync mistake fix
tags:
  - sync
  - data-loss
  - safety
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 동기화가 파일을 삭제할 수 있는 이유 — 잘못된 동기화 방향으로 인한 데이터 손실 방지하기

> "rclone sync를 실행했더니 500GB의 파일이 사라졌어요." 이는 클라우드 스토리지에서 가장 흔한 재앙 중 하나입니다. 동기화는 강력하지만 파일을 삭제하기도 합니다. 안전하게 사용하는 방법을 알아보겠습니다.

동기화는 대상(destination)을 소스(source)와 정확히 일치시킵니다. 즉, 소스에는 없지만 대상에는 존재하는 파일을 삭제한다는 뜻입니다. 실수로 소스와 대상을 바꾸거나 빈 폴더에서 동기화를 실행하면, 동기화는 대상의 모든 파일을 아무렇지 않게 삭제해버립니다. 이 가이드에서는 이를 방지하는 방법을 설명합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 동기화가 파일을 삭제하는 방식

```
Source: Folder A (3 files: doc1, doc2, doc3)
Destination: Folder B (5 files: doc1, doc2, doc3, report1, report2)

After Sync A → B:
Folder B: doc1, doc2, doc3
(report1 and report2 are DELETED)
```

동기화는 B를 A와 동일하게 만들었습니다. B에만 있던 파일들은 삭제되었습니다.

## 흔히 발생하는 재앙

### 소스와 대상이 뒤바뀐 경우

`Cloud → NAS`로 동기화하려 했지만 실수로 `NAS → Cloud`라고 입력했습니다. NAS가 비어 있는 새 드라이브라면, 동기화는 Cloud의 모든 파일을 삭제합니다.

### 비어 있거나 잘못된 폴더에서 동기화하는 경우

동기화 대상을 빈 소스로 지정하는 것은 "대상도 비워라"라고 명령하는 것과 같습니다.

### 잘못된 필터 규칙

모든 것을 제외하는 필터를 사용하면 동기화 입장에서는 소스가 비어 있는 것처럼 보입니다. 결과적으로 대상의 모든 파일이 삭제됩니다.

## RcloneView의 안전장치

### 1) 항상 드라이런(Dry Run)을 먼저 사용하세요

드라이런은 실제로 실행하지 않고도 동기화가 정확히 무엇을 할지 보여줍니다. 실행을 확정하기 전에 삭제될 파일 목록을 검토하세요.

### 2) 동기화 전에 폴더 비교를 사용하세요

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare before syncing" class="img-large img-center" />

소스와 대상을 비교하세요. "오른쪽에만 있음(Right only)" 파일을 확인하세요 — 이것이 동기화가 삭제하게 될 파일입니다. 이 파일들을 잃어도 괜찮은가요?

### 3) 백업에는 동기화 대신 복사를 사용하세요

복사는 절대 파일을 삭제하지 않습니다. 백업이 목적이라면 복사가 거의 항상 올바른 선택입니다.

| 상황 | 복사 사용 | 동기화 사용 |
|-----------|:--------:|:--------:|
| 백업 | ✅ | ❌ |
| 미러링 (완전한 복제본) | ❌ | ✅ |
| 초기 마이그레이션 | ✅ | ❌ |
| 지속적인 복제 | ❌ | ✅ (신중하게) |

### 4) 소스와 대상을 다시 한번 확인하세요

RcloneView의 두 패널 탐색기에서 어느 쪽이 소스이고 어느 쪽이 대상인지 작업을 실행하기 전에 명확히 확인하세요.

### 5) `--backup-dir`를 사용하세요

Rclone은 `--backup-dir` 옵션을 지원합니다 — 삭제될 파일이 영구적으로 제거되는 대신 백업 디렉터리로 이동됩니다. 이는 안전망 역할을 합니다.

## 잘못된 동기화 후 복구하기

이미 잘못된 동기화를 실행했다면:

1. **즉시 중단하세요** — 다시 동기화를 실행하지 마세요.
2. **클라우드 제공업체의 휴지통을 확인하세요** — Google Drive(30일), OneDrive(93일), Dropbox(30~180일).
3. **버전 관리 기능을 확인하세요** — S3와 B2의 버전 관리는 이전 사본을 보존합니다.
4. **별도 백업에서 복원하세요** — 복사 기반 백업이 있다면 파일은 그곳에 안전하게 있습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드하세요**.
2. 동기화 작업 전에 **폴더 비교를 사용하세요**.
3. 변경 사항을 미리 확인하기 위해 **드라이런을 실행하세요**.
4. **백업에는 복사를 사용하세요** — 동기화는 의도적인 미러링을 위해 아껴두세요.
5. 동기화 작업의 안전망으로 **`--backup-dir` 사용을 고려하세요**.

동기화는 날카로운 도구입니다. 신중하게 사용하세요.

---

**관련 가이드:**

- [동기화 vs 복사 vs 이동 완벽 설명](https://rcloneview.com/support/blog/sync-copy-move-difference-explained-rcloneview)
- [폴더 내용 비교하기](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [실수로 삭제한 파일 복구하기](https://rcloneview.com/support/blog/recover-accidentally-deleted-cloud-files-rcloneview)

<CloudSupportGrid />
