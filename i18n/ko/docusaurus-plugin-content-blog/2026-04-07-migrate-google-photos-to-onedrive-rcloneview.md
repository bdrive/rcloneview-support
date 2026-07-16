---
slug: migrate-google-photos-to-onedrive-rcloneview
title: "RcloneView로 Google Photos에서 OneDrive로 마이그레이션하기"
authors:
  - tayson
description: "RcloneView를 사용하여 Google Photos 라이브러리를 OneDrive로 마이그레이션하는 단계별 가이드입니다. 읽기 전용 액세스, 폴더 구조, 메타데이터 처리 및 정리 방법을 다룹니다."
keywords:
  - rcloneview
  - google photos to onedrive
  - google photos migration
  - migrate google photos
  - google photos rclone
  - onedrive photos
  - photo migration
  - cloud photo transfer
  - google photos backup
  - google photos export
tags:
  - google-photos
  - onedrive
  - migration
  - cloud-migration
  - cloud-to-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 Google Photos에서 OneDrive로 마이그레이션하기

> 사진 라이브러리는 여러분이 가진 것 중 가장 개인적이고 대체 불가능한 컬렉션입니다. 이를 클라우드 간에 이동하려면 신중한 접근이 필요합니다. **RcloneView**는 조직 구조를 잃지 않고 전체 Google Photos 라이브러리를 OneDrive로 마이그레이션할 수 있는 시각적이고 단계적인 방법을 제공합니다.

Google Photos는 Android와 Google 생태계와의 통합 덕분에 오랫동안 사진 저장의 기본 선택지였습니다. 하지만 상황은 바뀌기 마련입니다. Microsoft 365로 이전하고 있거나, Google 저장 공간이 부족해지거나, Windows와 더 긴밀하게 통합되는 OneDrive를 선호할 수도 있습니다. 이유가 무엇이든, 수천 개(또는 수만 개)의 사진과 동영상이 포함된 사진 라이브러리를 마이그레이션하려면 신뢰할 수 있는 프로세스가 필요합니다.

문제는 Google Photos가 단순한 파일 시스템이 아니라는 점입니다. 전통적인 폴더가 아니라 날짜, 앨범, 메타데이터를 기준으로 사진을 정리합니다. Rclone은 Google Photos를 구조화된 디렉터리로 표현하여 이를 처리하며, RcloneView는 이를 탐색하고 선택하고 OneDrive로 전송할 수 있는 시각적 인터페이스를 제공합니다. 모니터링과 검증 기능도 함께 제공됩니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Google Photos를 리모트로 이해하기

마이그레이션을 시작하기 전에, Google Photos가 RcloneView에서 클라우드 리모트로 어떻게 작동하는지 이해하는 것이 중요합니다.

### 읽기 전용 액세스

Google Photos의 API는 라이브러리에 대해 **읽기 전용 액세스**만 제공합니다. 즉:

- RcloneView를 통해 모든 사진과 동영상을 **탐색하고 다운로드**할 수 있습니다.
- API를 통해서는 Google Photos의 파일을 **삭제, 이름 변경, 수정할 수 없습니다**.
- 이 리모트를 통해서는 Google Photos에 새 파일을 **업로드할 수 없습니다**.

이는 RcloneView의 제한이 아니라 Google API의 제한입니다. 마이그레이션 목적에는 읽기 전용 액세스로 충분합니다. 여러분은 Google Photos에서 데이터를 가져오는 것이지, 거기에 쓰는 것이 아니기 때문입니다.

### 폴더 구조

Google Photos는 라이브러리를 두 가지 주요 디렉터리 유형으로 표시합니다.

- **`media/by-year/`** — 연도별로 정리된 모든 사진(예: `media/by-year/2024/`, `media/by-year/2025/`). 라이브러리의 모든 사진이 시간순으로 정리되어 포함됩니다.
- **`media/by-month/`** — 동일한 사진을 연도와 월 기준으로 정리한 것(예: `media/by-month/2024/2024-06/`).
- **`album/`** — 사용자가 수동으로 만든 앨범. 각 앨범은 해당 사진들이 포함된 폴더로 표시됩니다.

