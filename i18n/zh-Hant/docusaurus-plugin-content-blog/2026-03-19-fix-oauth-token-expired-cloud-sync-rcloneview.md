---
slug: fix-oauth-token-expired-cloud-sync-rcloneview
title: "修復 OAuth 權杖過期錯誤 — 在 RcloneView 中重新授權雲端帳戶"
authors:
  - tayson
description: "您的排程備份因為 OAuth 權杖過期而停止運作。以下說明如何診斷並修復 Google Drive、OneDrive、Dropbox 及其他 OAuth 供應商在 RcloneView 中的權杖過期問題。"
keywords:
  - oauth token expired
  - rclone token expired
  - google drive token refresh
  - onedrive oauth expired
  - fix cloud auth error
  - rclone re-authorize
  - cloud sync authentication
  - oauth refresh token
  - fix cloud connection
  - rcloneview re-auth
tags:
  - troubleshooting
  - tips
  - security
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復 OAuth 權杖過期錯誤 — 在 RcloneView 中重新授權雲端帳戶

> 您的每夜備份已經悄悄失敗兩週了。錯誤訊息顯示「token expired」。您的 Google Drive、OneDrive 或 Dropbox 連線只是需要重新授權 — 以下說明如何修復。

OAuth 權杖將 RcloneView 與 Google Drive、OneDrive、Dropbox、Box 等雲端供應商連接起來。這些權杖都有過期政策 — Google 權杖可以無限期使用，但可能被撤銷；Microsoft 權杖若 90 天未使用便會過期；密碼變更或安全事件則會使所有權杖失效。當權杖過期時，同步工作會在您察覺之前悄悄失敗。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 常見的權杖過期原因

| 供應商 | 權杖行為 |
|----------|---------------|
| Google Drive | 更新權杖在被撤銷前皆有效（但使用者或管理員可撤銷） |
| OneDrive | 未使用 90 天即過期；密碼變更會使其失效 |
| Dropbox | 在明確撤銷前皆有效 |
| Box | 60 天未更新即過期 |

## 症狀

- 排程工作出現「authentication」或「token」相關錯誤
- 手動瀏覽時顯示「unauthorized」訊息
- 工作紀錄顯示近期失敗次數逐漸增加

## 如何修復

### 先檢查工作紀錄

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Identify auth errors" class="img-large img-center" />

留意模式 — 如果某個供應商的所有工作都在同一天開始失敗，那就是權杖問題。

### 重新授權遠端

開啟遠端管理員，重新授權受影響的遠端。這會觸發新的 OAuth 流程 — 登入該供應商並再次授予存取權限。

<img src="/support/images/en/blog/new-remote.png" alt="Re-authorize remote" class="img-large img-center" />

您現有的工作設定會被保留，只有驗證權杖會更新。

### 驗證修復結果

執行測試同步以確認連線正常運作：

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Test after re-auth" class="img-large img-center" />

## 預防措施

- **啟用通知** — Slack/Discord/Telegram 提醒可讓您在工作失敗時立即得知
- **每週檢查工作紀錄** — 在失敗累積之前及早發現
- **避免變更密碼**，除非您同時重新授權雲端遠端
- **針對 Google Workspace 使用服務帳戶**（它們不會像使用者權杖那樣過期）

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. **檢查工作紀錄**，找出與驗證相關的失敗。
3. 在遠端管理員中**重新授權**受影響的遠端。
4. **設定通知**，以便及早發現未來的失敗。

只需 2 分鐘的重新授權，就能避免數週備份中斷的問題。

---

**相關指南：**

- [修復權限被拒錯誤](https://rcloneview.com/support/blog/fix-permission-denied-cloud-sync-errors-rcloneview)
- [排解 Rclone 錯誤](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [Slack 通知](https://rcloneview.com/support/blog/automate-cloud-sync-slack-notifications-rcloneview)

<CloudSupportGrid />
