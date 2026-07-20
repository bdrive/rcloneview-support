---
sidebar_position: 14
description: 정확한 명령어와 자동화를 위해 RcloneView Path bar에서 리모트 이름을 포함한 전체 폴더 경로를 한 번에 복사하세요.
keywords:
  - rcloneview
  - rclone
  - copy path
  - remote path
  - path bar
  - automation
  - terminal
tags:
  - RcloneView
  - path-bar
  - copy-path
  - rclone
date: 2025-12-05
author: tayson
---

# RcloneView에서 전체 경로 복사 기능 사용하기

**전체 경로 복사(Copy Full Path)** 기능을 사용하면 전체 폴더 경로를 — 선택적으로 리모트 이름과 함께 — 한 번의 동작으로 가져올 수 있습니다. `rclone` 명령어 작성, 터미널 테스트 실행, 정확한 클라우드 경로 공유, 스크립트에서의 실수 방지에 안성맞춤입니다.

---

## 전체 경로 복사 기능 위치

전체 경로 복사 기능은 원격 파일 브라우저 상단의 **Path bar**에서 사용할 수 있습니다.  
<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path.png" alt="copy full path path bar" class="img-medium img-center" />

Path bar를 마우스 오른쪽 버튼으로 클릭하면 다음 옵션이 표시됩니다.

- **잘라내기(Cut)**
- **복사(Copy)**
- **붙여넣기(Paste)**
- **전체 경로 복사(리모트 포함)(Copy Full Path (with Remote))**
- **모두 선택(Select All)**

<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-all.png" alt="copy full path context menu" class="img-medium img-center" />

---

## 모두 선택 — 전체 경로 강조 표시

**모두 선택(Select All)**을 선택하면 Path 필드의 전체 텍스트가 강조 표시되어 빠르게 복사할 수 있습니다.  
<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-select-all.png" alt="copy full path select all" class="img-medium img-center" />

복사하여 붙여넣으면(예: 메모장에), 로컬 폴더 이름(예: `Meet recordings`)이 표시된 그대로 나타납니다.  
<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-select-copy-notepad.png" alt="copy full path notepad" class="img-medium img-center" />

---

## 전체 경로 복사(리모트 포함) — 리모트 + 폴더 경로

**전체 경로 복사(리모트 포함)(Copy Full Path (with Remote))**는 다음을 캡처합니다.

- 리모트 이름
- 전체 폴더 경로
- `rclone`에 사용할 정확한 `remote:path` 형식

결과 예시:

```
mygoogledrive:Meet recordings
```

<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-select-copy-full-path.png" alt="copy full path with remote" class="img-medium img-center" />

메모장에 붙여넣으면 바로 사용 가능한 경로가 표시됩니다.  
<img src="/support/images/en/howto/rcloneview-basic/copy-full-path/copy-full-path-select-copy-full-path-notepad.png" alt="copy full path with remote notepad" class="img-medium img-center" />

이 형식은 다음과 같은 명령어에서 바로 사용할 수 있습니다.

```bash
rclone copy "mygoogledrive:Meet recordings" /local/backup
```

---

## 이 기능을 사용해야 할 때

- **`rclone` 명령어 작성**: 정확한 리모트 경로를 즉시 붙여넣을 수 있습니다.
- **터미널에서 경로 테스트**: 다시 입력할 필요 없이 `remote:path`를 사용할 수 있습니다.
- **스크립트 실수 방지**: 자동화나 배치 작업에서의 오타를 방지합니다.
- **팀원과 경로 공유**: 지원이나 협업을 위해 정확한 위치를 전달할 수 있습니다.

---

## 빠른 참조

| 동작                              | 기능 설명                                     |
| --------------------------------- | ---------------------------------------------- |
| **복사(Copy)**                    | Path bar에서 선택한 텍스트를 복사합니다        |
| **모두 선택(Select All)**         | 전체 경로 텍스트를 선택합니다                  |
| **전체 경로 복사(리모트 포함)**   | `remote:path` 형식으로 복사합니다 (권장)       |
| **붙여넣기(Paste)**                | 클립보드 텍스트를 Path bar에 삽입합니다        |

전체 경로 복사 기능은 단순해 보이지만, 자동화, 스크립팅, 정확한 전송 작업에 있어 RcloneView에서 가장 빠른 생산성 향상 기능 중 하나입니다.
