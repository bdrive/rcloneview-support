---
slug: migrate-put-io-to-google-drive-rcloneview
title: "Put.io에서 Google Drive로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - jay
description: "RcloneView로 Put.io의 파일을 Google Drive로 마이그레이션하세요. 클라우드 콘텐츠를 전송, 검증, 정리하는 크로스 플랫폼 GUI입니다."
keywords:
  - put.io에서 google drive로
  - put.io 파일 마이그레이션
  - putio 마이그레이션
  - RcloneView put.io
  - 클라우드 간 전송
  - google drive 마이그레이션
  - 다운로드한 토렌트를 클라우드로 이동
  - rclone put.io
  - put.io를 drive로 전송
  - 클라우드 스토리지 마이그레이션 도구
tags:
  - RcloneView
  - putio
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Put.io에서 Google Drive로 마이그레이션 — RcloneView로 파일 전송하기

> 두 개의 웹 인터페이스를 오가는 대신, 시각적인 드래그 앤 드롭 워크플로로 Put.io에 저장된 모든 것을 Google Drive로 옮기세요.

Put.io는 다운로드한 토렌트와 원격 파일을 위한 훌륭한 착륙 지점이지만, Google Drive처럼 장기 보관이나 팀 공유를 위해 만들어진 것은 아닙니다. Put.io에서 다운로드가 완료되면 많은 사용자가 여전히 수동으로 파일을 내려받은 다음 다른 곳에 다시 업로드해야 합니다. RcloneView는 두 서비스에 동시에 연결하여 로컬 디스크를 거치지 않고도 콘텐츠를 클라우드 간에 직접 복사하거나 이동할 수 있게 해줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Put.io와 Google Drive를 나란히 연결하기

RcloneView의 Explorer는 최대 4개의 패널을 동시에 지원하므로, 한 패널에는 Put.io 계정을, 다른 패널에는 Google Drive를 열어 나란히 볼 수 있습니다. Put.io와 Google Drive 모두 동일한 방식으로 추가됩니다 — 브라우저 기반 OAuth 로그인이며, 별도로 복사해야 할 API 키나 액세스 토큰이 없습니다. 두 리모트가 모두 설정되면 각각 자체 탭으로 표시되며, 전환이 즉시 이루어집니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Put.io and Google Drive as separate remotes in RcloneView" class="img-large img-center" />

두 패널을 열어두면 Put.io 다운로드 폴더를 폴더별로 탐색하며 무작정 전체를 마이그레이션하는 대신 정확히 무엇을 옮길지 결정할 수 있습니다. 마운트 전용 도구와 달리, RcloneView는 FREE 라이선스에서도 동기화와 폴더 비교 기능을 제공하므로, 일회성 전송은 실행하는 데 걸리는 시간 외에는 비용이 들지 않습니다.

## 작업(Job)으로 전송 실행하기

파일을 하나씩 드래그하는 대신, 4단계 동기화 마법사를 통해 Copy 또는 Move 작업을 설정하세요. Put.io를 소스로, Google Drive 폴더를 대상으로 선택한 다음, 고급 설정 단계에서 연결 상태에 맞춰 동시 파일 전송 수를 조정하세요. 작업 범위가 올바른지 확신이 서지 않는다면 먼저 Dry Run을 실행해 보세요 — 아무것도 건드리지 않고 복사될 모든 파일 목록을 보여주며, 대규모 미디어 마이그레이션 전에 해볼 가치가 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Copying files from Put.io to Google Drive in RcloneView" class="img-large img-center" />

일회성 마이그레이션의 경우 One-time 실행 모드를 사용하여 반복 작업으로 저장되지 않도록 하세요. 이동을 마치기 전에 Put.io에 파일을 계속 추가할 예정이라면, 대신 작업으로 저장해 나중에 다시 실행하고 새 콘텐츠만 가져올 수 있도록 하세요.

## 폴더 비교로 이동 확인하기

전송이 완료되면 Folder Compare를 열어 두 위치를 나란히 확인하세요. 한쪽에만 존재하는 파일과 크기가 일치하지 않는 파일을 표시해 주므로, Put.io에서 무언가를 삭제하기 전에 마이그레이션이 완료되었는지 확인할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing job history after a Put.io to Google Drive transfer" class="img-large img-center" />

Job History에도 전송 기록이 남습니다 — 파일 수, 총 크기, 소요 시간 — 여러 세션에 걸쳐 대규모 라이브러리를 배치로 마이그레이션하는 경우에 유용합니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 브라우저 OAuth 로그인 흐름을 통해 Put.io 리모트를 추가하세요.
3. 같은 방식으로 브라우저 OAuth 로그인을 통해 Google Drive 리모트를 추가하세요.
4. Put.io에서 대상 폴더로의 Copy 또는 Move 작업을 만들고, Dry Run을 실행한 다음 실행하세요.

Put.io 스토리지를 비워 영구적인 Google Drive 보관소로 옮기면, 두 번째 수동 업로드 단계 없이도 다운로드를 정리된 상태로 유지할 수 있습니다.

---

**관련 가이드:**

- [OneDrive에서 Google Drive로 마이그레이션 — RcloneView로 파일 전송하기](https://rcloneview.com/support/blog/migrate-onedrive-to-google-drive-rcloneview)
- [Put.io 스토리지 관리 — RcloneView로 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-put-io-cloud-sync-backup-rcloneview)
- [Put.io 미디어를 NAS나 클라우드로 스트리밍 및 동기화하기 — RcloneView](https://rcloneview.com/support/blog/stream-sync-putio-media-nas-cloud-rcloneview)

<CloudSupportGrid />
