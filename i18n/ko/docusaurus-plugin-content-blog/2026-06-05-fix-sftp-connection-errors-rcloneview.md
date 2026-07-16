---
slug: fix-sftp-connection-errors-rcloneview
title: "SFTP 연결 오류 해결 — RcloneView로 SSH 파일 전송 문제 해결하기"
authors:
  - alex
description: "RcloneView에서 발생하는 일반적인 SFTP 연결 오류 — 인증 실패, 호스트 키 불일치, 타임아웃 — 를 진단하고 해결하여 SSH 전송이 정상 작동하도록 합니다."
keywords:
  - fix SFTP connection errors RcloneView
  - SFTP SSH file transfer troubleshooting
  - RcloneView SFTP setup guide
  - SFTP authentication failure rclone
  - SSH file transfer errors
  - SFTP host key mismatch fix
  - rclone SFTP troubleshooting
  - resolve SFTP sync errors
  - SFTP remote cloud sync
  - RcloneView troubleshooting tips
tags:
  - sftp
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# SFTP 연결 오류 해결 — RcloneView로 SSH 파일 전송 문제 해결하기

> RcloneView에서 발생하는 SFTP 오류는 거의 항상 몇 가지 근본 원인 — 인증 설정 오류, 방화벽 규칙, 호스트 키 검증 실패 — 로 귀결되며, 각각에 대한 직접적인 해결 방법이 있습니다.

SFTP(SSH File Transfer Protocol, 포트 22)는 로컬 머신과 서버 간 파일 전송에 널리 사용되는 프로토콜입니다. 웹 호스트, 온프레미스 NAS 장치, 클라우드 VM 모두 일반적으로 SFTP 인터페이스를 제공합니다. RcloneView가 SFTP 리모트에 연결하지 못할 때 Log 탭의 오류 메시지가 원인을 알려주지만, 잘못된 자격 증명, 차단된 포트, 불일치하는 호스트 키, 제한된 경로 등 다양한 문제가 발생할 수 있어 진단이 막막하게 느껴질 수 있습니다. 이 가이드에서는 가장 흔한 SFTP 오류와 이를 체계적으로 해결하는 방법을 살펴봅니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## SFTP 리모트 올바르게 설정하기

대부분의 연결 오류는 리모트 설정 단계에서 시작됩니다. RcloneView에서 **Remote 탭 > New Remote**를 열고 제공업체 목록에서 **SFTP**를 선택하세요. 필수 항목은 **Host**(단순 호스트명 또는 IP 주소 — `sftp://`는 생략), **Port**(기본값 22), **Username**, 그리고 비밀번호 또는 SSH 개인 키 파일 경로 중 하나인 **Authentication** 방식입니다.

흔한 실수는 Host 필드에 `sftp://hostname`을 입력하는 것입니다. RcloneView(rclone을 통해)는 단순한 호스트명 또는 IP만 요구하며, `sftp://` 접두사가 있으면 연결이 즉시 거부됩니다. 서버가 키 기반 인증을 사용하는 경우, 개인 키 파일 경로가 로컬 머신의 올바른 파일을 가리키는지 확인하세요. Linux와 macOS에서는 키 파일 권한이 `600` 이하로 제한되어야 합니다 — SSH 클라이언트는 누구나 읽을 수 있는 키 사용을 거부합니다.

<img src="/support/images/en/blog/new-remote.png" alt="Creating a new SFTP remote in RcloneView" class="img-large img-center" />

## 인증 실패 진단하기

인증 실패는 RcloneView **Log 탭**에서 `ssh: handshake failed` 또는 `Permission denied (publickey,password)`와 같은 메시지로 나타납니다. 다음 순서로 확인하세요.

1. **사용자 이름 확인** — 터미널 SSH 클라이언트로 한 번 접속해 정확한 계정 이름을 확인하세요. RcloneView는 동일한 자격 증명을 사용하며, 대소문자 구분이 중요합니다.
2. **키 방식과 비밀번호 방식 확인** — 서버가 키 기반 로그인을 강제하는 경우, RcloneView에 비밀번호를 입력하면 실패합니다. 비밀번호 필드는 비워두고 개인 키 경로를 대신 입력하세요.
3. **DEBUG 로깅 활성화** — Settings > Embedded Rclone > Enable rclone Logging으로 이동해 레벨을 DEBUG로 설정한 후 오류를 재현하세요. 로그 파일에는 전체 SSH 핸드셰이크가 기록되어 정확한 거부 단계를 파악할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView transfer view for an active SFTP sync job" class="img-large img-center" />

