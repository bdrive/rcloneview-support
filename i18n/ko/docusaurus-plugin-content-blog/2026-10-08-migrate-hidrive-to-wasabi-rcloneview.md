---
slug: migrate-hidrive-to-wasabi-rcloneview
title: "HiDrive에서 Wasabi로 마이그레이션 — RcloneView로 파일 전송"
authors:
  - morgan
description: "RcloneView로 HiDrive의 파일을 Wasabi 오브젝트 스토리지로 옮깁니다. 두 리모트를 연결하고, Dry Run 후 전송하고, Folder Compare로 검증하세요."
keywords:
  - HiDrive Wasabi 마이그레이션
  - HiDrive Wasabi 전송
  - HiDrive Wasabi 동기화
  - RcloneView HiDrive
  - Wasabi S3 마이그레이션
  - 클라우드 간 전송
  - HiDrive S3 백업
  - rclone HiDrive Wasabi
  - HiDrive 마이그레이션 도구
  - Wasabi GUI
tags:
  - RcloneView
  - hidrive
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# HiDrive에서 Wasabi로 마이그레이션 — RcloneView로 파일 전송

> HiDrive 아카이브를 Wasabi 오브젝트 스토리지로 옮기는 시각적 워크플로: 연결, 미리보기, 전송, 검증.

HiDrive는 개인 또는 팀 파일 저장소로 잘 쓰이지만, 장기 아카이브는 예측 가능한 API 접근을 제공하는 S3 방식의 오브젝트 스토리지가 더 어울리는 경우가 많습니다. RcloneView는 두 서비스를 한 창에서 연결하므로, 모든 파일을 내 디스크로 먼저 내려받지 않고도 폴더를 클라우드 간에 바로 복사할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## HiDrive와 Wasabi를 리모트로 연결

HiDrive는 OAuth를 사용합니다. RcloneView가 브라우저를 열면 로그인하는 것만으로 별도의 API 키 없이 리모트가 연결됩니다. Wasabi는 S3 호환이므로 Access Key, Secret Key, 그리고 버킷 리전의 엔드포인트를 입력합니다.

Remote 탭에서 New Remote로 둘 다 추가하세요. 그런 다음 각각을 Explorer 패널의 왼쪽과 오른쪽에 열어 HiDrive 폴더와 대상 Wasabi 버킷을 탐색할 수 있는지 확인합니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 HiDrive와 Wasabi 리모트 추가" class="img-large img-center" />

## Dry Run으로 전송 계획 세우기

디자인 스튜디오가 완료된 프로젝트 폴더 800 GB를 HiDrive에서 옮긴다고 가정해 봅시다. 아무것도 건드리기 전에 전송을 작업(Job)으로 구성하세요. 소스는 HiDrive, 대상은 Wasabi 버킷 경로로 선택하고 One-way "Modifying destination only" 모드를 사용합니다.

먼저 Dry Run을 실행하세요. 변경 없이 복사되거나 삭제될 파일 목록만 보여 주므로, 잘못된 대상 폴더를 확인하는 데 믿을 만한 방법입니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView에서 HiDrive에서 Wasabi로 클라우드 간 전송" class="img-large img-center" />

## 설정을 조정하고 작업 실행

마법사의 Step 2에서 파일 전송 수를 설정하고, 해시와 크기로 검증하려면 체크섬 비교를 활성화하세요. 일시적인 네트워크 장애로 전체 실행이 중단되지 않도록 재시도 값은 기본값인 3으로 유지하세요. Step 3 필터로 임시 파일이나 `.git/` 폴더 같은 항목을 제외할 수 있습니다.

미리보기가 올바르면 작업을 실행하고 Transferring 탭에서 속도, 진행률, 파일 수를 확인하세요.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Transferring 탭에서 HiDrive에서 Wasabi로의 전송 모니터링" class="img-large img-center" />

## Folder Compare로 검증

작업이 끝나면 한쪽은 HiDrive, 다른 쪽은 Wasabi로 Compare를 여세요. 왼쪽에만 있는 파일을 필터링하면 도착하지 않은 항목을 볼 수 있고, 누락된 항목만 복사하면 됩니다. Job History에는 상태, 소요 시간, 크기, 파일 수가 기록되어 마이그레이션 로그로 활용할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare로 HiDrive와 Wasabi 내용 일치 확인" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. HiDrive(브라우저 로그인)와 Wasabi(Access Key, Secret Key, 엔드포인트)를 리모트로 추가하세요.
3. HiDrive에서 Wasabi 버킷으로 가는 단방향 작업을 만들고 Dry Run을 실행하세요.
4. 전송을 실행한 뒤 Folder Compare로 검증하세요.

미리 확인하고 검증하는 마이그레이션은 모든 파일이 Wasabi에 도착했다고 확신할 때까지 HiDrive 파일을 그대로 보존합니다.

---

**관련 가이드:**

- [RcloneView로 HiDrive를 Amazon S3에 동기화](https://rcloneview.com/support/blog/sync-hidrive-to-amazon-s3-rcloneview)
- [RcloneView로 HiDrive에서 Backblaze B2로 마이그레이션](https://rcloneview.com/support/blog/migrate-hidrive-to-backblaze-b2-rcloneview)
- [Wasabi 스토리지 관리 — RcloneView로 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)

<CloudSupportGrid />
