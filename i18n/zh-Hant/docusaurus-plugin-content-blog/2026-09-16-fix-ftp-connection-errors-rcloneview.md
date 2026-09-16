---
slug: fix-ftp-connection-errors-rcloneview
title: "修復 FTP 連線錯誤 — 使用 RcloneView 排除故障"
authors:
  - jay
description: "使用 RcloneView 內建的終端機與記錄工具,排除從卡住的遠端到驗證錯誤等各種 FTP 連線失敗問題。"
keywords:
  - 修復 FTP 連線錯誤
  - FTP 故障排除 rcloneview
  - FTP 驗證失敗
  - rclone FTP 遠端錯誤
  - FTP 連線被拒絕
  - rcloneview FTP 遠端
  - 解決 FTP 同步錯誤
  - FTP 伺服器連線問題
  - rclone 終端機診斷
  - 雲端同步 FTP 問題
tags:
  - RcloneView
  - troubleshooting
  - tips
  - ftp
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復 FTP 連線錯誤 — 使用 RcloneView 排除故障

> 當 FTP 遠端無法連線或同步作業持續失敗時,請先透過 RcloneView 內建的診斷工具排查,不要直接認定是伺服器出了問題。

FTP 至今仍是許多傳統基礎架構——網站主機、老舊 NAS、內部檔案伺服器——的支柱,將其連接到 RcloneView 可以讓這些儲存空間納入你平時的同步與備份流程。不過相較於基於 OAuth 的服務商,FTP 遠端對網路狀況與帳密輸入錯誤更為敏感,因此連線錯誤也更常發生。以下說明如何精確找出原因,而不是靠猜測。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 確認遠端設定是否正確

大多數「連線失敗」錯誤的根源在於遠端設定中的主機、連接埠或路徑輸入有誤,而不是伺服器本身的問題。開啟 **Remote 分頁 > Remote Manager**,找到你的 FTP 遠端並開啟編輯畫面,核對主機位址與登入憑證是否與伺服器管理員提供的資訊一致。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中檢查 FTP 遠端的連線設定" class="img-large img-center" />

如果設定看起來沒問題但連線仍然失敗,問題更可能出在網路端:阻擋連接埠的防火牆、干擾路由的 VPN,或是目前網路根本無法連上該 FTP 伺服器。

## 使用內建終端機測試連線

RcloneView 在 FREE 授權下也提供與 GUI 並存的完整 rclone 終端機,因此不需要另外安裝命令列工具即可深入排查連線問題。開啟底部 Info View 中的 **Terminal** 分頁,針對你的 FTP 遠端執行 `rclone about "remote:"`——連線正常會立即傳回儲存空間詳情,失敗則會顯示 rclone 底層的原始錯誤訊息,而非籠統的 RcloneView 對話框。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="在 RcloneView 終端機中測試 FTP 遠端連線" class="img-large img-center" />

這段原始錯誤文字能幫你快速分辨驗證遭拒與逾時這兩種情況,而它們的解決方式完全不同。

## 針對持續發生的失敗收集記錄

若修正憑證後問題依然存在,請開啟詳細記錄功能:前往 **Settings > Embedded Rclone**,啟用 **rclone Logging**,將記錄層級設為 **DEBUG**,接著點選 **Restart Embedded Rclone** 並重現失敗的同步。產生的記錄檔會保留與 FTP 伺服器之間的完整交握過程,比 Log 分頁顯示的摘要資訊更有助於診斷問題。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="重現 FTP 連線失敗後檢視工作記錄" class="img-large img-center" />

## 快速上手

1. 前往 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 在 Remote Manager 中重新核對 FTP 遠端的主機、連接埠與憑證。
3. 在 Terminal 分頁執行 `rclone about "remote:"` 以查看原始連線錯誤。
4. 若錯誤持續發生,請啟用 DEBUG 層級記錄並重現問題。

花幾分鐘調整終端機與記錄設定,通常就能把一句含糊的「連線失敗」訊息,變成真正能解決問題的線索。

---

**相關指南:**

- [管理 FTP 伺服器 — 使用 RcloneView 進行雲端同步與備份](https://rcloneview.com/support/blog/manage-ftp-server-cloud-sync-backup-rcloneview)
- [將 FTP 伺服器遷移到雲端儲存](https://rcloneview.com/support/blog/migrate-ftp-server-to-cloud-storage-rcloneview)
- [修復 SFTP 連線被拒絕與逾時錯誤](https://rcloneview.com/support/blog/fix-sftp-connection-refused-timeout-rcloneview)

<CloudSupportGrid />
