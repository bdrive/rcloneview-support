---
slug: rcloneview-nixos-linux-cloud-sync
title: "在 NixOS 上執行 RcloneView 進行雲端同步與備份"
authors:
  - tayson
description: "在 NixOS 上安裝並執行 RcloneView 以進行雲端同步與備份的逐步指南，內容涵蓋 AppImage 設定、FUSE 掛載，以及 NixOS 專屬的設定技巧。"
keywords:
  - rcloneview
  - nixos cloud sync
  - rclone nixos
  - nixos appimage
  - nixos cloud backup
  - nixos fuse mount
  - nix package manager rclone
  - nixos cloud storage
  - appimage-run nixos
  - declarative cloud sync
tags:
  - RcloneView
  - linux
  - platform
  - cloud-sync
  - guide
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 NixOS 上執行 RcloneView 進行雲端同步與備份

> NixOS 提供了一種獨特的宣告式系統設定方式，但要執行第三方 GUI 應用程式則需要多做幾個步驟。只要設定好 AppImage 支援與 FUSE，**RcloneView** 就能在 NixOS 上順暢運作，讓你在 Linux 最具重現性的發行版之一上，擁有強大的視覺化雲端管理工具。

NixOS 是一套建構於 Nix 套件管理器與完全宣告式設定模型之上的 Linux 發行版。你不需要以命令式的方式逐一安裝套件，而是在設定檔中定義整個系統狀態，然後重建系統。這種方式讓系統具備可重現性、易於回滾，非常適合想要完全掌控自己環境的開發者與進階使用者。

不過，由於 NixOS 非傳統的檔案系統結構（沒有 `/lib`、沒有 `/usr/lib`、也沒有傳統的 FHS），標準的 Linux 執行檔（包括 AppImage）無法直接執行。RcloneView 是以 AppImage 形式發佈的 Linux 版本，因此在啟動前，你需要先在 NixOS 上啟用 AppImage 相容性。

本指南將帶你完成整個流程：安裝 rclone、啟用 AppImage 支援、執行 RcloneView、設定用於雲端掛載的 FUSE，並將自動同步設定為 systemd 服務。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## NixOS 概觀，以及它對雲端儲存的重要性

NixOS 將系統設定視為程式碼。你的 `/etc/nixos/configuration.nix` 檔案定義了每個已安裝的套件、已啟用的服務,以及系統設定。當你執行 `nixos-rebuild switch` 時，系統會以原子化的方式轉換到新狀態。如果出了問題，你可以在幾秒內回滾到先前的世代。

對於雲端儲存的工作流程而言，這代表你可以將整個同步與備份設定進行版本控管。你的 rclone 安裝、FUSE 設定與 systemd 服務全都定義在同一個檔案中，可以在任何一台 NixOS 機器上重現。

## 透過 Nixpkgs 安裝 Rclone

Rclone 已收錄在官方的 Nixpkgs 套件庫中。將它加入你的系統設定：

```nix
# /etc/nixos/configuration.nix
environment.systemPackages = with pkgs; [
  rclone
];
```

接著重建你的系統：

```bash
sudo nixos-rebuild switch
```

執行 `rclone version` 以驗證安裝結果。這樣你就有了 RcloneView GUI 所管理的 rclone 後端。

## 在 NixOS 上執行 RcloneView AppImage

AppImage 會將所有相依項目打包成單一執行檔，但它們仰賴 NixOS 並未提供的 FHS 路徑。NixOS 提供兩種主要解決方案：`appimage-run` 與 `nix-ld`。

### 方案 A：使用 appimage-run

將 `appimage-run` 加入你的系統套件：

```nix
environment.systemPackages = with pkgs; [
  rclone
  appimage-run
];
```