앨범에 있는 사진들은 날짜 기반 디렉터리에도 표시됩니다. 즉, 동일한 사진이 `media/by-year/2024/`와 `album/Vacation/` 아래에 모두 표시되는 등 겉보기에 중복이 발생할 수 있습니다. 마이그레이션 시에는 파일을 두 번 복사하지 않도록 정리 방식을 하나로 선택하는 것이 좋습니다.

## 두 리모트 설정하기

### Google Photos 추가하기

1. RcloneView를 열고 **+ 새 리모트**를 클릭합니다.
2. 제공자 목록에서 **Google Photos**를 선택합니다.
3. OAuth 흐름을 따릅니다. Google로 리디렉션되어 액세스 권한을 승인하게 됩니다. 사진 라이브러리에 대한 읽기 전용 권한을 부여하세요.
4. 리모트 이름을 지정하고(예: `MyGooglePhotos`) 저장합니다.

### OneDrive 추가하기

1. 다시 **+ 새 리모트**를 클릭합니다.
2. 제공자 목록에서 **Microsoft OneDrive**를 선택합니다.
3. OAuth 흐름을 따라 OneDrive 계정에 대한 액세스를 승인합니다.
4. 드라이브 유형(개인, 비즈니스, 또는 SharePoint)을 선택합니다.
5. 리모트 이름을 지정하고(예: `MyOneDrive`) 저장합니다.

이제 두 리모트가 RcloneView의 탐색기에 표시됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## OneDrive의 폴더 구조 계획하기

전송하기 전에 OneDrive에서 사진을 어떻게 정리할지 결정하세요. 몇 가지 옵션이 있습니다.

### 옵션 1: 연도 기반 구조 그대로 복제

Google Photos의 `media/by-year/` 디렉터리를 OneDrive의 `Photos/` 폴더로 복사합니다. OneDrive 구조는 다음과 같이 표시됩니다.

```
Photos/
  2020/
  2021/
  2022/
  2023/
  2024/
  2025/
  2026/
```

이는 가장 단순한 방식이며, 타임라인 뷰로 이미지를 표시할 수 있는 OneDrive의 기본 사진 기능과 잘 어울립니다.

### 옵션 2: 월 기반 정리 사용

더 세밀한 정리를 위해 `media/by-month/`를 복사합니다.

```
Photos/
  2024/
    2024-01/
    2024-02/
    ...
  2025/
    2025-01/
    ...
```

라이브러리가 크고 특정 월의 사진을 빠르게 찾고 싶을 때 유용합니다.

### 옵션 3: 앨범 기반 정리

Google Photos를 앨범으로 꼼꼼하게 정리해두었다면 `album/` 디렉터리를 복사합니다.

```
Photos/Albums/
  Vacation 2024/
  Birthday Party/
  Work Events/
```

앨범 기반 마이그레이션은 어떤 앨범에도 추가되지 않은 사진을 놓칠 수 있다는 점에 유의하세요. 완전한 마이그레이션을 위해서는 이를 날짜 기반 방식 중 하나와 결합하세요.

### 권장 방식

대부분의 사용자에게는 **옵션 1(연도 기반)이 가장 좋은 시작점**입니다. 모든 사진을 깔끔하고 시간순인 구조로 담아냅니다. 앨범이 중요하다면, `album/` 디렉터리만 별도의 폴더로 복사하는 두 번째 작업을 실행하세요.

## 마이그레이션 실행하기

두 리모트를 설정하고 폴더 전략을 정했다면 전송을 시작하세요.

### 1단계: 탐색 및 미리보기

한쪽 탐색기 창에는 Google Photos를, 다른 쪽에는 OneDrive를 엽니다. Google Photos 디렉터리 구조를 탐색하여 연도, 월, 앨범별로 정리된 사진을 확인할 수 있는지 확인하세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

