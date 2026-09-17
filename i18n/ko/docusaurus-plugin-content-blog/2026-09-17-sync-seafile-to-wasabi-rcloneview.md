---
slug: sync-seafile-to-wasabi-rcloneview
title: "Seafile을 Wasabi로 동기화 — RcloneView로 클라우드 백업하기"
authors:
  - kai
description: "RcloneView로 자체 호스팅 Seafile 라이브러리를 S3 호환 스토리지인 Wasabi로 동기화하세요. 파일을 일일이 내보내지 않고도 오프사이트 사본을 유지할 수 있습니다."
keywords:
  - Seafile을 Wasabi로 동기화
  - Seafile 백업
  - Wasabi 클라우드 동기화
  - 자체 호스팅 클라우드 백업
  - Seafile RcloneView
  - Wasabi S3 호환 스토리지
  - 클라우드 간 동기화
  - 자체 호스팅 오프사이트 백업
  - RcloneView Seafile
  - RcloneView Wasabi
tags:
  - RcloneView
  - seafile
  - wasabi
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Seafile을 Wasabi로 동기화 — RcloneView로 클라우드 백업하기

> 동기화 스크립트를 한 줄도 작성하지 않고, 자체 호스팅 중인 Seafile 라이브러리에 Wasabi 오프사이트 백업을 마련하세요.

Seafile은 자체 서버에서 파일 동기화 플랫폼을 직접 운영하고 싶은 팀들이 즐겨 선택하는 도구지만, 자체 호스팅은 백업에 대한 책임이 전적으로 본인에게 있다는 뜻이기도 합니다 — 서버 디스크가 고장 나면 유일한 사본도 함께 사라집니다. Wasabi는 자연스러운 오프사이트 대상입니다: S3 호환이고, 대규모로 사용해도 비용 효율적이며, 어디서든 접근할 수 있습니다. RcloneView는 두 서비스에 직접 연결되므로, 수동으로 내보내기를 하지 않아도 Seafile 라이브러리를 일정에 따라 Wasabi 버킷으로 미러링할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Seafile과 Wasabi를 리모트로 연결하기

먼저 Seafile 서버를 리모트로 추가하면서 서버 URL과 라이브러리 자격 증명을 입력해 RcloneView를 가리키게 하세요. 그다음 Access Key ID, Secret Access Key, 그리고 알맞은 Wasabi 지역 엔드포인트를 사용해 Wasabi를 별도로 추가하세요. 두 리모트가 모두 설정되면 Explorer 패널에 탐색 가능한 파일 트리로 나타나므로, 동기화 작업을 연결하기 전에 라이브러리 구조와 파일 수를 확인할 수 있습니다. RcloneView는 Windows, macOS, Linux에서 하나의 창으로 90개 이상의 제공업체를 마운트하고 동기화하므로, Seafile과 Wasabi도 이미 구성된 다른 클라우드들과 나란히 자리하게 됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 Seafile과 Wasabi 리모트를 추가하는 모습" class="img-large img-center" />

## 단방향 동기화 작업 구성하기

Seafile 라이브러리를 소스로, Wasabi 버킷을 대상으로 하는 동기화 작업을 "대상만 수정"으로 구성해, Wasabi가 Seafile에 다시 쓰지 않는 순수한 미러 상태를 유지하도록 하세요. 소스 파일과 결과물이 담긴 500GB 규모의 공유 라이브러리를 사용하는 디자인 팀이라면, Filtering 단계에서 Seafile이 내부적으로 생성하는 임시 파일과 잠금 파일을 제외해 Wasabi 사본이 동기화 부산물로 지저분해지지 않게 할 수 있습니다.

Advanced Settings 단계에서 체크섬 비교를 활성화해, 수정 시간이 아니라 해시와 크기로 파일을 매칭하도록 하세요 — Seafile과 S3 호환 스토리지가 파일 메타데이터를 서로 다르게 추적하기 때문에 유용합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView로 Seafile 라이브러리를 Wasabi 버킷으로 동기화하는 모습" class="img-large img-center" />

첫 실제 동기화 전에 Dry Run을 실행하세요. 데이터를 이동하지 않고도 무엇이 전송될지 정확히 나열해 주므로, 라이브러리가 실제로 얼마나 큰지 아직 파악하지 못한 첫 실행 시 가장 중요합니다.

## 백업 예약 및 확인하기

PLUS 라이선스에서는 작업에 crontab 형식의 일정을 연결해 자동으로 다시 실행되도록 하세요 — 자주 사용하는 라이브러리라면 매일 밤, 보관 성격에 가까운 라이브러리라면 매주가 적당합니다. Job History는 매 실행의 소요 시간, 전송 속도, 상태를 기록하므로, Wasabi 사본이 마지막으로 언제 최신 상태로 갱신되었는지 명확한 기록을 확인할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView에서 Seafile을 Wasabi로 반복 동기화하는 작업을 예약하는 모습" class="img-large img-center" />

첫 전체 동기화 후에는 Seafile 소스와 Wasabi 대상 사이에 Folder Compare를 실행해, 모든 파일이 제대로 도착했고 크기가 일치하는지 확인하세요 — 네트워크 중단으로 누락된 항목을 빠르게 찾아내는 방법입니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 서버 URL과 라이브러리 자격 증명을 사용해 Seafile 서버를 리모트로 추가하세요.
3. Access Key ID, Secret Access Key, 지역 엔드포인트를 사용해 Wasabi를 리모트로 추가하세요.
4. 단방향 동기화 작업을 구성하고, Dry Run을 실행한 다음, 백업을 최신 상태로 유지하도록 반복 실행을 예약하세요.

자체 호스팅 라이브러리는 다른 곳에도 존재해야만 안전하며, 예약된 Seafile-Wasabi 동기화는 그 요건을 스스로 돌아가는 작업으로 바꿔줍니다.

---

**관련 가이드:**

- [RcloneView로 Seafile 자체 호스팅 클라우드 동기화 관리하기](https://rcloneview.com/support/blog/manage-seafile-self-hosted-cloud-sync-rcloneview)
- [RcloneView로 Wasabi 클라우드 동기화 및 백업 관리하기](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [RcloneView로 Seafile을 Backblaze B2로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-seafile-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
