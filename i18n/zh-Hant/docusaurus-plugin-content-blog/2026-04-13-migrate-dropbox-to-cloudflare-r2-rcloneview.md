---
slug: migrate-dropbox-to-cloudflare-r2-rcloneview
title: "將 Dropbox 遷移至 Cloudflare R2 — 使用 RcloneView 傳輸檔案"
authors:
  - tayson
description: "使用 RcloneView 將您的檔案從 Dropbox 移轉至 Cloudflare R2。透過 OAuth 與 API Token 連線,處理大型檔案,並享受 R2 的零流出費用。"
keywords:
  - migrate Dropbox to Cloudflare R2
  - Dropbox R2 transfer RcloneView
  - Dropbox to R2 migration
  - Cloudflare R2 cloud sync
  - zero egress cloud storage
  - cloud-to-cloud migration tool
  - Dropbox alternative R2
  - RcloneView migration guide
tags:
  - RcloneView
  - dropbox
  - cloudflare-r2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Dropbox 遷移至 Cloudflare R2 — 使用 RcloneView 傳輸檔案

> Cloudflare R2 提供與 S3 相容的物件儲存,且零流出費用——RcloneView 透過雲對雲同步作業,讓您輕鬆從 Dropbox 移轉。

Cloudflare R2 已成為想要脫離 Dropbox 的團隊極具吸引力的替代方案。由於沒有流出費用,並支援與 S3 相容的 API,R2 能自然融入開發者工作流程、靜態資源管線,以及注重成本的封存策略。將您現有的 Dropbox 檔案移轉到 R2,是一次性的雲對雲遷移,RcloneView 能在不經由您本機的情況下完成處理。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 步驟 1 — 連接 Dropbox

開啟 RcloneView 並前往**遠端管理器**。點擊**新增遠端**並選擇 **Dropbox**。如同大多數 OAuth 供應商,Dropbox 會開啟您的瀏覽器以進行授權——登入並點擊「允許」。RcloneView 會儲存該 token,遠端隨即出現。在檔案總管中開啟它,確認您的 Dropbox 檔案與資料夾都可見。

若您使用 Dropbox Business 帳號,請確認您登入的帳號擁有您要遷移內容的擁有權。由他人擁有的共用資料夾可能會有存取限制。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting Dropbox and Cloudflare R2 in RcloneView Remote Manager" class="img-large img-center" />

## 步驟 2 — 連接 Cloudflare R2

在**遠端管理器**中,點擊**新增遠端**並選擇 **S3 Compatible**。Cloudflare R2 使用與 S3 相容的憑證:

- **Access Key ID**:來自您的 Cloudflare R2 API Token(可在 Cloudflare 控制台的 R2 > Manage API Tokens 中建立)
- **Secret Access Key**:對應的密鑰
- **Endpoint**:`https://{account-id}.r2.cloudflarestorage.com`

您的 Account ID 會顯示在 Cloudflare 控制台側邊欄。儲存該遠端並開啟它,確認您的 R2 儲存桶可見。若目標儲存桶尚不存在,請先建立。

## 步驟 3 — 設定遷移作業

前往**作業**並點擊**新增作業**。將 Dropbox 設為來源。您可以選擇根目錄以遷移所有內容,或選取特定資料夾。將 Cloudflare R2 設為目的地,並指向您的目標儲存桶。

在作業精靈的第二步,設定此次遷移的選項:

- 一開始先啟用**試跑(Dry Run)**以預覽檔案清單
- 針對 Dropbox 遷移,將**傳輸數**設為 4–6(較高的數值可能觸發 Dropbox 的速率限制)
- 啟用**校驗和驗證**,以確認大型檔案傳輸時未發生損毀

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Migrating files from Dropbox to Cloudflare R2 cloud-to-cloud" class="img-large img-center" />

## 處理大型檔案

Cloudflare R2 支援最高 5 TB 的物件,RcloneView 會自動對大型檔案使用分段上傳(multipart upload)。Dropbox 每個檔案的大小上限為 2 TB。實務上,大多數 Dropbox 遷移的檔案都遠低於此限制。若您有極大型檔案且傳輸失敗,請查看「記錄」分頁以取得具體的錯誤訊息,並考慮減少同時傳輸的數量。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer progress during Dropbox to R2 migration" class="img-large img-center" />

## 步驟 4 — 驗證並完成

主要遷移作業完成後,使用**資料夾比對**進行驗證。並排開啟 Dropbox 來源與 R2 目的地,讓 RcloneView 找出任何差異。針對缺漏的檔案重新執行作業。當您確認遷移已完成後,即可將應用程式改為指向 R2,並逐步停用 Dropbox 存取權限。

## 開始使用

1. 前往 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在**遠端管理器**中透過 OAuth 連接 Dropbox。
3. 使用您的 API Token、Secret 與 Account ID endpoint 連接 Cloudflare R2。
4. 建立遷移作業,執行試跑以預覽,接著執行完整傳輸。

改用 Cloudflare R2 可擺脫 Dropbox 按使用者計費的模式,並免除從 Cloudflare 網路存取內容時的流出費用。

---

**相關指南:**

- [使用 RcloneView 將 Wasabi 遷移至 Cloudflare R2](https://rcloneview.com/support/blog/migrate-wasabi-to-cloudflare-r2-rcloneview)
- [使用 RcloneView 將 Azure Blob 遷移至 Cloudflare R2](https://rcloneview.com/support/blog/migrate-azure-blob-to-cloudflare-r2-rcloneview)
- [使用 RcloneView 修正 Dropbox 速率限制 API 錯誤](https://rcloneview.com/support/blog/fix-dropbox-rate-limit-api-errors-rcloneview)

<CloudSupportGrid />
