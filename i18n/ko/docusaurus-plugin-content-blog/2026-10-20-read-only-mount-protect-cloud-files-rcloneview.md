---
slug: read-only-mount-protect-cloud-files-rcloneview
title: "읽기 전용 마운트 — RcloneView로 실수에 의한 변경으로부터 클라우드 파일 보호하기"
authors:
  - casey
description: "RcloneView의 Read only 마운트 옵션으로 실수로 수정하거나 삭제할 걱정 없이 파일 탐색기에서 클라우드 스토리지를 열어보세요."
keywords:
  - 읽기 전용 마운트
  - 클라우드 스토리지 읽기 전용 마운트
  - 클라우드 파일 보호
  - RcloneView 마운트
  - rclone 읽기 전용 마운트
  - 클라우드 드라이브 삭제 방지
  - 마운트 매니저
  - 가상 드라이브
tags:
  - RcloneView
  - feature
  - mount
  - cloud-storage
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 읽기 전용 마운트 — RcloneView로 실수에 의한 변경으로부터 클라우드 파일 보호하기

> 리모트를 로컬 드라이브로 마운트하여 탐색하고 복사할 수는 있지만 절대 변경할 수는 없게 만드세요.

마운트한 클라우드 드라이브는 다른 디스크와 똑같이 동작하므로, 실수로 삭제하거나 잘못된 방향으로 드래그하거나 파일을 다시 쓰는 애플리케이션 때문에 클라우드 데이터가 바뀔 수 있습니다. 보관 자료를 검토하거나 참조 파일을 열어보는 것처럼 읽기만 하는 것이 목적이라면, 쓸 수 없는 드라이브가 위험이 가장 낮은 선택입니다. RcloneView의 마운트 설정에는 바로 이 용도를 위한 Read only 옵션이 있습니다. RcloneView는 Windows, macOS, Linux에서 하나의 창으로 90개 이상의 제공업체를 마운트하고 동기화합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 읽기 전용이 적합한 경우

종료된 사건의 기록을 버킷에 보관하는 컴플라이언스 팀을 생각해 보세요. 직원들은 문서를 열고 복사할 수 있어야 하지만, 누구도 내용을 바꿀 수 없어야 합니다. 또 다른 예로, 백업 자체를 위험에 빠뜨리지 않고 데스크톱에서 공유 백업 대상을 확인하고 싶은 경우가 있습니다.

두 경우 모두 읽기 전용 마운트를 사용하면 파일 탐색기, 미디어 플레이어, 뷰어 같은 일반 도구를 그대로 쓰면서 쓰기 시도는 거부됩니다. 스토리지 서비스 자체의 권한을 대체하는 것은 아니지만, 사용자의 컴퓨터에서 추가 안전장치 역할을 합니다.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="RcloneView 탐색기에서 리모트 폴더 마운트하기" class="img-large img-center" />

## 마운트 매니저에서 Read Only 활성화

Remote 탭에서 Mount Manager를 열고 New mount를 선택하거나, Explorer 패널의 Mount 아이콘으로 시작하세요. 리모트와 하위 디렉터리를 선택한 다음 옵션에서 **Read only**를 체크합니다. Windows에서는 드라이브 문자를 고를 수 있고, macOS와 Linux에서는 로컬 마운트 경로를 지정합니다. Save and mount를 선택하면 드라이브가 바로 연결됩니다.

같은 대화상자에 다른 옵션도 있습니다. 볼륨 이름, 캐시 모드(off, minimal, 기본값 writes, full), 그리고 Windows에서는 네트워크 드라이브 표시 옵션입니다. 아무것도 쓰지 않으므로 읽기 전용 사용에서는 기본 캐시 모드가 크게 문제되지 않지만, full은 같은 파일을 반복해서 읽을 때 속도를 높일 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="RcloneView의 마운트 옵션이 있는 Mount Manager" class="img-large img-center" />

## 마운트 변경 또는 제거

마운트가 활성화된 동안에는 Edit와 Delete가 비활성화되므로, 먼저 Mount Manager 또는 시스템 트레이 메뉴에서 마운트를 해제하세요. 나중에 드라이브를 쓰기 가능하게 바꾸려면 마운트를 해제하고 항목을 편집한 뒤 Read only를 해제하고 다시 마운트하면 됩니다. 같은 리모트에 대해 탐색용 읽기 전용 항목과 의도적인 작업용 쓰기 가능 항목, 이렇게 두 개를 유지할 수도 있습니다.

PLUS 라이선스에서는 Auto mount로 시작 시 드라이브를 자동으로 연결할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView에서 리모트 간 파일 복사하기" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 탐색할 리모트를 추가한 다음 Remote 탭에서 Mount Manager를 엽니다.
3. 새 마운트를 만들고 리모트와 폴더를 선택한 뒤 Read only를 체크합니다.
4. Save and mount를 누른 다음 파일 탐색기에서 드라이브를 엽니다.

읽기 전용 접근이면 변경 걱정 없이 모든 것을 열어볼 수 있습니다.

---

**관련 가이드:**

- [시작 시 자동 마운트](https://rcloneview.com/support/blog/auto-mount-startup-rcloneview)
- [마운트 성능을 위한 VFS 캐시](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [Windows 마운트 드라이브 문자 충돌 해결](https://rcloneview.com/support/blog/fix-mount-drive-letter-conflict-windows-rcloneview)

<CloudSupportGrid />
