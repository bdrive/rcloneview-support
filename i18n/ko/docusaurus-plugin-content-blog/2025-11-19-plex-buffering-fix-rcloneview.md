---
slug: plex-buffering-fix-rcloneview
title: "RcloneView로 Plex 버퍼링 빠르게 해결하기 — 마운트, VFS 캐시, 네트워크 제한 튜닝"
authors:
  - tayson
description: RcloneView의 마운트 관리자, VFS 캐시 프리셋, 성능 진단 기능을 활용해 CLI 플래그를 찾아다니는 대신 Google Drive, Dropbox, S3 등에서 Plex 스트리밍 시 발생하는 버퍼링을 해결하세요.
keywords:
  - rcloneview
  - plex buffering fix
  - plex vfs cache
  - rclone plex mount
  - plex stuttering cloud
  - google drive plex
  - plex 4k streaming
tags:
  - RcloneView
  - plex
  - performance
  - troubleshooting
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 Plex 버퍼링 빠르게 해결하기 — 마운트, VFS 캐시, 네트워크 제한 튜닝

> Plex는 그 뒤에 있는 스토리지만큼만 매끄럽게 작동합니다. RcloneView를 사용하면 Google Drive, Dropbox, Wasabi, S3에서 4K 라이브러리를 끊김 없이 스트리밍하는 데 필요한 모든 설정을 확인하고, 조정하고, 모니터링할 수 있습니다.

Plex 버퍼링에는 느린 디스크, 부족한 VFS 캐시, 공격적인 스캐너, Google Drive 속도 제한 등 여러 원인이 있습니다. RcloneView는 rclone 위에 GUI를 얹어 플래그를 외우지 않고도 클라우드를 마운트하고, 캐시 모드를 조정하고, 실시간 처리량을 확인할 수 있게 해줍니다. 이 글은 Plex 관리자가 끊김 현상을 없애고 밤샘 시청을 되찾을 수 있도록 체크리스트를 제공합니다.

<!-- truncate -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

## 빠른 진단: Plex 문제인가, 네트워크 문제인가, 마운트 문제인가?

| 증상 | 가능성 있는 원인 | RcloneView에서 확인할 사항 |
| --- | --- | --- |
| 30~60초 후 버퍼링 발생 | 캐시가 파일 전체를 보관하지 못하거나 캐시가 느린 디스크에 있음 | 마운트 세부정보 → 캐시 모드(**Full**)와 SSD에서 충분히 큰 **캐시 최대 크기** 확인 |
| 챕터 건너뛸 때 버퍼링 발생 | 캐시된 데이터가 너무 빨리 만료됨 | 고급 마운트 옵션 → **캐시 최대 유효기간**을 더 길게, **디렉터리 캐시 시간**(5~15분) 설정 |
| 로컬에서는 잘 재생되지만 원격에서는 멈춤 | 네트워크/ISP 병목 | 마운트가 빠른 스토리지에 있는지 확인; LAN/ISP 점검. 마운트 관리자로 마운트 유지 여부 확인 |
| SD는 재생되지만 4K는 실패 | 대용량 파일에 비해 캐시 크기가 너무 작거나 마운트 경로가 변경됨 | 고급 옵션 → **캐시 최대 크기**를 늘리고 Plex를 위한 고정 **Target** 또는 **로컬 경로로 마운트** 유지 |
| 라이브러리 스캔 시 Plex가 멈춤 | 디렉터리 조회 반복 | 고급 옵션 → **디렉터리 캐시 시간**(예: 5~15분); 스캔은 한가한 시간대에 예약 |

마운트가 병목 지점이라면 해결책은 RcloneView에 있습니다.

## 1단계 — 올바른 기본값으로 클라우드 마운트하기

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

1. **Explorer → + New Remote**에서 클라우드 리모트(Google Drive, Dropbox, Wasabi, S3 등)를 추가합니다. 다시 확인이 필요하다면 [/support/howto/remote-storage-connection-settings/add-oath-online-login](/howto/remote-storage-connection-settings/add-oath-online-login)를 참고하세요.
2. **마운트 관리자 → 마운트 추가**를 엽니다.
3. 미디어가 있는 리모트 폴더(`gdrive-media:Movies`)를 선택하고 Plex가 볼 수 있는 마운트 경로(Windows의 드라이브 문자 또는 macOS/Linux의 `/Volumes/CloudMovies`)를 설정합니다.
4. Plex가 고정 드라이브 문자를 필요로 하지 않는 한 **Target**은 `Auto`로 둡니다. 고정하려면 드라이브 문자를 선택(Windows)하거나 **로컬 경로로 마운트**를 활성화하고 영구 폴더를 지정합니다(Linux/macOS).
5. **Advanced**에서 Windows는 **마운트 유형**을 `cmount`로 유지하고, Linux/macOS에서 이미 NFS를 사용 중인 경우에만 `nfsmount`를 사용합니다. Windows에서는 Plex 서비스가 마운트를 인식하도록 **네트워크 드라이브**를 체크합니다. Plex가 다른 사용자로 실행되는 Linux에서는 **다른 사용자 허용**을 사용합니다. 마운트를 통해 파일이나 자막을 추가한다면 **읽기 전용**은 꺼둡니다.
6. **캐시 모드**에서는 Plex에 가장 적합한 **Full**을 선택합니다. 같은 대화상자에서 **캐시 최대 크기**, **캐시 최대 유효기간**, **디렉터리 캐시 시간**을 설정해 대용량 미디어를 계속 캐시된 상태로 유지합니다.
7. 서버가 재부팅되어도 마운트가 복원되도록 **실행 시 자동 시작**을 활성화합니다.

  <img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />


### Plex 사용자를 위한 고급 마운트 옵션 해설

아래 필드명은 RcloneView의 마운트 대화상자와 일치합니다. 기본값은 [클라우드 스토리지를 로컬 드라이브로 마운트하기](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive) 가이드를 따르며, "Plex 친화적" 열은 스트리밍을 위해 어떻게 설정해야 하는지 설명합니다.

| RcloneView 필드 | 제어 항목 | Plex 친화적 설정 |
| --- | --- | --- |
| Volume name | OS/파일 관리자에 표시되는 라벨 | 선택 사항; `Plex Cloud`처럼 명확한 이름 사용 |
| Mount type | 백엔드 엔진 (Windows 기본값 `cmount`, 주로 Linux/macOS용 `nfsmount`) | 이미 NFS를 사용 중이 아니라면 `cmount` 유지; 변경해도 버퍼링이 개선되는 경우는 드묾 |
| Target | 드라이브 문자 또는 자동 할당 마운트 대상 | `Auto`로 충분; Plex가 서비스로 실행된다면 고정 문자/경로 지정 |
| Mount to local path | 사용자 지정 마운트 위치 | Plex가 안정적인 Unix 경로(예: `/mnt/plex-media`)를 기대할 때 사용 |
| Network drive | Windows에서 마운트를 네트워크 드라이브로 표시 | Plex 서비스 계정이 마운트를 인식하도록 활성화 |
| Read only | 리모트로의 쓰기를 차단 | 자막 다운로드나 메타데이터 수정을 허용하려면 꺼둠; 재생 전용 마운트에만 활성화 |
| Allow other | 다른 OS 사용자가 마운트에 접근하도록 허용(Linux) | Plex가 로그인 계정과 다른 사용자로 실행된다면 활성화 |
| Cache mode | VFS 캐시 동작: `off`, `minimal`, `writes`, `full`(기본값 `writes`) | Plex에서는 **Full**을 사용해 파일 전체를 캐시하고 탐색 속도를 높임 |
| Cache max size | 최대 VFS 캐시 크기(바이트). `-1`은 무제한 | SSD 공간 보호를 위해 명시적 크기(예: 약 75GB의 경우 `75000000000`) 설정 |
| Cache max age | 캐시된 데이터가 유효하게 유지되는 시간(나노초) | 3600000000000 = 1시간, 21600000000000 = 6시간. 4K 파일을 계속 캐시된 상태로 유지하려면 6~12시간부터 시작 |
| Dir cache time | 디렉터리 목록이 캐시로 유지되는 시간(나노초) | 300000000000 = 5분, 900000000000 = 15분. 스캔 빈도에 맞춰 조정(일반적으로 5~15분) |

## 2단계 — Plex를 위해 VFS 캐시 크기와 신선도 튜닝하기

RcloneView는 Plex 재생에 직접적인 영향을 미치는 캐시 설정을 제공합니다. 시간 값은 **나노초** 단위로 입력합니다.

- **Cache mode**: Plex에서는 파일 전체를 캐시에 유지해 매끄러운 탐색이 가능하도록 **Full**을 사용합니다. 마운트를 통해 자막/메타데이터도 함께 기록한다면 Full 모드로도 잘 동작하며, 쓰기가 허용되도록 **Read only**는 체크 해제 상태로 둡니다.
- **Cache max size**: 동시 스트림을 위한 SSD 공간을 충분히 확보합니다(예: 활성 4K 사용자 1명당 약 75~100GB). 예시: `107374182400` ≈ 100GB.
- **Cache max age**: 캐시된 미디어를 몇 시간 동안 유지해 다시 보던 에피소드로 돌아갈 때 재다운로드를 건너뜁니다. 예시: `21600000000000` = 6시간; `43200000000000` = 12시간.
- **Dir cache time**: Plex 스캔 중 디렉터리 변동을 줄입니다. 예시: `300000000000` = 5분; `900000000000` = 15분. 콘텐츠를 추가한 후에는 수동으로 새로고침합니다.
- RcloneView는 `VFS read ahead`, `buffer-size`, `--tpslimit` 옵션을 노출하지 않으므로, Plex 성능을 가장 크게 개선하려면 위의 캐시 필드에 집중하세요.

## 3단계 — RcloneView 처리량을 Plex 요구사항에 맞추기

