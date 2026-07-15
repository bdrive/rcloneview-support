---
sidebar_position: 11
description: RcloneView의 작업 모니터(Job Monitor) 인터페이스를 사용하여 동기화, 복사, 삭제와 같은 진행 중 및 완료된 파일 작업을 추적하세요.
keywords:
  - rcloneview
  - Job Monitor
  - Transfer Log
  - Rclone API Logs
  - file transfer
  - sync progress
  - job logs
tags:
  - RcloneView
  - Job-Management
  - Monitoring
  - Transfer-log
  - Completed-log
  - API-log
  - Sync
date: 2025-06-22
author: Jay
---
# 작업 모니터(Job Monitor)

RcloneView는 동기화, 복사, 삭제와 같은 진행 중 및 완료된 파일 작업의 상태를 추적, 검토, 관리할 수 있도록 **작업 모니터(Job Monitor)** 인터페이스를 제공합니다. 이 인터페이스는 세 가지 주요 탭으로 구성됩니다.

## Transfer 탭 - 진행 중인 작업

<img src="/support/images/en/howto/rcloneview-basic/transfer-log.png" alt="transfer log" class="img-medium img-center" />
이 탭에는 현재 활성 상태인 모든 파일 전송 작업이 표시됩니다.

**열(Columns):**
- **Job**: 작업 유형을 나타냅니다(예: Sync, Copy, Delete).
- **Source / Destination**: 원본 및 대상 경로를 표시합니다.
- **Received Size**: 전송된 데이터 양 / 전체 크기.
- **Speed**: 현재 전송 속도.
- **Progress**: 현재 작업의 진행 상황을 시각적으로 보여주는 막대.
- **Percentage**: 전송 완료 비율.
- **Time Left**: 예상 남은 시간.
- **Job ID**: 이 작업을 참조하는 데 사용되는 내부 ID.
- **Cancel**: 진행 중인 작업을 취소하려면 ❌ 아이콘을 클릭하세요.

## Completed 탭 - 작업 기록

<img src="/support/images/en/howto/rcloneview-basic/completed-log.png" alt="completed log" class="img-medium img-center" />
이 탭에는 이전에 실행된 모든 작업과 그 결과가 나열됩니다.

**열(Columns):**
- **Job**: 작업 유형(Sync, Copy, Delete 등).
- **Source / Destination**: 원본 및 대상 경로.
- **Status**: 결과 상태(예: Success, Errors).
- **Started At**: 작업 시작 시간.
- **Time Spent**: 작업의 총 소요 시간.
- **Files**: 전송된 파일 수.
- **Size**: 총 데이터 크기.
- **Speed**: 평균 전송 속도.
- **Job ID**: 내부 작업 참조 ID.
- **Delete**: 기록을 삭제하려면 <img src="/support/icons/delete-files.png" alt="delete files" class="inline-icon" /> 아이콘을 클릭하세요.

## Log 탭 - API 통신 로그

<img src="/support/images/en/howto/rcloneview-basic/log-tab.png" alt="log tab" class="img-medium img-center" />

이 탭에는 RcloneView와 Rclone API 간 통신에 대한 백엔드 로그가 표시됩니다.

**열(Columns):**
- **Time**: 작업 요청의 타임스탬프.
- **Event Type**: 로그 레벨(예: INFO, ERROR).
- **Job Type**: 작업 유형(Sync, Copy, Delete 등).
- **Message**: 작업 결과.
- **Details**: 추가 내부 메타데이터(예: JSON 형태의 작업 ID).

문제 해결이나 시스템 수준의 상호작용을 검토할 때 이 탭을 사용하세요.

:::tip
- 각 작업 기록은 **Job ID**를 통해 탭 간에 서로 연결됩니다.
- 로그는 실시간으로 자동 업데이트됩니다.
- Completed 탭과 Log 탭은 수동으로 삭제하지 않는 한 애플리케이션을 재시작해도 기록이 유지됩니다.
:::
