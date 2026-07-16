---
slug: mount-sftp-smb-local-drive-rcloneview
title: "RcloneView로 SFTP·SMB 스토리지를 로컬 드라이브로 마운트하기 — 셀프 호스팅 클라우드 통합"
authors:
  - tayson
description: RcloneView의 GUI 마운트, VFS 캐시, 통합 멀티 클라우드 대시보드로 어떤 SFTP·SMB 서버든 Windows, macOS, Linux에서 완벽한 로컬 드라이브로 만들어보세요.
keywords:
  - rcloneview
  - rclone mount gui
  - mount smb windows
  - mount sftp mac
  - nas remote access
  - self hosted cloud
  - vfs cache
  - winfsp
  - macfuse
  - mount network drive
tags:
  - mount
  - sftp
  - smb
  - nas
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 SFTP·SMB 스토리지를 로컬 드라이브로 마운트하기 — 셀프 호스팅 클라우드 통합

> NAS, 홈 서버, 사무실 파일 서버를 Google Drive처럼 동작하게 만드세요: SFTP 또는 SMB를 캐싱, 버퍼링, GUI를 갖춘 실제 드라이브 문자나 `/Volumes` 경로로 마운트할 수 있습니다.

SFTP와 SMB는 셀프 호스팅 스토리지의 근간입니다—Synology/QNAP NAS, 홈 서버, VPS, 기업 파일 서버가 모두 이를 사용합니다. 하지만 Windows, macOS, Linux 전반에서 이를 안정적으로 마운트하려면 OS별 특이사항, 취약한 인증 방식, 캐싱 제어 부재, 클라우드와의 통합 뷰 부재 등의 문제가 따라오곤 합니다.

RcloneView는 이 문제를 해결합니다. `rclone mount`를 친숙한 데스크톱 앱으로 감싸서 SFTP/SMB 공유가 최신 클라우드 드라이브처럼 동작하게 해줍니다—VFS 캐시, 썸네일 스트리밍, 버퍼링 조정, 자동화까지 완벽히 지원합니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## SFTP와 SMB의 차이 이해하기

| 특징    | SFTP                            | SMB                                   |
| ---------- | ------------------------------- | ------------------------------------- |
| 프로토콜   | SSH 기반                       | Windows 네트워크 공유                 |
| 최적 용도   | 원격 서버, WAN 상의 보안 접속 | LAN 파일 공유, 로컬 네트워크       |
| 속도      | 보통 (암호화)            | LAN에서 매우 빠름                   |
| 보안   | 기본적으로 강력함               | 버전/정책에 따라 다름             |
| OS 지원 | 범용적                       | Windows/macOS에서 최적, Linux에서도 안정적 |

어느 것을 선택해야 할까요?

- **SFTP**: 인터넷 상의 VPS, 제로 트러스트 접근, 포트 포워딩된 홈랩, 설정 파일을 가져오는 개발자.
- **SMB**: 사무실 LAN, 고처리량 NAS, 팀용 공유 드라이브, 네트워크 내 저지연 미디어 편집.

RcloneView는 두 프로토콜 모두를 지원하며, Google Drive, S3, Dropbox, OneDrive 등도 동일한 대시보드에서 관리할 수 있습니다.

## SFTP/SMB 마운트에 RcloneView를 써야 하는 이유

- **CLI 불필요**: 모든 `rclone mount` 플래그가 GUI에서 자동 생성됩니다. 리모트 설정은 [리모트 관리자](/howto/rcloneview-basic/remote-manager)를, 안내형 마운트는 [클라우드 스토리지를 로컬 드라이브로 마운트하기](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)를 참고하세요.
- **크로스 플랫폼**: Windows(WinFsp), macOS(macFUSE), Linux(FUSE)에서 일관된 UI를 제공합니다.
- **진짜 로컬 마운트**: Windows에서는 드라이브 문자, macOS에서는 `/Volumes/Server`, Linux에서는 표준 마운트 지점을 사용합니다.
- **성능 준비 완료**: VFS 캐시, 썸네일 스트리밍, 버퍼링 제어, 미리 읽기(read-ahead) 조정이 마운트 대화상자에 모두 노출됩니다.
- **통합 제어**: SFTP/SMB를 클라우드 스토리지와 함께 관리하고, 재마운트를 예약하고, 처리량을 한곳에서 모니터링할 수 있습니다(자세한 내용은 [작업 예약 및 실행](/howto/rcloneview-advanced/job-scheduling-and-execution)과 [실시간 전송 모니터링](/howto/rcloneview-basic/real-time-transfer-monitoring) 참고).

