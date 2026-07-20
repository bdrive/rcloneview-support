---
slug: migrate-backblaze-b2-to-wasabi-rcloneview
title: "RcloneView로 Backblaze B2에서 Wasabi로 마이그레이션하기"
authors:
  - tayson
description: "RcloneView로 Backblaze B2에서 Wasabi로 마이그레이션하세요. 가격 모델을 비교하고, 두 리모트를 설정하고, 데이터를 전송한 후 단계별로 마이그레이션을 검증합니다."
keywords:
  - rcloneview
  - backblaze b2 to wasabi
  - migrate b2 to wasabi
  - wasabi cloud migration
  - backblaze migration tool
  - s3 compatible migration
  - cloud storage migration
  - wasabi no egress fees
  - b2 data transfer
  - object storage migration gui
tags:
  - RcloneView
  - backblaze-b2
  - wasabi
  - migration
  - cloud-migration
  - s3-compatible
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 Backblaze B2에서 Wasabi로 마이그레이션하기

> Backblaze B2는 저렴한 스토리지 비용을 제공하지만, 이그레스 및 API 요금이 누적될 수 있습니다 — **RcloneView**를 사용하면 Wasabi의 정액제 요금으로의 마이그레이션을 간단하고 검증 가능하게 처리할 수 있습니다.

Backblaze B2와 Wasabi는 비용에 민감한 팀들 사이에서 가장 인기 있는 S3 호환 오브젝트 스토리지 제공업체 중 두 곳입니다. B2는 낮은 GB당 스토리지 요금($0.006/GB/월)으로 잘 알려져 있지만, 이그레스 요금($0.01/GB)과 트랜잭션당 수수료가 포함된 가격 모델은 읽기 작업이 많은 워크로드를 가진 팀에게 예상치 못한 비용을 발생시킬 수 있습니다. Wasabi는 이그레스나 API 요금 없이 정액제($0.0069/GB/월)를 제공하여 비용을 완전히 예측 가능하게 만듭니다. RcloneView는 CLI 스크립팅 없이도 이 두 S3 호환 제공업체 간의 마이그레이션을 시각적 인터페이스로 처리합니다.

이 가이드는 가격 차이를 이해하는 것부터 전송 후 모든 오브젝트를 검증하는 것까지 전체 마이그레이션 과정을 다룹니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Backblaze B2에서 Wasabi로 마이그레이션해야 하는 이유

마이그레이션 결정은 대체로 예측 가능성으로 귀결됩니다. B2의 스토리지 요금은 Wasabi보다 약간 낮지만, 이그레스와 클래스 B/C 트랜잭션을 고려하면 전체 비용이 Wasabi의 정액제를 초과하는 경우가 많습니다 — 특히 데이터를 자주 읽는 워크로드에서 그렇습니다.

한 가지 시나리오를 생각해 보세요: B2에서 10TB 스토리지는 월 $60입니다. 해당 데이터 중 5TB를 매월 다운로드한다면(미디어 제공, 빌드 배포, 분석 실행), 이그레스 비용으로 $50이 추가됩니다. 파일 목록 조회와 다운로드에 대한 클래스 B 트랜잭션이 더 추가됩니다. Wasabi에서는 동일한 10TB가 데이터를 얼마나 읽든, API 호출을 얼마나 많이 하든 관계없이 총 월 $69입니다.

Wasabi는 또한 최소 90일 스토리지 정책을 유지합니다 — 90일 이전에 오브젝트를 삭제하면 남은 기간에 대해 일할 계산된 요금이 부과됩니다. 수명이 짧은 데이터를 저장하는 경우 이를 계획에 반영하세요.

## RcloneView에서 Backblaze B2 설정하기

리모트 관리자를 열고 Backblaze B2 리모트를 추가하세요. 네이티브 B2 API 또는 S3 호환 API 중 하나를 사용할 수 있습니다. 마이그레이션 목적이라면 S3 호환 엔드포인트를 사용하는 것이 권장됩니다. RcloneView가 소스와 대상 모두에 동일한 전송 로직을 사용할 수 있기 때문입니다.

B2 Application Key ID와 Application Key를 입력하세요. 버킷별 키가 있다면 보안을 강화하기 위해 이를 사용하세요 — 소스에는 읽기 권한만 있으면 됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Backblaze B2 remote in RcloneView" class="img-large img-center" />

## RcloneView에서 Wasabi 설정하기

Wasabi를 S3 호환 리모트로 추가하세요. 리모트 관리자에서 **Amazon S3 Compatible**을 선택하고 다음을 구성합니다:

- **Provider**: Wasabi
- **Access Key** 및 **Secret Key**: Wasabi 콘솔에서 생성
- **Region**: 사용자와 가장 가까운 리전 선택 (us-east-1, eu-central-1, ap-northeast-1 등)
- **Endpoint**: 선택한 리전에 따라 자동 구성

Wasabi 콘솔 또는 RcloneView의 탐색기를 통해 대상 버킷을 생성하세요. 지연 시간을 최소화하려면 주요 사용자 기반과 동일한 리전을 선택하세요.

## 마이그레이션 실행하기

