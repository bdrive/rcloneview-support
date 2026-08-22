---
slug: migrate-opendrive-to-onedrive-rcloneview
title: "OpenDrive에서 OneDrive로 마이그레이션하기 — RcloneView로 파일 전송"
authors:
  - alex
description: "RcloneView의 클라우드 간 전송, Dry Run 미리보기, Job History 추적 기능으로 OpenDrive 파일을 Microsoft OneDrive로 옮기세요."
keywords:
  - opendrive를 onedrive로 마이그레이션
  - opendrive onedrive 전송
  - rcloneview opendrive 마이그레이션
  - opendrive onedrive 동기화
  - 클라우드 간 마이그레이션
  - opendrive 대안
  - onedrive 마이그레이션 도구
  - opendrive 파일 전송
  - 멀티 클라우드 파일 전송
  - 클라우드 스토리지 마이그레이션 gui
tags:
  - RcloneView
  - opendrive
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# OpenDrive에서 OneDrive로 마이그레이션하기 — RcloneView로 파일 전송

> RcloneView를 사용해 OpenDrive 계정의 파일을 Microsoft OneDrive로 바로 옮기세요. 로컬로 다운로드했다가 다시 업로드하는 단계를 거칠 필요가 없습니다.

더 적은 수의 프로바이더로 스토리지를 통합하는 것은 OpenDrive를 떠나는 흔한 이유이며, 특히 이미 Microsoft 365로 협업 도구를 표준화한 팀에게 더욱 그렇습니다. RcloneView는 두 서비스를 같은 창에서 연결하고 데이터를 직접 전송하므로, 마이그레이션이 로컬 디스크 공간을 모든 것의 임시 사본으로 채우는 데 의존하지 않습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 두 리모트 연결하기

New Remote 마법사를 통해 OpenDrive를 리모트로 추가하고 요청되는 계정 정보를 입력한 다음, 브라우저 기반 OAuth 로그인으로 OneDrive를 두 번째 리모트로 추가하세요. 두 리모트 모두 Explorer 패널에 별도의 탭으로 나타나며, RcloneView는 하나의 창에서 Windows, macOS, Linux 전반에 걸쳐 90개 이상의 프로바이더를 마운트하고 동기화하므로, 두 계정을 연결한 후에는 별도의 도구가 필요 없습니다.

두 리모트가 나란히 표시되면, 드래그 앤 드롭으로 직접 복사가 실행됩니다 — 서로 다른 리모트 간의 드래그는 항상 이동이 아니라 복사이므로, 전송을 확인할 때까지 원본 OpenDrive 파일은 그대로 남아 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding OpenDrive and OneDrive remotes in RcloneView" class="img-large img-center" />

## Sync 작업으로 마이그레이션 실행하기

한 번의 폴더 복사가 아니라 전체 계정을 마이그레이션하려면, 4단계 Sync 마법사가 더 안정적인 방법입니다. OpenDrive 리모트와 폴더를 소스로, OneDrive를 대상으로 선택하고, 단방향 동기화를 선택하면 변경 사항이 되돌아갈 위험 없이 대상이 소스와 일치하도록 구성됩니다. Advanced 설정에서는 동시 파일 전송 수를 조정하고 체크섬 비교를 활성화할 수 있으며, 이는 크기만 신뢰하는 대신 각 파일이 해시와 크기로 일치하는지 확인합니다 — 원시 속도보다 데이터 무결성이 더 중요한 마이그레이션이라면 켜둘 가치가 있습니다.

전체 실행을 진행하기 전에 Dry Run은 정확히 어떤 파일이 복사될지 미리 보여주므로, 오래된 공유 폴더처럼 예상치 못한 항목이 OneDrive에 반영되기 전에 발견할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating files from OpenDrive to OneDrive with RcloneView Sync" class="img-large img-center" />

## 전송이 깔끔하게 완료됐는지 확인하기

동기화가 끝난 뒤, Compare 기능은 OpenDrive 소스와 OneDrive 대상을 나란히 대조하여 왼쪽에만 있는 파일, 오른쪽에만 있는 파일, 크기가 다른 파일을 표시합니다. 이는 OpenDrive 계정을 안전하게 종료하기 전에 부분적으로 전송되었거나 건너뛴 파일을 잡아내며, 비교 화면에서 발견된 격차는 그 자리에서 바로 복사할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing OpenDrive and OneDrive after migration in RcloneView" class="img-large img-center" />

## Job History에서 마이그레이션 추적하기

마이그레이션 작업의 모든 실행 — 남은 파일을 잡아내기 위한 수동 재실행이든, 네트워크 오류 후 재시도든 — 은 시작 시간, 소요 시간, 상태, 총 용량, 파일 수와 함께 Job History에 기록됩니다. 이 기록은 나중에 마이그레이션에 대해 설명해야 할 때 정확히 무엇이 언제 이동했는지 확인하는 데 유용합니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. OpenDrive와 OneDrive를 모두 리모트로 추가하세요.
3. OpenDrive에서 OneDrive로 향하는 단방향 Sync 작업을 구성하고, 먼저 Dry Run을 실행한 다음 전송을 실행하세요.
4. OpenDrive 계정을 폐기하기 전에 Compare로 모든 파일이 도착했는지 확인하세요.

클라우드 간 직접 마이그레이션은 프로세스를 빠르게 유지하고, 모든 것을 먼저 다운로드하는 데서 오는 로컬 저장 공간 부족 문제를 피하게 해줍니다.

---

**관련 가이드:**

- [RcloneView로 OneDrive 스토리지 관리하기 — 파일 동기화 및 백업](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [OpenDrive를 Google Drive로 동기화하기 — RcloneView로 클라우드 백업](https://rcloneview.com/support/blog/sync-opendrive-to-google-drive-rcloneview)
- [OpenDrive를 AWS S3로 백업하기 — RcloneView 외부 스토리지](https://rcloneview.com/support/blog/backup-opendrive-aws-s3-external-storage-rcloneview)

<CloudSupportGrid />
