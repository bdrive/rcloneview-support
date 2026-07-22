---
slug: get-size-calculate-cloud-storage-usage-rcloneview
title: "크기 확인 — RcloneView에서 클라우드 스토리지 사용량 즉시 계산하기"
authors:
  - jay
description: "RcloneView의 크기 확인(Get Size) 기능을 사용해 동기화나 마이그레이션 전에 90개 이상의 클라우드 제공업체에서 폴더나 선택 항목의 전체 크기를 계산하세요."
keywords:
  - 크기 확인 기능
  - 클라우드 스토리지 크기 계산
  - 클라우드 스토리지 폴더 크기
  - RcloneView 크기 확인
  - 클라우드 스토리지 사용량 확인
  - 전송 전 폴더 크기 확인
  - 멀티 클라우드 스토리지 감사
  - rclone about 명령 GUI
  - 클라우드 파일 관리자 도구
  - 스토리지 사용량 분석
tags:
  - RcloneView
  - feature
  - cloud-storage
  - tips
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 크기 확인 — RcloneView에서 클라우드 스토리지 사용량 즉시 계산하기

> RcloneView에서 폴더나 선택 항목을 우클릭하면 전체 전송을 기다리지 않고도 이동할 데이터 양을 즉시 확인할 수 있습니다.

클라우드 제공업체는 실제로 옮겨보기 전까지는 폴더가 얼마나 큰지 알기 어렵게 만드는 경우가 많습니다. 중첩된 하위 폴더가 수천 개인 "Media" 폴더는 동기화 작업이 중간에 멈추거나 전송 도중 용량 초과 경고가 나타나야만 비로소 드러나는 기가바이트 단위의 데이터를 숨기고 있을 수 있습니다. RcloneView의 File Explorer 우클릭 메뉴에 있는 크기 확인(Get Size) 명령은 동기화, 마운트, 마이그레이션을 실행하기 전에 선택한 파일이나 폴더의 전체 크기를 즉시 계산해 이 문제를 해결합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 무언가를 옮기기 전에 폴더 크기 확인하기

Explorer 패널에서 파일이나 폴더를 하나 이상 선택하고 우클릭한 뒤 크기 확인(Get Size)을 선택하세요. RcloneView는 선택 항목을 탐색하여 전체 크기를 반환하며, 이는 File List 하단 요약만으로는 중첩된 내용이 반영되지 않는 깊은 하위 디렉터리 구조를 가진 폴더에 특히 유용합니다. 이는 선택 항목이 Google Drive, Amazon S3, 자체 호스팅 Nextcloud 인스턴스, 로컬 디스크 중 어디에 있든 동일하게 작동합니다 — RcloneView는 하나의 창에서 90개 이상의 제공업체를 마운트하고 동기화하므로, 어떤 리모트를 탐색하든 동일한 우클릭 메뉴가 적용됩니다.

크기 확인(Get Size)은 사전 점검 용도로 가장 유용합니다. 대규모 Sync 작업이나 두 클라우드 간의 일회성 마이그레이션을 시작하기 전에 소스 폴더의 실제 크기를 확인하면 전송 시간을 예측하고, 대상에 충분한 사용 가능 용량이 있는지 확인하며, 작업을 줄이기 위한 필터링 규칙이 필요한지 결정하는 데 도움이 됩니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Selecting a folder in RcloneView to check its total size" class="img-large img-center" />

## 여러 리모트에서 스토리지 사용량 감사하기

연결된 모든 리모트(클라우드든 로컬이든)가 동일한 Explorer에 있기 때문에, 크기 확인(Get Size)은 멀티 클라우드 환경에서 스토리지가 어디에서 소비되고 있는지 빠르게 감사하는 용도로도 사용할 수 있습니다. 각 리모트의 최상위 폴더에서 차례로 실행하면 어떤 계정이 한도에 가까워지고 있는지 대략적으로 파악할 수 있으며, 이는 각 제공업체의 별도 웹 콘솔에 로그인해 사용량을 확인하는 것보다 빠릅니다.

특정 폴더가 아닌 리모트 단위의 더 정확한 사용량 수치가 필요하다면, 내장된 Rclone Terminal에서 `rclone about "remote:"` 명령을 지원하며, 이는 제공업체 API에서 직접 총 사용량과 사용 가능한 용량을 보고합니다. 크기 확인(Get Size)과 터미널의 `about` 명령은 서로를 보완합니다: 하나는 특정 선택 항목으로 범위를 좁히고, 다른 하나는 계정 전체 합계를 보고합니다.

<img src="/support/images/en/blog/new-remote.png" alt="Multiple cloud remotes connected in RcloneView for storage auditing" class="img-large img-center" />

## 크기 확인으로 동기화 및 필터 규칙 계획하기

폴더의 실제 크기를 알고 나면, RcloneView의 Sync 마법사는 그 정보를 바탕으로 행동할 수 있는 도구를 제공합니다. 작업 구성의 3단계에는 최대 파일 크기, 최대 파일 기간별 필터링과 미디어, 동영상, 이미지, 문서 유형을 위한 사전 정의 필터가 포함되어 있어, 지나치게 큰 폴더도 실제로 전송이 필요한 파일만 남도록 줄일 수 있습니다. 이후 Dry Run을 실행하면 현재 필터 설정에서 정확히 어떤 파일이 복사되거나 삭제될지 미리 볼 수 있어, 실제로 데이터가 이동하기 전에 작업이 예상과 일치하는지 확인할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Configuring sync filters after checking folder size in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. Remote 탭 > New Remote를 통해 감사하려는 리모트를 연결합니다.
3. Explorer에서 폴더를 선택하고 우클릭한 뒤 크기 확인(Get Size)을 선택해 전체 용량을 확인합니다.
4. 전체 동기화를 실행하기 전에 이 수치를 활용해 Sync 마법사에서 필터나 일정을 계획합니다.

정확히 얼마나 많은 데이터를 다루고 있는지 아는 것은 추측을 계획으로 바꾸며, 크기 확인(Get Size)은 그 점검을 지원 티켓이 될 뻔한 일 대신 두 번의 클릭으로 끝나는 습관으로 만들어줍니다.

---

**관련 가이드:**

- [Job History 및 전송 로그 — RcloneView에서 모든 동기화 모니터링하기](https://rcloneview.com/support/blog/job-history-transfer-logs-monitoring-rcloneview)
- [Dry Run 미리보기 — RcloneView에서 실행 전 클라우드 동기화 시뮬레이션하기](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [RcloneView로 클라우드 스토리지에서 중복 파일 찾기 및 삭제하기](https://rcloneview.com/support/blog/find-remove-duplicate-files-cloud-rcloneview)

<CloudSupportGrid />
