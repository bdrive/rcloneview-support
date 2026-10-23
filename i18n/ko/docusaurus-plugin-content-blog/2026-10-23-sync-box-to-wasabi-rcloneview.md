---
slug: sync-box-to-wasabi-rcloneview
title: "Box를 Wasabi로 동기화 — RcloneView로 클라우드 백업하기"
authors:
  - tayson
description: "RcloneView로 Box를 Wasabi로 동기화: 두 리모트를 연결하고, Dry Run으로 미리 확인하고, 단방향 백업을 실행한 뒤 폴더 비교로 결과를 검증하세요."
keywords:
  - Box를 Wasabi로 동기화
  - Box에서 Wasabi로 백업
  - Box Wasabi 전송
  - RcloneView box
  - RcloneView wasabi
  - 클라우드 간 동기화
  - Box 오브젝트 스토리지 백업
  - Wasabi S3 백업
tags:
  - RcloneView
  - box
  - wasabi
  - cloud-to-cloud
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box를 Wasabi로 동기화 — RcloneView로 클라우드 백업하기

> 반복 실행 가능한 단방향 동기화로 Box 콘텐츠의 독립적인 사본을 Wasabi 오브젝트 스토리지에 보관하세요.

Box는 협업하기에 편리한 곳이지만, 플랫폼 밖에 별도의 사본을 두면 실수로 인한 삭제, 계정 잠금, 보존 기간 공백으로부터 보호받을 수 있습니다. Wasabi는 S3 호환 오브젝트 스토리지이므로 이러한 사본을 두기에 자연스러운 대상입니다. RcloneView는 하나의 창에서 두 서비스를 연결하며, 기본 동기화와 Dry Run은 FREE 라이선스로 사용할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Box와 Wasabi를 리모트로 연결하기

Box는 브라우저 기반 OAuth를 사용합니다. RcloneView에서 새 리모트를 추가하고 Box를 선택한 다음, 브라우저가 열리면 로그인하세요. 조직에서 Box for Business를 사용한다면 리모트에 `box_sub_type = enterprise`가 필요합니다. Wasabi는 S3 호환 리모트로 추가합니다. Access Key, Secret Key, 그리고 Wasabi 리전의 엔드포인트를 입력하세요.

두 리모트가 리모트 관리자(Remote Manager)에 나타나면 두 개의 탐색기(Explorer) 패널에서 나란히 여세요. 아무것도 설정하기 전에 왼쪽에서 Box 폴더 트리를, 오른쪽에서 Wasabi 버킷을 둘러볼 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 Box 및 Wasabi 리모트 추가" class="img-large img-center" />

## 동기화 전에 Dry Run으로 미리 확인하기

한 디자인 에이전시가 Box에 800 GB의 고객 프로젝트 폴더를 보관하고 있다고 가정해 보세요. 첫 동기화 전에 Dry Run을 실행하세요. 아무것도 변경하지 않고 복사될 파일과 삭제될 파일을 나열해 줍니다. 이는 동기화를 잘못된 버킷 경로로 지정하는 실수를 피하는 데 도움이 됩니다.

백업에는 단방향 동기화("Modifying destination only")가 적합한 방향입니다. Box가 원본 기준이 되고 Wasabi가 이를 미러링합니다. 동기화는 원본에 더 이상 존재하지 않는 대상 파일도 삭제한다는 점을 기억하고, 미러용으로 전용 버킷이나 접두사(prefix)를 사용하세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Box와 Wasabi 간의 클라우드 간 전송" class="img-large img-center" />

## 동기화 작업 구성하기

작업 마법사는 스토리지, 고급 설정, 필터, 스케줄링의 네 단계로 진행됩니다. 작은 문서가 많다면 파일 전송 수를 늘리고, 해시 기반 검증이 필요하면 체크섬 비교를 활성화하세요. 사전 정의된 필터에는 Box Docs 옵션이 포함되어 있는데, Box Notes와 같은 온라인 전용 항목은 일반 파일처럼 동작하지 않기 때문에 유용합니다.

작업 이름은 영문자, 숫자, 하이픈 또는 밑줄로 지정하고 저장한 뒤 실행하세요. 진행률, 속도, 파일 수는 Transferring 탭에 표시됩니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="저장된 Box to Wasabi 동기화 작업 실행" class="img-large img-center" />

## 스케줄링과 검증

스케줄 기반 동기화는 PLUS 기능이며, crontab 형식의 필드와 예정된 실행 시간을 미리 보여 주는 시뮬레이터를 제공합니다. 매일 밤 실행하면 Wasabi 사본을 최신 상태로 유지할 수 있습니다. 실행 후에는 작업 기록(Job History)에서 상태, 크기, 파일 수를 확인하거나 폴더 비교(Folder Compare)로 양쪽이 일치하는지 확인하세요.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView에서 반복 동기화 작업 스케줄링" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. OAuth로 Box 리모트를, 키와 엔드포인트로 Wasabi 리모트를 추가하세요.
3. Box에서 전용 Wasabi 버킷으로 동기화 작업을 만들고 먼저 Dry Run을 실행하세요.
4. 작업을 실행한 다음 폴더 비교와 작업 기록으로 검증하세요.

테스트를 거친 예약 미러는 Box를 단일 장애 지점에서 실질적인 백업의 한 축으로 바꿔 줍니다.

---

**관련 가이드:**

- [Box를 Wasabi로 마이그레이션](https://rcloneview.com/support/blog/migrate-box-to-wasabi-rcloneview)
- [Google Drive를 Box로 동기화](https://rcloneview.com/support/blog/sync-google-drive-to-box-rcloneview)
- [Wasabi 동기화 오류 해결](https://rcloneview.com/support/blog/fix-wasabi-sync-errors-rcloneview)

<CloudSupportGrid />
