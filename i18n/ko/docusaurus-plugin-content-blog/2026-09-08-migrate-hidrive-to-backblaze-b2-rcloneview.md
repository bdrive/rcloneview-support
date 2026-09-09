---
slug: migrate-hidrive-to-backblaze-b2-rcloneview
title: "HiDrive에서 Backblaze B2로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - steve
description: "체크섬 검증 동기화, 드라이런 미리보기, 작업 기록 추적 기능을 갖춘 RcloneView로 HiDrive에서 Backblaze B2로 파일을 이전하세요."
keywords:
  - HiDrive에서 Backblaze B2로 마이그레이션
  - HiDrive Backblaze B2 전송
  - HiDrive 클라우드 마이그레이션
  - Backblaze B2 백업 도구
  - RcloneView HiDrive
  - 클라우드 간 전송
  - 체크섬 검증 마이그레이션
  - HiDrive에서 객체 스토리지로
  - 유럽 클라우드에서 Backblaze B2로
tags:
  - RcloneView
  - hidrive
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# HiDrive에서 Backblaze B2로 마이그레이션 — RcloneView로 파일 전송하기

> 체크섬 검증 전송과 사전 드라이런으로, 커지고 있는 HiDrive 계정을 Backblaze B2 객체 스토리지로 안전하게 옮기세요.

HiDrive는 일상적인 파일 접근에 적합하지만, 더 저렴한 장기 보관이나 오프사이트 객체 스토리지 사본이 필요한 팀은 개인용 또는 비즈니스용 클라우드 플랜의 한계를 넘어서면서 Backblaze B2를 찾게 됩니다. RcloneView는 동일한 창에서 두 서비스를 모두 연결합니다 — HiDrive는 OAuth로, Backblaze B2는 Application Key로 — 그래서 마이그레이션은 모든 것을 먼저 로컬로 다운로드하는 대신 하나의 구성된 작업으로 실행됩니다. RcloneView는 하나의 창에서 90개 이상의 제공업체를 마운트하고 동기화하며, Windows, macOS, Linux에서 모두 사용할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## HiDrive와 Backblaze B2 연결하기

HiDrive는 RcloneView의 브라우저 기반 OAuth 로그인을 통해 추가되며 — 별도의 API 키 입력이 필요하지 않습니다. Backblaze B2는 Backblaze 계정 콘솔에서 생성한 Application Key ID와 Application Key가 필요하며, 리모트 설정 양식에 직접 입력합니다. 두 리모트가 모두 Remote Manager에 나타나면 Explorer에서 별도의 탭으로 표시되므로, 전송을 실행하기 전에 HiDrive 소스와 B2 대상을 나란히 확인할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding HiDrive and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## 마이그레이션 작업 구성하기

Home 탭의 Sync 버튼을 사용해 4단계 마법사를 엽니다. 1단계에서는 HiDrive 소스 폴더와 대상으로 Backblaze B2 버킷을 선택하고, HiDrive에는 영향을 주지 않고 B2에만 기록되도록 단방향 동기화를 선택합니다. 2단계에서는 체크섬 비교를 활성화해 수정 날짜만이 아니라 해시와 크기로 파일을 매칭할 수 있으며, 이는 서로 매우 다른 두 스토리지 백엔드 간 이동 시 중요합니다. 3단계에서는 먼저 일부만 마이그레이션하고 싶을 경우 파일 형식, 최대 크기, 파일 나이로 필터링할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a HiDrive to Backblaze B2 sync job in RcloneView" class="img-large img-center" />

실제 전송 전에 Dry Run을 실행하세요 — 단 1바이트도 이동하지 않고 복사될 항목을 정확히 나열해 주므로, 잘못 구성된 폴더 경로가 대규모 원치 않는 전송으로 이어지기 전에 발견하는 가장 안전한 방법입니다.

## 마이그레이션 확인하기

동기화가 완료되면 Folder Compare를 열어 HiDrive 소스와 B2 대상 간 파일 수와 크기가 양쪽에서 일치하는지 확인하세요. Job History는 모든 실행에 대해 전송된 총 크기, 전송 속도, 파일 수를 기록하므로, 이상이 있을 경우 대조할 수 있는 기록이 남습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing HiDrive and Backblaze B2 folders after migration in RcloneView" class="img-large img-center" />

## 시작하기

1. **RcloneView 다운로드**: [rcloneview.com](https://rcloneview.com/src/download.html)에서 받으세요.
2. OAuth로 HiDrive 계정을 연결하고 Application Key ID와 Key로 Backblaze B2를 추가하세요.
3. 체크섬 비교를 활성화한 단방향 동기화 작업을 구성한 뒤 먼저 Dry Run을 실행하세요.
4. HiDrive 사본을 폐기하기 전에 Folder Compare와 Job History로 결과를 확인하세요.

Backblaze B2로 이전한다고 해서 HiDrive에 이미 구축된 폴더 구조와 파일 구성을 포기할 필요는 없습니다 — RcloneView는 전송 과정에서 이를 그대로 유지합니다.

---

**관련 가이드:**

- [HiDrive 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-hidrive-cloud-sync-backup-rcloneview)
- [Backblaze B2 스토리지 관리 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [HiDrive 동기화 오류 해결 — RcloneView로 안정적인 클라우드 백업하기](https://rcloneview.com/support/blog/fix-hidrive-sync-errors-rcloneview)

<CloudSupportGrid />
