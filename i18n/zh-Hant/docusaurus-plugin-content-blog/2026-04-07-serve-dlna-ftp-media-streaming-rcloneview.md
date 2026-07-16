---
slug: serve-dlna-ftp-media-streaming-rcloneview
title: "透過 RcloneView 以 DLNA 與 FTP 伺服器串流雲端媒體"
authors: [tayson]
description: "使用 rclone serve 與 RcloneView 設定 DLNA 媒體串流與 FTP 伺服器存取您的雲端儲存,讓任何裝置都能順暢播放媒體。"
keywords:
  - rclone dlna server
  - cloud storage media streaming
  - rclone ftp server
  - stream google drive dlna
  - cloud media server
  - rclone serve dlna
  - rcloneview media streaming
  - ftp cloud storage
  - smart tv cloud streaming
  - rclone media player
tags: [feature, media, tips, automation, mount]
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 透過 RcloneView 以 DLNA 與 FTP 伺服器串流雲端媒體

> 透過 rclone serve 將內容直接串流到智慧電視、媒體播放器與 FTP 用戶端,把您的雲端儲存變成個人媒體伺服器。

您的雲端儲存中存放著數 TB 的相片、影片與音樂,但要在客廳電視上存取這些內容,或透過傳統檔案傳輸工具存取,往往令人感到迂迴又麻煩。Rclone 的 `serve` 指令能解決這個問題,它可將任何雲端遠端公開為 DLNA 媒體伺服器、FTP 伺服器、HTTP 伺服器或 WebDAV 端點。搭配 RcloneView 直覺的介面來管理遠端與監控連線,您可以在幾分鐘內建立一個功能完整、以雲端為後盾的媒體伺服器。本指南涵蓋針對智慧電視與媒體播放器的 DLNA 串流、為舊式用戶端存取設定 FTP 伺服器、順暢播放的效能調校,以及多使用者環境的存取控制。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Rclone Serve 的運作方式

Rclone 的 `serve` 指令會建立一個本機伺服器,將標準協定(DLNA、FTP、HTTP、WebDAV)的請求轉換為雲端儲存 API 呼叫。當智慧電視透過 DLNA 請求一段影片時,rclone 會從您的雲端服務供應商擷取檔案,並即時串流播放。用戶端裝置完全不會察覺自己正在存取雲端儲存——它只會看到一個標準的媒體伺服器或檔案伺服器。

**可用的 serve 協定:**

| 協定 | 使用情境 | 典型用戶端 |
|----------|----------|----------------|
| DLNA | 向電視與播放器串流媒體 | 智慧電視、VLC、Kodi、Xbox、PlayStation |
| FTP | 供舊式應用程式進行檔案傳輸 | FileZilla、WinSCP、命令列 FTP 用戶端 |
| HTTP | 以瀏覽器存取檔案 | 任何網頁瀏覽器 |
| WebDAV | 可掛載的網路磁碟機 | Windows 檔案總管、macOS Finder、Linux 檔案管理員 |
| SFTP | 安全檔案傳輸 | SSH 用戶端、支援 SFTP 的應用程式 |

**架構概覽:**

資料流程相當直觀:

1. 用戶端裝置在您的本機網路上探索或連線到 rclone serve 執行個體。
2. 用戶端請求檔案清單或特定檔案。
3. Rclone 將請求轉換為雲端儲存 API 呼叫。
4. 資料從雲端服務供應商透過 rclone 串流至用戶端。
5. 可選的 VFS 快取會將常用的資料儲存於本機,以加快重複存取的速度。

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

這種架構意味著您的媒體庫可以完全存放於雲端,同時仍可透過標準協定,讓網路上的任何裝置存取。

## 設定 DLNA 媒體串流

DLNA(Digital Living Network Alliance)是家庭網路媒體串流的通用標準。幾乎每一台智慧電視、遊戲主機與媒體播放器都支援 DLNA 探索與播放。

**啟動基本的 DLNA 伺服器:**

透過 RcloneView 內建的終端機,啟動一個指向您雲端媒體庫的 DLNA 伺服器:

```bash
rclone serve dlna gdrive:/Media
```

這會立即建立一個在本機網路上廣播自身的 DLNA 伺服器。同一網路上任何支援 DLNA 的裝置都會自動發現它。

