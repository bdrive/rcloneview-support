---
slug: hybrid-cloud-file-transfer-nas-public-cloud-rcloneview
title: "RcloneViewを使ったオンプレミスNASとパブリッククラウド間のハイブリッドクラウドファイル転送"
authors:
  - tayson
description: "RcloneViewの2ペインエクスプローラー、比較、同期、スケジュールジョブを使って、オンプレミスNAS(SMB/SFTP)とS3、Wasabi、Google Drive、Dropboxなどのパブリッククラウド間でマウント、同期、転送を自動化する方法。"
keywords:
  - rcloneview
  - hybrid cloud
  - nas backup
  - smb sftp
  - webdav
  - s3 transfer
  - google drive sync
  - wasabi backup
  - mount remote drive
  - rclone gui
tags:
  - RcloneView
  - cloud
  - sync
  - nas
  - mount
  - hybrid-cloud
  - sftp
  - smb
  - webdav
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewを使ったオンプレミスNASとパブリッククラウド間のハイブリッドクラウドファイル転送

> CLIの複雑な操作なしに、オンプレミスNASとパブリッククラウドをつなぎましょう。RcloneViewを使えばSMB/SFTP/WebDAVを追加し、クラウドを横並びで開き、変更を比較し、ドライブをマウントし、毎晩の同期をスケジュールできます — これにより、ハイブリッドストレージを整理された予測可能な状態に保てます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/rcloneview-user-interface.png" alt="RcloneView user interface overview" class="img-medium img-center" />

## ハイブリッドクラウドが難しい理由(そしてそれに見合う価値)

- オンプレミスNASは編集者やレンダーノードに高速なLANアクセスを提供しますが、オフサイトの耐障害性に欠けます。
- パブリッククラウド(S3/Wasabi/Drive/Dropbox)は耐久性とグローバルな共有性を追加しますが、帯域幅とコストが問題になります。
- チームは混在した権限(NAS上のACL対OAuth/クラウドRBAC)や異なるフォルダ規則に苦労します。
- 手動でのコピーは上書き、バージョンの欠落、深夜の対応リスクを伴います。
- 両側を統合するGUIは認知負荷を減らし、自信を持って自動化できるようにします。

## 1つのペインでローカルFSとリモートFSを扱う

- **ローカル/NAS(SMB/SFTP/WebDAV):** POSIXライクで権限に敏感、LAN上では低レイテンシ。
- **クラウド:** オブジェクトストレージ(S3/Wasabi)またはドライブ形式(Google Drive/Dropbox)。OAuthまたはキーが必要。
- RcloneViewはそれぞれをリモートとして扱い、単一のインターフェースで開く、比較する、マウントする、同期することができます。

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/explorer-view-layout.png" alt="Two-pane Explorer layout" class="img-medium img-center" />

## オンプレミスNASリモート(SMB/SFTP/WebDAV)を追加する

1. **リモート → + 新規リモート**、またはエクスプローラーの**+**ボタンをクリックします。
2. **SMB**(Windows/NAS共有向け)または**SFTP**(Linux/UNIXサーバー向け)を選択します。
3. サーバーアドレス、共有/パス、認証情報を入力します(SMBでドメインが必要な場合は追加します)。
4. 保存して、2ペインエクスプローラーで参照をテストします。

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/create-remote-by-remote-manager.png" alt="Create remote from Remote Manager" class="img-medium img-center" />

## パブリッククラウドリモートを追加する

- **S3/Wasabi/B2/R2:** アクセスキー/シークレットキーを使用し、リージョンとバケットを選択します。
- **Google Drive/Dropbox:** **接続**をクリックしてOAuthを完了します。トークンの貼り付けは不要です。
- **WebDAVエンドポイント:** URLと認証情報を貼り付けます。
- NASとクラウドの両方のリモートを再利用のために**リモートマネージャー**に保存しておきます。

## リモートファイルシステムをローカルドライブのようにマウントする

マウントは、ローカルパスを必要とするアプリ(NLE、DAW、CAD)に役立ちます。RcloneViewのマウントマネージャーを使えば、CLIフラグを気にする必要がありません。

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/mount-from-remote-explorer.png" alt="Mount from Remote Explorer" class="img-medium img-center" />

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/mount-manager-status.png" alt="Mount manager status view" class="img-medium img-center" />

- リモートカードまたはツールバーからマウントし、ドライブ文字/パスを選択し、キャッシュ/バッファを設定します。
- 再起動なしで**マウントマネージャー**からマウントを開始/停止できます。
- SFTP/SMBから直接編集したり、軽作業のためにS3をフォルダとして公開したりするのに最適です。

## コピーする前に比較する

ハイブリッド移行は混乱しやすいものですが、比較機能を使えば差分が明確になります。

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/folder-comparison-completed.png" alt="Folder comparison results" class="img-medium img-center" />

- NASを左側、クラウドバケットを右側に開き、**比較**を押します。
- **欠落**、**サイズの違い**、**一致**するファイルをハイライト表示します。
- NAS→クラウド(または逆方向)で差分のみをコピーし、新しい編集を上書きしないようにします。

## ハイブリッドクラウドに適した同期とコピーのフロー

- バックアップ/アーカイブには**一方向コピー**を使用します。宛先で削除は行いません。
- 意図的にNASをクラウドにミラーリングする場合は**削除を伴う一方向同期**を使用します。
- **双方向同期**は控えめに(両側が積極的に変更される場合のみ)使用します。
- キャッシュ、プロキシ、一時レンダリングをスキップするために**包含/除外フィルター**を使用します。

## トラブルなく権限を扱う

