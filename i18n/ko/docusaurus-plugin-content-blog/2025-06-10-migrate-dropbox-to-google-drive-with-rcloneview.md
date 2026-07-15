---
slug: migrate-dropbox-to-google-drive-with-rcloneview
title: "Dropbox → Google Drive, 간편하게: RcloneView로 전송, 동기화, 스케줄링까지"
authors:
  - jay
description: RcloneView를 사용하여 Dropbox에서 Google Drive로 파일을 이동하고 동기화하세요.
keywords:
  - rcloneview
  - dropbox to google drive
  - cloud file transfer
  - cloud sync
  - rclone GUI
  - multi-cloud migration
tags:
  - RcloneView
  - dropbox
  - google-drive
  - cloud-file-transfer
  - cloud-sync
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Dropbox → Google Drive, 간편하게: RcloneView로 전송, 동기화, 스케줄링까지

> 팀이 협업하는 곳으로 파일을 더 가까이 옮기세요. **Dropbox**에서 **Google Drive**로 깔끔한 클릭 몇 번의 워크플로로 콘텐츠를 이동합니다—CLI가 필요 없습니다.


## 소개 — 왜 Dropbox에서 Google Drive로 통합해야 할까요?

많은 팀이 빠르고 안정적인 동기화와 폭넓은 통합 기능 덕분에 **Dropbox**로 시작합니다. 시간이 지나면서 Google Docs/Sheets/Slides와 Workspace의 협업, 공유, 검색 기능을 활용하기 위해 **Google Drive**를 도입합니다. Google Drive로 통합하면 컨텍스트 전환이 줄어들고 통합된 권한 관리와 거버넌스를 얻을 수 있습니다.

<!-- truncate -->

