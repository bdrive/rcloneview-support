---
slug: fix-sftp-connection-errors-rcloneview
title: "修復 SFTP 連線錯誤——使用 RcloneView 解決 SSH 檔案傳輸問題"
authors:
  - alex
description: "診斷並修復 RcloneView 中常見的 SFTP 連線錯誤——驗證失敗、主機金鑰不符與逾時問題——讓 SSH 傳輸順利運作。"
keywords:
  - fix SFTP connection errors RcloneView
  - SFTP SSH file transfer troubleshooting
  - RcloneView SFTP setup guide
  - SFTP authentication failure rclone
  - SSH file transfer errors
  - SFTP host key mismatch fix
  - rclone SFTP troubleshooting
  - resolve SFTP sync errors
  - SFTP remote cloud sync
  - RcloneView troubleshooting tips
tags:
  - sftp
  - troubleshooting
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復 SFTP 連線錯誤——使用 RcloneView 解決 SSH 檔案傳輸問題

> RcloneView 中的 SFTP 錯誤幾乎都可以追溯到少數幾個根本原因——驗證設定錯誤、防火牆規則,或主機金鑰驗證失敗——而每一個都有對應的直接解法。

SFTP(SSH File Transfer Protocol,連接埠 22)是在本機與伺服器之間傳輸檔案的常見方式:網頁主機、內部部署的 NAS 裝置,以及雲端虛擬機通常都會提供 SFTP 介面。當 RcloneView 無法連接到 SFTP 遠端時,Log 分頁中的錯誤訊息會指出原因,但可能的問題範圍——錯誤的憑證、被封鎖的連接埠、不符的主機金鑰、受限的路徑——可能讓診斷變得像是在猜測。本指南將逐一說明最常見的 SFTP 錯誤,以及如何系統性地解決每一個問題。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 正確設定 SFTP 遠端

大多數連線錯誤都始於遠端設定。在 RcloneView 中,開啟 **Remote tab > New Remote**,並從提供者清單中選擇 **SFTP**。必要欄位包括**主機(Host)**(純主機名稱或 IP 位址——不要加上 `sftp://`)、**連接埠(Port)**(預設為 22)、**使用者名稱(Username)**,以及你的**驗證方式(Authentication)**,可以是密碼或 SSH 私密金鑰檔案路徑。

一個常見的錯誤是在 Host 欄位中輸入 `sftp://hostname`。RcloneView(透過 rclone)僅預期純主機名稱或 IP,而 `sftp://` 前綴會導致連線立即被拒絕。如果你的伺服器使用金鑰驗證,請確認私密金鑰檔案路徑指向本機上正確的檔案。在 Linux 與 macOS 上,金鑰檔案的權限必須是 `600` 或更嚴格——SSH 用戶端會拒絕使用任何人皆可讀取的金鑰。

<img src="/support/images/en/blog/new-remote.png" alt="Creating a new SFTP remote in RcloneView" class="img-large img-center" />

## 診斷驗證失敗問題

驗證失敗會在 RcloneView 的 **Log 分頁**中顯示如 `ssh: handshake failed` 或 `Permission denied (publickey,password)` 之類的訊息。請依序檢查以下項目:

1. **確認使用者名稱**——先用終端機的 SSH 用戶端連線一次,以確認確切的帳號名稱。RcloneView 使用相同的憑證,且大小寫是有區別的。
2. **檢查金鑰與密碼模式**——如果伺服器強制使用金鑰登入,在 RcloneView 中輸入密碼將會失敗。請將密碼欄位留空,改為提供私密金鑰路徑。
3. **啟用 DEBUG 記錄**——前往 Settings > Embedded Rclone > Enable rclone Logging,將等級設為 DEBUG,並重現該錯誤。記錄檔會捕捉完整的 SSH 交握過程,並精確指出被拒絕的步驟。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="RcloneView transfer view for an active SFTP sync job" class="img-large img-center" />

## 解決主機金鑰不符錯誤

rclone 第一次連線到 SFTP 伺服器時,會記錄該伺服器的主機金鑰。如果該金鑰之後發生變更——例如因伺服器重建、作業系統重新安裝,或憑證輪替——rclone 會發出 `host key mismatch` 錯誤,並拒絕連線以防止中間人攻擊。若要解決此問題,請在 RcloneView 中開啟 **Rclone Terminal** 分頁並執行:

```
rclone config show <remote-name>
```

找出輸出結果中顯示的 `known_hosts_file` 路徑,用文字編輯器開啟該檔案,並刪除受影響主機的過期項目。下一次連線嘗試時,系統會提示你信任新的金鑰並乾淨地儲存它。

## 修復防火牆與逾時問題

如果連線嘗試沒有錯誤訊息卻卡住不動——或是出現 `dial tcp: connection timed out`——問題很可能出在伺服器端或用戶端網路的防火牆封鎖了連接埠 22。使用 Terminal 分頁,以 `rclone about <remote-name>:` 測試 rclone 是否能連上伺服器,並將結果與直接使用終端機 SSH 連線做比較。如果 SSH 用戶端可以成功連線,但 rclone 卻逾時,請檢查你的機器或公司網路是否套用了會影響非瀏覽器連線的出站防火牆規則。若網路封鎖了出站的連接埠 22,可請伺服器管理員在替代連接埠上開放 SFTP——常見的替代方案是連接埠 443——並在 RcloneView 遠端設定中相應更新 Port 欄位。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an SFTP sync job in the RcloneView Job Manager" class="img-large img-center" />

## 傳輸失敗後檢視工作記錄

連線穩定後,請檢視 **Job History** 檢視畫面,確認先前失敗的執行沒有在目的地留下不完整的檔案。RcloneView 會記錄每個工作的狀態、傳輸數量、速度與錯誤代碼。快速掃描即可找出需要重新執行的未完成同步,而 Dry Run 選項可讓你在執行操作前,預覽確切哪些檔案會被複製或刪除。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history view showing SFTP sync results in RcloneView" class="img-large img-center" />

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 開啟 **Remote tab > New Remote > SFTP**,輸入純主機名稱(不含 `sftp://` 前綴)、連接埠、使用者名稱與驗證憑證。
3. 在 Settings 中啟用 DEBUG 記錄,以便在發生錯誤時捕捉完整的 SSH 交握過程。
4. 任何傳輸失敗後,請檢查 **Job History** 以找出需要重新執行的未完成同步。

只要有正確的憑證,並清楚檢視 rclone 的記錄輸出,大多數 SFTP 錯誤都能快速解決——而 RcloneView 讓驗證結果、恢復高效檔案傳輸變得簡單直接。

---

**相關指南:**

- [使用 RcloneView 管理 FTP 伺服器檔案——雲端同步與備份](https://rcloneview.com/support/blog/manage-ftp-server-cloud-sync-backup-rcloneview)
- [使用 RcloneView 將 SFTP 與 SMB 掛載為本機磁碟機](https://rcloneview.com/support/blog/mount-sftp-smb-local-drive-rcloneview)
- [使用 RcloneView 疑難排解 Rclone 錯誤](https://rcloneview.com/support/blog/troubleshoot-rclone-errors-rcloneview)

<CloudSupportGrid />