B2가 왼쪽, Wasabi가 오른쪽에 있는 2단 탐색기를 여세요. 마이그레이션할 B2 버킷과 Wasabi 대상 버킷으로 이동합니다.

완전한 마이그레이션을 위해 동기화 작업을 생성하세요. RcloneView는 B2 버킷의 모든 오브젝트를 열거하고 이를 Wasabi 대상과 비교하여, 누락되었거나 변경된 항목만 전송합니다. 두 제공업체 모두 ETag를 통한 MD5 체크섬을 지원하므로 파일 비교가 빠르고 정확합니다.

전송 시 고려해야 할 주요 사항:

- **B2에서의 이그레스**: 마이그레이션 중 B2 이그레스 요금이 발생합니다. 비용을 최소화하려면 Backblaze의 Cloudflare와의 무료 이그레스 파트너십(해당 환경에 적용 가능한 경우) 또는 B2 대역폭 얼라이언스 사용을 고려하세요.
- **병렬 전송**: B2와 Wasabi 모두 높은 동시성을 지원합니다. 최적의 처리량을 위해 병렬 전송을 8~16으로 설정하세요.
- **대용량 파일**: 두 제공업체 모두 멀티파트 업로드를 지원합니다. RcloneView는 임계값을 초과하는 파일에 대해 자동으로 멀티파트를 사용하여 대용량 오브젝트의 신뢰성 있는 전송을 보장합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating Backblaze B2 to Wasabi in RcloneView two-pane explorer" class="img-large img-center" />

## 전송 진행 상황 모니터링

실시간 모니터링 대시보드는 전송 대기열에 있는 모든 파일의 상태를 보여줍니다. 파일별 진행률, 전체 완료율, 현재 전송 속도를 추적할 수 있습니다. 네트워크 상태가 변하면 전송을 일시 중지했다가 나중에 재개할 수 있습니다 — RcloneView는 중단된 지점부터 이어서 진행합니다.

수 테라바이트 규모의 마이그레이션은 수 시간에서 수일 동안 실행될 수 있습니다. RcloneView의 로깅 기능은 전송된 항목, 건너뛴 항목, 발생한 오류에 대한 완전한 기록을 제공합니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring B2 to Wasabi migration progress in RcloneView" class="img-large img-center" />

## 마이그레이션 검증하기

전송이 완료된 후, B2 소스와 Wasabi 대상 간에 비교 작업을 실행하세요. RcloneView는 한쪽에만 존재하는 파일과 크기 또는 체크섬이 다른 파일을 나열합니다. 차이가 없는 깨끗한 비교 결과는 성공적인 마이그레이션을 확인해 줍니다.

다음 사항에 주의하세요:

- **빈 디렉터리**: 오브젝트 스토리지에는 실제 디렉터리 개념이 없습니다. B2와 Wasabi 모두 접두사 기반 "폴더"를 사용합니다. RcloneView는 이를 일관되게 처리하지만, 애플리케이션 로직이 디렉터리 마커에 의존하지 않는지 확인하세요.
- **메타데이터 보존**: 표준 메타데이터(content-type, last-modified)는 S3 호환 전송 중에 보존됩니다. 커스텀 메타데이터(x-amz-meta-*) 역시 RcloneView에 의해 전송됩니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verifying B2 to Wasabi migration with compare in RcloneView" class="img-large img-center" />

## 마이그레이션 후 정리

마이그레이션을 검증하고 모든 애플리케이션 엔드포인트를 B2에서 Wasabi로 업데이트했다면:

1. **DNS 및 애플리케이션 설정 업데이트**: 서비스를 새 Wasabi 엔드포인트로 연결합니다.
2. **최종 동기화 실행**: 마이그레이션 기간 동안 B2에 추가된 파일을 반영합니다.
3. **B2 데이터를 일시적으로 유지**: 롤백 기간(일반적으로 2~4주) 동안 B2 버킷을 유지합니다.
4. **B2 데이터 삭제**: Wasabi에서 모든 것이 정상 작동함을 확인한 후 B2 버킷을 삭제하여 스토리지 요금 발생을 중단합니다.

보존 전략을 계획할 때 Wasabi의 90일 최소 스토리지 정책을 기억하세요. 90일 이전에 Wasabi에서 오브젝트를 삭제하면 전체 90일 기간에 대한 요금이 청구됩니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing migration job history in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 리모트 관리자에서 Backblaze B2와 Wasabi를 S3 호환 리모트로 추가하세요.
3. 2단 탐색기를 사용하여 B2에서 Wasabi로 동기화 작업을 실행하고 실시간으로 진행 상황을 모니터링하세요.
4. 비교 기능으로 마이그레이션을 검증하고 애플리케이션 엔드포인트를 업데이트하세요.

B2와 Wasabi는 둘 다 훌륭한 오브젝트 스토리지 제공업체이지만, 예측 가능한 비용이 중요하다면 Wasabi의 정액제 모델이 우세합니다 — 그리고 RcloneView는 그 전환을 수월하게 만들어 줍니다.

---

**관련 가이드:**

- [AWS S3 및 S3 호환 스토리지 추가](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [폴더 내용 비교](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [실시간 전송 모니터링](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)

<CloudSupportGrid />
