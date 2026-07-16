---
slug: sync-google-photos-to-google-drive-rcloneview
title: "구글 포토를 구글 드라이브로 동기화하기 — RcloneView로 사진 라이브러리 정리 및 백업하기"
authors:
  - kai
description: "RcloneView를 사용해 구글 포토를 구글 드라이브로 자동 동기화하는 방법을 알아보세요. 클라우드 계정 간에 전체 사진 라이브러리를 전송, 정리, 백업할 수 있습니다."
keywords:
  - sync Google Photos to Google Drive
  - backup Google Photos to Google Drive RcloneView
  - Google Photos Google Drive transfer
  - RcloneView Google Photos sync
  - cloud photo library backup
  - automated Google Photos backup
  - photo file management cloud
  - Google Photos cloud sync
  - transfer photos between Google services
  - cloud photo organization tool
tags:
  - RcloneView
  - google-photos
  - google-drive
  - cloud-sync
  - backup
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 구글 포토를 구글 드라이브로 동기화하기 — RcloneView로 사진 라이브러리 정리 및 백업하기

> 구글 포토와 구글 드라이브는 rclone에서 서로 별개의 클라우드 리모트입니다—RcloneView를 사용하면 몇 번의 클릭만으로 두 서비스 간에 전체 사진 라이브러리를 동기화하고, 자동으로 실행되도록 예약할 수 있습니다.

많은 사진작가와 팀들이 구글 포토를 주요 촬영 및 정리 도구로 사용하면서, 구조화된 파일 공유와 협업을 위해서는 구글 드라이브에 의존합니다. 문제는 이 두 서비스가 rclone에서 서로 다른 클라우드 서비스이며, 콘텐츠가 자동으로 서로에게 흘러가지 않는다는 점입니다. 구글 포토에 수만 장의 보정된 이미지를 관리하는 웨딩 사진작가라면, 클라이언트에게 전달할 결과물과 장기 보관을 위해 해당 파일들을 구조화된 구글 드라이브 폴더에서도 접근할 수 있어야 할 수 있습니다. RcloneView는 두 서비스를 동일한 인터페이스에서 연결해 주므로, 명령줄 작업 없이도 두 서비스 간에 사진을 전송, 동기화, 예약 이전하는 작업을 간단하게 처리할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneView에서 구글 포토와 구글 드라이브 연결하기

구글 포토와 구글 드라이브 모두 브라우저 기반 OAuth 인증을 사용합니다. RcloneView에서 Remote 탭을 열고 New Remote를 클릭한 다음 Google Photos를 선택하고 브라우저 로그인을 완료하세요. 같은 과정을 반복해 구글 드라이브를 두 번째 리모트로 추가합니다. 몇 분 안에 두 계정이 듀얼 패널 파일 탐색기에서 별도의 패널로 표시됩니다.

두 리모트가 나란히 표시되면, 같은 창에서 구글 포토 라이브러리와 구글 드라이브 폴더 구조를 함께 탐색할 수 있습니다. 이 병렬 보기 덕분에 아직 전송되지 않은 사진 앨범이나 날짜 범위를 쉽게 파악할 수 있고, 개별 폴더를 드래그해서 빠르게 일회성 복사를 할 수도 있습니다. 드래그 앤 드롭 확인 팝업(설정에서 켜고 끌 수 있음)은 대용량 라이브러리를 다룰 때 실수로 파일이 이동되는 것을 방지해 줍니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Photos and Google Drive as remotes in RcloneView" class="img-large img-center" />

## 사진 라이브러리를 전송할 동기화 작업 설정하기

대량 전송의 경우, Job Manager를 사용해 전용 동기화 작업을 만드세요. Home 탭에서 Sync 버튼을 클릭하고, 구글 포토 폴더를 소스로 선택한 다음, 구글 드라이브의 대상 폴더를 목적지로 지정합니다. 4단계 마법사를 통해 동시 전송 스트림 수를 설정하고, 전송 중 손상된 파일을 잡아내기 위한 체크섬 검증을 활성화하며, 동영상을 제외하거나 특정 기간의 사진만 가져오고 싶을 때 파일 크기 또는 날짜 필터를 적용할 수 있습니다.

전체 전송을 실행하기 전에 Dry Run 기능을 사용해 어떤 파일이 복사될지 정확히 미리 확인하세요—이미 정리된 드라이브 폴더에 실수로 중복 파일을 덮어쓰지 않도록 대용량 아카이브를 동기화할 때 필수적인 기능입니다. Dry Run은 실제 변경 없이 예정된 작업의 전체 목록을 보여줍니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud sync job between Google Photos and Google Drive in RcloneView" class="img-large img-center" />

화면 하단의 Transferring 탭은 진행률, 현재 전송 속도, 파일 수 등 실시간 전송 모니터링을 제공하므로, 대규모 사진 이전 작업이 얼마나 남았는지 추측할 필요 없이 확인할 수 있습니다.

## 자동 사진 동기화 예약하기 (PLUS 라이선스)

구글 포토에 지속적으로 업로드하는 사진작가나 팀에게는 일회성 전송만으로는 충분하지 않습니다. PLUS 라이선스가 있으면 crontab 방식의 스케줄링을 사용해 반복 동기화 작업을 예약할 수 있습니다. 새로 추가된 구글 포토 항목을 대응하는 구글 드라이브 폴더로 가져오는 야간 작업을 구성하면, 수동 개입 없이도 두 계정을 최신 상태로 유지할 수 있습니다. 스케줄러는 분, 시간, 요일, 일자, 월 단위의 세밀한 간격 설정을 지원합니다.

Job History는 모든 실행 기록—실행 시각, 전송된 파일 수, 총 데이터 크기, 속도, 완료 여부 또는 오류 여부—을 기록합니다. 네트워크 문제로 세션이 중단되면 RcloneView가 자동으로 재시도하며(기본 3회) 결과를 기록으로 남겨 나중에 확인할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed Google Photos to Google Drive sync transfers" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Remote 탭 > New Remote > Google Photos를 통해 구글 포토를 추가하고 브라우저로 인증합니다.
3. 같은 방식으로 구글 드라이브를 두 번째 리모트로 추가합니다.
4. Job Manager에서 Sync 작업을 생성하고, 구글 포토를 소스로, 구글 드라이브 폴더를 대상으로 선택한 다음, 먼저 Dry Run을 실행하고 이후 전체 전송을 실행합니다.

RcloneView를 사용하면 구글 포토 라이브러리를 구글 드라이브로 동기화하는 설정을 몇 분 만에 마칠 수 있으며, 구조화된 파일 접근과 전체 사진 컬렉션의 신뢰할 수 있는 보조 복사본을 확보할 수 있습니다.

---

**관련 가이드:**

- [구글 포토 저장공간 관리하기 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-google-photos-cloud-sync-backup-rcloneview)
- [구글 드라이브 저장공간 관리하기 — RcloneView로 파일 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [RcloneView로 구글 포토를 외장 드라이브 및 NAS에 백업하기](https://rcloneview.com/support/blog/backup-google-photos-external-drive-nas-rcloneview)

<CloudSupportGrid />
