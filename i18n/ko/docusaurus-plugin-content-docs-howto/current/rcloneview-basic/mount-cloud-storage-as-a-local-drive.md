---
sidebar_position: 8
description: "RcloneView를 사용하여 원격 클라우드 스토리지를 가상 드라이브로 마운트하는 방법을 알아보세요. Remote Explorer, Mount Manager, 시스템 트레이를 통한 구성 방법을 포함합니다."
keywords:
  - rcloneview
  - rclone
  - mount
  - mount manager
  - cloud drive
  - virtual drive
  - rclone mount
  - local drive
  - remote explorer
  - remote storage management
tags:
  - RcloneView
  - mount
  - local-drive
  - virtual-drive
  - cloud-storage
  - Remote-storage-managent
date: 2025-06-19
author: Jay
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# 클라우드 스토리지를 로컬 드라이브로 마운트하기

:::important 마운트 전 필수 조건
마운트하기 전에 대상 리모트가 이미 RcloneView에 추가되어 있는지 확인하세요.   
참고: [새 리모트 추가](/howto/rcloneview-basic/remote-manager#add-a-new-remote)
:::

## RcloneView에서 원격 스토리지 마운트하기

RcloneView를 사용하면 원격 스토리지를 가상 드라이브로 마운트하여 더 쉽게 접근하고 관리할 수 있습니다.  
이 가이드에서는 두 가지 방법으로 원격 스토리지를 마운트하고 마운트 구성을 관리하는 방법을 설명합니다.

### 방법 1: Remote Explorer에서 마운트하기

콘텐츠를 탐색하는 동안 원격 폴더를 바로 마운트할 수 있습니다.

1. **Remote Explorer** 패널에서 마운트하려는 원격 폴더를 선택합니다. 
2. Remote Explorer 패널 상단 모서리에 있는 **마운트 아이콘**(<img src="/support/icons/mount-icon.png" alt="mount icon" class="inline-icon" />)을 클릭합니다.
3. 선택한 원격 경로가 자동으로 입력된 **Mount** 대화상자가 열립니다.
4. 마운트 설정을 구성합니다.
   - **Target**: `Auto`를 선택하거나 목록에서 드라이브 문자를 수동으로 지정합니다.
   - (선택 사항) 사용자 지정 마운트 위치를 지정하려면 "Mount to local path"를 체크합니다.
   - RcloneView가 시작될 때 이 리모트를 자동으로 마운트하려면 **Auto mount**를 활성화합니다.
5. 설정을 적용하고 즉시 마운트하려면 **Save and mount**를 클릭합니다.
   - 또는 마운트 구성만 저장하고 나중에 마운트하려면 **Save**를 클릭합니다.

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-medium img-center" />

<details>
<summary>고급 마운트 옵션</summary>

고급 마운트 옵션

| Field                        | Description                                                                                                                                                                                                                                                      |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Volume name**    | (선택 사항) 마운트된 볼륨의 사용자 지정 이름을 설정합니다. 파일 관리자나 시스템 UI에 표시될 수 있습니다.                                                                                                                                                        |
| **Mount type**     | 마운트 백엔드를 선택합니다: <br /> - `cmount` (Windows 기본값): 높은 호환성을 제공하는 Rclone의 내부 C 기반 FUSE 유사 마운트 엔진을 사용합니다  <br />- `nfsmount` (대안, 주로 Linux/macOS 환경용). NFS 프로토콜을 사용하여 리모트를 마운트합니다 |
| **Network drive**  | 마운트를 네트워크 드라이브로 표시하려면 이 상자를 체크합니다. OS가 마운트된 폴더를 처리하는 방식에 영향을 줄 수 있습니다.                                                                                                                                                       |
| **Read only**      | 읽기 전용 모드를 활성화하여 리모트에 대한 쓰기 작업을 방지합니다.                                                                                                                                                                                               |
| **Allow other**    | 마운트한 사용자 외 다른 사용자도 마운트된 파일 시스템에 접근할 수 있도록 허용합니다(주로 Linux에서 사용됨).                                                                                                                                                        |
| **Cache mode**     | 캐싱 동작을 제어합니다. 옵션은 다음과 같습니다:  <br />- `off`  <br />- `minimal`  <br />- `writes`  <br />- `full`  <br />기본값인 `writes` 모드는 쓰기 작업을 캐시합니다.                                                                                              |
| **Cache max size** | 바이트 단위로 허용되는 최대 캐시 크기입니다.  <br />예: 1073741824 = 1GB.  <br />제한이 없으려면 `-1`로 설정하세요.                                                                                                                                                            |
| **Cache max age**  | 캐시된 데이터가 유효한 상태로 유지되는 시간입니다.  시간 단위는 **나노초**입니다.  예: 3600000000000 = 1시간.                                                                                                                                               |
| **Dir cache time** | 디렉터리 캐시 유효 시간입니다.  시간 단위는 **나노초**입니다.  예: 300000000000 = 5분.                                                                                                                                                   |

💡 이 옵션들은 마운트 설정에 익숙한 경우에만 사용하세요. 대부분의 사용자에게는 기본값이 잘 작동합니다.

</details>
### 방법 2: Mount Manager로 마운트하기

**Mount Manager**를 사용하여 스토리지를 구성하고 마운트할 수도 있습니다.

1. 상단 메뉴 바의 **`Remote`** 탭 아래에 있는 **`Mount Manager`** 버튼을 클릭합니다.  
2. **`New mount`**를 클릭하여 새 마운트 구성을 생성합니다.  
3. 리모트를 선택하고 선택적으로 마운트할 하위 디렉터리를 지정합니다.  
4. 마운트 옵션을 구성합니다.  
   - **Target**: `Auto`를 선택하거나 목록에서 드라이브 문자를 수동으로 지정합니다.  
   - (선택 사항) 사용자 지정 마운트 경로를 지정하려면 **Mount to local path**를 활성화합니다.  
   - RcloneView가 시작될 때 이 리모트를 자동으로 마운트하려면 **Auto mount**를 활성화합니다.  
1. 즉시 마운트하지 않고 마운트 구성을 저장하려면 **`Save`**를 클릭합니다.  
   - 저장과 동시에 리모트를 바로 마운트하려면 **Save and mount**를 클릭합니다.  

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="mount from mount manager" class="img-medium img-center" />
## 마운트된 드라이브 보기 및 관리하기

마운트 구성을 보거나 관리하려면 메인 메뉴의 **`Remote`** 탭 아래에 있는 **`Mount Manager`** 버튼을 클릭하여 **Mount Manager** 대화상자를 엽니다.

저장된 모든 마운트 구성이 Mount Manager 창에 나열됩니다.  
각 구성은 현재 **상태**에 따라 분류됩니다.
- **Mounted**: 리모트가 현재 마운트되어 활성 상태입니다.
- **Unmounted**: 마운트는 저장되어 있지만 현재 마운트되지 않은 상태입니다.
  <img src="/support/images/en/howto/rcloneview-basic/mount-manager-status.png" alt="mount manager status" class="img-medium img-center" />
상태에 따라 다음 작업을 수행할 수 있습니다.


<Tabs>
<TabItem value="Status: mounted" label="🟢 상태: 마운트됨">

- <img src="/support/icons/unmount-icon.png" alt="unmount icon" class="inline-icon" /> : **Unmount** — 현재 마운트된 리모트를 마운트 해제하려면 클릭합니다.
- <img src="/support/icons/disabled-edit-mount.png" alt="disabled edit mount" class="inline-icon" /> : (비활성화됨)Edit
- <img src="/support/icons/open-mount-folder.png" alt="open mount folder" class="inline-icon" /> : **Open** — 마운트된 폴더를 파일 탐색기에서 열려면 클릭합니다.
- <img src="/support/icons/disabled-delete-mount-configuration.png" alt="disabled delete mount configuration" class="inline-icon" /> : (비활성화됨)Delete
</TabItem>



<TabItem value="Status: Configured" label="🟠 상태: 마운트 해제됨">

- <img src="/support/icons/mount-run-icon.png" alt="mount run icon" class="inline-icon" /> : **Mount** — 선택한 리모트를 수동으로 마운트하려면 클릭합니다.
- <img src="/support/icons/edit-mount-configuration.png" alt="edit mount configuration" class="inline-icon" /> : **Edit** — 마운트 설정을 수정하려면 클릭합니다.
- <img src="/support/icons/disabled-open-mount-folder.png" alt="disabled open mount folder" class="inline-icon" /> : (비활성화됨)Open
- <img src="/support/icons/delete-mount-configuration.png" alt="delete mount configuration" class="inline-icon" /> : **Delete** — 마운트 구성을 제거하려면 클릭합니다.
</TabItem>

</Tabs>


<br />
<br />

:::tip 시스템 트레이에서 빠르게 마운트하기
시스템 트레이 아이콘을 통해서도 마운트를 빠르게 관리할 수 있습니다.

1. 시스템 트레이에 있는 **RcloneView 아이콘**을 마우스 오른쪽 버튼으로 클릭합니다.
2. **Mount** 메뉴에 마우스를 올립니다.
3. 다음을 수행할 수 있습니다.
   - 현재 마운트된 드라이브를 확인하고 드라이브를 마운트하거나 마운트 해제하기
   - 모두 마운트 해제하기
   - 새 마운트 시작하기
<img src="/support/images/en/howto/rcloneview-basic/mount-from-system-tray.png" alt="mount from system tray" class="img-small img-left" />

:::

