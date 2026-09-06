---
slug: fix-google-cloud-storage-auth-errors-rcloneview
title: "修復 Google Cloud Storage 驗證錯誤 — 使用 RcloneView 解決"
authors:
  - morgan
description: "排查 RcloneView 中 Google Cloud Storage 的驗證失敗問題,從缺少的 Project Number 到過期的 OAuth 權杖。"
keywords:
  - Google Cloud Storage 驗證錯誤
  - 修復 GCS 驗證錯誤
  - Google Cloud Storage Project Number
  - GCS OAuth 權杖過期
  - RcloneView Google Cloud Storage
  - Google Cloud Storage 權限被拒
  - GCS 連線問題排查
  - 雲端儲存驗證修復
tags:
  - RcloneView
  - troubleshooting
  - tips
  - google-cloud-storage
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復 Google Cloud Storage 驗證錯誤 — 使用 RcloneView 解決

> RcloneView 中大多數 Google Cloud Storage 驗證失敗,都能歸結為一個缺少的欄位或一個過期的權杖 — 以下說明如何分別找出並修復這兩者。

Google Cloud Storage 與個人 Google Drive 連線不同:設定遠端時需要 Project Number,其權限模型也是由 IAM 角色管理,而非單純的帳戶共用。只要其中一項設定錯誤,RcloneView 就會在你嘗試瀏覽儲存桶的當下拋出驗證或權限錯誤。本指南將說明最常見的原因,以及如何直接在 RcloneView 中逐一解決。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 診斷根本原因

Google Cloud Storage 遠端的驗證錯誤大致可分為三類:建立遠端時輸入的 Project Number 缺少或錯誤;Google 帳戶端已過期或遭撤銷的 OAuth 權杖;或服務帳戶的 IAM 角色未授予對目標儲存桶的讀寫權限。請先開啟 Remote Manager 檢查遠端設定 — 如果 Project Number 欄位是空的,或與擁有該儲存桶的專案不相符,那幾乎就是問題所在。

<img src="/support/images/en/blog/new-remote.png" alt="在 Remote Manager 中檢查 Google Cloud Storage 遠端設定" class="img-large img-center" />

如果 Project Number 看起來沒問題,下一個該懷疑的就是 OAuth 工作階段本身。權杖可能因密碼變更、在 Google 帳戶安全性設定中撤銷應用程式授權,或僅是長時間未使用而過期,進而失效。

## 重新驗證並修正專案設定

要修復過期的權杖,請編輯該遠端並重新執行以瀏覽器為基礎的 OAuth 登入流程 — 這樣不必從頭重建遠端就能更新憑證。若是 Project Number 不相符,請將該欄位更新為 Google Cloud Console 中顯示的正確專案 ID,然後儲存並重新連線。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="權杖錯誤後重新驗證 Google Cloud Storage 遠端" class="img-large img-center" />

RcloneView 可在 Windows、macOS 與 Linux 上透過單一視窗掛載並同步 90 多個供應商,因此遠端重新連線後,你不需要重新設定其他任何項目,就能立即恢復先前中斷的同步或掛載工作。在重新執行大型同步工作之前,可以使用內建的 Rclone Terminal 執行 `rclone about "yourremote:"` — 這是在真正進行傳輸之前,快速確認修復是否生效的方法。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="恢復同步工作前測試 Google Cloud Storage 連線" class="img-large img-center" />

## 防止問題反覆發生

如果錯誤按某種規律反覆出現,請檢查底層的 Google Cloud IAM 角色權限範圍是否設定得過窄 — 僅授予讀取權限的角色能成功通過驗證,但在任何上傳或刪除操作中都會失敗,這看起來更像是間歇性的驗證錯誤,而非權限問題。若情況持續發生或原因不明,可在 Settings 中開啟 Enable rclone Logging,將記錄層級設為 DEBUG,重現問題後在 Log 分頁中檢視詳細記錄項目,準確找出是哪一次 API 呼叫被拒絕。

## 開始使用

1. 前往 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 開啟 Remote Manager,核對你的 Google Cloud Storage 遠端的 Project Number。
3. 若權杖已過期,重新執行 OAuth 登入;若不相符,則修正 Project Number。
4. 在恢復同步或備份工作之前,於 Terminal 分頁中使用 `rclone about` 確認修復是否生效。

只要花五分鐘檢查這兩項設定,就能解決絕大多數 Google Cloud Storage 驗證問題。

---

**相關指南:**

- [管理 Google Cloud Storage 儲存桶 — 使用 RcloneView 同步與備份](https://rcloneview.com/support/blog/manage-google-cloud-storage-buckets-rcloneview)
- [修復 OAuth 權杖過期 — 使用 RcloneView 解決雲端同步錯誤](https://rcloneview.com/support/blog/fix-cloud-oauth-token-expired-refresh-rcloneview)
- [將 Amazon S3 同步到 Google Cloud Storage — 使用 RcloneView](https://rcloneview.com/support/blog/sync-s3-to-google-cloud-storage-rcloneview)

<CloudSupportGrid />
