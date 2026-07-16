---
slug: rcloneview-nixos-linux-cloud-sync
title: "在 NixOS 上运行 RcloneView 实现云同步与备份"
authors:
  - tayson
description: "在 NixOS 上安装和运行 RcloneView 以实现云同步与备份的分步指南，包括 AppImage 设置、FUSE 挂载以及 NixOS 专属配置技巧。"
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
  - linux
  - platform
  - installation
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# 在 NixOS 上运行 RcloneView 实现云同步与备份

> NixOS 为系统配置提供了独特的声明式方法，但运行第三方 GUI 应用程序需要一些额外步骤。一旦设置好 AppImage 支持和 FUSE，**RcloneView** 便能在 NixOS 上顺畅运行，让你在这个 Linux 中可复现性最强的发行版之一上，获得强大的可视化云管理工具。

NixOS 是一个基于 Nix 包管理器和完全声明式配置模型构建的 Linux 发行版。你无需以命令式方式安装软件包，而是在配置文件中定义整个系统状态，然后重新构建。这种方法使系统具备可复现性、易于回滚，非常适合希望完全掌控自己环境的开发者和高级用户。

然而，NixOS 非传统的文件系统布局（没有 `/lib`、没有 `/usr/lib`、没有传统的 FHS）意味着标准 Linux 二进制文件（包括 AppImage）无法开箱即用。RcloneView 以 AppImage 形式发行 Linux 版本，因此在启动之前，你需要在 NixOS 上启用 AppImage 兼容性。

本指南将带你完成整个流程：安装 rclone、启用 AppImage 支持、运行 RcloneView、配置用于云挂载的 FUSE，以及将自动同步设置为 systemd 服务。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## NixOS 概览及其对云存储的意义

NixOS 将系统配置视为代码。你的 `/etc/nixos/configuration.nix` 文件定义了每一个已安装的软件包、启用的服务和系统设置。当你运行 `nixos-rebuild switch` 时，系统会原子性地切换到新状态。如果出现问题，你可以在几秒钟内回滚到之前的版本代（generation）。

对于云存储工作流而言，这意味着你可以对整个同步和备份设置进行版本控制。你的 rclone 安装、FUSE 配置和 systemd 服务全部定义在一个文件中，并可以在任何 NixOS 机器上复现。

## 通过 Nixpkgs 安装 Rclone

Rclone 可在官方 Nixpkgs 仓库中获取。将其添加到你的系统配置中：

```nix
# /etc/nixos/configuration.nix
environment.systemPackages = with pkgs; [
  rclone
];
```

然后重新构建你的系统：

```bash
sudo nixos-rebuild switch
```

运行 `rclone version` 来验证安装是否成功。这样你就获得了 RcloneView GUI 所管理的 rclone 后端。

## 在 NixOS 上运行 RcloneView AppImage

AppImage 将所有依赖打包进单一可执行文件，但它们依赖于 NixOS 未提供的 FHS 路径。NixOS 提供了两种主要解决方案：`appimage-run` 和 `nix-ld`。

### 方案 A：使用 appimage-run

将 `appimage-run` 添加到系统软件包中：

```nix
environment.systemPackages = with pkgs; [
  rclone
  appimage-run
];
```

