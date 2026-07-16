---
slug: cloud-to-synology-nas-with-rcloneview
title: "클라우드-NAS 브릿지: RcloneView로 Google Drive & OneDrive를 Synology에 백업하기"
authors:
  - jay
description: "RcloneView의 클릭 중심 워크플로우—드래그 앤 드롭 전송, 시각적 비교, 예약 동기화—를 이용해 CLI 없이 클라우드 드라이브(예: Google Drive, OneDrive)의 파일을 Synology NAS로 이동하고 동기화하세요."
keywords:
  - rcloneview
  - synology nas
  - google drive backup
  - onedrive backup
  - cloud to nas
  - webdav
  - sftp
  - rclone GUI
  - scheduled sync
tags:
  - synology
  - google-drive
  - onedrive
  - cloud-file-transfer
---



import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 클라우드-NAS 브릿지: RcloneView로 Google Drive & OneDrive를 Synology에 백업하기

> 로컬 안전 복사본을 유지하고 데이터에 대한 통제권을 가져가세요. 명령줄 없이 깔끔한 클릭 기반 워크플로우로 **클라우드 드라이브**를 **Synology NAS**에 미러링합니다.

## 클라우드에서 NAS로, 똑똑하게—왜 중요한가

클라우드 스토리지는 협업과 어디서든 접근하기에 편리합니다. 하지만 Synology NAS에 **두 번째 온프레미스 복사본**을 유지하면 버전 관리 백업, LAN 속도의 복원, 특정 제공업체에 대한 의존도 탈피가 가능해집니다. **RcloneView**를 사용하면 인기 있는 클라우드 서비스(예: **Google Drive**, **OneDrive**, 그 외 rclone이 지원하는 서비스)와 NAS를 연결한 다음, 한 화면에서 작업을 **미리 보고, 복사하고, 예약**할 수 있습니다.

<!-- truncate -->

**클라우드 드라이브 이해하기 (한눈에 보기)**  
- 실시간 협업과 공유에 뛰어납니다.  
- 제공업체 측 한도/할당량이 대규모 마이그레이션에 영향을 줄 수 있습니다(배치 단위로 계획하세요).  

**Synology NAS 이해하기 (한눈에 보기)**  
- 집이나 사무실에서 상시 가동되는 스토리지 허브입니다.  
- **SMB/NFS**(로컬 폴더로 마운트)나 **WebDAV**, **SFTP** 같은 네트워크 프로토콜로 접근할 수 있습니다.  
- 중앙 집중식 백업, 미디어 호스팅, 장기 아카이빙에 이상적입니다.

**왜 클라우드 → NAS로 가져와야 할까?**  
- **복원력**: 직접 통제 가능한 오프라인 사용 가능 복사본을 유지합니다.  
- **속도**: 인터넷 대역폭을 기다릴 필요 없이 LAN을 통해 대용량 폴더를 복원합니다.  
- **거버넌스**: 보존, 접근, 감사를 로컬에서 통합 관리합니다.

<!-- Obsidian note: CTA 컴포넌트 -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />
## 1단계 – 준비

시작하기 전에:

1. **범위 선택** — NAS가 보관해야 할 Google Drive/OneDrive 폴더는 무엇인가요?  
2. **NAS 용량 확인** — 충분한 여유 공간과 대상 공유/폴더가 준비되었는지 확인하세요.  
3. **NAS 연결 방식 선택**  

   - **WebDAV**: Synology **WebDAV Server**를 활성화한 다음 RcloneView에서 WebDAV로 연결합니다.  
   - **SMB**: Synology **SMB**를 활성화한 다음 RcloneView에서 SMB로 연결합니다.  
   - **SFTP**: Synology에서 SSH/SFTP를 활성화하고 **SFTP**로 연결합니다.  
4. **주기 계획** — 일회성 마이그레이션, 주기적 동기화, 또는 야간 예약 작업 중 선택합니다.  
5. **제공업체 한도 유의** — 대규모 이동은 배치로 나눠야 할 수 있으니, 먼저 테스트 실행을 고려하세요.

🔍 유용한 튜토리얼: 

- [RcloneView와 Synology NAS 연동](/tutorials/synology-nas-cloud-transfer)

## 2단계 – RcloneView에서 연결 구성하기

RcloneView는 rclone의 설정을 안내형 클릭 플로우로 감싸줍니다.

1. **RcloneView**를 열고 **`+ New Remote`**를 클릭합니다  
2. **클라우드 드라이브** 추가  
   - **Google Drive**: OAuth 로그인 → 이름 지정(예: `MyGoogleDrive`)  
   - **OneDrive**: OAuth 로그인 → 이름 지정(예: `MyOneDrive`)  
   - (rclone이 지원하는 다른 서비스도 유사하게 추가할 수 있습니다)  
3. 다음 중 **하나**를 사용해 **Synology NAS 대상** 추가  
   - **WebDAV**: Synology WebDAV Server의 엔드포인트, 자격 증명 → 이름 지정(예: `MyNAS-WebDAV`)  
   - **SMB**: NAS hostIP, 포트, 계정 → 이름 지정(예: `MyNAS-SMB`)  
   - **SFTP**: NAS hostname/IP, 포트, 계정 → 이름 지정(예: `MyNAS-SFTP`)  
4. Explorer 창에 둘 다 나란히 나타나는지 확인합니다.

🔍 유용한 가이드:  
- [RcloneView와 Synology NAS 연동](/tutorials/synology-nas-cloud-transfer)
- [Google Drive 리모트 추가 방법](https://rcloneview.com/support/howto/intro#step-2-adding-remote-storage-google-drive-example)  
- [빠른 OAuth 설정(OneDrive/Google)](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)


<img src="/support/images/en/tutorials/synology-nas-webdav-and-google-drive.png" alt="synology nas webdav and google drive" class="img-medium img-center" />

## 3단계 – 백업/동기화 작업 실행하기

RcloneView는 세 가지 실용적인 방법을 제공합니다. 작게 시작해서 점차 확장하세요.

### A) 드래그 앤 드롭 (수동 복사)
- 한쪽에는 **Google Drive/OneDrive**를, 다른 쪽에는 **NAS** 대상을 연 다음 **폴더/파일을 가로질러 드래그**합니다.  
- 선택적 이동과 빠른 성과에 좋습니다.  

👉 더 알아보기: [드래그 앤 드롭으로 파일 복사하기](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

### B) 비교 & 복사 (변경 사항 미리 보기)
- **Compare**를 실행해 클라우드와 NAS 간 새로 추가/변경된 항목을 확인합니다.  
- 변경된 항목만 복사하여 예상치 못한 상황과 시간을 줄입니다.  

👉 더 알아보기: [파일 비교 및 관리](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results highlighting changed files" class="img-medium img-center" />

### C) 동기화 & 예약 작업 (자동화)
- **Sync**를 사용해 선택한 클라우드 폴더를 NAS 공유로 미러링합니다.  
- 먼저 **드라이런**을 수행한 다음, 재사용 가능한 **Job**으로 저장하고 예약(야간/주간)을 추가합니다.  

👉 더 알아보기:
- [원격 스토리지 동기화](/howto/rcloneview-basic/synchronize-remote-storages)
- [동기화 작업 생성](/howto/rcloneview-basic/create-sync-jobs)
- [작업 예약 및 실행](/howto/rcloneview-advanced/job-scheduling-and-execution)
<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a saved job in RcloneView" class="img-medium img-center" />

## 결론 — 핵심 요약 & 추가 팁

- **왜 해야 하는가**: 직접 통제 가능한 두 번째 복사본, LAN을 통한 더 빠른 복원, 통합된 보존 관리.  
- **작동 방식**: RcloneView로 클라우드 드라이브와 Synology NAS를 연결한 다음 **드래그 앤 드롭**, **비교**, 또는 **동기화**를 사용하고—**예약**을 통해 손 놓고 백업할 수 있습니다.  
- **안전하게 확장하기**: 먼저 시범 운영하고, 제공업체 할당량을 준수하며, 깔끔한 감사 추적을 위해 작업 로그를 모니터링하세요.

## 자주 묻는 질문

**Q. RcloneView가 반복 백업을 자동으로 실행할 수 있나요?**  
**A.** 네—Sync를 **Job**으로 저장하고 예약(예: 야간)하면 됩니다. Job Manager에서 이력과 상태를 확인할 수 있습니다.

**Q. iCloud는 어떤가요?**  
**A.** Rclone은 여러 제공업체를 지원합니다. 직접적인 백엔드가 없는 서비스는 먼저 데이터를 로컬로 내보낸 다음, RcloneView를 사용해 NAS로 이동하는 것을 고려하세요.


**클라우드 속 삶의 로컬, 안정적인 복사본을 유지할 준비가 되셨나요?**  


<!-- Obsidian note: Download 컴포넌트 -->
<CloudSupportGrid />
