---
slug: manage-citrix-sharefile-cloud-sync-backup-rcloneview
title: "Citrix ShareFile ストレージを管理 — RcloneViewでファイルを同期・バックアップ"
authors:
  - tayson
description: "RcloneViewでCitrix ShareFileストレージを接続・管理する方法を解説します。単一のGUIからShareFileデータを同期、バックアップ、他のクラウドへ転送できます。"
keywords:
  - Citrix ShareFile
  - ShareFile 同期
  - ShareFile バックアップ
  - ShareFile クラウド管理
  - RcloneView ShareFile
  - エンタープライズファイル同期
  - ShareFile からクラウドへ
  - クラウドストレージ管理
  - ShareFile 移行
  - RcloneView クラウド同期
tags:
  - sharefile
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# Citrix ShareFile ストレージを管理 — RcloneViewでファイルを同期・バックアップ

> Citrix ShareFileをRcloneViewに接続し、90以上の他のクラウドストレージサービスと合わせて、単一のGUIからエンタープライズファイルを管理しましょう。

Citrix ShareFileは、安全なファイル共有と文書管理のために企業やプロフェッショナルサービスチームで広く利用されています。ShareFileは独自のクライアントを提供していますが、複数のクラウドプラットフォームにまたがってファイルを管理するチームには、一元化されたツールが必要になることがよくあります。rcloneをベースに構築されたGUIクライアントであるRcloneViewを使えば、ShareFileをGoogle Drive、OneDrive、Amazon S3などの他のサービスと一緒に、1つのインターフェースから接続できます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## Citrix ShareFileをRcloneViewに接続する

Citrix ShareFileをRcloneViewに追加するには、ShareFileアカウントの認証情報とRoot Folder ID（ルートフォルダID）が必要です。Root Folder IDは、rcloneが接続のルートとして使用するShareFileアカウント内のフォルダを識別するもので、通常はShareFileのWebインターフェースのフォルダプロパティで確認できます。

リモートを設定するには、RcloneViewを開いてRemoteタブに移動し、New Remoteをクリックします。プロバイダ一覧からCitrix ShareFileを選択し、Root Folder IDを含む必要な設定を入力します。RcloneViewにはrcloneバイナリが組み込まれているため、別途rcloneをインストールする必要はありません。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a new Citrix ShareFile remote in RcloneView" class="img-large img-center" />

接続が完了すると、ShareFileはFile Explorer内にリモートとして表示されます。フォルダを閲覧したり、ファイルのメタデータ（名前、サイズ、更新日時）を確認したり、コピー、切り取り、貼り付け、名前変更、削除といった操作を、RcloneViewのインターフェースから離れることなく行うことができます。

## ShareFileを他のクラウドサービスと同期する

RcloneViewを通じてShareFileを管理することの実用的なメリットの1つは、他のクラウドストレージと直接同期できる点です。例えば、法律事務所ではShareFileのクライアントフォルダをAmazon S3に同期して長期保存用にアーカイブしたり、Microsoft 365との連携のためにShareFileの内容をOneDriveにミラーリングしたりできます。

同期ジョブを作成するには、Homeタブの Sync ボタンをクリックし、4ステップのウィザードに従います。ShareFileフォルダをソース（または宛先）として選択し、対象リモートとフォルダを選び、転送オプションを設定して、必要に応じてフィルタリングルールを追加します。Dry Run機能を使えば、実際に同期を実行する前に、どのファイルがコピーまたは削除されるかを正確にプレビューできます。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Syncing Citrix ShareFile to another cloud with RcloneView" class="img-large img-center" />

継続的なデータ保護のために、スケジュールベースの同期（PLUSライセンスで利用可能）を使えば、ShareFileのバックアップをcrontab形式のスケジュール（毎日、毎週、またはカスタム間隔）で実行できます。Job Historyでは、各実行の開始時刻、所要時間、ファイル数、ステータスを追跡できます。

## ShareFileの内容を整理・比較する

RcloneViewのFolder Compare機能は、バックアップ先とShareFileの内容を照合する監査作業に役立ちます。Homeタブの Compare ボタンから起動し、一方にShareFile、もう一方に対象ストレージを選択すると、片方にのみ存在するファイル、サイズが異なるファイル、内容が同一のファイルがハイライト表示されます。

このcompare-firstのワークフローは、移行作業において実用的です。同期を実行する前に比較を行うことで、何がどのように変更されるかを正確に把握できます。より的を絞った監査のためには、Folder Compare with Filter（PLUSライセンス）を使うことで、ファイルタイプやフォルダ名によって比較対象を絞り込むことができ、大規模なShareFileリポジトリを扱う際に便利です。

<img src="/support/images/en/howto/rcloneview-basic/compare-display-select.png" alt="Folder comparison between ShareFile and backup storage in RcloneView" class="img-large img-center" />

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html) から **RcloneView をダウンロード** します。
2. Remoteタブを開いて **New Remote** をクリックし、Citrix ShareFileを選択します。
3. ShareFileの認証情報とRoot Folder IDを入力してセットアップを完了します。
4. Syncウィザードを使って、ShareFileを好みの宛先クラウドにバックアップするジョブを作成します。

他のクラウドサービスと合わせてShareFileを単一のインターフェースから管理することで、コンテキストの切り替えを減らし、バックアップ、移行、ファイル整理のための一貫したワークフローを実現できます。

---

**関連ガイド:**

- [RcloneViewでSharePointのクラウド同期とバックアップを管理する](https://rcloneview.com/support/blog/manage-sharepoint-cloud-sync-backup-rcloneview)
- [RcloneViewでCitrix ShareFileをOneDriveおよびSharePointに移行する](https://rcloneview.com/support/blog/migrate-citrix-sharefile-onedrive-sharepoint-rcloneview)
- [RcloneViewによるクラウド間移行](https://rcloneview.com/support/blog/cloud-to-cloud-migration-rcloneview)

<CloudSupportGrid />
