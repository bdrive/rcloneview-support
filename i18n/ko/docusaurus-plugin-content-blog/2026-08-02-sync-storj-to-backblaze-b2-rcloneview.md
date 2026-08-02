---
slug: sync-storj-to-backblaze-b2-rcloneview
title: "Storj를 Backblaze B2로 동기화 — RcloneView로 클라우드 백업하기"
authors:
  - alex
description: "RcloneView로 Storj 분산 스토리지의 파일을 Backblaze B2로 동기화하세요. S3 호환 데이터의 중복 오프네트워크 사본을 유지합니다."
keywords:
  - Storj를 Backblaze B2로
  - Storj 동기화
  - Storj 백업
  - Backblaze B2 동기화
  - 분산 스토리지 백업
  - Storj RcloneView
  - S3 호환 스토리지 동기화
  - 클라우드 간 백업
  - 오브젝트 스토리지 중복성
  - RcloneView 동기화
tags:
  - RcloneView
  - storj
  - backblaze-b2
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Storj를 Backblaze B2로 동기화 — RcloneView로 클라우드 백업하기

> RcloneView로 Storj 분산 스토리지 데이터의 중복된 중앙 집중식 사본을 Backblaze B2에 유지하세요 — 하나의 작업으로, 매우 다른 두 스토리지 아키텍처를 다룹니다.

Storj는 암호화된 파일 조각을 독립적인 노드 네트워크에 분산시키며, 이는 검열 저항성과 비용 면에서 훌륭하지만, 팀들이 보호의 두 번째 계층으로 기존의 중앙 호스팅 백업을 원하는 경우가 많다는 것을 의미하기도 합니다. Backblaze B2는 이 역할을 잘 수행합니다: 간단한 검색이 가능한 표준 S3 호환 버킷입니다. RcloneView는 S3 호환 리모트 지원을 통해 두 곳 모두에 연결하고 로컬 스테이징 드라이브 없이 직접 데이터를 이동시킵니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Storj와 Backblaze B2 연결하기

프로젝트 구성 방식에 따라 S3 호환 게이트웨이 엔드포인트와 액세스 그랜트를 사용하거나 네이티브 Storj 액세스 키 쌍을 사용하여 RcloneView에 Storj를 리모트로 추가하세요. B2 콘솔의 Application Key ID와 Application Key를 사용하여 Backblaze B2를 별도로 추가하세요. 두 리모트는 이제 탐색기(Explorer) 패널에서 나란히 탐색 가능한 파일 트리로 표시되므로, 동기화 작업을 구축하기 전에 버킷 구조와 객체 수를 확인할 수 있습니다.

RcloneView는 Windows, macOS, Linux의 하나의 창에서 90개 이상의 제공업체를 마운트하고 동기화하므로, Storj와 B2에 사용하는 동일한 인터페이스로 스택에 이미 있는 다른 클라우드도 처리할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Storj and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## 동기화 작업 구축하기

Storj 버킷을 소스로, Backblaze B2 버킷을 대상으로 하는 단방향 동기화 작업을 생성하세요 — "대상만 수정"을 선택하면 B2를 Storj로 다시 쓰지 않는 순수한 미러로 유지할 수 있습니다. 고급 설정(Advanced Settings) 단계에서 체크섬 비교를 활성화하여 파일이 단순히 수정 시간이 아닌 해시와 크기로 매칭되도록 하세요. 이는 객체 메타데이터가 두 개의 서로 다른 스토리지 백엔드에서 다르게 동작할 때 중요합니다.

Storj에 4TB의 샤딩된 비디오 촬영 영상을 보유한 연구 그룹처럼 분산된 데이터셋을 아카이빙하는 팀의 경우, 필터링(Filtering) 단계를 사용하면 파일 연령이나 확장자별로 첫 실행 범위를 지정할 수 있어, 전체 전송을 진행하기 전에 하위 집합으로 파이프라인을 검증할 수 있습니다. 초기 동기화가 완료되면 예약된 재실행은 새롭거나 변경된 객체만 이동합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing a Storj bucket to Backblaze B2 with RcloneView" class="img-large img-center" />

먼저 드라이 런(Dry Run)을 실행하세요. 아무것도 전송하지 않고 복사될 모든 객체를 나열해 주므로, 서로 다른 가격 및 검색 특성을 가진 두 제공업체 간에 데이터를 이동하기 전에 범위를 확인하는 가장 안전한 방법입니다.

## 전송 모니터링 및 검증하기

하단 정보 뷰(Info View)의 전송(Transferring) 탭에서 진행 상황을 추적하세요 — 파일 수, 전송 속도, 완료 비율이 동기화가 실행되는 동안 실시간으로 업데이트됩니다. 완료되면 Storj 소스와 B2 대상 간에 폴더 비교(Folder Compare)를 열어 모든 객체가 도착했고 크기가 일치하는지 확인하세요. 이를 통해 어느 쪽에서든 네트워크 문제로 인해 도중에 실패한 객체를 발견할 수 있습니다.

작업 기록(Job History)은 각 동기화 실행의 기간, 이동된 총 데이터, 상태를 포함한 영구 기록을 보관하므로, B2 백업이 Storj와 마지막으로 최신 상태를 유지한 정확한 시점을 보여주는 감사 추적을 갖게 됩니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Storj to Backblaze B2 sync job history in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. S3 호환 엔드포인트와 액세스 자격 증명을 사용하여 Storj를 리모트로 추가하세요.
3. Application Key ID와 Application Key를 사용하여 Backblaze B2를 추가하세요.
4. 단방향 동기화 작업을 구축하고, 드라이 런을 실행한 다음, 실행하여 Storj를 B2로 미러링하세요.

분산 스토리지 데이터의 두 번째 중앙 호스팅 사본은 대부분의 백업 전략에서 발생하기 쉬운 격차를 메워주며, RcloneView는 이를 수작업이 아닌 예약된 GUI 기반 루틴으로 유지하는 것을 가능하게 합니다.

---

**관련 가이드:**

- [RcloneView로 Storj 분산 클라우드 동기화 관리하기](https://rcloneview.com/support/blog/manage-storj-decentralized-cloud-sync-rcloneview)
- [RcloneView로 Backblaze B2를 Wasabi로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-wasabi-rcloneview)
- [RcloneView로 Storj 업로드 오류 해결하기](https://rcloneview.com/support/blog/fix-storj-upload-errors-rcloneview)

<CloudSupportGrid />
