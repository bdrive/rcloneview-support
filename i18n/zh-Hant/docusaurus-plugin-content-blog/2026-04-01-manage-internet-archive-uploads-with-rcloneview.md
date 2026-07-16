---
slug: manage-internet-archive-uploads-with-rcloneview
title: "如何使用 RcloneView 上傳與管理 Internet Archive 檔案"
authors:
  - tayson
description: "使用 RcloneView 將檔案上傳至 Internet Archive、整理收藏並同步本機封存資料。這是 rclone Internet Archive 後端的視覺化 GUI。"
keywords:
  - internet archive rcloneview
  - upload to internet archive rclone
  - internet archive rclone gui
  - archive.org file upload
  - internet archive cloud sync
  - rcloneview internet archive
  - archive.org bulk upload
  - internet archive backup
  - rclone internet archive backend
  - preserve files internet archive
tags:
  - internet-archive
  - digital-preservation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何使用 RcloneView 上傳與管理 Internet Archive 檔案

> Internet Archive 免費永久保存人類知識——書籍、音樂、軟體、影片與網頁。RcloneView 讓你不需要碰命令列，就能輕鬆將自己的檔案上傳、整理並同步至 archive.org。

Internet Archive（archive.org）為可公開分享的檔案提供免費、永久的雲端儲存。研究人員、檔案管理員、教育工作者,以及任何想為數位公共資源做出貢獻的人都會使用它。rclone 的 Internet Archive 後端讓這一切可以透過腳本完成，而 RcloneView 則將這股力量包裝成視覺化介面——讓你只需點擊幾下,就能瀏覽你的封存項目、上傳新檔案並同步收藏。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 使用 RcloneView + Internet Archive 你能做什麼

- **上傳檔案與資料夾**至既有或全新的 archive.org 項目
- **視覺化瀏覽已上傳的項目**,如同使用檔案總管
- **同步本機收藏**至 Internet Archive 以進行保存
- **在 Internet Archive 與其他雲端供應商之間複製檔案**
- **即時監控傳輸進度**

## 設定 Internet Archive 遠端

### 步驟 1 —— 取得你的 Internet Archive 憑證

1. 在 [archive.org](https://archive.org) 建立一個免費帳號。
2. 前往 **My Account → Settings → Security**,並產生一組 **S3-like API key**（Access Key + Secret Key）。雖然名稱如此,但這並非 AWS——這是 archive.org 自家相容於 S3 的 API。

### 步驟 2 —— 在 RcloneView 中新增遠端

開啟 RcloneView 並點擊 **New Remote**：

<img src="/support/images/en/blog/new-remote.png" alt="Add Internet Archive remote in RcloneView" class="img-large img-center" />

1. 從遠端類型清單中選擇 **Internet Archive**。
2. 輸入你在 archive.org 取得的 **Access Key ID** 與 **Secret Access Key**。
3. 為遠端命名（例如 `internet-archive`）並儲存。

### 步驟 3 —— 瀏覽你的項目

連線後,RcloneView 會將你的 archive.org 項目顯示為資料夾。Internet Archive 上的每個「項目」都是單次上傳的容器（例如一張專輯、一本書的掃描檔,或一組影片收藏）。

## 上傳檔案至 Internet Archive

### 上傳新項目

若要建立新的 archive.org 項目並上傳檔案：

1. 在 RcloneView 的右側面板中,進入你的 `internet-archive` 遠端。
2. 建立一個帶有唯一項目識別碼的新資料夾（例如 `my-1980s-radio-recordings`）。
3. 從本機面板將檔案拖放至該項目資料夾中。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Browse and upload to Internet Archive items" class="img-large img-center" />

RcloneView 會傳輸檔案並顯示即時進度。Internet Archive 會非同步處理上傳——依檔案大小不同,你的項目會在幾分鐘到幾小時內公開可見。

### 上傳至既有項目

進入既有的項目資料夾,並將檔案複製或移動進去。RcloneView 會自動處理多部分上傳（multipart upload）與重試邏輯。

## 同步本機封存收藏

若要讓本機資料夾與 Internet Archive 項目保持同步——非常適合持續進行中的封存專案：

1. 在 RcloneView 中開啟 **Jobs**。
2. 將 **Source** 設定為你的本機資料夾（例如 `D:\my-archive-project`）。
3. 將 **Destination** 設定為你的 Internet Archive 項目（例如 `internet-archive:my-1980s-radio-recordings`）。
4. 選擇 **Sync** 模式,僅上傳新增或變更的檔案。
5. 排程每週執行,或依需求手動執行。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule sync job to Internet Archive" class="img-large img-center" />

## 從 Internet Archive 下載與複製

RcloneView 支援雙向操作。你也可以：

- 將公開的 archive.org 項目中的檔案**下載**至本機電腦。
- 將項目**複製**至其他雲端（例如 archive.org → Google Drive 或 Backblaze B2）以達成冗餘保存。

## 關於 Internet Archive 後端的重要注意事項

| 行為 | 說明 |
|----------|--------|
| 項目建立 | 新資料夾會成為新的 archive.org 項目 |
| 可見性 | 上傳的項目預設為公開 |
| 檔案刪除 | 刪除會被排入佇列,archive.org 處理速度較慢 |
| 校驗碼 | 上傳時會驗證 MD5 校驗碼 |
| 速率限制 | 請遵守 archive.org 的爬取限制——避免過度呼叫 API |

## 使用情境

**數位封存專案**——上傳你希望永久保存於公共領域的掃描檔、錄音或文件。

**軟體保存**——在授權允許的情況下,將舊軟體、遊戲或 ROM 貢獻至封存庫。

**備份冗餘**——將 Internet Archive 作為非敏感、可公開分享資料的免費次要備份層。

**研究資料集**——上傳具公開授權的資料集,讓全球研究人員都能取用。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在 archive.org 的 Account Settings 下**產生你的 archive.org API 金鑰**。
3. 在 RcloneView 的遠端設定精靈中**新增 Internet Archive 遠端**。
4. **上傳、同步並保存**——你的檔案將永久免費留存於 archive.org。

Internet Archive 自 1996 年起便持續保存網路與人類文化。RcloneView 讓你能輕鬆貢獻自己的數位資料。

---

**相關指南：**

- [使用 RcloneView 加密雲端備份](https://rcloneview.com/support/blog/encrypt-cloud-backups-crypt-remote-guide-rcloneview)
- [自動化每日雲端備份](https://rcloneview.com/support/blog/automate-daily-cloud-backups-with-rcloneview)
- [多雲備份策略](https://rcloneview.com/support/blog/multi-cloud-backup-strategy-rcloneview)

<CloudSupportGrid />
