---
slug: migrate-yandex-disk-to-backblaze-b2-rcloneview
title: "Yandex Disk를 Backblaze B2로 마이그레이션 — RcloneView로 파일 전송"
authors:
  - morgan
description: "RcloneView로 Yandex Disk를 Backblaze B2로 마이그레이션하세요. 두 리모트를 연결하고, 복사를 드라이 런하고, Folder Compare로 검증하며 안정적인 백업을 유지합니다."
keywords:
  - Yandex Disk를 Backblaze B2로 마이그레이션
  - yandex disk to b2
  - Yandex Disk 백업
  - Backblaze B2 마이그레이션
  - RcloneView Yandex Disk
  - 클라우드 간 전송
  - Yandex Disk에서 파일 이동
  - rclone yandex backblaze
  - 클라우드 마이그레이션 GUI
  - Yandex Disk 파일 내보내기
tags:
  - RcloneView
  - yandex-disk
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Yandex Disk를 Backblaze B2로 마이그레이션 — RcloneView로 파일 전송

> Yandex Disk의 모든 파일을 Backblaze B2 버킷으로 복사하고, 모든 파일이 도착했는지 명령줄 없이 확인하세요.

파일이 Yandex Disk에 있지만 Backblaze B2에 독립적인 버킷 기반 사본을 두고 싶다면, 보통은 내 컴퓨터를 거쳐 수동으로 다운로드한 뒤 다시 업로드하는 방법을 씁니다. RcloneView는 두 서비스를 하나의 창에서 연결하고 그 사이의 전송을 실행하며, 사전에 드라이 런을, 사후에 폴더 비교를 제공합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Yandex Disk와 Backblaze B2 연결하기

Yandex Disk는 OAuth를 사용합니다. **New Remote**에서 선택하면 RcloneView가 브라우저를 열어 로그인하고 접근을 승인할 수 있게 합니다. API 키는 필요하지 않습니다. Backblaze B2는 Backblaze 키 관리 페이지에서 발급한 Application Key ID와 Application Key를 사용합니다. 마이그레이션 자격 증명이 다른 곳에 접근하지 못하도록 대상 버킷으로 제한된 키를 만드세요.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Yandex Disk and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

한쪽 Explorer 패널에서 Yandex Disk를, 다른 쪽에서 B2 버킷을 엽니다. RcloneView는 Windows, macOS, Linux에서 90개 이상의 제공업체를 하나의 창에서 마운트하고 동기화할 수 있으므로 작업하는 동안 양쪽이 모두 보입니다.

## 구조 계획 및 복사

폴더를 버킷에 어떻게 매핑할지 결정하세요. 10년 치 프로젝트 폴더가 있는 소규모 디자인 스튜디오라면 Yandex Disk의 최상위 폴더마다 하나의 버킷 안에서 접두사로 그대로 옮겨 나중에도 경로를 읽기 쉽게 유지할 수 있습니다. 먼저 **New Folder**로 대상 폴더를 만드세요.

Yandex Disk 패널에서 B2 패널로 폴더를 드래그하세요. 서로 다른 리모트 사이에서는 드래그 앤 드롭이 복사로 동작하므로 원본은 그대로 남습니다. 규모가 크거나 반복해야 하는 마이그레이션이라면 대신 Sync 마법사를 사용하세요. Yandex Disk를 소스로, 버킷 경로를 대상으로 지정하고, 작업 이름은 영문자, 숫자, 하이픈, 밑줄로 지정합니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud transfer from Yandex Disk to Backblaze B2" class="img-large img-center" />

## Dry Run 및 전송 모니터링

먼저 **Dry Run**을 실행하세요. 복사될 파일과 삭제될 파일을 나열하므로 소스나 대상이 잘못되었을 때 피해를 입기 전에 발견할 수 있습니다. 대상을 소스와 같게 수정하는 단방향 동기화에서 특히 중요합니다.

Advanced Settings에서 동시 파일 전송 수를 조정하고, 해시와 크기 검증이 필요하면 체크섬 비교를 활성화하세요. 보수적으로 시작한 다음 전송이 안정되면 동시성을 높이세요. 진행 상황, 속도, 파일 수는 **Transferring** 탭에서 확인합니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring a Yandex Disk to B2 transfer in real time" class="img-large img-center" />

## Folder Compare로 검증하기

작업이 끝나면 Home 탭에서 **Compare**를 열어 왼쪽에 Yandex Disk, 오른쪽에 B2를 둡니다. 왼쪽에만 있거나 서로 다른 파일로 필터링하여 누락된 항목을 찾고 Copy right로 빈틈을 채우세요. Job History는 각 실행의 상태, 크기, 속도, 파일 수를 기록하므로 마이그레이션 기록으로 유용합니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare between Yandex Disk and Backblaze B2" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. OAuth로 Yandex Disk를, 버킷으로 제한된 애플리케이션 키로 Backblaze B2를 추가합니다.
3. Dry Run을 실행한 다음 복사 또는 동기화 작업을 시작합니다.
4. Folder Compare로 버킷이 소스와 일치하는지 확인합니다.

오브젝트 스토리지에 검증된 두 번째 사본이 있으면 Yandex Disk가 파일이 존재하는 유일한 장소가 아니게 됩니다.

---

**관련 가이드:**

- [HiDrive를 Backblaze B2로 마이그레이션](https://rcloneview.com/support/blog/migrate-hidrive-to-backblaze-b2-rcloneview)
- [Yandex Disk를 Dropbox로 마이그레이션](https://rcloneview.com/support/blog/migrate-yandex-disk-to-dropbox-rcloneview)
- [Dry Run: 전송 전에 동기화 미리 보기](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)

<CloudSupportGrid />
