---
slug: mount-digitalocean-spaces-local-drive-rcloneview
title: "透過 RcloneView 將 DigitalOcean Spaces 掛載為本機磁碟，輕鬆存取檔案"
authors:
  - tayson
description: "讓你的 DigitalOcean Spaces 物件儲存像一般資料夾一樣使用——將其掛載為本機磁碟，拖放檔案，並透過 RcloneView 與其他雲端同步。"
keywords:
  - digitalocean spaces mount
  - digitalocean spaces local drive
  - spaces s3 compatible mount
  - digitalocean spaces gui
  - digitalocean spaces file manager
  - mount object storage local drive
  - digitalocean spaces sync
  - digitalocean spaces backup
  - spaces rclone gui
  - digitalocean spaces desktop
tags:
  - RcloneView
  - digitalocean-spaces
  - cloud-storage
  - mount
  - s3-compatible
  - sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 透過 RcloneView 將 DigitalOcean Spaces 掛載為本機磁碟，輕鬆存取檔案

> DigitalOcean Spaces 很適合用來存放資產,但透過網頁主控台存取檔案卻既緩慢又麻煩。如果可以像存取桌面上的一般資料夾那樣瀏覽你的 Spaces 儲存桶,那該有多好?

DigitalOcean Spaces 提供價格實惠且相容 S3 的物件儲存,但其網頁儀表板並非為日常檔案管理而設計。上傳資料夾、整理檔案或快速預覽內容,往往需要不斷切換瀏覽器分頁。RcloneView 讓你能將任何 Spaces 儲存桶掛載為本機磁碟——像操作本機檔案系統一樣自然地瀏覽、拖放及同步檔案。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼要將 DigitalOcean Spaces 掛載到本機?

Spaces 作為應用程式的後端儲存表現良好,但當人類需要直接與其互動時:

- **網頁主控台速度慢** — 瀏覽含有數千個檔案的大型儲存桶相當繁瑣。沒有批次重新命名,沒有快速預覽,也沒有拖放功能。
- **命令列工具需要記住指令** — `s3cmd` 和 `aws s3` 雖然可用,但不是每個人都想為了基本的檔案操作而輸入指令。
- **沒有原生桌面整合** — 與 Dropbox 或 Google Drive 不同,Spaces 並沒有桌面同步用戶端。

將 Spaces 掛載為本機磁碟能同時解決這三個問題。你的儲存桶會以資料夾形式出現在檔案總管中——用熟悉的工具開啟檔案、複製資料夾、刪除項目。

## 將 DigitalOcean Spaces 設定為遠端

由於 Spaces 相容於 S3,在 RcloneView 中的設定會使用 S3 供應商類型:

1. 開啟 RcloneView 並點選 **新增遠端**。
2. 選擇 **Amazon S3** 作為供應商類型(Spaces 使用 S3 API)。
3. 從 S3 供應商下拉選單中選擇 **DigitalOcean Spaces**。
4. 輸入你的憑證:
   - 來自你的 DigitalOcean API 設定的 **存取金鑰(Access Key)** 與 **私密金鑰(Secret Key)**。
   - **地區(Region)**:你的 Spaces 地區(例如 `nyc3`、`sfo3`、`ams3`、`sgp1`)。
   - **端點(Endpoint)**:`https://{region}.digitaloceanspaces.com`
5. 儲存此遠端——你的 Spaces 儲存桶現在即可瀏覽。

<img src="/support/images/en/blog/new-remote.png" alt="Add DigitalOcean Spaces as S3-compatible remote" class="img-large img-center" />

## 將 Spaces 掛載為本機磁碟

連線完成後,只需幾個步驟即可將你的 Spaces 儲存桶掛載為本機磁碟:

