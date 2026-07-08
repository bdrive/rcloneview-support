---
slug: serve-remote-http-webdav-rcloneview
title: "透過 HTTP 與 WebDAV 提供遠端服務 — 使用 RcloneView 分享雲端檔案"
authors:
  - tayson
description: "使用 RcloneView 透過 HTTP 與 WebDAV 提供雲端儲存遠端服務，讓瀏覽器、檔案總管及其他裝置都能分享與存取檔案。"
keywords:
  - rcloneview serve
  - serve http rclone
  - webdav cloud storage
  - serve remote files
  - rcloneview webdav
  - cloud file sharing
  - http file server
  - rclone serve webdav
  - share cloud files locally
  - webdav server rcloneview
tags:
  - RcloneView
  - feature
  - webdav
  - guide
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 透過 HTTP 與 WebDAV 提供遠端服務 — 使用 RcloneView 分享雲端檔案

> 將任何雲端儲存遠端轉換為本機 HTTP 或 WebDAV 伺服器，讓瀏覽器、檔案總管及媒體播放器都能存取您的檔案。

Rclone 的服務（serve）功能可以將雲端儲存遠端公開為本機網路服務。RcloneView 透過其 GUI 讓這項功能更容易使用，只需點擊幾下，即可為任何已設定的遠端啟動 HTTP 或 WebDAV 伺服器。這開啟了強大的工作流程：在網頁瀏覽器中瀏覽 S3 儲存桶、在不具備原生支援的裝置上掛載 Google Drive，或是將 Wasabi 中的媒體檔案直接串流到影片播放器。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 透過 HTTP 提供雲端儲存服務

RcloneView 的 HTTP 服務模式會啟動一個輕量級網頁伺服器，以瀏覽器友善的目錄清單呈現您的雲端儲存檔案。將其指向任何遠端 — Google Drive、Dropbox、S3 儲存桶，甚至是加密的 crypt 遠端 — 它就會在類似 `http://localhost:8080` 的本機位址上產生可瀏覽的 HTML 介面。

這對於在同一網路上與同事分享檔案特別有用，且不需要授予他們直接存取您雲端儲存憑證的權限。啟動 HTTP 伺服器、分享本機網址，他們就能透過網頁瀏覽器瀏覽並下載檔案。伺服器僅在 RcloneView 開啟時運作，且您可以控制要公開哪個遠端或子目錄。

對於在氣隙隔離或受限網路環境中工作的團隊來說，HTTP 服務提供了一種方式，可以存取儲存於雲端的參考資料、文件或資料集，而不需要在每台工作站上安裝雲端供應商用戶端。單一台執行 RcloneView 的機器即可作為存取點。

<img src="/support/images/en/blog/new-remote.png" alt="Configuring a cloud remote to serve via HTTP in RcloneView" class="img-large img-center" />

## 透過 WebDAV 提供雲端儲存服務

WebDAV（Web Distributed Authoring and Versioning）擴展了 HTTP，加入了檔案管理功能 — 透過網路讀取、寫入、重新命名及刪除檔案。當您在 RcloneView 中透過 WebDAV 提供遠端服務時，雲端儲存即可作為網路磁碟機，供任何支援 WebDAV 的裝置存取，包括 Windows、macOS、Linux、iOS 與 Android。

在 Windows 上，您可以透過檔案總管將 WebDAV 共用對應為網路磁碟機。在 macOS 上，可使用 Finder 的「連接伺服器」對話框。在 Linux 上，Nautilus 與 Dolphin 等檔案管理員原生支援 WebDAV。這意味著您的 Google Drive、OneDrive 或 S3 儲存空間，在沒有專屬雲端用戶端應用程式的裝置上，也會顯示為一般資料夾。

WebDAV 服務也能與支援以 WebDAV 作為儲存後端的應用程式整合。文件編輯器、媒體播放器及備份工具都可以透過 WebDAV 端點讀寫您的雲端儲存，而不需要任何雲端特定的設定。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Serving a cloud remote as WebDAV for network access via RcloneView" class="img-large img-center" />

## 驗證與安全性

預設情況下，serve HTTP 與 WebDAV 在沒有驗證的狀態下運作，僅適合用於受信任的網路。若涉及敏感資料或網路暴露的情境，RcloneView 支援設定使用者名稱與密碼的 HTTP 基本驗證，確保只有授權使用者才能存取所提供的檔案。

為了提升安全性，可以將伺服器綁定至 `127.0.0.1`（僅限本機），以防止網路上其他機器存取。若您需要遠端存取，請將服務端點與 SSH 通道或 VPN 結合使用，而不要直接將其暴露於網際網路上。RcloneView 的服務設定面板可讓您在啟動伺服器前設定綁定位址、連接埠及驗證憑證。

在提供加密的 crypt 遠端服務時，檔案會在存取時即時解密。這表示您可以將加密資料儲存在雲端，並以解密後的形式在本機提供服務 — 適合用於存取敏感封存檔案，而不需要將其永久解密至磁碟上。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring active serve connections and file transfers in RcloneView" class="img-large img-center" />

## 實用工作流程

**媒體串流：** 透過 HTTP 提供包含影片或音訊檔案的雲端遠端服務，然後在 VLC 或其他媒體播放器中開啟檔案網址。這樣可以避免將整個媒體庫下載到本機儲存空間。

**跨裝置檔案存取：** 在家用伺服器或常駐運作的工作站上執行 RcloneView，並透過 WebDAV 提供雲端儲存服務。從同一網路上的平板電腦、手機或其他電腦連線存取。

**開發與測試：** 在開發期間於本機提供 S3 儲存桶服務，以測試從網頁網址取用檔案的應用程式，而不需要部署到測試環境。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Browsing served cloud storage files through RcloneView interface" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 設定您想要提供服務的雲端儲存遠端（S3、Google Drive、Dropbox 等）。
3. 開啟服務面板，選擇 HTTP 或 WebDAV 模式，設定連接埠及選用的驗證方式。
4. 啟動伺服器，然後透過瀏覽器或檔案管理員在本機位址存取您的雲端檔案。

RcloneView 的服務功能將雲端儲存轉變為網路上任何裝置都能即時存取的本機資源。

---

**相關指南：**

- [Bisync 雙向同步 — 在 RcloneView 中實現雙向雲端同步](https://rcloneview.com/support/blog/bisync-bidirectional-sync-rcloneview)
- [使用 RcloneView 連接 WebDAV 伺服器以進行雲端同步](https://rcloneview.com/support/blog/connect-webdav-server-cloud-sync-rcloneview)
- [使用 RcloneView 將 SFTP 與 SMB 掛載為本機磁碟機](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)

<CloudSupportGrid />
