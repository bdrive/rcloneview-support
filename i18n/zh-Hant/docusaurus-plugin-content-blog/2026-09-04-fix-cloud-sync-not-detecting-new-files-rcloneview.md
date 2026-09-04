---
slug: fix-cloud-sync-not-detecting-new-files-rcloneview
title: "修復雲端同步無法偵測新檔案的問題 — 使用RcloneView解決"
authors:
  - jay
description: "透過調整快取設定、篩選器和重新整理行為，修復RcloneView中遺漏新檔案或近期變更檔案的雲端同步工作。"
keywords:
  - 雲端同步無法偵測新檔案
  - rcloneview 同步檔案遺失
  - 修復同步工作不更新
  - 目錄快取過期清單
  - rcloneview 疑難排解
  - 雲端同步重新整理問題
  - 新檔案未同步
  - 修復rclone同步偵測
  - 工作未取得變更
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - job-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復雲端同步無法偵測新檔案的問題 — 使用RcloneView解決

> 當同步工作順利完成卻遺漏了全新檔案時，原因幾乎總是過期的資料夾清單，而不是連線故障。

一種常見的支援情境是：同步工作完成且沒有任何錯誤，但幾分鐘前新增到來源資料夾的檔案卻從未出現在目標位置。這看起來像是資料遺失，但在大多數情況下，工作只是讀取了快取的目錄清單，而不是遠端的目前狀態。RcloneView為你提供了無需猜測即可診斷並修復此問題的工具。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 檢查Explorer檢視是否只是過期了

在變更任何工作設定之前，先確認檔案是真的從同步中遺失，而不僅僅是在檢視中被隱藏。在Explorer面板中開啟來源遠端，按F5（macOS上為Cmd+R）強制Reload。如果自檔案新增以來你還沒有重新整理過，RcloneView的檔案清單可能保留了資料夾的過期快照，僅此一項就能解決大量「檔案遺失」的回報。

如果手動重新整理後檔案出現了，但同步工作在上次執行中仍然略過了它們，那麼問題出在工作本身的篩選或快取行為上，而不是Explorer檢視。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="在RcloneView中手動執行同步工作以強制進行全新掃描" class="img-large img-center" />

## 檢查篩選規則和Max File Age設定

同步精靈的第3步允許你設定Max File Age篩選器，測試工作後很容易留下一個過於嚴格的值。如果Max File Age設定得太窄，超出該範圍的檔案——包括一些從先前的雲端副本繼承了較舊時間戳記的新增檔案——會被靜默排除在執行之外。開啟受影響同步的Edit Job，在Filtering Settings步驟中檢查是否有依名稱、副檔名或路徑排除新檔案的Max File Age、Max File Size或自訂篩選規則。

RcloneView可在Windows、macOS和Linux上透過一個視窗掛載並同步90多個提供商，因此無論你排查的是本機到雲端的工作還是雲端對雲端的工作，相同的篩選邏輯都適用。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="檢查可能排除新檔案的同步篩選設定" class="img-large img-center" />

## 排除掛載目錄快取延遲

如果「遺失」的檔案位於掛載磁碟機之後，而不是直接瀏覽遠端，那麼掛載設定中的Dir Cache Time設定通常是罪魁禍首。較長的目錄快取時間可以加快瀏覽速度，但也意味著在該快取過期之前，掛載檢視不會反映其他地方新增的檔案。對於新鮮度比原始瀏覽速度更重要的遠端，請在Mount Manager中降低Dir Cache Time，或手動卸載並重新掛載以強制立即重新整理。

之後在同步工作上執行Dry Run——它會準確列出現在被視為新檔案的檔案，以便你在進行實際傳輸之前確認修復效果。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="修復偵測設定後顯示正確同步執行的工作歷史記錄" class="img-large img-center" />

## 開始使用

1. 從[rcloneview.com](https://rcloneview.com/src/download.html)**下載RcloneView**。
2. 在來源遠端上強制Reload（F5），以排除Explorer檢視過期的可能性。
3. 開啟Edit Job，在Filtering Settings中檢查是否有排除新檔案的Max File Age或自訂規則。
4. 對於已掛載的遠端，在Mount Manager中降低Dir Cache Time，然後重新掛載並使用Dry Run重新執行工作以確認。

大多數「檔案遺失」同步問題都可以追溯到快取清單或被忽略的篩選器，而不是真正的傳輸失敗，RcloneView的Dry Run和Job History能讓你快速確認修復是否生效。

---

**相關指南:**

- [篩選規則 — RcloneView中的選擇性同步](https://rcloneview.com/support/blog/filter-rules-selective-sync-rcloneview)
- [Dry Run — 在RcloneView中預覽雲端同步](https://rcloneview.com/support/blog/dry-run-preview-cloud-sync-rcloneview)
- [修復排程同步未執行的問題 — 使用RcloneView解決](https://rcloneview.com/support/blog/fix-scheduled-sync-not-running-rcloneview)

<CloudSupportGrid />