**Dropbox 한눈에 보기**  
- 여러 기기 간 빠르고 신뢰할 수 있는 동기화, 폭넓은 앱 생태계.  
- 업로드 방식(웹 vs. 데스크톱 앱)에 따라 파일 크기 제한이 다릅니다. Dropbox는 웹사이트 기준 **최대 375GB**, 데스크톱 앱 기준 항목당 **최대 2TB**라고 명시합니다.  [Dropbox Help Center](https://help.dropbox.com/sync/upload-limitations)

**Google Drive 한눈에 보기**  
- Docs/Sheets/Slides와의 깊은 Workspace 통합, 강력한 공유 및 검색 기능.  
- Google은 (비Docs 형식 기준) **최대 5TB** 파일 크기를 명시하며, Drive API는 사용자당 **일일 750GB**의 업로드 및 복사 할당량을 부과합니다. 대용량 이동은 이에 맞춰 계획하세요.  [Google Help](https://support.google.com/drive/answer/37603?hl=en&utm_source=chatgpt.com) [Google for Developers](https://developers.google.com/workspace/drive/api/guides/limits)

### 간단 비교

| 항목 | Dropbox | Google Drive |
|---|---|---|
| 생태계 적합성 | 중립적 / 크로스 플랫폼 | Google Workspace와 긴밀한 통합 |
| 대용량 파일(항목당) | 웹: 약 375GB; 데스크톱: 최대 2TB | 항목당 최대 5TB(비Docs 형식) |
| 운영상 참고 사항 | 방식(웹/데스크톱)에 따른 제한 | API: 사용자당 일일 750GB(업로드/복사) |

출처: [Dropbox Help Center](https://help.dropbox.com/sync/upload-limitations);  [Google Help](https://support.google.com/drive/answer/37603?hl=en&utm_source=chatgpt.com) & [Google for Developers](https://developers.google.com/workspace/drive/api/guides/limits)

### Dropbox에서 Google Drive로 전환해야 하는 이유

- **작업이 이루어지는 곳에서의 협업** — Docs/Sheets/Slides에서의 실시간 공동 편집.  
- **통합** — Gmail, Calendar, Drive 전반에 걸친 단일 계정 및 정책 체계.  
- **운영 계획** — 실패한 작업을 방지하기 위해 프로바이더의 제한 사항을 인지하며 마이그레이션.  

> 좋은 소식: **rclone**은 Dropbox와 Google Drive를 모두 지원하며, **RcloneView**는 그 기능을 친숙한 GUI로 제공합니다. 터미널이 필요 없습니다. 

<!-- Obsidian note: CTA 컴포넌트 -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## 1단계 — 준비

시작하기 전에:

1. **범위 파악** — 이동할 폴더와 보관용으로 남길 폴더를 결정합니다.  
2. **Drive 용량 확인** — Google 계정/Workspace에 충분한 저장 공간이 있는지 확인합니다.  
3. **대용량 파일 유의** — Dropbox의 항목별 제한과 Drive의 일일 750GB API 할당량에 근접한 항목을 고려하여 계획합니다.
4. **전략 선택** — 일회성 마이그레이션, 단계적 전환, 또는 하이브리드 워크플로를 위한 지속적인 동기화 중 선택합니다.


## 2단계 — RcloneView에서 Dropbox와 Google Drive 연결하기

RcloneView는 **rclone config**를 가이드 방식의 클릭 클릭 경험으로 감싸줍니다.

1. **RcloneView**를 열고 **`+ New Remote`**를 클릭합니다  
2. **Dropbox**를 선택하고 OAuth 로그인을 완료한 뒤 이름을 지정합니다(예: `MyDropbox`)  
3. **Google Drive**를 선택하고 Google 계정으로 로그인한 뒤 이름을 지정합니다(예: `MyGoogleDrive`)  
4. Explorer 창에 두 리모트가 나란히 표시되는지 확인합니다

🔍 참고할 만한 가이드:  
- **자동 로그인(Google Drive, Dropbox)** — RcloneView에서 OAuth를 이용한 빠른 설정.  [RcloneView](/howto/remote-storage-connection-settings/add-oath-online-login)  
- **리모트 추가 및 관리** — **New Remote** 대화상자와 Remote Manager를 찾는 방법.  [RcloneView](https://rcloneview.com/support/howto/rcloneview-basic/remote-manager/)

<img src="/support/images/en/tutorials/open-dropbox-and-google-drive.png" alt="open dropbox and google drive" class="img-medium img-center" />

## 3단계 — 전송 실행하기

RcloneView는 세 가지 간단한 방법을 제공합니다. 작게 시작해서 점차 확장하세요.

### A) 드래그 앤 드롭(수동, 임시 작업)
- 한쪽에는 Dropbox를, 다른 한쪽에는 Google Drive를 열고 **폴더/파일을 가로질러 드래그**합니다.  
- 빠른 이동과 간단한 확인에 적합합니다.  

👉 자세히 보기: [드래그 앤 드롭으로 파일 복사하기](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

### B) 비교 및 복사(변경 사항 미리보기)
- **Compare**를 실행하여 복사하기 전에 새 항목이나 변경된 항목을 확인함으로써 예상치 못한 상황과 재시도를 줄입니다.  

👉 자세히 보기: [파일 비교 및 관리](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)
<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results in RcloneView showing changed files" class="img-medium img-center" />

### C) 동기화 및 예약 작업(자동화)
- **Sync**를 사용하여 선택한 Dropbox 폴더를 Google Drive로 미러링합니다.  
- 먼저 **드라이런(Dry-run)**을 실행한 후, 작업을 재사용 가능한 **Job**으로 저장하고 야간/주간 실행을 위한 스케줄을 추가합니다.  

👉 자세히 보기:
- [원격 스토리지 동기화하기](/howto/rcloneview-basic/synchronize-remote-storages)
- [동기화 작업 생성하기](/howto/rcloneview-basic/create-sync-jobs)
- [작업 스케줄링 및 실행](/howto/rcloneview-advanced/job-scheduling-and-execution)


<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run a saved job in RcloneView" class="img-medium img-center" />

**전문가 팁**
- 매우 큰 마이그레이션은 여러 배치로 나누세요. **항목당** 제한과 **일일** 제한을 지켜 중단을 방지합니다.   
- 전환 기간 동안 원본 폴더를 읽기 전용으로 유지하여 데이터 불일치를 방지합니다.  
- 공유 링크가 필요하신가요? rclone은 지원되는 백엔드에서 공개 링크 생성을 지원합니다(고급 기능).


## 결론 — 요약 및 추가 참고 사항

- **왜 이동해야 하는가**: 팀이 작업하는 곳(Google Workspace)에서 협업하고, 공유와 정책을 통합하며, 일상적인 워크플로를 단순화합니다. 
- **방법**: RcloneView가 Dropbox와 Google Drive를 연결하고, **드래그 앤 드롭**, **비교**, 또는 **동기화**를 사용할 수 있게 해줍니다—손 갈 일 없는 유지 관리를 위한 **스케줄링**과 함께요. 
- **제한 사항을 고려한 계획**: Dropbox의 업로드 상한선과 Drive의 파일당 5TB / 일일 750GB 가이드라인을 숙지하세요.


## 자주 묻는 질문

**Q. RcloneView가 매우 큰 파일도 처리할 수 있나요?**  
**A.** 네—rclone은 청크 단위/스트리밍 전송을 지원합니다. 각 프로바이더의 제한(Dropbox 웹 vs. 데스크톱; Google Drive는 항목당 5TB 및 API 기준 일일 750GB) 내에서 항목을 유지하기만 하면 됩니다.  

**Q. 명령줄 사용 능력이 필요한가요?**  
**A.** 아니요. RcloneView는 rclone의 Dropbox 및 Google Drive 백엔드 위에 구축된 완전한 GUI입니다.  

**Q. 반복되는 전송을 자동화할 수 있나요?**  
**A.** 물론입니다—Sync를 **Job**으로 저장하고 RcloneView의 Job Manager에서 스케줄을 설정하세요.  



**Dropbox에서 Google Drive로의 이동을 간소화할 준비가 되셨나요?**  


<CloudSupportGrid />
