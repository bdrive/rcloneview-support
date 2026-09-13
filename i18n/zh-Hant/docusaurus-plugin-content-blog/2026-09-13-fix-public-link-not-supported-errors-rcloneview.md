---
slug: fix-public-link-not-supported-errors-rcloneview
title: "修復公開連結不受支援的錯誤 — 使用 RcloneView 正確分享檔案"
authors:
  - tayson
description: "修復 RcloneView 中的 Get Public Link 錯誤,了解哪些遠端支援可分享連結,並為其餘情況使用安全的替代方案。"
keywords:
  - RcloneView
  - 公開連結錯誤
  - 公開連結不受支援
  - 分享雲端檔案
  - rclone 公開連結
  - 雲端儲存分享
  - 分享連結修復
  - 雲端檔案分享疑難排解
  - 遠端管理員
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-storage
  - file-management
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復公開連結不受支援的錯誤 — 使用 RcloneView 正確分享檔案

> 右鍵點選 Get Public Link 卻毫無反應?這裡說明原因,以及該採取的替代做法。

RcloneView 的 Explorer 面板在右鍵選單中提供 **Get Public Link** 指令,但它只在後端有公開原生分享 API 的遠端上才會生效。若在純協定連線或不受支援的服務供應商上嘗試,請求會失敗或回傳錯誤,而不是連結網址。透過 RcloneView 的 Remote Manager 與雙欄 Explorer,你可以輕鬆確認目前所在的遠端,並改將檔案移到方便產生連結的位置。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 為什麼某些遠端上 Get Public Link 會失敗

公開連結的產生取決於底層儲存後端所支援的功能。擁有原生分享 API 的服務供應商——包括 Google Drive、Dropbox、Microsoft OneDrive、Box 與 pCloud——會回傳可分享的網址,因為 rclone 會呼叫該服務供應商自身的連結端點。SFTP、FTP、WebDAV、SMB/CIFS 這類基於協定的連線則沒有這個概念——它們是純粹的檔案傳輸協定,而非分享平台,因此該指令沒有可呼叫的對象。S3 相容端點(Amazon S3、Wasabi、Backblaze B2、Cloudflare R2)則是透過在服務供應商自己的主控台上設定的儲存貯體政策或預先簽署的網址來處理公開存取。

<img src="/support/images/en/blog/new-remote.png" alt="RcloneView new remote screen showing different provider types" class="img-large img-center" />

在認定這是 bug 之前,先確認你的遠端屬於哪一類。開啟 Remote 分頁下的 Remote Manager,確認遠端類型,通常一眼就能看出失敗的原因。

## 確認遠端與權限設定

如果這是一個理應支援連結功能的 OAuth 服務供應商,下一步是確認帳戶是否有權限分享該檔案或資料夾。這些遠端的商用版或企業版有時會在組織層級限制外部分享,而這在 RcloneView 中會顯示為相同的失敗請求。若權杖看起來已過期,請透過 Remote Manager 重新驗證該遠端,然後先在你確認可從服務供應商自己的網頁介面分享的檔案上重試。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="RcloneView folder compare view for verifying file locations before sharing" class="img-large img-center" />

與僅支援掛載的工具不同,RcloneView 在 FREE 授權下也支援同步與資料夾比較——因此你可以快速將檔案從不支援連結的遠端複製到能夠產生連結的遠端,而不必繼續排查問題。

## 遠端不支援連結時的安全替代方案

對於 SFTP、FTP、WebDAV、SMB 以及大多數 S3 相容儲存貯體,實用的解法是將檔案複製到支援原生連結的遠端,或是透過服務供應商自己的主控台(儲存貯體政策、預先簽署的網址,或 NAS 端的分享)來完成散佈。在兩個開啟的 Explorer 面板之間使用 RcloneView 的拖放功能移動一份副本,然後在目標遠端執行 Get Public Link。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="RcloneView job scheduling for repeatable copy-and-share workflows" class="img-large img-center" />

如果這是經常性的需求,可以將這個複製步驟儲存為 Job Manager 中的一個 Job,這樣每次同步之後,相同的檔案就會自動送到能夠產生連結的遠端。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 開啟 Remote Manager,確認出問題的遠端實際使用的是哪種後端類型。
3. 重新驗證權杖可能已過期的 OAuth 遠端,然後在一個已知可分享的檔案上重試連結。
4. 對於協定類或 S3 相容的遠端,使用拖放將檔案複製到支援連結的遠端,再於該處產生連結。

事先了解哪些遠端可以分享連結,能在日後替你省下一張支援單。

---

**相關指南:**

- [使用 RcloneView 取得雲端檔案的可分享公開連結](https://rcloneview.com/support/blog/link-public-shared-links-cloud-rcloneview)
- [管理 Google Drive 儲存空間 — 使用 RcloneView 同步與備份檔案](https://rcloneview.com/support/blog/manage-google-drive-cloud-sync-backup-rcloneview)
- [使用 RcloneView 修復雲端傳輸權限遭拒的錯誤](https://rcloneview.com/support/blog/fix-cloud-transfer-permission-denied-errors-rcloneview)

<CloudSupportGrid />