**自訂 DLNA 伺服器:**

```bash
rclone serve dlna gdrive:/Media \
  --name "Cloud Media Server" \
  --addr :7879 \
  --log-level INFO \
  --vfs-cache-mode full \
  --vfs-cache-max-size 10G \
  --vfs-read-ahead 128M
```

**主要的 DLNA 旗標:**

| 旗標 | 用途 | 建議值 |
|------|---------|-------------------|
| `--name` | 用戶端可見的伺服器名稱 | 如 "Cloud Movies" 之類的描述性名稱 |
| `--addr` | 監聽位址與連接埠 | `:7879`(預設值) |
| `--vfs-cache-mode` | 快取策略 | 若要順暢串流,使用 `full` |
| `--vfs-cache-max-size` | 本機快取的最大容量 | 依磁碟空間而定,建議 5-20 GB |
| `--vfs-read-ahead` | 資料預先讀取緩衝區 | 影片串流建議 128M-256M |
| `--vfs-cache-max-age` | 快取檔案保留的時間長度 | 媒體庫建議 `24h` |

**從智慧電視連線:**

1. 使用上方指令啟動 DLNA 伺服器。
2. 在您的智慧電視上,開啟媒體播放器或 DLNA 瀏覽器(確切名稱依廠牌而異——三星使用「SmartThings」、LG 使用「Media Player」、Sony 使用「Media Player」)。
3. 尋找您所指定的伺服器名稱(例如 "Cloud Media Server")。
4. 瀏覽資料夾並選取要播放的媒體。

**從 VLC 連線:**

1. 開啟 VLC 媒體播放器。
2. 前往 View > Playlist > Local Network > Universal Plug'n'Play。
3. 您的 rclone DLNA 伺服器會出現在清單中。
4. 瀏覽並直接播放媒體。

**從 S3 相容儲存服務中提供媒體:**

S3 及類似的物件儲存服務供應商,由於每 GB 成本較低,非常適合作為媒體庫:

```bash
# Serve from Wasabi (S3-compatible, no egress fees)
rclone serve dlna wasabi:media-bucket \
  --name "Wasabi Media" \
  --vfs-cache-mode full \
  --vfs-cache-max-size 20G
```

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />

## 設定 FTP 伺服器

FTP 至今仍廣泛用於檔案傳輸,尤其是舊式應用程式、網路連接裝置與自動化工作流程。Rclone 可以將任何雲端遠端公開為功能完整的 FTP 伺服器。

**啟動基本的 FTP 伺服器:**

```bash
rclone serve ftp gdrive: --addr :2121 --user ftpuser --pass ftppassword
```

這會在連接埠 2121 上建立一個 FTP 伺服器,提供對您整個 Google Drive 的存取。

**進階 FTP 設定:**

```bash
rclone serve ftp s3:my-bucket \
  --addr :2121 \
  --user admin \
  --pass secure-password \
  --passive-port 30000-30100 \
  --vfs-cache-mode writes \
  --vfs-cache-max-size 5G \
  --dir-cache-time 5m \
  --log-level INFO
```

**主要的 FTP 旗標:**

| 旗標 | 用途 |
|------|---------|
| `--addr` | 監聽位址與連接埠 |
| `--user` / `--pass` | FTP 驗證憑證 |
| `--passive-port` | 被動模式連線的連接埠範圍 |
| `--vfs-cache-mode` | `writes` 支援上傳、`full` 支援讀寫快取 |
| `--dir-cache-time` | 目錄清單的快取保留時間 |
| `--read-only` | 防止上傳與修改 |

**從 FileZilla 或其他 FTP 用戶端連線:**

1. 開啟您的 FTP 用戶端。
2. 輸入主機(執行 rclone 的機器 IP)、連接埠(2121)、使用者名稱與密碼。
3. 連線並瀏覽您的雲端儲存,操作方式如同傳統的 FTP 伺服器一樣。

**FTP 服務的使用情境:**

