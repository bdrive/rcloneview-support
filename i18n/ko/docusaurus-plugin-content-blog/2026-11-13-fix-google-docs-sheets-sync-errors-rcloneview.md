---
slug: fix-google-docs-sheets-sync-errors-rcloneview
title: "Google Docs·Sheets 동기화 문제 해결 — RcloneView로 네이티브 파일 다루기"
authors:
  - casey
description: "Google Docs, Sheets, Slides가 계속 다시 복사되거나 다른 파일로 표시되나요? 네이티브 파일이 다르게 동작하는 이유와 RcloneView 동기화 작업에서 처리하는 방법을 알아보세요."
keywords:
  - google docs 동기화 오류
  - google sheets 백업 문제
  - google drive 네이티브 파일 동기화
  - google docs export rclone
  - google docs 필터 rcloneview
  - google drive 백업 docx xlsx
  - rclone drive export 형식
  - rcloneview google drive 동기화 문제 해결
  - google workspace 파일 백업
tags:
  - RcloneView
  - troubleshooting
  - tips
  - google-drive
  - filters
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Docs·Sheets 동기화 문제 해결 — RcloneView로 네이티브 파일 다루기

> Google Docs, Sheets, Slides는 일반 파일이 아니며, 이 차이를 무시하는 백업 작업은 계속해서 예상치 못한 결과를 냅니다.

Google Drive를 NAS나 다른 클라우드로 백업하면 작업은 끝나지만 — Docs와 Sheets가 Word·Excel 파일로 나타나거나, Folder Compare가 매번 다른 파일로 표시하거나, 다음 실행 때 다시 복사 목록에 올라옵니다. 그렇다고 전송이 고장 난 것은 아닙니다. RcloneView는 이런 작업을 rclone으로 실행하며, rclone이 Google 네이티브 문서를 어떻게 다루는지 이해하면 원하는 동작을 직접 선택할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 네이티브 Google 파일이 다르게 동작하는 이유

Google Doc은 Google 편집기 안에만 존재하며, 그 뒤에 저장된 바이너리 파일이 없습니다. rclone이 Google Drive에서 Google이 아닌 대상으로 문서를 복사할 때는 다운로드 가능한 형식으로 내보내며, 기본값은 `.docx`, `.xlsx`, `.pptx` 같은 Office 형식입니다.

이 변환에는 부작용이 있습니다. Drive는 네이티브 문서의 고정 크기를 보고하지 않으므로, 크기 기반 비교로는 내보낸 사본과 맞출 수 없습니다. 또한 Drive는 이 문서들의 MD5 해시를 저장하지 않으므로, 동기화 작업에서 체크섬을 켜도 검증할 수 없습니다. 그 결과 확인할 때마다 "다르다"고 보이는 파일들이 생깁니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare showing Google Docs flagged as different files" class="img-large img-center" />

## 옵션 1: 파일 백업에서 네이티브 문서 제외하기

팀에서 업로드된 파일 — PDF, 이미지, 동영상 — 만 백업하면 된다면, 가장 깔끔한 해결책은 네이티브 문서를 빼는 것입니다. 동기화 마법사의 Step 3에서 미리 정의된 **Google Docs** 필터를 켜세요. 그러면 작업은 일반 파일에 집중하고, 비교할 수 없는 문서를 다시 나열하지 않습니다.

첫 실제 실행 전에 **Dry Run**을 함께 사용하세요. 미리보기에 복사될 파일이 정확히 나열되므로, Docs와 Sheets가 더 이상 대기열에 없는지 확인할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Google Drive sync job with the Google Docs filter applied" class="img-large img-center" />

## 옵션 2: 내보낸 사본을 의도적으로 보관하기

때로는 내보낸 사본 자체가 목적입니다 — 회계 사무소라면 모든 스프레드시트를 Google 계정 없이 열 수 있도록 NAS에 `.xlsx`로 보관하고 싶을 수 있습니다. 이 경우 네이티브 파일을 작업에 포함하고, 변환된 사본을 아카이브로 취급하세요.

내보내기 형식은 rclone 플래그로 바꿀 수 있습니다. Settings의 **Global Rclone Flags** 필드에 `--drive-export-formats` 같은 추가 플래그를 넣을 수 있습니다(예: 읽기 전용 아카이브용 `pdf`). 이 플래그는 Google Drive를 다루는 모든 작업에 적용되므로, 먼저 작은 폴더에서 Dry Run으로 테스트하세요.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring a recurring Google Drive export job in RcloneView" class="img-large img-center" />

## Job History에서 결과 확인하기

실행할 때마다 Job History를 열어 상태, 파일 수, 총 크기를 확인하세요. 실행 간에 수치가 예상과 다르게 크게 바뀌면 Step 3의 필터 규칙을 다시 점검하세요.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Google Drive job results in Job History" class="img-large img-center" />

## 시작하기

마운트 전용 도구와 달리, RcloneView는 FREE 라이선스에서도 동기화와 폴더 비교를 지원합니다.

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. OAuth 브라우저 로그인으로 Google Drive를 연결합니다.
3. 네이티브 Docs를 Google Docs 필터로 제외할지, Office 파일로 내보낼지 결정합니다.
4. Dry Run으로 작업을 미리 확인하고 실행한 뒤, Job History에서 결과를 확인합니다.

네이티브 파일을 의도적으로 처리하면 Google Drive 백업에서 잘못된 경고가 더 이상 나오지 않습니다.

---

**관련 가이드:**

- [Google Drive 동기화 오류 해결 — RcloneView로 누락된 폴더, 실패한 작업, 빈 목록 문제 해결하기](https://rcloneview.com/support/blog/fix-google-drive-sync-errors-rcloneview)
- [RcloneView 필터 규칙: 폴더와 파일 형식을 제외해 더 빠르고 깔끔하게 동기화하기](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Dry Run 미리보기 — RcloneView에서 변경 적용 전에 클라우드 동기화 테스트하기](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)

<CloudSupportGrid />
