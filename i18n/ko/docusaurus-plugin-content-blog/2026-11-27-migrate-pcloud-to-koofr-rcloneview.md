---
slug: migrate-pcloud-to-koofr-rcloneview
title: "pCloud에서 Koofr로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - jay
description: "RcloneView로 pCloud를 Koofr로 마이그레이션하세요. 클라우드 간 폴더를 복사하고, Dry Run으로 미리 보고, Folder Compare로 검증하며, 다운로드 후 재업로드하는 과정을 건너뛰세요."
keywords:
  - pcloud에서 koofr로 마이그레이션
  - pcloud koofr 전송
  - pcloud koofr 마이그레이션
  - pcloud에서 koofr로 파일 이동
  - 클라우드 간 마이그레이션
  - 유럽 클라우드 스토리지 마이그레이션
  - rcloneview pcloud
  - rcloneview koofr
  - koofr 파일 전송 도구
  - rclone gui 클라우드 마이그레이션
tags:
  - RcloneView
  - pcloud
  - koofr
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# pCloud에서 Koofr로 마이그레이션 — RcloneView로 파일 전송하기

> pCloud 라이브러리를 폴더 단위로 Koofr에 옮기고, 모든 변경을 미리 확인하며, 빠진 것이 없는지 검증하세요.

팀과 개인이 pCloud에서 Koofr로 옮기는 이유는 다양합니다. 계정을 통합하거나, Koofr를 중앙 허브로 도입하거나, 다른 제공업체에 두 번째 사본을 보관하기 위해서입니다. 모든 것을 노트북에 다운로드했다가 다시 업로드하면 디스크 공간과 며칠의 시간이 낭비됩니다. RcloneView는 두 서비스를 하나의 창에서 연결하고 rclone을 통해 서로 간에 데이터를 복사하므로, 마이그레이션을 모니터링하고 반복하고 검증할 수 있는 관리형 작업으로 실행할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## pCloud와 Koofr를 리모트로 연결

**Remote** 탭을 열고 **New Remote**를 클릭하세요. pCloud는 OAuth를 사용합니다. pCloud를 선택하면 브라우저가 열리고 로그인해 접근을 승인할 수 있습니다. API 키는 필요하지 않습니다. 그런 다음 Koofr용 두 번째 리모트를 추가하고 설정 양식이 요청하는 계정 자격 증명을 입력하세요.

두 리모트가 준비되면 두 개의 Explorer 패널에 나란히 여세요. **Settings > Layout**에서 레이아웃을 가로 또는 세로 분할로 바꿀 수 있으며, 폴더 트리, 목록 보기 또는 사진 폴더용 썸네일 보기로 각 계정을 탐색할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 pCloud와 Koofr 리모트 추가" class="img-large img-center" />

무엇이든 옮기기 전에 pCloud 최상위 폴더를 마우스 오른쪽 버튼으로 클릭하고 **Get Size**를 사용하세요. 전체 용량을 알면 Koofr 계정에 충분한 공간이 있는지 확인하는 데 도움이 됩니다.

## 클라우드 간 폴더 복사

폴더가 몇 개뿐이라면 pCloud 패널에서 Koofr 패널로 드래그하세요. 서로 다른 리모트 간에 드래그하면 **Copy**가 수행되므로 pCloud 원본은 그대로 유지됩니다.

전체 마이그레이션에는 작업을 만드는 것이 좋습니다. Home 탭에서 **Sync**를 클릭하고, pCloud 폴더를 소스로, Koofr 폴더를 대상으로 선택한 뒤 `pcloud-to-koofr`처럼 작업 이름을 지정하세요. Advanced Settings에서 해시와 크기로 파일을 비교하려면 **checksum**을 켜고, 연결이 끊겨도 실행이 멈추지 않도록 **Retry entire sync if fails**는 기본값 3으로 두세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView에서 pCloud에서 Koofr로 클라우드 간 전송" class="img-large img-center" />

먼저 **Dry Run**을 실행하세요. 복사되거나 삭제될 모든 파일을 보여주므로, 실제 데이터가 이동하기 전에 잘못된 대상 경로를 잡아내는 믿을 만한 방법입니다. RcloneView는 Windows, macOS, Linux에서 하나의 창으로 90개 이상의 제공업체를 마운트하고 동기화하므로, 나중에 다른 조합을 마이그레이션할 때도 같은 작업 흐름을 적용할 수 있습니다.

## 전송 모니터링과 기록 확인

작업이 실행되는 동안 **Transferring** 탭에 진행률, 속도, 파일 수가 표시되며 언제든지 취소할 수 있습니다. 400 GB의 촬영 결과물을 옮기는 사진작가라면 앱을 시스템 트레이로 최소화해 둘 수 있으며, 작업은 백그라운드에서 계속 실행됩니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneView에서 pCloud에서 Koofr로의 전송 진행 상황 모니터링" class="img-large img-center" />

작업이 끝나면 **Job History**를 열어 상태(Completed, Errored, Canceled), 전체 크기, 속도, 파일 수를 확인하세요. 전환 기간 중에 pCloud에 새 파일을 추가했다면 같은 작업을 다시 실행하세요. 새로 추가되었거나 변경된 파일만 전송됩니다.

## Folder Compare로 검증

**Compare**를 클릭하고 왼쪽에 pCloud 폴더, 오른쪽에 Koofr 폴더를 불러오세요. **left-only files** 필터로 Koofr에 없는 항목을 찾고, **Copy right**로 빈 부분을 채우세요. 양쪽이 모두 동일하게 표시되면 마이그레이션이 완료된 것이며, pCloud 사본을 언제 정리할지 결정할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView에서 마이그레이션 후 pCloud와 Koofr 폴더 비교" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **New Remote**에서 pCloud(OAuth 브라우저 로그인)와 Koofr를 리모트로 추가하세요.
3. pCloud에서 Koofr로 가는 Sync 작업을 만들고 **Dry Run**으로 미리 확인하세요.
4. 작업을 실행하고 **Job History**를 확인한 뒤 **Folder Compare**로 검증하세요.

계획되고 검증된 마이그레이션이라면, 수동 복사가 끝나기를 기다릴 필요 없이 원하는 일정에 맞춰 제공업체를 전환할 수 있습니다.

---

**관련 가이드:**

- [pCloud 스토리지 관리 — RcloneView로 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [Koofr 스토리지 관리 — RcloneView로 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [RcloneView로 Koofr 동기화 오류 해결하기](https://rcloneview.com/support/blog/fix-koofr-sync-errors-rcloneview)

<CloudSupportGrid />
