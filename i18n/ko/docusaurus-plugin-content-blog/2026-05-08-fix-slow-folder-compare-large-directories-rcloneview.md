---
slug: fix-slow-folder-compare-large-directories-rcloneview
title: "대용량 디렉터리에서 느린 폴더 비교 문제 해결 — RcloneView 가이드"
authors:
  - jay
description: "RcloneView에서 대용량 디렉터리의 폴더 비교 작업 속도를 높이는 방법 — 체커 동시성, 필터 규칙, 수백만 개 파일을 효율적으로 비교하는 전략을 다룹니다."
keywords:
  - slow folder compare RcloneView
  - fix slow cloud directory comparison
  - RcloneView folder compare large files
  - speed up cloud folder comparison
  - RcloneView compare performance
  - large directory cloud comparison
  - folder compare timeout fix
  - optimize RcloneView compare
tags:
  - folder-comparison
  - troubleshooting
  - tips
  - performance
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 대용량 디렉터리에서 느린 폴더 비교 문제 해결 — RcloneView 가이드

> 설정이 최적화되어 있지 않으면 수만 개의 파일이 있는 디렉터리를 비교할 때 속도가 느려질 수 있습니다. 대규모 클라우드 디렉터리를 위해 RcloneView의 폴더 비교를 조정하는 방법을 알아보세요.

RcloneView의 폴더 비교는 가장 강력한 기능 중 하나로, 두 위치 간에 어떤 파일이 다른지, 한쪽에만 존재하는 파일은 무엇인지, 어떤 파일이 동일한지를 정확히 보여줍니다. 하지만 파일이 500,000개인 두 개의 S3 버킷을 비교하거나 NAS 디렉터리와 클라우드 아카이브를 비교할 때, 워크로드에 맞게 설정을 조정하지 않으면 속도가 매우 느려질 수 있습니다. 아래 조정 방법들을 적용하면 비교 시간을 몇 시간에서 몇 분으로 단축할 수 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 비교 전에 필터로 범위 줄이기

폴더 비교 속도를 높이는 가장 빠른 방법은 비교 대상 파일 수를 줄이는 것입니다. **필터를 사용한 폴더 비교**(PLUS 라이선스)를 사용하면 데이터 무결성 평가에 영향을 주지 않는 파일 유형을 제외할 수 있습니다. 예를 들어 `.tmp`, `.log`, `.DS_Store` 파일을 제외할 수 있습니다. 폴더 이름으로 필터링하여 대규모 트리 중 특정 하위 디렉터리만 비교할 수도 있습니다.

필터 구문은 rclone의 필터 규칙을 따릅니다. `.tmp`는 해당 확장자를 가진 모든 파일을 제외하고, `/.git/*`은 루트의 `.git` 디렉터리에 있는 파일을 제외하며, `/archive/`는 최상위 폴더 전체를 건너뜁니다. 비교를 시작하기 전에 이러한 규칙을 적용하면 rclone이 열거하고 해시해야 하는 항목 수가 크게 줄어듭니다.

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Using Folder Compare with filter to reduce scope in RcloneView" class="img-large img-center" />

## 느린 백엔드를 위한 체커 동시성 조정

RcloneView의 작업 설정에는 **동등성 체커 수(Number of equality checkers)** 항목이 있으며 기본값은 8입니다. 지연 시간이 길거나 API 요청 제한이 엄격한 느린 클라우드 백엔드의 경우, 이 높은 기본값 때문에 체커들이 API 응답을 기다리며 쌓이게 되어 오히려 속도가 느려질 수 있습니다. Google Drive, OneDrive, 또는 느린 WebDAV 서버와 같은 제공업체의 경우 체커 수를 2~4로 줄여보세요.

반대로 Wasabi나 Cloudflare R2와 같은 빠른 S3 호환 백엔드의 경우, 체커 수를 16 이상으로 늘리면 대용량 버킷 목록 조회 속도를 크게 높일 수 있습니다. 다양한 값을 테스트해 보세요. 최적의 값은 제공업체와 네트워크 상태에 따라 달라집니다.

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Configuring checker concurrency for folder compare in RcloneView" class="img-large img-center" />

## 초기 검사에는 크기 전용 모드 사용

기본적으로 rclone은 파일을 크기와 수정 시간 모두를 기준으로 비교합니다. 매우 큰 디렉터리를 빠르게 초기 검사할 때는, 체크섬 검증에 따른 오버헤드 없이 명백한 불일치(한쪽에만 존재하는 파일이나 크기가 확연히 다른 파일)를 파악하기 위해 크기 전용 비교를 사용할 수 있습니다.

RcloneView에서는 **설정 → 임베디드 Rclone → 전역 Rclone 플래그**에서 비교 세션에 대한 전역 Rclone 플래그로 `--size-only`를 전달할 수 있습니다. 이는 정확도를 다소 희생하는 대신 속도를 얻는 방법입니다. 대규모 초기 감사에 사용한 후, 의심스러운 파일에 대해서는 전체 체크섬 비교를 후속으로 진행하세요.

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing folder compare history and timing in RcloneView" class="img-large img-center" />

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 비교 전에 관련 없는 파일 유형을 제외하려면 **필터를 사용한 폴더 비교**(PLUS)를 사용하세요.
3. 느린 백엔드의 경우 체커 동시성을 2~4로 낮추고, 빠른 S3 제공업체의 경우 늘리세요.
4. 매우 큰 디렉터리의 빠른 초기 감사에는 크기 전용 모드를 사용하세요.

올바른 설정을 사용하면 폴더 비교는 불필요한 지연 없이 여러 클라우드 제공업체에 걸쳐 수백만 개의 파일까지 확장됩니다.

---

**관련 가이드:**

- [폴더 비교 가이드 — RcloneView로 차이점 감지하기](https://rcloneview.com/support/blog/folder-comparison-guide-detect-differences-rcloneview)
- [RcloneView로 필터 규칙과 선택적 동기화 사용하기](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [RcloneView로 클라우드 파일 무결성 확인 및 검증하기](https://rcloneview.com/support/blog/check-verify-cloud-file-integrity-rcloneview)

<CloudSupportGrid />
