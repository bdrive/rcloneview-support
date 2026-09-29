---
slug: migrate-gofile-to-backblaze-b2-rcloneview
title: "Gofile에서 Backblaze B2로 마이그레이션 — RcloneView로 파일 전송"
authors:
  - tayson
description: "RcloneView로 Gofile에서 Backblaze B2로 마이그레이션: 두 리모트 연결, 드라이 런 복사, Folder Compare 검증, 안정적인 백업 유지."
keywords:
  - gofile에서 backblaze b2로 마이그레이션
  - gofile에서 b2로
  - gofile 백업
  - backblaze b2 마이그레이션
  - RcloneView gofile
  - 클라우드 간 전송
  - gofile 파일 전송 도구
  - gofile에서 파일 옮기기
  - rclone gofile backblaze
  - 클라우드 마이그레이션 GUI
tags:
  - RcloneView
  - gofile
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Gofile에서 Backblaze B2로 마이그레이션 — RcloneView로 파일 전송

> Gofile로 공유하던 파일을 Backblaze B2 오브젝트 스토리지로 옮기고, 명령어를 한 줄도 입력하지 않고 모든 파일이 도착했는지 확인하세요.

Gofile은 다른 사람에게 파일을 전달하기에는 편리하지만, 중요한 파일의 유일한 사본을 보관하기에는 적합하지 않습니다. Backblaze B2는 장기 보관을 위해 만들어진 오브젝트 스토리지로, 버킷 단위로 보관 대상을 관리할 수 있습니다. RcloneView는 두 서비스를 하나의 창에서 연결하고 하나의 인터페이스에서 복사하므로 파일을 일일이 직접 내려받았다가 다시 업로드할 필요가 없습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Gofile과 Backblaze B2 연결

Gofile은 Access Token으로 인증합니다. Gofile 프로필 페이지의 API 토큰 항목에서 복사한 뒤 **New Remote**에서 Gofile을 선택하고 붙여넣으세요. Backblaze B2에는 Application Key ID와 Application Key가 필요하며, Backblaze의 키 관리 페이지에서 생성합니다. 마스터 키 대신 대상 버킷으로 범위를 제한한 키를 만들면 마이그레이션 자격 증명이 필요한 범위만 접근하게 할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 Gofile과 Backblaze B2 리모트 추가" class="img-large img-center" />

두 리모트를 만든 뒤에는 한쪽 Explorer 패널에서 Gofile을, 다른 쪽에서 B2 버킷을 여세요. RcloneView는 최대 네 개의 패널을 동시에 보여 주므로 로컬 폴더를 함께 열어 두고 확인할 수도 있습니다. S3, Azure, Backblaze B2 연결은 FREE 라이선스에서도 읽기/쓰기가 모두 가능합니다.

## 복사 전에 구조 계획하기

Gofile 콘텐츠를 버킷에 어떻게 대응시킬지 먼저 정하세요. 예를 들어 사진 스튜디오가 열두 개의 Gofile 폴더에 고객 납품물을 보관하고 있다면, B2 버킷 하나를 만들고 각 폴더를 최상위 프리픽스로 그대로 옮기면 나중에도 경로를 읽기 쉽습니다. B2 패널에서 **New Folder**로 대상 폴더를 먼저 만드세요.

Gofile 패널에서 B2 패널로 폴더를 드래그하세요. 서로 다른 리모트 사이에서는 드래그 앤 드롭이 복사로 동작하므로 원본 Gofile 파일은 직접 정리하기 전까지 그대로 남습니다. 반복 실행이 필요한 대규모 마이그레이션이라면 Sync 마법사를 사용하세요. Gofile을 소스로, 버킷 경로를 대상으로 지정하고 문자, 숫자, 하이픈, 밑줄로 작업 이름을 정하면 됩니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView에서 Gofile을 Backblaze B2로 클라우드 간 전송" class="img-large img-center" />

## Dry Run, 전송, 모니터링

실제 실행 전에 **Dry Run**을 사용하세요. 복사될 파일과 삭제될 파일이 나열되므로 소스나 대상을 잘못 지정했더라도 손해를 보기 전에 발견할 수 있습니다. 단방향 동기화를 선택하면 대상이 소스와 같아지도록 변경되므로 잠깐 시간을 들여 Dry Run을 해 볼 가치가 있습니다.

Advanced Settings에서 동시 파일 전송 수를 조정하고 체크섬 비교를 켤 수 있습니다. 첫 실행은 보수적으로 시작하고, 전송이 안정적이면 동시 전송 수를 올리세요. 창 하단의 **Transferring** 탭에서 진행률, 속도, 파일 수를 확인합니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Transferring 탭에서 전송 진행 상황 모니터링" class="img-large img-center" />

## Folder Compare로 검증

전송이 끝나면 Home 탭에서 **Compare**를 열고 왼쪽에 Gofile, 오른쪽에 B2를 지정하세요. left-only 파일로 필터링하면 도착하지 못한 파일을, different 파일로 필터링하면 크기 불일치를 확인할 수 있습니다. Copy right는 이미 일치하는 파일을 다시 보내지 않고 빠진 부분만 채웁니다. Job History에는 각 실행의 상태, 크기, 소요 시간이 기록되어 마이그레이션 기록으로 남습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Gofile과 B2의 차이를 보여 주는 Folder Compare" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. Access Token으로 Gofile 리모트를, 버킷 범위 애플리케이션 키로 Backblaze B2 리모트를 추가합니다.
3. 두 리모트를 나란히 열고 **Dry Run**을 실행한 다음 폴더를 복사하거나 동기화합니다.
4. Gofile 쪽을 정리하기 전에 **Compare**로 누락된 파일이 없는지 확인합니다.

B2에 검증된 사본을 두면 임시 공유 링크가 직접 관리하는 백업으로 바뀝니다.

---

**관련 가이드:**

- [Gofile에서 Google Drive로 마이그레이션](https://rcloneview.com/support/blog/migrate-gofile-to-google-drive-rcloneview)
- [Gofile 스토리지 관리](https://rcloneview.com/support/blog/manage-gofile-cloud-sync-backup-rcloneview)
- [IDrive e2에서 Backblaze B2로 마이그레이션](https://rcloneview.com/support/blog/migrate-idrive-e2-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
