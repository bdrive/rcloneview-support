---
slug: sync-seafile-to-dropbox-rcloneview
title: "Seafile을 Dropbox로 동기화하기 — RcloneView로 클라우드 백업"
authors:
  - casey
description: "RcloneView로 예약 동기화 작업과 Dry Run 미리보기를 사용해 셀프 호스팅 Seafile 서버를 Dropbox로 백업하고, 안전하고 검증된 전송을 수행하세요."
keywords:
  - Seafile을 Dropbox로 동기화
  - Seafile Dropbox 백업
  - 셀프 호스팅 클라우드 백업
  - RcloneView Seafile
  - 클라우드 간 동기화
  - Seafile 오프사이트 백업
  - Dropbox 백업 도구
  - Seafile 재해 복구
  - 셀프 호스팅에서 Dropbox로 마이그레이션
tags:
  - RcloneView
  - seafile
  - dropbox
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Seafile을 Dropbox로 동기화하기 — RcloneView로 클라우드 백업

> 직접 스크립트를 작성하지 않고도 셀프 호스팅 Seafile 서버에 Dropbox 오프사이트 사본을 마련하세요.

Seafile은 데이터를 조직이 직접 통제할 수 있다는 점 때문에 인기가 있지만, 바로 그 독립성 때문에 외부 백업으로 가는 내장 경로가 없습니다. 서버나 디스크, 호스트에 장애가 생기면 다른 곳에 복사되지 않은 것은 모두 사라집니다. RcloneView는 같은 창에서 Seafile과 Dropbox에 연결하고 예약 동기화 작업으로 둘 사이에서 파일을 옮기므로, 셀프 호스팅 서버는 누군가 cron 스크립트나 rclone 명령을 직접 작성하지 않고도 진짜 오프사이트 사본을 갖게 됩니다. RcloneView는 하나의 창에서 90개 이상의 제공업체를 마운트하고 동기화하며, Windows, macOS, Linux에서 동작하므로 동기화 작업이 관리자의 노트북에서 실행되든 전용 백업 머신에서 실행되든 동일한 설정이 통합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Seafile과 Dropbox 연결하기

Seafile은 서버 URL, 라이브러리, 계정 자격 증명을 입력해 리모트로 추가되며, RcloneView는 저장하기 전에 연결을 확인합니다. Dropbox는 더 간단한 OAuth 흐름을 사용합니다: 브라우저 창이 열리고 계정 인증을 거치면 리모트가 자동으로 탭으로 나타납니다. 둘 다 설정되면 Remote Manager에 나란히 표시되며, 서로 방해하지 않고 나중에 개별적으로 편집할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a self-hosted Seafile server and Dropbox as remotes in RcloneView" class="img-large img-center" />

두 리모트가 연결되면, 전체 동기화를 실행하기 전에 2패널 레이아웃을 열어 Seafile 라이브러리와 Dropbox 대상 폴더를 함께 살펴보세요.

## 동기화 작업 구성하기

Seafile 라이브러리를 소스로, 전용 Dropbox 폴더를 대상으로 하는 단방향 동기화 작업을 만들어, 백업 실행이 원본 Seafile 데이터를 실수로 수정하는 일이 없도록 하세요. Filtering Settings에서는 서버를 벗어나서는 안 되는 항목 — 임시 파일, 버전 관리되는 프로젝트의 `.git/` 폴더, 또는 크기 임계값을 넘는 파일 유형 — 을 RcloneView가 모든 동기화 작업에 적용하는 동일한 사용자 지정 필터 구문으로 제외하세요. 먼저 Dry Run을 실행하세요: 실제로 아무것도 전송하지 않으면서 복사될 모든 파일 목록을 보여주므로, 대역폭을 낭비하기 전에 잘못된 소스 폴더를 가장 빠르게 발견할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Seafile to Dropbox backup job in RcloneView" class="img-large img-center" />

PLUS 라이선스 사용자는 작업에 crontab 방식 일정을 연결해, 아무도 수동으로 시작하지 않아도 백업이 매일 밤 실행되도록 할 수 있습니다 — 영업 시간 내내 변경되는 Seafile 서버에 유용합니다.

## Job History에서 백업 검증하기

Advanced Settings에서 체크섬 비교를 켜면 RcloneView는 파일 크기만이 아니라 해시와 크기로 파일이 일치하는지 확인하는데, 이는 Seafile의 버전 관리가 크기는 같지만 내용이 다른 파일을 남길 수 있을 때 중요합니다. 각 실행 후 Job History는 전송된 총 파일 수, 소요 시간, 오류가 발생한 항목을 보여주므로, 복원 지점으로 신뢰하기 전에 Dropbox 사본이 실제로 최신 상태인지 손쉽게 확인할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing a completed Seafile to Dropbox sync" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Seafile 서버를 라이브러리 경로와 자격 증명으로 리모트로 추가하세요.
3. OAuth 로그인 흐름으로 Dropbox를 추가하세요.
4. Dry Run을 실행한 다음 동기화 작업을 실행하고 Job History에서 결과를 확인하세요.

예약되고 검증된 Dropbox 사본이 있으면 셀프 호스팅 Seafile 설치가 단일 장애 지점에서 진짜 대체 수단을 갖춘 서버로 바뀝니다.

---

**관련 가이드:**

- [RcloneView로 Seafile 셀프 호스팅 클라우드를 Google Drive, S3, 외부 스토리지와 함께 관리하기](https://rcloneview.com/support/blog/manage-seafile-self-hosted-cloud-sync-rcloneview)
- [Dropbox 관리하기 — RcloneView로 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-dropbox-cloud-sync-backup-rcloneview)
- [RcloneView로 Seafile 동기화 오류 해결하기](https://rcloneview.com/support/blog/fix-seafile-sync-errors-rcloneview)

<CloudSupportGrid />
