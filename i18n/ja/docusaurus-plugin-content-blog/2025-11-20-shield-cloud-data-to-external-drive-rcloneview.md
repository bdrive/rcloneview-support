---
slug: shield-cloud-data-to-external-drive-rcloneview
title: "RcloneViewで外付けドライブバックアップを使いすべてのクラウドアカウントを守る"
authors:
  - tayson
description: RcloneViewのマルチクラウドExplorer、Compareプレビュー、Syncジョブ、Mount、Schedulerを使って、Google Drive、OneDrive、Dropbox、S3から外付けHDDやSSDへの反復可能なバックアップを構築します。
keywords:
  - rcloneview external drive backup
  - backup cloud to hard drive
  - cloud to usb drive
  - rclone sync
  - scheduler automation
  - offline recovery
  - ransomware defense
  - google drive backup
  - onedrive backup
  - dropbox backup
tags:
  - external-drive
  - google-drive
  - onedrive
  - dropbox
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewで外付けドライブバックアップを使いすべてのクラウドアカウントを守る

> クラウドアカウントは障害、ロック、あるいは停止中のオフラインで機能しなくなることがあります。毎晩自動更新されるUSBドライブは、あなたが持てる中で最も安価な保険です。

RcloneViewはrcloneの上にフレンドリーなUIを重ね、Google Drive、OneDrive、Dropbox、S3、Wasabi、さらにはSMB共有までも外付けHDDやSSDにミラーリングできるようにします。デュアルExplorerペイン、Compareプレビュー、Sync/Copyテンプレート、Mount Manager、内蔵Schedulerにより、CLIフラグを暗記しなくても、ランサムウェア被害、出張、コンプライアンス要求に備えたコールドコピーを常に用意しておけます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## 外付けドライブバックアップが重要な理由

- **オフラインアクセス**: クリエイティブチーム、フィールドエンジニア、経営陣は、ドライブを接続するだけで機内や遠隔地でもフルワークロードを実行できます。
- **アカウントロックアウト**: SSOが機能しなくなったり、テナントが停止されたりしても、USBドライブにはすべての契約書が残っています。
- **ランサムウェア対策**: データをクラウドと未接続のドライブに分散させることで、マルウェアの被害範囲を断ち切れます。
- **迅速な復旧**: SSDからノートPCへコピーする方が、数テラバイトの再ダウンロードを待つより速いです。

## 設計図: 外付けドライブの管制塔としてのRcloneView

1. [Remote Manager](/howto/rcloneview-basic/remote-manager)と[Add OAuth Online Login](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)のOAuthガイドを使って**クラウドを接続**します。
2. 設定パスワードを使い[General Settings](/howto/rcloneview-basic/general-settings)で**設定を強化**します。
3. [Browse and manage remote storage](/howto/rcloneview-basic/browse-and-manage-remote-storage)を使ってわかりやすい名前で**Explorerペインを整理**し、各ペインがクラウドドライブなのか外付けパスなのかを一致させます。
4. [Create sync jobs](/howto/rcloneview-basic/create-sync-jobs)や[Synchronize remote storages](/howto/rcloneview-basic/synchronize-remote-storages)を使って**ジョブを設計**し、[Compare folder contents](/howto/rcloneview-basic/compare-folder-contents)でリスクをプレビューします。
5. [Job scheduling and execution](/howto/rcloneview-advanced/job-scheduling-and-execution)で更新を**自動化**しつつ、[Real-time transfer monitoring](/howto/rcloneview-basic/real-time-transfer-monitoring)でスループットを監視します。
6. [Mount cloud storage as a local drive](/howto/rcloneview-basic/mount-cloud-storage-as-a-local-drive)を使って監査用にドライブを読み取り専用でマウントします。

## ステップ1 -- 外付けドライブの準備とクラウドの接続

- OSがどこでも読み取れるファイルシステムでドライブをフォーマットします（クロスプラットフォーム向けにはexFAT、ネイティブ性能にはAPFS/NTFS）。
- クラウドごとにトップレベルフォルダを作成します: `GDrive-Archive`、`OneDrive-Teams`、`Dropbox-Projects`、`S3-Logs`。
- RcloneViewを起動する前にドライブを接続してください。ExplorerのローカルターゲットにExplorerが自動的に表示されます。
- Remote Managerで、可能な限りサービスアカウントを使って各クラウドリモートを追加します。わかりやすくラベル付けしましょう。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="cloud to cloud transfer default" class="img-large img-center" />  
  

