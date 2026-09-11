---
slug: migrate-icloud-drive-to-dropbox-rcloneview
title: "iCloud Drive를 Dropbox로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - casey
description: "RcloneView로 iCloud Drive의 파일을 Dropbox로 이동하세요 — 두 클라우드를 연결해 직접적이고 검증 가능한 전송을 제공하는 크로스 플랫폼 GUI입니다."
keywords:
  - iCloud Drive를 Dropbox로 마이그레이션
  - iCloud에서 Dropbox로 전송
  - Apple 클라우드에서 Dropbox로
  - iCloud Drive 마이그레이션
  - RcloneView 클라우드 간 전송
  - iCloud에서 Dropbox로 전환
  - iCloud Drive를 Dropbox에 백업
  - Apple 파일을 Dropbox로 전송
tags:
  - RcloneView
  - cloud-to-cloud
  - migration
  - dropbox
  - macos
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# iCloud Drive를 Dropbox로 마이그레이션 — RcloneView로 파일 전송하기

> iCloud Drive에서 벗어나려면 보통 먼저 Mac에 모든 파일을 다운로드해야 합니다 — RcloneView는 두 클라우드에 직접 연결하여 이런 로컬 우회 과정 없이 파일을 전송합니다.

Apple 생태계를 떠나거나, 크로스 플랫폼 팀으로 전환하거나, 단순히 저장소를 Dropbox로 통합하려 할 때 모두 같은 문제에 부딪힙니다: iCloud Drive는 다른 클라우드 제공업체로의 기본 내보내기 기능을 제공하지 않습니다. 일반적인 해결 방법은 전체 라이브러리를 로컬 디스크에 다운로드한 다음 Dropbox에 다시 업로드하는 것인데, 이는 전송 시간을 두 배로 늘리고 여유가 없을 수도 있는 로컬 디스크 공간을 소모합니다. RcloneView는 iCloud Drive 지원을 위한 rclone v1.69+를 기반으로 두 리모트에 동시에 연결하여 클라우드 간에 파일을 직접 이동시킵니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## iCloud Drive와 Dropbox 연결하기

iCloud Drive는 rclone v1.69 이상이 필요하며, 이는 RcloneView에 기본으로 포함된 내장 rclone에 이미 충족되어 있어 별도의 설정이 필요하지 않습니다. Apple 계정 자격 증명으로 iCloud Drive 리모트를 추가한 다음, OAuth 브라우저 로그인을 통해 Dropbox를 추가하세요. 두 리모트는 탐색기에 탭으로 표시되며, 전송을 시작하기 전에 2패널 레이아웃에서 나란히 열어 각 라이브러리를 살펴볼 수 있습니다. RcloneView는 Windows, macOS, Linux에서 하나의 창으로 90개 이상의 제공업체를 마운트하고 동기화할 수 있으므로, 이 동일한 워크플로는 Mac에서든, 가족의 공유 Apple 저장소를 관리하는 Windows 컴퓨터에서든 동일하게 작동합니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding an iCloud Drive remote alongside Dropbox in RcloneView" class="img-large img-center" />

## 마이그레이션을 동기화 작업으로 실행하기

폴더를 하나씩 드래그하는 대신, 4단계 마법사에서 단방향 동기화 작업을 설정하세요: 소스는 iCloud Drive, 대상은 Dropbox, 방향은 "대상만 수정"으로 설정하여 iCloud 쪽에는 아무 변경도 가해지지 않도록 합니다. 대용량 사진이나 문서 라이브러리의 경우, 먼저 Dry Run을 실행하면 데이터가 이동하기 전에 정확히 무엇이 복사될지 확인할 수 있으며, 수년간 iCloud Drive에 쌓인 개인 콘텐츠가 많다면 이 작업은 특히 해볼 가치가 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job from iCloud Drive to Dropbox in RcloneView" class="img-large img-center" />

## 전송 모니터링 및 완료 확인

대용량 라이브러리, 특히 상당한 양의 사진이나 문서 컬렉션은 시간이 걸립니다. Transferring 탭에서는 실시간 진행 상황, 속도, 파일 개수를 확인할 수 있으며, Job History에는 완료된 작업의 총 크기와 오류가 발생한 파일이 기록되어 재시도가 필요한 항목을 쉽게 확인할 수 있습니다. 전송이 중간에 중단되면 RcloneView의 자동 재시도 설정이 동기화를 다시 실행하여(기본값 3회) 완료되지 않은 부분을 처리합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing a completed iCloud Drive to Dropbox transfer in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. iCloud Drive 리모트(rclone v1.69+ 필요, 기본 포함)와 OAuth 로그인을 통한 Dropbox 리모트를 추가합니다.
3. Dry Run을 실행하여 전송될 파일을 미리 확인합니다.
4. 단방향 동기화 작업을 생성하고 Job History에서 완료까지 모니터링합니다.

동기화 작업을 한 번 설정해 두면, 새로 추가된 파일에 대한 전송을 반복하는 것은 또 다른 수동 내보내기 대신 클릭 한 번으로 끝납니다.

---

**관련 가이드:**

- [iCloud Drive를 Google Drive로 마이그레이션 — RcloneView로 파일 전송하기](https://rcloneview.com/support/blog/migrate-icloud-drive-to-google-drive-rcloneview)
- [iCloud Drive를 OneDrive로 마이그레이션 — RcloneView로 파일 전송하기](https://rcloneview.com/support/blog/migrate-icloud-drive-to-onedrive-rcloneview)
- [iCloud Drive 저장소 관리하기 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)

<CloudSupportGrid />
