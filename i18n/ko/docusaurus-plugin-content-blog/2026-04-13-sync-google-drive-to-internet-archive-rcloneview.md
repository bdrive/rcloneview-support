---
slug: sync-google-drive-to-internet-archive-rcloneview
title: "Google Drive를 Internet Archive로 동기화 — RcloneView로 디지털 보존하기"
authors:
  - tayson
description: "RcloneView를 사용해 Google Drive 파일을 Internet Archive에 장기 디지털 보존용으로 아카이브하는 방법을 알아보세요. 연구자, 저널리스트, 교육자에게 이상적입니다."
keywords:
  - Google Drive Internet Archive sync
  - digital preservation RcloneView
  - archive Google Drive files
  - Internet Archive rclone GUI
  - long-term cloud backup
  - researcher data archiving
  - Google Drive backup Internet Archive
  - RcloneView digital archive
tags:
  - RcloneView
  - google-drive
  - internet-archive
  - migration
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Google Drive를 Internet Archive로 동기화 — RcloneView로 디지털 보존하기

> Internet Archive는 디지털 콘텐츠를 위한 영구적이고 무료인 저장 공간을 제공합니다 — RcloneView를 사용하면 장기 보존을 위해 Google Drive 파일을 손쉽게 그곳으로 전송할 수 있습니다.

현장 데이터를 아카이빙하는 연구자, 원본 문서를 보존하는 저널리스트, 강의 자료를 관리하는 교육자 모두 같은 문제에 직면합니다. Google Drive는 활발한 작업에는 편리하지만 영구 보존을 위해 설계된 것은 아닙니다. Internet Archive(archive.org)는 그렇지 않습니다. 콘텐츠를 무기한 저장하며 장기간 공개적으로(또는 비공개로) 접근할 수 있도록 합니다. RcloneView는 두 제공업체를 연결하여 커맨드 라인을 다룰 필요 없이 Google Drive 콘텐츠를 Internet Archive로 동기화할 수 있게 해줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Google Drive 연결하기

RcloneView를 열고 **리모트 관리자(Remote Manager)**로 이동합니다. **새 리모트(New Remote)**를 클릭하고 **Google Drive**를 선택합니다. RcloneView가 OAuth 인증을 위해 브라우저를 엽니다 — Google 계정으로 로그인하고 접근 권한을 부여하세요. 인증 후 리모트 관리자에 해당 리모트가 나타납니다. 열어서 Drive 파일이 보이는지 확인합니다.

**공유 드라이브(Shared Drive)**를 아카이브해야 하는 경우, 내 드라이브가 아닌 특정 공유 드라이브 루트를 가리키도록 리모트를 구성하세요. RcloneView에서 리모트의 고급 설정에서 팀 드라이브 옵션을 확인합니다.

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Google Drive and Internet Archive remotes in RcloneView" class="img-large img-center" />

## Internet Archive 연결하기

다시 **리모트 관리자**에서 **새 리모트**를 클릭하고 **Internet Archive**를 선택합니다. Internet Archive는 이메일/비밀번호 자격 증명(archive.org 계정 로그인) 또는 archive.org 계정 설정에서 확인할 수 있는 S3 호환 API 키를 사용합니다. 구성 양식에 Access Key와 Secret Key(Internet Archive용 S3 API 키)를 입력하고 저장합니다.

연결을 확인하려면 Internet Archive 리모트를 엽니다. archive.org에 있는 기존 항목이 최상위 항목으로 표시됩니다.

## 아카이브 작업 구성하기

**작업(Jobs)**으로 이동하여 **새 작업(New Job)**을 클릭합니다. 소스로 Google Drive를 설정하고 — 보존하려는 데이터가 있는 특정 폴더를 선택합니다. 대상으로는 Internet Archive 리모트를 설정하고, 파일이 저장될 아이템 식별자를 지정합니다.

작업 마법사의 2단계에서 아카이빙에 적합한 옵션을 구성합니다.

- **체크섬 검증(checksum verification)**을 활성화하세요 — 데이터 무결성은 보존에 있어 매우 중요합니다
- Internet Archive의 수집 파이프라인에 과부하가 걸리지 않도록 동시 전송 수를 적당히(2–4개) 설정하세요
- 업로드될 내용을 정확히 검토하기 위해 먼저 **드라이 런(Dry Run)**을 활성화하세요

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Google Drive files to Internet Archive" class="img-large img-center" />

## 보존 동기화 실행하기

로그(Log) 탭에서 드라이 런 출력 결과를 검토한 후, 드라이 런을 비활성화하고 전체 작업을 실행합니다. RcloneView는 Google Drive에서 Internet Archive로 파일을 직접 전송합니다. 파일 크기와 Archive의 수집 대기열에 따라 대용량 업로드는 시간이 걸릴 수 있습니다 — 실시간 진행 상황 패널이 계속 정보를 제공합니다.

지속적인 보존 워크플로를 위해서는 반복 작업(스케줄링에는 PLUS 라이선스 필요)을 만들어 Google Drive 폴더에 추가된 새 파일이 정해진 일정(예: 매주)에 따라 자동으로 아카이빙되도록 할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing Google Drive to Internet Archive transfers" class="img-large img-center" />

## 사용 사례

- **학술 연구자**: 프로젝트 완료 시 데이터셋과 작업 문서를 아카이브
- **저널리스트**: 원본 자료와 인터뷰 녹음을 영구적으로 보존
- **교육자**: 강의 콘텐츠와 디지털 학습 자료를 아카이브
- **비영리 단체**: 보조금 신청서, 기부자 기록, 기관 역사를 보존

Internet Archive의 영속성은 어떤 상용 클라우드 서비스와도 차별화됩니다 — 그곳에 예치된 콘텐츠는 개별 조직이나 구독 요금제보다 오래 유지되도록 설계되어 있습니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. **리모트 관리자**에서 OAuth를 통해 Google Drive를 연결합니다.
3. archive.org 계정 설정의 S3 API 자격 증명을 사용해 Internet Archive를 연결합니다.
4. Google Drive에서 Internet Archive로의 동기화 작업을 생성합니다. 먼저 드라이 런을 실행한 다음 전체 아카이브를 실행합니다.

RcloneView는 아키비스트와 연구자에게 Google Drive 콘텐츠를 영구 기록으로 예치하기 위한 신뢰할 수 있고 감사 가능한 워크플로를 제공합니다.

---

**관련 가이드:**

- [RcloneView를 이용한 클라우드 간 마이그레이션](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)
- [RcloneView로 체크섬 검증된 클라우드 마이그레이션](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)
- [RcloneView로 매일 클라우드 백업 자동화하기](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)

<CloudSupportGrid />
