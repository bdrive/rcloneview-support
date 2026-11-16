---
slug: cloud-storage-performing-arts-theaters-rcloneview
title: "공연예술 극장을 위한 클라우드 스토리지 — RcloneView로 대본, 큐, 리허설 영상 보호하기"
authors:
  - tayson
description: "극단이 RcloneView로 대본, 조명·음향 큐 파일, 리허설 영상을 여러 클라우드와 NAS 간에 동기화하고 예약 백업하는 방법을 알아보세요."
keywords:
  - 극장용 클라우드 스토리지
  - 공연 제작 파일 백업
  - 공연예술 클라우드 스토리지
  - 조명 및 음향 큐 파일 백업
  - 리허설 영상 클라우드 백업
  - 무대 디자인 파일 동기화
  - 극장 아카이브 NAS에서 클라우드로
  - 극단을 위한 RcloneView
  - 예술 단체를 위한 멀티 클라우드 백업
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

# 공연예술 극장을 위한 클라우드 스토리지 — RcloneView로 대본, 큐, 리허설 영상 보호하기

> 첫 공연의 성패는 파일에 달려 있습니다. 올바른 대본 개정판, 최종 음향 큐, 그리고 디자이너가 승인한 조명 플롯 말이죠.

지역 극단이 다루는 데이터의 양은 생각보다 많습니다. 연출가는 Google Drive로 대본 개정판을 공유하고, 음향 디자이너는 Dropbox로 큐 스택을 전달하며, 리허설 영상은 조정실의 Synology NAS에 쌓이고, 지난 시즌의 아카이브는 오래된 외장 드라이브에 보관되어 있습니다. RcloneView는 이 모든 것을 하나의 창으로 모아, 제작팀이 여러 앱을 오가지 않고도 모든 공연 폴더를 동기화하고, 비교하고, 백업할 수 있게 해 줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 제작에 쓰이는 모든 스토리지 위치 연결하기

부서마다 각자의 도구를 고르는 경우가 많으므로, 첫 단계는 모든 것을 한눈에 보이게 하는 것입니다. RcloneView에서 Google Drive와 Dropbox를 브라우저 로그인으로 추가하고, Synology 자동 감지로 조정실 NAS를 연결한 다음, 장기 아카이브용으로 Backblaze B2나 Wasabi 같은 오브젝트 스토리지 버킷을 추가하세요. 외부 디자이너가 Google Drive로 보내는 공유 폴더는 Google Drive Shared with Me 리모트로 추가할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding Google Drive, Dropbox, and Backblaze B2 remotes for a theater production in RcloneView" class="img-large img-center" />

최대 네 개의 탐색기 패널을 나란히 열어 두면, 무대감독은 Drive의 최신 프롬프트 북을 NAS 공연 폴더로 드래그하거나, Dropbox에 있는 디자이너의 렌더링을 아카이브 버킷으로 가져올 수 있습니다. 서로 다른 리모트 간에 드래그하면 파일이 복사되므로 원본은 디자이너가 둔 자리에 그대로 남습니다.

## 테크 위크 전에 큐 파일과 대본을 일관되게 유지하기

테크 위크의 전형적인 실수는 오래된 큐 파일로 공연을 진행하는 것입니다. RcloneView의 Folder Compare는 음향 디자이너의 전달 폴더를 조정실 사본 옆에 두고, 한쪽에만 있거나 크기가 다른 파일을 강조 표시합니다. 변경된 큐 파일을 클릭 한 번으로 복사하면 비교 화면에서 동일한 파일로 표시됩니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing sound cue folders between Dropbox and the booth NAS in RcloneView" class="img-large img-center" />

공연 폴더 전체에 대해서는 Sync 작업을 실행하기 전에 Dry Run으로 복사되거나 삭제될 항목을 정확히 확인할 수 있습니다. 연출가가 대본 폴더를 조용히 재구성했을 때 특히 중요합니다.

## 리허설 영상을 두 곳에 동시에 백업하기

리허설과 아카이브 녹화 영상은 용량이 크고 대체할 수 없습니다. RcloneView의 1:N 동기화는 하나의 소스 폴더를 단일 작업으로 여러 대상에 미러링하므로, NAS의 영상 폴더를 B2 버킷과 두 번째 클라우드에 동시에 보낼 수 있습니다. 마운트 전용 도구와 달리 RcloneView는 동기화와 폴더 비교도 지원하며, FREE 라이선스에서 사용할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing rehearsal video from a Synology NAS to two cloud destinations with RcloneView" class="img-large img-center" />

배우 계약서와 급여 내보내기 파일은 더욱 신경 써야 합니다. 클라우드 폴더를 Crypt 리모트로 감싸면 파일 이름과 내용이 사무실을 떠나기 전에 암호화됩니다.

## 공연 기간 내내 야간 백업 자동화하기

PLUS 라이선스가 있으면 작업 마법사의 crontab 방식 스케줄러로 매일 저녁 공연이 끝난 뒤, 예를 들어 오전 1시에 백업을 실행할 수 있으며, Simulate schedule로 다음 실행 시간을 미리 확인할 수 있습니다. Job History는 모든 실행의 상태, 크기, 파일 수를 기록하므로, 공연 기간 중 문제가 생겼을 때 제작감독에게 명확한 기록을 제공합니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a nightly theater backup job in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 각 부서가 이미 사용 중인 리모트를 추가하세요: Google Drive, Dropbox, NAS, 아카이브 버킷.
3. Folder Compare로 조정실의 큐 파일 사본이 디자이너의 최신 전달본과 일치하는지 확인하세요.
4. 리허설 영상용 1:N Sync 작업을 만들고 PLUS로 매일 밤 실행되도록 예약하세요.

파일이 보호되면 스태프는 공연에만 집중할 수 있습니다.

---

**관련 가이드:**

- [영상 제작팀을 위한 클라우드 스토리지 워크플로 — RcloneView로 데일리, 프록시, 최종본 동기화하기](https://rcloneview.com/support/blog/cloud-storage-video-production-teams-rcloneview)
- [음악 제작을 위한 클라우드 스토리지 — RcloneView로 세션, 스템, 백업 관리하기](https://rcloneview.com/support/blog/cloud-storage-music-production-rcloneview)
- [1:N 동기화 — RcloneView에서 하나의 소스를 여러 대상에 동기화하기](https://rcloneview.com/support/blog/one-to-many-sync-multiple-destinations-rcloneview)

<CloudSupportGrid />
