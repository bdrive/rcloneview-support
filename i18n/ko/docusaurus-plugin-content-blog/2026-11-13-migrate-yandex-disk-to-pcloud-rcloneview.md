---
slug: migrate-yandex-disk-to-pcloud-rcloneview
title: "Yandex Disk에서 pCloud로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - morgan
description: "RcloneView로 Yandex Disk의 파일을 pCloud로 옮기세요. OAuth로 두 클라우드를 연결하고, Dry Run으로 미리 확인하고, 클라우드 간 복사 후 Folder Compare로 검증합니다."
keywords:
  - yandex disk에서 pcloud로 마이그레이션
  - yandex disk pcloud 전송
  - yandex disk 마이그레이션
  - pcloud 마이그레이션 도구
  - 클라우드 간 전송
  - yandex disk 파일 옮기기
  - rcloneview yandex disk
  - rcloneview pcloud
  - rclone gui 클라우드 마이그레이션
tags:
  - RcloneView
  - yandex-disk
  - pcloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Yandex Disk에서 pCloud로 마이그레이션 — RcloneView로 파일 전송하기

> 미리보기, 모니터링, 검증이 가능한 GUI 기반 복사 작업으로 수년간 쌓인 Yandex Disk 파일을 pCloud로 옮기세요.

스토리지 계정을 통합하는 작업은 대개 같은 지점에서 막힙니다. 모든 파일을 노트북에 내려받았다가 다시 업로드해야 한다는 점입니다. RcloneView는 Yandex Disk와 pCloud를 나란히 연결하고 rclone을 통해 둘 사이에서 파일을 복사하므로, 먼저 로컬 디스크에 임시로 저장할 필요가 없습니다. 두 서비스 모두 브라우저 OAuth 로그인으로 연결되므로 API 키를 만들 필요도 없습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Yandex Disk와 pCloud를 리모트로 연결하기

Remote 탭을 열고 **New Remote**를 클릭합니다. Yandex Disk를 선택하고 `yandex` 같은 짧은 리모트 이름을 지정한 뒤 브라우저 로그인을 완료합니다. pCloud도 `pcloud` 같은 이름으로 같은 과정을 반복합니다. 두 리모트는 Remote Manager에 표시되며, 나중에 편집하거나 삭제할 수 있습니다.

연결되면 리모트마다 하나씩 Explorer 패널 두 개를 열고 폴더 트리를 탐색합니다. 최상위 폴더를 마우스 오른쪽 버튼으로 클릭하고 **Get Size**를 선택하면 옮길 데이터 양을 확인할 수 있습니다. 이 수치로 첫 파일을 복사하기 전에 pCloud 요금제에 여유 공간이 있는지 확인할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Yandex Disk and pCloud remotes in RcloneView" class="img-large img-center" />

## 복사 작업 계획 및 미리보기

일회성 마이그레이션에는 **Copy** 작업이 더 안전합니다. pCloud에 파일을 추가만 하고 아무것도 삭제하지 않기 때문입니다. pCloud가 삭제를 포함해 Yandex Disk를 정확히 미러링하도록 하려는 경우에만 **Sync**를 사용하세요.

Job Manager에서 작업을 만듭니다. Step 1에서 Yandex Disk 폴더를 소스로, pCloud 폴더를 대상으로 선택합니다. Step 2에서는 체크섬 비교를 켜는 것을 고려하세요. 양쪽이 같은 해시 유형을 지원하면 해시와 크기로 파일을 비교합니다(Yandex Disk는 MD5를 사용하며, pCloud는 US 리전 계정에서만 MD5를 제공합니다). 불안정한 연결에 대비해 재시도 설정(기본값: 3)은 유지하세요. Step 3에서는 더 이상 필요 없는 항목을 건너뛸 수 있습니다 — 예를 들어 최대 파일 기간이나, `.iso` 이미지 또는 `.git/` 폴더를 제외하는 사용자 지정 규칙입니다.

실행 전에 **Dry Run**을 사용하세요. 복사될 모든 파일이 나열되므로, 400 GB의 RAW 아카이브를 옮기는 사진작가도 몇 시간의 전송을 시작하기 전에 폴더 구조가 올바른지 확인할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud copy from Yandex Disk to pCloud in RcloneView" class="img-large img-center" />

## 전송 실행 및 모니터링

작업을 시작하고 Transferring 탭에서 진행률, 속도, 파일 수를 확인합니다. 대용량 라이브러리는 최상위 폴더별로 하나씩 여러 작업으로 나누는 것이 좋습니다. 그러면 네트워크 문제가 생겨도 한 묶음에만 영향을 줍니다. 모든 실행은 상태, 총 크기, 파일 수와 함께 Job History에 기록되므로 이전 작업의 감사 기록이 됩니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a Yandex Disk to pCloud transfer in the Transferring tab" class="img-large img-center" />

## Folder Compare로 검증하기

작업이 끝나면 왼쪽에 Yandex Disk 폴더, 오른쪽에 pCloud 폴더를 두고 **Compare**를 엽니다. "left-only"와 "different" 파일로 필터링하면 건너뛴 항목을 찾을 수 있습니다. Copy right를 사용하면 남은 파일을 한 번에 보낼 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing Yandex Disk and pCloud folders after migration" class="img-large img-center" />

## 시작하기

RcloneView는 Windows, macOS, Linux에서 하나의 창으로 90개 이상의 서비스를 마운트하고 동기화합니다.

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. OAuth 브라우저 로그인으로 Yandex Disk와 pCloud를 리모트로 추가합니다.
3. Yandex Disk에서 pCloud로 Copy 작업을 만들고 Dry Run으로 검토합니다.
4. 작업을 실행한 뒤, Yandex Disk 계정을 정리하기 전에 Folder Compare로 결과를 확인합니다.

검증된 마이그레이션이라면 모든 폴더가 무사히 옮겨졌음을 확인하고 기존 계정을 정리할 수 있습니다.

---

**관련 가이드:**

- [Yandex Disk 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-yandex-disk-cloud-sync-backup-rcloneview)
- [pCloud 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Yandex Disk 동기화 오류 해결 — RcloneView로 실패한 전송 진단 및 해결하기](https://rcloneview.com/support/blog/fix-yandex-disk-sync-errors-rcloneview)

<CloudSupportGrid />
