---
slug: max-folder-depth-file-size-filters-rcloneview
title: "최대 폴더 깊이와 최대 파일 크기 필터 — RcloneView에서 동기화 대상 제어하기"
authors:
  - kai
description: "RcloneView의 Max folder depth와 Max file size 필터로 깊은 하위 폴더와 너무 큰 파일을 건너뛰어 클라우드 동기화 작업을 빠르고 목적에 맞게 유지하세요."
keywords:
  - 최대 폴더 깊이 동기화
  - 최대 파일 크기 필터
  - rclone max depth GUI
  - 클라우드 동기화에서 대용량 파일 건너뛰기
  - 동기화 폴더 단계 제한
  - RcloneView 동기화 필터
  - 백업에서 대용량 파일 제외
  - 선택적 클라우드 동기화
  - 얕은 폴더 동기화
tags:
  - RcloneView
  - feature
  - filters
  - cloud-sync
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 최대 폴더 깊이와 최대 파일 크기 필터 — RcloneView에서 동기화 대상 제어하기

> 동기화 마법사의 두 숫자 필드가 작업이 얼마나 깊이 들어갈지, 그리고 파일이 얼마나 커야 제외될지를 결정합니다.

모든 동기화 작업에 전체 트리가 필요한 것은 아닙니다. 디자인 팀은 클라이언트의 Dropbox에서 중첩된 작업 폴더 전부가 아니라 최상위 납품 폴더만 원할 수 있습니다. Documents를 OneDrive에 백업하는 가정 사용자는 30 GB짜리 디스크 이미지 몇 개를 빼고 싶을 수 있습니다. RcloneView는 동기화 마법사 3단계의 **Max folder depth**와 **Max file size**로 두 경우를 모두 처리하며, 두 기능 모두 FREE License에서 사용할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Max Folder Depth: 작업이 들어가는 깊이 제한하기

Max folder depth는 소스 아래 몇 단계의 폴더까지 작업이 처리할지를 정합니다. 그보다 깊은 항목은 건너뜁니다. 값을 낮게 설정하면 크고 넓게 퍼진 소스를 상위 몇 단계만 동기화하는 얕은 작업으로 바꿀 수 있습니다.

중요한 파일이 상위에 모여 있을 때 유용합니다. 예를 들어 에이전시의 `Clients/` 폴더에는 클라이언트별 폴더와 최종 납품물이 있고, 그 아래로 열 단계 깊이까지 이어지는 `working/`, `cache/` 트리가 있을 수 있습니다. 깊이 제한을 사용하면 긴 제외 규칙 목록 없이도 납품물은 유지하고 잡동사니는 건너뛸 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a remote in RcloneView before configuring a depth-limited sync job" class="img-large img-center" />

깊이 제한은 아무 알림 없이 적용됩니다. 테스트 실행에서 남겨 둔 깊이 제한이 있으면 이후 동기화에서 더 깊은 하위 폴더가 오류 없이 빠지게 됩니다. 대상에서 파일이 누락되었다면 먼저 이 필드를 확인하세요.

## Max File Size: 너무 큰 파일 제외하기

Max file size는 MB 단위로 입력하며, 이 값보다 큰 파일은 제외됩니다. 일반적인 활용 예:

- 작업 폴더를 백업할 때 ISO 이미지, VM 디스크, 원본 동영상을 제외합니다.
- 용량이 작은 무료 요금제 계정으로의 동기화를 한도 내로 유지합니다.
- 가끔 생기는 거대한 내보내기 파일을 건너뛰어 야간 사무 파일 작업을 빠르게 유지합니다.

이 필드는 상한만 설정합니다. 크기와 관계없이 특정 파일 형식을 제외하려면 같은 단계에서 `.iso` 같은 사용자 지정 규칙을 추가하세요.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job with file size filters in RcloneView Job Manager" class="img-large img-center" />

## 다른 필터와 함께 사용하기

두 필드는 3단계의 나머지 항목과 함께 작동합니다. Max file age(단위 `y`, `d`, `h`, `m`, `s`), 미리 정의된 Music, Video, Image, Document, Google Docs, Box Docs 필터, 그리고 사용자 지정 규칙입니다. 예를 들어 50 MB 미만이고, 최근 30일 내에 변경되었으며, 상위 세 단계 폴더 안에 있는 문서만 동기화하는 작업을 만들 수 있습니다.

필터는 단방향 동기화가 소스의 일부로 간주하는 범위를 바꾸므로 먼저 **Dry Run**을 실행하세요. 복사되고 삭제될 파일 목록이 표시되므로, 변경이 일어나기 전에 너무 빡빡하게 설정된 제한을 찾아낼 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History in RcloneView showing file counts for filtered sync runs" class="img-large img-center" />

작업이 실행되면 Job History에 각 실행의 파일 수와 총 크기가 표시됩니다. 갑자기 줄어들었다면 대개 필터가 잘못 설정된 것입니다.

## 시작하기

RcloneView는 Windows, macOS, Linux에서 하나의 창으로 90개 이상의 제공업체를 마운트하고 동기화합니다.

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. Sync를 열고 소스와 대상을 선택한 다음 작업 이름을 지정합니다.
3. 3단계에서 Max folder depth와 Max file size(MB)를 설정합니다.
4. Dry Run을 실행하여 파일 목록을 확인한 뒤 Job Manager에 작업을 저장합니다.

작고 목적이 분명한 작업은 더 빨리 끝나고, 저장 공간을 덜 사용하며, 확인하기도 쉽습니다.

---

**관련 가이드:**

- [파일 형식별 동기화를 위한 미리 정의된 필터](https://rcloneview.com/support/blog/predefined-filters-sync-file-types-rcloneview)
- [Min Age와 Max Age 시간 기반 필터](https://rcloneview.com/support/blog/min-age-max-age-time-based-filters-rcloneview)
- [동기화 필터가 파일을 제외하지 않을 때 해결하기](https://rcloneview.com/support/blog/fix-sync-filters-not-excluding-files-rcloneview)

<CloudSupportGrid />
