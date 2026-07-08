---
slug: migrate-google-drive-to-backblaze-b2-rcloneview
title: "Google Drive를 Backblaze B2로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - tayson
description: "RcloneView로 Google Drive를 Backblaze B2로 마이그레이션하세요 — 클라우드 간 파일을 전송하고, 비용 효율적으로 데이터를 아카이빙하며, GUI로 마이그레이션을 검증할 수 있습니다."
keywords:
  - Google Drive to Backblaze B2
  - migrate Google Drive
  - Backblaze B2 backup
  - cloud migration tool
  - Google Drive export
  - RcloneView migration
  - cloud-to-cloud transfer
  - S3 archive Google Drive
  - Google Drive archiving
  - Backblaze cold storage
tags:
  - RcloneView
  - google-drive
  - backblaze-b2
  - cloud-to-cloud
  - migration
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive를 Backblaze B2로 마이그레이션 — RcloneView로 파일 전송하기

> Google Drive는 협업을 위해 만들어진 서비스이지 콜드 아카이빙을 위한 것이 아닙니다 — RcloneView는 로컬 디스크를 거치지 않고 Drive 콘텐츠를 Backblaze B2로 직접 마이그레이션하여 대규모로 스토리지 비용을 절감합니다.

Google Drive는 실시간 협업에 뛰어나지만, 대규모의 비용 효율적인 장기 아카이빙에는 적합하지 않습니다. Backblaze B2는 Google 스토리지 비용의 일부만으로 S3 호환 오브젝트 스토리지를 제공하여, 매일 접근할 필요가 없는 대용량 데이터셋, 영상 프로젝트, 비즈니스 기록을 아카이빙하기에 인기 있는 대상입니다. RcloneView는 두 클라우드 사이에서 직접 마이그레이션을 처리하므로 로컬 디스크 중개자가 필요하지 않습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 두 리모트 설정하기

RcloneView에서 먼저 Google Drive를 추가합니다 — **Remote 탭 > New Remote > Google Drive** — 그리고 브라우저 OAuth를 통해 인증합니다. 그런 다음 Backblaze B2를 추가합니다. 제공업체 목록에서 선택하고 Application Key ID와 Application Key를 입력합니다. 두 리모트 모두 즉시 활성화됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

RcloneView의 듀얼 패널 탐색기에서 두 리모트를 나란히 엽니다. 이 직접 뷰는 마이그레이션을 계획하는 데 유용합니다. 왼쪽에서 Drive 폴더에 무엇이 있는지 확인하고, 오른쪽에서 대상 B2 버킷 구조를 확인하며, 전송을 시작하기 전에 우선순위를 둘 폴더를 파악할 수 있습니다.

## 마이그레이션 작업 구성하기

**Job Manager**를 열고 새 동기화 또는 복사 작업을 생성합니다. 소스를 Google Drive 폴더(또는 점진적 마이그레이션을 위한 특정 하위 폴더)로 설정하고, 대상을 Backblaze B2 버킷 경로로 설정합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring Google Drive to Backblaze B2 migration job in RcloneView" class="img-large img-center" />

대규모 마이그레이션의 경우 — 예를 들어 영상 제작 회사가 완료된 프로젝트 2TB를 Drive에서 B2로 이전하는 경우 — 작업의 고급 설정에서 멀티 스레드 전송을 활성화하고 동시 파일 수를 늘리세요. **Dry Run** 기능은 실제 작업이 실행되기 전에 어떤 파일이 전송될지 정확히 보여주어, 실수로 인한 덮어쓰기나 콘텐츠 누락을 방지합니다. 체크섬 검증을 활성화하면 모든 파일이 B2에 온전하게 도착하는 것을 보장하며, 이는 파일이 수년간 접근되지 않을 수 있는 아카이빙에서 특히 중요합니다.

## 마이그레이션 후 검증 및 정리

전송이 완료되면 RcloneView의 **Folder Compare**를 사용하여 Google Drive 소스와 B2 대상을 비교합니다. 비교 뷰는 왼쪽에만 있는 파일(아직 마이그레이션되지 않음), 오른쪽에만 있는 파일(이미 B2에 있음), 동일한 파일을 강조 표시하여, Drive에서 무언가를 제거하기 전에 명확하고 시각적인 체크리스트를 제공합니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Google Drive and Backblaze B2 after migration in RcloneView" class="img-large img-center" />

비교 후 마이그레이션 작업을 다시 실행해도 안전합니다 — rclone은 크기와 타임스탬프가 일치하며 대상에 이미 존재하는 파일은 건너뛰므로, 남은 차이점만 전송됩니다. 이러한 멱등적 동작 덕분에 여러 세션에 걸쳐서도 대규모 마이그레이션을 안정적으로 수행할 수 있습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. Google Drive 리모트(OAuth 브라우저 인증)와 Backblaze B2 리모트(Application Key 자격 증명)를 추가합니다.
3. **Job Manager**를 열고 Google Drive에서 B2로의 동기화 또는 복사 작업을 생성합니다.
4. Dry Run을 활성화하여 미리 확인한 다음 실행하고 — Folder Compare로 완료 여부를 검증합니다.

RcloneView로 Backblaze B2로 마이그레이션하면 클라우드 이그레스의 복잡함이 사라지고, CLI 명령을 한 줄도 작성하지 않고도 검증된 비용 효율적인 아카이브를 확보할 수 있습니다.

---

**관련 가이드:**

- [RcloneView로 Backblaze B2를 Google Drive로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-google-drive-rcloneview)
- [Backblaze B2 클라우드 스토리지 관리 — RcloneView로 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Dropbox를 Backblaze B2로 백업 — RcloneView로 저렴한 스토리지 이용하기](https://rcloneview.com/support/blog/backup-dropbox-to-backblaze-b2-affordable-storage-rcloneview)

<CloudSupportGrid />
