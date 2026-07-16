---
slug: manage-dreamhost-object-storage-rcloneview
title: "DreamHost DreamObjects 관리 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - robin
description: "DreamHost DreamObjects를 RcloneView에 연결하여 CLI 명령어 없이 시각적으로 S3 호환 버킷을 관리하고, 파일을 동기화하며, 자동 백업을 수행하세요."
keywords:
  - DreamHost DreamObjects
  - DreamObjects S3 storage
  - DreamHost cloud backup
  - S3 compatible storage management
  - sync files to DreamObjects
  - DreamHost object storage RcloneView
  - cloud backup web developers
  - S3 cloud storage GUI
  - DreamHost file sync
tags:
  - s3-compatible
  - object-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# DreamHost DreamObjects 관리 — RcloneView로 파일 동기화 및 백업하기

> DreamHost DreamObjects는 비용 효율적인 S3 호환 오브젝트 스토리지입니다—RcloneView를 사용하면 명령줄을 사용하지 않고도 버킷을 탐색하고, 파일을 동기화하고, 백업을 예약할 수 있습니다.

DreamHost DreamObjects는 DreamHost에서 호스팅되는 웹사이트와 자연스럽게 짝을 이룹니다: 백업, 미디어 자산, 정적 파일을 S3 호환 API 뒤에 있는 이중화된 하드웨어에 저장합니다. 이미 DreamHost에서 호스팅 중인 팀이라면 DreamObjects를 RcloneView에 연결하여 두 개의 패널로 구성된 파일 탐색기에서 모든 것을 관리함으로써 이러한 투자를 체계적인 클라우드 백업으로 확장할 수 있습니다. FREE 라이선스에서도 S3, Azure, Backblaze B2를 전체 읽기/쓰기 권한으로 연결할 수 있으며, DreamObjects도 예외가 아닙니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## DreamObjects가 전용 워크플로우를 필요로 하는 이유

수십 개의 클라이언트 프로젝트를 관리하는 웹 에이전시는 정기적으로 오프사이트 복사본이 필요한 업로드된 미디어, 데이터베이스 내보내기, 빌드 산출물을 기가바이트 단위로 축적하게 됩니다. DreamObjects는 호스팅에 대해 전혀 알지 못하는 별도의 공급업체 클라우드 계정 없이도 그러한 오프사이트 대상을 제공합니다. 야간 내보내기 파일을 실제 사이트와 함께 DreamObjects에 저장해두면, 마이그레이션이나 실수로 인한 삭제가 발생했을 때 복구는 여러 공급업체를 헤매는 것이 아니라 동일한 공급업체 관계에서 파일을 가져오는 문제로 단순화됩니다.

DreamObjects는 S3 호환이기 때문에, RcloneView는 Amazon S3, Cloudflare R2, Wasabi 및 수십 개의 다른 오브젝트 스토리지에 사용하는 것과 동일한 S3 리모트 유형을 사용하여 연결합니다. 이전에 S3 스타일 리모트를 설정해본 적이 있다면 DreamObjects 설정 과정이 바로 익숙하게 느껴질 것입니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new DreamHost DreamObjects S3 remote in RcloneView using Access Key and endpoint credentials" class="img-large img-center" />

## DreamObjects를 RcloneView에 연결하기

RcloneView를 열고 **Remote** 탭으로 이동한 다음 **New Remote**를 클릭합니다. **S3** 리모트 유형을 선택하고 DreamHost 패널에서 DreamObjects Access Key ID, Secret Access Key, 버킷 엔드포인트 URL을 입력합니다. 저장 후 새 리모트가 Remote Manager에 나타나며 Explorer의 패널로 즉시 사용할 수 있습니다.

Explorer에서 DreamObjects를 탐색하는 것은 로컬 드라이브를 탐색하는 것과 같은 느낌입니다: 파일 이름, 크기, 수정 날짜가 모두 표시됩니다. 폴더를 생성하고, 로컬 패널에서 드래그하여 파일을 업로드하고, 마우스 오른쪽 버튼 클릭으로 객체를 삭제하고, 공유가 필요한 객체에 대한 공개 링크를 생성할 수 있습니다. 파일을 확인하거나 이동할 때마다 매번 DreamHost 웹 패널에 로그인할 필요가 없습니다.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging files from a local folder into a DreamObjects bucket using RcloneView drag-and-drop upload" class="img-large img-center" />

## DreamObjects로 동기화 및 백업하기

정기적인 백업을 위해서는 **Home** 탭 마법사에서 Sync 작업을 생성하세요. 로컬 프로젝트 폴더나 다른 클라우드 리모트를 소스로 선택하고, DreamObjects 버킷 경로를 대상으로 선택합니다. 실행하기 전에 **Dry Run**을 활성화하여 전송될 모든 파일을 미리 확인하세요—특히 대용량 미디어 라이브러리를 처음 동기화할 때 유용한데, 데이터를 실제로 이동하지 않고도 미리보기를 통해 지나치게 큰 파일이나 이름 지정 문제를 발견할 수 있기 때문입니다.

만족스러운 결과를 확인했다면 작업을 Job Manager에 저장하고 필요할 때 실행하세요. PLUS 라이선스 사용자는 cron 방식 스케줄을 연결하여 DreamObjects 백업이 매일 밤 자동으로 실행되도록 할 수 있습니다. **Job History** 탭은 모든 실행에 대해 파일 수, 전송 속도, 총 크기, 최종 상태를 기록하여 클라이언트 보고나 컴플라이언스 검토에 유용한 감사 기록을 제공합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job to a DreamHost DreamObjects bucket from the RcloneView Job Manager" class="img-large img-center" />

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history tab in RcloneView showing completed DreamObjects backup transfer records" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. **Remote** > **New Remote**로 이동하여 **S3**를 선택하고, DreamHost 패널에서 DreamObjects Access Key, Secret Key, 엔드포인트를 입력합니다.
3. Explorer 패널에서 새 리모트를 열고 파일을 드래그하여 바로 업로드합니다.
4. **Home** 탭에서 Sync 작업을 생성하고, 먼저 Dry Run을 실행한 다음 실행하여 **Job History**에서 결과를 검토합니다.

일관된 DreamObjects 백업은 CLI 전문 지식이나 별도의 모니터링 설정 없이도 실수로 인한 삭제, 호스팅 마이그레이션, 데이터 손실 사고로부터 웹 프로젝트를 보호합니다.

---

**관련 가이드:**

- [RcloneView로 Cloudflare R2 클라우드 동기화 관리하기](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [Amazon S3 관리 — RcloneView로 클라우드 동기화 및 백업](https://rcloneview.com/support/blog/manage-amazon-s3-cloud-sync-backup-rcloneview)
- [RcloneView로 Wasabi 클라우드 동기화 및 백업 관리하기](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
