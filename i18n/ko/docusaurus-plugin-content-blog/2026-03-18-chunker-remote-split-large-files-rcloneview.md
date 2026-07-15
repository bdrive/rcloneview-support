---
slug: chunker-remote-split-large-files-rcloneview
title: "청커 리모트 — RcloneView에서 용량 제한이 있는 클라우드 프로바이더를 위해 대용량 파일 분할하기"
authors:
  - tayson
description: "일부 클라우드 프로바이더는 특정 크기를 넘는 파일을 거부합니다. Rclone의 청커 리모트는 업로드 시 대용량 파일을 자동으로 분할하고 다운로드 시 다시 조립합니다."
keywords:
  - rclone chunker remote
  - split large files cloud
  - cloud file size limit
  - upload large files cloud
  - chunked upload cloud
  - large file cloud storage
  - rclone split files
  - file size limit workaround
  - cloud upload size limit
  - chunker rcloneview
tags:
  - RcloneView
  - feature
  - performance
  - cloud-storage
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 청커 리모트 — RcloneView에서 용량 제한이 있는 클라우드 프로바이더를 위해 대용량 파일 분할하기

> 동영상 파일이 15GB인데 클라우드 프로바이더의 업로드 제한이 5GB라면 어떻게 해야 할까요? 동영상을 재인코딩하거나 다른 프로바이더를 찾는 대신, 청커 리모트가 파일을 자동으로 분할해 줍니다.

일부 클라우드 스토리지 프로바이더는 최대 파일 크기 제한을 두고 있습니다. Google Drive는 5TB로 제한되어 있어 문제가 되는 경우가 거의 없지만, 다른 프로바이더 — 특히 무료 요금제, WebDAV 엔드포인트, 일부 S3 호환 서비스 — 는 훨씬 낮은 제한을 가지고 있습니다. Rclone의 청커 리모트는 대용량 파일을 업로드 시 청크(chunk)로 투명하게 분할하고 다운로드 시 다시 조립하여 이 문제를 해결합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 청커 작동 방식

청커 리모트는 다른 리모트를 감싸며 다음과 같이 동작합니다.

1. 설정 가능한 크기를 초과하는 파일을 **번호가 매겨진 청크로 분할**
2. 각 청크를 클라우드 프로바이더에 **개별적으로 업로드**
3. **다운로드 시** 청크를 조립해 원본 파일로 복원
4. **투명하게 동작** — 탐색기에는 청크가 아니라 원본 파일이 표시됩니다

예를 들어 15GB 파일을 5GB 청크 크기로 설정하면 프로바이더 측에는 5GB짜리 청크 세 개로 저장됩니다. 탐색하거나 다운로드할 때는 하나의 15GB 파일로 표시됩니다.

## 청커가 필요한 경우

| 시나리오 | 해결 방법 |
|----------|----------|
| 프로바이더에 파일 크기 제한이 있는 경우 | 제한을 초과하는 부분을 청커가 분할 |
| WebDAV 서버가 대용량 업로드를 거부하는 경우 | 더 작은 조각으로 청크 분할 |
| 파일당 제한이 있는 무료 요금제 | 제한에 맞게 분할 |
| 대용량 업로드 중 네트워크가 끊기는 경우 | 청크가 작을수록 재시도가 쉬움 |

## 청커 리모트 설정하기

<img src="/support/images/en/blog/new-remote.png" alt="Create chunker remote" class="img-large img-center" />

대상 스토리지 리모트를 감싸는 청커 리모트를 생성하세요. 프로바이더의 제한에 맞게 청크 크기를 설정합니다.

## 다른 리모트와 결합하기

청커는 다른 특수 리모트와 함께 계층적으로 사용할 수 있습니다.

- **청커 + 암호화(Crypt)**: 대용량 파일을 분할하면서 동시에 암호화
- **청커 + 압축(Compress)**: 대용량 파일을 분할하면서 동시에 압축
- **청커 + 모든 프로바이더**: 70개 이상의 모든 프로바이더에서 작동

## 유의 사항

- **청크는 프로바이더별로 종속됩니다**: 특정 프로바이더용으로 분할된 청크는 반드시 동일한 청커 설정을 통해 접근해야 합니다
- **청크를 직접 수정하지 마세요**: 무결성을 유지하려면 항상 청커 리모트를 통해 접근해야 합니다
- **청크 크기를 신중하게 선택하세요**: 너무 작으면 파일 수가 많아져 목록 조회가 느려지고, 너무 크면 청커를 사용하는 의미가 없어집니다

## 사용 사례

### VM 이미지 백업

가상 머신 디스크 이미지는 흔히 50~200GB에 달합니다. 청커는 업로드 제한이 있는 프로바이더를 위해 이를 분할합니다.

### 대용량 미디어 파일 아카이브

4K 동영상 파일, RAW 오디오 마스터, 단일 파일 제한을 초과하는 대용량 데이터셋에 활용할 수 있습니다.

### 업로드 안정성 향상

네트워크 연결이 불안정할 때는 청크가 작을수록 재시도가 쉽습니다. 1GB 청크가 실패하면 전체 50GB 파일이 아니라 1GB만 다시 전송하면 됩니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **스토리지 리모트를 평소처럼 추가**하세요.
3. 이를 감싸는 **청커 리모트를 생성**하세요.
4. 청커를 통해 **대용량 파일을 업로드**하세요.

아무리 큰 파일도, 아무리 작은 프로바이더 제한도 문제없습니다.

---

**관련 가이드:**

- [압축 리모트](https://rcloneview.com/support/blog/compress-remote-reduce-backup-size-rcloneview)
- [가상 리모트: 결합, 유니언, 별칭](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [클라우드 백업 암호화하기](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
