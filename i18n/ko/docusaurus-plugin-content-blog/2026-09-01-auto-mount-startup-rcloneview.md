---
slug: auto-mount-startup-rcloneview
title: "시작 시 자동 마운트 — RcloneView에서 언제나 준비된 클라우드 드라이브"
authors:
  - tayson
description: "RcloneView의 시작 시 자동 마운트를 설정해 컴퓨터가 부팅되는 순간 클라우드 드라이브를 바로 사용할 수 있도록 하세요. 매번 수동으로 다시 마운트할 필요가 없습니다."
keywords:
  - auto mount cloud drive startup
  - rcloneview 자동 마운트
  - 부팅 시 클라우드 스토리지 마운트
  - 상시 연결 클라우드 드라이브
  - 자동 클라우드 마운트 windows
  - 로그인 시 실행 클라우드 드라이브
  - rcloneview plus 기능
  - 지속적인 클라우드 마운트
  - mount manager rcloneview
  - 클라우드 드라이브 시작 자동화
tags:
  - RcloneView
  - feature
  - mount
  - automation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 시작 시 자동 마운트 — RcloneView에서 언제나 준비된 클라우드 드라이브

> 매일 아침 RcloneView를 열어 각 클라우드 드라이브를 수동으로 마운트하는 대신, 시작 시 자동 마운트는 컴퓨터가 부팅되는 순간 드라이브를 자동으로 연결합니다.

마운트된 클라우드 드라이브를 매일 업무 흐름의 일부로 사용하는 사람이라면 — Google Drive에서 파일을 직접 편집하거나, S3 버킷에서 자산을 가져오거나, SFTP 서버를 로컬 폴더처럼 탐색하는 등 — 매 재부팅 후 다시 마운트해야 하는 번거로움을 잘 알 것입니다. RcloneView의 시작 시 자동 마운트 설정은 이 단계를 완전히 없애주며, 앱이 시스템과 함께 실행되는 즉시 설정된 마운트를 다시 연결합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 시작 시 자동 마운트가 하는 일

특정 마운트에서 활성화하면, RcloneView는 앱이 시작될 때마다 해당 리모트의 마운트 지점을 처음 설정했던 정확한 캐시 모드, 드라이브 문자 또는 경로, 읽기 전용 설정 그대로 자동으로 다시 연결합니다. 일반 설정의 "로그인 시 실행"과 결합하면, RcloneView 창을 열기도 전에 마운트된 드라이브가 파일 탐색기에서 사용 가능해질 수 있습니다. 이는 예약 기반 동기화, 다중 창 지원과 함께 PLUS 라이선스 기능입니다 — FREE 라이선스는 여전히 수동 마운트, 마운트 해제, 모든 마운트에 대한 전체 파일 탐색기 접근을 지원합니다.

이 설정은 전역이 아닌 마운트별로 적용되므로, 어떤 드라이브를 자동으로 다시 연결할지 정확히 선택할 수 있습니다. 거의 사용하지 않는 아카이브 리모트는 수동으로 두고, 매일 사용하는 Google Drive 폴더나 S3 버킷 같은 주요 작업 드라이브는 매번 스스로 마운트되도록 할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="자동 마운트 옵션이 있는 설정된 마운트를 보여주는 Mount Manager" class="img-large img-center" />

## Mount Manager에서 설정하기

Remote 탭에서 Mount Manager를 열고 새 마운트를 만들거나 기존 마운트를 편집하세요. 마운트 설정 화면에서 캐시 모드, 볼륨 이름, 읽기 전용 상태 같은 다른 설정과 함께 자동 마운트를 켠 다음 저장하세요. RcloneView는 하나의 창에서 90개 이상의 제공업체를 마운트하고 동기화하므로, 기본 리모트가 Google Drive든, S3 호환 버킷이든, SFTP 서버든 동일한 자동 마운트 토글이 똑같이 작동합니다.

이미 실행 중인 마운트의 경우, 마운트가 활성 상태인 동안에는 편집이 비활성화된다는 점을 기억하세요. 먼저 마운트를 해제한 다음 자동 마운트 토글을 적용하고, 다시 마운트해 올바르게 저장되었는지 확인하세요.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Explorer 패널 툴바에서 직접 리모트 폴더 마운트하기" class="img-large img-center" />

## 시스템 트레이와 함께 자동 마운트 사용하기

시작 시 자동 마운트는 "최소화하여 시작"과 시스템 트레이와 함께 사용할 때 가장 효과적입니다. 이 조합은 RcloneView가 백그라운드로 실행되어 설정된 드라이브를 마운트하고 필요할 때까지 방해하지 않도록 해줍니다. 시스템 트레이 아이콘의 마운트 메뉴는 여전히 필요할 때 상태를 확인하거나 드라이브를 마운트 해제할 수 있게 해주므로, 자동화가 있어도 수동 제어를 잃지 않습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="마운트된 드라이브 상태를 보여주는 시스템 트레이 메뉴" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView 다운로드** 후 Help > Activate License에서 PLUS 라이선스가 활성화되어 있는지 확인하세요.
2. Mount Manager를 열고 자동으로 다시 연결할 마운트를 선택하세요.
3. 해당 마운트 설정에서 자동 마운트 토글을 활성화하고 저장하세요.
4. 일반 설정에서 "로그인 시 실행"을 켜서 RcloneView와 자동 마운트된 드라이브가 자리에 앉기 전에 준비되도록 하세요.

설정을 마치면 클라우드 스토리지가 파일 시스템의 영구적인 일부처럼 동작하며, 수동으로 다시 마운트할 필요가 없습니다.

---

**관련 가이드:**

- [Mount Cloud Storage as a Local Drive — Complete Guide to Using Google Drive, S3, and OneDrive Like Local Folders](https://rcloneview.com/support/blog/mount-cloud-storage-local-drive-guide-rcloneview)
- [System Tray and Background Sync — Keep Cloud Jobs Running in RcloneView](https://rcloneview.com/support/blog/system-tray-background-sync-rcloneview)
- [RcloneView Mount Performance Tuning: Cache, Read Ahead, and VFS Settings for Smooth Cloud Drives](https://rcloneview.com/support/blog/mount-performance-tuning-rcloneview)

<CloudSupportGrid />
