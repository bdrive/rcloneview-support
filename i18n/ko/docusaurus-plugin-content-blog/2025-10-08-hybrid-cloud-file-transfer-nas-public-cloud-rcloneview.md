---
slug: hybrid-cloud-file-transfer-nas-public-cloud-rcloneview
title: "RcloneView로 온프레미스 NAS와 퍼블릭 클라우드 간 하이브리드 클라우드 파일 전송하기"
authors:
  - tayson
description: "RcloneView의 2분할 탐색기(Explorer), 비교(Compare), 동기화(Sync), 예약 작업(Jobs)을 사용해 온프레미스 NAS(SMB/SFTP)와 S3, Wasabi, Google Drive, Dropbox 같은 퍼블릭 클라우드 간 마운트, 동기화, 자동 전송을 설정하세요."
keywords:
  - rcloneview
  - hybrid cloud
  - nas backup
  - smb sftp
  - webdav
  - s3 transfer
  - google drive sync
  - wasabi backup
  - mount remote drive
  - rclone gui
tags:
  - RcloneView
  - cloud
  - sync
  - nas
  - mount
  - hybrid-cloud
  - sftp
  - smb
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 온프레미스 NAS와 퍼블릭 클라우드 간 하이브리드 클라우드 파일 전송하기

> CLI 곡예 없이 온프레미스 NAS와 퍼블릭 클라우드를 연결하세요. RcloneView를 사용하면 SMB/SFTP/WebDAV를 추가하고, 클라우드를 나란히 열어 변경 사항을 비교(Compare)하고, 드라이브를 마운트하고, 야간 동기화를 예약할 수 있어 하이브리드 스토리지를 깔끔하고 예측 가능하게 유지할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/rcloneview-user-interface.png" alt="RcloneView user interface overview" class="img-medium img-center" />

## 하이브리드 클라우드가 어려운 이유(그리고 그럴 만한 가치가 있는 이유)

- 온프레미스 NAS는 편집자와 렌더 노드에 빠른 LAN 접근을 제공하지만, 오프사이트 복원력이 부족합니다.
- 퍼블릭 클라우드(S3/Wasabi/Drive/Dropbox)는 내구성과 전 세계 공유 기능을 더해주지만, 대역폭과 비용이 문제가 됩니다.
- 팀은 서로 다른 권한 체계(NAS의 ACL 대 OAuth/클라우드 RBAC)와 폴더 규칙을 함께 다뤄야 합니다.
- 수동으로 복사하면 덮어쓰기, 버전 누락, 늦은 밤의 허둥지둥한 대응 위험이 있습니다.
- 양쪽을 하나로 통합하는 GUI는 인지 부하를 줄이고 자동화를 자신 있게 진행할 수 있게 해줍니다.

## 하나의 창에서 로컬 FS와 원격 FS 다루기

- **로컬/NAS(SMB/SFTP/WebDAV):** POSIX와 유사하며 권한에 민감하고, LAN에서는 지연 시간이 짧습니다.
- **클라우드:** 객체 스토리지(S3/Wasabi) 또는 드라이브 형식(Google Drive/Dropbox)이며, OAuth나 키가 필요합니다.
- RcloneView는 각각을 하나의 인터페이스에서 열고, 비교하고, 마운트하고, 동기화할 수 있는 리모트로 다룹니다.

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/explorer-view-layout.png" alt="Two-pane Explorer layout" class="img-medium img-center" />

## 온프레미스 NAS 리모트 추가하기(SMB/SFTP/WebDAV)

1. **리모트 → + 새 리모트** 또는 탐색기(Explorer)의 **+** 버튼을 클릭합니다.
2. **SMB**(Windows/NAS 공유용) 또는 **SFTP**(Linux/UNIX 서버용)를 선택합니다.
3. 서버 주소, 공유/경로, 자격 증명을 입력합니다(SMB에 도메인이 필요하면 추가).
4. 저장한 뒤 2분할 탐색기에서 탐색을 테스트합니다.

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/create-remote-by-remote-manager.png" alt="Create remote from Remote Manager" class="img-medium img-center" />

## 퍼블릭 클라우드 리모트 추가하기

- **S3/Wasabi/B2/R2:** 액세스/시크릿 키를 사용하고, 리전과 버킷을 선택합니다.
- **Google Drive/Dropbox:** **Connect**를 클릭하여 OAuth를 완료합니다. 토큰을 붙여넣을 필요가 없습니다.
- **WebDAV 엔드포인트:** URL과 인증 정보를 붙여넣습니다.
- NAS와 클라우드 리모트를 모두 **리모트 관리자(Remote Manager)**에 저장해 재사용합니다.

