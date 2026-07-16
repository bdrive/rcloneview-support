---
slug: plex-cloud-mount-rcloneview
title: "Plex와 RcloneView로 클라우드 영화 스트리밍하기 — Google Drive, Dropbox, S3를 라이브러리로 마운트"
authors:
  - tayson
description: RcloneView를 사용해 Google Drive, Dropbox, Wasabi, S3를 Plex가 인덱싱할 수 있는 로컬 드라이브로 마운트하세요. 다운로드 없이, CLI 없이 클라우드에 저장된 영화를 스트리밍할 수 있습니다.
keywords:
  - plex cloud mount
  - google drive plex
  - rclone mount plex
  - cloud movie server
  - plex cloud streaming
  - rcloneview
  - vfs cache plex
tags:
  - RcloneView
  - plex
  - google-drive
  - onedrive
  - dropbox
  - s3
  - mount
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Plex와 RcloneView로 클라우드 영화 스트리밍하기 — Google Drive, Dropbox, S3를 라이브러리로 마운트

> 디스크 공간이 부족하신가요? RcloneView로 클라우드를 로컬 드라이브처럼 마운트하고, Plex가 명령줄 설정 없이 부드럽고 안정적으로 직접 스트리밍하도록 만들어 보세요.

Plex는 미디어를 정리하고 스트리밍하는 데 탁월하지만, 로컬 저장 공간은 금세 가득 차 버립니다. 반면 Google Drive, Dropbox, Wasabi, Cloudflare R2, S3 같은 클라우드 버킷은 저렴하고 사실상 무제한에 가까운 공간을 제공합니다. 문제는 이런 클라우드 폴더를 Plex가 로컬 경로처럼 "인식"하게 만드는 깔끔한 방법이 없다는 점입니다. rclone의 `mount` 명령이 이를 해결해 주며, RcloneView는 그 기능을 간단한 GUI로 감싸줍니다. 클라우드 폴더를 선택하고, 드라이브 문자나 마운트 경로를 지정하고, 캐싱을 활성화한 뒤 실행하기만 하면 됩니다. 터미널도, 외워야 할 플래그도 필요 없습니다.

<!-- truncate -->

RcloneView는 검증된 rclone 엔진을 내부적으로 사용합니다. 주요 프로바이더를 모두 연결하고, 로컬 폴더나 드라이브 문자로 마운트한 뒤, Plex가 해당 경로를 가리키도록 설정할 수 있습니다. 올바른 VFS 캐시 설정을 적용하면 Plex는 클라우드 스토리지에서 최소한의 버퍼링으로 스캔, 탐색(seek), 스트리밍을 수행할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## Plex와 RcloneView가 함께 동작하는 방식

Plex는 로컬 경로(예: Windows의 `X:\Movies`, macOS의 `/Volumes/Cloud/Movies`)를 스캔합니다. RcloneView는 클라우드 폴더를 해당 경로에 마운트하므로, Plex는 이를 다른 로컬 디렉터리와 동일하게 취급합니다.

텍스트 다이어그램
[Google Drive Movies] ⇄ [RcloneView Mount (X:/ 또는 /Volumes/Cloud)] ⇄ [Plex Media Library]

참고 문서

