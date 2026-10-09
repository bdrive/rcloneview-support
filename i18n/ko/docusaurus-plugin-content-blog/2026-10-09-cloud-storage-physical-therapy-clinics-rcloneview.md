---
slug: cloud-storage-physical-therapy-clinics-rcloneview
title: "물리치료 클리닉을 위한 클라우드 스토리지 — RcloneView로 체계적인 암호화 백업"
authors:
  - robin
description: "물리치료 클리닉의 운동 영상, 접수 서식, 영상 검사 파일을 RcloneView로 암호화된 클라우드 스토리지에 백업하는 방법을 소개합니다."
keywords:
  - 물리치료 클리닉 클라우드 스토리지
  - 물리치료 파일 백업
  - 클리닉 클라우드 백업
  - 암호화 클라우드 백업
  - 운동 영상 저장
  - 예약 클라우드 동기화
  - 멀티 클라우드 백업
  - RcloneView
  - rclone GUI
  - Crypt 리모트
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 물리치료 클리닉을 위한 클라우드 스토리지 — RcloneView로 체계적인 암호화 백업

> 환자 서류, 운동 영상, 영상 검사 내보내기 파일을 명령어 스크립트 없이 여러 클라우드에 백업하세요.

물리치료 클리닉에서는 원장이 예상하는 것보다 많은 파일이 생깁니다. 스캔한 접수 서식, 의뢰서, 홈 운동 영상, 보행 분석 녹화, 내보낸 영상 검사 파일 등이 그 예입니다. 이런 파일은 대개 접수처 PC나 소형 NAS에 사본 하나만 있고, 검증된 복원 절차도 없는 경우가 많습니다. RcloneView는 클리닉 직원이 데스크톱 GUI로 데이터를 클라우드 스토리지에 복사하고, 암호화하고, 제대로 도착했는지 확인할 수 있게 해 줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 클리닉에서 이미 쓰는 스토리지 연결하기

대부분의 클리닉은 이미 Microsoft 365 또는 Google Workspace 계정을 보유하고 있고, 로컬 NAS를 함께 쓰는 곳도 많습니다. RcloneView에서 Remote 탭을 열고 **New Remote**를 클릭하세요. OneDrive와 Google Drive는 브라우저를 통해 로그인합니다. Wasabi, Cloudflare R2, Backblaze B2 같은 S3 호환 스토리지는 액세스 키를 사용합니다. SFTP, WebDAV, SMB로 사내 서버에 연결할 수 있으며, Synology NAS는 자동 감지됩니다.

RcloneView는 하나의 창에서 90개 이상의 클라우드 서비스를 Windows, macOS, Linux에서 관리하므로, 접수처의 Windows PC와 원장의 MacBook에서 같은 작업 흐름을 사용할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 클리닉용 클라우드 스토리지 리모트 추가" class="img-large img-center" />

## Crypt 리모트로 환자 관련 파일 암호화

접수 서식과 치료 기록은 서드파티 버킷에 평문으로 두어서는 안 됩니다. RcloneView에서는 업로드 전에 파일 이름, 폴더 이름, 내용을 암호화하는 **Crypt** 가상 리모트를 만들 수 있습니다. Crypt 리모트가 백업 제공업체의 폴더를 가리키게 설정한 뒤, 원본 버킷이 아니라 Crypt 리모트로 파일을 복사하세요.

Crypt 비밀번호는 데이터와 분리된 안전한 곳에 보관하세요. RcloneView만으로 클리닉이 규정을 준수하게 되는 것은 아닙니다. 환자 정보를 옮기기 전에 해당 지역의 개인정보 보호 규정과 스토리지 제공업체의 계약 조건을 확인하세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView에서 클리닉 파일을 암호화된 클라우드 대상으로 복사" class="img-large img-center" />

## 미리 보기 후 백업

클리닉의 공유 PC에 운동 시연 영상과 스캔 기록이 300GB 있다고 가정해 봅시다. 해당 폴더에서 Crypt 리모트로 동기화 작업을 만들고, **Dry Run**으로 복사되거나 삭제될 항목을 먼저 확인하세요. 첫 실행에 복사(copy) 방식을 사용하면 원본이 그대로 유지됩니다. S3, Azure, Backblaze B2는 FREE 라이선스에서도 읽기/쓰기가 모두 가능하므로 백업 대상 때문에 추가 소프트웨어 비용이 들지 않습니다.

1단계에서 두 번째 대상을 추가하면 1:N 동기화로 같은 원본을 두 클라우드에 미러링할 수 있으며, 이 기능도 FREE에서 사용할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView에서 클리닉 백업 작업 실행" class="img-large img-center" />

## 야간 작업 예약과 기록 확인

PLUS 라이선스에서는 동기화 마법사의 4단계에서 crontab 형식의 일정을 지정할 수 있습니다. 예를 들어 마지막 진료가 끝난 평일 22:00에 실행하도록 설정할 수 있습니다. 예약 작업이 실행되려면 앱이 켜져 있어야 하므로, PC를 켜 두고 RcloneView를 시스템 트레이에 최소화해 두세요.

Job History는 실행마다 상태, 소요 시간, 크기, 파일 수를 기록하므로, 지난 화요일의 백업이 완료되었는지 확인해야 할 때 감사 기록으로 활용할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView에서 야간 클리닉 백업 예약" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Remote 탭에서 주 스토리지와 백업 대상을 추가하세요.
3. 민감한 폴더용으로 백업 대상에 Crypt 리모트를 만드세요.
4. Dry Run을 실행하고 작업을 시작한 뒤, Job History에서 결과를 확인하세요.

검증된 암호화 보조 사본이 있으면 디스크 고장이나 랜섬웨어 사고 이후에도 클리닉이 복구할 방법을 확보할 수 있습니다.

---

**관련 가이드:**

- [의료 분야를 위한 클라우드 스토리지 — RcloneView로 안전한 백업](https://rcloneview.com/support/blog/cloud-storage-healthcare-rcloneview)
- [의료 분야 HIPAA 준수를 위한 클라우드 스토리지 — RcloneView](https://rcloneview.com/support/blog/cloud-storage-hipaa-compliance-healthcare-rcloneview)
- [Crypt 리모트로 클라우드 백업 암호화 — RcloneView 가이드](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
