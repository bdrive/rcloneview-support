---
slug: migrate-icloud-drive-to-backblaze-b2-rcloneview
title: "iCloud DriveからBackblaze B2へ移行 — RcloneViewでファイルを転送"
authors:
  - casey
description: "RcloneViewを使ってiCloud DriveからBackblaze B2へファイルを転送する方法。Appleのクラウドストレージを手頃な価格でベンダー非依存のオブジェクトストレージにバックアップするステップバイステップガイド。"
keywords:
  - iCloud Drive to Backblaze B2
  - migrate iCloud Drive Backblaze B2
  - iCloud backup Backblaze B2
  - transfer iCloud files to B2
  - iCloud Drive cloud migration RcloneView
  - RcloneView iCloud Backblaze B2
  - cloud to cloud transfer iCloud
  - Backblaze B2 iCloud backup tool
tags:
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# iCloud DriveからBackblaze B2へ移行 — RcloneViewでファイルを転送

> AppleのiCloud Driveはデバイス間の同期に便利ですが、ファイルをBackblaze B2にコピーすることで、コスト効率が高くベンダーに依存しないバックアップを作成できます。RcloneViewならすべてGUIだけで完結します。

何百万ものユーザーが、Appleのエコシステムを通じて写真、ドキュメント、プロジェクトのアーカイブをiCloud Driveに保存しています。iCloudはApple製デバイス間ではシームレスに機能しますが、組織やパワーユーザーは、ベンダーの多様性、より長い保持期間、あるいはプラットフォームに依存しないバックアップ戦略のために、耐久性の高いオブジェクトストレージにセカンドコピーを必要とすることがよくあります。Backblaze B2はS3互換のオブジェクトストレージサービスで、RcloneViewと自然に統合されており、手動でのダウンロード、スクリプト作成、サードパーティの同期クライアントを使わずにiCloud Driveからコンテンツを転送できます。FREEライセンスでBackblaze B2に読み書き両方のフルアクセスで接続できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneViewでiCloud Driveをセットアップする

iCloud Driveは、rcloneのiCloudバックエンドを通じてRcloneViewでサポートされています。これにはrclone v1.69以降が必要ですが、RcloneViewに同梱されている組み込みのrcloneバイナリはすでにこの要件を満たしているため、別途インストールする必要はありません。接続するには、**Remote**タブを開き、**New Remote**をクリックして、プロバイダーリストからiCloud Driveを選択します。Apple IDの認証情報で認証し、アカウントで二要素認証が有効になっている場合は、プロンプトが表示されたら確認コードを入力します。保存すると、iCloudのフォルダがMac上と同じようにエクスプローラーパネルに表示されます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding iCloud Drive as a new remote in RcloneView" class="img-large img-center" />

転送ジョブを作成する前に、Desktop、Documents、その他任意のカスタムフォルダなど、iCloud Driveの構造を確認してコンテンツの範囲を確かめておきましょう。

## Backblaze B2を転送先として接続する

Backblaze B2は認証情報の入力を通じて接続します。**New Remote**でBackblaze B2を選択し、Backblazeアカウントの App Keysセクションで生成した**Application Key ID**と**Application Key**を入力します。保存すると、RcloneViewの2つ目のエクスプローラーパネルでB2バケットを操作できるようになります。iCloud DriveとBackblaze B2を並べて開くことで、ファイルを1つ移動する前に転送元と転送先を視覚的に明確に把握できます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="iCloud Drive and Backblaze B2 open side by side in RcloneView" class="img-large img-center" />

## 移行転送を実行する

Homeタブから**Sync**ウィザードを開きます。iCloud Driveのフォルダを転送元、Backblaze B2バケット(またはその中のプレフィックス)を転送先に設定します。Advanced Settingsのステップで、タイムスタンプだけでなくファイルハッシュを比較する**チェックサム検証**を有効にします。これは、データの整合性が最も重要な一回限りの移行において特に価値があります。また、**最大ファイル経過時間**フィルタを追加して、最初のパスでは古くてめったにアクセスされないファイルを除外し、最近のコンテンツのみを移行することもできます。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Live transfer monitoring during an iCloud to Backblaze B2 migration in RcloneView" class="img-large img-center" />

実際の転送を行う前には必ず**Dry Run**を実行してください。RcloneViewは、コピーまたはスキップされるファイルを正確にリストアップします。これは、大規模なiCloud Driveライブラリを移行する際に、誤った上書きやフォルダの見落としが元に戻すのに高くつく可能性がある場合に実用的な安全確認となります。

## Folder Compareで移行を検証する

転送が完了したら、RcloneViewの**Folder Compare**機能を使って両側が一致していることを確認します。Compareビューを開き、左側にiCloud Drive、右側にB2バケットを設定すると、RcloneViewが左側のみ、右側のみ、サイズ不一致のファイルを表示します。クリーンな比較結果(同一ファイルのみが表示される状態)が、移行に漏れがなく成功したことを示します。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder Compare verifying iCloud Drive files match Backblaze B2 after migration" class="img-large img-center" />

継続的な保護のためには、**PLUSライセンス**を使うことで、週次または日次の繰り返し同期ジョブをスケジュールし、iCloud Driveに新たに追加されたコンテンツを取り込んで、B2側のコピーを自動的に最新の状態に保つことができます。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Apple IDの認証情報を使ってiCloud Driveを新しいリモートとして追加します。
3. Application Key IDとApplication Keyを使ってBackblaze B2をリモートとして追加します。
4. 同期ジョブを作成します。iCloud Driveを転送元、B2バケットを転送先に設定し、まず**Dry Run**を実行します。
5. **Folder Compare**を使って移行を検証し、必要に応じて繰り返しバックアップをスケジュールします。

RcloneViewを使ってiCloud DriveからBackblaze B2へ移行することで、Appleのファイルにオブジェクトストレージという耐久性が高くプラットフォームに依存しない保管場所を与えられます。保護され、検証可能で、どのデバイスからでもアクセスできます。

---

**関連ガイド:**

- [RcloneViewでiCloud Driveを管理する](https://rcloneview.com/support/blog/manage-icloud-drive-cloud-sync-rcloneview)
- [RcloneViewでBackblaze B2を管理する](https://rcloneview.com/support/blog/manage-backblaze-b2-cloud-sync-backup-rcloneview)
- [RcloneViewでiCloud DriveからGoogle Driveへ移行する](https://rcloneview.com/support/blog/migrate-icloud-drive-to-google-drive-rcloneview)

<CloudSupportGrid />
