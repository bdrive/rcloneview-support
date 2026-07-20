---
slug: backup-google-drive-to-amazon-s3
title: RcloneView로 Google Drive를 Amazon S3에 백업하기
authors:
  - jay
description: RcloneView의 클릭 몇 번으로 끝나는 도구를 사용해 Google Drive 폴더를 Amazon S3로 복사하세요—한 번만 연결하면 백업을 실행하고 안심할 수 있는 여분의 사본을 유지할 수 있습니다.
keywords:
  - rcloneview
  - google drive
  - amazon s3
  - cloud backup
  - cloud sync
  - rclone gui
tags:
  - RcloneView
  - google-drive
  - amazon-s3
  - cloud-backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 Google Drive를 Amazon S3에 백업하기

> Google Drive에서 팀워크를 원활히 유지하면서 Amazon S3에 안전한 사본을 저장하세요. RcloneView를 사용하면 스크립트나 명령줄 없이 클릭만으로 백업 전 과정을 진행할 수 있습니다.

## 이 조합이 유용한 이유는?

- **Google Drive**는 문서, 스프레드시트, 공유 폴더가 매일 사용되는 공간입니다.  
- **Amazon S3**는 버전 관리, 수명 주기 정책, 저비용 아카이브 티어를 통해 수년간 사본을 보관합니다.  
- **RcloneView**는 듀얼 패널 탐색기, 비교 미리보기, 예약 작업으로 두 서비스를 연결해 무엇이 이동하는지 항상 파악할 수 있게 해줍니다.

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## 시작하기 전에