- RcloneView 마운트 기초: [클라우드 스토리지를 로컬 드라이브로 마운트하기](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- Embedded Rclone을 통한 고급 플래그: [일반 설정](/howto/rcloneview-basic/general-settings)
- OAuth 로그인 추가(Google/Dropbox/OneDrive): [브라우저 로그인으로 연결하기](/howto/remote-storage-connection-settings/add-oath-online-login)
- S3/Wasabi/R2 설정: [S3 스토리지 설정하기](/howto/remote-storage-connection-settings/s3) · [Cloudflare R2 자격 증명](/howto/cloud-storage-setting/cloudflare-r2-credential)

## 몇 번의 클릭으로 마운트하고 스트리밍하기

클라우드를 연결하고, 마운트를 생성하고, Plex가 그곳을 가리키게 하면 끝입니다.

1. 리모트 연결하기

- Google Drive, OneDrive, Dropbox, S3/Wasabi/R2를 모두 지원합니다. `+ New Remote`를 통해 각각 추가하세요.
- 가이드: [OAuth 기반 프로바이더](/howto/remote-storage-connection-settings/add-oath-online-login) · [S3 호환 스토리지](/howto/remote-storage-connection-settings/s3) · [Dropbox 백엔드 참고사항](https://rclone.org/dropbox/)

<img src="/support/images/en/howto/remote-storage-connection-settings/add-new-remote.png" alt="Add a new remote in RcloneView" class="img-large img-center" />

2. 마운트 생성하기

- 방법 1 — Remote Explorer에서: [Remote Explorer에서 마운트하기](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-1-mount-from-remote-explorer)
- 방법 2 — Mount Manager를 통해: [Mount Manager로 마운트하기](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive#method-2-mount-via-mount-manager)

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount from Remote Explorer in RcloneView" class="img-large img-center" />

3. 마운트 대상 선택하기

- Windows: 드라이브 문자를 선택합니다(예: `X:`). 내부적으로 RcloneView는 호환성을 위해 `cmount`를 사용합니다.
- macOS: `/Volumes/Cloud` 아래(또는 사용자 지정 경로)의 마운트 경로를 선택합니다.
- Linux: 마운트 디렉터리를 선택합니다(예: `/mnt/plex-cloud`).

4. Plex용 캐시 설정하기

- Mount 대화 상자의 고급 옵션에서 **Cache mode**를 `full`로 설정하면 Plex와의 호환성이 가장 좋습니다.
- 필요하다면 **Cache max size**(예: 10~50GB)와 **Dir cache time**을 설정합니다.
- Embedded Rclone → **Global Rclone Flags**에서 `--vfs-read-ahead` 같은 전역 플래그도 조정할 수 있습니다. 참고: /support/howto/rcloneview-basic/general-settings

5. 마운트하고 확인하기

- "Save and mount"를 클릭한 뒤 파일 탐색기에서 마운트 폴더를 열어 영화를 탐색할 수 있는지 확인합니다.

6. Plex에 추가하기

- Plex → Libraries → Add Library → Add folders → 마운트한 경로(`X:\Movies` 또는 `/Volumes/Cloud/Movies`)를 선택합니다. Plex가 스캔하고 인덱싱하도록 둡니다.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure mount from Mount Manager" class="img-large img-center" />

## 부드러운 재생을 위한 성능 튜닝

다음 설정들은 클라우드 스토리지에서 고비트레이트 파일을 스트리밍할 때 버퍼링을 줄이고 탐색(seek)을 개선합니다.

- VFS 캐시 모드: 스캔과 탐색을 위해 `full`을 사용하세요(트랜스코딩과 썸네일이 더 안정적으로 동작합니다).
- 캐시 크기: SSD 공간이 있다면 10~50GB를 할당하세요.
- 리드 어헤드(Read‑ahead): Global Rclone Flags에서 `--vfs-read-ahead`를 늘리세요(예: 64M~256M).
- 대역폭 제한: 네트워크가 혼잡하다면 피크 시간대에도 Plex가 원활하게 동작하도록 적절한 제한을 설정하세요.
- Plex 메타데이터는 로컬에 유지: 메타데이터와 썸네일은 로컬 SSD에 저장하고, 미디어만 클라우드에 두세요.

참고: 캐시 크기와 리드 어헤드는 작업 부하에 따라 달라집니다. 보수적으로 시작한 뒤 재생 상태와 드라이브 활동을 모니터링하며 조정하세요.

## 가장 유용하게 활용할 수 있는 사람들

- 홈 시네마 수집가: 10TB 규모의 영화 아카이브를 Google Drive나 Dropbox에 보관하고, 로컬 디스크를 늘리지 않고 Plex로 스트리밍하세요.
- NAS 하이브리드 구성: NAS를 SSD 캐시 계층으로 사용하고, 메인 라이브러리는 마운트를 통해 S3/Wasabi/R2에 두세요.
- 개발자 및 홈랩 운영자: Dockerized Plex에 RcloneView 마운트를 연결하고, 저장된 마운트와 로그인 시 자동 마운트를 사용해 안정성을 높이세요.

## 문제 해결 핵심 사항

- Plex에서 라이브러리 경로가 보이지 않을 때: 마운트가 활성화되어 있는지, Plex를 실행하는 OS 사용자가 마운트 경로에 접근할 수 있는지 확인하세요.
- 재부팅 후 마운트가 사라질 때: Mount 대화 상자에서 **Auto mount**를 활성화하고, 설정에서 "Launch at login"을 고려하세요. → [클라우드 스토리지를 로컬 드라이브로 마운트하기](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive) · [일반 설정](/howto/rcloneview-basic/general-settings)
- 스캔이 느리거나 끊길 때: `Cache mode: full`을 사용하고, 캐시 크기와 `--vfs-read-ahead`를 늘리며, 메타데이터는 로컬에 유지하세요.
- API 제한이나 스로틀링이 발생할 때: 스캔을 한가한 시간대로 예약하고, 라이브러리가 매우 크다면 Compare & Sync로 Plex가 스캔할 대상을 정리하세요. → [폴더 내용 비교하기](/howto/rcloneview-basic/compare-folder-contents) · [동기화 작업 생성하기](/howto/rcloneview-basic/create-sync-jobs)

## 클라우드 영화, 로컬과 같은 경험

RcloneView로 마운트하면 Plex가 클라우드를 빠른 로컬 드라이브처럼 다룰 수 있습니다. Google Drive, Dropbox, Wasabi, S3의 유연성과 확장성은 그대로 유지하면서, Plex는 디스크 공간 걱정 없이 동일하게 세련된 경험을 제공합니다. 마운트를 설정하고, Plex가 그곳을 가리키게 하고, 캐시를 튜닝한 뒤 재생 버튼을 누르세요.

지금 시작해 보시겠습니까? RcloneView를 다운로드하고 클라우드 기반 Plex 라이브러리를 오늘 구축해 보세요.


<CloudSupportGrid />
