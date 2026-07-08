---
slug: manage-seagate-lyve-cloud-sync-backup-rcloneview
title: "Seagate Lyve Cloud 관리 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - kai
description: "RcloneView로 Seagate Lyve Cloud 스토리지를 관리하는 방법을 알아보세요. 이 S3 호환 클라우드 스토리지 GUI를 사용하여 파일을 동기화, 백업, 전송할 수 있습니다."
keywords:
  - Seagate Lyve Cloud
  - RcloneView Seagate
  - Lyve Cloud 동기화
  - Lyve Cloud 백업
  - S3 호환 스토리지 GUI
  - 오브젝트 스토리지 관리
  - Lyve Cloud RcloneView
  - Seagate 클라우드 스토리지 관리
  - 클라우드 파일 전송 도구
  - Lyve Cloud 파일 관리자
tags:
  - RcloneView
  - cloud-storage
  - cloud-sync
  - backup
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Seagate Lyve Cloud 관리 — RcloneView로 파일 동기화 및 백업하기

> Seagate Lyve Cloud를 RcloneView에 연결하여 S3 호환 오브젝트 스토리지를 GUI로 완전히 제어하세요 — 명령줄을 사용하지 않고도 탐색, 동기화, 백업, 마운트가 가능합니다.

Seagate Lyve Cloud는 높은 처리량이 요구되는 워크로드와 장기 데이터 보존을 위해 구축된 S3 호환 오브젝트 스토리지 플랫폼입니다. 감시 카메라 영상, 대용량 미디어 아카이브, 기업 데이터셋 등 무엇을 관리하든, Lyve Cloud의 아키텍처는 대용량 데이터를 위한 매력적인 스토리지 계층입니다. RcloneView에 연결하면 모든 버킷이 탐색 가능한 파일 트리로 바뀌어, RcloneView가 지원하는 90개 이상의 다른 제공업체와 자유롭게 드래그, 드롭, 동기화, 예약 작업을 수행할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView에서 Seagate Lyve Cloud를 리모트로 추가하기

Seagate Lyve Cloud는 S3 프로토콜을 사용하므로, 다른 S3 호환 제공업체와 동일한 방식으로 구성합니다: Access Key, Secret Key, 그리고 해당 지역의 Lyve Cloud 엔드포인트가 필요합니다.

RcloneView를 열고 **Remote > New Remote**로 이동한 다음, 제공업체 유형으로 **Amazon S3**를 선택하세요. 다음 화면에서 제공업체 하위 유형 목록에서 **Seagate Lyve Cloud**를 선택하면 — RcloneView가 해당 지역에 맞는 올바른 엔드포인트 형식을 자동으로 적용합니다. Lyve Cloud 콘솔에서 생성한 API 자격 증명(Access Key ID와 Secret Access Key)을 입력한 후 리모트를 저장하세요. 몇 초 안에 버킷이 로컬 폴더처럼 파일 탐색기에 나타납니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Seagate Lyve Cloud remote in RcloneView" class="img-large img-center" />

조직이 여러 Lyve Cloud 지역에서 운영되는 경우, 각각을 별도의 이름을 가진 리모트로 추가하세요 — 예를 들어 `lyve-us`, `lyve-eu`, `lyve-ap` — 그리고 RcloneView의 듀얼 패널 탐색기에서 나란히 비교하거나 동기화할 수 있습니다.

## Lyve Cloud로 파일 동기화 및 백업하기

리모트가 연결되면 드래그 앤 드롭으로 즉시 임시 전송을 시작하거나, Job Manager를 사용해 반복 가능한 동기화 작업을 만들 수 있습니다. 흔한 워크플로우는 영상 제작 스튜디오가 로컬 서버에서 4K 프로젝트 렌더 파일을 Lyve Cloud로 동기화하여 장기 아카이브로 보관하는 동시에, 빠른 접근을 위해 다른 클라우드에도 동시에 미러를 유지하는 것입니다.

