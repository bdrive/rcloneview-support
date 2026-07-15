---
slug: backup-cctv-nvr-to-cloud-rcloneview
title: "RcloneView로 CCTV/NVR 영상을 클라우드 스토리지에 자동으로 백업하고 보관하는 방법"
authors:
  - tayson
description: "RcloneView로 NAS, SMB, SFTP 경로의 CCTV/NVR 영상을 Wasabi, S3, Google Drive로 전송하세요. Compare, 체크섬 기반 동기화 작업, 예약 실행을 활용하면 수동 업로드 없이도 증거 영상을 안전하게 보호할 수 있습니다."
keywords:
  - rcloneview
  - cctv backup
  - nvr cloud archive
  - wasabi s3
  - google drive backup
  - smb sftp
  - surveillance storage
  - checksum verification
  - scheduled backup
  - disaster recovery
tags:
  - RcloneView
  - cloud
  - sync
  - nas
  - cctv
  - sftp
  - smb
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 CCTV/NVR 영상을 클라우드 스토리지에 자동으로 백업하고 보관하는 방법

> 절도, 화재, 장치 고장으로부터 감시 영상을 안전하게 지키세요. RcloneView는 NAS/SFTP/SMB의 NVR 폴더를 Wasabi, S3, Google Drive와 연결한 뒤 Compare와 동기화 작업을 자동화해, 새 영상만 이동시키고 증거 자료를 온전하게 보존합니다.

<!-- truncate -->


<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## 1. CCTV 영상에 클라우드 백업이 중요한 이유

- NVR/NAS 디스크는 24시간 녹화로 인해 금방 가득 찹니다.  
- 절도, 화재, 기물 파손으로 유일한 사본이 사라질 수 있습니다.  
- 규정 준수와 감사에는 더 긴 보존 기간이 요구됩니다.  
- 원격 검토와 증거 공유에는 오프사이트 접근이 필요합니다.  
- 수 GB에 달하는 H.264/H.265 파일을 수동으로 복사하는 작업은 오류가 발생하기 쉽습니다.

## 2. 감시 영상 파일이 까다로운 이유

- 지속적인 쓰기 작업으로 날짜 기반 클립이 수천 개 생성됩니다.  
- 높은 비트레이트(1080p/4K)는 백업 시 대역폭에 부담을 줍니다.  
- 폴더 구조는 제조사마다 다릅니다(YYYY/MM/DD, 카메라 ID 등).  
- 사람의 개입 없이 예약 전송(매시간/매일)이 필요합니다.  
- 무결성이 중요합니다. 프레임이 손상되면 증거로서의 가치가 떨어집니다.

## 3. RcloneView가 도움이 되는 방법

- **NAS/SMB/SFTP/WebDAV** 소스와 **Wasabi/S3/Google Drive** 대상을 하나의 UI에서 연결합니다.  
- 듀얼 패널 탐색기로 클라우드 간 또는 LAN-클라우드 간 이동을 시각적이고 직관적으로 수행합니다.  
- **Compare**가 새로 생기거나 변경된 클립을 표시해, 차이분(delta)만 전송할 수 있습니다.  
- **체크섬**(S3/Wasabi) 지원으로 업로드를 검증합니다.  
- **동기화 작업 + 예약 기능**으로 스크립트 없이도 백업이 자동으로 실행됩니다.

<!-- Image verified: exists -->


## 4. CCTV/NVR 백업 단계별 설정

### 1단계) NVR 스토리지 연결(SMB 또는 SFTP)

1. **리모트 → + 새 리모트**를 클릭합니다.  
2. **SMB**(NAS/Windows 공유용) 또는 **SFTP**(Linux NVR 내보내기용)를 선택합니다.  
3. 서버 주소, 공유/경로, 자격 증명을 입력합니다(필요 시 도메인 추가).  
4. 저장 후 리모트 관리자에서 목록에 표시되는지 확인합니다.

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/create-remote-by-remote-manager.png" alt="Create NVR remote from Remote Manager" class="img-medium img-center" />

### 2단계) 클라우드 대상 추가(Wasabi/S3/Google Drive)

- **Wasabi/S3**: 액세스/시크릿 키, 리전, 버킷을 입력합니다.  
- **Google Drive**: **연결**을 클릭하고 브라우저에서 OAuth 인증을 완료합니다.  
- 두 리모트를 모두 표시해 두면 나란히 놓고 작업하기 편합니다.

### 3단계) 소스와 대상 열기

1. **탐색**으로 이동합니다.  
2. 왼쪽 패널: NVR 폴더를 엽니다(예: `/recordings/2025/12/08`).  
3. 오른쪽 패널: 백업용 버킷 또는 Drive 폴더를 엽니다.  
4. 날짜별 폴더 몇 개를 펼쳐 경로를 확인합니다.

