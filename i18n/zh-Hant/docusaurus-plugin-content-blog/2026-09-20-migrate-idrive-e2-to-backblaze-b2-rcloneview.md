---
slug: migrate-idrive-e2-to-backblaze-b2-rcloneview
title: "將 IDrive e2 遷移到 Backblaze B2 — 使用 RcloneView 傳輸檔案"
authors:
  - steve
description: "使用 RcloneView 的雲端對雲端傳輸工具、試執行預覽與工作記錄,將儲存貯體從 IDrive e2 遷移到 Backblaze B2。"
keywords:
  - migrate idrive e2 to backblaze b2
  - idrive e2 to backblaze b2 transfer
  - s3 compatible storage migration
  - cloud to cloud object storage transfer
  - RcloneView migration guide
  - backblaze b2 bucket migration
  - idrive e2 rcloneview
  - object storage provider switch
tags:
  - RcloneView
  - idrive-e2
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 IDrive e2 遷移到 Backblaze B2 — 使用 RcloneView 傳輸檔案

> 不需要先在本機暫存檔案,就能在兩個相容 S3 的供應商之間遷移物件儲存貯體。

切換相容 S3 的物件儲存供應商,通常意味著在移動任何一個檔案之前,得先釐清存取金鑰、端點與儲存貯體結構。RcloneView 將 IDrive e2 與 Backblaze B2 都當作原生遠端來連接,因此兩者之間的遷移是一次直接的雲端對雲端傳輸,而不是先下載再上傳的兩階段流程。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接兩個遠端

IDrive e2 與 Backblaze B2 都是透過 RcloneView 的 S3 相容遠端設定來配置,各自需要一組存取金鑰、私密金鑰與端點。針對 Backblaze B2,RcloneView 也支援其原生憑證輸入方式,使用 Application Key ID 與 Application Key,部分團隊偏好這種方式勝過 S3 相容路徑。當兩個遠端都出現在 Remote Manager 中後,使用 RcloneView 的水平或垂直分割版面,並排開啟兩個檔案總管面板,各自對應一個遠端。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView remote manager with IDrive e2 and Backblaze B2 remotes configured" class="img-large img-center" />

同時檢視兩個儲存貯體,能讓你在正式傳輸之前先瀏覽雙方的資料夾結構,及早發現命名不一致或非預期的巢狀資料夾。

## 以同步工作執行傳輸

與其手動拖曳大型儲存貯體,不如透過 4 步驟精靈設定一個同步工作:選擇 IDrive e2 作為來源、Backblaze B2 作為目的地,並選擇單向同步,如此一來只有目的地會被修改以符合來源——IDrive e2 上的內容不會有任何變動。在步驟 2 中,RcloneView 可在單一視窗中掛載並同步 90 多個供應商,你可以調整檔案傳輸數量並啟用總和檢查碼比對,以雜湊值和大小(而不只是修改時間)來驗證檔案,這在兩個不同儲存後端之間遷移時尤其重要。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView sync job configured between two S3-compatible object storage remotes" class="img-large img-center" />

在執行實際傳輸之前,先使用試執行預覽哪些檔案將被複製,並確認不會有非預期的刪除或跳過。

## 驗證遷移結果

同步完成後,工作記錄會顯示該次執行的總傳輸大小、傳輸速度與檔案數量,方便你與來源儲存貯體的總計進行比對。若要進一步檢查,RcloneView 的資料夾比較工具可以在遷移後對兩個儲存貯體進行並排比較,標示出大小不同或僅存在於一側的檔案。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView job history showing a completed cloud-to-cloud migration" class="img-large img-center" />

## 快速開始

1. **從 [rcloneview.com](https://rcloneview.com/src/download.html) 下載 RcloneView**
2. 使用存取金鑰、私密金鑰與端點新增你的 IDrive e2 遠端。
3. 使用 S3 相容方式或原生憑證新增你的 Backblaze B2 遠端。
4. 設定單向同步工作,先執行試執行,接著執行正式傳輸並透過工作記錄驗證。

一次乾淨的儲存貯體遷移,關鍵在於前後都要驗證——RcloneView 的試執行與比較工具讓這兩個步驟成為同一工作流程的一部分。

---

**相關指南:**

- [管理 IDrive e2 儲存 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-idrive-e2-cloud-sync-backup-rcloneview)
- [管理 Backblaze B2 儲存 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [Wasabi 對 Backblaze B2 對 IDrive e2 — 物件儲存比較](https://rcloneview.com/support/blog/wasabi-vs-backblaze-b2-vs-idrive-e2-comparison-rcloneview)

<CloudSupportGrid />