### 2단계: 대상 폴더 만들기

OneDrive 창에서 마이그레이션 대상이 될 `Photos` 폴더(또는 선택한 다른 이름)를 만듭니다.

### 3단계: 테스트 배치로 시작하기

전체 라이브러리를 마이그레이션하기 전에 한 해 분량으로 테스트해보세요.

1. Google Photos 창에서 `media/by-year/2025/`(또는 관리 가능한 개수의 사진이 있는 최근 연도)로 이동합니다.
2. 해당 폴더를 OneDrive의 `Photos/` 디렉터리로 드래그합니다.
3. 사진이 올바르게 도착하는지 전송을 모니터링합니다.
4. OneDrive에서 전송된 사진 몇 개를 열어 올바르게 표시되고 화질이 유지되었는지 확인합니다.

### 4단계: 전체 마이그레이션 실행하기

테스트가 성공하면 나머지 연도를 전송합니다.

1. Google Photos의 `media/by-year/`에서 OneDrive의 `Photos/`로 **복사** 작업을 만듭니다.
2. 먼저 **드라이 런(Dry Run)**을 실행하여 총 파일 수와 예상 전송량을 확인합니다.
3. 복사 작업을 실행합니다.

대규모 라이브러리(사진 10,000개 이상)의 경우 몇 시간이 걸릴 수 있습니다. RcloneView는 실시간으로 진행 상황을 표시합니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

### 5단계: 앨범 마이그레이션(선택 사항)

OneDrive에도 앨범 구조를 반영하고 싶다면:

1. Google Photos의 `album/`에서 OneDrive의 `Photos/Albums/`로 두 번째 복사 작업을 만듭니다.
2. 복사를 실행합니다. 이미 연도 기반 폴더에 존재하는 사진의 복제본이 생성된다는 점에 유의하세요. 저장 공간이 걱정된다면 이 단계를 건너뛰거나 특정 앨범만 선택적으로 복사하는 것이 좋습니다.

## 메타데이터와 파일 형식 이해하기

### 전송되는 것

- **원본 해상도의 사진과 동영상** — 압축된 "저장용량 절약" 버전이 아니라 원본 화질로 전송됩니다.
- **파일 이름** — 원본 카메라 파일명이 유지됩니다(예: `IMG_20240615_143022.jpg`).
- **파일 날짜** — 형식이 지원하는 범위 내에서 생성 및 수정 타임스탬프가 유지됩니다.

### 전송되지 않는 것

- **Google Photos 메타데이터** — 설명, 태그, 얼굴 인식 데이터, Google Photos 데이터베이스에 저장된 위치 정보는 전송되지 않습니다. 이 메타데이터는 Google 플랫폼 고유의 것입니다.
- **Google Photos에서 편집한 내용** — Google Photos에서 사진을 편집(자르기, 필터 적용 등)했다면, API를 통해서는 편집되지 않은 원본 버전만 제공됩니다. 편집된 버전에는 접근할 수 없습니다.
- **공유 앨범 컨텍스트** — 다른 사람이 공유한 사진은 Google의 공유 설정에 따라 접근 가능 여부가 달라질 수 있습니다.

### EXIF 데이터

다행히도 대부분의 중요한 메타데이터는 EXIF 데이터로 사진 파일에 직접 포함되어 있습니다. 여기에는 다음이 포함됩니다.

- 사진이 촬영된 **날짜와 시간**.
- **카메라 모델**과 설정(조리개, 셔터 속도, ISO).
- **GPS 좌표**(사진 촬영 시 위치 정보가 활성화되어 있던 경우).

이 EXIF 데이터는 파일과 함께 전송되며, OneDrive, Windows 사진 앱, 그리고 거의 모든 사진 관리 앱에서 읽을 수 있습니다.

## 마이그레이션 검증하기

