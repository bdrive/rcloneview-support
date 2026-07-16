---
slug: aws-s3-vs-cloudflare-r2-object-storage-comparison-rcloneview
title: "AWS S3 vs Cloudflare R2: RcloneView 사용자를 위한 오브젝트 스토리지 비교"
authors:
  - tayson
description: "AWS S3와 Cloudflare R2를 오브젝트 스토리지 관점에서 비교합니다. 가격, 송신(egress) 비용, 성능, 기능을 분석하여 RcloneView에 적합한 백엔드를 선택해 보세요."
keywords:
  - aws s3 vs cloudflare r2
  - s3 vs r2
  - cloudflare r2 comparison
  - object storage comparison
  - s3 egress fees
  - r2 no egress
  - cloud storage pricing
  - s3 compatible storage
  - best object storage
  - rcloneview storage comparison
tags:
  - amazon-s3
  - cloudflare-r2
  - comparison
  - storage-comparison
  - cost-optimization
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# AWS S3 vs Cloudflare R2: RcloneView 사용자를 위한 오브젝트 스토리지 비교

> AWS S3는 오브젝트 스토리지 업계 표준입니다. Cloudflare R2는 송신(egress) 비용을 완전히 없앴습니다. RcloneView는 두 서비스에 모두 연결되며, 어떻게 선택해야 하는지 알아봅니다.

AWS S3는 오브젝트 스토리지라는 카테고리를 만들어냈으며, 11개의 9로 표현되는 내구성, 포괄적인 라이프사이클 관리, AWS 생태계와의 깊은 통합을 갖춘 가장 널리 사용되는 서비스로 남아 있습니다. Cloudflare R2는 송신 비용 제로라는 파격적인 가격 우위를 내세우며 직접적인 경쟁자로 등장했습니다. 여러 제공업체에 걸쳐 데이터를 관리하는 RcloneView 사용자에게는 S3와 R2의 장단점을 이해하는 것이 비용과 기능 모두를 최적화하는 데 도움이 됩니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 가격 비교

### 스토리지 비용

| 등급 | AWS S3 | Cloudflare R2 |
|---|---|---|
| Standard | $0.023/GB/월 | $0.015/GB/월 |
| Infrequent Access | $0.0125/GB/월 | 지원 안 함 |
| Glacier Instant | $0.004/GB/월 | 지원 안 함 |
| Glacier Deep Archive | $0.00099/GB/월 | 지원 안 함 |

R2는 활성 스토리지 기준으로 S3 Standard보다 35% 저렴합니다. 하지만 S3의 계층형 스토리지 클래스(Infrequent Access, Glacier, Deep Archive)는 거의 접근하지 않는 데이터에 대해 훨씬 낮은 가격을 제공합니다. 접근 패턴이 혼합된 데이터를 다룬다면, S3의 라이프사이클 정책을 통해 오브젝트를 시간이 지남에 따라 더 저렴한 등급으로 자동 전환할 수 있습니다. 이는 R2가 제공하지 않는 기능입니다.

### 송신(Egress) 비용

이 부분이 R2의 대표적인 강점입니다. AWS S3는 인터넷으로 전송되는 데이터에 대해 GB당 $0.09를 부과합니다(전송량이 많을수록 요율이 낮아지고, CloudFront로의 전송은 무료입니다). Cloudflare R2는 송신 비용이 $0.00으로, 모든 데이터 조회가 무료입니다.

월 10TB의 송신 워크로드를 기준으로 보면 그 차이는 극명합니다. S3에서는 약 $900/월인 반면 R2에서는 $0입니다. 스토리지 위주이면서 송신량이 적은 워크로드라면 그 차이가 작아지고, S3의 생태계 이점이 송신 비용 절감분을 상회할 수도 있습니다.

### API 작업

| 작업 | AWS S3 | Cloudflare R2 |
|---|---|---|
| PUT/POST (Class A) | $0.005/1,000건 | $0.0045/1,000건 (첫 100만 건 무료) |
| GET (Class B) | $0.0004/1,000건 | $0.00036/1,000건 (첫 1,000만 건 무료) |
| DELETE | 무료 | 무료 |

R2는 API 작업에 대해 넉넉한 무료 사용량을 제공하며, 무료 사용량을 초과한 이후에도 작업당 요금이 약간 더 저렴합니다. API 호출량이 많은 워크로드(작은 오브젝트에 대한 수백만 건의 작업)라면 R2의 무료 사용량이 상당한 비용 절감 효과를 가져다줍니다.

## 기능 비교

### 스토리지 클래스와 라이프사이클

**AWS S3**는 여섯 가지 스토리지 클래스(Standard, Intelligent-Tiering, Standard-IA, One Zone-IA, Glacier Instant Retrieval, Glacier Flexible Retrieval, Glacier Deep Archive)를 제공하며, 오브젝트의 사용 기간이나 접근 패턴에 따라 자동으로 전환하는 라이프사이클 정책을 지원합니다.

**Cloudflare R2**는 단일 스토리지 클래스에 Infrequent Access 등급을 추가로 제공합니다. Glacier에 상응하는 콜드 스토리지 옵션은 없으며 라이프사이클 관리 기능도 제한적입니다.

