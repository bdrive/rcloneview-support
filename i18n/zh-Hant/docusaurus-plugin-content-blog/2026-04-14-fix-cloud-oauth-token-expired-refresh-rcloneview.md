---
slug: fix-cloud-oauth-token-expired-refresh-rcloneview
title: "修復雲端儲存的過期 OAuth 權杖——使用 RcloneView 重新連線"
authors:
  - tayson
description: "了解如何在 RcloneView 中診斷並修復 Google Drive、Dropbox、OneDrive 及其他 OAuth 型雲端供應商的過期 OAuth 權杖錯誤。"
keywords:
  - expired OAuth token cloud storage
  - fix rclone OAuth token expired
  - Google Drive token expired RcloneView
  - Dropbox authorization token error
  - OneDrive token refresh rclone
  - cloud storage authentication error
  - rclone reconnect cloud provider
  - fix cloud login expired RcloneView
tags:
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復雲端儲存的過期 OAuth 權杖——使用 RcloneView 重新連線

> Google Drive、Dropbox、OneDrive 及其他供應商的 OAuth 權杖會定期過期。以下說明如何在 RcloneView 中辨識此錯誤，並在不遺失遠端設定的情況下重新驗證。

以 OAuth 為基礎的雲端供應商——Google Drive、Dropbox、Microsoft OneDrive、Box、pCloud、Yandex Disk 等——是透過權杖而非密碼授予存取權限。這些權杖有各自的過期政策：有些只要應用程式持續運作就會自動更新，有些則會在閒置 90 至 180 天後過期，或是當供應商的安全系統偵測到異常存取模式時過期。當權杖過期時，RcloneView 的同步工作會開始出現驗證錯誤，看起來令人擔憂，但其實很容易修復。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 辨識過期權杖錯誤

過期的 OAuth 權杖錯誤會出現在 RcloneView 的 **Log 分頁**中，訊息類似如下：

- Google Drive：`oauth2: cannot fetch token: 401 Unauthorized` 或 `Token has been expired or revoked`
- Dropbox：`invalid_grant` 或 `Token is expired`
- OneDrive：`AADSTS70008: The refresh token has expired`
- Box：`401 Unauthorized: The access token provided has expired`

Transferring 分頁會顯示工作在 0% 時立即失敗，沒有任何檔案被傳輸。該遠端在 Explorer 面板中也可能顯示為無法連線——瀏覽該遠端時會傳回錯誤，而非資料夾清單。

<img src="/support/images/en/blog/new-remote.png" alt="Viewing remote configuration in RcloneView to fix token errors" class="img-large img-center" />

## 透過 Remote Manager 重新驗證

若要更新過期的 OAuth 權杖，請前往 **Remote 分頁 → Remote Manager**，選取受影響的遠端，然後按一下 **Edit**。在遠端設定畫面中，找到 OAuth 權杖區段，按一下重新驗證按鈕（或清除現有權杖）。RcloneView 會在您的瀏覽器中開啟供應商的 OAuth 授權頁面。

使用您的雲端帳號憑證登入，重新授予 RcloneView（透過 rclone）存取權限，新的權杖便會自動儲存。關閉瀏覽器分頁並返回 RcloneView——此時該遠端應可成功連線。您可以在 Explorer 面板中瀏覽該遠端來測試。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring reconnected cloud remote transfer in RcloneView" class="img-large img-center" />

## 權杖政策較嚴格的供應商

**Google Drive** 的重新整理權杖只要應用程式已由帳號擁有者授權、且尚未在 Google 安全性設定中撤銷 rclone 應用程式的存取權，就會一直有效。如果您已在「Google 帳戶 → 第三方應用程式」中撤銷存取權限，就需要從頭重新授權。

**Microsoft OneDrive** 的權杖在閒置 90 天後會過期。如果您已經三個月沒有進行同步，就要預期需要重新驗證。OneDrive for Business 的權杖也可能因 Azure AD 管理員設定的組織政策而更早過期。

**Box** 與 **Dropbox** 的權杖通常有效期較長，但若您變更了帳號密碼、首次啟用兩步驟驗證，或供應商偵測到安全性事件，權杖就會過期。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing failed jobs due to token expiry in RcloneView job history" class="img-large img-center" />

## 預防未來中斷

為每個 OAuth 遠端安排至少一項每週執行一次的小型同步工作，即使不傳輸任何內容也無妨。持續使用權杖可以防止像 OneDrive 這類因閒置而觸發的過期問題。請定期檢查 Job History 分頁，以便及時發現工作失敗，而不是拖延數天才被注意到。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 同步工作失敗後，檢查 Log 分頁中是否有 OAuth 過期錯誤訊息。
3. 開啟 Remote Manager，選取受影響的遠端，按一下 Edit 重新驗證。
4. 在重新執行失敗的工作之前，先在 Explorer 面板中測試連線。

在 RcloneView 中更新 OAuth 權杖只需不到兩分鐘——重新驗證完成後，所有先前設定的同步工作都會恢復正常運作，無需其他變更。

---

**相關指南：**

- [使用 RcloneView 修復 Google Drive 配額與速率限制錯誤](https://rcloneview.com/support/blog/fix-google-drive-quota-rate-limit-api-errors)
- [使用 RcloneView 排解 Rclone 錯誤](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)
- [使用 RcloneView 的同步完成通知提醒](https://rcloneview.com/support/blog/notification-alerts-sync-complete-rcloneview)

<CloudSupportGrid />
