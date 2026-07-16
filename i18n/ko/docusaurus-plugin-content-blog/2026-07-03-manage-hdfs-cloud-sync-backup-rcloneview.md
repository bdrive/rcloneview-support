---
slug: manage-hdfs-cloud-sync-backup-rcloneview
title: "HDFS 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - kai
description: "Hadoop Distributed File System(HDFS) 클러스터를 RcloneView에 연결하여 90개 이상의 클라우드 제공업체에서 빅데이터 스토리지를 탐색, 동기화, 백업하세요."
keywords:
  - hdfs rcloneview
  - manage hdfs cloud storage
  - hadoop distributed file system gui
  - hdfs to cloud migration
  - hdfs cloud backup
  - sync hdfs to cloud storage
  - hdfs rclone gui
  - hybrid data lake cloud sync
  - on-prem hadoop cloud backup
tags:
  - self-hosted
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# HDFS 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기

> Hadoop 클러스터에는 수년간 처리된 데이터가 쌓여 있지만, 그 데이터를 온프레미스 스토리지와 클라우드 사이에서 이동하려면 보통 스크립트와 CLI 도구를 다뤄야 합니다 — RcloneView는 HDFS에 시각적인 홈을 제공합니다.

Hadoop Distributed File System(HDFS)은 수많은 온프레미스 빅데이터 파이프라인을 뒷받침하는 스토리지 계층이지만, Hadoop 생태계 밖에서 해당 데이터를 확인, 전송, 아카이브할 친숙한 방법이 없습니다. RcloneView는 SFTP, FTP, WebDAV와 마찬가지로 HDFS를 프로토콜 기반 리모트로 연결하므로, 데이터 엔지니어는 익숙한 파일 탐색기에서 클러스터 콘텐츠를 탐색하고 distcp 작업이나 별도의 스크립트를 작성하지 않고도 데이터셋을 클라우드 스토리지와 주고받을 수 있습니다. Windows, macOS, Linux에서 동일하게 작동하므로, 데이터 팀이 모두 같은 운영체제를 사용하지 않을 때에도 문제없습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## HDFS 클러스터를 리모트로 추가하기

HDFS는 RcloneView의 프로토콜 기반 스토리지 카테고리에 속하며, SFTP 및 WebDAV 연결에 사용되는 것과 동일한 New Remote 마법사를 통해 설정됩니다. 클러스터를 추가하면 Explorer 패널에 자체 탭으로 표시되며, 클러스터의 네임노드 전반에 저장된 데이터셋을 탐색할 수 있는 표준 폴더 트리, 파일 목록, 썸네일 보기를 사용할 수 있습니다. 복사, 다운로드, 이름 변경, 크기 확인 같은 마우스 오른쪽 클릭 작업은 다른 리모트와 정확히 동일하게 작동하므로, `hadoop fs` 명령에 익숙하지 않은 엔지니어도 HDFS에 실제로 무엇이 있는지 확인할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding an HDFS remote in RcloneView's New Remote wizard" class="img-large img-center" />

RcloneView는 하나의 창에서 90개 이상의 제공업체를 마운트하고 동기화할 수 있으므로, HDFS를 탐색하는 동일한 세션에서 Google Drive, S3 버킷, 로컬 디스크를 인접한 패널에 열어 직접 비교할 수 있습니다.

## 온프레미스 스토리지와 클라우드 오브젝트 스토리지 연결하기

HDFS를 RcloneView에 연결하는 가장 흔한 이유는 비용이 많이 들고 용량이 제한된 클러스터에서 콜드 데이터나 처리된 데이터를 꺼내어 장기 보관을 위해 더 저렴한 클라우드 스토리지로 옮기는 것입니다. "대상만 수정" 방향으로 설정한 단방향 동기화 작업은 원본을 건드리지 않고 HDFS의 출력물 — 처리된 데이터셋, 모델 학습 산출물, 로그 아카이브 — 을 S3, Azure Blob, Backblaze B2 버킷으로 복사합니다. 동기화 마법사 3단계의 필터링 설정을 사용하면 작업 범위를 특정 파일 유형으로 제한하거나 Hadoop 작업이 남기는 중간 산출물인 `_SUCCESS` 및 임시 파일을 제외할 수 있어, 대상 버킷에는 실제로 보관할 가치가 있는 것만 남게 됩니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing HDFS cluster data to cloud object storage in RcloneView" class="img-large img-center" />

대용량 데이터셋의 경우, 고급 설정에서 파일 전송 수와 멀티스레드 전송 수를 조정하면 클러스터와 대상 사이의 가용 대역폭을 최대한 활용할 수 있으며, 동등성 검사기(equality checker) 수를 적당히 유지하면 비교 단계에서 네임노드에 불필요한 읽기 부하가 걸리는 것을 방지할 수 있습니다.

## 반복 아카이빙 작업 예약하기

데이터 파이프라인은 한 번만 실행되고 끝나는 경우가 거의 없습니다. PLUS 라이선스 사용자는 HDFS 동기화 작업에 크론탭 방식의 일정을 연결하여, 각 배치 실행 후 새로 생성된 출력물이 자동으로 클라우드 스토리지에 미러링되도록 할 수 있습니다. 이렇게 하면 누군가 수동으로 전송을 시작하는 것을 기억할 필요가 없습니다. Job History는 모든 실행 — 상태, 전송된 크기, 소요 시간 — 을 추적하여, 각 데이터셋이 클러스터를 떠난 정확한 시점과 도착 위치를 보여주는 감사 기록을 팀에 제공합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a recurring HDFS to cloud storage sync job in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 프로토콜 기반 스토리지 옵션을 사용하여 HDFS 클러스터를 새 리모트로 추가하세요.
3. Explorer 패널에서 클러스터를 탐색하여 데이터셋과 권한이 올바른지 확인하세요.
4. 임시 파일을 제외하는 필터를 적용하여 아카이브용 클라우드 대상으로의 단방향 동기화 작업을 설정하세요.

HDFS를 클라우드 리모트와 같은 창으로 가져오면, 스크립트에 의존하던 오류 발생하기 쉬운 내보내기 과정이 모니터링하고 예약할 수 있는 반복 가능한 작업으로 바뀝니다.

---

**관련 가이드:**

- [MinIO 스토리지 관리 — RcloneView에서 자체 호스팅 클라우드 동기화](https://rcloneview.com/support/blog/manage-minio-self-hosted-cloud-sync-rcloneview)
- [데이터 과학자를 위한 클라우드 스토리지 — RcloneView로 데이터셋 간소화하기](https://rcloneview.com/support/blog/cloud-storage-data-scientists-rcloneview)
- [AI 학습 데이터셋 파이프라인 — RcloneView로 구축 및 동기화하기](https://rcloneview.com/support/blog/ai-training-dataset-pipeline-rcloneview)

<CloudSupportGrid />
