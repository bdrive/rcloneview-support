---
slug: backup-google-photos-external-drive-nas-rcloneview
title: "Google Photos를 외장 드라이브나 NAS에 백업하는 방법 — Google Takeout + RcloneView"
authors:
  - tayson
description: "Google Photos는 더 이상 서드파티 앱이 기존 라이브러리를 다운로드하도록 허용하지 않습니다. Google Takeout으로 Google Drive에 내보낸 뒤, RcloneView로 그 내보내기 파일을 외장 드라이브, NAS 또는 다른 클라우드에 복사하고, RcloneView Mobile로 새 사진을 계속 백업하세요."
keywords:
  - google 포토 백업
  - google 포토 외장 드라이브
  - google 포토 nas
  - google takeout nas
  - google takeout 백업
  - google photos rclone
  - google 포토 api 제한
  - google 포토 로컬 저장
  - google 포토 내보내기
  - rcloneview mobile 사진 백업
tags:
  - RcloneView
  - google-photos
  - backup
  - cloud-storage
  - sync
  - nas
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Photos를 외장 드라이브나 NAS에 백업하는 방법 — Google Takeout + RcloneView

> 2025년 3월 31일부터 Google Photos는 rclone과 RcloneView를 포함한 서드파티 앱이 직접 업로드한 사진만 볼 수 있도록 제한합니다. 기존 라이브러리를 꺼내는 확실한 방법은 Google Takeout이며, 그 이후는 RcloneView가 이어받습니다.

Google Photos에는 대체할 수 없는 수년간의 사진과 동영상이 담겨 있지만, 저장 용량 한도, 계정 잠금, 정책 변경 등으로 언제든 접근이 막힐 수 있습니다. 이 글의 이전 버전을 포함해 많은 가이드가 Google Photos를 동기화 도구에 연결해 전부 다운로드하라고 안내했습니다. 하지만 Google이 2025년에 그 길을 닫아 버려 이제는 통하지 않습니다.

이 가이드는 지금도 동작하는 방법을 보여 드립니다. **Google Takeout**으로 라이브러리를 Google Drive에 바로 내보내고, **RcloneView**로 그 내보내기 파일을 외장 드라이브, NAS 또는 다른 클라우드에 복사한 다음, **RcloneView Mobile**을 사용해 앞으로의 새 사진은 Google Photos를 거치지 않도록 하세요.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 무엇이 바뀌었나: Google Photos API 제한 (2025)

2025년 3월 31일, Google은 Photos Library API에서 전체 라이브러리 범위(scope)를 제거했습니다. Google의 표현을 빌리면, 서드파티 앱은 "이제 앱이 생성한 앨범과 미디어 항목만 나열, 검색, 조회할 수 있습니다." 공유 앨범 호출은 `403 PERMISSION_DENIED`를 반환합니다.

RcloneView에서 **Google Photos** 리모트를 추가하면 다음과 같은 일이 생깁니다.

- **리모트가 거의 비어 보입니다.** RcloneView나 rclone을 통해 업로드한 사진만 표시됩니다. 휴대폰 업로드, 웹 업로드 등 라이브러리의 나머지 모든 항목은 API에서 보이지 않으므로, 복사(Copy) 작업은 "변경 사항 없음"으로 보고하거나 파일을 0개 복사합니다.
- **연결 문제가 아닙니다.** RcloneView 1.6 이상에서는 Google Photos 리모트를 열 때, 빈 계정처럼 보여 주는 대신 앱 안에서 이 제한을 설명해 줍니다.
- **공유 앨범은 전혀 접근할 수 없습니다.**
- **직접 만든 OAuth 클라이언트 ID가 필요합니다.** rclone의 공용 Google Photos 클라이언트 ID는 2026년 중에 폐기됩니다. 연결할 수 없을 때는 RcloneView 연결 마법사가 클라이언트 ID 생성 과정을 안내합니다.

기존 라이브러리를 내보내는 Google의 공식 방법은 **Google Takeout**이므로, 백업은 여기서부터 시작합니다.

## 1단계: Google Takeout으로 라이브러리 내보내기

