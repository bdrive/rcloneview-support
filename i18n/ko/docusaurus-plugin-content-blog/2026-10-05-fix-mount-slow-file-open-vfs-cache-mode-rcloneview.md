---
slug: fix-mount-slow-file-open-vfs-cache-mode-rcloneview
title: "클라우드 마운트 파일 열기 지연 해결 — RcloneView로 VFS 캐시 조정"
authors:
  - alex
description: "Mount Manager에서 캐시 모드, 캐시 크기, 디렉터리 캐시 시간을 조정하여 마운트된 클라우드 드라이브의 느린 파일 열기를 개선하세요."
keywords:
  - 클라우드 마운트 느림 해결
  - 마운트 드라이브 파일 열기 느림
  - VFS 캐시 모드
  - rclone 마운트 성능
  - 디렉터리 캐시 시간
  - 클라우드 드라이브 지연
  - RcloneView 마운트
  - rclone GUI
  - 마운트 문제 해결
tags:
  - RcloneView
  - troubleshooting
  - tips
  - mount
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 클라우드 마운트 파일 열기 지연 해결 — RcloneView로 VFS 캐시 조정

> 캐시 설정은 마운트된 클라우드 드라이브의 반응에 영향을 주며, Mount Manager에서 마운트별로 변경할 수 있습니다.

마운트된 클라우드 드라이브는 큰 파일을 더블 클릭하고 기다리기 전까지는 로컬 디스크처럼 느껴집니다. 폴더 목록이 느리게 나타나거나, 저장 중에 애플리케이션이 멈추거나, 미디어가 끊기기도 합니다. RcloneView는 각 마운트에 적용되는 VFS 캐시 옵션을 제공하므로, 추측하지 않고 리모트별로 조정할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 먼저 캐시 모드 확인

Remote 탭에서 Mount Manager를 열고 마운트를 편집하세요. 캐시 모드는 off, minimal, writes, full을 제공합니다. 기본값은 writes로, 드라이브에 쓰는 파일을 캐시합니다. 문서나 미디어처럼 같은 파일을 반복해서 읽는 경우 full은 읽기도 캐시하므로 다시 열 때 로컬 디스크에서 제공될 수 있습니다. off는 가장 가벼운 설정이지만 모든 읽기를 클라우드로 보냅니다.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="RcloneView의 Mount Manager 설정" class="img-large img-center" />

드라이브가 마운트되어 있는 동안에는 Edit와 Delete가 비활성화되므로, 먼저 마운트를 해제하고 설정을 변경한 다음 다시 마운트하세요.

## 캐시 크기와 디렉터리 시간 설정

캐시 최대 크기의 기본값은 -1로, 크기 제한이 없음을 의미하며 작은 디스크를 가득 채울 수 있습니다. 여유 공간에 맞는 제한을 설정하고, 캐시 최대 유지 기간(cache max age)으로 캐시된 데이터가 유효한 기간을 조절하세요. Dir cache time은 폴더 목록을 기억하는 기간을 제어합니다. 값이 길수록 반복적인 폴더 조회가 줄지만, 다른 사용자가 만든 변경 사항이 나타나는 데 더 오래 걸립니다.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Explorer 툴바에서 리모트 폴더 마운트" class="img-large img-center" />

건축가가 공유 마운트에서 300MB 도면을 연다고 상상해 보세요. full 캐시 모드와 적절한 크기 제한을 함께 사용하면 처음 열 때 파일을 다운로드하고, 이후에는 로컬 디스크에서 읽습니다.

## 작업에 맞는 도구 선택

마운트는 개별 파일을 열고 편집하는 데 적합합니다. 폴더 전체를 옮길 때는 드라이브로 파일을 끌어다 놓는 것보다 동기화 또는 복사 작업이 모니터링하기 쉬우며, 동기화, 복사, Folder Compare는 FREE 라이선스에서 사용할 수 있습니다. Windows에서 마운트 유형의 기본값은 cmount이고, Linux와 macOS에서는 nfsmount이며, Linux에는 FUSE 설치도 필요합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="마운트 대신 동기화 작업으로 대량 전송" class="img-large img-center" />

문제가 계속되면 설정에서 rclone 로깅을 활성화하고 레벨을 DEBUG로 설정한 다음, 내장 rclone을 다시 시작하고 문제를 재현하세요.

## 시작하기

1. **RcloneView 다운로드** [rcloneview.com](https://rcloneview.com/src/download.html)에서 받으세요.
2. Mount Manager를 열고, 느린 드라이브의 마운트를 해제한 다음 Edit를 클릭합니다.
3. 읽기 위주 작업에는 캐시 모드를 full로 바꾸고 캐시 최대 크기를 설정합니다.
4. 탐색이 느리면 dir cache time을 늘린 다음 Save하고 다시 마운트합니다.

작업 방식에 맞게 캐시 설정을 조정하면 마운트된 클라우드 드라이브를 워크플로에 필요한 방식으로 사용할 수 있습니다.

---

**관련 가이드:**

- [VFS 캐시 — RcloneView의 마운트 성능](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [RcloneView로 VFS 캐시 디스크 가득 참 오류 해결](https://rcloneview.com/support/blog/fix-vfs-cache-disk-full-errors-rcloneview)
- [RcloneView로 클라우드 스토리지를 로컬 드라이브로 마운트](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)

<CloudSupportGrid />
