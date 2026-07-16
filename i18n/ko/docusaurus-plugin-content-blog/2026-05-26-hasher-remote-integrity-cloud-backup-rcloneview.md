---
slug: hasher-remote-integrity-cloud-backup-rcloneview
title: "Hasher 리모트 — RcloneView에서 모든 클라우드 스토리지에 파일 무결성 체크섬 추가하기"
authors:
  - robin
description: "RcloneView의 Hasher 리모트가 네이티브 해시 지원이 없는 클라우드 백엔드에 체크섬 검증을 추가하여 모든 백업을 조용한 손상으로부터 보호하는 방법을 알아봅니다."
keywords:
  - RcloneView Hasher 리모트
  - 클라우드 파일 무결성 검증
  - checksum cloud backup rcloneview
  - rclone hasher remote guide
  - verify cloud transfer integrity
  - cloud backup checksum validation
  - detect file corruption cloud sync
  - cloud storage data integrity rcloneview
  - hash verification cloud backup
  - rclone virtual remote hasher
tags:
  - feature
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Hasher 리모트 — RcloneView에서 모든 클라우드 스토리지에 파일 무결성 체크섬 추가하기

> Hasher 가상 리모트는 네이티브로 체크섬을 지원하지 않는 클라우드 백엔드에 조용히 체크섬 추적 기능을 추가하여, 모든 동기화를 검증되고 손상에 강한 전송으로 바꿔줍니다.

모든 클라우드 스토리지 제공업체가 파일 체크섬을 계산하고 저장하는 것은 아닙니다. 비교 기준으로 파일 크기와 수정 시간만 사용하는 제공업체는 조용한 데이터 손상을 놓칠 수 있습니다 — 파일이 완전히 전송되었지만 비트가 뒤바뀐 상태로 도착하는 경우가 그렇습니다. 아카이브 관리자, 시스템 관리자, 그리고 데이터 무결성 요구 사항이 있는 기업에게 이는 중요한 공백입니다. RcloneView는 rclone의 Hasher 리모트를 지원합니다. 이는 기존의 모든 클라우드 백엔드 위에 파일 저장 및 조회 방식을 변경하지 않고도 MD5, SHA-1 또는 기타 해시 추적 기능을 추가하는 가상 리모트 래퍼입니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hasher 리모트란 무엇이며 왜 중요한가

Hasher 리모트는 rclone의 가상 리모트 유형 중 하나로, 기존 리모트 앞에 위치하여 그 기능을 향상시키는 래퍼입니다. 구체적으로, Hasher 리모트는 파일과 함께 체크섬을 저장하고 해시 값을 캐싱하여, 이후 동기화 작업이 크기만으로 비교하는 대신 내용으로 파일을 비교할 수 있게 합니다. 이는 네이티브 해시 API를 제공하지 않는 클라우드 제공업체로 동기화할 때, 또는 파일 크기를 변경하지 않는 비트 수준의 손상을 감지해야 할 때 가장 중요합니다.

실제 예를 들어보겠습니다. 4K 영상 데일리를 WebDAV 기반 스토리지 서버에 아카이빙하는 미디어 제작사는 서버로부터 네이티브 해시 지원을 받지 못합니다. 체크섬이 없으면 rclone은 크기와 타임스탬프로 파일을 비교하지만, 크기가 동일한 미묘하게 손상된 파일은 변경되지 않은 것처럼 보일 수 있습니다. WebDAV 리모트를 Hasher 리모트로 감싸면 모든 동기화에 해시 비교가 추가되어, 손상된 파일이 정상 사본을 조용히 덮어쓰기 전에 이를 검출하고 검토를 위해 표시합니다.

<img src="/support/images/en/blog/new-remote.png" alt="Creating a Hasher virtual remote in RcloneView's New Remote wizard" class="img-large img-center" />

## RcloneView에서 Hasher 리모트 설정하기

RcloneView에서 Hasher와 같은 가상 리모트는 다른 클라우드 제공업체와 동일한 새 리모트 마법사를 통해 생성됩니다. Remote 탭에서 New Remote를 클릭한 다음 가상 리모트 유형까지 스크롤하면, Crypt, Union, Combine 등과 함께 나열된 Hasher를 찾을 수 있습니다. 감싸고자 하는 기본 리모트(예: WebDAV 또는 FTP 서버)를 선택하고, 활성화할 해시 알고리즘을 선택한 다음 저장합니다. Hasher 리모트는 백엔드를 투명하게 감쌉니다.

저장이 완료되면 Hasher 리모트는 Remote Manager에 다른 리모트와 마찬가지로 나타납니다. Explorer 패널에서 열어 파일을 탐색하고 이에 대해 동기화 작업을 실행할 수 있습니다. 해시 데이터베이스는 자동으로 유지됩니다 — RcloneView와 rclone이 관리 작업을 처리하며, 사용자는 기본 스토리지와 마찬가지로 Hasher 리모트와 상호작용하면 됩니다. 별도의 워크플로 변경은 필요하지 않습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Running a checksum-verified sync transfer using the Hasher remote in RcloneView" class="img-large img-center" />

## 무결성 검증 전송 실행하기

Hasher 리모트를 설정했다면, RcloneView의 동기화 작업 마법사 2단계(고급 설정)에서 **Enable checksum** 옵션을 활성화합니다. 이렇게 하면 rclone이 크기와 타임스탬프만이 아니라 캐시된 해시 값을 사용하여 파일을 비교하게 됩니다. 첫 실행 시 해시가 계산되어 저장됩니다. 이후 실행에서는 저장된 해시와 비교하여 변경되지 않은 파일에 대한 재해싱을 건너뛰므로, 대용량 아카이브에서도 동기화 속도를 빠르게 유지할 수 있습니다.

Dry Run 기능은 Hasher 리모트와 매끄럽게 작동합니다. 대용량 아카이브 동기화를 실행하기 전에, 해시 비교를 기준으로 어떤 파일이 복사, 수정 또는 건너뛰기될지 미리 확인하기 위해 dry run을 실행하세요. 이는 몇 달치 아카이브 영상을 덮어쓰기 전에 매우 유용하며, 확인하기 전까지는 파일이 이동되지 않으므로 비용이 전혀 들지 않습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing files with checksum verification enabled in RcloneView" class="img-large img-center" />

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing integrity-verified backup runs completed in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**합니다.
2. Remote 탭에서 New Remote를 클릭하고 가상 리모트 섹션에서 Hasher를 선택합니다.
3. 기존 클라우드 리모트 — WebDAV, FTP 또는 네이티브 체크섬이 없는 모든 백엔드 — 를 Hasher 리모트로 감쌉니다.
4. 동기화 작업을 생성하고, 2단계 고급 설정에서 체크섬 비교를 활성화한 다음 첫 무결성 검증 백업을 실행합니다.

아카이브를 조용한 손상으로부터 보호하는 데는 단 몇 분의 설정만 필요하며, Hasher 리모트는 RcloneView가 지원하는 모든 백엔드에 이러한 보호 기능을 제공합니다.

---

**관련 가이드:**

- [RcloneView로 클라우드 파일 무결성 확인 및 검증하기](https://rcloneview.com/support/blog/check-verify-cloud-file-integrity-rcloneview)
- [RcloneView의 Crypt 리모트로 클라우드 백업 암호화하기](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [가상 리모트: RcloneView의 Combine, Union, Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)

<CloudSupportGrid />
