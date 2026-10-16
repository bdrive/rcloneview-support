---
slug: fix-external-rclone-rcd-connection-refused-rcloneview
title: "修復外部 Rclone 連線被拒絕 — 使用 RcloneView 排查 rcd 存取問題"
authors:
  - casey
description: "修復 RcloneView 外部 rclone 連線錯誤：透過測試連線檢查 rclone rcd、連接埠 5572、憑證、防火牆與 SSL 設定。"
keywords:
  - rclone rcd 連線被拒絕
  - RcloneView 外部 rclone
  - rclone 遠端控制無法連線
  - rclone rcd 連接埠 5572
  - RcloneView 連線管理員
  - rclone rcd 驗證失敗
  - 修復 rclone rc 連線
  - rclone rcd 防火牆
tags:
  - RcloneView
  - troubleshooting
  - tips
  - cli
  - self-hosted
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復外部 Rclone 連線被拒絕 — 使用 RcloneView 排查 rcd 存取問題

> 當 RcloneView 無法連線到外部 rclone 伺服器時，原因幾乎總是以下五種之一，幾分鐘內即可排查。

RcloneView 內建 rclone，但許多使用者會透過連線管理員（Connect Manager）連線到執行於 NAS、VPS 或 AWS EC2 執行個體上的外部 rclone。當連線因「connection refused」、逾時或驗證錯誤而失敗時，一份簡短的檢查清單就能找出原因。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 確認 rclone rcd 確實在執行

RcloneView 透過以 `rclone rcd` 啟動的遠端控制（Remote Control）API 與外部 rclone 通訊。請在伺服器上以明確的憑證與位址啟動，例如 `rclone rcd --rc-user=<user> --rc-pass=<pass> --rc-addr=127.0.0.1:5572`。外部 rclone 的預設連接埠是 5572，而內建執行個體使用本機的 5582。

常見的錯誤是綁定到 `127.0.0.1` 後卻從另一台機器連線。迴路位址只接受本機流量。對於遠端伺服器，請綁定到 `0.0.0.0:5572`，並在防火牆中依 IP 限制存取。請注意，RcloneView 是 GUI 工具，不安裝在伺服器上；伺服器上只執行 rclone。

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="將 RcloneView 連線到外部 rclone 主機" class="img-large img-center" />

## 檢查網路路徑與憑證

如果 rcd 正在執行但連線仍被拒絕，請測試網路路徑。在執行 RcloneView 的機器上，使用使用者名稱與密碼對 `/rc/noop` 進行健康檢查，應會收到回應。如果請求卡住，表示防火牆或雲端安全群組封鎖了 5572 連接埠。在 AWS EC2 上，除了受限的 SSH 之外，安全群組還需要一條針對 5572 的自訂 TCP 規則。

驗證失敗是另一回事：在 RcloneView 中輸入的使用者名稱與密碼必須與 `--rc-user` 和 `--rc-pass` 完全一致，包括大小寫。

<img src="/support/images/en/blog/new-remote.png" alt="在 RcloneView 中輸入外部連線資訊" class="img-large img-center" />

## 在連線管理員中驗證設定

開啟 Settings > Connect Manager > New Connection，填寫顯示名稱、`http://<host>:5572` 形式的位址以及憑證。如果伺服器使用自簽憑證，可透過停用 SSL 憑證驗證的選項繼續連線。儲存前請按下 Test Connection，立即查看結果。

如果仍然失敗，請在 Settings > Embedded Rclone 中啟用 rclone 記錄，將層級設為 DEBUG，重新啟動後重現問題以取得記錄。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="在 RcloneView 中檢視記錄與歷程" class="img-large img-center" />

## 開始使用

1. **下載 RcloneView** ： [rcloneview.com](https://rcloneview.com/src/download.html)。
2. 在伺服器上以使用者名稱、密碼與可連線的位址啟動 `rclone rcd`。
3. 在防火牆或安全群組中開放連接埠。
4. 在連線管理員中新增連線並按下 Test Connection。

連線穩定後，您就可以在桌面端管理遠端伺服器的雲端儲存。

---

**相關指南：**

- [RcloneView 連線管理員 — 內建與外部](https://rcloneview.com/support/blog/rcloneview-connection-manager-embedded-external)
- [修復 SSL/TLS 憑證錯誤](https://rcloneview.com/support/blog/fix-ssl-tls-certificate-errors-cloud-rcloneview)
- [修復 SFTP 連線被拒絕與逾時](https://rcloneview.com/support/blog/fix-sftp-connection-refused-timeout-rcloneview)

<CloudSupportGrid />
