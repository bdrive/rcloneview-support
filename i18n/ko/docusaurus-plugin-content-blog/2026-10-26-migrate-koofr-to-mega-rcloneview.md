---
slug: migrate-koofr-to-mega-rcloneview
title: "Koofr에서 Mega로 마이그레이션 — RcloneView로 파일 전송하기"
authors:
  - steve
description: "RcloneView로 Koofr를 Mega로 마이그레이션하세요. 두 리모트를 연결하고, Dry Run으로 미리 확인하고, 클라우드 간 파일을 복사한 뒤 Folder Compare로 검증합니다."
keywords:
  - Koofr에서 Mega로 마이그레이션
  - Koofr to Mega 전송
  - Koofr 파일을 Mega로 이동
  - Koofr Mega 마이그레이션
  - RcloneView 클라우드 간 전송
  - Koofr to Mega 동기화
  - rclone GUI
  - 클라우드 마이그레이션 도구
  - Mega 파일 전송
  - 클라우드 전송 검증
tags:
  - RcloneView
  - koofr
  - mega
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Koofr에서 Mega로 마이그레이션 — RcloneView로 파일 전송하기

> Koofr 라이브러리를 두 클라우드 사이에서 직접 Mega로 복사하세요. 먼저 미리보기를 확인하고 마지막에 검증 단계를 거칩니다.

Koofr와 Mega는 스토리지에 접근하는 방식이 서로 다르며, 둘 사이를 수작업으로 옮기려면 모든 것을 다운로드한 뒤 다시 업로드해야 합니다. 수년간의 프로젝트 폴더를 가진 사진작가나 공유 문서를 쓰는 소규모 사무실에는 몇 시간이나 붙어 있어야 하는 일입니다. RcloneView는 한 창에서 두 서비스를 연결하고 둘 사이를 직접 전송하며, 작업을 미리 확인하고 반복 실행하고 기록에서 검토할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Koofr와 Mega를 리모트로 추가하기

**Remote > New Remote**를 열고 설정 대화상자가 요청하는 자격 증명으로 Koofr를 추가하세요. 그다음 이메일과 비밀번호로 Mega를 추가합니다. Mega는 OAuth가 아니라 자격 증명 입력 방식의 리모트이므로 브라우저 단계가 없습니다. 두 리모트가 Remote Manager에 나타나면 각각을 별도의 Explorer 패널에서 열 수 있습니다.

Koofr와 Mega는 같은 리모트 목록에서 다른 지원 제공업체들과 나란히 표시됩니다.

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView에서 Koofr와 Mega 리모트 만들기" class="img-large img-center" />

## 전송 계획하기

먼저 옮기려는 Koofr 폴더를 둘러보세요. 가장 큰 폴더에는 **Get Size**를 사용해 규모를 파악하고, 두고 가도 되는 항목을 메모해 두세요. Mega는 요금제에 따라 계정별 전송 및 스토리지 제한을 적용하므로, 작업 도중에 문제를 발견하지 않도록 대용량 작업을 시작하기 전에 대상에 충분한 공간이 있는지 확인하세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView에서 Koofr와 Mega를 나란히 둘러보는 화면" class="img-large img-center" />

## Copy 작업을 만들고 Dry Run 실행하기

Sync 마법사에서 Koofr를 소스로, Mega 폴더를 대상으로 설정하세요. 기존 Mega 파일이 삭제되지 않도록 **Copy** 작업 유형을 선택합니다. 고급 설정에서 파일 전송 수와 equality checker 수를 조정할 수 있으며, 어느 한쪽 서비스가 느려지거나 오류를 반환하면 값을 낮추세요. 필터링을 사용해 옮기고 싶지 않은 파일 형식이나 폴더를 건너뛸 수 있습니다.

실제 작업 전에 **Dry Run**을 실행하세요. 정확히 어떤 파일이 복사될지 보여 주므로, 소스 폴더를 잘못 선택한 경우를 비용 없이 발견할 수 있습니다. 미리보기가 올바르면 작업을 실행하고 Transferring 탭에서 속도와 진행 상황을 확인하세요.

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Transferring 탭에서 클라우드 간 전송 모니터링" class="img-large img-center" />

## 검증하고 기록 남기기

실행 후 왼쪽에 Koofr, 오른쪽에 Mega를 두고 **Compare**를 여세요. 왼쪽에만 있거나 서로 다른 파일을 필터링하면 도착하지 않은 항목을 확인할 수 있으며, Compare 뷰의 복사 동작으로 그 항목들을 옮길 수 있습니다. Job History에는 모든 실행의 상태, 소요 시간, 크기, 파일 수가 보관되므로, 이전 계정을 정리하기 전에 기록을 확보할 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="완료된 Koofr to Mega 전송을 보여 주는 Job History" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **Remote > New Remote**에서 Koofr와 Mega를 추가하세요.
3. Koofr에서 Mega로 Copy 작업을 만들고 Dry Run을 실행하세요.
4. 작업을 실행한 뒤, Koofr에서 무언가를 삭제하기 전에 Folder Compare로 확인하세요.

먼저 복사하고 나중에 검증하면, Mega에 모든 파일이 갖춰질 때까지 Koofr 파일을 계속 사용할 수 있습니다.

---

**관련 가이드:**

- [Koofr에서 Dropbox로 마이그레이션](https://rcloneview.com/support/blog/migrate-koofr-to-dropbox-rcloneview)
- [pCloud에서 Mega로 마이그레이션](https://rcloneview.com/support/blog/migrate-pcloud-to-mega-rcloneview)
- [Mega 연결 및 할당량 오류 해결](https://rcloneview.com/support/blog/fix-mega-connection-quota-errors-rcloneview)

<CloudSupportGrid />
