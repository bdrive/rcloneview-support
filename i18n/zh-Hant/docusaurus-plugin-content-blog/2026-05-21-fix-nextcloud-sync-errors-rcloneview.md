---
slug: fix-nextcloud-sync-errors-rcloneview
title: "修復 Nextcloud 同步錯誤——使用 RcloneView 解決 WebDAV 與驗證問題"
authors:
  - morgan
description: "疑難排解 RcloneView 中的 Nextcloud 同步錯誤——修復 WebDAV 驗證失敗、423 檔案鎖定衝突、SSL 錯誤，以及緩慢的傳輸逾時問題。"
keywords:
  - fix Nextcloud sync errors
  - Nextcloud WebDAV authentication error
  - Nextcloud 423 locked fix
  - Nextcloud connection timeout RcloneView
  - Nextcloud SSL certificate error rclone
  - RcloneView Nextcloud troubleshooting
  - Nextcloud backup not working
  - WebDAV sync errors fix
  - rclone Nextcloud 401 error
  - Nextcloud file lock conflict resolution
tags:
  - RcloneView
  - troubleshooting
  - nextcloud
  - tips
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復 Nextcloud 同步錯誤——使用 RcloneView 解決 WebDAV 與驗證問題

> RcloneView 中的 Nextcloud 同步失敗幾乎都可以追溯到四個根本原因之一——每一個都有具體且可重現的修復方法。

Nextcloud 是部署最廣泛的自架雲端平台，但其 WebDAV 介面會帶來一類特有的同步問題。當 RcloneView 與 Nextcloud 伺服器進行同步時，錯誤可能顯示為 401 驗證失敗、423 檔案鎖定回應、SSL 憑證拒絕，或是傳輸在中途停滯。每個錯誤代碼都能明確指出問題所在——而修復方法通常只需在 RcloneView 或 Nextcloud 伺服器本身進行一項組態變更。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 驗證失敗（401 Unauthorized）

RcloneView **Log 分頁**中出現 401 錯誤，表示 Nextcloud 拒絕了您 WebDAV 遠端中的憑證。最常見的原因是使用一般帳號密碼，而非 Nextcloud 應用程式密碼。當您的 Nextcloud 帳號啟用了兩步驟驗證時，標準密碼將永遠無法用於 API 存取——您必須產生專用的應用程式密碼。

登入您的 Nextcloud 網頁介面，前往**設定 > 安全性 > 應用程式密碼**，建立一個帶有易識別標籤（例如「RcloneView」）的新應用程式密碼，並立即複製它。接著在 RcloneView 中，開啟**遠端分頁 > 遠端管理員**，選取您的 Nextcloud 遠端，點擊**編輯**，將密碼替換為新的應用程式密碼，然後儲存。重新執行失敗的同步工作並觀察 Log 分頁——401 錯誤應該不會再出現。

如果您並未使用兩步驟驗證卻仍看到 401 錯誤，請確認 WebDAV URL 格式是否正確。Nextcloud 的標準 WebDAV 路徑為 `https://your-server.com/remote.php/dav/files/your-username/`——路徑結尾缺少斜線或使用者名稱不正確，即使憑證有效，也會產生看似驗證失敗的錯誤。

<img src="/support/images/en/blog/new-remote.png" alt="Editing Nextcloud WebDAV credentials in RcloneView Remote Manager" class="img-large img-center" />

## 檔案鎖定衝突（423 Locked）

Nextcloud 使用伺服器端檔案鎖定機制以防止並行修改，而當 RcloneView 同步的檔案正被啟用中的 Nextcloud 桌面用戶端或網頁瀏覽器工作階段開啟時，可能會遇到 423 Locked 回應。這種情況在上班時間最為常見——團隊成員正在積極編輯檔案的同時，排程備份工作也在執行。

最可靠的修復方式是調整時機：使用 PLUS 授權的排程器，將 RcloneView 同步工作安排在離峰時段——例如夜間或可預測的低活動時段。在工作的**進階設定**中，減少同時傳輸的檔案數量。較少的並行傳輸意味著較少的並行鎖定請求，當 RcloneView 不再從各個方向同時對伺服器發起大量請求時，暫時性鎖定也會更快解除。

RcloneView 會依照您設定的重試次數（預設：3 次）重試失敗的操作。工作完成後，請檢查**工作歷史紀錄**，查看是否有任何檔案顯示錯誤狀態。如果錯誤數量不多，在受影響的檔案關閉後，手動重新執行同步工作即可解決剩餘的鎖定衝突。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing Nextcloud sync job history and error details in RcloneView" class="img-large img-center" />

## SSL 憑證錯誤

自架的 Nextcloud 安裝通常使用自簽 SSL 憑證，而 rclone 預設會拒絕這類憑證。此故障會在 Log 分頁中顯示為憑證驗證錯誤。若要繞過此問題，請開啟**設定分頁 > 內嵌 Rclone**，在**全域 Rclone 旗標**欄位中加入 `--no-check-certificate`。此設定會全域套用至所有遠端，因此如果部分遠端使用您需要驗證的有效憑證，建議改為將自簽憑證加入您作業系統的受信任憑證存放區。

對於位於反向代理伺服器後方的 Nextcloud 伺服器，請確認代理伺服器有正確轉發標頭。組態錯誤的代理伺服器可能導致重新導向迴圈，即使憑證本身有效，也會顯示為 SSL 或連線錯誤。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring active Nextcloud sync progress in RcloneView Transferring tab" class="img-large img-center" />

## 緩慢傳輸與工作中途逾時

對於包含大量小型檔案的目錄，Nextcloud 的 WebDAV 層速度比相容 S3 的後端更慢。如果同步工作在大型資料夾上逾時或停滯，請先執行**試執行（Dry Run）**以計算涉及的檔案總數。對於包含數萬個小檔案的目錄，請在**進階設定**中減少同時傳輸數量，並增加**重試次數**，讓伺服器在批次之間有更多恢復時間。

在同步精靈的步驟 3 中套用檔案大小與存留期篩選條件，將大型工作拆分為較小的批次：先同步最近 30 天內修改的檔案，再另外處理較舊的檔案。這能讓每次執行維持在可管理的範圍內，並降低單次逾時中斷長達數小時傳輸的機率。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Nextcloud sync job after adjusting transfer settings in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 每次 Nextcloud 同步失敗後，先開啟 **Log 分頁**並記下 HTTP 錯誤代碼，再進行任何變更。
3. 若為 401 錯誤：在 Nextcloud 設定中重新產生應用程式密碼，並更新遠端的憑證。
4. 若為 423 錯誤：將工作重新排程至離峰時段，並在進階設定中減少並行傳輸數量。

先確認錯誤代碼，能將 Nextcloud 疑難排解從盲目猜測變成一項可預期、五分鐘內完成的修復。

---

**相關指南：**

- [管理 Nextcloud——使用 RcloneView 進行雲端同步與備份](https://rcloneview.com/support/blog/manage-nextcloud-cloud-sync-backup-rcloneview)
- [使用 RcloneView 將 Nextcloud 同步至 Google Drive](https://rcloneview.com/support/blog/sync-nextcloud-to-google-drive-rcloneview)
- [使用 RcloneView 修復 WebDAV 連線與驗證錯誤](https://rcloneview.com/support/blog/fix-webdav-connection-authentication-errors-rcloneview)

<CloudSupportGrid />