전송이 완료된 후, 모든 것이 올바르게 도착했는지 확인하세요.

### 폴더 비교

RcloneView의 **비교** 기능을 사용하세요.

1. 한쪽 창에는 Google Photos를, 다른 쪽에는 OneDrive를 엽니다.
2. 대응하는 디렉터리로 이동합니다(예: `media/by-year/2024/`와 `Photos/2024/`).
3. 비교를 실행하여 Google Photos에는 있지만 OneDrive에는 없는 파일을 확인합니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folder contents" class="img-large img-center" />

### 사진 표본 확인

OneDrive에서 전송된 사진 여러 개를 열어 다음을 확인하세요.

- 이미지가 올바르게 표시되고 손상되지 않았는지.
- 동영상이 정상적으로 재생되는지.
- 파일 크기가 예상과 일치하는지(Google Photos에서 5MB였던 JPEG는 OneDrive에서도 대략 5MB여야 합니다).

### 작업 기록 검토

전송 중 오류가 있었는지 **작업 기록** 패널을 확인하세요. 흔히 발생하는 문제는 다음과 같습니다.

- 파일명에 지원되지 않는 문자가 있어 **건너뛴 파일**.
- 매우 큰 동영상 파일에 대한 **타임아웃 오류**.
- Google API의 **속도 제한**(드물지만 매우 큰 라이브러리에서는 발생 가능).

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="job history" class="img-large img-center" />

## 원활한 마이그레이션을 위한 팁

- **한가한 시간대에 마이그레이션을 실행하세요.** 대규모 사진 라이브러리는 전송에 몇 시간이 걸릴 수 있습니다. 야간에 시작하면 프로세스가 방해받지 않고 진행됩니다.
- **매우 큰 라이브러리에는 예약 기능을 사용하세요.** 사진이 50,000장 이상이라면 매일 실행되는 예약 작업을 만드세요. 매 실행마다 이전에 멈춘 지점부터 이어서 진행되며, 계속 지켜보지 않아도 며칠에 걸쳐 마이그레이션이 완료됩니다.
- **아직 Google Photos를 삭제하지 마세요.** OneDrive 복사본을 완전히 검증할 때까지 Google Photos 라이브러리를 그대로 유지하세요. 어차피 API를 통한 Google Photos 접근은 읽기 전용이므로, RcloneView로 인해 실수로 삭제될 위험은 없습니다.
- **OneDrive 저장 공간 한도를 확인하세요.** OneDrive 요금제에 전체 사진 라이브러리를 저장할 만큼 충분한 공간이 있는지 확인하세요. Microsoft 365 개인 요금제는 1TB를 제공하며, 가족 요금제는 최대 6TB까지 공유할 수 있습니다.
- **OneDrive의 카메라 롤 통합을 고려하세요.** 마이그레이션 후, OneDrive 모바일 앱이 새 사진을 자동으로 업로드하도록 설정할 수 있습니다. 이를 통해 앞으로는 Google Photos에서 매끄럽게 전환할 수 있습니다.
- **Google API 속도 제한에 주의하세요.** Google Photos API에는 사용량 할당량이 있습니다. 속도 제한에 걸리면 RcloneView가 자동으로 재시도하지만, 전송 속도가 일시적으로 느려질 수 있습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 새 리모트 마법사에서 OAuth를 통해 **Google Photos를 연결**하세요(읽기 전용 액세스).
3. OAuth를 통해 **OneDrive를 연결**하세요.
4. **탐색, 복사, 검증**하세요. 여러분의 소중한 사진 추억이 안전하게 마이그레이션됩니다.

여러분의 사진은 대체 불가능합니다. RcloneView는 그 사진들이 OneDrive에 안전하게 도착하도록 보장합니다.

---

**관련 가이드:**

- [OAuth 온라인 로그인 추가](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [폴더 내용 비교](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [작업 실행 및 관리](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)

<CloudSupportGrid />
