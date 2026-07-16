---
slug: migrate-wasabi-to-cloudflare-r2-rcloneview
title: "RcloneView로 Wasabi에서 Cloudflare R2로 마이그레이션하기"
authors:
  - tayson
description: "RcloneView를 사용해 Wasabi에서 Cloudflare R2로 마이그레이션하세요. 요금을 비교하고, 두 S3 호환 리모트를 설정하고, 데이터를 전송하고, 마이그레이션을 단계별로 검증합니다."
keywords:
  - rcloneview
  - wasabi to cloudflare r2
  - migrate wasabi to r2
  - cloudflare r2 migration
  - wasabi migration tool
  - s3 compatible migration
  - cloud storage migration
  - r2 no egress fees
  - wasabi data transfer
  - object storage migration gui
tags:
  - wasabi
  - cloudflare-r2
  - migration
  - cloud-migration
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 Wasabi에서 Cloudflare R2로 마이그레이션하기

> Wasabi와 Cloudflare R2는 모두 S3 호환이며 AWS S3의 저비용 대안으로 마케팅되지만, 요금 모델에는 중요한 차이가 있습니다 — **RcloneView**는 시각적 인터페이스로 두 서비스 간의 마이그레이션을 처리합니다.

Wasabi는 이그레스 비용 없이 월 $6.99/TB의 핫 클라우드 스토리지를 제공하지만, 90일 최소 저장 기간과 최소 월 요금을 부과합니다. Cloudflare R2는 이그레스 비용 없이, 최소 저장 기간 제한 없이 월 $0.015/GB(약 $15.36/TB)를 청구합니다. 데이터 조회가 잦거나 단기 객체가 많은 워크로드의 경우 R2가 훨씬 저렴할 수 있습니다. RcloneView는 두 서비스 모두에 S3 호환 리모트로 연결하며 간단한 마이그레이션 경로를 제공합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Wasabi에서 Cloudflare R2로 마이그레이션해야 하는 이유

두 서비스 모두 이그레스 비용을 없앤 것이 AWS S3 대비 주요 장점입니다. 마이그레이션 결정은 대체로 다음 요인에 달려 있습니다.

- **최소 저장 기간**: Wasabi는 객체를 더 일찍 삭제하더라도 최소 90일치 저장 요금을 청구합니다. R2는 최소 기간이 없어 일시적이거나 자주 교체되는 데이터에 더 적합합니다.
- **CDN 통합**: R2는 Cloudflare의 CDN 네트워크와 네이티브로 통합되어, 추가 설정 없이 Cloudflare 도메인을 통해 저장된 객체에 즉시 공개 접근할 수 있습니다.
- **Workers 통합**: 애플리케이션이 Cloudflare Workers를 사용한다면, R2는 엣지 컴퓨팅에서 지연 없는 접근을 제공합니다.
- **규모에 따른 요금**: 스토리지 사용량이 많은 워크로드의 경우 Wasabi의 균일한 TB당 요금이 더 저렴할 수 있습니다. API 호출량이 많은 워크로드의 경우 R2의 요금 모델(월 1,000만 건의 Class B 요청까지 무료)이 유리할 수 있습니다.

## 두 리모트 설정하기

### Wasabi 리모트

RcloneView의 리모트 관리자를 열고 S3 호환 리모트를 추가합니다. 공급자로 **Wasabi**를 선택하고 Wasabi Access Key와 Secret Key를 입력한 후, 리전 엔드포인트(예: `s3.us-east-1.wasabisys.com`)를 지정합니다. 마이그레이션할 버킷을 선택합니다.

### Cloudflare R2 리모트

다른 S3 호환 리모트를 추가하고 공급자로 **Cloudflare R2**를 선택합니다. R2 Access Key ID와 Secret Access Key(Cloudflare 대시보드의 R2 > Manage R2 API Tokens에서 생성)를 입력합니다. 엔드포인트는 `https://<account-id>.r2.cloudflarestorage.com` 형식을 따릅니다. Cloudflare 대시보드에서 대상 버킷을 생성하거나 설정 중에 RcloneView가 버킷을 생성하도록 할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Wasabi and Cloudflare R2 remotes in RcloneView" class="img-large img-center" />

