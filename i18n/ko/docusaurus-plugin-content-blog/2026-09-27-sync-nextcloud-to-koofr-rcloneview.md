---
slug: sync-nextcloud-to-koofr-rcloneview
title: "Nextcloud를 Koofr로 동기화 — RcloneView로 클라우드 백업하기"
authors:
  - robin
description: "RcloneView로 셀프 호스팅 Nextcloud 인스턴스를 Koofr에 백업하세요 — 개인정보 보호 중심 스토리지 제공업체 두 곳 간의 직접적인 클라우드 간 동기화입니다."
keywords:
  - Nextcloud를 Koofr로 동기화
  - Nextcloud Koofr 백업
  - RcloneView Nextcloud
  - RcloneView Koofr
  - 셀프 호스팅 클라우드 백업
  - 클라우드 간 동기화
  - Nextcloud Koofr 전송
  - 유럽 클라우드 스토리지 백업
tags:
  - RcloneView
  - nextcloud
  - koofr
  - cloud-to-cloud
  - sync
  - european-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Nextcloud를 Koofr로 동기화 — RcloneView로 클라우드 백업하기

> 셀프 호스팅 Nextcloud 인스턴스에 Koofr를 이용한 오프사이트 백업을 마련하고, 수동 내보내기 대신 일정에 따라 자동으로 실행하세요.

Nextcloud가 인기 있는 이유는 스토리지를 직접 통제할 수 있다는 점이지만, 그 통제권은 서버 장애 한 번, 잘못된 업데이트, 디스크 오류만으로도 유일한 사본 전체를 잃을 수 있다는 의미이기도 합니다. Koofr는 마찬가지로 EU 기반의 개인정보 보호 중심 제공업체이기 때문에 보조 사본을 두기에 자연스러운 짝입니다 — 관련 없는 관할권이 아니라 비슷한 데이터 거주지 정책을 가진 곳에 백업이 놓이게 됩니다. RcloneView는 두 곳 모두를 일반 리모트로 연결하고 그 사이에서 직접 복사를 실행하므로, 백업이 Nextcloud 서버가 업로드 클라이언트 역할까지 겸하는 데 의존하지 않습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Nextcloud와 Koofr 연결하기

리모트 탭 > 새 리모트에서 WebDAV를 사용해 Nextcloud를 리모트로 추가하세요 — Nextcloud는 인스턴스의 관리자 패널에서 설정 아래 표시되는 URL로 파일을 WebDAV를 통해 노출하므로, 서버 주소와 사용자 이름, 그리고 일반 로그인 비밀번호가 아닌 앱 비밀번호가 필요합니다. Koofr는 자체 OAuth 로그인 절차를 통해 별도로 추가하세요. RcloneView는 하나의 창에서 90개 이상의 제공업체를 마운트하고 동기화하며, Windows, macOS, Linux에서 모두 사용할 수 있으므로 Nextcloud 서버가 가정용 NAS에 있든 임대 VPS에 있든 동일한 두 리모트 설정이 그대로 작동합니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Nextcloud WebDAV remote in RcloneView" class="img-large img-center" />

두 리모트가 모두 리모트 관리자에 나타나면, 탐색기 패널 두 개를 나란히 열어 Nextcloud 폴더 구조를 탐색할 수 있는지, 그리고 (아마 비어 있을) Koofr 대상을 확인한 다음 자동화를 설정하세요.

## 동기화 작업 구성하기

이런 종류의 백업에는 즉석 드래그 앤 드롭 대신 4단계 동기화 마법사를 사용하세요 — Nextcloud를 원본으로, Koofr를 대상으로 설정하고, Koofr가 항상 사본만 받고 Nextcloud가 원본으로 유지되도록 단방향 동기화를 선택한 다음, 실제로 전송이 이루어지기 전에 드라이 런을 먼저 실행해 파일 목록이 올바른지 확인하세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync from Nextcloud to Koofr in RcloneView" class="img-large img-center" />

3단계에서는 오프사이트에 중복 저장하고 싶지 않은 항목을 제외하세요 — Nextcloud 자체의 `.git` 형식 버전 폴더나 이미 다른 곳에 백업 중인 대용량 동기화 미디어 라이브러리는 필터 규칙을 적용하기 좋은 후보이며, 이렇게 하면 Koofr 사본을 실제로 이중화가 필요한 항목에 집중시킬 수 있습니다.

## 반복 백업 예약하기

일회성 동기화는 오늘의 장애만 막아줄 뿐, 다음 달의 장애는 막아주지 못합니다. PLUS 라이선스에서는 마법사의 4단계에서 crontab 방식 예약 기능을 추가할 수 있어, 앱을 열지 않아도 Nextcloud-to-Koofr 동기화가 매일 밤 또는 매주 실행됩니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring Nextcloud to Koofr backup job in RcloneView" class="img-large img-center" />

작업 기록에서는 예약된 모든 실행의 완료 상태, 파일 수, 소요 시간을 계속 기록해 주므로, 예약된 작업이 조용히 백그라운드에서 잘 돌아가고 있으리라 가정하는 대신 백업이 실제로 실행되었는지 확인할 수 있습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Nextcloud 인스턴스를 WebDAV 리모트로, Koofr를 OAuth 리모트로 추가합니다.
3. Nextcloud에서 Koofr로 향하는 단방향 동기화 작업을 구성하고, 중복 저장할 필요 없는 항목은 필터로 제외합니다.
4. 작업을 자동으로 실행되도록 예약하고, 작업 기록을 주기적으로 확인해 정상적으로 완료되는지 점검합니다.

셀프 호스팅 서버는 그 백업만큼만 안전하며, 그 백업을 두 번째의 독립적인 제공업체에 두는 것이야말로 셀프 호스팅이 그대로 남겨두는 단일 장애점 문제를 해결하는 방법입니다.

---

**관련 가이드:**

- [Koofr를 Proton Drive로 동기화 — RcloneView로 클라우드 백업하기](https://rcloneview.com/support/blog/sync-koofr-to-proton-drive-rcloneview)
- [Nextcloud 동기화 오류 해결하기 — RcloneView로 해결하는 방법](https://rcloneview.com/support/blog/fix-nextcloud-sync-errors-rcloneview)
- [Koofr에서 Jottacloud로 마이그레이션 — RcloneView로 파일 전송하기](https://rcloneview.com/support/blog/migrate-koofr-to-jottacloud-rcloneview)

<CloudSupportGrid />
