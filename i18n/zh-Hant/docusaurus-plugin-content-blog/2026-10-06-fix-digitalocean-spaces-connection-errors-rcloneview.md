---
slug: fix-digitalocean-spaces-connection-errors-rcloneview
title: "修復 DigitalOcean Spaces 連線錯誤 — 使用 RcloneView 排查端點與金鑰問題"
authors:
  - jay
description: "在 RcloneView 中檢查端點、區域和金鑰，修復存取遭拒、簽章不符等 DigitalOcean Spaces 連線錯誤。"
keywords:
  - 修復 DigitalOcean Spaces 連線錯誤
  - DigitalOcean Spaces 存取遭拒
  - Spaces SignatureDoesNotMatch
  - DigitalOcean Spaces 端點 區域
  - S3 相容儲存疑難排解
  - rclone DigitalOcean Spaces
  - RcloneView DigitalOcean Spaces
  - Spaces 存取金鑰
tags:
  - RcloneView
  - troubleshooting
  - tips
  - digitalocean-spaces
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復 DigitalOcean Spaces 連線錯誤 — 使用 RcloneView 排查端點與金鑰問題

> 大多數 DigitalOcean Spaces 連線失敗都可歸結為三項設定：端點、區域和存取金鑰。

您新增了 Spaces 遠端，但儲存桶清單是空的，或是每個請求都回傳存取遭拒或簽章錯誤。由於 Spaces 是 S3 相容服務，原因通常是遠端設定中的細微不符。RcloneView 讓您可以檢查並修正遠端，然後在同一個視窗中重新測試。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 先檢查端點和區域

Spaces 端點依區域而異，格式為 `<region>.digitaloceanspaces.com`，例如 `nyc3.digitaloceanspaces.com`。如果端點所在區域與建立 Space 的區域不同，即使金鑰正確，請求也會失敗。從 Remote 分頁開啟 Remote Manager，編輯該遠端，並將端點與 DigitalOcean 控制台中顯示的區域進行比對。

請使用僅含區域的基本端點，而不是包含儲存桶名稱的 Space 專用 URL。在端點中加入儲存桶名稱是出現奇怪的「bucket not found」結果的常見原因。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中編輯 S3 相容遠端的端點" class="img-large img-center" />

## 確認存取金鑰與密鑰

Spaces 使用自己的存取金鑰組，與您的 DigitalOcean API 權杖是分開的。把 API 權杖貼到金鑰欄位是常見的錯誤。如果不確定，請重新產生 Spaces 金鑰組，然後重新貼上這兩個值，並留意複製時可能混入的前後空白。

如果可以列出內容但上傳失敗，則該金鑰可能沒有對該 Space 的寫入權限。請建立具有適當權限的金鑰並更新遠端。

## 使用內建終端機測試

RcloneView 在底部 Info View 中包含 Terminal 分頁。執行 `rclone listremotes` 確認遠端存在，然後執行 `rclone about "myspaces:"` 或簡單的列表指令來查看原始錯誤文字。確切的錯誤訊息可以告訴您問題出在驗證、端點還是網路。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="顯示傳輸出錯的 RcloneView 工作紀錄" class="img-large img-center" />

請檢查 Log 分頁和 Job History 中反覆出現的失敗。如果錯誤只出現在大型傳輸中，可在工作的 Advanced Settings 中降低檔案傳輸數量以減輕負載。

## 排除網路和時間問題

簽章錯誤也可能由系統時鐘偏差過大引起，因為簽章請求依賴目前時間。請校正時鐘後重試。檢查 TLS 的企業 Proxy 和防火牆也可能中斷連線，因此如果金鑰和端點看起來沒問題，請換一個網路測試。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中向 DigitalOcean Spaces 執行傳輸" class="img-large img-center" />

## 快速開始

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 開啟 Remote Manager，編輯您的 Spaces 遠端，並確認區域端點。
3. 重新輸入 Spaces 存取金鑰和密鑰。
4. 先用一個小資料夾複製進行測試，然後重新執行完整工作。

正確設定的端點和金鑰組，可以把模糊的故障變成可靠、可重複的工作流程。

---

**相關指南：**

- [管理 DigitalOcean Spaces — 使用 RcloneView 同步與備份](https://rcloneview.com/support/blog/manage-digitalocean-spaces-cloud-sync-backup-rcloneview)
- [使用 RcloneView 修復 S3 存取遭拒的權限錯誤](https://rcloneview.com/support/blog/fix-s3-access-denied-permission-errors-rcloneview)
- [使用 RcloneView 修復 SSL/TLS 憑證錯誤](https://rcloneview.com/support/blog/fix-ssl-tls-certificate-errors-cloud-rcloneview)

<CloudSupportGrid />
