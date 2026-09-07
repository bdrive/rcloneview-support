---
slug: migrate-jottacloud-to-dropbox-rcloneview
title: "Jottacloud에서 Dropbox로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - alex
description: "RcloneView로 Jottacloud에서 Dropbox로 파일을 이동하세요. 폴더를 동기화하고, 전송을 검증하고, 두 리모트를 한 화면에서 관리하세요."
keywords:
  - Jottacloud에서 Dropbox로 마이그레이션
  - Jottacloud Dropbox 전송
  - Jottacloud Dropbox 마이그레이션
  - RcloneView Jottacloud
  - RcloneView Dropbox
  - 클라우드 간 전송
  - 클라우드 스토리지 간 파일 이동
  - Jottacloud 대안
  - Dropbox 마이그레이션 도구
  - 유럽 클라우드 스토리지 마이그레이션
tags:
  - RcloneView
  - jottacloud
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Jottacloud에서 Dropbox로 마이그레이션 — RcloneView로 파일 전송하기

> 데스크톱에 아무것도 다운로드하지 않고 Jottacloud에서 Dropbox로 파일을 옮기세요.

유럽 내 데이터 보관 위치 때문에 Jottacloud로 시작한 팀이 국제 파트너와의 협업이 우선순위가 되면서 Dropbox로 통합해야 하는 경우가 있습니다. 모든 것을 로컬에 다운로드했다가 다시 업로드하면 대역폭이 낭비되고 폴더 구조가 깨질 위험이 있습니다. RcloneView는 두 리모트에 동시에 연결하여 파일을 직접 이동시키므로, 전송이 클라우드 간에 바로 이루어집니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Jottacloud와 Dropbox를 나란히 연결하기

Remote 탭 > New Remote를 통해 두 스토리지 계정을 모두 추가합니다. Dropbox는 API 키를 관리할 필요 없이 표준 브라우저 로그인으로 연결됩니다. 추가하면 각 리모트는 Explorer 패널에서 자체 탭을 가지므로, 한 패널에는 Jottacloud를, 다른 패널에는 Dropbox를 열어 무언가를 옮기기 전에 두 폴더 트리를 직접 나란히 비교할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 새 클라우드 리모트 추가하기" class="img-large img-center" />

전송을 시작하기 전에 두 계정을 살펴보면 폴더 명명 규칙이 일치하는지 확인하거나, 원본이 시간이 지나면서 정리되지 않았다면 Dropbox 쪽에 새로운 구조를 계획할 수 있습니다.

## 클라우드 간 전송 실행하기

Home 탭의 동기화 마법사를 사용하여 Jottacloud를 소스로, Dropbox를 대상으로 구성합니다. 동기화 방향을 단방향으로 설정하면 RcloneView가 Jottacloud의 데이터를 다시 삭제하지 않고도 Dropbox가 소스를 그대로 반영하게 됩니다. 3단계에서 필터를 적용하여 새 위치에 필요 없는 파일 형식을 건너뛸 수 있습니다 — `.iso` 파일이나 전체 `.git/` 폴더를 제외하면 전송이 정말 필요한 콘텐츠에 집중됩니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Jottacloud에서 Dropbox로의 클라우드 간 동기화 작업 구성하기" class="img-large img-center" />

먼저 Dry Run을 실행하세요. 어느 계정도 건드리지 않고 복사될 파일 목록을 정확히 보여주므로, 잘못 설정된 필터가 수천 개의 파일에 영향을 미치기 전에 발견하는 데 도움이 됩니다.

## 모든 파일이 올바르게 도착했는지 확인하기

전송이 완료되면 Folder Compare를 열어 Jottacloud와 Dropbox의 동일한 경로를 지정합니다. 크기가 일치하는 파일은 동일한 것으로 표시되고, 차이가 있거나 복사에 실패한 항목은 표시되어 해당 항목만 다시 실행할 수 있습니다. RcloneView는 90개 이상의 제공업체를 Windows, macOS, Linux의 단일 창에서 마운트하고 동기화하므로, 어떤 두 클라우드를 비교하든 이 검증 단계는 동일하게 작동합니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="마이그레이션 후 Jottacloud와 Dropbox 폴더 비교하기" class="img-large img-center" />

Job History는 완료된 동기화의 크기, 속도, 파일 개수를 기록하여, 누군가 마이그레이션이 어떻게 진행되었는지 물을 때 참고할 수 있는 기록을 제공합니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. Remote 탭에서 Jottacloud와 Dropbox 리모트를 추가합니다.
3. Jottacloud를 소스로, Dropbox를 대상으로 하는 단방향 동기화 작업을 만든 다음 Dry Run을 실행합니다.
4. 동기화를 실행하고 Folder Compare로 결과를 확인합니다.

검증이 끝나면, 전환이 완료되기 전에 기존 Jottacloud 계정에 추가된 파일을 놓치지 않도록 두 리모트를 한동안 계속 연결해 두세요.

---

**관련 가이드:**

- [Jottacloud 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [Dropbox 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [Jottacloud에서 Wasabi로 마이그레이션 — RcloneView로 파일 전송하기](https://rcloneview.com/support/blog/migrate-jottacloud-to-wasabi-rcloneview)

<CloudSupportGrid />
