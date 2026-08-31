---
slug: rcloneview-garuda-linux-cloud-sync
title: "在 Garuda Linux 上使用 RcloneView — 雲端儲存同步與備份"
authors:
  - steve
description: "在 Garuda Linux 上執行 RcloneView,透過完整的桌面 GUI 掛載、同步與備份 90+ 雲端服務供應商,不需要 AUR 套件。"
keywords:
  - rcloneview garuda linux
  - garuda linux 雲端同步
  - garuda linux 雲端儲存
  - install rcloneview arch based linux
  - garuda linux 備份
  - 雲端儲存 garuda
  - rcloneview appimage garuda
  - garuda linux 檔案同步
tags:
  - RcloneView
  - linux
  - cloud-sync
  - installation
  - platform
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 Garuda Linux 上使用 RcloneView — 雲端儲存同步與備份

> Garuda Linux 經過效能調校的桌面環境與 RcloneView 輕量的 Flutter GUI 相得益彰,讓您不必碰觸終端機就能管理雲端儲存。

Garuda Linux 是為那些想要基於 Arch 的系統、又不想花一整個週末去設定它的人所打造的 — 預先調校的桌面、明智的預設值,專注於讓您快速開始工作。RcloneView 在雲端儲存方面秉持相同的理念:這是一款原生桌面應用程式,可在一個視窗中掛載、同步與備份 90+ 雲端供應商,不需要手動編寫 rclone 指令腳本。由於 Garuda 開箱即用地提供完整的圖形化桌面,RcloneView 便能依照設計方式執行 — 不需要任何無頭(headless)變通方案。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 在 Garuda Linux 上安裝 RcloneView

RcloneView 僅透過 [rcloneview.com](https://rcloneview.com/src/download.html) 發佈 — 沒有可以用 `pacman` 或 AUR 輔助工具取得的 AUR 套件。下載 `.AppImage` 版本可取得可攜、免安裝的選項,或者若您希望它註冊在系統的套件資料庫中,可以取得 `.rpm` 套件。x86_64 與 aarch64 版本皆可使用,可依照您 Garuda 系統執行的硬體選擇。

RcloneView 使用 Flutter 與 Dart 建構,而非 Qt 或 Electron,因此不需要引入另一個工具套件的相依鏈。它依賴 GTK+3 與一個系統匣指示器函式庫(libayatana-appindicator3-1 或 libappindicator3-1)來顯示系統匣圖示,這兩者在 Garuda 的 KDE、GNOME 及其他桌面版本上皆為標準配置。若要將雲端儲存掛載為本機磁碟機,請確認已安裝 `fuse3`。

<img src="/support/images/en/blog/new-remote.png" alt="Garuda Linux 上的 RcloneView 遠端設定畫面" class="img-large img-center" />

## 設定掛載與遠端

Garuda 的桌面版本執行 X11 或 Wayland,RcloneView 的掛載功能兩者皆支援。透過 Remote 分頁新增遠端,對於 Google Drive 或 Dropbox 等供應商可透過 OAuth 進行驗證,對於 S3 相容或以協定為基礎的儲存則可直接輸入憑證。使用 nfsmount(RcloneView 在 Linux 上的預設掛載類型)將該遠端掛載為本機路徑,並透過 Garuda 的原生檔案總管瀏覽雲端檔案,就如同它們存在於磁碟上一樣。

快取模式預設為「writes」,在回應速度與記憶體使用之間取得平衡 — 如果您要掛載一個包含大量大型檔案的遠端,並希望更精細地控制本機快取,這個設定值得留意。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-mount-manager.png" alt="在 Linux 上透過 RcloneView 的工作管理員掛載雲端遠端" class="img-large img-center" />

## 自動化備份與同步作業

連接好遠端之後,工作管理員會處理重複性的工作:將本機資料夾備份到雲端儲存、在兩個供應商之間同步,或將一個來源同時鏡像到多個目的地。設定篩選器以略過不需要的檔案類型,並先執行 Dry Run 來預覽作業將會變更的內容。

工作歷史記錄會記錄每一次執行 — 開始時間、耗時、傳輸速度與檔案數量 — 因此排程備份會留下一份稽核記錄,您不必翻查日誌檔即可查看。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="在 RcloneView 中排程雲端同步作業" class="img-large img-center" />

## 開始使用

1. **下載 AppImage 或 .rpm** 前往 [rcloneview.com](https://rcloneview.com/src/download.html) — 沒有 AUR 套件,請直接安裝。
2. **確認 fuse3 與 GTK+3** 已安裝在您的系統上,以支援掛載與系統匣功能。
3. **新增您的第一個雲端遠端** 透過 Remote 分頁新增並掛載,或設定同步作業。
4. **儲存重複性作業** 在工作管理員中,讓備份每次都以相同方式執行。

Garuda 開箱即用的桌面與 RcloneView 的原生 GUI 是絕佳的組合 — 下載一次,連接您的雲端服務,不必離開 Garuda 所打造的圖形環境即可管理一切。

---

**相關指南:**

- [在 Arch Linux 上安裝 RcloneView — 雲端同步與備份指南](https://rcloneview.com/support/blog/rcloneview-arch-linux-cloud-sync)
- [在 Manjaro Linux 上使用 RcloneView — 雲端儲存同步](https://rcloneview.com/support/blog/rcloneview-manjaro-linux-cloud-sync)
- [在 Fedora 與 RHEL 上安裝 RcloneView — 雲端同步指南](https://rcloneview.com/support/blog/rcloneview-fedora-rhel-linux-cloud-sync)

<CloudSupportGrid />
