---
slug: fix-cloud-sync-missing-files-after-transfer-rcloneview
title: "RcloneView로 클라우드 동기화 후 누락된 파일 해결하기"
authors:
  - tayson
description: "클라우드 동기화 작업 후 파일이 누락되는 문제를 진단하고 해결합니다. RcloneView에서 필터 규칙, 특수 문자, 동기화 방향 문제와 같은 일반적인 원인을 알아보세요."
keywords:
  - rcloneview
  - missing files after sync
  - cloud sync missing files
  - rclone files not syncing
  - cloud transfer missing data
  - sync direction wrong
  - google docs not syncing
  - rclone filter rules
  - cloud file transfer issues
  - fix cloud sync
tags:
  - RcloneView
  - troubleshooting
  - cloud-sync
  - tips
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneView로 클라우드 동기화 후 누락된 파일 해결하기

> 동기화 작업을 실행했고 모든 것이 성공한 것처럼 보였지만, 대상 위치에 일부 파일이 누락되었습니다. **RcloneView**는 정확히 무슨 일이 일어났는지 진단하고 재발을 방지할 수 있는 도구를 제공합니다.

클라우드 동기화 후 파일이 누락된 것을 발견하는 것은 클라우드 파일 관리에서 가장 스트레스가 큰 상황 중 하나입니다. 전송은 오류 없이 완료되었고 작업 로그에는 성공으로 표시되지만, 대상을 확인해 보면 특정 파일을 찾을 수 없습니다. 당황하기 전에, 이는 거의 항상 데이터 손실이 아니라 논리적 설정 문제로 인해 발생한다는 점을 알아두세요.

이 가이드에서는 동기화 작업 후 파일이 누락되는 가장 흔한 이유를 살펴보고, RcloneView의 비교, 로깅, 드라이런 기능을 사용하여 문제를 식별하고 해결하는 방법을 보여줍니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 필터 규칙이 파일을 조용히 제외하는 경우

파일 누락의 가장 흔한 원인은 파일을 제외하는 필터 규칙입니다. `--exclude`, `--include`, `--filter` 규칙을 설정해 놓고 잊어버렸다면, 해당 패턴과 일치하는 파일은 동기화 중에 조용히 건너뛰어집니다. rclone은 표준 출력에서 제외된 파일에 대해 경고하지 않습니다.

**흔한 필터 실수:**

- `--include "*.jpg"` 규칙이 의도치 않게 문서와 스프레드시트를 포함한 모든 JPG가 아닌 파일을 제외하는 경우.
- `--exclude "*.tmp"` 규칙이 이름 중간에 `.tmp`가 포함된 파일까지 걸러내는 경우.
- `--min-size` 플래그가 설정 파일이나 텍스트 메모처럼 작지만 중요한 파일을 건너뛰는 경우.
- 새 작업을 만들 때 이전 작업의 필터 규칙이 그대로 남아 이어진 경우.

**진단 방법:** RcloneView에서 동기화 작업에 첨부된 플래그와 필터를 검토하세요. 모든 필터를 일시적으로 제거하고 비교를 실행하여 누락된 파일이 나타나는지 확인합니다. 그런 다음 필터를 하나씩 다시 추가하여 어떤 규칙이 파일을 제외하고 있는지 확인하세요.

## 동기화 방향 혼동

`sync`, `copy`, `move`의 차이는 매우 중요하며, 잘못된 것을 선택하면 파일이 사라질 수 있습니다.

- **동기화(Sync)**는 대상을 소스와 일치시킵니다. 소스에 존재하지 않는 대상의 파일은 **삭제**됩니다. 실수로 잘못된 방향으로 동기화하면(소스에서 대상이 아닌 대상에서 소스로), 소스 파일이 제거될 수 있습니다.
- **복사(Copy)**는 대상에 파일을 추가만 합니다. 아무것도 삭제하지 않습니다. 확신이 서지 않을 때 더 안전한 옵션입니다.
- **이동(Move)**은 파일을 전송한 후 소스에서 삭제합니다.

동기화 후 소스에서 파일이 누락되었다면, 잘못된 방향으로 동기화를 실행했을 수 있습니다. 실행하기 전에 항상 RcloneView의 두 개의 창(패널) 탐색기에서 어느 쪽이 소스이고 어느 쪽이 대상인지 다시 확인하세요.

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## Google 문서, 스프레드시트, 프레젠테이션

Google Workspace 문서(Docs, Sheets, Slides, Drawings)는 전통적인 파일이 아닙니다. 이들은 고정된 크기나 원래 형태의 다운로드 가능한 바이너리 형식이 없는 클라우드 네이티브 객체입니다. Google Drive에서 동기화할 때 rclone은 이를 다운로드 가능한 형식(예: `.docx`, `.xlsx`, `.pdf`)으로 변환하지만, 이 동작은 설정에 따라 다릅니다.

**흔한 문제:**

- 내보내기 형식이 설정되지 않은 경우 Google 문서가 0바이트 파일로 나타나거나 완전히 건너뛰어질 수 있습니다.
- 이름이 매우 긴 파일은 일부 운영체제에서 내보내기에 실패할 수 있습니다.
- Google Drive의 바로가기는 실제 파일이 아니며 전송되지 않습니다.

**해결 방법:** Google Drive 리모트가 적절한 내보내기 형식으로 설정되어 있는지 확인하세요. 또는 대상에 Google 문서가 필요하지 않다면, 누락 파일에 대한 혼란을 피하기 위해 명시적으로 제외하세요.

