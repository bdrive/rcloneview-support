---
slug: fix-pcloud-sync-errors-rcloneview
title: "修復 pCloud 同步錯誤 — 使用 RcloneView 解決常見的 pCloud 問題"
authors:
  - tayson
description: "在 RcloneView 中疑難排解常見的 pCloud 同步錯誤 — 修復 OAuth 權杖過期、API 速率限制、伺服器地區不符以及上傳緩慢的問題。"
keywords:
  - pCloud sync errors
  - RcloneView pCloud
  - pCloud troubleshooting
  - OAuth token expired
  - pCloud Europe US server
  - pCloud API rate limit
  - cloud sync fix
  - rclone pCloud
tags:
  - pcloud
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復 pCloud 同步錯誤 — 使用 RcloneView 解決常見的 pCloud 問題

> pCloud 同步失敗幾乎都是由少數幾個已知問題所造成 — 以下說明如何在 RcloneView 中診斷並修復最常見的問題。

pCloud 是一家注重隱私的雲端儲存供應商，在美國和歐洲都設有伺服器，而這種地區分割正是許多莫名其妙同步失敗的根本原因。當這與 OAuth 權杖過期和 API 速率限制結合時，pCloud 可能會產生看似與實際問題無關的令人困惑的錯誤。本指南將說明在 RcloneView 中最常遇到的 pCloud 問題，以及如何解決每一個問題。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## OAuth 權杖過期與重新授權

pCloud 使用 OAuth 進行身份驗證，這表示 RcloneView 持有一組會定期過期的存取權杖。當權杖過期時，同步工作會出現驗證錯誤，例如 `401 Unauthorized` 或 `invalid_token`。修復方法很簡單：前往 RcloneView 中的遠端清單，選取該 pCloud 遠端，然後選擇 **重新授權**（或刪除後重新建立該遠端）。這會在瀏覽器中觸發全新的 OAuth 流程，發出一組新的有效權杖。

為避免重複被重新授權中斷，請確認您在 RcloneView 中建立的 pCloud 遠端選擇了正確的伺服器地區（見下方說明）。地區不符可能會使權杖看似有效，卻在實際 API 呼叫時失敗，這種情況看起來與權杖過期一模一樣。

<img src="/support/images/en/blog/new-remote.png" alt="Re-authorizing a pCloud remote in RcloneView" class="img-large img-center" />

## 歐洲與美國伺服器地區不符

這是 pCloud 特有的最常見問題。在歐洲建立的 pCloud 帳戶會託管在歐洲伺服器上（`eapi.pcloud.com`），而美國帳戶則使用預設的美國端點（`api.pcloud.com`）。如果您使用歐洲地區建立了 pCloud 帳戶，但 RcloneView 卻設定為使用美國端點，每一次 API 呼叫都會失敗。

在 RcloneView 中設定 pCloud 遠端時，請在設定過程中尋找 **Hostname** 或 **API Endpoint** 欄位。對於歐洲帳戶，請將此設為 `eapi.pcloud.com`。如果您的遠端建立時未指定此項，請刪除後以正確的主機名稱重新建立。單單這一項修復就能解決絕大多數的 pCloud 連線失敗問題。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="pCloud remote configuration showing region endpoint in RcloneView" class="img-large img-center" />

## API 速率限制與上傳緩慢

pCloud 會強制實施 API 速率限制，對免費方案帳戶尤其如此。當您達到這些限制時，rclone 會收到諸如 `too many requests` 之類的錯誤，或是傳輸速度會大幅下降。RcloneView 會遵循 rclone 內建的重試邏輯，但您也可以透過在 **Global Rclone Flags** 設定中調整 `--retries` 和 `--retries-sleep` 旗標來進一步微調。

特別針對上傳緩慢的問題，pCloud 的免費方案有獨立於速率限制之外的頻寬限制。您可以考慮使用篩選規則將大型同步工作拆分為較小的批次，或利用 PLUS 授權的排程功能，在離峰時段執行工作。如果上傳經常逾時，可在全域旗標中加入 `--timeout 300s`，讓傳輸有更多時間完成，避免 rclone 過早判定失敗。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Monitoring pCloud transfer progress in RcloneView" class="img-large img-center" />

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 若出現驗證錯誤，請在遠端設定面板中重新授權您的 pCloud 遠端。
3. 檢查您的 pCloud 帳戶是否為歐盟地區，如有需要，請將端點更新為 `eapi.pcloud.com`。
4. 若出現速率限制錯誤，請在偏好設定的 Global Rclone Flags 中加入 `--retries 10 --retries-sleep 30s`。
5. 每次同步前先執行 **dry run（模擬執行）**，以確認遠端可連線且範圍內的檔案正確無誤。

RcloneView 中大多數的 pCloud 同步問題，都能透過以上其中一項步驟解決 — 單是地區端點的修復，就佔了通報失敗案例的絕大多數。

---

**相關指南：**

- [使用 RcloneView 管理 Koofr — 雲端同步與備份](https://rcloneview.com/support/blog/manage-koofr-cloud-sync-backup-rcloneview)
- [使用 RcloneView 管理 Proton Drive — 雲端同步](https://rcloneview.com/support/blog/manage-proton-drive-cloud-sync-rcloneview)
- [使用 RcloneView 修復雲端 OAuth 權杖過期與更新問題](https://rcloneview.com/support/blog/fix-cloud-oauth-token-expired-refresh-rcloneview)

<CloudSupportGrid />