重建完成後，從 [rcloneview.com](https://rcloneview.com/src/download.html) 下載 RcloneView AppImage，賦予其可執行權限，然後啟動它：

```bash
chmod +x RcloneView-*.AppImage
appimage-run RcloneView-*.AppImage
```

### 方案 B：使用 nix-ld

`nix-ld` 模組提供了一個相容性墊片，讓標準 Linux 執行檔能夠找到其動態函式庫。在設定中啟用它：

```nix
programs.nix-ld.enable = true;
```

重建完成後，AppImage 應該可以直接執行，不再需要 `appimage-run` 包裝器：

```bash
chmod +x RcloneView-*.AppImage
./RcloneView-*.AppImage
```

兩種方式皆可行。若追求簡便可選擇 `appimage-run`，若你經常執行許多第三方執行檔，則可選擇 `nix-ld`。

## 為雲端掛載設定 FUSE

RcloneView 可以將雲端儲存掛載為本機目錄，但這需要 FUSE（Filesystem in Userspace）。在 NixOS 上，於設定中啟用 FUSE：

```nix
# Enable FUSE
environment.systemPackages = with pkgs; [
  fuse
  fuse3
];

# Allow regular users to mount FUSE filesystems
programs.fuse.userAllowOther = true;
```

重建系統並確認 `/dev/fuse` 已存在。現在你就能使用 RcloneView 的掛載功能，將雲端儲存當作本機資料夾來存取。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />

## 在 RcloneView 中設定雲端遠端

啟動 RcloneView，並使用遠端設定精靈來加入你的雲端服務供應商。此流程與其他任何 Linux 發行版相同：

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

RcloneView 支援 Google Drive、OneDrive、Dropbox、AWS S3、Wasabi、Backblaze B2、Cloudflare R2 等數十種服務。此 GUI 會引導你完成每個供應商的驗證流程，包括會在瀏覽器中開啟的 OAuth 流程。

你的 rclone 設定預設會儲存在 `~/.config/rclone/rclone.conf`。在 NixOS 上，由於此路徑位於你的家目錄中、不在 Nix store 內，因此可以正常運作。

## 建立同步工作並排程傳輸

設定好遠端之後，使用 RcloneView 的雙窗格瀏覽器來瀏覽你的雲端儲存並建立同步工作。在窗格之間拖曳檔案即可啟動傳輸，或使用工作排程器設定週期性工作。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

對於偏好與系統宣告式模型整合的 NixOS 使用者，你也可以定義一個以計時器觸發 rclone sync 指令的 systemd 服務，作為 RcloneView 內建排程器的補充。

## 為自動同步設定 Systemd 服務

NixOS 讓你能夠以宣告式方式輕鬆定義自訂的 systemd 服務。在你的設定中加入一個以計時器觸發的同步服務：

```nix
systemd.user.services.rclone-backup = {
  description = "Rclone cloud backup";
  serviceConfig = {
    ExecStart = "${pkgs.rclone}/bin/rclone sync /home/user/documents remote:backup/documents";
    Type = "oneshot";
  };
};

systemd.user.timers.rclone-backup = {
  description = "Run rclone backup daily";
  timerConfig = {
    OnCalendar = "daily";
    Persistent = true;
  };
  wantedBy = [ "timers.target" ];
};
```

這與 RcloneView 的 GUI 排程器可以並存使用。無頭伺服器（headless server）建議使用 systemd 方式，互動式工作站則可使用 RcloneView 的排程器。

## NixOS 專屬技巧

**固定你的 rclone 版本。** NixOS 讓你能夠透過 overlay 或 flake 輕鬆固定套件版本。如果新版的 rclone 引入了破壞性變更，你可以停留在已知穩定的版本，直到準備好再進行升級。

**使用 Home Manager 管理使用者層級的設定。** 如果你使用 Home Manager，就能以宣告式方式在使用者環境中管理你的 rclone 設定檔、AppImage 桌面項目與自動啟動設定。

**為應用程式啟動器建立桌面項目。** 建立一個 `.desktop` 檔案，讓 RcloneView 出現在你的應用程式選單中：

```nix
xdg.desktopEntries.rcloneview = {
  name = "RcloneView";
  exec = "appimage-run /home/user/Applications/RcloneView.AppImage";
  icon = "rcloneview";
  type = "Application";
  categories = [ "Utility" "FileManager" ];
};
```

**回滾安全性。** 由於 NixOS 支援原子化回滾，你可以放心地試驗 rclone 設定。如果某個同步工作設定錯誤，只需回滾你的 NixOS 世代，系統就會恢復到先前的狀態。

## 快速上手

1. 從 [rcloneview.com](https://rcloneview.com/src/download.html) **下載 RcloneView**。
2. 將 `rclone`、`appimage-run` 與 `fuse3` 加入你的 NixOS 設定並重建系統。
3. 使用 `appimage-run` 啟動 RcloneView，加入你的雲端遠端，然後開始同步。
4. 你也可以選擇在 NixOS 設定中定義一個 systemd 計時器，以實現完全宣告式的自動化備份。

NixOS 與 RcloneView 兩者結合，能為你帶來可重現、可版本控管的雲端儲存工作流程，並可在任何機器上複製使用。

---

**相關指南：**

- [瀏覽與管理遠端儲存](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [將雲端儲存掛載為本機磁碟機](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [新增 AWS S3 及相容 S3 服務](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)

<CloudSupportGrid />
