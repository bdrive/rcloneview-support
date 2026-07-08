---
slug: manage-imagekit-cloud-sync-backup-rcloneview
title: "ImageKit 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - jay
description: "ImageKit을 RcloneView에 연결하여 비주얼 GUI로 여러 플랫폼에서 미디어 자산 라이브러리를 동기화, 백업, 정리하는 방법을 알아보세요."
keywords:
  - ImageKit cloud storage
  - ImageKit sync backup
  - RcloneView ImageKit
  - manage ImageKit files
  - ImageKit rclone GUI
  - backup ImageKit assets
  - cloud media management
  - image CDN storage backup
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - guide
  - dam
  - media
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# ImageKit 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기

> ImageKit을 RcloneView에 연결하면 명령줄 없이도 비주얼 GUI로 미디어 자산을 탐색, 동기화, 백업할 수 있습니다.

이미지와 동영상 전송을 위해 ImageKit을 사용하는 팀은 플랫폼의 미디어 라이브러리에 수천 개의 원본 자산을 쌓아두는 경우가 많습니다. ImageKit의 웹 대시보드는 개별 업로드를 처리하는 데는 적합하지만, 대량의 미디어를 이동하거나 오프사이트 백업을 유지하려면 전용 동기화 도구를 사용하는 것이 훨씬 실용적입니다. RcloneView는 rclone 백엔드를 통해 ImageKit에 직접 연결되며, Windows, macOS, Linux에서 단일 창으로 듀얼 패널 파일 탐색기, 원클릭 동기화 작업, 작업 기록을 모두 제공합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView에서 ImageKit을 리모트로 연결하기

ImageKit을 RcloneView에 추가하는 작업은 가이드형 리모트 설정 마법사를 통해 몇 단계만으로 완료됩니다. **Remote** 탭을 열고 **New Remote**를 클릭한 다음, 공급자 목록에서 ImageKit을 찾습니다. 메시지가 표시되면 ImageKit 개발자 설정에서 확인할 수 있는 자격 증명을 입력하고 리모트를 저장합니다. 설정이 완료되면 ImageKit 미디어 라이브러리가 연결된 다른 리모트와 함께 파일 탐색기에서 탐색 가능한 패널로 표시됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new ImageKit remote in RcloneView" class="img-large img-center" />

마운트 전용 도구와 달리 RcloneView는 FREE 라이선스에서도 ImageKit을 포함한 연결된 모든 리모트 간에 폴더를 동기화하고 비교할 수 있습니다. 예를 들어 수백 개의 클라이언트 이미지 자산을 관리하는 디지털 에이전시는 ImageKit 패널에서 동기화 작업을 실행하여 ImageKit 라이브러리를 로컬 NAS나 별도의 클라우드 버킷에 미러링함으로써 명령줄을 사용하지 않고도 검증된 아카이브를 유지할 수 있습니다.

## 미디어 파일 탐색 및 전송

연결이 완료되면 ImageKit의 폴더 구조가 듀얼 패널 탐색기에 표시됩니다. 디렉터리를 탐색하고, Ctrl+클릭 또는 Shift+클릭으로 여러 파일을 선택하고, ImageKit과 로컬 드라이브, S3 버킷, 다른 클라우드 서비스 등 연결된 다른 리모트 간에 파일을 드래그할 수 있습니다. 파일을 마우스 오른쪽 버튼으로 클릭하여 로컬로 다운로드하거나, 파일 관리자에서 파일을 RcloneView로 드래그하여 ImageKit에 직접 업로드할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to back up ImageKit media assets" class="img-large img-center" />

## ImageKit 자동 백업 설정하기

새로운 시각 자산을 정기적으로 게시하는 팀의 경우, 동기화 작업을 통해 모든 파일이 최신 백업 상태를 유지하도록 할 수 있습니다. **Job Manager**에서 ImageKit을 소스로, 백업 대상(로컬 폴더, Backblaze B2, Amazon S3 또는 기타 연결된 리모트)을 대상으로 하는 새 동기화 작업을 만듭니다. 고급 설정 단계에서 **체크섬 검증**을 활성화하면 파일 크기와 이름뿐 아니라 콘텐츠 해시를 비교하여 각 파일이 올바르게 전송되었는지 확인할 수 있습니다.

전체 전송을 실행하기 전에 **Dry Run**을 사용하여 복사되거나 제거될 파일을 미리 확인하세요. 필터 설정을 변경했거나 새로운 대상을 추가한 뒤에 특히 유용하며, 데이터를 실제로 변경하지 않고도 정확한 파일 목록을 보여줍니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed ImageKit backup transfers" class="img-large img-center" />

**Job History**는 모든 전송에 대해 시작 시간, 소요 시간, 파일 수, 총 용량, 완료 상태를 기록하여 시간에 따른 미디어 백업 작업에 대한 명확한 감사 기록을 제공합니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. **Remote** 탭을 열고 **New Remote**를 클릭한 다음 공급자 목록에서 ImageKit을 선택합니다.
3. ImageKit 자격 증명을 입력하고 리모트를 저장합니다.
4. **Job Manager**에서 ImageKit을 소스로, 백업 대상을 대상으로 하는 동기화 작업을 만듭니다.

RcloneView를 사용하면 명령어를 하나도 작성하지 않고도 ImageKit 미디어 라이브러리를 더 넓은 자동화된 백업 전략의 일부로 만들 수 있습니다.

---

**관련 가이드:**

- [Cloudinary 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-cloudinary-cloud-sync-backup-rcloneview)
- [Google Photos 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-google-photos-cloud-sync-backup-rcloneview)
- [RcloneView 드래그 앤 드롭 클라우드 전송 가이드](https://rcloneview.com/support/blog/drag-drop-cloud-transfer-guide-rcloneview)

<CloudSupportGrid />
