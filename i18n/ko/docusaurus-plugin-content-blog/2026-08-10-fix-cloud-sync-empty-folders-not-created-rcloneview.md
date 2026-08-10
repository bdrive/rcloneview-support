---
slug: fix-cloud-sync-empty-folders-not-created-rcloneview
title: "동기화 후 사라진 빈 폴더 — RcloneView로 해결하기"
authors:
  - robin
description: "클라우드 동기화 후 빈 폴더가 사라지나요? rclone이 기본적으로 빈 폴더를 건너뛰는 이유와 RcloneView 설정 하나로 해결하는 방법을 알아보세요."
keywords:
  - 빈 폴더 동기화 안 됨
  - rclone 빈 디렉토리
  - 클라우드 동기화 폴더 누락
  - RcloneView 문제 해결
  - 폴더 구조 동기화
  - rclone 빈 디렉토리 생성
  - 클라우드 동기화 오류 수정
  - RcloneView 동기화 설정
  - 클라우드 백업 폴더 구조
tags:
  - RcloneView
  - troubleshooting
  - sync
  - cloud-sync
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 동기화 후 사라진 빈 폴더 — RcloneView로 해결하기

> 자리 표시용 폴더와 빈 프로젝트 디렉토리는 클라우드 동기화 후 종종 사라집니다 — 이를 되돌리는 설정을 소개합니다.

한 팀이 폴더 구조를 클라우드로 마이그레이션한 후, 향후 파일, 클라이언트 산출물, 아카이브 버킷을 위해 예약해 둔 빈 자리 표시용 디렉토리의 절반이 대상 위치에 전혀 나타나지 않는다는 것을 발견합니다. 이는 rclone의 예상된 기본 동작입니다: 동기화 작업은 파일이 포함된 디렉토리만 다시 생성합니다. RcloneView는 이를 변경하는 데 필요한 설정을 제공하며, 이를 어디서 찾을 수 있는지 아는 것만으로도 혼란스러운 재작업을 크게 줄일 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 빈 폴더가 건너뛰어지는 이유

rclone의 동기화 및 복사 엔진은 소스 트리를 탐색하며 객체 — 즉 파일 — 를 전송합니다. 파일이 하나도 없는 디렉토리는 전송 작업을 발생시키지 않으므로, 기본적으로 대상 위치는 해당 디렉토리가 존재해야 한다는 사실을 알지 못합니다. 이는 버그가 아닙니다; 대부분의 클라우드 스토리지 API가 애초에 "폴더"를 독립적인 개체가 아니라 객체 키의 부수 효과로 표현하는 방식 때문입니다. 실질적인 결과로, 의도적인 자리 표시용 폴더(다음 달 파일을 기다리는 `03-invoices/` 폴더나 클라이언트가 보기를 기대하는 카테고리 구조)가 포함된 소스 트리는 대상 위치에서 일부가 누락된 채로 도착할 수 있습니다.

이는 특히 폴더 비교(Folder Compare)나 초기 마이그레이션 중에 두드러지는데, 이때는 파일이 실제로 들어오기 전부터 대상 구조가 소스 구조를 시각적으로 그대로 반영해야 하기 때문입니다.

## 해결 방법: 빈 디렉토리 생성

RcloneView의 동기화 마법사는 1단계(스토리지 구성)에서 소스/대상 리모트 및 폴더 선택과 함께 **빈 디렉토리 생성** 토글을 제공합니다. 이를 활성화하면 하위 동기화 작업이 파일이 없는 디렉토리도 다시 생성하도록 지시하여, 대상 폴더 트리가 파일뿐만 아니라 소스 구조와 정확히 일치하도록 만듭니다.

<img src="/support/images/en/blog/new-remote.png" alt="빈 디렉토리 생성 옵션이 있는 RcloneView 동기화 마법사 1단계" class="img-large img-center" />

일회성 구조 마이그레이션의 경우, 먼저 이 옵션을 활성화한 상태로 드라이 런(Dry Run)을 실행하세요. 드라이 런은 대상을 건드리지 않고 어떤 폴더와 파일이 생성될지 정확히 나열해 주므로, 전송을 실행하기 전에 빈 폴더 문제가 실제로 해결되었는지 확인하는 가장 빠른 방법입니다.

## 폴더 비교로 결과 확인하기

동기화를 실행한 후, RcloneView의 폴더 비교(Folder Compare)를 사용하여 양쪽을 디렉토리별로 확인하세요. RcloneView는 하나의 창에서 90개 이상의 제공업체를 마운트하고 동기화할 수 있으며, Windows, macOS, Linux에서 모두 사용할 수 있어 도구를 전환하지 않고도 소스와 대상 트리를 나란히 시각적으로 비교할 수 있습니다. "왼쪽에만 있는 파일 표시"와 "오른쪽에만 있는 파일 표시" 필터를 사용하면 폴더가 제대로 전달되었는지 즉시 확인할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="소스와 대상 간에 일치하는 폴더 구조를 보여주는 폴더 비교 화면" class="img-large img-center" />

일회성 마이그레이션이 아니라 구조를 장기적으로 유지 관리하는 경우, 빈 디렉토리 옵션을 체크한 상태로 작업을 저장하여 예약된 실행마다 필요에 따라 자리 표시용 폴더를 계속 다시 생성하도록 하세요.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="빈 폴더 구조를 최신 상태로 유지하기 위한 반복 RcloneView 동기화 작업 예약" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 동기화 마법사를 열고 소스 및 대상 리모트를 선택하세요.
3. 1단계에서 필터를 구성하기 전에 **빈 디렉토리 생성**을 활성화하세요.
4. 드라이 런을 실행하여 폴더 구조를 확인한 다음 동기화를 실행하세요.

양쪽이 일치하는 폴더 구조는 새 팀원 온보딩과 스토리지 감사를 훨씬 더 오류 없이 만들어 줍니다.

---

**관련 가이드:**

- [macOS 빈 폴더 및 권한 문제 — RcloneView로 해결하기](https://rcloneview.com/support/blog/fix-macos-empty-folders-permissions-rcloneview)
- [RcloneView로 클라우드 스토리지의 빈 휴지통 정리하기](https://rcloneview.com/support/blog/cleanup-empty-trash-cloud-storage-rcloneview)
- [전송 후 클라우드 동기화에서 파일이 누락되는 문제 해결 — RcloneView](https://rcloneview.com/support/blog/fix-cloud-sync-missing-files-after-transfer-rcloneview)

<CloudSupportGrid />