## 마이그레이션 실행하기

왼쪽 창에는 Wasabi를, 오른쪽 창에는 R2를 엽니다. Wasabi의 소스 버킷과 R2의 대상 버킷으로 이동합니다.

두 공급자 모두 S3 API를 사용하므로 메타데이터 전송이 간단합니다 — 콘텐츠 유형, 캐시 제어 헤더, 사용자 정의 메타데이터가 그대로 유지됩니다. RcloneView는 전송 중 서버 측 메타데이터를 사용해 추가 설정 없이 객체 속성을 보존합니다.

초기 마이그레이션에는 복사(copy) 작업을 사용하세요. RcloneView는 MD5 체크섬을 사용해 파일을 비교하고(Wasabi와 R2 모두 비멀티파트 업로드에 대해 표준 MD5 ETag를 반환함), 새 파일이나 변경된 파일만 전송합니다. 동시성을 설정할 수 있는 멀티스레드 전송으로 마이그레이션을 효율적으로 유지할 수 있으며, 대규모 버킷 마이그레이션의 경우 전송 수를 8-16으로 설정하세요.

Wasabi의 최소 저장 기간에 유의하세요. 객체가 최근(지난 90일 이내)에 업로드되었다면, 삭제하더라도 Wasabi에서 전체 90일에 대한 요금이 청구됩니다. 마이그레이션 일정을 이에 맞게 계획하세요 — 먼저 마이그레이션하고, 검증한 후, 90일 기간이 지난 뒤에 Wasabi에서 삭제하세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Wasabi to Cloudflare R2 in RcloneView" class="img-large img-center" />

## 마이그레이션 검증하기

전송이 끝나면 RcloneView의 비교 기능을 사용해 모든 객체가 R2에 도착했는지 확인하세요. Wasabi 소스와 R2 대상을 선택하고 폴더 비교를 실행합니다. 동일한 객체는 일치하는 것으로 표시되고, 누락되거나 다른 객체는 검토를 위해 강조 표시됩니다.

추가적인 확신을 위해 양쪽에서 체크섬을 계산하는 확인(check) 작업을 실행하세요. 이는 바이트 수준에서 데이터 무결성을 검증합니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying Wasabi to R2 migration in RcloneView" class="img-large img-center" />

## 마이그레이션 후 정리

마이그레이션을 검증한 후:

1. 애플리케이션 설정을 Wasabi 대신 R2 엔드포인트를 가리키도록 업데이트합니다.
2. 애플리케이션 접근을 테스트하여 R2에서 모든 것이 제대로 작동하는지 확인합니다.
3. 조기 삭제 요금을 피하기 위해 Wasabi에서 객체를 삭제하기 전에 90일 최소 저장 기간이 지나기를 기다립니다.
4. Wasabi 버킷을 삭제하고 Wasabi 액세스 키를 비활성화합니다.

전환 기간 동안 두 공급자를 병렬로 운영해야 한다면, RcloneView에서 매일 동기화 작업을 예약하여 Wasabi에 추가된 새 객체로 R2를 계속 최신 상태로 유지하세요.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling sync from Wasabi to R2 during transition" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. Wasabi와 Cloudflare R2를 S3 호환 리모트로 추가합니다.
3. Wasabi에서 R2로 복사 작업을 실행합니다.
4. 비교 및 확인 작업으로 검증합니다.
5. 애플리케이션 엔드포인트를 업데이트하고 보존 기간이 지난 후 Wasabi를 정리합니다.

Wasabi와 R2 모두 강력한 S3 호환 옵션이지만, 워크로드 특성이 변화할 때 RcloneView는 마이그레이션을 수월하게 만들어 줍니다.

---

**관련 가이드:**

- [AWS S3 및 S3 호환 스토리지 추가하기](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [폴더 내용 비교하기](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [동기화 작업 생성하기](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)

<CloudSupportGrid />
