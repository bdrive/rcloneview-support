---
slug: troubleshoot-rclone-errors-rcloneview
title: "使用 RcloneView 排解 rclone 錯誤：修正 API 限制、權限、逾時等問題"
authors:
  - tayson
description: "透過 RcloneView 終端機、工作日誌與歷史紀錄診斷並修正常見的 rclone 錯誤，解決 API 限制、權限問題、逾時與資料完整性警告。"
keywords:
  - rclone error fix
  - rclone troubleshooting
  - rclone api rate limit
  - rclone permission denied
  - rclone timeout
  - rclone quota exceeded
  - rclone debugging
  - rcloneview errors
  - rclone cli gui
  - cloud automation
  - rcloneview
tags:
  - sync
  - file-management
unlisted: true

---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 排解 rclone 錯誤：修正 API 限制、權限、逾時等問題

> rclone 功能強大，但像 403 速率限制、逾時或「permission denied」這類錯誤可能會讓遷移作業卡住。RcloneView 結合了 CLI 的可視性與 GUI 的情境資訊，讓你能更快找出原因並安全地修正。

如果你曾經盯著滿螢幕的 rclone 輸出，納悶為什麼工作失敗，RcloneView 能縮短這個排查過程。內建的終端機、詳細日誌與工作歷史紀錄，能幫助你重現問題、找出失敗的檔案，並在不離開應用程式的情況下調整效能或驗證設定。

<!-- truncate -->

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />



## 為什麼會發生 rclone 錯誤

- API 限制與配額：來自 Google Drive、OneDrive、Dropbox 等的 403 或 429 回應。
- 驗證範圍問題：權杖過期或缺少權限。
- 路徑與權限不符：共用雲端硬碟、外部資料夾或錯誤的根路徑。
- 網路狀況：逾時、節流或連線不穩定。
- 完整性檢查：當服務供應商變更上傳內容時發生的校驗碼不符。

## 常見錯誤及其含義

| 錯誤 | 通常代表的意思 | 快速下一步 |
| --- | --- | --- |
| 403: Rate Limit Exceeded / 429 Too Many Requests | 服務供應商對請求進行了節流 | 降低 `--transfers`，加入 `--tpslimit`，並以退避重試 |
| Failed to copy: permission denied | 缺少對資料夾或檔案的存取權限 | 確認路徑、檢查共用雲端硬碟權限、以正確範圍重新驗證 |
| Failed to refresh token | OAuth 權杖過期或無效 | 透過 RcloneView 的 OAuth 流程重新連接遠端 |
| Directory not found | 路徑拼字錯誤或根路徑錯誤 | 使用 `rclone lsf remote:` 確認路徑 |
| Timeout waiting for connection | 網路不穩定或防火牆阻擋 | 降低並行數，並以 `--retries` 與 `--low-level-retries` 重試 |
| Upload failed: corrupted on transfer | 完整性檢查失敗 | 使用 `--checksum` 或 `rclone check` 重新執行 |

## 使用 RcloneView 終端機重現並檢查錯誤

在內建終端機中重新執行失敗的指令，以排除工作目錄或設定錯誤等變數。

- 開啟 **Terminal** 分頁，輸入 `rclone ` 以查看所有指令（自動完成）。[操作指南](/howto/rcloneview-basic/using-terminal-in-rcloneview)
- 加上 `-vv` 以取得可複製或分享的詳細輸出。

範例：

```bash
rclone about myremote: -vv
rclone lsf myremote:path -vv --dirs-only --recursive
rclone sync src: dst: -vv --transfers=8
```

<img src="/support/images/en/howto/rcloneview-basic/terminal/terminal-input-rclone.png" alt="RcloneView Terminal autocomplete" class="img-medium img-center" />

## 檢查工作日誌與歷史紀錄以找出規律

工作監控與歷史紀錄檢視能顯示哪些檔案失敗，以及失敗的頻率。

