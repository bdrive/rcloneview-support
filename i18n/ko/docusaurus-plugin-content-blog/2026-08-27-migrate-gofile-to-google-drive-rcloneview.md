---
slug: migrate-gofile-to-google-drive-rcloneview
title: "Gofile에서 Google Drive로 이전하기 — RcloneView로 파일 전송하기"
authors:
  - steve
description: "RcloneView로 Gofile의 파일을 Google Drive로 옮기세요 — 두 리모트를 연결하고, 클라우드 간 직접 전송을 수행하며, 반복 수집 작업을 자동화합니다."
keywords:
  - Gofile에서 Google Drive로 이전
  - Gofile Google Drive 전송
  - Gofile 파일을 Google Drive로 이동
  - RcloneView Gofile 이전
  - Gofile 액세스 토큰 설정
  - 클라우드 간 전송 도구
  - Gofile Google Drive 동기화
  - 클라우드 스토리지 통합
  - 크로스 클라우드 파일 전송
  - Gofile 파일 관리
tags:
  - RcloneView
  - gofile
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gofile에서 Google Drive로 이전하기 — RcloneView로 파일 전송하기

> 로컬에 다운로드하거나 브라우저 탭을 오가지 않고, RcloneView로 Gofile을 통해 전달된 파일을 곧바로 Google Drive로 가져오세요.

Gofile은 일회성 파일 공유의 흔한 경유지입니다 — 고객이 자산 묶음을 보내거나, 계약자가 결과물을 업로드하거나, 다운로드 링크가 팀 내에서 오갑니다. 하지만 그 콘텐츠가 장기적으로 머물러야 할 곳은 아닙니다. RcloneView는 Gofile과 Google Drive를 같은 창에서 리모트로 연결하므로, Gofile에서 파일을 꺼내 영구적이고 정리된 Google Drive 스토리지로 옮기는 일이 다운로드 후 재업로드하는 왕복 작업이 아니라 직접 전송이 됩니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Gofile과 Google Drive 연결하기

Gofile은 OAuth 대신 자격 증명 입력 방식을 사용합니다: Gofile 계정 프로필 페이지에서 Access Token을 생성해 New Remote 화면에 붙여넣으세요. 반면 Google Drive는 브라우저 기반 OAuth를 사용합니다 — New Remote 마법사를 클릭해 진행하고 팝업에서 인증하면 되며, 복사할 토큰이 없습니다. 둘 다 별도의 리모트로 추가하면 인접한 Explorer 패널에서 열 수 있는 탭으로 표시됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 Gofile과 Google Drive 리모트를 추가하는 모습" class="img-large img-center" />

마운트 전용 도구와 달리 RcloneView는 리모트 간 동기화와 폴더 비교도 지원합니다 — FREE 라이선스에서 — 따라서 이 동일한 두 리모트 구성만으로 일회성 정리와 지속적인 수집 루틴 모두를 다룰 수 있습니다.

## 리모트 간 직접 파일 전송하기

왼쪽 패널에 Gofile을, 오른쪽 패널에 Google Drive를 연 뒤 옮길 파일이나 폴더를 선택하세요. 서로 다른 두 리모트 사이로 드래그하면 이동이 아니라 복사가 되므로, 명시적으로 삭제하기 전까지는 Gofile에서 아무것도 사라지지 않습니다 — 소스를 정리하기 전에 전송이 깔끔하게 완료됐는지 확인하고 싶을 때 유용합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView에서 Gofile에서 Google Drive로 파일을 전송하는 모습" class="img-large img-center" />

더 큰 배치의 경우, 드래그 앤 드롭 대신 우클릭 후 Copy나 Download를 사용하세요 — 하단 Info View의 Transferring 탭이 실시간 진행 상황, 전송 속도, 파일 수를 보여주므로 앱을 닫기 전에 모든 것이 제대로 도착했는지 확인할 수 있습니다.

## 반복 수집 자동화하기

Gofile로 새 전달물이 계속 들어온다면 — 반복되는 클라이언트 인수인계, 예약된 내보내기 등 — 매번 수동 전송을 반복하는 것보다 저장된 동기화 작업이 낫습니다. Job Manager의 4단계 마법사를 사용하면 Gofile을 소스로, 특정 Google Drive 폴더를 대상으로 설정하고, 최근 업로드만 가져오도록 최대 파일 나이 필터를 적용한 뒤, 실제로 이동하기 전에 무엇이 복사될지 Dry Run으로 미리 확인할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView에서 Gofile에서 Google Drive로의 반복 동기화 작업을 예약하는 모습" class="img-large img-center" />

이후 Job History가 각 실행을 기록합니다 — 상태, 파일 수, 소요 시간 — 앱을 열어 확인하지 않아도 예약된 수집이 완료됐는지 확인할 수 있습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. Gofile 계정 페이지에서 발급받은 Access Token으로 Gofile을 리모트로 추가합니다.
3. OAuth 브라우저 로그인을 통해 Google Drive를 리모트로 추가합니다.
4. 두 리모트를 나란히 Explorer 패널에 열어 첫 배치를 드래그하거나, 반복 작업이라면 동기화 작업을 만듭니다.

두 리모트가 같은 창에 놓이면, Gofile에서 정리된 Google Drive 스토리지로 콘텐츠를 옮기는 일은 더 이상 공유 링크의 유효 기간에 좌우되지 않습니다.

---

**관련 가이드:**

- [Gofile 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-gofile-cloud-sync-backup-rcloneview)
- [Google Drive 파일 관리 및 클라우드 동기화 — RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [Google Drive 스토리지 할당량 초과 해결하기 — RcloneView로 파일 옮기기](https://rcloneview.com/support/blog/fix-google-drive-storage-quota-exceeded-rcloneview)

<CloudSupportGrid />