- **舊式應用程式整合:** 只支援 FTP 的舊式應用程式,現在也能存取雲端儲存。
- **網路掃描器上傳:** 設定文件掃描器,將掃描檔案直接透過 FTP 傳送到雲端儲存。
- **自動化檔案投遞:** 建立一個唯寫的 FTP 端點,用於接收外部單位傳來的檔案。
- **跨平台存取:** FTP 可在每種作業系統上運作,無需安裝額外軟體。

## 串流效能調校

順暢的媒體串流需要仔細調校 rclone 的 VFS(Virtual File System)快取與網路設定。

**了解 VFS 快取模式:**

| 模式 | 行為 | 最適合的情境 |
|------|------|----------|
| `off` | 不快取,直接串流 | 小型檔案、高頻寬連線 |
| `minimal` | 僅快取已開啟的檔案 | 輕度媒體瀏覽 |
| `writes` | 寫入本機快取、讀取則串流 | 上傳頻繁的 FTP 用途 |
| `full` | 完整讀寫快取 | 影片串流、媒體播放 |

對於媒體串流而言,`full` 快取模式幾乎永遠是最佳選擇。它可確保影片播放不會因網路延遲或 API 節流而卡頓。

**針對影片串流進行最佳化:**

```bash
rclone serve dlna gdrive:/Movies \
  --vfs-cache-mode full \
  --vfs-cache-max-size 20G \
  --vfs-read-ahead 256M \
  --vfs-cache-max-age 72h \
  --buffer-size 64M \
  --vfs-read-chunk-size 32M \
  --vfs-read-chunk-size-limit 256M
```

主要參數說明:
- **`--vfs-read-ahead 256M`**:預先讀取目前播放位置之後的 256 MB 資料,避免播放時發生緩衝停頓。
- **`--vfs-read-chunk-size 32M`**:讀取的初始區塊大小。從 32 MB 開始,並逐次加倍,直到達到上限。
- **`--vfs-read-chunk-size-limit 256M`**:區塊大小的上限。較大的區塊代表較少的 API 呼叫,但初始延遲較高。
- **`--buffer-size 64M`**:每個開啟檔案的記憶體內緩衝區。

**頻寬考量:**

影片串流的頻寬需求會依畫質不同而有顯著差異:

| 影片畫質 | 位元速率 | 建議最低連線速度 |
|--------------|---------|-------------------|
| 720p | 3-5 Mbps | 建議 10 Mbps |
| 1080p | 8-12 Mbps | 建議 25 Mbps |
| 4K | 25-40 Mbps | 建議 50 Mbps |

若您的網際網路連線或雲端服務供應商的出站頻寬無法維持這些速率,可考慮在上傳前將媒體轉碼為較低位元速率,或改用出站速度較快的服務供應商,例如 Wasabi 或搭載 CDN 的 S3 儲存桶。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />

**監控串流效能:**

使用 RcloneView 的傳輸監控功能觀察即時傳輸量,並找出瓶頸所在。若您發現頻繁停頓後接著爆量傳輸,請提高預先讀取緩衝區。若傳輸速度持續偏慢,瓶頸很可能來自您的網際網路連線,或雲端服務供應商的傳輸速率限制。

## 存取控制與多使用者設定

在共享環境中,您需要控管誰能存取哪些內容。

**FTP 多使用者設定:**

Rclone 的 FTP 伺服器直接支援單一使用者/密碼組合。若要建立多使用者環境,可在不同連接埠上執行多個 serve 執行個體:

```bash
# Family media - read only
rclone serve ftp gdrive:/Media/Family \
  --addr :2121 --user family --pass familypass --read-only &

# Admin access - full control
rclone serve ftp gdrive: \
  --addr :2122 --user admin --pass adminpass &
```

**唯讀存取:**

對媒體伺服器而言,唯讀存取通常是較合適的做法:

```bash
rclone serve dlna gdrive:/Media --read-only
rclone serve ftp gdrive:/Media --read-only --user viewer --pass viewerpass
```

**限制為特定目錄:**

僅提供特定子目錄的服務,以限縮暴露範圍:

```bash
# Only serve the Movies folder, not the entire drive
rclone serve dlna gdrive:/Media/Movies --name "Movies"

# Serve a specific S3 prefix
rclone serve ftp s3:media-bucket/public --user public --pass publicpass
```

**網路層級的限制:**

繫結至特定網路介面以控管網路存取:

