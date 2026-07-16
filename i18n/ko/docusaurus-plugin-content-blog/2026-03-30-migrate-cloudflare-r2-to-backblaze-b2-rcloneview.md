---
slug: migrate-cloudflare-r2-to-backblaze-b2-rcloneview
title: "Cloudflare R2에서 Backblaze B2로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - tayson
description: "RcloneView의 시각적 인터페이스를 사용해 Cloudflare R2에서 Backblaze B2로 파일을 마이그레이션하는 방법을 알아보세요. CLI 명령어 없이 S3 호환 스토리지를 전송할 수 있습니다."
keywords:
  - cloudflare r2 to backblaze b2
  - migrate r2 to b2
  - cloudflare r2 migration
  - backblaze b2 transfer
  - cloud-to-cloud migration
  - rcloneview cloud transfer
  - s3 compatible migration
  - object storage migration
  - r2 backup to b2
tags:
  - cloudflare-r2
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Cloudflare R2에서 Backblaze B2로 마이그레이션 — RcloneView로 파일 전송하기

> Cloudflare R2에서 Backblaze B2로 이전한다고 해서 터미널에서 스크립트를 작성하거나 API 토큰을 관리해야 하는 것은 아닙니다.

Cloudflare R2는 제로 이그레스(zero-egress) 요금제를 제공하지만, 일부 팀은 Backblaze B2의 더 깊은 생태계 통합, 라이프사이클 정책, Bandwidth Alliance 파트너십이 장기적으로 더 적합하다고 판단합니다. 오브젝트 스토리지를 통합하는 경우든 워크로드를 이전하는 경우든, RcloneView를 사용하면 클릭 몇 번만으로 R2의 모든 버킷을 B2로 마이그레이션할 수 있습니다 — CLI가 필요하지 않습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Cloudflare R2에서 Backblaze B2로 마이그레이션해야 하는 이유

Backblaze B2는 Cloudflare(Bandwidth Alliance를 통해)와 Fastly 같은 CDN 파트너와 네이티브 통합을 제공하므로, 해당 네트워크를 통한 B2 이그레스는 무료이거나 대폭 할인됩니다. B2는 자체 네이티브 API와 함께 S3 호환 API 엔드포인트도 지원하므로 애플리케이션 연결 방식에 유연성을 제공합니다. 애플리케이션 수준의 라이프사이클 규칙, 서버 측 암호화 키 관리, 또는 이벤트 알림이 필요한 팀에게 B2는 R2의 현재 기능 세트로는 아직 제공되지 않는 기능을 제공합니다.

비용 예측 가능성도 하나의 요인입니다. Backblaze B2는 스토리지에 대해 TB당 월 6달러의 고정 요금을 부과하며, 파트너 네트워크를 통한 이그레스는 무료입니다. 이미 아키텍처가 Cloudflare CDN을 통해 트래픽을 라우팅하고 있다면, 컴퓨팅 및 Workers 비용을 고려했을 때 B2 스토리지와 Cloudflare 전송의 조합이 R2 단독보다 더 경제적일 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Cloudflare R2 and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## RcloneView에서 두 리모트 설정하기

RcloneView를 열고 Cloudflare R2용 새 리모트를 생성합니다. 제공업체 유형으로 "Amazon S3 Compliant"를 선택한 다음, S3 제공업체 드롭다운에서 "Cloudflare R2"를 선택합니다. R2 액세스 키 ID, 시크릿 액세스 키, 그리고 엔드포인트 URL을 입력합니다 — 일반적으로 `https://<account-id>.r2.cloudflarestorage.com` 형식입니다. RcloneView는 저장하기 전에 연결을 검증합니다.

다음으로 Backblaze B2 리모트를 추가합니다. 네이티브 B2 제공업체 유형 또는 S3 호환 인터페이스 중 하나를 사용할 수 있습니다. 네이티브 옵션의 경우 B2 애플리케이션 키 ID와 애플리케이션 키를 입력합니다. 연결되면 RcloneView가 기존 버킷을 자동으로 나열합니다. 대상 버킷이 아직 존재하지 않으면 먼저 B2 콘솔에서 원하는 지역과 암호화 설정으로 버킷을 생성하세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring cloud-to-cloud transfer from R2 to B2" class="img-large img-center" />

## 마이그레이션 실행하기

두 리모트가 모두 구성되면 RcloneView의 듀얼 패널 탐색기를 엽니다. 한쪽에는 R2 리모트를, 다른 쪽에는 B2 리모트를 선택합니다. R2의 소스 버킷과 B2의 대상 버킷으로 이동합니다. 버킷 전체 내용을 드래그 앤 드롭하거나 특정 프리픽스와 폴더를 선택해서 전송할 수 있습니다.

대규모 마이그레이션의 경우 동기화 또는 복사 작업을 생성하세요. Job Manager로 이동해 R2를 소스로, B2를 대상으로 설정하고 "Copy" 모드를 선택하면 전환 과정에서 R2의 파일을 삭제하지 않고도 B2에 파일이 도착하도록 보장할 수 있습니다. 체크섬 검증을 활성화하면 모든 오브젝트가 손상 없이 도착했는지 확인할 수 있습니다 — R2와 B2 모두 S3 호환 업로드에서 MD5 체크섬을 지원하므로, RcloneView는 종단 간 무결성을 검증할 수 있습니다.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files from Cloudflare R2 to Backblaze B2" class="img-large img-center" />

## 전송 예약 및 모니터링

R2 버킷에 테라바이트 단위의 데이터가 있다면 마이그레이션을 예약된 작업으로 나누세요. RcloneView의 스케줄러를 사용하면 네트워크 포화를 피하기 위해 트래픽이 적은 시간대에 전송을 실행할 수 있습니다. 작업별로 대역폭 제한을 설정해 다른 서비스가 원활하게 계속 실행되도록 하세요.

전송 대시보드에서 진행 상황을 모니터링하면 실시간 처리량, 파일 수, 오류를 확인할 수 있습니다. 초기 복사가 완료되면 작업을 "Sync" 모드로 전환하고, R2에서 B2로 애플리케이션 엔드포인트를 전환할 때까지 주기적으로 실행하세요.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling R2 to B2 migration jobs in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. S3 호환 자격 증명과 계정 엔드포인트를 사용해 Cloudflare R2 리모트를 추가합니다.
3. 애플리케이션 키 ID와 애플리케이션 키로 Backblaze B2 리모트를 추가합니다.
4. 체크섬 검증을 활성화한 상태로 R2에서 B2로의 복사 작업을 생성한 다음, 트래픽이 적은 시간대에 실행되도록 예약합니다.

B2에서 모든 오브젝트가 검증되면 애플리케이션 엔드포인트를 업데이트하고 원하는 속도로 R2 버킷을 폐기하세요.

---

**관련 가이드:**

- [RcloneView로 Cloudflare R2에서 AWS S3로 이전하기](https://rcloneview.com/support/blog/move-from-cloudflare-r2-to-aws-s3-with-rcloneview)
- [RcloneView로 Cloudflare R2와 AWS S3 비교하기](https://rcloneview.com/support/blog/compare-cloudflare-r2-and-aws-s3-with-rcloneview)
- [RcloneView로 S3, Wasabi, R2 통합 관리하기](https://rcloneview.com/support/blog/centralize-s3-wasabi-r2-with-rcloneview)

<CloudSupportGrid />
