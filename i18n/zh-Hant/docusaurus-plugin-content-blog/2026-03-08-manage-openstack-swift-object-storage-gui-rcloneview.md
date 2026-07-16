---
slug: manage-openstack-swift-object-storage-gui-rcloneview
title: "使用 RcloneView 桌面 GUI 管理 OpenStack Swift 物件儲存"
authors: [tayson]
description: "告別命令列：了解如何使用 RcloneView 直覺的桌面 GUI 管理 OpenStack Swift 容器。幾分鐘內即可瀏覽、同步並掛載 Swift 儲存。"
keywords: ["openstack swift gui", "swift storage manager", "openstack swift file manager", "swift object storage gui", "openstack swift rclone", "swift storage desktop tool", "openstack swift backup", "swift container browser", "rclone swift", "object storage management"]
tags:
  - RcloneView
  - openstack
  - swift
  - object-storage
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 使用 RcloneView 桌面 GUI 管理 OpenStack Swift 物件儲存

OpenStack Swift 非常強大——它支撐著大規模的雲端部署、研究機構與企業資料中心。但老實說：從命令列管理 Swift 容器相當繁瑣。即使是 Horizon 這個網頁儀表板，在執行批次操作、跨區域比較容器或同步到其他雲端供應商時，也顯得笨拙。

如果你可以像瀏覽一般檔案總管那樣瀏覽你的 Swift 容器呢？如果你可以像拖曳檔案到 Google Drive 那樣把檔案拖進 Swift 呢？這正是 RcloneView 派上用場的地方。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Swift CLI 與 Horizon 的問題

Swift 的 `swift` CLI 雖然強大，但需要不斷在腦中轉譯：命令、容器名稱、物件路徑。你是在打字,而不是瀏覽。Horizon 提供了網頁介面,但它是為基礎架構管理員設計的,而不是檔案操作。想把 50GB 從一個容器同步到另一個容器?想在同步前比較容器?想把 Swift 備份到 Google Drive?你還是得回到命令列,或撰寫自訂腳本。

RcloneView 改變了這一切。它把 Swift 帶入現代化的桌面檔案總管體驗中。

## 將 RcloneView 連接到你的 Swift 儲存

首先,啟動 RcloneView 並開啟遠端瀏覽器 (Remote Explorer):

<img src="/support/images/en/blog/new-remote.png" alt="Add new remote in RcloneView" class="img-large img-center" />

點擊「新增遠端」並從雲端供應商清單中選擇 OpenStack Swift。你需要:
- **Auth URL**(你的 OpenStack 身分識別端點,例如 `https://identity.api.rackspacecloud.com/v2.0`)
- **使用者名稱與密碼**或 API 金鑰
- **Tenant Name**(你的專案名稱)
- **Region**(選填,預設為第一個區域)

RcloneView 會安全地處理 OAuth 流程,因此你的憑證絕不會暴露在設定檔中。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />

連接完成後,你會在遠端瀏覽器中看到所有容器的列表。點擊任一容器即可瀏覽其中的物件。不需要命令列,不需要打字,只有原生的檔案瀏覽體驗。

## 像瀏覽本機磁碟一樣瀏覽並整理 Swift 容器

一旦你的 Swift 遠端連接完成,RcloneView 會將你的容器呈現為資料夾。你可以:
- **展開容器**並瀏覽物件階層(Swift 的偽目錄會以資料夾形式呈現)
- **依名稱、大小或日期排序**,只需點擊一下
- **直接在應用程式中預覽檔案**
- **跨容器搜尋**,快速找到物件

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare folders" class="img-large img-center" />

如果你需要管理跨多個區域的容器,這項功能特別實用。RcloneView 讓你可以並排比較容器——查看哪些內容存在於 container-a 但不存在於 container-b,非常適合用來偵測差異或規劃遷移。

## 幾分鐘內將 Swift 同步到其他雲端

這正是 RcloneView 真正大放異彩的地方。假設你在 Swift 中有關鍵的研究資料,但想要在 Google Cloud Storage 中建立冗餘備份。或者你需要從 Swift 遷移到 AWS S3。RcloneView 的雲端對雲端同步功能可以優雅地處理這一切:

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer" class="img-large img-center" />

1. 在左側開啟你的 Swift 容器,在右側開啟目標雲端
2. 選擇要同步的物件或資料夾
3. 點擊「同步」並選擇你的選項(覆寫、跳過已存在的檔案、刪除來源等)
4. 即時監控進度

RcloneView 使用校驗碼與智慧同步機制,避免重複上傳你已經搬移過的檔案。非常適合企業備份工作流程。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

## 透過排程工作自動化 Swift 操作

手動同步適合一次性的遷移作業,但如果你需要定期備份呢?RcloneView 的工作排程器 (Job Scheduler) 讓你可以自動化任何操作:

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

設定每日工作,將 Swift 容器備份到 Google Drive;每週從 Swift 同步到 S3;每小時將某個容器增量備份到你的本地 NAS。這一切都不需要碰觸命令列。

你也可以檢視工作歷史,稽核有哪些內容在何時被同步過:

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="job history" class="img-large img-center" />

## 將 Swift 掛載為本機磁碟

需要像操作本機檔案一樣操作 Swift 物件嗎?RcloneView 的掛載功能讓你可以將任何 Swift 容器掛載為桌面上的虛擬磁碟:

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="mount from mount manager" class="img-large img-center" />

掛載後,你可以:
- 在檔案總管中開啟 Swift 容器
- 直接編輯檔案(變更會同步回 Swift)
- 使用任何能處理檔案的應用程式——無需了解 API
- 像本機操作一樣複製、移動、刪除物件

對於希望享有 Swift 的耐用性,又不想學習 Swift 專屬工具的團隊來說,這是革命性的改變。

## 為什麼選擇 RcloneView 來管理 Swift?

1. **統一介面**:在同一個應用程式中管理 Swift、S3、Google Drive、Azure、Dropbox 以及超過 40 種其他雲端
2. **無需學習命令列**:每個人都能理解的檔案總管體驗
3. **企業級同步**:校驗碼、頻寬節流、部分傳輸、去重複
4. **安全性**:憑證儲存在本機、連線加密、雲端端零日誌記錄
5. **自動化**:排程工作、腳本、針對敏感操作的頻寬限制
6. **跨雲端工作流程**:在 RcloneView 生態系統中,將 Swift 同步到任何其他雲端

## 開始使用

1. 下載 RcloneView(提供免費試用)
2. 新增你的 OpenStack Swift 遠端(僅需 2 分鐘)
3. 立即開始瀏覽、同步或掛載
4. 為重複性任務設定排程工作

RcloneView 將 Swift 從僅限命令列操作的儲存系統,轉變為現代化、使用者友善的檔案管理解決方案。無論你是在管理研究資料、企業備份,還是多雲端架構,現在你都擁有一套專為此打造的桌面工具。

## 相關指南

- RcloneView 說明文件介紹
- 建立與整理說明文件
- 發布新頁面
- 使用 Markdown 功能

<CloudSupportGrid />
