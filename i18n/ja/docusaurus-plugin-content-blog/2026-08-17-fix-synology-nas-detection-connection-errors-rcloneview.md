---
slug: fix-synology-nas-detection-connection-errors-rcloneview
title: "Synology NAS の検出・接続エラーを修正 — RcloneViewで確実なバックアップ"
authors:
  - casey
description: "RcloneViewでSynology NASの自動検出と接続の失敗をトラブルシューティングし、ローカルネットワーク検出と手動設定の修正方法を解説します。"
keywords:
  - Synology NAS RcloneView
  - Synology 自動検出エラー
  - RcloneView NAS 接続
  - NAS 検出されない 修正
  - Synology クラウドバックアップ
  - NAS ローカルネットワークストレージ
  - RcloneView トラブルシューティング
  - Synology SMB マウント
  - ローカルストレージ同期
tags:
  - RcloneView
  - troubleshooting
  - synology
  - nas
  - tips
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Synology NAS の検出・接続エラーを修正 — RcloneViewで確実なバックアップ

> RcloneViewがローカルネットワーク上のSynologyを見つけられないとき、原因は通常NASの故障ではなく設定です。

RcloneViewはローカルネットワーク上のSynology NASを自動検出できますが、自動検出はNASの電源が入っているかどうかだけでなく、ネットワークの可視性にも依存します。毎晩2TBのRAWファイルをバックアップする写真スタジオは、エクスプローラーに静かに表示されなくなったNASのせいで、バックアップの時間帯全体を失う可能性があります。このガイドでは、Synologyの検出・接続失敗の一般的な原因と、RcloneViewでそれぞれを解決する方法を説明します。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 自動検出が失敗する理由

RcloneViewのSynology自動検出設定は、マシンが接続されているローカルネットワークセグメントをスキャンします。NASがVLANの背後、別のサブネット、またはVPNトンネルの内側にある場合、ブロードキャストが届かず、NASは自動的に表示されません — これはネットワークトポロジーの制約であり、RcloneViewのバグではありません。まず設定自体がオンになっているか確認してください: Settingsタブ > General > Auto-detect Synology NASが有効になっている必要があります。これはトグル式であり、新規インストール後にオフのままになりがちです。

<img src="/support/images/en/blog/synology-nas-autodection-and-connection.png" alt="RcloneView設定のSynology NAS自動検出トグル" class="img-large img-center" />

トグルがオンでも検出が失敗し続ける場合は、クライアントマシンとNASが同じ物理または仮想ネットワークセグメント上にあることを確認してください。Wi-Fiアクセスポイントでクライアント分離が有効になっている企業ネットワークでは、両方のデバイスが「接続済み」と表示されていても、デバイス間の検出が完全にブロックされます。

## 自動検出がNASに届かない場合の手動接続

リモートオフィス、セグメント化されたネットワーク、別のVLAN上のNASユニットなど、自動検出が実現不可能な場合は、検出のトラブルシューティングをする代わりに手動で接続してください。IPアドレスまたはホスト名を直接使用して、リモートマネージャーでSynologyをSFTPまたはSMB/CIFSリモートとして追加し、ローカルネットワークスキャンを完全にバイパスします。

<img src="/support/images/en/blog/new-remote.png" alt="Synology NASをSFTPリモートとして手動で追加" class="img-large img-center" />

この手動経路は、最もよくある二次的な問題も解決します。それは、検出失敗のように見えるが実際には認証の問題である接続タイムアウトです。SynologyのコントロールパネルでNASのSSHまたはSMBサービスが有効になっていることを再確認してください — RcloneViewは、NAS自体が実行していないサービスには接続できません。

## 接続の確認とバックアップの自動化

リモートが追加されたら、転送の途中で失敗を発見するのではなく、保存前にTest Connectionを使用して資格情報と到達可能性を一度に確認します。RcloneViewは1つのウィンドウから、Windows、macOS、Linuxで90以上のプロバイダーをマウント・同期できるため、Synologyが接続されると、別のアプリを必要とせずクラウドリモートと同じエクスプローラーに収まります。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="完了したSynologyバックアップの実行を示すジョブ履歴" class="img-large img-center" />

そこから、NASをクラウド先にミラーリングする同期ジョブを構築し、最初の実行後にジョブ履歴を確認してください — ファイル転送数がゼロで完了したジョブは、通常、接続が切れているのではなく、ソースパスが間違っていることを意味します。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Settingsで Auto-detect Synology NAS を有効にするか、NASのIPアドレスを使用してSFTP/SMBで手動接続します。
3. リモートを保存する前にTest Connectionを実行します。
4. クラウド先への同期ジョブを設定し、ジョブ履歴で転送を確認します。

確実に接続されるNASは、5分間のネットワークトラブルシューティングの価値があります — 自動化されたバックアップは、実際に実行されて初めてあなたを守ります。

---

**関連ガイド:**

- [データ損失なしでSynologyをGoogle Driveと同期](https://rcloneview.com/support/blog/sync-synology-google-drive-without-data-loss)
- [RcloneViewでSynologyをクラウドにバックアップ](https://rcloneview.com/support/blog/synology-to-cloud-backup-with-rcloneview)
- [SMB/Windowsネットワーク共有マウントエラーを修正 — RcloneView](https://rcloneview.com/support/blog/fix-smb-windows-network-share-mount-errors-rcloneview)

<CloudSupportGrid />
