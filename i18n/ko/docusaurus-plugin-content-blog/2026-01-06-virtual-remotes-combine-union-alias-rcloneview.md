---
slug: virtual-remotes-combine-union-alias-rcloneview
title: "RcloneView 가상 리모트: Combine, Union, Alias로 하나의 멀티 클라우드 워크스페이스 구축하기"
authors:
  - tayson
description: "RcloneView 가상 리모트를 사용하면 데이터를 복사하지 않고도 멀티 클라우드 폴더를 하나로 통합할 수 있습니다. Alias, Combine, Union 중 언제 무엇을 선택해야 하는지, 더 깔끔한 워크플로우를 만드는 방법을 알아보세요."
keywords:
  - virtual remote
  - combine remote
  - union remote
  - alias remote
  - multi cloud viewer
  - rcloneview virtual remote
  - cloud workspace
  - multi cloud management
  - rcloneview workflow
  - cloud file organization
tags:
  - RcloneView
  - cloud-storage
  - file-management
  - sync
  - multi-cloud
---

import RvCta from '@site/src/components/RvCta';

# RcloneView 가상 리모트: Combine, Union, Alias로 하나의 멀티 클라우드 워크스페이스 구축하기

> 멀티 클라우드가 뒤엉키면 폴더를 찾기가 어려워집니다. RcloneView의 가상 리모트를 사용하면 파일을 이동하거나 복제하지 않고도 뷰를 하나로 통합할 수 있습니다.

가상 리모트는 멀티 클라우드 워크플로우를 정리하는 가장 빠른 방법 중 하나입니다. 탭을 이리저리 옮겨 다니거나 작업을 다시 설정하는 대신, 기존 리모트와 폴더를 가리키는 가상 뷰를 만들 수 있습니다. 원본 데이터는 원래 위치에 그대로 있지만, 워크스페이스는 탐색과 자동화가 훨씬 쉬워집니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 가상 리모트가 중요한 이유

- 작업을 실행하거나 폴더를 비교할 때마다 깊은 경로를 뒤지지 않아도 됩니다.
- 데이터를 복사하지 않고도 여러 클라우드를 하나의 워크스페이스로 보여줍니다.
- Explorer, Compare, Sync, Jobs 전반에서 일관된 구조를 유지할 수 있습니다.

## RcloneView의 가상 리모트란?

가상 리모트는 기존 리모트와 폴더 위에 얹혀지는 형태입니다. 자체적으로 데이터를 저장하지는 않습니다. 대신 이미 가지고 있는 위치를 가리키고, 이를 새롭고 더 깔끔한 뷰로 보여줍니다.

**New Remote → Virtual**에서 생성할 수 있습니다.

- **Alias**: 깊은 폴더로 가는 바로가기.
- **Combine**: 여러 폴더를 나란히 나열해서 보여주는 단일 뷰.
- **Union**: 여러 폴더를 하나로 병합해서 보여주는 뷰.

<img src="/support/images/en/blog/new-remote.png" alt="New Remote screen" class="img-large img-center" />

## Alias 리모트: 깊은 폴더에 즉시 접근하기

**적합한 경우**: 매일 여는 폴더로 바로 이동하고 싶을 때.

Alias는 북마크입니다. 특정 폴더를 즉시 열어주기 때문에 반복 작업이나 팀 공유 경로에 안성맞춤입니다.

예시: `Drive:Team/Projects/Client-A`와 같은 팀 공유 폴더를 북마크로 저장하고 `Alias_ClientA`라는 이름으로 엽니다.

<img src="/support/images/en/howto/remote-storage-connection-settings/alias/new-remote-add-alias.png" alt="Add alias remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/alias/virtual-alias-file-browser.png" alt="Alias remote file browser" class="img-large img-center" />

가이드: [/support/howto/remote-storage-connection-settings/alias-remote](/howto/remote-storage-connection-settings/alias-remote)

## Combine 리모트: 하나의 뷰, 여러 개의 폴더

**적합한 경우**: 대시보드나 프로젝트 모음.

Combine은 여러 폴더를 하나의 리모트 안에 나란히 보여줍니다. 각 폴더는 원래 구조를 그대로 유지하지만, 하나의 화면에서 함께 탐색할 수 있습니다.

예시: 다음을 포함하는 `Marketing_Assets` Combine 리모트를 만듭니다.

- `Drive:Marketing`
- `Dropbox:Assets`

<img src="/support/images/en/howto/remote-storage-connection-settings/combine/new-remote-add-combine.png" alt="Add combine remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/combine/combine-check-folder-1.png" alt="Combine view example" class="img-large img-center" />

가이드: [/support/howto/remote-storage-connection-settings/combine-remote](/howto/remote-storage-connection-settings/combine-remote)

## Union 리모트: 여러 클라우드를 하나로 병합한 폴더

**적합한 경우**: 통합 아카이브나 여러 소스에서 데이터를 수집하는 경우.

Union은 여러 폴더를 하나로 병합된 뷰로 만들어줍니다. 파일이 서로 다른 클라우드에 있더라도 모든 것을 하나의 폴더처럼 보이게 하고 싶을 때 이상적입니다.

예시: 두 개의 리모트에서 매달 촬영된 원본 영상을 하나의 `Raw_Footage` 뷰로 합칩니다.

<img src="/support/images/en/howto/remote-storage-connection-settings/union/new-remote-add-union.png" alt="Add union remote" class="img-large img-center" />
<img src="/support/images/en/howto/remote-storage-connection-settings/union/union-check-folder-1.png" alt="Union view example" class="img-large img-center" />

가이드: [/support/howto/remote-storage-connection-settings/union-remote](/howto/remote-storage-connection-settings/union-remote)

## 빠른 선택 가이드: Alias vs Combine vs Union

| 필요한 상황 | 선택 | 이유 |
| --- | --- | --- |
| 깊은 폴더로 빠르게 이동하고 싶다 | **Alias** | 특정 경로로 가는 단일 바로가기 |
| 여러 폴더를 나란히 보고 싶다 | **Combine** | 별도의 폴더 구조를 그대로 유지 |
| 여러 폴더를 하나처럼 다루고 싶다 | **Union** | 통합 데이터를 위한 병합 뷰 |

## 가상 리모트를 활용한 실전 워크플로우

- **동기화 전 비교하기**: Combine 또는 Union 뷰에서 Compare를 실행해 먼저 차이를 확인합니다.
  가이드: [/support/howto/rcloneview-basic/compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents)
- **여러 소스 간 동기화**: Union 리모트를 백업 대상으로 동기화해 병합된 아카이브를 미러링합니다.
  가이드: [/support/howto/rcloneview-basic/synchronize-remote-storages](/howto/rcloneview-basic/synchronize-remote-storages)
- **작업을 한 번만 저장하기**: Job Manager를 사용해 가상 리모트의 Sync를 예약하고 자동으로 실행되게 합니다.
  가이드: [/support/howto/rcloneview-basic/create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs)
- **선택적 마운트**: 가상 리모트를 마운트하여 로컬 드라이브처럼 탐색합니다.
  가이드: [/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)

<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results filters" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/add-job-scheduling.png" alt="Add job scheduling" class="img-large img-center" />
</div>
<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount from Remote Explorer" class="img-large img-center" />

## 모범 사례와 이름 규칙

- `Alias_ProjectX`, `Combine_Marketing`, `Union_Archive`처럼 명확한 접두사를 사용하세요.
- 작업 이름이나 Job Manager 설명에 소스 관련 메모를 남겨두세요.
- 혼란을 줄이기 위해 하나의 Union에 서로 관련 없는 폴더를 섞지 마세요.
- 명확함이 필요하면 Combine을, 단순함이 필요하면 Union을 사용하세요.

## 결론

가상 리모트는 멀티 클라우드 워크플로우의 마찰을 줄여줍니다. Alias, Combine, Union을 사용하면 데이터를 복사하지 않고도 깔끔한 워크스페이스를 구축할 수 있어, 팀이 더 빠르게 움직이면서도 구조를 그대로 유지할 수 있습니다. 오늘 하나를 시도해보고 일상적인 탐색이 얼마나 쉬워지는지 확인해보세요.

