---
slug: remote-management-add-edit-delete-rcloneview
title: "리모트 관리 가이드 — RcloneView에서 클라우드 연결 추가, 편집, 정리하기"
authors:
  - tayson
description: "70개 이상의 클라우드 프로바이더를 관리하려면 잘 정리된 리모트가 필수입니다. RcloneView의 리모트 관리자에서 클라우드 연결을 추가, 설정, 편집, 정리하는 방법을 알아보세요."
keywords:
  - rcloneview remote manager
  - add cloud remote rcloneview
  - manage cloud connections
  - rclone remote setup
  - cloud connection manager
  - rcloneview configure remote
  - add cloud account rcloneview
  - rcloneview setup guide
  - cloud remote configuration
  - organize cloud accounts
tags:
  - feature
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 리모트 관리 가이드 — RcloneView에서 클라우드 연결 추가, 편집, 정리하기

> 첫 번째 리모트를 설정하는 데는 2분이면 충분합니다. 하지만 15번째 리모트부터는 체계가 필요합니다. 멀티 클라우드 환경이 커질수록 모든 클라우드 연결을 효율적으로 관리하는 방법을 알아봅니다.

RcloneView의 모든 클라우드 프로바이더는 "리모트"로 시작합니다 — 자격 증명과 설정을 가진 이름 붙은 연결입니다. 리모트가 2~3개일 때는 관리가 간단합니다. 하지만 프로바이더를 더 추가할수록(많은 사용자가 결국 10개 이상을 갖게 됩니다) 정리된 상태를 유지하는 것이 필수가 됩니다. 이 가이드는 첫 리모트를 추가하는 것부터 복잡한 멀티 클라우드 환경을 관리하는 것까지 모두 다룹니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 새 리모트 추가하기

<img src="/support/images/en/blog/new-remote.png" alt="Add new remote" class="img-large img-center" />

리모트 관리자는 70개 이상의 프로바이더 중 어떤 것이든 추가하는 과정을 안내합니다. 프로바이더 유형마다 설정 필드가 다릅니다 — Google Drive는 OAuth를, S3는 액세스 키를, WebDAV는 URL과 자격 증명을 사용합니다.

### 일반적인 프로바이더 유형

| 연결 유형 | 예시 | 인증 방식 |
|----------------|---------|-------------|
| OAuth | Google Drive, OneDrive, Dropbox | 브라우저 로그인 |
| 액세스 키 | S3, B2, Wasabi, R2 | Key + Secret |
| 사용자명/비밀번호 | WebDAV, FTP, SFTP | 자격 증명 |
| 토큰 | Box, Mega | API 토큰 |

## 이름 규칙

좋은 이름 규칙은 나중의 혼란을 줄여줍니다. 다음과 같은 패턴을 고려해보세요:

- **프로바이더별**: `gdrive-personal`, `gdrive-work`, `s3-backup`
- **용도별**: `backup-primary`, `backup-secondary`, `archive`
- **팀별**: `marketing-drive`, `engineering-s3`, `finance-onedrive`

## 리모트 설정 편집하기

자격 증명을 업데이트하거나, 엔드포인트를 변경하거나, 설정을 수정해야 하나요? 리모트 관리자를 통해 다시 만들 필요 없이 어떤 리모트든 편집할 수 있습니다.

편집이 필요한 일반적인 이유:

- **만료된 OAuth 토큰** — 작업 설정을 잃지 않고 재인증
- **변경된 액세스 키** — 키 교체 후 S3 자격 증명 업데이트
- **다른 엔드포인트** — S3 리전이나 커스텀 엔드포인트 전환

## 고급 설정

### Crypt 리모트

기존 리모트를 감싸는 암호화된 래퍼를 생성합니다. Crypt 리모트는 파일 이름과 내용을 클라우드에 도달하기 전에 암호화합니다:

### Union/Combine 리모트

여러 리모트를 하나의 가상 뷰로 병합합니다. 여러 프로바이더의 무료 스토리지 용량을 합쳐서 사용할 때 유용합니다.

## 리모트 정리하기

리모트 수가 늘어날수록:

- **일관된 이름 규칙 사용**으로 리모트가 논리적으로 정렬되도록 하세요
- **설정을 문서화**하세요 — 어떤 리모트가 어디로 백업되는지
- **사용하지 않는 리모트 정리** — 오래된 체험판 계정 제거
- **주기적으로 연결 테스트** — 만료된 토큰은 조용히 실패를 일으킵니다

## 탐색기에서 리모트 사용하기

설정이 완료되면 리모트는 듀얼 패널 탐색기에 나타납니다. 원본 또는 대상 패널로 어떤 리모트든 선택할 수 있습니다:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Browse remotes in explorer" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **첫 리모트를 추가**하세요 — 안내에 따라 설정을 진행합니다.
3. 나중에 알아보기 쉽도록 **명확하게 이름을 지정**하세요.
4. 필요에 따라 **리모트를 더 추가**하세요.
5. 일관된 이름 규칙으로 **정리된 상태를 유지**하세요.

좋은 리모트 관리는 좋은 클라우드 관리의 기초입니다.

---

**관련 가이드:**

- [연결 관리자 가이드](https://rcloneview.com/support/blog/rcloneview-connection-manager-embedded-external)
- [클라우드 백업 암호화](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [가상 리모트: Combine, Union, Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)

<CloudSupportGrid />