**Home > Sync**로 이동하여 로컬 폴더나 다른 클라우드 리모트를 소스로 선택하고, 대상으로 Lyve Cloud 버킷을 선택하세요. 동기화 마법사의 Advanced Settings에서 동시 전송 스레드 수를 조정하고, 해시 기반 체크섬 검증을 활성화하며, Filtering 단계에서 파일 나이나 크기 필터를 설정할 수 있습니다 — 예를 들어 감시 녹화 파일 중 `.tmp`와 `.part` 파일을 제외할 수 있습니다. 설정에 만족하면 **Dry Run**을 클릭하여 운영 데이터를 건드리지 않고 어떤 파일이 이동할지 정확히 미리 볼 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to Seagate Lyve Cloud in RcloneView" class="img-large img-center" />

PLUS 라이선스가 있으면 crontab 형식의 표현식으로 작업을 예약할 수 있습니다 — 수동 개입 없이 Lyve Cloud로의 일일 비피크 시간대 전송을 설정하세요.

## 전송 모니터링 및 작업 기록 확인하기

RcloneView 하단 패널의 **Transferring** 탭은 실행 중인 모든 작업에 대해 전송 속도, 파일 개수, 진행률(%), 그리고 실행 중인 전송을 취소할 수 있는 버튼을 실시간으로 보여줍니다. 각 작업이 완료되면 **Job History** 뷰에 시작 시간, 소요 시간, 총 전송 바이트, 평균 속도, 최종 상태가 기록됩니다 — 스토리지 출처 문서화가 필요한 규정 준수가 중요한 업계에 유용한 감사 추적 기록을 제공합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history for Seagate Lyve Cloud sync transfers in RcloneView" class="img-large img-center" />

여러 사이트에서 Lyve Cloud를 운영하는 팀이라면, 동기화 작업 설정을 JSON 파일로 내보내고 다른 컴퓨터에서 가져올 수 있습니다 — 수동으로 다시 입력할 필요 없이 동일한 작업 설정을 보장합니다.

## Lyve Cloud를 로컬 드라이브로 마운트하기

파일을 먼저 다운로드하지 않고 애플리케이션이 Lyve Cloud에서 직접 읽어야 하는 워크플로우의 경우, RcloneView의 마운트 기능은 Lyve Cloud 버킷을 로컬 드라이브 문자(Windows) 또는 마운트 경로(macOS/Linux)에 매핑합니다. **Remote > Mount Manager**로 이동하여 Lyve Cloud 리모트를 대상으로 하는 새 마운트를 생성하고 **Save and mount**를 클릭하세요. 버킷이 Windows 탐색기나 macOS Finder에 드라이브로 나타납니다.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting Seagate Lyve Cloud bucket as a local drive in RcloneView" class="img-large img-center" />

기본 VFS 캐시 모드(`writes`)는 업로드 전에 쓰기를 로컬에 버퍼링하여, 지연 시간이 높은 연결에서도 반응성 좋은 성능을 제공합니다. 로컬 캐싱의 이점을 활용하는 읽기 위주의 워크플로우라면, 마운트 설정에서 `full` 캐시 모드로 전환하세요.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **Remote > New Remote**로 이동하여 **Amazon S3**를 선택한 다음, 제공업체 하위 유형으로 **Seagate Lyve Cloud**를 선택하세요.
3. Lyve Cloud Access Key ID와 Secret Access Key를 입력한 후 리모트를 저장하세요.
4. 파일 탐색기에서 Seagate Lyve Cloud 리모트를 열고 즉시 버킷을 탐색해 보세요.

연결이 완료되면 로컬 스토리지나 다른 클라우드에서 Lyve Cloud로 파일을 이동하는 동기화 작업을 만들고 — 매일 밤 자동으로 실행되도록 예약하여 손댈 필요 없는 아카이빙을 구현하세요.

---

**관련 가이드:**

- [Wasabi 클라우드 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Backblaze B2 클라우드 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Amazon S3 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
