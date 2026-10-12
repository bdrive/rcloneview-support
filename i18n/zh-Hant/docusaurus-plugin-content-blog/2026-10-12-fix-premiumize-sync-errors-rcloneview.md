---
slug: fix-premiumize-sync-errors-rcloneview
title: "修復 premiumize.me 同步錯誤 — 使用 RcloneView 解決授權與傳輸問題"
authors:
  - casey
description: "使用 RcloneView 的日誌、作業歷程與資料夾比較，排解 premiumize.me 的授權過期、傳輸失敗與檔案遺失等同步錯誤。"
keywords:
  - 修復 premiumize.me 同步錯誤
  - premiumize rclone 錯誤
  - premiumize 授權失敗
  - premiumize 傳輸失敗
  - premiumize 疑難排解
  - RcloneView premiumize
  - 雲端同步疑難排解
  - premiumize GUI
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cloud-sync
  - cloud-storage
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復 premiumize.me 同步錯誤 — 使用 RcloneView 解決授權與傳輸問題

> 當 premiumize.me 作業失敗時，RcloneView 的作業歷程、DEBUG 日誌與資料夾比較能告訴你原因出在登入、傳輸負載，還是未送達的檔案。

premiumize.me 作業提前中止，或讓資料夾只複製到一半，單靠命令列很難診斷。RcloneView 將遠端檢查、作業紀錄、日誌與並排比較集中在同一個視窗，讓你修復真正的原因，而不是盲目重新執行。RcloneView 在單一視窗中即可掛載並同步 90 多個供應商，支援 Windows、macOS 與 Linux。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 重新授權遠端

premiumize.me 透過瀏覽器中的 OAuth 連線。若作業在數秒內失敗，首先應懷疑登入問題。在 Remote 分頁開啟 Remote Manager，編輯 premiumize.me 遠端，並依瀏覽器提示重新登入。

接著在 Explorer 面板中開啟該遠端並瀏覽根資料夾。若能正常列出，代表連線健康，問題出在傳輸本身。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中重新授權 premiumize.me 遠端" class="img-large img-center" />

## 檢視作業歷程並啟用 DEBUG 日誌

開啟 Job History，查看失敗執行的狀態、持續時間與檔案數。作業中途出錯通常指向特定檔案或負載，而非憑證。

若要取得每個檔案的確切訊息，請前往 Settings > Embedded Rclone，啟用 rclone 日誌，將等級設為 DEBUG，然後點擊 Restart Embedded Rclone。重現故障後，查看 Log 分頁或你所設定資料夾中的日誌檔。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="RcloneView 作業歷程顯示出錯的 premiumize.me 作業" class="img-large img-center" />

## 降低負載並預覽重新執行

間歇性失敗通常會因同時傳輸數減少而緩解。在同步精靈的步驟 2 中，降低檔案傳輸數，並將 equality checkers 設為 4 或更低。將 "Retry entire sync if fails" 維持為 3，以便重試暫時性錯誤。

重新執行前，使用 Dry Run 查看哪些檔案將被複製或刪除，讓重試不會出現意外。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="以較低並行度重新執行 premiumize.me 作業" class="img-large img-center" />

## 使用資料夾比較確認

重新執行後，開啟 Compare，一側為本機資料夾，另一側為 premiumize.me。篩選僅左側、僅右側與不同的檔案，然後只複製仍然缺少的項目，而不是重複整個作業。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="資料夾比較顯示 premiumize.me 上缺少的檔案" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 重新授權 premiumize.me 遠端，並確認根資料夾可列出。
3. 檢視 Job History，並為失敗的作業開啟 DEBUG 日誌。
4. 降低並行度，執行 Dry Run，重新執行，並以資料夾比較驗證。

當日誌與比較讓原因一目瞭然，premiumize.me 的故障就成為簡短、可重複的修復。

---

**相關指南：**

- [使用 RcloneView 管理 premiumize.me 雲端儲存](https://rcloneview.com/support/blog/manage-premiumize-me-cloud-sync-backup-rcloneview)
- [使用 RcloneView 同步 premiumize.me 雲端下載](https://rcloneview.com/support/blog/sync-premiumize-cloud-downloads-rcloneview)
- [使用 RcloneView 修復 put.io 同步錯誤](https://rcloneview.com/support/blog/fix-put-io-sync-errors-rcloneview)

<CloudSupportGrid />
