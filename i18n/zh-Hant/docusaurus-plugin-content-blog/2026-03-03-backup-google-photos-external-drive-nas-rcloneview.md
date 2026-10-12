---
slug: backup-google-photos-external-drive-nas-rcloneview
title: "如何將 Google 相簿備份到外接硬碟或 NAS — Google Takeout + RcloneView"
authors:
  - tayson
description: "Google 相簿不再允許第三方應用程式下載您現有的相簿內容。請先透過 Google Takeout 將資料匯出到 Google Drive,再使用 RcloneView 將匯出檔複製到外接硬碟、NAS 或其他雲端,並以 RcloneView Mobile 持續備份新照片。"
keywords:
  - google 相簿備份
  - google 相簿到外接硬碟
  - google 相簿到 nas
  - google takeout 到 nas
  - google takeout 備份
  - google photos rclone
  - google 相簿 api 限制
  - 將 google 相簿儲存到本機
  - google 相簿匯出
  - rcloneview mobile 照片備份
tags:
  - RcloneView
  - google-photos
  - backup
  - cloud-storage
  - sync
  - nas
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 如何將 Google 相簿備份到外接硬碟或 NAS — Google Takeout + RcloneView

> 自 2025 年 3 月 31 日起,Google 相簿只允許第三方應用程式(包括 rclone 與 RcloneView)看到由它們自己上傳的照片。要取出現有相簿內容,可靠的方法是使用 Google Takeout,接下來的部分就交給 RcloneView。

Google 相簿保存著多年來無可取代的照片與影片,但儲存空間配額、帳號被鎖定以及政策變更,都可能讓您無法存取這些資料。許多教學(包括本文的舊版)都建議將 Google 相簿連接到同步工具後下載全部內容。這種做法現在已經行不通:Google 在 2025 年關閉了這條路。

本指南介紹目前仍然可行的方法。使用 **Google Takeout** 將相簿直接匯出到 Google Drive,再透過 **RcloneView** 把匯出檔複製到外接硬碟、NAS 或其他雲端,並使用 **RcloneView Mobile**,讓往後的新照片不再經由 Google 相簿中轉。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 變更內容:Google 相簿 API 限制(2025)

2025 年 3 月 31 日,Google 移除了 Photos Library API 中可存取整個相簿的權限範圍(scope)。依 Google 的說法,第三方應用程式「現在只能列出、搜尋與擷取由您的應用程式所建立的相簿與媒體項目」。共用相簿相關的呼叫會傳回 `403 PERMISSION_DENIED`。

在 RcloneView 中新增 **Google Photos** 遠端時,這代表:

- **遠端看起來幾乎是空的。** 只會顯示透過 RcloneView 或 rclone 上傳的照片。從手機上傳、從網頁上傳以及相簿中的其他所有內容,API 都看不到,因此複製(Copy)任務會回報「沒有變更」,或複製了零個檔案。
- **這不是連線問題。** RcloneView 1.6 及更新版本在您開啟 Google Photos 遠端時,會在應用程式內說明這項限制,而不是顯示一個看似空白的帳號。
- **完全無法存取共用相簿。**
- **您需要自己的 OAuth 用戶端 ID。** rclone 共用的 Google Photos 用戶端 ID 將在 2026 年內停用。當無法建立連線時,RcloneView 的連線精靈會引導您建立一個。

Google 支援的現有相簿匯出方式是 **Google Takeout**,因此備份就從這裡開始。

## 步驟 1:使用 Google Takeout 匯出相簿

