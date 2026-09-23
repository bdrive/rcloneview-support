---
slug: fix-rclone-config-password-errors-rcloneview
title: "修復 Rclone Config Password 錯誤 — 用 RcloneView 解決加密設定問題"
authors:
  - robin
description: "排查 RcloneView 中 rclone.conf 的 Config Password 錯誤——鎖定、解密失敗與忘記密碼——並重新連線你的遠端。"
keywords:
  - rclone config password 錯誤
  - 加密的 rclone.conf
  - RcloneView config password
  - rclone conf 解密失敗
  - 忘記 rclone config password
  - config password 不符
  - rclone 設定加密
  - RcloneView 遠端被鎖定
  - 還原 rclone config
  - rclone config 復原
tags:
  - RcloneView
  - troubleshooting
  - tips
  - security
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復 Rclone Config Password 錯誤 — 用 RcloneView 解決加密設定問題

> 當保護你 rclone.conf 檔案的 Config Password 不同步時，RcloneView 中的所有遠端會同時停止載入——以下是診斷並重新登入的方法。

RcloneView 的 Settings 分頁中，Embedded Rclone 下方有一個 **Config Password** 選項，它會加密你整個 rclone.conf 檔案——這個檔案保存了你設定的所有遠端，而不只是單一供應商。這與使用 Crypt 遠端加密個別檔案不同；Config Password 會一次保護所有遠端的憑證與權杖。當這個密碼錯誤、遺失，或與實際加密該檔案的值不一致時，RcloneView 將無法解密任何遠端，整個檔案總管會顯示為空白，或在啟動時擲出連線錯誤。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 辨識 Config Password 問題

症狀通常是全面性的，而非局部性的：不是單一遠端連線失敗，而是 Google Drive、S3、Dropbox 等所有遠端同時失敗，通常發生在 RcloneView 啟動後或 embedded rclone 行程重新啟動後。請檢查底部 Info View 中的 **Log** 分頁，或在 Settings > Embedded Rclone 中啟用以檔案為基礎的記錄功能並將記錄等級設為 DEBUG，然後重新啟動 embedded rclone 行程。設定檔解密失敗會在記錄中清楚顯示，不同於特定供應商的驗證錯誤，這是區分它與過期的 OAuth 權杖或已撤銷的 API 金鑰的可靠方法。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="在 RcloneView 中查看 config password 錯誤後的工作歷史記錄與記錄檔" class="img-large img-center" />

## 常見原因與修復方法

大多數 Config Password 問題可歸結為以下幾種情況之一：

**更新或重新安裝後密碼輸入錯誤。** 如果你將 RcloneView 移到新機器或重新安裝了它，請在 Settings > Embedded Rclone > Config Password 中重新輸入正確的 Config Password。這裡沒有部分相符——哪怕只有一個字元錯誤，也會阻止整個檔案的解密。

**過時的 rclone.conf 路徑。** RcloneView 的 Local Rclone config location 設定指向一個特定檔案。如果先前的安裝在該路徑下留下了未加密或以不同方式加密的設定檔，RcloneView 可能完全讀取到錯誤的檔案。請確認 Settings 中的設定位置與你實際加密的 rclone.conf 所在位置一致。

**忘記密碼且無復原選項。** rclone 的設定加密沒有後門——如果密碼確實遺失，現有的 rclone.conf 將無法解密。唯一的方法是刪除加密檔案，然後透過 **Remote** > **New Remote** 從頭重新加入每個遠端，這也是為什麼這個值值得像任何雲端供應商憑證一樣，保存在密碼管理器中。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中重設 config password 後重新加入遠端" class="img-large img-center" />

## 事先防範鎖定

在變更 Config Password 之前，使用 Job Manager 的 **Export** 選項匯出目前的工作定義——它會將工作設定儲存為可攜式的 JSON 檔案，記錄曾經存在的遠端與工作，儘管它本身不會還原憑證。RcloneView 也能在 Windows、macOS 與 Linux 上透過單一視窗掛載並同步 90 個以上的供應商，因此透過 New Remote 從零重建遠端只需幾分鐘，而非幾小時。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 RcloneView 中變更 config password 前檢查工作設定" class="img-large img-center" />

向支援團隊尋求協助時，請遵循與其他 rclone 問題相同的記錄收集步驟：啟用 DEBUG 記錄、重新啟動 embedded rclone 行程、重現問題，然後傳送記錄檔——比起截圖，解密錯誤從原始記錄輸出中診斷要容易得多。

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 檢查 Settings > Embedded Rclone > Config Password，確認它與最初加密你 rclone.conf 的值一致。
3. 啟用 DEBUG 記錄並重新啟動 embedded rclone 行程，確認問題是解密錯誤而非供應商驗證問題。
4. 如果密碼確實無法復原，請刪除加密的設定檔並透過 New Remote 重新加入遠端。

Config Password 一次保護 rclone.conf 中的所有憑證，因此請像對待主密碼一樣謹慎看待它——遺失它代表你必須從頭重建遠端清單。

---

**相關指南：**

- [Fix Rclone Config Corruption and Recovery Issues in RcloneView](https://rcloneview.com/support/blog/fix-rclone-config-corruption-rcloneview)
- [Fix Crypt Remote Decryption Errors — Password and Config Issues with RcloneView](https://rcloneview.com/support/blog/fix-crypt-remote-password-decrypt-errors-rcloneview)
- [Fix License Key Activation Errors — Resolve PLUS License Issues with RcloneView](https://rcloneview.com/support/blog/fix-license-key-activation-errors-rcloneview)

<CloudSupportGrid />