```bash
# Only accessible from local machine
rclone serve dlna gdrive:/Media --addr 127.0.0.1:7879

# Only accessible from local network
rclone serve ftp gdrive: --addr 192.168.1.100:2121 --user admin --pass adminpass
```

## 以常駐服務方式執行

若要建立全天候運作的媒體伺服器,可設定 rclone serve 自動啟動。

**Linux systemd 服務:**

```bash
sudo cat > /etc/systemd/system/rclone-dlna.service << 'EOF'
[Unit]
Description=Rclone DLNA Media Server
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=rclone
ExecStart=/usr/bin/rclone serve dlna gdrive:/Media \
  --name "Cloud Media" \
  --vfs-cache-mode full \
  --vfs-cache-max-size 20G \
  --vfs-read-ahead 256M \
  --log-file /var/log/rclone-dlna.log \
  --log-level INFO
Restart=on-failure
RestartSec=10

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl enable rclone-dlna
sudo systemctl start rclone-dlna
```

**Windows 服務設定:**

在 Windows 上,可使用 NSSM(Non-Sucking Service Manager)或工作排程器,在開機時執行 rclone serve 指令:

```powershell
# Using Task Scheduler (run at login)
schtasks /create /tn "Rclone DLNA" /tr "rclone serve dlna gdrive:/Media --name CloudMedia --vfs-cache-mode full" /sc onlogon
```

**同時執行多個伺服器:**

您可以同時執行 DLNA 與 FTP 伺服器,以獲得最大的相容性:

```bash
# DLNA for smart TVs and media players
rclone serve dlna gdrive:/Media --name "Cloud Media" &

# FTP for file manager access
rclone serve ftp gdrive: --addr :2121 --user admin --pass adminpass &

# HTTP for browser access
rclone serve http gdrive:/Media --addr :8080 --read-only &
```

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Configure a mount from Mount Manager" class="img-large img-center" />

## Serve 與 Mount 的比較

`rclone serve` 與 `rclone mount` 都能讓雲端儲存在本機被存取,但兩者的用途不同。

| 功能 | Serve(DLNA/FTP) | Mount |
|---------|------------------|-------|
| 協定 | DLNA、FTP、HTTP、WebDAV | FUSE/WinFSP 檔案系統 |
| 用戶端相容性 | 任何支援該協定的用戶端 | 任何透過檔案系統存取的應用程式 |
| 網路存取 | 網路上的所有裝置皆可使用 | 預設僅限本機 |
| 設定複雜度 | 簡單指令,無需驅動程式 | 需要 FUSE(Linux/Mac)或 WinFSP(Windows) |
| 媒體播放器支援 | 原生 DLNA 探索 | 需要將播放器指向掛載路徑 |
| 多使用者同時使用 | 是,內建支援 | 受限於檔案系統共享機制 |

**何時使用 serve:**
- 向智慧電視、遊戲主機或連網播放器串流媒體
- 為舊式應用程式或裝置提供 FTP 存取
- 與網路上多位使用者共享雲端檔案
- 避免安裝 FUSE/WinFSP 驅動程式

**何時使用 mount:**
- 從預期使用本機路徑的桌面應用程式存取雲端檔案
- 直接在辦公軟體中編輯雲端檔案
- 執行需要操作本機檔案路徑的指令碼

在許多情況下,同時執行 serve 與 mount 能讓您兼得兩者的優點。

## 開始使用

Rclone serve 能將您的雲端儲存從被動的封存空間,轉變為主動的媒體伺服器與檔案共享平台。從一個指向您雲端媒體資料夾的簡單 DLNA 伺服器開始,並在您的智慧電視或 VLC 播放器上測試播放。確認串流穩定運作後,再加入 VFS 快取以獲得更順暢的播放體驗、設定 FTP 端點以擴大檔案存取範圍,並設定服務自動啟動。透過 RcloneView 管理您的遠端並監控連線,您就能擁有一個以雲端為後盾的完整媒體伺服器,除了您既有的雲端儲存訂閱費用之外,不需額外支出。

---

**相關指南:**
- [將雲端儲存掛載為本機磁碟機](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [瀏覽與管理遠端儲存](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [S3 遠端儲存連線設定](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)

<CloudSupportGrid />