### 4단계) Compare로 차이분 미리보기

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/folder-comparison-completed.png" alt="Folder comparison showing CCTV deltas" class="img-medium img-center" />

- **Compare**를 클릭해 누락되었거나 크기가 변경된 영상 파일을 확인합니다.  
- 복사 전에 이름 충돌(중복된 카메라 ID)을 해결합니다.  
- 이렇게 하면 대상 쪽의 더 최신 클립이 덮어써지는 것을 방지할 수 있습니다.

### 5단계) 안전하게 복사 또는 동기화

- 먼저 NVR → 클라우드로 **단방향 복사**를 진행합니다(삭제 없음).  
- S3/Wasabi에는 **체크섬**을 활성화해 업로드를 검증합니다.  
- 업무 시간에는 **대역폭 제한**을 사용하고, 야간에는 제한을 해제합니다.  
- 용량이 매우 큰 날에는 동시 처리 수를 낮춰 속도 제한을 피한 뒤, 나중에 다시 올립니다.

### 6단계) 워크플로를 작업으로 저장

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/save-sync-to-jobs.png" alt="Save CCTV sync to jobs" class="img-medium img-center" />

1. 동기화/복사 대화상자에서 **작업에 저장**을 클릭합니다.  
2. 이름을 지정합니다(예: `cctv-daily-wasabi`).  
3. 이후 오래된 클립을 정리할 계획이라면 단방향 동기화를 선택합니다.

### 7단계) 자동 실행 예약

<!-- Image verified: exists with /support prefix -->
<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule CCTV backup job" class="img-medium img-center" />

- **작업 관리자 → 작업 추가**를 엽니다.  
- 저장한 작업을 선택하고 주기를 설정합니다: 매시간, 3시간마다, 또는 매일 밤 02:00.  
- 대역폭이 제한적이라면 카메라 그룹별로 작업 시간을 분산합니다.  
- 첫 몇 차례 실행 후 **작업 기록**을 확인합니다.

## 5. 백업 정책 예시

- **단기(핫) 스토리지:** 빠른 검토를 위해 NAS/NVR에 최근 7일치를 보관합니다.  
- **장기 보관:** 모든 영상을 매주 Wasabi/S3로 전송하고, 버전 관리를 활성화합니다.  
- **감사/검토:** 조사관과 관리자를 위해 특정 날짜 영상을 Google Drive로 복사합니다.  
- **프랜차이즈 또는 다중 지점:** 매장별로 버킷/프리픽스를 분리해 접근 권한을 격리합니다.


## 6. 영상 아카이브의 비용 최적화

- 자주 접근하지 않는 영상은 **Wasabi** 또는 S3의 저빈도 액세스 티어에 저장합니다.  
- Google Drive에는 빠른 공유를 위해 활성 상태인 날짜만 유지합니다.  
- S3/Wasabi의 라이프사이클 규칙을 이용해 오래된 객체를 더 저렴한 티어로 전환합니다.  
- 정책상 허용된다면 카메라 테스트 클립과 움직임 없는 구간은 제외합니다.

## 7. 필요 시 영상 복원

- 탐색기에서 클라우드 리모트를 탐색하고 날짜별 폴더로 필터링합니다.  
- 검토에 필요한 시간/날짜의 영상만 로컬 디스크로 복사합니다.  
- **Compare**로 복원된 파일이 원본과 일치하는지(크기/시간 또는 체크섬) 확인합니다.  
- 법적 보존이 필요한 경우 별도의 읽기 전용 프리픽스/버킷에 복제합니다.

## 8. 실제 배포 사례

- **소규모 소매점:** NVR → Wasabi로 매시간 전송; 클라우드에는 30일, 로컬에는 7일 보관.  
- **공장:** CCTV → NAS → 매일 밤 Wasabi 복사; 매월 S3 콜드 아카이브.  
- **프랜차이즈 네트워크:** 하나의 버킷 내에서 지점별 프리픽스 사용; 본사 감사를 위한 Drive 복사본.  
- **보안 업체:** 규제 대상 현장을 위해 고객별 버킷, 예약 작업, 암호화된 리모트를 사용. 

## 9. 마무리

RcloneView는 CCTV/NVR 백업을 CLI 없이도 예측 가능한 워크플로로 만들어 줍니다. SMB/SFTP로 NAS나 녹화기를 연결하고, Wasabi/S3/Google Drive와 페어링한 뒤, Compare로 차이분을 미리 확인하고, 체크섬 기반 동기화 작업을 예약하세요. 자동화, 로깅, 암호화 옵션을 통해 매일 밤 업로드를 일일이 지켜보지 않고도 보존, 감사, 재해 복구 요구사항을 충족할 수 있습니다.

<CloudSupportGrid />
