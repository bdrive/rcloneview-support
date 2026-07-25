---
slug: fix-vfs-cache-disk-full-errors-rcloneview
title: "VFS 캐시 디스크 가득 참 오류 해결하기 — RcloneView로 마운트 캐시 관리하기"
authors:
  - robin
description: "마운트된 클라우드 드라이브가 로컬 디스크를 가득 채우는 이유와 RcloneView의 캐시 설정을 사용해 VFS 캐시 디스크 가득 참 오류를 해결하는 방법을 알아보세요."
keywords:
  - VFS 캐시 디스크 가득 참
  - VFS 캐시 오류 해결
  - rclone 마운트 캐시 가득 참
  - RcloneView 캐시 모드
  - 마운트 캐시 최대 크기
  - 클라우드 마운트 디스크 공간
  - VFS 캐시 모드 writes
  - RcloneView 마운트 설정
  - 캐시 최대 유효 기간
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

# VFS 캐시 디스크 가득 참 오류 해결하기 — RcloneView로 마운트 캐시 관리하기

> 마운트된 클라우드 드라이브가 로컬 디스크를 가득 채운다면 대부분 캐시 모드가 작업 방식보다 높게 설정되어 있기 때문입니다 — RcloneView에서 이를 진단하고 해결하는 방법을 알아봅니다.

클라우드 스토리지를 로컬 드라이브로 마운트하면 읽기와 쓰기를 빠르고 안정적으로 만들기 위해 VFS(Virtual File System) 캐시를 사용하지만, 이 캐시는 로컬 디스크에 저장되며 잘못 설정할 경우 조용히 수 기가바이트를 소비할 수 있습니다. 마운트가 쓰기를 거부하거나 클라우드 스토리지에는 여유 공간이 충분한데도 운영체제가 디스크 가득 참을 보고한다면, 원인은 리모트가 아니라 거의 항상 VFS 캐시입니다. RcloneView는 마운트 구성 화면에서 관련 캐시 설정을 모두 직접 노출하므로, rclone 설정 파일을 손으로 편집하지 않고도 이 문제를 해결할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## VFS 캐시가 로컬 디스크를 채우는 이유

RcloneView의 마운트 옵션에는 off, minimal, writes(기본값), full의 네 가지 캐시 모드가 있습니다. "writes" 모드에서는 수정한 파일이 업로드가 끝날 때까지 로컬에 캐시됩니다. "full" 모드에서는 단순히 읽기 위해 연 파일도 로컬에 캐시되어 네트워크를 다시 거치지 않고도 재읽기가 가능합니다 — 성능에는 좋지만, 마운트를 통해 접근하는 대규모 미디어 라이브러리나 데이터셋이 드라이브를 조용히 가득 채울 수 있다는 뜻이기도 합니다.

<img src="/support/images/en/blog/new-remote.png" alt="Mount configuration screen showing VFS cache mode options in RcloneView" class="img-large img-center" />

클라우드 스토리지 자체의 사용량 통계가 아니라 RcloneView 캐시 디렉터리가 위치한 드라이브에서 디스크 공간이 사라지는 것을 보고 있다면, 가장 먼저 확인해야 할 설정이 바로 이것입니다.

## 올바른 캐시 모드 선택하기

대부분의 일상적인 사용에는 "writes" 모드가 적절한 균형점입니다. 실제로 수정 중인 항목만 캐시하여 디스크 사용량을 현재 작업 범위 안으로 제한합니다. "full" 모드는 마운트에서 직접 영상 편집을 하는 경우처럼 대용량 파일을 오프라인으로 다시 읽어야 하는 상황을 위해 남겨 두고, 해당 작업이 끝나면 "writes"나 "minimal"로 되돌리세요. "minimal" 모드는 캐시를 가장 적게 사용하므로 디스크 공간이 부족할 때 가장 안전한 선택입니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Comparing writes and full VFS cache modes for a cloud mount" class="img-large img-center" />

RcloneView는 하나의 창에서 Windows, macOS, Linux 전반에 걸쳐 90개 이상의 제공업체를 마운트하고 동기화하므로, 마운트한 리모트가 무엇이든 동일한 캐시 설정이 적용됩니다.

## 캐시 최대 크기와 최대 유효 기간 설정하기

캐시 모드 자체 외에도, RcloneView는 캐시 최대 크기(바이트 단위, 무제한은 -1)와 캐시된 데이터가 삭제되기 전까지 유효한 기간을 제어하는 캐시 최대 유효 기간으로 캐시를 제한할 수 있게 해줍니다. 여유 디스크 공간보다 확실히 낮은 구체적인 최대 크기를 설정하면 "full" 모드에서도 한 번의 대규모 읽기 세션이 드라이브 전체를 소비하는 일을 막을 수 있습니다. 다른 곳에서 자주 변경되는 파일을 다룬다면 더 짧은 최대 유효 기간과 함께 사용하세요.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Setting cache max size and cache max age for a mount in RcloneView" class="img-large img-center" />

## 이미 가득 찬 캐시 정리하기

캐시가 가득 차서 마운트가 이미 쓰기를 거부하고 있다면, Mount Manager에서 마운트를 해제하여 캐시된 데이터를 해제한 다음, 작업을 재개하기 전에 더 낮은 캐시 모드나 명시적인 최대 크기로 다시 마운트하세요. 미리 Debug 수준 로깅을 활성화한 뒤 Log 탭을 확인하면 네트워크나 권한 오류가 아니라 캐시 제거가 실제 원인이었는지 확인할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Unmounting and re-mounting a cloud drive from Mount Manager after a cache disk full error" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. Mount Manager를 열고 해당 마운트의 설정을 편집합니다.
3. 캐시 모드를 "writes" 또는 "minimal"로 전환하고, 구체적인 캐시 최대 크기를 설정합니다.
4. 새 제한을 적용하려면 마운트를 해제한 뒤 다시 마운트하고, 평소 사용 중 디스크 사용량을 모니터링합니다.

캐시 모드와 크기 설정을 몇 분만 조정하면 예측할 수 없던 디스크 가득 참 오류가 정확히 예상대로 동작하는 마운트로 바뀝니다.

---

**관련 가이드:**

- [RcloneView의 VFS 캐시와 마운트 성능](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [RcloneView의 VFS 캐시 튜닝으로 Plex 버퍼링 해결하기](https://rcloneview.com/support/blog/plex-vfs-cache-rcloneview)
- [RcloneView로 클라우드 마운트 연결 끊김 해결하기](https://rcloneview.com/support/blog/fix-cloud-mount-disconnect-drops-rcloneview)

<CloudSupportGrid />
