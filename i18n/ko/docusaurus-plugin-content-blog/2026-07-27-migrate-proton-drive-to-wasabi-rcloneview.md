---
slug: migrate-proton-drive-to-wasabi-rcloneview
title: "Proton Drive에서 Wasabi로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - kai
description: "RcloneView의 직접 클라우드 간 전송 기능으로 Proton Drive의 암호화된 파일을 Wasabi 오브젝트 스토리지로 이동하세요. 로컬 다운로드가 필요 없습니다."
keywords:
  - Proton Drive에서 Wasabi로 마이그레이션
  - Proton Drive에서 Wasabi로 전송
  - 클라우드 간 마이그레이션
  - Wasabi 오브젝트 스토리지 백업
  - Proton Drive 백업
  - Proton Drive 파일 전송
  - RcloneView 마이그레이션
  - 암호화된 클라우드 스토리지 마이그레이션
tags:
  - RcloneView
  - proton-drive
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Proton Drive에서 Wasabi로 마이그레이션 — RcloneView로 파일 전송하기

> 로컬 디스크를 거치지 않고 Proton Drive에서 Wasabi 오브젝트 스토리지로 파일을 곧바로 옮겨보세요.

Proton Drive는 프라이버시 중심의 개인용 스토리지를 위해 만들어졌지만, Wasabi가 잘 처리하는 워크로드 — 대용량 미디어 라이브러리, 애플리케이션 백업, 또는 다른 도구에서 S3 호환 접근이 필요한 데이터셋 — 를 위해 설계된 것은 아닙니다. 사용자가 Proton Drive의 사용 범위를 넘어서거나, 단순히 더 저렴한 장기 보관용 사본이 필요할 때, RcloneView는 모든 파일을 먼저 로컬로 다운로드하는 대신 두 서비스 사이에서 파일을 직접 이동시킵니다. 이는 두 리모트에 동시에 연결하는 방식으로 이루어집니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 두 리모트 연결하기

RcloneView에서 Proton Drive는 이메일과 비밀번호(선택적으로 2FA 포함)로 설정하며, Wasabi는 Access Key ID, Secret Access Key, 그리고 적절한 지역 엔드포인트를 사용해 S3 호환 리모트로 추가합니다. 두 리모트 모두 탐색기에서 탭으로 표시되므로, 전송을 시작하기 전에 한 패널에서는 Proton Drive 폴더를, 다른 패널에서는 Wasabi 버킷을 확인할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 Proton Drive와 Wasabi 리모트 설정하기" class="img-large img-center" />

RcloneView는 또한 S3, Azure, Backblaze B2를 FREE 라이선스에서도 완전한 읽기/쓰기 접근으로 연결하므로, 이 마이그레이션의 Wasabi 쪽 설정에는 유료 등급이 필요하지 않습니다.

## 클라우드 간 전송 실행하기

두 리모트를 모두 연 상태에서 Proton Drive 패널에서 Wasabi 패널로 폴더를 드래그하면 직접 복사가 실행됩니다 — 데이터는 RcloneView를 통해 Proton Drive에서 Wasabi로 스트리밍되며, 로컬 디스크를 전혀 거치지 않습니다. 더 큰 규모의 마이그레이션에는 동기화 마법사가 더 나은 도구입니다. 이는 Proton Drive 소스에서 Wasabi 대상 버킷으로의 정식 단방향 동기화를 지원하며, 사용 가능한 대역폭을 최대한 활용할 수 있도록 동시 전송 수를 설정할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView에서 Proton Drive에서 Wasabi로의 클라우드 간 파일 전송" class="img-large img-center" />

Dry Run 모드는 대규모 마이그레이션에서 먼저 실행해 볼 가치가 있습니다 — 실제로 아무것도 이동하기 전에 정확히 어떤 파일이 복사될지 나열해주므로, 필터 설정 실수나 예상치 못한 폴더 구조를 조기에 발견할 수 있습니다.

## 완전한 마이그레이션 확인하기

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="RcloneView에서 Wasabi 리모트로 드래그 앤 드롭 파일 전송하기" class="img-large img-center" />

동기화 작업이 완료되면, 하단 정보 뷰의 전송 탭에 이동한 총 파일 수, 전송 속도, 작업 중 발생한 오류가 표시됩니다. 일회성 전송이 아니라 저장된 작업으로 실행된 마이그레이션의 경우, 작업 기록에 시작 시간, 소요 시간, 총 크기, 완료 상태가 영구적으로 기록되므로, Proton Drive 사본을 폐기하기 전에 모든 파일이 Wasabi에 도착했음을 확인할 수 있는 명확한 로그가 남습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. 계정 이메일과 비밀번호를 사용해 Proton Drive 리모트를 추가합니다.
3. Access Key, Secret Key, 그리고 지역 엔드포인트를 사용해 Wasabi 리모트를 추가합니다.
4. 먼저 Dry Run을 실행한 다음 동기화를 실행하고 작업 기록에서 전송 결과를 확인합니다.

Proton Drive 폴더를 이미 안전하게 Wasabi로 이전했다는 사실을 보여주는 검증된 로그가 있으면, 그 폴더를 폐기하는 일이 훨씬 덜 부담스러워집니다.

---

**관련 가이드:**

- [Proton Drive 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [Wasabi 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [Proton Drive에서 Backblaze B2로 마이그레이션 — RcloneView로 파일 전송하기](https://rcloneview.com/support/blog/migrate-proton-drive-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
