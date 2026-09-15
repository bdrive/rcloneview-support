---
slug: rcloneview-kali-linux-cloud-sync
title: "在 Kali Linux 上使用 RcloneView — 雲端儲存同步與備份"
authors:
  - jay
description: "在 Kali Linux 上安裝 RcloneView,透過安全、可稽核的 GUI 工作流程掛載、同步並備份 90+ 雲端儲存服務。"
keywords:
  - RcloneView Kali Linux
  - cloud storage Kali Linux
  - install RcloneView Debian
  - cloud sync penetration testing
  - mount cloud drive Kali
  - rclone GUI Kali Linux
  - backup forensic evidence cloud
  - cloud backup security professionals
  - Kali Linux cloud storage GUI
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
  - security
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 Kali Linux 上使用 RcloneView — 雲端儲存同步與備份

> 在 Kali Linux 上執行圖形化的多雲端檔案管理器,不必碰指令列即可同步案件資料、鑑識映像檔與客戶交付成果。

Kali Linux 是一款基於 Debian、專為滲透測試與數位鑑識打造的發行版,在 Kali 上工作的資安團隊經常需要在本機儲存與雲端帳戶之間搬移大型證據集、封包擷取檔或客戶報告。RcloneView 為這套工作流程帶來圖形化檔案管理器,讓你可以在執行其他工具的同一部桌面上瀏覽、同步與掛載雲端儲存。由於 Kali 預設就內建包含 X11 的完整 Xfce 桌面,已符合 RcloneView 執行所需的顯示需求。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 Kali Linux 上安裝 RcloneView

由於 Kali 是以 Debian 為基礎建置,從 [rcloneview.com](https://rcloneview.com/src/download.html) 取得的官方 `.deb` 套件安裝方式與在 Debian 或 Ubuntu 上完全相同 —— 下載 `rclone_view-{version}-linux-{arch}.deb` 檔案,以 `dpkg -i` 安裝,並用 `apt --fix-broken install` 解決缺少的相依套件。Kali 直接提供 `x86_64` 建置版本,若你不想在系統層級安裝套件,`.AppImage` 格式是不錯的替代方案,因為它不需安裝即可直接執行。

RcloneView 是以 Flutter 打造的 GUI 應用程式,而非命令列工具,因此需要 Kali 預設執行的圖形化 Xfce/X11 工作階段 —— 若沒有 X11 轉發或遠端桌面工作階段,在無頭 SSH 連線下無法啟動。它也依賴 GTK+3 與一套 AppIndicator 程式庫來顯示系統匣圖示,這兩者在標準的 Kali 桌面安裝中皆已具備。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new cloud remote in RcloneView on Kali Linux" class="img-large img-center" />

## 為案件資料連接雲端儲存

安裝完成後,透過 Remote 分頁中的 New Remote 精靈新增遠端。Amazon S3、Cloudflare R2 與 Backblaze B2 透過存取金鑰與密鑰憑證輸入方式,非常適合儲存大型鑑識磁碟映像檔與封包擷取檔,而 Google Drive、OneDrive 或 Box 則透過 OAuth 瀏覽器登入處理面向客戶的報告交付。RcloneView 的同步與 Folder Compare(資料夾比對)功能在 FREE 授權下即可使用,因此你無需升級即可將擷取的證據推送至雲端儲存,並確認其完整無損地送達。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Transferring files between cloud remotes in RcloneView on Kali" class="img-large img-center" />

## 同步與驗證證據備份

在監管鏈(chain-of-custody)工作流程中,請在執行任何同步工作前先執行 Dry Run,精確預覽將被複製或刪除的檔案,接著使用 Folder Compare 驗證來源與目的地是否一致。比對畫面會依大小差異標示檔案,並並排顯示相同檔案的比對結果,這在你需要確認鑑識映像檔傳輸過程未受損時相當實用。在同步工作的 Advanced Settings 步驟中啟用校驗碼比對,可取得比僅比對大小更強的完整性驗證。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder compare results view in RcloneView" class="img-large img-center" />

## 案件執行期間掛載雲端儲存

你也可以使用 Mount Manager 將雲端遠端掛載為本機磁碟機,在 Linux 上是透過 FUSE 與 `nfsmount` 方式運作 —— 請確認已安裝 `fuse3`。如此一來,你就能直接在其他 Kali 工具中開啟雲端上的案件檔案,而不必先手動下載,並提供唯讀掛載選項,以避免對共用證據的意外寫入。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="Mounting a cloud remote from the Mount Manager in RcloneView" class="img-large img-center" />

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView** —— 取得適用於 `x86_64` 的 `.deb` 或 `.AppImage` 建置版本。
2. 以 `dpkg -i` 安裝(或將 AppImage 設為可執行後直接執行)。
3. 依服務供應商類型,使用 OAuth 登入或憑證輸入方式,透過 New Remote 精靈新增你的雲端遠端。
4. 執行 Dry Run,接著執行實際的同步工作,並以 Folder Compare 驗證結果。

有了可以在每次傳輸前用肉眼確認的 GUI 工具,在本機磁碟與雲端儲存之間整理證據與客戶交付成果,將大幅降低出錯的可能性。

---

**相關指南:**

- [在 Ubuntu / Debian Linux 上安裝 RcloneView](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [在 Debian Linux 上使用 RcloneView — 雲端儲存同步與備份](https://rcloneview.com/support/blog/rcloneview-debian-linux-cloud-sync)
- [使用 RcloneView 為資安公司提供雲端儲存](https://rcloneview.com/support/blog/cloud-storage-cybersecurity-companies-rcloneview)

<CloudSupportGrid />
