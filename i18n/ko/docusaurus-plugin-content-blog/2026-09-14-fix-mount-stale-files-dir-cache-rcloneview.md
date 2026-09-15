---
slug: fix-mount-stale-files-dir-cache-rcloneview
title: "마운트에 오래된 파일이 표시되는 문제 해결 — RcloneView Dir Cache Time 설명"
authors:
  - morgan
description: "RcloneView에서 Dir cache time과 VFS cache mode를 올바르게 조정해 마운트된 클라우드 드라이브에 오래되거나 누락된 파일이 표시되는 문제를 해결하세요."
keywords:
  - 마운트에 오래된 파일이 표시됨
  - RcloneView dir cache time
  - 마운트된 드라이브의 오래된 파일
  - 오래된 마운트 목록 해결
  - 클라우드 드라이브가 갱신되지 않음
  - VFS cache mode 불일치
  - RcloneView 마운트 문제 해결
  - 클라우드 마운트 디렉터리 캐시
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

# 마운트에 오래된 파일이 표시되는 문제 해결 — RcloneView Dir Cache Time 설명

> 마운트된 클라우드 드라이브가 삭제된 파일을 계속 보여주거나 새로 생긴 파일을 숨기고 있다면, 대개 고장이 아니라 디렉터리 캐시가 아직 만료되지 않은 것뿐입니다. RcloneView에서 이를 해결하는 방법을 알아봅니다.

리모트를 로컬 드라이브로 마운트할 때, RcloneView는 클릭할 때마다 모든 폴더를 다시 나열하지 않습니다 — 짧은 디렉터리 캐시를 유지해서 매번 클라우드 제공업체로 왕복하지 않고도 탐색이 즉각적으로 느껴지게 합니다. 이는 속도 면에서는 훌륭하지만, 다른 기기나 다른 RcloneView 창, 또는 제공업체 자체의 웹 앱에서 변경한 내용이 마운트된 폴더에 나타나기까지 잠시 시간이 걸린다는 뜻이기도 합니다. 이 가이드는 이러한 지연이 정상인 경우와, 정상이 아닐 때 어떻게 조정하는지를 다룹니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Dir Cache Time 이해하기

RcloneView의 마운트 설정에는 **Dir cache time** 설정이 있으며, 이는 마운트가 리모트에서 변경 사항을 다시 확인하기 전까지 폴더 목록이 얼마나 유효한지를 제어합니다. 이는 파일 내용 캐싱을 다루는 VFS **Cache mode** 설정(off / minimal / writes / full)과는 별개입니다. Dir cache time이 짧으면 원격의 변경 사항이 거의 즉시 마운트에 반영되지만 제공업체에 더 많은 목록 요청을 보내게 되고, Dir cache time이 길면 API 호출은 줄어들지만 새 파일이나 삭제된 파일이 나타나기까지 지연이 길어집니다.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="RcloneView에서 Dir cache time을 포함한 마운트 설정 옵션" class="img-large img-center" />

여러 사람이나 여러 기기가 동시에 쓰는 리모트를 마운트하는 경우 — 예를 들어 공유 Google Drive 폴더 — 기본 캐시 창 때문에 RcloneView가 실제로는 다른 위치에서 몇 초 전에 추가된 파일을 "놓친" 것처럼 보일 수 있습니다. 아무것도 놓친 것이 아니라, 단지 마운트가 그 폴더의 목록을 아직 새로 고치지 않은 것입니다.

## 새 파일이 보이지 않는 마운트 해결하기

실제 문제가 있다고 단정하기 전에 먼저 수동으로 새로고침해 보세요. Explorer 패널이나 마운트를 가리키는 OS 파일 탐색기에서 폴더를 강제로 다시 로드하면(F5 또는 디렉터리를 나갔다가 다시 들어가기) 캐시가 스스로 만료되기를 기다리지 않고도 변경 사항이 즉시 나타나는 경우가 많습니다. 수동 새로고침 후에도 파일이 여전히 나타나지 않는다면, 멈춰버린 rclone VFS 프로세스가 설정된 Dir cache time보다도 더 오래된 목록을 붙잡고 있을 수 있으므로 **Mount Manager**를 통해 마운트를 언마운트한 후 다시 마운트해야 할 수도 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView에서 마운트된 리모트 폴더 목록 새로고침하기" class="img-large img-center" />

원시 API 효율성보다 거의 실시간에 가까운 가시성이 더 중요한 리모트라면, 저장하고 다시 마운트하기 전에 마운트의 Edit 설정에서 Dir cache time 값을 낮추세요. 여기에는 트레이드오프가 있습니다: 사용량이 많은 리모트에서 이 값을 너무 낮게 설정하면 RcloneView가 보내는 목록 요청 수가 늘어나고, 이는 분당 API 호출 수를 제한하는 제공업체 측 속도 제한을 유발할 수 있습니다.

## Dir Cache Time과 Cache Mode 함께 선택하기

Dir cache time과 VFS Cache mode는 서로 다른 문제를 해결하므로, 하나만 확인하고 나머지를 확인하지 않으면 근본적인 문제가 절반만 해결된 상태로 남는 경우가 많습니다. 삭제된 파일이 마운트에서 여전히 접근 가능한 것으로 나타난다면(새 파일이 나타나지 않는 것이 아니라), 이는 Dir cache time보다는 Cache mode 증상일 가능성이 높습니다 — 기본값인 **writes**는 최근에 작성된 파일 내용을 로컬에 캐시하고, **full**은 읽은 내용도 캐시하는데, 두 경우 모두 로컬에 캐시된 사본이 캐시가 검증될 때까지 리모트의 현재 상태보다 오래된 상태로 남을 수 있습니다. 더 짧은 Dir cache time을, 리모트가 실제로 사용되는 방식에 맞는 Cache mode와 함께 조정하면 대부분의 오래된 목록 문제가 해결됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 리모트의 마운트 캐시 설정 조정하기" class="img-large img-center" />

RcloneView는 Windows, macOS, Linux에서 동일한 창을 통해 90개 이상의 제공업체를 마운트하고 동기화하므로, 마운트가 Google Drive, S3 버킷, 또는 자체 호스팅 WebDAV 서버를 가리키든 이러한 캐시 설정은 동일한 방식으로 적용됩니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **Mount Manager**를 열고 영향을 받는 마운트를 선택한 다음 현재 Dir cache time 값을 확인하세요.
3. 여러 소스에서 자주 변경되는 리모트는 Dir cache time을 낮추고, 언마운트/재마운트해서 적용하세요.
4. 실제 증상이 목록뿐만 아니라 파일 *내용*까지 오래된 것이라면 Cache mode 설정도 함께 검토하세요.

클라우드 상태를 정확히 반영하면서 리모트가 실제로 사용되는 방식에 맞는 일정으로 동작하는 마운트가, 매번 "왜 동기화가 안 되지"를 추측하는 것보다 훨씬 낫습니다.

---

**관련 가이드:**

- [VFS Cache — RcloneView에서 클라우드 드라이브의 마운트 성능 높이기](https://rcloneview.com/support/blog/vfs-cache-mount-performance-rcloneview)
- [VFS Cache 디스크 가득 찬 오류 해결 — RcloneView로 마운트 캐시 관리하기](https://rcloneview.com/support/blog/fix-vfs-cache-disk-full-errors-rcloneview)
- [RcloneView에서 Rclone 마운트 및 FUSE 오류 해결하기](https://rcloneview.com/support/blog/fix-rclone-mount-fuse-errors-rcloneview)

<CloudSupportGrid />
