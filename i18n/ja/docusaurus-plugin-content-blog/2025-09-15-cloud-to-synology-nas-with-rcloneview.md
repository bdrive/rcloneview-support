---
slug: cloud-to-synology-nas-with-rcloneview
title: "クラウドとNASの架け橋:RcloneViewでGoogle DriveとOneDriveをSynologyにバックアップ"
authors:
  - jay
description: RcloneViewのクリック操作中心のワークフローを使って、クラウドドライブ(Google Drive、OneDriveなど)からSynology NASへファイルを移動・同期しましょう。ドラッグ&ドロップ転送、ビジュアル比較、CLI不要のスケジュール同期に対応しています。
keywords:
  - rcloneview
  - synology nas
  - google drive backup
  - onedrive backup
  - cloud to nas
  - webdav
  - sftp
  - rclone GUI
  - scheduled sync
tags:
  - synology
  - google-drive
  - onedrive
  - cloud-file-transfer
---



import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# クラウドとNASの架け橋:RcloneViewでGoogle DriveとOneDriveをSynologyにバックアップ

> ローカルの安全なコピーを保持し、自分のデータを自分でコントロールしましょう。**クラウドドライブ**を**Synology NAS**にミラーリングする、コマンドライン不要のシンプルなクリック操作ワークフローです。

## クラウドからNASへ、賢い方法—なぜ重要なのか

クラウドストレージは、コラボレーションやどこからでもアクセスできる利便性を提供します。しかし、Synology NASに**オンプレミスの2つ目のコピー**を保持することで、バージョン管理されたバックアップ、LAN速度での復元、そして特定のプロバイダーへの依存からの独立性が得られます。**RcloneView**を使えば、一般的なクラウドサービス(**Google Drive**、**OneDrive**、その他rcloneがサポートするサービス)とNASを接続し、1つの画面から**プレビュー、コピー、スケジュール**設定ができます。

<!-- truncate -->

**クラウドドライブについて(概要)**  
- リアルタイムのコラボレーションや共有に最適です。  
- プロバイダー側の制限/クォータが大規模な移行に影響する場合があります(バッチで計画してください)。  

**Synology NASについて(概要)**  
- 自宅やオフィスで常時稼働するストレージハブです。  
- **SMB/NFS**(ローカルフォルダとしてマウント)、または**WebDAV**や**SFTP**などのネットワークプロトコル経由でアクセス可能です。  
- 集中バックアップ、メディアホスティング、長期アーカイブに最適です。

**なぜクラウド → NASを行うのか?**  
- **回復力**: 自分でコントロールできるオフライン対応のコピーを保持できます。  
- **速度**: インターネット帯域幅を待たずに、LAN経由で大容量フォルダを復元できます。  
- **ガバナンス**: 保持、アクセス、監査をローカルで一元管理できます。

<!-- Obsidian note: CTA 컴포넌트 -->
<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />
## ステップ1 – 準備

始める前に:

1. **範囲を決める** — Google Drive/OneDriveのどのフォルダをNASに保持すべきか?  
2. **NASの容量を確認する** — 十分な空き容量と、対象の共有フォルダ/フォルダの準備を確認します。  
3. **NASの接続方法を選ぶ**  

   - **WebDAV**: Synologyの**WebDAV Server**を有効にし、RcloneViewでWebDAV経由で接続します。  
   - **SMB**: Synologyの**SMB**を有効にし、RcloneViewでSMB経由で接続します。  
   - **SFTP**: SynologyでSSH/SFTPを有効にし、**SFTP**経由で接続します。  
4. **頻度を計画する** — 一回限りの移行、定期的な同期、または夜間のスケジュールジョブ。  
5. **プロバイダーの制限に注意する** — 大規模な移動はバッチに分割する必要がある場合があります。まずはテスト実行を検討してください。

🔍 参考チュートリアル: 

- [RcloneViewでのSynology NAS連携](/tutorials/synology-nas-cloud-transfer)

## ステップ2 – RcloneViewで接続を設定する

RcloneViewは、rcloneの設定をガイド付きのクリック操作フローでラップしています。

1. **RcloneView**を開く → **`+ New Remote`**をクリック  
2. **クラウドドライブ**を追加する  
   - **Google Drive**: OAuthサインイン → 名前を付ける(例: `MyGoogleDrive`)  
   - **OneDrive**: OAuthサインイン → 名前を付ける(例: `MyOneDrive`)  
   - (rcloneがサポートするその他のサービスも同様に追加できます)  
