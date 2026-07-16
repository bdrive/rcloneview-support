---
slug: serve-remote-http-webdav-rcloneview
title: "HTTP 및 WebDAV로 리모트 서빙하기 — RcloneView로 클라우드 파일 공유하기"
authors:
  - tayson
description: "RcloneView를 사용해 클라우드 스토리지 리모트를 HTTP와 WebDAV로 서빙하여 브라우저, 파일 관리자, 다른 기기에서 파일을 공유하고 접근할 수 있습니다."
keywords:
  - rcloneview serve
  - serve http rclone
  - webdav cloud storage
  - serve remote files
  - rcloneview webdav
  - cloud file sharing
  - http file server
  - rclone serve webdav
  - share cloud files locally
  - webdav server rcloneview
tags:
  - feature
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# HTTP 및 WebDAV로 리모트 서빙하기 — RcloneView로 클라우드 파일 공유하기

> 클라우드 스토리지 리모트를 로컬 HTTP 또는 WebDAV 서버로 전환하여 브라우저, 파일 관리자, 미디어 플레이어에서 파일에 접근하세요.

Rclone의 serve 기능을 사용하면 클라우드 스토리지 리모트를 로컬 네트워크 서비스로 노출할 수 있습니다. RcloneView는 이 기능을 GUI를 통해 손쉽게 사용할 수 있도록 해주어, 몇 번의 클릭만으로 설정된 리모트에 대한 HTTP 또는 WebDAV 서버를 실행할 수 있습니다. 이를 통해 웹 브라우저에서 S3 버킷을 탐색하거나, 네이티브 지원이 없는 기기에 Google Drive를 마운트하거나, Wasabi의 미디어 파일을 비디오 플레이어로 바로 스트리밍하는 등 강력한 워크플로우가 가능해집니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## HTTP로 클라우드 스토리지 서빙하기

RcloneView의 HTTP serve 모드는 클라우드 스토리지 파일을 브라우저 친화적인 디렉터리 목록으로 보여주는 경량 웹 서버를 실행합니다. Google Drive, Dropbox, S3 버킷, 심지어 암호화된 crypt 리모트까지 어떤 리모트를 지정하든 `http://localhost:8080`과 같은 로컬 주소에서 탐색 가능한 HTML 인터페이스를 생성합니다.

이는 클라우드 스토리지 자격 증명에 대한 직접 접근 권한을 부여하지 않고도 같은 네트워크의 동료와 파일을 공유하고 싶을 때 특히 유용합니다. HTTP 서버를 시작하고 로컬 URL을 공유하면 동료들은 웹 브라우저를 통해 파일을 탐색하고 다운로드할 수 있습니다. 서버는 RcloneView가 열려 있는 동안에만 실행되며, 어떤 리모트나 하위 디렉터리를 노출할지는 직접 제어할 수 있습니다.

에어갭 환경이나 제한된 네트워크 환경에서 작업하는 팀에게 HTTP serve는 모든 워크스테이션에 클라우드 제공업체 클라이언트를 설치하지 않고도 클라우드에 저장된 참고 자료, 문서, 데이터셋에 접근할 수 있는 방법을 제공합니다. RcloneView를 실행하는 단일 머신이 접근 지점 역할을 합니다.

<img src="/support/images/en/blog/new-remote.png" alt="Configuring a cloud remote to serve via HTTP in RcloneView" class="img-large img-center" />

## WebDAV로 클라우드 스토리지 서빙하기

WebDAV(Web Distributed Authoring and Versioning)는 HTTP를 확장하여 네트워크를 통한 파일 읽기, 쓰기, 이름 변경, 삭제 등의 파일 관리 기능을 제공합니다. RcloneView에서 리모트를 WebDAV로 서빙하면, 클라우드 스토리지는 Windows, macOS, Linux, iOS, Android를 포함한 WebDAV를 지원하는 모든 기기에서 네트워크 드라이브로 접근할 수 있게 됩니다.