- Plex 라이브러리가 재부팅 후에도 마운트 경로를 잃지 않도록 **고정 Target 또는 로컬 경로로 마운트**를 유지합니다.
- Plex 서비스가 시작되기 전에 마운트가 복원되도록 **실행 시 자동 시작**을 사용합니다.
- Windows에서는 **네트워크 드라이브**를, Linux에서는 **다른 사용자 허용**을 활성화해 Plex 서비스 계정이 마운트를 인식하도록 합니다.
- **마운트 관리자** 상태를 확인합니다. 마운트가 "마운트 해제됨"으로 바뀌면 라이브러리를 다시 구성하는 대신 여기 또는 시스템 트레이 메뉴에서 다시 마운트합니다.
- 여러 라이브러리를 운영한다면 별도의 마운트(예: Movies 대 Shows)를 생성하고 마운트별로 **캐시 최대 크기**를 설정해 한 라이브러리가 다른 라이브러리의 캐시를 밀어내지 않도록 합니다.

## 4단계 — 네트워크 및 OS 설정 강화하기

- **로컬 네트워크**: Plex 서버를 이더넷으로 연결하고, 우선 대역폭을 받도록 QoS를 설정합니다.
- **Windows**: 고정 드라이브 문자로 마운트하고 Plex 서비스가 마운트를 소유한 사용자와 동일한 계정으로 실행되는지 확인합니다.
- **Linux/macOS**: RcloneView의 자동 마운트가 정상 작동하는지 확인한 후에만 `/etc/fstab`이나 launch agent를 사용하세요. 수동 스크립트보다 일관성이 더 중요합니다.
- **대역폭 제한**: **Settings → Transfers**에서 LAN 스트리밍은 대역폭을 제한하지 않되, 다른 작업이 같은 회선을 공유한다면 상한선(예: 300Mbps)을 설정합니다.


## 문제 해결 치트시트

| 문제 | 해결책 |
| --- | --- |
| 일정 시간 유휴 후 버퍼링 발생 | **캐시 최대 유효기간**을 늘리고(예: 6~12시간) 캐시된 청크가 유지되도록 **Cache mode**를 Full로 유지 |
| 여러 사용자가 동시에 스트리밍할 때 버퍼링 발생 | 동시 4K 파일이 들어갈 수 있도록 **캐시 최대 크기**를 늘리고 SSD 여유 공간 확보 |
| 밤사이 드라이브가 마운트 해제됨 | **실행 시 자동 시작**을 활성화하고 고정 **Target** 또는 **로컬 경로로 마운트** 사용 |
| Plex가 마운트를 인식하지 못함 | Windows에서는 **네트워크 드라이브**를 확인하고 Plex를 같은 자격 증명으로 실행; Linux에서는 **다른 사용자 허용** 활성화 |
| 라이브러리 스캔이 느림 | **디렉터리 캐시 시간**을 5~15분으로 늘리고, 새 콘텐츠 추가 후 캐시 새로고침 |

## 실제 버퍼링 해결 사례

1. **4K HDR 컬렉터**  
   - Cache Mode: Full  
   - Cache max size: 120GB (SSD/NVMe)  
   - Cache max age: 12시간(`43200000000000` ns)  
   - Dir cache time: 15분(`900000000000` ns)  
   결과: 즉각적인 챕터 건너뛰기, Dolby Vision 리먹스에서 1초 미만의 버퍼링.

2. **1080p/4K가 혼재된 가족 서버**  
   - `Movies`, `Shows` 두 개의 마운트, 각각 별도의 캐시 크기 설정  
   - 자주 시청하는 폴더를 매일 밤 예열하는 스케줄러 작업  
   결과: 캐시를 분리해 아이들의 만화가 영화 캐시를 밀어내지 않음.

3. **LTE로 이동 중인 사용자**  
   - 대역폭 제한: 80Mbps  
   - Plex 트랜스코딩을 8Mbps 1080p로 설정  
   - RcloneView 마운트는 **Full** 캐시 모드 유지; 연결이 복구될 때까지 쓰기는 대기열에 저장  
   결과: 셀룰러 핫스팟에서도 안정적인 스트리밍.

## FAQ

**라이브러리마다 별도의 마운트가 필요한가요?**  
필수는 아니지만, 대용량 라이브러리를 나누면 캐시를 관리하기 쉬워지고 라이브러리별로 캐시 크기/유효기간을 조정할 수 있습니다(예: TV 에피소드보다 4K 영화에 더 긴 캐시 유효기간 적용).

## 끊김 없이 재생하기

Plex 버퍼링은 마운트, 캐시, 할당량을 제어하면 해결할 수 있는 문제입니다. RcloneView는 셸 스크립트를 추측할 필요 없이 VFS 캐시를 올바르게 설정하고, 처리량을 모니터링하고, 예열 작업을 자동화할 수 있는 GUI를 제공합니다. 위의 설정을 조정하고, 전송 그래프를 확인하며, 로컬 스토리지처럼 동작하는 Plex 라이브러리를 즐겨보세요.


<CloudSupportGrid />
