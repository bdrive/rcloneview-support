---
slug: get-public-link-share-files-rcloneview
title: "공개 링크 가져오기 — RcloneView로 클라우드 파일을 즉시 공유하기"
authors:
  - kai
description: "브라우저 탭 없이 RcloneView의 파일 탐색기에서 바로 클라우드 파일의 공유 가능한 공개 링크를 생성하는 방법을 알아보세요."
keywords:
  - 공개 링크 가져오기
  - 클라우드 파일 공유
  - 클라우드 스토리지 공유 링크
  - RcloneView 공개 링크
  - 구글 드라이브 공유 링크
  - 드롭박스 공유 링크
  - 박스 공유 링크
  - 클라우드 파일 공유
  - rclone 공개 링크
  - 원드라이브 공유 링크
tags:
  - RcloneView
  - feature
  - file-management
  - cloud-storage
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 공개 링크 가져오기 — RcloneView로 클라우드 파일을 즉시 공유하기

> 브라우저는 건너뛰세요: RcloneView에서 아무 파일이나 우클릭하면 몇 초 만에 공유 가능한 공개 링크를 생성할 수 있습니다.

클라우드에서 파일 하나를 공유하려면 보통 브라우저 탭을 열고, 제공업체의 웹 콘솔에 로그인하고, 공유 버튼을 찾은 다음, 원하는 권한이 맞는지 확실치 않은 링크를 복사해야 합니다. RcloneView는 이 전체 워크플로를 우클릭 메뉴 항목 하나로 압축합니다. 여러 제공업체에 걸쳐 동일한 탐색기에서 파일을 관리한다면, 이 일관성은 보이는 것보다 훨씬 중요합니다 — 파일 하나를 보내기 위해 다섯 개의 서로 다른 웹 UI 사이를 전환할 필요가 없어집니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 공개 링크 가져오기의 작동 방식

**공개 링크 가져오기(Get Public Link)** 명령은 Copy, Cut, Rename, Download와 같은 우클릭 컨텍스트 메뉴에 위치합니다. 연결된 리모트의 파일 목록에서 파일 하나 이상을 선택하고 우클릭한 다음 Get Public Link를 선택하세요. RcloneView는 요청을 기본 rclone 백엔드로 전달하고, 백엔드는 제공업체 API에 해당 백엔드가 지원하는 권한(읽기 전용, 만료, 비밀번호 보호 등)으로 링크를 생성하도록 요청합니다.

이는 제공업체별 동작이므로 정확한 링크 형식과 옵션은 다양합니다. 드롭박스 링크는 박스 링크와 다르게 동작하며, 모든 리모트 유형이 공개 링크를 지원하는 것은 아닙니다 — 일반 SFTP나 FTP 서버 같은 프로토콜 기반 리모트는 대체로 소비자용 클라우드 드라이브와 같은 "공유" 개념이 없습니다. RcloneView는 지원되지 않는 리모트에서 조용히 실패하는 만능 버튼을 흉내 내는 대신, 백엔드가 실제로 지원하는 것을 그대로 보여줍니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView remote explorer with right-click context menu open" class="img-large img-center" />

## 일상 워크플로에서의 활용

클라이언트 결과물, 마케팅 자산, 일회성 문서 요청을 여러 개 다루는 팀이 파일이 이미 있는 동일한 창 안에서 링크를 생성하는 것으로부터 가장 큰 이득을 얻습니다. 파일이 어느 제공업체에 있는지 기억하고 해당 제공업체의 사이트를 별도로 여는 대신, RcloneView의 Explorer 패널에서 파일로 이동하여 즉시 링크를 생성하면 됩니다. 마운트 전용 도구와 달리, RcloneView는 FREE 라이선스에서도 동기화와 폴더 비교 기능을 제공하므로, 오늘 링크를 공유한 동일한 창이 내일은 같은 폴더를 일정에 따라 백업할 수도 있습니다.

이는 하나의 프로젝트 자산이 여러 제공업체에 흩어져 있을 때 특히 유용합니다 — 예를 들어 RAW 사진 원본은 Backblaze B2에, 클라이언트용 시안은 Dropbox에 있는 경우입니다. 두 개의 워크플로가 필요한 것이 아니라, 탭 두 개가 열린 탐색기 하나만 있으면 됩니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud to cloud file transfer panel in RcloneView" class="img-large img-center" />

## 공개 링크와 폴더 정리 결합하기

공유하기 전에 RcloneView의 파일 목록 보기를 사용하여 정확히 무엇을 노출하는지 확인하는 것이 좋습니다. 파일 크기와 수정 날짜를 확인하려면 List View로 전환하고, 이미지를 공유하면서 올바른 파일을 선택했는지 빠르게 시각적으로 확인하려면 Thumbnail View를 사용하세요. Get Public Link는 여러 파일을 선택한 경우에도 작동하므로, 우클릭을 반복하는 대신 한 번에 여러 링크를 생성할 수 있습니다.

링크가 예약된 반복 공유용으로 계속 유지되어야 한다면 — 예를 들어 클라이언트가 항상 같은 URL에서 가져가는 주간 보고서 — 해당 경로의 기본 파일을 계속 업데이트하는 Sync 작업과 함께 사용하면 링크 자체를 다시 생성할 필요가 없습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing scheduled file updates" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. New Remote를 통해 공유할 파일이 있는 리모트를 연결하세요.
3. Explorer 패널에서 파일로 이동하여 우클릭한 다음 Get Public Link를 선택하세요.
4. 생성된 링크를 복사하여 전송하세요 — 별도의 브라우저 로그인이 필요 없습니다.

이것이 일상 루틴이 되면, 클라우드 파일을 공유하는 데는 90개 이상의 지원 제공업체 중 어디에 있든 동일한 세 번의 클릭이면 충분합니다.

---

**관련 가이드:**

- [지원되지 않는 공개 링크 오류 수정하기 — RcloneView로 올바르게 파일 공유하기](https://rcloneview.com/support/blog/fix-public-link-not-supported-errors-rcloneview)
- [크기 가져오기 — RcloneView로 클라우드 스토리지 사용량을 즉시 계산하기](https://rcloneview.com/support/blog/get-size-calculate-cloud-storage-usage-rcloneview)
- [썸네일 보기 — RcloneView로 클라우드 이미지를 시각적으로 탐색하고 미리보기](https://rcloneview.com/support/blog/thumbnail-view-image-preview-cloud-rcloneview)

<CloudSupportGrid />
