---
slug: fix-s3-multipart-upload-failures-rcloneview
title: "RcloneView에서 S3 멀티파트 업로드 실패 해결하기"
authors:
  - tayson
description: "RcloneView에서 S3 멀티파트 업로드 실패 문제를 진단하고 해결하세요. 불완전한 업로드, 파트 크기 오류, 고아 멀티파트 세션을 해결하는 방법을 안내합니다."
keywords:
  - rcloneview
  - s3 multipart upload failure
  - fix s3 upload error
  - multipart upload incomplete
  - s3 upload timeout
  - s3 part size error
  - orphaned multipart upload
  - s3 upload troubleshooting
  - rclone s3 multipart
  - cloud upload fix
tags:
  - troubleshooting
  - amazon-s3
  - s3-compatible
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView에서 S3 멀티파트 업로드 실패 해결하기

> S3 멀티파트 업로드는 대용량 파일을 청크로 분할하여 병렬 전송과 재개를 가능하게 하지만, 진행 중 실패가 발생하면 불완전한 업로드가 남고 스토리지가 낭비되며 전송이 막힐 수 있습니다 — RcloneView에서 이를 해결하는 방법을 알아봅니다.

Amazon S3 및 S3 호환 제공업체(Wasabi, Backblaze B2 S3, Cloudflare R2, MinIO, DigitalOcean Spaces)는 5GB보다 큰 파일에 대해 멀티파트 업로드를 요구하며, 100MB보다 큰 파일에도 이를 권장합니다. 파일은 파트(기본적으로 각 5MB에서 5GB)로 분할되어 병렬로 업로드된 후 서버 측에서 조립됩니다. 이 과정이 네트워크 중단, 타임아웃, 또는 잘못 설정된 파트 크기로 인해 중간에 실패하면, 스토리지를 소모하지만 사용 가능한 오브젝트를 생성하지 못하는 불완전한 업로드가 남게 됩니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 일반적인 증상

- **업로드가 멈추거나 정지함**: 대용량 파일 전송이 중간에 멈춘 것처럼 보입니다. RcloneView의 모니터링에서 장시간 진행 상황이 표시되지 않습니다.
- **"EntityTooSmall" 오류**: 최소 크기(대부분의 S3 제공업체에서 5MB)보다 작은 파트가 업로드되었습니다. 이는 파일 크기에 비해 청크 크기 설정이 너무 작을 때 주로 발생합니다.
- **"EntityTooLarge" 오류**: 단일 파트가 허용 최대 크기(5GB)를 초과했습니다.
- **"InvalidPart" 또는 "InvalidPartOrder"**: 파트가 순서에 맞지 않게 업로드되었거나 전송 중 파트가 손상되었습니다. 서버가 완료 요청을 거부합니다.
- **스토리지 사용량은 증가하지만 파일이 나타나지 않음**: 불완전한 멀티파트 업로드가 스토리지를 소모합니다. 파트는 서버에 존재하지만 최종 오브젝트가 조립되지 않습니다.

## 해결 방법 1: 청크 크기 조정

멀티파트 실패의 가장 흔한 원인은 파일 크기에 비해 청크 크기가 잘못 설정된 경우입니다. S3는 업로드당 최대 10,000개의 파트를 허용합니다. 청크 크기가 대용량 파일에 비해 너무 작으면 업로드가 파트 제한을 초과하여 실패합니다.

**예시**: 기본 5MB 청크 크기로 500GB 파일을 업로드하면 100,000개의 파트가 필요하며, 이는 10,000개 파트 제한을 크게 초과합니다.

RcloneView에서는 S3 리모트를 설정할 때 또는 작업의 고급 옵션에서 청크 크기를 조정할 수 있습니다. 일반적인 기준은 청크 크기를 최소 `file_size / 10,000` 이상으로 설정하는 것입니다. 500GB 파일의 경우 최소 50MB 청크를 사용하세요. 대부분의 작업에서는 64MB에서 128MB 청크가 병렬성과 안정성 간의 적절한 균형을 제공합니다.

RcloneView의 사용자 지정 플래그 필드에서 `--s3-chunk-size` 플래그로 이를 설정할 수 있습니다.

## 해결 방법 2: 업로드 타임아웃 늘리기

느린 연결에서 대용량 파트를 전송하면 기본 타임아웃을 초과할 수 있습니다. 연결 속도가 10Mbps보다 느리면 128MB 청크를 업로드하는 데 100초 이상이 걸릴 수 있으며, 이는 기본 타임아웃 한계에 근접합니다.

`--timeout` 플래그로 타임아웃을 늘리세요. 예를 들어 `--timeout 300s`는 각 파트에 최대 5분의 시간을 허용합니다. 개별 파트의 전송 속도를 높이기 위해 청크 크기를 줄일 수도 있습니다.

## 해결 방법 3: 전송 동시성 줄이기

