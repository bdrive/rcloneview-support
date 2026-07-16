---
slug: manage-jottacloud-cloud-sync-backup-rcloneview
title: "RcloneViewでJottacloudストレージを管理する: 同期、バックアップ、ファイル整理"
authors:
  - tayson
description: RcloneViewでJottacloudを設定し、Google DriveやS3との閲覧・同期、バックアップのスケジュール設定、無制限ストレージの管理をすべてビジュアルインターフェースで行いましょう。
keywords:
  - rcloneview
  - jottacloud
  - jottacloud backup
  - cloud sync
  - jottacloud google drive
  - jottacloud s3
  - rclone GUI
  - unlimited cloud storage
  - scheduled backup
  - multi-cloud management
tags:
  - jottacloud
---

import CloudSupportGrid from '@site/src/components/CloudSupportGrid';
import cloudIcons from '@site/src/contexts/cloudIcons';
import RvCta from '@site/src/components/RvCta';

# RcloneViewでJottacloudストレージを管理する: 同期、バックアップ、ファイル整理

> Jottacloudは定額で無制限のストレージを提供していますが、複数のクラウドをまたいで管理するには適切なツールが必要です。**RcloneView**を使えば、Jottacloudのファイルを他のクラウドと一緒に閲覧、同期、バックアップ、整理できるビジュアルインターフェースが手に入ります。

Jottacloudは、寛大な無制限ストレージプランと欧州の厳格なデータプライバシー基準で知られるノルウェーのクラウドストレージプロバイダーです。個人のバックアップ、写真アーカイブ、ギガバイト単価による予想外の課金なしに大容量ストレージを必要とする企業に人気の選択肢です。

Jottacloudの課題は、独自のエコシステム内で完結している点です。コラボレーションにGoogle Drive、アーカイブにAmazon S3、業務にOneDriveも使っている場合、これらすべてでデータを整理しておくのは手作業の負担になります。RcloneViewは、単一の2ペインGUIでJottacloudを70以上の他のクラウドプロバイダーと一緒に管理できるようにすることで、このギャップを埋めます。

<RvCta imageSrc="/img/rcloneview-preview.png" downloadUrl="https://rcloneview.com/src/download.html" />

<!-- truncate -->

## RcloneViewでJottacloudを管理する理由

Jottacloud純正アプリは基本的なアップロードやダウンロードには問題なく機能しますが、クラウド間をまたぐ機能は備えていません。RcloneViewを使えば、次のことが可能になります。

- **Jottacloudストレージを閲覧** — おなじみのファイルマネージャー形式のレイアウトで、フォルダを移動し、サイズを確認し、ファイルをビジュアルに管理できます。
- **JottacloudをGoogle Drive、OneDrive、S3と同期** — コラボレーションツールに作業用コピーを保持しつつ、Jottacloudにアーカイブできます。
- **自動バックアップのスケジュール設定** — 任意のクラウドからJottacloudの無制限ストレージへ。
- **フォルダ内容をプロバイダー間で比較** — ずれや欠落ファイルを検出できます。
- **ベンダーロックインを回避** — 重要なデータのコピーを複数のサービスに保持できます。

## Jottacloudリモートのセットアップ

RcloneViewにJottacloudを追加するのは簡単です。

1. RcloneViewを開き、**+ New Remote**をクリックします。
2. プロバイダーリストから**Jottacloud**を選択します。
3. OAuthログインフローに従います — Jottacloudのウェブサイトにリダイレクトされ、アクセスを承認します。
4. リモートに名前を付け(例: `MyJottacloud`)、保存します。

すべてのデバイスとマウントポイントを含むJottacloudストレージが、エクスプローラーペインに表示されます。

<img src="/support/images/en/blog/new-remote.png" alt="Adding a Jottacloud remote in RcloneView" class="img-large img-center" />

## ストレージの閲覧と整理

RcloneViewは、2ペインのエクスプローラーでJottacloudのコンテンツを表示します。設定済みのデバイスとそのマウントポイントが表示され、通常は無制限ストレージ用の**Archive**デバイスと、同期フォルダ用の名前付きデバイスが含まれます。

エクスプローラーからは以下が可能です。

- 任意のデバイスやマウントポイント内のフォルダやサブフォルダを**ナビゲート**する。
- アップロード前にアーカイブ構造を整理するために**新しいフォルダを作成**する。
- 不要になった古いファイルを**削除**し、表示をすっきりさせる(容量制限プランではクォータの回復にもなります)。
- 直接比較や転送のために、反対側のペインで**別のクラウドを開く**。

<img src="/support/images/en/blog/cloud-to-cloud-transfer-default.png" alt="Jottacloud and Google Drive side by side in RcloneView" class="img-large img-center" />

