---
slug: encrypt-cloud-backups-crypt-remote-guide-rcloneview
title: "Rclone Crypt로 클라우드 백업 암호화하기 — Google Drive, S3 등을 위한 제로 지식 암호화"
authors:
  - tayson
description: "rclone의 crypt 리모트를 사용해 업로드 전에 클라우드 파일을 암호화하세요. Google Drive, OneDrive, S3 등 모든 클라우드 제공업체에서 RcloneView로 제로 지식 암호화를 적용하는 완벽 가이드."
keywords:
  - encrypt cloud storage
  - rclone crypt remote
  - zero knowledge encryption cloud
  - encrypt google drive files
  - encrypted cloud backup
  - rclone encryption guide
  - encrypt onedrive files
  - client side encryption cloud
  - encrypt s3 files
  - encrypted cloud storage tool
tags:
  - RcloneView
  - encryption
  - crypt
  - security
  - feature
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Rclone Crypt로 클라우드 백업 암호화하기 — Google Drive, S3 등을 위한 제로 지식 암호화

> Google Drive에 파일을 업로드하면 Google이 그 내용을 읽을 수 있습니다. S3에 데이터를 저장하면 Amazon이 접근할 수 있습니다. Rclone의 crypt 리모트는 이를 바꿉니다 — 파일이 내 기기를 떠나기 전에 암호화됩니다.

클라우드 제공업체는 서버에 저장된 데이터를 "저장 시(at rest)" 암호화하지만, 키는 그들이 보유합니다. 즉 제공업체(그리고 잠재적으로 정부 기관, 제공업체를 침해한 해커, 또는 내부의 악의적인 직원)가 내 파일에 접근할 수 있다는 뜻입니다. Rclone의 crypt 리모트는 진정한 제로 지식 암호화를 제공합니다: 파일은 업로드되기 전에 내 기기에서 암호화되며, 오직 나만이 키를 가지고 있습니다.

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Crypt 리모트란?

Crypt 리모트는 기존의 모든 클라우드 리모트 위에 위치하는 가상 계층입니다:

```
Your Files → Crypt Remote (encrypts) → Cloud Remote (uploads encrypted blobs)
```

파일을 읽을 때는:

```
Cloud Remote (encrypted blobs) → Crypt Remote (decrypts) → Your Files
```

클라우드 제공업체는 암호화된 데이터만 저장합니다. 파일 이름, 디렉터리 이름, 파일 내용이 모두 암호화됩니다. 제공업체는 여러분이 무엇을 저장하고 있는지 볼 수 없습니다.

## Crypt 암호화 작동 방식

### 암호화 표준

- **파일 내용**: HMAC-SHA256 인증을 사용하는 CTR 모드의 AES-256.
- **파일 이름**: 선택적 난독화를 지원하는 AES-256 EME(encrypt-mix-encrypt).
- **디렉터리 이름**: 파일 이름과 동일(기본적으로 암호화됨).

### 암호화 대상

| 구성 요소 | 표준 모드 | 이름 암호화 사용 시 |
|-----------|:---:|:---:|
| 파일 내용 | ✅ 암호화됨 | ✅ 암호화됨 |
| 파일 이름 | ❌ 노출됨 | ✅ 암호화됨 |
| 디렉터리 이름 | ❌ 노출됨 | ✅ 암호화됨 |
| 파일 크기 | ❌ 노출됨(약간의 패딩 적용) | ❌ 노출됨(약간의 패딩 적용) |
| 디렉터리 구조 | ❌ 노출됨 | ✅ 암호화됨 |

**권장 사항**: 최대한의 프라이버시를 위해 항상 파일 이름 암호화를 활성화하세요.

## RcloneView에서 Crypt 설정하기

### 1단계: 기존 리모트 준비

먼저 클라우드 스토리지를 일반 리모트로 추가합니다(예: Google Drive, S3, Backblaze B2):

<img src="/support/images/en/blog/new-remote.png" alt="Add base cloud remote" class="img-large img-center" />

### 2단계: 그 위에 crypt 리모트 생성

**Crypt** 유형의 새 리모트를 추가합니다. 기존 리모트의 폴더를 가리키도록 구성합니다:

- **Remote**: `gdrive:encrypted-backup/` (Google Drive의 폴더).
- **File name encryption**: Standard(암호화됨).
- **Directory name encryption**: True.
- **Password**: 강력한 비밀번호(이것이 암호화 키입니다 — **분실하지 마세요**).
- **Password2 (salt)**: 추가 보안을 위한 부가 비밀번호.

### 3단계: crypt 리모트 사용

이제 crypt 리모트를 통해 파일을 탐색하거나 전송하면 모든 것이 투명하게 암호화됩니다. crypt 리모트를 통해 업로드하면 → 파일이 암호화된 상태로 Google Drive에 도착합니다. crypt 리모트를 통해 다운로드하면 → 파일이 자동으로 복호화됩니다.

## 암호화된 백업 워크플로

### 암호화된 백업 작업 설정

로컬 스토리지(또는 다른 클라우드)에서 crypt 리모트로 Copy 작업을 생성합니다:

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Create encrypted backup job" class="img-large img-center" />

