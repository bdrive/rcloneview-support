---
slug: migrate-icloud-drive-to-pcloud-rcloneview
title: "iCloud Drive에서 pCloud로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - jay
description: "RcloneView로 iCloud Drive의 파일을 pCloud로 옮기세요. 두 클라우드를 연결하고, Dry Run으로 복사를 미리 보고, 클라우드 간 전송 후 Folder Compare로 검증합니다."
keywords:
  - iCloud Drive pCloud 마이그레이션
  - iCloud Drive pCloud 전송
  - iCloud Drive 파일 옮기기
  - iCloud Drive 마이그레이션 도구
  - pCloud 마이그레이션
  - 클라우드 간 전송
  - rcloneview icloud drive
  - rcloneview pcloud
  - rclone gui icloud drive
tags:
  - RcloneView
  - pcloud
  - cloud-to-cloud
  - migration
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# iCloud Drive에서 pCloud로 마이그레이션 — RcloneView로 파일 전송하기

> 미리 보고, 진행 상황을 지켜보고, 검증할 수 있는 복사 작업으로 iCloud Drive 폴더를 pCloud로 옮기세요. 모든 데이터를 로컬 디스크에 먼저 내려받을 필요가 없습니다.

사람들이 iCloud Drive에서 pCloud로 옮기는 이유는 현실적입니다. Windows, Linux, Mac 기기가 섞여 있는 가정이거나, 모든 데스크톱에서 똑같이 동작하는 하나의 스토리지 계정을 원하는 프리랜서일 수 있습니다. iCloud Drive에는 다른 클라우드 서비스로 내보내는 기본 기능이 없어서, 대부분의 마이그레이션은 "Mac에 전부 내려받은 뒤 다시 업로드하기"가 됩니다. RcloneView는 두 서비스를 동시에 연결하고 rclone을 통해 파일을 복사하므로, 하나의 창에서 클라우드 간 전송이 이루어집니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## iCloud Drive와 pCloud를 리모트로 연결하기

iCloud Drive 지원에는 rclone v1.69 이상이 필요합니다. RcloneView에는 이 요구 사항을 충족하는 내장 rclone 바이너리가 포함되어 있으므로 별도로 설치할 것이 없습니다. Remote 탭을 열고 **New Remote**를 클릭한 뒤 iCloud Drive를 선택하고 Apple 계정 자격 증명을 입력하세요. 그다음 pCloud를 추가합니다. pCloud는 브라우저 OAuth 로그인으로 접속하므로 API 키를 따로 생성할 필요가 없습니다.

두 리모트를 연결했으면 Explorer 패널 두 개를 나란히 엽니다. iCloud Drive의 최상위 폴더를 마우스 오른쪽 버튼으로 클릭하고 **Get Size**를 선택하면 옮길 데이터 양을 확인할 수 있습니다. 이 숫자로 첫 파일을 복사하기 전에 pCloud 요금제에 여유 공간이 있는지 알 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive and pCloud remotes in RcloneView" class="img-large img-center" />

## 복사 작업을 만들고 Dry Run으로 미리 보기

마이그레이션에는 **Copy** 작업이 신중한 선택입니다. pCloud에 파일을 추가만 하고 그곳의 어떤 것도 삭제하지 않습니다. 삭제까지 포함해 pCloud가 iCloud Drive를 정확히 미러링해야 하는 경우에만 **Sync**를 선택하세요.

Job Manager에서 iCloud Drive 폴더를 소스로, pCloud 폴더를 대상으로 하여 작업을 만듭니다. Step 2에서는 재시도 설정을 기본값 3으로 두어 연결이 끊겨도 실행이 끝나지 않도록 합니다. Step 3에서는 더 이상 필요 없는 데이터를 제외할 수 있습니다. 사용자 정의 필터로 `.iso` 이미지나 `.git/` 폴더를 제외할 수 있고, 최대 파일 기간을 설정하면 오래된 잡동사니는 남겨 둘 수 있습니다.

실제 전송 전에 **Dry Run**을 실행하세요. 클라이언트 프로젝트 300 GB를 옮기는 디자이너를 예로 들면, Dry Run은 복사될 모든 파일을 나열해 주므로 몇 시간짜리 전송을 시작하기 전에 폴더 구조를 확인할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud copy from iCloud Drive to pCloud in RcloneView" class="img-large img-center" />

## 전송을 실행하고 진행 상황 추적하기

작업을 시작하고 진행률, 속도, 파일 수를 보여 주는 Transferring 탭을 지켜보세요. 라이브러리가 크다면 최상위 폴더(Documents, Desktop, 프로젝트 폴더)마다 작업을 하나씩 만드세요. 한 묶음이 실패하면 그 묶음만 다시 실행하면 됩니다. 모든 실행은 상태, 전체 크기, 파일 수와 함께 Job History에 기록되므로 무엇을 언제 옮겼는지 기록이 남습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing completed iCloud Drive to pCloud copy runs" class="img-large img-center" />

## Folder Compare로 결과 검증하기

**Compare**를 클릭하고 왼쪽에 iCloud Drive 폴더, 오른쪽에 pCloud 폴더를 엽니다. 왼쪽에만 있는 파일과 다른 파일로 필터링해 누락된 항목을 찾은 다음, **Copy right**로 빠진 파일을 보냅니다. 양쪽이 같다고 표시되면 안심하고 기존 스토리지를 정리할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing iCloud Drive and pCloud folders after migration" class="img-large img-center" />

## 시작하기

RcloneView는 Windows, macOS, Linux에서 하나의 창으로 90개 이상의 제공업체를 마운트하고 동기화합니다.

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. iCloud Drive(내장 rclone v1.69+ 포함)와 OAuth 로그인으로 pCloud를 추가합니다.
3. iCloud Drive에서 pCloud로 가는 Copy 작업을 만들고 Dry Run으로 확인합니다.
4. 작업을 실행한 다음, iCloud 요금제를 낮추기 전에 Folder Compare로 결과를 확인합니다.

폴더별로 검증하는 마이그레이션으로 모든 폴더를 빠짐없이 pCloud로 옮길 수 있습니다.

---

**관련 가이드:**

- [iCloud Drive 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [pCloud 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [iCloud Drive에서 Dropbox로 마이그레이션 — RcloneView로 파일 전송하기](https://rcloneview.com/support/blog/migrate-icloud-drive-to-dropbox-rcloneview)

<CloudSupportGrid />
