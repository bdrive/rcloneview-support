---
slug: migrate-pikpak-to-onedrive-rcloneview
title: "PikPak에서 OneDrive로 마이그레이션 — RcloneView로 파일 전송"
authors:
  - steve
description: "명령줄 작업 없이 클라우드 스토리지를 마이그레이션하는 rclone GUI인 RcloneView로 PikPak의 파일을 OneDrive로 옮기세요."
keywords:
  - pikpak onedrive 마이그레이션
  - pikpak onedrive 전송
  - pikpak onedrive 이전
  - rclone gui pikpak
  - 클라우드 간 마이그레이션 도구
  - pikpak onedrive 백업
  - pikpak 파일 전송
  - rcloneview 마이그레이션
  - pikpak 클라우드 스토리지
  - onedrive 동기화 도구
tags:
  - RcloneView
  - pikpak
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# PikPak에서 OneDrive로 마이그레이션 — RcloneView로 파일 전송

> 로컬 디스크에 먼저 다운로드하지 않고도 PikPak에 모아둔 파일을 OneDrive로 통합하세요.

PikPak은 오프라인 다운로드와 마그넷 링크를 받기에는 인기 있는 서비스지만, 대부분의 사람들이 파일을 장기간 보관하고 싶어하는 곳은 아닙니다 — Microsoft 365와 통합되는 OneDrive가 보통 그 역할을 합니다. 하나에서 다른 하나로 수동으로 옮기려면 로컬 드라이브로 다운로드한 뒤 다시 업로드해야 해서 느리고 중단되기 쉽습니다. RcloneView는 단일 작업으로 두 리모트 사이를 직접 이동시켜 줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## PikPak과 OneDrive를 리모트로 연결하기

**Remote 탭 > New Remote**를 열고 먼저 PikPak을 추가한 다음, 화면에 표시되는 안내에 따라 계정을 인증하세요. 그다음 OneDrive를 추가하세요. RcloneView의 OAuth 브라우저 로그인을 사용하므로 창이 열리면 로그인만 하면 되고, API 키를 복사하거나 붙여넣을 필요 없이 리모트가 자동으로 연결됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 PikPak과 OneDrive를 새 리모트로 추가하는 모습" class="img-large img-center" />

두 리모트가 모두 Remote Manager에 나타나면, 전송을 설정하기 전에 2개 패널 Explorer에서 나란히 열어 올바른 폴더를 보고 있는지 확인하세요.

## 마이그레이션 작업 구성하기

Home 탭에서 **Sync**를 클릭해 4단계 마법사를 실행하세요. Step 1에서 PikPak 폴더를 소스로, 대상 OneDrive 폴더를 목적지로 선택하고, PikPak은 그대로 두고 OneDrive만 복사본을 받도록 **One-way (modifying destination only)**를 선택하세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView에서 PikPak을 OneDrive로 전송하는 작업을 구성하는 모습" class="img-large img-center" />

작은 파일을 많이 옮기는 경우 Step 2에서 파일 전송 수를 늘리고, 특정 콘텐츠만 먼저 옮기고 싶다면 Step 3에서 최대 파일 크기나 확장자 필터를 적용하세요. 실제 전송 전에 **Dry Run**을 실행하면 복사될 항목이 정확히 나열되므로, 시간을 낭비하기 전에 잘못된 폴더 선택을 미리 발견할 수 있습니다.

## 전송 모니터링 및 확인하기

작업을 시작하고 **Transferring** 탭으로 전환해 진행 상황, 속도, 파일 수를 지켜보세요. RcloneView는 하나의 창에서 90개 이상의 제공업체를 마운트하고 동기화할 수 있으므로, PikPak-OneDrive 작업이 백그라운드에서 실행되는 동안 다른 리모트를 계속 확인할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="완료된 PikPak에서 OneDrive로의 마이그레이션을 보여주는 작업 기록" class="img-large img-center" />

작업이 끝나면 **Job History**에서 전송된 총 크기와 파일 수를 확인한 다음, 마이그레이션이 끝났다고 판단하기 전에 **Folder Compare**로 양쪽이 일치하는지 확인하세요.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Remote Manager를 통해 PikPak과 OneDrive 계정을 리모트로 추가하세요.
3. PikPak에서 OneDrive로 가는 단방향 동기화 작업을 만들고 먼저 Dry Run을 실행하세요.
4. 작업을 실행하고 Job History와 Folder Compare로 결과를 확인하세요.

PikPak의 콘텐츠가 OneDrive에 자리 잡으면, OneDrive가 제공하는 협업 기능과 Office 통합을 바로 활용할 수 있습니다.

---

**관련 가이드:**

- [PikPak에서 Google Drive로 마이그레이션](https://rcloneview.com/support/blog/migrate-pikpak-to-google-drive-rcloneview)
- [PikPak, Google Drive, S3 동기화](https://rcloneview.com/support/blog/sync-pikpak-cloud-google-drive-s3-rcloneview)
- [PikPak 동기화 오류 해결](https://rcloneview.com/support/blog/fix-pikpak-sync-errors-rcloneview)

<CloudSupportGrid />