## 호스트 키 불일치 오류 해결하기

rclone이 SFTP 서버에 처음 연결할 때 서버의 호스트 키를 기록합니다. 이후 서버 재구축, OS 재설치, 인증서 교체 등으로 인해 해당 키가 변경되면 rclone은 `host key mismatch` 오류를 발생시키고 중간자 공격을 방지하기 위해 연결을 거부합니다. 이를 해결하려면 RcloneView에서 **Rclone Terminal** 탭을 열고 다음을 실행하세요.

```
rclone config show <remote-name>
```

출력에 표시된 `known_hosts_file` 경로를 확인하고, 해당 파일을 텍스트 편집기로 열어 문제가 되는 호스트의 오래된 항목을 삭제하세요. 다음 연결 시도에서 새 키를 신뢰할지 묻는 메시지가 표시되며, 이를 통해 깔끔하게 저장됩니다.

## 방화벽 및 타임아웃 문제 해결하기

연결 시도가 오류 없이 멈춰 있거나 `dial tcp: connection timed out`이 발생한다면, 서버 또는 클라이언트 네트워크의 방화벽이 포트 22를 차단하고 있을 가능성이 높습니다. Terminal 탭을 사용해 `rclone about <remote-name>:` 명령으로 rclone이 서버에 접근할 수 있는지 테스트하고, 결과를 직접 터미널 SSH 연결과 비교하세요. SSH 클라이언트는 성공하지만 rclone이 타임아웃되는 경우, 사용 중인 머신이나 회사 네트워크가 브라우저 이외의 연결에 영향을 미치는 아웃바운드 방화벽 규칙을 적용하고 있는지 확인하세요. 아웃바운드 포트 22를 차단하는 네트워크의 경우, 서버 관리자에게 SFTP를 대체 포트로 노출해 달라고 요청하세요 — 흔히 사용되는 대안은 포트 443입니다 — 그리고 RcloneView 리모트 설정의 Port 필드를 그에 맞게 업데이트하세요.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an SFTP sync job in the RcloneView Job Manager" class="img-large img-center" />

## 전송 실패 후 작업 기록 검토하기

연결이 안정된 후에는 **Job History** 화면을 검토해 이전에 실패한 작업이 대상 위치에 부분적으로 남긴 파일이 없는지 확인하세요. RcloneView는 각 작업의 상태, 전송 수, 속도, 오류 코드를 기록합니다. 간단히 훑어보는 것만으로 다시 실행해야 할 불완전한 동기화를 파악할 수 있으며, Dry Run 옵션을 사용하면 작업을 실행하기 전에 정확히 어떤 파일이 복사되거나 삭제될지 미리 확인할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history view showing SFTP sync results in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **Remote 탭 > New Remote > SFTP**를 열고 단순 호스트명(`sftp://` 접두사 없이), 포트, 사용자 이름, 인증 자격 증명을 입력하세요.
3. 오류 발생 시 전체 SSH 핸드셰이크를 캡처할 수 있도록 Settings에서 DEBUG 로깅을 활성화하세요.
4. 전송이 실패한 후에는 **Job History**를 확인해 다시 실행해야 할 부분 동기화를 파악하세요.

올바른 자격 증명과 rclone의 로그 출력을 명확히 확인할 수 있다면 대부분의 SFTP 오류는 빠르게 해결되며, RcloneView는 결과를 확인하고 다시 생산적인 파일 전송으로 돌아가는 과정을 간편하게 만들어 줍니다.

---

**관련 가이드:**

- [FTP 서버 파일 관리 — RcloneView로 클라우드 동기화 및 백업하기](https://rcloneview.com/support/blog/manage-ftp-server-cloud-sync-backup-rcloneview)
- [RcloneView로 SFTP와 SMB를 로컬 드라이브로 마운트하기](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [RcloneView로 Rclone 오류 문제 해결하기](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />
