---
slug: fix-email-smtp-notifications-not-sending-rcloneview
title: "修復郵件 SMTP 通知無法傳送的問題 — RcloneView 疑難排解指南"
authors:
  - morgan
description: "修復無法傳送的 RcloneView 郵件 SMTP 通知。解決工作提醒的連接埠封鎖、驗證錯誤與閾值設定問題。"
keywords:
  - 修復 RcloneView 郵件通知
  - SMTP 通知無法傳送
  - RcloneView 郵件提醒錯誤
  - SMTP 驗證失敗
  - 同步工作通知疑難排解
  - 連接埠 587 遭封鎖 SMTP
  - 未收到備份提醒
  - RcloneView PLUS 通知
tags:
  - RcloneView
  - troubleshooting
  - automation
  - cloud-sync
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復郵件 SMTP 通知無法傳送的問題 — RcloneView 疑難排解指南

> 當 RcloneView 的郵件通知不再送達時,原因幾乎總是 SMTP 設定、連接埠封鎖,或傳輸閾值設定過高 —— 本文說明如何逐一診斷並修復。

郵件提醒只有真正送達才有用。當排程備份悄無聲息地失敗,而通知從未送達收件匣時,無人值守監控的意義也就消失了。RcloneView 的 SMTP 通知系統仰賴幾項容易設定錯誤的項目,本指南將逐一說明最常見的失敗點,協助工作提醒重新穩定運作。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 驗證與主機錯誤

無聲通知失敗最常見的原因是 SMTP 驗證錯誤。若你的郵件供應商要求使用應用程式專用密碼(在啟用兩步驟驗證的 Gmail 與 Microsoft 365 帳戶中相當常見),輸入一般帳戶密碼即使欄位未顯示明確錯誤,連線仍會失敗。請從供應商的安全性設定產生應用程式密碼並改用它。

也請再次確認**SMTP 主機**欄位 —— 例如 `smtp.gmial.com` 這類拼字錯誤,或使用供應商的 IMAP 主機而非 SMTP 主機,都會導致連線失敗。修正憑證後,在正式工作依賴此設定之前,務必使用**測試**按鈕 —— 這能將驗證問題與工作層級設定問題區分開來。

<img src="/support/images/en/blog/new-remote.png" alt="Testing SMTP authentication settings in RcloneView notification configuration" class="img-large img-center" />

## 連接埠封鎖與網路問題

RcloneView 建議在 SMTP 傳送時使用搭配 STARTTLS 的**連接埠 587**。若你在出站防火牆規則較嚴格的網路上執行 RcloneView(企業網路、部分 VPS 供應商及某些住宅 ISP 中相當常見),連接埠 587(尤其是連接埠 25)可能被完全封鎖,導致測試郵件逾時而非顯示明確錯誤。

若測試持續逾時而非傳回驗證錯誤,問題幾乎可以肯定出在網路層級,而非憑證層級。若供應商支援,可嘗試切換至連接埠 465(SSL),或與網路管理員確認允許出站 SMTP 流量。若你連線的是遠端伺服器或 Docker 容器上的外部 rclone 執行個體,由於連線實際上是從 rclone 執行所在位置發出,請一併確認該伺服器的出站規則也允許 SMTP 流量。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Reviewing job notification settings after an SMTP connection failure" class="img-large img-center" />

## 閾值與收件人設定錯誤

若 SMTP 連線與測試都成功,但實際工作的通知卻從未送達,請檢查工作層級的通知閾值。RcloneView 可讓你設定傳送通知前的最小傳輸大小(以 MB 或 GB 為單位)—— 這對於頻繁執行且資料異動很少的工作能有效減少提醒疲勞,但也代表僅傳輸少量檔案的工作可能低於閾值而完全不會產生郵件。可先暫時調低或移除閾值,以確認是否為此原因。

也請確認收件人地址不僅在全域 SMTP 設定中正確,也在工作層級正確輸入 —— RcloneView 要求依工作個別設定通知收件人,因此一個全域運作正常、但未為特定工作指派收件人的 SMTP 連線,永遠不會為該工作傳送提醒。郵件通知是 PLUS 授權功能,若 SMTP、收件人與閾值皆已確認無誤但提醒仍未送達,請在進一步排查前先確認你的授權等級。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Checking job history and notification recipients for a completed sync job" class="img-large img-center" />

## 開始使用

1. 若尚未下載,請從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView** 並開啟通知設定。
2. 若供應商要求使用應用程式專用密碼,請用它重新輸入 SMTP 憑證,然後點選**測試**。
3. 若測試逾時,請將連接埠從 587 切換至 465,或檢查是否有防火牆規則封鎖出站 SMTP。
4. 檢查每個工作的通知閾值與收件人清單是否依預期設定。

在確認 SMTP 憑證、網路存取與工作層級設定皆正確無誤後,郵件通知將成為背景執行的每個排程同步工作的可靠安全網。

---

**相關指南:**

- [Email SMTP 工作通知——在 RcloneView 中隨時掌握同步狀態](https://rcloneview.com/support/blog/email-smtp-job-notifications-rcloneview)
- [在 RcloneView 中設定雲端同步的通知與警示](https://rcloneview.com/support/blog/notification-alerts-sync-complete-rcloneview)
- [修復排程同步無法執行的問題 — 在 RcloneView 中排查自動化雲端工作](https://rcloneview.com/support/blog/fix-scheduled-sync-not-running-rcloneview)

<CloudSupportGrid />
