---
slug: rcloneview-wsl-windows-subsystem-linux
title: "WSLでRcloneViewを実行 — Windows Subsystem for Linuxからのクラウド同期"
authors:
  - tayson
description: "WSLはWindows上にLinux環境を提供します。Windowsのワークフローを維持しながら、Linuxネイティブのクラウド同期パフォーマンスを得るためにWSL内でRcloneViewを実行しましょう。"
keywords:
  - rcloneview wsl
  - wsl cloud sync
  - windows subsystem linux cloud
  - rclone wsl
  - wsl file sync
  - wsl cloud backup
  - wsl rcloneview setup
  - linux on windows cloud
  - wsl2 cloud storage
  - wsl file management
tags:
  - RcloneView
  - linux
  - windows
  - platform
  - guide
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# WSLでRcloneViewを実行 — Windows Subsystem for Linuxからのクラウド同期

> Windowsから離れることなくLinuxネイティブのrcloneパフォーマンスを得たいですか？WSL2は完全なLinuxカーネルを提供します。RcloneViewはその中で動作し、Linuxの信頼性とWindowsの利便性を組み合わせます。

Windows Subsystem for Linux（WSL2）は、Windowsと並行して動作する本物のLinuxカーネルを提供します。Linuxツールを好みながらもWindows環境で作業するユーザーにとって、WSL2は両方の長所を兼ね備えています。RcloneViewはWSL内でネイティブに動作し、Windowsファイルシステムと Linuxファイルシステムの両方にアクセスできる、Linux級のクラウド同期パフォーマンスを提供します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## なぜクラウド同期にWSLを使うのか？

### Linuxネイティブのパフォーマンス

rcloneのLinuxビルドは、特にFUSEマウントや高並列転送において、Windowsビルドよりも優れたパフォーマンスを発揮することが多いです。

### スクリプト統合

WSLはbash、cron、標準的なLinuxツールを提供します。RcloneViewのGUIとコマンドラインスクリプトを組み合わせることで、高度なワークフローを実現できます。

### Windowsファイルへのアクセス

WSL2は`/mnt/c/`、`/mnt/d/`などを介してWindowsファイルシステムにアクセスできます。Linuxツールを使ってWindowsファイルをクラウドストレージに同期しましょう。

### WindowsからLinuxファイルへのアクセス

Windowsは`\\wsl$\`ネットワークパスを介してWSLファイルにアクセスできます。WSL内でRcloneViewが管理するファイルは、Windowsアプリからもアクセス可能です。

## インストール

Linuxインストール手順を使って、WSL2ディストリビューション（Ubuntu、Debianなど）内にRcloneViewをインストールします。

<img src="/support/images/en/blog/new-remote.png" alt="Set up RcloneView in WSL" class="img-large img-center" />

## 主なワークフロー

### Windowsのドキュメントをクラウドに同期

WSLからWindowsのDocumentsフォルダにアクセスし、クラウドストレージに同期します。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Sync Windows files via WSL" class="img-large img-center" />

### cronまたはRcloneViewスケジューラでスケジュール設定

自動化ジョブには、Linuxのcronまたは RcloneView内蔵のスケジューラのいずれかを使用できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule cloud sync in WSL" class="img-large img-center" />

### クラウドストレージをマウント

WSL内でFUSEを介してクラウドストレージをマウントし、LinuxとWindowsの両方のアプリケーションからマウントされたパスにアクセスします。

### クロスプラットフォーム開発バックアップ

WSLでコーディングを行う開発者は、WSLプロジェクトファイルを自動的にクラウドストレージにバックアップできます。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Back up dev projects" class="img-large img-center" />

## WSL利用のヒント

- **WSL2を使用する**（WSL1ではなく）— 完全なLinuxカーネルサポートとより良いファイルシステムパフォーマンスのため
- **Linuxファイルシステムに保存する** — 最高のパフォーマンスのため。`/mnt/c/`へのアクセスは遅くなります
- **十分なメモリを割り当てる** — 大容量転送のために`.wslconfig`でWSL2に割り当てます
- **systemdを使用する**（最近のWSL2ビルドで利用可能）— サービスの実行に使用します

## はじめに

1. **WSL2をインストール**し、Ubuntuまたはお好みのディストリビューションを使用します。
2. **RcloneViewをインストール**します。Linuxインストールガイドを使用してください。
3. **クラウドアカウントを追加**します。リモートマネージャーで行います。
4. **同期、マウント、スケジュール設定**を行います。WSL環境から実行します。

Linuxツール、Windowsデスクトップ、どこでもクラウド。

---

**関連ガイド：**

- [Ubuntu/DebianにRcloneViewをインストール](https://rcloneview.com/support/blog/install-rcloneview-ubuntu-debian-linux)
- [ARM LinuxでのRcloneView](https://rcloneview.com/support/blog/rcloneview-arm-linux-cloud-sync)
- [DockerでRcloneViewを実行](https://rcloneview.com/support/blog/run-rcloneview-docker-container-cloud-sync)

<CloudSupportGrid />
