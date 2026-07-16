---
slug: fix-filename-special-characters-cloud-sync-rcloneview
title: "클라우드 동기화에서 파일명 길이 초과 및 특수문자 오류 해결하기 — RcloneView 가이드"
authors:
  - tayson
description: "파일명 때문에 클라우드 동기화가 실패하나요? 긴 경로, 특수문자, 인코딩 불일치는 눈에 띄지 않는 오류를 일으킵니다. RcloneView에서 이러한 문제를 진단하고 해결하는 방법을 알아보세요."
keywords:
  - filename too long cloud
  - special characters cloud sync
  - cloud sync filename error
  - path too long error
  - rclone filename encoding
  - cloud storage filename limit
  - unicode filename cloud
  - onedrive path length limit
  - google drive filename issues
  - fix cloud sync file errors
tags:
  - RcloneView
  - troubleshooting
  - cloud-storage
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 클라우드 동기화에서 파일명 길이 초과 및 특수문자 오류 해결하기 — RcloneView 가이드

> 동기화 작업이 47개의 파일에서 실패합니다. 오류 메시지는 "파일명이 너무 깁니다" 또는 "잘못된 문자입니다"라고 말합니다. 파일들은 여러분이 보기에는 전혀 문제가 없어 보입니다. 이것이 바로 프로바이더 간 파일명 호환성 문제입니다.

모든 클라우드 프로바이더는 파일명에 대해 서로 다른 규칙을 가지고 있습니다. Google Drive에서는 완벽하게 유효한 이름이 OneDrive에서는 사용할 수 없을 수 있습니다. S3에서 작동하는 경로가 Dropbox의 문자 수 제한을 초과할 수도 있습니다. 프로바이더 간 동기화 시 이러한 불일치는 전체 전송 작업을 막을 수 있는 답답한 오류를 발생시킵니다. 이 가이드에서는 가장 흔한 문제와 해결 방법을 다룹니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 흔한 파일명 문제

### 경로 길이 제한

| 프로바이더 | 최대 경로 길이 |
|----------|----------------|
| OneDrive | 400자 |
| SharePoint | 400자 |
| Google Drive | 32,768자 |
| S3 | 1,024자 |
| Dropbox | 260자 |
| 로컬 (Windows) | 260자 (기본값) |

이름이 긴 폴더가 여러 단계로 중첩되면 OneDrive나 Dropbox의 제한을 금방 초과합니다.

### 사용할 수 없는 문자

| 문자 | Google Drive | OneDrive | S3 | Dropbox |
|-----------|-------------|----------|-----|---------|
| `\` | 허용 | 허용 안 됨 | 허용 | 허용 안 됨 |
| `?` | 허용 | 허용 안 됨 | 허용 | 허용 안 됨 |
| `*` | 허용 | 허용 안 됨 | 허용 | 허용 안 됨 |
| `:` | 허용 | 허용 안 됨 | 허용 | 허용 안 됨 |
| `<` `>` `\|` | 허용 | 허용 안 됨 | 허용 | 허용 안 됨 |

Google Drive에서 이름에 `?`나 `:`를 포함해 만든 파일은 OneDrive로 동기화할 때 실패합니다.

### 후행 공백과 마침표

OneDrive와 Windows는 공백이나 마침표로 끝나는 파일명을 거부합니다. Google Drive는 이를 허용합니다. 이로 인해 눈에 잘 띄지 않는 동기화 실패가 발생합니다.

### 유니코드 및 인코딩 문제

한글, 일본어, 중국어, 이모지와 같은 비-ASCII 문자는 대부분의 프로바이더에서 작동하지만, 오래된 시스템이나 특정 S3 호환 프로바이더에서는 문제를 일으킬 수 있습니다.

## 진단 방법

### 작업 기록 확인

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Find filename errors in job history" class="img-large img-center" />

작업 기록에서는 정확히 어떤 파일이 왜 실패했는지 확인할 수 있습니다. "invalid," "too long," "not allowed" 등이 포함된 오류 메시지를 확인하세요.

### 문제가 되는 파일 식별하기

RcloneView의 터미널에서 `rclone check`를 verbose 옵션과 함께 실행하면, 전송을 시도하기 전에 실패할 파일 목록을 미리 확인할 수 있습니다.

## 해결 방법

### 원본에서 문제가 되는 파일명 변경

가장 깔끔한 해결책은 동기화하기 전에 원본에서 사용할 수 없는 문자를 제거하거나 경로를 단축하도록 파일명을 변경하는 것입니다.

### rclone의 인코딩 플래그 사용

rclone은 전송 중에 사용할 수 없는 문자를 자동으로 인코딩할 수 있습니다. RcloneView의 리모트 설정에서 이를 구성하여 프로바이더 간 호환성 문제를 처리하세요.

### 깊은 폴더 구조 평탄화

경로 길이가 문제라면, 여러 단계로 중첩된 폴더를 더 단순한 구조로 재구성하세요.

### 폴더 비교로 불일치 찾기

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Find filename mismatches" class="img-large img-center" />

폴더 비교 기능은 원본에는 있지만 대상에는 없는 파일을 강조 표시합니다. 이는 대개 파일명 문제로 인해 실패한 파일들입니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. 작은 폴더로 먼저 **테스트 동기화를 실행**하세요.
3. **작업 기록을 확인**하여 파일명 관련 오류를 찾으세요.
4. 원본에서 **파일명을 수정**하거나 인코딩을 설정하세요.
5. 폴더 비교로 **다시 실행하고 검증**하세요.

수정 방법은 보통 오류 메시지가 암시하는 것보다 훨씬 간단합니다.

---

**관련 가이드:**

- [권한 거부 오류 해결하기](https://rcloneview.com/support/blog/fix-permission-denied-cloud-sync-errors-rcloneview)
- [클라우드 API 속도 제한 설명](https://rcloneview.com/support/blog/cloud-api-rate-limits-explained-rcloneview)
- [Rclone 오류 문제 해결하기](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />
