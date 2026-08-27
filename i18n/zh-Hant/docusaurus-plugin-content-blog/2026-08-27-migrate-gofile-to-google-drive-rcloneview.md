---
slug: migrate-gofile-to-google-drive-rcloneview
title: "將 Gofile 遷移至 Google Drive — 使用 RcloneView 傳輸檔案"
authors:
  - steve
description: "使用 RcloneView 將檔案從 Gofile 移動到 Google Drive——連接兩個遠端,直接進行雲端對雲端的傳輸,並自動化重複的接收工作。"
keywords:
  - 將 Gofile 遷移至 Google Drive
  - Gofile 到 Google Drive 傳輸
  - 將 Gofile 檔案移動到 Google Drive
  - RcloneView Gofile 遷移
  - Gofile 存取權杖設定
  - 雲端對雲端傳輸工具
  - Gofile Google Drive 同步
  - 整合雲端儲存
  - 跨雲端檔案傳輸
  - Gofile 檔案管理
tags:
  - RcloneView
  - gofile
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Gofile 遷移至 Google Drive — 使用 RcloneView 傳輸檔案

> 使用 RcloneView,無需先下載到本機或在瀏覽器分頁之間切換,即可將透過 Gofile 送達的檔案直接拉取到 Google Drive。

Gofile 是一次性檔案分享的常見中轉站——客戶傳來一批素材,承包商上傳交付成果,下載連結在團隊內傳來傳去。但這些內容並不適合長期留在那裡。RcloneView 將 Gofile 與 Google Drive 都作為遠端連接在同一個視窗中,因此把檔案從 Gofile 取出並放入永久、有序的 Google Drive 儲存空間,是一次直接傳輸,而不是先下載再重新上傳的往返操作。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 Gofile 與 Google Drive

Gofile 使用憑證輸入而非 OAuth:從您的 Gofile 帳戶個人資料頁面產生一個存取權杖,並將其貼到 New Remote 畫面中。相較之下,Google Drive 使用以瀏覽器為基礎的 OAuth——點擊 New Remote 精靈,在彈出視窗中完成驗證即可,無需複製任何權杖。將兩者分別新增為遠端後,它們會以標籤形式出現,可在相鄰的 Explorer 面板中開啟。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中新增 Gofile 和 Google Drive 遠端" class="img-large img-center" />

與僅支援掛載的工具不同,RcloneView 還支援在遠端之間進行同步與資料夾比較——在 FREE 授權下即可使用——因此同樣的兩個遠端設定,既能應付一次性整理,也能勝任持續的接收流程。

## 在遠端之間直接傳輸檔案

在左側面板開啟 Gofile,右側面板開啟 Google Drive,然後選擇要移動的檔案或資料夾。在兩個不同遠端之間拖曳是複製而非移動,因此在您明確刪除之前,Gofile 中不會有任何內容消失——如果您想在清除來源檔案之前確認傳輸已順利完成,這一點很有用。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中將檔案從 Gofile 傳輸到 Google Drive" class="img-large img-center" />

對於較大的批次,請使用右鍵點擊的 Copy 或 Download,而不是拖放——底部 Info View 中的 Transferring 標籤會顯示即時進度、傳輸速度與檔案數量,方便您在關閉應用程式前確認一切都已順利送達。

## 自動化重複接收工作

如果 Gofile 持續收到新的交付內容——例如反覆出現的客戶交接或排程的匯出投遞——一個已儲存的同步工作比每次手動重複傳輸更好。Job Manager 的四步精靈可以讓您將 Gofile 設為來源,特定的 Google Drive 資料夾設為目的地,套用最大檔案存在時長篩選條件以便只拉取最近上傳的內容,並在實際移動前透過 Dry Run 預覽將要複製的內容。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 RcloneView 中安排從 Gofile 到 Google Drive 的定期同步工作" class="img-large img-center" />

之後,Job History 會記錄每一次執行——狀態、檔案數量、耗時——這樣您無需開啟應用程式檢查,就能確認排程接收工作已經完成。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 使用從 Gofile 帳戶頁面取得的存取權杖,將 Gofile 新增為遠端。
3. 透過 OAuth 瀏覽器登入,將 Google Drive 新增為遠端。
4. 將兩者並排開啟在 Explorer 面板中,拖曳您的第一批檔案,或為需要重複執行的工作建立同步工作。

當兩個遠端都出現在同一個視窗中時,把內容從 Gofile 搬到有序的 Google Drive 儲存空間,就不再取決於分享連結的有效期限。

---

**相關指南:**

- [管理 Gofile 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-gofile-cloud-sync-backup-rcloneview)
- [管理 Google Drive 檔案與雲端同步 — RcloneView](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [解決 Google Drive 儲存配額超出問題 — 使用 RcloneView 轉移檔案](https://rcloneview.com/support/blog/fix-google-drive-storage-quota-exceeded-rcloneview)

<CloudSupportGrid />
