---
slug: fix-proton-drive-sync-errors-rcloneview
title: "Proton Drive 동기화 오류 해결하기 — RcloneView 문제 해결 가이드"
authors:
  - tayson
description: "RcloneView에서 Proton Drive 인증, 2FA, 동기화 실패 문제를 실용적인 해결 방법과 로깅 단계로 해결하세요."
keywords:
  - Proton Drive 동기화 오류
  - Proton Drive RcloneView 해결
  - Proton Drive 인증 실패
  - Proton Drive 2FA 로그인
  - Proton Drive 문제 해결
  - RcloneView 동기화 오류
  - Proton Drive 연결 문제
  - Proton Drive 백업 오류 해결
  - rclone 로깅 디버그
tags:
  - RcloneView
  - troubleshooting
  - tips
  - proton-drive
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Proton Drive 동기화 오류 해결하기 — RcloneView 문제 해결 가이드

> Proton Drive 동기화가 멈추거나 인증에 실패할 때, 원인은 대부분 전송 자체의 버그가 아니라 자격 증명 설정이나 작업 로그에 있습니다.

Proton Drive는 브라우저 OAuth 흐름이 아니라 이메일, 비밀번호, 선택적인 2단계 인증 코드로 RcloneView에 연결되므로, 대부분의 동기화 실패는 이 자격 증명 처리 과정이나 Proton 계정 설정이 변경된 이후 다시 테스트되지 않은 작업으로 거슬러 올라갑니다. RcloneView는 이러한 실패를 Job History와 Log 탭에 표시하므로, 어디를 봐야 하는지만 알면 실제 원인을 파악하기가 어렵지 않습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 인증 및 2FA 실패

Proton Drive 리모트 연결이 실패하면 먼저 Remote Manager에 입력된 이메일과 비밀번호를 다시 확인하세요 — OAuth 제공업체와 달리 브라우저 재로그인으로 대체할 방법이 없으므로, Proton 비밀번호가 변경되면 리모트를 수정하기 전까지 조용히 끊어진 상태로 남습니다. Proton 계정에서 2단계 인증이 활성화되어 있다면 코드를 신속하게 입력해야 합니다. 2FA 코드는 빠르게 만료되며, 만료된 코드는 잘못된 비밀번호와 동일한 일반적인 인증 오류를 발생시킵니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView Remote Manager에서 Proton Drive 자격 증명 편집하기" class="img-large img-center" />

RcloneView는 Windows, macOS, Linux에서 동일한 창으로 Proton Drive를 마운트하고 동기화하므로, 자격 증명을 한 번 수정하면 플랫폼별로 다시 구성할 필요 없이 해당 리모트를 설정한 모든 곳에 적용됩니다.

## 동기화 작업이 멈추거나 전송 도중 실패하는 경우

시작은 되지만 완료되지 않는 작업은 대개 의도한 것보다 더 많은 항목을 제외하는 필터 규칙이나, 불안정한 연결에 비해 너무 낮게 설정된 재시도 횟수를 가리킵니다. 작업의 고급 설정(Advanced Settings)을 열어 재시도 횟수를 확인하세요 — 기본값인 3회는 짧은 네트워크 문제를 처리해 주지만, 이를 1로 낮추면 이 안전장치가 완전히 사라집니다. 작업을 다시 실행하기 전에 드라이 런(Dry Run)을 실행하여 어떤 파일이 대상이 되는지 정확히 확인하세요.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Proton Drive 동기화 작업을 재시도하기 전에 드라이 런 실행하기" class="img-large img-center" />

## Job History 확인 및 디버그 로그 활성화

Job History는 실행이 Completed, Errored, 또는 Canceled 상태였는지와 함께 정확히 멈춘 시각을 기록합니다 — 이 타임스탬프는 특정 파일이나 네트워크 이벤트와 실패를 연관 짓는 데 믿을 만한 방법입니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView에서 Proton Drive 작업 기록 상태 검토하기" class="img-large img-center" />

지속되거나 원인이 불분명한 실패의 경우, 설정에서 rclone 로깅을 활성화하고 로그 레벨을 DEBUG로 설정한 다음, 내장 rclone 프로세스를 재시작하고 동기화를 재현하세요. 생성된 로그 파일은 정확히 어떤 API 호출이 실패했는지 짚어주므로, 오류 대화상자만 보고 추측하는 것보다 훨씬 유용합니다.

## 시작하기

1. 아직 설치하지 않았다면 [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. Remote Manager에서 Proton Drive 이메일과 비밀번호를 다시 입력하고, 요청되면 2FA를 신속하게 완료하세요.
3. 영향을 받은 동기화 작업에서 드라이 런을 실행하여 대상 파일을 확인하세요.
4. 자격 증명을 새로 고쳐도 문제가 해결되지 않으면 DEBUG 로깅을 활성화하고 문제를 재현하세요.

대부분의 Proton Drive 동기화 오류는 자격 증명과 재시도 설정을 확인하면 해결됩니다 — 나머지는 로그가 알려줍니다.

---

**관련 가이드:**

- [RcloneView로 Proton Drive 파일 및 클라우드 동기화 관리하기](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [RcloneView로 하드 드라이브를 Proton Drive에 암호화 백업하기](https://rcloneview.com/support/blog/hard-drive-to-proton-drive-with-rcloneview)
- [Proton Drive와 다른 클라우드의 만남 — RcloneView로 쉽게 백업 및 동기화하기](https://rcloneview.com/support/blog/proton-drive-multi-cloud-sync-with-rcloneview)

<CloudSupportGrid />
