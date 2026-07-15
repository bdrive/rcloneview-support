---
slug: synology-to-cloud-backup-with-rcloneview
title: "Synology → 클라우드, 쉽게 끝내기: RcloneView로 하는 오프사이트 백업 & 동기화"
authors:
  - jay
description: RcloneView의 GUI로 Backblaze, Google Drive, Amazon S3, pCloud, Wasabi 등으로 오프사이트 백업을 계획, 미리보기, 자동화하여 Synology NAS를 보호하세요.
keywords:
  - rcloneview
  - synology nas backup
  - backblaze b2
  - google drive
  - amazon s3
  - wasabi
  - pcloud
  - cloud backup
  - scheduled sync
  - rclone GUI
tags:
  - RcloneView
  - synology
  - cloud-backup
  - s3
  - google-drive
  - Backblaze
  - wasabi
  - pcloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synology → 클라우드, 쉽게 끝내기: RcloneView로 하는 오프사이트 백업 & 동기화

> 스크립트나 터미널 없이 두 번째 사본을 오프사이트에 보관하세요. **Synology NAS**를 **Backblaze, Google Drive, Amazon S3, pCloud, Wasabi** 등으로 시각적으로, 안정적으로, 그리고 예약된 일정에 따라 백업할 수 있습니다.

## 소개 — 왜 Synology 백업을 오프사이트로 보내야 할까요?

NAS는 빠르고 로컬에서 접근할 수 있어 훌륭합니다—가족 사진, 창작 프로젝트, 팀 공유 폴더가 모두 LAN 한 번이면 닿습니다. 하지만 **온프레미스만** 사용하는 데는 위험이 있습니다: 도난, 화재, 실수로 인한 삭제, 또는 다중 드라이브 장애 등입니다. **오프사이트 클라우드 사본**을 추가하면 다음과 같은 이점을 얻을 수 있습니다:

<!-- truncate -->

- **복원력**: 원격의 복구 가능한 사본으로 로컬 재난에서도 살아남습니다.  
- **유연성**: 사무실/집을 떠나 있어도 어디서든 복원할 수 있습니다.  
- **거버넌스**: NAS 보존 정책과 클라우드 버킷의 버전 관리 및 정책을 결합합니다.

**Synology NAS 한눈에 보기**  
- **SMB/NFS**(로컬 폴더로 마운트) 또는 **WebDAV**, **SFTP** 같은 네트워크 엔드포인트로 접근 가능한 중앙 스토리지입니다.  
- 상시 백업, 미디어 호스팅, 팀 파일 허브에 적합합니다.

**클라우드 대상 한눈에 보기**  
- **Google Drive**: Google Workspace에서의 협업과 공유.  
- **Amazon S3 / Wasabi / Backblaze B2**: 버킷, 리전, 라이프사이클 규칙을 갖춘 오브젝트 스토리지.  
- **pCloud**: 사용자 친화적이며 파일 관리가 편리한 스토리지.  

**지금 NAS → 클라우드 전송을 해야 하는 이유**  
- **오프사이트 안전망**을 마련합니다.  
- 백업을 단일(또는 멀티 클라우드) 대상으로 **표준화**합니다.  
- 여러 클라우드 플랫폼에서 제공하는 **정책 및 버전 관리**를 활용합니다.

<!-- Obsidian note: CTA 컴포넌트 -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />
## 1단계 — 준비

시작하기 전에:

1. **범위 선택** — Synology의 어떤 공유 폴더(예: `/photo`, `/projects`, `/backup`)를 클라우드로 보낼지 정합니다.  
2. **클라우드 용량 확인** — 대상 계정 또는 버킷에 (버전을 위한 여유 공간을 포함해) 충분한 공간이 있는지 확인합니다.  
3. **NAS 연결 방식 선택**  
   - **로컬 경로**: OS에서 **SMB/NFS**로 NAS 공유 폴더를 마운트한 뒤 RcloneView에서 **로컬**로 사용합니다.  
   - **WebDAV**: Synology의 **WebDAV Server**를 활성화하고 RcloneView에서 WebDAV로 연결합니다.  
   - **SFTP**: Synology에서 SSH/SFTP를 활성화하고 **SFTP**로 연결합니다.  
4. **클라우드 선택** — Google Drive, Amazon S3/Wasabi, Backblaze B2, pCloud 등.  
5. **주기 결정** — 일회성 아카이브, 주기적 동기화, 또는 **야간 예약 작업**.  
6. **먼저 시범 실행** — 경로, 권한, 처리량을 검증하기 위한 소규모 테스트를 실행합니다.

🔍 참고할 만한 개요:
- [클라우드 ↔ Synology 튜토리얼](/tutorials/synology-nas-cloud-transfer)


## 3) 2단계 — RcloneView에서 연결 구성하기

RcloneView는 rclone의 설정을 안내형 클릭 방식 흐름으로 감싸줍니다.

1. **RcloneView**를 열고 **`+ New Remote`**를 클릭합니다.  
2. 다음 중 하나로 **Synology(소스)를 추가**합니다:  
   - **로컬**: 마운트된 NAS 폴더를 선택합니다(예: `Z:\NAS\Projects` 또는 `/Volumes/NAS/Projects`).  
   - **WebDAV**: Synology의 WebDAV 엔드포인트/자격 증명을 사용하고 이름을 지정합니다(예: `NAS-WebDAV`).  
   - **SFTP**: 호스트/IP, 포트, 계정을 입력하고 이름을 지정합니다(예: `NAS-SFTP`).  
3. **클라우드(대상)를 추가**합니다. 예시:  
   - **Google Drive**: OAuth 로그인 → `MyGoogleDrive`로 이름 지정  
   - **Amazon S3 / Wasabi**: **S3** 프로바이더 → 액세스 키/시크릿, 리전, 버킷 → `MyS3` / `MyWasabi`로 이름 지정  
   - **Backblaze B2**: **B2** 프로바이더(또는 해당되는 경우 S3 호환 엔드포인트) → `MyB2`로 이름 지정  
   - **pCloud**: 로그인/토큰 흐름 → `MyPcloud`로 이름 지정  
4. Explorer 창에 두 원격 저장소가 나란히 표시되는지 확인합니다.

🔍 참고할 만한 가이드:  
- [빠른 OAuth 설정(Google Drive 등)](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)
- [S3 리모트 추가(Amazon S3/Wasabi)](/howto/remote-storage-connection-settings/s3)
- [클라우드 ↔ Synology 튜토리얼](/tutorials/synology-nas-cloud-transfer)

<img src="/support/images/en/tutorials/synology-nas-webdav-and-google-drive.png" alt="synology nas webdav and google drive" class="img-medium img-center" />

## 4) 3단계 — 백업/동기화 실행하기(실용적인 세 가지 방법)

RcloneView는 세 가지 간단한 방법을 제공합니다. 작게 시작해서 자신감이 붙으면 규모를 키워보세요.

### A) 드래그 앤 드롭(수동 복사)
- 한쪽에 **Synology(로컬/WebDAV/SFTP)**를, 다른 쪽에 **클라우드**를 열고 **폴더/파일을 가로질러 드래그**합니다.  
- 선택적인 이동과 빠른 작업에 유용합니다.  

👉 자세히 보기: [드래그 앤 드롭으로 파일 복사하기](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

### B) 비교 & 복사(변경 사항 미리보기)
- **비교(Compare)**를 실행해 NAS와 클라우드 버킷/드라이브 간 새로 생기거나 변경된 항목을 확인합니다.  
- 변경된 부분만 복사하여 예상치 못한 상황을 줄이고 더 빠르게 실행합니다.  

👉 자세히 보기: [비교 및 파일 관리](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results highlighting changed files" class="img-medium img-center" />

### C) 동기화 & 예약 작업(자동화)
- **동기화(Sync)**를 사용해 선택한 NAS 폴더를 클라우드 대상에 미러링합니다.  
- 먼저 **드라이런(Dry-run)**을 실행한 뒤 재사용 가능한 **작업(Job)**으로 저장하고 일정(야간/주간)을 추가합니다.  

👉 자세히 보기:
- [원격 저장소 동기화하기](/howto/rcloneview-basic/synchronize-remote-storages)
- [동기화 작업 만들기](/howto/rcloneview-basic/create-sync-jobs)
- [작업 예약 및 실행](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a saved job in RcloneView" class="img-medium img-center" />

**프로 팁**
- **S3 유형 클라우드**(S3/Wasabi/B2 S3 호환)의 경우, 버킷을 미리 생성하고 올바른 리전을 선택하세요.  
- 더 안전한 롤백을 위해 지원되는 버킷에서 **버전 관리**를 활성화하세요.  
- 드리프트를 방지하기 위해 전환 작업 중에는 NAS 소스를 **읽기 전용으로 유지**하세요.  
- 필터를 사용해 캐시/임시 폴더를 백업에서 제외하세요.


## 5) 결론 — 핵심 요약 & 추가 팁

- **왜 해야 할까요**: 견고한 오프사이트 안전망, 더 빠른 재해 복구 옵션, 통합된 보존 정책을 얻을 수 있습니다.  
- **작동 방식**: RcloneView는 Synology NAS와 클라우드 대상을 연결한 뒤, **드래그 앤 드롭**, **비교**, 또는 **동기화**를 사용할 수 있게 해주며, 손 하나 까딱하지 않는 백업을 위한 **일정 예약** 기능도 제공합니다.  
- **안전하게 확장하기**: 먼저 시범 운영을 하고, 프로바이더의 할당량을 준수하며, 깔끔한 감사 추적을 위해 작업 로그를 모니터링하세요.


## 자주 묻는 질문

**Q. 여러 클라우드에 백업할 수 있나요?**  
**A.** 가능합니다—여러 대상(예: S3와 Google Drive)을 추가하고 각각에 대해 별도의 작업이나 일정을 만들면 됩니다.

**Q. 명령줄이 필요한가요?**  
**A.** 아니요. RcloneView는 완전한 GUI로, CLI 없이도 리모트를 구성하고, 변경 사항을 미리 보고, 동기화를 실행하고, 작업을 예약할 수 있습니다.


**Synology 백업을 오프사이트에서 자동으로, 그리고 통제된 상태로 운영할 준비가 되셨나요?**  

<CloudSupportGrid />
