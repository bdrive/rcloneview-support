---
slug: secure-rcloneview-app-lock-password
title: "使用 App Lock 鎖定 RcloneView：保護遠端、工作與歷史記錄"
authors:
  - tayson
description: "透過 App Lock 為 RcloneView 加上密碼保護，確保只有授權使用者才能檢視遠端、傳輸歷史、工作、掛載與內部資料庫——即使在共用電腦上也一樣。"
keywords:
  - rcloneview security
  - rcloneview app lock
  - rclone password protect
  - secure rclone gui
  - protect rclone remotes
  - rclone_view.db
  - cloud automation security
  - shared pc security
  - job history protection
  - transfer history protection
tags:
  - security
  - job-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';


# 使用 App Lock 鎖定 RcloneView：保護遠端、工作與歷史記錄

> 使用共用或公司電腦？開啟 App Lock，要求輸入密碼才能開啟 RcloneView，讓遠端、工作與傳輸歷史不被他人看見。

RcloneView 的 App Lock 會在啟動或重新開啟應用程式時加入一個簡單的密碼畫面。它會保護內部資料庫（`rclone_view.db`），其中存放著您的遠端、工作定義、掛載設定、工作歷史與傳輸記錄——即使工作站是共用的，敏感的自動化流程仍能保持私密。

<!-- truncate -->


<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />


## App Lock 保護的內容

- 儲存在 `rclone.conf` 中的遠端定義與憑證（存取權限受應用程式控管）
- 傳輸歷史與記錄
- 工作設定與排程
- 掛載設定與使用者介面狀態
- 串連這一切的 SQLite 資料庫（`rclone_view.db`）

<img src="/support/images/en/tutorials/applock/app-lock-locking.png" class="img-medium img-center" alt="App Lock enabled screen" />

## 適合誰使用

- 共用一台工作站或跳板機的團隊
- 執行排程同步／掛載工作、需要防竄改機制的 IT 管理員
- 有敏感跨雲端工作流程（備份、合規性封存）的使用者
- 想要快速取得安全防護、又不想變更作業系統層級設定的任何人

## 如何開啟 App Lock（只需一分鐘）

1) 在頂端選單中開啟 **Settings → General Settings**。
<img src="/support/images/en/tutorials/applock/mainwindow-menu-settings.png" class="img-medium img-center" alt="Open Settings menu" />

2) 在 **General** 中，勾選 **Enable App Lock**，輸入密碼，然後點選 **Close**。
<img src="/support/images/en/tutorials/applock/app-lock-settings.png" class="img-medium img-center" alt="App Lock toggle" />
<img src="/support/images/en/tutorials/applock/app-lock-settings-password.png" class="img-medium img-center" alt="Set App Lock password" />

就是這麼簡單。下次啟動 RcloneView 或重新開啟其視窗時，就會看到解鎖提示畫面。

<img src="/support/images/en/tutorials/applock/app-lock-unlock.png" class="img-medium img-center" alt="App Lock unlock prompt" />

## 忘記密碼時如何重設

- 在解鎖畫面上，點選 **Reset App**。
- 確認重設，即可清除 App Lock 與所有內部資料（設定、工作、傳輸歷史、工作歷史）。
- 您的 `rclone.conf` 不會受到影響，因此重新開啟應用程式後遠端定義仍然可用。

<img src="/support/images/en/tutorials/applock/app-lock-reset-app.png" class="img-medium img-center" alt="Reset App button" />
<img src="/support/images/en/tutorials/applock/app-lock-reset-app-confirm.png" class="img-medium img-center" alt="Reset App confirmation" />

## 安全操作最佳實務

- 在共用電腦或多人可能開啟您工作階段的辦公室環境中使用 App Lock。
- 搭配作業系統帳號密碼或磁碟加密，形成多層保護。
- 為工作命名時要清楚易懂，但避免在工作名稱或備註中內嵌機密資訊。
- 將 `rclone_view.db` 備份到安全、使用者可寫入的位置（參閱[變更資料庫位置](/tutorials/change-rcloneview-database-location)）。
- 只針對您信任、並會透過 Job History 監控的工作啟用排程器。

## 常見問題快答

**App Lock 會停止排程工作嗎？**
不會——您已排程的工作會繼續執行。App Lock 只限制介面存取，讓其他人無法檢視或變更這些工作。

**如果我重設 App Lock 會怎樣？**
內部資料會被清除，但 `rclone.conf` 會保留，因此遠端仍然存在。您可視需要重新建立工作／歷史記錄。

**解鎖後還能使用 Terminal 嗎？**
可以。解鎖後，內建的 Terminal 會正常運作；App Lock 只在啟動時進行存取控管。

## 結語

密碼提示看似簡單，卻能為遠端、自動化與歷史記錄提供強大的防護。請開啟 App Lock，將 `rclone_view.db` 存放在安全的位置，讓您的雲端工作流程即使在共用機器上也能維持私密。

<CloudSupportGrid />
