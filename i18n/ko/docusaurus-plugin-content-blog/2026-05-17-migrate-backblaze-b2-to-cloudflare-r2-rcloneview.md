---
slug: migrate-backblaze-b2-to-cloudflare-r2-rcloneview
title: "Backblaze B2를 Cloudflare R2로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - alex
description: "RcloneView로 Backblaze B2 오브젝트 스토리지를 Cloudflare R2로 마이그레이션하세요. 체크섬 검증을 포함한 단계별 GUI 가이드로 CLI 명령이 필요 없습니다."
keywords:
  - Backblaze B2 to Cloudflare R2 migration
  - migrate B2 to R2
  - Cloudflare R2 migration guide
  - RcloneView cloud migration
  - B2 to R2 transfer
  - object storage migration
  - Backblaze to Cloudflare
  - cloud storage migration tool
  - S3 compatible migration
  - transfer B2 bucket rcloneview
tags:
  - RcloneView
  - backblaze-b2
  - cloudflare-r2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Backblaze B2를 Cloudflare R2로 마이그레이션 — RcloneView로 파일 전송하기

> B2 버킷을 Cloudflare R2로 옮기는 것은 RcloneView에서 간단한 클라우드 간(cloud-to-cloud) 작업입니다 — 두 리모트를 추가하고, 복사 작업을 설정한 다음, 체크섬 비교로 무결성을 검증하면 됩니다.

Backblaze B2와 Cloudflare R2는 모두 인기 있는 S3 호환 오브젝트 스토리지 플랫폼이며, 인프라 요구사항이 변화함에 따라 많은 팀이 이 둘 사이에서 데이터를 옮겨야 하는 상황을 맞닥뜨립니다. 데이터를 로컬로 내려받았다가 다시 업로드하는 대신, RcloneView는 rclone의 클라우드 간 전송 엔진을 통해 서버 측에서 전송을 처리합니다 — 명령어를 하나도 작성하지 않고 GUI를 통해 버킷 전체를 마이그레이션할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Backblaze B2와 Cloudflare R2를 리모트로 추가하기

마이그레이션을 실행하기 전에 RcloneView에서 두 스토리지 계정을 모두 연결하세요.

**Backblaze B2:** **Remote** > **New Remote**를 열고 Backblaze B2를 선택한 다음, Application Key ID와 Application Key를 입력합니다. 저장하면 RcloneView 탐색기에 B2 버킷이 표시됩니다.

**Cloudflare R2:** 두 번째 리모트를 추가하고 Cloudflare R2를 선택한 다음, API 토큰, 계정 ID, R2 엔드포인트를 입력합니다. B2와 마찬가지로 R2 버킷이 탐색기에 즉시 나타납니다.

두 리모트가 모두 연결되면 RcloneView의 듀얼 패널 인터페이스에서 나란히 탐색하며 마이그레이션을 시작하기 전에 소스 버킷과 대상 버킷이 올바른지 확인할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Backblaze B2 and Cloudflare R2 remotes in RcloneView" class="img-large img-center" />

## 클라우드 간 마이그레이션 실행하기

**Job Manager**를 열고 새 복사(Copy) 또는 동기화(Sync) 작업을 만듭니다. Backblaze B2 버킷(또는 그 안의 특정 프리픽스)을 소스로, Cloudflare R2 버킷을 대상으로 설정합니다.

Advanced Settings 단계에서 네트워크 용량에 맞게 동시 파일 전송 수를 설정하세요 — 값이 높을수록 작은 파일이 많은 버킷의 전송 속도가 빨라지고, 대용량 미디어 아카이브는 멀티스레드 전송의 이점을 얻습니다. **체크섬 검증**을 활성화하면 크기와 수정 시간에만 의존하는 대신 해시 비교를 통해 B2와 R2가 파일 무결성에서 일치하는지 확인할 수 있습니다.

실제 전송 전에 **Dry Run**을 실행하세요. 미리보기에서 복사될 모든 오브젝트가 표시되어, 작업을 실행하기 전에 예상치 못한 필터 일치나 경로 불일치를 발견할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Backblaze B2 to Cloudflare R2 in RcloneView" class="img-large img-center" />

## 전송 상황을 실시간으로 모니터링하기

작업이 시작되면 하단 Info View의 **Transferring** 탭에 실시간 진행 상황이 표시됩니다: 파일별 전송 속도, 전체 처리량, 완료된 오브젝트 수와 남은 오브젝트 수. 예를 들어 수만 개의 파일로 이루어진 비디오 아카이브처럼 대규모 B2 버킷의 경우, 실시간 뷰를 통해 지연이 발생하는지 조기에 파악하고 필요하면 취소하거나 조정할 수 있습니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring during B2 to R2 migration in RcloneView" class="img-large img-center" />

전송이 완료되면 **Job History** 탭에서 전체 요약을 확인하세요: 이동한 총 용량, 전송 속도, 파일 수, 최종 상태. 체크섬 검증이 완료되고 오류가 0건으로 표시된 실행 결과는 R2 버킷이 원본 B2 데이터와 바이트 단위로 완전히 동일함을 의미합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history confirming successful Backblaze B2 to Cloudflare R2 migration" class="img-large img-center" />

**PLUS 라이선스**가 있으면 단계적 전환(staged cutover) 과정에서 B2에 새 오브젝트가 추가될 때마다 R2를 최신 상태로 유지하도록 증분 동기화 작업을 예약할 수 있습니다 — 한 번의 대규모 배치 대신 여러 단계에 걸쳐 마이그레이션을 진행하는 방식입니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. **Remote** > **New Remote**를 통해 Backblaze B2 계정을 추가합니다(Application Key ID + Application Key).
3. Cloudflare R2 계정을 추가합니다(API 토큰 + 계정 ID + 엔드포인트).
4. **Job Manager**를 열고 B2에서 R2로의 복사 작업을 생성한 다음 체크섬 검증을 활성화합니다.
5. 먼저 Dry Run을 실행한 후 실제 마이그레이션을 실행하고 Job History에서 결과를 확인합니다.

RcloneView는 CLI 전문 지식이나 중간 로컬 저장소가 필요 없게 해줍니다 — B2 데이터는 완전한 무결성 검증을 거쳐 R2로 직접 이동합니다.

---

**관련 가이드:**

- [Backblaze B2 클라우드 스토리지 관리 — RcloneView로 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Cloudflare R2 클라우드 스토리지 관리 — RcloneView로 동기화하기](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [RcloneView로 Cloudflare R2를 Backblaze B2로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-cloudflare-r2-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
