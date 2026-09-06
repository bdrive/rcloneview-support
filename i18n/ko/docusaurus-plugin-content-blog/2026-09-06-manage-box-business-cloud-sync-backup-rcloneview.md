---
slug: manage-box-business-cloud-sync-backup-rcloneview
title: "Box for Business 관리하기 — RcloneView로 엔터프라이즈 클라우드 동기화 및 백업하기"
authors:
  - casey
description: "관리자가 프로비저닝한 Box 계정 전반의 엔터프라이즈 동기화, 백업, 마운트 워크플로를 위해 RcloneView에서 Box for Business를 설정하세요."
keywords:
  - Box for Business
  - Box for Business 관리하기
  - Box 엔터프라이즈 클라우드 동기화
  - Box 비즈니스 백업
  - RcloneView Box
  - box_sub_type enterprise
  - 엔터프라이즈 클라우드 스토리지 동기화
  - Box 계정 백업 도구
tags:
  - RcloneView
  - box
  - business
  - cloud-storage
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Box for Business 관리하기 — RcloneView로 엔터프라이즈 클라우드 동기화 및 백업하기

> Box for Business 계정에서는 관리자가 프로비저닝한 모든 항목을 RcloneView가 볼 수 있으려면 설정 하나가 더 필요합니다 — 올바르게 구성하는 방법을 안내합니다.

일반적인 Box 리모트는 개인 계정에서는 잘 작동하지만, Box for Business(엔터프라이즈) 계정은 내부적으로 폴더와 권한 구조가 다르게 되어 있습니다. 개인 Box 계정과 동일한 방식으로 연결하면 일부 엔터프라이즈 관리 콘텐츠가 탐색기에 나타나지 않을 수 있습니다. RcloneView는 리모트에 전용 `box_sub_type = enterprise` 설정을 적용해 이 문제를 해결하며, 이를 통해 팀의 공유 폴더, 공동 소유 콘텐츠, 관리자가 프로비저닝한 스토리지가 모두 올바르게 표시됩니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Box for Business 리모트 설정하기

새 리모트를 만들고 제공업체로 Box를 선택하는 것으로 시작하세요 — 브라우저 기반 OAuth 로그인은 개인 계정과 동일하게 작동하므로 별도로 익힐 자격 증명 절차가 없습니다. 차이는 인증 이후에 나타납니다: 리모트의 고급 설정을 열고 `box_sub_type = enterprise`를 설정하세요. 이렇게 하면 RcloneView가 구동하는 엔진인 rclone이 개인 계정 기본값 대신 엔터프라이즈 범위의 폴더 구조를 해석하도록 지시합니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 새 Box for Business 리모트 만들기" class="img-large img-center" />

설정을 마치면 다른 리모트와 동일한 방식으로 탐색할 수 있습니다 — 폴더 트리 탐색, 썸네일 미리보기, 파일 작업(복사, 잘라내기, 이름 바꾸기, 삭제) 모두 개인용 계정이든 비즈니스 등급 계정이든 동일하게 작동합니다.

## 엔터프라이즈 Box 콘텐츠 동기화 및 백업하기

IT 팀에서 흔히 볼 수 있는 시나리오는 Box for Business 계정을 온프레미스 NAS, 다른 클라우드, 또는 콜드 아카이빙용 S3 호환 오브젝트 스토리지 같은 보조 위치로 백업하는 것입니다. Box for Business를 소스로 하는 동기화 작업을 구성하고, 안전하고 비파괴적인 백업을 위해 방향을 "대상만 수정"하는 단방향으로 설정한 다음, 먼저 dry run을 실행해 실제로 복사될 항목을 정확히 미리 확인하세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView에서 Box for Business 백업 동기화 작업 구성하기" class="img-large img-center" />

수십 개의 Box 폴더에 걸쳐 공유 드라이브를 관리하는 부서라면, 최대 파일 사용 기간이나 사전 정의된 문서 필터로 필터링하면 매번 전체 계정을 다시 스캔하는 대신 야간 작업이 변경된 항목에만 집중하도록 할 수 있습니다. RcloneView는 FREE 라이선스에서도 동기화와 폴더 비교를 지원하므로, 엔터프라이즈 백업 워크플로를 시작하는 데 업그레이드가 필요하지 않습니다.

## 반복되는 엔터프라이즈 백업 예약하기

매일 여러 기여자가 파일을 추가하는 엔터프라이즈 계정에서는 수동 내보내기가 확장성을 갖기 어렵습니다. Job Manager를 사용하면 Box for Business 동기화를 이름이 지정된 작업으로 저장한 다음, crontab 방식의 예약(PLUS 라이선스 기능)을 연결해 매일 밤 또는 컴플라이언스 정책이 요구하는 어떤 주기로든 자동으로 실행되도록 할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="반복되는 Box for Business 동기화 작업 예약하기" class="img-large img-center" />

모든 실행 기록은 시작 시간, 소요 시간, 전송 속도, 파일 수와 함께 Job History에 남으므로 감사 시 백업 검증 방법을 묻는 질문에 유용한 근거가 됩니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView 다운로드**.
2. 새 Box 리모트를 만들고 Box for Business 자격 증명으로 브라우저 OAuth 로그인을 완료하세요.
3. 리모트의 고급 설정을 열고 `box_sub_type = enterprise`를 설정해 엔터프라이즈 범위의 폴더를 활성화하세요.
4. Box for Business와 다른 지원되는 리모트 또는 로컬 스토리지를 짝지어 동기화나 백업 작업을 구성하세요.

이 설정 하나를 처음부터 올바르게 해두면 나중에 "파일이 어디 갔지"라는 문제 해결에 몇 시간을 쓰지 않아도 됩니다.

---

**관련 가이드:**

- [Box 스토리지 관리하기 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-box-cloud-sync-backup-rcloneview)
- [Dropbox for Business 관리하기 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-dropbox-business-cloud-sync-backup-rcloneview)
- [Box에서 OneDrive로 마이그레이션하기 — RcloneView로 파일 전송하기](https://rcloneview.com/support/blog/migrate-box-to-onedrive-rcloneview)

<CloudSupportGrid />
