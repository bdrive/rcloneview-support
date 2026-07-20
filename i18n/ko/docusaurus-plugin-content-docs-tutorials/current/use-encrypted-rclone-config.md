---
sidebar_position: 14
description: "Settings에서 config 비밀번호를 설정하여 rclone config 파일을 암호화하고 RcloneView에서 사용하세요."
keywords:
  - rcloneview
  - rclone config
  - encrypted config
  - config password
  - security
  - rclone.conf
tags:
  - RcloneView
  - Tutorial
  - security
  - settings
  - rclone config
date: 2026-02-12
author: ysh
---

# 암호화된 Rclone Config 파일 사용하기

Rclone은 설정 파일(`rclone.conf`)을 암호화하여 리모트 자격 증명이 평문으로 저장되지 않도록 할 수 있습니다. RcloneView는 암호화된 config 파일을 완벽하게 지원합니다 — config 비밀번호만 알려주면 됩니다.

이 튜토리얼에서 다루는 내용:

- rclone config를 암호화해야 하는 이유
- `rclone config`로 기존 config를 암호화하는 방법
- RcloneView에서 config 비밀번호를 입력하는 방법

---

## rclone config를 암호화해야 하는 이유

`rclone.conf` 파일에는 설정한 모든 리모트에 대한 자격 증명(토큰, 비밀번호, API 키)이 들어 있습니다. 기본적으로 이는 평문으로 저장됩니다. config 파일을 암호화하면 누군가 여러분의 컴퓨터나 백업에 접근하더라도 이러한 자격 증명을 보호할 수 있습니다.

- 평문 자격 증명 노출을 방지합니다.
- 공유 시스템이나 다중 사용자 시스템에 보안 계층을 추가합니다.
- 모든 rclone 리모트 및 기능과 함께 작동합니다 — 파일이 저장 시 암호화된다는 점을 제외하면 달라지는 것은 없습니다.

---

## 1단계: rclone config 암호화하기

터미널을 열고 다음을 실행합니다:

```bash
rclone config
```

옵션 메뉴가 표시됩니다. **`s`**를 선택하여 **Set configuration password**를 실행합니다:

```
s) Set configuration password
q) Quit config
s/q> s
```

메시지가 표시되면 원하는 비밀번호를 입력한 다음 확인합니다. Rclone이 기존 config 파일을 그 자리에서 암호화합니다.

:::tip
이미 설정된 리모트가 있다면 계속 정상적으로 작동합니다. Rclone은 새 비밀번호로 파일 전체를 다시 암호화합니다.
:::

:::caution
이 비밀번호를 반드시 기억해 두세요. 비밀번호를 잃어버리면 리모트를 처음부터 다시 설정해야 합니다.
:::

---

## 2단계: RcloneView에서 config 비밀번호 입력하기

1. 상단 메뉴에서 **Settings**를 엽니다.
2. **Embedded Rclone** 탭으로 이동합니다.
3. 아래로 스크롤하여 **Advanced Options**를 찾습니다.
4. **Config Password** 필드에 1단계에서 설정한 것과 동일한 비밀번호를 입력합니다.
5. **Restart Embedded Rclone**을 클릭합니다.

<img src="/support/images/en/tutorials/encrypted-config/settings-config-password.png" class="img-large img-center" alt="Config Password field in Embedded Rclone settings" />

이것으로 끝입니다 — RcloneView가 암호화된 config를 매끄럽게 복호화하여 사용합니다. 리모트가 평소와 같이 표시되고 작동합니다.

---

## 요약

| Item | Description |
| --- | --- |
| Function | RcloneView에서 암호화된 rclone config 파일 사용 |
| Encrypt | `rclone config` 실행 → `s) Set configuration password` |
| RcloneView setup | Settings → Embedded Rclone → Advanced Options → Config Password |
| Apply | 비밀번호 입력 후 **Restart Embedded Rclone** 클릭 |
| Best for | 공유 시스템이나 민감한 시스템에서 자격 증명 보호 |
