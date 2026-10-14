---
slug: fix-scaleway-object-storage-connection-errors-rcloneview
title: "修復 Scaleway Object Storage 連線錯誤 — 使用 RcloneView 解決"
authors:
  - steve
description: "在 RcloneView 中排查 Scaleway Object Storage 連線錯誤：修復 S3 相容遠端的區域、端點和存取金鑰不符問題。"
keywords:
  - scaleway object storage 錯誤
  - 修復 scaleway 連線
  - RcloneView scaleway
  - S3 相容疑難排解
  - scaleway 端點 區域
  - scaleway 儲存貯體存取被拒
  - scaleway 存取金鑰
  - rclone scaleway 遠端
tags:
  - RcloneView
  - troubleshooting
  - tips
  - object-storage
  - s3-compatible
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復 Scaleway Object Storage 連線錯誤 — 使用 RcloneView 解決

> 大多數 Scaleway 連線失敗都源於區域、端點或金鑰不符 — 以下說明如何在 RcloneView 中找出並修復。

Scaleway Object Storage 透過 S3 相容協定存取，因此遠端需要相符的 Access Key、Secret Key、區域和端點。只要其中任何一項與儲存貯體實際所在位置不一致，就會出現看起來像網路問題的存取被拒或找不到儲存貯體的錯誤。RcloneView 會在記錄中顯示這些錯誤，並讓您重建遠端而不會遺失同步作業。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 先檢查區域和端點

Scaleway 儲存貯體綁定特定區域，端點必須屬於同一區域。如果團隊在某個區域建立了儲存貯體，卻把遠端設定為另一個區域，即使金鑰有效也會出現類似驗證的失敗。請逐字元比對 Scaleway 主控台顯示的區域與遠端設定中的區域和端點。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中設定 Scaleway S3 相容遠端" class="img-large img-center" />

## 驗證憑證和權限

接著確認 Access Key 和 Secret Key。如果先前正常的作業突然失敗，常見原因是金鑰被重新產生或刪除。同時請檢查金鑰的權限是否涵蓋您要存取的儲存貯體和專案；即使金鑰有效，沒有該儲存貯體的存取權限仍會傳回存取被拒。開啟 Remote Manager，編輯該遠端並貼上新的值。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="修復憑證後在 RcloneView 中瀏覽 Scaleway 儲存貯體" class="img-large img-center" />

## 測試，然後恢復作業

編輯遠端後，開啟 Rclone Terminal 並列出儲存貯體以確認連線正常。接著對同步作業執行 Dry Run，在恢復實際傳輸之前確認它能看到預期的檔案。如果問題仍然存在，請在設定中將 rclone 記錄層級設為 DEBUG，重新啟動內建 rclone，重現錯誤並檢視記錄。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="在 RcloneView 中檢視 Scaleway 作業歷程記錄" class="img-large img-center" />

## 開始使用

1. **下載 RcloneView**：請從 [rcloneview.com](https://rcloneview.com/src/download.html) 取得。
2. 開啟 Remote Manager 並編輯您的 Scaleway 遠端。
3. 使區域和端點與儲存貯體一致，並重新輸入金鑰。
4. 列出儲存貯體，執行 Dry Run，然後恢復您的作業。

區域、端點和金鑰一致的遠端，在您的工作流程中與任何其他 S3 相容儲存的表現相同。

---

**相關指南：**

- [管理 Scaleway Object Storage — 使用 RcloneView 進行雲端同步](https://rcloneview.com/support/blog/manage-scaleway-object-storage-cloud-sync-rcloneview)
- [修復 Linode Object Storage 連線錯誤 — 使用 RcloneView 解決](https://rcloneview.com/support/blog/fix-linode-object-storage-connection-errors-rcloneview)
- [將 IBM COS 遷移到 Scaleway — 使用 RcloneView 傳輸檔案](https://rcloneview.com/support/blog/migrate-ibm-cos-to-scaleway-rcloneview)

<CloudSupportGrid />
