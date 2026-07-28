---
slug: fix-empty-folders-not-syncing-rcloneview
title: "동기화되지 않는 빈 폴더 수정하기 — RcloneView로 해결하는 방법"
authors:
  - morgan
description: "동기화 후 빈 폴더가 사라졌나요? rclone이 기본적으로 빈 폴더를 건너뛰는 이유와 RcloneView의 빈 디렉터리 생성 옵션으로 이를 해결하는 방법을 알아보세요."
keywords:
  - 동기화되지 않는 빈 폴더
  - rclone 빈 디렉터리 누락
  - 클라우드 동기화 빈 폴더 수정
  - RcloneView 빈 디렉터리 생성
  - 동기화 폴더 구조 누락
  - 클라우드 백업 빈 폴더
  - rclone 동기화 폴더 구조
  - RcloneView 동기화 문제 해결
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 동기화되지 않는 빈 폴더 수정하기 — RcloneView로 해결하는 방법

> 동기화 작업이 대상에서 빈 폴더를 조용히 누락시킨다면, 대부분의 사용자가 설정 중에 알아차리지 못하는 체크박스 하나로 해결할 수 있습니다.

클라우드 간 프로젝트 아카이브를 마이그레이션하는 팀은 대상이 소스의 폴더 구조를 정확히 그대로 반영하기를 기대하는 경우가 많습니다 — 아직 파일이 없는 자리 표시용(placeholder) 폴더까지 포함해서 말이죠. 기본적으로 rclone(그리고 그 연장선에 있는 RcloneView)은 대상에 빈 디렉터리를 생성하지 않는데, 대부분의 오브젝트 스토리지 백엔드에는 진정한 의미의 폴더 개념이 없고 파일 키만 추적하기 때문입니다. 동기화 작업이 성공적으로 완료되었는데도 대상에서 빈 하위 폴더 묶음이 누락되어 있다면, 이는 버그가 아니라 예상된 동작입니다 — 그리고 RcloneView에는 이를 바꿀 수 있는 내장 설정이 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 빈 폴더가 누락되는 이유

로컬 파일 시스템과 일부 제공업체는 폴더를 실제 객체로 저장하지만, S3 호환 스토리지를 포함한 많은 클라우드 백엔드는 "폴더"를 파일 키가 공유하는 공통 접두사(prefix)로만 표현합니다. 디렉터리에 파일이 하나도 없으면 생성할 키가 없으므로, 반대편에는 아무것도 나타나지 않습니다. rclone의 기본 동기화 동작은 이를 반영합니다: 파일을 복사하고 폴더 구조는 파일 경로로부터 암묵적으로 형성되도록 두는데, 이는 전송 속도를 빠르게 유지하지만 실제로 비어 있는 폴더는 그대로 남겨둡니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing a completed sync with no errors despite missing empty folders" class="img-large img-center" />

이런 이유로 동기화 작업이 오류 0건으로 완료(Completed)되었다고 보고하더라도, 대상 폴더 트리는 소스보다 더 얇을 수 있습니다. 이는 전송 실패가 아니라 — 도구가 지시받은 대로 정확히 동작한 것일 뿐이며, 대부분의 사용자가 자동이라고 가정하는 세부 사항 하나가 빠졌을 뿐입니다.

## 빈 디렉터리 생성 활성화하기

RcloneView는 이 동작을 동기화 마법사에서 직접 노출합니다. 1단계(스토리지 구성)에서 소스와 대상 선택, 동기화 방향 토글과 함께 **빈 디렉터리 생성(Create empty directories)** 옵션이 있습니다. 작업을 실행하기 전에 이를 활성화하면 rclone에게 대상에 빈 폴더용 자리 표시 항목을 명시적으로 생성하도록 지시하여, 복사된 구조가 소스와 폴더 단위로 정확히 일치하게 됩니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Enabling create empty directories in the RcloneView sync configuration wizard" class="img-large img-center" />

이 옵션을 체크하지 않은 채 이미 동기화를 실행했다면, 기존 작업을 편집하고 설정을 활성화한 뒤 다시 실행하기만 하면 됩니다 — RcloneView는 하나의 창에서 90개 이상의 제공업체를 마운트하고 동기화하므로, 동일한 소스와 대상에 대해 다시 실행하는 것은 전체를 재구성하는 것이 아니라 빠른 수정에 불과합니다.

## 수정 후 폴더 구조 확인하기

대규모 마이그레이션을 한 번의 실행에 맡기기 전에, Dry Run을 사용하여 수정된 작업이 실제로 무엇을 할지 미리 확인하세요 — 대상을 건드리지 않고 생성될 모든 파일과 폴더 목록을 보여주므로, 실행을 확정하기 전에 빈 폴더 문제가 해결되었는지 확인할 수 있습니다. 진행 중인 프로젝트의 경우, Folder Compare도 이후에 유용합니다: 양쪽을 지정하고 "left-only" 또는 "right-only"로 필터링하여 남아 있는 구조적 불일치를 찾아보세요.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using Folder Compare to verify folder structure matches after enabling empty directory creation" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. 빈 폴더가 누락된 동기화 작업을 열고 Edit를 클릭합니다.
3. 1단계에서 **빈 디렉터리 생성(Create empty directories)** 체크박스를 활성화합니다.
4. Dry Run을 실행하여 폴더가 생성될지 확인한 다음 동기화를 실행합니다.

설정을 활성화하고 나면, 이후 해당 작업을 실행할 때마다 전체 폴더 트리가 보존됩니다 — 더 이상 마이그레이션 후 누락된 자리 표시 디렉터리를 찾아다닐 필요가 없습니다.

---

**관련 가이드:**

- [Dry Run — RcloneView로 전송 전에 클라우드 동기화 미리 보기](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)
- [필터 규칙 — RcloneView로 선택적 동기화하기](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [RcloneView로 잘못된 동기화 방향으로 인한 데이터 손실 방지하기](https://rcloneview.com/support/blog/avoid-data-loss-wrong-sync-direction-rcloneview)

<CloudSupportGrid />
