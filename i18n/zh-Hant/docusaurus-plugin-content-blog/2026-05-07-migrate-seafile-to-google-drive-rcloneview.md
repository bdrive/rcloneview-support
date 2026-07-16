---
slug: migrate-seafile-to-google-drive-rcloneview
title: "將 Seafile 遷移至 Google Drive — 使用 RcloneView 傳輸檔案"
authors:
  - tayson
description: "使用 RcloneView 的雲端對雲端傳輸與同步工具，將檔案從自架 Seafile 伺服器遷移至 Google Drive 的逐步指南。"
keywords:
  - Seafile migration
  - Google Drive
  - RcloneView
  - cloud-to-cloud transfer
  - self-hosted migration
  - file migration
  - Seafile to Google Drive
  - rclone seafile
tags:
  - RcloneView
  - seafile
  - google-drive
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 將 Seafile 遷移至 Google Drive — 使用 RcloneView 傳輸檔案

> 從自架的 Seafile 伺服器轉移到 Google Drive，其實比想像中容易 — RcloneView 讓你可以將兩者連接為遠端，並直接傳輸資料庫，無需任何中間下載步驟。

Seafile 是一款熱門的自架協作平台，但許多團隊最終會遷移至像 Google Drive 這樣的託管雲端服務，以降低維運成本並更好地整合生產力工具。RcloneView 將 Seafile 視為與 Google Drive 同等地位的第一類遠端，讓你能在簡潔的圖形化操作流程中瀏覽 Seafile 資料庫並直接複製到 Google Drive。無需任何命令列知識，內建的 rclone 執行檔會處理所有繁重的工作。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 連接你的 Seafile 伺服器

在 RcloneView 中點擊 **New Remote**，並從供應商清單中選擇 **Seafile**。輸入你的 Seafile 伺服器網址、使用者名稱與密碼。如果你的伺服器啟用了兩步驟驗證（2FA），設定過程中也需要提供一次性驗證碼。RcloneView 隨後會在雙窗格檔案總管中列出你所有的 Seafile 資料庫 — 包含個人與共享的資料庫。

如果你的 Seafile 資料庫已加密，RcloneView 需要資料庫密碼才能解密並讀取檔案。建議在進行完整遷移之前，先測試存取一個小型加密資料庫，以確認你的憑證能正確運作。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Seafile remote in RcloneView" class="img-large img-center" />

## 新增 Google Drive

透過 **New Remote** > **Google Drive** 新增第二個遠端。RcloneView 會開啟瀏覽器視窗進行 OAuth 授權 — 使用你的 Google 帳號登入並授予所需權限。授權完成後，Google Drive 遠端便會出現在檔案總管中。你可以導覽至「我的雲端硬碟」或「共用雲端硬碟」中的任何資料夾，作為遷移目的地。

建議在開始傳輸之前，先在 Google Drive 中建立一個專用資料夾 — 例如 `Seafile Migration/`。這能讓遷移過來的內容在轉換期間保持條理分明，並與現有檔案區隔開來。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Dragging Seafile libraries to Google Drive in RcloneView" class="img-large img-center" />

## 執行遷移

在雙窗格檢視中同時開啟兩個遠端後，對於小規模遷移，你可以直接將個別 Seafile 資料庫拖曳至 Google Drive。若要進行完整的伺服器遷移，請使用 **Job Wizard** 建立同步工作：將 Seafile 設為來源，並將目標 Google Drive 資料夾設為目的地。四步驟精靈可讓你設定傳輸選項，包括是否保留修改時間。

建議先執行一次 **dry run（試跑）**，預覽將要傳輸的內容 — 這對於擁有數千個檔案的大型 Seafile 執行個體特別有用。確認預覽結果無誤後，再啟動實際傳輸。RcloneView 的 **Job Manager** 會顯示即時進度，而 **Job History** 則會記錄結果，供你的遷移稽核使用。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a Seafile to Google Drive migration job in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 點擊 **New Remote** > **Seafile**，輸入你的伺服器網址、使用者名稱與密碼。
3. 點擊 **New Remote** > **Google Drive**，完成 OAuth 授權流程。
4. 在雙窗格檔案總管中並排開啟兩個遠端。
5. 使用 **Job Wizard** 建立同步工作，先執行試跑，再執行完整遷移。

透過 RcloneView，從 Seafile 遷移至 Google Drive 將成為一個結構化、可稽核的流程，而不再是逐檔手動搬移的苦差事。

---

**相關指南：**

- [管理 Seafile — 使用 RcloneView 進行雲端同步與備份](https://rcloneview.com/support/blog/manage-seafile-cloud-sync-backup-rcloneview)
- [管理 Google Drive — 使用 RcloneView 進行雲端同步與備份](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [使用 RcloneView 將 Seafile 同步至 AWS S3](https://rcloneview.com/support/blog/sync-seafile-to-aws-s3-rcloneview)

<CloudSupportGrid />