1. **중요한 폴더 선정** – 프로젝트 공간, 공유 드라이브, 인계용 폴더를 검토하세요. 필요 없는 캐시나 임시 폴더는 건너뛰세요.  
2. **S3 버킷 생성 또는 선택** – 리전, 버킷 이름, 기본 암호화(SSE-S3 또는 SSE-KMS)를 결정하세요. [AWS Documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/serv-side-encryption.html)  
3. **제공업체 제한 확인** – Google은 Drive API 전송을 **사용자당 하루 750GB**, 파일 크기는 **최대 5TB**로 제한합니다. 대용량 이전은 며칠에 걸쳐 계획하세요. [Google for Developers](https://developers.google.com/drive/api/guides/limits) [Google Help](https://support.google.com/drive/answer/37603)  
4. **폴더 구조 매핑** – `drive-backup/marketing/2025/`와 같은 S3 프리픽스를 사용하면 나중에 스냅샷을 쉽게 탐색할 수 있습니다.  
5. **앱에서 한 번 확인하기** – [원격 스토리지 탐색 및 관리](/howto/rcloneview-basic/browse-and-manage-remote-storage)에서 탐색기 스크린샷을 훑어보면 레이아웃이 익숙해집니다.

## 1단계 — RcloneView에서 두 서비스 연결하기

1. **RcloneView**를 열고 **`+ New Remote`**를 누릅니다.  
2. **Google Drive**를 선택하고 로그인한 뒤, `Drive-Main`처럼 명확한 이름을 리모트에 지정합니다. 공유 드라이브를 백업하려면 설정 중 이를 활성화하세요.  
3. **Amazon S3**용 리모트를 추가합니다. 액세스 키/시크릿을 붙여넣거나(또는 IAM 역할을 사용하고) 대상 버킷을 선택한 뒤 `S3-Backup`이라고 이름을 지정합니다.  
4. 두 리모트가 탐색기에 나란히 표시되는지 확인하세요. 다시 확인이 필요하면 [원격 관리자 가이드](/howto/rcloneview-basic/remote-manager)에 추가 스크린샷이 있습니다.

<img src="/support/images/en/tutorials/browsing-aws-s3-and-google-drive-via-ec2-rclone.png" alt="browsing aws s3 and google drive via ec2 rclone" class="img-medium img-center" />

## 2단계 — 백업 작업 계획하기

- **폴더로 드라이런 해보기**: 왼쪽에서 `Drive-Main`을, 오른쪽에서 `S3-Backup`을 엽니다. 작은 테스트 폴더를 끌어다 놓아 전송 대화상자를 확인하세요.  
- **Compare 사용하기**: Compare 도구는 복사 전에 새 파일과 변경된 파일을 강조 표시합니다. [폴더 내용 비교](/howto/rcloneview-basic/compare-folder-contents)에서 보여준 것과 동일한 화면입니다.  

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare view in RcloneView before copying Google Drive files" class="img-medium img-center" />

## 3단계 — 첫 백업 실행하기

1. 툴바에서 **Copy**(1회성) 또는, Drive의 데이터를 삭제하지 않으면서 대상이 Drive를 그대로 반영하도록 하려면 **Sync (copy direction)**를 선택합니다.  
2. `/Personal/`과 같은 폴더를 건너뛰고 싶다면 필터링 규칙을 추가하세요.  
3. 먼저 **Dry Run**을 실행합니다. 대기 중인 전송에 대한 깔끔한 요약을 볼 수 있습니다.  
4. **Start**를 클릭합니다. Job Monitor에서 전송된 바이트 수, 파일 개수, 경고 사항을 모두 확인할 수 있습니다.

## 4단계 — 후속 복사 예약하기

첫 실행이 만족스럽다면:

1. 완료 대화상자에서 바로 **Job**으로 저장합니다.  
2. **Job Manager**를 열어 매일 또는 매주 일정을 설정합니다. [작업 예약 가이드](/howto/rcloneview-advanced/job-scheduling-and-execution)와 동일한 방식입니다.  
3. 캘린더 미리보기로 시간을 확인한 뒤, 이후는 RcloneView에 맡기세요.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Scheduling a backup job in RcloneView" class="img-medium img-center" />

## S3 사본을 깔끔하게 유지하기

- **수명 주기 정책**: 90일이 지난 백업을 Glacier Instant Retrieval 또는 Deep Archive로 이동해 비용을 절감하세요. [AWS Documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/object-lifecycle-mgmt.html)  
- **버킷 버전 관리**: 모든 덮어쓰기를 보존하고 싶다면 켜두세요. 그러면 RcloneView 실행마다 하나의 복원 지점이 됩니다.  
- **태그**: `Team=Finance`나 `Compliance=SOC2` 같은 태그를 객체에 추가하면 청구와 감사가 간단해집니다.

필터링과 클라우드 사본 정리에 대한 더 많은 아이디어는 [RcloneView 클라우드 간 전송](/blog/Effortless-Cloud-to-Cloud-Transfers-&-Syncing) 블로그를 참고하세요.

## 자신 있게 모니터링하고 복원하기

- **작업 기록(Job History)**: 모든 실행은 바이트 수, 소요 시간, 오류 메시지를 기록합니다. 감사자가 요청하면 UI에서 바로 로그를 내보낼 수 있습니다.  
- **클라우드 대시보드**: S3 Storage Lens나 CloudWatch로 버킷 증가량을 모니터링하세요. [AWS Documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-lens.html)  
- **복원 단계**: S3에서 필요한 스냅샷을 선택한 뒤, 동일한 RcloneView 작업 템플릿을 사용해 Drive나 다른 버킷으로 다시 복사하세요.  

## 관련 가이드 및 자료

- [RcloneView에서 Google OAuth 빠른 설정](/howto/remote-storage-connection-settings/add-oath-online-login)  
- [Amazon S3 리모트 설정](/howto/remote-storage-connection-settings/s3) — 단계별 자격 증명 스크린샷.  
- [실시간 전송 모니터링](/howto/rcloneview-basic/real-time-transfer-monitoring) — 작업 진행률 차트를 읽는 방법.

## 자주 묻는 질문

**Google 문서, 스프레드시트, 프레젠테이션도 함께 이전되나요?**  
네. 백업이 실행될 때 RcloneView는 선택한 형식(DOCX, XLSX 등)으로 내보냅니다.

**750GB 일일 한도에 도달하면 어떻게 되나요?**  
RcloneView는 명확한 메시지와 함께 일시 정지됩니다. 24시간을 기다리거나 다른 Google 서비스 계정으로 전환한 뒤 작업을 다시 시작하면 중단된 지점부터 재개됩니다.

**AWS S3 대신 Wasabi나 Cloudflare R2를 사용할 수 있나요?**  
물론입니다. RcloneView에서 S3 호환 리모트를 설정하고 해당 제공업체의 엔드포인트를 지정하세요.

**Google Drive 파일을 오랫동안 안전하고 검색 가능하게 보관할 준비가 되셨나요?**

<CloudSupportGrid />
