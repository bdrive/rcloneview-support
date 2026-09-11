---
slug: migrate-icloud-drive-to-dropbox-rcloneview
title: "將 iCloud Drive 遷移到 Dropbox — 使用 RcloneView 傳輸檔案"
authors:
  - casey
description: "使用 RcloneView 將檔案從 iCloud Drive 移動到 Dropbox——這是一款跨平台 GUI 工具,可同時連接兩個雲端,實現直接、可驗證的傳輸。"
keywords:
  - 將 iCloud Drive 遷移到 Dropbox
  - iCloud 到 Dropbox 的傳輸
  - Apple 雲到 Dropbox
  - iCloud Drive 遷移
  - RcloneView 雲到雲傳輸
  - 從 iCloud 切換到 Dropbox
  - 將 iCloud Drive 備份到 Dropbox
  - 將 Apple 檔案傳輸到 Dropbox
tags:
  - RcloneView
  - cloud-to-cloud
  - migration
  - dropbox
  - macos
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 iCloud Drive 遷移到 Dropbox — 使用 RcloneView 傳輸檔案

> 離開 iCloud Drive 通常意味著要先把所有內容下載到 Mac 上——RcloneView 可以直接連接兩個雲端,不需經過本地中轉即可傳輸檔案。

無論是離開 Apple 生態系統、轉向跨平台團隊協作,還是單純想把儲存整合到 Dropbox,都會遇到同一個問題:iCloud Drive 並未提供匯出到其他雲端服務商的原生功能。常見的變通做法是把整個資料庫下載到本機磁碟,再重新上傳到 Dropbox,這樣不僅會讓傳輸時間加倍,還會佔用你可能並不寬裕的本機磁碟空間。RcloneView 依託支援 iCloud Drive 所需的 rclone v1.69+,可同時連接兩個遠端儲存,直接在雲端之間搬移檔案。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接 iCloud Drive 與 Dropbox

iCloud Drive 需要 rclone v1.69 或更新版本,而 RcloneView 預設內建的 rclone 已經滿足此需求,不需要額外設定。使用你的 Apple 帳戶憑證新增 iCloud Drive 遠端,接著透過 OAuth 瀏覽器登入新增 Dropbox。兩個遠端隨即會以分頁形式出現在檔案總管中,你可以在開始傳輸前以雙面板配置並排開啟,瀏覽各自的資料庫。RcloneView 可在 Windows、macOS 與 Linux 上的同一個視窗中掛載並同步 90+ 服務商,因此無論是在 Mac 上,還是在管理全家共用 Apple 儲存空間的 Windows 電腦上,這套工作流程都同樣適用。

<img src="/support/images/en/blog/new-remote.png" alt="Adding an iCloud Drive remote alongside Dropbox in RcloneView" class="img-large img-center" />

## 將遷移作為同步工作執行

與其一個個資料夾拖曳,不如在 4 步驟精靈中設定一個單向同步工作:來源為 iCloud Drive,目的地為 Dropbox,方向選擇「僅修改目的地」,如此 iCloud 端便不會有任何變動。對於較大的相片或文件資料庫,先執行一次 Dry Run 可以在資料實際搬移前準確顯示將複製的內容——考量到 iCloud Drive 中的個人內容往往會隨著時間不斷累積,這一步格外值得執行。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a one-way sync job from iCloud Drive to Dropbox in RcloneView" class="img-large img-center" />

## 監控傳輸並確認完成

大型資料庫需要一些時間,尤其是數量可觀的相片或文件集合。Transferring 分頁會顯示即時進度、速度與檔案數量,而 Job History 會記錄已完成工作的總大小以及發生錯誤的檔案,方便你查看哪些內容需要重試。若傳輸過程中途被中斷,RcloneView 的自動重試設定會重新執行整個同步(預設 3 次),以補上未完成的部分。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing a completed iCloud Drive to Dropbox transfer in RcloneView" class="img-large img-center" />

## 快速開始

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 新增你的 iCloud Drive 遠端(需要 rclone v1.69+,預設已內建)以及透過 OAuth 登入的 Dropbox 遠端。
3. 執行 Dry Run,預覽即將傳輸的檔案。
4. 建立一個單向同步工作,並在 Job History 中監控其完成情況。

一旦設定好同步工作,之後為新增檔案重複傳輸只需點擊一次,而不必再手動匯出一遍。

---

**相關指南:**

- [將 iCloud Drive 遷移到 Google Drive — 使用 RcloneView 傳輸檔案](https://rcloneview.com/support/blog/migrate-icloud-drive-to-google-drive-rcloneview)
- [將 iCloud Drive 遷移到 OneDrive — 使用 RcloneView 傳輸檔案](https://rcloneview.com/support/blog/migrate-icloud-drive-to-onedrive-rcloneview)
- [管理 iCloud Drive 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)

<CloudSupportGrid />
