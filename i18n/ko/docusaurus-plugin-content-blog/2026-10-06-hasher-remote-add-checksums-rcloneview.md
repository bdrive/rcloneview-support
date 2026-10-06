---
slug: hasher-remote-add-checksums-rcloneview
title: "Hasher 리모트 — RcloneView에서 체크섬이 없는 스토리지에 체크섬 추가하기"
authors:
  - steve
description: "RcloneView의 Hasher 가상 리모트를 사용하여 자체 체크섬을 제공하지 않는 리모트에 해시 기반 무결성 검사를 추가합니다."
keywords:
  - rclone Hasher 리모트
  - 클라우드 스토리지에 체크섬 추가
  - 클라우드 파일 무결성 검사
  - 클라우드 파일 해시 검증
  - Hasher 가상 리모트
  - RcloneView 가상 리모트
  - 체크섬 동기화
  - rclone GUI
tags:
  - RcloneView
  - feature
  - rclone
  - cloud-storage
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Hasher 리모트 — RcloneView에서 체크섬이 없는 스토리지에 체크섬 추가하기

> Hasher 가상 리모트는 기존 리모트 위에 해싱을 추가하므로, 스토리지에 체크섬이 없는 경우에도 무결성 검사가 작동합니다.

일부 스토리지 백엔드는 파일 해시를 제공하지 못해 전송 후 비교와 검증이 약해집니다. RcloneView는 이미 가진 리모트 위에 해싱을 덧씌우는 래퍼인 rclone의 Hasher 가상 리모트를 지원합니다. 이 가이드에서는 Hasher가 언제 유용한지와 사용 방법을 다룹니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hasher 리모트가 하는 일

가상 리모트는 기존 리모트를 감싸 동작을 추가합니다. Alias는 경로를 줄이고, Crypt는 암호화하며, Hasher는 무결성 검사를 위한 해싱을 추가합니다. 백엔드가 체크섬을 제공하지 않으면 비교는 크기와 수정 시간으로 대체되는데, 이 두 값을 바꾸지 않고 내용만 변경된 경우를 놓칠 수 있습니다.

해당 백엔드를 Hasher 리모트로 감싸면 해시 기능이 부여되어 체크섬 기반 비교가 가능해집니다. 속도보다 정확성이 중요한 아카이브와 백업에 적합합니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 새 가상 리모트 만들기" class="img-large img-center" />

## Hasher 리모트 만들기

Remote 탭을 열고 New Remote를 선택한 다음 Hasher 유형을 고릅니다. 감싸려는 기본 리모트와 폴더를 지정하고, `archive-hashed`처럼 알아보기 쉬운 이름을 붙입니다. 저장하면 다른 리모트와 마찬가지로 탐색기에 나타납니다.

원래 리모트를 쓰던 곳이라면 어디서든 래핑된 리모트를 사용할 수 있습니다. 탐색, 복사, 동기화의 소스 또는 대상으로도 쓸 수 있습니다. 해시는 래퍼에 연결되어 있으므로, 검증하려는 데이터에는 일관되게 Hasher 리모트를 사용하세요.

## 동기화 및 비교와 함께 사용

동기화 작업의 Advanced Settings에서 **Enable checksum**을 켜면 파일이 해시와 크기로 비교됩니다. Hasher 리모트와 함께 사용하면 크기와 시간만 비교할 때보다 더 신뢰할 수 있는 결과를 얻을 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="두 폴더 간의 차이를 보여주는 Folder Compare 화면" class="img-large img-center" />

먼저 Dry Run을 실행해 복사되거나 삭제될 항목을 미리 확인한 다음 실행하세요. RcloneView는 Windows, macOS, Linux에서 90개 이상의 제공업체에 대해 마운트와 동기화를 하나의 창에서 지원하므로, 같은 검증 방식을 여러 클라우드에 적용할 수 있습니다.

## Job History에서 결과 확인

실행이 끝나면 Job History를 열어 상태, 전송된 파일 수, 총 크기를 확인하세요. 작업에서 오류가 보고되면 Log 탭에서 세부 정보를 볼 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="완료된 동기화 실행을 보여주는 작업 기록" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 체크섬이 없는 리모트가 아직 없다면 추가합니다.
3. Remote > New Remote에서 이를 감싸는 Hasher 리모트를 만듭니다.
4. **Enable checksum**을 켠 동기화 작업을 만들고 먼저 Dry Run을 실행합니다.

더 강력한 검증은 문제가 되기 전에 조용히 숨은 차이를 찾아내 줍니다.

---

**관련 가이드:**

- [가상 리모트 — RcloneView로 Combine, Union, Alias 사용하기](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [RcloneView로 클라우드 동기화 체크섬 불일치 해결](https://rcloneview.com/support/blog/fix-cloud-sync-checksum-mismatch-rcloneview)
- [RcloneView로 클라우드 백업 검증 실패 해결](https://rcloneview.com/support/blog/fix-cloud-backup-verification-failures-rcloneview)

<CloudSupportGrid />
