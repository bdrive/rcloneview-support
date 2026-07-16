---
slug: fix-proxy-vpn-cloud-connection-issues-rcloneview
title: "修復 RcloneView 中的代理伺服器與 VPN 雲端連線問題"
authors:
  - tayson
description: "解決在企業代理伺服器或 VPN 環境下,RcloneView 出現雲端同步與傳輸失敗的問題。涵蓋 HTTP_PROXY 設定、SSL 憑證錯誤、分割通道 (split tunneling)、DNS 解析問題,以及防火牆繞道技巧。"
keywords:
  - rclone proxy settings
  - rclone VPN connection error
  - rclone corporate proxy fix
  - rclone SSL certificate error
  - rclone HTTPS_PROXY config
  - rclone DNS resolution failure
  - rclone firewall blocked
  - rcloneview proxy configuration
  - rclone split tunneling VPN
  - fix rclone connection behind proxy
tags:
  - troubleshooting
  - tips
  - security
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 修復 RcloneView 中的代理伺服器與 VPN 雲端連線問題

> 企業代理伺服器與 VPN 經常會中斷雲端同步連線,出現難以理解的逾時與憑證錯誤。本指南涵蓋所有常見情境,並說明如何設定 RcloneView,使其在網路限制環境下仍能穩定運作。

許多組織會將網際網路流量透過代理伺服器路由,或要求遠端工作者透過 VPN 連線。這些措施雖然提升了安全性,卻經常干擾雲端儲存的 API 呼叫。Rclone 與 RcloneView 需要直接以 HTTPS 存取雲端服務供應商的端點,而任何介於您的電腦與這些端點之間的元件——代理伺服器、防火牆、VPN 通道或 SSL 檢測設備——都可能導致連線失敗。錯誤類型從逾時、DNS 失敗,到 TLS 交握錯誤與憑證拒絕都有可能發生。本指南將逐一說明每種問題,並提供具體的修復方法。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 設定 HTTP_PROXY 與 HTTPS_PROXY 環境變數

Rclone 遵循大多數網路工具所使用的標準 HTTP 代理環境變數。如果您的組織要求透過代理伺服器存取網際網路,就必須設定這些變數,讓 rclone 知道該將流量路由到何處。

### 設定代理變數

**Windows(系統環境變數)：**

1. 開啟 **設定 > 系統 > 關於 > 進階系統設定 > 環境變數**。
2. 在系統變數(或使用者變數)中新增：
   - `HTTP_PROXY` = `http://proxy.company.com:8080`
   - `HTTPS_PROXY` = `http://proxy.company.com:8080`
   - `NO_PROXY` = `localhost,127.0.0.1,.internal.company.com`
3. 重新啟動 RcloneView 以套用新的變數。

**macOS / Linux(shell 設定檔)：**

新增至 `~/.bashrc`、`~/.zshrc` 或 `/etc/environment`：

```bash
export HTTP_PROXY="http://proxy.company.com:8080"
export HTTPS_PROXY="http://proxy.company.com:8080"
export NO_PROXY="localhost,127.0.0.1,.internal.company.com"
```

執行該檔案或重新啟動終端機工作階段。

### 需要驗證的代理伺服器

如果您的代理伺服器需要使用者名稱與密碼,請將認證資訊包含在 URL 中：

```
http://username:password@proxy.company.com:8080
```

密碼中的特殊字元必須進行 URL 編碼(例如,`@` 會變成 `%40`,`#` 會變成 `%23`)。

### SOCKS5 代理伺服器

對於 SOCKS5 代理伺服器(常見於 SSH 通道),請使用：

```
socks5://proxy.company.com:1080
```

將此設定為 `HTTP_PROXY` 與 `HTTPS_PROXY`。

### 驗證代理伺服器設定

測試 rclone 是否能透過代理伺服器連線至雲端服務供應商：

```bash
rclone lsd remote: --dump headers -v
```

如果連線成功,您將看到目錄清單。`--dump headers` 旗標會顯示 HTTP 標頭,可用來確認是否有使用代理伺服器。

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

## 修復 SSL 憑證錯誤

SSL/TLS 憑證錯誤是企業代理伺服器環境下最常見的問題。許多組織會使用 SSL 檢測(也稱為 HTTPS 攔截或中間人檢測),代理伺服器會使用組織自有的憑證授權單位(CA)來解密並重新加密 HTTPS 流量。Rclone 預設不會信任此 CA,因而導致以下錯誤：

- `x509: certificate signed by unknown authority`
- `TLS handshake timeout`
- `SSL certificate problem: unable to get local issuer certificate`

### 修復方式:新增企業 CA 憑證

