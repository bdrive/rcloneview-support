---
sidebar_position: 3
description: "RcloneViewの新規ウィンドウ機能を使って、組み込みおよび外部のRcloneインスタンスを並行して管理する方法を学びます。"
keywords:
  - rcloneview
  - 新規ウィンドウ
  - 複数接続
  - 外部rclone
  - 組み込みrclone
  - 複数rclone
tags:
  - RcloneView
  - new-window
  - multi-connection
  - external-rclone
  - embedded-rclone
  - multi-windows
date: 2025-06-22
author: Jay
---
# 新規ウィンドウで複数のRclone接続を使用する

RcloneViewは、複数のRcloneインスタンスを同時に管理できる柔軟なインターフェースを提供します。これは、組み込みRcloneと外部Rcloneの両方を使用する場合に特に便利です。

## 組み込みRcloneアーキテクチャ

デフォルト構成では、RcloneViewには組み込みのRcloneバイナリ(Embedded Rclone)が含まれています。このインスタンスにより、ユーザーは使いやすいGUIインターフェースを通じてクラウドリモートを管理できます。

### 🔹 組み込みモデル

- RcloneViewにはRcloneが含まれており、API経由で通信します。
- ファイルはRcloneを通じて直接アクセス・管理されます。
- ほとんどのローカルデスクトップ利用シナリオに適しています。

<img src="/support/images/en/howto/rcloneview-advanced/embedded-rclone-model.png" alt="embedded rclone model" class="img-medium img-center" />
## 外部Rcloneアーキテクチャ

リモートサーバーやクラウドインスタンス上のリモートを管理するようなより高度なユースケースでは、RcloneViewは他の場所で実行されている外部Rcloneインスタンスに接続できます。

### 🔹 外部モデル

- RcloneViewはリモートのRcloneサーバーに接続します(Rclone RC経由)。
- リモートのRcloneがクラウドストレージへのアクセスと同期を担当します。
- クラウドでホストされているRclone環境(例: AWS EC2、Linuxサーバー)を管理するのに役立ちます。

<img src="/support/images/en/howto/rcloneview-advanced/external-rclone-model.png" alt="external rclone model" class="img-medium img-center" />
## 新規ウィンドウ機能: 両方のモデルを管理する

組み込みと外部の両方のRcloneインスタンスを同時にサポートするために、RcloneViewには**新規ウィンドウ**機能が搭載されています。これにより、ユーザーは複数のRcloneViewのGUIインスタンスを起動し、それぞれを異なるRcloneバックエンドに接続できます。

### ✅ 主なメリット

- 各ウィンドウは固有のRcloneインスタンスに接続できます。
- ローカル環境とリモート環境を並行して管理できます。
- 異なるクラウドや環境間で、比較・同期・コピーをシームレスに行えます。

### 🔸 例: ホームウィンドウ(組み込みRclone)

このウィンドウは、RcloneViewに組み込まれているRcloneに接続されています。

<img src="/support/images/en/howto/rcloneview-advanced/rcloneview-home-window.png" alt="rcloneview home window" class="img-medium img-center" />
:::important メインウィンドウのホームアイコン
メインのRcloneViewウィンドウ(組み込みRcloneに接続)は、右上のRcloneViewロゴの隣にある**ホームアイコン** <img src="/support/icons/home-icon.png" alt="home icon" class="inline-icon" /> で識別できます。

:::
### 🔸 例: 新規ウィンドウ(外部Rclone)

このウィンドウは、AWSのLinuxサーバー上で実行されている外部Rcloneに接続されています。

:::info AWS EC2でRcloneエンジンを実行する方法  
UbuntuベースのEC2インスタンス上でRcloneのAPIデーモン(`rcd`)をデプロイ・管理する方法については、以下を参照してください: [AWS EC2サーバーでRcloneを実行する方法](/howto/cloud-storage-setting/run-rclone-on-aws-ec2)  
:::
<img src="/support/images/en/howto/rcloneview-advanced/rcloneview-new-window.png" alt="rcloneview new window" class="img-medium img-center" />
## 🚩比較: 組み込みRclone vs. 外部Rclone

| 機能                                     | 組み込みRclone                        | 外部Rclone                                     |
| ------------------------------------- | ------------------------------------ | ------------------------------------------- |
| ローカルマシンで動作                            | ✅ はい                                | ❌ いいえ(リモートサーバーで動作)                     |
| ローカルディスクへのアクセス                        | あり — RcloneViewが動作するローカルPC        | あり — 外部Rcloneが動作するサーバー                    |
| 組み込みRcloneバイナリの使用                      | ✅ デフォルトで含まれる                       | ❌ 別途インストールが必要                              |
| `Settings > Location`で設定可能            | ✅ サポートされる                          | ❌ 該当なし                                       |
| ネットワーク設定が必要                            | ❌ いいえ                               | ✅ はい(ホスト、ポート、認証が必要)                       |
| ネットワークパフォーマンス                          | ローカル/ホームネットワークに依存                  | サーバー/クラウドネットワークに依存                       |

 💡 **新規ウィンドウ**機能を使用して、複数のRcloneインスタンスを並行して管理しましょう — 例えば、ローカルタスク用に1つのウィンドウを組み込みRcloneに接続し、もう1つをクラウド側の操作用に外部Rcloneに接続します。
