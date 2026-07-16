---
slug: migrate-proton-drive-to-backblaze-b2-rcloneview
title: "Proton DriveからBackblaze B2への移行 — RcloneViewによる安全なクラウド転送"
authors:
  - jay
description: "RcloneViewを使ってProton DriveからBackblaze B2にファイルを移動する方法。暗号化されたクラウドストレージのデータを手頃な価格のオブジェクトストレージへ移行するステップバイステップガイド。"
keywords:
  - Proton Drive to Backblaze B2
  - migrate Proton Drive Backblaze
  - Proton Drive cloud migration
  - Backblaze B2 cloud backup
  - RcloneView cloud transfer
  - cloud-to-cloud file migration
  - move files from Proton Drive
  - Backblaze B2 object storage backup
  - Proton Drive export backup
tags:
  - RcloneView
  - proton-drive
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Proton DriveからBackblaze B2への移行 — RcloneViewによる安全なクラウド転送

> RcloneViewを使って、Proton DriveのファイルをBackblaze B2の手頃な価格のオブジェクトストレージに移動しましょう — 手動でのダウンロードは不要です。

Proton Driveは強力なエンドツーエンド暗号化とプライバシー重視のストレージを提供しており、機密性の高い個人データやビジネスデータの保存先として人気があります。ストレージのニーズが拡大したとき、あるいは費用対効果の高いセカンダリバックアップ先が必要になったとき、Backblaze B2へのファイル移行は現実的な選択肢となります。テラバイト単位のRAWファイルをアーカイブするフォトスタジオや、クラウド資産を統合する開発チームは、Protonのプライバシー重視のプライマリストレージに加えて、B2のスケーラブルなオブジェクトストレージの恩恵を受けられます。RcloneViewはこのクラウド間移行を簡単にし、ファイルをまずローカルマシンにダウンロードすることなく、プロバイダー間で直接データをストリーミングします。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Proton DriveとBackblaze B2の接続

移行を行う前に、RcloneViewで両方のクラウドリモートを設定します。まずProton Driveアカウントを追加しましょう。メニューバーのRemoteタブに移動し、New Remoteをクリックします。プロバイダーリストからProton Driveを選択し、Protonアカウントのメールアドレスとパスワードを入力します。二要素認証を有効にしている場合、RcloneViewはセットアップ中に2FAコードの入力を求めます。Proton Driveのサポートにはrclone v1.69以降が必要ですが、RcloneViewに組み込まれたrcloneが自動的に処理します。

次に、Backblaze B2のリモートを追加します。再度New Remoteをクリックし、Backblaze B2を選択します。Backblaze B2コンソールのApp Keysから生成したApplication Key IDとApplication Keyが必要です。移行先として使用する特定のバケットにキーのスコープを限定するか、セットアップ中に新しいバケットを作成する予定であればアカウント全体へのアクセスを許可してください。

<img src="/support/images/en/blog/new-remote.png" alt="Adding Proton Drive and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

両方のリモートを設定したら、RcloneViewのデュアルパネルエクスプローラーで並べて閲覧します。片側でProton Driveのフォルダに、もう片側でB2バケットに移動し、移行を開始する前に両方の接続が正常に機能していることを確認してください。

## 移行ジョブの設定

両方のリモートが接続されたら、Homeタブからジョブマネージャーを開き、新しい同期ジョブまたはコピージョブを作成します。Proton Driveのフォルダをソースに、Backblaze B2のバケットを転送先に設定します。他の転送ジョブと区別できるよう、`proton-to-b2-archive`のようなわかりやすい名前をジョブに付けましょう。

完全な移行を実行する前に、Dry Runオプションを使って、実際にどのファイルが転送されるかを事前に確認します。このシミュレーションでは、データを一切移動せずにコピー対象のファイルの完全なリストが表示されます。これは、大規模なライブラリを移行する際にパスマッピングの問題を早期に発見するために不可欠なステップです。大規模なProton Driveのアーカイブの場合は、Advanced Settingsでチェックサム検証を有効にして、両プロバイダー間でファイルの整合性を確保してください。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Configuring a cloud-to-cloud transfer job from Proton Drive to Backblaze B2" class="img-large img-center" />

ジョブウィザードのStep 2にある同時転送設定でパフォーマンスを調整できます。まずは同時転送数4を妥当な初期値として設定し、移行が問題なく進行していることを確認できたら数値を増やしていくとよいでしょう。

## 転送の監視と検証

移行ジョブを開始すると、RcloneViewの下部パネルにあるTransferringタブに、転送速度、完了したファイル数、合計サイズ、残りのデータ量などのリアルタイムの進行状況が表示されます。数十から数百ギガバイトに及ぶ大規模な移行の場合は、RcloneViewをシステムトレイに最小化し、転送をバックグラウンドで実行させれば、ジョブは中断されることなく継続します。

<img src="/support/images/en/tutorials/wasabi-real-time-monitoring-transferring.png" alt="Real-time transfer monitoring showing Proton Drive to Backblaze B2 migration progress" class="img-large img-center" />

移行が完了したら、Job Historyタブで転送ステータス、移動した合計ファイル数、エラーの有無を確認します。特定のファイルでエラーが報告された場合、ログビューで正確なエラーメッセージを確認することで、権限の問題なのか、ネットワークタイムアウトなのか、ファイル名のエンコーディングの競合なのかを特定できます。

## 継続的なバックアップのスケジュール設定

Proton Driveのデータに対してBackblaze B2を継続的なバックアップ先として利用したいユーザーのために、RcloneView PLUSではcrontab形式のスケジューリングをサポートしています。初回の移行が完了した後、ジョブを編集してStep 4(Scheduling)に移動し、たとえば毎晩午前2時など、繰り返し同期を設定します。スケジュールされたジョブは自動的に実行され、前回の実行以降に新規または変更されたファイルのみをコピーするため、手作業を介さずにB2アーカイブを最新の状態に保つことができます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Scheduling automatic Proton Drive to Backblaze B2 sync in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. Remoteタブ > New Remoteから、メールアドレスとパスワードを入力してProton Driveのリモートを追加します。
3. B2コンソールで取得したApplication Key IDとApplication Keyを使用して、Backblaze B2のリモートを追加します。
4. ジョブマネージャーで、Proton Driveをソース、B2バケットを転送先とする同期ジョブまたはコピージョブを作成します。
5. Dry Runを実行して移行内容をプレビューし、その後フル転送を実行してTransferringタブで進行状況を監視します。

RcloneViewがProton DriveとBackblaze B2の間の接続を処理してくれるので、Protonのプライバシー性とB2の費用対効果に優れたストレージ容量を組み合わせた、信頼性の高いクロスクラウドバックアップ戦略を構築できます。

---

**関連ガイド:**

- [Proton DriveからGoogle Driveへの移行 — RcloneViewによるファイル転送](https://rcloneview.com/support/blog/migrate-proton-drive-to-google-drive-rcloneview)
- [DropboxからProton Driveへの移行 — RcloneViewによるクラウド転送](https://rcloneview.com/support/blog/migrate-dropbox-to-proton-drive-rcloneview)
- [Google DriveからBackblaze B2への移行 — RcloneViewによるクラウド転送](https://rcloneview.com/support/blog/migrate-google-drive-to-backblaze-b2-rcloneview)

<CloudSupportGrid />