Windows에서는 파일 탐색기를 통해 WebDAV 공유를 네트워크 드라이브로 매핑할 수 있습니다. macOS에서는 Finder의 "서버에 연결" 대화 상자를 사용하세요. Linux에서는 Nautilus, Dolphin 같은 파일 관리자가 WebDAV를 기본으로 지원합니다. 즉, 전용 클라우드 클라이언트 앱이 없는 기기에서도 Google Drive, OneDrive, S3 스토리지가 일반 폴더처럼 나타납니다.

WebDAV serve는 또한 WebDAV를 스토리지 백엔드로 지원하는 애플리케이션과의 통합도 가능하게 합니다. 문서 편집기, 미디어 플레이어, 백업 도구는 클라우드별 설정 없이도 WebDAV 엔드포인트를 통해 클라우드 스토리지를 읽고 쓸 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Serving a cloud remote as WebDAV for network access via RcloneView" class="img-large img-center" />

## 인증 및 보안

기본적으로 serve HTTP와 WebDAV는 인증 없이 실행되므로, 신뢰할 수 있는 네트워크에서만 사용하는 것이 적합합니다. 민감한 데이터나 네트워크 노출이 관련된 시나리오에서는 RcloneView가 사용자 이름과 비밀번호를 사용한 HTTP 기본 인증 설정을 지원합니다. 이를 통해 권한이 있는 사용자만 서빙된 파일에 접근할 수 있습니다.

추가 보안을 위해 서버를 `127.0.0.1`(로컬호스트 전용)에 바인딩하여 네트워크상의 다른 머신에서 접근하지 못하도록 하세요. 원격 접근이 필요한 경우, 서브 엔드포인트를 인터넷에 직접 노출하는 대신 SSH 터널이나 VPN과 결합하세요. RcloneView의 serve 설정 패널에서 서버를 시작하기 전에 바인드 주소, 포트, 인증 자격 증명을 설정할 수 있습니다.

암호화된 crypt 리모트를 서빙할 때는 파일에 접근하는 즉시 실시간으로 복호화됩니다. 즉, 암호화된 데이터를 클라우드에 저장하면서도 복호화된 형태로 로컬에서 서빙할 수 있습니다 — 민감한 아카이브를 디스크에 영구적으로 복호화하지 않고 접근할 때 유용합니다.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring active serve connections and file transfers in RcloneView" class="img-large img-center" />

## 실용적인 워크플로우

**미디어 스트리밍:** 비디오나 오디오 파일이 담긴 클라우드 리모트를 HTTP로 서빙한 다음, 해당 파일 URL을 VLC 등의 미디어 플레이어에서 엽니다. 전체 미디어 라이브러리를 로컬 스토리지에 다운로드할 필요가 없습니다.

**기기 간 파일 접근:** 홈 서버나 항상 켜져 있는 워크스테이션에서 RcloneView를 실행하고 클라우드 스토리지를 WebDAV로 서빙하세요. 같은 네트워크의 태블릿, 휴대폰, 다른 컴퓨터에서 연결할 수 있습니다.

**개발 및 테스트:** 개발 중에 S3 버킷을 로컬로 서빙하여, 스테이징 환경에 배포하지 않고도 웹 URL에서 파일을 사용하는 애플리케이션을 테스트할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Browsing served cloud storage files through RcloneView interface" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 서빙하려는 클라우드 스토리지 리모트(S3, Google Drive, Dropbox 등)를 설정하세요.
3. serve 패널을 열고, HTTP 또는 WebDAV 모드를 선택한 후 포트와 선택적 인증을 설정하세요.
4. 서버를 시작하고 브라우저나 파일 관리자에서 로컬 주소로 클라우드 파일에 접근하세요.

RcloneView의 serve 기능은 클라우드 스토리지를 네트워크상의 모든 기기에서 즉시 접근 가능한 로컬 리소스로 전환시켜 줍니다.

---

**관련 가이드:**

- [Bisync 양방향 동기화 — RcloneView에서의 양방향 클라우드 동기화](https://rcloneview.com/support/blog/bisync-bidirectional-sync-rcloneview)
- [RcloneView로 클라우드 동기화를 위한 WebDAV 서버 연결하기](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [RcloneView로 SFTP와 SMB를 로컬 드라이브로 마운트하기](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)

<CloudSupportGrid />
