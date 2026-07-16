---
slug: config-backup-restore-migrate-rcloneview
title: "備份、還原與遷移 RcloneView 設定——完整指南"
authors:
  - tayson
description: "了解如何備份您的 RcloneView 設定、在系統故障後還原設定，以及在不同電腦之間遷移您的雲端儲存設定。"
keywords:
  - rclone config backup
  - migrate rclone settings
  - rcloneview configuration
  - backup cloud storage settings
  - restore rcloneview config
  - transfer rcloneview setup
  - configuration export import
  - disaster recovery rclone
  - rcloneview migration guide
  - system migration backup
tags:
  - feature
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 備份、還原與遷移 RcloneView 設定——完整指南

> 您的 RcloneView 設定包含珍貴的雲端儲存連線與工作設定。透過備份設定並在需要時快速還原，來保護這項投資。

RcloneView 會將您所有的雲端儲存連線、驗證憑證與工作設定，儲存在一個集中的設定檔案中。若在系統故障、硬體損壞或遷移至新硬體時遺失此設定，就代表必須從頭重新建立所有連線與工作。RcloneView 的設定備份與還原功能，能確保您永遠不會遺失自己的設定，並讓機器之間的遷移變得輕而易舉。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 了解您的 RcloneView 設定

RcloneView 會將設定資料儲存在依平台而異的位置。在 Windows 上，設定檔位於 `%APPDATA%\RcloneView\config`；在 Linux 上，通常位於 `~/.config/rcloneview/config`；在 macOS 上，則位於 `~/Library/Application Support/RcloneView/config`。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView configuration file location structure" class="img-large img-center" />

這個單一檔案包含所有雲端供應商憑證、遠端定義、工作設定與應用程式設定。由於這是敏感資料，RcloneView 會在本機端對此檔案進行加密。在了解相關安全風險之前，切勿分享您的設定檔案，或將其上傳至公開儲存空間。

## 建立設定備份

RcloneView 提供內建的備份功能，可透過「設定」選單存取。前往「設定 → 備份設定」，然後在您的電腦或外接硬碟上選擇一個儲存備份檔案的位置。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configuration backup interface" class="img-large img-center" />

備份檔案經過加密且可攜帶——您可以將其複製到雲端儲存、外接硬碟或備份服務中。每當您新增重要的雲端儲存連線或修改關鍵工作設定時，都應建立備份。對大多數使用者而言,每月備份已能提供足夠的保護;若設定變更頻繁,則建議每週備份的組織使用。

## 系統故障後還原設定

若 RcloneView 發生損毀、系統當機，或您遭遇硬體故障，還原過程相當簡單。重新安裝 RcloneView 後，前往「設定 → 還原設定」，然後選擇您的備份檔案。RcloneView 會立即匯入所有遠端、憑證與工作。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Configuration restore confirmation interface" class="img-large img-center" />

無論是在同一台電腦上還原，或是在不同的電腦上還原，這個還原程序都完全相同。您整個 RcloneView 環境——每一個雲端連線與排程工作——都能在幾分鐘內恢復運作，省去數小時的手動重新設定。

## 將 RcloneView 遷移至新機器

當您升級電腦或轉換至新硬體時，遷移您的 RcloneView 設定可保留原有的設定內容。先在舊電腦上建立備份，再透過電子郵件、雲端儲存或 USB 隨身碟，將備份檔案傳送到新電腦上。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Migration process with configuration transfer" class="img-large img-center" />

在新機器上安裝 RcloneView 後，立即從備份還原。您所有的雲端儲存連線、工作定義與排程規則都會無縫傳輸。您的新系統將在幾分鐘內完全就緒，雲端同步工作也會依照排程恢復運作。

## 設定備份的安全考量

由於 RcloneView 設定檔案包含加密憑證，請將備份視為敏感資料處理。將備份檔案儲存在安全的位置——例如保存在安全地點的外接硬碟、您自行掌控的加密雲端服務,或受密碼保護的封存檔案。切勿透過電子郵件傳送未加密的備份,也不要將其上傳至公開的檔案分享服務。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 新增您的雲端儲存連線,並建立您的備份工作。
3. 前往「設定 → 備份設定」,建立您的第一份備份。
4. 將備份儲存在與主要電腦分開的安全位置。

設定備份能保護您在 RcloneView 上的投資,並確保在系統故障與硬體遷移期間業務能持續運作。請建立定期備份的習慣,並在安全的位置保留多份副本。

---

**相關指南：**

- [遠端管理：新增、編輯與刪除雲端連線](https://rcloneview.com/support/blog/remote-management-add-edit-delete-rcloneview)
- [除錯與疑難排解 RcloneView 傳輸](https://rcloneview.com/support/blog/log-debug-troubleshoot-transfers-rcloneview)
- [使用別名遠端進行捷徑與路徑管理](https://rcloneview.com/support/blog/alias-remote-shortcut-paths-rcloneview)

<CloudSupportGrid />