1. 向您的 IT 部門**取得企業根 CA 憑證**。通常是 `.pem` 或 `.crt` 檔案。
2. 使用 `--ca-cert` 旗標**告訴 rclone 信任該憑證**：
   ```bash
   rclone lsd remote: --ca-cert /path/to/corporate-ca.pem
   ```
3. 在 rclone 設定環境中設定變數,使其**永久生效**。新增至您的 shell 設定檔：
   ```bash
   export RCLONE_CA_CERT="/path/to/corporate-ca.pem"
   ```
4. 在 RcloneView 中,於遠端或工作設定中將 `--ca-cert /path/to/corporate-ca.pem` 新增為自訂旗標。

### 修復方式:將 CA 新增至系統信任儲存區

或者,將企業 CA 新增至作業系統的信任儲存區,讓所有應用程式(包括 rclone)自動信任該憑證：

**Windows：**
```
certutil -addstore "Root" corporate-ca.crt
```

**macOS：**
```bash
sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain corporate-ca.crt
```

**Linux(Debian/Ubuntu)：**
```bash
sudo cp corporate-ca.crt /usr/local/share/ca-certificates/
sudo update-ca-certificates
```

### 最後手段:停用 SSL 驗證

如果您無法取得企業 CA 憑證,可以完全停用 SSL 驗證。**不建議**在正式環境中使用此方式,因為它會移除對實際中間人攻擊的防護：

```bash
rclone lsd remote: --no-check-certificate
```

僅在測試以確認憑證是問題根源時使用此方式,之後仍應尋求正確的 CA 憑證解決方案。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />

## 解決 VPN 環境下的 DNS 問題

VPN 連線經常會覆寫您系統的 DNS 設定,這可能導致雲端服務供應商的網域無法解析,或解析為錯誤的位址。

### 症狀

- `dial tcp: lookup storage.googleapis.com: no such host`
- `dial tcp: lookup graph.microsoft.com: i/o timeout`
- 連接 VPN 之前可正常運作的連線,現在卻失敗。

### 修復方式

**檢查 DNS 解析：**

```bash
nslookup storage.googleapis.com
nslookup graph.microsoft.com
nslookup api.dropboxapi.com
```

如果在連接 VPN 時這些指令失敗或回傳非預期的 IP,問題就出在 DNS。

**使用特定的 DNS 伺服器：**

部分 VPN 用戶端允許您設定 DNS 設定。請確保您的 VPN 使用的 DNS 伺服器能夠解析公開的雲端服務供應商網域。如果您的 VPN 強制使用無法解析外部網域的內部 DNS 伺服器,請要求您的 IT 團隊為雲端服務供應商網域新增 DNS 轉發規則。

**手動覆寫 DNS(暫時性)：**

將雲端服務供應商端點新增至 hosts 檔案,作為暫時性的權宜之計：

- Windows：`C:\Windows\System32\drivers\etc\hosts`
- macOS/Linux：`/etc/hosts`

這種方式並不穩固,因為雲端服務供應商會輪替 IP 位址,但在等待正式 DNS 修復方案之前,可以暫時解除封鎖狀態。

進行變更後**清除 DNS 快取**：

```bash
# Windows
ipconfig /flushdns

# macOS
sudo dscacheutil -flushcache; sudo killall -HUP mDNSResponder

# Linux
sudo systemd-resolve --flush-caches
```

## 設定分割通道(Split Tunneling)

分割通道只將企業流量透過 VPN 路由,而讓雲端儲存流量直接連往網際網路。這樣可以讓雲端服務供應商的連線同時避開代理伺服器與 VPN,通常能一次解決所有問題。

### 如何設定

分割通道通常是在 VPN 用戶端或由您的 IT 部門進行設定。您需要請求將下列網域或 IP 範圍排除於 VPN 通道之外：

**Google 雲端硬碟 / Google Cloud：**
- `*.googleapis.com`
- `*.google.com`
- `accounts.google.com`

**Microsoft OneDrive / SharePoint / Azure：**
- `*.sharepoint.com`
- `*.onedrive.com`
- `graph.microsoft.com`
- `login.microsoftonline.com`
- `*.blob.core.windows.net`

**Amazon S3：**
- `*.amazonaws.com`
- `s3.*.amazonaws.com`

**Dropbox：**
- `*.dropbox.com`
- `*.dropboxapi.com`

**其他服務供應商：**請查閱該服務供應商的文件,以取得 API 端點網域。

如果您的 IT 部門無法設定分割通道,上述的代理伺服器與憑證修復方式將是您最佳的替代方案。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

## 繞過企業防火牆

企業防火牆可能會封鎖 rclone 所需的特定連接埠、協定或網域。以下是常見的防火牆相關問題：