- **Job Monitor（工作監控）**：即時 Transfer 分頁顯示進行中的工作，另有已完成/API 日誌可查看已結束的執行。[查看步驟](/howto/rcloneview-basic/real-time-transfer-monitoring)
- **History（歷史紀錄）**：從工作管理員開啟特定工作的歷史紀錄，檢視每個檔案的結果。[查看步驟](/howto/rcloneview-basic/execute-manage-job)

<img src="/support/images/en/howto/rcloneview-basic/transfer-log.png" alt="Job Monitor transfer log" class="img-medium img-center" />

## 修正 API 速率限制與配額錯誤

- 降低並行度：在工作選項或指令旗標中降低 `--transfers` 與 `--checkers`。
- 加入友善的節流機制：對 API 限制嚴格的服務供應商使用 `--tpslimit` 與 `--tpslimit-burst`。
- 拆分大型工作：逐資料夾執行，或透過工作管理員排定於離峰時段執行。
- 使用增量執行：結合 Compare（比較）+ Sync（同步）僅移動已變更的檔案，以減少呼叫次數。

## 修正驗證與 OAuth 問題

- 使用 RcloneView 的 OAuth 提示，以正確範圍重新驗證遠端。
- 若權杖已過期或被撤銷，重新建立遠端，或透過終端機執行 `rclone config reconnect remote:` 進行更新。
- 對於共用雲端硬碟或委派帳戶，請確認遠端設定使用了正確的雲端硬碟或租戶 ID。

## 修正 permission denied 錯誤

- 在終端機中執行 `rclone lsf remote:folder`，確認路徑存在且你有存取權限。
- 對於 Google 共用雲端硬碟或 Dropbox 共用資料夾，確保遠端使用了正確的根路徑或雲端硬碟 ID。
- 若要複製到共用雲端硬碟，請確認你擁有寫入權限；否則請選擇你自己擁有的目的地。

## 修正逾時與不穩定連線

- 針對不穩定的連線降低並行度：`--transfers=2 --checkers=2`。
- 增加重試行為：`--retries=10 --retries-sleep=5s --low-level-retries=20`。
- 對於大型檔案，啟用多執行緒串流：`--multi-thread-streams=4 --multi-thread-cutoff=64M`。
- 在執行大型同步前，先於終端機使用輕量指令測試連線可達性：

```bash
rclone lsf remote: --max-depth 1 --fast-list -vv
```

## 修正資料完整性與校驗碼錯誤

- 以試跑模式驗證來源與目的地：在 Sync 或 Copy 工作中使用 `--dry-run`。
- 使用 `rclone check` 比較兩個遠端之間的校驗碼：

```bash
rclone check source:folder dest:folder --one-way --size-only
```

- 在支援的服務供應商上啟用校驗碼比對，以偵測靜默損毀。

## GUI 與終端機該如何選擇

- **GUI**：建立工作、排定定期備份、在同步前先進行 Compare（比較）、跨雲端拖放檔案。
- **Terminal（終端機）**：快速診斷錯誤、測試後端旗標，或以完整 `-vv` 日誌執行臨時指令。
- 兩者並用：先在終端機中試作，再將穩定的指令儲存為可重複使用的工作。

## 快速疑難排解清單

1. 在終端機中以 `-vv` 重現錯誤並複製日誌。
2. 檢查工作監控與歷史紀錄，找出失敗的檔案及其頻率。
3. 套用對應的修正類別：速率限制（降低並行度）、驗證（重新驗證）、權限（確認路徑/根路徑）、網路（降低執行緒數、增加重試次數）、完整性（執行 `check`）。
4. 在進行變更前，先以 `--dry-run` 重新執行。

## 結語

RcloneView 將 rclone 除錯轉化為有引導的工作流程：自動完成可避免語法錯誤，應用程式內的日誌可讓你了解失敗原因，GUI 控制項則能調整並行度或排程。搭配使用終端機與工作歷史紀錄，能更快解決錯誤，讓傳輸持續順利進行。

<CloudSupportGrid />
