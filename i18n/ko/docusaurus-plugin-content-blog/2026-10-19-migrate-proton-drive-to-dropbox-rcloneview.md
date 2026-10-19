---
slug: migrate-proton-drive-to-dropbox-rcloneview
title: "Proton Drive를 Dropbox로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - kai
description: "RcloneView로 Proton Drive를 Dropbox로 마이그레이션하세요: 두 리모트를 연결하고, Dry Run으로 미리 확인한 뒤, 클라우드 간 복사 후 Folder Compare로 결과를 검증합니다."
keywords:
  - Proton Drive Dropbox 마이그레이션
  - Proton Drive Dropbox 전송
  - Proton Drive 파일 Dropbox로 이동
  - RcloneView Proton Drive
  - RcloneView Dropbox
  - 클라우드 간 마이그레이션
  - Proton Drive Dropbox 동기화
  - Proton Drive 파일 전송
tags:
  - RcloneView
  - proton-drive
  - dropbox
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Proton Drive를 Dropbox로 마이그레이션 — RcloneView로 파일 전송하기

> 전송 전에는 미리보기를, 전송 후에는 비교를 거쳐 Proton Drive 파일을 클라우드 간 방식으로 Dropbox에 복사하세요.

Proton Drive에서 Dropbox로 옮기는 이유는 대개 협업입니다. 공유 폴더, 팀원, 그리고 이미 Dropbox에서 쓰고 있는 도구들 때문이죠. 모든 파일을 먼저 노트북에 내려받는 방식은 느리고 여유 디스크 공간도 필요합니다. RcloneView는 한 창에서 두 계정을 연결하고 그 사이에서 직접 복사합니다. RcloneView는 Windows, macOS, Linux에서 한 창으로 90개 이상의 제공자를 마운트하고 동기화합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Proton Drive와 Dropbox 연결하기

Proton Drive는 자격 증명 입력 방식을 사용합니다. 새 리모트를 추가하고 Proton Drive를 선택한 뒤 이메일과 비밀번호를 입력하고, 2단계 인증을 켜 두었다면 2FA 코드도 입력하세요. Proton Drive 지원에는 rclone v1.69 이상이 필요합니다. RcloneView에는 rclone이 내장되어 있으므로, 리모트 생성에 실패하면 하단의 버전을 확인해 보세요.

Dropbox는 브라우저 OAuth를 사용합니다. RcloneView가 로그인 페이지를 열면 접근을 승인하는 것만으로 리모트가 자동으로 연결됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 Proton Drive와 Dropbox 리모트 추가하기" class="img-large img-center" />

## 옮길 대상 선택하기

Proton Drive에 고객 폴더를 두고 있다가 이제 Dropbox로 결과물을 공유하는 프리랜서 컨설턴트를 생각해 보세요. 작업마다 고객 폴더 하나씩 복사하면 각 실행이 짧아 재시도하기도 쉽습니다.

Dropbox에 이미 보관하려는 파일이 있다면 Sync 대신 Copy를 사용하세요. 단방향 동기화는 대상이 원본과 같아지도록 만들기 때문입니다. 마법사의 필터로 파일 크기나 기간을 제한하거나 Document, Image 같은 사전 정의 그룹을 선택할 수 있습니다. 먼저 Dry Run을 실행하세요. 아무것도 변경하지 않고 복사되거나 삭제될 항목을 나열해 줍니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="마이그레이션 전에 Proton Drive와 Dropbox 폴더 비교하기" class="img-large img-center" />

## 전송 및 모니터링

빠르게 복사하려면 Proton Drive 패널의 폴더를 Dropbox 패널로 끌어다 놓으세요. 서로 다른 리모트 간 드래그는 이동이 아니라 복사이므로 원본은 Proton Drive에 그대로 남습니다. 반복 실행이 필요하면 전송을 작업(job)으로 저장하세요.

Transferring 탭에는 속도, 파일 수, 진행률이 표시됩니다. 대용량 아카이브라면 Advanced Settings에서 동시 전송 수를 줄여 어느 서비스도 실행을 중단하지 않도록 하세요. 실패한 실행은 자동으로 재시도됩니다(기본값: 3회).

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Proton Drive에서 Dropbox로의 클라우드 간 전송" class="img-large img-center" />

## 결과 검증하기

복사가 끝나면 두 루트에서 Folder Compare를 실행하세요. 왼쪽에만 있는 파일, 오른쪽에만 있는 파일, 동일한 파일, 다른 파일이 표시되며 누락된 파일은 바로 복사할 수 있습니다. Job History에는 모든 실행의 시작 시간, 소요 시간, 상태, 파일 수가 기록되어 마이그레이션의 명확한 기록이 됩니다.

Proton Drive를 떠난 파일은 Dropbox 고유의 저장소 모델에 따라 저장된다는 점을 기억하세요. 협업자를 초대하기 전에 대상의 공유 설정을 검토하세요.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Proton Drive에서 Dropbox로의 마이그레이션 작업 기록" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Proton Drive 리모트(이메일, 비밀번호, 선택적 2FA)와 Dropbox 리모트(브라우저 로그인)를 추가하세요.
3. 폴더 하나에 Dry Run을 실행한 뒤 복사 작업을 실행하세요.
4. Folder Compare로 검증한 다음 나머지 폴더도 같은 방식으로 반복하세요.

단계별로 검증하며 마이그레이션하면 무엇이 남았는지 걱정하지 않고 Dropbox로 전환할 수 있습니다.

---

**관련 가이드:**

- [Dropbox를 Proton Drive로 마이그레이션](https://rcloneview.com/support/blog/migrate-dropbox-to-proton-drive-rcloneview)
- [Proton Drive를 Google Drive로 마이그레이션](https://rcloneview.com/support/blog/migrate-proton-drive-to-google-drive-rcloneview)
- [Dry Run: 전송 전에 동기화 미리 보기](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
