---
slug: migrate-mailru-cloud-to-backblaze-b2-rcloneview
title: "Mail.ru Cloud에서 Backblaze B2로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - morgan
description: "RcloneView로 Mail.ru Cloud의 파일을 Backblaze B2로 옮기세요: 두 리모트 연결, Dry Run 미리보기, 전송, 폴더 비교로 검증까지."
keywords:
  - Mail.ru Cloud에서 Backblaze B2로 마이그레이션
  - Mail.ru Cloud 백업
  - Mail.ru Cloud to B2
  - Backblaze B2 마이그레이션
  - 클라우드 간 전송
  - RcloneView 마이그레이션
  - Mail.ru Cloud rclone
  - Backblaze B2로 파일 이동
tags:
  - RcloneView
  - mailru
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Mail.ru Cloud에서 Backblaze B2로 마이그레이션 — RcloneView로 파일 전송하기

> 하나의 창에서 Mail.ru Cloud 라이브러리를 Backblaze B2 오브젝트 스토리지로 복사하세요. 이동 전에 미리보기를, 이동 후에는 비교를 수행합니다.

수년간의 문서와 사진이 Mail.ru Cloud에 있다면, 오브젝트 스토어에 두 번째 사본을 두면 독립된 아카이브를 확보할 수 있습니다. RcloneView는 두 서비스를 리모트로 연결하고 전송을 클라우드 간(cloud-to-cloud) 작업으로 실행하므로, 파일을 먼저 노트북으로 다운로드할 필요가 없습니다. FREE 라이선스로 S3, Azure, Backblaze B2를 완전한 읽기/쓰기로 연결할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 두 리모트 연결

Remote 탭을 열고 New Remote를 클릭하세요. 먼저 해당 제공자의 안내에 따라 Mail.ru Cloud를 추가한 다음, B2 콘솔에서 발급한 Application Key ID와 Application Key로 Backblaze B2를 추가합니다. 대상 위치가 있도록 B2에서 버킷을 미리 만들어 두세요.

각 리모트를 별도의 Explorer 패널에서 엽니다. 왼쪽에서 Mail.ru Cloud 폴더를, 오른쪽에서 B2 버킷을 탐색하여 작업을 만들기 전에 두 리모트가 모두 응답하는지 확인하세요.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 Mail.ru Cloud 및 Backblaze B2 리모트 추가" class="img-large img-center" />

## 전송 계획

모든 것을 옮길지 일부만 옮길지 결정하세요. 예를 들어 프로젝트 폴더 400 GB를 아카이빙하는 스튜디오라면 먼저 최상위 폴더 하나를 시범으로 복사할 수 있습니다. 동기화 마법사에서 Mail.ru Cloud를 소스로, B2 버킷 폴더를 대상으로 선택한 뒤 문자, 숫자, 하이픈, 밑줄로 작업 이름을 지정합니다.

마이그레이션에는 소스에서 아무것도 삭제하지 않는 Copy 작업이 더 안전합니다. 대상이 소스와 정확히 일치하길 원할 때만 Sync를 사용하세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Mail.ru Cloud에서 Backblaze B2로의 클라우드 간 전송" class="img-large img-center" />

## 미리보기, 실행, 모니터링

먼저 Dry Run을 실행하세요. 아무것도 변경하지 않고 복사되거나 삭제될 파일을 나열하므로 잘못된 대상 경로를 초기에 발견할 수 있습니다. 그런 다음 작업을 시작하고 Transferring 탭에서 진행률, 속도, 파일 수를 확인합니다.

오브젝트 스토리지는 많은 병렬 업로드를 잘 처리하지만, 일반 소비자용 클라우드는 더 엄격할 수 있습니다. 오류가 보이면 마법사 2단계에서 파일 전송 수를 낮추고 동등성 검사기(equality checkers)를 4 이하로 유지하세요.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="RcloneView에서 Mail.ru Cloud to B2 전송 모니터링" class="img-large img-center" />

## 검증 및 최신 상태 유지

작업이 끝나면 한쪽에 Mail.ru Cloud, 다른 쪽에 B2를 두고 폴더 비교를 엽니다. 왼쪽에만 있는 파일과 다른 파일로 필터링해 도착하지 않은 항목을 찾아 그것만 복사하세요. Job History에는 각 실행의 상태, 소요 시간, 크기, 파일 수가 기록됩니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Mail.ru Cloud와 Backblaze B2 간 폴더 비교" class="img-large img-center" />

B2 사본을 최신 상태로 유지하려면 작업을 저장하고, PLUS 라이선스가 있다면 4단계에서 crontab 방식의 스케줄을 추가하세요.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. Remote 탭에서 Mail.ru Cloud와 Backblaze B2를 리모트로 추가합니다.
3. Mail.ru Cloud에서 B2 버킷으로 Copy 작업을 만들고 Dry Run을 실행합니다.
4. 전송을 시작한 뒤 폴더 비교로 검증합니다.

검증된 B2 두 번째 사본은 단일 제공자 라이브러리를 백업된 라이브러리로 바꿔 줍니다.

---

**관련 가이드:**

- [RcloneView로 Mail.ru Cloud 스토리지 관리하기](https://rcloneview.com/support/blog/manage-mailru-cloud-sync-rcloneview)
- [Backblaze B2 스토리지 관리 — RcloneView로 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [RcloneView로 Yandex Disk에서 Backblaze B2로 마이그레이션](https://rcloneview.com/support/blog/migrate-yandex-disk-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