## 단계별 안내 — RcloneView로 SFTP 또는 SMB 마운트하기

### 1) 리모트 추가 (SFTP 또는 SMB)

- **리모트 관리자**를 열고 **리모트 추가** → **SFTP** 또는 **SMB**를 선택합니다.
- **호스트/IP**와 **포트**를 입력합니다.
- SFTP의 경우 **사용자명/비밀번호** 또는 **SSH 키**로 인증합니다. SMB의 경우 필요하다면 도메인/사용자를 설정합니다.
- 리모트를 저장합니다. [일반 설정](/howto/rcloneview-basic/general-settings)에서 설정 비밀번호를 활성화하는 것도 고려해보세요.
  <img src="/support/images/en/blog/add-sftp-remote.png" alt="Add SFTP Remote" class="img-large img-center" />

### 2) 마운트 작업 생성

- **마운트 관리자** 또는 탐색기 툴바에서 **마운트**를 클릭합니다.
- SFTP/SMB 리모트를 선택하고 대상을 지정합니다:
  - Windows → `X:` (또는 사용 가능한 드라이브 문자)
  - macOS → `/Volumes/ServerName`
  - Linux → `/mnt/server` 또는 원하는 경로

### 3) VFS 캐시 및 버퍼 설정

- **캐시 모드**: 부드러운 탐색과 썸네일 스트리밍을 위해 `Full`(사진/Plex에 이상적).
- **캐시 디렉터리**: SSD 폴더를 지정합니다.
- **미리 읽기(Read-ahead)**: 미디어 스크러빙에는 4–8MB, 4K 영상이라면 더 늘리세요.
- **쓰기 지연/버퍼링**: 대용량 순차 쓰기에 활성화하고, 링크를 공유하는 경우 대역폭을 제한하세요.

### 4) 마운트 및 테스트

- **마운트**를 클릭하고 Finder/탐색기/파일 앱을 엽니다.
- 폴더를 탐색하고 이미지 미리보기와 동영상 스트리밍으로 캐싱이 정상 작동하는지 확인합니다.
- 재부팅 후에도 자동 재연결되도록 마운트 항목을 저장해두세요(**자동 마운트** 토글).

<img src="/support/images/en/blog/mount-sftp.png" alt="Mount SFTP/SMB from RcloneView Explorer" class="img-large img-center" />

## 활용 사례

- **NAS 원격 접근**: 어떤 OS에서든 NAS를 클라우드 드라이브처럼 다룰 수 있습니다.
- **로컬 ↔ 클라우드 ↔ 셀프 호스팅**: SFTP/SMB와 Google Drive/S3/Dropbox 간에 하나의 UI에서 파일을 이동합니다.
- **사무실 공유 드라이브 통합**: 디자인 팀을 위해 캐싱된 썸네일과 함께 부서별 공유를 매핑합니다.
- **미디어 편집**: VFS 캐싱으로 재다운로드 없이 NAS의 영상/사진을 바로 편집합니다.
- **멀티 서버 허브**: 여러 SFTP/SMB 서버를 나란히 마운트하고 드래그 앤 드롭으로 파일을 이동합니다.

## 성능 팁

- 미디어 위주 작업(Plex/사진)에는 **캐시 모드: Full**을 설정하세요.
- **NVMe/SSD 캐시 디렉터리**를 사용하면 썸네일 로딩과 스크러빙 속도가 향상됩니다.
- 대용량 순차 읽기/쓰기에는 **미리 읽기**와 **버퍼 크기**를 늘리세요.
- 처리량이 중요하다면 SMB는 **LAN**을 우선하고, WAN 상의 SFTP는 안정성을 위해 SSH 키를 사용하세요.
- [실시간 전송 모니터링](/howto/rcloneview-basic/real-time-transfer-monitoring)에서 전송 상태를 확인하고, [작업 예약 및 실행](/howto/rcloneview-advanced/job-scheduling-and-execution)으로 재마운트를 예약하세요.

## 결론 — 셀프 호스팅과 멀티 클라우드의 만남

SFTP와 SMB가 더 이상 구식 네트워크 드라이브처럼 느껴질 필요는 없습니다. RcloneView를 사용하면 클라우드 같은 마운트, 스마트 캐싱, 그리고 스크립트 없이 NAS, VPS, 퍼블릭 클라우드를 아우르는 통합 대시보드를 얻을 수 있습니다. 서버를 한 번만 추가하고, 드라이브 문자나 `/Volumes` 경로를 선택한 후, RcloneView가 마운트를 계속 유지하도록 맡기고 파일 작업에만 집중하세요.

<CloudSupportGrid />