### 被封鎖的連接埠

Rclone 對大多數雲端服務供應商使用 HTTPS(連接埠 443)。如果非瀏覽器流量的連接埠 443 遭到封鎖,rclone 連線就會逾時。請與您的 IT 部門確認是否已允許 rclone 程序的出站 HTTPS 流量。

### 被封鎖的網域

部分防火牆會封鎖對特定雲端儲存網域的存取。如果您的組織並未正式支援某個雲端服務供應商,其 API 端點可能被列入封鎖清單。您將看到逾時錯誤或連線遭拒的訊息。唯一的解決方法是請您的 IT 團隊將所需的網域新增至允許清單。

### 深度封包檢測(Deep Packet Inspection)

部分次世代防火牆會檢測超出憑證層級的 HTTPS 流量。它們可能會封鎖看起來不像標準瀏覽器流量的連線。Rclone 的 User-Agent 標頭會標識自身為 rclone,某些 DPI 規則可能因此將其標記。您可以設定自訂的 User-Agent：

```bash
rclone lsd remote: --user-agent "Mozilla/5.0"
```

這只是一種權宜之計,僅應在確認有必要且經過您的 IT 團隊核准後使用。

### 透過代理伺服器進行 OAuth 權杖更新

使用 OAuth 的雲端服務供應商(Google 雲端硬碟、OneDrive、Dropbox)會定期更新存取權杖。如果權杖更新端點被封鎖,或代理伺服器干擾了 OAuth 流程,即使您的認證資訊正確,仍會出現驗證錯誤。請確保下列 OAuth 端點可正常存取：

- `oauth2.googleapis.com`(Google)
- `login.microsoftonline.com`(Microsoft)
- `api.dropbox.com/oauth2/token`(Dropbox)

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a sync job in RcloneView" class="img-large img-center" />

## 疑難排解連線逾時

當連線在代理伺服器或 VPN 環境下逾時,可依照以下步驟縮小問題範圍：

1. **測試基本連線能力：**
   ```bash
   curl -v https://storage.googleapis.com
   ```
   如果 curl 可以正常運作但 rclone 無法,問題很可能是 rclone 沒有讀取到代理伺服器環境變數。

2. **使用詳細日誌進行測試：**
   ```bash
   rclone lsd remote: -vv --dump headers --dump auth
   ```
   這會準確顯示 rclone 傳送與接收的內容。

3. **檢查是否有代理伺服器干擾：**
   ```bash
   rclone lsd remote: --no-check-certificate -vv
   ```
   如果這個指令可以運作,但一般指令無法運作,問題就出在 SSL 檢測。

4. **在沒有 VPN 的情況下進行測試**(如果可行),以確認問題是否與 VPN 有關。

5. **針對速度較慢的代理伺服器連線,提高逾時時間：**
   ```bash
   rclone lsd remote: --timeout 60s --contimeout 30s
   ```

6. 在**工作記錄**中**檢查 RcloneView 日誌**,以取得詳細的錯誤訊息。

## 在 RcloneView 中持久化設定

一旦您找到正確的代理伺服器設定、憑證路徑與旗標組合,請將其儲存下來,以免日後需要重新摸索：

- **環境變數**——在您的系統設定檔中設定 `HTTP_PROXY`、`HTTPS_PROXY` 與 `RCLONE_CA_CERT`,使其套用於所有 rclone 操作。
- **工作中的自訂旗標**——在 RcloneView 的工作設定中,將 `--ca-cert`、`--timeout` 或 `--contimeout` 等旗標新增為自訂參數。
- **各別遠端設定**——部分設定可直接新增至 `rclone.conf` 中的遠端設定。

## 開始使用

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 如果您的網路需要代理伺服器,請**設定代理伺服器環境變數**。
3. 如果環境中使用了 SSL 檢測,請**安裝您的企業 CA 憑證**。
4. 在設定同步工作之前,先使用簡單的 `rclone lsd remote:` 指令**測試連線能力**。
5. 將可正常運作的設定**儲存為 RcloneView 工作**,以確保同步作業能夠一致且可重複執行。

網路限制不必然會妨礙您有效管理雲端儲存。只要有正確的代理伺服器設定與憑證配置,即使在管制最嚴格的企業環境中,RcloneView 依然能穩定運作。

---

**相關指南：**

- [新增遠端儲存空間](https://rcloneview.com/support/howto/#step-2-adding-remote-storage-google-drive-example)
- [新增 OAuth 線上登入](https://rcloneview.com/support/howto/remote-storage-connection-settings/add-oath-online-login)
- [執行與管理工作](https://rcloneview.com/support/howto/rcloneview-basic/execute-manage-job)

<CloudSupportGrid />
