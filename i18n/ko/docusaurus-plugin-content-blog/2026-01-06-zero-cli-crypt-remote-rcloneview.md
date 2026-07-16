---
slug: zero-cli-crypt-remote-rcloneview
title: "CLI 없이 RcloneView Crypt 리모트로 암호화하기: 모든 클라우드 폴더 보호"
authors:
  - tayson
description: "RcloneView의 Crypt 리모트를 사용해 파일이 PC를 떠나기 전에 암호화하세요. 설정 방법, 일반 뷰와 암호화 뷰의 차이, 프라이버시 우선 백업을 위한 모범 사례를 알아봅니다."
keywords:
  - rclone crypt
  - encrypted remote
  - rcloneview encryption
  - zero knowledge backup
  - cloud privacy
  - encrypt cloud storage
  - rcloneview crypt remote
  - file name encryption
  - privacy first backup
  - rclone gui
tags:
  - encryption
  - file-management
---

import RvCta from '@site/src/components/RvCta';

# CLI 없이 RcloneView Crypt 리모트로 암호화하기: 모든 클라우드 폴더 보호

> 클라우드 스토리지는 편리하지만, 편리함이 곧 프라이버시를 의미하지는 않습니다. RcloneView의 Crypt 리모트를 사용하면 CLI 명령어나 복잡한 플래그 없이 업로드 전에 파일을 암호화할 수 있습니다.

점점 더 많은 팀이 **업로드 전 암호화**를 기본 전략으로 선택하고 있습니다. 이는 계정 침해, 내부 감사, 지역별 컴플라이언스 스캔, 또는 잘못된 보안 검토로 인한 의도치 않은 노출로부터 보호해 줍니다. 지금까지의 문제는 항상 복잡성이었습니다. RcloneView는 간단한 Crypt 리모트 워크플로우로 이 장벽을 없앱니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView의 Crypt 리모트란?

Crypt 리모트는 기존 리모트 위에 계층으로 얹히는 암호화 뷰입니다.

- **베이스 리모트**: 암호화된 데이터가 실제로 저장되는 곳 (Drive, S3, WebDAV 등)
- **Crypt 리모트**: 사용자가 작업하는 뷰 (복호화된 상태로 표시)

RcloneView는 업로드 전에 파일 내용을 자동으로 암호화하며, 선택적으로 파일 이름도 암호화합니다.

```
[Crypt Remote]  -> decrypted view for you
        |
        v
[Base Remote]   -> encrypted data stored in the cloud
```

제공업체 입장에서는 파일을 읽을 수 없고 파일명도 무작위 문자열처럼 보입니다.

## Crypt는 언제 사용해야 할까요?

### 민감한 업무 문서
계약서, 재무 데이터, 고객 파일, 내부 계획 문서 등은 제공업체가 읽을 수 없어야 합니다.

### 개인 아카이브 및 장기 백업
가족 사진, 신분 증명 서류, 개인 기록은 기본적으로 암호화되어야 합니다.

### 공유 또는 제3자 스토리지
회사 소유 계정, 외부 벤더 스토리지, 또는 NAS + 클라우드 하이브리드 환경은 암호화 계층이 있으면 더 안전합니다.

## 단계별 안내: Crypt 리모트 만들기 (CLI 불필요)

### 1) 새 리모트 열기

**Remote Manager → New Remote**로 이동한 다음 **Virtual → Crypt**를 선택합니다.

<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/new-remote-add-crypt.png" alt="Add Crypt remote" class="img-large img-center" />

### 2) 베이스 리모트 선택

암호화하려는 리모트와 폴더를 선택합니다. 특정 폴더를 지정하여 암호화된 데이터를 분리해 둘 수 있습니다.

<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/virtual-add-select-remote-and-folder.png" alt="Select target folder for crypt" class="img-large img-center" />

### 3) 암호화 비밀번호 설정

- **데이터 비밀번호(Data Password)**: 필수
- **파일명 비밀번호(Filename Password)**: 선택 사항, 파일 이름도 숨기려면 사용

