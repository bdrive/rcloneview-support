---
slug: cache-remote-accelerate-slow-storage-rcloneview
title: "快取遠端 — 在 RcloneView 中加速緩慢的雲端儲存"
authors:
  - robin
description: "了解 RcloneView 的快取虛擬遠端如何透過快取目錄列表與檔案資料來加速緩慢的雲端後端,包括 Plex 整合。"
keywords:
  - rclone cache remote
  - rcloneview 快取遠端設定
  - 加速緩慢雲端儲存
  - rclone 快取 plex 整合
  - 提升雲端檔案瀏覽速度
  - 快取虛擬遠端 rclone
  - rcloneview 虛擬遠端
  - 緩慢雲端儲存解決方案
  - plex 媒體伺服器雲端快取
  - rclone 目錄快取
tags:
  - RcloneView
  - feature
  - performance
  - plex
  - mount
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 快取遠端 — 在 RcloneView 中加速緩慢的雲端儲存

> 有些雲端後端每次瀏覽都要重新取得列表,速度緩慢 —— 快取虛擬遠端透過記住已經取得的內容來解決這個問題。

並非每個儲存供應商都能快速回應。API 速率限制嚴格或單次請求延遲較高的後端,會讓瀏覽變得遲緩,尤其是在龐大的資料夾樹狀結構中,或是像 Plex 這類媒體伺服器反覆掃描同一媒體庫時。RcloneView 直接在 New Remote 精靈中提供 rclone 的快取虛擬遠端,讓你不必手動編輯設定檔,就能為緩慢的遠端包裹一層快取。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 快取遠端的作用

快取遠端是一個包裝器,而非獨立的儲存類型 —— 它位於 RcloneView 與你已設定好的現有遠端之間,攔截目錄列表與檔案讀取請求,使重複的請求不會再次送達後端。第一次瀏覽某個資料夾時,RcloneView 會如往常一樣從被包裝的遠端取得資料;下一次,快取會直接在本機提供結果,這在 API 回應較慢或速率限制嚴格的遠端上尤其明顯。

這與掛載內建的 VFS 快取模式不同,後者僅為單一掛載工作階段快取資料。快取虛擬遠端則會建立一個持久、具有獨立名稱的遠端,你可以直接瀏覽、掛載或同步它,其快取狀態在應用程式重新啟動後仍會保留。最常見的實際使用情境,是將快取遠端與 Plex 媒體伺服器整合搭配使用,否則持續的媒體庫掃描會對底層雲端儲存產生大量多餘的 API 呼叫。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中建立包裝現有雲端儲存遠端的快取虛擬遠端" class="img-large img-center" />

## 在 RcloneView 中設定快取遠端

開啟 Remote 分頁 > New Remote,在虛擬遠端選項中選擇 Cache。系統會要求你選擇要包裝的底層遠端 —— 無論是雲端供應商、S3 相容儲存空間,或是 SFTP、WebDAV 等以通訊協定為基礎的連線,該遠端都必須已在 RcloneView 中設定完成。為快取遠端取一個容易區分的名稱,以便在 Tab Bar 與 Remote Manager 中清楚辨識你瀏覽的是快取版本,而非原始連線。

建立完成後,快取遠端會與其他遠端一同出現在 Remote Manager 中,瀏覽、掛載或同步等操作與其他項目並無二致。RcloneView 能在單一視窗內於 Windows、macOS 與 Linux 上掛載並同步 90+ 供應商,因此以緩慢後端建立的快取遠端,也能取得與原生連線相同的功能組合 —— 你可以對它執行 Dry Run 同步預覽、將其加入 Job Manager,或將其掛載為本機磁碟機。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="從 Remote Explorer 面板工具列掛載快取遠端" class="img-large img-center" />

## 快取真正有幫助的情境

在列表操作成本相對於資料變動量較高的遠端上,快取的效益最為明顯 —— 例如 Plex 反覆掃描的大型相片或影片庫、層級很深的資料夾樹狀結構,或是速率限制較為保守、會限制連續請求的供應商。對於經常寫入的遠端,快取的用處則較小,因為變更的檔案需要先透過快取傳播,其他工具才能一致地看到這些變化。

如果你為了媒體串流而掛載快取遠端,建議將掛載本身的 VFS 快取模式設為 writes 或 full 一併使用 —— 這兩層快取在不同層級運作,能彼此互補。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Job Manager 顯示針對快取遠端執行中的同步工作" class="img-large img-center" />

## 快速開始

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 如果你要加速的緩慢遠端尚未設定,請先完成設定。
3. 開啟 New Remote,選擇 Cache,並指定要包裝的遠端。
4. 掛載或瀏覽新的快取遠端,並在第二次造訪同一資料夾時比較列表載入速度。

快取遠端不會讓你的網路連線本身變快,但對於會重複出現的瀏覽模式 —— 特別是媒體庫掃描 —— 它能讓緩慢的後端在第一次載入之後感覺幾乎是即時的。

---

**相關指南:**

- [RcloneView 中的虛擬遠端 — Combine、Union 與 Alias 詳解](https://rcloneview.com/support/blog/virtual-remotes-combine-union-alias-rcloneview)
- [使用 RcloneView 進行 Plex 雲端串流播放](https://rcloneview.com/support/blog/plex-cloud-mount-rcloneview)
- [解決 Plex 緩衝問題 — RcloneView 的 VFS 快取調校](https://rcloneview.com/support/blog/plex-vfs-cache-rcloneview)

<CloudSupportGrid />
