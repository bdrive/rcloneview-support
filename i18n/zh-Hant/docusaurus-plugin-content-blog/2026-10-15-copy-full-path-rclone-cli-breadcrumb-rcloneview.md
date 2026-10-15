---
slug: copy-full-path-rclone-cli-breadcrumb-rcloneview
title: "複製含遠端名稱的完整路徑 — 在 RcloneView 中串接 GUI 與 rclone 指令"
authors:
  - kai
description: "使用 RcloneView 麵包屑中的複製完整路徑（Copy Full Path）取得 remote:path 字串，並在內建 rclone 終端機中執行。一種實用的從 GUI 到 CLI 的工作流程。"
keywords:
  - rclone 遠端路徑
  - rclone 複製完整路徑
  - RcloneView 麵包屑
  - rclone 終端機 GUI
  - rclone about 指令
  - remote:path 語法
  - rclone GUI 工作流程
  - rclone 指令輔助
  - RcloneView 功能
  - 雲端路徑複製
tags:
  - RcloneView
  - feature
  - cli
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 複製含遠端名稱的完整路徑 — 在 RcloneView 中串接 GUI 與 rclone 指令

> 一次右鍵點擊，就能把您正在瀏覽的資料夾變成可直接使用的 rclone 路徑。

輸入過 rclone 指令的人都知道，要把 `remote:path` 寫得完全正確有多麻煩，尤其是路徑含空格或巢狀資料夾時。RcloneView 透過麵包屑選單中的一個選項解決了這個問題：它會把包含遠端名稱的完整路徑直接複製到剪貼簿。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 複製完整路徑的作用

每個檔案總管面板都有一個顯示目前位置的麵包屑路徑列。在其上按右鍵，您會看到剪下、複製、貼上、全選以及 **Copy Full Path (with Remote)**。最後一項會以 `mygoogledrive:Meet recordings` 的形式複製該位置，這正是 rclone 所要求的語法。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView 檔案總管中列出的遠端" class="img-large img-center" />

由於包含了遠端名稱，您無須猜測某個資料夾屬於眾多遠端中的哪一個。當您管理同一供應商的多個帳號時，這一點特別重要。

## 貼到內建終端機

RcloneView 在底部的資訊檢視（Info View）中包含一個具備完整終端機模擬的 Terminal 分頁。輸入 `rclone` 加一個空格即可取得指令建議，然後貼上複製的路徑。例如，`rclone about "remote:"` 會回報遠端的儲存用量，`rclone listremotes` 會列出所有已設定的遠端。含空格的路徑請加上引號。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在 RcloneView 中執行作業與指令" class="img-large img-center" />

當您需要精靈沒有提供的一次性指令，同時又想借助視覺化檔案總管找到正確的資料夾時，這種 GUI 與 CLI 之間的往返相當實用。

## 在作業與文件中使用路徑

複製的路徑在終端機之外同樣好用：將其貼到操作手冊、支援工單或同事的聊天中，可確保每個人指向的是同一個位置。傳輸完成後，可在 Transferring 分頁或作業記錄（Job History）中檢視結果，後者會記錄每次執行的狀態、大小與速度。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="顯示已完成傳輸的作業記錄" class="img-large img-center" />

RcloneView 是建構在 rclone 之上的 GUI，而不是 rclone 的替代品，因此您在終端機中執行的指令與作業使用的是同一個內建引擎。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 新增一個遠端，並在檔案總管中瀏覽到某個資料夾。
3. 在麵包屑列上按右鍵，選擇 **Copy Full Path (with Remote)**。
4. 開啟 Terminal 分頁，輸入 `rclone about "` 並貼上路徑。

更少的輸入錯誤，更快的疑難排解，點擊與輸入集於一個工具。

---

**相關指南：**

- [RcloneView 內的 Rclone 終端機](https://rcloneview.com/support/blog/rcloneview-terminal-rclone-cli-inside-gui)
- [終端機與 GUI 工作流程](https://rcloneview.com/support/blog/rcloneview-terminal-gui-workflow)
- [Alias 遠端捷徑路徑](https://rcloneview.com/support/blog/alias-remote-shortcut-paths-rcloneview)

<CloudSupportGrid />
