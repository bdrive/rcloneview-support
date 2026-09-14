---
slug: migrate-seafile-to-backblaze-b2-rcloneview
title: "Seafile를 Backblaze B2로 마이그레이션하기 — RcloneView로 파일 전송하기"
authors:
  - steve
description: "RcloneView, 안정적인 클라우드 간 전송을 위한 크로스플랫폼 GUI로 셀프 호스팅 Seafile에서 Backblaze B2로 라이브러리를 이전하세요."
keywords:
  - seafile를 backblaze b2로 마이그레이션
  - seafile backblaze b2 마이그레이션
  - seafile 클라우드 백업
  - 셀프 호스팅에서 클라우드로 마이그레이션
  - backblaze b2 gui
  - rcloneview seafile
  - 크로스플랫폼 파일 전송
  - seafile 라이브러리 백업
tags:
  - RcloneView
  - seafile
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Seafile를 Backblaze B2로 마이그레이션하기 — RcloneView로 파일 전송하기

> 명령줄을 사용하지 않고 셀프 호스팅 Seafile 라이브러리를 Backblaze B2 오브젝트 스토리지로 옮기세요.

자체 하드웨어나 사설 서버에서 Seafile을 운영하는 팀은 결국 벽에 부딪히게 됩니다. 로컬 디스크 용량이 가득 차거나, 서버 유지 관리가 부담이 되거나, 재해 복구를 위한 오프사이트 복제본이 필요해지는 경우입니다. Backblaze B2는 이런 데이터를 위한 비용 효율적이고 내구성이 뛰어난 대상 스토리지를 제공하지만, 셀프 호스팅 동기화 플랫폼과 오브젝트 스토리지 간의 전송을 조율하는 일은 대부분의 파일 관리자가 잘 처리하지 못하는 작업입니다. RcloneView는 Seafile과 Backblaze B2를 같은 창에서 리모트로 연결해, 라이브러리를 직접 탐색하고 비교하고 이동할 수 있게 해 줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Seafile과 Backblaze B2를 리모트로 연결하기

Seafile은 다른 리모트와 마찬가지로 RcloneView에 추가되며, 폴더 트리와 브레드크럼 경로 표시줄과 함께 탐색 가능한 라이브러리 파일 목록을 제공합니다. Backblaze B2는 리모트를 만들 때 Application Key ID와 Application Key를 직접 입력해야 합니다 — OAuth 리디렉션도 없고 별도의 CLI 설정도 필요 없습니다. 두 리모트 모두 탭으로 표시되며, 수평 또는 수직 분할을 사용해 한 패널에서 Seafile을, 다른 패널에서 B2 버킷을 열 수 있습니다.

마운트만 지원하는 다른 도구들과 달리, RcloneView는 FREE 라이선스에서도 동기화와 폴더 비교 기능을 제공하므로, 일회성 전송을 위해 단순한 드래그 앤 드롭에만 의존할 필요가 없습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Backblaze B2 remote alongside Seafile in RcloneView" class="img-large img-center" />

두 리모트가 모두 보이면, 규모가 작은 라이브러리는 패널 간 드래그 앤 드롭으로 옮기고, 재시도와 필터링이 필요한 대규모 지속 전송은 Sync 작업으로 설정하세요.

## Sync 작업으로 마이그레이션 실행하기

전체 라이브러리를 마이그레이션할 때는 Seafile을 소스로, Backblaze B2 버킷을 대상으로 하는 Sync 작업을 구성하세요. 4단계 마법사에서는 동시 파일 전송 수와 멀티스레드 전송 수를 설정할 수 있는데, 이는 공유 문서 라이브러리에서 흔히 볼 수 있는 수천 개의 소규모 파일을 옮길 때 중요합니다. 체크섬 비교를 활성화하면 한 번 지나갔다고 그냥 넘기지 않고 해시와 크기로 파일을 검증할 수 있습니다.

전송을 확정하기 전에 Dry Run을 실행해 어떤 파일이 복사될지 정확히 미리 확인하세요. 이는 특히 수년간 실제로 사용된 라이브러리를 마이그레이션할 때 유용한데, B2 스토리지를 소모하기 전에 오래되었거나 예상보다 훨씬 큰 파일을 미리 드러내 주기 때문입니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a Seafile to Backblaze B2 sync job in RcloneView" class="img-large img-center" />

## 전송 필터링 및 검증하기

Seafile 라이브러리에는 문서 유형, 임시 파일, 버전 기록 아티팩트가 섞여 있는 경우가 많으며, 이를 B2에 그대로 중복시키고 싶지는 않을 것입니다. RcloneView의 필터링 설정을 사용하면 파일 유형, 경로, 연령별로 항목을 제외할 수 있습니다 — 예를 들어 코드 관련 라이브러리에서 `.git/` 폴더를 건너뛰거나, 아카이브 마이그레이션을 위해 지정한 연수보다 오래된 파일을 제외하는 식입니다. 사용자 지정 필터는 확장자 제외를 위한 `.iso`나 루트 수준 경로 제외를 위한 `/.git/*`처럼 간단한 패턴을 사용합니다.

작업이 완료되면 Job History에 실행 유형, 소요 시간, 총 크기, 전송 속도, 파일 수가 기록되어, 마이그레이션이 제대로 끝났는지 관계자가 물었을 때 참고할 수 있는 기록을 남길 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing a completed Seafile to Backblaze B2 migration" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 계정 자격 증명을 사용해 Seafile 서버를 리모트로 추가하세요.
3. Application Key ID와 Application Key로 Backblaze B2 리모트를 만드세요.
4. Seafile에서 B2로 Sync 작업을 설정하고, Dry Run을 실행한 다음 실행하고 Job History에서 확인하세요.

셀프 호스팅 인프라를 벗어난다고 해서 워크플로를 처음부터 다시 만들어야 하는 것은 아닙니다 — 두 엔드포인트를 하나의 탐색기 안에 두면, 마이그레이션은 하나의 추적 가능한 작업으로 단순해집니다.

---

**관련 가이드:**

- [Storj 분산형 클라우드 동기화 관리하기](https://rcloneview.com/support/blog/manage-storj-decentralized-cloud-sync-rcloneview)
- [Nextcloud를 Backblaze B2로 동기화하기](https://rcloneview.com/support/blog/sync-nextcloud-to-backblaze-b2-rcloneview)
- [Seafile 동기화 오류 해결하기](https://rcloneview.com/support/blog/fix-seafile-sync-errors-rcloneview)

<CloudSupportGrid />
