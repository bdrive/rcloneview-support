---
slug: fix-ssl-tls-certificate-errors-cloud-rcloneview
title: "修正 RcloneView 雲端連線的 SSL/TLS 憑證錯誤"
authors:
  - tayson
description: "排除並修正 RcloneView 連線雲端儲存時發生的 SSL/TLS 憑證錯誤。解決憑證過期、自簽憑證問題以及企業代理伺服器攔截等問題。"
keywords:
  - rcloneview
  - ssl certificate error
  - tls certificate error
  - cloud connection ssl fix
  - self-signed certificate rclone
  - certificate verify failed
  - x509 certificate error
  - corporate proxy ssl
  - rclone tls error
  - cloud storage connection fix
tags:
  - troubleshooting
  - security
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修正 RcloneView 雲端連線的 SSL/TLS 憑證錯誤

> SSL/TLS 憑證錯誤會導致 RcloneView 無法與雲端服務供應商建立安全連線。這類錯誤的成因從憑證過期到企業代理伺服器攔截都有可能——以下說明如何診斷與解決。

RcloneView 與雲端服務供應商的每一次連線都使用具備 TLS 加密的 HTTPS。TLS 交握（handshake）會透過伺服器的 SSL 憑證驗證其身分。當驗證失敗時，RcloneView 便無法連線——無法瀏覽、無法傳輸、也無法同步。憑證錯誤在以下情況特別常見：具有 SSL 檢測代理伺服器的企業環境、連線至自架儲存服務（MinIO、Nextcloud、Seafile）時，或是系統時間不正確時。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 常見錯誤訊息

- **「x509: certificate signed by unknown authority」**：伺服器憑證是由你的系統不信任的憑證授權單位（CA）所簽發。這在自架儲存服務與企業代理伺服器中很常見。
- **「x509: certificate has expired or is not yet valid」**：憑證的有效期間與目前系統時間不符。可能是憑證確實已過期，也可能是你的系統時鐘不正確。
- **「x509: certificate is valid for X, not Y」**：憑證的通用名稱（Common Name）或主體別名（Subject Alternative Names）與你所連線的主機名稱不符。這種情況發生在端點 URL 與憑證不一致時。
- **「tls: failed to verify certificate」**：一般性的 TLS 驗證失敗。請檢查完整錯誤訊息以了解詳情。
- **「remote TLS connection closed unexpectedly」**：TLS 交握過程被中斷，通常是防火牆或代理伺服器所致。

## 修正方法 1：檢查系統時鐘

最簡單也最常被忽略的原因：系統時鐘不正確。TLS 憑證有一段有效期間（Not Before / Not After）。若你的時鐘超出此範圍，所有憑證都會顯示為無效。

在 Windows 上，請至「設定 > 時間與語言 > 日期與時間」確認已啟用「自動設定時間」。在 Linux 上，執行 `timedatectl` 確認時間正確。在 macOS 上，請檢查「系統偏好設定 > 日期與時間」。

即使系統時鐘只差幾個小時，也可能觸發憑證錯誤，尤其是對於剛簽發或即將到期的憑證。

## 修正方法 2：企業代理伺服器／SSL 檢測

許多企業網路使用具備 SSL 檢測功能的代理伺服器，會攔截 HTTPS 連線、解密以進行檢查，再以組織自身的憑證重新加密。這實際上是一種中間人（man-in-the-middle）操作，公司管理的電腦會信任它（因為企業 CA 已安裝於系統的信任存放區），但 rclone 內建的憑證組合可能不會信任它。

要解決這個問題，你需要告訴 rclone 使用系統的憑證存放區，或明確提供企業的 CA 憑證：

- **選項 A**：在 RcloneView 的自訂旗標中設定 `--ca-cert` 旗標，指向企業 CA 憑證檔案。例如：`--ca-cert /path/to/corporate-ca.pem`。
- **選項 B**：在 Linux 上，確認企業 CA 憑證已安裝於系統信任存放區（Debian/Ubuntu 為 `/etc/ssl/certs/`，RHEL/CentOS 為 `/etc/pki/tls/certs/`）。新增憑證後執行 `update-ca-certificates`。
- **選項 C**：在 Windows 上，即使企業 CA 已安裝於 Windows 憑證存放區，rclone 預設可能不會使用它（因為它使用自己的 Go TLS 實作）。請將企業 CA 從 Windows 憑證存放區匯出為 PEM 檔案，並使用 `--ca-cert`。

