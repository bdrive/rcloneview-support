---
slug: migrate-seafile-to-onedrive-rcloneview
title: "Seafile을 OneDrive로 마이그레이션하기 — RcloneView로 파일 전송하기"
authors:
  - casey
description: "RcloneView의 듀얼 패널 탐색기와 작업 마법사를 사용해 자체 호스팅 Seafile 서버의 라이브러리를 Microsoft OneDrive로 이동하고, 드라이 런으로 검증하세요."
keywords:
  - Seafile 마이그레이션
  - OneDrive
  - RcloneView
  - 자체 호스팅에서 클라우드로
  - 클라우드 간 전송
  - Seafile을 OneDrive로
  - Microsoft 365 마이그레이션
  - rclone seafile onedrive
tags:
  - RcloneView
  - seafile
  - onedrive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Seafile을 OneDrive로 마이그레이션하기 — RcloneView로 파일 전송하기

> 자체 호스팅 Seafile 서버를 Microsoft OneDrive로 대체한다고 해서 수동으로 다운로드하고 다시 업로드할 필요는 없습니다 — RcloneView는 두 서비스를 직접 연결하고 라이브러리를 하나의 작업으로 이동시킵니다.

자체 호스팅 Seafile 배포가 규모를 초과한 팀은 기존 Microsoft 365 구독에 파일 저장을 통합하고 서버 유지 관리를 줄이기 위해 종종 OneDrive로 전환합니다. RcloneView는 Seafile과 OneDrive를 동일한 창의 동등한 리모트로 취급하므로, 먼저 로컬 디스크로 라이브러리를 내보낼 필요 없이 두 서비스를 모두 탐색하고, 내용을 비교하고, 통제된 전송을 실행할 수 있습니다. RcloneView는 하나의 창에서 90개 이상의 제공업체를 마운트하고 동기화하며 Windows, macOS, Linux에서 동작하므로, Seafile 서버가 온프레미스에 있든 프라이빗 데이터 센터에 있든 동일한 워크플로가 적용됩니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Seafile 서버 연결하기

**New Remote**를 열고 **Seafile**을 선택한 다음, 서버 URL, 사용자 이름, 비밀번호를 입력하세요. 2단계 인증이 활성화되어 있다면 요청 시 일회용 토큰을 입력하세요. 연결이 완료되면 RcloneView는 개인 및 공유 라이브러리를 포함해 접근 가능한 모든 라이브러리를 다른 리모트와 동일한 폴더 트리와 파일 목록 형태로 파일 탐색기에 표시합니다.

암호화된 라이브러리는 RcloneView가 내용을 읽기 전에 라이브러리 비밀번호가 필요합니다. 전체 마이그레이션을 예약하기 전에 작은 암호화 라이브러리 하나에서 접근이 되는지 테스트하세요. 비밀번호가 누락되면 명확한 오류 대신 빈 폴더로 나타나기 때문입니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 Seafile 리모트 추가하기" class="img-large img-center" />

## Microsoft OneDrive 추가하기

**New Remote** > **OneDrive**를 통해 두 번째 리모트를 추가하세요. RcloneView는 OAuth 로그인을 위한 브라우저 창을 엽니다 — Microsoft 계정으로 인증하고 요청된 권한을 승인하세요. OneDrive for Business 테넌트의 경우에도 동일한 OAuth 흐름이 적용되며, 일반적인 사용에는 별도의 앱 등록이 필요하지 않습니다.

전송을 시작하기 전에 OneDrive에 `Seafile Import/`와 같은 대상 폴더를 만드세요. 마이그레이션된 콘텐츠를 별도로 유지하면 결과를 쉽게 확인할 수 있고, 이미 OneDrive 루트에 있는 콘텐츠와 마이그레이션된 파일이 섞이는 것을 방지할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView에서 Seafile과 OneDrive 리모트를 나란히 열어놓은 모습" class="img-large img-center" />

## 마이그레이션 작업 실행하기

두 리모트가 열려 있으면 작은 라이브러리는 바로 드래그하여 전송할 수 있습니다 — 서로 다른 리모트 간의 드래그 앤 드롭은 복사로 처리되며 Seafile 원본은 그대로 유지됩니다. 전체 서버 마이그레이션의 경우 4단계 **Job Wizard**를 사용하세요. Seafile 라이브러리를 소스로, OneDrive 폴더를 대상으로 설정한 다음, 2단계에서 전송 수와 동등성 검사기를 구성하세요.

실제 전송 전에는 항상 **드라이 런**을 실행하세요. 데이터를 이동하지 않고 복사될 모든 파일을 나열해 주므로, 잘못된 소스 폴더나 예상보다 큰 라이브러리를 전송을 확정하기 전에 발견하는 가장 빠른 방법입니다. 미리보기가 올바르면 작업을 시작하고 Transferring 탭에서 진행 상황을 확인하세요. **Job History**는 무엇이 언제 이동했는지에 대한 영구 기록을 보관합니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView에서 Seafile을 OneDrive로 마이그레이션하는 작업 실행하기" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **New Remote** > **Seafile**을 클릭하고 서버 URL과 자격 증명을 입력하세요.
3. **New Remote** > **OneDrive**를 클릭하고 OAuth 인증을 완료하세요.
4. 드라이 런을 실행한 다음 마이그레이션 작업을 실행하고 Job History에서 결과를 확인하세요.

이 방식으로 Seafile을 OneDrive로 마이그레이션하면 모든 전송을 감사할 수 있어, 이전 서버에서 무엇이 나갔고 어디로 도착했는지 항상 정확히 알 수 있습니다.

---

**관련 가이드:**

- [RcloneView로 Seafile 클라우드 동기화 및 백업 관리하기](https://rcloneview.com/support/blog/manage-seafile-cloud-sync-backup-rcloneview)
- [RcloneView로 OneDrive 클라우드 동기화 및 백업 관리하기](https://rcloneview.com/support/blog/manage-onedrive-cloud-sync-backup-rcloneview)
- [RcloneView로 Seafile을 Google Drive로 마이그레이션하기](https://rcloneview.com/support/blog/migrate-seafile-to-google-drive-rcloneview)

<CloudSupportGrid />
