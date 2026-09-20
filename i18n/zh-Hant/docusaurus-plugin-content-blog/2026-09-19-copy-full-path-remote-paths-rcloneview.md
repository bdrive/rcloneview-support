---
slug: copy-full-path-remote-paths-rcloneview
title: "複製完整路徑 — 在 RcloneView 中快速複製遠端路徑"
authors:
  - robin
description: "使用 RcloneView 的複製完整路徑指令,即時取得用於 rclone CLI 指令、腳本與工作設定的 remote:path 字串。"
keywords:
  - RcloneView 複製完整路徑
  - rclone 遠端路徑
  - 帶遠端名稱的路徑複製
  - rclone CLI 路徑語法
  - 麵包屑路徑列
  - RcloneView 終端機工作流程
  - rclone 腳本路徑
  - 雲端遠端路徑複製
tags:
  - RcloneView
  - feature
  - cli
  - tips
  - productivity
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 複製完整路徑 — 在 RcloneView 中快速複製遠端路徑

> 不必再手動重新輸入遠端名稱與資料夾路徑 — 右鍵點擊麵包屑列,即可複製 rclone 所期望的精確 `remote:path` 字串。

同時使用 RcloneView 圖形介面與 rclone CLI 指令的人都明白這種麻煩:先用肉眼找到一個資料夾,接著還得手動重新拼出它的路徑,才能在腳本或終端機指令中參照它。RcloneView 的複製完整路徑功能徹底省去了這個步驟,它會產生 rclone 所使用的精確 `mygoogledrive:Meet recordings` 格式,可直接貼到指令、工作篩選條件或自動化腳本中。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 這個指令的位置

複製完整路徑位於每個檔案總管面板頂端麵包屑路徑列的右鍵選單中,與剪下、複製、貼上、全選並列。導覽到任一資料夾(本機或雲端皆可),右鍵點擊路徑列本身(而非某個檔案列),然後選擇複製完整路徑。RcloneView 會以 rclone 本身的 CLI、設定檔與 RC API 呼叫所期望的相同 `remote:path` 語法,將遠端名稱與資料夾路徑寫入剪貼簿。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView breadcrumb path bar with right-click context menu open" class="img-large img-center" />

這一點很重要,因為 rclone 對這種語法要求嚴格:冒號用來分隔遠端名稱與路徑,一旦輸入錯誤(多了一個斜線、少了一個冒號),便會在使用者憑記憶手動輸入路徑時,成為常見的「找不到目錄」錯誤來源之一。

## 為什麼比手動輸入路徑更好

一旦資料夾名稱包含 Unicode 字元、空格或很深的巢狀層級,手動輸入路徑的方式就難以應付 —— 而這正是最容易輸錯、也最難除錯的一類路徑。複製完整路徑透過直接複製 RcloneView 在繪製資料夾樹狀結構時已經解析完成的字面字串,完全繞過了這個問題,因此貼上的內容必定與遠端實際內容一致。RcloneView 在 FREE 授權下也支援同步與資料夾比較,複製完整路徑在檔案總管、同步工作設定與資料夾比較這三種情境中都能以相同方式運作。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Selecting a folder path for comparison in RcloneView" class="img-large img-center" />

在設定同步工作的來源或目的資料夾,或是撰寫需要精確路徑前綴的自訂篩選規則時,這項功能格外實用 —— 貼上複製好的路徑可避免那些悄悄排除掉錯誤檔案的小疏失。

## 與內建終端機搭配使用

複製完整路徑與底部資訊檢視中的 Rclone 終端機搭配使用時最為強大。從檔案總管複製一個路徑,切換到終端機分頁,直接貼到 `rclone lsf` 或 `rclone about` 這類指令中,不必離開應用程式或重新輸入任何內容。這讓 RcloneView 成為一種混合工作流程工具:先用圖形介面瀏覽找到所需資料夾,再直接進入 CLI 層級的控制,處理任何圖形介面尚未提供的功能。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an rclone command referencing a copied remote path" class="img-large img-center" />

對於需要為定期維護工作撰寫腳本的人來說 —— 例如一次 `rclone size` 檢查,或在兩個資料夾之間手動執行 `rclone check` —— 這個捷徑省去了手寫此類指令時最容易出錯的一步。

## 快速上手

1. 如果尚未安裝,請從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在檔案總管中開啟任一遠端,導覽到要參照的資料夾。
3. 右鍵點擊麵包屑路徑列,選擇複製完整路徑。
4. 將複製的 `remote:path` 字串貼到同步工作、篩選規則或內建的 Rclone 終端機中。

一旦這成為習慣,手動輸入遠端路徑就會顯得像是一種低效的老方法。

---

**相關指南:**

- [RcloneView 終端機:在圖形介面中充分發揮 rclone CLI 的強大功能](https://rcloneview.com/support/blog/rcloneview-terminal-rclone-cli-inside-gui)
- [RcloneView 鍵盤快速鍵與效率技巧](https://rcloneview.com/support/blog/keyboard-shortcuts-productivity-rcloneview)
- [10 個能加速 RcloneView 雲端檔案管理的雙欄檔案總管技巧](https://rcloneview.com/support/blog/two-pane-explorer-productivity-tips-rcloneview)

<CloudSupportGrid />