## 원격 파일 시스템을 로컬 드라이브처럼 마운트하기

마운트는 로컬 경로를 고집하는 앱(NLE, DAW, CAD)에 도움이 됩니다. RcloneView의 마운트 관리자를 사용하면 CLI 플래그를 다룰 필요가 없습니다.

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount from Remote Explorer" class="img-medium img-center" />

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/mount-manager-status.png" alt="Mount manager status view" class="img-medium img-center" />

- 리모트 카드나 툴바에서 마운트를 시작하고, 드라이브 문자/경로를 선택하고, 캐시/버퍼를 설정합니다.
- 재부팅 없이 **마운트 관리자(Mount Manager)**에서 마운트를 시작/중지합니다.
- SFTP/SMB에서 직접 편집하거나, 가벼운 작업을 위해 S3를 폴더로 노출할 때 이상적입니다.

## 복사하기 전에 비교하기

하이브리드 이동은 지저분해지기 쉬운데, 비교(Compare) 기능이 차이를 명확하게 보여줍니다.

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/folder-comparison-completed.png" alt="Folder comparison results" class="img-medium img-center" />

- 왼쪽에 NAS, 오른쪽에 클라우드 버킷을 열고 **비교(Compare)**를 클릭합니다.
- **누락된 파일**, **크기가 다른 파일**, **일치하는 파일**을 강조 표시합니다.
- 최근 수정본을 덮어쓰지 않도록 NAS → 클라우드(또는 반대 방향)로 차이 나는 부분만 복사합니다.

## 하이브리드 클라우드에 맞는 동기화 및 복사 흐름

- 백업/아카이브에는 **단방향 복사**를 사용하며, 대상에서 삭제하지 않습니다.
- NAS를 클라우드에 의도적으로 미러링할 때는 **삭제를 포함한 단방향 동기화**를 사용합니다.
- **양방향 동기화**는 양쪽 모두 실제로 변경되는 경우에만 신중하게 사용합니다.
- 캐시, 프록시, 임시 렌더 파일을 건너뛰려면 **포함/제외 필터**를 사용합니다.

## 권한 문제 없이 처리하기

- **SMB:** 도메인/워크그룹을 맞추고, 공유 ACL과 파일 시스템 ACL이 쓰기를 허용하는지 확인합니다.
- **SFTP:** 서버의 UID/GID와 폴더 소유권을 확인하고, 필요하면 서버 측에서 `chmod`로 조정합니다.
- **WebDAV:** 일부 호스트는 MOVE/DELETE를 차단하므로, 확신이 없다면 복사만 사용합니다.
- 마운트가 읽기 전용이라면 올바른 사용자로 다시 마운트하거나 대화상자에서 마운트 옵션을 조정합니다.

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/log-tab.png" alt="Log tab showing transfer details" class="img-medium img-center" />

- 401/403/550/권한 거부 관련 단서는 **로그(Logs)**에서 확인하고, 문제를 해결한 뒤 재시도합니다.

## NAS ↔ 클라우드 성능 팁

- 대용량 작업은 업무 외 시간에 예약하고, 업무 시간에는 대역폭을 제한합니다.
- S3/Wasabi의 경우 스로틀링을 피하기 위해 동시성을 적당히 유지하고, 지원되는 경우 **체크섬**을 활성화합니다.
- WAN을 통한 SFTP의 경우 패킷 손실이 보이면 병렬 전송 수를 줄이고, CPU 여유가 있을 때만 압축을 고려합니다.
- 불안정한 네트워크에서 동일한 SMB 공유를 이중으로 마운트하지 마세요.

## Jobs와 예약으로 자동화하기

- 동기화/복사 작업을 **작업(Job)**으로 저장합니다(예: `nas-to-s3-nightly`).
- **작업 관리자(Job Manager) → 작업 추가**를 열고, 저장된 작업을 선택한 뒤 **매일 02:00**으로 예약합니다.
- 경합을 최소화하려면 여러 작업(NAS → S3, NAS → Drive, Drive → NAS)의 시간을 분산합니다.

<!-- Image verified: exists and path corrected with /support -->
<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Create job schedule" class="img-medium img-center" />

### 예시 작업 세트

- **NAS(SMB) → Wasabi(단방향 복사)**: RAW/PROJECT의 주간 아카이브.
- **NAS(SFTP) → Google Drive 공유 드라이브(단방향 동기화)**: 협업을 위한 일일 EDIT/EXPORT.
- **S3 → NAS(단방향 복사)**: 매월 로컬 복원 테스트를 위해 콜드 아카이브 조각을 가져오기.

