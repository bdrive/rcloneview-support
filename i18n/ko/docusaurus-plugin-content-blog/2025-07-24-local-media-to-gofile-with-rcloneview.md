---
slug: local-media-to-gofile-with-rcloneview
title: RcloneView로 로컬 미디어를 Gofile로 이동 및 동기화하기 (CLI 불필요)
authors:
  - jay
description: RcloneView의 친숙한 GUI를 사용해 하드 드라이브의 대용량 미디어 라이브러리를 Gofile로 업로드, 동기화, 관리하는 방법—링크, 중복 제거, 스케줄링 팁 포함.
keywords:
  - rcloneview
  - gofile
  - media upload
  - hard drive to cloud
  - cloud file transfer
  - scheduled sync
  - rclone GUI
  - public links
tags:
  - gofile
  - media
  - cloud-file-transfer
  - sync
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 로컬 미디어를 Gofile로 이동 및 동기화하기 (CLI 불필요)

> **하드 드라이브**에 있는 미디어 라이브러리를 **Gofile**로 옮겨 게시하고 보호하세요—명령어가 아닌 클릭만으로 가능합니다.

## 소개 — 왜 로컬 미디어를 Gofile에 호스팅해야 할까요?

비디오 편집본, 원본 사진, 오디오 마스터 파일이 단 하나의 드라이브에만 존재한다면, 커피 한 방울이나 디스크 오류만으로도 순식간에 사라질 수 있습니다. 미디어를 **Gofile**로 옮기면 클라우드 접근성, 손쉬운 공유, 그리고 워크스테이션의 공간 여유를 확보할 수 있습니다. **RcloneView**를 사용하면 rclone의 강력한 기능을 친숙한 GUI로 이용할 수 있습니다: 연결, 미리보기, 복사, 스케줄링까지—터미널이 필요 없습니다.

