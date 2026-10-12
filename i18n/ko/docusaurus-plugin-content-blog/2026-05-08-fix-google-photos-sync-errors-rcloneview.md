---
slug: fix-google-photos-sync-errors-rcloneview
title: "Google Photos 동기화 오류 해결 — RcloneView에서 라이브러리가 비어 보이는 문제, 403 Forbidden, 읽기 전용 오류"
authors:
  - steve
description: "RcloneView에서 발생하는 Google Photos 오류의 해결 방법 — 리모트가 비어 있거나 변경 사항이 없다고 표시되는 경우, 폐기된 클라이언트 ID 또는 요청 제한으로 인한 403 Forbidden, 읽기 전용 대상 오류, 업로드 후 파일이 보이지 않는 문제를 다룹니다."
keywords:
  - Google Photos sync errors RcloneView
  - Google Photos empty folder rclone
  - Google Photos 403 client ID
  - fix Google Photos backup issues
  - Google Photos rclone errors
  - Google Photos API quota error
  - RcloneView Google Photos troubleshoot
  - Google Photos upload problems
  - Google Photos backup fix
tags:
  - RcloneView
  - google-photos
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Photos 동기화 오류 해결 — RcloneView에서 라이브러리가 비어 보이는 문제, 403 Forbidden, 읽기 전용 오류

> Google Photos에는 다른 클라우드 드라이브에 없는 API 제약이 있습니다. RcloneView에서 마주치는 대부분의 "오류"는 Google의 정책이 적용된 결과입니다. 각 오류가 무엇을 의미하고 어떻게 대처해야 하는지 알아봅니다.

Google Photos는 개인 사진 저장소로 인기가 높지만, rclone 백엔드의 동작은 일반적인 클라우드 드라이브와 크게 다릅니다. 2025년 3월 31일부터 Google Photos API는 서드파티 앱에 해당 앱이 직접 업로드한 미디어만 보여 줍니다. 기존 미디어는 API로 수정하거나 삭제할 수 없으며, 요청 제한도 Google Drive보다 엄격합니다. 이러한 제약을 이해하는 것이 RcloneView에서 Google Photos를 사용할 때 발생하는 오류를 해결하는 첫걸음입니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 리모트가 비어 보이는 경우 — "No Changes Detected" 또는 복사된 파일 0개

가장 흔한 문의는 다음과 같습니다. Google Photos 리모트를 추가하고 탐색기에서 열었더니 거의 아무것도 없거나, NAS로 보내는 Copy 작업이 몇 초 만에 끝나면서 전송된 파일이 0개인 경우입니다. 고장 난 것이 아닙니다. 2025년 3월 31일에 Google이 서드파티 앱이 사용자의 전체 라이브러리를 읽을 수 있게 하던 API 범위(scope)를 제거했습니다. Google의 표현을 빌리면, 앱은 "이제 앱이 만든 앨범과 미디어 항목만 나열, 검색, 조회할 수 있습니다"(원문: "can now only list, search, and retrieve albums and media items that were created by your app."). 따라서 RcloneView는 RcloneView 또는 rclone을 통해 업로드한 사진만 볼 수 있습니다. 휴대폰이나 웹에서 올린 사진은 보이지 않으며, 공유 앨범은 `403 PERMISSION_DENIED`를 반환합니다.

RcloneView 1.6 이상에서는 Google Photos 리모트를 열 때 이 제한을 앱 안에서 안내하므로, 더 이상 빈 계정처럼 보이지 않습니다.