이 비밀번호는 복구할 수 없습니다. 안전하게 보관하세요.

### 4) 확인 및 완료

새로운 Crypt 리모트가 Remote Manager에 나타나며, 베이스 리모트는 변경되지 않은 상태로 유지됩니다.

<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/virtual-remote-manager-crypt.png" alt="Crypt remote in Remote Manager" class="img-large img-center" />

가이드: [/support/howto/remote-storage-connection-settings/crypt-remote](/howto/remote-storage-connection-settings/crypt-remote)

## 두 가지 뷰 이해하기 (매우 중요)

**베이스 리모트 뷰**  
암호화된 파일명과 읽을 수 없는 바이너리 데이터가 표시됩니다. 이는 정상입니다.

**Crypt 리모트 뷰**  
복호화된 파일과 일반적인 이름이 표시됩니다. 여기서 작업해야 합니다.

Crypt 뷰가 비어 있는 것처럼 보인다면, 파일을 베이스 리모트에 직접 업로드했을 가능성이 큽니다. 항상 Crypt 리모트를 통해 업로드하세요.

<img src="/support/images/en/howto/remote-storage-connection-settings/crypt/crypt-upload-file-compare.png" alt="Crypt vs base view comparison" class="img-large img-center" />

## 실제 RcloneView 워크플로우에서 Crypt 사용하기

Crypt 리모트는 일반 리모트처럼 동작합니다.

- **드래그 앤 드롭**으로 Crypt에 업로드하면 암호화됩니다  
  가이드: [/support/howto/rcloneview-basic/browse-and-manage-remote-storage](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- 암호화된 백업을 위한 **비교 및 동기화**  
  가이드: [/support/howto/rcloneview-basic/compare-folder-contents](/howto/rcloneview-basic/compare-folder-contents), [/support/howto/rcloneview-basic/synchronize-remote-storages](/howto/rcloneview-basic/synchronize-remote-storages)
- Crypt를 대상으로 하는 **예약 작업**  
  가이드: [/support/howto/rcloneview-basic/create-sync-jobs](/howto/rcloneview-basic/create-sync-jobs)

<div class="img-grid-2">
<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop into Crypt" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results filters" class="img-large img-center" />
</div>
<div class="img-grid-2">
<img src="/support/images/en/howto/rcloneview-basic/sync-configure-storage.png" alt="Sync configure storage" class="img-large img-center" />
<img src="/support/images/en/howto/rcloneview-basic/save-sync-to-jobs.png" alt="Save sync to Jobs" class="img-large img-center" />
</div>

## 모범 사례 및 주의사항

- **비밀번호는 복구할 수 없습니다**: 비밀번호 관리자를 사용하세요.
- **`rclone.conf`를 백업하세요**: 여기에 crypt 키가 포함되어 있습니다.
- **같은 폴더에 일반 파일과 암호화된 파일을 섞지 마세요.**
- **작은 폴더와 드라이런(dry run)으로 먼저 테스트하세요.**

<img src="/support/images/en/howto/rcloneview-basic/sync-dry-run.png" alt="Sync dry run" class="img-large img-center" />

## FAQ

**암호화가 전송 속도를 늦추나요?**  
약간의 CPU 오버헤드는 있지만, 대개 병목은 네트워크 속도입니다.

**RcloneView 외부에서 복호화할 수 있나요?**  
가능합니다. 동일한 crypt 설정과 비밀번호를 가진 어떤 rclone 클라이언트로도 복호화할 수 있습니다.

**비밀번호를 잃어버리면 어떻게 되나요?**  
데이터는 복구할 수 없습니다. 이는 제로 지식(zero-knowledge) 보안의 트레이드오프입니다.

## 결론

먼저 암호화한 다음 자동화하세요. RcloneView의 Crypt 리모트는 CLI 없이도 프라이버시 우선 백업을 제공합니다. 한 번 설정하면 평소처럼 Compare/Sync/Jobs를 사용하면서 데이터에 대한 통제권을 유지할 수 있습니다.
