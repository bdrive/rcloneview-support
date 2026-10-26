---
slug: migrate-koofr-to-mega-rcloneview
title: "將 Koofr 遷移到 Mega — 使用 RcloneView 傳輸檔案"
authors:
  - steve
description: "使用 RcloneView 將 Koofr 遷移到 Mega:連接兩個遠端,透過 Dry Run 預覽,在雲端之間複製檔案,並用 Folder Compare 驗證。"
keywords:
  - 將 Koofr 遷移到 Mega
  - Koofr 到 Mega 傳輸
  - 將 Koofr 檔案移動到 Mega
  - Koofr Mega 遷移
  - RcloneView 雲端對雲端
  - Koofr 到 Mega 同步
  - rclone GUI
  - 雲端遷移工具
  - Mega 檔案傳輸
  - 驗證雲端傳輸
tags:
  - RcloneView
  - koofr
  - mega
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Koofr 遷移到 Mega — 使用 RcloneView 傳輸檔案

> 在兩個雲端之間直接將 Koofr 檔案庫複製到 Mega,先預覽,最後再驗證。

Koofr 和 Mega 對儲存採取不同的方式,而在兩者之間手動遷移意味著要下載所有內容再重新上傳。對於擁有多年專案資料夾的攝影師,或使用共用文件的小型辦公室來說,這意味著要花上數小時盯著進度。RcloneView 在一個視窗中連接這兩項服務,並在它們之間直接傳輸,作業可以預覽、重複執行,並在歷史記錄中檢視。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 將 Koofr 和 Mega 新增為遠端

開啟 **Remote > New Remote**,使用設定對話方塊要求的憑證新增 Koofr。然後使用您的電子郵件和密碼新增 Mega。Mega 是輸入憑證型遠端,而不是 OAuth,因此沒有瀏覽器步驟。兩者都出現在 Remote Manager 中後,您就可以分別在各自的 Explorer 面板中開啟它們。

Koofr 和 Mega 與其他受支援的提供者一起出現在同一個遠端清單中。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中建立 Koofr 和 Mega 遠端" class="img-large img-center" />

## 規劃傳輸

首先瀏覽您想要移動的 Koofr 資料夾。對最大的資料夾使用 **Get Size**,以便了解預期資料量,並記下可以留下的內容。Mega 會根據您的方案設定帳戶傳輸和儲存限制,因此請在啟動大型作業之前確認目的地有足夠空間,而不是在中途才發現問題。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在 RcloneView 中並排瀏覽 Koofr 和 Mega" class="img-large img-center" />

## 建立 Copy 作業並進行 Dry Run

在 Sync 精靈中,將 Koofr 設為來源,將 Mega 資料夾設為目的地。選擇 **Copy** 作業類型,這樣現有的 Mega 檔案永遠不會被刪除。在進階設定下,您可以調整檔案傳輸數和 equality checker 數;如果任一服務變慢或傳回錯誤,請調低這些值。使用篩選功能可以略過您不想帶過去的檔案類型或資料夾。

在正式作業之前先執行 **Dry Run**。它會準確顯示哪些檔案將被複製,從而能在零成本的情況下發現選錯來源資料夾的問題。預覽無誤後,執行作業,並在 Transferring 分頁中查看速度和進度。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="在 Transferring 分頁中監控雲端對雲端傳輸" class="img-large img-center" />

## 驗證並保留記錄

執行結束後,將 Koofr 放在左側、Mega 放在右側,開啟 **Compare**。篩選僅存在於左側或有差異的檔案,查看未抵達的項目,並使用 Compare 檢視的複製操作將它們複製過去。Job History 會保留每次執行的狀態、持續時間、大小和檔案數,因此在停用舊帳戶之前,您已有一份記錄。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job History 顯示已完成的 Koofr 到 Mega 傳輸" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 透過 **Remote > New Remote** 新增 Koofr 和 Mega。
3. 建立從 Koofr 到 Mega 的 Copy 作業並執行 Dry Run。
4. 執行作業,並在刪除 Koofr 上的任何內容之前使用 Folder Compare 確認。

先複製後驗證,意味著在 Mega 擁有全部檔案之前,您的 Koofr 檔案始終可用。

---

**相關指南:**

- [將 Koofr 遷移到 Dropbox](https://rcloneview.com/support/blog/migrate-koofr-to-dropbox-rcloneview)
- [將 pCloud 遷移到 Mega](https://rcloneview.com/support/blog/migrate-pcloud-to-mega-rcloneview)
- [修復 Mega 連線和配額錯誤](https://rcloneview.com/support/blog/fix-mega-connection-quota-errors-rcloneview)

<CloudSupportGrid />
