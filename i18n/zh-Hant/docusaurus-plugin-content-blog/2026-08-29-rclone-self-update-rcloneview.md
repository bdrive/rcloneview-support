---
slug: rclone-self-update-rcloneview
title: "Rclone 自我更新 — 在 RcloneView 中保持內建引擎最新"
authors:
  - casey
description: "在 RcloneView 內一鍵更新內建 rclone 二進位檔,讓新的供應商修正與功能無需手動重新安裝即可生效。"
keywords:
  - rclone 自我更新
  - 更新內建 rclone
  - RcloneView rclone 版本
  - 保持 rclone 最新
  - rclone 二進位更新 GUI
  - RcloneView 內建 rclone
  - rclone rc api 版本
  - 雲端儲存 GUI 更新
  - rclone 最低版本
tags:
  - RcloneView
  - feature
  - automation
  - installation
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Rclone 自我更新 — 在 RcloneView 中保持內建引擎最新

> RcloneView 內建了 rclone,並且可以在應用程式內更新該內建二進位檔,而不需要你另外追蹤單獨的下載。

RcloneView 並不只是呼叫系統上剛好安裝的任意 rclone——它自帶內建的 rclone 二進位檔,並透過本機 rclone RC API 與之通訊。實際執行每一次複製、同步與掛載的正是這個內建二進位檔,因此保持它最新對於取得新的供應商修正、通訊協定變更與效能改善至關重要。RcloneView 內建了針對內建引擎的應用程式內自我更新功能,而不是要求每次 rclone 發布新版本時都重新安裝整個應用程式。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼內建 Rclone 版本很重要

RcloneView 要求 rclone 的最低版本為 v1.69.1 或更新,因為較新的應用程式功能仰賴該版本之後才提供的 RC API 能力。供應商偶爾會變更其 API,而 rclone 的版本發布會針對這些變更推出修補——執行過時的內建二進位檔可能意味著一個原本運作正常的遠端突然出現與你的 RcloneView 設定毫無關係的驗證或列表錯誤。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView 中依賴內建 rclone 引擎的遠端設定" class="img-large img-center" />

由於內建 rclone 透過本機的 `http://127.0.0.1:5582` 通訊,更新它不會影響你的遠端、同步工作或已儲存的憑證——這些都儲存在 RcloneView 自身的設定中,與二進位版本彼此獨立。

## 觸發自我更新

自我更新操作位於 rclone 連線詳細資料旁邊,RcloneView 在那裡已經會顯示目前執行中的 rclone 版本、本機 API 位址與主機作業系統。從那裡執行更新會取得並替換為最新的相容 rclone 版本,而不需要離開應用程式或開啟終端機。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="在 RcloneView 中更新內建 rclone 後檢查 rclone 版本與工作記錄" class="img-large img-center" />

當支援討論串或發行說明提到某個特定供應商的修正時,這點值得檢查——先更新內建二進位檔是在深入排查同步工作之前排除版本落差問題的快捷方式。

## 結合自我更新與記錄功能

如果更新後工作立即開始失敗,啟用 rclone 記錄功能(設定 > 內建 Rclone > 啟用 rclone 記錄)並將記錄層級設為 DEBUG,可以取得清楚的更新前後紀錄。重新啟動內建 rclone 程序並重現該工作,記錄檔會準確顯示哪個版本處理了該請求——在回報問題或比較不同版本的行為時很有用。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在 RcloneView 中更新內建 rclone 引擎後執行同步工作" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 開啟頁尾或連線設定,查看目前執行中的內建 rclone 版本。
3. 執行應用程式內自我更新以取得最新的相容 rclone 版本。
4. 重新執行現有的同步或掛載,確認一切仍能正常連線。

保持內建引擎最新是一個小習慣,卻能避免相當一部分「昨天還能用」的雲端同步問題。

---

**相關指南:**

- [RcloneView 連線管理員 — 內建與外部 Rclone](https://rcloneview.com/support/blog/rcloneview-connection-manager-embedded-external)
- [Rclone RC API — 透過 RcloneView 進行遠端控制](https://rcloneview.com/support/blog/rclone-rc-api-remote-control-rcloneview)
- [自訂 Rclone 旗標 — RcloneView 中的進階選項](https://rcloneview.com/support/blog/custom-rclone-flags-advanced-options-rcloneview)

<CloudSupportGrid />