너무 많은 파트를 동시에 업로드하면 네트워크 연결이나 S3 엔드포인트에 과부하가 걸릴 수 있습니다. 멀티파트 업로드 중 타임아웃이나 연결 재설정이 자주 발생한다면 동시 전송 수를 줄이세요.

RcloneView의 작업 설정에서 전송(transfers) 수를 기본값(4)에서 매우 큰 파일의 경우 2 또는 1로 낮추세요. `--s3-upload-concurrency`를 사용하여 단일 파일의 몇 개 파트가 병렬로 업로드되는지 제어할 수도 있습니다(기본값은 4).

## 해결 방법 4: 고아 멀티파트 업로드 정리

실패한 멀티파트 업로드는 서버에 고아 파트를 남겨 스토리지를 소모하고 비용을 발생시킵니다. 이러한 파트는 오브젝트로 표시되지 않으며, RcloneView나 AWS 콘솔에서 버킷을 탐색할 때 보이지 않습니다.

고아 업로드를 정리하려면:

- **AWS S3**: 버킷에 라이프사이클 규칙을 설정하여 지정한 일수(예: 7일)가 지난 후 불완전한 멀티파트 업로드를 자동으로 중단하도록 하세요. 이는 AWS 콘솔의 버킷 관리(Management) 탭에서 설정합니다.
- **rclone 사용**: RcloneView의 내장 터미널에서 `rclone cleanup remote:bucket`을 실행하세요. 지정된 버킷의 모든 대기 중인 멀티파트 업로드를 중단합니다.
- **S3 호환 제공업체**: 대부분의 제공업체가 동일한 라이프사이클 규칙이나 정리 명령을 지원하지만, 세부 사항은 해당 제공업체의 문서를 확인하세요.

## 해결 방법 5: 실패 시 재시도 활성화

멀티파트 업로드 중 네트워크 중단은 개별 파트의 실패를 유발할 수 있습니다. RcloneView는 실패한 작업을 자동으로 재시도합니다(기본값은 지수 백오프를 사용한 3회 재시도). 일시적인 실패가 자주 발생한다면 사용자 지정 플래그에서 `--retries 5` 또는 `--retries 10`으로 재시도 횟수를 늘리세요.

매우 불안정한 연결의 경우, 개별 HTTP 요청을 실패한 작업으로 간주하기 전에 재시도하도록 `--low-level-retries 10`도 설정하세요.

## 해결 방법 6: 가능한 경우 서버 측 복사 사용

동일한 제공업체의 두 S3 호환 버킷 간에 복사하는 경우, 서버 측 복사를 사용하면 멀티파트 업로드 문제를 완전히 피할 수 있습니다 — 데이터가 사용자의 컴퓨터를 거치지 않고 제공업체의 네트워크 내에서 이동합니다. 소스와 대상이 동일한 S3 제공업체에 있을 때 RcloneView는 자동으로 서버 측 복사를 사용합니다.

제공업체 간 전송(예: AWS S3에서 Cloudflare R2로)의 경우, 데이터는 사용자의 컴퓨터를 거쳐야 하며 대상 측에서 멀티파트 업로드가 적용됩니다.

## 향후 실패 방지하기

- **청크 크기를 사전에 설정**: 1GB보다 큰 파일을 업로드하기 전에 필요한 청크 크기(`file_size / 10,000`)를 계산하여 사용자 지정 플래그에 설정하세요.
- **라이프사이클 정리 활성화**: 불완전한 멀티파트 업로드를 중단하도록 항상 라이프사이클 규칙을 설정하세요. 이렇게 하면 고아 파트가 누적되는 것을 방지할 수 있습니다.
- **전송 모니터링**: RcloneView의 실시간 모니터링을 사용하여 정지된 업로드를 조기에 발견하세요. 정지된 전송을 일시 중지했다가 재개하면 일시적인 문제가 해결되는 경우가 많습니다.
- **드라이런으로 테스트**: 중요한 업로드의 경우, RcloneView의 드라이런 모드를 사용하여 커밋 전에 전송 계획을 확인하세요.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 가장 큰 파일에 적합한 청크 크기로 S3 리모트를 설정하세요.
3. 버킷에 라이프사이클 규칙을 설정하여 고아 업로드를 자동으로 정리하세요.
4. 전송을 실시간으로 모니터링하고 필요에 따라 동시성을 조정하세요.

멀티파트 업로드 실패는 S3에서 대용량 파일을 다룰 때 가장 흔히 발생하는 문제입니다. 적절한 청크 크기 설정, 타임아웃 설정, 고아 업로드 정리를 통해 대부분의 경우를 해결할 수 있습니다.

---

**관련 가이드:**

- [AWS S3 및 S3 호환 스토리지 추가](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [실시간 전송 모니터링](https://rcloneview.com/support/howto/rcloneview-basic/real-time-transfer-monitoring)
- [동기화 작업 생성](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)

<CloudSupportGrid />
