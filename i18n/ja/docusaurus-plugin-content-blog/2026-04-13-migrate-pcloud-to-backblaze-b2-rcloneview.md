---
slug: migrate-pcloud-to-backblaze-b2-rcloneview
title: "pCloudからBackblaze B2への移行 — RcloneViewでファイルを転送する"
authors:
  - tayson
description: "RcloneViewを使ってpCloudからBackblaze B2へファイルを移行する手順ガイド。OAuthとApp Keyで接続し、Dry Runでプレビューしてから同期ジョブを実行します。"
keywords:
  - migrate pCloud to Backblaze B2
  - pCloud Backblaze B2 transfer
  - pCloud migration RcloneView
  - pCloud to B2 sync
  - cloud-to-cloud migration
  - Backblaze B2 archive
  - pCloud backup alternative
  - RcloneView cloud migration
tags:
  - pcloud
  - backblaze-b2
  - cloud-to-cloud
  - migration
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# pCloudからBackblaze B2への移行 — RcloneViewでファイルを転送する

> pCloudからBackblaze B2へ移行すると、大幅に安価なアーカイブストレージが利用できます。RcloneViewはデータをお使いのマシンを経由させることなく、クラウド間で転送を処理します。

pCloudは生涯プランのオプションもある信頼性の高い個人向けクラウドストレージサービスですが、大容量データのアーカイブにはBackblaze B2のGB単位の料金体系の方がコスト効率に優れている場合が多くあります。クラウドサービスを統合する場合でも、B2をアーカイブ層として追加する場合でも、RcloneViewを使えば移行はシンプルです。両方のプロバイダーを接続し、Dry Runでプレビューしてから同期ジョブを実行するだけです。転送はすべてクラウド間で行われます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## ステップ1 — pCloudを接続する

RcloneViewを開き、**Remote Manager**に移動します。**New Remote**をクリックし、プロバイダーリストから**pCloud**を選択します。pCloudはOAuthブラウザログインを使用します。RcloneViewがブラウザを開くので、ログインして認可すると、トークンが保存されます。APIキーを手動で管理する必要はありません。

認可が完了したら、File ExplorerでpCloudのリモートを開き、ファイルやフォルダーが表示されることを確認します。移行したいトップレベルのディレクトリをメモしておきましょう。

<img src="/support/images/en/blog/new-remote.png" alt="Adding pCloud and Backblaze B2 remotes in RcloneView" class="img-large img-center" />

## ステップ2 — Backblaze B2を接続する

**Remote Manager**内で再び**New Remote**をクリックし、**Backblaze B2**を選択します。Backblaze B2は**Application Key ID**と**Application Key**で認証します。どちらもBackblazeコンソールの**App Keys**から確認できます。適切な権限を持つキーを作成してください（対象バケットへの読み書き、または移行の場合はすべてのバケット）。両方の値をRcloneViewに入力して保存します。

B2のリモートを開き、バケットが読み込まれることを確認します。対象のバケットがまだ存在しない場合は、RcloneViewのファイルエクスプローラーでルートレベルを右クリックすることで直接作成できます。

## ステップ3 — 移行ジョブを設定する

**Jobs**に移動し、**New Job**をクリックします。pCloudをソースに設定し、特定のフォルダーまたはルートを選択します。Backblaze B2をデスティネーションに設定し、対象のバケットとパスを選びます。

ジョブウィザードのステップ2で、転送オプションを確認します。

- まず**Dry Run**を有効にして、コピーされる内容を正確に確認する
- **transfers**を4〜8に設定し、速度とAPIの安定性のバランスを取る
- 転送後のファイル整合性を確認したい場合は**チェックサム検証**を有効にする

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Cloud-to-cloud migration from pCloud to Backblaze B2" class="img-large img-center" />

## ステップ4 — Dry Runを実行し、その後実際の移行を行う

Dry Runを有効にした状態で**Run**をクリックします。RcloneViewは、実際に変更を加えることなく、転送されるはずのファイル名、サイズ、件数をログに記録します。**Log**タブで出力内容を確認してください。リストが正しければ、ジョブ設定に戻ってDry Runを無効にし、再度実行します。

実際の移行はクラウド間で実行されます。pCloudはローカルマシンを経由せずにデータをB2へ送信するため、ローカルの帯域幅がボトルネックになることはありません。転送速度は両方のプロバイダーのサーバーに依存します。

<img src="/support/images/en/howto/rcloneview-basic/job-run-click.png" alt="Running the pCloud to Backblaze B2 migration job" class="img-large img-center" />

## 移行の検証

ジョブが完了したら、**Folder Compare**ツールを開き、pCloudのソースとB2のデスティネーションを指定します。RcloneViewは両側を比較し、差異があればハイライト表示します。重要なデータについては、この手順でpCloudからファイルを削除する前に移行が完全であったことを確認できます。

Job Historyには、総ファイル数、転送データ量、所要時間、エラーの有無など、実行全体の記録が残ります。参照用に保管しておいてください。

## はじめに

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. **Remote Manager**で、OAuth経由でpCloudを、Application Key経由でBackblaze B2を接続します。
3. pCloudをソース、B2をデスティネーションとして同期ジョブを作成し、まずDry Runを実行します。
4. Dry Runを無効にして移行を実行し、Folder Compareで検証します。

移行が確認できたら、Backblaze B2はpCloudにあったすべてのデータに対して、耐久性が高くコスト効率の良いアーカイブストレージを提供してくれます。

---

**関連ガイド:**

- [RcloneViewでpCloudをAWS S3にバックアップする](https://rcloneview.com/support/blog/backup-pcloud-to-aws-s3-rcloneview)
- [RcloneViewでpCloudをOneDriveに移行する](https://rcloneview.com/support/blog/migrate-pcloud-to-onedrive-rcloneview)
- [RcloneViewによるチェックサム検証付きクラウド移行](https://rcloneview.com/support/blog/checksum-verified-cloud-migrations-rcloneview)

<CloudSupportGrid />
