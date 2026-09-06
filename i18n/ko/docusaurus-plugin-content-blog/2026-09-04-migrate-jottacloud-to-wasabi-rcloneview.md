---
slug: migrate-jottacloud-to-wasabi-rcloneview
title: "Jottacloud에서 Wasabi로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - steve
description: "RcloneView를 사용하여 Jottacloud에서 Wasabi 오브젝트 스토리지로 파일을 마이그레이션하며, Dry Run 미리보기와 체크섬 검증으로 안전하게 전송하세요."
keywords:
  - jottacloud를 wasabi로 마이그레이션
  - jottacloud wasabi 전송
  - jottacloud wasabi 마이그레이션
  - rcloneview jottacloud
  - rcloneview wasabi
  - jottacloud wasabi 파일 이동
  - 클라우드 간 마이그레이션 도구
  - wasabi 오브젝트 스토리지 마이그레이션
  - jottacloud 백업 wasabi
tags:
  - RcloneView
  - jottacloud
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Jottacloud에서 Wasabi로 마이그레이션 — RcloneView로 파일 전송하기

> 로컬 디스크에 아무것도 다운로드하지 않고 Jottacloud 파일을 Wasabi의 저비용 오브젝트 스토리지로 바로 옮기세요.

Jottacloud와 같은 소비자용 클라우드에서 더 저렴한 장기 오브젝트 스토리지로 이전하는 팀은 종종 벽에 부딪힙니다: 파일은 노르웨이에 호스팅된 개인 클라우드 계정에 있고, 새로운 목적지는 완전히 다른 접근 방식을 가진 S3 호환 버킷입니다. RcloneView는 두 서비스를 리모트로 연결하여 로컬 스토리지를 거치지 않고 클라우드 간에 직접 전송할 수 있도록 하나의 창에서 이 간극을 메워줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView에서 두 리모트 연결하기

브라우저 기반 OAuth 로그인 흐름을 통해 Jottacloud를 리모트로 추가한 다음, Access Key ID, Secret Access Key, 올바른 리전 엔드포인트를 사용하여 S3 호환 리모트로 Wasabi를 추가하세요. 두 리모트 모두 Explorer 패널에 별도의 탭으로 나타나며, 2패널 레이아웃을 사용하여 왼쪽에 Jottacloud, 오른쪽에 Wasabi를 열 수 있습니다.

마운트 전용 도구와 달리, RcloneView는 FREE 라이선스에서도 동기화와 폴더 비교를 지원합니다. 즉, 단순한 드래그 앤 드롭 복사에만 제한되지 않고, 이 마이그레이션을 위한 전체 동기화 엔진, 필터링, Dry Run 도구를 사용할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="클라우드 간 마이그레이션을 위해 RcloneView에서 새 리모트 추가하기" class="img-large img-center" />

## Dry Run으로 마이그레이션 미리보기

무엇이든 옮기기 전에, Jottacloud를 소스로, 대상 Wasabi 버킷을 대상으로 하는 동기화 작업을 구성하세요. 동기화 방향을 일방향 "Modifying destination only"로 설정하여 Jottacloud의 어떤 것도 변경되지 않도록 하세요. 먼저 Dry Run 모드로 작업을 실행하세요 — RcloneView는 단 1바이트도 전송하지 않고 어떤 파일이 복사될지 정확히 보여주며, 이는 여러 해 동안 완전히 점검하지 않은 폴더 구조를 마이그레이션할 때 필수적입니다.

Jottacloud 계정에 새 버킷에 필요하지 않은 대용량 미디어 라이브러리나 아카이브가 있다면, 실제 전송이 시작되기 전에 필터링 단계를 사용하여 파일 유형을 제외하거나 최대 파일 크기를 설정하세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView에서 Jottacloud에서 Wasabi로의 클라우드 간 전송" class="img-large img-center" />

## 전송 확인 및 모니터링하기

Dry Run이 올바르게 보이면, Advanced Settings 단계에서 체크섬 비교를 활성화하여 RcloneView가 수정 시간이 아닌 해시와 크기로 파일을 비교하도록 하세요 — 이는 서로 매우 다른 두 스토리지 백엔드 간 이동 시 중요합니다. 작업을 시작하고 하단 Info View의 Transferring 탭으로 전환하여 데이터가 Wasabi에 도착하는 동안 실시간 진행률, 전송 속도, 파일 수를 확인하세요.

대용량 라이브러리의 경우, 파일 전송 수와 멀티스레드 전송 설정을 조정하여 대역폭을 더 잘 활용하고, Job History가 나중에 참조할 수 있도록 전체 실행을 기록하도록 하세요.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Jottacloud에서 Wasabi로의 마이그레이션 후 작업 기록 검토하기" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView 다운로드**.
2. OAuth 로그인으로 Jottacloud를 리모트로 추가한 다음, Access Key ID와 Secret Access Key로 Wasabi를 S3 호환 리모트로 추가하세요.
3. Jottacloud에서 Wasabi 버킷으로의 일방향 동기화 작업을 생성하고 Dry Run을 실행하여 복사될 정확한 파일을 미리 보세요.
4. 체크섬 검증을 활성화하고, 실제 동기화를 실행한 다음, Job History에서 완료된 전송을 확인하세요.

범용 클라우드에서 전용 오브젝트 스토리지로 마이그레이션한다고 해서 별도의 앱을 다루거나 느린 로컬 재업로드를 거칠 필요는 없습니다 — RcloneView는 하나의 인터페이스에서 전체 경로를 처리합니다.

---

**관련 가이드:**

- [Jottacloud 동기화 오류 해결 — RcloneView로 해결하기](https://rcloneview.com/support/blog/fix-jottacloud-sync-errors-rcloneview)
- [Wasabi 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Backblaze B2에서 Wasabi로 마이그레이션 — RcloneView로 파일 전송하기](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-wasabi-rcloneview)

<CloudSupportGrid />
