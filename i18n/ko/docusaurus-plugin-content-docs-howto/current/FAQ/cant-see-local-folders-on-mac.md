---
sidebar_position: 2
description: "macOS에서 권한 부여, 전체 디스크 접근 활성화, 지원팀에 보낼 로그 수집을 통해 RcloneView에서 Desktop, Documents, Downloads가 보이지 않는 문제를 해결하세요."
keywords:
  - rcloneview
  - macos
  - permissions
  - files and folders
  - full disk access
  - troubleshooting
  - faq
tags:
  - RcloneView
  - macOS
  - Troubleshooting
  - FAQ
  - Permissions
date: 2025-11-07
author: Jay
---
# Mac에서 로컬 폴더가 보이지 않는 경우 (Desktop/Documents/Downloads)

macOS에 RcloneView를 설치한 직후 왼쪽 "Local Disk" 패널에서 **Desktop**, **Documents**, **Downloads** 같은 폴더가 보이지 않는다면, 거의 항상 macOS 개인정보 보호 권한 문제입니다. 이 가이드에서는 접근 권한을 허용하는 방법과 그래도 폴더가 비어 있게 보일 때 시도해 볼 방법을 안내합니다.

Explorer 자체에 대한 간단한 소개는 [원격 스토리지 탐색 및 관리](/howto/rcloneview-basic/browse-and-manage-remote-storage) 문서를 참고하세요.

## 이런 문제가 발생하는 이유

macOS 10.15(Catalina)부터 Apple은 앱이 Desktop, Documents, Downloads와 같은 보호된 폴더에 접근하기 전에 권한을 요청하도록 요구합니다. "허용 안 함"을 클릭했거나 앱이 아직 권한을 부여받지 못한 경우, RcloneView에서 해당 폴더가 비어 있는 것으로 표시됩니다.

## 권한 팝업이 나타날 때

RcloneView를 처음 열거나 보호된 폴더를 클릭할 때 macOS 대화상자가 나타날 수 있습니다.

1) Documents 폴더에 대한 접근을 요청하는 팝업이 나타나면 **Allow**를 클릭하세요.

<img src="/support/images/en/howto/FAQ/mac-allow-access-to-folder-and-files1.png" alt="mac allow access to folder and files1" class="img-medium img-center" />

2) 왼쪽 패널에서 보호된 폴더(예: Downloads)를 클릭했을 때 비슷한 프롬프트가 나타나면 **Allow**를 클릭하세요.

<img src="/support/images/en/howto/FAQ/mac-allow-access-to-folder-and-files2.png" alt="mac allow access to folder and files2" class="img-medium img-center" />

3) **Don't Allow**를 클릭했다면, 권한이 부여될 때까지 해당 폴더는 비어 있는 것처럼 보입니다.

<img src="/support/images/en/howto/FAQ/empth-folder-by-dont-allow.png" alt="empth folder by dont allow" class="img-large img-center" />

## 해결 방법: 시스템 설정에서 접근 권한 부여하기 (첫 번째 조치)

폴더가 여전히 비어 있어 보이거나 실수로 "Don't Allow"를 클릭했다면, macOS 시스템 설정에서 접근 권한을 부여하세요.

**단계 (macOS Ventura, Sonoma, Sequoia):**

1. `System Settings > Privacy & Security > Files & Folders`를 엽니다.
2. **RcloneView**를 찾습니다.
3. 원하는 폴더(예: **Documents Folder**, **Downloads Folder**)에 대한 토글을 활성화합니다.
4. RcloneView에서 해당 폴더를 다시 엽니다.

<img src="/support/images/en/howto/FAQ/change-setting-for-accessing-to-files-and-folders.png" alt="change setting for accessing to files and folders" class="img-large img-center" />

이 목록에 RcloneView가 보이지 않는다면, RcloneView를 한 번 실행한 뒤 보호된 폴더를 열어 보세요. macOS가 다시 권한을 요청할 것입니다.

## 그래도 해결되지 않는다면? 전체 디스크 접근 추가하기 (두 번째 조치)

Files & Folders 토글이 활성화되어 있는데도 여전히 내용을 볼 수 없다면, RcloneView를 **Full Disk Access**에 추가해 보세요.

1. `System Settings > Privacy & Security > Full Disk Access`를 엽니다.
2. `+` 버튼을 클릭하고 `Applications`에서 **RcloneView** 앱을 선택합니다.
3. RcloneView에 대한 토글이 켜져 있는지 확인합니다.
4. RcloneView를 재시작한 후 다시 시도합니다.

<img src="/support/images/en/howto/FAQ/mac-allow-full-disk-access.png" alt="mac allow full disk access" class="img-medium img-center" />

## 그래도 도움이 필요하다면: 로그를 수집해 지원팀에 문의하기

위의 단계를 모두 시도해도 접근이 계속 차단된다면, 저희가 도와드릴 수 있도록 로그를 보내 주세요.

1. RcloneView에서 `Settings > Embedded Rclone`을 엽니다.
2. **Logging Configuration**에서 로깅을 활성화하고, **Log folder**를 선택하고, 파일 이름은 그대로(예: `rclone.log`) 두고, **Log level**을 **DEBUG**로 설정합니다.
3. 변경 사항을 적용하려면 **Restart Embedded Rclone**을 클릭합니다.
4. 문제를 재현한 뒤(문제가 되는 폴더를 열어 보세요), 수행한 단계에 대한 간단한 설명과 함께 로그 파일을 [rcloneview@bdrive.com](mailto:rcloneview@bdrive.com)으로 보내 주세요.

:::caution 재시작 필요
로그는 **Restart Embedded Rclone**을 클릭한 이후에만 기록됩니다. 이 단계를 건너뛰지 마세요.
:::

<img src="/support/images/en/howto/FAQ/setting-for-collecting-log-file.png" alt="setting for collecting log file" class="img-large img-center" />

## 관련 가이드

- Explorer에서 로컬/클라우드 파일 관리하기: [원격 스토리지 탐색 및 관리](/howto/rcloneview-basic/browse-and-manage-remote-storage)
- 설정 전체 개요 (Embedded Rclone 및 로깅 포함): [일반 설정](/howto/rcloneview-basic/general-settings#logging-configuration)

---

추가 도움이 필요하시면 **[rcloneview@bdrive.com](mailto:rcloneview@bdrive.com)**으로 이메일을 보내 주세요.