아카이브용 워크로드라면 GB당 월 $0.00099인 S3의 Glacier Deep Archive를 따라올 수 없습니다.

### 내구성과 가용성

두 서비스 모두 높은 내구성을 제공합니다. AWS S3는 99.999999999%(11개의 9)의 내구성을 공식적으로 명시합니다. Cloudflare는 R2에 대해 구체적인 내구성 수치를 공개하지 않지만, 여러 가용 영역에 걸쳐 높은 내구성을 갖도록 설계되었다고 밝히고 있습니다.

S3 Standard는 99.99%의 가용성을 제공합니다. R2는 구체적인 SLA를 공개하지 않지만 Cloudflare의 글로벌 네트워크의 이점을 누릴 수 있습니다.

### 생태계 통합

**AWS S3**는 Lambda, CloudFront, Athena, EMR, SageMaker, CloudTrail을 비롯한 수백 개의 다른 서비스와 함께 AWS 생태계 전반과 통합됩니다. IAM 정책, 버킷 정책, VPC 엔드포인트를 통해 세밀한 접근 제어가 가능합니다.

**Cloudflare R2**는 Cloudflare Workers(엣지 컴퓨팅), Cloudflare CDN, Cloudflare 대시보드와 통합됩니다. 통합이 더 긴밀하고 단순하지만 범위는 더 좁습니다.

### S3 API 호환성

두 서비스 모두 S3 API를 지원합니다. R2는 가장 많이 사용되는 S3 작업(GET, PUT, DELETE, 멀티파트 업로드, 오브젝트 목록 조회)을 구현하지만 모든 S3 기능을 지원하지는 않습니다. 특히 S3 Select, S3 Object Lambda, 그리고 일부 고급 버킷 구성은 R2에서 사용할 수 없습니다.

RcloneView는 동일한 S3 호환 리모트 유형으로 두 서비스에 모두 연결되므로, RcloneView 내에서 서비스 간 전환은 엔드포인트와 자격 증명만 변경하면 됩니다.

## RcloneView로 두 서비스를 함께 사용하기

RcloneView의 멀티 클라우드 접근 방식 덕분에 둘 중 하나만 선택할 필요가 없습니다. 흔히 쓰이는 전략은 아카이브 데이터에는 S3를 사용해(Glacier 등급을 활용) 비용을 절감하고, 자주 접근하는 데이터에는 R2를 사용해(송신 비용을 없애) 최적화하는 것입니다. RcloneView는 두 서비스 사이에서 몇 번의 클릭만으로 동기화, 복사, 마이그레이션을 두 창 탐색기에서 수행할 수 있습니다.

Remote Manager에서 두 서비스를 모두 S3 호환 리모트로 설정하면, 이후는 RcloneView가 처리합니다. 버킷 내용을 비교하고, 마이그레이션을 실행하거나, 지속적인 복제 작업을 예약할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Managing AWS S3 and Cloudflare R2 side by side in RcloneView" class="img-large img-center" />

## 제공업체 선택 기준

**AWS S3를 선택해야 하는 경우:**
- 라이프사이클 정책과 Glacier 콜드 스토리지 등급이 필요한 경우.
- 워크로드가 다른 AWS 서비스와 통합되는 경우.
- S3 Select, Object Lambda, Inventory 같은 고급 기능이 필요한 경우.
- 스토리지 용량 대비 데이터 송신량이 적은 경우.
- 공식적으로 명시된 11개의 9 내구성 SLA가 필요한 경우.

**Cloudflare R2를 선택해야 하는 경우:**
- 데이터 송신 비용이 전체 비용에서 큰 비중을 차지하는 경우.
- Cloudflare의 CDN 네트워크를 통해 콘텐츠를 제공하는 경우.
- 애플리케이션이 엣지 컴퓨팅을 위해 Cloudflare Workers를 사용하는 경우.
- 송신 비용 걱정 없이 단순하고 예측 가능한 가격을 원하는 경우.
- 콜드 스토리지 등급이 필요하지 않은 데이터를 다루는 경우.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. Remote Manager에서 AWS S3와 Cloudflare R2를 S3 호환 리모트로 추가합니다.
3. 두 창 탐색기에서 두 리모트를 나란히 탐색합니다.
4. 비용과 접근 요구 사항에 따라 두 리모트 간에 데이터를 마이그레이션, 동기화, 복제합니다.

AWS S3는 생태계의 깊이와 아카이브 등급을 갖춘, 여전히 오브젝트 스토리지의 표준이라 할 수 있습니다. Cloudflare R2는 송신 비용을 없앰으로써 가격 모델을 뒤흔들고 있습니다. RcloneView를 사용하면 벤더 종속 없이 두 서비스를 모두 활용하거나 자유롭게 전환할 수 있습니다.

---

**관련 가이드:**

- [AWS S3 및 S3 호환 스토리지 추가](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [폴더 내용 비교하기](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [동기화 작업 생성하기](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)

<CloudSupportGrid />
