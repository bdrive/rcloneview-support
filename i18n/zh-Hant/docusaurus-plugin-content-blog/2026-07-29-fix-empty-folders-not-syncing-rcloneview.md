---
slug: fix-empty-folders-not-syncing-rcloneview
title: "修復空資料夾不同步的問題 — 用RcloneView啟用目錄建立"
authors:
  - robin
description: "了解為什麼空資料夾在雲端同步過程中會消失,以及如何使用RcloneView的建立空目錄選項來解決這個問題。"
keywords:
  - 空資料夾不同步
  - 修復雲端同步資料夾遺失
  - RcloneView 建立空目錄
  - 雲端同步資料夾結構
  - rclone 空目錄同步
  - 資料夾結構未保留
  - 同步時空資料夾遺失
  - RcloneView 同步設定
tags:
  - RcloneView
  - troubleshooting
  - tips
  - sync
  - job-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復空資料夾不同步的問題 — 用RcloneView啟用目錄建立

> 如果同步工作丟下了您精心整理的空資料夾,解決方法是在RcloneView的同步設定中打開一個開關,而不是您雲端服務商的漏洞。

包括rclone在內的多數同步引擎,只傳輸真正包含資料的物件 — 空資料夾沒有可複製的內容,因此預設會被完全略過。對於扁平化備份來說這沒什麼問題,但對於仰賴固定資料夾結構的工作流程就會出問題,例如專案範本、客戶接收目錄樹,或是團隊期望在檔案抵達之前就能看到的預留位置目錄。RcloneView將控制此行為的設定直接顯示在同步精靈中,因此您不需要修改設定檔,也不必盲目地重新執行工作。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 空資料夾為何會被遺漏

當RcloneView(透過rclone)在同步過程中走訪來源目錄樹時,它是根據檔案而非目錄來建立傳輸清單的。一個資料夾若只包含子資料夾,而這些子資料夾及其下方任何位置都沒有檔案,就不會產生任何可傳輸的物件,因此沒有任何資訊告訴目的地端應該存在這個資料夾。這是預期的同步行為,而非缺陷 — 但對於任何認為資料夾對資料夾的同步會完整保留樹狀結構(包括空分支)的人來說,這會是個意外。

<img src="/support/images/en/blog/new-remote.png" alt="顯示第1步設定選項的RcloneView同步設定精靈" class="img-large img-center" />

這項設定位於同步設定精靈的第1步,與來源、目的地和同步方向並列 — 由於預設為關閉,第一次操作時很容易被忽略。

## 開啟「建立空目錄」

在4步驟同步精靈的第1步中,在儲存工作之前啟用「建立空目錄」選項。開啟後,RcloneView會指示rclone在目的地端複製完整的目錄結構,包括目前不含任何檔案的分支。這對於按排程反覆執行的工作最為重要 — 今天是空的資料夾,下週可能就會收到檔案,而事先準備好目的地結構可避免新內容應該放在哪裡的困惑。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView同步設定第1步中的建立空目錄開關" class="img-large img-center" />

與僅支援掛載的工具不同,RcloneView在FREE授權下也支援同步與資料夾比較 — 因此無論您是鏡像單一目的地,還是透過1:N同步將來源分散至多個目的地,這項修復都同樣適用。

## 用Dry Run驗證修復效果

在提交完整同步之前,使用RcloneView的Dry Run功能準確預覽哪些資料夾和檔案將被建立或變更。Dry Run會列出待執行的操作而不觸碰目的地端,這是在實際執行工作之前確認空資料夾確實會出現的可靠方法 — 若您是為一項已執行一段時間的工作追加啟用此設定,這一步尤其有用。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在RcloneView中執行同步工作前執行試執行預覽" class="img-large img-center" />

若某項排程工作在未啟用該選項的情況下已經執行過,請重新儲存並勾選「建立空目錄」,再執行一次 — 下一次執行將補齊目的地端缺漏的目錄結構。

## 開始使用

1. 從[rcloneview.com](https://rcloneview.com/src/download.html)**下載RcloneView**。
2. 開啟或建立您的同步工作,進入第1步:設定儲存空間。
3. 在儲存前勾選「建立空目錄」。
4. 先執行Dry Run,確認資料夾結構符合預期。

只需一個核取方塊,就能讓資料夾結構在您同步的每一個雲端保持完整。

---

**相關指南:**

- [資料夾比較指南 — 使用RcloneView偵測差異](https://rcloneview.com/support/blog/folder-comparison-guide-detect-differences-rcloneview)
- [Dry Run — 使用RcloneView在傳輸前預覽雲端同步](https://rcloneview.com/support/blog/dry-run-preview-sync-before-transfer-rcloneview)
- [篩選規則 — 使用RcloneView進行選擇性同步](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)

<CloudSupportGrid />