해결 방법: **Google Takeout**으로 기존 라이브러리를 내보내고(가능하면 Google Drive로 받는 것이 좋습니다), RcloneView로 그 내보내기 파일을 외장 드라이브, NAS 또는 다른 클라우드 스토리지에 복사하세요. 전체 과정은 [Google Photos를 외장 드라이브 또는 NAS에 백업하는 방법](https://rcloneview.com/support/blog/backup-google-photos-external-drive-nas-rcloneview)에서 확인할 수 있습니다.

## 오류: "403 Forbidden" — 폐기된 클라이언트 ID 또는 요청 제한

Google Photos의 `403`에는 서로 다른 두 가지 원인이 있습니다. RcloneView의 **Log 탭**에서 확인하여 구분하세요.

**연결 또는 목록 조회 중 발생하는 403 — 공유 클라이언트 ID.** rclone에 내장된 Google Photos 클라이언트 ID는 2026년 중에 폐기될 예정이며, Google은 이제 사용자마다 자신의 OAuth 클라이언트 ID로 연결하도록 요구합니다. 리모트가 연결되지 않거나 모든 요청이 거부된다면 이것이 원인입니다. RcloneView 1.6 이상은 연결에 실패할 때 연결 마법사에서 자신만의 클라이언트 ID를 만드는 과정을 안내합니다. rclone의 [Google Photos 문서](https://rclone.org/googlephotos/#making-your-own-client-id)에도 Google Cloud Console에서의 동일한 절차가 설명되어 있습니다.

**업로드 중 `userRateLimitExceeded`와 함께 발생하는 403 — 쓰기 할당량.** Google은 API를 통한 사진 업로드에 사용자별 일일 한도를 두고 있어, 수천 장의 사진을 한꺼번에 업로드하면 전송 도중 한도에 걸릴 수 있습니다. 전송 동시성을 낮추세요. 작업의 Advanced Settings에서 파일 전송 수를 2~3으로 설정하고, **Retry on failure**(재시도 5회 이상)를 활성화하면 제한된 업로드를 작업 전체가 실패하는 대신 RcloneView가 다시 시도합니다. 매우 큰 업로드는 필요하면 며칠에 걸쳐 나누어 진행하세요.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneView에서 Google Photos 업로드 속도 모니터링" class="img-large img-center" />

## 오류: "Can't Copy — Destination is Read Only"

읽기 전용 대상에 관한 오류가 보인다면, 양방향 동기화를 시도하거나 Google Photos에 이미 있는 사진을 덮어쓰려는 것입니다. Google Photos API는 rclone을 통한 기존 미디어의 수정이나 삭제를 허용하지 않으며, RcloneView도 이 제한을 따릅니다.

해결책은 작업을 소스에서 Google Photos로 향하는 단방향 **Copy**(Sync가 아님)로 구성하는 것입니다. 이렇게 하면 Google Photos 쪽의 어떤 것도 삭제하거나 덮어쓰지 않고 새 파일만 업로드합니다. 사진을 삭제해야 한다면 Google Photos 웹 앱이나 모바일 앱에서 직접 삭제하세요.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView에서 Google Photos로 향하는 Copy 작업 구성" class="img-large img-center" />

## 업로드 후 파일이 보이지 않는 경우

Google Photos는 원래의 폴더 구조가 아니라 앨범과 생성 날짜를 기준으로 미디어를 정리합니다. 폴더 계층을 Google Photos로 복사하면 파일은 라이브러리에 들어가지만 기대한 폴더는 유지되지 않습니다. API가 폴더 구조를 보존하지 않기 때문입니다. 또한 API를 통해 다시 내려받은 사진은 원본 해상도가 아니며 EXIF 위치 정보가 사라진다는 점에도 유의하세요.

폴더 구성을 유지하려면 하위 디렉터리가 소스와 똑같이 보존되는 Google Drive로 복사하세요. 진정한 사진 아카이브가 목적이라면 원본 폴더 트리를 그대로 복사해 둔 Backblaze B2나 Amazon S3가 장기적으로 더 믿을 만한 선택입니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Google Photos 작업 후 작업 기록 확인" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. 리모트가 비어 보인다면 Google의 API 제한 때문입니다. Google Takeout으로 기존 라이브러리를 내보낸 뒤 RcloneView로 그 내보내기 파일을 복사하세요.
3. 연결 시 403이 발생하면 자신만의 OAuth 클라이언트 ID를 만들고, `userRateLimitExceeded`가 발생하면 동시성을 2~3으로 낮추고 재시도 횟수를 늘리세요.
4. Google Photos로 업로드할 때는 Sync가 아닌 **Copy** 작업 유형을 사용하세요.

어떤 Google 정책에 걸렸는지 알면 RcloneView를 처음부터 올바르게 구성하여 답답한 재시도 반복을 피할 수 있습니다.

---

**관련 가이드:**

- [Google Photos를 외장 드라이브 또는 NAS에 백업하는 방법 — Google Takeout + RcloneView](https://rcloneview.com/support/blog/backup-google-photos-external-drive-nas-rcloneview)
- [Google Drive 할당량 및 요청 제한 오류 해결](https://rcloneview.com/support/blog/fix-google-drive-quota-rate-limit-api-errors)
- [브라우저 로그인(OAuth)으로 리모트 추가하기](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)

<CloudSupportGrid />
