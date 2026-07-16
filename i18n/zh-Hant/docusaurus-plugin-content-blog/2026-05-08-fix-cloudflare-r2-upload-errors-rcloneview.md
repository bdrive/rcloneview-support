---
slug: fix-cloudflare-r2-upload-errors-rcloneview
title: "修復 Cloudflare R2 上傳錯誤 — 如何用 RcloneView 解決"
authors:
  - jay
description: "診斷並修復 RcloneView 中的 Cloudflare R2 上傳與同步錯誤 — 涵蓋 API 權杖權限、端點設定、多部分上傳失敗以及速率限制問題。"
keywords:
  - Cloudflare R2 上傳錯誤 RcloneView
  - 修復 R2 同步錯誤
  - Cloudflare R2 API 權杖錯誤
  - R2 多部分上傳失敗
  - RcloneView Cloudflare R2 疑難排解
  - 修復 R2 403 權限錯誤
  - Cloudflare R2 連線問題
  - rclone R2 上傳修復
tags:
  - cloudflare-r2
  - troubleshooting
  - tips
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復 Cloudflare R2 上傳錯誤 — 如何用 RcloneView 解決

> Cloudflare R2 有特定的憑證與端點要求,設定錯誤時會導致問題。以下說明如何診斷並修復 RcloneView 中最常見的 R2 上傳與同步失敗。

Cloudflare R2 是一個相容於 S3 的物件儲存服務,免除了出站流量費用,因此非常適合用於內容分發與備份工作負載。不過,R2 的驗證模式與標準 AWS S3 略有不同 — 它使用 Account ID 搭配 API 權杖,而非大多數 S3 使用者熟悉的 IAM 風格金鑰對。在 RcloneView 中正確設定這些細節,是解決大多數 R2 錯誤的關鍵。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 錯誤:403 Forbidden 或憑證無效

最常見的 R2 錯誤是 `403 Forbidden` 回應,通常是因為 API 權杖設定錯誤所致。在 **Remote tab → New Remote** 新增 Cloudflare R2 時,你需要三項資訊:**R2 API Token**(具備該特定儲存貯體的物件讀寫權限)、**Account ID**(可在 Cloudflare 控制台找到),以及格式為 `https://<ACCOUNT_ID>.r2.cloudflarestorage.com` 的 R2 端點 URL。

常見的錯誤是使用 Global API Key,而非 R2 專屬的 API 權杖。請在 Cloudflare 的 R2 區段中的 **Manage API Tokens** 產生一個專屬的 API 權杖,並確認它至少具備目標儲存貯體的「Object Read & Write」權限。如果你在列出儲存貯體時遇到 `403` 錯誤,但存取個別檔案時沒有問題,可能是該權杖缺少儲存貯體層級的列出權限 — 請重新產生具備「Account → R2 → Read/Write」範圍的權杖。

<img src="/support/images/en/blog/new-remote.png" alt="Configuring Cloudflare R2 credentials in RcloneView" class="img-large img-center" />

## 錯誤:多部分上傳失敗或上傳不完整

R2 支援多部分上傳(超過 100MB 的檔案需要使用),但未完成的多部分上傳可能會在你的儲存貯體中留下孤立的分段,並導致同名檔案後續的上傳失敗。在 RcloneView 的 **Log tab** 中,留意類似 `upload multipart failed` 或 `NoSuchUpload` 的訊息。

修復方法是先透過 Cloudflare 控制台或 RcloneView 內建的 rclone 終端機,清除 R2 儲存貯體中孤立的多部分上傳。接着,在該工作的 Advanced Settings 中降低並行多部分串流的數量,再重試上傳。透過 Settings 中的 **Global Rclone Flags** 選項設定 `--s3-upload-concurrency 4`,可以讓大型檔案上傳到 R2 時更穩定。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Retrying a failed R2 upload job in RcloneView" class="img-large img-center" />

## 端點與區域錯誤

Cloudflare R2 不使用標準的 AWS 區域代碼。如果你看到 `NoSuchBucket` 或 `InvalidLocationConstraint` 錯誤,請確認遠端設定中的端點 URL。正確格式為 `https://<YOUR_ACCOUNT_ID>.r2.cloudflarestorage.com` — 其中的 account ID 必須與你的 Cloudflare 帳號完全一致。R2 的區域欄位應留空,或設定為 `auto`。

如果你是從其他 S3 服務複製端點,請仔細檢查它是否以你的 Account ID 前綴開頭,而不是像 `s3.us-east-1.amazonaws.com` 這樣的 AWS 區域 URL。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring R2 upload after fixing configuration errors" class="img-large img-center" />

## 快速入門

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 確認你的 R2 API Token 在目標儲存貯體上具備物件讀寫權限。
3. 確認端點 URL 使用格式 `https://<ACCOUNT_ID>.r2.cloudflarestorage.com`。
4. 針對大型檔案,降低多部分上傳的並行數,並清除任何孤立的上傳。

只要設定正確,搭配 RcloneView 使用 Cloudflare R2 便能以可預期的成本,為備份與封存提供優異的效能。

---

**相關指南:**

- [用 RcloneView 管理 Cloudflare R2 雲端儲存](https://rcloneview.com/support/blog/manage-cloudflare-r2-cloud-sync-rcloneview)
- [用 RcloneView 修復 S3 拒絕存取權限錯誤](https://rcloneview.com/support/blog/fix-s3-access-denied-permission-errors-rcloneview)
- [用 RcloneView 修復 S3 多部分上傳失敗](https://rcloneview.com/support/blog/fix-s3-multipart-upload-failures-rcloneview)

<CloudSupportGrid />