### 드라이런과 검증

- 처음 실행할 때는 **드라이런(dry-run)**을 실행하여 무엇이 이동할지 확인합니다.
- 동기화 후 **비교(Compare)**를 다시 열어, 예상된 차이만 남아 있는지 확인합니다.
- S3/Wasabi의 경우 비용을 관리하고 이력을 보존하기 위해 버전 관리와 수명 주기 규칙을 유지합니다.

## 하이브리드 폴더 전략 구성하기

- NAS와 클라우드 양쪽에 표준 템플릿(예: `Project/RAW`, `EDIT`, `EXPORT`, `ARCHIVE`)을 적용합니다.
- 빠른 공유를 위해 프록시는 클라우드에, 충실도를 위해 RAW는 NAS/S3에 보관합니다.
- 아카이브에는 **복사(Copy)**, 활성 작업 공간에는 **동기화(Sync)**, 앱 호환성을 위해서는 **마운트(Mount)**를 사용합니다.
- 실수로 인한 삭제를 방지하기 위해 폴더별로 어떤 리모트가 "신뢰할 수 있는 원본(source of truth)"인지 문서화합니다.

## 실제 워크플로(단계별)

1. **리모트 연결:** NAS용 SMB/SFTP를 추가하고, S3/Wasabi와 Google Drive를 추가합니다.
2. **두 창 열기:** 왼쪽에 NAS, 오른쪽에 클라우드를 열고 목록을 확인합니다.
3. **작은 시범 폴더 비교:** 차이가 올바르게 보이는지 확인합니다.
4. **클라우드로 단방향 복사 실행:** 비파괴적인 백업부터 시작합니다.
5. **작업으로 저장 + 예약:** 차이만 처리하도록 매일 밤 02:00으로 설정합니다.
6. **앱을 위한 마운트:** 편집자가 경로 기반 접근이 필요할 때 NAS 또는 S3를 마운트합니다.
7. **로그 검토:** 재시도, 스로틀링 메시지, 권한 관련 내용을 로그에서 확인합니다.
8. **주기적 복원 테스트:** 클라우드에서 임시 NAS 폴더로 다시 복사하여 무결성을 확인합니다.
9. **필터 다듬기:** 캐시/렌더를 제외하고, 아카이브에는 마스터와 프로젝트 파일만 포함합니다.
10. **팀 인수인계:** 모두가 같은 체계를 따르도록 폴더 템플릿과 작업 일정을 공유합니다.

## 빠른 문제 해결 목록

- 403/550이 보이나요? 자격 증명, 공유 ACL, 버킷 정책을 다시 확인하세요.
- WAN이 느린가요? 동시성을 낮추고 대역폭 제한을 활성화한 뒤, 야간으로 예약하세요.
- 마운트에 쓰기가 안 되나요? 올바른 사용자로 다시 마운트하거나 SMB 권한을 조정하세요.
- WebDAV 삭제가 실패하나요? 복사 후 수동으로 정리하세요. 일부 호스트는 MOVE/DELETE를 차단합니다.
- 중복된 사본이 있나요? 비교(Compare)를 사용해 안전하게 정리하고, 꼭 필요한 경우가 아니면 양방향 동기화를 피하세요.

## 실사용 전 체크리스트

- [ ] NAS 리모트(SMB/SFTP/WebDAV)가 추가되고 탐색 가능한지 확인.
- [ ] 클라우드 리모트(S3/Wasabi/Drive/Dropbox)가 추가되고 인증되었는지 확인.
- [ ] 폴더 템플릿이 양쪽에 동일하게 적용되었는지 확인.
- [ ] 시범 비교와 드라이런을 완료했는지 확인.
- [ ] 작업이 저장되고 예약되었는지 확인(02:00 권장).
- [ ] 지원되는 경우 체크섬을 활성화하고 로그를 모니터링하는지 확인.
- [ ] 복원 테스트를 수행하고 문서화했는지 확인.

## 요약

RcloneView는 하이브리드 클라우드 작업을 반복 가능한 워크플로로 바꿔줍니다. NAS와 클라우드 리모트를 추가하고, 복사하기 전에 비교하고, 앱이 로컬 경로를 요구할 때는 마운트하고, 작업(Jobs)과 예약으로 백업을 자동화하세요. 눈에 보이는 로그, 재시도, 체크섬 지원 덕분에 CLI를 건드리지 않고도 온프레미스의 성능과 클라우드의 복원력을 함께 유지할 수 있습니다.

<CloudSupportGrid />
