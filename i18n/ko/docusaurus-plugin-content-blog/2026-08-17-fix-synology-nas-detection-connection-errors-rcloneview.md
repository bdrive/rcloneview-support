---
slug: fix-synology-nas-detection-connection-errors-rcloneview
title: "Synology NAS 감지 및 연결 오류 해결하기 — RcloneView로 안정적인 백업"
authors:
  - casey
description: "RcloneView에서 Synology NAS 자동 감지 및 연결 실패를 해결하고, 로컬 네트워크 검색 및 수동 설정 문제를 수정하는 방법을 알아보세요."
keywords:
  - Synology NAS RcloneView
  - Synology 자동 감지 오류
  - RcloneView NAS 연결
  - NAS 감지 안 됨 해결
  - Synology 클라우드 백업
  - NAS 로컬 네트워크 스토리지
  - RcloneView 문제 해결
  - Synology SMB 마운트
  - 로컬 스토리지 동기화
tags:
  - RcloneView
  - troubleshooting
  - synology
  - nas
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synology NAS 감지 및 연결 오류 해결하기 — RcloneView로 안정적인 백업

> RcloneView가 로컬 네트워크에서 Synology를 찾지 못할 때, 해결책은 보통 고장난 NAS가 아니라 설정 문제입니다.

RcloneView는 로컬 네트워크에서 Synology NAS를 자동 감지할 수 있지만, 자동 감지는 NAS가 켜져 있는지 여부뿐 아니라 네트워크 가시성에도 좌우됩니다. 매일 밤 2TB의 RAW 파일을 백업하는 사진 스튜디오는 탐색기에 조용히 나타나지 않게 된 NAS 때문에 백업 시간대 전체를 잃을 수 있습니다. 이 가이드는 Synology 감지 및 연결 실패의 일반적인 원인과 RcloneView에서 각각을 해결하는 방법을 다룹니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 자동 감지가 실패하는 이유

RcloneView의 Synology 자동 감지 설정은 기기가 연결된 로컬 네트워크 세그먼트를 검색합니다. NAS가 VLAN, 다른 서브넷, 또는 VPN 터널 뒤에 있으면 브로드캐스트가 도달하지 못해 NAS가 자동으로 나타나지 않습니다 — 이는 네트워크 토폴로지의 한계이지 RcloneView의 버그가 아닙니다. 먼저 설정 자체가 켜져 있는지 확인하세요: Settings 탭 > General > Auto-detect Synology NAS가 활성화되어 있어야 하며, 이는 토글 방식이라 새로 설치한 후 꺼진 채로 남기 쉽습니다.

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="RcloneView 설정의 Synology NAS 자동 감지 토글" class="img-large img-center" />

토글이 켜져 있는데도 감지가 계속 실패하면, 클라이언트 기기와 NAS가 동일한 물리적 또는 가상 네트워크 세그먼트에 있는지 확인하세요. Wi-Fi 액세스 포인트에서 클라이언트 격리(client isolation)가 활성화된 기업 네트워크는 두 기기가 모두 "연결됨"으로 표시되더라도 기기 간 검색을 완전히 차단합니다.

## 자동 감지가 NAS에 닿지 못할 때 수동으로 연결하기

원격 사무실, 세그먼트화된 네트워크, 또는 다른 VLAN에 있는 NAS 등 자동 감지가 불가능한 경우, 검색 문제를 해결하려 하지 말고 수동으로 연결하세요. Remote Manager에서 IP 주소나 호스트명을 직접 사용하여 Synology를 SFTP 또는 SMB/CIFS 리모트로 추가하면, 로컬 네트워크 검색 과정을 완전히 건너뛸 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="Synology NAS를 SFTP 리모트로 수동 추가하기" class="img-large img-center" />

이 수동 방식은 가장 흔한 부차적 문제도 해결합니다: 감지 실패처럼 보이지만 실제로는 인증 문제인 연결 시간 초과입니다. Synology 자체 제어판에서 NAS의 SSH 또는 SMB 서비스가 활성화되어 있는지 다시 확인하세요 — RcloneView는 NAS 자체가 실행하지 않는 서비스에 연결할 수 없습니다.

## 연결 확인 및 백업 자동화하기

리모트가 추가되면, 저장하기 전에 Test Connection을 사용하여 자격 증명과 접근 가능성을 한 번에 확인하세요. 전송 도중 실패를 발견하는 대신 말입니다. RcloneView는 하나의 창에서 Windows, macOS, Linux 전반에 걸쳐 90개 이상의 제공업체를 마운트하고 동기화하므로, Synology가 연결되면 별도의 앱 없이 클라우드 리모트와 같은 탐색기에 자리하게 됩니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="완료된 Synology 백업 실행을 보여주는 Job History" class="img-large img-center" />

그 후, NAS를 클라우드 대상으로 미러링하는 동기화 작업을 만들고 첫 실행 후 Job History를 확인하세요 — 파일이 0개 전송된 채로 완료된 작업은 대개 소스 경로가 잘못되었다는 의미이지, 연결이 끊어졌다는 뜻이 아닙니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Settings에서 Auto-detect Synology NAS를 활성화하거나, NAS의 IP 주소를 사용하여 SFTP/SMB로 수동 연결하세요.
3. 리모트를 저장하기 전에 Test Connection을 실행하세요.
4. 클라우드 대상으로 동기화 작업을 설정하고 Job History에서 전송을 확인하세요.

안정적으로 연결되는 NAS는 5분간의 네트워크 문제 해결 시간을 들일 가치가 있습니다 — 자동화된 백업은 실제로 실행되어야만 여러분을 보호합니다.

---

**관련 가이드:**

- [데이터 손실 없이 Synology를 Google Drive와 동기화하기](https://rcloneview.com/support/blog/sync-synology-google-drive-without-data-loss)
- [RcloneView로 Synology를 클라우드에 백업하기](https://rcloneview.com/support/blog/synology-to-cloud-backup-with-rcloneview)
- [SMB/Windows 네트워크 공유 마운트 오류 해결하기 — RcloneView](https://rcloneview.com/support/blog/fix-smb-windows-network-share-mount-errors-rcloneview)

<CloudSupportGrid />
