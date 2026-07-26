---
slug: migrate-pcloud-to-proton-drive-rcloneview
title: "將 pCloud 遷移到 Proton Drive — 使用 RcloneView 傳輸檔案"
authors:
  - steve
description: "使用 RcloneView 直接將檔案從 pCloud 移動到 Proton Drive,不需要本機下載步驟,並支援 Dry Run 預覽與校驗和驗證。"
keywords:
  - 將 pCloud 遷移到 Proton Drive
  - pCloud 到 Proton Drive 傳輸
  - RcloneView pCloud Proton Drive
  - 隱私雲端遷移
  - 傳輸 pCloud 檔案
  - Proton Drive 同步
  - 雲端到雲端遷移
  - 加密雲端儲存傳輸
tags:
  - RcloneView
  - pcloud
  - proton-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 pCloud 遷移到 Proton Drive — 使用 RcloneView 傳輸檔案

> 直接在兩個注重隱私的雲端儲存供應商之間搬移檔案,不必先把所有內容繞道本機硬碟。

從 pCloud 轉換到 Proton Drive 的使用者通常出於相同的理由:他們想要與注重隱私的供應商綁定的端對端加密儲存。問題是,這兩項服務彼此並不會原生互通,因此預設做法是從 pCloud 下載所有內容,再重新上傳到 Proton Drive —— 不僅緩慢,還會讓本機磁碟使用量無謂地加倍。RcloneView 在同一個視窗中連接兩個遠端,直接進行雲端到雲端的傳輸。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接兩個遠端

先新增 pCloud —— 它是以 OAuth 為基礎的遠端,會彈出瀏覽器視窗進行登入,RcloneView 隨即自動連線,不必複製任何 API 金鑰。Proton Drive 需要你的帳戶電子郵件與密碼,若已啟用雙重驗證,也可選擇性使用。兩個遠端都設定完成後,會以獨立分頁的形式出現在 Explorer 面板中,你可以在分割面板檢視中一側開啟一個,在搬移任何內容之前並排查看來源資料夾與目的資料夾。

<img src="/support/images/en/blog/new-remote.png" alt="Connecting pCloud and Proton Drive as remotes in RcloneView" class="img-large img-center" />

## 在雲端與雲端之間傳輸檔案

RcloneView 能在單一視窗中掛載並同步 90 個以上的供應商,並支援 Windows、macOS 與 Linux,因此從 pCloud 到 Proton Drive 的傳輸,與其他跨供應商搬移的方式完全相同。若是較小型的一次性傳輸,只需在兩個面板之間拖放即可 —— RcloneView 會辨識出這是跨遠端操作,並執行複製而非移動。若是完整帳戶遷移,則應改為設定 Copy 或 Sync 工作,以取得進度追蹤、重試邏輯,以及一份確切記錄已傳輸內容的紀錄。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferring files from pCloud to Proton Drive in RcloneView" class="img-large img-center" />

## 驗證遷移是否乾淨完成

在關閉 pCloud 帳戶之前,先在來源與目的之間執行 Folder Compare。它會標示僅存在於左側的檔案、僅存在於右側的檔案,以及大小不同的檔案,讓你在取消舊方案之前,能捕捉到任何未成功傳輸的內容。對於大型資料庫,可在同步設定中啟用校驗和比對,如此檔案會依雜湊值而非僅依檔案大小進行驗證 —— 在兩個內部檔案處理方式不同的供應商之間遷移時,這一點格外重要。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Reviewing migration job history in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 新增 pCloud 作為遠端,並透過瀏覽器 OAuth 登入。
3. 使用帳戶電子郵件與密碼新增 Proton Drive 作為遠端。
4. 先執行 Dry Run,再於兩個遠端之間執行 Copy 或 Sync 工作。

傳輸完成後,透過 Folder Compare 進行驗證,能讓你放心關閉舊帳戶,而不會遺漏任何內容。

---

**相關指南:**

- [管理 pCloud 儲存 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-pcloud-cloud-sync-backup-rcloneview)
- [管理 Proton Drive 儲存 — 使用 RcloneView 同步](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [將 pCloud 遷移到 OneDrive — 使用 RcloneView 傳輸檔案](https://rcloneview.com/support/blog/migrate-pcloud-to-onedrive-rcloneview)

<CloudSupportGrid />
