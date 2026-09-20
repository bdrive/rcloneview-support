---
slug: migrate-koofr-to-jottacloud-rcloneview
title: "Koofr에서 Jottacloud로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - alex
description: "RcloneView로 Koofr에서 Jottacloud로 파일을 이동하세요 — 유럽의 개인정보 보호 중심 스토리지 제공업체 두 곳 간의 검증된 클라우드 간 전송입니다."
keywords:
  - Koofr에서 Jottacloud로 마이그레이션
  - Koofr Jottacloud 전송
  - RcloneView Koofr
  - RcloneView Jottacloud
  - 유럽 클라우드 마이그레이션
  - 클라우드 간 전송
  - Koofr Jottacloud 동기화
  - 클라우드 간 파일 이동
tags:
  - RcloneView
  - koofr
  - jottacloud
  - cloud-to-cloud
  - migration
  - european-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Koofr에서 Jottacloud로 마이그레이션 — RcloneView로 파일 전송하기

> 로컬 다운로드 폴더를 거치지 않고 Koofr에서 Jottacloud로 클라우드 간 직접 파일을 이동하세요.

Koofr와 Jottacloud는 모두 데이터 거주지와 개인정보 보호를 중시하는 사용자들에게 인기 있는 유럽 기반 스토리지 제공업체이며, 요금제나 계정 용량을 비교한 뒤 한쪽으로 통합하는 경우가 흔합니다. 모든 파일을 노트북으로 다운로드했다가 다시 업로드하는 방식으로 마이그레이션을 진행하면 대역폭과 시간이 낭비되고, 연결이 중간에 끊기면 부분 전송의 위험도 있습니다. RcloneView는 두 리모트에 동시에 연결하여 파일을 직접 복사하므로, 전송 과정에서 로컬 컴퓨터는 저장 지점이 아니라 단순한 경유지 역할만 합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 두 리모트 연결하기

리모트 탭 > 새 리모트를 통해 Koofr를 리모트로 추가한 다음, Jottacloud에 대해서도 같은 과정을 반복하세요. 두 서비스 모두 공유된 로그인 화면이 아니라 각자의 계정 인증 절차를 거치므로, 시작하기 전에 각 제공업체의 계정 정보를 준비해 두세요. RcloneView는 하나의 창에서 90개 이상의 제공업체를 마운트하고 동기화하며, Windows, macOS, Linux에서 모두 사용할 수 있으므로 어떤 플랫폼에서 마이그레이션하든 동일한 설정 과정을 그대로 사용할 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Koofr remote in RcloneView" class="img-large img-center" />

두 리모트가 모두 리모트 관리자에 나타나면, Koofr를 보여주는 탐색기 패널과 Jottacloud를 보여주는 탐색기 패널을 나란히 열어 두어, 아무것도 옮기기 전에 두 파일 트리를 한눈에 확인할 수 있게 하세요.

## 전송 실행하기

일회성 마이그레이션이라면, Koofr 패널에서 옮기고 싶은 폴더를 드래그해 Jottacloud 패널로 바로 드롭하세요. 서로 다른 리모트 간의 전송이므로 RcloneView는 기본적으로 이 드롭을 복사로 처리하여, 모든 것이 Jottacloud에 제대로 도착했는지 확인하기 전까지 Koofr의 원본 파일은 그대로 유지됩니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Dragging files from Koofr to Jottacloud in RcloneView" class="img-large img-center" />

더 큰 라이브러리를 옮길 때는 4단계 동기화 마법사가 더 나은 도구입니다: Koofr를 원본으로, Jottacloud를 대상으로 설정하고 먼저 드라이 런을 실행해 실제로 복사될 내용을 미리 확인한 다음, 실제 동기화를 실행하세요. 드라이 런은 모든 라이선스 등급에서 사용할 수 있으므로, 대규모 마이그레이션을 진행하기 전에 미리 보기를 건너뛸 이유가 없습니다.

## 이동이 완료되었는지 확인하기

전송이 끝난 후에는 폴더 비교를 사용해 양쪽을 파일 단위로 확인하세요 — 한쪽에만 존재하는 파일이나 다른 크기로 전송된 파일을 표시해 주므로, Koofr에서 무언가를 삭제하기 전에 부분 업로드를 발견할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing a completed Koofr to Jottacloud transfer in RcloneView" class="img-large img-center" />

작업 기록에는 파일 수, 총 크기, 소요 시간 등 실행 내역이 영구적으로 남으며, 나중에 계정 해지를 위해 마이그레이션을 증빙해야 할 때 스크린샷을 찍거나 내보내 두면 유용합니다.

## 시작하기

1. 아직 설치하지 않았다면 [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 리모트 탭 > 새 리모트를 통해 Koofr와 Jottacloud를 모두 리모트로 추가합니다.
3. 빠른 이동을 원한다면 드래그 앤 드롭을, 전체 라이브러리 마이그레이션을 원한다면 드라이 런과 함께 동기화 작업을 구성합니다.
4. Koofr에서 무언가를 제거하기 전에 폴더 비교를 실행해 모든 파일이 제대로 도착했는지 확인합니다.

두 제공업체를 같은 창에서 연결하면, 유럽 클라우드 스토리지를 통합하는 작업이 며칠씩 걸리는 다운로드 후 재업로드 프로젝트가 아니라 한 세션 안에 끝낼 수 있는 작업이 됩니다.

---

**관련 가이드:**

- [Koofr를 Proton Drive로 동기화 — RcloneView로 클라우드 백업하기](https://rcloneview.com/support/blog/sync-koofr-to-proton-drive-rcloneview)
- [Jottacloud에서 OneDrive로 마이그레이션 — RcloneView로 파일 전송하기](https://rcloneview.com/support/blog/migrate-jottacloud-to-onedrive-rcloneview)
- [Koofr vs Jottacloud — RcloneView로 보는 유럽 클라우드 스토리지 비교](https://rcloneview.com/support/blog/koofr-vs-jottacloud-european-cloud-storage-rcloneview)

<CloudSupportGrid />