<!-- truncate -->
### Gofile 한눈에 이해하기
- Gofile은 문서화된 REST API를 갖춘 콘텐츠 저장 및 배포 플랫폼입니다. API 토큰을 통해 공개 링크를 생성하고 업로드를 자동화할 수 있습니다.  [gofile.io](https://gofile.io/api)  
- rclone에는 전용 **Gofile** 백엔드가 있습니다: **Account API 토큰**으로 구성하면 목록 조회, 복사는 물론 `rclone link`를 통해 공개 링크까지 만들 수 있습니다. *(참고: rclone의 Gofile 백엔드는 **프리미엄** Gofile 계정이 필요합니다.)*  [Rclone](https://rclone.org/gofile/)

### 로컬 미디어 라이브러리 이해하기
- 미디어 프로젝트는 **용량이 크고**(수 GB 단위), 중첩 구조이며, 버전별로 중복되는 경우가 많습니다.  
- 미리보기, 선택적 복사, 재개 가능한 전송 등 우수한 도구가 원활한 마이그레이션에 필수적입니다.

### 왜 하드 드라이브에서 Gofile로 옮겨야 할까요?
- **공유 용이성**: 클라이언트와 협업자를 위한 공개 링크를 생성합니다.
- **오프로드 및 백업**: 온라인 사본을 유지하면서 로컬 공간을 확보합니다.  
- **워크플로우 제어**: 렌더링 후 자동 업로드를 예약하고 폴더를 동기화 상태로 유지합니다.

<!-- Obsidian note: CTA 컴포넌트 -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## 1단계 — 준비

업로드 전에:

1. **폴더를 정리**(예: `Footage/`, `Stills/`, `Masters/`)하여 작업을 명확하고 반복 가능하게 유지합니다.  
2. **모드를 결정**합니다: 아카이브 일회성 복사, 진행 중인 프로젝트의 지속적인 동기화, 또는 야간 스케줄 중 선택합니다.  


## 2단계 — RcloneView에서 Gofile 연결하기

RcloneView는 rclone의 설정 과정을 안내형 흐름으로 감싸줍니다.

1. **RcloneView**를 열고 **`+ New Remote`**를 클릭합니다.  
2. **Gofile**을 선택한 다음, Gofile **My Profile**에서 발급받은 **Account API 토큰**을 붙여넣습니다. *(rclone 연결에는 프리미엄 계정이 필요합니다.)* 
3. 이름을 지정(예: `MyGofile`)하고 저장합니다.  

🔍 참고 가이드: [Add Gofile Remote](/howto/remote-storage-connection-settings/gofile) 

<img src="/support/images/en/howto/remote-storage-connection-settings/add-gofile-remote-verify.png" alt="add go file remote verify" class="img-medium img-center" />

## 3단계 — 전송 실행하기

RcloneView는 미디어를 이동하고 유지 관리할 수 있는 세 가지 명확한 방법을 제공합니다. 작게 시작해서 점차 확장해 보세요.

### A) 드래그 앤 드롭 (수동, 임시)
- 왼쪽에서 **로컬** 미디어를, 오른쪽에서 **Gofile**을 열고 **폴더/파일을 드래그하여 이동**합니다—간단하고 시각적입니다.  

👉 자세히 보기: [드래그 앤 드롭으로 파일 복사하기](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

### B) 비교 후 복사 (변경 사항 미리보기)
- **Compare**를 사용해 복사 전에 새로 추가되거나 변경된 항목을 확인하여, 예상치 못한 상황과 재시도를 줄입니다.  

👉 자세히 보기: [파일 비교 및 관리](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results in RcloneView showing changed files" class="img-medium img-center" />

### C) 동기화 및 예약 작업 (자동화)
- **Sync**를 사용해 로컬 **Projects** 폴더를 Gofile에 미러링합니다.  
- 먼저 **드라이 런(dry-run)**을 실행한 뒤, 재사용 가능한 작업으로 저장하고 스케줄(예: 매일 밤)을 설정합니다.  

👉 자세히 보기:
- [원격 저장소 동기화하기](/howto/rcloneview-basic/synchronize-remote-storages)
- [동기화 작업 생성하기](/howto/rcloneview-basic/create-sync-jobs)
- [작업 스케줄링 및 실행](/howto/rcloneview-advanced/job-scheduling-and-execution)

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Run a saved job in RcloneView" class="img-medium img-center" />

**전문가 팁**
- Gofile이 폴더 내에서 **중복된 이름**을 감지하면 동기화 시 알림이 많아질 수 있습니다—업로드 후 rclone의 **dedupe** 기능으로 충돌을 정리하세요. 
- **공유 링크**가 필요하신가요? rclone의 `link` 명령으로 프로그래밍 방식으로 공개 링크를 생성할 수 있습니다(고급/CLI 사용자용). 

---

## 결론 — 요약 및 추가 안내

- **얻는 것**: 더 안전한 저장, 더 쉬운 공유, 로컬 드라이브의 여유 공간.  
- **하는 방법**: RcloneView가 API 토큰을 통해 **Gofile**을 구성한 다음, **드래그 앤 드롭**, **비교(Compare)**, 또는 **동기화(Sync)**를 사용할 수 있게 해줍니다—손쉬운 유지 관리를 위한 **스케줄링**도 함께 제공됩니다. 

## 자주 묻는 질문

**Q. rclone/RcloneView를 사용하려면 Gofile 프리미엄 계정이 필요한가요?**  
**A.** 네—rclone의 Gofile 백엔드는 **프리미엄** Gofile 계정과 **My Profile**에서 발급받은 **Account API 토큰**이 필요합니다. 

**Q. 업로드한 파일에 대해 공개 공유 링크를 생성할 수 있나요?**  
**A.** 네. RcloneView는 공개 링크(파일 또는 폴더 단위; 폴더는 ZIP으로 다운로드 가능; 일부 백엔드는 만료 기한 지원)를 생성하는 `link`를 지원합니다.


**미디어 라이브러리를 여러분만의 방식으로 온라인에 올릴 준비가 되셨나요?**  

<CloudSupportGrid />

