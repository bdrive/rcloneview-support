---
slug: migrate-backblaze-b2-to-digitalocean-spaces-rcloneview
title: "Backblaze B2에서 DigitalOcean Spaces로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - kai
description: "체크섬 검증 전송, 필터, Dry Run 미리보기를 활용해 RcloneView로 Backblaze B2에서 DigitalOcean Spaces로 파일을 마이그레이션하는 방법입니다."
keywords:
  - Backblaze B2에서 DigitalOcean Spaces로 마이그레이션
  - Backblaze에서 DigitalOcean으로 전송
  - RcloneView 오브젝트 스토리지 마이그레이션
  - B2에서 Spaces로 마이그레이션
  - S3 호환 클라우드 마이그레이션
  - DigitalOcean Spaces 설정
  - Backblaze B2에서 Spaces로
  - 클라우드 스토리지 공급자 전환
tags:
  - RcloneView
  - backblaze-b2
  - digitalocean-spaces
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Backblaze B2에서 DigitalOcean Spaces로 마이그레이션 — RcloneView로 파일 전송하기

> 두 S3 호환 공급자 간에 오브젝트 스토리지를 옮기는 데 rclone 명령어를 직접 스크립팅할 필요는 없습니다 — RcloneView가 GUI를 통해 전송, 검증, 필터링을 모두 처리합니다.

Backblaze B2에서 DigitalOcean Spaces로 전환하는 팀들은 대개 기존 Droplet이나 App Platform 서비스와 함께 인프라를 단일 공급자로 통합하기 위해 이 작업을 합니다. 두 서비스 모두 S3 호환 리모트이므로, RcloneView는 Access Key, Secret Key, 엔드포인트만으로 각각에 연결한 다음 로컬 디스크를 거치지 않고 두 리모트 사이에서 데이터를 직접 전송할 수 있습니다. 수백 기가바이트에 달하는 애플리케이션 백업이나 미디어 자산이 담긴 버킷의 경우, 이 직접적인 클라우드 간 경로는 다운로드 후 업로드하는 방식에 비해 상당한 시간을 절약해 줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 두 리모트 설정하기

B2 대시보드에서 발급받은 Application Key ID와 Application Key로 Backblaze B2 리모트를 추가한 다음, 자체 Access Key, Secret Key, 리전 엔드포인트(예: `nyc3.digitaloceanspaces.com`)로 DigitalOcean Spaces용 리모트를 별도로 추가하세요. 두 리모트 모두 RcloneView의 Explorer 패널에 탭으로 표시되므로, 전체 마이그레이션을 시작하기 전에 소스 버킷과 대상 Space를 나란히 살펴볼 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Backblaze B2 and DigitalOcean Spaces remotes in RcloneView" class="img-large img-center" />

분할 패널 레이아웃을 사용해 두 버킷을 한 번에 확인하면서, 전체 마이그레이션을 진행하기 전에 폴더 구조와 명명 규칙이 애플리케이션이 기대하는 것과 일치하는지 확인하세요.

## 체크섬 검증 전송 실행하기

마이그레이션을 구성할 때는 마법사 Step 2에서 체크섬 비교를 활성화한 Copy 또는 Sync 작업으로 설정하세요 — 이는 타임스탬프뿐 아니라 해시와 크기로 파일을 비교하므로, 서로 다른 스토리지 백엔드 간에 수정 시간이 다르게 보고될 수 있는 상황에서 특히 중요합니다. 대역폭에 맞춰 파일 전송 수와 멀티 스레드 전송 수를 설정하세요. 대용량 버킷의 경우 동시 전송 4개를 시작점으로 삼는 것이 합리적입니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a checksum-verified transfer from Backblaze B2 to DigitalOcean Spaces" class="img-large img-center" />

전체 마이그레이션을 실행하기 전에 Dry Run을 사용해 실제로 복사될 파일을 정확히 미리 확인하세요 — 데이터가 이동하기 전에 명명 충돌이나 예상치 못한 파일 수를 발견할 수 있습니다. S3, Azure, Backblaze B2는 FREE 라이선스에서도 완전한 읽기/쓰기가 가능하므로, 이 마이그레이션 경로를 가로막는 등급 제한은 없습니다.

## 전환 일정 잡기

단계적 마이그레이션을 위해서는 최종 전환 전까지 Backblaze B2에 추가된 파일을 반영하는 예약된 증분 동기화(PLUS 라이선스)를 전체 동기화 후에 실행하세요. 이렇게 하면 위험도가 큰 대규모 전송을 한 번에 진행하는 대신, 전환 기간 동안 두 버킷을 계속 동기화 상태로 유지할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling incremental sync jobs during a Backblaze B2 to DigitalOcean Spaces migration" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Backblaze B2 버킷과 DigitalOcean Spaces 대상 각각에 대한 리모트를 추가하세요.
3. Dry Run을 실행해 파일을 복사하기 전에 전송 내용을 미리 확인하세요.
4. 체크섬 검증을 활성화한 상태로 Copy 또는 Sync 작업을 실행한 다음, 양쪽 파일 수가 일치하는지 확인하세요.

검증된 직접 클라우드 간 마이그레이션을 사용하면, 로컬 머신을 거치지 않고도 데이터가 손상 없이 DigitalOcean Spaces에 도달합니다.

---

**관련 가이드:**

- [Backblaze B2 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Backblaze B2에서 AWS S3로 마이그레이션 — RcloneView로 파일 전송하기](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-aws-s3-rcloneview)
- [RcloneView로 Google Drive를 DigitalOcean Spaces로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-google-drive-to-digitalocean-spaces-rcloneview)

<CloudSupportGrid />
