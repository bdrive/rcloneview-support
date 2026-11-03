---
slug: fix-google-drive-sync-errors-rcloneview
title: "Google Drive 동기화 오류 해결 — RcloneView로 누락된 폴더, 실패한 작업, 비어 있는 목록 해결하기"
authors:
  - steve
description: "RcloneView 로그와 Folder Compare를 사용해 공유 폴더 누락, 비어 있는 Computers 목록, 오류가 발생한 작업 등 Google Drive 동기화 오류를 해결하세요."
keywords:
  - Google Drive 동기화 오류 해결
  - Google Drive rclone 오류
  - Google Drive 공유 문서함 누락
  - Google Drive Computers 폴더 비어 있음
  - Google Drive 동기화 실패
  - RcloneView Google Drive
  - Google Docs 동기화 필터
  - Google Drive 문제 해결
  - 클라우드 동기화 문제 해결
  - Google Drive GUI
tags:
  - RcloneView
  - google-drive
  - troubleshooting
  - tips
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive 동기화 오류 해결 — RcloneView로 누락된 폴더, 실패한 작업, 비어 있는 목록 해결하기

> 많은 Google Drive 동기화 문제는 누락된 설정, 만료된 로그인 또는 필터에서 비롯되며, RcloneView는 그 원인을 찾는 데 도움이 됩니다.

Google Drive 작업이 Errored로 끝나거나 리모트에 기대한 항목이 표시되지 않는 경우, 로그를 확인하면 원인이 의외로 간단한 경우가 많습니다. 흔한 원인은 특정 설정이 필요한 공유 폴더, 폴더 ID가 필요한 백업된 컴퓨터, 일반 파일과 다르게 동작하는 Google Docs 파일입니다. RcloneView는 리모트 설정, 작업 기록, 로그를 한곳에 모아 두어 원인을 빠르게 좁힐 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 표시되지 않는 폴더

공유받은 파일이 루트 목록에 보이지 않는다면 리모트에 `shared_with_me = true` 설정이 필요할 수 있으며, 이 설정으로 Google Drive Shared with Me 보기를 사용할 수 있습니다. Drive for desktop에서 백업된 컴퓨터는 별도의 경우입니다. Google Drive Computers 리모트는 `root_folder_id`를 해당 컴퓨터의 ID로 설정해야 합니다.

Remote 탭에서 Remote Manager를 열고 리모트를 편집하여 이 값들을 확인하세요. 그런 다음 F5로 Explorer 패널을 새로 고칩니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView Remote Manager에서 Google Drive 리모트 설정 편집" class="img-large img-center" />

## 만료된 로그인과 실패한 인증

Google Drive는 브라우저 OAuth로 연결됩니다. 모든 요청이 인증 오류로 실패한다면 리모트를 편집하고 다시 로그인하여 새 토큰을 발급받으세요. 이전에 잘 작동하던 리모트가 갑자기 실패할 때 흔히 쓰이는 해결 방법입니다.

할당량 및 속도 제한 메시지는 Google Drive 속도 제한과 저장 용량 할당량에 대한 전용 가이드를 참고하세요. 어느 경우든 동기화 마법사 2단계에서 파일 전송 수를 낮추는 것이 합리적인 첫 번째 조치입니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView Job History에서 오류가 발생한 Google Drive 동기화 확인" class="img-large img-center" />

## 로그에서 정확한 오류 확인하기

Job History를 열어 작업이 즉시 실패했는지 중간에 실패했는지 확인하세요. 자세한 정보가 필요하면 Settings > Embedded Rclone으로 이동해 rclone 로깅을 활성화하고 레벨을 DEBUG로 설정한 뒤 Restart Embedded Rclone을 클릭합니다. 오류를 재현하고 로그를 읽어 보면 파일과 오류가 표시됩니다. 내장 Terminal 탭에서 `rclone about "remote:"` 같은 명령을 실행해 연결 상태를 확인할 수도 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="설정 수정 후 Google Drive 작업 다시 실행" class="img-large img-center" />

## Google Docs 처리와 결과 확인

Google Docs, Sheets, Slides는 일반 파일이 아니므로 전송 후 다르게 보일 수 있습니다. 제외하려면 동기화 마법사 3단계에 미리 정의된 Google Docs 필터가 있습니다. 다시 실행한 후 Compare로 양쪽을 확인하세요. 왼쪽에만 있는 파일, 오른쪽에만 있는 파일, 다른 파일을 보면 아직 처리가 필요한 항목을 알 수 있습니다. 파일을 삭제할 수 있는 동기화 전에는 Dry Run을 실행하세요.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare로 Google Drive 동기화 결과 확인" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 리모트에 `shared_with_me` 또는 `root_folder_id`가 있는지 확인하고, 필요하면 다시 인증하세요.
3. Job History를 검토하고 오류가 발생한 작업에 대해 DEBUG 로깅을 활성화하세요.
4. Dry Run을 실행하고 작업을 다시 실행한 뒤 Folder Compare로 확인하세요.

설정, 로그, 비교 기능이 한 창에 있어 실패한 Drive 작업도 짧은 체크리스트로 정리됩니다.

---

**관련 가이드:**

- [Google Drive 스토리지 관리 — RcloneView로 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [RcloneView로 Google Drive 403 속도 제한 오류 해결](https://rcloneview.com/support/blog/fix-google-drive-403-rate-limit-errors-rcloneview)
- [RcloneView로 Google Drive 저장 용량 초과 해결](https://rcloneview.com/support/blog/fix-google-drive-storage-quota-exceeded-rcloneview)

<CloudSupportGrid />