## JottacloudとGoogle DriveまたはAmazon S3の同期

最も一般的なユースケースは、Jottacloudをコラボレーション用クラウドやオブジェクトストレージサービスと同期させておくことです。

### JottacloudからGoogle Driveへ

チームがGoogle Driveで作業しているが、手頃な価格のオフサイトコピーが欲しい場合は、Google DriveからJottacloudへの同期を設定します。新規・変更ファイルは、設定したスケジュールに従って自動的に転送されます。

### JottacloudからAmazon S3へ

耐久性が高く地理的に冗長なバックアップのためには、JottacloudのデータをS3バケット(またはWasabiやBackblaze B2のようなS3互換サービス)に同期します。これにより、必要に応じて欧州外に第2のコピーを確保できます。

### 転送方法

- **ドラッグ&ドロップ**: 一方のペインでファイルを選択し、もう一方にドラッグします。一回限りの転送や少量のバッチに最適です。
- **比較してコピー**: フォルダ比較を実行して差分を確認し、欠落または変更されたものだけをコピーします。
- **同期**: フォルダ構造全体をミラーリングします。まずDry Runで変更内容をプレビューしましょう。

<img src="/support/images/en/tutorials/wasabi-drag-and-drop.png" alt="Drag and drop files from Jottacloud to another cloud" class="img-large img-center" />

## 自動バックアップのスケジュール設定

Jottacloudの無制限ストレージは、優れたバックアップ先になります。RcloneViewでは次の手順で設定します。

1. ソースクラウドからJottacloudへの**Copy**または**Sync**ジョブを作成します。
2. **Job Scheduling**パネルを開きます。
3. スケジュールを設定します — アクティブなプロジェクトには毎晩、アーカイブには毎週など。
4. 保存してスケジュールを有効化します。

RcloneViewはジョブを自動的に実行し、**Job History**パネルにすべての実行を記録します。転送件数、エラー、所要時間はいつでも確認できます。

<img src="/support/images/en/howto/rcloneview-advanced/create-job-schedule.png" alt="Schedule a backup job to Jottacloud" class="img-large img-center" />

## 無制限ストレージを効果的に管理する

無制限だからといって整理不要というわけではありません。以下のプラクティスでJottacloudのアーカイブを使いやすく保ちましょう。

- **一貫したフォルダ構造を使う** — ソースのレイアウトをミラーリングするか、日付ベースのディレクトリを使用します(例: `Backups/2026/04/`)。
- **フィルターを設定する** — ストレージを無駄にし転送を遅くする一時ファイル、キャッシュ、システムディレクトリを除外します。
- **定期的な比較を実行する** — ソースとバックアップの間で同期の抜け漏れがないか確認します。
- **ジョブ履歴を監視する** — 失敗した転送がないか確認します。1回のタイムアウトや権限エラーでも、バックアップに欠落が生じる可能性があります。

<img src="/support/images/en/howto/rcloneview-basic/job-history.png" alt="Job history showing completed backup runs" class="img-large img-center" />

## Jottacloudユーザー向けのヒント

- **Jottacloudは大容量アップロードをスロットリングします** — 初めて数テラバイトを移行する場合、最初の同期には時間がかかることを想定しておきましょう。その後の増分実行は高速になります。
- **無制限ストレージには Archive デバイスを使用します。** プランによっては、他のデバイスに異なるクォータルールが適用される場合があります。
- **暗号化と組み合わせる** — Jottacloudのサーバー側保護に加えてクライアント側の暗号化を利用したい場合は、RcloneView内のJottacloudリモートの上にrclone cryptリモートを追加してください。

## 始め方

1. [rcloneview.com](https://rcloneview.com/src/download.html)から**RcloneViewをダウンロード**します。
2. New Remoteウィザードで**OAuth経由でJottacloudを接続**します。
3. Google Drive、S3、OneDriveなど、**他のクラウドを追加**します。
4. **閲覧、同期、スケジュール設定** — 無制限ストレージをビジュアルに管理できます。

Jottacloudが容量を提供し、RcloneViewがコントロールを提供します。

---

**関連ガイド:**

- [RcloneViewによるクラウド間転送と同期](https://rcloneview.com/support/blog/cloud-to-cloud-transfer-sync-rcloneview)
- [Google DriveからAmazon S3への増分バックアップ](https://rcloneview.com/support/blog/incremental-backup-google-drive-to-amazon-s3)
- [RcloneViewによるProton Driveのマルチクラウド同期](https://rcloneview.com/support/blog/proton-drive-multi-cloud-sync-with-rcloneview)

<CloudSupportGrid />
