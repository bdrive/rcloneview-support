---
slug: migrate-dropbox-to-jottacloud-rcloneview
title: "從 Dropbox 遷移到 Jottacloud — 使用 RcloneView 傳輸檔案"
authors:
  - jay
description: "使用 RcloneView 將檔案從 Dropbox 移到 Jottacloud。連接兩個雲端、以 Dry Run 預覽、在雲端之間複製，並用 Folder Compare 驗證結果。"
keywords:
  - dropbox 遷移到 jottacloud
  - dropbox jottacloud 傳輸
  - 從 dropbox 移動檔案到 jottacloud
  - jottacloud 遷移工具
  - 歐洲 dropbox 替代方案
  - 雲端對雲端遷移 GUI
  - rcloneview jottacloud
  - rclone dropbox jottacloud
  - 歐洲雲端儲存遷移
tags:
  - RcloneView
  - dropbox
  - jottacloud
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 從 Dropbox 遷移到 Jottacloud — 使用 RcloneView 傳輸檔案

> 將 Dropbox 資料夾直接從雲端搬到 Jottacloud，並在關閉舊帳戶之前檢查每一個檔案。

轉換到挪威服務商的團隊與家庭常常遇到同樣的難題：把多年累積的 Dropbox 資料下載到筆電再重新上傳，既慢又有風險。RcloneView 在同一個視窗中連接兩個帳戶，並透過 rclone 執行傳輸，因此檔案會從 Dropbox 移到 Jottacloud，無需您手動經由本機資料夾中轉。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Dropbox 與 Jottacloud 連接為遠端

開啟 **Remote** 分頁並點選 **New Remote**。Dropbox 使用 OAuth：瀏覽器開啟後登入，RcloneView 就會儲存連線。如果您的檔案位於 Dropbox 團隊帳戶，請設定 `dropbox_business` 選項，讓 rclone 存取商業命名空間。

以相同方式新增 Jottacloud：從服務商清單中選擇 Jottacloud，並依照連線提示操作。兩個遠端都出現後，在兩個 Explorer 面板中並排開啟，以便同時查看來源與目的地。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 Dropbox 與 Jottacloud 遠端" class="img-large img-center" />

## 複製前規劃資料夾結構

假設一家設計公司有 600 GB 資料分散在 `Clients`、`Archive` 和 `Shared Assets` 中，就應先決定每個頂層資料夾的去處。透過右鍵選單在 Jottacloud 中建立目的地資料夾，然後對每個 Dropbox 資料夾使用 **Get Size**，查看每個步驟要搬移多少資料。

如果只是一次性的小工作，可以把資料夾從 Dropbox 面板拖曳到 Jottacloud 面板。在不同遠端之間拖曳一律是複製，因此不會從 Dropbox 刪除任何內容。較大的工作則適合使用已儲存的工作，因為可以重新執行並查看其記錄。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中從 Dropbox 到 Jottacloud 的雲端對雲端傳輸" class="img-large img-center" />

## 建立可重複執行的遷移工作

在 Home 分頁點選 **Sync**，選擇 Dropbox 作為來源、Jottacloud 作為目的地。方向維持單向（「Modifying destination only」）。在 Advanced Settings 中，保留預設的多執行緒設定，並關閉總和檢查碼比較（Dropbox 與 Jottacloud 使用不同的雜湊類型，因此 rclone 會依大小與修改時間比較檔案），再用 Filtering 略過不需要搬移的內容。

先執行 **Dry Run**。它會列出目的地將被複製或刪除的每個檔案，讓您在浪費好幾個小時之前發現選錯資料夾的問題。接著開始正式執行，並在 **Transferring** 分頁中查看速度與檔案數量。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在 RcloneView 中執行從 Dropbox 到 Jottacloud 的遷移工作" class="img-large img-center" />

如果搬遷期間仍有人在 Dropbox 中工作，請在切換前再次執行同一工作。只有新增或變更的檔案會被傳輸。使用 PLUS 授權，您可以將工作排程為每晚執行，直到切換當天。

## 使用 Folder Compare 驗證

在取消 Dropbox 之前，點選 **Compare** 並開啟兩個頂層資料夾。開啟「僅左側檔案」與「大小不同」篩選：仍列出的項目代表尚未抵達或不一致。選取這些項目並使用 **Copy right** 補齊。當畫面只顯示相同的檔案時，遷移就完成了。**Job History** 會保留每次執行的大小、速度與狀態記錄。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="遷移後在 RcloneView 中比較 Dropbox 與 Jottacloud 資料夾" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在 **Remote > New Remote** 中將 Dropbox（OAuth）與 Jottacloud 新增為遠端。
3. 建立從 Dropbox 到 Jottacloud 的單向 Sync 工作，並以 **Dry Run** 預覽。
4. 執行工作，然後在停用 Dropbox 帳戶前用 **Compare** 確認結果。

RcloneView 在 Windows、macOS 和 Linux 上以一個視窗掛載並同步 90+ 個服務商，因此搬遷完成後，您可以用同一個應用程式將 Jottacloud 掛載為本機磁碟。

---

**相關指南：**

- [使用 RcloneView 管理 Jottacloud 儲存空間：同步、備份與整理檔案](https://rcloneview.com/support/blog/manage-jottacloud-cloud-sync-backup-rcloneview)
- [從 Dropbox 遷移到 Koofr — 使用 RcloneView 傳輸檔案](https://rcloneview.com/support/blog/migrate-dropbox-to-koofr-rcloneview)
- [修正 Jottacloud 同步錯誤 — 使用 RcloneView 疑難排解](https://rcloneview.com/support/blog/fix-jottacloud-sync-errors-rcloneview)

<CloudSupportGrid />
