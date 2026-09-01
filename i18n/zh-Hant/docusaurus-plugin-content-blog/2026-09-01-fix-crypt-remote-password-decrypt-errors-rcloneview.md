---
slug: fix-crypt-remote-password-decrypt-errors-rcloneview
title: "修復 Crypt 遠端解密錯誤 — RcloneView 中的密碼與設定問題"
authors:
  - kai
description: "排除 RcloneView 中 crypt 遠端解密失敗、bad-decrypt 錯誤以及密碼遺失的問題。為加密雲端儲存提供切實可行的修復方法。"
keywords:
  - crypt remote decryption error
  - rclone crypt bad decrypt
  - fix rclone crypt password
  - 加密雲端儲存錯誤
  - rclone 設定密碼遺失
  - crypt remote troubleshooting
  - rcloneview 加密錯誤
  - rclone 解密雲端檔案
  - crypt remote config corrupted
  - rclone crypt filename error
tags:
  - RcloneView
  - troubleshooting
  - tips
  - encryption
  - crypt
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復 Crypt 遠端解密錯誤 — RcloneView 中的密碼與設定問題

> 如果一個 crypt 遠端突然拋出「bad decrypt」錯誤或拒絕列出檔案，通常只有一個原因：用來讀取資料的密碼與用來加密資料的密碼不一致。

Rclone 的 crypt 虛擬遠端會包裝一個現有遠端，在任何內容離開您的裝置之前，對檔案名稱、資料夾名稱與檔案內容進行加密。這種保護功能很強大，但也意味著只要一個密碼不符或設定項目損毀，就可能讓您無法存取那些原本安然無恙存放在雲端的檔案。RcloneView 會將這些錯誤直接顯示在 Log 分頁與 Terminal 中，讓您能準確診斷出問題所在，而不必用猜的。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Crypt 解密失敗的原因

一個 crypt 遠端會儲存兩個密鑰：主密碼，以及一個選用的第二密碼(「鹽值」)。在您透過 RcloneView 的 New Remote 精靈設定遠端時，兩者都會經過模糊處理並儲存在您的 rclone 設定中。當其中任一數值與最初使用的不相符時，解密就會失敗——常見原因是在設定重置後憑記憶重新建立 crypt 遠端，或是在裝置之間複製 `rclone.conf` 檔案時，沒有複製那段精確的模糊化密碼字串。

另一個常見誘因是套用了錯誤的 crypt「檔案名稱加密」模式。若原始遠端使用標準檔案名稱加密，而重建的遠端改用「off」或「obfuscate」，RcloneView 就會顯示亂碼名稱，或在嘗試讀取無法解讀的目錄結構時徹底失敗。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中建立帶有密碼欄位的 crypt 遠端" class="img-large img-center" />

## 修復 Bad Decrypt 與檔案名稱亂碼錯誤

從 Remote Manager 開始，開啟 crypt 遠端的設定，將其與所包裝的底層遠端設定進行比對。確認 password 與 password2 欄位、檔案名稱加密模式以及目標路徑是否都與最初使用的一致。若不確定確切的設定，可以在 Settings 中將 rclone 記錄層級設為 DEBUG 後查看 Log 分頁——錯誤文字通常會指出 rclone 拒絕的具體欄位。

如果 crypt 遠端是在設定被清空後重建的,而您仍保有原始的 `rclone.conf`，請不要手動重新輸入密碼。rclone 設定檔中儲存的密碼只是經過模糊化,並非明文，因此將那段精確的模糊化字串直接貼回去即可完整保留它——手動重新輸入則有可能得到一個外觀相同、實際上卻略有差異、無法解密任何內容的密碼。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="工作歷史顯示由 crypt 遠端錯誤導致的同步失敗" class="img-large img-center" />

## 當密碼確實遺失時進行復原

沒有後門：rclone 的 crypt 加密在設計上就是沒有正確密碼便無法復原資料——無論是 RcloneView、rclone 還是雲端服務供應商都做不到。若密碼確實遺失了，切實可行的做法是預防而非事後復原。定期透過 Settings 匯出您的 rclone 設定，並將匯出的檔案(或至少 crypt 密碼)妥善保存在與執行 RcloneView 的裝置分開的安全位置。

RcloneView 在 FREE 授權下也支援同步與資料夾比較，因此一旦確認 crypt 遠端運作正常，您就可以對它執行 Dry Run 同步，在信任新資料之前確認解密是否成功。這能在密碼不符導致備份工作失敗之前提早發現問題。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="資料夾比較檢視驗證 crypt 遠端內容是否符合預期" class="img-large img-center" />

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 開啟 Remote Manager，找到發生錯誤的 crypt 遠端。
3. 在 Settings 中將 rclone 記錄層級設為 DEBUG，然後重現錯誤以取得確切的失敗訊息。
4. 將該 crypt 遠端的 password、password2 與檔案名稱加密模式，與您最初的設定筆記或匯出的設定進行比對。

能否快速解決 crypt 遠端錯誤，往往決定了這只是一次小小的設定檢查，還是一場真正無法挽回的備份災難——請以對待它所保護的資料同等的用心，看待您的加密密碼。

---

**相關指南：**

- [Zero-CLI Encryption with RcloneView Crypt Remote: Protect Any Cloud Folder](https://rcloneview.com/support/blog/zero-cli-crypt-remote-rcloneview)
- [How to Backup, Migrate, and Manage Your Rclone Config with RcloneView](https://rcloneview.com/support/blog/backup-migrate-rclone-config-rcloneview)
- [Fix Rclone Config Corruption and Recovery Issues in RcloneView](https://rcloneview.com/support/blog/fix-rclone-config-corruption-rcloneview)

<CloudSupportGrid />
