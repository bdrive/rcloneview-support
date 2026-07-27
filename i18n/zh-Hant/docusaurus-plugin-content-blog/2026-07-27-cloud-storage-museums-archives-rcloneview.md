---
slug: cloud-storage-museums-archives-rcloneview
title: "博物館與檔案館的雲端儲存 — 使用RcloneView進行數位化保存"
authors:
  - tayson
description: "博物館和檔案館使用RcloneView在雲端儲存與冷歸檔層之間同步、驗證並備份數位化館藏。"
keywords:
  - 博物館雲端儲存
  - 數位檔案備份
  - 數位化保存軟體
  - 檔案館藏同步
  - 博物館數位化工作流程
  - 冷儲存歸檔同步
  - RcloneView 檔案
  - 資料夾比較驗證
  - 博物館多雲備份
tags:
  - RcloneView
  - cloud-storage
  - industry
  - backup
  - digital-preservation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 博物館與檔案館的雲端儲存 — 使用RcloneView進行數位化保存

> 數位化館藏唯有在每一份副本都經過驗證、而非僅僅完成上傳時才算安全 —— RcloneView為檔案管理人員提供了證明這一點的方法。

一間正在數位化4萬張攝影底片的地方歷史博物館所面臨的問題,與掃描工作本身無關:一旦產生了TIFF母版檔案,它就需要存放在兩個獨立的儲存位置,並且需要有人確認這些副本在數年間保持一致。RcloneView可直接處理這項驗證流程,將工作用雲端儲存與長期歸檔層連接起來,為工作人員提供逐資料夾的比較結果,而不是一則盲目的「上傳完成」訊息。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 母版檔案與存取用副本

檔案館通常維持兩個層級:用於保存的未壓縮母版檔案(TIFF、WAV、ProRes),以及用於公開展示或供研究人員申請的較小存取用副本(JPEG、MP3、H.264)。RcloneView的多面板檔案總管讓工作人員能並排查看這兩個層級 —— 一個面板連接到策展人上傳新數位化項目的工作用雲端硬碟,另一個面板連接到用於存放母版檔案的冷歸檔遠端連線,例如Amazon S3 Glacier級儲存或Backblaze B2。

<img src="/support/images/en/blog/new-remote.png" alt="在RcloneView中為歸檔儲存新增遠端連線" class="img-large img-center" />

由於RcloneView可連接90多個服務商,機構無需被鎖定在單一供應商的冷儲存產品中。博物館可以將母版檔案保存在一個服務商中,同時將第二份副本鏡像至另一個服務商以實現災難復原冗餘,並且都能在同一視窗中進行管理。

## 驗證副本之間的完整性

僅上傳一次檔案並不等於保存 —— 確認多年後它仍與原始檔案一致才是保存。RcloneView的資料夾比較功能會並排檢查兩個位置,並標記出大小不同、僅存在於一側或傳輸中發生錯誤的檔案。定期進行完整性檢查的檔案管理人員可以將比較功能指向工作館藏與歸檔鏡像,然後檢視「不同檔案」篩選器,在靜默損毀或不完整傳輸變成永久性損失之前就發現問題。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="檢視兩個歸檔儲存位置之間的資料夾比較結果" class="img-large img-center" />

與僅提供掛載功能的雲端工具不同,RcloneView在FREE授權下即可提供同步與資料夾比較功能,因此開始進行完整性檢查無需付費方案。

## 編目中繼資料的排程備份

隨著項目不斷被編目,館藏管理系統(CMS資料庫、檢索工具、EAD/MARC記錄)也持續變化。RcloneView的工作管理員允許檔案館定義一個重複同步工作,依排程將CMS匯出資料夾鏡像至雲端儲存(PLUS授權),如此一來中繼資料備份便能自動進行,不必仰賴工作人員記得手動匯出。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在RcloneView中為歸檔中繼資料排程重複備份工作" class="img-large img-center" />

Dry Run(模擬執行)模式可讓數位化團隊在同步實際生效之前,精確預覽哪些檔案會受到影響,這在某項工作可能會將已修正的編目記錄覆寫為過時版本時尤為重要。

## 開始使用

1. 從[rcloneview.com](https://rcloneview.com/src/download.html)**下載RcloneView**。
2. 為主要雲端儲存新增一個遠端連線,並為冷歸檔或異地備份服務商新增第二個遠端連線。
3. 對數位化母版檔案執行初始同步,然後使用資料夾比較確認兩份副本一致。
4. 為編目中繼資料設定一個重複工作,確保編目工作不會面臨遺失風險。

一份館藏的安全程度,取決於其中驗證最不充分的那份副本 —— 將這種驗證納入日常流程,而非寄望它自然發生,才是讓數十年數位化工作保持可復原的關鍵。

---

**相關指南:**

- [使用RcloneView管理Internet Archive上傳](https://rcloneview.com/support/blog/manage-internet-archive-uploads-with-rcloneview)
- [將Google Drive同步至Internet Archive — 使用RcloneView進行雲端備份](https://rcloneview.com/support/blog/sync-google-drive-to-internet-archive-rcloneview)
- [面向研究與學術機構的雲端儲存 — RcloneView指南](https://rcloneview.com/support/blog/cloud-storage-research-academia-rcloneview)

<CloudSupportGrid />
