---
slug: migrate-zoho-workdrive-to-backblaze-b2-rcloneview
title: "Zoho WorkDrive에서 Backblaze B2로 마이그레이션하기 — RcloneView로 파일 전송하기"
authors:
  - steve
description: "RcloneView로 Zoho WorkDrive의 파일을 Backblaze B2로 직접 옮겨보세요. 클라우드 간 전송, Dry Run 미리보기, 작업 예약 기능을 활용합니다."
keywords:
  - Zoho WorkDrive에서 Backblaze B2로 마이그레이션
  - Zoho WorkDrive 백업
  - Backblaze B2 마이그레이션
  - 클라우드 간 전송
  - RcloneView 마이그레이션 가이드
  - Zoho WorkDrive에서 B2로
  - 클라우드 스토리지 마이그레이션 도구
  - rclone Zoho WorkDrive
  - 크로스 클라우드 파일 전송
  - 저비용 클라우드 아카이브
tags:
  - RcloneView
  - zoho
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Zoho WorkDrive에서 Backblaze B2로 마이그레이션하기 — RcloneView로 파일 전송하기

> 로컬 디스크를 거치지 않고 Zoho WorkDrive 파일을 곧바로 Backblaze B2로 옮겨보세요.

일상적인 협업에 Zoho WorkDrive를 사용하는 팀은 완료된 프로젝트나 오래된 고객 폴더를 위해 더 저렴한 장기 보관 계층이 필요한 경우가 많으며, Backblaze B2는 이러한 아카이브 계층으로 흔히 선택됩니다. RcloneView는 두 리모트를 하나의 창에서 연결하고 파일을 클라우드 간에 직접 복사하므로, 문서와 미디어로 가득한 공유 드라이브를 노트북의 로컬 스토리지를 거쳐 다운로드하고 다시 업로드할 필요가 없습니다. RcloneView는 Windows, macOS, Linux에서 하나의 창으로 90개 이상의 제공업체를 마운트하고 동기화할 수 있어, Zoho WorkDrive를 탐색하고 Backblaze B2에 아카이브하는 과정에서 애플리케이션을 전환할 필요가 전혀 없습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Zoho WorkDrive와 Backblaze B2 연결하기

New Remote를 통해 Zoho WorkDrive를 리모트로 추가하고 OAuth 기반 설정을 선택하세요. Zoho WorkDrive는 설정 중에 리전 선택이 필요하므로, 설정을 마치기 전에 계정에 맞는 데이터 센터를 선택하세요. Backblaze B2는 대신 자격 증명 입력 방식을 사용합니다 — B2 키 관리 페이지에서 Application Key ID와 Application Key를 입력하면, RcloneView가 저장하기 전에 연결을 검증합니다. 두 리모트가 모두 Explorer 패널에 탭으로 표시되어 나란히 탐색할 준비가 됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 Zoho WorkDrive와 Backblaze B2를 리모트로 추가하기" class="img-large img-center" />

연결이 완료되면 Remote Manager를 열어 두 항목을 확인하고, 첫 전송 전에 폴더 범위 등의 설정을 조정하세요.

## 클라우드 간 전송 실행하기

한쪽에는 Zoho WorkDrive, 다른 쪽에는 Backblaze B2 버킷을 배치한 2패널 레이아웃을 열고, 마이그레이션할 폴더를 드래그하세요 — 서로 다른 두 리모트 사이의 드래그는 항상 복사로 처리되므로, 정리할 준비가 되기 전까지 Zoho WorkDrive의 원본은 그대로 유지됩니다. 더 큰 규모의 마이그레이션이라면 대신 Sync 작업을 구성하세요: Zoho WorkDrive를 소스로, B2 버킷을 목적지로 선택하고, Advanced Settings에서 동시 파일 전송 수를 설정한 다음, 실제로 전송이 이루어지기 전에 어떤 파일이 이동할지 미리 확인하기 위해 먼저 Dry Run을 실행하세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Zoho WorkDrive에서 Backblaze B2로의 클라우드 간 전송 작업" class="img-large img-center" />

## 마이그레이션 확인 및 예약하기

Sync 작업의 Advanced Settings에서 체크섬 비교를 활성화하면 RcloneView가 파일 크기뿐 아니라 해시와 크기로 파일 일치를 확인합니다. 대용량 배치가 일시적인 네트워크 오류를 만날 경우를 대비해 재시도 횟수도 설정하세요. 작업이 완료되면 Job History에서 전송된 총 파일 수, 소요 시간, 오류가 발생한 항목을 검토한 뒤 소스 폴더를 아카이브하세요.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Zoho WorkDrive에서 Backblaze B2로의 전송 완료를 보여주는 Job History" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 올바른 리전을 선택하여 Zoho WorkDrive 리모트를 추가하세요.
3. Application Key ID와 Key를 사용해 Backblaze B2 리모트를 추가하세요.
4. Dry Run을 실행한 다음, 동기화 또는 복사 작업을 실행하고 Job History에서 결과를 확인하세요.

깔끔한 클라우드 간 마이그레이션은 Zoho WorkDrive 작업 공간을 가볍게 유지하면서 완료된 파일에 내구성 있고 비용이 저렴한 보관 위치를 제공합니다.

---

**관련 가이드:**

- [Zoho WorkDrive 관리하기 — RcloneView로 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-zoho-workdrive-cloud-sync-rcloneview)
- [Backblaze B2 관리하기 — RcloneView로 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Zoho WorkDrive를 OneDrive에 동기화하기 — RcloneView로 클라우드 백업](https://rcloneview.com/support/blog/sync-zoho-workdrive-to-onedrive-rcloneview)

<CloudSupportGrid />