- **SMB:** ドメイン/ワークグループを整合させ、共有ACLとファイルシステムACLが書き込みを許可していることを確認します。
- **SFTP:** サーバー上のUID/GIDとフォルダの所有権を確認し、必要に応じてサーバー側で`chmod`を調整します。
- **WebDAV:** 一部のホストはMOVE/DELETEをブロックします。不明な場合はコピーのみを使用します。
- マウントが読み取り専用の場合は、適切なユーザーで再マウントするか、ダイアログでマウントオプションを調整します。

<!-- Image verified: exists -->
<img src="/support/images/en/howto/rcloneview-basic/log-tab.png" alt="Log tab showing transfer details" class="img-medium img-center" />

- **ログ**で401/403/550/permission-deniedの手がかりを確認し、修正後に再試行します。

## NAS↔クラウドのパフォーマンスに関するヒント

- 大きなジョブは業務時間外にスケジュールし、業務時間中は帯域幅を制限します。
- S3/Wasabiでは、スロットリングを避けるために並行数を適度に保ち、対応している場合は**チェックサム**を有効にします。
- WAN経由のSFTPでは、パケットロスが見られる場合は並列転送数を減らし、CPUに余裕がある場合のみ圧縮を検討します。
- 不安定なネットワークでは、同じSMB共有を二重にマウントしないようにします。

## ジョブとスケジュールで自動化する

- 任意の同期/コピーを**ジョブ**として保存します(例:`nas-to-s3-nightly`)。
- **ジョブマネージャー → ジョブを追加**を開き、保存したジョブを選択し、**毎日02:00**にスケジュールします。
- 競合を最小限に抑えるために、複数のジョブ(NAS→S3、NAS→Drive、Drive→NAS)をずらして実行します。

<!-- Image verified: exists and path corrected with /support -->
<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Create job schedule" class="img-medium img-center" />

### ジョブセットの例

- **NAS(SMB) → Wasabi(一方向コピー)**: RAW/PROJECTの週次アーカイブ。
- **NAS(SFTP) → Google Drive共有ドライブ(一方向同期)**: コラボレーション用のEDIT/EXPORTの日次同期。
- **S3 → NAS(一方向コピー)**: 毎月、ローカル復元テスト用にコールドアーカイブのスライスを取得。

### ドライラン(試験実行)と検証

- 初回実行時は**ドライラン**を実行し、何が移動するかを確認します。
- 同期後は**比較**を再度開き、想定される差分のみが残っていることを確認します。
- S3/Wasabiでは、コストを管理し履歴を保持するためにバージョニングとライフサイクルルールを維持します。

## ハイブリッドフォルダ戦略を整理する

- NASとクラウドの両方で標準テンプレート(例:`Project/RAW`、`EDIT`、`EXPORT`、`ARCHIVE`)を統一します。
- 素早い共有のためにプロキシはクラウドに、忠実度のためにRAWはNAS/S3に保管します。
- アーカイブには**コピー**、アクティブなワークスペースには**同期**、アプリ互換性には**マウント**を使用します。
- 誤削除を避けるため、フォルダごとに「正のソース」となるリモートを文書化します。

## 実際のワークフロー(ステップバイステップ)

1. **リモートを接続する:** NAS用にSMB/SFTPを追加し、S3/WasabiとGoogle Driveを追加します。
2. **2つのペインを開く:** NASを左、クラウドを右に配置し、リスト表示を確認します。
3. **小規模なパイロットフォルダを比較する:** 差分が正しく見えることを確認します。
4. **クラウドへの一方向コピーを実行する:** 非破壊的なバックアップから始めます。
5. **ジョブとして保存し、スケジュールする:** 差分のみを毎晩02:00に。
6. **アプリ用にマウントする:** 編集者がパスベースのアクセスを必要とする場合、NASまたはS3をマウントします。
7. **ログの確認:** ログで再試行、スロットリングメッセージ、権限エラーを確認します。
8. **定期的な復元テスト:** クラウドからスクラッチNASフォルダにコピーバックして整合性を検証します。
9. **フィルターを調整する:** キャッシュ/レンダリングを除外し、アーカイブにはマスターとプロジェクトファイルのみを含めます。
10. **チームへの引き継ぎ:** フォルダテンプレートとジョブスケジュールを共有し、全員が同じ手順に従うようにします。

## トラブルシューティングのクイックリスト

- 403/550が表示される？認証情報、共有ACL、バケットポリシーを再確認してください。
- WANが遅い？並行数を下げ、帯域幅制限を有効にし、夜間にスケジュールしてください。
- マウントが書き込みできない？正しいユーザーで再マウントするか、SMB権限を調整してください。
- WebDAVの削除が失敗する？コピーしてから手動で削除してください。一部のホストはMOVE/DELETEをブロックします。
- 重複コピー？比較機能を使って安全に整理し、必要でない限り双方向同期を避けてください。

## 本番稼働前のチェックリスト

- [ ] NASリモート(SMB/SFTP/WebDAV)が追加され、参照可能である。
- [ ] クラウドリモート(S3/Wasabi/Drive/Dropbox)が追加され、認証されている。
- [ ] フォルダテンプレートが両側でミラーリングされている。
- [ ] パイロットの比較とドライランが完了している。
- [ ] ジョブが保存されスケジュールされている(02:00推奨)。
- [ ] 対応している場合はチェックサムが有効になっており、ログが監視されている。
- [ ] 復元テストが実施され、文書化されている。

## まとめ

RcloneViewは、ハイブリッドクラウド作業を再現可能なワークフローに変えます。NASとクラウドのリモートを追加し、コピー前に比較し、アプリがローカルパスを必要とする場合はマウントし、ジョブとスケジュールでバックアップを自動化します。可視化されたログ、再試行、チェックサムのサポートにより、CLIに触れることなくオンプレミスのパフォーマンスとクラウドの耐障害性の両方を維持できます。

<CloudSupportGrid />