1. [takeout.google.com](https://takeout.google.com)을 열고 사진을 소유한 계정으로 로그인합니다.
2. **모두 선택 해제**를 클릭한 다음 **Google Photos**만 선택합니다. 큰 라이브러리를 여러 번에 나누어 내보내려면 **모든 사진 앨범 포함**에서 특정 앨범이나 연도로 범위를 제한할 수 있습니다.
3. **대상**(Destination)에서 **Drive에 추가**를 선택합니다. Google이 내보내기 파일을 Google Drive의 `Takeout` 폴더에 넣어 주며, RcloneView가 여기에 바로 접근할 수 있습니다. Dropbox, OneDrive, Box도 선택할 수 있고(RcloneView는 세 곳 모두 지원합니다), 컴퓨터에서 복사하려면 **이메일로 다운로드 링크 보내기**도 사용할 수 있습니다.
4. 아카이브 형식(`.zip`)과 크기(1GB~50GB)를 고릅니다. 아카이브가 클수록 다룰 파일 수가 줄어듭니다.
5. **내보내기 만들기**를 클릭합니다. 준비되면 Google이 이메일로 알려 주며, 라이브러리가 크면 몇 시간에서 며칠까지 걸릴 수 있습니다.

시작하기 전에 알아 둘 점은 다음과 같습니다.

- 각 사진과 동영상은 원본 화질로 제공되며, 촬영 날짜, 설명, 위치가 담긴 `.json` 메타데이터 파일이 함께 들어 있습니다.
- Google Drive에 추가된 내보내기 파일은 삭제하기 전까지 Google 저장 용량에 포함됩니다. Drive에 여유 공간이 있는지 확인하거나, 나누어 내보내세요.
- Takeout은 증분 모드가 없는 일회성 내보내기입니다. 반복하지 않고 앞으로의 사진을 계속 백업하는 방법은 4단계에서 다룹니다.

## 2단계: RcloneView에서 Google Drive 추가

1. RcloneView를 열고 리모트 관리자(Remote Manager)에서 **Add Remote**를 클릭합니다.
2. **Google Drive**를 선택하고 [브라우저 기반 OAuth 로그인](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)을 완료합니다.
3. [탐색기(Explorer)](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)에서 리모트를 열고 `Takeout` 폴더로 이동합니다. 내보내기마다 별도의 `.zip` 파일이 생성되며, 라이브러리가 크면 여러 개로 나뉩니다.

<img src="/support/images/en/blog/open-multiple-google-drive-remotes.png" alt="Google Drive remote with the Takeout folder open in RcloneView Explorer" class="img-large img-center" />

## 3단계: 내보내기 파일을 백업 대상에 복사

RcloneView는 아카이브를 압축 해제하지 않고 그대로 복사하므로, 복사가 끝난 뒤 대상 컴퓨터에서 한 번 압축을 풀면 됩니다.

### 외장 하드 드라이브

1. 드라이브를 연결하고 경로를 확인합니다(Windows는 `E:\`, macOS는 `/Volumes/...`, Linux는 `/media/...`).
2. [복사(Copy) 작업](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)을 만듭니다. **소스** = Google Drive 리모트의 `Takeout` 폴더, **대상** = 드라이브의 폴더.
3. 작업을 실행한 뒤 드라이브에서 아카이브의 압축을 풉니다.

동기화(Sync)가 아니라 **복사**(Copy)를 사용하세요. 복사 작업은 대상에 있는 어떤 것도 삭제하지 않습니다.

### Synology NAS

RcloneView는 네트워크의 [Synology NAS 장치를 자동으로 감지](https://rcloneview.com/support/tutorials/synology-nas-cloud-transfer)하므로, 별도 설정 없이 로컬 탭에 NAS가 나타납니다.

1. `Takeout` 폴더를 소스로, NAS의 공유 폴더(예: `/photos/google-takeout`)를 대상으로 하는 복사 작업을 만듭니다.
2. 작업을 실행한 뒤 NAS에서 아카이브의 압축을 풉니다.

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="Synology NAS auto-detected in RcloneView for the Google Takeout copy" class="img-large img-center" />

### 다른 클라우드

오프사이트 사본을 원하시나요? 복사 작업의 대상을 Amazon S3, Backblaze B2, Wasabi, OneDrive 등 다른 리모트로 지정하세요. RcloneView는 rclone 엔진을 통해 클라우드에서 클라우드로 데이터를 이동하므로, 아카이브가 컴퓨터의 저장소를 거치지 않아도 됩니다.

### 검증 및 정리

- [폴더 비교(Folder Comparison)](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)를 사용해 모든 아카이브가 같은 크기로 도착했는지 확인합니다.
- [작업 기록(Job History)](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job#view-job-history)에서 전송 로그를 확인합니다.
- 복사가 검증되면 Google Drive에서 `Takeout` 폴더를 삭제해 차지하던 저장 용량을 되찾습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Comparison between the Takeout export and the NAS copy" class="img-large img-center" />

## 4단계: RcloneView Mobile로 새 사진 계속 백업

Takeout은 증분 실행이 불가능하므로 매달 반복하는 것은 해법이 아닙니다. 지금부터 찍는 사진은 Google Photos를 거치지 않도록 하세요.

- **RcloneView Mobile**(Android 및 iOS)은 휴대폰의 사진과 동영상을 중간 서버 없이 사용자 본인의 클라우드로 직접 백업합니다. 데스크톱의 RcloneView에서 쓰는 것과 같은 리모트를 사용합니다. 사진 백업은 RcloneView Plus에 포함되어 있습니다. [다운로드 페이지](https://rcloneview.com/src/download.html)에서 받으세요.
- 데스크톱에서는 예약된 복사 작업(PLUS 기능, [작업 스케줄링](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution) 참고)이 그 클라우드 폴더를 NAS나 외장 드라이브에 매일, 매주 등 원하는 주기로 미러링합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling the recurring copy from the cloud photo folder to the NAS" class="img-large img-center" />

Google Photos가 다운로드 가능 여부를 좌우하지 않아도, 휴대폰, 클라우드, NAS가 계속 같은 상태를 유지합니다.

## Google Photos 리모트의 남은 쓰임새

이 리모트가 쓸모없어진 것은 아니며, 반대 방향으로 동작할 뿐입니다.

- **업로드.** NAS나 컴퓨터에서 리모트의 `upload` 폴더 또는 앨범으로 복사 작업을 실행하면 해당 사진이 Google Photos 라이브러리에 추가되고, Google Photos 앱에서 다른 업로드와 똑같이 표시됩니다.
- **RcloneView가 업로드한 항목 다시 읽기.** RcloneView를 통해 올린 것은 무엇이든 나열하고 다시 복사해 나갈 수 있습니다.
- **주의 사항.** API를 통한 다운로드는 원본 해상도가 아니며 EXIF 위치 데이터가 제거됩니다. 따라서 Google Photos는 편리한 뷰어로만 여기고 아카이브로 삼지 마세요. 또한 직접 만든 OAuth 클라이언트 ID가 여전히 필요합니다.

## 시작하기

1. Google Takeout으로 Google Photos 라이브러리를 **내보내고**, Google Drive로 전달받습니다.
2. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**(Windows, macOS, Linux)하고 Google Drive를 리모트로 추가합니다.
3. `Takeout` 폴더에서 외장 드라이브, NAS 또는 다른 클라우드로 **복사 작업을 만들고**, 그곳에서 아카이브의 압축을 풉니다.
4. 폴더 비교로 복사본을 **검증**하고 Drive에서 내보내기 파일을 삭제합니다.
5. **RcloneView Mobile을 설치**해 새 사진이 본인의 클라우드로 바로 가도록 하고, 이를 NAS로 미러링하는 데스크톱 작업을 예약합니다.

사진은 대체할 수 없습니다. 한 번의 내보내기와 하나의 예약 작업이면 어떤 정책 변경으로도 빼앗기지 않는 사본을 갖게 됩니다.

---

**관련 가이드:**

- [RcloneView에서 Google Photos 동기화 오류 해결하기](https://rcloneview.com/support/blog/fix-google-photos-sync-errors-rcloneview)
- [브라우저 기반 로그인(OAuth)으로 리모트 추가](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [리모트 탐색 및 관리](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [폴더 내용 비교](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [동기화 작업 만들기](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [작업 스케줄링](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Synology NAS 자동 감지 및 연결](https://rcloneview.com/support/tutorials/synology-nas-cloud-transfer)

<CloudSupportGrid />
