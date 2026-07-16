---
slug: hasher-remote-integrity-cloud-backup-rcloneview
title: "Hasher 遠端 — 在 RcloneView 中為任何雲端儲存新增檔案完整性校驗碼"
authors:
  - robin
description: "了解 RcloneView 的 Hasher 遠端如何為不具備原生雜湊支援的雲端後端新增校驗碼驗證，保護每一次備份免於靜默毀損。"
keywords:
  - RcloneView Hasher 遠端
  - 雲端檔案完整性驗證
  - 雲端備份校驗碼 rcloneview
  - rclone hasher 遠端指南
  - 驗證雲端傳輸完整性
  - 雲端備份校驗碼驗證
  - 偵測雲端同步檔案損壞
  - 雲端儲存資料完整性 rcloneview
  - 雲端備份雜湊驗證
  - rclone 虛擬遠端 hasher
tags:
  - feature
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Hasher 遠端 — 在 RcloneView 中為任何雲端儲存新增檔案完整性校驗碼

> Hasher 虛擬遠端會默默地為不原生支援校驗碼追蹤的雲端後端加入這項功能，讓每一次同步都成為經過驗證、能抵禦毀損的傳輸。

並非每個雲端儲存供應商都會計算並儲存檔案校驗碼。僅依賴檔案大小與修改時間戳記進行比對的供應商，可能會遺漏靜默的資料毀損——也就是檔案完整傳輸完成，但抵達時位元已經翻轉的情況。對於檔案保管員、系統管理員以及有資料完整性要求的企業來說，這是一個值得重視的漏洞。RcloneView 支援 rclone 的 Hasher 遠端，這是一種虛擬遠端包裝器，能在任何現有雲端後端之上新增 MD5、SHA-1 或其他雜湊追蹤功能，而無需改變你儲存或擷取檔案的方式。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Hasher 遠端是什麼，為何重要

Hasher 遠端是 rclone 虛擬遠端類型之一——一種包裝在現有遠端前方、增強其功能的包裝器。具體來說，Hasher 遠端會將校驗碼與你的檔案一併儲存，快取雜湊值，讓後續的同步作業能依內容比對檔案，而不僅僅依賴檔案大小比對。當你同步至未提供原生雜湊 API 的雲端供應商，或需要偵測不會改變檔案大小的位元層級毀損時，這一點尤為重要。

一個實際的例子：某媒體製作公司將 4K 影片母帶封存至基於 WebDAV 的儲存伺服器，而該伺服器不具備原生雜湊支援。若沒有校驗碼，rclone 會依檔案大小與時間戳記比對——但一個大小相同、卻已輕微損壞的檔案將顯示為未變更。將 WebDAV 遠端包裝進 Hasher 遠端後，每次同步都會新增雜湊比對，能在毀損檔案靜默覆蓋良好副本之前偵測出來並標記供審查。

<img src="/support/images/en/blog/new-remote.png" alt="Creating a Hasher virtual remote in RcloneView's New Remote wizard" class="img-large img-center" />

## 在 RcloneView 中設定 Hasher 遠端

在 RcloneView 中，Hasher 等虛擬遠端是透過與任何雲端供應商相同的「新增遠端」精靈建立的。在遠端分頁中，點擊「新增遠端」，然後捲動至虛擬遠端類型區——你會看到 Hasher 與 Crypt、Union、Combine 等一同列出。選擇你想包裝的底層遠端（例如你的 WebDAV 或 FTP 伺服器），選擇要啟用的雜湊演算法，然後儲存。Hasher 遠端會以透明的方式包裝你的後端。

儲存後，Hasher 遠端會像任何其他遠端一樣出現在遠端管理器中。你可以在檔案總管面板中開啟它、瀏覽檔案，並對其執行同步工作。雜湊資料庫會自動維護——RcloneView 與 rclone 會處理相關記錄工作，而你與 Hasher 遠端的互動方式，與操作底層儲存完全相同。你的工作流程無需做任何變更。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Running a checksum-verified sync transfer using the Hasher remote in RcloneView" class="img-large img-center" />

## 執行完整性驗證傳輸

設定好 Hasher 遠端後，在 RcloneView 同步工作精靈的第 2 步（進階設定）中啟用**啟用校驗碼**選項。這會讓 rclone 使用快取的雜湊值比對檔案，而不僅僅依賴大小與時間戳記。首次執行時，系統會計算並儲存雜湊值。後續執行則會與已儲存的雜湊值比對，對未變更的檔案略過重新雜湊計算——即使是在大型封存中，也能保持同步速度。

「試執行」功能與 Hasher 遠端能無縫搭配使用。在提交大型封存同步之前，先執行一次試執行，即可依雜湊比對結果，預覽哪些檔案將被複製、修改或略過。在覆蓋數個月的封存影像之前，這項功能極為寶貴，且不會產生任何成本——在你確認之前，不會移動任何檔案。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Comparing files with checksum verification enabled in RcloneView" class="img-large img-center" />

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing integrity-verified backup runs completed in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在遠端分頁中，點擊「新增遠端」，並從虛擬遠端區選擇 Hasher。
3. 使用 Hasher 遠端包裝你現有的雲端遠端——WebDAV、FTP，或任何不具原生校驗碼功能的後端。
4. 建立同步工作，於第 2 步進階設定中啟用校驗碼比對，並執行你的第一次完整性驗證備份。

保護你的封存資料免於靜默毀損，只需幾分鐘的設定，而 Hasher 遠端讓這項保護能套用於 RcloneView 支援的每一種後端。

---

**相關指南：**

- [使用 RcloneView 檢查並驗證雲端檔案完整性](https://rcloneview.com/support/blog/check-verify-cloud-file-integrity-rcloneview)
- [在 RcloneView 中使用 Crypt 遠端加密雲端備份](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [虛擬遠端：RcloneView 中的 Combine、Union 與 Alias](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)

<CloudSupportGrid />