1. 開啟 [takeout.google.com](https://takeout.google.com),並登入擁有這些照片的帳號。
2. 點選 **取消全選**,然後只勾選 **Google 相簿**。如果想把大型相簿分成多批匯出,可以使用 **包含所有相簿** 來限制只匯出特定相簿或年份。
3. 在 **目的地** 中選擇 **新增至雲端硬碟**。Google 會將匯出檔放在您 Google Drive 的 `Takeout` 資料夾中,RcloneView 可以直接存取。系統也提供 Dropbox、OneDrive 和 Box(RcloneView 三者皆支援),若您想從電腦複製,也可以選擇 **透過電子郵件傳送下載連結**。
4. 選擇封存類型(`.zip`)與大小(1 GB 到 50 GB)。封存檔越大,需要處理的檔案就越少。
5. 點選 **建立匯出作業**。匯出完成後 Google 會以電子郵件通知您;大型相簿可能需要數小時甚至數天。

開始之前請先了解:

- 每張照片與每部影片都會以原始畫質匯出,並附帶一個 `.json` 中繼資料檔,內含拍攝日期、說明與位置。
- 加入 Google Drive 的匯出檔會佔用您的 Google 儲存空間,直到您刪除為止,因此請確認 Drive 有足夠空間,或分批匯出。
- Takeout 是一次性匯出,沒有增量模式。步驟 4 會說明如何在不重複匯出的情況下持續備份未來的照片。

## 步驟 2:在 RcloneView 中新增 Google Drive

1. 開啟 RcloneView,在 Remote Manager 中點選 **Add Remote**。
2. 選擇 **Google Drive**,並完成[瀏覽器 OAuth 登入](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)。
3. 在 [Explorer](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage) 中開啟該遠端,並前往 `Takeout` 資料夾。每次匯出都是一個獨立的 `.zip` 檔案(相簿較大時則會有多個)。

<img src="/support/images/en/blog/open-multiple-google-drive-remotes.png" alt="在 RcloneView Explorer 中開啟 Takeout 資料夾的 Google Drive 遠端" class="img-large img-center" />

## 步驟 3:將匯出檔複製到備份目的地

RcloneView 會原封不動地複製封存檔,不會解壓縮,所以複製完成後,您只需在目的地電腦上解壓縮一次。

### 外接硬碟

1. 連接硬碟並記下其路徑(Windows 為 `E:\`,macOS 為 `/Volumes/...`,Linux 為 `/media/...`)。
2. 建立一個[複製(Copy)任務](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs):**來源** = Google Drive 遠端上的 `Takeout` 資料夾,**目的地** = 硬碟上的資料夾。
3. 執行任務,然後在硬碟上解壓縮封存檔。

請使用 **Copy** 而非 Sync:Copy 任務絕不會刪除目的地上的任何內容。

### Synology NAS

RcloneView 會自動[偵測網路上的 Synology NAS 裝置](https://rcloneview.com/support/tutorials/synology-nas-cloud-transfer),因此無需任何設定,NAS 就會出現在 Local 分頁中。

1. 建立一個 Copy 任務,以 `Takeout` 資料夾作為來源,以 NAS 上的共用資料夾(例如 `/photos/google-takeout`)作為目的地。
2. 執行任務,然後在 NAS 上解壓縮封存檔。

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="RcloneView 為 Google Takeout 複製作業自動偵測到 Synology NAS" class="img-large img-center" />

### 其他雲端

想要異地備份嗎?將 Copy 任務指向任何其他遠端即可,例如 Amazon S3、Backblaze B2、Wasabi、OneDrive 等。RcloneView 透過其 rclone 引擎在雲端之間直接傳輸資料,封存檔不必經過您電腦的儲存空間。

### 驗證與清理

- 使用[資料夾比較(Folder Comparison)](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)確認每個封存檔都已完整抵達且大小相同。
- 查看[任務歷史記錄(Job History)](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job#view-job-history)中的傳輸記錄。
- 確認複製無誤後,請刪除 Google Drive 上的 `Takeout` 資料夾,以釋放它所佔用的儲存空間。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Takeout 匯出檔與 NAS 副本之間的資料夾比較" class="img-large img-center" />

## 步驟 4:使用 RcloneView Mobile 持續備份新照片

Takeout 無法增量執行,每個月重複匯出並不是長久之計。對於您今後拍攝的照片,請讓 Google 相簿退出這個流程:

- **RcloneView Mobile**(Android 與 iOS)會將手機中的照片與影片直接備份到您自己的雲端,使用的遠端與您在桌面版 RcloneView 中使用的相同,中間不經過任何伺服器。照片備份功能包含在 RcloneView Plus 中。請從[下載頁面](https://rcloneview.com/src/download.html)取得。
- 在桌面端,排程的 Copy 任務(PLUS 功能,請參閱[任務排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution))會將該雲端資料夾鏡像到您的 NAS 或外接硬碟,每天、每週或依您喜歡的頻率執行皆可。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="排程從雲端照片資料夾到 NAS 的定期複製" class="img-large img-center" />

您的手機、雲端與 NAS 會保持同步,而不必再由 Google 相簿決定您能下載什麼。

## Google Photos 遠端仍然適用的場合

這個遠端並非毫無用處,只是它現在只適用於相反的方向:

- **上傳。** 從 NAS 或電腦將 Copy 任務指向該遠端的 `upload` 資料夾或某個相簿,即可把這些照片加入您的 Google 相簿,Google 相簿應用程式會像顯示其他上傳內容一樣顯示它們。
- **讀回 RcloneView 上傳的內容。** 任何透過 RcloneView 上傳的內容,都可以再被列出並複製出來。
- **注意事項。** 透過 API 下載的照片不是原始解析度,且會遺失 EXIF 位置資料,因此請將 Google 相簿視為方便的檢視工具,而不是封存庫。此外,您仍然需要自己的 OAuth 用戶端 ID。

## 開始使用

1. 使用 Google Takeout **匯出**您的 Google 相簿,並選擇傳送到 Google Drive。
2. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**(Windows、macOS、Linux),並將 Google Drive 新增為遠端。
3. **建立 Copy 任務**,將 `Takeout` 資料夾複製到外接硬碟、NAS 或其他雲端,然後在該處解壓縮封存檔。
4. 使用資料夾比較**驗證**複製結果,並刪除 Drive 上的匯出檔。
5. **安裝 RcloneView Mobile**,讓新照片直接傳到您自己的雲端,並排程一個桌面任務將它們鏡像到 NAS。

您的照片無可取代。一次匯出加上一個排程任務,就能為您留下一份不會因政策變更而消失的副本。

---

**相關指南:**

- [在 RcloneView 中修復 Google 相簿同步錯誤](https://rcloneview.com/support/blog/fix-google-photos-sync-errors-rcloneview)
- [透過瀏覽器登入(OAuth)新增遠端](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [瀏覽與管理遠端](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [比較資料夾內容](https://rcloneview.com/support/howto/rcloneview-basic/compare-folder-contents)
- [建立同步任務](https://rcloneview.com/support/howto/rcloneview-basic/create-sync-jobs)
- [任務排程](https://rcloneview.com/support/howto/rcloneview-advanced/job-scheduling-and-execution)
- [Synology NAS 自動偵測與連線](https://rcloneview.com/support/tutorials/synology-nas-cloud-transfer)

<CloudSupportGrid />
