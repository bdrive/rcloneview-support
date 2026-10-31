---
slug: fix-mount-read-only-cannot-save-files-rcloneview
title: "클라우드 마운트가 읽기 전용이고 파일을 저장할 수 없을 때 — RcloneView로 해결하기"
authors:
  - steve
description: "마운트한 클라우드 드라이브에서 파일을 저장하거나 편집할 수 없나요? RcloneView의 Read only 옵션, 캐시 모드, 권한, FUSE를 확인해 마운트를 다시 쓰기 가능하게 만드세요."
keywords:
  - 클라우드 드라이브 마운트 읽기 전용
  - 마운트 드라이브 파일 저장 불가
  - rclone mount 읽기 전용
  - RcloneView 마운트 문제 해결
  - VFS 캐시 모드 writes
  - FUSE 마운트 Linux
  - 클라우드 드라이브 쓰기 오류
  - 마운트 매니저 설정
tags:
  - RcloneView
  - troubleshooting
  - tips
  - mount
  - vfs
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 클라우드 마운트가 읽기 전용이고 파일을 저장할 수 없을 때 — RcloneView로 해결하기

> 마운트한 클라우드 드라이브에서 저장이 거부된다면 원인은 대개 마운트 설정이나 권한이며, 둘 다 금방 확인할 수 있습니다.

리모트를 마운트하고 문서를 열었는데 저장이 실패하거나, 파일은 복사되지만 편집할 수 없는 경우가 있습니다. 클라우드 제공업체를 탓하기 전에 마운트가 어떻게 구성되었는지 먼저 살펴보세요. RcloneView는 관련된 모든 옵션을 하나의 대화상자에 모아 두었으므로 명령줄 없이도 원인을 찾을 수 있습니다. RcloneView는 폴더 동기화와 비교도 지원하며, 기본 기능은 FREE 라이선스로 사용할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 먼저 Read Only 옵션 확인

마운트 설정에는 기본값이 꺼짐인 **Read only** 스위치가 있습니다. 마운트를 저장할 때 이 옵션이 켜져 있었다면 모든 쓰기가 거부됩니다. Remote 탭에서 마운트 매니저를 열고 항목을 마운트 해제한 다음 편집하세요. 드라이브가 마운트된 동안에는 Edit와 Delete가 비활성화되므로 변경하려면 먼저 마운트 해제가 필요합니다.

Read only를 끈 다음 Save and mount를 선택하세요.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="마운트 설정을 보여주는 RcloneView 마운트 매니저" class="img-large img-center" />

## 캐시 모드 검토

기본 VFS 캐시 모드는 **writes**이며, 쓰는 파일을 로컬에 버퍼링하여 애플리케이션이 정상적으로 저장할 수 있게 합니다. off 또는 minimal로 설정하면 파일을 탐색(seek)하거나 제자리에서 다시 쓰는 프로그램이 오작동할 수 있습니다. 편집기에서 저장이 실패한다면 writes 또는 full을 시도해 보세요.

캐시 위치의 여유 공간도 확인하세요. 캐시 디스크가 가득 차면 권한 문제처럼 보이는 쓰기 오류가 발생합니다. 이런 의심이 든다면 아래의 VFS 캐시 디스크 가득 참 오류 관련 가이드를 참고하세요.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="리모트 탐색기에서 마운트할 때 캐시 모드 설정" class="img-large img-center" />

## 계정 및 플랫폼 원인 배제

일부 리모트는 본질적으로 읽기 전용입니다. HTTP 리모트는 읽기 접근만 제공하며, 보기 권한만 받은 공유 폴더는 마운트 설정과 관계없이 쓸 수 없습니다. Explorer 패널에서 파일을 업로드해 테스트해 보세요. 그것도 실패한다면 문제는 마운트가 아니라 리모트 또는 그 권한에 있습니다.

Linux에서 마운트하려면 FUSE가 필요합니다(fuse3 권장). 다른 사용자도 접근해야 한다면 **Allow other**를 활성화하세요. Windows에서는 네트워크 드라이브로 표시되는 마운트가 일부 애플리케이션에서 다르게 동작할 수 있으므로 해당 옵션을 전환해 보세요.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="실패한 쓰기 작업을 확인하는 작업 기록" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 드라이브를 마운트 해제하고 마운트 매니저에서 해당 항목을 열어 Read only가 꺼져 있는지 확인하세요.
3. 캐시 모드를 writes로 설정하고 디스크 여유 공간을 확인하세요.
4. Explorer에서 업로드를 테스트해 리모트 권한과 마운트 설정을 구분하세요.

대부분의 쓰기 실패는 이 점검 중 하나로 원인이 밝혀지며, 모두 몇 분이면 끝납니다.

---

**관련 가이드:**

- [RcloneView로 클라우드 마운트 끊김 해결하기](https://rcloneview.com/support/blog/fix-cloud-mount-disconnect-drops-rcloneview)
- [RcloneView로 VFS 캐시 디스크 가득 참 오류 해결하기](https://rcloneview.com/support/blog/fix-vfs-cache-disk-full-errors-rcloneview)
- [마운트 파일 열기 지연 해결 — RcloneView VFS 캐시 모드](https://rcloneview.com/support/blog/fix-mount-slow-file-open-vfs-cache-mode-rcloneview)

<CloudSupportGrid />