3. 次のいずれか**1つ**を使って**Synology NASターゲット**を追加する:  
   - **WebDAV**: Synology WebDAV Serverのエンドポイント、認証情報 → 名前を付ける(例: `MyNAS-WebDAV`)  
   - **SMB**: NASのホストIP、ポート、アカウント → 名前を付ける(例: `MyNAS-SMB`)  
   - **SFTP**: NASのホスト名/IP、ポート、アカウント → 名前を付ける(例: `MyNAS-SFTP`)  
4. 両方がExplorerペインに並んで表示されることを確認します。

🔍 参考ガイド:  
- [RcloneViewでのSynology NAS連携](/tutorials/synology-nas-cloud-transfer)
- [Google Driveリモートの追加方法](https://rcloneview.com/support/howto/intro#step-2-adding-remote-storage-google-drive-example)  
- [クイックOAuthセットアップ(OneDrive/Google)](/howto/remote-storage-connection-settings/add-oath-online-login#quick-setup-guide)


<img src="/support/images/en/tutorials/synology-nas-webdav-and-google-drive.png" alt="synology nas webdav and google drive" class="img-medium img-center" />

## ステップ3 – バックアップ/同期ジョブを実行する

RcloneViewは3つの実用的な方法を提供します。小さく始めて、徐々に拡大しましょう。

### A) ドラッグ&ドロップ(手動コピー)
- 片側で**Google Drive/OneDrive**を、もう片側で**NAS**ターゲットを開き、**フォルダ/ファイルをドラッグして移動**します。  
- 選択的な移動やすぐに成果を出したい場合に最適です。  

👉 詳細はこちら: [ドラッグ&ドロップによるファイルコピー](/howto/rcloneview-basic/browse-and-manage-remote-storage#copying-files-using-drag-and-drop)

### B) 比較&コピー(変更内容のプレビュー)
- **Compare**を実行して、クラウドとNASの間で新規/変更されたものを確認します。  
- 変更されたものだけをコピーして、予期せぬ事態と時間を削減します。  

👉 詳細はこちら: [ファイルの比較と管理](/howto/rcloneview-basic/compare-folder-contents#compare-results-and-manage-files)

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Compare results highlighting changed files" class="img-medium img-center" />

### C) 同期&スケジュールジョブ(自動化)
- **Sync**を使って、選択したクラウドフォルダをNASの共有フォルダにミラーリングします。  
- まず**ドライラン**を行い、再利用可能な**Job**として保存し、スケジュール(毎晩/毎週)を追加します。  

👉 詳細はこちら:
- [リモートストレージの同期](/howto/rcloneview-basic/synchronize-remote-storages)
- [同期ジョブの作成](/howto/rcloneview-basic/create-sync-jobs)
- [ジョブのスケジュールと実行](/howto/rcloneview-advanced/job-scheduling-and-execution)
<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running a saved job in RcloneView" class="img-medium img-center" />

## まとめ — 重要なポイントと追加のヒント

- **なぜこれを行うのか**: 自分でコントロールできる2つ目のコピー、LAN経由の高速な復元、そして統一された保持管理。  
- **仕組み**: RcloneViewを使えば、クラウドドライブとSynology NASを接続し、**ドラッグ&ドロップ**、**比較**、**同期**を行えます。**スケジュール**設定により、手放しでバックアップできます。  
- **安全に拡張する**: まずパイロット実行を行い、プロバイダーのクォータを守り、クリーンな監査証跡のためにジョブログを監視しましょう。

## よくある質問

**Q. RcloneViewは定期バックアップを自動実行できますか?**  
**A.** はい—Syncを**Job**として保存し、スケジュールを設定できます(例: 毎晩)。Job Managerで履歴とステータスを確認できます。

**Q. iCloudはどうですか?**  
**A.** Rcloneは多くのプロバイダーをサポートしています。直接対応するバックエンドがないサービスについては、まずデータをローカルにエクスポートしてから、RcloneViewを使ってNASに移動することを検討してください。


**クラウド上のデータをローカルで確実に保管する準備はできましたか?**  


<!-- Obsidian note: Download 컴포넌트 -->
<CloudSupportGrid />