重新构建后，从 [rcloneview.com](https://rcloneview.com/src/download.html) 下载 RcloneView AppImage，赋予其可执行权限，然后启动它：

```bash
chmod +x RcloneView-*.AppImage
appimage-run RcloneView-*.AppImage
```

### 方案 B：使用 nix-ld

`nix-ld` 模块提供了一个兼容性垫片（shim），使标准 Linux 二进制文件能够找到其动态库。在配置中启用它：

```nix
programs.nix-ld.enable = true;
```

重新构建后，该 AppImage 应可直接运行，无需 `appimage-run` 包装器：

```bash
chmod +x RcloneView-*.AppImage
./RcloneView-*.AppImage
```

两种方法都可行。追求简单可选择 `appimage-run`，如果你运行许多第三方二进制文件，则可选择 `nix-ld`。

## 为云挂载配置 FUSE

RcloneView 可以将云存储挂载为本地目录，但这需要 FUSE（用户空间文件系统）。在 NixOS 上，在配置中启用 FUSE：

```nix
# Enable FUSE
environment.systemPackages = with pkgs; [
  fuse
  fuse3
];

# Allow regular users to mount FUSE filesystems
programs.fuse.userAllowOther = true;
```

重新构建后，验证 `/dev/fuse` 是否存在。现在你可以使用 RcloneView 的挂载功能，将云存储当作本地文件夹来访问。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />

## 在 RcloneView 中配置云端远程

启动 RcloneView，使用远程配置向导添加你的云服务提供商。此过程与在任何其他 Linux 发行版上相同：

<img src="/support/images/en/blog/new-remote.png" alt="Open multiple cloud remotes in RcloneView" class="img-large img-center" />

RcloneView 支持 Google Drive、OneDrive、Dropbox、AWS S3、Wasabi、Backblaze B2、Cloudflare R2 以及数十种其他云服务。GUI 会引导你完成每个服务商的身份验证，包括在浏览器中打开的 OAuth 流程。

你的 rclone 配置默认存储在 `~/.config/rclone/rclone.conf`。在 NixOS 上，由于该路径位于你的主目录中，处于 Nix store 之外，因此可以正常工作。

## 创建同步任务与调度传输

配置好远程之后，使用 RcloneView 的双栏浏览器浏览你的云存储并创建同步任务。在两个面板之间拖拽文件即可启动传输，或使用任务调度器设置周期性任务。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="create job schedule" class="img-large img-center" />

对于希望与系统声明式模型集成的 NixOS 用户，你还可以定义一个基于定时器运行 rclone sync 命令的 systemd 服务，与 RcloneView 内置的调度器互为补充。

## 为自动同步设置 Systemd 服务

NixOS 使得以声明方式定义自定义 systemd 服务变得非常简单。在配置中添加一个基于定时器的同步服务：

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

这可以与 RcloneView 的 GUI 调度器配合使用。在无头（headless）服务器上使用 systemd 方案，在交互式工作站上使用 RcloneView 的调度器。

## NixOS 专属技巧

**锁定你的 rclone 版本。** NixOS 使得通过 overlay 或 flake 锁定软件包版本变得很容易。如果新版本的 rclone 引入了破坏性变更，你可以停留在已知可用的版本上，直到准备好升级为止。

**使用 Home Manager 管理用户级配置。** 如果你使用 Home Manager，可以在用户环境中以声明方式管理你的 rclone 配置文件、AppImage 桌面条目和自启动设置。

**为应用启动器添加桌面条目。** 创建一个 `.desktop` 文件，使 RcloneView 出现在你的应用程序菜单中：

```nix
xdg.desktopEntries.rcloneview = {
  name = "RcloneView";
  exec = "appimage-run /home/user/Applications/RcloneView.AppImage";
  icon = "rcloneview";
  type = "Application";
  categories = [ "Utility" "FileManager" ];
};
```

**回滚安全性。** 由于 NixOS 支持原子回滚，你可以放心地试验 rclone 配置。如果某个同步任务配置有误，回滚 NixOS 版本代，系统就会恢复到之前的状态。

## 快速上手

1. 从 [rcloneview.com](https://rcloneview.com/src/download.html) **下载 RcloneView**。
2. 将 `rclone`、`appimage-run` 和 `fuse3` 添加到你的 NixOS 配置中并重新构建。
3. 使用 `appimage-run` 启动 RcloneView，添加你的云端远程，然后开始同步。
4. 你还可以选择在 NixOS 配置中定义 systemd 定时器，以实现完全声明式的自动备份。

NixOS 与 RcloneView 结合，为你提供了可在任何机器上复现的、受版本控制的云存储工作流。

---

**相关指南：**

- [浏览和管理远程存储](https://rcloneview.com/support/howto/rcloneview-basic/browse-and-manage-remote-storage)
- [将云存储挂载为本地驱动器](https://rcloneview.com/support/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)
- [添加 AWS S3 及兼容 S3 的存储](https://rcloneview.com/support/howto/remote-storage-connection-settings/s3)

<CloudSupportGrid />
