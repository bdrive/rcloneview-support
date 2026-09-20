---
slug: migrate-koofr-to-jottacloud-rcloneview
title: "將 Koofr 遷移到 Jottacloud — 使用 RcloneView 傳輸檔案"
authors:
  - alex
description: "使用 RcloneView 將檔案從 Koofr 遷移到 Jottacloud —— 在兩家注重隱私的歐洲儲存服務商之間進行經過驗證的雲端對雲端傳輸。"
keywords:
  - 將 Koofr 遷移到 Jottacloud
  - Koofr 到 Jottacloud 傳輸
  - RcloneView Koofr
  - RcloneView Jottacloud
  - 歐洲雲端遷移
  - 雲端對雲端傳輸
  - Koofr Jottacloud 同步
  - 雲端之間搬移檔案
tags:
  - RcloneView
  - koofr
  - jottacloud
  - cloud-to-cloud
  - migration
  - european-cloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Koofr 遷移到 Jottacloud — 使用 RcloneView 傳輸檔案

> 直接在雲端之間將檔案從 Koofr 遷移到 Jottacloud,不必先經過本機下載資料夾中轉。

Koofr 與 Jottacloud 都是歐洲的儲存服務商,深受重視資料落地與隱私的使用者青睞,在比較過方案或帳戶容量限制之後,將兩者整合為一個也很常見。若採用先下載到筆電再重新上傳的方式進行遷移,會浪費頻寬與時間,一旦連線中斷還有傳輸不完整的風險。RcloneView 可同時連線到兩個遠端,並在它們之間直接複製檔案,因此傳輸過程中本機只是一個中轉點,而非儲存落腳處。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接兩個遠端

透過「遠端」分頁 > 新增遠端加入 Koofr 作為遠端,接著對 Jottacloud 重複相同步驟。兩者都是透過各自獨立的帳戶認證流程連線,而非共用登入畫面,因此開始前請先備妥各服務商的帳戶資訊。RcloneView 可在單一視窗內掛載並同步 90 多個提供商,支援 Windows、macOS 與 Linux,因此無論您從哪個平台進行遷移,這套設定流程都完全相同。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Koofr remote in RcloneView" class="img-large img-center" />

當兩個遠端都出現在遠端管理員中後,並排開啟兩個檔案總管面板——一個顯示 Koofr,另一個顯示 Jottacloud——這樣在搬移任何內容之前,就能同時檢視兩邊的檔案樹狀結構。

## 執行傳輸

若是一次性遷移,只需從 Koofr 面板拖曳想要搬移的資料夾,直接放到 Jottacloud 面板上即可。由於這是兩個不同遠端之間的傳輸,RcloneView 預設會將此拖放操作視為複製,在您確認所有內容都已正確送達 Jottacloud 之前,Koofr 上的原始檔案會維持不變。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Dragging files from Koofr to Jottacloud in RcloneView" class="img-large img-center" />

若要處理較大的資料庫,4 步驟同步精靈是更合適的工具:將 Koofr 設為來源、Jottacloud 設為目的地,先執行一次模擬執行以預覽實際將複製的內容,再執行正式同步。模擬執行在所有授權等級皆可使用,因此在進行大規模遷移前,沒有理由略過預覽。

## 確認遷移已完成

傳輸結束後,使用資料夾比較逐一檔案檢查兩側——它會標示出僅存在於一側,或以不同大小完成傳輸的檔案,讓您在從 Koofr 刪除任何內容之前先發現不完整的上傳。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History showing a completed Koofr to Jottacloud transfer in RcloneView" class="img-large img-center" />

工作歷程也會永久保存這次執行的紀錄——檔案數量、總大小與耗時——若日後需要為帳戶取消訂閱佐證遷移情況,值得將其截圖或匯出保存。

## 快速上手

1. 如果尚未安裝,請從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過「遠端」分頁 > 新增遠端,將 Koofr 與 Jottacloud 都加入為遠端。
3. 快速搬移可使用拖放,若要遷移整個資料庫,則建立含模擬執行的同步工作。
4. 在從 Koofr 刪除任何內容之前,執行資料夾比較以確認所有檔案都已送達。

在同一個視窗中連接好兩個服務商後,整合歐洲雲端儲存就從原本耗時數天的下載再上傳專案,變成一次工作階段內即可完成的任務。

---

**相關指南:**

- [將 Koofr 同步到 Proton Drive — 使用 RcloneView 進行雲端備份](https://rcloneview.com/support/blog/sync-koofr-to-proton-drive-rcloneview)
- [將 Jottacloud 遷移到 OneDrive — 使用 RcloneView 傳輸檔案](https://rcloneview.com/support/blog/migrate-jottacloud-to-onedrive-rcloneview)
- [Koofr 對比 Jottacloud —— 使用 RcloneView 進行歐洲雲端儲存比較](https://rcloneview.com/support/blog/koofr-vs-jottacloud-european-cloud-storage-rcloneview)

<CloudSupportGrid />
