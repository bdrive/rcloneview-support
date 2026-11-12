---
slug: cloud-storage-genealogy-family-history-rcloneview
title: "족보·가족사 연구자를 위한 클라우드 스토리지 — RcloneView로 가족사 아카이브 보존하기"
authors:
  - tayson
description: "스캔한 기록물, 가계도 파일, 구술사 녹음을 RcloneView로 보호하세요: 족보 아카이브를 위한 멀티 클라우드 백업, 암호화, 검증."
keywords:
  - 족보 연구용 클라우드 스토리지
  - 가족사 백업
  - 족보 아카이브 백업
  - 가계도 파일 백업
  - 스캔한 가족 문서 클라우드
  - 구술사 녹음 백업
  - 족보 협회 파일 저장
  - 여러 클라우드에 가족 사진 보존
  - 암호화된 DNA 데이터 백업
  - RcloneView 족보
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

# 족보·가족사 연구자를 위한 클라우드 스토리지 — RcloneView로 가족사 아카이브 보존하기

> 수십 년의 연구가 노트북 드라이브 하나에 들어 있을 수 있습니다. RcloneView는 이를 여러 클라우드에 복사하고 모든 사본이 일치하는지 확인합니다.

족보 아카이브는 제각각의 형태로 늘어납니다. 가족사 연구자 한 명이 교구 기록부를 스캔한 TIFF 파일 40,000개, 가계도를 내보낸 GEDCOM 파일 몇 개, 연로한 친척과의 몇 시간 분량 WAV 인터뷰, 원시 DNA 데이터 파일을 함께 보관하기도 합니다. 자원봉사로 운영되는 족보 협회도 같은 자료를 공유 드라이브와 남는 USB 디스크에 보관합니다. RcloneView는 두 그룹 모두에게 이미 사용 중인 클라우드 스토리지로 아카이브를 복사하고 사본을 최신 상태로 유지하는 하나의 데스크톱 앱을 제공합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 모든 아카이브 위치를 한 창에서

대부분의 연구자는 자료를 여러 서비스에 흩어 두고 있습니다. 사촌들과 공유하는 Google Drive 폴더, 먼 곳의 기록 보관소에서 받은 Dropbox 링크, 원본 스캔이 담긴 외장 드라이브 등입니다. RcloneView에서는 각각을 리모트로 추가합니다. Google Drive, Dropbox, OneDrive, pCloud는 브라우저 로그인으로 연결됩니다. Backblaze B2는 Application Key ID와 키가 필요합니다. Synology NAS는 로컬 네트워크에서 자동 감지할 수 있습니다.

최대 네 개의 Explorer 패널을 나란히 열고 외장 드라이브의 스캔 폴더를 클라우드 리모트로 드래그하세요. 서로 다른 리모트 간 드래그는 복사로 동작하므로 원본은 그대로 남습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Adding a cloud storage remote in RcloneView for a genealogy archive" class="img-large img-center" />

## 대체 불가능한 스캔은 두 개 이상의 사본으로

다시 스캔해야 하는 인구조사 페이지는 번거로울 뿐입니다. 하지만 조부모님 목소리를 담은 녹음을 잃으면 영영 되찾을 수 없습니다. 1:N 동기화를 사용하면 하나의 소스 폴더를 한 작업으로 여러 대상에 보낼 수 있습니다. 예를 들어 원본 스캔 폴더를 pCloud와 Backblaze B2 버킷 모두에 보낼 수 있습니다. S3, Azure, Backblaze B2는 FREE License에서도 읽기/쓰기 모두 가능하게 연결됩니다.

첫 실행 전에 Dry Run으로 복사되고 삭제될 항목 목록을 확인하세요. 단방향 동기화는 대상만 변경하므로 드라이브의 원본 폴더는 전혀 건드리지 않습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Copying family history scans between cloud remotes in RcloneView" class="img-large img-center" />

## DNA 데이터와 생존 친족의 기록 보호하기

원시 DNA 파일과 생존해 있는 사람에 관한 기록은 19세기 혼인 기록부보다 더 신중하게 다뤄야 합니다. 클라우드 폴더를 **Crypt** 리모트로 감싸면 RcloneView가 업로드 전에 파일 이름, 폴더 이름, 내용을 암호화합니다. 제공업체에는 암호화된 데이터만 저장되며, RcloneView에서는 평소처럼 복호화된 상태로 탐색할 수 있습니다. Crypt 비밀번호는 안전한 곳에 보관하세요. 비밀번호가 없으면 파일을 복호화할 수 없습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare in RcloneView showing differences between archive copies" class="img-large img-center" />

## 사본 검증과 업데이트 자동화

Folder Compare로 로컬 원본과 각 클라우드 사본을 비교하세요. 필터로 한쪽에만 있거나 크기가 다른 파일을 표시할 수 있고, Copy right 또는 Copy left로 빠진 부분을 한 번에 메울 수 있습니다. PLUS License가 있으면 crontab 방식의 스케줄로 매주 일요일 밤에 동기화를 실행할 수 있으며, Job History에 각 실행의 상태, 크기, 파일 수가 기록됩니다.

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling a weekly family archive backup job in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. 외장 드라이브 또는 NAS와 pCloud, Backblaze B2 같은 클라우드 리모트 두 개를 추가합니다.
3. 원본 아카이브 폴더를 소스로, 두 클라우드를 대상으로 하는 동기화 작업을 만들고 Dry Run을 실행합니다.
4. DNA 파일과 생존 친족의 기록을 위한 Crypt 리모트를 추가하고 Folder Compare로 사본을 확인합니다.

검증된 오프사이트 사본 두 개가 있으면 여러분의 연구는 어떤 단일 드라이브보다 오래 살아남습니다.

---

**관련 가이드:**

- [박물관과 기록 보관소를 위한 클라우드 스토리지](https://rcloneview.com/support/blog/cloud-storage-museums-archives-rcloneview)
- [여러 대상으로의 일대다 동기화](https://rcloneview.com/support/blog/one-to-many-sync-multiple-destinations-rcloneview)
- [Crypt 리모트로 클라우드 백업 암호화하기](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)

<CloudSupportGrid />
