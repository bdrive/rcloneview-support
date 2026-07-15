---
sidebar_position: 15
description: "RcloneView의 가상 리모트(Virtual Remote)를 이해하고, 더 빠르고 안전한 클라우드 워크플로우를 위해 Alias, Crypt, Combine, Union 등의 가상 레이어를 추가하는 방법을 알아보세요."
keywords:
  - rcloneview
  - virtual remote
  - alias
  - crypt
  - union
  - combine
  - cache
  - chunker
  - hasher
  - compress
tags:
  - RcloneView
  - virtual-remote
  - remote-storage
  - encryption
  - multi-cloud
date: 2025-12-08
author: tayson
---

# 가상 리모트(Virtual Remote) 개요 및 설정

가상 리모트는 기존 클라우드 리모트 위에 기능 레이어를 추가합니다. 가상 리모트 자체는 데이터를 저장하지 않으며, 대신 기존 리모트를 더 편리하고, 더 빠르고, 더 안전하고, 더 유연하게 만들어 줍니다.

---

## 가상 리모트란?

가상 리모트는 다음과 같은 기능 레이어입니다.

- 데이터를 이동하지 않고 기존 리모트를 확장합니다.
- 원본 리모트에 스토리지를 그대로 유지하면서 편의 기능을 추가합니다.
- 더 빠른 접근, 프라이버시, 통합된 뷰를 지원합니다.

---

## 가상 리모트 종류

RcloneView는 9가지 가상 리모트 유형을 제공합니다.

1. **Alias**  
   특정 클라우드 폴더로 바로 이동하는 바로가기입니다.  
   예시: Google Drive의 깊은 경로를 북마크하여 즉시 접근할 수 있습니다.  
   👉 참고: [Alias 리모트 가이드](/howto/remote-storage-connection-settings/alias-remote)

2. **Crypt**  
   파일 이름, 내용, 폴더를 암호화하여 프라이버시를 보호합니다.  
   👉 참고: [Crypt 리모트 가이드](/howto/remote-storage-connection-settings/crypt-remote)

3. **Memory**  
   RAM에 데이터를 저장하여 초고속 임시 사용이 가능하며, 종료 시 삭제됩니다.

4. **Cache**  
   느린 리모트를 캐싱으로 빠르게 만들어 반복 읽기와 스트리밍 속도를 높입니다.

5. **Chunker**  
   큰 파일을 청크 단위로 분할하여 서비스 용량 제한을 우회하고 안정성을 높입니다.

6. **Combine**  
   여러 폴더를 하나의 리모트 아래 개별 하위 폴더로 보여줍니다.  
   👉 참고: [Combine 리모트 가이드](/howto/remote-storage-connection-settings/combine-remote)

7. **Union**  
   여러 폴더를 하나로 병합하여 통합된 뷰로 보여줍니다.  
   👉 참고: [Union 리모트 가이드](/howto/remote-storage-connection-settings/union-remote)

8. **Hasher**  
   백엔드에 해시 기능이 없는 경우 해시 기능을 추가하여 무결성 검사에 활용할 수 있습니다.

9. **Compress**  
   업로드 전 파일을 압축하여 저장 공간을 절약합니다.

---

## 가상 리모트 추가 방법

모든 가상 리모트는 **새 리모트 > Virtual** 에서 생성합니다.

<img src="/support/images/en/howto/remote-storage-connection-settings/add-remote-virtual.png" alt="add virtual remote" class="img-large img-center" />

### 1단계 — 새 리모트 열기

- 상단 메뉴에서: **`Remote` > `New Remote`**.
- **`Virtual`** 탭을 선택하면 모든 가상 리모트 유형을 확인할 수 있습니다.

### 2단계 — 가상 리모트 유형 선택

각 유형마다 필요한 입력 항목이 다릅니다. 예시:

- **Alias**: 이름 + 대상 폴더.
- **Crypt**: 암호화 비밀번호 + 대상 폴더.
- **Union**: 여러 개의 `Remote:Path` 업스트림.
- **Combine**: 디렉터리 라벨 + 리모트 경로 목록.
- **Chunker**: 소스 리모트 + 청크 설정.

RcloneView는 각 유형에 필요한 입력 항목을 안내해 줍니다.

### 3단계 — 가상 리모트 사용하기

생성 후, 가상 리모트는 다음 화면에서 일반 리모트와 동일하게 표시됩니다.

- **리모트 관리자(Remote Manager)**
- **탐색기(Explorer)** 파일 브라우저
- **동기화 / 비교 / 작업(Sync / Compare / Job)** 대화상자

기억하세요: 가상 리모트는 기능 레이어입니다. 실제 파일은 원본 리모트 경로에 그대로 남아 있습니다.

---

## 가상 리모트 사용 시점

| 필요 사항                          | 추천 가상 리모트 |
| ----------------------------------- | ----------------- |
| 클라우드 보안 강화                  | Crypt              |
| 여러 폴더를 함께 보기               | Union              |
| 복잡한 경로 북마크 또는 정리        | Alias              |
| 복잡한 프로젝트 정리                | Combine            |
| 매우 큰 파일 업로드                 | Chunker            |
| 반복 읽기 속도 향상                 | Cache              |
| 데이터 무결성 검증                  | Hasher             |
| 압축으로 저장 공간 절약             | Compress           |

---

## 빠른 참조

| 가상 리모트 | 역할                                      |
| ------------ | ----------------------------------------- |
| Alias        | 폴더 바로가기                              |
| Crypt        | 암호화된 스토리지                          |
| Memory       | RAM 기반 임시 저장소                       |
| Cache        | 캐싱을 통한 속도 향상                      |
| Chunker      | 업로드를 위한 대용량 파일 청크 분할         |
| Combine      | 여러 폴더를 개별 뷰로 그룹화                |
| Union        | 여러 폴더를 하나의 뷰로 병합                |
| Hasher       | 무결성 검사를 위한 해시 기능 추가           |
| Compress     | 업로드 전 파일 압축                        |

가상 리모트는 클라우드 워크플로우를 더욱 강력하고 유연하게 만들어 줍니다. RcloneView에서는 복잡한 설정 없이 몇 번의 클릭만으로 이러한 기능을 활성화할 수 있습니다.

