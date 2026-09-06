---
slug: migrate-jottacloud-to-wasabi-rcloneview
title: "將Jottacloud遷移到Wasabi — 使用RcloneView傳輸檔案"
authors:
  - steve
description: "使用RcloneView將檔案從Jottacloud遷移到Wasabi物件儲存，借助試運行預覽和校驗和驗證實現安全傳輸。"
keywords:
  - 將jottacloud遷移到wasabi
  - jottacloud wasabi 傳輸
  - jottacloud wasabi 遷移
  - rcloneview jottacloud
  - rcloneview wasabi
  - 移動檔案jottacloud wasabi
  - 雲端對雲端遷移工具
  - wasabi物件儲存遷移
  - jottacloud備份wasabi
tags:
  - RcloneView
  - jottacloud
  - wasabi
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將Jottacloud遷移到Wasabi — 使用RcloneView傳輸檔案

> 無需先下載到本機磁碟，即可將你的Jottacloud檔案直接遷移到Wasabi的低成本物件儲存。

從Jottacloud這類消費級雲端服務轉向更便宜的長期物件儲存的團隊常常會遇到障礙:他們的檔案存放在託管於挪威的個人雲端帳戶中,而新的目的地是一個存取模式完全不同的S3相容儲存桶。RcloneView在一個視窗中彌合了這個差距,讓你可以將兩個服務連接為遠端,直接在它們之間傳輸,雲端對雲端,無需經過本機儲存中轉。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在RcloneView中連接兩個遠端

首先透過瀏覽器式的OAuth登入流程新增Jottacloud作為遠端,然後使用你的Access Key ID、Secret Access Key和正確的區域端點將Wasabi新增為S3相容遠端。兩個遠端都會作為個別的分頁出現在Explorer面板中,你可以使用雙面板版面配置,在左側開啟Jottacloud、右側開啟Wasabi。

與僅支援掛載的工具不同,RcloneView在FREE授權下也支援同步和資料夾比較。這意味著你不僅限於簡單的拖放複製,還可以為這次遷移使用完整的同步引擎、篩選和試運行工具。

<img src="/support/images/en/blog/new-remote.png" alt="在RcloneView中為雲端對雲端遷移新增新遠端" class="img-large img-center" />

## 使用Dry Run預覽遷移

在移動任何內容之前,設定一個以Jottacloud為來源、以目標Wasabi儲存桶為目的地的同步工作。將同步方向設定為單向的「Modifying destination only」,這樣Jottacloud上的任何內容都不會被變更。首先以Dry Run模式執行工作——RcloneView會準確顯示哪些檔案將被複製,而不會傳輸任何一個位元組,這在遷移一個你多年未曾全面檢視過的資料夾結構時至關重要。

如果你的Jottacloud帳戶中有新儲存桶不需要的大型媒體庫或封存,可以在實際傳輸開始前使用篩選步驟排除檔案類型或設定最大檔案大小。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="在RcloneView中從Jottacloud到Wasabi的雲端對雲端傳輸" class="img-large img-center" />

## 驗證並監控傳輸

試運行結果看起來正確後,在Advanced Settings步驟中啟用校驗和比較,讓RcloneView透過雜湊值和大小而不僅僅是修改時間來比較檔案——這在兩個截然不同的儲存後端之間遷移時很重要。啟動工作並切換到底部Info View中的Transferring分頁,即時查看資料傳輸到Wasabi時的進度、傳輸速度和檔案數量。

對於大型媒體庫,可以調整檔案傳輸數量和多執行緒傳輸設定以更好地運用頻寬,並讓Job History記錄完整的執行過程以供日後參考。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Jottacloud遷移到Wasabi後檢視工作歷史記錄" class="img-large img-center" />

## 開始使用

1. 從[rcloneview.com](https://rcloneview.com/src/download.html)**下載RcloneView**。
2. 透過OAuth登入新增Jottacloud作為遠端,然後使用Access Key ID和Secret Access Key將Wasabi新增為S3相容遠端。
3. 建立一個從Jottacloud到Wasabi儲存桶的單向同步工作,並執行試運行以預覽將要複製的確切檔案。
4. 啟用校驗和驗證,執行實際同步,然後在Job History中確認已完成的傳輸。

從通用雲端遷移到專用物件儲存,並不意味著要在多個應用程式之間來回切換或忍受緩慢的本機重新上傳——RcloneView在一個介面中處理整個路徑。

---

**相關指南:**

- [修復Jottacloud同步錯誤 — 使用RcloneView解決](https://rcloneview.com/support/blog/fix-jottacloud-sync-errors-rcloneview)
- [管理Wasabi儲存 — 使用RcloneView同步和備份檔案](https://rcloneview.com/support/blog/manage-wasabi-cloud-sync-backup-rcloneview)
- [將Backblaze B2遷移到Wasabi — 使用RcloneView傳輸檔案](https://rcloneview.com/support/blog/migrate-backblaze-b2-to-wasabi-rcloneview)

<CloudSupportGrid />
