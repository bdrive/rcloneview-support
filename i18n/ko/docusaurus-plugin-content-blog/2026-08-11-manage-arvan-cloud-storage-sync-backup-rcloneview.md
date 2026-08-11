---
slug: manage-arvan-cloud-storage-sync-backup-rcloneview
title: "Arvan Cloud 스토리지 관리하기 — RcloneView로 파일 동기화 및 백업하기"
authors:
  - jay
description: "Arvan Cloud 오브젝트 스토리지를 RcloneView에 연결하여 S3 호환 파일 탐색, 동기화, 백업, 클라우드 간 전송을 이용하세요."
keywords:
  - Arvan Cloud
  - Arvan Cloud RcloneView
  - S3 호환 스토리지
  - 오브젝트 스토리지 GUI
  - Arvan Cloud 동기화
  - Arvan Cloud 백업
  - 클라우드 스토리지 관리자
  - Arvan Cloud 파일 전송
  - 멀티클라우드 GUI
tags:
  - RcloneView
  - s3-compatible
  - object-storage
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Arvan Cloud 스토리지 관리하기 — RcloneView로 파일 동기화 및 백업하기

> Arvan Cloud 오브젝트 스토리지 버킷을 관리 중인 다른 모든 리모트와 함께 하나의 데스크톱 창에서 탐색, 동기화, 백업하세요.

Arvan Cloud의 오브젝트 스토리지는 S3 프로토콜을 사용하므로, Access Key + Secret Key + Endpoint 자격 증명을 기반으로 하는 모든 도구에 그대로 연결할 수 있습니다 — RcloneView도 마찬가지입니다. 이 지역 특화 제공업체 하나만을 위해 별도의 S3 클라이언트를 따로 운용할 필요 없이, 리모트로 추가하여 기존 워크플로에서 Amazon S3, Wasabi 등 다른 버킷 기반 스토리지와 똑같이 다룰 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## S3 호환 리모트로 Arvan Cloud 연결하기

Arvan Cloud는 rclone의 S3 백엔드를 통해 액세스되므로, RcloneView가 지원하는 다른 모든 S3 호환 서비스와 동일한 자격 증명 입력 방식을 따릅니다: Access Key, Secret Key, 그리고 Arvan의 오브젝트 스토리지 서비스를 가리키는 커스텀 엔드포인트입니다. 여기에는 OAuth 브라우저 흐름이 없습니다 — Arvan Cloud 콘솔에서 키 쌍을 생성한 다음 새 리모트 마법사에 직접 붙여넣으면 됩니다.

리모트가 추가되면 탐색기(Explorer)의 다른 패널과 동일하게 동작합니다: 폴더 트리 탐색, 이미지가 많은 버킷을 위한 썸네일 미리보기, 로컬 디스크에서 사용하는 것과 동일한 마우스 오른쪽 버튼 클릭 파일 작업(복사, 이동, 이름 바꾸기, 크기 확인)까지 그대로 사용할 수 있습니다. RcloneView는 Windows, macOS, Linux에서 하나의 창으로 90개 이상의 제공업체를 마운트하고 동기화하므로, Arvan Cloud도 별도의 독립된 앱이 아니라 다른 클라우드들과 나란히 자리하게 됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 새 S3 호환 리모트로 Arvan Cloud 추가하기" class="img-large img-center" />

이미 S3 도구로 표준화한 팀이라면, 버킷 정책, 프리픽스, 폴더 구조가 그대로 이어진다는 뜻입니다 — 제공업체가 바뀐다고 해서 오브젝트 스토리지 모델 자체가 달라지지는 않습니다.

## Arvan Cloud 버킷 동기화 및 백업하기

리모트가 연결되면 동기화 마법사를 사용하여 로컬 폴더 — 또는 다른 클라우드 리모트 — 를 Arvan Cloud 버킷으로 미러링하는 단방향 작업을 구성하세요. 고급 설정 단계에서 동시 전송 수와 동등성 검사기 수를 설정하고, 필터를 사용해 `.iso` 이미지나 중첩된 `.git` 디렉터리처럼 전송량에 포함시키고 싶지 않은 파일 형식이나 폴더를 제외하세요.

드라이 런(Dry Run)을 사용하면 작업을 실제로 실행하기 전에 어떤 파일이 복사되거나 삭제될지 정확히 미리 볼 수 있습니다. 이미 존재하는 버킷에 대해 처음 동기화를 실행할 때, 무엇이 이미 있는지 확실하지 않은 상황에서 특히 중요합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView에서 Arvan Cloud 스토리지 버킷으로의 동기화 작업 구성하기" class="img-large img-center" />

## 반복 백업 예약하기

동기화 작업을 검증했다면 Job Manager에 저장하고, PLUS 라이선스에서는 crontab 형식의 일정을 연결하여 Arvan Cloud로의 백업이 수동으로 실행하지 않아도 자동으로 진행되도록 할 수 있습니다. 이후 Job History가 각 실행의 소요 시간, 전송 속도, 파일 수, 완료 상태를 기록하므로, 예약된 백업이 실제로 완료되었는지 확인할 때 참고할 수 있는 기록이 남습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Arvan Cloud 스토리지로의 반복 백업 작업 예약하기" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Arvan Cloud 오브젝트 스토리지 콘솔에서 Access Key와 Secret Key를 생성하세요.
3. RcloneView에서 해당 자격 증명과 Arvan Cloud의 엔드포인트를 사용해 새 S3 호환 리모트를 생성하세요.
4. 먼저 드라이 런을 실행한 다음, 지속적인 백업을 위한 예약 동기화 작업을 저장하세요.

Arvan Cloud를 또 하나의 S3 엔드포인트로 취급한다는 것은 클라우드 스토리지 스택에서 유지 관리해야 할 전용 도구가 하나 줄어든다는 의미입니다.

---

**관련 가이드:**

- [RcloneView로 Wasabi 스토리지 관리하기 — 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [RcloneView로 Selectel 스토리지 관리하기 — 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-selectel-cloud-sync-backup-rcloneview)
- [S3 Access Denied 해결하기 — RcloneView 권한 오류](https://rcloneview.com/support/blog/fix-s3-access-denied-permission-errors-rcloneview)

<CloudSupportGrid />
