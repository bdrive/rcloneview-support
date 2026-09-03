---
slug: cache-remote-accelerate-slow-storage-rcloneview
title: "캐시 리모트 — RcloneView에서 느린 클라우드 스토리지 가속하기"
authors:
  - robin
description: "RcloneView의 캐시 가상 리모트가 디렉터리 목록과 파일 데이터를 캐싱해 느린 클라우드 백엔드를 어떻게 빠르게 만드는지, Plex 연동을 포함해 알아보세요."
keywords:
  - rclone cache remote
  - rcloneview 캐시 리모트 설정
  - 느린 클라우드 스토리지 가속
  - rclone 캐시 plex 연동
  - 클라우드 파일 탐색 속도 향상
  - 캐시 가상 리모트 rclone
  - rcloneview 가상 리모트
  - 느린 클라우드 스토리지 해결
  - plex 미디어 서버 클라우드 캐시
  - rclone 디렉터리 캐시
tags:
  - RcloneView
  - feature
  - performance
  - plex
  - mount
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 캐시 리모트 — RcloneView에서 느린 클라우드 스토리지 가속하기

> 일부 클라우드 백엔드는 탐색할 때마다 목록을 다시 불러오는 데 시간이 걸립니다 — 캐시 가상 리모트는 이미 가져온 내용을 기억해 이 문제를 해결합니다.

모든 스토리지 제공업체가 빠르게 응답하는 것은 아닙니다. API 요청 제한이 엄격하거나 요청당 지연 시간이 긴 백엔드는 특히 큰 폴더 트리를 탐색하거나 Plex 같은 미디어 서버가 같은 라이브러리를 반복해서 스캔할 때 탐색 속도를 느리게 만들 수 있습니다. RcloneView는 New Remote 마법사에서 rclone의 캐시 가상 리모트를 직접 노출해, 설정 파일을 직접 건드리지 않고도 느린 리모트를 캐싱 레이어로 감쌀 수 있게 해줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 캐시 리모트가 하는 일

캐시 리모트는 독립적인 스토리지 유형이 아니라 래퍼입니다 — 이미 설정해 둔 기존 리모트와 RcloneView 사이에 위치해 디렉터리 목록과 파일 읽기를 가로채므로, 반복되는 요청이 백엔드에 다시 도달하지 않습니다. 폴더를 처음 탐색할 때는 RcloneView가 평소처럼 감싸인 리모트에서 가져오지만, 다음번에는 캐시가 결과를 로컬에서 제공합니다. 이는 API 응답 시간이 느리거나 요청 제한이 엄격한 리모트에서 특히 두드러집니다.

이는 마운트 세션 하나에 대해서만 데이터를 캐싱하는 마운트 내장 VFS 캐시 모드와는 다릅니다. 캐시 가상 리모트는 대신 탐색하거나 마운트하거나 직접 동기화할 수 있는, 이름이 지정된 독립적인 리모트를 새로 만들며 캐시된 상태는 앱을 재시작해도 유지됩니다. 실제로 가장 흔한 사용 사례는 캐시 리모트를 Plex 미디어 서버 연동과 함께 사용하는 것으로, 그렇지 않으면 지속적인 라이브러리 스캔이 기본 클라우드 스토리지에 불필요한 API 호출을 계속 발생시키게 됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 기존 클라우드 스토리지 리모트를 감싸는 캐시 가상 리모트 만들기" class="img-large img-center" />

## RcloneView에서 캐시 리모트 설정하기

Remote 탭 > New Remote를 열고 가상 리모트 옵션에서 Cache를 선택하세요. 감쌀 기존 리모트를 선택하라는 메시지가 나오는데, 이는 클라우드 제공업체든 S3 호환 버킷이든 SFTP나 WebDAV 같은 프로토콜 기반 연결이든 RcloneView에 이미 설정되어 있어야 합니다. 캐시 리모트에 구분되는 이름을 지정해, Tab Bar와 Remote Manager에서 원본 연결이 아니라 캐시된 버전을 탐색하고 있음을 명확히 알 수 있도록 하세요.

생성되면 캐시 리모트는 Remote Manager에서 다른 리모트와 함께 나타나며, 탐색·마운트·동기화를 위한 여느 항목처럼 동작합니다. RcloneView는 하나의 창에서 Windows, macOS, Linux 전반에 걸쳐 90개 이상의 제공업체를 마운트하고 동기화하므로, 느린 백엔드 위에 만든 캐시 리모트도 네이티브 연결과 동일한 기능 집합을 갖습니다 — Dry Run으로 동기화를 시뮬레이션하거나 Job Manager에 추가하거나 로컬 드라이브로 마운트할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Remote Explorer 패널 툴바에서 캐시 리모트 마운트하기" class="img-large img-center" />

## 캐싱이 실제로 도움이 되는 경우

캐싱은 변경되는 데이터양에 비해 목록 조회 작업 비용이 큰 리모트에서 가장 효과적입니다 — Plex가 반복적으로 스캔하는 대용량 사진·동영상 라이브러리, 깊은 폴더 트리, 또는 연속 요청을 제한하는 보수적인 요청 제한 정책을 가진 제공업체가 그 예입니다. 자주 쓰기 작업을 하는 리모트에서는 유용성이 떨어지는데, 변경된 파일이 다른 도구에서 일관되게 보이려면 캐시를 거쳐 전파되어야 하기 때문입니다.

미디어 스트리밍을 위해 캐시 리모트를 마운트한다면, 마운트 자체의 VFS 캐시 모드를 writes 또는 full로 설정해 함께 사용하세요 — 두 캐싱 레이어는 서로 다른 수준에서 작동하며 상호 보완적입니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="캐시 리모트에 대해 실행 중인 동기화 작업을 보여주는 Job Manager" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView 다운로드**.
2. 가속하려는 느린 리모트가 아직 설정되어 있지 않다면 먼저 설정하세요.
3. New Remote를 열고 Cache를 선택한 다음, 감쌀 리모트로 해당 리모트를 지정하세요.
4. 새 캐시 리모트를 마운트하거나 탐색하고, 같은 폴더를 두 번째로 방문했을 때 목록 조회 속도를 비교해 보세요.

캐시 리모트가 인터넷 연결 자체를 빠르게 만들어 주지는 않지만, 반복되는 탐색 패턴 — 특히 미디어 라이브러리 스캔 — 에서는 느린 백엔드를 첫 조회 이후 즉각적으로 느껴지는 리모트로 바꿔줍니다.

---

**관련 가이드:**

- [RcloneView의 가상 리모트 — Combine, Union, Alias 살펴보기](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [RcloneView로 즐기는 Plex 클라우드 스트리밍](https://rcloneview.com/support/blog/plex-cloud-mount-rcloneview)
- [Plex 버퍼링 해결 — RcloneView의 VFS 캐시 튜닝](https://rcloneview.com/support/blog/plex-vfs-cache-rcloneview)

<CloudSupportGrid />