1. 在檔案總管中瀏覽至你的 Spaces 遠端。
2. 在你想掛載的儲存桶或資料夾上按右鍵。
3. 從右鍵選單中選擇 **掛載**。
4. 選擇一個本機掛載點(Windows 上為磁碟機代號,Mac/Linux 上為掛載路徑)。
5. 點選 **掛載**——你的 Spaces 儲存桶現在會以本機磁碟的形式出現。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount DigitalOcean Spaces from Explorer" class="img-large img-center" />

或者,你也可以使用掛載管理員來取得更多掛載選項的控制:

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure Spaces mount in Mount Manager" class="img-large img-center" />

### 掛載磁碟後你能做的事

- **直接開啟檔案** — 雙擊圖片、文件或影片,即可在預設應用程式中開啟。
- **複製與貼上** — 使用你的作業系統檔案總管,在本機檔案系統與 Spaces 之間搬移檔案。
- **拖放** — 將檔案從你的桌面拖放到已掛載的磁碟中。
- **在應用程式中使用** — 讓 Photoshop、VS Code 或影片編輯器等應用程式直接指向已掛載磁碟上的檔案。

## 瀏覽與管理檔案

即使不進行掛載,RcloneView 的雙窗格檔案總管也能讓你透過強大的檔案管理員來操作 Spaces:

- 透過熟悉的樹狀導覽**瀏覽儲存桶與資料夾**。
- 在 Spaces 與任何其他遠端(Google Drive、S3、本機磁碟)之間**拖放**檔案。
- **建立、重新命名及刪除**檔案與資料夾。
- **檢視檔案大小與日期**,方便管理。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files to DigitalOcean Spaces" class="img-large img-center" />

## 將 Spaces 與其他雲端同步

DigitalOcean Spaces 並非孤立存在。常見的工作流程包括:

### 同步 Spaces ↔ AWS S3

在 AWS S3 中保留一份 Spaces 資料的備份(或反之亦然):

1. 建立一個以 Spaces 為來源、S3 為目的地的同步工作。
2. 排程使其每晚執行。
3. 使用[資料夾比較](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)來確認雙方內容一致。

### 同步 Spaces ↔ 本機開發資料夾

保留一份 Spaces 資產的本機副本以供開發使用:

1. 建立一個從 Spaces 到本機資料夾的同步工作。
2. 在本機進行編輯,再同步回 Spaces。

### 從 Spaces 分發到多個雲端

使用 v1.3 的[批次工作](https://rcloneview.com/support/blog/batch-jobs-run-multiple-cloud-tasks-rcloneview),在一次自動化流程中將 Spaces 內容複製到 Google Drive、OneDrive 及 S3。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Sync DigitalOcean Spaces with other clouds" class="img-large img-center" />

## 自動化 Spaces 工作流程

### 排程備份

從你的 Spaces 儲存桶到其他雲端或本機儲存空間,設定每日的複製工作:

1. 在工作管理員中建立此工作。
2. 透過[工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)進行排程。
3. 透過 [Slack](https://rcloneview.com/support/blog/rcloneview-slack-remote-control) 或 [Telegram](https://rcloneview.com/support/blog/rcloneview-telegram-remote-control) 接收通知。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule DigitalOcean Spaces sync jobs" class="img-large img-center" />

### 效能建議

- **並行傳輸數**:8–16(Spaces 能良好地處理高並行度)。
- **區塊大小**:大型檔案建議使用 64MB。
- **快速列表(Fast-list)**:在大型儲存桶中啟用以加快目錄列表速度。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 使用你的 API 金鑰,**新增 Spaces** 作為相容 S3 的遠端。
3. 將你的儲存桶**掛載**為本機磁碟,或在檔案總管中瀏覽它。
4. 透過排程工作**同步或備份**至其他雲端。

別再與網頁主控台奮戰了。將你的 DigitalOcean Spaces 掛載為本機磁碟,像處理其他一切事物一樣,直接從你的桌面操作檔案。

---

**相關指南:**

- [新增 AWS S3 及相容 S3 儲存](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [將雲端儲存掛載為本機磁碟](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [瀏覽與管理遠端](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [比較資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [工作排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)

<CloudSupportGrid />