### 매일 암호화된 백업 예약

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule encrypted backup" class="img-large img-center" />

### 클라우드 제공업체가 보는 것

누군가 여러분의 Google Drive를 살펴본다면 다음과 같이 보입니다:

```
encrypted-backup/
  q6r2v8s3f1g4h5j6k7l8/
    a1b2c3d4e5f6g7h8i9j0k1l2m3n4.bin
    p5q6r7s8t9u0v1w2x3y4z5a6b7c8.bin
  m9n0o1p2q3r4s5t6u7v8/
    d9e0f1g2h3i4j5k6l7m8n9o0p1q2.bin
```

파일 이름은 읽을 수 없습니다. 내용도 암호화되어 있습니다. 폴더 구조조차 숨겨져 있습니다.

### 여러분이 보는 것(crypt 리모트를 통해)

```
encrypted-backup/
  Documents/
    tax-return-2025.pdf
    passport-scan.jpg
  Medical/
    lab-results-march.pdf
```

정상적이고 읽을 수 있는 파일 — 즉시 복호화됩니다.

## 실용적인 활용 사례

### 1) 암호화된 Google Drive 백업

일상적으로 사용하는 개인 Google Drive. 같은 Google Drive에 민감한 파일의 암호화된 백업을 보관합니다:

```
gdrive:Documents/     ← Normal files (Google can see)
gdrive-crypt:Sensitive/ ← Encrypted (Google sees only blobs)
```

### 2) 암호화된 S3 아카이브

클라이언트 측 암호화로 S3에 민감한 데이터를 보관합니다. AWS 계정이 침해되더라도 비밀번호 없이는 데이터를 읽을 수 없습니다.

### 3) HIPAA/컴플라이언스 스토리지

저장 시 암호화가 요구되는 의료, 법률, 금융 데이터. Crypt 리모트는 검증 가능한 클라이언트 측 암호화를 제공합니다.

### 4) 국경 간 데이터 보호

제공업체의 데이터 접근 정책을 완전히 신뢰할 수 없는 클라우드 리전에 데이터를 저장하는 경우.

## 암호화된 백업 확인

crypt 리모트를 통해 폴더 비교(Folder Comparison)를 사용하여 암호화된 백업이 원본과 일치하는지 확인하세요:

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Verify encrypted backup" class="img-large img-center" />

## 중요한 경고

### 비밀번호를 분실하지 마세요

"비밀번호 찾기" 복구 기능은 없습니다. crypt 비밀번호를 분실하면 암호화된 데이터에 영구적으로 접근할 수 없습니다. 그 누구도 — rclone도, Google도, Amazon도 — 이를 복구할 수 없습니다.

**비밀번호를 안전하게 보관하세요:**

- 종이에 적어 물리적인 금고에 보관하세요.
- 암호화하는 클라우드와는 별개인 비밀번호 관리자를 사용하세요.
- 서로 다른 위치에 최소 두 개의 사본을 보관하세요.

### 암호화된 파일을 직접 수정하지 마세요

클라우드 제공업체 상의 암호화된 blob을 직접 편집하지 마세요. 항상 crypt 리모트를 통해 접근하세요. 직접 수정하면 파일이 손상됩니다.

### 성능에 미치는 영향

암호화는 약간의 CPU 오버헤드를 추가합니다:

- 최신 데스크톱과 노트북에서는 무시할 수 있는 수준입니다.
- Raspberry Pi나 저전력 기기에서는 체감될 수 있습니다.
- 네트워크 속도에는 영향을 주지 않습니다(암호화는 업로드 전에 이루어집니다).

## 여러 개의 Crypt 리모트

목적에 따라 서로 다른 crypt 리모트를 여러 개 만들 수 있습니다:

| Crypt Remote | Points To | Password | Use Case |
|-------------|-----------|----------|----------|
| crypt-personal | gdrive:encrypted/ | Password A | Personal sensitive files |
| crypt-work | s3:work-encrypted/ | Password B | Work documents |
| crypt-archive | b2:archive-encrypted/ | Password C | Long-term archive |

각각은 서로 다른 비밀번호와 서로 다른 기반 스토리지를 사용합니다.

## 시작하기

1. [rcloneview.com](https://rcloneview.com/src/download.html)에서 **RcloneView를 다운로드**하세요.
2. **클라우드 스토리지를 일반 리모트로 추가**하세요.
3. 해당 클라우드의 폴더를 가리키는 **crypt 리모트를 생성**하세요.
4. **강력한 비밀번호를 설정**하고 안전하게 보관하세요.
5. 모든 민감한 파일 작업에 **crypt 리모트를 사용**하세요.
6. 자동화를 위해 **암호화된 백업을 예약**하세요.

여러분의 데이터. 여러분의 키. 여러분의 통제.

---

**관련 가이드:**

- [동기화 작업 생성하기](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [작업 예약](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [폴더 내용 비교하기](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [HIPAA 준수 클라우드 스토리지](https://rcloneview.com/support/blog/cloud-storage-hipaa-compliance-healthcare-rcloneview)

<CloudSupportGrid />