## ステップ2 -- Compareでベースラインを確認する

1. 左ペインにクラウドリモート、右ペインに外付けドライブフォルダを読み込みます。
2. **Compare**を実行し、最初の同期前にアイテム数、ハッシュ、タイムスタンプを確認します。
3. 同期時に帯域幅の上限が必要になりそうな巨大なメディアフォルダやアーカイブを特定します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Preview cloud vs external drive differences in RcloneView" class="img-large img-center" />  
   

## ステップ3 -- スマートなCopyまたはSyncジョブを作成する

- ドライブにファイルを蓄積するだけでよい場合（不変アーカイブに最適）は**Copy**を使用します。ディスクがクラウドと完全に一致する必要がある場合は**Sync**を使用します。
- ジョブウィザードで外付けドライブを宛先に設定し、Google Docsのプレースホルダーやbox Notesなどをフィルタリングして、レンダリング済みファイルのみがディスクに保存されるようにします。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running an encrypted sync job in RcloneView" class="img-large img-center" />  
  

## ステップ4 -- Schedulerで更新を自動化する

- Scheduler（Settings -> Scheduler）を有効化し、ジョブごとに頻度を割り当てます。緊急のデザインフォルダは毎時、それ以外は毎晩、検証用には週次のCompareのみの実行です。
- 複数のクラウドから同時に読み込みが行われてドライブに負荷がかからないよう、開始時刻をずらします。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Automate cloud to external drive backups in RcloneView" class="img-large img-center" />

## ステップ5 -- 検証、マウント、リストアのテスト

- スケジュール実行ごとに、[Real-time transfer monitoring](/howto/rcloneview-basic/real-time-transfer-monitoring)でスループットとエラー数を確認します。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="transfer monitoring" class="img-large img-center" />  
  

- RcloneViewのMount Managerで外付けフォルダを読み取り専用モードでマウントし、監査担当者やエンジニアが原本に触れることなくバックアップを閲覧できるようにします。

<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="mount from remote explorer" class="img-large img-center" />  
  


## 推奨バックアップ運用手順

| 頻度 | RcloneViewの操作 | 生成される証跡 |
| --- | --- | --- |
| 毎日 | 各クラウドから外付けドライブへのScheduler Copy/Syncジョブ | 転送ログ、Compareエクスポート |
| 毎週 | Compareのみの実行 + チェックサム確認 | 差分レポート、スクリーンショット |
| 毎月 | ドライブのローテーション（A/Bドライブを交換）とジョブ宛先の更新 | 資産インベントリ、ローテーション記録 |
| 四半期 | 完全なリストアテスト + 監査用に読み取り専用でマウント | リストア記録、マウントのスクリーンショット |

## FAQ

**外付けコピーを暗号化できますか？**  
はい。暗号化ボリューム（VeraCrypt、BitLocker、FileVault）またはrclone cryptリモートを使用してください。復号キーはDR計画に記録しておきましょう。

**ドライブレターが変わった場合はどうなりますか？**  
物理パスを使ってジョブの宛先を設定するか（macOSでは`/Volumes/MediaVault`、Windowsでは`\?\Volume{GUID}`）、ジョブ実行前にドライブレターを再割り当てしてください。宛先が見つからない場合、RcloneViewが警告を表示します。

**NASドライブでも動作しますか？**  
もちろんです。NAS共有をローカルにマップし、Explorerに追加すれば、他の宛先と同様に扱えます。クラウド -> NAS -> ポータブルSSDのようにチェーンすることも可能です。

規律あるクラウドから外付けドライブへのワークフローは、停止、ランサムウェア、出張中もビジネスを継続させます。RcloneViewはマルチクラウドの配管作業を反復可能なプレイブックに変えてくれるので、ドライブを接続し、ジョブをスケジュールして、オフラインのレスキューコピーを手にしている安心感で肩の力を抜いてください。

<CloudSupportGrid />