## 대소문자 구분 및 특수 문자

클라우드 제공업체마다 파일 이름을 다르게 처리합니다. `Report.PDF`와 `report.pdf`라는 이름의 파일은 Windows와 OneDrive에서는 동일한 파일로 취급될 수 있지만, Linux와 S3에서는 서로 다른 두 개의 파일로 취급될 수 있습니다. 동기화 중에 하나가 다른 하나를 조용히 덮어쓸 수 있습니다.

**문제가 되는 문자에는 다음이 포함됩니다:**

- 후행 공백이나 마침표(OneDrive와 Windows에서 거부됨).
- 콜론, 물음표, 꺾쇠괄호(Windows에서 유효하지 않음).
- 이모지 또는 유니코드 문자(일부 제공업체는 이를 일관되지 않게 처리함).
- Windows에서 260자를 초과하는 매우 긴 파일 경로.

**진단 방법:** RcloneView의 비교 기능을 사용하여 파일을 나란히 나열하세요. 소스에는 존재하지만 대상에는 없거나 다른 이름으로 되어 있는 파일을 찾아보세요. rclone 로그에는 호환되지 않는 문자가 있는 파일에 대한 이름 변경 경고가 표시될 수 있습니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

## 파일 크기 제한 및 제공업체 제약

일부 클라우드 제공업체는 최대 파일 크기 제한을 두고 있어 큰 파일이 조용히 건너뛰어질 수 있습니다:

- Google Drive: 파일당 5TB.
- OneDrive: 파일당 250GB.
- Dropbox: API를 통해 파일당 2GB(데스크톱 클라이언트를 통하면 350GB).
- MEGA: 계정 유형에 따라 파일 크기 제한이 다름.
- 대부분의 S3 호환 제공업체: 객체당 5TB이지만, 개별 업로드 파트는 5GB로 제한됨.

대상 제공업체의 제한을 초과하는 파일을 동기화하는 경우, 전송에 실패합니다. RcloneView의 작업 기록에서 크기 초과 파일과 관련된 오류 항목이 있는지 확인하세요.

## 비교 기능으로 누락된 파일 찾기

RcloneView의 폴더 비교 기능은 정확히 어떤 파일이 누락되었는지 확인하는 가장 빠른 방법입니다. 한쪽에는 소스를, 다른 쪽에는 대상을 열고 비교를 실행하세요. 이 도구는 소스에만 존재하는 파일, 대상에만 존재하는 파일, 또는 둘 사이에 차이가 있는 파일을 강조 표시합니다.

이를 통해 전송되지 않은 항목의 확실한 목록을 얻을 수 있으며, 이후 개별적으로 조사할 수 있습니다. 패턴을 찾아보세요 -- 누락된 파일이 모두 한 폴더에 있나요? 동일한 파일 확장자를 공유하나요? 모두 특정 크기 이하인가요? 이러한 패턴은 근본 원인을 알려줍니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare shared folder and My Drive contents" class="img-large img-center" />

## 동기화 전 드라이런 실행하기

파일 누락을 방지하는 가장 좋은 방법은 모든 동기화 전에 드라이런을 실행하는 것입니다. 드라이런은 실제로 파일을 전송하거나 삭제하지 않고 작업을 시뮬레이션합니다. 어떤 파일이 건너뛰어지고, 전송되고, 삭제될지를 포함하여 rclone이 정확히 무엇을 할지 보여줍니다.

RcloneView에서는 동기화 작업을 구성할 때 `--dry-run` 플래그를 사용할 수 있습니다. 출력을 주의 깊게 검토하세요. 전송될 것으로 예상한 파일이 목록에 없다면, 실제 동기화를 실행하기 전에 필터 규칙과 설정을 조사하세요.

## 예방 전략

향후 동기화에서 파일 누락을 방지하려면:

1. **항상 먼저 비교하세요.** 동기화하기 전에 RcloneView의 비교 기능을 사용하여 두 위치의 현재 상태를 파악하세요.
2. **대상에서 아무것도 삭제되지 않기를 원할 때는 sync 대신 copy를 사용하세요.**
3. **드라이런으로 시작하세요.** 새로운 동기화 설정을 커밋하기 전에 `--dry-run`을 추가하여 테스트하세요.
4. **필터 규칙을 문서화하세요.** 각 필터 규칙이 무엇을 하는지, 왜 존재하는지 기록해 두세요.
5. **작업 기록을 확인하세요.** 모든 동기화 후, RcloneView의 작업 기록을 검토하여 예상한 수만큼의 파일이 전송되었는지 확인하세요.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="job history" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 소스와 대상 리모트로 두 개의 창(패널) 탐색기를 열고 폴더 비교를 실행하세요.
3. 필터 규칙, 동기화 방향, 파일을 제외할 수 있는 플래그가 있는지 동기화 작업 설정을 확인하세요.
4. 동기화 작업을 실행하기 전에 `--dry-run`으로 미리 확인하세요.

동기화 후 파일 누락은 거의 항상 데이터 손실이 아니라 설정 문제입니다. RcloneView의 비교 및 로깅 도구를 사용한 체계적인 진단은 매번 원인을 정확히 찾아낼 것입니다.

---

**관련 가이드:**

- [원격 스토리지 탐색 및 관리](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [폴더 내용 비교](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [원격 스토리지 즉시 동기화](https://rcloneview.com/support/howto/rcloneview-basic/synchronize-remote-storages)

<CloudSupportGrid />
