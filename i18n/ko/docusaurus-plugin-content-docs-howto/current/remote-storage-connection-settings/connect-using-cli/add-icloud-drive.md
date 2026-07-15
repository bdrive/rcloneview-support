---
sidebar_position: 1
description: "Windows에서 CLI를 사용하여 Rclone에 iCloud Drive를 리모트로 구성하는 방법을 알아보세요. 2단계 인증 설정 및 RcloneView와의 연동 방법을 포함합니다."
keywords:
  - rcloneview
  - howto
  - cloud
  - sync
  - rclone
  - icloud
  - cli
  - icloud drive
  - rclone cli
  - windows
  - 2fa
  - remote storage
  - cloud storage
  - Remote Connection
  - apple id
tags:
  - cli
  - icloud
  - windows
  - 2fa
  - Remote-Storage
  - remote-connection
  - cloud-storage
date: 2025-05-21
author: Jay
---
# iCloud Drive

iCloud 리모트는 현재 Rclone CLI를 통해서만 추가할 수 있습니다.

:::info
현재 iCloud와 같이 대화형 2단계 인증(2FA)을 지원하는 리모트는 CLI를 통해서만 구성할 수 있습니다. UI를 통한 이러한 리모트 구성 지원은 향후 릴리스에서 구현될 예정입니다.
:::

## Rclone CLI를 사용하여 iCloud Drive 추가하는 방법 (Windows)

#### 1단계: 명령 프롬프트 열기

- Win + R을 누르고 cmd를 입력한 후 Enter를 누릅니다.

<img src="/support/images/en/howto/remote-storage-connection-settings/connect-using-cli/windows-command-prompt.png" alt="windows command prompt" class="img-medium img-left" />

#### 2단계: Rclone 구성 시작

명령 프롬프트를 열고 Rclone 구성 프로세스를 시작합니다.

```windows
rclone config
```

다음과 같은 메뉴가 표시됩니다.

```
No remotes found - make a new one
n) New remote
s) Set configuration password
q) Quit config
n/s/q> n
```

n을 입력하고 Enter를 눌러 새 리모트를 생성합니다.

#### 3단계: iCloud Drive 리모트 설정

안내에 따라 진행합니다.

- **이름**: 새 리모트의 이름을 지정합니다 (예: icloud).

```windows
Enter name for new remote.
name> Myicloud
```

- **스토리지**: 스토리지 옵션 목록에서 `iclouddrive`를 입력하거나 해당 번호(보통 `59`)를 입력하여 iCloud Drive를 선택합니다. 목록에 없다면 Rclone v1.69 이상을 사용하고 있는지 확인하세요.

```
Storage> iclouddrive
```

- **Apple ID**: Apple ID 이메일 주소를 입력합니다.

```
apple_id> your_email@icloud.com
```

- **비밀번호**: 직접 비밀번호를 입력하도록 선택합니다.

```
y) Yes, type in my own password
g) Generate random password
y/g> y
```

- 메시지가 표시되면 Apple ID 비밀번호를 입력합니다.

```
Enter the password
password:
Confirm the password
password:
```

- **고급 구성**: 특별한 요구사항이 없다면 고급 구성은 건너뛸 수 있습니다.

```
Edit advanced config? (y/n)
y/n> n
```

- **2단계 인증(2FA)**: Apple ID에 2FA가 활성화되어 있다면(권장 사항), 신뢰할 수 있는 기기로 전송된 2FA 코드를 입력하라는 메시지가 표시됩니다.

```
Two-factor authentication: please enter your 2FA code
Enter a value.
config_2fa> 123456
```

- **구성 확인**: 설정을 검토하고 확인합니다.

```
y) Yes this is OK (default)
e) Edit this remote
d) Delete this remote
y/e/d> y
```

이제 iCloud Drive 리모트가 구성되었습니다.

아래와 같이 iCloud Drive가 성공적으로 추가되었는지 확인할 수 있습니다. rclone config를 종료하려면 q를 입력하세요.

```
Current remotes:

Name                 Type
====                 ====
Myicloud             iclouddrive

e) Edit existing remote
n) New remote
d) Delete remote
r) Rename remote
c) Copy remote
s) Set configuration password
q) Quit config
e/n/d/r/c/s/q> q
```
#### 4단계: 연결 테스트

구성이 성공적으로 완료되었는지 확인하려면 iCloud Drive의 콘텐츠 목록을 조회합니다.

```
rclone lsd Myicloud:
```

iCloud Drive의 디렉터리 목록이 표시되어야 합니다.

#### 5단계: RcloneView에서 추가된 iCloud Drive 확인

**RcloneView**를 실행합니다.

1. 메뉴 바에서 **Remote** 탭 아래의 **Remote Manager**를 클릭합니다.
2. **Remote Manager** 창에 **iCloud Drive**가 표시되는지 확인합니다.

<div class="img-grid-2">
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-icloud-verify-step1.png" alt="add icloud drive verify step1" class="img-medium img-center" />
<img src="/support/images/en/howto/Remote Storage Connection Settings/Connect using CLI/add-icloud-verify-step2.png" alt="add icloud drive verify step2" class="img-medium img-center" />
</div>

:::danger 주의해야 할 사항
- **고급 데이터 보호**: Apple ID에서 **고급 데이터 보호(Advanced Data Protection, ADP)**를 활성화한 경우, Rclone은 iCloud Drive에 액세스할 수 없습니다. Rclone을 iCloud Drive와 함께 사용하려면 ADP를 비활성화해야 합니다. iPhone에서 다음 경로로 이동하여 설정할 수 있습니다.

```
Settings > [Your Name] > iCloud > Advanced Data Protection
```

- '고급 데이터 보호'가 **꺼짐**으로 설정되어 있는지 확인하세요. 또한 '웹에서 iCloud 데이터 액세스'는 **활성화**되어 있어야 합니다.

- **세션 유효 기간**: 구성 중 획득한 신뢰 토큰은 **30일** 동안 유효합니다. 이 기간이 지나면 다음 명령을 사용하여 재인증해야 합니다.

```
rclone reconnect Myicloud:
```

- **앱 전용 비밀번호**: 현재 Rclone은 iCloud Drive에 대한 앱 전용 비밀번호를 지원하지 **않습니다**. 설정 시 일반 Apple ID 비밀번호와 2FA를 함께 사용해야 합니다.

자세한 내용은 [iCloud Drive](https://rclone.org/iclouddrive/)에 관한 공식 Rclone 문서를 참고하세요.
:::
