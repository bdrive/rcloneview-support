---
slug: migrate-yandex-disk-to-wasabi-rcloneview
title: "Yandex Disk를 Wasabi로 마이그레이션 — RcloneView로 파일 전송"
authors:
  - alex
description: "RcloneView로 Yandex Disk를 Wasabi 오브젝트 스토리지로 마이그레이션하세요: 두 리모트를 연결하고, Dry Run을 실행한 뒤, 클라우드 간 복사를 하고 체크섬으로 검증합니다."
keywords:
  - Yandex Disk를 Wasabi로 마이그레이션
  - Yandex Disk 백업
  - Wasabi 마이그레이션
  - RcloneView Yandex Disk
  - RcloneView Wasabi
  - 클라우드 간 전송
  - S3 백업
  - rclone GUI
  - 오브젝트 스토리지 마이그레이션
  - 클라우드 마이그레이션 도구
tags:
  - RcloneView
  - yandex-disk
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Yandex Disk를 Wasabi로 마이그레이션 — RcloneView로 파일 전송

> 로컬 디스크를 거치지 않고 Yandex Disk 아카이브를 Wasabi 버킷으로 복사하고, 모든 파일이 도착했는지 확인하세요.

Yandex Disk는 개인 드라이브로는 훌륭하지만, 장기 보관용 아카이브와 공유 프로젝트 데이터는 버킷과 액세스 키를 직접 관리할 수 있는 S3 호환 오브젝트 스토리지에 두는 경우가 많습니다. RcloneView는 한 창에서 Yandex Disk와 Wasabi를 리모트로 연결하고 둘 사이의 전송을 실행하므로, 테라바이트 단위 데이터를 먼저 로컬 디스크에 보관할 필요가 없습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 두 리모트 설정하기

Yandex Disk는 브라우저를 통해 로그인합니다. **Remote > New Remote**에서 선택하고 접근을 승인하면 리모트가 연결됩니다. Wasabi는 S3 호환 제공업체로 구성합니다. Wasabi 콘솔에서 버킷을 만들고 Access Key와 Secret Key를 생성한 다음, 버킷 리전의 엔드포인트와 함께 RcloneView에 입력하세요.

Wasabi는 S3 호환 제공업체이므로 다른 S3 호환 서비스와 같은 방식으로 리모트를 설정할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 Yandex Disk와 Wasabi 리모트 추가하기" class="img-large img-center" />

## 옮길 대상 선택하기

한쪽 탐색기 패널에서 Yandex Disk를, 다른 쪽에서 Wasabi 버킷을 탐색하세요. 흔한 방식은 아카이브용 버킷 하나를 두고, 버킷의 최상위 폴더가 Yandex 폴더를 그대로 반영하게 하는 것입니다. 오브젝트 스토리지에는 실제 폴더가 없으므로 이름을 일관되게 유지하고 매우 긴 경로는 피하세요.

디스크에 버려도 되는 파일이 있다면 작업의 필터 단계에서 확장자, 최대 크기, 파일 사용 기간으로 제외해, 필요한 것만 마이그레이션하세요.

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="RcloneView에서 Yandex Disk와 Wasabi 간 파일 드래그하기" class="img-large img-center" />

## Dry Run과 전송

Yandex Disk를 소스로, Wasabi 버킷을 대상으로 하는 작업을 만드세요. 결과를 검증하기 전까지 원본을 그대로 두도록 Copy를 선택합니다. **Dry Run**을 실행해 파일 목록을 미리 본 다음 작업을 시작하세요. Advanced Settings에서는 제공업체가 지원하는 경우 해시와 크기를 확인하는 **checksum** 비교를 켤 수 있고, Yandex가 느려지면 동시 파일 전송 수를 조정할 수 있습니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Yandex Disk에서 Wasabi로의 전송을 실시간으로 모니터링" class="img-large img-center" />

## 검증하고 후속 작업 예약하기

작업이 끝나면 두 위치에 대해 **Compare**를 열어 left-only 또는 불일치 파일을 찾고, 남은 파일은 비교 보기에서 복사하세요. 전환 기간에도 Yandex Disk를 계속 사용한다면, PLUS 라이선스로 crontab 방식의 일정에 따라 작업을 예약해 전환하는 날까지 새 파일이 Wasabi에 계속 저장되게 할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Yandex Disk에서 Wasabi로의 반복 작업 예약하기" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **Remote > New Remote**에서 Yandex Disk와 Wasabi를 추가합니다.
3. Copy 작업을 만들고 Dry Run을 실행한 뒤 전송을 시작합니다.
4. 원본에서 아무것도 삭제하기 전에 Folder Compare로 검증합니다.

아카이브가 직접 관리하는 버킷에 안착하면, 이전 사본을 정리하는 일은 도박이 아니라 신중한 결정이 됩니다.

---

**관련 가이드:**

- [Yandex Disk 스토리지 관리 — RcloneView로 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-yandex-disk-cloud-sync-backup-rcloneview)
- [Wasabi 스토리지 관리 — RcloneView로 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [RcloneView로 체크섬 검증 클라우드 마이그레이션](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