若你尚未取得企業 CA 憑證，請聯絡你的 IT 部門索取。

## 修正方法 3：自簽憑證（自架儲存服務）

當連線至使用自簽 TLS 憑證的自架儲存服務，例如 MinIO、透過 WebDAV 的 Nextcloud，或私有 SFTP 伺服器時，rclone 會因為該憑證並非由受信任的 CA 所簽發而拒絕連線。

你有兩個選擇：

- **建議做法**：將你的自簽憑證加入系統信任存放區，或使用 `--ca-cert` 指向該憑證檔案。這樣可以在維持 TLS 驗證的同時，信任你指定的特定憑證。
- **不建議但有時必要**：在自訂旗標中使用 `--no-check-certificate`。這會完全停用憑證驗證，使連線容易遭受中間人攻擊。僅限於在受信任的網路上進行測試時使用，切勿用於正式環境。

若特別針對 MinIO，建議改用 Let's Encrypt（免費）產生正式憑證，而非使用自簽憑證。

## 修正方法 4：伺服器憑證已過期

若雲端服務供應商的憑證確實已過期，客戶端無能為力——必須由供應商更新憑證。這對大型供應商（AWS、Google、Microsoft、Dropbox）而言相當罕見，但在小型供應商或自架方案中則可能發生。

可透過網頁瀏覽器檢查憑證來確認：前往該供應商的 URL，點選鎖頭圖示以檢視憑證詳情。若憑證已過期，請聯絡供應商。對於自架儲存服務，請使用你的 CA 或 Let's Encrypt 更新憑證。

## 修正方法 5：主機名稱不符

當你所連線的 URL 與憑證的通用名稱或主體別名不符時，就會發生憑證主機名稱不符的問題。常見情況包括：

- 使用 IP 位址而非主機名稱連線至相容於 S3 的端點。
- 端點 URL 有拼字錯誤，或使用與憑證所涵蓋不同的子網域。
- 你透過負載平衡器或反向代理伺服器存取服務，而該伺服器提供了不同的憑證。

解決方法是使用憑證所簽發的確切主機名稱。請在 RcloneView 的遠端管理員中檢查遠端設定，確認端點 URL 與憑證的主機名稱相符。

## 修正方法 6：更新 rclone 與 RcloneView

較舊版本的 rclone 可能使用過時的憑證組合，未包含較新的憑證授權單位。請更新至最新版本的 RcloneView，其中包含具備最新 CA 憑證的更新版 rclone 執行檔。

## 診斷憑證問題

發生憑證錯誤時，可利用 RcloneView 內建的終端機收集詳細資訊：

1. 執行 `rclone lsd remote:` 並加上 `--verbose`，以檢視包含憑證詳情的完整錯誤訊息。
2. 使用 `openssl s_client -connect endpoint:443`（若有安裝）檢查伺服器的憑證鏈。
3. 檢查憑證的簽發者、到期日與主體別名，以找出具體問題所在。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 若遇到憑證錯誤，請先檢查系統時鐘。
3. 若身處企業環境，請取得並設定企業 CA 憑證。
4. 若使用自架儲存服務，請將自簽憑證加入你的信任存放區。

SSL/TLS 憑證錯誤永遠有解——具體修正方式取決於問題根源是系統時鐘、企業代理伺服器、自簽憑證，還是伺服器憑證過期。從錯誤訊息中找出根本原因，是快速解決問題的關鍵。

---

**相關指南：**

- [新增 AWS S3 與相容於 S3 的儲存服務](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)
- [新增 WebDAV](https://rcloneview.com/support/howto/remote-storage-connection-settings/webdav)
- [瀏覽與管理遠端儲存](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)

<CloudSupportGrid />
