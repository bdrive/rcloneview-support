---
slug: migrate-pcloud-to-mega-rcloneview
title: "pCloud에서 MEGA로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - robin
description: "RcloneView로 pCloud에서 MEGA로 마이그레이션: 두 리모트를 연결하고, Dry Run을 실행하고, 클라우드 간 복사 후 Folder Compare로 검증하는 단계별 가이드입니다."
keywords:
  - pCloud에서 MEGA로 마이그레이션
  - pCloud MEGA 전송
  - pCloud MEGA 파일 이동
  - 클라우드 간 마이그레이션
  - RcloneView pCloud
  - RcloneView MEGA
  - pCloud MEGA 동기화
  - pCloud 파일 전송
  - rclone GUI 마이그레이션
tags:
  - RcloneView
  - pcloud
  - mega
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# pCloud에서 MEGA로 마이그레이션 — RcloneView로 파일 전송하기

> 수동으로 내려받고 다시 올리는 대신, 미리 확인하고 검증할 수 있는 클라우드 간 작업으로 pCloud 전체 라이브러리를 MEGA로 옮기세요.

pCloud에서 MEGA로 전환하려면 대개 용량이 큰 아카이브를 옮겨야 하는데, 이를 먼저 노트북으로 내려받고 싶은 사람은 없습니다. RcloneView는 두 서비스를 리모트로 연결하므로, 한 창에서 폴더 단위로 복사하고 이전 계정을 정리하기 전에 결과를 확인할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## pCloud와 MEGA를 리모트로 연결하기

pCloud는 브라우저 기반 OAuth를 사용합니다. RcloneView가 로그인 페이지를 열고, 접근을 승인하면 API 키 없이 리모트가 생성됩니다. MEGA는 이메일과 비밀번호를 사용합니다. **Remote > New Remote**를 열고 각 제공업체를 선택한 뒤 `pcloud-old`, `mega-new`처럼 알아보기 쉬운 이름을 붙이세요.

두 리모트가 Remote Manager에 나타나면 두 개의 탐색기 패널에 나란히 여세요. RcloneView는 Windows, macOS, Linux에서 하나의 창으로 90개 이상의 제공업체를 마운트하고 동기화하므로, 앞으로 다른 이전 작업에도 같은 레이아웃을 쓸 수 있습니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 pCloud와 MEGA 리모트 추가하기" class="img-large img-center" />

## 클라우드 간 파일 복사

폴더를 한 리모트에서 다른 리모트로 끌어다 놓으면 복사됩니다. 서로 다른 리모트 간 전송은 이동이 아니라 복사이기 때문입니다. 작은 폴더라면 이것으로 충분합니다. 전체 라이브러리라면 Copy 또는 Sync 작업을 만들어 저장하고, 다시 실행하고, Job History에서 검토할 수 있게 하세요.

결과를 검증할 때까지 원본은 그대로 두세요. Copy 작업은 pCloud를 그대로 유지하므로, 중간에 중단되더라도 마이그레이션을 안전하게 반복할 수 있습니다.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView에서 pCloud에서 MEGA로 클라우드 간 전송하기" class="img-large img-center" />

## Dry Run으로 미리 확인하고 전송 조정하기

먼저 Dry Run을 실행하세요. 아무것도 변경하지 않고 복사되거나 삭제될 파일을 나열하므로, 잘못된 대상 폴더를 지정했을 때 몇 시간을 낭비하기 전에 발견할 수 있습니다. 고급 단계에서 동시 파일 전송 수와 동일성 검사기(equality checker) 수를 조정할 수 있습니다. 오류가 발생하면 이 값을 낮추는 것이 합리적인 첫 번째 조치입니다.

오래된 설치 파일이나 Google Docs 내보내기 파일처럼 옮기고 싶지 않은 파일 형식이나 폴더는 필터링 단계에서 제외하세요.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="RcloneView에서 마이그레이션 작업 실행하기" class="img-large img-center" />

## Folder Compare로 검증하기

전송이 끝나면 왼쪽에 pCloud, 오른쪽에 MEGA를 두고 **Compare**를 여세요. 왼쪽에만 있는 파일과 다른 파일로 필터링하면 누락되거나 일치하지 않는 항목을 확인할 수 있으며, 비교 화면에서 바로 나머지를 복사할 수 있습니다. Transferring 탭과 Job History에는 각 실행의 크기와 상태가 기록됩니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="pCloud와 MEGA 간 Folder Compare" class="img-large img-center" />

## 시작하기

1. **RcloneView 다운로드**: [rcloneview.com](https://rcloneview.com/src/download.html)에서 받으세요.
2. New Remote를 통해 pCloud(OAuth)와 MEGA(이메일 및 비밀번호)를 추가합니다.
3. pCloud에서 MEGA로 Copy 작업을 만들고 Dry Run을 실행합니다.
4. 작업을 실행한 뒤, 이전 계정을 닫기 전에 Folder Compare로 검증합니다.

미리 확인하고 검증한 복사는 위험한 계정 전환을 일상적인 작업으로 바꿔 줍니다.

---

**관련 가이드:**

- [pCloud에서 Proton Drive로 마이그레이션](https://rcloneview.com/support/blog/migrate-pcloud-to-proton-drive-rcloneview)
- [MEGA에서 Dropbox로 마이그레이션](https://rcloneview.com/support/blog/migrate-mega-to-dropbox-rcloneview)
- [pCloud 동기화 오류 해결](https://rcloneview.com/support/blog/fix-pcloud-sync-errors-rcloneview)

<CloudSupportGrid />
