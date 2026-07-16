---
slug: combine-remote-merge-cloud-folders-rcloneview
title: "Combine 리모트 — RcloneView에서 여러 클라우드 폴더를 하나의 트리로 병합하기"
authors:
  - alex
description: "RcloneView의 Combine 리모트를 사용해 서로 다른 클라우드 제공업체의 폴더를 하나의 가상 폴더 트리로 병합하는 방법."
keywords:
  - combine remote rclone
  - merge cloud folders
  - virtual remote RcloneView
  - unify multiple cloud storage
  - rclone combine backend
  - multi-cloud folder structure
  - virtual file tree cloud
  - RcloneView virtual remotes
  - organize cloud storage folders
  - cross-provider folder merge
tags:
  - RcloneView
  - feature
  - multi-cloud
  - cloud-storage
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Combine 리모트 — RcloneView에서 여러 클라우드 폴더를 하나의 트리로 병합하기

> 다섯 개의 리모트 탭을 오가는 일은 이제 그만 — RcloneView의 Combine 리모트는 서로 다른 클라우드 제공업체의 폴더를 하나의 가상 폴더 트리로 이어 붙입니다.

원본 영상은 Google Drive에, 프로젝트 파일은 Dropbox에, 완성된 렌더링본은 Backblaze B2에 저장하는 영상 제작 스튜디오를 떠올려 보세요. 각 리모트는 개별적으로는 아무 문제 없이 작동하지만, "Project X의 마스터 편집본이 어디 있더라"라는 질문에 답하려면 매번 세 개의 탭을 확인해야 합니다. rclone의 가상 리모트 래퍼 중 하나인 RcloneView의 Combine 리모트는 여러 상위 폴더를 하나의 가상 리모트 안에 이름이 지정된 하위 디렉터리로 보여줌으로써 이 문제를 해결합니다. 파일을 물리적으로 옮기지 않고도 전체 제작 자료가 하나의 루트 아래에 존재하게 되는 것입니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Combine 리모트가 실제로 하는 일

Combine은 여러 소스를 하나로 병합하여 파일들이 마치 단일 디렉터리를 공유하는 것처럼 보이게 하는 Union과는 다릅니다. Combine은 대신 각 상위 리모트(또는 그 안의 특정 하위 폴더)를 결과로 만들어지는 가상 트리 안의 이름이 지정된 하위 디렉터리에 할당합니다 — 그래서 `footage:`와 `renders:`는 하나의 리모트 아래에서 `production/footage`와 `production/renders`로 나타나며, 완전히 분리되어 있으면서도 함께 탐색할 수 있습니다. 아무것도 복사되거나 중복되지 않습니다. RcloneView는 읽기와 쓰기를 실시간으로 원본 리모트로 곧장 라우팅합니다.

<img src="/support/images/en/blog/new-remote.png" alt="Creating a Combine virtual remote in RcloneView" class="img-large img-center" />

## RcloneView에서 Combine 리모트 설정하기

Remote 탭에서 Remote Manager를 열고 Combine 유형의 새 리모트를 만듭니다. 각 상위 리모트(또는 remote:path)를 병합된 트리 안에서 표시하고 싶은 하위 디렉터리 이름에 매핑한 다음 저장합니다. 결과는 다른 리모트와 마찬가지로 Explorer 패널에 나타납니다 — 확장하면 매핑된 각 소스가 자체 최상위 폴더로 나타나며, 네이티브 리모트에서 사용하던 것과 동일한 복사, 이동, 드래그 앤 드롭 작업을 바로 사용할 수 있습니다. RcloneView는 하나의 창에서 90개 이상의 제공업체를 Windows, macOS, Linux에서 마운트하고 동기화할 수 있으므로, Google Drive, Dropbox, B2 폴더로 구성한 Combine 리모트는 어떤 OS에서 실행하든 동일하게 동작합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browsing a Combine remote's merged folder structure" class="img-large img-center" />

## 실전 활용 사례

미디어 제작 외에도 Combine 리모트는 클라우드 계정이 자연스럽게 여러 개로 늘어난 사용자에게 적합합니다 — 예전 Dropbox 요금제와 최신 S3 버킷에 RAW 파일이 나뉘어 있는 사진 스튜디오, 계약서는 SharePoint에 있고 청구서는 Google Drive에 있는 소규모 팀 같은 경우입니다. 둘을 하나의 Combine 리모트로 감싸면 단일 Folder Compare 또는 Sync 작업이 제공업체별로 별도 작업을 실행하는 대신 전체 논리적 구조를 대상으로 삼을 수 있으며, Job History는 여러 개의 분리된 로그 대신 하나의 통합된 기록을 보여줍니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a sync job against a Combine remote" class="img-large img-center" />

## Combine과 다른 가상 리모트 비교

잘못된 래퍼를 선택하기 쉽습니다. Alias는 깊이 중첩된 경로에 짧은 이름을 붙일 뿐 — 병합은 전혀 이루어지지 않습니다. Union은 여러 소스를 마치 하나의 공유 폴더처럼 보이도록 혼합하며, 무료 저장 용량을 모아 사용하는 데 유용합니다. Crypt는 기존 리모트 위에 파일 및 폴더 이름을 암호화합니다. Combine은 서로 다른 소스를 분리된 상태로 유지하면서도 하나의 루트에서 탐색하고 싶을 때 선택해야 할 리모트입니다.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a Combine remote from Mount Manager" class="img-large img-center" />

## 시작하기

1. 아직 설치하지 않았다면 [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 아직 구성되지 않았다면 결합하려는 개별 리모트를 추가하세요 (Remote 탭 > New Remote).
3. Remote Manager에서 새 Combine 리모트를 만들고 각 상위 소스를 하위 디렉터리 이름에 매핑합니다.
4. Explorer 패널에서 병합된 트리를 탐색하고 첫 Compare 또는 Sync 작업을 실행해 보세요.

흩어져 있던 클라우드 계정들이 하나의 Combine 리모트 아래에 모이면, 폴더 구조는 더 이상 파일을 찾을 때마다 치러야 하는 세금이 되지 않습니다.

---

**관련 가이드:**

- [Union 리모트 — RcloneView에서 여러 제공업체의 무료 저장 공간 결합하기](https://rcloneview.com/support/blog/union-remote-combine-free-storage-rcloneview)
- [가상 리모트 — Combine, Union, Alias 설명](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [Alias 리모트 — RcloneView의 단축 경로](https://rcloneview.com/support/blog/alias-remote-shortcut-paths-rcloneview)

<CloudSupportGrid />
